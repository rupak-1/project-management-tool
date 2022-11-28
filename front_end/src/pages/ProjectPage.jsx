import React from 'react'
import List from '../components/List'
import Navigation from '../components/Navigation'
import ProjectHeading from '../components/ProjectHeading'
import {useParams} from "react-router-dom"

function ProjectPage() {
  const [Task, SetTasks]  = useState()
  console.log(useParams());
  fetch(`http://localhost:5001/project/${}`)
  
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
