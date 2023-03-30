import React, { useState } from 'react'
import "./style.css"
import { useSelector, useDispatch } from 'react-redux'
import { newSquareft } from '../../redux/squareft'
import { useNavigate } from 'react-router-dom';


function SecondPage() {
  //           ((Math.PI * (radius * radius) / 144) + (2*Math.PI*length));


  // const radius = 12;
  // const length = 22;
  // const radius1 = 12;
  // const length1 = 22;
  // const radius2 = 12;
  // const length2 = 22;
  
  // console.log(sq+sq1+sq2);
  const navigate = useNavigate();
  
  const dispatch = useDispatch()
  const length = useSelector((state) => state.length.value)
  const length1 = useSelector((state) => state.length.value1)
  const length2 = useSelector((state) => state.length.value2)
  const radius = useSelector((state) => state.radius.value)
  const radius1 = useSelector((state) => state.radius.value1)
  const radius2 = useSelector((state) => state.radius.value2)
  
  const sq = ((Math.PI * (radius * radius) / 144) + (2*Math.PI*length));
  const sq1 = ((Math.PI * (radius1 * radius1) / 144) + (2*Math.PI*length1));
  const sq2 = ((Math.PI * (radius2 * radius2) / 144) + (2*Math.PI*length2));

  let sqFt = '';
  if(sq2 > 0){
     sqFt = sq + sq1 + sq2;
  }else if(sq1 > 0){
     sqFt = sq + sq1;
  }else{
     sqFt = sq;
  }

  const handleSubmit = () => {
    dispatch(newSquareft(sqFt));
    navigate('/final')
  }

  const [other, setOther] = useState(false);
  const handleOther = (e) => {
        if(e.target.checked === true){
          setOther(true);
        }else{
          setOther(false);
        }
        console.log(other);
  }

           
  return (
    //  bg-light-subtle
    <>
    <form onSubmit={handleSubmit}>
      <div className="calculator container bg-body">
        <div className="row ms-1">
          <div className="col">
            {/* <h2 className="text-danger text-center fw-bold my-4">The Total Area of your Pontoons is:</h2>  */}
            <h2 className="text-danger text-center fw-bold my-4">Your Pontoons Total Area is:</h2> 

            <h1 className="text-danger text-center fw-bold"><span className="border border-dark-subtle shadow rounded bg-white px-2">{Math.round(sqFt)} Sq. Ft.</span></h1>
            <h2 className="text-danger fw-bold mt-3"><em>Step 2.</em></h2>
            <p className="sblue ms-5 me-3 text-center" style={{fontSize: '18px',}}>To select the right products and quantities of products required to clean, restore and protect <br />your pontoons, and to calculate the total cost, please answer the following questions:</p>
            
          </div>
        </div>

        <div className="row ms-5 justify-content-center">
          <div className="col-10 border rounded bg-white shadow">
          <p className="mt-1 fs-4">The Pontoons on my boat are:</p>
            {/* <ul style={{ listStyle: "none", }}>
              <li>
                <span className="mx-1">Yes</span>
                <span>No</span>
              </li>
            </ul> */}
            <ol>
              <li className="mb-1">
                {/* <input className="mx-2" type="radio" name="clean" value="yclean" onClick={(e) => console.log(e.target.value)} />
                <input type="radio" name="clean" value="nclean" onClick={(e) => console.log(e.target.value)}/> */}
                <span className="ms-3 fs-5">Clean and Shiny</span>
                
                <div className="form-check form-check-inline sblue ms-2 d-inline-flex align-items-center">
                  <input required className="form-check-input" type="radio" id="inlineCheckbox1" name="clean" defaultValue="cleany" onClick={(e) => console.log(e.target.value)} /> 
                  {/* Add onClick to change the value to false if no is clicked*/}
                  <label className="form-check-label fs-5 ms-1" htmlFor="inlineCheckbox1">Yes</label>
                </div>
                <div className="form-check form-check-inline sblue d-inline-flex align-items-center">
                  <input className="form-check-input" type="radio" name="clean" id="inlineCheckbox2" defaultValue="cleann" />
                  <label className="form-check-label fs-5 ms-1" htmlFor="inlineCheckbox2">No</label>
                </div>

              </li>
              <li className="my-1">
                {/* <input className="mx-2" type="radio" name="mill" value="ymill" />
                <input type="radio" name="mill" value="nmill" /> */}
                <span className="ms-3 fs-5">Raw Aluminum (Mill Finish)</span>

                {/* <div className="btn-group btn-group-sm ms-2" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" className="btn-check" name="mill" id="mill1" autoComplete="off" />
                  <label className="btn btn-outline-success" htmlFor="mill1">Yes</label>
                  <input type="radio" className="btn-check" name="mill" id="mill2" autoComplete="off" />
                  <label className="btn btn-outline-danger" htmlFor="mill2">No</label>
                </div> */}

                <div className="form-check form-check-inline sblue ms-2 d-inline-flex align-items-center">
                  <input required className="form-check-input" type="radio" name="mill" id="mill1" defaultValue="milly" /> 
                  <label className="form-check-label fs-5 ms-1" htmlFor="mill1">Yes</label>
                </div>
                <div className="form-check form-check-inline sblue d-inline-flex align-items-center">
                  <input className="form-check-input" type="radio" name="mill" id="mill2" defaultValue="milln" />
                  <label className="form-check-label fs-5 ms-1" htmlFor="mill2">No</label>
                </div>

              </li>
              <li className="my-1">
                {/* <input className="mx-2" type="radio" name="mirror" value="ymill" />
                <input type="radio" name="mirror" value="nmill" /> */}
                
                <span className="ms-3 fs-5 ">Raw Aluminum Polished to a Mirror Finish</span>
                <div className="form-check form-check-inline sblue ms-2 d-inline-flex align-items-center">
                  <input required className="form-check-input" type="radio" name="mirror" id="mirror1" defaultValue="mirrory" /> 
                  <label className="form-check-label fs-5 ms-1" htmlFor="mirror1">Yes</label>
                </div>
                <div className="form-check form-check-inline sblue d-inline-flex align-items-center">
                  <input required className="form-check-input" type="radio" name="mirror" id="mirror2" defaultValue="mirrorn" />
                  <label className="form-check-label fs-5 ms-1" htmlFor="mirror2">No</label>
                </div>

              </li>
              <li className="my-1">
                {/* <input className="mx-2" type="radio" name="pabove" value="ypabove"/>
                <input type="radio" name="pabove" value="npabove" /> */}
                <span className="ms-3 fs-5 ">Painted Above the Waterline (Factory Finish)</span>

                <div className="form-check form-check-inline sblue ms-2 d-inline-flex align-items-center">
                  <input required className="form-check-input" type="radio" name="pabove" id="pabove1" defaultValue="pabovey" /> 
                  <label className="form-check-label fs-5 ms-1" htmlFor="pabove1">Yes</label>
                </div>
                <div className="form-check form-check-inline sblue d-inline-flex align-items-center">
                  <input className="form-check-input" type="radio" name="pabove" id="pabove2" defaultValue="paboven" />
                  <label className="form-check-label fs-5 ms-1" htmlFor="pabove2">No</label>
                </div>

              </li>
              <li className="my-1">
                {/* <input className="mx-2" type="radio" name="pbelow" value="ypbelow" />
                <input type="radio" name="pbelow" value="npbelow" /> */}
                <span className="ms-3 fs-5 ">Painted Below the Waterline (Factory Finish)</span>

                <div className="form-check form-check-inline sblue ms-2 d-inline-flex align-items-center">
                  <input required className="form-check-input" type="radio" name="pbelow" id="pbelow1" defaultValue="pbelowy" /> 
                  <label className="form-check-label fs-5 ms-1" htmlFor="pbelow1">Yes</label>
                </div>
                <div className="form-check form-check-inline sblue d-inline-flex align-items-center">
                  <input required className="form-check-input" type="radio" name="pbelow" id="pbelow2" defaultValue="pbelown" />
                  <label className="form-check-label fs-5 ms-1" htmlFor="pbelow2">No</label>
                </div>

              </li>
              <li className="my-1">
                {/* <input className="mx-2" type="radio" name="pfoul" value="ypfoul" />
                <input type="radio" name="pfoul" value="npfoul" /> */}
                <span className="ms-3 fs-5">Painted Below the Waterline with Anti-Fouling Paint</span>

                <div className="form-check form-check-inline sblue ms-2 d-inline-flex align-items-center">
                  <input required className="form-check-input" type="radio" name="pfoul" id="pfoul1" defaultValue="pfouly" /> 
                  <label className="form-check-label fs-5 ms-1" htmlFor="pfoul1">Yes</label>
                </div>
                <div className="form-check form-check-inline sblue d-inline-flex align-items-center">
                  <input className="form-check-input" type="radio" name="pfoul" id="pfoul2" defaultValue="pfouln" />
                  <label className="form-check-label fs-5 ms-1" htmlFor="pfoul2">No</label>
                </div>

              </li>
              <li className="my-1">
                {/* <input className="mx-2" type="radio" name="whites" value="ywhites" />
                <input type="radio" name="whites" value="nwhites" /> */}
                <span className="ms-3 fs-5">Stained with white streaks or spots</span>

                <div className="form-check form-check-inline sblue ms-2 d-inline-flex align-items-center">
                  <input required className="form-check-input" type="radio" name="whites" id="whites1" defaultValue="whitesy" /> 
                  <label className="form-check-label fs-5 ms-1" htmlFor="whites1">Yes</label>
                </div>
                <div className="form-check form-check-inline sblue d-inline-flex align-items-center">
                  <input required className="form-check-input" type="radio" name="whites" id="whites2" defaultValue="whitesn" />
                  <label className="form-check-label fs-5 ms-1" htmlFor="whites2">No</label>
                </div>

              </li>
              <li className="my-1">
                {/* <input className="mx-2" type="radio" name="darks" value="ydarks" />
                <input type="radio" name="darks" value="ndarks" /> */}
                <span className="ms-3 fs-5">Stained with dark steaks or smudges</span>

                <div className="form-check form-check-inline sblue ms-2 d-inline-flex align-items-center">
                  <input required className="form-check-input" type="radio" name="darks" id="darks1" defaultValue="darksy" /> 
                  <label className="form-check-label fs-5 ms-1" htmlFor="darks1">Yes</label>
                </div>
                <div className="form-check form-check-inline sblue d-inline-flex align-items-center">
                  <input className="form-check-input" type="radio" name="darks" id="darks2" defaultValue="darksn" />
                  <label className="form-check-label fs-5 ms-1" htmlFor="darks2">No</label>
                </div>
              </li>
              <li>
              <span className="fs-5 ms-3 sblue">Other </span>
                <div className="form-check form-check-inline sblue d-inline-flex">
                &nbsp;  <input className="form-check-input" type="checkbox" name="other" id="other" onClick={(e) => handleOther(e)} />
               </div>
                  {other && <textarea type="text" className="form-control form-control-sm" placeholder="If Other, Please Explain"></textarea>} 
              </li>
            </ol>
          </div>
        </div>
        <div className="row ms-1">
          <div className="col text-center mt-4">
            <button className="btn btn-danger fw-bold" type="submit">Next</button>
          </div>
        </div>
      </div>
      </form>
    </>
  )
}

export default SecondPage



