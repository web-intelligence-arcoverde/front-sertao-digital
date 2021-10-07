import React from 'react';
import * as S from './style'
// import { Container } from './styles';

const Contact= ({title,img}:any) => {
    return (
        <S.Container>
            <S.Img src={img}/>
            <p>{title}</p>
            
        </S.Container>
    )
}

export default Contact;