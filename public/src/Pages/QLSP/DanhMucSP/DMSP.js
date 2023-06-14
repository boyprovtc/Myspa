import React from 'react'
import * as AiIcons from 'react-icons/ai';
import "./DMSP.css"
import ListDmSP from './ListDmSp';


function DMSP() {
    return (
        <div className='dmSP'>
            <div className='contaiNer'>
                <div className='top'>
                    <h2 className='title'>Danh mục sản phẩm</h2>
                </div>
                <hr />
                
                <div className='mid'>
                    <a href="themDMSP" className="themdmsp"><AiIcons.AiOutlinePlus />Thêm danh mục sản phẩm</a>
                    <br />
                    <hr />
                    <ListDmSP/>
                </div>
            </div>
        </div>
    )
    
}

export default DMSP
