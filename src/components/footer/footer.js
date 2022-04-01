import React from "react";
import styled from "styled-components"

import Twitter from "../imgFoter/twitter.png"
import Facebook from "../imgFoter/facebook.png"
import Instagram from "../imgFoter/instagram.png"





const ContainerFooter = styled.footer`
display: flex;
flex-direction: column;

div:nth-child(1){
    padding: 20px;
display: flex;
justify-content: space-evenly;
}
img{
    width:50px;
    height: 50px;
}
p{
    margin: 0 auto;
    text-align: center;
    color: #8BCB96;
}
`
export default function Footer() {
    return (
        <ContainerFooter>
            <div>
                <a target="_blank" href="https://www.facebook.com/" rel="noopener noreferrer" > <img src={Facebook} alt={'Icone do Facebook'} /></a>
                <a target="_blank" href="https://www.instagram.com/" rel="noopener noreferrer" ><img src={Instagram} alt={'Icone do Instagran'} /></a>
                <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer" ><img src={Twitter} alt={'Icone do Twitter'} /></a>
            </div>
            <div>
                <p>© Copyright 2021 - Alpha Geek Squad</p>
            </div>
        </ContainerFooter>
    )
}

