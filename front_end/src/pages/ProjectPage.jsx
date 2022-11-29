import React, { useState } from 'react'
import List from '../components/List'
import Navigation from '../components/Navigation'
import ProjectHeading from '../components/ProjectHeading'
import { useParams } from "react-router-dom"
import { useEffect } from 'react'

function ProjectPage() {
  const [tasks, setTasks] = useState([])
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
        console.log({...json.data})
        setTasks(json.tasks);
        console.log(tasks);
        setCurrentProject((prev) => {
          const modified = JSON.parse(Object.assign({}, json.data))
          console.log("Sf" + modified);
          console.log({a: 3})
          return {...prev, ...json.data}
        })
        console.log(currentProject);
        // const completedTasks = tasks.filter((task) => task.status === true)
        // setComplete((prev) => [...prev, ...completedTasks])

        // const notCompletedTasks = tasks.filter((task) => task.status !== true)
        // setTodo((prev) => [...prev, ...notCompletedTasks]);
        // console.log(completedTasks);
        // console.log(notCompletedTasks);
      }
    })
  }, [refresh])


  const getTasks = (completed) => {
    if (!currentProject || !currentProject.tasks) return []
    return currentProject.tasks.filter((task) => task.status === completed)
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
          <List todo={getTasks(false)} render={true} setRefresh={() => setRefresh(!refresh)}/>
        </div>
        <div className="row d-flex align-items-center mt-4 mb-4">
          <ProjectHeading heading="Completed" />
        </div>
        <div className='row d-flex align-items-center mt-4 mb-4'>
          <List todo={getTasks(true)} render={false}setRefresh={() => setRefresh(!refresh)}/>
        </div>
      </div>
    </>
  )
}

export default ProjectPage
