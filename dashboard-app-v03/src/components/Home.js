import {Link} from "react-router-dom"
     


function Home() {

    return (
      <>
        <p>Dashboard App v3.0</p>
        <p></p>
        <p>
          <Link to="/login">Login</Link>
        </p>
        <p>
          <Link to="/register">Register</Link>
        </p> 
      </>
    );
  }
  
  export default Home;
 