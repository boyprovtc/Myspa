import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  
 `
const MainContainer = styled.div`
width: 70%;
display:flex;
flex-direction:column;

`
const HeadContainer = styled.div`
width: 90%;
height: 50px;
background-color: cyan;
margin: 30px;
border-radius: 10px;
box-shadow: -5px 5px 5px gray;
`
const BodyContainer = styled.div`
width: 90%;
height: 500px;
background-color: lightgreen;
margin-left: 30px;
margin-right: 0;
`

const RightContainer = styled.div`
width: 20%;
`
const Shop = styled.div`
width: 100%;
height: 600px;
margin-top: 30px;
border-radius: 20px;
box-shadow: -5px 5px 5px gray;
background-color: #AC3BBE;
`


function KH() {
    return (
        <>
            <div>
                <div className='khachhang'>
                    <Container>


                        <MainContainer>
                            <HeadContainer>

                            </HeadContainer>
                            <BodyContainer>

                            </BodyContainer>

                        </MainContainer>
                        <RightContainer>
                            <Shop>

                            </Shop>
                        </RightContainer>
                    </Container>

                </div>
            </div>
        </>

    )
}

export default KH