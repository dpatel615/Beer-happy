// import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';
// import {Router} from 'react-router-dom';
// import Auth from '../utils/auth';

// const Profile = (props) => {
//   const [formState, setFormState] = useState({ email: '', password: '' });
//   const [login, { error, data }] = useMutation(LOGIN_USER);

//   // update state based on form input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   // submit form
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     console.log(formState);
//     try {
//       const { data } = await login({
//         variables: { ...formState },
//       });

//       Auth.login(data.login.token);
//     } catch (e) {
//       console.error(e);
//     }

//     // clear form values
//     setFormState({
//       email: '',
//       password: '',
//     });
//   };
//   return(
//     <div className="profile">
//       <div className="profile-container">
//         <Router></Router>
//       </div>
//     </div>
//   )
// }

// export default Profile;
import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_COMMENT } from '../utils/mutations';

import Auth from '../utils/auth';

const CommentForm = ({ thoughtId }) => {
  const [commentText, setCommentText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          thoughtId,
          commentText,
          commentAuthor: Auth.getProfile().data.username,
        },
      });

      setCommentText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'commentText' && value.length <= 280) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h4>What are your thoughts on this thought?</h4>

      
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
            {error && <span className="ml-2">{error.message}</span>}
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="textarea">
              <textarea className="text"
                name="commentText"
                placeholder="Add your comment..." rows="6" cols="50"
                value={commentText}
                className="form-input w-100"
                style={{ lineHeight: '3.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="comments">
              <button className="btn-comment" type="submit">
                Add Comment
              </button>
            </div>
          </form>
        </>
  
       
      
    </div>
  );
};

export default CommentForm;
