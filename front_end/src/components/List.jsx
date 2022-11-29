import React from 'react'
import CreateTaskButton from './CreateTaskButton';
import Example from './Example';
import "./List.css";

function List(props) {
  console.log(props);
  return (
    <>
      {/* TODO : create task button should condtionally render depending on the type of list it is */}
      <CreateTaskButton />
      {props.completed && props.notCompleted.map((item) => {
        return (
          <div className="card main-card">
            <div className="card-body">
              <div className='title-properties'>
                <h5 className="card-title">Card title </h5>
                <Example />
              </div>
              <p className='btn-status'>Status</p>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary"><i className="fa-solid fa-trash"></i></a>
            </div>
          </div>
        );
      })}
    </>
  )
}

export default List
