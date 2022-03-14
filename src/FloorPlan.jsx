import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = (props) => {
  return ( 
    <div>
      <Kitchen />
      <LivingRoom />
      <Bedroom />
      <Bath />
    </div>
   );
}
 
export default FloorPlan;