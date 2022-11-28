import React from 'react'
import Navigation from '../components/Navigation'
import ProjectsTable from '../components/ProjectsTable'
import RecentProjects from '../components/RecentProjects'

function Projects() {
  return (
    <div>
      <Navigation/>
      <RecentProjects/>
      <ProjectsTable/>

    </div>
  )
}

export default Projects
