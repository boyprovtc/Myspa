import { Radio } from 'antd';
import React, { useState } from 'react';

function ListRadioItem() {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1} style={{ color: '#7266BA' }}>
          Chưa xác nhận
        </Radio>

        <Radio value={2} style={{ color: '#9ACC51' }}>
          Xác nhận
        </Radio>
        <Radio value={3} style={{ color: '#f6973b' }}>
          Không đến
        </Radio>
        <Radio value={5} style={{ color: '#F26C4F' }}>
          Hủy
        </Radio>
        <Radio value={6} style={{ color: '#FA91C8' }}>
          Đã đến
        </Radio>
        <Radio value={7} style={{ color: '#23B7E5' }}>
          Đặt online
        </Radio>
      </Radio.Group>
    </>
  );
}

function ViewMacDinh() {
  const [view, setView] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.view);
    setView(e.target.view);
  };
  return (
    <>
      <Radio.Group onChange={onChange} view={view}>
        <Radio view={1}>Tháng</Radio>
        <Radio view={2}>Lịch biểu tháng</Radio>
        <Radio view={3}>Tuần</Radio>
        <Radio view={4}>Lịch biểu tuần</Radio>
        <Radio view={5}>Ngày</Radio>
        <Radio view={6}>Lịch biểu ngày</Radio>
        <Radio view={7}>3 ngày</Radio>
        <Radio view={8}>Lịch biểu 3 ngày</Radio>
      </Radio.Group>
    </>
  );
}
export { ListRadioItem, ViewMacDinh };
