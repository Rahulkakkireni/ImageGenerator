import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./logincss.css"
import yourImage from './Screenshot 2023-09-13 142610.png';
import axios from "axios";

const Login=()=>{
    const navigate = useNavigate('');
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    function handleEmail(e){
        setEmail(e.target.value)
        console.log(e.target.value)
    }
    function handlePassword(e){
       setPassword(e.target.value)
       console.log(e.target.value)
    }
  
    function move(e){
         navigate('/components/signup')
    }
    function register(e){
    
          e.preventDefault();
          axios.post('http://localhost:3001/login',{email,password})
          .then(res=>{
                console.log(email+" "+password);
                if(res.data==="successful"){
                    alert("successful login")
                    navigate('/components/Imgunq')
                }
                else{
                    alert("invalid login/password.SignUp Instead if you don't have account ")
                }
          })
          .catch(err=>console.log(err));             
     }
    

    return(
        <div className="login">
             <center><img src={yourImage} id="imgunq"/></center>
             <form className="container-centered" method='POST'  onSubmit={register}>
                <p>Enter your details</p>
               <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" value={email} onChange={handleEmail}/>
                  <label htmlFor="floatingInput">Email address</label>
                 </div>
                <div className="form-floating">
                     <input type="password" className="form-control" id="floatingPassword" placeholder="Password"name={password} value={password} onChange={handlePassword} />
                     <label htmlFor="floatingPassword">Password</label>
                </div>
                 <br/>
                <br/>
        
                 <div className="d-flex justify-content-between align-items-center" id="centerdiv" >
                      <button type="submit" className="btn btn-light" id="login">Login</button>
                      <button type="button" className="btn btn-danger" id="signup" onClick={move} >SignUp</button>
                 </div>
                 </form>

        </div>
    )
}
export default Login