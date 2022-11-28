import "./ProjectsTable.css";

function ProjectsTable() {
    return (
        <div className="card mx-4 mt-5">
            <div className="card-header">
                <h3 className="text-secondary">All Projects</h3>
            </div>
            <div className="card-body bg-light">
                <table width="100%">
                    <thead>
                        <tr className="bg-dark">
                            <td>Project Title</td>
                            <td>Deadline</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>UI//UX Design</td>
                            <td>UI Team</td>
                            <td><span className='status'></span> review </td>
                        </tr>
                        <tr>
                            <td>Web Development</td>
                            <td>Frontend</td>
                            <td><span className='status'></span> in progress </td>
                        </tr>
                        <tr>
                            <td>Ushop App</td>
                            <td>Mobile Team</td>
                            <td><span className='status'></span> pending </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProjectsTable;