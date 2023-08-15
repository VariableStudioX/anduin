import { useDispatch, useSelector } from 'react-redux';
import { updateReactElement, getSelected } from '@/lib/store/simulator';
import Line from './components/Line/Line';

export default function Forms(){
  const dispatch = useDispatch();
  const selected = useSelector(getSelected);
  return (
    <div>
      { selected?.type === 'Line' && ( <Line {...selected.props} anduinID={selected.key}/>)}
    </div>
  )
}