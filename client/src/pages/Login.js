import React, {useState} from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';


import Auth from '../utils/auth';


const Login = () => {
    const { username: userParam } = useParams();
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    
    // handle button click of login form
    const handleLogin = () => {
      setError(null);
      // axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
      //   setLoading(false);
      //   setUserSession(response.data.token, response.data.user);
      //   props.history.push('/dashboard');
      // }).catch(error => {
      //   setLoading(false);
      //   if (error.response.status === 401) setError(error.response.data.message);
      //   else setError("Something went wrong. Please try again later.");
      // });
    }
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { username: userParam },
    });
  
    const user = data?.me || data?.user || {};
    // navigate to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
      return <Navigate to="/me" />;
    }
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!user?.username) {
      return (
        <h4>
          You need to be logged in to see this. Use the navigation links above to
          sign up or log in!
        </h4>
      );
    }
  
    return (
      <div>
      Login<br /><br />
      <div style={{color: "white"}}>
        Username<br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ color:"white", marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
        
     
   
    );
}
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

  export default Login;
// see SignupForm.js for comments
// import React, { useState } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap';

// // import { loginUser } from '../utils/API';
// import Auth from '../utils/auth';

// // importing mutations
// import { useMutation } from '@apollo/react-hooks';
// import { LOGIN_USER } from '../utils/mutations';

// const Login = () => {
//   const [userFormData, setUserFormData] = useState({ email: '', password: '' });
//   const [validated] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);

//   // initialize mutation
//   const [loginUser, {error} ] = useMutation(LOGIN_USER);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUserFormData({ ...userFormData, [name]: value });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await loginUser({
//         variables: {...userFormData} 
//       });
//       Auth.login(data.login.token);
//     } catch (e) {
//       console.error(e);
//       setShowAlert(true);
//     }

//     setUserFormData({
//       username: '',
//       email: '',
//       password: '',
//     });
//   };

//   return (
//     <>
//       <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
//         <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
//           Something went wrong with your login credentials!
//         </Alert>
//         <Form.Group>
//           <Form.Label htmlFor='email'>Email</Form.Label>
//           <Form.Control
//             type='text'
//             placeholder='Your email'
//             name='email'
//             onChange={handleInputChange}
//             value={userFormData.email}
//             required
//           />
//           <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group>
//           <Form.Label htmlFor='password'>Password</Form.Label>
//           <Form.Control
//             type='password'
//             placeholder='Your password'
//             name='password'
//             onChange={handleInputChange}
//             value={userFormData.password}
//             required
//           />
//           <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
//         </Form.Group>
//         <Button
//           disabled={!(userFormData.email && userFormData.password)}
//           type='submit'
//           variant='success'>
//           Submit
//         </Button>
//         {error && <div>Login failed</div>}
//       </Form>
//     </>
//   );
// };

// export default Login;
