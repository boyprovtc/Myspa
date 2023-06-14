import React from 'react';
import './DH.css';
import LichHen from './LichHen/LichHen';
import DSLichHen from './DSLH/DSLichHen';

export const DH = () => {
  return (
    <div className="DH">
      <div className="Container">
        <h1>Đặt hẹn</h1>
      </div>
    </div>
  );
};
export const LH = () => {
  return (
    <div className="DH">
      <div className="Container">
        <LichHen />
      </div>
    </div>
  );
};
export const DSLH = () => {
  return (
    <div className="DH">
      <div className="Container">
        <DSLichHen />
      </div>
    </div>
  );
};
