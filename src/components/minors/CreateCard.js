import React, { useState } from "react";

function CreateCard(notes, setNotes, content, deletenote) {
  if (content.note !== "NULL") {
    return (
      <Card
        del={deletenote}
        id={content.id}
        key={content.id}
        title={content.title}
        content={content.note}
        notes={notes}
        setNotes={setNotes}
      />
    );
  }
}

function Card(props) {
  console.log("Card props", props);
  const [editMode, setEditMode] = useState(false);
  const [editContent, setEditContent] = useState(props.content);

  function toggleEditMode() {
    setEditMode(!editMode);
  }

  function saveEdit() {
    console.log("Save edit clicked", props.id, editContent);

    console.log("props.notes", props.notes);
    console.log("props.id", props.id);

    const updatedNotes = props.notes.map((note) => {
      if (note.id === props.id) {
        return { ...note, note: editContent };
      }
      return note;
    });

    console.log("updatedNotes", updatedNotes);

    props.setNotes(updatedNotes);

    // Add your logic to save the edited content, e.g., send it to localStorage
    setEditMode(false);
  }

  function cancelEdit() {
    console.log("Cancel edit clicked", props.id, props.content);
    setEditMode(false);
  }

  function taskDelete() {
    props.del(props.id);
  }

  return (
    <div>
      <div className="col s12 m3">
        <div className="card white lighten">
          <div className="card-content black-text">
            <span className="card-title">{props.title}</span>
            {editMode ? (
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
              />
            ) : (
              <p className="text-justify">{props.content}</p>
            )}
          </div>
          <div className="card-action blue-text">
            {editMode ? (
              <div>
                <button value={editContent} onClick={saveEdit}>
                  Save
                </button>
                <button onClick={cancelEdit}>Cancel</button>
              </div>
            ) : (
              <a
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  marginRight: "5px",
                }}
                className="blue-text text-lighten-3"
                href="#"
              >
                <i
                  onClick={taskDelete}
                  className="small material-icons tooltipped"
                  data-position="top"
                  data-tooltip="Delete"
                >
                  delete
                </i>
                <i
                  style={{ marginRight: "10px", fontSize: "1.8em" }}
                  className="small material-icons tooltipped"
                  data-position="top"
                  data-tooltip="Copy To Clipboard"
                  onClick={toggleEditMode}
                >
                  edit
                </i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCard;
