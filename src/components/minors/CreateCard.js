import React, { useState } from "react";

function CreateCard(content, deletenote) {
  if (content.note !== "NULL") {
    return (
      <Card
        del={deletenote}
        id={content.id}
        key={content.id}
        title={content.title}
        content={content.note}
      />
    );
  }
}

function Card(props) {
  const [editMode, setEditMode] = useState(false);
  const [editContent, setEditContent] = useState(props.content);

  function toggleEditMode() {
    setEditMode(!editMode);
  }

  function saveEdit() {
    console.log("Save edit clicked", props.id, editContent);
    // Add your logic to save the edited content, e.g., send it to a localStorage
    setEditMode(props.content);
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
                <button value={editContent} onClick={saveEdit}>Save</button>
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