import React from 'react'
import List from '../components/List'
import ProjectHeading from '../components/ProjectHeading'

function Project() {
  return (
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
  )
}

export default Project
