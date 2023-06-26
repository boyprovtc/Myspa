import React from 'react';
import { Table } from 'antd';


const columns = [
    {
        title: 'Đơn vị sản phẩm',
        width: 100,
        dataIndex: 'name',
        key: 'name',
          
    },
];

const data = [
    {
        key: 'name',
        name: 'Lọ',
    },
    {
        key: 'name',
        name: 'Chai',
    },
    {
        key: 'name',
        name: 'Hủ',
    },
];

const ListDonVi = () => (
    <Table columns={columns} dataSource={data} />
);

export default ListDonVi;