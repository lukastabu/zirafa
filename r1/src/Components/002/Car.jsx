function Car(props) {

    return (
        <h2 style={
            {
                fontSize: props.size + 'px',
                fontFamily: props.ff
            }
        }>{props.color} {props.maker}</h2>
    )
}

export default Car;