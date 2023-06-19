import React from 'react';
import { Checkbox, Switch } from 'antd';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { AiFillPlusCircle } from 'react-icons/ai';
import { ListRadioItem } from './ListRadioItem';

function AddNewAppointment(props) {
  const onChanged = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };
  const plainOptions = [
    'Mặc định',
    'Lịch chăm sóc',
    'Lịch liệu trình',
    'Lịch điều trị',
  ];

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ color: '#abd373' }}
        >
          Đặt hẹn
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group as={Row}>
          <Col sm={8}>
            <Form.Control
              type="text"
              placeholder="Tìm nhanh KH..."
              className="rounded-pill"
            />
          </Col>
          <Col sm={4}>
            <Form.Control
              type="text"
              placeholder="Ngày giờ"
              className="rounded-pill"
            />
          </Col>
          <Form.Group as={Row}>
            <Col md={4} lg={4}>
              <Form.Label>Tên khách hàng</Form.Label>
              <Form.Control className="rounded-pill" type="text" />
            </Col>
            <Col md={4} lg={4}>
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control className="rounded-pill" type="text" />
            </Col>
            <Col md={3} lg={3}>
              <Form.Label>Email</Form.Label>
              <Form.Control className="rounded-pill" type="text" />
            </Col>
            <Col className="mt-4" md={1} lg={1}>
              <AiFillPlusCircle className="fs-1" style={{ color: '#abd373' }} />
            </Col>
          </Form.Group>
          <Form.Group>
            <Checkbox.Group
              options={plainOptions}
              defaultValue={['Apple']}
              onChange={onChange}
            />
            <br />
            <br />
          </Form.Group>
          <Form.Group>
            <Form.Label>Lặp lại</Form.Label> <br />
            <Switch defaultChecked onChange={onChanged} />
          </Form.Group>
          <Col sm={12}>
            <Form.Label>Chi nhánh</Form.Label>
            <Form.Control className="rounded-pill" type="text" />
          </Col>
          <Col sm={12}>
            <Form.Label>Dịch vụ</Form.Label>
            <Form.Control className="rounded-pill" type="text" />
          </Col>
          <Col sm={12}>
            <Form.Label>Nhân viên/CTV</Form.Label>
            <Form.Control className="rounded-pill" type="text" />
          </Col>
          <Col sm={12}>
            <Form.Label>Nội dung đặt hẹn</Form.Label>
            <Form.Control as="textarea" style={{ height: '200px' }} />
          </Col>
          <Col sm={12}>
            <ListRadioItem />
          </Col>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div>
          <Button
            className="rounded-pill"
            bg
            variant="primary"
            style={{ background: '#7266ba', border: '#7266ba' }}
          >
            Tạo đơn hàng
          </Button>
        </div>
        <div className=" ">
          <Button
            className="rounded-pill "
            bg
            variant="primary"
            style={{ background: '#f26c4f', border: '#f26c4f' }}
          >
            Xóa
          </Button>
          <Button
            className="rounded-pill mx-3"
            onClick={props.onHide}
            style={{ background: '#e5e5e5', border: '#e5e5e5' }}
          >
            Đóng
          </Button>
          <Button
            className="rounded-pill"
            variant="primary"
            style={{ background: '#abd373', border: '#abd373' }}
          >
            Lưu
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default AddNewAppointment;
