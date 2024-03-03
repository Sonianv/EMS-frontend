import React from "react";
import clockImage from "../../assets/images/clock.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="mt-auto">
      <footer className="py-3 my-4 border-top">
        <div className="text-center text-body-secondary">
          <Link
            to="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <img
              src={clockImage}
              className="rounded-circle"
              alt="ClockImage"
              width="40"
              height="35"
            ></img>
          </Link>
          <span className="mb-3 mb-md-0 text-body-secondary">
            Employee Management System &copy; 2024
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
