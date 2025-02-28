import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/signin", { email, password }, {
      headers: { "Content-Type": "application/json" }
    })
    .then((result) => {
      console.log("Signin Success:", result.data); 
      
      if (result.data.uname) {
        localStorage.setItem("uname", result.data.uname);
        console.log("Username stored in localStorage:", result.data.uname);
      } else {
        console.error("No username received in response!");
      }
      
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("role", result.data.role);
  
      navigate("/");
      window.dispatchEvent(new Event("storage")); // 🔄 Force navbar update
    })
    .catch((err) => {
      console.error("Signin Error:", err.response ? err.response.data : err.message);
    });
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
