/** @format */

/** @format */
import { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const captchaValue = useRef(null);
  const { signIn } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname;

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-center",
        icon: "Login",
        title: " Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from || "/", { replace: true });
    });
  };

  //   const handleCaptcha = () => {
  //     const value = captchaValue;
  //     console.log(value.current);
  //   };

  const checkCaptcha = () => {
    const value = captchaValue.current.value;
    if (validateCaptcha(value, false)) {
      console.log("true");
      setDisabled(false);
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="  flex-col">
        <div className="text-center my-10  ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card border  w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                name="captcha"
                ref={captchaValue}
                placeholder="enter your captcha "
                className="input input-bordered"
                onChange={checkCaptcha}
              />
              {/* <button onClick={handleCaptcha} className="btn mt-3">
                validate
              </button> */}
            </div>
            <div className="form-control mt-6">
              <button disabled={disabled} className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <p>
            <small>
              New here? <Link to="/signup">create an account</Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
