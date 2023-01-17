import React from "react";
import styled from "styled-components";
import NewMovieModal from "../new-movie/NewMovieModal";
import Button from "../UI/button/Button";
import { useState } from "react";

const Header = ({ onNewMovieAdd }) => {
  const [isModalvisible, setModalVisible] = useState(false);
  const toggleModalHandler = () => {
    setModalVisible((prevState) => !prevState);
    // console.log('btn was clicked');
  };
  return (
    <>
      <StyledHeader>
        <Title>Favorite Movies</Title>
        {isModalvisible ? (
          <NewMovieModal
            onNewMovieAdd={onNewMovieAdd}
            onClose={toggleModalHandler}
          />
        ) : null}
        <Button
        
          onClick={toggleModalHandler}
          // onNewMovieAdd={onNewMovieAdd}
          color=" #f67722"
        >
          ADD MOVIE
        </Button>
      </StyledHeader>
    </>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  background: #00329e;
  box-sizing: border-box;
`;

const Title = styled.h2`
  margin: 0;
  color: white;
  font-size: 1.5rem;
  box-sizing: border-box;
`;

// const AddMovieButton =styled.button`
//     font: inherit;
//     padding: 0.5rem 1rem;
//     background: #f67722;
//     border: 1px solid #f67722;
//     color: white;
//     border-radius: 6px;
//     box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
//     cursor: pointer;
//     box-sizing: border-box;

//   &:hover,
//   &:active {
//     background: #f3cc4b;
//     border-color: #f3cc4b;
//     color: #995200;
//   }
// `
