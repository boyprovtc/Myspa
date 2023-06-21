import React from 'react';
import "./themDMSP.css";
import {
    InputGroup,
    Form,
    DropdownButton,
    Dropdown,
    Container,
    Row,
    Col,
    Button,
  } from 'react-bootstrap';


function themDMSP() {
    return (
        <div className='themDMSP'>
            <div className='contaiNer'>
                <div className='top'>
                    <h2 className='title'>Thêm danh mục sản phẩm</h2>
                </div>
                <hr />
                <br />
                <br />
                <div className='midThemDMSP'>
                    <h6>Tên danh mục *</h6>
                    <input type='text' className='nhapTenDM'></input>
                    <p>Ưu tiên</p>
                    <input type='text' placeholder='0' className='nhapUT'></input>
                    <p>Chi nhánh</p>
                    <input type='text' placeholder='Tất cả chi nhánh' className='nhapCN'></input>
                </div>
                <br />
                <br />
                <br />
                <hr />
                <div className='bottom'>
                    <p>* Thông tin bắt buộc nhập</p>
                    <button className='btn-trolai'>Trở lại</button>
                    <button className='btn-khoiphuc'>Khôi phục</button>
                    <button className='btn-luu'>Lưu</button>
                </div>
            </div>
        </div>
    )
}

export default themDMSP
