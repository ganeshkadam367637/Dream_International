import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Comp1() {
    const [toastText, setToastText] = useState(0);
    const [timeout, setTimeout] = useState(7000); 

    const notify = () => {
        setToastText(prevToastText => prevToastText + 1);
        toast.success(`Testing: ${toastText + 1}`, {
            position: "bottom-center",
            autoClose: timeout,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            
        });
    };
    const handlechange = (event) => {
        setTimeout(event.target.value);
    }

    const handlesubmit = () => {
        setTimeout(timeout*1000);

    }

    return (
        <div className="d-flex flex-column">
            <div className="container mt-4 flex-grow-1 p-5">
                <button className="btn me-2  bg-primary p-1 fs-4 rounded border border-transparent" onClick={notify}>Show Toast Message</button>
                <button className="btn shadow bg-white ms-2" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                    <i className="fa-solid fa-gear text-dark"></i>
                </button>
            </div>
                <ToastContainer />

                <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className='d-flex justify-content-between'>
                                    <h1 className="modal-title fs-5" id="exampleModalToggleLabel"> </h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div className='d-flex mt-3'>
                                    <div>
                                        <label htmlFor="">Set Timeout : </label>
                                    </div>
                                    <div>
                                        <input type="number" className='form-control ms-5' onChange={handlechange}/>
                                    </div>
                                </div>

                                <br />
                                <div className='text-center mt-3'>
                                    <button className="btn btn-warning pe-5 ps-5" data-bs-dismiss="modal" aria-label="Close" onClick={handlesubmit}>Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Comp1;