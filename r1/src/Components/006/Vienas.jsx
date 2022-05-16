function Vienas({ skaicius, spalva }) {

    return (
        <>
            {
                skaicius + 1 > 9 ? null : <h2 style={{color: spalva}}>{skaicius + 1}</h2>
            }
        </>
    )
}

export default Vienas;