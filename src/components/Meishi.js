import React from "react"

function Meishi(props){
return(<div className="meishi" style={{backgroundColor: props.data.backgroundColor}}>

            <div className="meishiTop">
                <div>
                    <img className="meishiImg" 
                    alt="business card graphic" 
                    src={props.data.pictureURL} />
                </div>    
                <div className="meishiTopText">
                    <span className="companyName">{props.data.companyName}</span>
                    <p>{props.data.jobTitle}</p>   
                    <span className="name">{props.data.firstName} {props.data.lastName}</span>
                </div>
            </div>

            <div className="meishiBottom">
                <div className="addressDiv">
                    <div>{props.data.address1} {props.data.address2}</div>
                </div>
                <div className="emailPhoneDiv">
                    <span>{props.data.phoneNumber}</span>
                    <span>{props.data.emailAddress}</span>
                </div>
            </div>
        </div>
        );
}

export default Meishi