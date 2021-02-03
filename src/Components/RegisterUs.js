import React from 'react'

function Register() {
    return (
        <div className="register">
        {/* <img src="/images/william-iven-SpVHcbuKi6E-unsplash.jpg" alt="contactt" className="reg-img"></img> */}
        <div className="reg-content">
            <h1>Don't Wait!</h1>
            <p>Unlock the World of Oppournities & Start Your Journey.</p>
            <button>Register Now</button>
        </div>
        <div className="reg-form">
        <form>
            <input type="email" placeholder="Email" className="maildiv"></input>
            <button type="submit">Send</button>
            <input type="checkbox"id="check" className="checkdiv"></input>
            <label for="check">By continuing you agree to our<br /> Terms of services and privacy Policy </label>
        </form>
        </div>
              
   
        </div>
    )
}

export default Register
