// Features Components
import CreateCabinForm from "./CreateCabinForm";

// UI Components
import { Button, Modal } from "../../ui";
import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open opens="table">
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>
    </Modal>
  );
}

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   const handleModalToggle = () => setIsOpenModal(prevModal => !prevModal);

//   return (
//     <>
//       <Button onClick={handleModalToggle}>Add new Cabin</Button>
//       {isOpenModal && (
//         <Modal handleCloseModal={handleModalToggle}>
//           <CreateCabinForm handleCloseModal={handleModalToggle} />
//         </Modal>
//       )}
//     </>
//   );
// }

export default AddCabin;
