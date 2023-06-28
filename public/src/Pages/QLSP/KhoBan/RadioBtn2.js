import React, { useState } from 'react'
import './RadioBtn2.css';
function RadioBtn() {
    const [gender, setGender] = useState();
    return (
        <div style={{marginLeft: 10}}>
            <div className='ip-1'>
                <input className='btn-1' type="radio" name="gender" value="Male" onChange={e => setGender(e.target.value)} />Xuất cho
            </div>
            <div className='ip-2'>
            <input className='fav_language' type="radio" name="gender" value="Female" onChange={e => setGender(e.target.value)} />Xuất cho chi nhánh
            </div>
        </div>

    )
}

export default RadioBtn
