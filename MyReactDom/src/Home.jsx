import { BrowserRouter as Router, Routes, Route, Link,useNavigate, Outlet } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();

    return (
    <div> 
     <h2>Home Page</h2>
        <button onClick={() => navigate('/contact')}>Go to Contact</button>
    </div>
);
}