import React ,{useState} from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import "./CreateTaskButton.css";
function CreateTaskButton() {
  const [formClosed, setFormClosed] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  function handleClosed(){
    setFormClosed(false)
  }

  function handleSubmit(){
    setFormClosed(true)
  }
 
  return (
    <>
    {formClosed && <div className="d-sm-flex" onClick={handleClosed} style={{cursor:"pointer"}} >
        <i className="fa-solid fa-plus"/>
        <p className='text-content'>add another task</p>
    </div>} 
    {!formClosed && <div class="card main-card">
      <div class="card-body">
        <TextareaAutosize placeholder='Enter project title' autoFocus required onChange={e => setTitle(e.target.value)} style={{resize:"none",width:"100%",overflow:"hidden"}} />
        <TextareaAutosize placeholder='Enter project description' required onChange={e => setDescription(e.target.value)} style={{resize:"none",width:"100%",overflow:"hidden"}} />
        <a href="#" class="btn btn-primary" onClick={handleSubmit}>Create Task</a>
      </div>
   </div>}
    </>
    
  )
}

export default CreateTaskButton
