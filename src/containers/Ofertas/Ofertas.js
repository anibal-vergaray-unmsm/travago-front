import React, { useEffect, useState } from 'react';
import httpClient from "../../lib/httpClient";
import OfertasList from '../../components/Ofertas/OfertasList'

const Ofertas = () => {
    const [ofertas,setOfertas] = useState([]);

    useEffect( () =>{
        getOfertas()
        },[]);
    
    const getOfertas = async () =>{
        const response = await httpClient.get("/ofertas");
        console.log(response);
        setOfertas(response);
    };

    return(
        <OfertasList
        ofertas = {ofertas}
        />   
    );
}
export default Ofertas;