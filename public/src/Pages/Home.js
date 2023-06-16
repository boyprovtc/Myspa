import React from 'react'
//import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'
import styled from 'styled-components'
import '../css/Home.css'
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
margin: 20px;
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
margin-left: 20px;
margin-right: 20px;

`
const FisrtSection = styled.div`
width:  400px;
height: 500px;
background-color: #fff;
border-radius: 10px;
margin-right:30px;
margin-bottom: 30px;
box-shadow: -5px 5px 5px gray;
text-align: center;
`
const SecondSection = styled.div`
width:  66.73%;
height: 500px;
margin-bottom: 30px;
background-color: #fff;
border-radius: 10px;
box-shadow: -5px 5px 5px gray;
display:flex;
`
const ThirdSection = styled.div`
width:  100%;
height: 500px;
background-color: #E7E7E7;
margin-bottom: 30px;
display: flex;
`
const FourthSection = styled.div`
width:  400px;
height: 500px;
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
height: 500px;
margin-bottom: 30px;
background-color: #fff;
border-radius: 10px;
box-shadow: -5px 5px 5px gray;
`
const SixthSection = styled.div`
width:  400px;
height: 500px;
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
height: 500px;
margin-bottom: 30px;
background-color: #fff;
border-radius: 10px;
box-shadow: -5px 5px 5px gray;
`

const RightContainer = styled.div`
width: 25%;
background-color: #E7E7E7;

`
const ShopAdv = styled.div`
width: 90%;
height: 600px;
margin-top: 20px;
margin-left: 10px;
border-radius: 20px;
box-shadow: -5px 5px 5px gray;
background-color: #AC3BBE;
`
const Activities = styled.div`
width: 90%;
height: 600px;
margin-top: 20px;
margin-left: 10px;
border-radius: 20px;
box-shadow: -5px 5px 5px gray;
background-color: #fff;
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
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'orange' }}>0</div><div style={{ fontSize: 12 }}>Xác nhận</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'lightblue' }}>0</div><div style={{ fontSize: 12 }}>Không đến</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'cyan' }}>0</div><div style={{ fontSize: 12 }}>Hủy</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'pink' }}>0</div><div style={{ fontSize: 12 }}>Đã đến</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'yellow' }}>0</div><div style={{ fontSize: 12 }}>Đặt online</div>
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
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'orange' }}>0</div><div style={{ fontSize: 12 }}>Xác nhận</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'lightblue' }}>0</div><div style={{ fontSize: 12 }}>Không đến</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'cyan' }}>0</div><div style={{ fontSize: 12 }}>Hủy</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'pink' }}>0</div><div style={{ fontSize: 12 }}>Đã đến</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'yellow' }}>0</div><div style={{ fontSize: 12 }}>Đặt online</div>
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
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'orange' }}>0</div><div style={{ fontSize: 12 }}>Xác nhận</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'lightblue' }}>0</div><div style={{ fontSize: 12 }}>Không đến</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'cyan' }}>0</div><div style={{ fontSize: 12 }}>Hủy</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'pink' }}>0</div><div style={{ fontSize: 12 }}>Đã đến</div>
                                            </div>
                                            <div className='data_item'>
                                                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'yellow' }}>0</div><div style={{ fontSize: 12 }}>Đặt online</div>
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
                                    <div className='Fif_label' style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center', padding: 20, color: '#898989' }}>
                                        Đặt chỗ 2023
                                    </div>
                                    <div className='Fif_label2' >
                                        <div style={{ fontSize: 28, fontWeight: 'bold', margin: '20px 150px 20px 110px' }}>0<br /><div style={{ fontSize: 10 }}>Cả năm</div></div>
                                        <div style={{ fontSize: 28, fontWeight: 'bold', margin: '20px 150px 20px 110px' }}>0<br /><div style={{ fontSize: 10 }}>Tháng này</div></div>
                                        <div style={{ fontSize: 28, fontWeight: 'bold', margin: '20px 150px 20px 110px' }}>0<br /><div style={{ fontSize: 10 }}>Hôm nay</div></div>
                                    </div>
                                    <div style={{ display: 'flex', textAlign: 'right', alignItems: 'center', marginTop: 50, marginLeft: 10 }}>
                                        <table style={{ height: 190, fontSize: 11 }}>
                                            <tr><th style={{ border: 'none' }}>1</th></tr>
                                            <tr><th style={{ border: 'none' }}>0.5</th></tr>
                                            <tr><th style={{ border: 'none' }}>0</th></tr>
                                            <tr><th style={{ border: 'none' }}>-0.5</th></tr>
                                            <tr><th style={{ border: 'none' }}>-1</th></tr>
                                        </table>
                                        <table style={{ marginLeft: 10, fontSize: 8, height: 150 }}>
                                            <tr>
                                                <th className='ChartElement'></th>
                                                <th className='ChartElement'></th>
                                                <th className='ChartElement'></th>
                                                <th className='ChartElement'></th>
                                                <th className='ChartElement'></th>
                                                <th className='ChartElement'></th>
                                                <th className='ChartElement'></th>
                                                <th className='ChartElement'></th>
                                                <th className='ChartElement'></th>
                                                <th className='ChartElement'></th>
                                                <th className='ChartElement'></th>
                                                <th className='last column' style={{ border: 'none' }}></th>
                                            </tr>
                                            <tr>
                                                <td className='ChartElement'><hr className='hr1' /></td>
                                                <td className='ChartElement'><hr className='hr1' /></td>
                                                <td className='ChartElement'><hr className='hr1' /></td>
                                                <td className='ChartElement'><hr className='hr1' /></td>
                                                <td className='ChartElement'><hr className='hr1' /></td>
                                                <td className='ChartElement'><hr className='hr1' /></td>
                                                <td className='ChartElement'><hr className='hr1' /></td>
                                                <td className='ChartElement'><hr className='hr1' /></td>
                                                <td className='ChartElement'><hr className='hr1' /></td>
                                                <td className='ChartElement'><hr className='hr1' /></td>
                                                <td className='ChartElement'><hr className='hr1' /></td>
                                                <th className='last column' style={{ border: 'none' }}></th>
                                            </tr>
                                            <tr>
                                                <td className='ChartElement'></td>
                                                <td className='ChartElement'></td>
                                                <td className='ChartElement'></td>
                                                <td className='ChartElement'></td>
                                                <td className='ChartElement'></td>
                                                <td className='ChartElement'></td>
                                                <td className='ChartElement'></td>
                                                <td className='ChartElement'></td>
                                                <td className='ChartElement'></td>
                                                <td className='ChartElement'></td>
                                                <td className='ChartElement'></td>
                                                <th className='last column' style={{ border: 'none' }}></th>
                                            </tr>
                                        </table>
                                    </div>
                                    <table style={{ textAlign: 'left', marginLeft: 70 }}>
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
                                </FifthSection>
                                <SixthSection>
                                    Nhân viên tích cực tháng 5
                                </SixthSection>
                                <SeventhSection>
                                    <div className='Sev_label' style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center', padding: 20, color: '#898989' }}>
                                        Doanh thu 2023
                                    </div>
                                    <div className='Sev_label2' >
                                        <div style={{ fontSize: 28, fontWeight: 'bold', margin: '20px 150px 20px 110px' }}><br /><div style={{ fontSize: 10 }}></div></div>
                                        <div style={{ fontSize: 28, fontWeight: 'bold', margin: '20px 150px 20px 110px' }}><br /><div style={{ fontSize: 10 }}></div></div>
                                        <div style={{ fontSize: 28, fontWeight: 'bold', margin: '20px 150px 20px 110px' }}><br /><div style={{ fontSize: 10 }}></div></div>
                                    </div>
                                    <div style={{ display: 'flex', textAlign: 'right', alignItems: 'center', marginTop: 50, marginLeft: 10 }}>
                                        <table style={{ height: 190, fontSize: 11 }}>
                                            <tr><th style={{ border: 'none' }}>1</th></tr>
                                            <tr><th style={{ border: 'none' }}>0.5</th></tr>
                                            <tr><th style={{ border: 'none' }}>0</th></tr>
                                            <tr><th style={{ border: 'none' }}>-0.5</th></tr>
                                            <tr><th style={{ border: 'none' }}>-1</th></tr>
                                        </table>
                                        <table style={{ marginLeft: 10, fontSize: 8, height: 150 }}>
                                            <tr>
                                                <th className='ChartElement'></th>
                                                <th className='ChartElement'></th>
                                                <th className='ChartElement'></th>
                                                <th className='ChartElement'></th>
                                                <th className='ChartElement'></th>
                                                <th className='ChartElement'></th>
                                                <th className='ChartElement'></th>
                                                <th className='ChartElement'></th>
                                                <th className='ChartElement'></th>
                                                <th className='ChartElement'></th>
                                                <th className='ChartElement'></th>
                                                <th className='last column' style={{ border: 'none' }}></th>
                                            </tr>
                                            <tr>
                                                <td className='ChartElement'><hr className='hr2' /></td>
                                                <td className='ChartElement'><hr className='hr2' /></td>
                                                <td className='ChartElement'><hr className='hr2' /></td>
                                                <td className='ChartElement'><hr className='hr2' /></td>
                                                <td className='ChartElement'><hr className='hr2' /></td>
                                                <td className='ChartElement'><hr className='hr2' /></td>
                                                <td className='ChartElement'><hr className='hr2' /></td>
                                                <td className='ChartElement'><hr className='hr2' /></td>
                                                <td className='ChartElement'><hr className='hr2' /></td>
                                                <td className='ChartElement'><hr className='hr2' /></td>
                                                <td className='ChartElement'><hr className='hr2' /></td>
                                                <th className='last column' style={{ border: 'none' }}></th>
                                            </tr>
                                            <tr>
                                                <td className='ChartElement'></td>
                                                <td className='ChartElement'></td>
                                                <td className='ChartElement'></td>
                                                <td className='ChartElement'></td>
                                                <td className='ChartElement'></td>
                                                <td className='ChartElement'></td>
                                                <td className='ChartElement'></td>
                                                <td className='ChartElement'></td>
                                                <td className='ChartElement'></td>
                                                <td className='ChartElement'></td>
                                                <td className='ChartElement'></td>
                                                <th className='last column' style={{ border: 'none' }}></th>
                                            </tr>
                                        </table>
                                    </div>
                                    <table style={{ textAlign: 'left', marginLeft: 70 }}>
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
                                </SeventhSection>
                            </BodyContainer>

                        </MainContainer>
                        <RightContainer>
                            <ShopAdv>
                                <div style={{
                                    fontSize: 22,
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    padding: 10,
                                    color: '#fff'
                                }}>Gian hàng trên BeautiX</div>
                                <a href='' style={{
                                    marginLeft: 180,
                                    textDecoration: 'none',
                                    color: '#fff'
                                }}>Xem gian hàng...</a>
                                < div className='Status' style={{
                                    display: 'flex',
                                    color: 'white'
                                }}>
                                    <div style={{
                                        marginLeft: 15
                                    }}>Trạng Thái:</div>
                                    <a href='#' style={{
                                        marginLeft: 110,
                                        textDecoration: 'none',
                                        color: 'white'
                                    }}>Xem Chi Tiết</a>
                                </div>
                                <div class="switch">
                                    <label style={{ width: 200, height: 'auto', padding: 3, backgroundColor: '#fff', borderRadius: 15, textAlign: 'center' }}>Chưa mở gian hàng</label>
                                    <input type="checkbox" id="check" />
                                    <label for="check" class="button"></label>
                                </div>
                                <div style={{ marginTop: 30, marginLeft: 40 }}>
                                    <label style={{ width: 50, height: 50, padding: 10, backgroundColor: '#fff', borderRadius: 25, textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>2</label>
                                    <label style={{ padding: 15, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#fff' }}>Lượt theo dõi</label>
                                </div>
                                <div style={{ marginTop: 30, marginLeft: 40 }}>
                                    <label style={{ width: 50, height: 50, padding: 10, backgroundColor: '#fff', borderRadius: 25, textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>2</label>
                                    <label style={{ padding: 15, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#fff' }}>Người ghé thăm</label>
                                </div>
                                <div style={{ marginTop: 30, marginLeft: 40 }}>
                                    <label style={{ width: 50, height: 50, padding: 10, backgroundColor: '#fff', borderRadius: 25, textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>2</label>
                                    <label style={{ padding: 15, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#fff' }}>Lượt quan tâm sản phẩm</label>
                                </div>
                                <div style={{ textAlign: 'center', marginTop: 30, marginLeft: 60, padding: 3, width: 200, height: 30, borderRadius: 15, backgroundColor: '#7266ba', boxShadow: '-5px 5px 5px black' }} ><a href='#' style={{ textDecoration: 'none', color: '#fff' }}>Đăng kí ngay!</a></div>


                            </ShopAdv>

                            <Activities>

                                <AiIcons.AiOutlineSwap style={{ margin: '40px 40px -10px 25px', fontSize: 35 }} />
                                <AiIcons.AiOutlineStar style={{ margin: '40px 40px -10px 25px', fontSize: 35 }} />


                                <div className='hrline' style={{ display: 'flex', alignItems: 'center' }}> <hr style={{ width: '30%', border: '3px solid cyan', opacity: 1 }} /><hr style={{ width: '70%' }} /></div>
                                <table className='Act_Table' style={{ border: 'none', margin: 20 }}>
                                    <tr>
                                        <td className='act_Element' style={{ width: 300, borderLeft: '2px solid #ABD373', opacity: 1, borderTop: 'none', borderBottom: 'none', borderRight: 'none', padding: 10 }}>
                                            <label className='act_label1' style={{ display: 'flex', alignItems: 'center', gap: 5, marginLeft: '-20px', fontWeight: 'lighter' }}>
                                                <GiIcons.GiPlainCircle style={{ color: 'gray', fontSize: 18, border: '2px solid #ABD373', borderRadius: 10 }} />
                                                2 giây trước
                                            </label>
                                            <label className='act_label2' style={{ marginLeft: 3.5, fontSize: 18, fontWeight: 'bolder' }}>Nguyễn Xuân Thành</label>
                                            <label className='act_label3' style={{ marginLeft: 3.5, fontSize: 16, fontWeight: 'bold' }}>Đăng nhập</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='act_Element' style={{ width: 300, borderLeft: '2px solid #ABD373', opacity: 1, borderTop: 'none', borderBottom: 'none', borderRight: 'none', padding: 10 }}>
                                            <label className='act_label1' style={{ display: 'flex', alignItems: 'center', gap: 5, marginLeft: '-20px', fontWeight: 'lighter' }}>
                                                <GiIcons.GiPlainCircle style={{ color: 'gray', fontSize: 18, border: '2px solid #ABD373', borderRadius: 10 }} />
                                                2 phút trước
                                            </label>
                                            <label className='act_label2' style={{ marginLeft: 3.5, fontSize: 18, fontWeight: 'bolder' }}>Nguyễn Xuân Thành</label>
                                            <label className='act_label3' style={{ marginLeft: 3.5, fontSize: 16, fontWeight: 'bold' }}>Đăng nhập</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='act_Element' style={{ width: 300, borderLeft: '2px solid #ABD373', opacity: 1, borderTop: 'none', borderBottom: 'none', borderRight: 'none', padding: 10 }}>
                                            <label className='act_label1' style={{ display: 'flex', alignItems: 'center', gap: 5, marginLeft: '-20px', fontWeight: 'lighter' }}>
                                                <GiIcons.GiPlainCircle style={{ color: 'gray', fontSize: 18, border: '2px solid #ABD373', borderRadius: 10 }} />
                                                2 giờ trước
                                            </label>
                                            <label className='act_label2' style={{ marginLeft: 3.5, fontSize: 18, fontWeight: 'bolder' }}>Nguyễn Xuân Thành</label>
                                            <label className='act_label3' style={{ marginLeft: 3.5, fontSize: 16, fontWeight: 'bold' }}>Đăng nhập</label>
                                        </td>
                                    </tr>
                                </table>
                            </Activities>

                        </RightContainer>
                    </Container>

                </div >
            </div >
        </>

    )
}

export default Home