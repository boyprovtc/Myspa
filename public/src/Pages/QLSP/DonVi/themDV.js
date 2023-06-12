import React from 'react';
import "./themDV.css";

function themDV() {
    return (
        <div className='themDV'>
            <div className='contaiNer'>
                <div className='top'>
                    <h2 className='title'>Thêm đơn vị sản phẩm</h2>
                </div>
                <hr />
                <br />
                <br />
                <div className='midthemDV'>
                    <p>Tên danh mục *</p>
                    <input type='text' className='nhapTenDV'></input>
                    <p>Kí hiệu</p>
                    <input type='text' className='nhapKHDV'></input>
                </div>
                <br />
                <br />
                <br />
                <hr />
                <div className='bottom'>
                    <p>* Thông tin bắt buộc nhập</p>
                    <button className='btn-trolaiDV'>Trở lại</button>
                    <button className='btn-khoiphucDV'>Khôi phục</button>
                    <button className='btn-luuDV'>Lưu</button>
                </div>
            </div>
        </div>
    )
}

export default themDV
