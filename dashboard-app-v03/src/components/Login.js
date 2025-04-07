function Login() {
    return (
        <>
            <h2>Login</h2>
            <p></p>
            <form>
                <label>Username: </label><input type="text" placeholder="* username" maxLength={25}></input><br/>
                <label>Password: </label><input type="text" placeholder="* password" maxLength={25}></input>
                <p></p>
                <button>Submit</button>
                <p></p>
                <p>Register</p>
            </form>
        </>
    )
}

export default Login;