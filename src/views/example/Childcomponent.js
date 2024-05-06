import React from 'react';
class childComponent extends React.Component {
    state = {
        status: false
    }
    handleShowHide = () => {
        this.setState({ status: !this.state.status });
    }
    handleDelete = (id) => {  
        this.props.deleteArrayPerson(id);
    }
    render() {
        let { name, people } = this.props;
        let { status } = this.state;
        return (
            <>
               <div><button onClick={ ()=> this.handleShowHide()}>show</button></div>
                {status &&
                    <>
                 
                        <div className='list-person'>
                            {
                                people.map(person => {
                                    return <div key={person.id}>Name: {person.name} and Profession: {person.profession} | <span onClick={ () => this.handleDelete(person.id)}>x</span> |</div>
                                })
                            }
                            <div>
                                <button onClick={ ()=> this.handleShowHide() }>
                                    Hide
                                </button>
                            </div>
                        </div>
                    </>
                }
            </>
        )
    }
}

// let childComponent = (props) => {
//     console.log(">>>>>", props);
//     return (<div>Hello arrow function </div>)
// }
export default childComponent;