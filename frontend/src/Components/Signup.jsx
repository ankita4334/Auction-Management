
function Signup() {
  return (
    <section className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container py-5">
        <div className="row d-flex align-items-center justify-content-center">
          {/* Image Section */}
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="signup2.jpg"
              className="img-fluid"
              alt="Signup illustration"
            />
          </div>

          {/* Form Section */}
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              {/* Username Input */}
              <div className="form-outline mb-4">
                <label className="form-label">Username</label>
                <input type="text" className="form-control form-control-lg" placeholder="Enter your username" />
              </div>

              {/* Email Input */}
              <div className="form-outline mb-4">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control form-control-lg" placeholder="Enter your email" />
              </div>

              {/* Phone Number Input */}
              <div className="form-outline mb-4">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-control form-control-lg" placeholder="Enter your phone number" />
              </div>

              {/* Password Input */}
              <div className="form-outline mb-4">
                <label className="form-label">Password</label>
                <input type="password" className="form-control form-control-lg" placeholder="Enter your password" />
              </div>

              {/* Confirm Password Input */}
              <div className="form-outline mb-4">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control form-control-lg" placeholder="Confirm your password" />
              </div>

              {/* Terms & Conditions */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="terms" />
                  <label className="form-check-label" htmlFor="terms">
                    I agree to the Terms & Conditions
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary btn-lg btn-block w-100">Sign Up</button>

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
  );
}

export default Signup;
