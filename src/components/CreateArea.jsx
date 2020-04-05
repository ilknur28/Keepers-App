import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [animationCreateArea, setAnimationCreateArea] = useState(false);

  function animationOn() {  // function to expand the Note creation area when gets clicked
    return setAnimationCreateArea(true);
  }
  // ------------Handle change on the note-----------

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      // receiving the prev Note
      return {
        ...prevNote,

        // turning the "name" key from string to actual value
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note); //passing the current created note to App.js
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {animationCreateArea && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={animationOn}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={animationCreateArea ? "10" : "1"}
        />
        <Zoom in={animationCreateArea}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
