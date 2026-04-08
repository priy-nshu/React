import { useNavigate,useLocation } from "react-router-dom";

const HomeWithState=()=>{
    const navigate =useNavigate();
    const location=useLocation();
    console.log(location.state);

    return(
        <>
         <h1 style={{color:"gray"}}>
            home Sweet Home.Logged in as H {/*location.state.email*/}
         </h1>
         <button onClick={()=>navigate("/about")}> About</button>
         <button onClick={()=>navigate("/contact")}> Contact</button>
          <button onClick={()=>navigate(-1)}> Back</button>
        </>
    );
};
export default HomeWithState;