
import "../../style/AddJob.css";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
export default function Pop() {
  const [addjob , setAddjob]=useState(
    {
      position:'',
      companyName : '',
      Description :'',
      offer:'',
      
      max_candidate_number:'',
      qualification:""
    }
  );

  // destructing 
  const{position,companyName,Description,offer,date,max_candidate_number,qualification}=addjob;
 const onInputChange=e =>{
  setAddjob({...addjob,[e.target.name]:e.target.value});
 };
 const addjobbtn = async e =>{
  //  console.log(e.target[0].value);
  e.preventDefault();
  alert('new job offer is added');
  await axios
  .post("http://localhost:5000/admin/jobs", addjob)
  .catch(err=>console.log(err))
 };
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return (
    <div>
      <button className="icon-button" onClick={handleClick}>
        <FaPlus></FaPlus> &nbsp;Add Job Offer
      </button>

      {/* 👇️ show elements on click */}
      {isShown ? (
        <form onSubmit={e=>addjobbtn(e)}>
          <div className="add-job-Contianer" id="job">
            <div className="title">
              <h2>Add job offer</h2>
              <hr className="add-job-hr"></hr>
            </div>

            <div className="Job-content">
          

              <label>
                {" "}
                companyName<input name="companyName" value={companyName} type="text" onChange={e =>onInputChange(e)}></input>
              </label>
              <label>
                {" "}
                position<input name="position" value={position} type="text" onChange={e =>onInputChange(e)}></input>
              </label>
              <label> Description</label>
              <textarea name="Description"  value={Description} type="text-area" rows="4" cols="50"onChange={e =>onInputChange(e)}></textarea>

              
                
              <label> Qualifications</label>
              <textarea name="qualification"  value={qualification} type="text-area" rows="4" cols="50"onChange={e =>onInputChange(e)}></textarea>

              <label>offer</label>
                {" "}
                <input name="offer" value={offer} type="text"onChange={e =>onInputChange(e)}></input>
              
              <label>
                {" "}
                Max Candidtate Number<input name="max_candidate_number"value={max_candidate_number}type="text" onChange={e =>onInputChange(e)}></input>
              </label>
            
              <button className="post-button">Post now!</button>
            </div>
          </div>
        </form>
      ) : null}

      {isShown ? <></> : null}
    </div>
  );
}

function Box() {
  return (
    <div>
      <h2>Box</h2>
    </div>
  );
}
