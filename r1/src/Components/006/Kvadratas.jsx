import KvadratoKvadratas from "./KvadratoKvadratas";

function Kvadratas({spalva1, spalva2}) {

    return (
        <div className="kvadratas" style={{backgroundColor: spalva1}}>
            <KvadratoKvadratas spalva2={spalva2}></KvadratoKvadratas>
        </div>
    )
}

export default Kvadratas;