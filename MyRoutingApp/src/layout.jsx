import React from "react"
import {Outlet,Link,NavLink} from "react-router-dom"

const layout=()=>{
    return(
        <>
        <nav>
        <div style={{
            display:"flex",background:"black",
            padding:"5px 0 5px 5px",fontSize:"20px",}}>
                <div style={{margin:"10px"}}>
                    <NavLink to="/"
                        style={({isActive})=>({color:isActive ?"greenyellow":"white",})}>
                        HOME
                    </NavLink>
                </div>

                <div style={{margin:"10px"}}>
                    <NavLink to="/blog/1"
                        style={({isActive})=>({color:isActive ?"greenyellow":"white",})}>
                        Blogs
                    </NavLink>
                </div>

                <div style={{margin:"10px"}}>
                    <NavLink to="/login"
                        style={({isActive})=>({color:isActive ?"greenyellow":"white",})}>
                        Login
                    </NavLink>
                </div>

                <div style={{margin:"10px"}}>
                    <NavLink to="/homestate"
                        style={({isActive})=>({color:isActive ?"greenyellow":"white",})}>
                        Home With State
                    </NavLink>
                </div>
        </div>
        </nav>
        <Outlet></Outlet>
        </>
    );
};

export default layout;