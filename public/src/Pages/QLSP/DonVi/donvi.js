import React from 'react'
import * as AiIcons from 'react-icons/ai';
import './donvi.css';
import ListDonVi from './ListDonVi';


function donvi() {
  return (
    <div className='donVi'>
      <div className='contaiNer'>
                <div className='top'>
                    <h2 className='title'>Đơn vị sản phẩm</h2>
                </div>
                <hr />
                
                <div className='mid'>
                    <a href="themDV" className="themDonVi"><AiIcons.AiOutlinePlus />Đơn vị hiệu sản phẩm</a>
                    <br />
                    <hr />
                    <ListDonVi/>
                </div>
            </div>
    </div>
  )
}

export default donvi
