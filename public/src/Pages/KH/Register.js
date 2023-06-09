import React from 'react';
import {
  InputGroup,
  Form,
  DropdownButton,
  Dropdown,
  Container,
  Row,
  Col,
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
        <div className="icon">
          <i class="bi bi-person-circle"></i>
        </div>

        <Form>
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
              <Row className="my-5" style={{ fontSize: '20px' }}>
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
              name="email"
              type="text"
              placeholder="Chủ hộ"
              size="lg"
              required
            />
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}

export default Register;
