const Bedroom = (props) => {
  const bedNum = [1,2,3]
  return ( 
    bedNum.map(num => {
      <div>Bedroom {num}</div>
    })
   );
}
 
export default Bedroom;