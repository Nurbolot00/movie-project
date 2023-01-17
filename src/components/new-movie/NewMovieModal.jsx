import React from "react";
import { Modal } from "../Modal";
import Button from "../UI/button/Button";
import { useRef } from "react";
import FormInput from "../UI/form-input/FormInput";

const NewMovieModal = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const ratingInputRef = useRef();

  const cancelHanlder = (event) => {
    event.preventDefault();
    props.onClose();
  };

  const saveHandler = (event) => {
    event.preventDefault();
    props.onClose();
    const movieData = {
      id: Date.now(),
      title: titleInputRef.current.value,
      rating: ratingInputRef.current.value,
      img: imageInputRef.current.value,
    };
    props.onNewMovieAdd(movieData);
  };

  return (
    <Modal>
      <form action="">
        <FormInput
          id="title"
          labelName="Movie title"
          inputType="text"
          placeholder="Введите название"
          ref={titleInputRef}
        />

        <FormInput
          id="image"
          labelName="Image URL"
          inputType="text"
          placeholder="Введите URL картинки"
          ref={imageInputRef}
        />

        <FormInput
          id="rating"
          labelName="Your Rating"
          inputType="text"
          placeholder=".../5"
          ref={ratingInputRef}
        />
        <Button color="red" onClick={cancelHanlder}>
          Cancel
        </Button>
        <Button color="#00329e" onClick={saveHandler}>
          Save
        </Button>
      </form>
    </Modal>
  );
};

export default NewMovieModal;
