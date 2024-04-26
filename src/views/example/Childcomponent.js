import React from 'react';
class childComponent extends React.Component{
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
            <div>childComponent</div>
            </>
        )
    }
}
export default childComponent;