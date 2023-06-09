import React from 'react';
import { Table } from 'antd';


const columns = [
    {
        title: 'Danh mục sản phẩm',
        width: 100,
        dataIndex: 'name',
        key: 'name',
          
    },
];

const data = [
    {
        key: 'name',
        name: 'Kem',
    },
    {
        key: 'name',
        name: 'Dưỡng ẩm',
    },
    {
        key: 'name',
        name: 'Sửa rửa mặt',
    },
];

const ListDmSP = () => (
    <Table columns={columns} dataSource={data} />
);

export default ListDmSP;