const LineDescribe = {
  type: 'Line',
  props: {
    height: 2,
    backgroundColor: 'rgb(148 163 184)'
  },
  key: 'Line-random'
}

export interface LineProps{
  style: {
    height: number;
    backgroundColor: string;
  }
}

export default function Line(props: LineProps){
  const { style } = props;
  return (
    <div className="w-full" style={{ 
      height: `${style.height}px`,
      backgroundColor: style.backgroundColor
    }}
    />
  )
}