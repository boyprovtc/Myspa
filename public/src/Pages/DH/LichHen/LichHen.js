import React from 'react';
import { Badge, Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import './LichHen.css';
import { AiFillSetting } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';
import BigCalendar from './BigCalendar';

function LichHen() {
  return (
    <div className="panel wrapper">
      <Row>
        <Col
          style={{ borderBottom: '1px solid #6ACAF7', paddingBottom: '7px' }}
        >
          <ul
            className="mb-4"
            style={{
              paddingLeft: '0',
              marginBottom: '0',
              listStyle: 'none',
            }}
          >
            <li className="pull-left">
              <h1
                style={{
                  color: '#abd373',
                  marginTop: '0',
                  marginBottom: '3px',
                  float: 'left',
                }}
              >
                Lịch hẹn
              </h1>
            </li>
            <li className="calendar-note" style={{ float: 'right' }}>
              <span className="h5">Hôm nay:</span>
              <Badge pill bg style={{ backgroundColor: '#7266BA' }}>
                0
              </Badge>
              &nbsp;Chưa xác nhận &nbsp;
              <Badge pill bg style={{ backgroundColor: '#9ACC51' }}>
                0
              </Badge>
              &nbsp;Xác nhận &nbsp;
              <Badge pill bg style={{ backgroundColor: '#f6973b' }}>
                0
              </Badge>
              &nbsp;Không đến &nbsp;
              <Badge pill bg style={{ backgroundColor: '#F26C4F' }}>
                0
              </Badge>
              &nbsp;Hủy &nbsp;
              <Badge pill bg style={{ backgroundColor: '#FA91C8' }}>
                0
              </Badge>
              &nbsp;Đã đến &nbsp;
              <Badge pill bg style={{ backgroundColor: '#23B7E5' }}>
                0
              </Badge>
              &nbsp;Đặt online &nbsp;
            </li>
            <br />
            <br />

            <Button
              className="pull-right rounded-pill"
              title="Nạp danh sách dịch vụ"
              variant="outline-secondary"
              style={{ float: 'right' }}
            >
              <i class="bi bi-cloud-arrow-up"></i> Nạp danh sách
            </Button>
          </ul>
        </Col>
      </Row>

      <Row className="my-4">
        <Col>
          <Row>
            <Col lg={10}>
              <InputGroup className="mb-3">
                <Form.Control
                  style={{
                    height: '40px',
                    borderRadius: '50px 0 0 50px',
                    border: '1px solid black',
                  }}
                  placeholder="Mã đặt hẹn, tên KH, phone hoặc mã giới thiệu"
                />
                <Button
                  variant="success"
                  style={{
                    backgroundColor: '#abd373',
                    borderRadius: '0 50px 50px 0',
                  }}
                >
                  Tìm kiếm
                </Button>
              </InputGroup>
            </Col>
            <Col lg={2}>
              <BsDownload
                className="fs-3"
                style={{
                  color: '#abd373',
                }}
              />
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col md={4}>
              <Button
                className="px-5 rounded-pill"
                variant="primary"
                style={{
                  backgroundColor: '#7266ba',
                  borderColor: '#7266ba',
                  width: '100%',
                }}
              >
                Thêm lịch hẹn mới
              </Button>
            </Col>
            <Col md={5}>
              <Button
                className="px-5 rounded-pill"
                variant="primary"
                style={{
                  backgroundColor: '#69CAF7',
                  borderColor: '#69CAF7',
                  width: '100%',
                }}
              >
                Lấy mã đặt hẹn online
              </Button>
            </Col>
            <Col md={3}>
              <Button
                className="px-5 rounded-pill"
                variant="outline-success"
                style={{ width: '100%' }}
              >
                <AiFillSetting />
                Cài đặt
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Form>
        <Form.Control
          style={{
            width: '600px',
            height: '40px',
            border: '1px solid black',
          }}
          className="mb-3 rounded-pill "
          placeholder="Nhân viên thực hiện"
        />

        {['checkbox'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Mặc định"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="Lịch chăm sóc"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="Lịch liệu trình "
              type={type}
              id={`inline-${type}-3`}
            />
            <Form.Check
              inline
              label="Lịch điều trị "
              type={type}
              id={`inline-${type}-4`}
            />
          </div>
        ))}
      </Form>

      <BigCalendar />
    </div>
  );
}

export default LichHen;
