import styled from "styled-components";
import { createPortal } from "react-dom";

export const Backdrop = ({ onClose }) => {
  return (
    <>
      {createPortal(
        <StyledBackDrop onClick={onClose} />,
        document.getElementById("backdrop")
      )}
    </>
  );
};

export const Modal = ({ onClose, children }) => {
  return (
    <>
      <Backdrop onClose={onClose} />
      {createPortal(
        <>
          <Card>{children}</Card>
        </>,
        document.getElementById("modal")
      )}
    </>
  );
};

const Card = styled.div`
  background-color: #fff;
  padding: 30px;
  min-width: 400px;
  min-height: 200px;
  box-sizing: border-box;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  border-radius: 12px;
`;

const StyledBackDrop = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  z-index: 12;
`;
