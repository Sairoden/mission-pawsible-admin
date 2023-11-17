// React & Libraries
import { format } from "date-fns";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

// Styles
import styled from "styled-components";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineBookmark,
  HiOutlineXCircle,
  HiOutlineTag,
  HiUser,
  HiOutlineScale,
  HiOutlinePaintBrush,
  HiOutlineFlag,
  HiOutlineFunnel,
  HiOutlineHome,
  HiOutlineMegaphone,
} from "react-icons/hi2";

// UI Components
import { DataItem } from "../../ui";

function BookingDataBox({ pet = {} }) {
  const {
    petName,
    petType,
    breed,
    color,
    size,
    gender,
    location,
    microchipped,
    date,
    message,
    description,
    images,

    users: { firstName, lastName, email },
  } = pet;

  const imageSlides = images.map(image => {
    return {
      original: image,
      thumbnail: image,
    };
  });

  return (
    <StyledBookingDataBox>
      <Header>
        <div>
          <HiOutlineBookmark />
          <p>
            Pet Name
            <span>&bull;</span>
            <span>{petName}</span>
          </p>
        </div>

        <p>{format(new Date(date), "EEEE - MMMM dd, yyyy")}</p>
      </Header>

      <Section>
        <Guest>
          <HiUser />
          <p>
            {firstName} {lastName}
          </p>
          <span>&bull;</span>
          <p>{email}</p>
        </Guest>

        <DataItem icon={<HiOutlineTag />} label="Pet Type:">
          {petType}
        </DataItem>

        <DataItem icon={<HiOutlineFlag />} label="Breed:">
          {breed}
        </DataItem>

        <DataItem icon={<HiOutlinePaintBrush />} label="Color:">
          {color}
        </DataItem>

        <DataItem icon={<HiOutlineScale />} label="Size:">
          {size}
        </DataItem>

        <DataItem icon={<HiOutlineFunnel />} label="Gender:">
          {gender}
        </DataItem>

        <DataItem
          icon={
            microchipped === "Yes" ? (
              <HiOutlineCheckCircle />
            ) : (
              <HiOutlineXCircle />
            )
          }
          label="Microchipped?"
        >
          {microchipped}
        </DataItem>

        <DataItem icon={<HiOutlineHome />} label="Location:">
          {location}
        </DataItem>

        <DataItem icon={<HiOutlineMegaphone />} label="Description:">
          {description}
        </DataItem>

        <DataItem
          icon={<HiOutlineChatBubbleBottomCenterText />}
          label="Message:"
        >
          {message}
        </DataItem>

        <ImageGallery items={imageSlides} showPlayButton={false} />
      </Section>
    </StyledBookingDataBox>
  );
}

const StyledBookingDataBox = styled.section`
  /* BOX */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`;

const Header = styled.header`
  background-color: var(--color-brand-500);
  /* padding: 2.4rem 4rem; */
  padding: 2rem 4rem;
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  & span {
    font-family: "Sono";
    font-size: 2rem;
    margin-left: 4px;
  }
`;

const Section = styled.section`
  padding: 3.2rem 4rem 1.2rem;
`;

const Guest = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  /* font-size: 1.8rem; */
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  background-color: ${props =>
    props.isPaid ? "var(--color-green-100)" : "var(--color-yellow-100)"};
  color: ${props =>
    props.isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};

  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }
`;

export default BookingDataBox;
