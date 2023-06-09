import React from 'react'
import * as AiIcons from 'react-icons/ai';
import "./nhanhieu.css"
import ListNhanHieu from './ListNhanHieu';


function nhanhieu() {
    return (
        <div className='nhanHieu'>
            <div className='contaiNer'>
                <div className='top'>
                    <h2 className='title'>Nhãn hiệu sản phẩm</h2>
                </div>
                <hr />
                
                <div className='mid'>
                    <a href="#" className="themNhanHieu"><AiIcons.AiOutlinePlus />Thêm nhãn hiệu sản phẩm</a>
                    <br />
                    <hr />
                    <ListNhanHieu/>
                </div>
            </div>
        </div>
    )
}

export default nhanhieu
