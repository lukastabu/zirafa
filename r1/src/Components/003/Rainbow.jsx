function Rainbow(props) {

    return (
        <div>

        { 
            props.colors.sort((a, b) => b.size - a.size).map((c, i) => <div key={i} className="rcolor" style={{backgroundColor: c.color, height: c.size + 'px' }}></div>) 
        }

        </div>
    )

}

export default Rainbow;