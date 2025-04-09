import React from 'react' 

 
const User = ({username,role}) => { 
  return ( 
    
    <div> 
      <h3>Welcome {username} Logged in As {role}</h3> 
    </div> 
  ) 
} 
 
export default User



//use as attributes (props)
//<h3> Welcome to {props.uname} Logged in As {props.category}</h3> //display by props.
//In App.js
//<User uname="Murali" category="Student"/>