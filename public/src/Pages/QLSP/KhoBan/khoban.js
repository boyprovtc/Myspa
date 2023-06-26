import React from 'react';
import "./khoban.css";
import * as AiIcons from 'react-icons/ai';
import ListKhoBan from './ListKhoBan';
import { Checkbox, Switch } from 'antd';


function khoban() {
  return (
    <div className='khoBan'>
      <div className='contaiNer'>
        <div className='top'>
          <h2 className='title'>Kho bán</h2>
          <a href="#" className="btn-cantonkho">
            <AiIcons.AiOutlineCloudUpload />
            Cân tồn kho
          </a>
          <a href="#" className="btn-xuattonkho">
            <AiIcons.AiOutlineCloudDownload />
            Xuất tồn kho
          </a>
        </div>
        <hr />
        <div className='mid'>
          <input
            className="nhaptimkiemSpKho"
            type="text"
            placeholder="Mã SP, Barcode hoặc tên SP"
          ></input>
          <button type="submit" className="timkiemSpKho">
            Tìm kiếm
          </button>
          <Checkbox>Quản lý tất cả kho</Checkbox>
          <div className='right-1'>
            <a href="#" className="btn-taophieunhap">
              <AiIcons.AiOutlinePlus />Tạo phiếu nhập</a>
            <a href="#" className="btn-taophieuxuat">
              <AiIcons.AiOutlineMinus />Tạo phiếu xuất</a>
            <a href="#" className="btn-lichsunhapxuat">
              <AiIcons.AiOutlineUnorderedList />Lịch sử nhập / xuất</a>
          </div>
          <br />
        </div>
        <div className='mid-2'>
          <input className='tungay' type="text" placeholder='Từ ngày'></input>
          <input className='denngay' type="text" placeholder='Đến ngày'></input>
          <button className='xacnhan' type='submit'>Xác nhận</button>
        </div>
        <br/>
        <div className='mid-3'>
          <p className='hientonkho'>Hiện tồn kho đầu kỳ</p>
          <Switch/>
          <p className='antonkho'>Ẩn tồn kho đầu kỳ</p>
        </div>
        <hr />
        <div>
          <ListKhoBan />
        </div>

      </div>
    </div>
  )
}

export default khoban
