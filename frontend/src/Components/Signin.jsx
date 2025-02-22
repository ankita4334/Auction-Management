import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post("http://localhost:3001/signin", { email, password })
      .then(result => {
        console.log("Login API Response:", result.data); // Debugging
  
        if (result.data.message === "Success") {
          toast.success("Login Successful!", { position: "top-center" });
  
          if (result.data.username) {
            localStorage.setItem("token", result.data.token);
            localStorage.setItem("username", result.data.username); // Ensure username is stored
            console.log("Username stored:", result.data.username); // Debugging
  
            navigate('/');  
            window.location.reload(); 
          } else {
            console.error("Username missing in response!");
          }
        } else {
          toast.error(result.data.message, { position: "top-center" });
        }
      })
      .catch(err => console.error("Login Error:", err));
  };
  
  return (
    <section className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container py-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img src="login.avif" className="img-fluid" alt="Phone illustration" />
          </div>

          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control form-control-lg" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label">Password</label>
                <input type="password" className="form-control form-control-lg" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
              </div>

              <button type="submit" className="btn btn-primary btn-lg btn-block w-100">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signin;
