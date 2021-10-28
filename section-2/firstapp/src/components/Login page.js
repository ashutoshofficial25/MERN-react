import { NavLink } from "react-router-dom";
import "./style.css"

const Login = () =>
{
    return(
<div>

<div className="body">
    
<div className="my-card" >
    
    <img className="logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="logo"/>
    {/* <!-- <h1 class="card-title">Login Page</h1> --> */}

    <div className="sub-header">
        <span id="active"> Log In</span>
        <span> Sign Up</span>
    </div>

    <input type="text" className="my-input" placeholder="Username"/>
    <input type="password" className="my-input" placeholder="Password"/>

    <div className="remember">
        <input type="checkbox"/>
        <span> Stay Sign in</span>
    </div>

    <button className="my-btn">SIGN IN</button>

    <NavLink className="link" to="#">Forgot Password?</NavLink>

</div>
</div>
</div>
    )
}

export  default Login;