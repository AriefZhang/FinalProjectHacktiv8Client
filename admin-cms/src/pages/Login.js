import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../store/actionCreators/userActions";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function loginHandler(e) {
    let data = {
      email,
      password,
    };
    e.preventDefault();
    dispatch(loginAction(data))
      .then(() => {
        navigate("/");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
  }

  function emailHandler(e) {
    setEmail(e.target.value);
  }

  return (
    <section className='sign-in'>
      <div>
        <h1>Sign In</h1>
        <h6 className='mb-3'>Sign In to access your account</h6>
        <form onSubmit={loginHandler}>
          <div className='mb-3'>
            <label className='form-label'>Email address</label>
            <input
              type='email'
              className='form-control'
              placeholder='example@mail.com'
              value={email}
              onChange={emailHandler}
            />
          </div>
          <div className='mb-4'>
            <label className='form-label'>Password</label>
            <input
              onChange={passwordHandler}
              value={password}
              type='password'
              className='form-control'
            />
          </div>
          <button className='btn btn-primary'>Sign-in</button>
        </form>
      </div>
    </section>
  );
}

export default Login;
