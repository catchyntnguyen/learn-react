import React from 'react';
class AddComponent extends React.Component {
    state = {
        firstName: "",
        profession: ""
    }
    handlerChangeFirstName = (event) => {
        this.setState({ firstName: event.target.value });
    }

    handlerChangeProfession = (event) => {
        this.setState({ profession: event.target.value });
    }
    handlerSubmit = (event) => {
        event.preventDefault();
        if(!this.state.profession || !this.state.profession){
            alert('U should add params for form !!')
            return ;
        }
        this.props.addArrayPerson({
            id: Math.floor(Math.random() * 100) ,
            name: this.state.firstName,
            profession: this.state.profession
        })

        this.setState({
            firstName: "",
            profession:""
        });

    }

    render() {
        return (
            <form>
                <label htmlFor="fname">First name:</label><br />
                <input type="text" value={this.state.firstName} onChange={(event) => { this.handlerChangeFirstName(event) }} /><br />
                <label htmlFor="lname">Profession:</label><br />
                <input type="text" value={this.state.profession} onChange={(event) => { this.handlerChangeProfession(event) }} /><br /><br />
                <input type="submit" onClick={(event) => this.handlerSubmit(event)} />
            </form>
        )
    }
}
export default AddComponent;