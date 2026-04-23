import React, { useState, useRef, useEffect } from "react";
import {
    Package,
    Download,
    RefreshCw,
    Trash2,
    Search,
    CheckCircle2,
    AlertTriangle,
    ChevronRight,
    PlayCircle,
    Info,
    TerminalSquare,
    ArrowRight,
    Box,
    Database,
    Server,
    HardDrive,
    ShieldCheck,
    Cpu,
    ArrowDown,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-emerald-500 selection:text-white pb-20">
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
                            Bài trước: 2.7
                        </span>
                        <div className="text-sm font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                            Phần 3.1
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                {/* Title Section */}
                <div className="text-center space-y-4 py-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        Quản lý phần mềm với{" "}
                        <span className="text-emerald-400 font-mono tracking-tighter">
                            APT
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Quên việc tải file .exe trên web đi! Khám phá sức mạnh
                        của kho ứng dụng tập trung và cách cài đặt bất kỳ công
                        cụ nào chỉ bằng một dòng lệnh.
                    </p>
                </div>

                {/* Section 1: Intro & Windows vs Linux */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                        <span className="bg-emerald-500/20 text-emerald-400 p-2 rounded-lg">
                            1
                        </span>
                        APT là gì?
                    </h3>

                    <div className="bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                        <p className="text-slate-300 text-lg mb-6">
                            <strong>APT (Advanced Package Tool)</strong> là hệ
                            thống quản lý phần mềm cốt lõi của Ubuntu và Debian.
                            Nó hoạt động giống như một "App Store" khổng lồ chạy
                            bằng dòng lệnh.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-slate-900 border border-rose-500/30 rounded-2xl p-6 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <HardDrive
                                        size={100}
                                        className="text-rose-500"
                                    />
                                </div>
                                <h4 className="text-rose-400 font-bold mb-4 flex items-center gap-2 text-xl">
                                    <AlertTriangle size={20} /> Windows Way
                                </h4>
                                <ol className="text-sm text-slate-400 space-y-3 relative z-10">
                                    <li>1. Lên Google tìm phần mềm.</li>
                                    <li>
                                        2. Cố gắng không bấm nhầm nút Download
                                        giả (quảng cáo).
                                    </li>
                                    <li>
                                        3. Tải file <code>.exe</code> hoặc{" "}
                                        <code>.msi</code> về máy.
                                    </li>
                                    <li>
                                        4. Nhấn đúp để chạy, ấn Next liên tục.
                                    </li>
                                    <li>
                                        5. Cẩn thận bỏ tick các phần mềm rác kèm
                                        theo (McAfee, Ask Toolbar...).
                                    </li>
                                    <li>
                                        6. Chờ cài đặt xong, có thể phải restart
                                        máy.
                                    </li>
                                </ol>
                                <div className="mt-4 pt-4 border-t border-slate-800 text-rose-300 text-xs font-bold">
                                    Rủi ro: Virus, Malware, Phần mềm rác, Lỗi
                                    thời.
                                </div>
                            </div>

                            <div className="bg-slate-900 border border-emerald-500/50 rounded-2xl p-6 relative overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.1)] group">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <ShieldCheck
                                        size={100}
                                        className="text-emerald-500"
                                    />
                                </div>
                                <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2 text-xl">
                                    <CheckCircle2 size={20} /> Ubuntu (APT) Way
                                </h4>
                                <div className="text-sm text-slate-300 space-y-4 relative z-10">
                                    <p>
                                        Chỉ cần gõ 1 lệnh duy nhất vào Terminal:
                                    </p>
                                    <code className="block bg-black p-3 rounded-lg border border-emerald-500/30 text-emerald-400 font-mono text-base shadow-inner">
                                        sudo apt install vlc
                                    </code>
                                    <ul className="space-y-2 text-slate-400 mt-2">
                                        <li className="flex items-center gap-2">
                                            <ArrowRight
                                                size={14}
                                                className="text-emerald-500"
                                            />{" "}
                                            APT tự tìm trong Kho chính thức.
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <ArrowRight
                                                size={14}
                                                className="text-emerald-500"
                                            />{" "}
                                            Tự động tải về an toàn 100%.
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <ArrowRight
                                                size={14}
                                                className="text-emerald-500"
                                            />{" "}
                                            Tự động cài đặt & giải quyết phụ
                                            thuộc.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Architecture Diagram */}
                        <div className="mt-8">
                            <h4 className="font-bold text-white mb-4 border-b border-slate-700 pb-2">
                                Kiến trúc Hệ thống APT
                            </h4>
                            <div className="flex flex-col md:flex-row items-center justify-between bg-black p-6 rounded-xl border border-slate-800 gap-4">
                                <div className="bg-slate-800 p-4 rounded-lg text-center w-full md:w-1/4 border border-slate-600">
                                    <TerminalSquare
                                        className="mx-auto text-blue-400 mb-2"
                                        size={24}
                                    />
                                    <div className="font-bold text-white text-sm">
                                        Bạn (Terminal)
                                    </div>
                                    <div className="text-xs text-slate-400 font-mono mt-1">
                                        sudo apt install...
                                    </div>
                                </div>
                                <ArrowRight
                                    className="hidden md:block text-slate-600"
                                    size={24}
                                />
                                <ArrowDown
                                    className="md:hidden text-slate-600"
                                    size={24}
                                />

                                <div className="bg-emerald-900/30 p-4 rounded-lg text-center w-full md:w-1/4 border border-emerald-500/50 relative">
                                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-500 rounded-full animate-ping"></div>
                                    <Package
                                        className="mx-auto text-emerald-400 mb-2"
                                        size={24}
                                    />
                                    <div className="font-bold text-emerald-400 text-sm">
                                        Công cụ APT
                                    </div>
                                    <div className="text-xs text-slate-400 mt-1">
                                        Tính toán Dependency
                                    </div>
                                </div>
                                <ArrowRight
                                    className="hidden md:block text-slate-600"
                                    size={24}
                                />
                                <ArrowDown
                                    className="md:hidden text-slate-600"
                                    size={24}
                                />

                                <div className="bg-slate-800 p-4 rounded-lg text-center w-full md:w-1/4 border border-slate-600">
                                    <Cpu
                                        className="mx-auto text-purple-400 mb-2"
                                        size={24}
                                    />
                                    <div className="font-bold text-white text-sm">
                                        DPKG
                                    </div>
                                    <div className="text-xs text-slate-400 mt-1">
                                        Thực sự cài file .deb
                                    </div>
                                </div>
                                <ArrowRight
                                    className="hidden md:block text-slate-600"
                                    size={24}
                                />
                                <ArrowDown
                                    className="md:hidden text-slate-600"
                                    size={24}
                                />

                                <div className="bg-blue-900/20 p-4 rounded-lg text-center w-full md:w-1/4 border border-blue-500/30">
                                    <Database
                                        className="mx-auto text-blue-400 mb-2"
                                        size={24}
                                    />
                                    <div className="font-bold text-white text-sm">
                                        Repository
                                    </div>
                                    <div className="text-[10px] text-slate-400 mt-1">
                                        Kho phần mềm Ubuntu
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Update vs Upgrade */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-blue-500/20 text-blue-400 p-2 rounded-lg">
                            2
                        </span>
                        Sự khác biệt sống còn: UPDATE và UPGRADE
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-blue-500/30 relative">
                            <RefreshCw
                                className="absolute top-6 right-6 text-blue-500/20"
                                size={60}
                            />
                            <h4 className="text-blue-400 font-mono font-bold text-2xl mb-2">
                                apt update
                            </h4>
                            <div className="text-white font-bold mb-4">
                                "Danh sách có gì mới không?"
                            </div>
                            <p className="text-sm text-slate-300 mb-6">
                                Lệnh này <strong>KHÔNG</strong> cài đặt hay nâng
                                cấp bất kỳ phần mềm nào! Nó chỉ tải về{" "}
                                <strong className="text-white">
                                    Danh sách
                                </strong>{" "}
                                các phiên bản phần mềm mới nhất từ máy chủ của
                                Ubuntu để máy tính của bạn biết là "À, có bản
                                mới rồi đấy".
                            </p>
                            <div className="bg-black p-3 rounded font-mono text-sm border border-slate-700 text-slate-400">
                                <span className="text-green-400">$</span> sudo
                                apt update
                                <br />
                                <span className="text-xs">
                                    Reading package lists... Done
                                    <br />
                                    156 packages can be upgraded.
                                </span>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-purple-500/30 relative">
                            <Download
                                className="absolute top-6 right-6 text-purple-500/20"
                                size={60}
                            />
                            <h4 className="text-purple-400 font-mono font-bold text-2xl mb-2">
                                apt upgrade
                            </h4>
                            <div className="text-white font-bold mb-4">
                                "Tiến hành nâng cấp đi!"
                            </div>
                            <p className="text-sm text-slate-300 mb-6">
                                Lệnh này <strong>THỰC SỰ</strong> tải về và cài
                                đặt các phiên bản mới của những phần mềm đã có
                                trên máy. <br />
                                <span className="text-rose-400 font-bold">
                                    Bắt buộc
                                </span>{" "}
                                phải chạy <code>update</code> trước khi chạy{" "}
                                <code>upgrade</code>.
                            </p>
                            <div className="bg-black p-3 rounded font-mono text-sm border border-slate-700 text-slate-400">
                                <span className="text-green-400">$</span> sudo
                                apt upgrade -y
                                <br />
                                <span className="text-xs">
                                    The following packages will be upgraded...
                                    <br />
                                    Upgrading firefox, nginx...
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Core Commands */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-orange-500/20 text-orange-400 p-2 rounded-lg">
                            3
                        </span>
                        Cài đặt, Gỡ bỏ và Dọn dẹp
                    </h3>

                    <div className="bg-slate-800/50 rounded-3xl border border-slate-700 overflow-hidden">
                        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-700">
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-emerald-400 font-bold mb-4 border-b border-slate-700 pb-2">
                                    <Download size={20} /> Cài đặt (Install)
                                </div>
                                <code className="block bg-black p-2 rounded text-green-400 font-mono text-sm mb-3 text-center border border-slate-800">
                                    sudo apt install [tên]
                                </code>
                                <ul className="text-sm text-slate-300 space-y-2">
                                    <li>
                                        • <strong>Cài nhiều app:</strong>{" "}
                                        <code>install vim git</code>
                                    </li>
                                    <li>
                                        • <strong>Không hỏi y/n:</strong> Thêm
                                        cờ <code>-y</code>
                                    </li>
                                    <li>
                                        • <strong>Cài lại (sửa lỗi):</strong>{" "}
                                        <code>--reinstall</code>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 bg-rose-950/10">
                                <div className="flex items-center gap-2 text-rose-400 font-bold mb-4 border-b border-slate-700 pb-2">
                                    <Trash2 size={20} /> Gỡ bỏ (Remove/Purge)
                                </div>
                                <code className="block bg-black p-2 rounded text-green-400 font-mono text-sm mb-3 text-center border border-slate-800">
                                    sudo apt remove [tên]
                                </code>
                                <ul className="text-sm text-slate-300 space-y-2">
                                    <li>
                                        • <strong>remove:</strong> Gỡ app nhưng{" "}
                                        <span className="text-yellow-400">
                                            GIỮ LẠI
                                        </span>{" "}
                                        file cấu hình (config).
                                    </li>
                                    <li>
                                        • <strong>purge:</strong> Xóa sạch bách,{" "}
                                        <span className="text-rose-400">
                                            XÓA LUÔN
                                        </span>{" "}
                                        cả config. Khôi phục về mặc định.
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 bg-blue-950/10">
                                <div className="flex items-center gap-2 text-blue-400 font-bold mb-4 border-b border-slate-700 pb-2">
                                    <RefreshCw size={20} /> Dọn dẹp (Autoremove)
                                </div>
                                <code className="block bg-black p-2 rounded text-green-400 font-mono text-sm mb-3 text-center border border-slate-800">
                                    sudo apt autoremove
                                </code>
                                <ul className="text-sm text-slate-300 space-y-2">
                                    <li>
                                        • Khi cài 1 app, nó có thể kéo theo 10
                                        app phụ (dependencies).
                                    </li>
                                    <li>
                                        • Khi gỡ app chính, 10 app phụ vẫn còn.{" "}
                                        <code>autoremove</code> sẽ dọn sạch rác
                                        này!
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Search & Show */}
                <section className="space-y-6 pt-6">
                    <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 p-6 md:p-8 rounded-3xl">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                            <Search size={28} className="text-yellow-400" /> Tìm
                            kiếm thông tin Package
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <div className="font-bold text-yellow-400 font-mono">
                                    apt search [từ khóa]
                                </div>
                                <p className="text-sm text-slate-300">
                                    Tìm kiếm phần mềm trong kho. VD: Bạn không
                                    biết tên gói python là gì?
                                </p>
                                <div className="bg-black p-3 rounded-lg border border-slate-700 font-mono text-xs text-slate-400 h-24 overflow-y-auto">
                                    <span className="text-green-400">$</span>{" "}
                                    apt search "video player"
                                    <br />
                                    vlc/noble 3.0.20 amd64
                                    <br />
                                    &nbsp;&nbsp;multimedia player and streamer
                                    <br />
                                    mpv/noble 0.34.0 amd64...
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="font-bold text-yellow-400 font-mono">
                                    apt show [tên gói]
                                </div>
                                <p className="text-sm text-slate-300">
                                    Xem thông tin chi tiết (dung lượng, ai tạo
                                    ra, website) trước khi quyết định cài đặt.
                                </p>
                                <div className="bg-black p-3 rounded-lg border border-slate-700 font-mono text-xs text-slate-400 h-24 overflow-y-auto">
                                    <span className="text-green-400">$</span>{" "}
                                    apt show nginx
                                    <br />
                                    Package: nginx
                                    <br />
                                    Version: 1.24.0-2
                                    <br />
                                    Installed-Size: 206 kB
                                    <br />
                                    Homepage: https://nginx.net
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 5: APT Simulator */}
                <section className="space-y-6 pt-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                <span className="bg-teal-500/20 text-teal-400 p-2 rounded-lg">
                                    💻
                                </span>
                                Thực hành APT (Giả lập)
                            </h3>
                            <p className="text-slate-400 mt-2">
                                Quy trình chuẩn: Cập nhật danh sách ➜ Cài đặt{" "}
                                <code>vim</code> ➜ Kiểm tra thông tin ➜ Gỡ bỏ.
                            </p>
                        </div>
                    </div>

                    <AptSimulator />
                </section>

                {/* Section 6: Quiz */}
                <section className="space-y-6 pt-8">
                    <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-xl">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-emerald-500/20 text-emerald-500 p-2 rounded-lg">
                                    4
                                </span>
                                Kiểm tra kiến thức APT
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
                        APT quản lý các file <code>.deb</code> truyền thống.
                        Nhưng thế giới Linux đang chuyển dịch sang các công nghệ
                        Sandbox mới!
                    </p>
                    <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-emerald-500/20">
                        Bài 3.2 — Snap & Flatpak <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

// --- Sub Components ---

// --- Command Card ---
function CommandCard({ cmd, desc, icon, color }) {
    const colorMap = {
        blue: "border-blue-500/30 bg-blue-500/5 text-blue-400",
        green: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400",
        slate: "border-slate-500/30 bg-slate-500/5 text-slate-400",
        orange: "border-orange-500/30 bg-orange-500/5 text-orange-400",
        purple: "border-purple-500/30 bg-purple-500/5 text-purple-400",
        rose: "border-rose-500/30 bg-rose-500/5 text-rose-400",
    };

    return (
        <div
            className={`p-4 rounded-2xl border text-center ${colorMap[color]}`}
        >
            <div className="flex justify-center mb-3">{icon}</div>
            <div className="font-mono font-bold text-xl mb-1">{cmd}</div>
            <div className="text-xs opacity-80">{desc}</div>
        </div>
    );
}

// --- Interactive APT Simulator ---
function AptSimulator() {
    const [history, setHistory] = useState([
        {
            type: "system",
            text: "APT Simulator v1.0. Các lệnh: apt update, apt install vim, apt remove vim, apt search vim, apt show vim",
        },
    ]);
    const [input, setInput] = useState("");
    const [installed, setInstalled] = useState(false);
    const endRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const delayOutput = async (lines) => {
        for (let line of lines) {
            setHistory((prev) => [...prev, { type: "output", text: line }]);
            await new Promise((r) => setTimeout(r, 300));
        }
    };

    const executeCommand = async (cmd) => {
        const trimmed = cmd.trim().replace(/^sudo /, ""); // Ignore sudo for simulation
        if (!trimmed) return;

        setHistory((prev) => [...prev, { type: "input", text: cmd }]);
        setInput("");

        const parts = trimmed.split(" ");
        const baseCmd = parts[0];
        const subCmd = parts[1];
        const target = parts[2];

        if (baseCmd !== "apt" && baseCmd !== "apt-get") {
            if (baseCmd === "clear") {
                setHistory([]);
                return;
            }
            setHistory((prev) => [
                ...prev,
                { type: "output", text: `bash: ${baseCmd}: command not found` },
            ]);
            return;
        }

        switch (subCmd) {
            case "update":
                await delayOutput([
                    "Hit:1 http://archive.ubuntu.com/ubuntu noble InRelease",
                    "Get:2 http://security.ubuntu.com/ubuntu noble-security InRelease [126 kB]",
                    "Get:3 http://archive.ubuntu.com/ubuntu noble-updates InRelease [126 kB]",
                    "Fetched 252 kB in 1s (252 kB/s)",
                    "Reading package lists... Done",
                    "Building dependency tree... Done",
                    "Reading state information... Done",
                    "15 packages can be upgraded. Run 'apt list --upgradable' to see them.",
                ]);
                break;

            case "install":
                if (!target) {
                    setHistory((prev) => [
                        ...prev,
                        { type: "output", text: `apt: missing package name` },
                    ]);
                    break;
                }
                if (target === "vim") {
                    if (installed) {
                        setHistory((prev) => [
                            ...prev,
                            {
                                type: "output",
                                text: `vim is already the newest version (2:9.1.0016-1ubuntu7).`,
                            },
                        ]);
                    } else {
                        await delayOutput([
                            "Reading package lists... Done",
                            "Building dependency tree... Done",
                            "The following additional packages will be installed:",
                            "  vim-runtime",
                            "The following NEW packages will be installed:",
                            "  vim vim-runtime",
                            "0 upgraded, 2 newly installed, 0 to remove and 15 not upgraded.",
                            "Need to get 9,346 kB of archives.",
                            "Get:1 http://archive.ubuntu.com/ubuntu noble/main amd64 vim-runtime [6,891 kB]",
                            "Get:2 http://archive.ubuntu.com/ubuntu noble/main amd64 vim [2,455 kB]",
                            "Fetched 9,346 kB in 1s...",
                            "Selecting previously unselected package vim-runtime.",
                            "Preparing to unpack .../vim-runtime_2%3a9.1.0016-1ubuntu7_all.deb ...",
                            "Unpacking vim-runtime (2:9.1.0016-1ubuntu7) ...",
                            "Setting up vim-runtime (2:9.1.0016-1ubuntu7) ...",
                            "Setting up vim (2:9.1.0016-1ubuntu7) ...",
                        ]);
                        setInstalled(true);
                    }
                } else {
                    setHistory((prev) => [
                        ...prev,
                        {
                            type: "output",
                            text: `E: Unable to locate package ${target}`,
                        },
                    ]);
                }
                break;

            case "remove":
            case "purge":
                if (target === "vim") {
                    if (!installed) {
                        setHistory((prev) => [
                            ...prev,
                            {
                                type: "output",
                                text: `Package 'vim' is not installed, so not removed`,
                            },
                        ]);
                    } else {
                        await delayOutput(
                            [
                                "Reading package lists... Done",
                                "Building dependency tree... Done",
                                "The following packages will be REMOVED:",
                                "  vim",
                                "0 upgraded, 0 newly installed, 1 to remove and 15 not upgraded.",
                                "Removing vim (2:9.1.0016-1ubuntu7) ...",
                                subCmd === "purge"
                                    ? "Purging configuration files for vim ..."
                                    : "",
                            ].filter(Boolean),
                        );
                        setInstalled(false);
                    }
                } else {
                    setHistory((prev) => [
                        ...prev,
                        {
                            type: "output",
                            text: `E: Unable to locate package ${target}`,
                        },
                    ]);
                }
                break;

            case "autoremove":
                await delayOutput([
                    "Reading package lists... Done",
                    "Building dependency tree... Done",
                    "The following packages will be REMOVED:",
                    "  vim-runtime linux-headers-old",
                    "Removing vim-runtime ...",
                    "Removing linux-headers-old ...",
                ]);
                break;

            case "search":
                if (target === "vim") {
                    await delayOutput([
                        "Sorting... Done",
                        "Full Text Search... Done",
                        "vim/noble 2:9.1.0016-1ubuntu7 amd64",
                        "  Vi IMproved - enhanced vi editor",
                        "",
                        "vim-tiny/noble 2:9.1.0016-1ubuntu7 amd64",
                        "  Vi IMproved - enhanced vi editor - compact version",
                    ]);
                } else {
                    setHistory((prev) => [
                        ...prev,
                        {
                            type: "output",
                            text: `Sorting... Done\nFull Text Search... Done`,
                        },
                    ]);
                }
                break;

            case "show":
                if (target === "vim") {
                    await delayOutput([
                        "Package: vim",
                        "Version: 2:9.1.0016-1ubuntu7",
                        "Priority: optional",
                        "Section: editors",
                        "Installed-Size: 3,584 kB",
                        "Maintainer: Ubuntu Developers",
                        "Description: Vi IMproved - enhanced vi editor",
                        " Vim is an almost compatible version of the UNIX editor Vi.",
                    ]);
                } else {
                    setHistory((prev) => [
                        ...prev,
                        { type: "output", text: `E: No packages found` },
                    ]);
                }
                break;

            default:
                setHistory((prev) => [
                    ...prev,
                    { type: "output", text: `E: Invalid operation ${subCmd}` },
                ]);
        }
    };

    const handleCommandClick = (cmd) => {
        executeCommand(cmd);
    };

    return (
        <div className="grid md:grid-cols-3 gap-6">
            {/* Controls */}
            <div className="md:col-span-1 bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex flex-col gap-3 h-[400px] overflow-y-auto custom-scrollbar">
                <div className="text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">
                    Lệnh Mẫu
                </div>

                <button
                    onClick={() => handleCommandClick("sudo apt update")}
                    className="w-full text-left bg-slate-900 hover:bg-slate-700 border border-slate-700 p-3 rounded-xl transition-colors font-mono text-sm text-blue-400 flex items-center justify-between"
                >
                    <span>apt update</span> <ChevronRight size={16} />
                </button>
                <button
                    onClick={() => handleCommandClick("apt search vim")}
                    className="w-full text-left bg-slate-900 hover:bg-slate-700 border border-slate-700 p-3 rounded-xl transition-colors font-mono text-sm text-yellow-400 flex items-center justify-between"
                >
                    <span>apt search vim</span> <ChevronRight size={16} />
                </button>
                <button
                    onClick={() => handleCommandClick("apt show vim")}
                    className="w-full text-left bg-slate-900 hover:bg-slate-700 border border-slate-700 p-3 rounded-xl transition-colors font-mono text-sm text-yellow-400 flex items-center justify-between"
                >
                    <span>apt show vim</span> <ChevronRight size={16} />
                </button>
                <button
                    onClick={() => handleCommandClick("sudo apt install vim")}
                    className="w-full text-left bg-slate-900 hover:bg-slate-700 border border-slate-700 p-3 rounded-xl transition-colors font-mono text-sm text-emerald-400 flex items-center justify-between"
                >
                    <span>apt install vim</span> <ChevronRight size={16} />
                </button>
                <button
                    onClick={() => handleCommandClick("sudo apt remove vim")}
                    className="w-full text-left bg-slate-900 hover:bg-slate-700 border border-slate-700 p-3 rounded-xl transition-colors font-mono text-sm text-rose-400 flex items-center justify-between"
                >
                    <span>apt remove vim</span> <ChevronRight size={16} />
                </button>
                <button
                    onClick={() => handleCommandClick("sudo apt autoremove")}
                    className="w-full text-left bg-slate-900 hover:bg-slate-700 border border-slate-700 p-3 rounded-xl transition-colors font-mono text-sm text-blue-400 flex items-center justify-between"
                >
                    <span>apt autoremove</span> <ChevronRight size={16} />
                </button>
                <button
                    onClick={() => handleCommandClick("clear")}
                    className="w-full text-left bg-slate-800 border border-slate-700 p-2 rounded-xl transition-colors font-mono text-xs text-slate-500 text-center mt-auto"
                >
                    clear
                </button>
            </div>

            {/* Terminal */}
            <div
                className="md:col-span-2 bg-[#2c001e] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden font-mono text-[14px] cursor-text flex flex-col h-[400px]"
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
            "Sự khác biệt quan trọng NHẤT giữa `apt update` và `apt upgrade` là gì?",
        options: [
            "update nâng cấp phần mềm, còn upgrade chỉ dùng cho hệ điều hành.",
            "update chỉ làm mới 'Danh sách phần mềm' từ server, KHÔNG cài đặt gì cả. Còn upgrade mới THỰC SỰ tải về và cài đặt các phiên bản mới.",
            "Cả hai giống hệt nhau, gõ lệnh nào cũng được.",
            "update nhanh hơn upgrade.",
        ],
        correct: 1,
        explanation:
            "Đây là lỗi cơ bản nhất của người mới! Update chỉ là cập nhật 'Menu Menu món ăn', còn Upgrade mới là hành động 'Gọi món'!",
    },
    {
        id: 2,
        question:
            "Lệnh nào sau đây sẽ gỡ bỏ phần mềm và XÓA SẠCH SẼ cả các file cấu hình (config files) của nó?",
        options: ["apt remove", "apt delete", "apt purge", "apt uninstall"],
        correct: 2,
        explanation:
            "Lệnh remove sẽ giữ lại file config đề phòng sau này bạn muốn cài lại. Nếu muốn máy sạch bóng không tì vết, bạn phải dùng purge.",
    },
    {
        id: 3,
        question: "Công dụng của lệnh `sudo apt autoremove` là gì?",
        options: [
            "Tự động xóa các phần mềm không dùng đến quá 30 ngày.",
            "Xóa các gói phụ thuộc (dependencies) thừa thãi mà trước đây được tự động cài theo một phần mềm khác, nhưng giờ phần mềm đó đã bị gỡ.",
            "Xóa lịch sử dòng lệnh Terminal.",
            "Gỡ bỏ tất cả phần mềm trong máy.",
        ],
        correct: 1,
        explanation:
            "Autoremove dọn dẹp các thư viện (lib) mồ côi. Việc chạy lệnh này định kỳ giúp giải phóng rất nhiều dung lượng ổ cứng.",
    },
    {
        id: 4,
        question:
            "Bạn chuẩn bị cài đặt một phần mềm bằng lệnh `apt install [tên]`, nhưng bạn muốn chắc chắn nó sẽ KHÔNG hiện câu hỏi [Y/n] ở giữa quá trình cài đặt. Cờ (flag) nào sẽ giúp việc này?",
        options: ["-yes", "--force", "-y", "-a"],
        correct: 2,
        explanation:
            "Thêm -y (vd: sudo apt install -y nginx) sẽ tự động trả lời Yes cho mọi câu hỏi, cực kỳ hữu ích khi bạn viết các Script tự động cài đặt.",
    },
    {
        id: 5,
        question:
            "Bạn nghe nói đến một công cụ chỉnh sửa video tên là 'kdenlive' nhưng không biết Ubuntu có gói này không. Lệnh nào giúp bạn TÌM KIẾM trong kho của Ubuntu?",
        options: [
            "apt find kdenlive",
            "apt locate kdenlive",
            "apt search kdenlive",
            "apt list kdenlive",
        ],
        correct: 2,
        explanation:
            "`apt search` cho phép bạn tìm kiếm theo cả tên và mô tả của phần mềm trong kho. Lệnh này không cần quyền sudo.",
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
                    <strong className="text-emerald-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu hỏi Quản lý APT.
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
                <span className="text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
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
