import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Administration</h1>
    <Link to="about" className="btn btn-primary btn-lg">
      learn more
    </Link>
  </div>
);
export default HomePage;