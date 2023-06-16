
import React from 'react'
import '../../css/BCDTDH.css'
import styled from 'styled-components'
import * as AiIcons from 'react-icons/ai'
const Container = styled.div`
display: flex;
flex-direction: column;
padding-top: 50px;
padding-left:200px;
`
const FirstContainer = styled.div`
background-color: pink;
`
const Section = styled.div`
width: 97%;
height:1000px;
background-color: #fff;
margin:30px;
box-shadow: -5px 5px 5px gray;
`
function BCDTDH() {
    return (
        <>
            <div className='BCDTDH'>
                <Container>
                    <FirstContainer>
                        <Section>
                            <label className='headerTitle'
                                style={{
                                    margin: 30,
                                    fontSize: 30,
                                    color: '#ABD373',
                                    opacity: 1,
                                    fontWeight: 'bold'
                                }}>Báo cáo doanh thu đơn hàng
                            </label>
                            <button class="btn"><AiIcons.AiOutlineCloudDownload /> Xuất </button>
                            <hr style={{
                                margin: '0 20px 20px 20px',
                                border: '2px solid #6E46C2',
                                opacity: 1
                            }} />

                            <input type='date' />
                        </Section>
                    </FirstContainer>


                </Container >
            </div>
        </>

    )
}

export default BCDTDH