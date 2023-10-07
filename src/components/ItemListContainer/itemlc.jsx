import React, { useEffect, useState} from 'react';
import ItemList from '../ItemList';
import Title from '../Title/title';
import { useParams } from 'react-router-dom';


const Ropa = [
    {id:1, image:"https://http2.mlstatic.com/D_NQ_NP_2X_743845-MLA45515733687_042021-F.webp",
    category:"Ropahombre", title:"buzo celeste hombre"},
    { id:2, image:"https://http2.mlstatic.com/D_NQ_NP_2X_756095-MLA54877167391_042023-F.webp",
    category:"Ropahombre", title:"buzo negro hombre"},
    { id:3, image:"https://http2.mlstatic.com/D_NQ_NP_2X_938163-MLA52431374705_112022-F.webp",
    category:"Ropamujer", title:"pantalon mujer marron"},
    { id:4, image:"https://http2.mlstatic.com/D_NQ_NP_2X_920693-MLA70400622277_072023-F.webp",
    category:"Ropamujer", title:"pantalon negro mujer"},
];



export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect (() =>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(Ropa)
            }, 2000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(ropa => ropa.category === categoriaId)));
        } else {
            getData.then(res => setData(res));           
        }
    }, [categoriaId])

    


    return (
        <>
        <Title greeting = 'Lo ultimo y lo mas fachero' />
        <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;