import React from 'react';
import "./themNhanHieu.css";

function themNhanHieu() {
    return (
        <div className='themNhanHieu'>
            <div className='contaiNer'>
                <div className='top'>
                    <h2 className='title'>Thêm nhãn hiệu sản phẩm</h2>
                </div>
                <hr />
                <br />
                <br />
                <div className='midthemNhanHieu'>
                    <p>Tên nhãn hiệu *</p>
                    <input type='text' className='nhapTenNhanHieu'></input>
                    <p>Ưu tiên</p>
                    <input type='text' placeholder='0' className='nhapUTNH'></input>
                </div>
                <br />
                <br />
                <br />
                <hr />
                <div className='bottom'>
                    <p>* Thông tin bắt buộc nhập</p>
                    <button className='btn-trolaiNH'>Trở lại</button>
                    <button className='btn-khoiphucNH'>Khôi phục</button>
                    <button className='btn-luuNH'>Lưu</button>
                </div>
            </div>
        </div>
    )
}

export default themNhanHieu
