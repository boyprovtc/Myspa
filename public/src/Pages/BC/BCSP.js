import React from 'react'
import '../../css/BCSP.css'
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
height:10000px;
background-color: #fff;
margin:30px;
box-shadow: -5px 5px 5px gray;
`

function BCSP() {
    return (
        <div className='BCSP'>
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
                            }}>Báo cáo sản phẩm
                        </label>

                        <hr style={{
                            margin: '0 20px 20px 20px',
                            border: '2px solid #6E46C2',
                            opacity: 1
                        }} />


                        <div className='RP_Chart' style={{
                            width: '96%',
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
                                <div className='picker' style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 30,
                                    marginLeft: 750

                                }} >
                                    <input type="date" className='inputDateRP' placeholder='Từ ngày' />
                                    <label>Đến</label>
                                    <input type="date" className='inputDateRP' placeholder='Đến ngày' />
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
                            <table style={{ textAlign: 'left', marginLeft: 70, width: 1570 }}>
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
                        <hr />

                        <div className='picker' style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 30,
                            marginLeft: 30,


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
                        <button className="btnOutPut" style={{
                            marginLeft: '85%',
                            backgroundColor: 'white',
                            borderRadius: 20,
                            marginBottom: 30
                        }}><AiIcons.AiOutlineCloudDownload /> Xuất nhóm dịch vụ </button>

                        <div className='rateChart' style={{
                            marginLeft: '65%',
                            height: 300,
                            width: 500,
                            border: '1px solid black',
                        }}>
                            <div className='rateChartLabel' style={{
                                display: 'flex',
                                alignItems: 'center',
                                height: 40,
                                backgroundColor: '#7266BA',
                                fontSize: 16
                            }}><label className='rateChartLabel' style={{
                                margin: 10,
                                color: '#fff',
                                fontWeight: "bold",
                            }}>Biểu đồ tỉ lệ</label></div>

                        </div>


                        <hr />
                        <button className="btnOutPut" style={{
                            marginLeft: '85%',
                            backgroundColor: 'white',
                            borderRadius: 20,
                            marginBottom: 30
                        }}><AiIcons.AiOutlineCloudDownload /> Xuất doanh thu dịch vụ </button>

                        <label style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            marginLeft: 50,
                            marginTop: 50
                        }}>Danh sách chi tiết</label>
                        <div className='detailsList' style={{
                            width: '95%',
                            margin: 30
                        }}>
                            <label className='detailsListData' style={{ width: 300, height: 80, backgroundColor: '#7266BA', color: '#fff', fontWeight: 'bold', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>Tổng sản phẩm<br />0</label>
                            <label className='detailsListData' style={{ width: 300, height: 80, backgroundColor: '#7266BA', color: '#fff', fontWeight: 'bold', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>Tổng số lượng<br />0</label>
                            <label className='detailsListData' style={{ width: 300, height: 80, backgroundColor: '#ABD373', color: '#fff', fontWeight: 'bold', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>Tổng doanh số<br />0</label>
                            <label className='detailsListData' style={{ width: 300, height: 80, backgroundColor: '#ABD373', color: '#fff', fontWeight: 'bold', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>Tổng doanh thu<br />0</label>
                            <label className='detailsListData' style={{ width: 300, height: 80, backgroundColor: '#F26C4F', color: '#fff', fontWeight: 'bold', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>Tổng chi phí<br />0</label>
                        </div>

                        <table className='detailsListTbl' style={{
                            width: '100%',
                            alignItems: 'center',
                            marginTop: 50
                        }}>
                            <tr>
                                <th className='Elements_detailsListTbl'>Tên sản phẩm</th>
                                <th className='Elements_detailsListTbl'>Mã SP</th>
                                <th className='Elements_detailsListTbl'>Nhóm sản phẩm</th>
                                <th className='Elements_detailsListTbl'>Số lượt bán ra</th>
                                <th className='Elements_detailsListTbl'>Tồn kho</th>
                                <th className='Elements_detailsListTbl'>Tổng doanh số</th>
                                <th className='Elements_detailsListTbl'>Tổng doanh thu</th>
                                <th className='Elements_detailsListTbl'>Tổng chi phí</th>
                                <th className='Elements_detailsListTbl'>Danh sách khách hàng</th>
                            </tr>
                        </table>
                        <label style={{
                            fontSize: 14,

                            marginLeft: 10,
                            marginTop: 20
                        }}>Tổng cộng 0 dịch vụ</label>
                    </Section>
                </FirstContainer>
            </Container>
        </div>
    )
}

export default BCSP