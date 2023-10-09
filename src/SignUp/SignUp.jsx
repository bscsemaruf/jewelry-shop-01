/** @format */

import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const SignUp = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      navigate("/");
    });
  };
  return (
    <div>
      <Helmet>
        <title>Jewelry Shop | Signup</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="  flex-col">
          <div className="text-center my-10  ">
            <h1 className="text-5xl font-bold">SignUp!</h1>
          </div>
          <div className="card border  w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  {...register("photo", { required: true })}
                  placeholder="photoUrl"
                  className="input input-bordered"
                />
                {errors.photo && <span>Url is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-700">Email is not ok!!</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  {...register("password", {
                    required: true,
                    maxLength: 20,
                    minLength: 6,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />

                {errors.password?.type == "required" && (
                  <span className="text-red-700">
                    password should be fill up
                  </span>
                )}
                {errors.password?.type == "minLength" && (
                  <span className="text-red-700">
                    password should be 6 character
                  </span>
                )}
                {errors.password?.type == "maxLength" && (
                  <span className="text-red-700">
                    password should not be 8 character
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
            </form>
            <p className="text-center">
              <small>
                Already have an account? <Link to="/login">Login </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
