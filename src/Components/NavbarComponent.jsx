import { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../Context/appContext";

const NavbarComponent=()=>{
    const {searchQuery,setSearchQuery} = useContext(AppContext);

    const [ubication , setUbication] = useState('');

    const handleInputChange=({target})=>{
        setUbication(target.value);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        setSearchQuery(ubication);
        setUbication("");
    }

    return(
        <>
        <div className="title ms-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cloud-fog" width="23" height="23" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 16a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12" />
                <line x1="5" y1="20" x2="19" y2="20" />
            </svg>

            <h1>Clima App</h1>
        </div>
        <form onSubmit={handleSubmit} className="buscador">
            <input 
            placeholder="Inserte nombre de localidad" 
            type="text" 
            value={ubication}
            onChange={handleInputChange}
            className="form-control"
            autoFocus
            required
            />
            <button type="submit" className="btn btn-primary me-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg></button>
        </form>
        </>
    )
}

export default NavbarComponent;