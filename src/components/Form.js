import React from "react"

function Form(props){
    return(<div className="form">
            <form>
                <label>Name:
                <input 
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={props.firstName}
                    onChange={props.handleChange}
                /> 
                <input 
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={props.lastName}
                    onChange={props.handleChange}
                /> </label>
                <br/>
                <label>Job title:
                <input 
                    type="text"
                    name="jobTitle"
                    placeholder="Job title"
                    value={props.jobTitle}
                    onChange={props.handleChange}
                /> 
                </label>
                <br/>
                <label>Company name:
                <input 
                    type="text"
                    name="companyName"
                    placeholder="Company name"
                    value={props.companyName}
                    onChange={props.handleChange}
                /> 
                </label>
                <br/>
                <label>Company phone number:
                <input 
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone number"
                    value={props.phoneNumber}
                    onChange={props.handleChange}
                /> 
                </label>
                <br/>
                <label>Company physical address line 1:
                <input 
                    type="text"
                    name="address1"
                    placeholder="Address"
                    value={props.address1}
                    onChange={props.handleChange}
                /> 
                </label>
                <br/>
                <label>Company physical address line 2:
                <input 
                    type="text"
                    name="address2"
                    placeholder="Address"
                    value={props.address2}
                    onChange={props.handleChange}
                /> 
                </label>
                <br/>
                <label>Company email address:
                <input 
                    type="text"
                    name="emailAddress"
                    placeholder="Email address"
                    value={props.emailAddress}
                    onChange={props.handleChange}
                /> 
                </label>
                <br/>
                <label>Card color
                <input 
                    type="color"
                    name="backgroundColor"
                    value={props.backgroundColor}
                    onChange={props.handleChange}
                /> 
                </label>
                <br/>
                <label>Picture URL
                <input 
                    type="text"
                    name="pictureURL"
                    placeholder="Copy and paste a picture URL here"
                    value={props.pictureURL}
                    onChange={props.handleChange}
                /> 
                </label>
             </form>   
            </div>);
}

export default Form