import React from 'react';
import {Container,Img}from './style'


const Contact= ({title,img}:any) => {
    return (
        <Container>
            <Img src={img}/>
            <p>{title}</p>
            
        </Container>
    )
}

export default Contact;