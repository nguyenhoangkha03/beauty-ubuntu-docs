import React, { useState } from "react";
import {
    Monitor,
    TerminalSquare,
    HardDrive,
    ShieldCheck,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    ChevronRight,
    Info,
    Download,
    Settings,
    Cpu,
    Layout,
    Usb,
    ArrowRight,
    PlayCircle,
    FolderSync,
} from "lucide-react";

export default function App() {
    const [activeInstallTab, setActiveInstallTab] = useState("wsl2");

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
                            Bài trước: 1.2
                        </span>
                        <div className="text-sm font-medium text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Phần 1.3
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                {/* Title Section */}
                <div className="text-center space-y-4 py-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        Thực hành:{" "}
                        <span className="text-orange-500">Cài đặt Ubuntu</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Khám phá 3 phương pháp phổ biến nhất để đưa Ubuntu vào
                        máy tính của bạn: Máy ảo (VirtualBox), WSL2 và Máy thật
                        (Dual Boot).
                    </p>
                </div>

                {/* Section 1: Overview & Decision */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className="bg-blue-500/20 text-blue-400 p-2 rounded-lg">
                            1
                        </span>
                        Bạn nên chọn cách nào?
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* WSL2 Card */}
                        <div
                            className="bg-slate-800/80 p-6 rounded-2xl border-t-4 border-t-blue-500 border-slate-700 hover:bg-slate-800 transition-colors cursor-pointer"
                            onClick={() => setActiveInstallTab("wsl2")}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400">
                                    <TerminalSquare size={24} />
                                </div>
                                <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                                    DỄ NHẤT
                                </span>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">
                                WSL2
                            </h4>
                            <p className="text-sm text-slate-400 mb-4">
                                Chạy Linux ngầm ngay bên trong Windows. Tuyệt
                                vời cho lập trình viên.
                            </p>
                            <ul className="text-sm space-y-2 text-slate-300">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={16}
                                        className="text-green-500"
                                    />{" "}
                                    Cài đặt trong 5 phút
                                </li>
                                <li className="flex items-center gap-2">
                                    <XCircle
                                        size={16}
                                        className="text-red-500"
                                    />{" "}
                                    Không có giao diện (chỉ code)
                                </li>
                            </ul>
                        </div>

                        {/* VirtualBox Card */}
                        <div
                            className="bg-slate-800/80 p-6 rounded-2xl border-t-4 border-t-green-500 border-slate-700 hover:bg-slate-800 transition-colors cursor-pointer"
                            onClick={() => setActiveInstallTab("vbox")}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="bg-green-500/20 p-3 rounded-xl text-green-400">
                                    <Layout size={24} />
                                </div>
                                <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded">
                                    KHUYÊN DÙNG
                                </span>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">
                                VirtualBox (Máy ảo)
                            </h4>
                            <p className="text-sm text-slate-400 mb-4">
                                Chạy Ubuntu như một cửa sổ ứng dụng bình thường.
                                An toàn tuyệt đối.
                            </p>
                            <ul className="text-sm space-y-2 text-slate-300">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={16}
                                        className="text-green-500"
                                    />{" "}
                                    Có giao diện đồ họa đầy đủ
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={16}
                                        className="text-green-500"
                                    />{" "}
                                    Hỏng thì xóa tạo lại, ko sợ
                                </li>
                            </ul>
                        </div>

                        {/* Dual Boot Card */}
                        <div
                            className="bg-slate-800/80 p-6 rounded-2xl border-t-4 border-t-red-500 border-slate-700 hover:bg-slate-800 transition-colors cursor-pointer"
                            onClick={() => setActiveInstallTab("dualboot")}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="bg-red-500/20 p-3 rounded-xl text-red-400">
                                    <HardDrive size={24} />
                                </div>
                                <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2 py-1 rounded">
                                    MẠNH NHẤT
                                </span>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">
                                Dual Boot (Máy thật)
                            </h4>
                            <p className="text-sm text-slate-400 mb-4">
                                Cài thẳng lên ổ cứng song song với Windows. Tận
                                dụng 100% sức mạnh.
                            </p>
                            <ul className="text-sm space-y-2 text-slate-300">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={16}
                                        className="text-green-500"
                                    />{" "}
                                    Hiệu năng cao nhất
                                </li>
                                <li className="flex items-center gap-2">
                                    <AlertTriangle
                                        size={16}
                                        className="text-yellow-500"
                                    />{" "}
                                    Rủi ro mất dữ liệu nếu làm sai
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 2: Interactive Installation Guide */}
                <section className="space-y-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                            <span className="bg-orange-500/20 text-orange-400 p-2 rounded-lg">
                                2
                            </span>
                            Hướng dẫn chi tiết
                        </h3>
                        <div className="bg-slate-900 border border-slate-700 p-1 rounded-xl flex gap-1 w-full md:w-auto overflow-x-auto hide-scrollbar">
                            <button
                                onClick={() => setActiveInstallTab("wsl2")}
                                className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors ${activeInstallTab === "wsl2" ? "bg-blue-600 text-white shadow-lg" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`}
                            >
                                Cài WSL2 (Win 10/11)
                            </button>
                            <button
                                onClick={() => setActiveInstallTab("vbox")}
                                className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors ${activeInstallTab === "vbox" ? "bg-green-600 text-white shadow-lg" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`}
                            >
                                Cài VirtualBox (Máy ảo)
                            </button>
                            <button
                                onClick={() => setActiveInstallTab("dualboot")}
                                className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors ${activeInstallTab === "dualboot" ? "bg-red-600 text-white shadow-lg" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`}
                            >
                                Cài Dual Boot (Máy thật)
                            </button>
                        </div>
                    </div>

                    {/* DYNAMIC CONTENT BASED ON SELECTED TAB */}
                    <div className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* === WSL2 CONTENT === */}
                        {activeInstallTab === "wsl2" && (
                            <div className="p-6 md:p-8 space-y-8">
                                <div className="flex items-center gap-4 border-b border-slate-700 pb-4">
                                    <TerminalSquare
                                        size={40}
                                        className="text-blue-500"
                                    />
                                    <div>
                                        <h4 className="text-2xl font-bold text-white">
                                            Cách 1: Cài đặt qua WSL2
                                        </h4>
                                        <p className="text-slate-400">
                                            Windows Subsystem for Linux - Chạy
                                            Linux trên Windows không cần khởi
                                            động lại.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
                                            <h5 className="font-bold text-white mb-3 flex items-center gap-2">
                                                <Info
                                                    size={18}
                                                    className="text-blue-400"
                                                />{" "}
                                                Yêu cầu hệ thống
                                            </h5>
                                            <ul className="space-y-2 text-sm text-slate-300">
                                                <li className="flex items-center gap-2">
                                                    <CheckCircle2
                                                        size={16}
                                                        className="text-green-500"
                                                    />{" "}
                                                    Windows 10 (Build 19041+)
                                                    hoặc Windows 11
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <CheckCircle2
                                                        size={16}
                                                        className="text-green-500"
                                                    />{" "}
                                                    Đã bật Virtualization trong
                                                    BIOS
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h5 className="font-bold text-white mb-3 text-lg">
                                                Bước 1: Mở PowerShell (Admin)
                                            </h5>
                                            <p className="text-sm text-slate-300 mb-2">
                                                Nhấn chuột phải vào menu Start
                                                (hoặc phím{" "}
                                                <kbd className="bg-slate-800 px-2 py-1 rounded">
                                                    Win + X
                                                </kbd>
                                                ), chọn{" "}
                                                <strong>
                                                    Windows PowerShell (Admin)
                                                </strong>{" "}
                                                hoặc{" "}
                                                <strong>
                                                    Terminal (Admin)
                                                </strong>
                                                .
                                            </p>
                                        </div>

                                        <div>
                                            <h5 className="font-bold text-white mb-3 text-lg">
                                                Bước 2: Gõ lệnh thần thánh
                                            </h5>
                                            <p className="text-sm text-slate-300 mb-2">
                                                Chỉ với 1 dòng lệnh duy nhất,
                                                Windows sẽ tự động làm mọi thứ:
                                            </p>

                                            <div className="rounded-lg overflow-hidden border border-slate-700 shadow-xl bg-black font-mono text-sm">
                                                <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                                                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                                                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                                                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                                                    <span className="ml-2 text-slate-400 text-xs">
                                                        Administrator: Windows
                                                        PowerShell
                                                    </span>
                                                </div>
                                                <div className="p-4">
                                                    <div className="text-slate-300">
                                                        PS
                                                        C:\Windows\system32&gt;{" "}
                                                        <span className="text-white font-bold">
                                                            wsl --install
                                                        </span>
                                                    </div>
                                                    <div className="text-slate-400 mt-2">
                                                        Installing: Virtual
                                                        Machine Platform
                                                    </div>
                                                    <div className="text-green-400">
                                                        Virtual Machine Platform
                                                        has been installed.
                                                    </div>
                                                    <div className="text-slate-400 mt-1">
                                                        Installing: Windows
                                                        Subsystem for Linux
                                                    </div>
                                                    <div className="text-green-400">
                                                        Windows Subsystem for
                                                        Linux has been
                                                        installed.
                                                    </div>
                                                    <div className="text-slate-400 mt-1">
                                                        Downloading: Ubuntu
                                                    </div>
                                                    <div className="text-slate-400 mt-1">
                                                        Installing: Ubuntu
                                                    </div>
                                                    <div className="text-green-400">
                                                        Ubuntu has been
                                                        installed.
                                                    </div>
                                                    <div className="text-yellow-400 mt-2">
                                                        The requested operation
                                                        is successful. Changes
                                                        will not be effective
                                                        until the system is
                                                        rebooted.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h5 className="font-bold text-white mb-3 text-lg">
                                                Bước 3: Khởi động lại máy
                                            </h5>
                                            <p className="text-sm text-slate-300">
                                                Sau khi restart, một cửa sổ
                                                Terminal đen sẽ tự động bật lên.
                                                Bạn chỉ cần điền{" "}
                                                <strong>Username</strong> và{" "}
                                                <strong>Password</strong> mới
                                                cho Ubuntu là xong!
                                            </p>
                                        </div>

                                        <div className="bg-blue-500/10 p-5 rounded-xl border border-blue-500/20">
                                            <h5 className="font-bold text-blue-400 mb-3 flex items-center gap-2">
                                                <FolderSync size={18} /> Cách
                                                chia sẻ File (Win ↔ Linux)
                                            </h5>

                                            <div className="space-y-4 text-sm">
                                                <div>
                                                    <strong className="text-white block mb-1">
                                                        Từ WSL2 xem file
                                                        Windows:
                                                    </strong>
                                                    <p className="text-slate-400 mb-1">
                                                        Ổ C: của Windows được
                                                        gắn vào thư mục{" "}
                                                        <code className="text-orange-300">
                                                            /mnt/c/
                                                        </code>
                                                    </p>
                                                    <code className="bg-black px-2 py-1 rounded text-green-400 block border border-slate-700">
                                                        $ ls
                                                        /mnt/c/Users/TenBan/Desktop
                                                    </code>
                                                </div>
                                                <div className="w-full h-px bg-blue-500/20"></div>
                                                <div>
                                                    <strong className="text-white block mb-1">
                                                        Từ Windows xem file
                                                        WSL2:
                                                    </strong>
                                                    <p className="text-slate-400 mb-1">
                                                        Mở File Explorer, gõ vào
                                                        thanh địa chỉ:
                                                    </p>
                                                    <code className="bg-black px-2 py-1 rounded text-blue-300 block border border-slate-700">
                                                        \\wsl$\Ubuntu\home\username\
                                                    </code>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* === VIRTUALBOX CONTENT === */}
                        {activeInstallTab === "vbox" && (
                            <div className="p-6 md:p-8 space-y-8">
                                <div className="flex items-center gap-4 border-b border-slate-700 pb-4">
                                    <Layout
                                        size={40}
                                        className="text-green-500"
                                    />
                                    <div>
                                        <h4 className="text-2xl font-bold text-white">
                                            Cách 2: Cài qua VirtualBox
                                        </h4>
                                        <p className="text-slate-400">
                                            Tạo một máy tính ảo chạy hoàn toàn
                                            độc lập và an toàn bên trong máy
                                            thật.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        {/* B1 & B2 */}
                                        <div className="relative pl-6 border-l-2 border-slate-700 space-y-8">
                                            <div className="relative">
                                                <div className="absolute -left-[35px] bg-slate-800 text-slate-300 w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 border-slate-700">
                                                    1
                                                </div>
                                                <h5 className="font-bold text-white text-lg">
                                                    Tải phần mềm cần thiết
                                                </h5>
                                                <ul className="mt-2 space-y-2 text-sm text-slate-300">
                                                    <li className="flex items-center gap-2">
                                                        <Download
                                                            size={16}
                                                            className="text-blue-400"
                                                        />{" "}
                                                        Tải và cài đặt phần mềm{" "}
                                                        <strong>
                                                            VirtualBox
                                                        </strong>{" "}
                                                        (từ virtualbox.org)
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <Download
                                                            size={16}
                                                            className="text-orange-400"
                                                        />{" "}
                                                        Tải file ảnh đĩa{" "}
                                                        <strong>
                                                            Ubuntu 24.04 LTS
                                                            (.iso)
                                                        </strong>{" "}
                                                        (từ ubuntu.com, dung
                                                        lượng ~5GB).
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="relative">
                                                <div className="absolute -left-[35px] bg-slate-800 text-slate-300 w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 border-slate-700">
                                                    2
                                                </div>
                                                <h5 className="font-bold text-white text-lg">
                                                    Tạo máy ảo mới
                                                </h5>
                                                <p className="mt-2 text-sm text-slate-300">
                                                    Mở VirtualBox, bấm nút{" "}
                                                    <strong>New</strong>. Điền
                                                    tên (VD: Ubuntu-24.04). Trỏ
                                                    đường dẫn phần{" "}
                                                    <em>ISO Image</em> đến file
                                                    .iso vừa tải về.{" "}
                                                    <strong className="text-orange-400">
                                                        Tick vào ô "Skip
                                                        Unattended
                                                        Installation".
                                                    </strong>
                                                </p>
                                            </div>

                                            <div className="relative">
                                                <div className="absolute -left-[35px] bg-slate-800 text-slate-300 w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 border-slate-700">
                                                    3
                                                </div>
                                                <h5 className="font-bold text-white text-lg">
                                                    Cấu hình Phần cứng ảo
                                                </h5>
                                                <div className="mt-2 bg-slate-900 p-4 rounded-xl border border-slate-700 space-y-3">
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-slate-400">
                                                            RAM (Memory):
                                                        </span>
                                                        <span className="text-green-400 font-bold">
                                                            Khuyên dùng 4096 MB
                                                            (4GB)
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-slate-400">
                                                            CPU (Processors):
                                                        </span>
                                                        <span className="text-green-400 font-bold">
                                                            Khuyên dùng 2 CPUs
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between text-sm border-t border-slate-800 pt-3">
                                                        <span className="text-slate-400">
                                                            Ổ cứng ảo (Disk):
                                                        </span>
                                                        <span className="text-green-400 font-bold">
                                                            Khuyên dùng 30GB -
                                                            50GB
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-yellow-400 italic mt-2">
                                                        * Không nên chọn
                                                        "Pre-allocate Full Size"
                                                        để tiết kiệm ổ cứng
                                                        thật.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {/* B4 & B5 */}
                                        <div className="relative pl-6 border-l-2 border-slate-700 space-y-8">
                                            <div className="relative">
                                                <div className="absolute -left-[35px] bg-slate-800 text-slate-300 w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 border-slate-700">
                                                    4
                                                </div>
                                                <h5 className="font-bold text-white text-lg flex items-center gap-2">
                                                    <PlayCircle
                                                        size={20}
                                                        className="text-green-500"
                                                    />{" "}
                                                    Khởi động & Cài đặt Ubuntu
                                                </h5>
                                                <ul className="mt-2 space-y-2 text-sm text-slate-300">
                                                    <li>
                                                        • Bấm nút{" "}
                                                        <strong>Start</strong>{" "}
                                                        để bật máy ảo.
                                                    </li>
                                                    <li>
                                                        • Chọn dòng{" "}
                                                        <strong>
                                                            Try or Install
                                                            Ubuntu
                                                        </strong>
                                                        .
                                                    </li>
                                                    <li>
                                                        • Trong trình cài đặt đồ
                                                        họa, chọn ngôn ngữ
                                                        English, bàn phím US.
                                                    </li>
                                                    <li>
                                                        •{" "}
                                                        <strong>
                                                            Installation Type:
                                                        </strong>{" "}
                                                        Chọn{" "}
                                                        <em>
                                                            "Erase disk and
                                                            install Ubuntu"
                                                        </em>
                                                        . (Yên tâm, đây là ổ đĩa
                                                        ảo, không ảnh hưởng máy
                                                        thật).
                                                    </li>
                                                    <li>
                                                        • Điền thông tin
                                                        Username và Password
                                                        (Nhớ pass để dùng lệnh
                                                        sudo).
                                                    </li>
                                                    <li>
                                                        • Chờ cài đặt xong và
                                                        Restart.
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="relative">
                                                <div className="absolute -left-[35px] bg-green-500/20 text-green-400 w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 border-green-500">
                                                    5
                                                </div>
                                                <h5 className="font-bold text-green-400 text-lg">
                                                    Cài Guest Additions (Rất
                                                    Quan Trọng!)
                                                </h5>
                                                <p className="mt-2 text-sm text-slate-300 mb-3">
                                                    Giúp máy ảo tự phóng to màn
                                                    hình, copy-paste qua lại với
                                                    máy thật. Mở Terminal trong
                                                    Ubuntu (Ctrl+Alt+T) và gõ:
                                                </p>

                                                <div className="bg-black p-4 rounded-lg font-mono text-sm border border-slate-700 shadow-inner">
                                                    <div className="text-green-400">
                                                        sudo apt update
                                                    </div>
                                                    <div className="text-green-400 mt-1">
                                                        sudo apt install -y
                                                        virtualbox-guest-additions-iso
                                                    </div>
                                                    <div className="text-green-400 mt-1">
                                                        sudo apt install -y
                                                        virtualbox-guest-utils
                                                    </div>
                                                    <div className="text-slate-500 mt-2">
                                                        # Sau đó khởi động lại
                                                        máy ảo
                                                    </div>
                                                    <div className="text-green-400">
                                                        sudo reboot
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* === DUAL BOOT CONTENT === */}
                        {activeInstallTab === "dualboot" && (
                            <div className="p-6 md:p-8 space-y-8">
                                <div className="flex items-center gap-4 border-b border-slate-700 pb-4">
                                    <HardDrive
                                        size={40}
                                        className="text-red-500"
                                    />
                                    <div>
                                        <h4 className="text-2xl font-bold text-white">
                                            Cách 3: Cài Máy thật (Dual Boot)
                                        </h4>
                                        <p className="text-slate-400">
                                            Cài Ubuntu chia sẻ chung ổ cứng với
                                            Windows. Lúc bật máy được chọn vào
                                            HĐH nào.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-xl flex items-start gap-4">
                                    <AlertTriangle
                                        size={32}
                                        className="text-red-400 shrink-0 mt-1"
                                    />
                                    <div>
                                        <h5 className="font-bold text-red-400 text-lg mb-1">
                                            Cảnh báo rủi ro dữ liệu!
                                        </h5>
                                        <p className="text-sm text-red-200/80">
                                            Phương pháp này can thiệp trực tiếp
                                            vào phân vùng ổ cứng thật. Nếu bạn
                                            lỡ tay format nhầm ổ C/D, bạn sẽ mất
                                            toàn bộ dữ liệu Windows.{" "}
                                            <strong>
                                                BẮT BUỘC PHẢI BACKUP DỮ LIỆU
                                                QUAN TRỌNG TRƯỚC KHI LÀM!
                                            </strong>
                                        </p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <div>
                                            <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                                                <Usb
                                                    size={20}
                                                    className="text-orange-400"
                                                />{" "}
                                                Bước 1: Tạo USB Boot cài đặt
                                            </h5>
                                            <p className="text-sm text-slate-300 mb-2">
                                                Cắm USB (≥ 8GB, sẽ bị xóa sạch)
                                                vào máy. Dùng phần mềm{" "}
                                                <strong>Rufus</strong> (trên
                                                Windows).
                                            </p>
                                            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-sm font-mono text-slate-400">
                                                Device: [Chọn USB của bạn]
                                                <br />
                                                Boot selection: [Chọn file
                                                Ubuntu.iso]
                                                <br />
                                                Partition scheme: GPT
                                                <br />
                                                Target system: UEFI (non-CSM)
                                                <br />
                                                <span className="text-orange-400 mt-2 block">
                                                    → Bấm START và chờ tạo xong.
                                                </span>
                                            </div>
                                        </div>

                                        <div>
                                            <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                                                <HardDrive
                                                    size={20}
                                                    className="text-blue-400"
                                                />{" "}
                                                Bước 2: Tạo vùng trống trên ổ
                                                cứng
                                            </h5>
                                            <p className="text-sm text-slate-300 mb-2">
                                                Mở{" "}
                                                <strong>Disk Management</strong>{" "}
                                                trên Windows. Chuột phải vào ổ C
                                                (hoặc D) chọn{" "}
                                                <strong>Shrink Volume</strong>.
                                            </p>
                                            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-sm space-y-2">
                                                <div className="text-slate-300">
                                                    Nhập dung lượng cắt ra:{" "}
                                                    <code className="text-green-400">
                                                        51200
                                                    </code>{" "}
                                                    (VD: 50GB).
                                                </div>
                                                <div className="text-slate-400 italic">
                                                    Vùng mới cắt sẽ hiển thị màu
                                                    đen (Unallocated). Để nguyên
                                                    đó, KHÔNG format vùng này.
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                                                <Settings
                                                    size={20}
                                                    className="text-purple-400"
                                                />{" "}
                                                Bước 3: Boot vào USB & Cài đặt
                                            </h5>
                                            <ul className="space-y-2 text-sm text-slate-300 mb-4">
                                                <li>
                                                    1. Khởi động lại máy, bấm
                                                    liên tục phím Boot Menu
                                                    (F12, F8, Esc tùy hãng).
                                                    Chọn boot từ USB.
                                                </li>
                                                <li>
                                                    2. Trong giao diện cài đặt
                                                    Ubuntu, làm các bước chọn
                                                    ngôn ngữ, bàn phím.
                                                </li>
                                                <li className="bg-green-500/10 p-3 rounded-lg border border-green-500/20 text-green-300">
                                                    3.{" "}
                                                    <strong>
                                                        Installation type:
                                                    </strong>{" "}
                                                    PHẢI CHỌN{" "}
                                                    <strong>
                                                        "Install Ubuntu
                                                        alongside Windows Boot
                                                        Manager"
                                                    </strong>
                                                    . Ubuntu sẽ tự tìm cái vùng
                                                    đen Unallocated ở Bước 2 để
                                                    cài vào.
                                                </li>
                                                <li>
                                                    4. Đợi cài xong và rút USB
                                                    ra.
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h5 className="font-bold text-white mb-2 text-lg">
                                                Màn hình GRUB Menu
                                            </h5>
                                            <p className="text-sm text-slate-300 mb-2">
                                                Sau khi cài xong, mỗi lần bật
                                                máy bạn sẽ thấy màn hình này để
                                                chọn hệ điều hành:
                                            </p>
                                            <div className="bg-slate-950 border-4 border-slate-800 p-4 font-mono text-sm shadow-2xl h-40 flex flex-col justify-center">
                                                <div className="text-center text-slate-500 mb-4">
                                                    GNU GRUB version 2.12
                                                </div>
                                                <div className="bg-white text-black px-2 py-0.5">
                                                    Ubuntu
                                                </div>
                                                <div className="text-white px-2 py-0.5">
                                                    Advanced options for Ubuntu
                                                </div>
                                                <div className="text-white px-2 py-0.5">
                                                    Windows Boot Manager (on
                                                    /dev/nvme0n1p1)
                                                </div>
                                                <div className="text-white px-2 py-0.5">
                                                    UEFI Firmware Settings
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* Section 3: Comparison Table */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className="bg-teal-500/20 text-teal-400 p-2 rounded-lg">
                            3
                        </span>
                        Bảng so sánh tổng kết
                    </h3>

                    <div className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-x-auto hide-scrollbar">
                        <table className="w-full text-left border-collapse min-w-[700px]">
                            <thead>
                                <tr className="border-b-2 border-slate-700 bg-slate-900/50">
                                    <th className="p-4 font-semibold text-slate-300 w-1/4">
                                        Tiêu chí
                                    </th>
                                    <th className="p-4 font-semibold text-blue-400 w-1/4">
                                        WSL2
                                    </th>
                                    <th className="p-4 font-semibold text-green-400 w-1/4">
                                        VirtualBox
                                    </th>
                                    <th className="p-4 font-semibold text-red-400 w-1/4">
                                        Máy thật (Dual Boot)
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-slate-300">
                                <tr className="border-b border-slate-700/50 hover:bg-slate-800/50">
                                    <td className="p-4 font-medium text-white">
                                        Đối tượng phù hợp
                                    </td>
                                    <td className="p-4">Dev muốn code nhanh</td>
                                    <td className="p-4">
                                        Người mới muốn học an toàn
                                    </td>
                                    <td className="p-4">
                                        Sử dụng lâu dài, tối ưu
                                    </td>
                                </tr>
                                <tr className="border-b border-slate-700/50 hover:bg-slate-800/50">
                                    <td className="p-4 font-medium text-white">
                                        Độ khó cài đặt
                                    </td>
                                    <td className="p-4">
                                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded">
                                            Rất Dễ (5 phút)
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                                            Trung bình (20 phút)
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded">
                                            Khó (Rủi ro dữ liệu)
                                        </span>
                                    </td>
                                </tr>
                                <tr className="border-b border-slate-700/50 hover:bg-slate-800/50">
                                    <td className="p-4 font-medium text-white">
                                        Hiệu năng (Tốc độ)
                                    </td>
                                    <td className="p-4">
                                        ⭐⭐⭐⭐ (Rất nhanh)
                                    </td>
                                    <td className="p-4">
                                        ⭐⭐⭐ (Bị chia sẻ tài nguyên)
                                    </td>
                                    <td className="p-4">
                                        ⭐⭐⭐⭐⭐ (Tối đa 100%)
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-800/50">
                                    <td className="p-4 font-medium text-white">
                                        Giao diện (GUI)
                                    </td>
                                    <td className="p-4 text-slate-500">
                                        ❌ Chỉ có dòng lệnh
                                    </td>
                                    <td className="p-4 text-green-400">
                                        ✅ Đầy đủ
                                    </td>
                                    <td className="p-4 text-green-400">
                                        ✅ Đầy đủ
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Section 4: Quiz */}
                <section className="space-y-6">
                    <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-yellow-500/20 text-yellow-500 p-2 rounded-lg">
                                    4
                                </span>
                                Kiểm tra kiến thức
                            </h3>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                {/* Footer Next Step */}
                <div className="text-center pt-8 border-t border-slate-800">
                    <p className="text-slate-400 mb-4">
                        Sau khi đã có Ubuntu, chúng ta sẽ bắt đầu khám phá hệ
                        điều hành này!
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                        Bài tiếp theo: 1.4 — Giao diện GNOME{" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

// --- Quiz Component ---

const questions = [
    {
        id: 1,
        question:
            "Điểm khác biệt lớn nhất giữa WSL2 và VirtualBox khi dùng trên Windows là gì?",
        options: [
            "WSL2 yêu cầu phải trả tiền, VirtualBox thì miễn phí.",
            "WSL2 mặc định không có giao diện đồ họa (chỉ có Terminal), còn VirtualBox chạy giao diện Desktop đầy đủ.",
            "VirtualBox chạy nhanh hơn WSL2 rất nhiều.",
            "WSL2 yêu cầu phải dùng USB Boot để cài đặt.",
        ],
        correct: 1,
        explanation:
            "WSL2 được thiết kế để chạy các công cụ dòng lệnh của Linux (Terminal) nhanh gọn ngay trong Windows, không đi kèm giao diện desktop (như GNOME) mặc định như VirtualBox.",
    },
    {
        id: 2,
        question:
            "Tại sao cài Dual Boot (Máy thật) lại rủi ro và cần phải sao lưu (backup) dữ liệu?",
        options: [
            "Vì hệ điều hành Linux chứa nhiều virus sẽ xóa file của Windows.",
            "Vì phải can thiệp trực tiếp cắt/chia lại phân vùng ổ cứng (Shrink Volume). Nếu chọn nhầm hoặc mất điện, phân vùng Windows có thể bị hỏng.",
            "Vì Ubuntu có dung lượng quá lớn sẽ lấp đầy ổ cứng.",
            "Vì khi cài xong, Windows sẽ bị tự động gỡ cài đặt.",
        ],
        correct: 1,
        explanation:
            "Thao tác trên Disk Management (chia ổ) và bước 'Installation type' nếu người dùng chọn nhầm 'Erase disk' thay vì 'Install alongside' sẽ xóa sạch toàn bộ ổ cứng.",
    },
    {
        id: 3,
        question: "Trong VirtualBox, gói 'Guest Additions' dùng để làm gì?",
        options: [
            "Để cấp bản quyền (License) cho Ubuntu.",
            "Để cài đặt thêm các trò chơi (games) vào máy ảo.",
            "Giúp màn hình máy ảo tự động co giãn theo cửa sổ, hỗ trợ copy-paste text và file giữa máy thật và máy ảo.",
            "Để tăng tốc độ mạng Internet cho máy ảo.",
        ],
        correct: 2,
        explanation:
            "Guest Additions cung cấp các driver đặc biệt giúp máy ảo và máy thật giao tiếp với nhau tốt hơn (hiển thị, clipboard, share folder).",
    },
    {
        id: 4,
        question:
            "Lệnh nào sau đây dùng để cài đặt WSL2 và Ubuntu nhanh nhất trên Windows PowerShell (Quyền Admin)?",
        options: [
            "wsl --install",
            "apt install ubuntu",
            "install-linux-windows",
            "sudo wsl setup",
        ],
        correct: 0,
        explanation:
            "Lệnh `wsl --install` là lệnh chính thức từ Microsoft. Nó sẽ tự động kích hoạt tính năng Virtual Machine Platform, tải kernel Linux và cài đặt bản phân phối Ubuntu mặc định.",
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
                    câu hỏi liên quan đến cài đặt.
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
                    Điểm hiện tại:{" "}
                    <strong className="text-white">{score}</strong>
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
                            : "Xem điểm số"}
                    </button>
                </div>
            )}
        </div>
    );
}
