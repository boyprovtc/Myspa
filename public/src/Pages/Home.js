import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  
 `
const MainContainer = styled.div`
width: 70% ;
display:flex;
flex-direction:column;
background-color: red;
`
const HeadContainer = styled.div`
width: 95%;
height: 50px;
background-color: cyan;
margin: 30px;
border-radius: 10px;
box-shadow: -5px 5px 5px gray;
`
const BodyContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 95%;
height: 100%;
background-color: lightgreen;
margin-left: 30px;
margin-right: 30px;

`
const FisrtSection = styled.div`
width:  300px;
height: 300px;
margin: 30px;
background-color: lightblue;
border-radius: 10px;
box-shadow: -5px 5px 5px gray;
`
const SecondSection = styled.div`
width:  65%;
height: 300px;
margin-top: 30px;
background-color: lightblue;
border-radius: 10px;
box-shadow: -5px 5px 5px gray;
`
const ThirdSection = styled.div`
width:  94%;
height: 300px;
margin-left: 30px;
background-color: lightblue;
border-radius: 10px;
box-shadow: -5px 5px 5px gray;
`
const FourthSection = styled.div`
width:  300px;
height: 300px;
margin: 30px;
background-color: lightblue;
border-radius: 10px;
box-shadow: -5px 5px 5px gray;
`
const FifthSection = styled.div`
width:  65%;
height: 300px;
margin-top: 30px;
background-color: lightblue;
border-radius: 10px;
box-shadow: -5px 5px 5px gray;
`
const SixthSection = styled.div`
width:  300px;
height: 300px;
margin: 30px;
background-color: lightblue;
border-radius: 10px;
box-shadow: -5px 5px 5px gray;
`
const SeventhSection = styled.div`
width:  65%;
height: 300px;
margin-top: 30px;
background-color: lightblue;
border-radius: 10px;
box-shadow: -5px 5px 5px gray;
`

const RightContainer = styled.div`
width: 20%;
background-color: Yellow;

`
const Shop = styled.div`
width: 83%;
height: 600px;
margin: 30px;
border-radius: 20px;
box-shadow: -5px 5px 5px gray;
background-color: #AC3BBE;
`


function Home() {
    return (
        <>
            <div>
                <div className='home'>
                    <Container>


                        <MainContainer>
                            <HeadContainer>

                            </HeadContainer>
                            <BodyContainer>
                                <FisrtSection></FisrtSection>
                                <SecondSection></SecondSection>
                                <ThirdSection></ThirdSection>
                                <FourthSection></FourthSection>
                                <FifthSection></FifthSection>
                                <SixthSection></SixthSection>
                                <SeventhSection></SeventhSection>
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

export default Home