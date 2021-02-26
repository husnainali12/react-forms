import React, { Component } from 'react';

 class Controlled extends Component {
     constructor() {
         super();
         this.state={
             name:""
         }
     }
     onInputChange = (event) => {
         this.setState({
             name: event.target.value
         })

     }
    handleSubmit =() => {
        
        console.log("Submit");
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={this.onInputChange} />
                <button disabled={this.state.name.length ? false : true} onClick={this.handleSubmit}> Controlled Submit </button>
                </div>
        );
    }
}
export default Controlled;