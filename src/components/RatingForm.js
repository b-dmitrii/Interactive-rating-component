import styled from "styled-components";

import { useState } from "react";

import { IoStar } from "react-icons/io5";

import { RatingList } from "./RatingList";
import { RatingListItem } from "./RatingListItem";

import ThankYouIcon from "../assets/image/illustration-thank-you.svg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 320px;
  height: 320px;
  background-color: #232b38;
  box-shadow: 0.5px 0px 10px 5px #2e3236;
  border-radius: 20px;
  padding: 1rem;

  @media (min-width: 767px) {
    width: 350px;
    height: 350px;
    padding: 2rem;
  }
`;

const IconWrapper = styled.div`
  background-color: #2f3539;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormTitle = styled.h1`
  color: white;
  font-weight: 600;
  margin-top: 40px;
`;

const FormDescription = styled.p`
  color: #777e88;
  line-height: 1.5;
`;

const FormSubmitButton = styled.button`
  width: 100%;
  background-color: #f58100;
  padding: 10px 0;
  margin-top: 25px;
  border-radius: 20px;
  border: none;
  outline: none;
  color: white;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;

  &:hover {
    background-color: white;
    color: #f58100;
  }

  &:disabled {
    background-color: #777e88;
    color: white;
  }
`;

const SubmitFormImage = styled.img`
  display: block;
  margin: 0 auto;
`;

const SubmitFormSelected = styled.p`
  display: block;
  width: 200px;
  color: #f58100;
  font-size: 14px;
  padding: 5px 0;
  margin: 0 auto;
  text-align: center;
  margin-top: 30px;
  background-color: #2f3539;
  border-radius: 20px;
`;

const rating = [1, 2, 3, 4, 5];

export const RatingForm = ({ submit, setSubmit }) => {
  const [active, setActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const hundleSelectedItem = (value) => {
    setActive(true);
    setSelectedItem(value);
  };

  return (
    <Container>
      {submit ? (
        <Wrapper
          onClick={() => {
            setSubmit(false);
            setSelectedItem(null);
          }}
        >
          <SubmitFormImage src={ThankYouIcon} alt="thanks icon" />
          <SubmitFormSelected>{`You selected ${selectedItem} out of 5`}</SubmitFormSelected>
          <FormTitle style={{ textAlign: "center" }}>Thank You!</FormTitle>
          <FormDescription style={{ textAlign: "center" }}>
            We appreciate you taking the time to give a rating. If you ever need
            mare support, don't hesitate to get in touch!
          </FormDescription>
        </Wrapper>
      ) : (
        <Wrapper>
          {" "}
          <IconWrapper>
            <IoStar color="#f58100" size={25} />
          </IconWrapper>
          <FormTitle>How did we do?</FormTitle>
          <FormDescription>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </FormDescription>
          <RatingList>
            {rating.map((el, idx) => (
              <RatingListItem
                active={active && idx === selectedItem - 1}
                value={el}
                onClick={(e) => hundleSelectedItem(e.target.value)}
                key={el}
              >
                {el}
              </RatingListItem>
            ))}
          </RatingList>
          <FormSubmitButton
            disabled={!selectedItem}
            onClick={() => setSubmit(true)}
          >
            Submit
          </FormSubmitButton>
        </Wrapper>
      )}
      ;
    </Container>
  );
};
