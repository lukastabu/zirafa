function Rainbow(props) {

    return (
        <div>

        { 
            props.colors.filter(c => c.pos === 'top').map((c, i) => <div key={i} className="rcolor" style={{backgroundColor: c.color, height: (c.size > 30 ? c.size : 30) + 'px' }}></div>) 
        }

        <div className="rcolor" style={{backgroundColor: 'black', height: '20px'}}></div>

        { 
            props.colors.filter(c => c.pos === 'bottom').map((c, i) => <div key={i} className="rcolor" style={{backgroundColor: c.color, height: (c.size > 30 ? c.size : 30) + 'px' }}></div>) 
        }


        </div>
    )

}

export default Rainbow;