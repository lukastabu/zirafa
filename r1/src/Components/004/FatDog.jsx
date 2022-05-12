import React from "react";

class FatDog extends React.Component {

    render() {
        return (
            <h3 style={{color: this.props.color}}>Fat Dog</h3>
        );
    }
    
}

export default FatDog;