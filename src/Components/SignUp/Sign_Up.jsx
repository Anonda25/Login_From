import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase_init";
import { IoEyeOutline } from "react-icons/io5";
import { GoEyeClosed } from "react-icons/go";
import { Link } from "react-router-dom";
function Sign_Up() {
  const [errormessage, setErrorMessage] = useState("");
  const [success, setSuccess]=useState(false)
  const [showPassword, setShowPassword]= useState(false)





  const hendelSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const trems = e.target.trems.checked
    setErrorMessage('')
     setSuccess(false);

     if (!trems){
      setErrorMessage('accept our rual an condition')
      return;
     }
       if (password.length < 6) {
         setErrorMessage("please type 6 careact");
         return;
       }
      const isValidPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

      
           if (!isValidPassword.test(password)) {
             setErrorMessage("please type one upercase and one lowercase and one splical chareact");
             return;
           }
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        setSuccess(true)
         sendEmailVerification(auth.currentUser).then(() => {
           console.log("please veridfy your email");
         });
       
      })
      .catch((error) => {
        console.log("error", error.message);
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <h3 className="text-3xl font-bold">Sign Up Now!</h3>
      <form onSubmit={hendelSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="btn btn-xs absolute right-2 top-12"
          >
            {showPassword ? <GoEyeClosed /> : <IoEyeOutline />}
          </button>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer label justify-start gap-3">
            <input
              type="checkbox"
              defaultChecked
              name="trems"
              className="checkbox checkbox-success"
            />
            <span className="label-text">Accepct our Teams and Condition</span>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">sign Up</button>
        </div>
        {errormessage && (
          <div>
            <p className="text-xl text-red-400">{errormessage}</p>
          </div>
        )}
        {success && <p className="text-green-700">sign up successfily</p>}
      <p>you have already an accoutn please <Link to={'/login'} className="underline">Login</Link></p>
      
      </form>
    </div>
  );
}

export default Sign_Up;
