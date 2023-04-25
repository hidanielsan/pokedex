import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

export default function Pokemon({ name, id, url }) {

    const { modal, setModal, seeMoreInfo, capHy } = useContext(DataContext)

    const callSeeMoreInfo = (e) => {
        setModal(!modal)
        seeMoreInfo(e)
    }

    return (
        <>
        {
            <div className="col-6 col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center px-2" style={{display : "inline-block", cursor: "pointer"}}
            onClick={(e) => callSeeMoreInfo(id)}>
                <div className="col-12 col-xs-12 col-md-12 col-lg-12 card mb-3 mx-0">
                    <span className="boton-fav p-1 pt-0">
                        #{id}
                    </span>
                    <div className="image-box">
                        <img className="card-img-top img-pokemon p-2 pb-2" src={url} alt={name} />
                    </div>
                    <div className="card-body text-white textos-pokemon pt-4">
                        <h5 className="card-title">
                            {capHy(name)}
                        </h5>
                        <button className="btn btn-danger px-2 py-1" onClick={(e) => callSeeMoreInfo(id)}>
                            See more
                        </button>
                    </div>
                </div>
            </div> }
        </>
    );
}
