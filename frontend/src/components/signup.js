import React ,{useState}from 'react'
import { useNavigate } from 'react-router-dom';
import "./signupcss.css"
import yourImage from './Screenshot 2023-09-13 142610.png';
import axios from "axios"
const Signup=()=>{
    const navigate=useNavigate('')
     const [email,setEmail]=useState('')
     const [password,setPassword]=useState('')
     function handleEmail(e){
        setEmail(e.target.value)
     }
     function handlePassword(e){
        setPassword(e.target.value)
     }
     function register(e){
         e.preventDefault();
         axios.post('http://localhost:3001/register',{email,password})
         .then(res=>console.log(res.data))
         .catch(err=>console.log(err))
          alert("successfully regsitered.Reverting Back To Login")
         navigate('/')
     }



     return(
        <div className='signup'>
              <img src={yourImage} id="imgunq" />
       <form className="container-centered" id="formid" method='POST' onSubmit={register}>
        <p>Register here</p>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" value={email} onChange={handleEmail}/>
          <label htmlFor="floatingInput">Email address</label>
        </div>
        
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" value={password} onChange={handlePassword} />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <br/> 
        <input type="submit" className="btn btn-danger" id="submit"  value="Submit"/>
      </form>
        </div>
     )
}
export default Signup;