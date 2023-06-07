import React from 'react';
import DataTable from 'react-data-table-component';

function MainSpBanData() {
  const columns = [
    {
      name: 'Mã SP.',
      selector: (row) => row.id,
      sortable: true
    },
    {
      name: 'Chi Nhánh',
      selector: (row) => row.cn,
      sortable: true
    },
    {
      name: 'Tên sản phẩm',
      selector: (row) => row.name,
      sortable: true
    },
    {
      name: 'Mã SKU/Barcode',
      selector: (row) => row.sku,
      sortable: true
    },
    {
      name: 'Nhãn hiệu',
      selector: (row) => row.nh,
      sortable: true
    },
    {
      name: 'Danh mục',
      selector: (row) => row.dm,
      sortable: true
    },
    {
      name: 'SL còn lại',
      selector: (row) => row.sl,
      sortable: true
    },
    {
      name: 'Giá nhập',
      selector: (row) => row.gn,
      sortable: true
    },
    {
      name: 'Giá sản phẩm',
      selector: (row) => row.gsp,
      sortable: true
    },
    {
      name: 'Giá ưu đãi',
      selector: (row) => row.gud,
      sortable: true
    },
    {
      name: 'Trạng thái',
      selector: (row) => row.tt,
      sortable: true
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
    {
      id: 2,
      cn: 'Biên Hòa',
      name: 'Kem trộn',
      sku: '456789',
      nh: 'LV',
      dm: 'Kem',
      sl: '19',
      gn: '1.500.0000 vnđ',
      gsp: '2.000.000 vnđ',
      gud: '1.500.000 vnđ',
      tt: 'Good',
    },
    {
      id: 3,
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
    {
      id: 4,
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

