import React from 'react'


import '../../css/BCDTN.css'
import styled from 'styled-components'
import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'

const Container = styled.div`
display: flex;
flex-direction: column;
padding-top: 50px;
padding-left:200px;
`
const FirstContainer = styled.div`
background-color:#E7E7E7 ;
`
const Section = styled.div`
width: 97%;
height:100%;
background-color: #fff;
margin:30px;
box-shadow: -5px 5px 5px gray;
`


function BCDTN() {
    return (
        <div className='BCDTN'>
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
                            }}>Báo cáo doanh thu năm
                        </label>

                        <hr style={{
                            margin: '0 20px 20px 20px',
                            border: '2px solid #6E46C2',
                            opacity: 1
                        }} />

                        <div style={{ display: 'flex' }}>
                            <div className='RP_Chart' style={{
                                width: '70%',
                                height: 450,
                                border: '1px solid black',
                                margin: 30
                            }}>
                                <div className='DTNLabel' style={{
                                    backgroundColor: '#7266BA',
                                    height: 80, width: '100%',
                                    alignItems: 'center',

                                    display: 'flex'
                                }}>
                                    <label style={{
                                        marginLeft: 20,
                                        fontSize: 26,
                                        color: 'white',
                                        fontWeight: 'bold'
                                    }}>Báo cáo doanh thu</label>
                                    <button style={{
                                        marginLeft: 750,
                                        width: 80,
                                        height: 40,
                                        borderRadius: 20,
                                        border: 'none'
                                    }}>2023</button>
                                </div>
                                <label className='Doanhthu' style={{
                                    marginTop: 50,
                                    marginLeft: '80%',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}> <GiIcons.GiPlainCircle style={{
                                    color: '#ABD373',
                                    fontSize: 10,
                                    borderRadius: 10,
                                    marginRight: 10
                                }} /> Doanh thu (Triệu VNĐ)</label>
                                <div style={{ display: 'flex', textAlign: 'right', alignItems: 'center', marginLeft: 10 }}>
                                    <table style={{ height: 250, fontSize: 11 }}>
                                        <tr><th style={{ border: 'none' }}>1</th></tr>
                                        <tr><th style={{ border: 'none' }}>0.5</th></tr>
                                        <tr><th style={{ border: 'none' }}>0</th></tr>
                                        <tr><th style={{ border: 'none' }}>-0.5</th></tr>
                                        <tr><th style={{ border: 'none' }}>-1</th></tr>
                                    </table>
                                    <table style={{ marginLeft: 10, fontSize: 8, height: 200 }}>
                                        <tr>
                                            <th className='RpChartElement'></th>
                                            <th className='RpChartElement'></th>
                                            <th className='RpChartElement'></th>
                                            <th className='RpChartElement'></th>
                                            <th className='RpChartElement'></th>
                                            <th className='RpChartElement'></th>
                                            <th className='RpChartElement'></th>
                                            <th className='RpChartElement'></th>
                                            <th className='RpChartElement'></th>
                                            <th className='RpChartElement'></th>
                                            <th className='RpChartElement'></th>
                                            <th className='last column' style={{ border: 'none' }}></th>
                                        </tr>
                                        <tr>
                                            <td className='RpChartElement'><hr className='hr2' /></td>
                                            <td className='RpChartElement'><hr className='hr2' /></td>
                                            <td className='RpChartElement'><hr className='hr2' /></td>
                                            <td className='RpChartElement'><hr className='hr2' /></td>
                                            <td className='RpChartElement'><hr className='hr2' /></td>
                                            <td className='RpChartElement'><hr className='hr2' /></td>
                                            <td className='RpChartElement'><hr className='hr2' /></td>
                                            <td className='RpChartElement'><hr className='hr2' /></td>
                                            <td className='RpChartElement'><hr className='hr2' /></td>
                                            <td className='RpChartElement'><hr className='hr2' /></td>
                                            <td className='RpChartElement'><hr className='hr2' /></td>
                                            <th className='last column' style={{ border: 'none' }}></th>
                                        </tr>
                                        <tr>
                                            <td className='RpChartElement'></td>
                                            <td className='RpChartElement'></td>
                                            <td className='RpChartElement'></td>
                                            <td className='RpChartElement'></td>
                                            <td className='RpChartElement'></td>
                                            <td className='RpChartElement'></td>
                                            <td className='RpChartElement'></td>
                                            <td className='RpChartElement'></td>
                                            <td className='RpChartElement'></td>
                                            <td className='RpChartElement'></td>
                                            <td className='RpChartElement'></td>
                                            <th className='last column' style={{ border: 'none' }}></th>
                                        </tr>
                                    </table>
                                </div>
                                <table style={{ textAlign: 'left', marginLeft: 50, width: 1150 }}>
                                    <tr>
                                        <th style={{ border: 'none', fontSize: 10 }}>Một</th>
                                        <th style={{ border: 'none', fontSize: 10 }}>Hai</th>
                                        <th style={{ border: 'none', fontSize: 10 }}>Ba</th>
                                        <th style={{ border: 'none', fontSize: 10 }}>Bốn</th>
                                        <th style={{ border: 'none', fontSize: 10 }}>Năm</th>
                                        <th style={{ border: 'none', fontSize: 10 }}>Sáu</th>
                                        <th style={{ border: 'none', fontSize: 10 }}>Bảy</th>
                                        <th style={{ border: 'none', fontSize: 10 }}>Tám</th>
                                        <th style={{ border: 'none', fontSize: 10 }}>Chín</th>
                                        <th style={{ border: 'none', fontSize: 10 }}>Mười</th>
                                        <th style={{ border: 'none', fontSize: 10 }}>Mười một</th>
                                        <th style={{ border: 'none', fontSize: 10 }}>Mười hai</th>
                                    </tr>
                                </table>
                            </div>
                            <div className='indebt' style={{
                                width: '25%',
                                height: 450,
                                border: '1px solid black',
                                marginTop: 30
                            }}>
                                <div className='DTNLabel' style={{
                                    backgroundColor: '#7266BA',
                                    height: 80, width: '100%',
                                    alignItems: 'center',

                                    display: 'flex'
                                }}>
                                    <label style={{
                                        marginLeft: 20,
                                        fontSize: 16,
                                        color: 'white',
                                        fontWeight: 'bold'
                                    }}>Tỉ lệ ghi nợ</label>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <label className='Doanhthu' style={{
                                        marginTop: 50,
                                        marginLeft: 10,
                                        marginTop: 340,
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize: 16
                                    }}> <GiIcons.GiPlainCircle style={{
                                        color: '#ABD373',
                                        fontSize: 10,
                                        borderRadius: 10,
                                        marginRight: 10
                                    }} /> Doanh thu</label>
                                    <label className='Doanhthu' style={{
                                        marginTop: 50,
                                        marginLeft: 10,
                                        marginTop: 340,
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize: 16
                                    }}> <GiIcons.GiPlainCircle style={{
                                        color: 'red',
                                        fontSize: 10,
                                        borderRadius: 10,
                                        marginRight: 10
                                    }} /> Ghi nợ</label>
                                </div>

                            </div>
                        </div>
                        <hr />
                        <div className='YrpData'>
                            <label style={{
                                height: 80,
                                width: 450,
                                textAlign: 'center',
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                fontSize: 18,
                                fontWeight: 'bold',
                                border: '1px solid #ABD373',
                                color: '#ABD373'
                            }}>Doanh thu đơn hàng<br />0</label>
                            <label style={{
                                height: 80,
                                width: 450,
                                border: '1px solid #ABD373',
                                color: '#ABD373',
                                textAlign: 'center',
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                fontSize: 18,
                                fontWeight: 'bold'
                            }}>Doanh thu thẻ dịch vụ<br />0</label>
                            <label style={{
                                height: 80,
                                width: 450,
                                border: '1px solid #ABD373',
                                backgroundColor: '#ABD373',
                                color: '#fff',
                                textAlign: 'center',
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                fontSize: 18,
                                fontWeight: 'bold'
                            }}>Tổng tiền <br />0</label>
                            <label style={{
                                height: 80,
                                width: 450,
                                border: '1px solid #F26C4F',
                                color: '#F26C4F',
                                textAlign: 'center',
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                fontSize: 18,
                                fontWeight: 'bold'
                            }}>Ghi nợ đơn hàng<br />0</label>
                            <label style={{
                                height: 80,
                                width: 450,
                                border: '1px solid #F26C4F',
                                color: '#F26C4F',
                                textAlign: 'center',
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                fontSize: 18,
                                fontWeight: 'bold'
                            }}>Ghị nợ thẻ dịch vụ<br />0</label>
                            <label style={{
                                height: 80,
                                width: 450,
                                border: '1px solid #F26C4F',
                                backgroundColor: '#F26C4F',
                                color: '#fff',
                                textAlign: 'center',
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                fontSize: 18,
                                fontWeight: 'bold'
                            }}>Tổng dịch vụ<br />0</label>
                        </div>
                    </Section>
                </FirstContainer>
            </Container>
        </div>
    )
}

export default BCDTN