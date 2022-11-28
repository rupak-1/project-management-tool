import "./ProjectsTable.css";
import {Link} from 'react-router-dom';

function ProjectsTable(props) {
    const getDate = (date) => {
        const dateObj = new Date(date);
        const localDate = dateObj.toLocaleDateString();
        return localDate;
    }

    const handleDelete = async (id) => {
        const token = localStorage.getItem("Token");

        await fetch("http://localhost:5001/api/project", {
            method: "DELETE",
            body: JSON.stringify({ _id: id }),
            headers: { 'Content-Type': 'application/json', 'authorization': token }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    props.setRefresh();
                }
            });

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
                            return (<tr key={project._id}>
                                <td><Link type="button" className="btn btn-outline-dark btn-sm" to={`/project/${project._id}`}>{project.title}</Link></td>
                                <td>{getDate(project.createdAt)}</td>
                                <td>{getDate(project.deadline)}</td>
                                <td>
                                    <i type="button" onClick={() => handleDelete(project._id)} class="fa-solid fa-trash ms-3"></i>
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