function Antras({skaicius, spalva}) {

    return (
        <>
            {
                skaicius + 2 > 9 ? null : <h2 style={{color: spalva}}>{skaicius + 1}</h2>
            }
        </>
    )
}

export default Antras;