import "./signup.css";

const Signup = () =>{
    
    return(

<div>
    <div className="container mt-5">

        <div className="card">    
             <div className="row">
        {/* <!-- column --1 --> */}
                 <div className="col-md">

                    <div className="img-back">

                    </div>
                 </div>
        
                 <div className="col-md">
                     <div className="my-card-body">
                         

                        <p className="h3 text-center"> Start Building Your Future</p>
                        <p className="text-muted text-center">Sign up to continue</p>
                        <hr/>
                        <form>
                            {/* <!-- <div className="form-floating">
                                <input type="email" className="form-control" placeholder="Email"/>
                                <label for="email">Email</label>
                            </div> --> */}
                            <label for="email" className="mt-3">Email</label>
                            <input type="email" name="" id="email" className="form-control" placeholder="Email"/>

                            <label for="name" className="mt-3">Full Name</label>
                            <input type="text" name="name" id="name" className="form-control" placeholder="Full Name"/>

                            <label for="password" className="mt-3">Email</label>
                            <input type="password" name="" id="password" className="form-control" placeholder="Password"/>

                            <div className="text-center">
                            <button className="btn btn-primary w-25 mt-5">
                                Sign Up
                            </button>
                        </div>

                        <a href="#" className="text-muted mt-5" style={{display:"block"}}> Already have an account?</a>

                        </form>
                     </div>

                 </div>
            </div>
        </div>
    </div>    
</div>
    )
}

export default Signup;