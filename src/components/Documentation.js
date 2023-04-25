export default function Documentation() {


    return (
        <div className="container text-white" style={{ marginTop: "185px" }}>
            <h1 className='mb-4 px-2'>Documentation, API and Modules.</h1>
            <div className="row px-2 mb-5" style={{ fontSize: "18px" }}>
                <p>Hi, I'm Daniel. I'm a Software Engineer. <a href="https://www.linkedin.com/in/dsandovalp/" target="_blank" rel="noreferrer">My LinkedIn</a></p>
                <p>I made this app using React.js, JavaScript, HTML5, CSS3 and API integration.</p>
                <p>This app started as a project for the University (<a href="https://6380c7eada05a61aa74a4f50--pokedex-by-daniel.netlify.app/" target="_blank" rel="noreferrer">this was the first version</a>), but then I gave it some extra hours to make it more complete and functional. I will add more features in the future.</p>
                <h2>RESTful API:</h2>
                <ul className="custom-list-docs">
                    <li>
                        <a href="https://pokeapi.co/api/v2/pokemon?limit=898&offset=0" target="_blank" rel="noreferrer" key="pokemons">https://pokeapi.co/api/v2/pokemon?limit=898&offset=0</a>
                    </li>
                </ul>
                <h2>Modules:</h2>
                <ul className="custom-list-docs">
                    <li className="">Axios</li>
                    <li className="">React Loading Skeleton</li>
                    <li className="">React Icons</li>
                    <li className="">React Router DOM</li>
                    <li className="">React Infinite Scroll Component</li>
                </ul>
                <h2>Hooks:</h2>
                <ul className="custom-list-docs">
                    <li className="">useState</li>
                    <li className="">useContext</li>
                    <li className="">useEffect</li>
                </ul>
            </div>
        </div>
    );
}





