import React from 'react';
import './PhieuNhap.css';
import * as AiIcons from 'react-icons/ai';
import ListPN from './ListPN';

function PhieuNhap() {
  return (
    <div className='phieuNhap'>
      <div className='ContainerPN'>
        <div className='top'>
          <h2 className='title'>Phiếu nhập hàng: Kho bán</h2>
        </div>
        <hr />
        <br />
        <div className='midPN'>
          <div className='topmidPN'>
            <p style={{ margin: 20, fontWeight: 700 }}>Chọn sản phẩm</p>
            <input type='text' className='ChonSP' placeholder='Mã SP, SKU, Barcode hoặc tên SP'></input>
            <button className='btn-icon'><AiIcons.AiOutlineSearch /></button>
            <p style={{ margin: 20, fontWeight: 700, marginLeft: 160 }}>Nhân viên nhập/xuất hàng</p>
            <input type='text' className='NhanVienNX' placeholder='Chọn nhân viên'></input>
          </div>
          <div className='topmidPN2'>
            <p style={{ margin: 20, fontWeight: 700, marginLeft: 20 }}>Nhập từ</p>
            <input type='text' className='nhapTu' placeholder='Khác'></input>
            <button type='submit' className='btn-themNguonNX'><AiIcons.AiOutlinePlus /></button>
            <p style={{ margin: 20, fontWeight: 700, marginLeft: 160 }}>Ngày nhập/xuất</p>
            <input type='text' className='NgayNX' placeholder='Ngày nhập/xuất'></input>
          </div>
          <br />
          <hr />
          <div>
            <ListPN />
          </div>
          <hr />
          <div className='bottomPN'>
            <button className='btn-trolaiNH'>Trở lại</button>
            <button className='btn-luuNH'>Lưu</button>
            <button className='btn-LuuVaInPN'>Lưu và in</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhieuNhap
