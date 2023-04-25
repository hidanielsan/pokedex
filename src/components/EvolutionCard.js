export default function EvolutionCard({ nombre, url, id, justCap, crossCalling }) {


    return (
        <div className="col-5 text-center evolution-card mx-2 mb-3" style={{ display: "inline-block" }}
            onClick={e => { crossCalling(id) }}>
            <div className='col-12 d-inline-block'>
                <img className="card-img-top p-1 img-pokemon-evolutions" src={url} alt={nombre} />
            </div>
            <div className="col-12 d-inline-block mb-2">
                {justCap(nombre)}
            </div>
        </div>
    );
}
