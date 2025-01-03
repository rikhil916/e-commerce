import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function Signup(){
    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="card p-4" style={{width:'400px'}}>
                <h2 className="text-center mb-4">Register</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input type="text"
                                placeholder="Enter name"
                                autoComplete="off"
                                name="name"
                                className="form-control rounded-0"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>email</strong>
                        </label>
                        <input type="email"
                                autoComplete="off"
                                name="email"
                                className="form-control rounded-0"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input type="password"
                                placeholder="Enter password"
                                autoComplete="off"
                                className="form-control rounded-0"/>
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>
                </form>
                <p className="text-center mt-3">Already have an account?</p>
                <Link to="/login" className="btn btn-light border w-100 rounded-0">
                Login</Link>
            </div>
        </div>
    )
}

export default Signup;