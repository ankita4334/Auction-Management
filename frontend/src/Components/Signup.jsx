import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [mno, setMno] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios
      .post("http://localhost:3001/signup", { 
        uname, 
        email, 
        mno, 
        password, 
        role: "user"  
      })
      .then((result) => {
        console.log(result);
        navigate("/signin");
      })
      .catch((err) => console.log("Signup Error:", err.response ? err.response.data : err.message));
  };
  

  return (
    <section className="vh-100 d-flex align-items-center justify-content-center bg-light" >
      <div className="container py-5">
        <div className="row d-flex align-items-center justify-content-center">
          
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img src="signup2.jpg" className="img-fluid" alt="Signup illustration" />
          </div>


          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={handleSubmit}>
             
              <div className="form-outline mb-4">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your username"
                  value={uname}
                  onChange={(e) => setUname(e.target.value)}
                />
              </div>

            
              <div className="form-outline mb-4">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control form-control-lg"
                  placeholder="Enter your phone number"
                  value={mno}
                  onChange={(e) => setMno(e.target.value)}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

           
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="terms" />
                  <label className="form-check-label" htmlFor="terms">
                    I agree to the Terms & Conditions
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-lg btn-block w-100">
                Sign Up
              </button>

            
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
