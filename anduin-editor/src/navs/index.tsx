import { createElement } from '@variablestudio/convert';
import { addReactElement } from '@/lib/store/protocol';
import { useDispatch } from 'react-redux';

export default function Navs(){
  const dispatch = useDispatch();
  return (
    <div onClick={() => {
      const e = createElement('Line', { style: { height: 2, backgroundColor: 'rgb(148 163 184)'} })
      dispatch(addReactElement(e));
    }}>Line</div>
  )
}