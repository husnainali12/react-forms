import React, { Component } from 'react';

 class Uncontrolled extends Component {
    handleSubmit =() => {
        console.log(this._name.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={(input) => this._name=input}/>
                <button onClick={this.handleSubmit}> Uncontrolled Submit </button>
                </div>
        );
    }
}
export default Uncontrolled;