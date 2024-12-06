import React, { useState, useRef, useCallback, useEffect } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '../../../utils/hooks/useDebounce';
import axios from 'axios';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [isFieldsDirty, setIsFieldsDirty] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const contactNoRef = useRef();
  const userInputDebounce = useDebounce({ firstName, middleName, lastName, email, password, confirmPassword, contactNo }, 2000);
  const [debounceState, setDebounceState] = useState(false);
  const [status, setStatus] = useState('idle');

  const navigate = useNavigate();

  const handleOnChange = (event, type) => {
    setDebounceState(false);
    setIsFieldsDirty(true);

    switch (type) {
      case 'firstName':
        setFirstName(event.target.value);
        break;
      case 'middleName':
        setMiddleName(event.target.value);
        break;
      case 'lastName':
        setLastName(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      case 'confirmPassword':
        setConfirmPassword(event.target.value);
        break;
      case 'contactNo':
        setContactNo(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleRegister = async () => {
    const data = { firstName, middleName, lastName, email, password, confirmPassword, contactNo, role: 'user' };
    setStatus('loading');
    console.log(data);

    try {
      const res = await axios.post('/user/register', data);
      console.log(res);
      localStorage.setItem('accessToken', res.data.access_token);
      navigate('/');
      setStatus('idle');
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
      setStatus('idle');
    }
  };

  useEffect(() => {
    setDebounceState(true);
  }, [userInputDebounce]);

  return (
    <div className='register-page-container'>
      <div className='form-wrapper1'>
        <h3>Create a New Account</h3>
        <p>Join us and start managing your movie listings today!</p>
        <form>
          <div className='register-form-wrapper'>
            <div>
              <div className='input-group'>
                <input
                  type='text'
                  name='firstName'
                  ref={nameRef}
                  onChange={(e) => handleOnChange(e, 'firstName')}
                  placeholder="Enter your first name"
                />
              </div>
              {debounceState && isFieldsDirty && firstName === '' && (
                <span className='input-error'>This field is required</span>
              )}
            </div>

            <div>
              <div className='input-group'>
                <input
                  type='text'
                  name='middleName'
                  ref={nameRef}
                  onChange={(e) => handleOnChange(e, 'middleName')}
                  placeholder="Enter your middle name"
                />
              </div>
            </div>

            <div>
              <div className='input-group'>
                <input
                  type='text'
                  name='lastName'
                  ref={nameRef}
                  onChange={(e) => handleOnChange(e, 'lastName')}
                  placeholder="Enter your last name"
                />
              </div>
              {debounceState && isFieldsDirty && lastName === '' && (
                <span className='input-error'>This field is required</span>
              )}
            </div>

            <div>
              <div className='input-group'>
                <input
                  type='text'
                  name='email'
                  ref={emailRef}
                  onChange={(e) => handleOnChange(e, 'email')}
                  placeholder="Enter your email"
                />
              </div>
              {debounceState && isFieldsDirty && email === '' && (
                <span className='input-error'>This field is required</span>
              )}
            </div>

            <div>
              <div className='input-group'>
                <input
                  type='text'
                  name='contactNo'
                  ref={contactNoRef}
                  onChange={(e) => handleOnChange(e, 'contactNo')}
                  placeholder="Enter your contact number"
                />
              </div>
              {debounceState && isFieldsDirty && contactNo === '' && (
                <span className='input-error'>This field is required</span>
              )}
            </div>

            <div>
              <div className='input-group'>
                <input
                  type='password'
                  name='password'
                  ref={passwordRef}
                  onChange={(e) => handleOnChange(e, 'password')}
                  placeholder="Create a password"
                />
              </div>
              {debounceState && isFieldsDirty && password === '' && (
                <span className='input-error'>This field is required</span>
              )}
            </div>

            <div>
              <div className='input-group'>
                <input
                  type='password'
                  name='confirmPassword'
                  ref={confirmPasswordRef}
                  onChange={(e) => handleOnChange(e, 'confirmPassword')}
                  placeholder="Confirm your password"
                />
              </div>
              {debounceState && isFieldsDirty && confirmPassword === '' && (
                <span className='input-error'>This field is required</span>
              )}
            </div>

            <div className='register-button-container'>
              <button
                type='button'
                disabled={status === 'loading'}
                onClick={() => {
                  if (status === 'loading') {
                    return;
                  }
                  if (firstName && lastName && email && password && confirmPassword && contactNo) {
                    handleRegister();
                  } else {
                    setIsFieldsDirty(true);
                    if (firstName === '') {
                      nameRef.current.focus();
                    } else if (lastName === '') {
                      nameRef.current.focus();
                    } else if (email === '') {
                      emailRef.current.focus();
                    } else if (contactNo === '') {
                      contactNoRef.current.focus();
                    } else if (password === '') {
                      passwordRef.current.focus();
                    } else if (confirmPassword === '') {
                      confirmPasswordRef.current.focus();
                    }
                  }
                }}
              >
                {status === 'idle' ? 'Register' : 'Loading'}
              </button>
            </div>

            <div className='login-link'>
              <a href='/'>
                <small>Already have an account? Login</small>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
