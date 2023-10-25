import './item.css'

import { Link } from 'react-router-dom';
import React from "react";


const Item = ({ info }) => {

    return (
        <Link to={`/detalle/${info.id}`} className="film">
            <img src={info.image} alt="" />
            <p>{info.title}</p>
        </Link>
    );
}

export default Item;

    