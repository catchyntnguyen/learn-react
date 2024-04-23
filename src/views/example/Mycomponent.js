import React from 'react';
class MyComponent extends React.Component{
    handlerChangeFirstName = (event) => {
        this.setState({firstName: event.target.value});
    }
    handlerChangeLastName = (event) => {
        this.setState({lastName: event.target.value});
    }
    handlerSubmit = (event) => {
        event.preventDefault();
        console.log(">>> ", this.state);
    }
    state = {
        firstName: "",
        lastName: ""
    }
    render () {
        let name = "Catchy"
        return(
            <>
            <form >
                <label htmlfor="fname">First name:</label><br/>
                <input type="text" value={this.state.firstName} onChange={(event) =>{this.handlerChangeFirstName(event)}} /><br/>
                <label htmlfor="lname">Last name:</label><br/>
                <input type="text" value={this.state.lastName} onChange={(event) =>{this.handlerChangeLastName(event)}}/><br/><br/>
                <input type="submit" onClick={(event) => this.handlerSubmit(event)} />
                </form>
            </>
        )
    }
}
export default MyComponent;