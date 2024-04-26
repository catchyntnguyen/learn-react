import React from 'react';
class childComponent extends React.Component{
    render () {
        // let name = "Catchy"
        let {name, people} = this.props;
        return(
            <div className='list-person'>
                {
                    people.map(person =>{
                    return <div key={person.id}>{person.name}</div>
                    })
                }
            </div>
        )
    }
}
export default childComponent;