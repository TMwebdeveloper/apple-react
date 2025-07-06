import React from "react";

const iphones = [
  {
    id: 1,
    name: "iPhone 16",
    description: `Lots to love. Less to spend.
    You can either pay for your new iPhone in full or pay monthly with carrier financing, iPhone Payments, the iPhone Upgrade Program, and now Apple Card Monthly Installments.`,
    price: "Starting at $449 or $18.70/mo with trade-in.",
    image: "/images/iphone16.png",
    link: "https://apple.com/iphone-16",
  },
  {
    id: 2,
    name: "iPhone 11 Pro",
    description: `Advanced camera system. Powerful chip. Long battery life. A beautiful upgrade.`,
    price: "Starting at $399 or $15.99/mo.",
    image: "/images/iphone11pro.png",
    link: "https://apple.com/iphone-11-pro",
  },
  {
    id: 3,
    name: "iPhone SE",
    description: `Compact and powerful. The most affordable iPhone, with great performance and classic design.`,
    price: "Starting at $229 with trade-in.",
    image: "/images/iphonese.png",
    link: "https://apple.com/iphone-se",
  },
];

function IphonePage() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Our iPhones</h1>
      {iphones.map((phone, index) => (
        <div
          key={phone.id}
          className="row align-items-center mb-5"
          style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
        >
          <div className="col-md-6 text-center">
            <img
              src={phone.image}
              alt={phone.name}
              className="img-fluid"
              style={{ maxHeight: "300px" }}
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold">{phone.name}</h2>
            <p>{phone.description}</p>
            <p className="fw-semibold">{phone.price}</p>
            <a
              href={phone.link}
              className="text-primary fw-bold"
              target="_blank"
              rel="noreferrer"
            >
              Learn more &rarr;
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IphonePage;
