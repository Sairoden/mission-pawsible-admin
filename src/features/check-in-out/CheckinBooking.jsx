// // React & Libraries
// import { useEffect, useState } from "react";

// // Styles
// import styled from "styled-components";

// // Features Components
// import { BookingDataBox } from "../index";

// // UI Components
// import {
//   Row,
//   Heading,
//   ButtonGroup,
//   Button,
//   ButtonText,
//   Spinner,
//   Checkbox,
// } from "../../ui";

// // Hooks
// import { useMoveBack } from "../../hooks";
// // import { useBooking } from "../bookings/useBooking";
// import { useCheckin } from "./useCheckin";

// function CheckinBooking() {
//   const [confirmPaid, setConfirmPaid] = useState();
//   const [addBreakfast, setAddBreakfast] = useState(false);
//   // let { booking, isLoading } = useBooking();
//   const { checkin, isCheckingIn } = useCheckin();

//   let booking = [];
//   let isLoading = false;

//   useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

//   const moveBack = useMoveBack();

//   if (isLoading) return <Spinner />;

//   const {
//     id: bookingId,
//     guests,
//     totalPrice,
//     numGuests,
//     hasBreakfast,
//     numNights,
//   } = booking;

//   function handleCheckin() {
//     if (!confirmPaid) return;

//     checkin({ bookingId, breakfast: {} });
//   }

//   return (
//     <>
//       <Row type="horizontal">
//         <Heading as="h1">Check in booking #{bookingId}</Heading>
//         <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
//       </Row>

//       <BookingDataBox booking={booking} />

//       {!hasBreakfast && (
//         <Box>
//           <Checkbox
//             checked={addBreakfast}
//             onChange={() => {
//               setAddBreakfast(breakfast => !breakfast);
//               setConfirmPaid(false);
//             }}
//             id="breakfast"
//           >
//             Want to add breakfast for
//           </Checkbox>
//         </Box>
//       )}

//       <Box>
//         <Checkbox
//           checked={confirmPaid}
//           onChange={() => setConfirmPaid(confirm => !confirm)}
//           id="confirm"
//           disabled={confirmPaid || isCheckingIn}
//         >
//           I confirm that {guests.fullName} has paid the total amount the total
//           amount of
//         </Checkbox>
//       </Box>

//       <ButtonGroup>
//         <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
//           Check in booking #{bookingId}
//         </Button>
//         <Button variation="secondary" onClick={moveBack}>
//           Back
//         </Button>
//       </ButtonGroup>
//     </>
//   );
// }

// const Box = styled.div`
//   /* Box */
//   background-color: var(--color-grey-0);
//   border: 1px solid var(--color-grey-100);
//   border-radius: var(--border-radius-md);
//   padding: 2.4rem 4rem;
// `;

// export default CheckinBooking;
