const Bath = (props) => {
  const bathroom = ['Full', 'Half']
  return ( 
    bathroom.map(bathroo => {
      return <div>{bathroo} Bath</div>
    })
   );
}
 
export default Bath;