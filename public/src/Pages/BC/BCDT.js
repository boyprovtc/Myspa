import React from 'react'


import '../../css/BCDT.css'
import styled from 'styled-components'
import * as AiIcons from 'react-icons/ai'

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

function BCDT() {
    return (
        <div className='BCDT'>
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
                            }}>Báo cáo doanh thu
                        </label>
                        <button className="btn"><AiIcons.AiOutlineCloudDownload /> Xuất </button>
                        <hr style={{
                            margin: '0 20px 20px 20px',
                            border: '2px solid #6E46C2',
                            opacity: 1
                        }} />
                        <div className='picker' style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 30,
                            marginLeft: 30

                        }} >
                            <input type="date" className='inputDate' onChange={e => setDate(e.target.value)} />
                            <label>Đến</label>
                            <input type="date" className='inputDate' onChange={e => setDate(e.target.value)} />
                            <button type='submit' style={{
                                backgroundColor: '#ABD373',
                                color: 'white',
                                width: 80,
                                height: 30,
                                fontSize: 13,
                                fontWeight: 'bold',
                                borderRadius: 20,
                                border: 'none'
                            }}>Xác nhận</button>
                        </div>
                        <label style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            marginLeft: 50,
                            marginTop: 50
                        }}>1. DOANH THU BÁN HÀNG (THỰC THU)</label>
                        <div className='Choice'>
                            <div class="dropdown"
                                style={{
                                    margin: 30
                                }}>
                                <button class="dropbtn">NV phụ trách</button>
                                <div class="dropdown-content">
                                    <a href="#">NV 1</a>
                                    <a href="#">NV 2</a>
                                    <a href="#">NV 3 3</a>
                                </div>
                            </div>
                            <div class="dropdown"
                                style={{
                                    margin: 30
                                }}>
                                <button class="dropbtn">NV liên hệ</button>
                                <div class="dropdown-content">
                                    <a href="#">NV 1</a>
                                    <a href="#">NV 2</a>
                                    <a href="#">NV 3</a>
                                </div>
                            </div>
                            <div class="dropdown"
                                style={{
                                    margin: 30
                                }}>
                                <button class="dropbtn">Nhóm KH</button>
                                <div class="dropdown-content">
                                    <a href="#">Nhóm 1</a>
                                    <a href="#">Nhóm 2</a>
                                    <a href="#">Nhóm 3</a>
                                </div>
                            </div>
                            <div class="dropdown"
                                style={{
                                    margin: 30
                                }}>
                                <button class="dropbtn">Nguồn KH</button>
                                <div class="dropdown-content">
                                    <a href="#">Nguồn 1</a>
                                    <a href="#">Nguồn 2</a>
                                    <a href="#">Nguồn 3</a>
                                </div>
                            </div>
                            <div class="dropdown"
                                style={{
                                    margin: 30
                                }}>
                                <button class="dropbtn">PTTT</button>
                                <div class="dropdown-content">
                                    <a href="#">PTTT 1</a>
                                    <a href="#">PTTT 2</a>
                                    <a href="#">PTTT 3</a>
                                </div>
                            </div>
                            <button type='reset' style={{
                                backgroundColor: '#fff',
                                color: 'black',
                                width: 100,
                                height: 30,
                                fontSize: 13,
                                fontWeight: 'bold',
                                borderRadius: 20,
                                border: '1px solid black'
                            }}> Khôi Phục </button>
                        </div>
                        <label style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            marginLeft: 50
                        }}>Đơn hàng</label>
                        <a href='BCDTDH' style={{ textDecoration: 'none' }}> <button type='submit' style={{
                            backgroundColor: '#ABD373',
                            color: 'white',
                            width: 200,
                            height: 30,
                            fontSize: 13,
                            fontWeight: 'bold',
                            borderRadius: 20,
                            border: 'none'
                        }}><AiIcons.AiOutlineRightCircle /> Xem báo cáo chi tiết</button></a>
                        <div className='DTmidData' >
                            <label className='DTdataInfo' >Tổng lượt thanh toán <br />0</label>
                            <label className='DTdataInfo' >Tổng tiền thanh toán <br />0</label>
                            <label className='DTdataInfo' >Tổng tiền đã nộp <br />0</label>
                            <label className='DTdataInfo' >Tổng phí TMDT <br />0</label>
                            <label style={{
                                backgroundColor: '#fff',
                                border: '1px solid #F26C4F',
                                color: '#F26C4F',
                                width: 250,
                                height: 80,
                                padding: 20,
                                fontSize: '16px',
                                fontWeight: 'bold'
                            }} >Tổng ghi nợ<br />0</label>
                        </div>
                        <label style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            marginLeft: 50,
                            marginTop: 100,
                        }}>Thẻ dịch vụ</label>
                        <a href='BCDTTDV' style={{ textDecoration: 'none' }}> <button type='submit' style={{
                            backgroundColor: '#ABD373',
                            color: 'white',
                            width: 200,
                            height: 30,
                            fontSize: 13,
                            fontWeight: 'bold',
                            borderRadius: 20,
                            border: 'none'
                        }}><AiIcons.AiOutlineRightCircle /> Xem báo cáo chi tiết</button></a>
                        <div className='DTmidData2' >
                            <label className='DTdataInfo2' >Tổng lượt thanh toán <br />0</label>
                            <label className='DTdataInfo2' >Tổng tiền thanh toán <br />0</label>
                            <label className='DTdataInfo2' >Tổng tiền đã nộp <br />0</label>
                            <label style={{
                                backgroundColor: '#fff',
                                border: '1px solid #F26C4F',
                                color: '#F26C4F',
                                width: 250,
                                height: 80,
                                padding: 20,
                                fontSize: '16px',
                                fontWeight: 'bold'
                            }}  >Tổng ghi nợ<br />0</label>
                        </div>

                        <label style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            marginLeft: 50,
                            marginTop: 100,
                        }}>Tổng cộng</label>
                        <div className='DTmidData3' >
                            <label className='DTdataInfo3' >Tổng doanh số<br />0</label>
                            <label className='DTdataInfo3' >Tổng doanh thu <br />0</label>
                            <label className='DTdataInfo3' >Tổng doanh thu <br />0</label>
                            <label style={{
                                backgroundColor: '#F26C4F',
                                border: '1px solid #F26C4F',
                                color: 'white',
                                width: 250,
                                height: 80,
                                padding: 20,
                                fontSize: '16px',
                                fontWeight: 'bold'
                            }}   >Tổng chi phí <br />0</label>
                        </div>
                        <hr />
                        <label style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            marginLeft: 50,
                            marginTop: 100,
                        }}>2. PTTT</label>
                        <br />
                        <label style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            marginLeft: 50,
                            marginTop: 100,
                        }}>Tổng tiền thanh toán</label>
                        <div className='DTmidData4' >
                            <label className='DTdataInfo4' >Chuyển khoản<br />0</label>
                            <label className='DTdataInfo4' >MOMO<br />0</label>
                            <label className='DTdataInfo4' >MPOS(ATM, Visa, Master)<br />0</label>
                            <label className='DTdataInfo4' >PAYON (QR Code)<br />0</label>
                            <label className='DTdataInfo4' >PAYOO<br />0</label>
                            <label className='DTdataInfo4' >PAYOO (QR Code)<br />0</label>
                            <label className='DTdataInfo4' >Thẻ ATM<br />0</label>
                            <label className='DTdataInfo4' >Tiền mặt<br />0</label>
                            <label className='DTdataInfo4' >Visa/Master<br />0</label>
                            <label className='DTdataInfo4' >Phương thức khác<br />0</label>
                            <label className='DTdataInfo4' >Tài khoản thưởng<br />0</label>
                            <label className='DTdataInfo4' >Tài khoản trả trước<br />0</label>
                        </div>
                        <hr />
                        <label style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            marginLeft: 50,
                            marginTop: 10,
                        }}>3. Tiền hàng</label>
                        <br />
                        <label style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            marginLeft: 50,
                            marginTop: 10,
                        }}>Thu chi tiền hàng</label>
                        <div className='endData' >
                            <label style={{
                                backgroundColor: '#fff',
                                border: '1px solid #ABD373',
                                color: '#ABD373',
                                width: 700,
                                height: 80,
                                padding: 20,
                                fontSize: '16px',
                                fontWeight: 'bold'
                            }}  >Tổng chi <br />0</label>
                            <label style={{
                                backgroundColor: '#fff',
                                border: '1px solid #F26C4F',
                                color: '#F26C4F',
                                width: 700,
                                height: 80,
                                padding: 20,
                                fontSize: '16px',
                                fontWeight: 'bold'
                            }}  >Tổng thu <br />0</label>
                        </div>
                        <hr />
                        <label style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            marginLeft: 50,
                            marginTop: 100,
                        }}>Tổng hợp</label>
                        <div className='Total' >
                            <label style={{
                                backgroundColor: '#7266BA',
                                color: 'white',
                                width: 450,
                                height: 80,
                                padding: 20,
                                fontSize: '16px',
                                fontWeight: 'bold'
                            }} >Tổng thu <br />0</label>
                            <label style={{
                                backgroundColor: '#ABD373',
                                color: 'white',
                                width: 450,
                                height: 80,
                                padding: 20,
                                fontSize: '16px',
                                fontWeight: 'bold'
                            }}  >Tổng chi <br />0</label>
                            <label style={{
                                backgroundColor: '#F26C4F', color: 'White',
                                width: 450,
                                height: 80,
                                padding: 20,
                                fontSize: '16px',
                                fontWeight: 'bold'
                            }}  >Lợi nhuận <br />0</label>
                        </div>
                    </Section>
                </FirstContainer>
            </Container>
        </div >
    )
}

export default BCDT