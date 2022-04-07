import React from "react";
import Input from "./Input";
import Button from "./Button";
import Container from "react-bootstrap/Container";
// import images from '../../public/assets/images/LTI_logo.jpg'

function App() {
  var style = {
    backgroundColor: "rgba(197, 200, 226, 0.4)",
    borderRadius: "10px"
  };

  var style1 = {
    backgroundColor: "rgba(200, 200, 226, 0.4)",
    borderRadius: "10px"
  };

  return (
    <Container>
      <div className="split left">
        <div className="centered">
          <Container className="left-container" style={style1}>
          <img className="circle-image" src="https://www.lntinfotech.com/wp-content/uploads/2017/05/LTI_logo_White.jpg" alt="LTI Logo"/>
            <h1>To Compare!</h1>
            <p>Let's Solve</p>
          </Container>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <Container className="right-container" style={style}>
            {/* <div class="fa fa-user fa-2x"></div>
            <label for="email"><b>Email</b></label> */}
            <input type="email" placeholder="Email" className="form-control input-lg" name="email" required></input>
            {/* <div class="fa fa-key fa-2x"></div>
        <label for="password"><b>Password</b></label> */}
        <input type="password" placeholder="Password" class="form-control input-lg" name="psw" pattern="(?=.*/d)(?=*[a-z])(?=*[A-Z].{6,})" title="Must conatin atleast one number, one uppercase and lowercase letters" required></input>
        <br></br>
        <button type="Submit">Login</button>
        {/* <button type="submit" class="button" style="border-color: black">SIGN IN</button> */}
          </Container>
        </div>
      </div>
    </Container>
  );
}

export default App;
