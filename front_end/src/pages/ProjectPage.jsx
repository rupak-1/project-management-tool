import React, { useState } from 'react'
import List from '../components/List'
import Navigation from '../components/Navigation'
import ProjectHeading from '../components/ProjectHeading'
import { useParams } from "react-router-dom"
import { useEffect } from 'react'

function ProjectPage() {
  const [task, setTasks] = useState([])
  const [todo, setTodo] = useState([])
  const [complete, setComplete] = useState([])
  const [currentProject, setCurrentProject] = useState({});
  const projectId = useParams();
  const token = localStorage.getItem("Token")

  useEffect(() => {
    fetch(`http://localhost:5001/api/project/${projectId.id}`, {
      method: "GET",
      headers: { 'Content-Type': 'application/json', 'authorization': token }
    }).then(res => res.json()).then(data => {
      if (data.success) {
        setTasks(data.data.tasks);
        setCurrentProject(data.data);
        const completedTasks = task.filter((task) => task.status === true)
        setComplete(completedTasks)
        console.log(complete)
        const notCompletedTasks = task.filter((task) => task.status !== true)
        setTodo(notCompletedTasks);
        console.log(todo)
      }
    })
  }, [complete,task,todo, projectId.id, token])


  






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
          <List todo={todo} render={true}/>
        </div>
        <div className="row d-flex align-items-center mt-4 mb-4">
          <ProjectHeading heading="Completed" />
        </div>
        <div className='row d-flex align-items-center mt-4 mb-4'>
          <List todo={complete} render={false}/>
        </div>
      </div>
    </>
  )
}

export default ProjectPage
