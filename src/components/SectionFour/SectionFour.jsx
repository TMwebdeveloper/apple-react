import React from "react";
import iphone11 from "../../assets/images/iphone11.png"; // Use your real image path

function SectionFour() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center flex-md-row-reverse">
          {/* 📱 Image with bold text underneath */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={iphone11}
              alt="iPhone 11"
              className="img-fluid"
              style={{
                maxHeight: "450px",
                width: "100%",
                objectFit: "contain",
              }}
            />
            <p className="fw-bold mt-3 fs-5">IPhone 11</p>
          </div>

          {/* 📝 Text */}
          <div className="col-md-6">
            <h2 className="fw-bold bold">iPhone 11</h2>
            <p className="mb-2">Just the right amount of everything.</p>
            <p className="fw-semibold text-secondary">
              From $18.70/mo. or $499 with trade‑in.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="btn btn-dark">
                Learn More
              </a>
              <a href="#" className="btn btn-outline-dark">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFour;
