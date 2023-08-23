import React from "react";
import { useState } from "react";

const Form = () => {
    const [details,setDetails]=useState({name:"",email:"",password:""})
    

    function formvalidation(e){
         e.preventDefault();
         console.log(details)
    }
    return (
        <form onSubmit={formvalidation}>
            <label for="name">Name
                <input type="text" placeholder="Please write your name" name="name" value={details.name} onChange={(e) => { setDetails({ ...details, name: e.target.value }) }} ></input></label><br></br>
            <label for="email">Email<input type="email" placeholder="Please write your email" name="email" value={details.email} onChange={(e) => { setDetails({ ...details, email: e.target.value }) }}></input></label><br></br>
            <label for="password">Create Password
                <input type="password" placeholder="password" name="password" value={details.password} onChange={(e) => { setDetails({ ...details, password: e.target.value }) }}></input>
            </label><br></br>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;