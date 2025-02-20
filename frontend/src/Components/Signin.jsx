
function Signin() {
  return (
<>
    <section className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container py-5">
        <div className="row d-flex align-items-center justify-content-center">
          {/* Image Section */}
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="login.avif"
              className="img-fluid"
              alt="Phone illustration"
            />
          </div>

          {/* Form Section */}
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              {/* Email Input */}
              <div className="form-outline mb-4">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control form-control-lg" placeholder="Enter your email" />
              </div>

              {/* Password Input */}
              <div className="form-outline mb-4">
                <label className="form-label">Password</label>
                <input type="password" className="form-control form-control-lg" placeholder="Enter your password" />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                <a href="#!">Forgot password?</a>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary btn-lg btn-block w-100">Sign in</button>

              <div className="d-flex align-items-center my-4">
                <hr className="flex-grow-1" />
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                <hr className="flex-grow-1" />
              </div>

              {/* Social Login Buttons */}
              <a className="btn btn-primary btn-lg btn-block w-100 mb-2" style={{ backgroundColor: "#3b5998" }} href="#!">
                <i className="fab fa-facebook-f me-2"></i> Continue with Facebook
              </a>
              <a className="btn btn-primary btn-lg btn-block w-100" style={{ backgroundColor: "#55acee" }} href="#!">
                <i className="fab fa-twitter me-2"></i> Continue with Twitter
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
 


</>  )
}

export default Signin