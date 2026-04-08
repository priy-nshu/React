import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link,useNavigate, Outlet } from 'react-router-dom';


export default function BasicRouting() {
return(
    <Router>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} >
                <Route path="team" element={<Team />} />
                <Route path="company" element={<Company/>} />
            </Route>
            <Route path="/contact" element={<Contact />} />
        </Routes>
        </Router>
);
}

const Contact = () => <h2>Contact Page</h2>;
const Team = () => <h3>Team Page</h3>;
const Company = () => <h3>Company Page</h3>;
const About = () => (
    <div>
        <h2>About Page</h2>
        <nav>
            <ul>
                <li>
                    <Link to="team">Team</Link>
                </li>
                <li>
                    <Link to="company">Company</Link>
                </li>
            </ul>
        </nav>
    </div>
);
 const Home = () => {
    const navigate = useNavigate();

    return (
    <div> 
     <h2>Home Page</h2>
        <button onClick={() => navigate('/contact')}>Go to Contact</button>
    </div>
);
}