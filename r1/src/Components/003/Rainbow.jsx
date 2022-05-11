function Rainbow(props) {

    return (
        <div>

        { 
            props.colors.map((c, i) => <div key={i}>{c}</div>) 
        }

        </div>
    )

}

export default Rainbow;