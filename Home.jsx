import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (

        <div className="container">

            {/* Navbar */}
            <nav className="navbar">
                <h1 className="logo">QuickJobs</h1>

                <ul className="nav-links">

                    <Link to='/' className="nav-link">Home</Link>
                    <Link className="nav-link" to="/job">jobs</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                    <Link className="nav-link" to="/about">About</Link>


                </ul>

                <div className="nav-right">
                    <Link className="nav-link" to="/">Register</Link>
                    <Link className="nav-link" to="/Login">Login</Link>

                    <span>|</span>
                    <a href="#">Employers / Post Job</a>
                </div>
            </nav>


            


            {/* Main Section */}
            <div className="hero">
                <h1 className="brand">QuickJobs</h1>
                <h2>Your next job starts here</h2>
                <p>
                    Create an account or sign in to see your personalised job
                    recommendations.
                </p>

                <button className="start-btn">Get Started →</button>
            </div>

        </div>



    )
}
export default Home;