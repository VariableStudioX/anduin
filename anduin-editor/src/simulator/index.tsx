import Simple750 from './Simple750';
import Dynamic750 from './Dynamic750';

export interface SimulatorProps{
  target: string;
}

export default function Simulator(props: SimulatorProps){
  const { target } = props;

  const selector = () => {
    if (target === 'simple-750'){
      return <Simple750 />
    }
    if (target === 'dynamic-750'){
      return <Dynamic750 />
    }
    return null;
  }

  return selector();
}