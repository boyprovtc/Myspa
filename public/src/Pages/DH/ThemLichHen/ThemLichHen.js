import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './ThemLH.css';
import { DatePicker, Checkbox, Switch, Space } from 'antd';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { ListRadioItem } from '../AddNewAppointment/ListRadioItem';

function ThemLichHen() {
  const LapSwi = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const checkedVal = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const plainOptions = [
    'Mặc định',
    'Lịch chăm sóc',
    'Lịch liệu trình',
    'Lịch điều trị',
  ];
  return (
    <>
      <div className="LichHen">
        <div className="Container">
          <Form
            className="mb-3"
            style={{ borderBottom: '1px solid #6ACAF7', paddingBottom: '7px' }}
          >
            <h1 style={{ color: '#abd373' }}>Thêm/Chỉnh sửa lịch hẹn</h1>
          </Form>

          <div className="form-center">
            <Row className="row">
              <h4>Đặt hẹn</h4>
              <Col xs={8}>
                <Form.Group>
                  <Form.Label></Form.Label>
                  <Form.Control
                    className="mb-3 rounded-pill"
                    placeholder="Tìm nhanh KH..."
                  />
                </Form.Group>
              </Col>
              <Col xs={4}>
                <Form.Group>
                  <Form.Label>Ngày đặt</Form.Label>
                  <br />
                  <DatePicker
                    onChange={onChange}
                    style={{ borderRadius: '50px', borderColor: '#999' }}
                  />
                </Form.Group>
              </Col>

              <Col>
                <div className="grid-container">
                  <div className="item">
                    <Form.Group>
                      <Form.Label>Tên khách hàng</Form.Label>
                      <Form.Control className="mb-3 rounded-pill" />
                    </Form.Group>
                  </div>
                  <div className="item">
                    <Form.Group>
                      <Form.Label>Tên khách hàng</Form.Label>
                      <Form.Control className="mb-3 rounded-pill" />
                    </Form.Group>
                  </div>
                  <div className="item">
                    <Form.Group>
                      <Form.Label>Tên khách hàng</Form.Label>
                      <Form.Control className="mb-3 rounded-pill" />
                    </Form.Group>
                  </div>
                  <div className="item">
                    <BsFillPlusCircleFill
                      className="mt-4 fs-1 "
                      style={{ color: '#abd373' }}
                    />
                  </div>
                </div>
                <div className="form-group"></div>
              </Col>
              <Col xs={12}>
                <Checkbox.Group
                  className="d-flex justify-content-around"
                  options={plainOptions}
                  defaultValue={['Mặc định']}
                  onChange={checkedVal}
                />
              </Col>
              <Col xs={4}>
                <Space direction="vertical">
                  <h5>Lặp</h5>
                  <Switch defaultChecked onChange={LapSwi} />
                </Space>
              </Col>
              <Col xs={4}>
                <Form.Group>
                  <Form.Label>Cách ngày</Form.Label>
                  <Form.Control
                    className="rounded-pill"
                    style={{ borderColor: '#999' }}
                  />
                </Form.Group>
              </Col>
              <Col xs={4}>
                <Form.Group>
                  <Form.Label>Tổng số lần</Form.Label>
                  <Form.Control
                    className="rounded-pill"
                    style={{ borderColor: '#999' }}
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group>
                  <Form.Label>Chi nhánh</Form.Label>
                  <Form.Control
                    className="rounded-pill"
                    style={{ borderColor: '#999' }}
                    placeholder="Tất cả"
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group>
                  <Form.Label>Chi nhánh</Form.Label>
                  <Form.Control
                    className="rounded-pill"
                    style={{ borderColor: '#999' }}
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group>
                  <Form.Label>Chi nhánh</Form.Label>
                  <Form.Control
                    className="rounded-pill"
                    style={{ borderColor: '#999' }}
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Label>Nội dung đặt hẹn</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="..."
                  style={{ height: '100px', borderColor: '#999' }}
                />
              </Col>
              <Col>
                <ListRadioItem />
              </Col>
            </Row>
          </div>

          <Form style={{ borderTop: '1px solid #6ACAF7', paddingTop: '7px' }}>
            <div className="btn_Action">
              <Button
                variant="primary"
                style={{
                  borderRadius: '50px',
                  backgroundColor: '#7266ba',
                  borderColor: '#7266ba',
                }}
              >
                Tạo đơn hàng
              </Button>
              <Button
                variant="primary"
                style={{
                  borderRadius: '50px',
                  backgroundColor: '#f26c4f',
                  borderColor: '#f26c4f',
                }}
              >
                Xóa
              </Button>
              <Button
                bg
                style={{
                  borderRadius: '50px',
                  backgroundColor: 'white',
                  borderColor: '#999',
                  color: 'black',
                }}
              >
                Trở lại
              </Button>
              <Button
                variant="primary"
                style={{
                  borderRadius: '50px',
                  backgroundColor: '#abd373',
                  borderColor: '#abd373',
                }}
              >
                Lưu
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default ThemLichHen;
