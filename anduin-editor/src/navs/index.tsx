import { createElement } from '@variablestudio/convert';
import { addReactElement } from '@/lib/store/simulator';
import { useDispatch } from 'react-redux';

let index = 1;
export default function Navs(){
  const dispatch = useDispatch();
  return (
    <div onClick={() => {
      const element = createElement('Line', { style: { height: index++, backgroundColor: 'rgb(148 163 184)'} })
      dispatch(addReactElement(element));
    }}>Line</div>
  )
}