import React, { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import "./CreateTaskButton.css";
import { useParams } from "react-router-dom"

function CreateTaskButton(props) {
  const [formClosed, setFormClosed] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const projectId = useParams().id;
  function handleClosed() {
    setFormClosed(false)
  }
  function handleSubmit() {
    setFormClosed(true)
  }
  function handleCreate() {
    const token = localStorage.getItem("Token")
    fetch(`http://localhost:5001/api/project/task`, {
      method: "PUT",
      body: JSON.stringify({
        "_id": projectId,
        "task":
        {
          "description": description,
          "status": false,
          "title": title
        }
      }),
      headers: { 'Content-Type': 'application/json', 'authorization': token }
    }).then(res => res.json()).then(data => {
      if (data.success) {
        handleSubmit()
        props.setRefresh()
      }
    })
  }

  return (
    <>
      {formClosed && <div className="d-sm-flex" onClick={handleClosed} style={{ cursor: "pointer" }} >
        <i className="fa-solid fa-plus" />
        <p className='text-content'>add another task</p>
      </div>}
      {!formClosed && <div class="card main-card">
        <div class="card-body">
          <TextareaAutosize placeholder='Enter project title' autoFocus required onChange={e => setTitle(e.target.value)} style={{ resize: "none", width: "100%", overflow: "hidden" }} />
          <TextareaAutosize placeholder='Enter project description' required onChange={e => setDescription(e.target.value)} style={{ resize: "none", width: "100%", overflow: "hidden" }} />
          <a href="#" class="btn btn-primary" onClick={handleCreate}>Create Task</a>
        </div>
      </div>}
    </>
  )
}

export default CreateTaskButton
