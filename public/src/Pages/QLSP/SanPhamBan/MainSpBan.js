import React from 'react';
import * as AiIcons from 'react-icons/ai';
import './SpBan.css';
import MainSpBanData from './MainSpBanData';

function MainSpBan() {
  return (
    <div className="mainSpBan">
      <div className="topSpBan">
        <h2 className="titleSpBan">Danh sách sản phẩm</h2>
        <a href="#" className="btn-napSpBan">
          <AiIcons.AiOutlineCloudUpload />
          Nạp danh sách
        </a>
        <a href="#" className="btn-xuatSpBan">
          <AiIcons.AiOutlineCloudDownload />
          Xuất danh sách
        </a>
      </div>
      <hr />
      <div className="midSpBan">
        <div className="topMidSpBan">
          <a href="#" className="btn-themSpBan">
            <AiIcons.AiOutlinePlus />
            Thêm sản phẩm
          </a>
          <input
            className="nhaptimkiem"
            type="text"
            placeholder="Mã SP, Barcode hoặc tên SP"
          ></input>
          <button type="submit" className="timkiemSpBan">
            Tìm kiếm
          </button>
          <a href="#" className="btn-themdmsp">
            <AiIcons.AiOutlinePlus />
            Thêm danh mục sản phẩm
          </a>
        </div>
        <br />
        <div className="centerMidSpBan">
          <MainSpBanData />
        </div>

      </div>
      <br />
      <br />
      <br />
      <br />
      <div className='bottomSpBan'>
        <button className='trangDau'>Trang đầu</button>
        <button className='troLai'>Trở lại</button>
        <button className='keTiep'>Kế tiếp</button>
        <button className='trangCuoi'>Trang cuối</button>
      </div>
    </div>
  );
}

export default MainSpBan;
