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
        // let name = "Catchy"
        // console.log("check props>>> ", this.props)
        let {name} = this.props;
        return(
            <>
            <div>Childcomponent name: {name}</div>
            </>
        )
    }
}
export default childComponent;