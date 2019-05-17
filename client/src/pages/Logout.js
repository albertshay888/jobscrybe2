import React, { Component } from "react";
import API from "../utils/API";

class Logout extends Component {
    handleLogout= function(){
        API.logout()
        .then( resp=>{
            if(resp.status===200){
                console.log("success")
                this.props.logoutHandler()
            }
        })
    }

    componentDidMount(){
        this.handleLogout();
    }

    render(){
        return (
            <div>
              <h1>Thanks for using jobscrybe!</h1>
             
            </div>
               
        );
    }
}


export default Logout;