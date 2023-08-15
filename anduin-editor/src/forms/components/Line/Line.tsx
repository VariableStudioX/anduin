import { useDispatch } from 'react-redux';
import { createElement } from '@variablestudio/convert';
import { LineProps } from '@/typeprops/Line';
import { updateReactElement } from '@/lib/store/simulator';


export default function FormsLine(props: LineProps){
  const { style, anduinID } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <div>height: {style.height}</div>
      <div>backgroundColor: {style.backgroundColor}</div>
      <button
        type="button"
        className="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={() => {
          // 仅用于测试
          
          const tempElement = createElement('Line', { key: anduinID, style: { height: 50, backgroundColor: 'rgb(185 28 28)' }});
          dispatch(updateReactElement(tempElement));

        }}
      >
        更新
      </button>
    </div>
  )
}