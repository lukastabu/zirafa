import React from "react";

class FatDog extends React.Component {

    constructor() {
        super();
        this.state = {font: 20};
    }

    spust = () => {
        this.setState({font: 40})
    }

    render() {
        return (
            <>
            <h3 style={{color: this.props.color, fontSize: this.state.font + 'px'}}>Fat Dog</h3>
            <button onClick={this.spust}>GO</button>
            </>
        );
    }
    
}

export default FatDog;