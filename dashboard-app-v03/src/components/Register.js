import {Link} from "react-router-dom"


function Register() {
    return (
        <>
            <h2>Register</h2>
            <p></p>
            <form>
                <label>* Username: </label><input type="text" placeholder="* username" maxLength={25}></input><br/>
                <label>* Password: </label><input type="password" placeholder="* password" maxLength={25}></input><br/>
                <label>* Confirm Password: </label><input type="password" placeholder="* confirm password" maxLength={25}></input>
                <p></p>
                <input type="checkbox"></input>Terms and Services
                <p></p>
                <button>Submit</button>
            </form>
            <p></p>
            <p>
                <Link to="/login">Login</Link> {" | "} <Link to="/">Home</Link>
            </p>
        </>
    )
}

export default Register;