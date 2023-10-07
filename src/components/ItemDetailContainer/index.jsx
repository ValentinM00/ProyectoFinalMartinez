import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import "./ItemDeCo.css"

const productos = [
    {id:1, image:"https://http2.mlstatic.com/D_NQ_NP_2X_743845-MLA45515733687_042021-F.webp",
    category:"Ropahombre", title:"buzo celeste hombre"},
    { id:2, image:"https://http2.mlstatic.com/D_NQ_NP_2X_756095-MLA54877167391_042023-F.webp",
    category:"Ropahombre", title:"buzo negro hombre"},
    { id:3, image:"https://http2.mlstatic.com/D_NQ_NP_2X_938163-MLA52431374705_112022-F.webp",
    category:"Ropamujer", title:"pantalon mujer marron"},
    { id:4, image:"https://http2.mlstatic.com/D_NQ_NP_2X_920693-MLA70400622277_072023-F.webp",
    category:"Ropamujer", title:"pantalon negro mujer"},
];
    




export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        getData.then(res => setData(res.find(Ropa => Ropa.id === parseInt(detalleId))));
    }, [])


    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;