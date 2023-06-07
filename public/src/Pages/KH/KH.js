import React from 'react';
import './KH.css';
import ListView from './ListView';
import { useNavigate } from 'react-router-dom';

function KH() {
  const navigate = useNavigate();
  const btnThemKH = () => {
    navigate('/themKH');
  };

  return (
    <div className="container ">
      <div className="MainContainer">
        <div className="row">
          <div className="col-md-8">
            <h1 className="text-danger">Đăng ký khách hàng.</h1>
          </div>
          <div className="col-md-2">
            <button className="btn btn-outline-success rounded-pill">
              <i class="bi bi-cloud-arrow-up"></i> Nạp danh sách
            </button>
          </div>
          <div className="col-md-2">
            <button className="btn btn-outline-success rounded-pill">
              <i class="bi bi-cloud-arrow-down"></i> Xuất danh sách
            </button>
          </div>
        </div>
        <div className="grid">
          <div className="item item1">
            <button onClick={btnThemKH} className="btn btn-primary">
              <i class="bi bi-plus-lg"></i> Đăng kí khách hàng
            </button>
          </div>
          <div className="item item2">
            <input
              type="text"
              className="form-control"
              placeholder="Tên KH, phone hoặc mã giới thiệu"
            />
          </div>
          <div className="item item3">
            <input type="text" className="form-control" placeholder="Từ ngày" />
          </div>
          <div className="item item4">
            <input
              type="text"
              className="form-control"
              placeholder="Đến ngày"
            />
          </div>
          <div className="item item5">
            <button className="btn btn-success">Lọc</button>
          </div>
          <div className="item item6">
            <input
              type="text"
              className="form-control"
              placeholder="Khôi phục"
            />
          </div>
        </div>
        <div className="list">
          <div className="item item-1">
            <input
              type="text"
              className="form-control"
              placeholder="NV liên hệ"
            />
          </div>
          <div className="item item-2">
            <input
              type="text"
              className="form-control"
              placeholder="NV phụ trách"
            />
          </div>
          <div className="item item-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nguồn KH"
            />
          </div>
          <div className="item item-4">
            <input type="text" className="form-control" placeholder="Nhóm KH" />
          </div>
          <div className="item item-5">
            <input
              type="text"
              className="form-control"
              placeholder="Tỉnh thành"
            />
          </div>
          <div className="item item-6">
            <input
              type="text"
              className="form-control"
              placeholder="Chọn tỉnh thành"
            />
          </div>
          <div className="item item-7">
            <input
              type="text"
              className="form-control"
              placeholder="Chọn Quận/Huyện"
            />
          </div>
          <div className="item item-8">
            <input
              type="text"
              className="form-control"
              placeholder="Quốc tịch"
            />
          </div>
          <div className="item item-9">
            <input
              type="text"
              className="form-control"
              placeholder="Giới tính"
            />
          </div>
          <div className="item item-10">
            <input
              type="text"
              className="form-control"
              placeholder="Dịch vụ sử dụng"
            />
          </div>
          <div className="item item-11">
            <input
              type="text"
              className="form-control"
              placeholder="Tháng sinh nhật"
            />
          </div>
        </div>
        <div className="list__view">
          <ListView />
        </div>
        <div className="button">
          <button className="btn btn-primary">Gửi SMS</button>
        </div>
      </div>
    </div>
  );
}

export default KH;
