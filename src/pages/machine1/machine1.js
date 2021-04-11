import React from 'react';
import Form from "./machine1Form";
import Main from "../../images/machine-01.svg";
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img,
    Container
  } from './machine1.elements';

function machine() {
    return (
        <div>
        <InfoSec lightBg={true}>
        <Container>
          <InfoRow imgStart={true}>
            <InfoColumn>
              <TextWrapper>
                <Heading lightText={false}>Case A</Heading>
                <Subtitle lightTextDesc={false}>Both machines are placed in same phase sequence and there is no air gap flux.</Subtitle>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={true}>
                <Img src={Main} alt='dshjdbshjb' />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
            <Form />
        </div>
    )
}

export default machine;
