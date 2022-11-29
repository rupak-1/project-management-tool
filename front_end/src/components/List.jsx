import React from 'react'
import CreateTaskButton from './CreateTaskButton';
import Example from './Example';
import "./List.css";
import { useParams } from "react-router-dom"

function List(props) {
  const projectId = useParams().id;

  function handledelete(item) {
    const token = localStorage.getItem("Token")
    fetch(`http://localhost:5001/api/project/task`, {
      method: "DELETE",
      body: JSON.stringify({
        "_id": projectId,
        "task_id": item
      }),
      headers: { 'Content-Type': 'application/json', 'authorization': token }
    }).then(res => res.json()).then(data => {
      if (data.success) {
        props.setRefresh();
      }
    })
  }

  return (
    <>
      <div className='boxy'>
        {props.render && <CreateTaskButton />}
        {props.todo.map((item, index) => {
          return (
            <div className="card main-card">
              <div className="card-body">
                <div className='title-properties'>
                  <h5 className="card-title">{item.title} </h5>
                  {props.render && <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>}
                </div>
                <p className='btn-status'>{item.status}</p>
                <p className="card-text">{item.description}</p>
                {props.render && <a href="#" className="btn btn-primary" onClick={() => handledelete(item._id)}><i className="fa-solid fa-trash"></i></a>}
              </div>
            </div>
          );
        })}
      </div>

    </>
  )
}

export default List
