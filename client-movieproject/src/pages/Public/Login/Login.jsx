import { useState, useRef, useCallback, useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '../../../utils/hooks/useDebounce';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFieldsDirty, setIsFieldsDirty] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const userInputDebounce = useDebounce({ email, password }, 2000);
  const [debounceState, setDebounceState] = useState(false);
  const [status, setStatus] = useState('idle');

  const navigate = useNavigate();

  const handleShowPassword = useCallback(() => {
    setIsShowPassword((value) => !value);
  }, [isShowPassword]);

  const handleOnChange = (event, type) => {
    setDebounceState(false);
    setIsFieldsDirty(true);

    switch (type) {
      case 'email':
        setEmail(event.target.value);
        break;

      case 'password':
        setPassword(event.target.value);
        break;

      default:
        break;
    }
  };

  const handleLogin = async () => {
    const data = { email, password };
    setStatus('loading');
    console.log(data);

    await axios({
      method: 'post',
      url: '/user/login',
      data,
      headers: { 'Access-Control-Allow-Origin': '*' },
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem('accessToken', res.data.access_token);
        localStorage.setItem('role', 'user'); 
        navigate('/main/movies'); 
        setStatus('idle');
      })
      .catch((e) => {
        console.log(e);
        setStatus('idle');
        alert(e.response.data.message);
      });
  };

  useEffect(() => {
    setDebounceState(true);
  }, [userInputDebounce]);

  return (
    <div className='login-page-container'>
      <div className='form-wrapper'>
        <h3>Welcome back, User!</h3>
        <p>Ready to explore the movie listings?</p>
        <form>
          <div className='login-form-wrapper'>
            <div>
              <div className='login-input-group'>
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
              <div className='login-input-group'>
                <input
                  type={isShowPassword ? 'text' : 'password'}
                  name='password'
                  ref={passwordRef}
                  onChange={(e) => handleOnChange(e, 'password')}
                  placeholder="Enter your password"
                />
              </div>
              {debounceState && isFieldsDirty && password === '' && (
                <span className='input-error'>This field is required</span>
              )}
            </div>
            <div className='password-toggle' onClick={handleShowPassword}>
              <i className={`fa ${isShowPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </div>

            <div className='login-button-container'>
              <button
                type='button'
                disabled={status === 'loading'}
                onClick={() => {
                  if (status === 'loading') {
                    return;
                  }
                  if (email && password) {
                    handleLogin();
                  } else {
                    setIsFieldsDirty(true);
                    if (email === '') {
                      emailRef.current.focus();
                    }

                    if (password === '') {
                      passwordRef.current.focus();
                    }
                  }
                }}
              >
                {status === 'idle' ? 'Login' : 'Loading'}
              </button>
            </div>
            <div className='register-link'>
              <a href='/register'>
                <small>Register</small>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
