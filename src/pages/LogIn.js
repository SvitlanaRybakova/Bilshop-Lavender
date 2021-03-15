import React, { useState } from "react";
import styles from "../styles/LogIn.Module.css";



export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
  

    function validateForm() {
        return email.length > 0 && password.length > 0;
      }
    
      function handleSubmit(event) {
        event.preventDefault();
      }

      return (
        <div className="form-group">
            <label htmlFor = "exampleInputEmail1">Email address</label>
            <input type ="email" class ="form-control" id ="exampleInputEmail1" placeholder="Enter email"></input>
            <div className="form-group">
             <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
          </div>
             <div className="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
           <label class="form-check-label" for="exampleCheck1">Remember me</label>
          </div>
           <button type="submit" class="btn btn-primary">Submit</button>
         </div>
      );
}
