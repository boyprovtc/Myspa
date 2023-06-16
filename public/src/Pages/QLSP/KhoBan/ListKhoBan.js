import React from 'react';
import { Table } from 'antd';

const columns = [
    {
        title: 'Mã SP',
        dataIndex: 'MaSP',
        sorter: {
            compare: (a, b) => a.MaSP - b.MaSP,
        },
    },

    {
        title: 'Tên sản phẩm',
        dataIndex: 'name',
        sorter: {
            compare: (a, b) => a.name - b.name,
        },
    },
    {
        title: 'Mã SKU/Barcode',
        dataIndex: 'chinese',
        sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
        },
    },
    {
        title: 'Nhãn Hiệu',
        dataIndex: 'math',
        sorter: {
            compare: (a, b) => a.math - b.math,
            multiple: 2,
        },
    },
    {
        title: 'Kho Bán',
        dataIndex: 'khoban',
        sorter: {
            compare: (a, b) => a.khoban - b.khoban,
            multiple: 1,
        },
    },
    {
        title: 'Tổng nhập',
        dataIndex: 'tongnhap',
        sorter: {
            compare: (a, b) => a.tongnhap - b.tongnhap,
            multiple: 1,
        },
    },
    {
        title: 'Tổng xuất',
        dataIndex: 'tongxuat',
        sorter: {
            compare: (a, b) => a.tongxuat - b.tongxuat,
            multiple: 1,
        },
    },
    {
        title: 'Còn lại',
        dataIndex: 'conlai',
        sorter: {
            compare: (a, b) => a.conlai - b.conlai,
            multiple: 1,
        },
    },
    {
        title: 'Đơn vị gốc',
        dataIndex: 'dvg',
        sorter: {
            compare: (a, b) => a.dvg - b.dvg,
            multiple: 1,
        },
    },
    {
        title: 'Đơn vị quy đổi thành',
        dataIndex: 'dvqd',
        sorter: {
            compare: (a, b) => a.dvqd - b.dvqd,
            multiple: 1,
        },
    },
];

const data = [
    {
        MaSP: '1',
        name: 'John Brown',
        chinese: 98,
        math: 60,
        khoban: 'Bến Tre',
        tongnhap: 100,
        tongxuat: 50, 
        conlai: 50,
        dvg: 'Hộp',
        dvqd:'Hủ',
    },
    {
        MaSP: '2',
        name: 'Jim Green',
        chinese: 98,
        math: 66,
        khoban: 'Thủ Đức',
        tongnhap: 99,
        tongxuat: 50, 
        conlai: 49,
        dvg: 'Hộp',
        dvqd:'Lọ',
    },
    {
        MaSP: '3',
        name: 'Joe Black',
        chinese: 98,
        math: 90,
        khoban: 'Đồng Nai',
        tongnhap: 80,
        tongxuat: 50, 
        conlai: 30,
        dvg: 'Hộp',
        dvqd:'Chai',
    },
    {
        MaSP: '4',
        name: 'Jim Red',
        chinese: 88,
        math: 99,
        khoban: 'Biên Hòa',
        tongnhap: 90,
        tongxuat: 50, 
        conlai: 40,
        dvg: 'Hộp',
        dvqd:'Hủ',
    },
];


const ListKhoBan = () => <Table columns={columns} dataSource={data} />;

export default ListKhoBan;