import React, { useState } from 'react'
import List from '../components/List'
import Navigation from '../components/Navigation'
import ProjectHeading from '../components/ProjectHeading'
import { useParams } from "react-router-dom"
import { useEffect } from 'react'

function ProjectPage() {
  const todoIntial = []
  const completeInitial = []
  const [todo, setTodo] = useState(todoIntial)
  const [complete, setComplete] = useState(completeInitial)
  const [currentProject, setCurrentProject] = useState({});
  const [refresh, setRefresh] = useState(false);
  const projectId = useParams();
  const token = localStorage.getItem("Token")

  useEffect(() => {
    fetch(`http://localhost:5001/api/project/${projectId.id}`, {
      method: "GET",
      headers: { 'Content-Type': 'application/json', 'authorization': token }
    }).then(res => res.json()).then(json => {
      if (json.success) {
        setCurrentProject(json.data);
        console.log(json.data.tasks);
        updateStateComplete(json.data.tasks);
        updateStateTodo(json.data.tasks)
      }
    })
  }, [refresh])

  function updateStateComplete(value){
    const newState =  []
     for (let i = 0; i < value.length; i++){
      if (value[i] != null && value[i].status == true){
        newState.push(value[i])
      }
     }
    setComplete(newState);
  }

  function updateStateTodo(value){
    const newState =  []
    for (let i = 0; i < value.length; i++){
     if (value[i] != null && value[i].status == false){
       newState.push(value[i])
     }
    }
    setTodo(newState);
  }

  return (
    <>
      <Navigation />
      <div className="container-fluid">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <ProjectHeading heading = {currentProject.title}  />
        </div>
        <div className="row d-flex align-items-center mt-4 mb-4">
          <ProjectHeading heading="Task" />
        </div>
        <div className='row d-flex align-items-center mt-4 mb-4'>
          <List todo={todo} render={true} setRefresh={() => setRefresh(!refresh)}/>
        </div>
        <div className="row d-flex align-items-center mt-4 mb-4">
          <ProjectHeading heading="Completed" />
        </div>
        <div className='row d-flex align-items-center mt-4 mb-4'>
          <List todo={complete} render={false}setRefresh={() => setRefresh(!refresh)}/>
        </div>
      </div>
    </>
  )
}

export default ProjectPage
