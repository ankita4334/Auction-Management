// import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-white" style={{ backgroundColor: "rgb(64, 139, 172)" }}>
      {/* Footer Container */}
      <div className="container py-5">
        {/* Section: Links */}
        <section className="mt-3">
          <div className="row text-center d-flex justify-content-center pt-3">
            {["About Us", "Products", "Awards", "Help", "Contact"].map((item, index) => (
              <div className="col-md-2" key={index}>
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!" className="text-white">{item}</a>
                </h6>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-4" />

        {/* Section: Text */}
        <section className="mb-4">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat 
                voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, 
                aliquam sequi voluptate quas.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Social Icons */}
        <section className="text-center mb-4">
          {[
            { icon: "facebook-f", link: "#" },
            { icon: "twitter", link: "#" },
            { icon: "google", link: "#" },
            { icon: "instagram", link: "#" },
            { icon: "linkedin", link: "#" },
            { icon: "github", link: "#" }
          ].map((social, index) => (
            <a key={index} href={social.link} className="text-white me-4">
              <i className={`fab fa-${social.icon}`}></i>
            </a>
          ))}
        </section>
      </div>

      {/* Copyright Section */}
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © {new Date().getFullYear()} Copyright: 
        <a className="text-white" href="https://mdbootstrap.com/"> MDBootstrap.com</a>
      </div>
    </footer>
  );
};

export default Footer;
