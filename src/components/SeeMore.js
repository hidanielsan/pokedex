import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import SeeMoreLoading from './SeeMoreLoading';
import { GrClose } from 'react-icons/gr';
import { BsChevronDoubleDown } from 'react-icons/bs';
import EvolutionCard from './EvolutionCard';


export default function SeeMore() {

    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    const { modal, activeLoading, setActiveLoading, setModal, dataModal, crossCalling, capHy } = useContext(DataContext)



    const justCap = (e) => {
        const splitStr = e.charAt(0).toUpperCase() + e.slice(1);
        return splitStr
    }





    const forEvolution2 = () => {
        let evolutionsHTML = []
        for (let i = 0; i < dataModal.evolution_2.name.length; i++) {
            evolutionsHTML.push(
                <EvolutionCard
                    nombre={dataModal.evolution_2.name[i]}
                    url={dataModal.evolution_2.url[i]}
                    id={dataModal.evolution_2.id[i]}
                    justCap={justCap}
                    crossCalling={crossCalling}
                />
            )
        }
        return evolutionsHTML
    }



    const forEvolution3 = () => {
        let evolutionsHTML = []
        for (let i = 0; i < dataModal.evolution_3.name.length; i++) {
            evolutionsHTML.push(
                <EvolutionCard
                    nombre={dataModal.evolution_3.name[i]}
                    url={dataModal.evolution_3.url[i]}
                    id={dataModal.evolution_3.id[i]}
                    justCap={justCap}
                    crossCalling={crossCalling}
                />
            )
        }
        return evolutionsHTML
    }



    const toFeet = (n) => {
        const realFeet = ((n * 0.393700) / 12);
        const feet = Math.floor(realFeet);
        const inches = ((realFeet - feet) * 12).toFixed(1);
        return `${feet}' ${inches}"`
    }



    const eggTester = () => {
        const eggGroups = []
        for (let i = 0; i < dataModal.egg_groups.length; i++) {
            eggGroups.push(
                <>{capHy(dataModal.egg_groups[i].name)}. </>
            )
        }
        return eggGroups
    }


    // console.log(dataModal);

    return (
        <>
            {modal &&
                (
                    <>
                        {activeLoading &&
                            (
                                <div className="seemore-modal">
                                    <div className="overlay" onClick={e => {
                                        setModal(!modal)
                                        setActiveLoading(!activeLoading)
                                    }}>
                                    </div>

                                    <div className="seemore-modal-content">
                                        <div className="card" style={{ borderRadius: "20px 20px 24px 24px" }}>


                                            <div className='image-box-see-more'>
                                                <div className="pokemon-type types-list-pokemon" key="types">
                                                    {
                                                        dataModal.types.map(types => (
                                                            <span className={types.type.name} key={types.type.name}>{capHy(types.type.name)}</span>
                                                        ))
                                                    }
                                                </div>

                                                <button className="btn close-modal-pokemon" key="close"
                                                    onClick={e => {
                                                        setModal(!modal)
                                                        setActiveLoading(!activeLoading)
                                                    }} style={{ borderRadius: "20px" }}>
                                                    <GrClose />
                                                </button>

                                                <img className="card-img-top mx-auto p-2 img-pokemon-modal" src={dataModal.url} alt={dataModal.name} />
                                            </div>


                                            <div className="card-body textos-pokemon pb-0" style={{ borderRadius: "20px" }}>

                                                <h5 className="card-title h4 text-white mt-2 mb-3">
                                                    {capHy(dataModal.name)} <span style={{ fontWeight: "100", fontSize: "22px" }}>({dataModal.original_name})</span>
                                                </h5>



                                                <div className="tab">
                                                    <button className="tablinks active" onClick={e => openCity(e, 'Details')}>Details</button>
                                                    <button className="tablinks" onClick={e => openCity(e, 'Abilities')}>Abilities</button>
                                                    <button className="tablinks" onClick={e => openCity(e, 'Evolutions')}>Evolutions</button>
                                                </div>



                                                <div id="Details" className="tabcontent" style={{ display: "block" }}>
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item bg-custom-pokemon text-white list-item-custom-pokemon pokemon-type pok-border-bottom" key="originalname">
                                                            <div className="pokemon-details col-6 d-inline-block pok-border-right" key="generation">
                                                                <strong>Generation:</strong><br />
                                                                {dataModal.generation}
                                                            </div>
                                                            <div className="pokemon-details col-6 d-inline-block" key="habitat">
                                                                <strong>Habitat:</strong><br />
                                                                {capHy(dataModal.habitat)}
                                                            </div>
                                                        </li>

                                                        <li className="col-12 list-group-item bg-custom-pokemon text-white list-item-custom-pokemon pokemon-type pok-border-bottom" key="details-2">
                                                            <div className="pokemon-details col-6 d-inline-block pok-border-right" key="height">
                                                                <strong>Height:</strong><br />
                                                                {dataModal.height} cm ({toFeet(dataModal.height)})
                                                            </div>
                                                            <div className="pokemon-details col-6 d-inline-block" key="weight">
                                                                <strong>Weight:</strong><br />
                                                                {dataModal.weight} kg ({(dataModal.weight / 0.45359237).toFixed(1)} lbs)
                                                            </div>
                                                        </li>

                                                        <li className="col-12 list-group-item bg-custom-pokemon text-white list-item-custom-pokemon pokemon-type" key="details-3">
                                                            <div className="pokemon-details col-6 d-inline-block pok-border-right" key="growthrate">
                                                                <strong>Growth Rate:</strong><br />
                                                                {capHy(dataModal.growth_rate)}
                                                            </div>
                                                            <div className="pokemon-details col-6 d-inline-block" key="egg_groups">
                                                                <strong>Egg Groups:</strong><br />
                                                                {eggTester()}
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>



                                                <div id="Abilities" className="tabcontent">
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item pokemon-type bg-custom-pokemon text-white list-item-custom-pokemon" key="abilities">Abilities:<br />
                                                            {
                                                                dataModal.abilities.map(abilities => (
                                                                    <span className={abilities.ability.name} key={abilities.ability.name}>{capHy(abilities.ability.name)}</span>
                                                                ))
                                                            }
                                                        </li>
                                                        <li className="list-group-item pokemon-type bg-custom-pokemon text-white list-item-custom-pokemon" key="weaknesses">Weaknesses:<br />
                                                            <span>More information soon...</span>
                                                        </li>
                                                    </ul>
                                                </div>



                                                <div id="Evolutions" className="tabcontent tabcontent-evolutions">
                                                    <ul className="list-group list-group-flush">
                                                        {Boolean(dataModal.evolution_2.name.length) && (
                                                            <li className="list-group-item pokemon-type bg-custom-pokemon text-white list-item-custom-pokemon" key="evolutions">



                                                                <EvolutionCard
                                                                    nombre={dataModal.evolution_1[0]}
                                                                    url={dataModal.evolution_1[1]}
                                                                    id={dataModal.evolution_1[2]}
                                                                    justCap={justCap}
                                                                    crossCalling={crossCalling}
                                                                />

                                                                <div className='d-block h1' style={{ marginTop: "-16px" }}>
                                                                    <BsChevronDoubleDown />
                                                                </div>

                                                                <div className="col-12 text-center" style={{ display: "inline-block" }} >
                                                                    {forEvolution2()}
                                                                </div>

                                                                <br />

                                                                {Boolean(dataModal.evolution_3.name.length) && (
                                                                    <>
                                                                        <div className='d-block h1' style={{ marginTop: "-16px" }}>
                                                                            <BsChevronDoubleDown />
                                                                        </div>
                                                                        {forEvolution3()}
                                                                    </>
                                                                )}
                                                            </li>
                                                        )}
                                                        {!Boolean(dataModal.evolution_2.name.length) && (
                                                            <li className="list-group-item pokemon-type bg-custom-pokemon text-white list-item-custom-pokemon" key="evolutions">
                                                                {dataModal.name} does not evolve.
                                                            </li>
                                                        )}
                                                    </ul>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        {!activeLoading &&
                            (
                                <SeeMoreLoading />
                            )}
                    </>
                )}
        </>
    );
}
