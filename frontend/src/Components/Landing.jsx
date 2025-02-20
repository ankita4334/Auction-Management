import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center px-4 py-5">
      {/* Image on the Left */}
      <div className="w-50 text-center me-lg-4"> {/* Added margin for spacing */}
        <img
          src="/hom2.jpg"  // Update path if needed
          alt="Catalogue"
          className="img-fluid" // Bootstrap class to make it responsive
          style={{ width: "600px", height: "auto" }} // Increased size
        />
      </div>

       {/* Text on the Left */}
       <div className="w-50">
        <h1 className="fs-2 fw-bold text-dark">
          Bid Smart, Win Big: <br />
          Your Gateway to <br />
          <span className="text-primary">Online Auctions</span>
        </h1>

        <p className="mt-3 text-muted">
          Welcome to <b>QuickBid</b>, the ultimate online auction marketplace where bidding meets excitement and convenience! Whether you are looking for rare collectibles, high-end electronics, fashion items, or unique home decor, our platform offers an extensive range of products from verified sellers worldwide.
        </p>

        <p className="mt-3 text-muted">
          Our advanced bidding system ensures <b>fair competition, secure transactions, and real-time updates</b>. Join a community of buyers and sellers who trust our platform to discover great deals, auction off valuable items, and experience the thrill of real-time bidding.
        </p>

        
       


        <h4 className="fs-5 fw-semibold text-dark mt-4">Start Bidding Today!</h4>
        <p className="mt-3 text-muted">
       <Link to={'/signup'}><span className="text-primary">Sign Up</span></Link> now and <b>place your first bid</b>. The next great deal could be just a click away!
        </p>
      </div>
    </div>
  );
}

export default Landing;