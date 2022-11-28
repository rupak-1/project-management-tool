import './RecentProjects.css'
function RecentProject() {
    return (
        <div>
            <div className='d-flex justify-content-between mx-4 my-3'>
                <h3 className="mt-2 mb-1 text-secondary">Recent Projects</h3>
                <button type="button" className="btn btn-secondary"><i className="fa-solid fa-plus"></i></button>
            </div>
            <div className="card-group mx-4">
                <div className="card text-center">
                    <div className="card-header bg-dark text-white">
                        <h4>Front End </h4>
                    </div>
                    <div className="card-body bg-light">
                        <p>Create an app for something that's useful</p>
                        <h6>Deadline: 9 / 11</h6>
                        <h6>Tasks completed: 3 / 8</h6>
                        <a href="#" className="btn btn-dark mt-2"><i className="fa-solid fa-right-long"></i></a>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="card-header bg-dark text-white">
                        <h4>Front End </h4>
                    </div>
                    <div className="card-body bg-light">
                        <p>Create an app for something that's useful</p>
                        <h6>Deadline: 9 / 11</h6>
                        <h6>Tasks completed: 3 / 8</h6>
                        <a href="#" className="btn btn-dark mt-2"><i className="fa-solid fa-right-long"></i></a>
                    </div>
                </div><div className="card text-center">
                    <div className="card-header bg-dark text-white">
                        <h4>Front End </h4>
                    </div>
                    <div className="card-body bg-light">
                        <p>Create an app for something that's useful</p>
                        <h6>Deadline: 9 / 11</h6>
                        <h6>Tasks completed: 3 / 8</h6>
                        <a href="#" className="btn btn-dark mt-2"><i className="fa-solid fa-right-long"></i></a>
                    </div>
                </div><div className="card text-center">
                    <div className="card-header bg-dark text-white">
                        <h4>Front End </h4>
                    </div>
                    <div className="card-body bg-light">
                        <p>Create an app for something that's useful</p>
                        <h6>Deadline: 9 / 11</h6>
                        <h6>Tasks completed: 3 / 8</h6>
                        <a href="#" className="btn btn-dark mt-2"><i className="fa-solid fa-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentProject;