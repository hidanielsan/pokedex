import logo from '../images/logo-pokedex.png';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { DataContext } from '../context/DataProvider';

export default function Navbar() {

    const { filterPokemon, pokemonFiltered, specificGeneration } = useContext(DataContext)

    return (
        <div className='menu-estatico mb-4'>
            <div className="bg-primary navbar-expand-lg text-white">
                <div className="container text-center py-2">
                    <Link className="nav-link px-2" to="/docs" style={{ fontSize: "14px" }}>
                        Documentation, API and Modules used on this project.
                    </Link>
                </div>
            </div>
            <div className="bg-danger navbar-expand-lg text-white">
                <div className="container">
                    <nav className="navbar navbar-dark">
                        <div className="col-6 col-lg-4 px-2">
                            <Link className="nav-link active" to="/">
                                <img src={logo} alt="Bienvenido a la Pokedex" className="logo-pokedex navbar-brand mx-auto mx-lg-3" />
                            </Link>

                        </div>
                        <div className="col-6 col-lg-4 px-2 px-lg-3">
                            <select className="form-select bg-danger text-white my-1 border-dark" aria-label="Default select example" onChange={e => specificGeneration(e.target.value)}>
                                <option value="0">All Generations</option>
                                <option value="1">Generation I</option>
                                <option value="2">Generation II</option>
                                <option value="3">Generation III</option>
                                <option value="4">Generation IV</option>
                                <option value="5">Generation V</option>
                                <option value="6">Generation VI</option>
                                <option value="7">Generation VII</option>
                                <option value="8">Generation VIII</option>
                            </select>
                        </div>
                        {/* <div className=" navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mr-auto nav-style-mobile ">
                                <li className="col-6 col-lg-7 nav-item mx-auto mx-lg-2 px-1" key="Home">
                                    <Link className="nav-link btn btn-danger active px-2" to="/">
                                        <strong>First Generation</strong>
                                    </Link>
                                </li>
                                <li className="col-6 nav-item mx-auto mx-lg-2 px-1" key="Favs">
                                    <Link className="nav-link btn btn-danger active px-2" to="/favoritos">
                                        <strong>Favorites</strong>
                                    </Link>
                                </li>
                            </ul>
                        </div> */}
                        <div className="col-12 col-lg-4 fav-counter my-2 my-lg-0 px-lg-3">
                            <form onSubmit={filterPokemon} className="col-12 mt-1">
                                <input
                                    className="form-control border-0"
                                    value={pokemonFiltered}
                                    type="search"
                                    placeholder="Search..."
                                    onChange={filterPokemon}
                                />
                            </form>
                            {/* <strong>You have {pokemonsFavoritos.length} favorites Pokemon <img src={heartR} alt="ícono decorazon" /></strong> */}
                        </div>
                    </nav>
                </div>
            </div>

        </div>
    );
}
