import React from "react";

class FatCat extends React.Component {

    constructor() {
        super();
        this.state = {weight: 5}; //pradinis tiesiai
        // this.paspaudimas = this.paspaudimas.bind(this); old school
    }

    paspaudimas = () => {
        console.log('Ivyko butono paspaudimo procesas');
        // console.log(this);
        this.setState({weight: 6}); // keitimas tik per setState
    }

    render() {
        return (
            <>
            <h2>Fat Cat {this.props.color} {this.state.weight}kg</h2>
            <button onClick={this.paspaudimas}>Click Cat</button>
            </>
        );
    }
    
}

export default FatCat;