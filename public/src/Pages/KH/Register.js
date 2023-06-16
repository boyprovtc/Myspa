import React from 'react';
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

import './KH.css';

function Register() {
  return (
    <div className="Register">
      <Container
        className="py-4 mt-4 bg-white"
        style={{ boxShadow: '0px 5px 5px #999999' }}
      >
        <h1 className="title">Đăng kí Khách hàng</h1>
        <hr style={{ border: '1px solid blue' }} />
        <div className="icon">
          <i class="bi bi-person-circle"></i>
        </div>

        <Form className="cus_info">
          <Row>
            <h3 className="">Thông tin khách hàng</h3>
            <Form.Group className="mb-3 col-lg-6">
              <Form.Label>
                Họ tên<em className="text-danger">*</em>
              </Form.Label>
              <InputGroup className="mb-3">
                <DropdownButton
                  variant="secondary"
                  title=""
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#">Anh</Dropdown.Item>
                  <Dropdown.Item href="#">Chị</Dropdown.Item>
                  <Dropdown.Item href="#">Em</Dropdown.Item>
                  <Dropdown.Item href="#">Ông</Dropdown.Item>
                  <Dropdown.Item href="#">Bà</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Khác</Dropdown.Item>
                </DropdownButton>
                <Form.Control
                  className="border-dark rounded-end-pill"
                  name="name"
                  type="text"
                  placeholder=""
                  size="lg"
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control
                className="border-dark rounded-pill"
                name="phone"
                type="text"
                placeholder=""
                size="lg"
                required
              />
            </Form.Group>
          </Row>
          <Row>
            <Col lg={6}>
              <Row className="my-3" style={{ fontSize: '20px' }}>
                {['radio'].map((type) => (
                  <div
                    key={`inline-${type}`}
                    className="mb-3 d-flex justify-content-between"
                  >
                    <Col>
                      <Form.Check
                        inline
                        label="Nam"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        label="Nữ"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                    </Col>
                  </div>
                ))}
              </Row>
            </Col>

            <Col lg={6}>
              <Form.Group className="mb-3 ">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="border-dark rounded-pill"
                  name="email"
                  type="text"
                  placeholder=""
                  size="lg"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3 ">
            <Form.Label>Địa chỉ</Form.Label>
            <Form.Control
              className="border-dark rounded-pill"
              name="diaChi"
              type="text"
              placeholder="Chủ hộ"
              size="lg"
              required
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3 ">
                <Form.Label>Tỉnh thành</Form.Label>
                <Form.Control
                  className="border-dark rounded-pill"
                  name="tinhThanh"
                  type="text"
                  placeholder="Chọn Tỉnh Thành"
                  size="lg"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 ">
                <Form.Label>Quận/ Huyện</Form.Label>
                <Form.Control
                  className="border-dark rounded-pill"
                  name="quanHuyen"
                  type="text"
                  placeholder="Chọn quận/ huyện"
                  size="lg"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 ">
                <Form.Label>Phường xã</Form.Label>
                <Form.Control
                  className="border-dark rounded-pill"
                  name="phuongXa"
                  type="text"
                  placeholder="Chọn phường/ xã"
                  size="lg"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3 ">
                <Form.Label>Ngày sinh</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text
                    className="bg-secondary"
                    style={{ color: 'white' }}
                    id="basic-addon1"
                  >
                    <i class="bi bi-calendar-week "></i>
                  </InputGroup.Text>
                  <Form.Control
                    className="border-dark rounded-end-pill"
                    size="lg"
                    aria-label="ngaySinh"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 ">
                <Form.Label>Nghề nghiệp</Form.Label>
                <Form.Control
                  className="border-dark rounded-pill"
                  name="ngheNghiep"
                  type="text"
                  size="lg"
                  required
                />
              </Form.Group>
            </Col>
            <Form.Group className="mb-3 ">
              <Form.Label>Facebook</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text
                  className="bg-secondary"
                  style={{ color: 'white', fontSize: '20px' }}
                  id="basic-addon1"
                >
                  <i class="bi bi-facebook"></i>
                </InputGroup.Text>
                <Form.Control
                  className="border-dark rounded-end-pill"
                  size="lg"
                  aria-label="ngaySinh"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3 ">
                <Form.Label>Quốc tịch</Form.Label>
                <Form.Control
                  className="border-dark rounded-pill"
                  name="ngheNghiep"
                  type="text"
                  size="lg"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 ">
                <Form.Label>Số CMND</Form.Label>
                <Form.Control
                  className="border-dark rounded-pill"
                  name="ngheNghiep"
                  type="text"
                  size="lg"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <Form className="other_info">
          <h3 className="other_infor" style={{ fontWeight: 'bold' }}>
            Thông tin khác
          </h3>
          <Row>
            <Col>
              <Form.Group className="mb-3 ">
                <Form.Label>Mã khách hàng 2</Form.Label>
                <Form.Control
                  className="border-dark rounded-pill"
                  name="maKH2"
                  type="text"
                  size="lg"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 ">
                <Form.Label>Mã giới thiệu</Form.Label>
                <Form.Control
                  className="border-dark rounded-pill"
                  name="maGioiThieu"
                  type="text"
                  size="lg"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3 ">
                <Form.Label>NV liên hệ</Form.Label>
                <Form.Control
                  className="border-dark rounded-pill"
                  name="NVlienHe"
                  type="text"
                  size="lg"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 ">
                <Form.Label>NV phụ trách</Form.Label>
                <Form.Control
                  className="border-dark rounded-pill"
                  name="NVphuTrach"
                  type="text"
                  size="lg"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3 ">
                <Form.Label>Nhóm KH</Form.Label>
                <Form.Control
                  className="border-dark rounded-pill"
                  name="nhomKH"
                  type="text"
                  size="lg"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 ">
                <Form.Label>Nguồn khách hàng</Form.Label>
                <Form.Control
                  className="border-dark rounded-pill"
                  name="nguonKH"
                  type="text"
                  size="lg"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <Form className="pathology_infor">
          <h3 className="other_infor" style={{ fontWeight: 'bold' }}>
            Thông tin bệnh lý
          </h3>
          <Row>
            <Col>
              <Form.Group className="mb-3 ">
                <Form.Label>Tiểu sử bệnh lý đang mắc</Form.Label>
                <Form.Control
                  className="border-dark rounded-pill"
                  name=""
                  type="text"
                  size="lg"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 ">
                <Form.Label>Tiểu sử mang thai/ dị ứng thuốc</Form.Label>
                <Form.Control
                  className="border-dark rounded-pill"
                  name=""
                  type="text"
                  size="lg"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3 ">
                <Form.Label>Nhu cầu hiện tại</Form.Label>
                <Form.Control
                  className="border-dark rounded-pill"
                  name=""
                  type="text"
                  size="lg"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 ">
                <Form.Label>Khả năng tư vấn hướng dẫn</Form.Label>
                <Form.Control
                  className="border-dark rounded-pill"
                  name=""
                  type="text"
                  size="lg"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3 ">
            <Form.Label>Khả năng tư vấn hướng tới</Form.Label>
            <Form.Control
              className="border-dark rounded-pill"
              name=""
              type="text"
              size="lg"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label>Thông tin thêm</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Sở thích, thói quen, ghét,..."
              style={{ height: '100px', border: '1px solid black' }}
            />
          </Form.Group>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3 ">
                <Form.Label>Ngày tạo</Form.Label>
                <Form.Control
                  className="border-dark rounded-pill"
                  name=""
                  type="text"
                  size="lg"
                  required
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3 ">
                <Form.Label>Chi nhán</Form.Label>
                <Form.Control
                  className="border-dark rounded-pill"
                  name=""
                  type="text"
                  size="lg"
                  placeholder="Tất cả chi nhánh"
                  required
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3 ">
                <Form.Label>Dịch vụ quan tâm</Form.Label>
                <Form.Control
                  className="border-dark rounded-pill"
                  name=""
                  type="text"
                  size="lg"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <hr style={{ border: '1px solid blue' }} />
        <Form>
          <Row>
            <Col>
              <h4 className="text-black">
                <em className="text-danger">*</em>Thông tin bắt buộc nhập{' '}
              </h4>
            </Col>
            <Col>
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
                  <Button className="rounded-pill" variant="warning">
                    Lưu
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default Register;
