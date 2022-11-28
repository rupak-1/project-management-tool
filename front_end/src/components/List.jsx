import React from 'react'
import CreateTaskButton from './CreateTaskButton';
import "./List.css";

function List() {
  return (
    <>
    {/* TODO : create task button should condtionally render depending on the type of list it is */}
    <CreateTaskButton/>
    <div class="card main-card">
      <div class="card-body">
        <h5 class="card-title">Card title </h5>
        <p className='btn-status'>Status</p>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary"><i class="fa-solid fa-trash"></i></a>
      </div>
   </div>
    </>
  )
}

export default List
