import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import styled from 'styled-components'
import '../css/home.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Container = styled.div`
  display: flex;
  padding-top 50px;
  padding-left:200px;
  
 `
const MainContainer = styled.div`
width: 80% ;
display:flex;
flex-direction:column;
background-color: #E7E7E7;
`
const HeadContainer = styled.div`
width: 95%;
height: 50px;
background-color: #fff;
margin: 30px;
border-radius: 10px;
box-shadow: -5px 5px 5px gray;
font-size: 30px;


`
const BodyContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 95%;
height: 100%;
background-color: #E7E7E7;
margin-left: 30px;
margin-right: 30px;

`
const FisrtSection = styled.div`
width:  400px;
height: 400px;
background-color: #fff;
border-radius: 10px;
margin-right:30px;
margin-bottom: 30px;
box-shadow: -5px 5px 5px gray;
text-align: center;
`
const SecondSection = styled.div`
width:  66.73%;
height: 400px;
margin-bottom: 30px;
background-color: #fff;
border-radius: 10px;
box-shadow: -5px 5px 5px gray;
display:flex;
`
const ThirdSection = styled.div`
width:  100%;
height: 400px;
background-color: #E7E7E7;
margin-bottom: 30px;
display: flex;
`
const FourthSection = styled.div`
width:  400px;
height: 400px;
background-color: #fff;
border-radius: 10px;
margin-right:30px;
margin-bottom: 30px;
box-shadow: -5px 5px 5px gray;
text-align: center;
padding: 20px;
font-size: 25px;
font-weight: bold;
color: #7e7e7e;
`
const FifthSection = styled.div`
width:  66.73%;
height: 400px;
margin-bottom: 30px;
background-color: #fff;
border-radius: 10px;
box-shadow: -5px 5px 5px gray;
`
const SixthSection = styled.div`
width:  400px;
height: 400px;
background-color: #fff;
border-radius: 10px;
margin-right:30px;
margin-bottom: 30px;
box-shadow: -5px 5px 5px gray;
text-align: center;

padding: 20px;
font-size: 25px;
font-weight: bold;
color: #7e7e7e;
`
const SeventhSection = styled.div`
width:  66.73%;
height: 400px;
margin-bottom: 30px;
background-color: #fff;
border-radius: 10px;
box-shadow: -5px 5px 5px gray;
`

const RightContainer = styled.div`
width: 20%;
background-color: #E7E7E7;

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

    const percentage = 66;

    <CircularProgressbar value={percentage} text={`${percentage}%`} />;

    return (
        <>
            <div>
                <div className='home'>
                    <Container>
                        <MainContainer>
                            <HeadContainer>
                                <text>Hello user!</text>
                                <AiIcons.AiOutlineGift />
                            </HeadContainer>
                            <BodyContainer>
                                <FisrtSection>
                                    <label className='fst_label1'>
                                        Hôm nay
                                    </label>
                                    <br />
                                    <label className='fst_label2'>
                                        (Wednesday, 10/05/2023)
                                    </label>
                                    <div className='ProgressArea'>
                                        <div className='progresscircle'>
                                            <div className='skilled'>
                                                <div className='outer'>
                                                    <div className='inner'>
                                                        <div className='number' style={{ color: '#7266BA' }}>
                                                            0%
                                                        </div>
                                                    </div>
                                                </div>
                                                <svg className='circleprogress' xmlns="http://www.w3.org/2000/svg" version="1.1" width="100px" height="100px">

                                                    <circle cx="50" cy="50" r="45" />
                                                </svg>
                                            </div>
                                            <text style={{ fontSize: 18, width: 150, textAlign: 'center', marginLeft: 75, color: '#898989' }}>Đặt chỗ mới</text>
                                        </div>
                                        <div className='progresscircle'>
                                            <div className='skilled'>
                                                <div className='outer'>
                                                    <div className='inner'>
                                                        <div className='number' style={{ color: '#7266BA' }}>
                                                            0%
                                                        </div>
                                                    </div>
                                                </div>
                                                <svg className='circleprogress' xmlns="http://www.w3.org/2000/svg" version="1.1" width="100px" height="100px">

                                                    <circle cx="50" cy="50" r="45" />
                                                </svg>
                                            </div>
                                            <text style={{ fontSize: 18, width: 150, textAlign: 'center', marginLeft: 75, color: '#898989' }}>Đặt hẹn</text>
                                        </div>
                                        <div className='progresscircle'>
                                            <div className='skilled'>
                                                <div className='outer'>
                                                    <div className='inner'>
                                                        <div className='number' style={{ color: '#ABD373' }}>
                                                            0%
                                                        </div>
                                                    </div>
                                                </div>
                                                <svg className='circleprogress' xmlns="http://www.w3.org/2000/svg" version="1.1" width="100px" height="100px">

                                                    <circle cx="50" cy="50" r="45" />
                                                </svg>
                                            </div>
                                            <text style={{ fontSize: 18, width: 150, textAlign: 'center', marginLeft: 75, color: '#898989' }}>ĐK KH mới</text>
                                        </div>
                                        <div className='progresscircle'>
                                            <div className='skilled'>
                                                <div className='outer'>
                                                    <div className='inner'>
                                                        <div className='number' style={{ color: '#ABD373' }}>
                                                            0%
                                                        </div>
                                                    </div>
                                                </div>
                                                <svg className='circleprogress' xmlns="http://www.w3.org/2000/svg" version="1.1" width="100px" height="100px">

                                                    <circle cx="50" cy="50" r="45" />
                                                </svg>
                                            </div>
                                            <text style={{ fontSize: 18, width: 150, textAlign: 'center', marginLeft: 75, color: '#898989' }}>Đơn hàng</text>
                                        </div>
                                    </div>


                                </FisrtSection>
                                <SecondSection>
                                    <div className='Scd_FirstState'>
                                        <div className='scd_label'>
                                            Hôm nay
                                            <br />
                                            (Wednesday, 10/05/2023)
                                        </div>

                                        <div className='Income_Area'>
                                            <div className='fst_row' style={{ padding: 50, display: 'flex', gap: 300 }}>
                                                <div className='income_item'>0đ<br />Thực thu</div>
                                                <div className='income_item'>0đ<br />Ghi nợ</div>
                                            </div>
                                            <div className='scd_row' style={{ textAlign: 'center', fontWeight: 'bold', color: '#fff' }}>Bán hàng</div>
                                            <div className='thr_row' style={{ padding: 50, display: 'flex', gap: 300 }}>
                                                <div className='income_item'>0đ<br />Thực thu</div>
                                                <div className='income_item'>0đ<br />Ghi nợ</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='Scd_SecondState'>
                                        <div style={{ margin: 20, color: '#fff', fontSize: 20, fontWeight: 'bold' }}>
                                            Tỉ lệ thanh toán
                                        </div>
                                        <div className='ProgressBar'>
                                            <div className='fst_row' style={{ paddingLeft: 20, paddingTop: 50, display: 'flex', color: '#fff' }}>
                                                <div style={{ fontSize: 13, marginRight: 135 }}>Bán hàng</div><div style={{ fontSize: 13, }}>0%</div>
                                            </div>
                                            <div className='scd_progressBar'></div>
                                            <div style={{ fontSize: 13, color: '#fff', paddingLeft: 215 }}>0đ</div>
                                        </div>
                                        <div className='ProgressBar'>
                                            <div className='fst_row' style={{ paddingLeft: 20, paddingTop: 50, display: 'flex', color: '#fff' }}>
                                                <div style={{ fontSize: 13, marginRight: 124 }}>Thẻ dịch vụ</div><div style={{ fontSize: 13, }}>0%</div>
                                            </div>
                                            <div className='scd_progressBar'></div>
                                            <div style={{ fontSize: 13, color: '#fff', paddingLeft: 215 }}>0đ</div>
                                        </div>
                                    </div>
                                </SecondSection>
                                <ThirdSection>
                                    <div className='SingleState'>
                                        <div className='thr_label' style={{ textAlign: 'center', marginTop: 15, fontSize: 20 }}>
                                            Hôm nay
                                            <br />
                                            <div style={{ fontSize: 10 }}>(Wednesday, 10/05/2023)</div>
                                        </div>
                                        <div className='dataNumber'>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'lightgreen' }}>0</div><div style={{ fontSize: 12 }}>Chưa xác nhận</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'orange' }}>0</div><div style={{ fontSize: 12 }}>Chưa xác nhận</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'lightblue' }}>0</div><div style={{ fontSize: 12 }}>Chưa xác nhận</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'cyan' }}>0</div><div style={{ fontSize: 12 }}>Chưa xác nhận</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'pink' }}>0</div><div style={{ fontSize: 12 }}>Chưa xác nhận</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'yellow' }}>0</div><div style={{ fontSize: 12 }}>Chưa xác nhận</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div style={{ fontSize: 13, fontWeight: 'bold' }}>Không có lịch hẹn</div>
                                    </div>
                                    <div className='SingleState'>
                                        <div className='thr_label' style={{ textAlign: 'center', marginTop: 15, fontSize: 20 }}>
                                            Ngày mai
                                            <br />
                                            <div style={{ fontSize: 10 }}>(Thursday, 11/05/2023)</div>
                                        </div>
                                        <div className='dataNumber'>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'lightgreen' }}>0</div><div style={{ fontSize: 12 }}>Chưa xác nhận</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'orange' }}>0</div><div style={{ fontSize: 12 }}>Chưa xác nhận</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'lightblue' }}>0</div><div style={{ fontSize: 12 }}>Chưa xác nhận</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'cyan' }}>0</div><div style={{ fontSize: 12 }}>Chưa xác nhận</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'pink' }}>0</div><div style={{ fontSize: 12 }}>Chưa xác nhận</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'yellow' }}>0</div><div style={{ fontSize: 12 }}>Chưa xác nhận</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div style={{ fontSize: 13, fontWeight: 'bold' }}>Không có lịch hẹn</div>
                                    </div>
                                    <div className='SingleState'>
                                        <div className='thr_label' style={{ textAlign: 'center', marginTop: 15, fontSize: 20 }}>
                                            Ngày mốt
                                            <br />
                                            <div style={{ fontSize: 10 }}>(Friday, 12/05/2023)</div>
                                        </div>
                                        <div className='dataNumber'>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'lightgreen' }}>0</div><div style={{ fontSize: 12 }}>Chưa xác nhận</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'orange' }}>0</div><div style={{ fontSize: 12 }}>Chưa xác nhận</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'lightblue' }}>0</div><div style={{ fontSize: 12 }}>Chưa xác nhận</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'cyan' }}>0</div><div style={{ fontSize: 12 }}>Chưa xác nhận</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'pink' }}>0</div><div style={{ fontSize: 12 }}>Chưa xác nhận</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'yellow' }}>0</div><div style={{ fontSize: 12 }}>Chưa xác nhận</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div style={{ fontSize: 13, fontWeight: 'bold' }}>Không có lịch hẹn</div>
                                    </div>



                                </ThirdSection>
                                <FourthSection>
                                    Top 5 dịch vụ tháng 5
                                </FourthSection>
                                <FifthSection>
                                    <table style={{ width: 800, height: 200 }}>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </table>
                                </FifthSection>
                                <SixthSection>
                                    Nhân viên tích cực tháng 5
                                </SixthSection>
                                <SeventhSection></SeventhSection>
                            </BodyContainer>

                        </MainContainer>
                        <RightContainer>
                            <Shop>

                            </Shop>
                        </RightContainer>
                    </Container>

                </div>
            </div >
        </>

    )
}

export default Home