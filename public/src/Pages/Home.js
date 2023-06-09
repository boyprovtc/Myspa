import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  
 `
const MainContainer = styled.div`

`
const HeadContainer = styled.div`
width: 1450px;
height: 50px;
background-color: cyan;
margin: 30px;
border-radius: 5px;
box-shadow: -5px 5px 5px gray;
`
const BodyContainer = styled.div`
`

const RightContainer = styled.div`
width: 300px;
`
const Shop = styled.div`
width: 100%;
height: 600px;
margin-top: 30px;
border-radius: 20px;
box-shadow: -5px 5px 5px gray;
background-color: #AC3BBE;
`


function Home() {
    return (
        <>
            <div className='section'>
                <div className='home'>
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

export default Home