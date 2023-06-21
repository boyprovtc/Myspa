import React, { useState } from 'react'
import './RadioBtn.css';
function RadioBtn() {
    const [gender, setGender] = useState();
    return (
        <div >
            <div className='ip-1'>
                <input className='btn-1' type="radio" name="gender" value="Male" onChange={e => setGender(e.target.value)} />Tiền tour
            </div>
            <div className='ip-2'>
            <input className='fav_language' type="radio" name="gender" value="Female" onChange={e => setGender(e.target.value)} />% doanh thu sản phẩm
            </div>
        </div>

    )
}

export default RadioBtn
