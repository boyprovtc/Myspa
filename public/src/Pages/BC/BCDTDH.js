
import React, { useState } from 'react'

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
background-color:#E7E7E7 ;
`
const Section = styled.div`
width: 97%;
height:100%;
background-color: #fff;
margin:30px;
box-shadow: -5px 5px 5px gray;
`
const SecondSection = styled.div`
width: 97%;
height:500px;
background-color: #fff;
margin-top:80px;
margin-left: 30px;
box-shadow: -5px 5px 5px gray;
padding:30px;
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
                            </div>

                            <div className='midData' >
                                <label className='dataInfo' style={{ backgroundColor: '#7266BA' }}>Tổng số thanh toán <br />0</label>
                                <label className='dataInfo' style={{ backgroundColor: '#7266BA' }}>Tổng số thanh toán <br />0</label>
                                <label className='dataInfo' style={{ backgroundColor: '#ABD373' }}>Tổng số thanh toán <br />0</label>
                                <label className='dataInfo' style={{ backgroundColor: '#ABD373' }}>Tổng số thanh toán <br />0</label>
                            </div>

                            <table className='reportDataTbl' style={{
                                width: '100%',
                                alignItems: 'center',
                                marginTop: 50
                            }}>
                                <tr>
                                    <th className='Elements_reportDataTbl'>Mã đơn hàng/Chi nhánh</th>
                                    <th className='Elements_reportDataTbl'>Họ tên/ Số điện thoại/ Email/ Mã khách hàng</th>
                                    <th className='Elements_reportDataTbl'>Thời gian</th>
                                    <th className='Elements_reportDataTbl'>Thu Ngân</th>
                                    <th className='Elements_reportDataTbl'>Mã đơn hàng chi nhánh</th>
                                    <th className='Elements_reportDataTbl'>PTTT</th>
                                    <th className='Elements_reportDataTbl'>Số tiền thanh toán</th>
                                    <th className='Elements_reportDataTbl'>Nộp kế toán</th>
                                    <th className='Elements_reportDataTbl'>Ngày giờ KT nhận</th>
                                </tr>
                            </table>
                        </Section>

                        <button type='submit' style={{
                            backgroundColor: '#ABD373',
                            color: 'white',
                            width: 80,
                            height: 30,
                            fontSize: 13,
                            fontWeight: 'bold',
                            borderRadius: 20,
                            border: 'none',
                            float: 'right',
                            marginRight: 100
                        }}>Xác nhận</button>
                        <input type="checkbox" className='check' />
                        <SecondSection>
                            Tổng cộng 0 kết quả
                        </SecondSection>

                    </FirstContainer>
                </Container >
            </div>
        </>

    )
}

export default BCDTDH