import { use } from "react";
import { useNavigate, NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import Swal from "sweetalert2";

const Signup = () => {
    const navigate = useNavigate();
    const { createUser, setUser, updateUser, signInWithGoogle } = use(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;

        //password validation
        if (password.length < 6) {
            Swal.fire({
                icon: "error",
                title: "Password too short!",
                text: "Password must be at least 6 characters long."
            });
            return;
        }

        if (!/[A-Z]/.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Missing Uppercase!",
                text: "Password must contain at least one uppercase letter."
            });
            return;
        }

        if (!/[a-z]/.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Missing Lowercase!",
                text: "Password must contain at least one lowercase letter."
            });
            return;
        }

        // If all validations passed → continue
        createUser(email, password)
            .then(res => {
                updateUser({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        setUser(res.user);

                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Signed Up Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });

                        navigate('/');
                    })
                    .catch(error => {
                        Swal.fire({
                            icon: "error",
                            title: "Update Failed",
                            text: error.message
                        });
                    });
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Sign Up Failed",
                    text: error.message
                });
            });
    };

    const handleGoogleLogIn = () => {
        signInWithGoogle()
            .then(res => {
                setUser(res.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Sign Up Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Failed to Sign In",
                    text: error.message
                });
            });
    };

    return (
        <div className="hero bg-base-200 my-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-105 max-w-sm shrink-0 shadow-2xl">
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p>Already have an account?
                            <NavLink to='/login' className='link link-hover text-[#9F62F2]'> Login Now</NavLink>
                        </p>
                    </div>

                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Your Name</label>
                                <input type="text" name='name' className="input" placeholder="Your Name" />

                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />

                                <label className="label">Photo URL</label>
                                <input type="text" name='photoURL' className="input" placeholder="Photo URL" />

                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />

                                <div><a className="link link-hover">Forgot password?</a></div>

                                <button type='submit' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-lg text-white mt-4">
                                    Create Account
                                </button>
                            </fieldset>
                        </form>

                        <button
                            onClick={handleGoogleLogIn}
                            className="btn mt-4 bg-[#f4f0f0] flex justify-center items-center text-lg"
                        >
                            Sign In With Google
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Signup;
