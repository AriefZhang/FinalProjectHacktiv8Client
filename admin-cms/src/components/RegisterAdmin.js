import { useState } from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/actionCreators/userActions";

function RegisterAdmin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  function changeUser(e) {
    const { value } = e.target;
    setUsername(value);
  }

  function changeEmail(e) {
    const { value } = e.target;
    setEmail(value);
  }

  function changePassword(e) {
    const { value } = e.target;
    setPassword(value);
  }

  function changePhone(e) {
    const { value } = e.target;
    setPhone(value);
  }


  function registerHandler(e) {
    e.preventDefault();
    const data = {
      name: username,
      email,
      password,
      phoneNumber: phone,
    };

    dispatch(registerUser(data))
      .then((data) => {
        setUsername("");
        setEmail("");
        setPhone("");
        setPassword("");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Register admin success",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });

    
  }

  function cancelRegister() {
    setUsername("");
    setEmail("");
    setPhone("");
    setPassword("");
  }

  return (
    <div id='register'>
      <div id='register-header'>
        <h1 className='mb-3'>Register New Admin</h1>
      </div>
      <form onSubmit={registerHandler}>
        <div className='mb-3 row'>
          <label htmlFor='username' className='form-label col-2'>
            Username:
          </label>
          <input
            value={username}
            onChange={changeUser}
            type='text'
            className='form-control col'
            id='username'
            required
          />
        </div>
        <div className='mb-3 row'>
          <label htmlFor='email' className='form-label col-2'>
            Email address:
          </label>
          <input
            value={email}
            onChange={changeEmail}
            type='email'
            className='form-control col'
            id='email'
            aria-describedby='emailHelp'
            required
          />
        </div>
        <div className='mb-3 row'>
          <label htmlFor='password' className='form-label col-2'>
            Password:
          </label>
          <input
            value={password}
            onChange={changePassword}
            type='password'
            className='form-control col'
            id='password'
            required
          />
        </div>
        <div className='mb-3 row'>
          <label htmlFor='phone' className='form-label col-2'>
            Phone Number:
          </label>
          <input
            value={phone}
            onChange={changePhone}
            type='text'
            className='form-control col'
            id='phone'
            required
          />
        </div>
        <div className='d-flex justify-content-end'>
          <button onClick={cancelRegister} className='btn btn-secondary mx-1'>
            Cancel
          </button>
          <button type='submit' className='btn btn-primary mx-1'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterAdmin;
