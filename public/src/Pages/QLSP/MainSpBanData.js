import React from 'react';
import DataTable from 'react-data-table-component';

function MainSpBanData() {
  const columns = [
    {
      name: 'Mã SP.',
      selector: (row) => row.id,
    },
    {
      name: 'Chi Nhánh',
      selector: (row) => row.cn,
    },
    {
      name: 'Tên sản phẩm',
      selector: (row) => row.name,
    },
    {
      name: 'Mã SKU/Barcode',
      selector: (row) => row.sku,
    },
    {
      name: 'Nhãn hiệu',
      selector: (row) => row.nh,
    },
    {
      name: 'Danh mục',
      selector: (row) => row.dm,
    },
    {
      name: 'SL còn lại',
      selector: (row) => row.sl,
    },
    {
      name: 'Giá nhập',
      selector: (row) => row.gn,
    },
    {
      name: 'Giá sản phẩm',
      selector: (row) => row.gsp,
    },
    {
      name: 'Giá ưu đãi',
      selector: (row) => row.gud,
    },
    {
      name: 'Trạng thái',
      selector: (row) => row.tt,
    },
  ];

  const data = [
    {
      id: 1,
      cn: 'Bình Dương',
      name: 'Kem dưỡng',
      sku: '123456',
      nh: 'Dior',
      dm: 'Kem',
      sl: '1',
      gn: '1.000.0000 vnđ',
      gsp: '1.500.000 vnđ',
      gud: '1.250.000 vnđ',
      tt: 'Good',
    },
  ];
  return (
    <div>
      <DataTable columns={columns} data={data}></DataTable>
    </div>
  );
}

export default MainSpBanData;
