import React, { useState } from "react";
import {
    Folder,
    Home,
    Settings,
    Terminal,
    HardDrive,
    Cpu,
    Archive,
    Package,
    FileText,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    ArrowRight,
    ChevronRight,
    Info,
    Map,
    TerminalSquare,
    Activity,
    FileCode2,
    Box,
    Database,
    CornerDownRight,
    Power,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-orange-500 selection:text-white pb-20">
            {/* Header */}
            <header className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🐧</span>
                        <h1 className="text-xl font-bold text-white tracking-tight">
                            Khóa học Linux/Ubuntu
                        </h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400 hidden md:inline-block">
                            Bài trước: 1.4
                        </span>
                        <div className="text-sm font-medium text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Phần 1.5
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                {/* Title Section */}
                <div className="text-center space-y-4 py-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        Cấu trúc{" "}
                        <span className="text-orange-500">Hệ thống File</span>{" "}
                        Linux
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Khám phá "bản đồ kho báu" của Linux. Hiểu được cấu trúc
                        thư mục, bạn sẽ không bao giờ bị lạc khi sử dụng dòng
                        lệnh Terminal!
                    </p>
                </div>

                {/* Section 1: One Root vs Multi Root */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-blue-500/20 text-blue-400 p-2 rounded-lg">
                            1
                        </span>
                        Điểm khác biệt cốt lõi
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <HardDrive size={100} />
                            </div>
                            <h4 className="text-red-400 font-bold text-xl mb-4 flex items-center gap-2">
                                <XCircle size={20} /> WINDOWS: Nhiều gốc (Nhiều
                                ổ đĩa)
                            </h4>
                            <p className="text-slate-400 text-sm mb-4">
                                Mỗi ổ đĩa là một cái cây riêng biệt, file nằm
                                rải rác không nhất quán.
                            </p>

                            <div className="flex gap-4 font-mono text-sm mt-6">
                                <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 flex-1">
                                    <div className="text-white font-bold border-b border-slate-700 pb-1 mb-2">
                                        C:\
                                    </div>
                                    <div className="text-slate-400 pl-2">
                                        ├── Windows
                                    </div>
                                    <div className="text-slate-400 pl-2">
                                        ├── Users
                                    </div>
                                    <div className="text-slate-400 pl-2">
                                        └── Program Files
                                    </div>
                                </div>
                                <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 flex-1">
                                    <div className="text-white font-bold border-b border-slate-700 pb-1 mb-2">
                                        D:\
                                    </div>
                                    <div className="text-slate-400 pl-2">
                                        ├── Games
                                    </div>
                                    <div className="text-slate-400 pl-2">
                                        └── Movies
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl relative overflow-hidden group border-green-500/30">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Map size={100} className="text-green-500" />
                            </div>
                            <h4 className="text-green-400 font-bold text-xl mb-4 flex items-center gap-2">
                                <CheckCircle2 size={20} /> LINUX: Một gốc duy
                                nhất (One Root)
                            </h4>
                            <p className="text-slate-400 text-sm mb-4">
                                Mọi thứ xuất phát từ 1 điểm gốc là{" "}
                                <code>/</code>. Các ổ đĩa khác (USB, CD) được
                                "gắn" (mount) vào cây này.
                            </p>

                            <div className="font-mono text-sm mt-6 bg-slate-800 p-3 rounded-lg border border-slate-700">
                                <div className="text-green-400 font-bold text-center text-xl mb-2">
                                    /
                                </div>
                                <div className="flex justify-center mb-2">
                                    <div className="w-px h-4 bg-slate-600"></div>
                                </div>
                                <div className="flex justify-between border-t border-slate-600 pt-2 px-4 text-slate-300">
                                    <div className="flex flex-col items-center">
                                        <div className="w-px h-2 bg-slate-600 mb-1"></div>
                                        bin
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-px h-2 bg-slate-600 mb-1"></div>
                                        etc
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-px h-2 bg-slate-600 mb-1"></div>
                                        home
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-px h-2 bg-slate-600 mb-1"></div>
                                        var
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-px h-2 bg-slate-600 mb-1"></div>
                                        usr
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Interactive File Explorer */}
                <section className="space-y-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-2">
                        <div>
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                <span className="bg-orange-500/20 text-orange-400 p-2 rounded-lg">
                                    2
                                </span>
                                Bản đồ Thư mục (Interactive Explorer)
                            </h3>
                            <p className="text-slate-400 mt-2">
                                Click vào các thư mục bên trái để xem chức năng
                                chi tiết của chúng.
                            </p>
                        </div>
                    </div>

                    <InteractiveFileTree />
                </section>

                {/* Section 3: Paths & Symbols */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className="bg-purple-500/20 text-purple-400 p-2 rounded-lg">
                            3
                        </span>
                        Đường dẫn & Ký hiệu đặc biệt
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
                            <h4 className="font-bold text-orange-400 mb-4 flex items-center gap-2">
                                Đường dẫn Tuyệt đối (Absolute Path)
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 mb-4">
                                <li>
                                    • Bắt đầu bằng dấu <code>/</code> (Root)
                                </li>
                                <li>• Không phụ thuộc vào vị trí hiện tại</li>
                                <li>
                                    • Luôn chỉ đúng 1 vị trí duy nhất trên máy
                                </li>
                            </ul>
                            <div className="bg-black p-3 rounded-lg font-mono text-xs text-green-400 border border-slate-700">
                                /home/alice/Documents/report.pdf
                                <br />
                                /etc/nginx/nginx.conf
                                <br />
                                /var/log/syslog
                            </div>
                        </div>

                        <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
                            <h4 className="font-bold text-blue-400 mb-4 flex items-center gap-2">
                                Đường dẫn Tương đối (Relative Path)
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 mb-4">
                                <li>
                                    • <strong>KHÔNG</strong> bắt đầu bằng dấu{" "}
                                    <code>/</code>
                                </li>
                                <li>• Phụ thuộc vào thư mục bạn đang đứng</li>
                                <li>
                                    • Hay dùng: <code>.</code> (hiện tại) và{" "}
                                    <code>..</code> (thư mục cha)
                                </li>
                            </ul>
                            <div className="bg-black p-3 rounded-lg font-mono text-xs text-green-400 border border-slate-700">
                                Documents/report.pdf
                                <br />
                                ./script.sh
                                <br />
                                ../../etc/hostname
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden">
                        <div className="p-4 bg-slate-800 border-b border-slate-700 font-bold text-white">
                            Bảng Ký hiệu Thần thánh (Cần học thuộc!)
                        </div>
                        <div className="p-6 overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="text-slate-400 border-b border-slate-700">
                                        <th className="pb-3 w-20">Ký hiệu</th>
                                        <th className="pb-3 w-1/3">Ý nghĩa</th>
                                        <th className="pb-3">Ví dụ thực tế</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-300">
                                    <tr className="border-b border-slate-800">
                                        <td className="py-3 font-mono text-xl text-green-400 font-bold">
                                            /
                                        </td>
                                        <td className="py-3">
                                            Root (Thư mục gốc)
                                        </td>
                                        <td className="py-3 font-mono text-xs bg-slate-950 p-2 rounded inline-block mt-2">
                                            cd /{" "}
                                            <span className="text-slate-500">
                                                # Về thư mục gốc
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-slate-800">
                                        <td className="py-3 font-mono text-xl text-orange-400 font-bold">
                                            ~
                                        </td>
                                        <td className="py-3">
                                            Home của user hiện tại
                                            <br />
                                            <span className="text-xs text-slate-500">
                                                (/home/ten-cua-ban/)
                                            </span>
                                        </td>
                                        <td className="py-3 font-mono text-xs bg-slate-950 p-2 rounded inline-block mt-2">
                                            cd ~{" "}
                                            <span className="text-slate-500">
                                                # Về nhà
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-slate-800">
                                        <td className="py-3 font-mono text-xl text-blue-400 font-bold">
                                            .
                                        </td>
                                        <td className="py-3">
                                            Thư mục hiện tại (Ở đây)
                                        </td>
                                        <td className="py-3 font-mono text-xs bg-slate-950 p-2 rounded inline-block mt-2">
                                            ./chay-file.sh{" "}
                                            <span className="text-slate-500">
                                                # Chạy file ở đây
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-slate-800">
                                        <td className="py-3 font-mono text-xl text-purple-400 font-bold">
                                            ..
                                        </td>
                                        <td className="py-3">
                                            Thư mục cha (Lên 1 cấp)
                                        </td>
                                        <td className="py-3 font-mono text-xs bg-slate-950 p-2 rounded inline-block mt-2">
                                            cd ..{" "}
                                            <span className="text-slate-500">
                                                # Thoát ra ngoài 1 cấp
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 font-mono text-xl text-red-400 font-bold">
                                            -
                                        </td>
                                        <td className="py-3">
                                            Thư mục vừa rời khỏi
                                        </td>
                                        <td className="py-3 font-mono text-xs bg-slate-950 p-2 rounded inline-block mt-2">
                                            cd -{" "}
                                            <span className="text-slate-500">
                                                # Quay lại chỗ cũ
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Section 4: Mnemonic Story */}
                <section className="space-y-6">
                    <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-2xl p-6 md:p-8">
                        <h3 className="text-xl font-bold text-orange-400 flex items-center gap-2 mb-6">
                            💡 Mẹo nhớ các thư mục: "Ngôi nhà Linux"
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            <MnemonicCard
                                icon={<Home />}
                                code="/home"
                                text="Phòng ngủ riêng"
                            />
                            <MnemonicCard
                                icon={<Settings />}
                                code="/etc"
                                text="Tủ hồ sơ/Cấu hình"
                            />
                            <MnemonicCard
                                icon={<Activity />}
                                code="/var"
                                text="Sổ nhật ký hàng ngày"
                            />
                            <MnemonicCard
                                icon={<Box />}
                                code="/bin"
                                text="Hộp công cụ cơ bản"
                            />
                            <MnemonicCard
                                icon={<Archive />}
                                code="/usr"
                                text="Kho phần mềm lớn"
                            />
                            <MnemonicCard
                                icon={<XCircle />}
                                code="/tmp"
                                text="Thùng rác tạm thời"
                            />
                            <MnemonicCard
                                icon={<TerminalSquare />}
                                code="/dev"
                                text="Tủ thiết bị điện"
                            />
                            <MnemonicCard
                                icon={<Cpu />}
                                code="/proc"
                                text="Não bộ (RAM/CPU)"
                            />
                            <MnemonicCard
                                icon={<Power />}
                                code="/boot"
                                text="Chìa khóa khởi động"
                            />
                            <MnemonicCard
                                icon={<Package />}
                                code="/opt"
                                text="Đồ ngoại nhập"
                            />
                        </div>
                    </div>
                </section>

                {/* Section 5: Terminal Simulator */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className="bg-teal-500/20 text-teal-400 p-2 rounded-lg">
                            4
                        </span>
                        Thực hành khám phá
                    </h3>
                    <p className="text-slate-400 mb-4">
                        Hãy bấm vào các nút lệnh dưới đây để xem kết quả khi
                        chạy trên Terminal thực tế.
                    </p>

                    <TerminalPractice />
                </section>

                {/* Section 6: Quiz */}
                <section className="space-y-6 pt-8">
                    <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-yellow-500/20 text-yellow-500 p-2 rounded-lg">
                                    5
                                </span>
                                Kiểm tra kiến thức
                            </h3>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                {/* Course Progress & Footer */}
                <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center mt-12 animate-in fade-in slide-in-from-bottom-4">
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-2xl font-bold text-green-400 mb-4">
                        CHÚC MỪNG! BẠN ĐÃ HOÀN THÀNH PHẦN 1!
                    </h3>
                    <p className="text-slate-300 mb-6">
                        Bạn đã nắm vững toàn bộ lý thuyết cốt lõi về Linux,
                        Ubuntu, giao diện và cấu trúc hệ thống.
                    </p>

                    <div className="max-w-md mx-auto text-left bg-slate-900 p-6 rounded-xl border border-slate-700 mb-8 space-y-3">
                        <div className="flex items-center gap-3 text-sm text-slate-300">
                            <CheckCircle2
                                className="text-green-500"
                                size={18}
                            />{" "}
                            1.1 Linux & Ubuntu là gì?
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-300">
                            <CheckCircle2
                                className="text-green-500"
                                size={18}
                            />{" "}
                            1.2 Các phiên bản Ubuntu
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-300">
                            <CheckCircle2
                                className="text-green-500"
                                size={18}
                            />{" "}
                            1.3 Cách cài đặt
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-300">
                            <CheckCircle2
                                className="text-green-500"
                                size={18}
                            />{" "}
                            1.4 Giao diện GNOME
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-300">
                            <CheckCircle2
                                className="text-green-500"
                                size={18}
                            />{" "}
                            1.5 Cấu trúc hệ thống file
                        </div>
                    </div>

                    <p className="text-slate-400 mb-6">
                        Sẵn sàng gõ những dòng lệnh đầu tiên chưa? Đi tiếp nào!
                        💪
                    </p>
                    <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-10 rounded-full inline-flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(22,163,74,0.4)] hover:shadow-[0_0_30px_rgba(22,163,74,0.6)] hover:-translate-y-1">
                        BẮT ĐẦU PHẦN 2: TERMINAL <ArrowRight size={24} />
                    </button>
                </div>
            </main>
        </div>
    );
}

// --- Sub Components ---

function MnemonicCard({ icon, code, text }) {
    return (
        <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-700/50 text-center flex flex-col items-center justify-center gap-2 hover:border-orange-500/50 transition-colors">
            <div className="text-orange-400">{icon}</div>
            <div className="font-mono font-bold text-white">{code}</div>
            <div className="text-xs text-slate-400 leading-tight">{text}</div>
        </div>
    );
}

// Interactive File Tree Data
const fileSystemData = [
    {
        name: "/",
        type: "dir",
        icon: <HardDrive className="text-slate-400" size={18} />,
        desc: "Thư mục Gốc (Root). Điểm bắt đầu của mọi thứ trong hệ thống Linux. Chỉ người quản trị (root) mới có quyền ghi/tạo file trực tiếp ở đây.",
        children: [
            {
                name: "bin",
                type: "dir",
                icon: <Box className="text-blue-400" size={18} />,
                desc: "Viết tắt của 'Binary'. Chứa các tập tin thực thi (công cụ/lệnh) cơ bản nhất mà mọi user đều có thể dùng: ls, cp, mv, cat...",
            },
            {
                name: "boot",
                type: "dir",
                icon: <Power className="text-red-400" size={18} />,
                desc: "Chứa nhân hệ điều hành (Kernel) và các file cấu hình (như GRUB) cần thiết để máy tính khởi động. Tuyệt đối không xóa file ở đây!",
            },
            {
                name: "dev",
                type: "dir",
                icon: <TerminalSquare className="text-teal-400" size={18} />,
                desc: "Viết tắt của 'Device'. Trong Linux 'Mọi thứ đều là file'. Các ổ cứng, USB, bàn phím, webcam đều được hiển thị dưới dạng 1 file trong thư mục này (ví dụ: /dev/sda).",
            },
            {
                name: "etc",
                type: "dir",
                icon: <Settings className="text-orange-400" size={18} />,
                desc: "Chứa TẤT CẢ các file cấu hình hệ thống (như network, fstab, danh sách user). Bất cứ khi nào bạn cần sửa cấu hình của một phần mềm (Nginx, SSH), hãy tìm trong đây.",
                children: [
                    {
                        name: "apt",
                        type: "dir",
                        desc: "Cấu hình liên quan đến việc cài đặt phần mềm.",
                    },
                    {
                        name: "ssh",
                        type: "dir",
                        desc: "Cấu hình kết nối từ xa SSH.",
                    },
                    {
                        name: "passwd",
                        type: "file",
                        desc: "File chứa danh sách các user trong hệ thống.",
                    },
                ],
            },
            {
                name: "home",
                type: "dir",
                icon: <Home className="text-green-400" size={18} />,
                desc: "Nơi chứa dữ liệu cá nhân của người dùng. Giống như C:\\Users trên Windows. Mỗi user sẽ có một thư mục riêng trong đây.",
                children: [
                    {
                        name: "alice",
                        type: "dir",
                        desc: "Dữ liệu cá nhân của user alice (Ký hiệu là ~)",
                    },
                    {
                        name: "bob",
                        type: "dir",
                        desc: "Dữ liệu cá nhân của user bob",
                    },
                ],
            },
            {
                name: "opt",
                type: "dir",
                icon: <Package className="text-yellow-400" size={18} />,
                desc: "Viết tắt của 'Optional'. Nơi cài đặt các phần mềm thương mại, phần mềm bên thứ 3 tự tải về không thông qua kho ứng dụng (như Google Chrome, XAMPP).",
            },
            {
                name: "proc",
                type: "dir",
                icon: <Cpu className="text-pink-400" size={18} />,
                desc: "Thư mục 'Ảo' (Virtual). Không nằm trên ổ cứng mà nằm trên RAM. Chứa thông tin thời gian thực về phần cứng (CPU, RAM) và các tiến trình đang chạy.",
            },
            {
                name: "root",
                type: "dir",
                icon: <AlertTriangle className="text-red-500" size={18} />,
                desc: "Thư mục Home DÀNH RIÊNG cho siêu người dùng (Administrator/Root). Đừng nhầm lẫn với thư mục gốc /.",
            },
            {
                name: "tmp",
                type: "dir",
                icon: <Archive className="text-slate-500" size={18} />,
                desc: "Viết tắt của 'Temporary'. Chứa các file tạm thời. SẼ BỊ XÓA TỰ ĐỘNG mỗi khi máy tính khởi động lại. Đừng lưu tài liệu quan trọng ở đây!",
            },
            {
                name: "usr",
                type: "dir",
                icon: <FileCode2 className="text-indigo-400" size={18} />,
                desc: "Viết tắt của 'Unix System Resources'. Chứa phần lớn các phần mềm, tài nguyên hệ thống (icon, thư viện) phục vụ cho người dùng.",
            },
            {
                name: "var",
                type: "dir",
                icon: <Activity className="text-purple-400" size={18} />,
                desc: "Viết tắt của 'Variable'. Chứa các dữ liệu luôn biến động trong quá trình máy hoạt động. Nổi bật nhất là LOG hệ thống và cơ sở dữ liệu.",
                children: [
                    {
                        name: "log",
                        type: "dir",
                        desc: "Nơi lưu mọi 'nhật ký' hoạt động (lỗi, đăng nhập). Nơi đầu tiên cần xem khi hệ thống bị lỗi!",
                    },
                    {
                        name: "www",
                        type: "dir",
                        desc: "Thư mục gốc chứa source code website (nếu cài Web Server).",
                    },
                ],
            },
        ],
    },
];

function InteractiveFileTree() {
    const [selectedNode, setSelectedNode] = useState(fileSystemData[0]); // Default is /

    const renderTree = (nodes, depth = 0) => {
        return nodes.map((node, index) => {
            const isSelected = selectedNode.name === node.name;
            return (
                <div key={`${depth}-${index}`} className="font-mono text-sm">
                    <div
                        className={`flex items-center gap-2 py-1.5 px-2 rounded cursor-pointer transition-colors ${isSelected ? "bg-orange-500/20 text-orange-400 font-bold" : "hover:bg-slate-800 text-slate-300"}`}
                        style={{ paddingLeft: `${depth * 16 + 8}px` }}
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedNode(node);
                        }}
                    >
                        {node.type === "dir" ? (
                            node.icon || (
                                <Folder className="text-slate-500" size={16} />
                            )
                        ) : (
                            <FileText className="text-slate-600" size={16} />
                        )}
                        {node.name}
                    </div>
                    {/* Render children recursively if it's the root OR if it has children and we want to show a flat subset for demo */}
                    {node.children && (
                        <div className="border-l border-slate-700 ml-[15px]">
                            {renderTree(node.children, depth + 1)}
                        </div>
                    )}
                </div>
            );
        });
    };

    return (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-xl">
            {/* Sidebar - Tree */}
            <div className="w-full md:w-1/3 bg-slate-950 border-r border-slate-800 p-4 overflow-y-auto max-h-[500px]">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                    Cây Thư Mục
                </div>
                {renderTree(fileSystemData)}
            </div>

            {/* Main Panel - Details */}
            <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-center bg-slate-800/30">
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-inner">
                        {selectedNode.icon ? (
                            React.cloneElement(selectedNode.icon, { size: 40 })
                        ) : (
                            <Folder size={40} className="text-slate-400" />
                        )}
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold text-white font-mono">
                            {selectedNode.name === "/"
                                ? "/"
                                : `/${selectedNode.name}`}
                        </h4>
                        <div className="text-sm font-medium text-slate-400 uppercase tracking-wider mt-1">
                            {selectedNode.type === "dir"
                                ? "Directory (Thư mục)"
                                : "File (Tập tin)"}
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-inner">
                    <p className="text-slate-300 text-lg leading-relaxed">
                        {selectedNode.desc ||
                            "Thư mục con chi tiết của hệ thống."}
                    </p>
                </div>

                {selectedNode.name === "home" && (
                    <div className="mt-6 bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl text-blue-300 text-sm flex gap-3 items-start">
                        <Info size={20} className="shrink-0 mt-0.5" />
                        <div>
                            <strong>Lưu ý:</strong> Thư mục cá nhân của bạn sẽ
                            có đường dẫn là <code>/home/tên-bạn</code> và thường
                            được hệ thống viết tắt bằng dấu ngã <code>~</code>.
                        </div>
                    </div>
                )}

                {selectedNode.name === "etc" && (
                    <div className="mt-6 bg-orange-500/10 border border-orange-500/20 p-4 rounded-xl text-orange-300 text-sm flex gap-3 items-start">
                        <Settings size={20} className="shrink-0 mt-0.5" />
                        <div>
                            <strong>Mẹo:</strong> Nếu bạn đang cần cấu hình
                            Nginx, MySQL, hay SSH, bạn chắc chắn phải dùng quyền{" "}
                            <code>sudo</code> để chỉnh sửa file trong thư mục
                            này.
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// Terminal Practice Simulator
function TerminalPractice() {
    const [output, setOutput] = useState({ command: "", result: "" });

    const commands = [
        {
            label: "Xem gốc",
            cmd: "ls /",
            res: "bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var",
        },
        {
            label: "Xem máy",
            cmd: "cat /etc/hostname",
            res: "ubuntu-pc",
        },
        {
            label: "Xem CPU",
            cmd: 'cat /proc/cpuinfo | grep "model name"',
            res: "model name      : Intel(R) Core(TM) i7-10750H CPU @ 2.60GHz",
        },
        {
            label: "Xem RAM",
            cmd: "free -h",
            res: "               total        used        free      shared  buff/cache   available\nMem:           15Gi       3.2Gi       8.1Gi       210Mi       4.5Gi        12Gi\nSwap:         2.0Gi          0B       2.0Gi",
        },
        {
            label: "Xem Ổ đĩa",
            cmd: "df -h",
            res: "Filesystem      Size  Used Avail Use% Mounted on\ntmpfs           1.6G  2.1M  1.6G   1% /run\n/dev/sda3        49G   12G   35G  26% /\ntmpfs           7.9G     0  7.9G   0% /dev/shm\n/dev/sda1       512M  6.1M  506M   2% /boot/efi",
        },
        {
            label: "Xem Log",
            cmd: "sudo tail -5 /var/log/syslog",
            res: "Feb 18 14:20:01 ubuntu-pc CRON[1234]: (root) CMD ( /usr/local/bin/check_disk.sh)\nFeb 18 14:25:33 ubuntu-pc systemd[1]: Started Session 4 of user alice.\nFeb 18 14:30:12 ubuntu-pc NetworkManager[845]: <info>  [1645191012.1234] device (wlan0): state change: activated -> deactivating (reason 'user-requested', sys-iface-state: 'managed')\nFeb 18 14:30:12 ubuntu-pc wpa_supplicant[888]: wlan0: CTRL-EVENT-DISCONNECTED bssid=aa:bb:cc:dd:ee:ff reason=3 locally_generated=1\nFeb 18 14:30:15 ubuntu-pc systemd[1]: NetworkManager-dispatcher.service: Deactivated successfully.",
        },
    ];

    const handleCommand = (cmdItem) => {
        setOutput({ command: `$ ${cmdItem.cmd}`, result: cmdItem.res });
    };

    return (
        <div className="grid md:grid-cols-2 gap-6">
            {/* Command Buttons */}
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex flex-col gap-3">
                {commands.map((c, i) => (
                    <button
                        key={i}
                        onClick={() => handleCommand(c)}
                        className="w-full text-left bg-slate-900 hover:bg-slate-700 border border-slate-700 p-3 rounded-xl transition-colors flex items-center justify-between group"
                    >
                        <div className="flex items-center gap-3">
                            <TerminalSquare
                                className="text-slate-400 group-hover:text-green-400 transition-colors"
                                size={18}
                            />
                            <span className="font-bold text-white">
                                {c.label}
                            </span>
                        </div>
                        <code className="text-xs text-green-400 bg-black px-2 py-1 rounded">
                            {c.cmd}
                        </code>
                    </button>
                ))}
            </div>

            {/* Terminal Display */}
            <div className="bg-black rounded-2xl border-4 border-slate-800 shadow-2xl overflow-hidden flex flex-col font-mono text-sm">
                <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-2 text-slate-400 text-xs">
                        alice@ubuntu-pc:~
                    </div>
                </div>
                <div className="p-4 flex-1 overflow-y-auto whitespace-pre-wrap">
                    {output.command ? (
                        <div className="animate-in fade-in duration-300">
                            <div className="text-white font-bold mb-2">
                                {output.command}
                            </div>
                            <div className="text-slate-300">
                                {output.result}
                            </div>
                            <div className="mt-4 flex items-center gap-2">
                                <span className="text-green-400 font-bold">
                                    alice@ubuntu-pc
                                </span>
                                :
                                <span className="text-blue-400 font-bold">
                                    ~
                                </span>
                                $
                                <span className="w-2 h-4 bg-slate-300 animate-pulse block"></span>
                            </div>
                        </div>
                    ) : (
                        <div className="text-slate-500 italic flex h-full items-center justify-center">
                            Bấm vào các nút bên trái để chạy lệnh
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// Quiz Data & Component
const questions = [
    {
        id: 1,
        question: "Ký hiệu dấu ngã (~) trong Linux đại diện cho đường dẫn nào?",
        options: [
            "Thư mục gốc (/)",
            "Thư mục cá nhân của người dùng hiện tại (VD: /home/alice/)",
            "Thư mục chứa file tạm thời (/tmp)",
            "Thư mục trước đó vừa truy cập",
        ],
        correct: 1,
        explanation:
            "Dấu ~ là ký hiệu viết tắt cực kỳ phổ biến để chỉ thư mục Home của user bạn đang đăng nhập. Rất tiện lợi khi dùng lệnh cd ~.",
    },
    {
        id: 2,
        question:
            "Bạn nghi ngờ máy chủ Web (Nginx) đang bị lỗi. Bạn nên vào thư mục nào ĐẦU TIÊN để đọc thông báo lỗi (Log)?",
        options: ["/etc/nginx/", "/bin/", "/var/log/", "/tmp/"],
        correct: 2,
        explanation:
            "Mọi nhật ký hoạt động (Log) của hệ thống và phần mềm đều được tự động ghi vào thư mục /var/log/. Đây là nơi đầu tiên Sysadmin cần xem khi dò lỗi.",
    },
    {
        id: 3,
        question: "Sự khác biệt giữa đường dẫn Tuyệt đối và Tương đối là gì?",
        options: [
            "Đường dẫn tuyệt đối không thể xóa được file.",
            "Đường dẫn tuyệt đối luôn bắt đầu bằng dấu /, trong khi tương đối thì không.",
            "Đường dẫn tương đối luôn bắt đầu bằng dấu /.",
            "Cả hai giống hệt nhau, chỉ khác tên gọi.",
        ],
        correct: 1,
        explanation:
            "Đường dẫn tuyệt đối luôn bắt đầu từ thư mục gốc (/). Đường dẫn tương đối lấy thư mục BẠN ĐANG ĐỨNG làm hệ quy chiếu.",
    },
    {
        id: 4,
        question: "Thư mục /etc trong Linux dùng để làm gì?",
        options: [
            "Chứa các file tạm thời, sẽ mất khi khởi động lại.",
            "Chứa thông tin về RAM và CPU.",
            "Chứa các lệnh cơ bản như ls, cp, mv.",
            "Chứa TẤT CẢ các file cấu hình (Configuration files) của hệ thống và phần mềm.",
        ],
        correct: 3,
        explanation:
            "Khi bạn cần sửa port của SSH, thêm user, hay cấu hình DNS... tất cả các file cấu hình text đó đều nằm trong /etc.",
    },
    {
        id: 5,
        question:
            "Trong cấu trúc file Linux, điểm khác biệt LỚN NHẤT so với Windows là gì?",
        options: [
            "Linux không cho phép tạo thư mục tên là 'Windows'.",
            "Linux có cấu trúc dạng cây với duy nhất MỘT gốc là (/), không có khái niệm ổ C:, D:, E: như Windows.",
            "Linux không thể cắm USB vào được.",
            "Linux giấu tất cả các file hệ thống đi không cho người dùng thấy.",
        ],
        correct: 1,
        explanation:
            "Đây là triết lý lõi của UNIX/Linux. Mọi thứ xuất phát từ 1 điểm /. Nếu bạn cắm USB vào, nó sẽ được 'gắn' vào cây này ở thư mục /media hoặc /mnt.",
    },
];

function InteractiveQuiz() {
    const [currentQ, setCurrentQ] = useState(0);
    const [selected, setSelected] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const handleSelect = (index) => {
        if (showResult) return;
        setSelected(index);
        setShowResult(true);
        if (index === questions[currentQ].correct) {
            setScore((s) => s + 1);
        }
    };

    const handleNext = () => {
        if (currentQ < questions.length - 1) {
            setCurrentQ((c) => c + 1);
            setSelected(null);
            setShowResult(false);
        } else {
            setCurrentQ("finished");
        }
    };

    const resetQuiz = () => {
        setCurrentQ(0);
        setSelected(null);
        setShowResult(false);
        setScore(0);
    };

    if (currentQ === "finished") {
        return (
            <div className="text-center flex flex-col justify-center items-center h-full min-h-[300px] animate-in zoom-in duration-300">
                <div className="text-6xl mb-4">
                    {score === questions.length ? "🏆" : "👏"}
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                    Hoàn thành bài kiểm tra!
                </h4>
                <p className="text-slate-400 mb-6">
                    Bạn trả lời đúng{" "}
                    <strong className="text-orange-500">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu hỏi về Cấu trúc File.
                </p>
                <button
                    onClick={resetQuiz}
                    className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-600 font-medium"
                >
                    Làm lại bài Quiz
                </button>
            </div>
        );
    }

    const q = questions[currentQ];

    return (
        <div className="flex flex-col h-full max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-6 text-sm font-medium">
                <span className="text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full">
                    Câu {currentQ + 1} / {questions.length}
                </span>
                <span className="text-slate-500">
                    Điểm: <strong className="text-white">{score}</strong>
                </span>
            </div>

            <h4 className="text-lg md:text-xl font-bold text-white mb-8 leading-snug">
                {q.question}
            </h4>

            <div className="space-y-3 flex-grow">
                {q.options.map((opt, idx) => {
                    let btnClass =
                        "w-full text-left p-4 rounded-xl border text-sm transition-all ";

                    if (!showResult) {
                        btnClass +=
                            "border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:border-slate-500";
                    } else {
                        if (idx === q.correct) {
                            btnClass +=
                                "border-green-500 bg-green-500/10 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.1)]";
                        } else if (idx === selected) {
                            btnClass +=
                                "border-red-500 bg-red-500/10 text-red-400";
                        } else {
                            btnClass +=
                                "border-slate-800 bg-slate-800/30 text-slate-600 opacity-50";
                        }
                    }

                    return (
                        <button
                            key={idx}
                            onClick={() => handleSelect(idx)}
                            disabled={showResult}
                            className={btnClass}
                        >
                            <div className="flex gap-3">
                                <span className="font-mono text-slate-500 mt-0.5">
                                    {String.fromCharCode(65 + idx)}.
                                </span>
                                <span>{opt}</span>
                            </div>
                        </button>
                    );
                })}
            </div>

            {showResult && (
                <div className="mt-8 pt-6 border-t border-slate-800 animate-in fade-in slide-in-from-bottom-2">
                    <div
                        className={`p-4 rounded-xl text-sm mb-6 flex gap-3 ${selected === q.correct ? "bg-green-500/10 border border-green-500/20 text-green-300" : "bg-orange-500/10 border border-orange-500/20 text-orange-300"}`}
                    >
                        <Info className="shrink-0 mt-0.5" size={18} />
                        <div>
                            <strong className="block mb-1 text-white">
                                {selected === q.correct
                                    ? "Chính xác!"
                                    : "Giải thích:"}
                            </strong>
                            {q.explanation}
                        </div>
                    </div>
                    <button
                        onClick={handleNext}
                        className="w-full md:w-auto md:px-8 py-3 bg-white hover:bg-slate-200 text-slate-900 font-bold rounded-xl transition-colors ml-auto block"
                    >
                        {currentQ < questions.length - 1
                            ? "Chuyển sang câu tiếp theo"
                            : "Xem kết quả"}
                    </button>
                </div>
            )}
        </div>
    );
}
