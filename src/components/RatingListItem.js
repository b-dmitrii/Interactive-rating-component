import styled from "styled-components";

export const RatingListItem = styled.li`
  background-color: ${(props) => (props.active ? "#f58100" : "#2f3539")};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #8993a3;
  }
`;
