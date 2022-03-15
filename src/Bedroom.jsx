// const Bedroom = (props) => {
//   const bedNum = [1, 2, 3]
//   return (
//     bedNum.map(num => {
//       return <div>Bedroom {num}</div>
//     })
//   )
// }

const Bedroom = (props) => {
  return ( 
    <div className='bedroom' id={`bedroom-${props.bedNum}`}>Bedroom {props.bedNum}</div>
   );
}

export default Bedroom;
