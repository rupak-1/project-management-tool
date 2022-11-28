import "./ProjectsTable.css";

function ProjectsTable(props) {
    const getDate = (date) => {
        const dateObj = new Date(date);
        const localDate = dateObj.toLocaleDateString();
        return localDate;
    }
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
                            <td> Project Started </td>
                            <td>Deadline</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {props.projects && props.projects.map((project) => {
                            return (<tr>
                                <td>{project.title}</td>
                                <td>{getDate(project.createdAt)}</td>
                                <td>{getDate(project.deadline)}</td>
                                <td>
                                    <i type="button" onClick={() => console.log("cccd")} class="fa-solid fa-trash ms-3"></i>
                                </td>
                            </tr>)
                        })}
                        {props.projects === null && <h4>Your Projects Will Appear Here</h4>}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProjectsTable;