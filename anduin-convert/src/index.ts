// refer https://github.com/facebook/react/blob/main/packages/react/src/ReactElement.js#L149
// refer https://github.com/facebook/react/blob/main/packages/react/src/ReactElement.js#L362
// refer https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID

import React from "react";

type ReactComponent = React.FunctionComponent | React.ComponentClass;

interface Components{
  [key: string]: ReactComponent;
}

export function createUUID (): string {
  if (typeof crypto === 'object') {
    if (typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID();
    }
    if (typeof crypto.getRandomValues === 'function' && typeof Uint8Array === 'function') {
      const callback = (c) => {
        const num = Number(c);
        return (num ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (num / 4)))).toString(16);
      };
      // @ts-ignore 操作符的编译错误
      return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, callback); 
    }
  }
  let timestamp = new Date().getTime();
  let perforNow = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0;
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let random = Math.random() * 16;
    if (timestamp > 0) {
      random = (timestamp + random) % 16 | 0;
      timestamp = Math.floor(timestamp / 16);
    } else {
      random = (perforNow + random) % 16 | 0;
      perforNow = Math.floor(perforNow / 16);
    }
    return (c === 'x' ? random : (random & 0x3) | 0x8).toString(16);
  });
};

export function isValidElement(element: React.ReactElement<any, string>){
  const { type, props, key } = element;

  if (typeof type === 'string' && typeof key === 'string' && typeof props === 'object' && props !== null) {
    return true;
  }

  return false;
}

export function createElement(type: string, config: any, children?: React.ReactElement<any, string> | React.ReactElement<any, string>[]): React.ReactElement<any, string>{

  const { key, ...props} = config;

  let newKey = key;
  
  if (!key){
    newKey = createUUID();
  }

  if (Array.isArray(children)){
    props.children = children;
  } else {
    if (typeof children !== 'undefined'){
      if (!Array.isArray(props.children)){
        props.children = [];
      }
      props.children.push(children);
    }
  }

  return {
    type,
    props,
    key: newKey as string
  }
}

export default class Convert{
  private components: Components;
  constructor(components={}){
    this.components = components;
  }

  wrap(element: React.ReactElement<any, string> | React.ReactElement<any, string>[]){

    if (Array.isArray(element)){
      const elements: React.ReactNode[] = [];
      for (const children of element) {
        const reactElement = this.wrap(children);
        elements.push(reactElement);
      }
      return elements;
    }
  
    if (!Array.isArray(element)){
      const { type, props, key} = element;
      const { children, ...other} = props;
      if (typeof type === 'string'){
        const compound = { ...other};
        if (key){
          compound['key'] = key;
          compound['anduinID'] = key;
        }
        const component = this.components[type];
        if (!component){
          throw new Error(`${type} 是未注册的组件`);
        }
        if (Array.isArray(children)){
          return React.createElement(component, compound, this.wrap(children));
        }
        return React.createElement(component, compound);
      }
      throw new Error('element.type 的类型不是 string');
    }
  
    return null;
  }
}