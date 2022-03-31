import React from "react";
import styled from "styled-components"
import Facebook from "./imgFoter/facebook.png"
import Instagram from "./imgFoter/instagram.png"
import Twitter from"./imgFoter/twitter.png"





const ContainerFooter = styled.footer`
padding: 20px;
display: flex;
justify-content: space-evenly;
img{
    width:50px;
    height: 50px;
}

`
export function Footer() {
    return (
        <ContainerFooter>
           <a target="_blank" href="https://www.facebook.com/" > <img src={Facebook}/></a>
           <a target="_blank" href="https://www.instagram.com/" ><img src={Instagram}/></a>
          <a target="_blank" href="https://twitter.com/"><img src={Twitter}/></a>
        </ContainerFooter>
    )
}

