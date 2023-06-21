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
      <br />
      <hr />

      <br />
      <div className="midSpBan">
        <div className="topMidSpBan">
          <a href="ThemSP" className="btn-themSpBan">
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
          <a href="../DanhMucSP/themDMSP" className="btn-themdmsp">
            <AiIcons.AiOutlinePlus />
            Thêm danh mục sản phẩm
          </a>
        </div>

        <div className="centerMidSpBan">
          <MainSpBanData />
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
}

export default MainSpBan;
