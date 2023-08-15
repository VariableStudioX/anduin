import Convert from '@variablestudio/convert';
import { useSelector } from 'react-redux';
import Line from './components/Line/Line';
import { getProtocol } from '@/lib/store/protocol';

const convert = new Convert({
  Line
});

export default function Simple750(){
  const protocol = useSelector(getProtocol);
  return (
    <div>
      { convert.wrap(protocol.body)}
    </div>
  )
}