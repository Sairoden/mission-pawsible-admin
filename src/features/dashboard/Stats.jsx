// Styles
import {
  HiOutlineSignal,
  HiOutlineTag,
  HiOutlineTrophy,
  HiOutlineChartBar,
} from "react-icons/hi2";

// Features Components
import { Stat } from "../index";

function Stats({ numLostPets, numFoundPets, numReunitedPets, numTotalPets }) {
  return (
    <>
      <Stat
        title="Lost Pets"
        color="red"
        icon={<HiOutlineTag />}
        value={numLostPets}
      />
      <Stat
        title="Found Pets"
        color="green"
        icon={<HiOutlineSignal />}
        value={numFoundPets}
      />
      <Stat
        title="Reunited Pets"
        color="blue"
        icon={<HiOutlineTrophy />}
        value={numReunitedPets}
      />
      <Stat
        title="Total Pets"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={numTotalPets}
      />
    </>
  );
}

export default Stats;
