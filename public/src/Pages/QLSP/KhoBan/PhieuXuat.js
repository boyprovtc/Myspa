import React from 'react'
import {
    InputGroup,
    Form,
    Row,
    Button,
} from 'react-bootstrap';
import './PhieuXuat.css';
import RadioBtn2 from './RadioBtn2';
import * as AiIcons from 'react-icons/ai';
import ListPX from './ListPX';


function PhieuXuat() {
    return (
        <div className='phieuXuat'>
            <div className='contaiNerPX'>
                <div className='topPX'>
                    <h2 className='title-PX'>Phiếu xuất hàng: Kho bán</h2>
                </div>
                <br />
                <hr />
                <br />
                <div className='midPX'>
                    <Form>
                        <Row>
                            <Form.Group className="mb-3 col-lg-5" style={{ marginLeft: 50, display: 'flex', padding: 0 }}>
                                <Form.Label style={{ width: 260, fontSize: 15, padding: 10 }}>Chọn sản phẩm</Form.Label>
                                <Form.Control
                                    className="border-dark rounded-pill"
                                    name="phone"
                                    type="text"
                                    placeholder=""
                                    size='lg'
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-5" style={{ marginLeft: 170, display: 'flex', padding: 0 }}>
                                <Form.Label style={{ width: 350, fontSize: 15, padding: 10 }}>Nhân viên nhập/xuất hàng</Form.Label>
                                <Form.Control
                                    className="border-dark rounded-pill"
                                    name="phone"
                                    type="text"
                                    placeholder="Chọn nhân viên"
                                    size='lg'
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <br />
                        <Row>

                            <Form.Group className="mb-3 col-lg-4" style={{ marginLeft: 50, display: 'flex', padding: 0 }}>
                                <RadioBtn2 />
                                <Form.Label style={{ width: 200, fontSize: 15, padding: 10, marginLeft: -100 }}></Form.Label>
                                <Form.Control
                                    className="border-dark rounded-pill"
                                    name="phone"
                                    type="text"
                                    placeholder="Khác"
                                    size='lg'
                                    required
                                />
                            </Form.Group>

                            <Form.Group style={{ marginLeft: -40 }} className="mb-3 col-lg-1 ">
                                <Button className='btn-themCN'><AiIcons.AiOutlinePlus /></Button>
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-5" style={{ marginLeft: 210, display: 'flex', padding: 0 }}>
                                <Form.Label style={{ width: 350, fontSize: 15, padding: 10 }}>Ngày nhập/xuất </Form.Label>
                                <Form.Control
                                    className="border-dark rounded-pill"
                                    name="phone"
                                    type="text"
                                    placeholder="Ngày nhập/xuất "
                                    size='lg'
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <br/>
                        <br/>
                        <Row>
                            <Form.Group className="mb-3 " style={{marginLeft:50}}>
                                <Form.Label>Ghi chú</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    style={{ height: '100px', width: '1500px', border: '1px solid black' }}
                                />
                            </Form.Group>
                        </Row>
                        <br/>
                        <br/>
                        <br />
                        <br />
                        <br />
                        <hr />
                        <Row>
                            <ListPX />
                        </Row>
                        <hr />
                        <Row>
                            <div className='bottomPN'>
                                <button className='btn-trolaiNH'>Trở lại</button>
                                <button className='btn-luuNH'>Lưu</button>
                                <button className='btn-LuuVaInPN'>Lưu và in</button>
                            </div>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default PhieuXuat
