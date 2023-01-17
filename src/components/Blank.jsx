import React from 'react';

const Modal = () => {
    return (
        <>
        <div id="backdrop"></div>
    <div class="modal" id="add-modal">
      <div class="modal__content">
        <label for="title">Movie Title</label>
        <input type="text" name="title" id="title" />
        <label for="image-url">Image URL</label>
        <input type="text" name="image-url" id="image-url" />
        <label for="rating">Your Rating</label>
        <input
          type="number"
          step="1"
          max="5"
          min="1"
          name="rating"
          id="rating"
        />
      </div>
      <div class="modal__actions">
        <button class="btn btn--passive" id="cancel">Cancel</button>
        <button class="btn btn--success" id="add-movie">Add</button>
        <button class="btn btn--update" id="update-movie">Update</button>
      </div>
    </div>
        
        </>
    );
};

export default Modal;