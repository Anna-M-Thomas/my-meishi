import React from 'react';
import Form from './components/Form'
import Meishi from './components/Meishi'
import Footer from './components/Footer'

class App extends React.Component {

  constructor(){
    super();
    this.state = {firstName: "Arr", 
                  lastName: "Imapirate", 
                  phoneNumber: "555-555-1234",
                  emailAddress: "arr@arr.com", 
                  companyName: "Wooden Legs Inc.",
                  jobTitle: "Buccaneer",
                  address1: "16500 Sailing the Open",
                  address2: "Seas on a Ship Matey Arrrr",
                  backgroundColor: "#aceace",
                  pictureURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Edward_England.svg/800px-Flag_of_Edward_England.svg.png"
                }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({ [event.target.name]: event.target.value});
    console.log(this.state);
  }

  render(){
      return (
        <div className="App">
          <Form handleChange={this.handleChange} />
          <Meishi data={this.state}/>
          <Footer />
        </div>
      );
  }
}

export default App;
