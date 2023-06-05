import React from 'react'

import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as FiIcons from 'react-icons/fi'

export const SidebarData = [
    {
        title: "Home",
        path: '/home',
        icon: <AiIcons.AiOutlineDashboard />
    },
    {
        title: "Khách hàng",
        path: '/KH',
        icon: <AiIcons.AiOutlineUser />,
        iconClosed: <AiIcons.AiFillCaretDown />,
        iconOpened: <AiIcons.AiFillCaretUp />,
        subNav: [
            {
                title: "Khách hàng",
                path: '/KH'
            }
        ]
    },

    {
        title: "Đặt hẹn",
        path: '/DH',
        icon: <AiIcons.AiOutlineCalendar />,
        iconClosed: <AiIcons.AiFillCaretDown />,
        iconOpened: <AiIcons.AiFillCaretUp />,
        subNav: [
            {
                title: "Lịch hẹn",
                path: '/DH/LH'
            },
            {
                title: "Danh sách lịch hẹn",
                path: '/DH/DSLH'
            }
        ]
    },
    {
        title: "Bán hàng (POS)",
        path: '/BH',
        icon: <AiIcons.AiOutlineShopping />,
        iconClosed: <AiIcons.AiFillCaretDown />,
        iconOpened: <AiIcons.AiFillCaretUp />,
        subNav: [
            {
                title: "Tạo đơn hàng",
                path: '/BH/TaoDonHang'
            },
            {
                title: "Danh sách bán hàng",
                path: '/BH/DSBanHang'
            },
            {
                title: "Giường & Phòng",
                path: '/BH/Giuong_Phong'
            }
        ]
    },
    {
        title: "Thẻ dịch vụ",
        path: '/TDV',
        icon: <AiIcons.AiOutlineCreditCard />,
        iconClosed: <AiIcons.AiFillCaretDown />,
        iconOpened: <AiIcons.AiFillCaretUp />,
        subNav: [
            {
                title: "Thẻ Liệu Trình",
                path: '/TDV/TLR'
            },
            {
                title: "Thẻ trả trước",
                path: '/TDV/TTT'
            },
            {
                title: "Mệnh giá thẻ trả trước",
                path: '/TDV/MenhGiaTTT'
            },
            {
                title: "Combo Liệu Trình",
                path: '/TDV/ComboLT'
            }
        ]
    },
    {
        title: "QL Thu chi",
        path: '/QLTC',
        icon: <AiIcons.AiOutlineSwap />,
        iconClosed: <AiIcons.AiFillCaretDown />,
        iconOpened: <AiIcons.AiFillCaretUp />,
        subNav: [
            {
                title: "DS Thu Chi",
                path: '/QLTC/DSTC'
            },
            {
                title: "Danh sách các loại thu chi",
                path: '/QLTC/DSCacLoaiThuChi'
            }
        ]
    },
    {
        title: "Báo cáo",
        path: '/BC',
        icon: <AiIcons.AiOutlineBarChart />,
        iconClosed: <AiIcons.AiFillCaretDown />,
        iconOpened: <AiIcons.AiFillCaretUp />,
        subNav: [
            {
                title: "Người dùng",
                path: '/BC/NguoiDung'
            },
            {
                title: "Dịch vụ",
                path: '/BC/DV'
            },
            {
                title: "Sản Phẩm",
                path: '/BC/SP'
            },
            {
                title: "Doanh thu",
                path: '/BC/DT'
            },
            {
                title: "Doanh thu năm",
                path: '/BC/DTNam'
            },
            {
                title: "Phân hạng KH",
                path: '/BC/HangKH'
            },
            {
                title: "Công nợ",
                path: '/BC/CongNo'
            },
            {
                title: "Thẻ dịch vụ",
                path: '/BC/TDV'
            },
            {
                title: "Commission",
                path: '/BC/Commission'
            },
            {
                title: "Điểm thưởng",
                path: '/BC/DiemThuong'
            },
            {
                title: "Lịch hẹn",
                path: '/BC/LH'
            },
            {
                title: "Báo cáo chung",
                path: '/BC/BCChung'
            }
            ,
            {
                title: "Tài khoảng thưởng",
                path: '/BC/TKThuong'
            }
            ,
            {
                title: "Báo cáo tổng hợp",
                path: '/BC/BCTongHop'
            }
        ]
    },
    {
        title: "Gửi SMS",
        path: '/SMS',
        icon: <AiIcons.AiOutlineMail />,
        iconClosed: <AiIcons.AiFillCaretDown />,
        iconOpened: <AiIcons.AiFillCaretUp />,
        subNav: [
            {
                title: "Gửi tới DSKH",
                path: '/SMS/GuiDSKH'
            },
            {
                title: "Gửi mặc định",
                path: '/SMS/GuiMacDinh'
            },
            {
                title: "Lịch Sử gửi tin",
                path: '/SMS/LSGuiTin'
            },
            {
                title: "Cấu hình Email",
                path: '/SMS/CauHinhEmail'
            },
            {
                title: "Tin nhắn/ Email mẫu",
                path: '/SMS/Mau'
            },
            {
                title: "Gửi Mail",
                path: '/SMS/GuiMail'
            },
            {
                title: "Lịch Sử Gửi Mail",
                path: '/SMS/LichSuMail'
            }

        ]
    },
    {
        title: "Đội ngũ",
        path: '/DN',
        icon: <FiIcons.FiUsers />,
        iconClosed: <AiIcons.AiFillCaretDown />,
        iconOpened: <AiIcons.AiFillCaretUp />,
        subNav: [
            {
                title: "Admin",
                path: '/DN/Admin'
            },
            {
                title: "Nhân viên",
                path: '/DN/NV'
            },
            {
                title: "Lịch làm việc",
                path: '/DN/LichLV'
            }
        ]
    },
    {
        title: "Dịch Vụ",
        path: '/DV',
        icon: <AiIcons.AiOutlineShop />,
        iconClosed: <AiIcons.AiFillCaretDown />,
        iconOpened: <AiIcons.AiFillCaretUp />,
        subNav: [
            {
                title: "Danh sách dịch vụ",
                path: '/DV/DSDV'
            },
            {
                title: "Danh mục DV",
                path: '/DV/DMDV'
            }
        ]
    },
    {
        title: "Sản Phẩm",
        path: '/SP',
        icon: <AiIcons.AiOutlineGift />,
        iconClosed: <AiIcons.AiFillCaretDown />,
        iconOpened: <AiIcons.AiFillCaretUp />,
        subNav: [
            {
                title: "Sản Phẩm Bán",
                path: '/QLSP/SpBan'
            },
            {
                title: "Kho bán",
                path: '/KH/KhoBan'
            },
            {
                title: "Danh mục sản phẩm",
                path: '/KH/DMSP'
            },
            {
                title: "Nhãn hiệu SP",
                path: '/KH/NHSP'
            },
            {
                title: "Đơn vị SP",
                path: '/KH/DVSP'
            }
        ]
    },
]