function Login() {
    return (
        <>
            <h2>Login</h2>
            <p></p>
            <form>
                <label>Username: </label><input type="text" placeholder="* username" maxLength={25}></input><br/>
                <label>Password: </label><input type="password" placeholder="* password" maxLength={25}></input>
                <p></p>
                <button>Submit</button>
            </form>
            <p></p>
            <p>Register</p>
        </>
    )
}

export default Login;