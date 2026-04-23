import React, { useState, useRef, useEffect } from "react";
import {
    PackageOpen,
    Package,
    Shield,
    ShieldCheck,
    Box,
    Layers,
    TerminalSquare,
    CheckCircle2,
    AlertTriangle,
    ChevronRight,
    PlayCircle,
    Info,
    ArrowRight,
    ArrowDown,
    RefreshCw,
    Trash2,
    Download,
    Search,
    Server,
    Globe,
    ShieldAlert,
    Cpu,
    HardDrive,
    Database,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-indigo-500 selection:text-white pb-20">
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
                            Bài trước: 3.1
                        </span>
                        <div className="text-sm font-medium text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full border border-indigo-400/20">
                            Phần 3.2
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                {/* Title Section */}
                <div className="text-center space-y-4 py-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        <span className="text-indigo-400 font-mono tracking-tighter">
                            Snap & Flatpak:
                        </span>{" "}
                        Thế hệ Package mới
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Giải quyết triệt để "Dependencies Hell". Gói gọn ứng
                        dụng và thư viện vào một hộp cát (Sandbox) an toàn, chạy
                        được trên mọi bản phân phối Linux.
                    </p>
                </div>

                {/* Section 1: The Problem & The Solution */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                        <span className="bg-indigo-500/20 text-indigo-400 p-2 rounded-lg">
                            1
                        </span>
                        Tại sao lại cần Snap & Flatpak?
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* The Problem (APT) */}
                        <div className="bg-slate-800/50 p-6 rounded-3xl border border-rose-500/30 relative">
                            <div className="absolute top-4 right-4 text-rose-500/20">
                                <AlertTriangle size={60} />
                            </div>
                            <h4 className="text-rose-400 font-bold text-xl mb-4 relative z-10">
                                Vấn đề của APT
                            </h4>
                            <ul className="text-sm text-slate-300 space-y-4 relative z-10 mb-6">
                                <li>
                                    <strong className="text-white block mb-1">
                                        1. Xung đột thư viện (Dependencies
                                        Hell):
                                    </strong>{" "}
                                    App A cần thư viện X bản 1.0, App B cần bản
                                    2.0. APT không thể cài cả hai bản cùng lúc →
                                    Lỗi toàn hệ thống.
                                </li>
                                <li>
                                    <strong className="text-white block mb-1">
                                        2. Phần mềm cũ kỹ:
                                    </strong>{" "}
                                    Kho Ubuntu ưu tiên sự ổn định, nên các app
                                    thường là bản rất cũ (VD: Repo có Firefox
                                    102, nhưng bản mới nhất là 124).
                                </li>
                            </ul>

                            <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl flex items-center justify-center gap-4">
                                <div className="bg-blue-500/20 text-blue-400 p-2 rounded border border-blue-500/30 text-xs">
                                    App A
                                </div>
                                <div className="bg-green-500/20 text-green-400 p-2 rounded border border-green-500/30 text-xs">
                                    App B
                                </div>
                                <ArrowRight className="text-slate-500" />
                                <div className="bg-rose-500/20 text-rose-400 p-2 rounded border border-rose-500/50 text-xs font-bold animate-pulse">
                                    libX.so (Chung)
                                </div>
                            </div>
                            <div className="text-center text-xs text-slate-500 mt-2">
                                APT: Dùng chung thư viện (Nhẹ, nhưng dễ vỡ)
                            </div>
                        </div>

                        {/* The Solution (Sandbox) */}
                        <div className="bg-slate-800/50 p-6 rounded-3xl border border-indigo-500/30 relative shadow-[0_0_30px_rgba(99,102,241,0.1)]">
                            <div className="absolute top-4 right-4 text-indigo-500/20">
                                <Shield size={60} />
                            </div>
                            <h4 className="text-indigo-400 font-bold text-xl mb-4 relative z-10">
                                Giải pháp Sandbox
                            </h4>
                            <ul className="text-sm text-slate-300 space-y-4 relative z-10 mb-6">
                                <li>
                                    <strong className="text-white block mb-1">
                                        1. Tất cả trong một:
                                    </strong>{" "}
                                    Đóng gói App + TẤT CẢ thư viện nó cần vào 1
                                    cục duy nhất.
                                </li>
                                <li>
                                    <strong className="text-white block mb-1">
                                        2. Chạy mọi nơi:
                                    </strong>{" "}
                                    App xây cho Ubuntu cũng chạy ngon lành trên
                                    Fedora, Arch.
                                </li>
                                <li>
                                    <strong className="text-white block mb-1">
                                        3. Cách ly an toàn:
                                    </strong>{" "}
                                    Chạy trong "hộp cát" (Sandbox), virus không
                                    thể chạm vào hệ thống lõi.
                                </li>
                            </ul>

                            <div className="flex justify-center gap-4">
                                <div className="bg-slate-900 border-2 border-indigo-500/50 p-3 rounded-xl flex flex-col gap-2">
                                    <div className="bg-blue-500/20 text-blue-400 px-4 py-1 rounded text-xs text-center border border-blue-500/30">
                                        App A
                                    </div>
                                    <div className="bg-slate-800 text-slate-400 px-4 py-1 rounded text-[10px] text-center border border-slate-700">
                                        libX.so (v1.0)
                                    </div>
                                </div>
                                <div className="bg-slate-900 border-2 border-indigo-500/50 p-3 rounded-xl flex flex-col gap-2">
                                    <div className="bg-green-500/20 text-green-400 px-4 py-1 rounded text-xs text-center border border-green-500/30">
                                        App B
                                    </div>
                                    <div className="bg-slate-800 text-slate-400 px-4 py-1 rounded text-[10px] text-center border border-slate-700">
                                        libX.so (v2.0)
                                    </div>
                                </div>
                            </div>
                            <div className="text-center text-xs text-slate-500 mt-2">
                                Snap/Flatpak: Đóng gói riêng biệt (Nặng hơn,
                                nhưng cực kỳ an toàn)
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Snap vs Flatpak Tabs */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-orange-500/20 text-orange-400 p-2 rounded-lg">
                            2
                        </span>
                        Hai thế lực thống trị: Snap và Flatpak
                    </h3>

                    <PackageManagerTabs />
                </section>

                {/* Section 3: Compare & When to use */}
                <section className="space-y-6 pt-6">
                    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 p-6 md:p-8 rounded-3xl">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-8">
                            <Layers size={28} className="text-teal-400" /> So
                            sánh & Khi nào nên dùng gì?
                        </h3>

                        <div className="overflow-x-auto hide-scrollbar">
                            <table className="w-full text-left text-sm whitespace-nowrap">
                                <thead>
                                    <tr className="border-b border-slate-700 text-slate-400">
                                        <th className="pb-4 font-semibold w-1/4">
                                            Tiêu chí
                                        </th>
                                        <th className="pb-4 font-semibold text-emerald-400 w-1/4">
                                            APT
                                        </th>
                                        <th className="pb-4 font-semibold text-orange-400 w-1/4">
                                            SNAP
                                        </th>
                                        <th className="pb-4 font-semibold text-blue-400 w-1/4">
                                            FLATPAK
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-300">
                                    <tr className="border-b border-slate-800/50 hover:bg-slate-800/30">
                                        <td className="py-4">
                                            Người chống lưng
                                        </td>
                                        <td className="py-4">
                                            Debian / Ubuntu
                                        </td>
                                        <td className="py-4 font-bold">
                                            Canonical (Ubuntu)
                                        </td>
                                        <td className="py-4 font-bold">
                                            Red Hat / Cộng đồng
                                        </td>
                                    </tr>
                                    <tr className="border-b border-slate-800/50 hover:bg-slate-800/30">
                                        <td className="py-4">
                                            Sandbox (Bảo mật)
                                        </td>
                                        <td className="py-4 text-rose-400">
                                            ❌ Không
                                        </td>
                                        <td className="py-4 text-green-400">
                                            ✅ Có (Strict/Classic)
                                        </td>
                                        <td className="py-4 text-green-400">
                                            ✅ Rất mạnh
                                        </td>
                                    </tr>
                                    <tr className="border-b border-slate-800/50 hover:bg-slate-800/30">
                                        <td className="py-4">
                                            Tốc độ khởi động app
                                        </td>
                                        <td className="py-4 text-green-400">
                                            ⚡ Rất nhanh
                                        </td>
                                        <td className="py-4 text-yellow-400">
                                            🐢 Chậm (đặc biệt lần đầu)
                                        </td>
                                        <td className="py-4 text-blue-400">
                                            👍 Khá nhanh
                                        </td>
                                    </tr>
                                    <tr className="border-b border-slate-800/50 hover:bg-slate-800/30">
                                        <td className="py-4">
                                            Phù hợp nhất cho
                                        </td>
                                        <td className="py-4">
                                            Server, công cụ Terminal
                                        </td>
                                        <td className="py-4">
                                            IDE (VS Code), App Server
                                        </td>
                                        <td className="py-4">
                                            App đồ họa (GUI), Game
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-800/30">
                                        <td className="py-4">
                                            Lệnh tương đương
                                        </td>
                                        <td className="py-4 font-mono text-xs">
                                            apt install vlc
                                        </td>
                                        <td className="py-4 font-mono text-xs">
                                            snap install vlc
                                        </td>
                                        <td className="py-4 font-mono text-xs">
                                            flatpak install flathub...
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-8 bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-inner">
                            <h4 className="font-bold text-teal-400 mb-4 flex items-center gap-2">
                                <CheckCircle2 size={18} /> Quy tắc quyết định
                                (Decision Tree):
                            </h4>
                            <div className="space-y-3 text-sm text-slate-300 font-mono">
                                <div className="flex gap-2">
                                    1. Công cụ dòng lệnh (htop, git, nginx)?{" "}
                                    <span className="text-emerald-400 ml-auto">
                                        → Dùng APT
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    2. App văn phòng/đồ họa cần bản mới nhất?{" "}
                                    <span className="text-blue-400 ml-auto">
                                        → Dùng Flatpak
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    3. App độc quyền (Slack, Spotify) ko có
                                    Flatpak?{" "}
                                    <span className="text-orange-400 ml-auto">
                                        → Dùng Snap
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    4. Lập trình viên cần môi trường chuẩn (VS
                                    Code)?{" "}
                                    <span className="text-orange-400 ml-auto">
                                        → Dùng Snap (--classic)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Simulator */}
                <section className="space-y-6 pt-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                <span className="bg-pink-500/20 text-pink-400 p-2 rounded-lg">
                                    💻
                                </span>
                                Thực hành Cài đặt (Giả lập)
                            </h3>
                            <p className="text-slate-400 mt-2">
                                Bấm các nút bên trái để xem cách cấu trúc lệnh
                                Snap và Flatpak hoạt động trong thực tế.
                            </p>
                        </div>
                    </div>

                    <PackageSimulator />
                </section>

                {/* Section 5: Issues & Tips */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-yellow-500/20 text-yellow-500 p-2 rounded-lg">
                            ⚠️
                        </span>
                        Các vấn đề thường gặp & Mẹo xử lý
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Issue 1 */}
                        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                            <h4 className="font-bold text-rose-400 mb-2 flex items-center gap-2">
                                <ShieldAlert size={18} /> App không đọc được
                                file ở ~/Downloads
                            </h4>
                            <p className="text-sm text-slate-300 mb-4">
                                Vì chạy trong Sandbox, mặc định Snap/Flatpak bị
                                cô lập. Bạn phải cấp quyền thủ công.
                            </p>
                            <div className="bg-black p-3 rounded-lg font-mono text-xs text-green-400 border border-slate-800">
                                <span className="text-slate-500">
                                    # Mở quyền cho Snap:
                                </span>
                                <br />
                                $ snap connect vlc:home :home
                                <br />
                                $ snap connect vlc:removable-media
                                :removable-media
                                <br />
                                <br />
                                <span className="text-slate-500">
                                    # Flatpak (Cài GUI quản lý quyền):
                                </span>
                                <br />$ flatpak install flathub
                                com.github.tchx84.Flatseal
                            </div>
                        </div>

                        {/* Issue 2 */}
                        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                            <h4 className="font-bold text-yellow-400 mb-2 flex items-center gap-2">
                                <HardDrive size={18} /> Ổ cứng bị đầy nhanh
                                chóng
                            </h4>
                            <p className="text-sm text-slate-300 mb-4">
                                Do đóng gói theo mọi thư viện, dung lượng bị
                                phình to. Hơn nữa, chúng còn giữ lại các phiên
                                bản cũ (Runtime).
                            </p>
                            <div className="bg-black p-3 rounded-lg font-mono text-xs text-green-400 border border-slate-800">
                                <span className="text-slate-500">
                                    # Dọn dẹp Snap cũ (Giữ 1 bản thay vì 2):
                                </span>
                                <br />
                                $ sudo snap set system refresh.retain=1
                                <br />
                                <br />
                                <span className="text-slate-500">
                                    # Dọn dẹp Runtime thừa của Flatpak:
                                </span>
                                <br />$ flatpak uninstall --unused
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 6: Quiz */}
                <section className="space-y-6 pt-8">
                    <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-xl">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-indigo-500/20 text-indigo-500 p-2 rounded-lg">
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
                        Bạn đã làm chủ cả APT, Snap và Flatpak. Còn một kiểu
                        cuối cùng: file .deb tải trực tiếp từ web!
                    </p>
                    <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-indigo-500/20">
                        Bài 3.3 — Cài phần mềm từ file .deb{" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

// --- Sub Components ---

function PackageManagerTabs() {
    const [activeTab, setActiveTab] = useState("snap");

    return (
        <div className="bg-slate-800/50 rounded-3xl border border-slate-700 overflow-hidden shadow-xl">
            <div className="flex border-b border-slate-700 bg-slate-900/50">
                <button
                    onClick={() => setActiveTab("snap")}
                    className={`flex-1 py-4 px-6 font-bold flex items-center justify-center gap-2 transition-colors ${activeTab === "snap" ? "bg-orange-500/10 text-orange-400 border-b-2 border-orange-500" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`}
                >
                    <Server size={20} /> SNAP (Canonical)
                </button>
                <button
                    onClick={() => setActiveTab("flatpak")}
                    className={`flex-1 py-4 px-6 font-bold flex items-center justify-center gap-2 transition-colors ${activeTab === "flatpak" ? "bg-blue-500/10 text-blue-400 border-b-2 border-blue-500" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`}
                >
                    <Globe size={20} /> FLATPAK (Community)
                </button>
            </div>

            <div className="p-6 md:p-8 min-h-[400px]">
                {activeTab === "snap" ? (
                    <div className="space-y-6 animate-in fade-in">
                        <p className="text-slate-300">
                            Công nghệ "con cưng" của công ty tạo ra Ubuntu. Nó
                            được tích hợp sẵn (không cần cài đặt). App store
                            chính là{" "}
                            <a
                                href="#"
                                className="text-orange-400 hover:underline"
                            >
                                snapcraft.io
                            </a>
                            .
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-black/50 p-5 rounded-xl border border-slate-700 font-mono text-sm space-y-4">
                                <div>
                                    <div className="text-slate-500 mb-1">
                                        # Tìm & Xem thông tin
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            snap find vlc
                                        </span>
                                    </div>
                                    <div className="text-green-400 mt-2">
                                        ${" "}
                                        <span className="text-white">
                                            snap info vlc
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-slate-500 mb-1">
                                        # Cài đặt ứng dụng
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            sudo snap install vlc
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-slate-500 mb-1">
                                        # Cài đặt IDE / Dev Tools (cần cờ
                                        --classic)
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            sudo snap install code{" "}
                                            <strong className="text-orange-400">
                                                --classic
                                            </strong>
                                        </span>
                                    </div>
                                    <div className="text-slate-500 text-xs mt-1 font-sans italic">
                                        (--classic cho phép app quyền truy cập
                                        hệ thống đầy đủ như APT, cần thiết cho
                                        Lập trình)
                                    </div>
                                </div>
                            </div>

                            <div className="bg-black/50 p-5 rounded-xl border border-slate-700 font-mono text-sm space-y-4">
                                <div>
                                    <div className="text-slate-500 mb-1">
                                        # Xem các snap đã cài
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            snap list
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-slate-500 mb-1">
                                        # Cập nhật (Dù snap tự update ngầm)
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            sudo snap refresh
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-slate-500 mb-1">
                                        # Tính năng siêu việt: Khôi phục bản cũ!
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            sudo snap revert vlc
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-slate-500 mb-1">
                                        # Gỡ cài đặt
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            sudo snap remove vlc
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6 animate-in fade-in">
                        <p className="text-slate-300">
                            Công nghệ mã nguồn mở được cộng đồng Linux (đặc biệt
                            là Fedora/Red Hat) ưa chuộng. Bạn phải cài đặt nó
                            trước khi dùng. Kho app lớn nhất là{" "}
                            <a
                                href="#"
                                className="text-blue-400 hover:underline"
                            >
                                flathub.org
                            </a>
                            .
                        </p>

                        <div className="bg-blue-900/20 p-4 rounded-xl border border-blue-500/30 text-sm mb-6">
                            <div className="font-bold text-blue-400 mb-2 font-mono">
                                # Bước 1: Setup Flatpak (Làm 1 lần duy nhất)
                            </div>
                            <code className="text-green-400 font-mono">
                                $ sudo apt install flatpak
                                <br />$ flatpak remote-add --if-not-exists
                                flathub
                                https://flathub.org/repo/flathub.flatpakrepo
                            </code>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-black/50 p-5 rounded-xl border border-slate-700 font-mono text-sm space-y-4">
                                <div>
                                    <div className="text-slate-500 mb-1">
                                        # Tìm kiếm (Tên app theo cấu trúc
                                        Domain)
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            flatpak search vlc
                                        </span>
                                    </div>
                                    <div className="text-slate-400 mt-1 text-xs">
                                        → Kết quả: org.videolan.VLC
                                    </div>
                                </div>
                                <div>
                                    <div className="text-slate-500 mb-1">
                                        # Cài đặt (Không cần sudo nếu cài cho
                                        user)
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            flatpak install flathub
                                            org.videolan.VLC
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-slate-500 mb-1">
                                        # Chạy ứng dụng qua terminal
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            flatpak run org.videolan.VLC
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-black/50 p-5 rounded-xl border border-slate-700 font-mono text-sm space-y-4">
                                <div>
                                    <div className="text-slate-500 mb-1">
                                        # Xem danh sách các App đã cài
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            flatpak list --app
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-slate-500 mb-1">
                                        # Cập nhật các app Flatpak
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            flatpak update
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-slate-500 mb-1">
                                        # Gỡ ứng dụng
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            flatpak uninstall org.videolan.VLC
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// --- Interactive Package Simulator ---
function PackageSimulator() {
    const [history, setHistory] = useState([
        { type: "system", text: "Package Simulator v2.0" },
        {
            type: "system",
            text: 'Hệ thống đã hỗ trợ cả lệnh "snap" và "flatpak".',
        },
    ]);
    const [input, setInput] = useState("");
    const endRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const delayOutput = async (lines) => {
        for (let line of lines) {
            setHistory((prev) => [...prev, { type: "output", text: line }]);
            await new Promise((r) => setTimeout(r, 200));
        }
    };

    const executeCommand = async (cmd) => {
        const trimmed = cmd.trim().replace(/^sudo /, "");
        if (!trimmed) return;

        setHistory((prev) => [...prev, { type: "input", text: cmd }]);
        setInput("");

        const parts = trimmed.split(" ");
        const base = parts[0];
        const action = parts[1];
        const target = parts[parts.length - 1];

        if (base === "clear") {
            setHistory([]);
            return;
        }

        if (base === "snap") {
            if (action === "install") {
                if (target === "code" && !parts.includes("--classic")) {
                    await delayOutput([
                        `error: This revision of snap "code" was published using classic`,
                        `       confinement and thus may perform arbitrary system changes...`,
                        `       If you understand and want to proceed repeat the command including --classic.`,
                    ]);
                } else if (target === "code" && parts.includes("--classic")) {
                    await delayOutput([
                        `code 1.87.2 from Microsoft (vscode✓) installed`,
                    ]);
                } else {
                    await delayOutput([`${target} 3.0.20 installed`]);
                }
            } else if (action === "list") {
                await delayOutput([
                    "Name      Version    Rev   Tracking       Publisher   Notes",
                    "core22    20240111   1125  latest/stable  canonical✓  base",
                    "firefox   124.0.1    4001  latest/stable  mozilla✓    -",
                ]);
            } else {
                await delayOutput([`snap: command simulated successfully.`]);
            }
        } else if (base === "flatpak") {
            if (action === "install") {
                await delayOutput([
                    `Looking up details...`,
                    `Installing: ${target}/x86_64/stable from flathub`,
                    `[████████████████████] 100%   302.0 MB/302.0 MB`,
                    `Installation complete.`,
                ]);
            } else if (action === "list") {
                await delayOutput([
                    "Name                Application ID                Version   Branch",
                    "VLC media player    org.videolan.VLC              3.0.20    stable",
                    "Visual Studio Code  com.visualstudio.code         1.87.2    stable",
                ]);
            } else {
                await delayOutput([`flatpak: command simulated successfully.`]);
            }
        } else {
            await delayOutput([`bash: ${base}: command not found`]);
        }
    };

    return (
        <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1 bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex flex-col gap-3 h-[350px] overflow-y-auto custom-scrollbar">
                <div className="text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">
                    Lệnh Mẫu Snap
                </div>
                <button
                    onClick={() => executeCommand("snap list")}
                    className="w-full text-left bg-slate-900 hover:bg-slate-700 border border-slate-700 p-3 rounded-xl transition-colors font-mono text-sm text-orange-400 flex items-center justify-between"
                >
                    <span>snap list</span> <ChevronRight size={16} />
                </button>
                <button
                    onClick={() => executeCommand("snap install code")}
                    className="w-full text-left bg-slate-900 hover:bg-slate-700 border border-slate-700 p-3 rounded-xl transition-colors font-mono text-sm text-rose-400 flex items-center justify-between"
                >
                    <span>snap install code</span> <ChevronRight size={16} />
                </button>
                <button
                    onClick={() =>
                        executeCommand("snap install code --classic")
                    }
                    className="w-full text-left bg-slate-900 hover:bg-slate-700 border border-slate-700 p-3 rounded-xl transition-colors font-mono text-sm text-green-400 flex items-center justify-between"
                >
                    <span>snap install code --classic</span>{" "}
                    <ChevronRight size={16} />
                </button>

                <div className="text-sm font-bold text-slate-400 mt-4 mb-2 uppercase tracking-wider">
                    Lệnh Mẫu Flatpak
                </div>
                <button
                    onClick={() => executeCommand("flatpak list")}
                    className="w-full text-left bg-slate-900 hover:bg-slate-700 border border-slate-700 p-3 rounded-xl transition-colors font-mono text-sm text-blue-400 flex items-center justify-between"
                >
                    <span>flatpak list</span> <ChevronRight size={16} />
                </button>
                <button
                    onClick={() =>
                        executeCommand(
                            "flatpak install flathub org.videolan.VLC",
                        )
                    }
                    className="w-full text-left bg-slate-900 hover:bg-slate-700 border border-slate-700 p-3 rounded-xl transition-colors font-mono text-sm text-blue-400 flex items-center justify-between"
                >
                    <span className="truncate pr-2">
                        flatpak install flathub...
                    </span>{" "}
                    <ChevronRight size={16} />
                </button>
            </div>

            <div
                className="md:col-span-2 bg-[#2c001e] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden font-mono text-[14px] cursor-text flex flex-col h-[350px]"
                onClick={() => inputRef.current?.focus()}
            >
                <div className="bg-[#423b3e] px-4 py-2 flex items-center justify-between border-b border-black/50 select-none">
                    <div className="text-slate-300 text-xs font-sans font-bold">
                        Terminal
                    </div>
                </div>

                <div className="p-4 flex-1 overflow-y-auto text-slate-300 custom-scrollbar">
                    {history.map((line, i) => (
                        <div
                            key={i}
                            className="mb-1 leading-normal whitespace-pre-wrap"
                        >
                            {line.type === "system" && (
                                <span className="text-slate-400 italic">
                                    {line.text}
                                </span>
                            )}
                            {line.type === "output" && <span>{line.text}</span>}
                            {line.type === "input" && (
                                <div>
                                    <span className="text-[#8ae234] font-bold">
                                        alice@ubuntu
                                    </span>
                                    :
                                    <span className="text-[#729fcf] font-bold">
                                        ~
                                    </span>
                                    $ {line.text}
                                </div>
                            )}
                        </div>
                    ))}

                    <div className="flex items-center">
                        <span className="text-[#8ae234] font-bold shrink-0">
                            alice@ubuntu
                        </span>
                        :
                        <span className="text-[#729fcf] font-bold shrink-0">
                            ~
                        </span>
                        <span className="text-white shrink-0 mr-2">$</span>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                executeCommand(input);
                            }}
                            className="flex-1 flex"
                        >
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="bg-transparent border-none outline-none text-white w-full font-mono p-0 m-0"
                                autoComplete="off"
                                spellCheck="false"
                            />
                        </form>
                    </div>
                    <div ref={endRef} />
                </div>
            </div>
        </div>
    );
}

// --- Quiz Component ---
const questions = [
    {
        id: 1,
        question:
            "Vấn đề 'Dependencies Hell' (Địa ngục phụ thuộc) của APT là gì mà Snap và Flatpak sinh ra để giải quyết?",
        options: [
            "APT tải phần mềm quá chậm.",
            "APT yêu cầu phải có mạng Internet mới chạy được.",
            "Các phần mềm dùng APT phải xài CHUNG các thư viện hệ thống. Nếu App A cần thư viện bản cũ, App B cần bản mới, chúng sẽ xung đột và làm hỏng nhau.",
            "APT không thể gỡ cài đặt phần mềm sạch sẽ.",
        ],
        correct: 2,
        explanation:
            "Đây là điểm yếu cốt lõi của kiến trúc Linux cũ. Cài 1 phần mềm lạ có thể làm hỏng các phần mềm đang hoạt động tốt do ghi đè thư viện dùng chung.",
    },
    {
        id: 2,
        question:
            "Cách Snap và Flatpak giải quyết bài toán xung đột thư viện là gì?",
        options: [
            "Xóa thư viện cũ đi và bắt tất cả dùng thư viện mới.",
            "Đóng gói Ứng dụng VÀ TOÀN BỘ thư viện nó cần vào một 'hộp cát' (Sandbox) cô lập. Phần mềm nào xài thư viện của phần mềm nấy.",
            "Cài đặt một phần mềm diệt virus.",
            "Yêu cầu nhà phát triển tự viết lại phần mềm.",
        ],
        correct: 1,
        explanation:
            "Cách tiếp cận 'tất cả trong một' này giống hệt cách macOS (.dmg) hay Windows (.exe, .appx) đang làm, đổi một chút dung lượng ổ cứng lấy sự ổn định tuyệt đối.",
    },
    {
        id: 3,
        question:
            "Khi cài đặt Visual Studio Code qua Snap, tại sao bạn BẮT BUỘC phải thêm cờ `--classic` (vd: `snap install code --classic`)?",
        options: [
            "Để cài đặt phiên bản giao diện cũ cổ điển của VS Code.",
            "Vì VS Code là phần mềm có bản quyền.",
            "Vì Snap mặc định cô lập phần mềm (strict sandbox). VS Code là trình lập trình, nó cần 'phá vỡ hộp cát' để có quyền truy cập sâu vào file hệ thống và lệnh biên dịch.",
            "Để tải nhanh hơn.",
        ],
        correct: 2,
        explanation:
            "Các IDE lập trình luôn cần quyền `--classic`. Nếu không có, VS Code sẽ không thể gọi đến Python, Nodejs hay Git cài trong máy tính của bạn.",
    },
    {
        id: 4,
        question:
            "Một nhược điểm chung đáng kể NHẤT của cả Snap và Flatpak so với APT là gì?",
        options: [
            "Chúng tính phí người dùng.",
            "Giao diện xấu hơn.",
            "Tốc độ khởi động lần đầu chậm hơn và tốn nhiều dung lượng ổ cứng hơn do phải chứa cả thư viện riêng.",
            "Dễ bị nhiễm virus hơn.",
        ],
        correct: 2,
        explanation:
            "Việc lặp lại các thư viện giống nhau nhiều lần (ví dụ: 10 app cùng chứa bộ thư viện đồ họa GTK) khiến ổ cứng nhanh đầy và máy tốn thêm xíu thời gian để giải nén Sandbox khi bật app.",
    },
    {
        id: 5,
        question:
            "Lệnh nào sau đây dùng để dọn dẹp các thư viện môi trường (Runtime) đã cũ và không còn ứng dụng nào sử dụng bên trong hệ thống Flatpak?",
        options: [
            "flatpak remove --all",
            "flatpak uninstall --unused",
            "flatpak clean",
            "flatpak delete cache",
        ],
        correct: 1,
        explanation:
            "`flatpak uninstall --unused` là lệnh 'dọn rác' cứu cánh, đôi khi nó có thể giúp bạn lấy lại hàng GB dung lượng ổ cứng bị lãng phí.",
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
                    <strong className="text-indigo-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu hỏi Snap & Flatpak.
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
                <span className="text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">
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
                                "border-emerald-500 bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]";
                        } else if (idx === selected) {
                            btnClass +=
                                "border-rose-500 bg-rose-500/10 text-rose-400";
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
                        className={`p-4 rounded-xl text-sm mb-6 flex gap-3 ${selected === q.correct ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-300" : "bg-rose-500/10 border border-rose-500/20 text-rose-300"}`}
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
