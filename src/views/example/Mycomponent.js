import React from 'react';
class MyComponent extends React.Component{
    handleClickButton = () => {
        alert("Click button");
    }
    state = {
        name: "catchy"
    }
    render () {
        let name = "Catchy"
        return(
            <>
                <div className='first'> Nguyễn Trần {this.state.name} </div>
            <div className='second'>
                <button onClick={() => {this.handleClickButton()}} >click me</button>
            </div>
            </>
        )
    }
}
export default MyComponent;