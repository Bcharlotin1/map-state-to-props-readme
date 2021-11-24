import React, { Component } from "react";
import { connect } from "react-redux"; 

import "./App.css";

class App extends Component {

    handleOnClick = () => {
        this.props.dispatch({
          type: "INCREASE_COUNT",
        });
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.handleOnClick}>Click</button>
                <p>{this.props.clicks}</p>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return { clicks: state.clicks };
};

export default connect(mapStateToProps)(App);

//This is saying connect the data in mapStateToProps() (the clicks portion of the state) to the App component. And the App component can access that state with this.props.clicks.