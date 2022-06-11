import React from 'react';
import { getUser, removeUserSession } from '../utils/Common';

function Dashboard(props) {
  // const user = getUser();
  const imgArr = ['a1','a2', 'a3', 'a4', 'a5', 'a6', 'a7','b1','b2', 'b3', 'b4', 'b5', 'b6', 'b7' ];
  // useEffect(()=> {

  // })

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  return (
    <div className="dashcontain">
      {/* Welcome {user.name}!<br /><br /> */}
      <h1>Hi!</h1>
      <img className="dashimg" src={require(`../Assets/${imgArr[Math.floor(Math.random()*imgArr.length)]}.jpg`).default}></img>
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}

export default Dashboard;