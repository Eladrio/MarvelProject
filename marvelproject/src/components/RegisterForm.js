import React, { Component } from 'react';

class RegisterForm extends React.Component {

    render() {
        return(
            <form>
                <h1>Create A Marvel Account</h1>
                <input type="text" placeholder="First Name"></input>
                <input type="text" placeholder="Last Name"></input>
                <input type="text" placeholder="User Name"></input>
                <input type="email" placeholder="email@address.com"></input>
                <input type="password" placeholder="Password"></input>
                <input type="password" placeholder="Password Confirmation"></input>
                <label><span>Gender</span><span>(Optional)</span></label>
                <input type="radio" name="gender" value="male"><label>Male</label></input>
                <input type="radio" name="gender" value="female"><label>Female</label></input>
                <input type="checkbox" name="newsletter" value="yes" checked><label>Yes, I'd like to receive newsletters,promotions, offers, and other information from Marvel.</label></input>
                <button type="button">CREATE ACCOUNT</button>
            </form>
        );
    }
}