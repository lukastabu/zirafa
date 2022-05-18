function Button({clickButton, clickPlus}) {

    return (
        <>
        <button onClick={clickButton}>Make pink</button>
        <button onClick={clickPlus}>Plus</button>
        </>
    )
    
}

export default Button;