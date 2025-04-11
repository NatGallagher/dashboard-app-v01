import {Link} from "react-router-dom"
import { useRef, useState } from "react";


function Login() {

    const txtusername = useRef("")
    const txtpassword = useRef("")
    const [msgText, setMsgText] = useState("")

    const handleLogin = (e) => {

        e.preventDefault()

        console.log("handleLogin");
        console.log(`username: ${txtusername.current.value} password: ${txtpassword.current.value}`)
        //validate field

        //api request
    }

    return (
        <>
            <h2>Login</h2>
            <p></p>
            <form>
                <label>Username: </label><input ref={txtusername} type="text" placeholder="* username" maxLength={25}></input><br/>
                <label>Password: </label><input ref={txtpassword} type="password" placeholder="* password" maxLength={25}></input>
                <p></p>
                <p>{msgText}</p>
                <p></p>
                <button onClick={(e) => handleLogin(e)}>Submit</button>
            </form>
            <p></p>
            <p>
                <Link to="/register">Register</Link> {" | "} <Link to="/">Home</Link>
            </p>
        </>
    )
}

export default Login;