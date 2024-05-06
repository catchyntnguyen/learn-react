import React from 'react';
import Childcomponent from './Childcomponent.js';
import Addcomponent from './AddNewcomponent.js';
// import AddComponent from './addComponent.js';

class MyComponent extends React.Component {
 
  state = {
    people: [
      {
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
      },
      {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
      },
      {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
      },
      {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',
      },
      {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
      },
    ],
  };

  addArrayPerson = (person) => {
    console.log(person);
    this.setState(
      {people: [...this.state.people,person]}
    )
  }
  deleteArrayPerson = (personId) => {
    let arrPerson = this.state.people;
    let personCurrent = arrPerson.filter(person => person.id != personId);
    // console.log(personCurrent);
    this.setState(
      {people: personCurrent}
    )
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(">>previus State",prevState,">>>> state now: ",this.state.people);
  }

  componentDidMount() { // useually use to call api
    console.log(">>run componentDidMount");
  }


  render() {
    return (
      <>
        <Addcomponent 
          addArrayPerson={this.addArrayPerson}
         
        />
        <Childcomponent
          name={this.state.firstName}
          people={this.state.people}
          deleteArrayPerson={this.deleteArrayPerson}
        /> 
      </>
    );
  }
}

export default MyComponent;