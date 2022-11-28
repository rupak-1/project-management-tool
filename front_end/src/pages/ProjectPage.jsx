import React, {useState} from 'react'
import List from '../components/List'
import Navigation from '../components/Navigation'
import ProjectHeading from '../components/ProjectHeading'
import {useParams} from "react-router-dom"
import { useEffect } from 'react'

function ProjectPage() {
  const [task, setTasks]  = useState([])
  const [todo, setTodo] = useState([])
  const [complete, setComplete] = useState([])
  const [currentProject, setCurrentProject] = useState({});
  const projectId = useParams();  
  const token = localStorage.getItem("Token")

  useEffect(() => {
    fetch(`http://localhost:5001/api/project/${projectId.id}`,{
    method: "GET",
    headers: {'Content-Type': 'application/json', 'authorization': token}
   }).then(res => res.json()).then(data => {
    if(data.success){
        setTasks(data.data.tasks)
        setCurrentProject(data.data)
    }
   })
  }, [])
   
  const completedTasks = task.filter((task) => task.status === true)
  console.log(completedTasks);
  
  for(let i = 0; i < task.length; i++){
    if (task[i].status === false){
      {/* false if not completed */}

    }
  }



  
  return (
    <>
    <Navigation/>
    <div className= "container-fluid">
        <div className="row d-flex align-items-center mt-4 mb-4">
            <ProjectHeading heading = {currentProject.title}  />
        </div>
        <div className="row d-flex align-items-center mt-4 mb-4">
            <ProjectHeading heading = "Task" />
        </div>
        <div className='row d-flex align-items-center mt-4 mb-4'>
            <List/>
        </div>
        <div className="row d-flex align-items-center mt-4 mb-4">
            <ProjectHeading heading = "Completed" />
        </div>
        <div className='row d-flex align-items-center mt-4 mb-4'>
            <List/>
        </div>
    </div>
    </>
  )
}

export default ProjectPage
