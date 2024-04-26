import React from 'react';
import Childcomponent from './Childcomponent.js';
class MyComponent extends React.Component {
    handlerChangeFirstName = (event) => {
        this.setState({ firstName: event.target.value });
    }
    handlerChangeLastName = (event) => {
        this.setState({ lastName: event.target.value });
    }
    handlerSubmit = (event) => {
        event.preventDefault();
        // console.log(">>> ", this.state);
    }
    state = {
        firstName: "",
        lastName: "",
        people: [{
            id: 0,
            name: 'Creola Katherine Johnson',
            profession: 'mathematician',
        }, {
            id: 1,
            name: 'Mario José Molina-Pasquel Henríquez',
            profession: 'chemist',
        }, {
            id: 2,
            name: 'Mohammad Abdus Salam',
            profession: 'physicist',
        }, {
            id: 3,
            name: 'Percy Lavon Julian',
            profession: 'chemist',
        }, {
            id: 4,
            name: 'Subrahmanyan Chandrasekhar',
            profession: 'astrophysicist',
        }]
    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName} onChange={(event) => { this.handlerChangeFirstName(event) }} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName} onChange={(event) => { this.handlerChangeLastName(event) }} /><br /><br />
                    <input type="submit" onClick={(event) => this.handlerSubmit(event)} />
                </form>
                <Childcomponent
                    name={this.state.firstName}
                    people={this.state.people}
                />
            </>
        )
    }
}
export default MyComponent;