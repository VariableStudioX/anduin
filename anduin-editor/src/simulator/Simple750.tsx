import Convert from '@variablestudio/convert';
import { useSelector, useDispatch } from 'react-redux';
import Line from './components/Line/Line';
import { getProtocol, removeReactElement, getSelected } from '@/lib/store/simulator';

const convert = new Convert({
  Line
});

export default function Simple750(){
  const protocol = useSelector(getProtocol);
  const dispatch = useDispatch();
  
  // 仅用于测试
  const selected = useSelector(getSelected);
  //

  return (
    <div className="p-2.5">
      { convert.wrap(protocol.body)}
      <button
        type="button"
        className="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={() => {
          dispatch(removeReactElement(selected?.key));
        }}
      >
        删除
      </button>
    </div>
  )
}