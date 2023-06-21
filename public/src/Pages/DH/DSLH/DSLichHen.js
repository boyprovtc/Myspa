import { Row, Col, Badge, Button, Form } from 'react-bootstrap';
import './DSLichHen.css';
import { BsSearch } from 'react-icons/bs';
import { TfiReload } from 'react-icons/tfi';
import TableLH from './TableLH';
import { useNavigate } from 'react-router-dom';

function DSLichHen() {
  const navigate = useNavigate();
  const themLH = () => {
    navigate('/themLH');
  };
  return (
    <div>
      <Row className="mb-4">
        <Col
          style={{ borderBottom: '1px solid #6ACAF7', paddingBottom: '7px' }}
        >
          <ul
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
                Danh sách lịch hẹn
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
            <Button
              onClick={themLH}
              className="pull-right rounded-pill mx-2"
              style={{
                backgroundColor: '#7266ba',
                borderColor: '#7266ba',
                float: 'right',
              }}
            >
              Thêm lịch hẹn mới
            </Button>
          </ul>
        </Col>
      </Row>
      <Form className="mb-4">
        <Row>
          <Col md={3} xs={12} className="mb-0 mb-0">
            <Form.Group>
              <Form.Label>Tìm kiếm</Form.Label>
              <Form.Control
                className="rounded-pill"
                style={{ height: '35px' }}
                type="email"
                placeholder="Mã đặt hẹn, tên KH, phone hoặc mã giới thiệu"
              />
            </Form.Group>
          </Col>

          <Col md={3} xs={12} className="mb-0 mb-0">
            <Form.Group className="mb-0 mb-0">
              <Form.Label>Ngày đặt - Từ ngày</Form.Label>
              <Form.Control
                className="rounded-pill"
                style={{ height: '35px' }}
                type="email"
                placeholder="Tất cả"
              />
            </Form.Group>
          </Col>

          <Col md={3} xs={12} className="mb-0 mb-0">
            <Form.Group className="mb-0 mb-0">
              <Form.Label>Đến ngày</Form.Label>
              <Form.Control
                className="rounded-pill"
                style={{ height: '35px' }}
                type="email"
                placeholder="Tất cả"
              />
            </Form.Group>
          </Col>

          <Col md={3} xs={12} className="mb-0 mb-0">
            <Form.Group className="mb-0 mb-0">
              <Form.Label>Loại lịch hẹn</Form.Label>
              <Form.Control
                className="rounded-pill"
                style={{ height: '35px' }}
                type="email"
                placeholder="Tất cả"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={3} xs={12} className="mb-0 mb-0">
            <Form.Group className="mb-0 mb-0">
              <Form.Label>Trạng thái</Form.Label>
              <Form.Control
                className="rounded-pill"
                style={{ height: '35px' }}
                type="email"
                placeholder="Tất cả"
              />
            </Form.Group>
          </Col>

          <Col md={3} xs={12} className="mb-0 mb-0">
            <Form.Group className="mb-0 mb-0">
              <Form.Label>Nhân viên thực hiện</Form.Label>
              <Form.Control
                className="rounded-pill"
                style={{ height: '35px' }}
                type="email"
                placeholder="Tất cả"
              />
            </Form.Group>
          </Col>

          <Col md={3} xs={12} className="mb-0 mb-0">
            <Form.Group className="mb-0 mb-0">
              <Form.Label>Chi nhánh</Form.Label>
              <Form.Control
                className="rounded-pill"
                style={{ height: '35px' }}
                type="email"
                placeholder="Tất cả"
              />
            </Form.Group>
          </Col>

          <Col md={3} xs={12} className="mb-0 mb-0">
            <Form.Group className="mb-0 mb-0">
              <Form.Label>Dịch vụ</Form.Label>
              <Form.Control
                className="rounded-pill"
                style={{ height: '35px' }}
                type="email"
                placeholder="Tất cả"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={3} xs={12} className="mb-0 mb-0">
            <Form.Group className="pb-0 mb-0">
              <Form.Label>Ngày tạo</Form.Label>
              <Form.Control
                className="rounded-pill"
                style={{ height: '35px' }}
                type="email"
                placeholder="Tất cả"
              />
            </Form.Group>
          </Col>

          <Col md={3} xs={12} className="mb-0 mb-0">
            <Form.Group className="pb-0 mb-0">
              <Form.Label>Nền tảng</Form.Label>
              <Form.Control
                className="rounded-pill"
                style={{ height: '35px' }}
                type="email"
                placeholder="Tất cả"
              />
            </Form.Group>
          </Col>

          <Col md={4} lg={3} xs={12} className=" pb-0 mb-0">
            <Row className="d-flex flex-wrap justify-content-center p-inherit mt-4">
              <Col>
                <Button
                  className="rounded-pill mx-2"
                  type="submit"
                  style={{
                    width: '100%',
                    backgroundColor: '#abd373',
                    borderColor: '#abd373',
                  }}
                >
                  <BsSearch />
                  Tìm kiếm
                </Button>
              </Col>
              <Col>
                <Button
                  className="rounded-pill mx-2"
                  variant="outline"
                  style={{
                    width: '100%',
                    backgroundColor: '##58666e',
                    borderColor: '#999',
                  }}
                >
                  <TfiReload />
                  Khôi phục
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
      <TableLH />
    </div>
  );
}

export default DSLichHen;
