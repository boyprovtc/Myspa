import React from 'react';
import { Table } from 'antd';


const columns = [
    {
        title: 'Nhãn hiệu sản phẩm',
        width: 100,
        dataIndex: 'name',
        key: 'name',
          
    },
];

const data = [
    {
        key: 'name',
        name: 'LV',
    },
    {
        key: 'name',
        name: 'Dior',
    },
    {
        key: 'name',
        name: 'Chanel',
    },
];

const ListNhanHieu = () => (
    <Table columns={columns} dataSource={data} />
);

export default ListNhanHieu;