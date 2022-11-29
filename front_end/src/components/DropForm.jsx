import { useState, useRef } from 'react';
import { decodeToken } from 'react-jwt';

function DropForm(props) {
    const token = localStorage.getItem("Token");
    const decodedToken = decodeToken(token);

    const projectFormInitialData = {
        title: '',
        description: '',
        tasks: [],
        deadline: '',
        creator_id: decodedToken._id
    }

    const ref = useRef(null);

    const [projectFormData, setProjectFormData] = useState(projectFormInitialData);
    //function to setCarFormData based on input
    const handleInputChange = (e) => {
        var { name, value } = e.target;
        setProjectFormData({
            ...projectFormData,
            [name]: value,
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const token = localStorage.getItem("Token");

        await fetch("http://localhost:5001/api/project", {
            method: "POST",
            body: JSON.stringify(projectFormData),
            headers: { 'Content-Type': 'application/json', 'authorization': token }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    console.log(data.data)
                    setProjectFormData(projectFormInitialData);
                    ref.current.click();
                    props.setRefresh();
                }
            });
    }
        ;

    return (
        <>
            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" ><i className="fa-solid fa-plus"></i></button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">New Project</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={ref}></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label for="ProjectTitle" className="form-label">Project Title</label>
                                    <input type="text" className="form-control" id="ProjectTitle" aria-describedby="Project" name='title' value={projectFormData.title} onChange={handleInputChange} required={true} />
                                </div>
                                <div className="mb-3">
                                    <label for="ProjectDescription" className="form-label">Description</label>
                                    <textarea type="text" className="form-control" id="ProjectDescription" name='description' value={projectFormData.description} onChange={handleInputChange} required={true} />
                                </div>
                                <div className="mb-3">
                                    <label for="ProjectDeadline" className="form-label">Deadline</label>
                                    <input type="date" className="form-control" id="ProjectDeadline" name='deadline' value={projectFormData.deadline} onChange={handleInputChange} required={true} />
                                </div>
                                <button type="submit" className="btn btn-primary" >Create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DropForm;