import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Comp2() {
  const [toastText, setToastText] = useState('');
  const [count, setCount] = useState(7000); 
const [tostcount,settoastcount]=useState(1)

const notify = () => {
    toast.success(`${toastText} : ${tostcount}`, {
      position: "bottom-center",
      autoClose: count,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      
    });
    settoastcount(prevCount => prevCount + 1); 
  };


  const handleChange = (event) => {
    setToastText(event.target.value);
  };

  const handleCountChange = (event) => {
    setCount(parseInt(event.target.value) * 1000); 
  };

  return (
    <div className="d-flex flex-column">
      <main className="container mt-4 p-5">
        <div className="row">
          <div className="col-md-3">
            <label htmlFor="customToastText" className="mb-3 w-75">
              Enter Custom Toast Text
            </label>
            <div className="d-flex align-items-center mb-3">
              <input
                type="text"
                id="customToastText"
                placeholder='Enter Here'
                className="form-control me-2 mb-2 mb-md-0"
                style={{ flex: 1 }}
                onChange={handleChange}
              />
              <button className="btn shadow bg-white ms-2" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">
                <i className="fa-solid fa-gear text-dark"></i>
              </button>
            </div>
            <button className="btn mt-3 w-100  bg-primary  fs-5 rounded border border-transparent" onClick={notify}>
              Show Custom Toast Message
            </button>
          </div>
        </div>
      </main>
      <ToastContainer />

      <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className='d-flex justify-content-between'>
                <h1 className="modal-title fs-5" id="exampleModalToggleLabel"> </h1>
                <button type="button " className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div className='d-flex mt-3'>
                <div>
                  <label htmlFor="countInput">Set Timeout: </label>
                </div>
                <div>
                  <input type="number" id="countInput" className='form-control ms-3' onChange={handleCountChange} />
                </div>
              </div>

              <br />
              <div className='text-center mt-3'>
                <button className="btn btn-warning ps-5 pe-5" data-bs-dismiss="modal" aria-label="Close">Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comp2;