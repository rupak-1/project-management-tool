import React, {useState} from 'react'
import List from '../components/List'
import Navigation from '../components/Navigation'
import ProjectHeading from '../components/ProjectHeading'
import {useParams} from "react-router-dom"
import { useEffect } from 'react'

function ProjectPage() {
  const [task, setTasks]  = useState()
  const projectId = useParams();  
  const token = localStorage.getItem("Token")

 
  fetch(`http://localhost:5001/project/${projectId.id}`,{
    method: "GET",
    headers: {'Content-Type': 'application/json', 'authorization': token}
   }).then(res => res.json()).then(data => {
    if(data.success){
      setTasks(data.data.tasks)
    }
   })


  // fetch("http://localhost:5001/project"{
  //   method: "GET",
  //   body: JSON.stringify({
  //     _id:useParams
  //   }),
  //   headers: {'Content-Type': 'application/json', 'authorization': token}
  //   .then(res => res.json())
  //   .then(data =>{
  //     if(data.success){
  //       setTasks(data.data.tasks)
  //     }
  //   })
  // }

  // } )


  // fetch(`http://localhost:5001/project/tasks`, {
  //   method: "POST",
  //   body: JSON.stringify({
  //     _id: useParams,
  //     {description: }
  //   })

  // })
  
  return (
    <>
    <Navigation/>
    <div className= "container-fluid">
        <div className="row d-flex align-items-center mt-4 mb-4">
            <ProjectHeading heading = "Build a project mangement tool"  />
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
