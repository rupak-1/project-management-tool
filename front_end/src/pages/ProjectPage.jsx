import React, { useState } from 'react'
import List from '../components/List'
import Navigation from '../components/Navigation'
import ProjectHeading from '../components/ProjectHeading'
import { useParams } from "react-router-dom"
import { useEffect } from 'react'

function ProjectPage() {
  const [tasks, setTasks] = useState([])
  const [todo, setTodo] = useState([])
  const [complete, setComplete] = useState([])
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
        setTasks(json.data.tasks);
        setCurrentProject(json.data);
        const completedTasks = tasks.filter((task) => task.status === true)
        setComplete(completedTasks)

        const notCompletedTasks = tasks.filter((task) => task.status !== true)
        setTodo(notCompletedTasks);
      }
    })
  }, [refresh])


  






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
