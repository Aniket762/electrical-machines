import React from 'react';
import Form from "./machine2Form";
import Main from "../../images/machine-2.svg";
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
  } from './machine2.elements';

function machine() {
    return (
        <div>
        <InfoSec lightBg={true}>
        <Container>
          <InfoRow imgStart={true}>
            <InfoColumn>
              <TextWrapper>
                <Heading lightText={false}>Case B</Heading>
                <Subtitle lightTextDesc={false}>Both machines are placed in same phase sequence and there is air gap flux.</Subtitle>
                <Subtitle>
                <ul>
                <li>f1 = Frequency of supply given to machine 1</li>
                <li>f2 = Frequency of supply given to machine 2</li>
                <li>s1 = Slip of operation of machine 1</li>
                <li>s2 = Slip of operation of machine 2</li>
                <li>p1 = Number of poles in machine 1</li>
                <li>p2 = Number of poles in machine 2</li>
                </ul>
                </Subtitle>
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
