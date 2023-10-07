import React from 'react'
import Css from './title.css'

export const Title = (props) => {
    return (
        <center><h1 className='title'>{props.greeting}</h1></center>
    );
    }

export default Title;