import './RecentProjects.css';
import DropForm from './DropForm';
import { Link } from 'react-router-dom'

function RecentProjects(props) {
    const getDate = (date) => {
        const dateObj = new Date(date);
        const localDate = dateObj.toLocaleDateString();
        return localDate;
    }
    return (
        <div>
            <div className='d-flex justify-content-between mx-4 my-3'>
                <h3 className="mt-2 mb-1 text-secondary">Recently Worked</h3>
                <DropForm setRefresh = {props.setRefresh} />
            </div>
            <div className="card-group mx-4 justify-content-start">
                {props.projects && props.projects.map((project) => {
                    return (
                        <div className="card text-center justify-content-start align-content-start" key={project._id}>
                            <div className="card-header bg-dark text-white">
                                <h4> {project.title} </h4>
                            </div>
                            <div className="card-body bg-light">
                                <p>{project.description}</p>
                                <h6>Deadline: {getDate(project.deadline)}</h6>
                                <h6>Tasks completed: 3 / 8</h6>
                                <Link to={`/project/${project._id}`} className="btn btn-dark mt-2"><i className="fa-solid fa-right-long"></i></Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RecentProjects;