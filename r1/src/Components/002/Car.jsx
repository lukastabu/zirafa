function Car(props) {

    return (
        <h2 style={{fontSize: props.size + 'px'}}>{props.color} {props.maker}</h2>
    )
}

export default Car;