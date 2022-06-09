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