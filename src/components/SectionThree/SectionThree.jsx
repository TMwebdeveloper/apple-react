import React from "react";
import iphone11pro from "../../assets/images/iphone11pro.png"; // Use your real image path

function SectionThree() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* 📱 Image */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={iphone11pro}
              alt="iPhone 11 Pro"
              className="img-fluid"
              style={{ maxHeight: "350px" }}
            />
          </div>

          {/* 📝 Text */}
          <div className="col-md-6">
            <h2 className="fw-bold">iPhone 11 Pro</h2>
            <p className="mb-2">Pro cameras. Pro display. Pro performance.</p>
            <p className="fw-semibold text-secondary">
              From $24.95/mo. or $599 with trade‑in.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="btn btn-dark">
                Learn More
              </a>
              <a href="#" className="btn btn-outline-dark">
                Buy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
