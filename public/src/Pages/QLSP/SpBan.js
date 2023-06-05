import React from 'react'
import * as AiIcons from 'react-icons/ai'
import "./SpBan.css"

function SpBan() {
    return (
        <div className="SpBan">
            <div className='topDSSP'>
                <h2 className='titleDSSP'>Danh sách sản phẩm</h2>
                <a href='#' className='btn-napDSSP'><AiIcons.AiOutlineCloudUpload />Nạp danh sách</a>
                <a href='#' className='btn-xuatDSSP'><AiIcons.AiOutlineCloudDownload />Xuất danh sách</a>
            </div>
            <hr />
            <br />
            <div className='midDSSP'>
                <a href='#' className='btn-themsp'><AiIcons.AiOutlinePlus />Thêm sản phẩm</a>
                <input className="nhaptimkiem" type="text" placeholder="Mã SP, Barcode hoặc tên SP"></input>
                <button type='submit' className='timkiemsp'>Tìm kiếm</button>
                <a href='#' className='btn-themdmsp'><AiIcons.AiOutlinePlus />Thêm danh mục sản phẩm</a>
            </div>
            <br />

            <hr />

        </div>

    )
}

export default SpBan
