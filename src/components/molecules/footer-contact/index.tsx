import React from 'react';
import {Container,Img}from './style'


const Contact= ({title,descripton,descripton2}:any) => {
    return (
        <Container>
            <h3>{title}</h3>
            <p>{descripton}</p>
            <p>{descripton2}</p>
            
        </Container>
    )
}

export default Contact;