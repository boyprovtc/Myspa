  import React from 'react';
  import './ThemSP.css';
  import * as AiIcons from 'react-icons/ai';
  import { Checkbox, Switch } from 'antd';
  import {
    InputGroup,
    Form,
    DropdownButton,
    Dropdown,
    Container,
    Row,
    Col,
    Button,
  } from 'react-bootstrap';
  import RadioBtn from './RadioBtn';

  function ThemSP() {
    return (
      <div className='themSP'>
        <div className='Container'>
          <div className='topthemSP'>
            <h2 className='title-themSP'>Thêm sản phẩm</h2>
          </div>
          <br />
          <hr />
          <div className='images'><AiIcons.AiOutlineFileImage /></div>
          <div className='midthemSP'>
            <Form>
              <Row>
                <p className='name'>Thông tin sản phẩm</p>
                <Form.Group className="mb-3 col-lg-6" style={{ width: 620 }}>
                  <Form.Label>
                    Tên sản phẩm<em className="text-danger"> *</em>
                  </Form.Label>
                  <Form.Control
                    className="border-dark rounded-pill"
                    name="name"
                    type="text"
                    placeholder=""
                    size="lg"
                    required
                  />
                </Form.Group>

                <Form.Group style={{ marginLeft: 60 }} className="mb-3 col-lg-3">
                  <Form.Label >Mã SP/SKU/Barcode</Form.Label>
                  <Form.Control
                    className="border-dark rounded-pill"
                    name="phone"
                    type="text"
                    placeholder=""
                    size='lg'
                    required
                  />
                </Form.Group>
              </Row>
              <br />
              <Row>
                <Form.Group className="mb-3 col-lg-3">
                  <Form.Label>Giá nhập</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      className="border-dark rounded-start-pill"
                      size="lg"
                      aria-label="giaNhap"
                      aria-describedby="basic-addon1"
                    />
                    <InputGroup.Text
                      className="border-dark bg-secondary rounded-end-pill"
                      style={{ color: 'white', marginLeft: -5 }}
                      id="basic-addon1">đ
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Form.Group style={{ marginLeft: 60 }} className="mb-3 col-lg-3">
                  <Form.Label>Giá bán</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      className="border-dark rounded-start-pill"
                      size="lg"
                      aria-label="giaBan"
                      aria-describedby="basic-addon1"
                    />
                    <InputGroup.Text
                      className="border-dark bg-secondary rounded-end-pill"
                      style={{ color: 'white', marginLeft: -5 }}
                      id="basic-addon1">đ
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Form.Group style={{ marginLeft: 60 }} className="mb-3 col-lg-3">
                  <Form.Label>Giá ưu đãi</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      className="border-dark rounded-start-pill"
                      size="lg"
                      aria-label="giaUudai"
                      aria-describedby="basic-addon1"
                    />
                    <InputGroup.Text
                      className="border-dark bg-secondary rounded-end-pill"
                      style={{ color: 'white', marginLeft: -5 }}
                      id="basic-addon1">đ
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group className="mb-3 col-lg-3">
                  <Form.Label>Giá ưu đãi trên thị trường</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      className="border-dark rounded-start-pill"
                      size="lg"
                      aria-label="giaUDTTT"
                      aria-describedby="basic-addon1"
                    />
                    <InputGroup.Text
                      className="border-dark bg-secondary rounded-end-pill"
                      style={{ color: 'white', marginLeft: -5 }}
                      id="basic-addon1">đ
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group className="mb-3 col-lg-3">
                  <Form.Label >Nhãn hiệu</Form.Label>
                  <Form.Control
                    className="border-dark rounded-pill"
                    name="phone"
                    type="text"
                    placeholder="Chọn nhãn hiệu"
                    size='lg'
                    required
                  />
                </Form.Group>

                <Form.Group style={{ marginLeft: 60 }} className="mb-3 col-lg-2">
                  <Form.Label >Danh mục</Form.Label>
                  <Form.Control
                    className="border-dark rounded-pill"
                    name="phone"
                    type="text"
                    placeholder="Chọn danh mục"
                    size='lg'
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-1 ">
                  <a href='#' className='btn-themMoiDMSP'><AiIcons.AiOutlinePlus /></a>
                </Form.Group>

                <Form.Group style={{ marginLeft: 60 }} className="mb-3 col-lg-3">
                  <Form.Label >Ưu tiên</Form.Label>
                  <Form.Control
                    className="border-dark rounded-pill"
                    name="phone"
                    type="text"
                    placeholder="0"
                    size='lg'
                    required
                  />
                </Form.Group>
              </Row>

              <Row>
                <Form.Group className="mb-3 col-lg-3">
                  <Form.Label >Chi nhánh</Form.Label>
                  <Form.Control
                    className="border-dark rounded-pill"
                    name="phone"
                    type="text"
                    placeholder="Tất cả chi nhánh"
                    size='lg'
                    required
                  />
                </Form.Group>
                <Form.Group style={{ display: 'flex', margin: 45, marginLeft: 85 }} className="mb-3 col-lg-3 ">
                  <p className='atv'>Active</p>
                  <Switch />
                  <p className='blc'>Block</p>
                </Form.Group>
              </Row>
              <Row >
                <Form.Group className="mb-3 ">
                  <Form.Label>Mô tả sản phẩm</Form.Label>
                  <Form.Control
                    as="textarea"
                    style={{ height: '100px', width: '950px', border: '1px solid black' }}
                  />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" style={{ width: 620 }}>
                  <Form.Label>Tag danh mục thương mại</Form.Label>
                  <Form.Control
                    className="border-dark rounded-pill"
                    name="name"
                    type="text"
                    placeholder=""
                    size="lg"
                    required
                  />
                </Form.Group>
              </Row>
              <br />
              <hr />
              <br />
              <Row>
                <p className='name'>Commission nhân viên</p>
                <Form.Group >
                  <RadioBtn/>
                </Form.Group>
              </Row>
              <br/>
              <br/>
              <Row >
                <p className='name' >Kế toán</p>
                <Form.Group style={{marginTop:25}} className="mb-3 col-lg-3">
                  <RadioBtn/>
                </Form.Group>

                <Form.Group style={{ marginLeft: 60 }} className="mb-3 col-lg-3" >
                  <Form.Label>% doanh thu sản phẩm</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      className="border-dark rounded-start-pill"
                      size="lg"
                      aria-label="dt"
                      aria-describedby="basic-addon1"
                    />
                    <InputGroup.Text
                      className="border-dark bg-secondary rounded-end-pill"
                      style={{ color: 'white', marginLeft: -5 }}
                      id="basic-addon1">%
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Form.Group style={{ marginLeft: 60 }} className="mb-3 col-lg-3" >
                  <Form.Label>Commission nhận được</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      className="border-dark rounded-start-pill"
                      size="lg"
                      aria-label="cmsnd"
                      aria-describedby="basic-addon1"
                    />
                    <InputGroup.Text
                      className="border-dark bg-secondary rounded-end-pill"
                      style={{ color: 'white', marginLeft: -5 }}
                      id="basic-addon1">đ
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Row>   
              
              <Row >
                <p className='name' >KTV</p>
                <Form.Group style={{marginTop:25}} className="mb-3 col-lg-3">
                  <RadioBtn/>
                </Form.Group>

                <Form.Group style={{ marginLeft: 60 }} className="mb-3 col-lg-3" >
                  <Form.Label>% doanh thu sản phẩm</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      className="border-dark rounded-start-pill"
                      size="lg"
                      aria-label="dt"
                      aria-describedby="basic-addon1"
                    />
                    <InputGroup.Text
                      className="border-dark bg-secondary rounded-end-pill"
                      style={{ color: 'white', marginLeft: -5 }}
                      id="basic-addon1">%
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Form.Group style={{ marginLeft: 60 }} className="mb-3 col-lg-3" >
                  <Form.Label>Commission nhận được</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      className="border-dark rounded-start-pill"
                      size="lg"
                      aria-label="cmsnd"
                      aria-describedby="basic-addon1"
                    />
                    <InputGroup.Text
                      className="border-dark bg-secondary rounded-end-pill"
                      style={{ color: 'white', marginLeft: -5 }}
                      id="basic-addon1">đ
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Row>
          
              <Row>
                <p className='name' >Lễ tân</p>
                <Form.Group style={{marginTop:25}} className="mb-3 col-lg-3">
                  <RadioBtn/>
                </Form.Group>

                <Form.Group style={{ marginLeft: 60 }} className="mb-3 col-lg-3" >
                  <Form.Label>% doanh thu sản phẩm</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      className="border-dark rounded-start-pill"
                      size="lg"
                      aria-label="dt"
                      aria-describedby="basic-addon1"
                    />
                    <InputGroup.Text
                      className="border-dark bg-secondary rounded-end-pill"
                      style={{ color: 'white', marginLeft: -5 }}
                      id="basic-addon1">%
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Form.Group style={{ marginLeft: 60 }} className="mb-3 col-lg-3" >
                  <Form.Label>Commission nhận được</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      className="border-dark rounded-start-pill"
                      size="lg"
                      aria-label="cmsnd"
                      aria-describedby="basic-addon1"
                    />
                    <InputGroup.Text
                      className="border-dark bg-secondary rounded-end-pill"
                      style={{ color: 'white', marginLeft: -5 }}
                      id="basic-addon1">đ
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Row>

              <Row>
                <p className='name' >Marketing</p>
                <Form.Group style={{marginTop:25}} className="mb-3 col-lg-3">
                  <RadioBtn/>
                </Form.Group>

                <Form.Group style={{ marginLeft: 60 }} className="mb-3 col-lg-3" >
                  <Form.Label>% doanh thu sản phẩm</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      className="border-dark rounded-start-pill"
                      size="lg"
                      aria-label="dt"
                      aria-describedby="basic-addon1"
                    />
                    <InputGroup.Text
                      className="border-dark bg-secondary rounded-end-pill"
                      style={{ color: 'white', marginLeft: -5 }}
                      id="basic-addon1">%
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Form.Group style={{ marginLeft: 60 }} className="mb-3 col-lg-3" >
                  <Form.Label>Commission nhận được</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      className="border-dark rounded-start-pill"
                      size="lg"
                      aria-label="cmsnd"
                      aria-describedby="basic-addon1"
                    />
                    <InputGroup.Text
                      className="border-dark bg-secondary rounded-end-pill"
                      style={{ color: 'white', marginLeft: -5 }}
                      id="basic-addon1">đ
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Row>

              <Row>
                <p className='name' >Tư vấn viên</p>
                <Form.Group style={{marginTop:25}} className="mb-3 col-lg-3">
                  <RadioBtn/>
                </Form.Group>

                <Form.Group style={{ marginLeft: 60 }} className="mb-3 col-lg-3" >
                  <Form.Label>% doanh thu sản phẩm</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      className="border-dark rounded-start-pill"
                      size="lg"
                      aria-label="dt"
                      aria-describedby="basic-addon1"
                    />
                    <InputGroup.Text
                      className="border-dark bg-secondary rounded-end-pill"
                      style={{ color: 'white', marginLeft: -5 }}
                      id="basic-addon1">%
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Form.Group style={{ marginLeft: 60 }} className="mb-3 col-lg-3" >
                  <Form.Label>Commission nhận được</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      className="border-dark rounded-start-pill"
                      size="lg"
                      aria-label="cmsnd"
                      aria-describedby="basic-addon1"
                    />
                    <InputGroup.Text
                      className="border-dark bg-secondary rounded-end-pill"
                      style={{ color: 'white', marginLeft: -5 }}
                      id="basic-addon1">đ
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Row>
              <br/>
              <hr/>
              <br/>
              <Row>
                <Col>
                  <Button className="rounded-pill" variant="outline-secondary">
                    Trở lại
                  </Button>
                </Col>
                <Col>
                  <Button className="rounded-pill" variant="outline-secondary">
                    Khôi phục
                  </Button>
                </Col>
                <Col>
                  <Button className="rounded-pill btn-luu" variant="warning">
                    Lưu
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    )
  }

  export default ThemSP
