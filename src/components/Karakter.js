import React from "react";
import styled from "styled-components";

const KarakterContainer = styled.div`
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  border: 2px solid green;
  width: 40%;
  text-align:center;
  display: flex;
  flex-direction:column;
  justify-content:center;
  gap: 20px;
  align_items: center;
  flex-wrap: wrap;
`;

const KarakterAdi = styled.h2`
  margin-top: 0;
  display:flex;
  justify-content: center;
`;

function Karakter(props){
    return(
        <KarakterContainer>
            <KarakterAdi>{props.name} {props.birth}</KarakterAdi>
        </KarakterContainer>
    )
}

export default Karakter;
