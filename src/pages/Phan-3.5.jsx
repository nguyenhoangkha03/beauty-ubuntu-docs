import React, { useState, useRef, useEffect } from "react";
import {
    PackageOpen,
    ShieldCheck,
    CheckCircle2,
    AlertTriangle,
    ChevronRight,
    Info,
    ArrowRight,
    Download,
    Server,
    Key,
    Database,
    PlusCircle,
    Trash2,
    RotateCcw,
    List,
    ExternalLink,
    Code,
    RefreshCw,
    Layers,
    TerminalSquare,
    Monitor,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-rose-500 selection:text-white pb-20">
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
                            Bài trước: 3.4
                        </span>
                        <div className="text-sm font-medium text-rose-400 bg-rose-400/10 px-3 py-1 rounded-full border border-rose-400/20">
                            Phần 3.5
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                {/* Title Section */}
                <div className="text-center space-y-4 py-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        Quản lý{" "}
                        <span className="text-rose-400 font-mono tracking-tighter">
                            PPA
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        (Personal Package Archive) - Cách "hack" kho phần mềm
                        Ubuntu để cài đặt những phiên bản phần mềm mới nhất, độc
                        và lạ nhất.
                    </p>
                </div>

                {/* Section 1: Intro PPA */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                        <span className="bg-rose-500/20 text-rose-400 p-2 rounded-lg">
                            1
                        </span>
                        PPA là gì? Tại sao cần nó?
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                            <h4 className="text-xl font-bold text-white mb-4">
                                Siêu thị vs Cửa hàng chuyên biệt
                            </h4>
                            <p className="text-slate-300 text-sm mb-6">
                                Kho APT mặc định của Ubuntu giống như một{" "}
                                <strong>Siêu thị lớn</strong>. Hàng hóa ở đây
                                rất an toàn, được kiểm duyệt kỹ, nhưng thường là
                                các mẫu cũ. <br />
                                <br />
                                <strong>PPA</strong> (Lưu trữ gói cá nhân) giống
                                như các <strong>Cửa hàng chuyên biệt</strong> do
                                chính các nhà phát triển phần mềm lập ra. Hàng ở
                                đây luôn mới nhất, nhưng bạn phải tự chịu trách
                                nhiệm về độ uy tín của cửa hàng.
                            </p>

                            <div className="space-y-3 bg-black/30 p-4 rounded-xl border border-slate-700 font-mono text-xs text-slate-400">
                                <div className="text-green-400 font-bold text-sm">
                                    Cú pháp cấu trúc PPA:
                                </div>
                                <div>
                                    ppa:
                                    <span className="text-blue-400">
                                        tên-người-tạo
                                    </span>
                                    /
                                    <span className="text-orange-400">
                                        tên-ứng-dụng
                                    </span>
                                </div>
                                <div className="pt-2">
                                    VD: ppa:
                                    <span className="text-blue-400">
                                        ondrej
                                    </span>
                                    /
                                    <span className="text-orange-400">php</span>
                                </div>
                                <div>
                                    VD: ppa:
                                    <span className="text-blue-400">
                                        git-core
                                    </span>
                                    /
                                    <span className="text-orange-400">ppa</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-rose-900/20 to-slate-900 border border-rose-500/30 p-6 md:p-8 rounded-3xl relative">
                            <h4 className="text-rose-400 font-bold mb-4 flex items-center gap-2 text-xl">
                                <CheckCircle2 size={24} /> Dùng PPA khi nào?
                            </h4>
                            <ul className="space-y-4 text-sm text-slate-300">
                                <li className="flex items-start gap-2">
                                    <ArrowRight
                                        className="text-rose-500 shrink-0 mt-0.5"
                                        size={16}
                                    />{" "}
                                    <strong>Phiên bản mới nhất:</strong> Ubuntu
                                    24.04 có Git 2.43. Nhưng bạn cần tính năng
                                    của Git 2.44 mới nhất → Dùng PPA{" "}
                                    <code>git-core</code>.
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight
                                        className="text-rose-500 shrink-0 mt-0.5"
                                        size={16}
                                    />{" "}
                                    <strong>Cài nhiều phiên bản:</strong> Bạn
                                    cần chạy Web server có cả PHP 7.4 và PHP 8.3
                                    cùng lúc → Dùng PPA <code>ondrej/php</code>.
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight
                                        className="text-rose-500 shrink-0 mt-0.5"
                                        size={16}
                                    />{" "}
                                    <strong>Phần mềm độc quyền:</strong> Các
                                    Driver Card màn hình (NVIDIA) mới nhất →
                                    Dùng PPA <code>graphics-drivers</code>.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 2: Architecture & Workflow */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-blue-500/20 text-blue-400 p-2 rounded-lg">
                            2
                        </span>
                        Hệ thống PPA hoạt động ra sao?
                    </h3>

                    <div className="bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700 mb-8 overflow-x-auto">
                        <div className="min-w-[600px] flex items-center justify-between gap-4 p-4">
                            {/* Step 1 */}
                            <div className="flex-1 flex flex-col items-center text-center group">
                                <div className="bg-slate-900 p-4 rounded-full border-2 border-blue-500/50 text-blue-400 mb-3 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                    <PlusCircle size={32} />
                                </div>
                                <div className="font-bold text-white mb-1">
                                    1. Thêm PPA
                                </div>
                                <code className="text-[10px] bg-black text-green-400 px-2 py-1 rounded">
                                    add-apt-repository
                                </code>
                                <div className="text-xs text-slate-400 mt-2">
                                    Tạo file cấu hình trong
                                    <br />
                                    <code>/etc/apt/sources.list.d/</code>
                                </div>
                            </div>

                            <ArrowRight
                                className="text-slate-600 shrink-0"
                                size={32}
                            />

                            {/* Step 2 */}
                            <div className="flex-1 flex flex-col items-center text-center group">
                                <div className="bg-slate-900 p-4 rounded-full border-2 border-orange-500/50 text-orange-400 mb-3 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                                    <Key size={32} />
                                </div>
                                <div className="font-bold text-white mb-1">
                                    2. Import Khóa
                                </div>
                                <code className="text-[10px] bg-black text-green-400 px-2 py-1 rounded">
                                    GPG Keyring
                                </code>
                                <div className="text-xs text-slate-400 mt-2">
                                    Tải chìa khóa điện tử để
                                    <br />
                                    xác thực an toàn gói phần mềm
                                </div>
                            </div>

                            <ArrowRight
                                className="text-slate-600 shrink-0"
                                size={32}
                            />

                            {/* Step 3 */}
                            <div className="flex-1 flex flex-col items-center text-center group">
                                <div className="bg-slate-900 p-4 rounded-full border-2 border-emerald-500/50 text-emerald-400 mb-3 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                    <RefreshCw size={32} />
                                </div>
                                <div className="font-bold text-white mb-1">
                                    3. Cập nhật
                                </div>
                                <code className="text-[10px] bg-black text-green-400 px-2 py-1 rounded">
                                    apt update
                                </code>
                                <div className="text-xs text-slate-400 mt-2">
                                    Báo cho hệ thống biết
                                    <br />
                                    kho PPA mới vừa được thêm
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Popular PPAs & How to add */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-purple-500/20 text-purple-400 p-2 rounded-lg">
                            3
                        </span>
                        Thêm & Sử dụng PPA
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-xl">
                            <h4 className="font-bold text-purple-400 mb-4 flex items-center gap-2 border-b border-slate-800 pb-3">
                                <TerminalSquare size={20} /> Ví dụ thực tế: Cài
                                Git mới nhất
                            </h4>
                            <div className="space-y-4 font-mono text-sm">
                                <div>
                                    <div className="text-slate-500 mb-1">
                                        # 1. Thêm kho PPA (-y để bỏ qua hỏi
                                        Enter)
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            sudo add-apt-repository -y
                                            ppa:git-core/ppa
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-slate-500 mb-1">
                                        # 2. Cập nhật danh sách phần mềm
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            sudo apt update
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-slate-500 mb-1">
                                        # 3. Cài đặt như bình thường
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            sudo apt install git
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700">
                            <h4 className="font-bold text-white mb-4 border-b border-slate-700 pb-3 flex items-center gap-2">
                                <Layers size={20} /> Các PPA "Quốc dân" (Tin
                                cậy)
                            </h4>
                            <ul className="space-y-4 text-sm text-slate-300">
                                <li className="flex gap-3">
                                    <div className="bg-blue-500/20 text-blue-400 p-2 rounded h-fit">
                                        <Code size={18} />
                                    </div>
                                    <div>
                                        <strong className="text-white block font-mono">
                                            ppa:ondrej/php
                                        </strong>
                                        Dùng để cài PHP. Phải có đối với dân Web
                                        Dev (cài song song PHP 7.4, 8.2, 8.3).
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="bg-green-500/20 text-green-400 p-2 rounded h-fit">
                                        <Code size={18} />
                                    </div>
                                    <div>
                                        <strong className="text-white block font-mono">
                                            ppa:deadsnakes/ppa
                                        </strong>
                                        Dùng để cài các phiên bản Python siêu
                                        mới (3.12, 3.13) hoặc siêu cũ.
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="bg-orange-500/20 text-orange-400 p-2 rounded h-fit">
                                        <Monitor size={18} />
                                    </div>
                                    <div>
                                        <strong className="text-white block font-mono">
                                            ppa:graphics-drivers/ppa
                                        </strong>
                                        Nơi lấy Driver mới nhất cho Card màn
                                        hình NVIDIA.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 4: Removing PPAs (ppa-purge) */}
                <section className="space-y-6 pt-6">
                    <div className="bg-gradient-to-r from-slate-900 via-rose-900/10 to-slate-900 border border-rose-500/20 p-6 md:p-8 rounded-3xl">
                        <h3 className="text-2xl font-bold text-rose-400 flex items-center gap-2 mb-4">
                            <Trash2 size={28} /> Xóa PPA đúng cách (Đừng dùng
                            remove!)
                        </h3>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-1 space-y-4 text-slate-300 text-sm">
                                <p>
                                    Rất nhiều người dùng lệnh{" "}
                                    <code>add-apt-repository --remove</code> để
                                    xóa PPA. Lệnh này chỉ{" "}
                                    <strong>xóa đường dẫn tải</strong>, còn các
                                    phần mềm bạn đã lỡ tải từ PPA đó thì{" "}
                                    <strong>VẪN CÒN TRÊN MÁY</strong>.
                                </p>
                                <p>
                                    Giải pháp hoàn hảo là dùng công cụ{" "}
                                    <code>ppa-purge</code>. Nó không chỉ xóa
                                    PPA, mà còn tự động{" "}
                                    <strong>Downgrade (Hạ cấp)</strong> phần mềm
                                    trở về phiên bản an toàn mặc định của kho
                                    Ubuntu gốc!
                                </p>
                            </div>

                            <div className="w-full md:w-[45%] bg-black p-5 rounded-2xl border border-slate-700 shadow-xl font-mono text-xs space-y-3">
                                <div>
                                    <span className="text-slate-500">
                                        # 1. Cài tool (nếu chưa có)
                                    </span>
                                    <br />
                                    <span className="text-green-400">
                                        $
                                    </span>{" "}
                                    <span className="text-white">
                                        sudo apt install ppa-purge
                                    </span>
                                </div>
                                <div>
                                    <span className="text-slate-500">
                                        # 2. Ra lệnh thanh trừng PPA
                                    </span>
                                    <br />
                                    <span className="text-green-400">
                                        $
                                    </span>{" "}
                                    <span className="text-white">
                                        sudo ppa-purge ppa:git-core/ppa
                                    </span>
                                    <br />
                                    <span className="text-slate-400 mt-1 block">
                                        Updating packages lists
                                        <br />
                                        Package revert plan:
                                        <br />
                                        &nbsp;&nbsp;[i] git (2.44.0{" "}
                                        <span className="text-rose-400">
                                            →
                                        </span>{" "}
                                        2.43.0)
                                        <br />
                                        Reverting... Done!
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 5: Simulator */}
                <section className="space-y-6 pt-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                <span className="bg-teal-500/20 text-teal-400 p-2 rounded-lg">
                                    💻
                                </span>
                                Quản lý PPA (Giả lập)
                            </h3>
                            <p className="text-slate-400 mt-2">
                                Bấm các nút bên trái để thêm PPA Git, kiểm tra
                                xem nó lưu ở đâu trong hệ thống, và dùng{" "}
                                <code>ppa-purge</code> để xóa nó.
                            </p>
                        </div>
                    </div>

                    <PpaSimulator />
                </section>

                {/* Section 6: Warnings & Security */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-yellow-500/20 text-yellow-500 p-2 rounded-lg">
                            ⚠️
                        </span>
                        Rủi ro Bảo mật khi dùng PPA
                    </h3>

                    <div className="bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-yellow-500/30">
                        <p className="text-slate-300 mb-6">
                            Bất kỳ ai (kể cả hacker) cũng có thể tạo PPA trên
                            Launchpad. Khi bạn thêm PPA, bạn đang trao cho người
                            đó <strong>Quyền Root</strong> (Quyền quản trị cao
                            nhất) để cài đặt các file vào hệ thống của mình.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 text-sm">
                            <div className="bg-slate-900 border border-slate-700 p-5 rounded-2xl">
                                <h4 className="text-rose-400 font-bold mb-3 flex items-center gap-2">
                                    <AlertTriangle size={18} /> Nguy cơ
                                </h4>
                                <ul className="space-y-2 text-slate-400 list-disc pl-5">
                                    <li>
                                        Chứa mã độc (Malware, Crypto Miner).
                                    </li>
                                    <li>
                                        Làm hỏng hệ thống do ghi đè (conflict)
                                        các thư viện quan trọng.
                                    </li>
                                    <li>
                                        PPA bị bỏ hoang, không ai cập nhật lỗ
                                        hổng bảo mật.
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-slate-900 border border-slate-700 p-5 rounded-2xl">
                                <h4 className="text-green-400 font-bold mb-3 flex items-center gap-2">
                                    <ShieldCheck size={18} /> Lời khuyên
                                </h4>
                                <ul className="space-y-2 text-slate-400 list-disc pl-5">
                                    <li>
                                        <strong className="text-white">
                                            Chỉ dùng
                                        </strong>{" "}
                                        PPA được cộng đồng Developer khuyên dùng
                                        (VD: Ondrej, Deadsnakes).
                                    </li>
                                    <li>
                                        Dùng{" "}
                                        <strong className="text-white">
                                            Snap / Flatpak
                                        </strong>{" "}
                                        thay thế nếu có thể (vì chúng chạy trong
                                        Sandbox an toàn).
                                    </li>
                                    <li>
                                        Google: "ppa:name ubuntu safe" trước khi
                                        cài.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 7: Quiz */}
                <section className="space-y-6 pt-8">
                    <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-xl">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-rose-500/20 text-rose-500 p-2 rounded-lg">
                                    4
                                </span>
                                Kiểm tra kiến thức PPA
                            </h3>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                {/* Course Progress & Footer */}
                <div className="bg-rose-500/10 border border-rose-500/30 rounded-2xl p-8 text-center mt-12 animate-in fade-in slide-in-from-bottom-4">
                    <div className="text-6xl mb-4">📦</div>
                    <h3 className="text-2xl font-bold text-rose-400 mb-4">
                        CHÚC MỪNG BẠN ĐÃ HOÀN THÀNH CHƯƠNG 3!
                    </h3>
                    <p className="text-slate-300 mb-6">
                        Bạn đã nắm giữ nghệ thuật Quản lý phần mềm trên Linux.
                        Từ APT cổ điển, Sandbox hiện đại, Build mã nguồn đến các
                        kho lưu trữ PPA tùy biến.
                    </p>

                    <p className="text-slate-400 mb-6">
                        Chuẩn bị tinh thần nhé, Chương 4 sẽ đưa chúng ta vào thế
                        giới của Bảo mật: Quản lý Người dùng & Phân Quyền!
                    </p>
                    <button className="bg-rose-600 hover:bg-rose-500 text-white font-bold py-4 px-10 rounded-full inline-flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:shadow-[0_0_30px_rgba(225,29,72,0.6)] hover:-translate-y-1">
                        BÀI 4.1 — QUẢN LÝ NGƯỜI DÙNG & NHÓM{" "}
                        <ArrowRight size={24} />
                    </button>
                </div>
            </main>
        </div>
    );
}

// --- Interactive Simulator Component ---
function PpaSimulator() {
    const [history, setHistory] = useState([
        {
            type: "system",
            text: "PPA Simulator v1.0. Giả lập quá trình cài đặt và dọn dẹp kho PPA Git-Core.",
        },
        {
            type: "system",
            text: "Hệ thống Ubuntu 24.04 (Git mặc định bản 2.43.0)",
        },
    ]);
    const [hasPpa, setHasPpa] = useState(false);
    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const delayOutput = async (lines) => {
        for (let line of lines) {
            setHistory((prev) => [...prev, { type: "output", text: line }]);
            await new Promise((r) => setTimeout(r, 150));
        }
    };

    const executeCommand = async (cmdId) => {
        if (cmdId === "version_before") {
            setHistory((prev) => [
                ...prev,
                { type: "input", text: "git --version" },
            ]);
            await delayOutput([
                hasPpa ? "git version 2.44.0" : "git version 2.43.0",
            ]);
        } else if (cmdId === "add") {
            setHistory((prev) => [
                ...prev,
                {
                    type: "input",
                    text: "sudo add-apt-repository -y ppa:git-core/ppa",
                },
            ]);
            await delayOutput([
                "Repository: 'ppa:git-core/ppa'",
                "Description:",
                "The most current stable version of Git for Ubuntu.",
                "Importing the signing key for 'git-core/ppa'...",
                "OK",
                "Adding repository.",
                "Get:1 https://ppa.launchpadcontent.net/git-core/ppa/ubuntu noble InRelease",
                "Reading package lists... Done",
            ]);
            setHasPpa(true);
        } else if (cmdId === "check_file") {
            setHistory((prev) => [
                ...prev,
                { type: "input", text: "ls -l /etc/apt/sources.list.d/" },
            ]);
            if (hasPpa) {
                await delayOutput([
                    "-rw-r--r-- 1 root root 142 Feb 18 git-core-ubuntu-ppa-noble.list",
                    "-rw-r--r-- 1 root root  89 Feb 10 original-ubuntu.list",
                ]);
            } else {
                await delayOutput([
                    "-rw-r--r-- 1 root root  89 Feb 10 original-ubuntu.list",
                ]);
            }
        } else if (cmdId === "install") {
            if (!hasPpa) {
                setHistory((prev) => [
                    ...prev,
                    { type: "input", text: "sudo apt install git" },
                ]);
                await delayOutput([
                    "git is already the newest version (2.43.0).",
                ]);
                return;
            }
            setHistory((prev) => [
                ...prev,
                { type: "input", text: "sudo apt install git" },
            ]);
            await delayOutput([
                "Reading package lists... Done",
                "The following packages will be upgraded:",
                "  git",
                "1 upgraded, 0 newly installed, 0 to remove.",
                "Get:1 https://ppa.launchpadcontent.net/git-core/ppa/ubuntu noble/main git amd64 2.44.0",
                "Unpacking git (2.44.0) over (2.43.0) ...",
                "Setting up git (2.44.0) ...",
            ]);
        } else if (cmdId === "purge") {
            if (!hasPpa) {
                setHistory((prev) => [
                    ...prev,
                    {
                        type: "output",
                        text: "Error: PPA git-core/ppa not found.",
                    },
                ]);
                return;
            }
            setHistory((prev) => [
                ...prev,
                { type: "input", text: "sudo ppa-purge ppa:git-core/ppa" },
            ]);
            await delayOutput([
                "PPA to be removed: ppa:git-core/ppa",
                "Updating packages lists",
                "Package revert plan:",
                "  [i] git (2.44.0 -> 2.43.0)",
                "Removing PPA repository...",
                "Reverting...",
                "Downgrading git from 2.44.0 to 2.43.0...",
                "Done!",
            ]);
            setHasPpa(false);
        } else if (cmdId === "clear") {
            setHistory([]);
        }
    };

    return (
        <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1 bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex flex-col gap-3 h-[400px] overflow-y-auto custom-scrollbar">
                <div className="text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">
                    Thao tác PPA
                </div>

                <button
                    onClick={() => executeCommand("version_before")}
                    className="w-full text-left bg-slate-900 border border-slate-700 hover:bg-slate-700 text-slate-400 p-3 rounded-xl transition-colors font-mono text-xs flex items-center justify-between"
                >
                    <span>git --version</span> <ChevronRight size={14} />
                </button>
                <button
                    onClick={() => executeCommand("add")}
                    className="w-full text-left bg-slate-900 border border-sky-500/30 hover:border-sky-500 hover:bg-slate-700 text-sky-400 p-3 rounded-xl transition-colors font-mono text-xs flex items-center justify-between"
                >
                    <span className="truncate pr-2">add-apt-repository...</span>{" "}
                    <ChevronRight size={14} />
                </button>
                <button
                    onClick={() => executeCommand("check_file")}
                    className="w-full text-left bg-slate-900 border border-slate-700 hover:bg-slate-700 text-slate-400 p-3 rounded-xl transition-colors font-mono text-xs flex items-center justify-between"
                >
                    <span className="truncate pr-2">
                        ls /etc/apt/sources...
                    </span>{" "}
                    <ChevronRight size={14} />
                </button>
                <button
                    onClick={() => executeCommand("install")}
                    className="w-full text-left bg-slate-900 border border-green-500/30 hover:border-green-500 hover:bg-slate-700 text-green-400 p-3 rounded-xl transition-colors font-mono text-xs flex items-center justify-between"
                >
                    <span>apt install git</span> <ChevronRight size={14} />
                </button>
                <button
                    onClick={() => executeCommand("purge")}
                    className="w-full text-left bg-slate-900 border border-rose-500/30 hover:border-rose-500 hover:bg-slate-700 text-rose-400 p-3 rounded-xl transition-colors font-mono text-xs flex items-center justify-between mb-4"
                >
                    <span className="truncate pr-2">ppa-purge git-core...</span>{" "}
                    <ChevronRight size={14} />
                </button>

                <button
                    onClick={() => executeCommand("clear")}
                    className="w-full text-center bg-slate-800 border border-slate-700 p-2 rounded-xl transition-colors font-mono text-xs text-slate-500 mt-auto hover:bg-slate-700"
                >
                    Reset (Xóa màn hình)
                </button>
            </div>

            <div className="md:col-span-2 bg-[#2c001e] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden font-mono text-[14px] flex flex-col h-[400px]">
                <div className="bg-[#423b3e] px-4 py-2 flex items-center justify-between border-b border-black/50 select-none">
                    <div className="text-slate-300 text-xs font-sans font-bold">
                        Terminal - PPA Git
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
                            {line.type === "output" && (
                                <span
                                    className={
                                        line.text.includes("Error")
                                            ? "text-rose-400 font-bold"
                                            : "text-slate-300"
                                    }
                                >
                                    {line.text}
                                </span>
                            )}
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
                        <span className="w-2 h-4 bg-slate-300 animate-pulse block"></span>
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
            "PPA (Personal Package Archive) trên Ubuntu được lưu trữ và quản lý ở đâu?",
        options: [
            "Trên máy chủ của Github.",
            "Trên nền tảng Launchpad (do Canonical phát triển).",
            "Trên các máy tính cá nhân của người dùng.",
            "Trong thư mục /opt/ của hệ thống.",
        ],
        correct: 1,
        explanation:
            "Launchpad.net là sân chơi chính thức được Canonical tạo ra để các nhà phát triển độc lập có thể đóng gói và chia sẻ phần mềm của họ cho cộng đồng Ubuntu.",
    },
    {
        id: 2,
        question: "Rủi ro BẢO MẬT lớn nhất khi bạn sử dụng PPA là gì?",
        options: [
            "PPA thường chứa các phần mềm có dung lượng quá lớn.",
            "PPA có thể xóa mất dữ liệu trong thư mục Home của bạn.",
            "Bất kỳ ai cũng có thể tạo PPA. Nếu thêm nhầm PPA độc hại, bạn đang cấp quyền cho phép họ cài đặt mã độc vào sâu trong hệ thống Linux.",
            "PPA làm chậm mạng Internet.",
        ],
        correct: 2,
        explanation:
            "Đúng vậy! Kho Ubuntu mặc định an toàn vì có Canonical kiểm duyệt khắt khe. PPA thì không ai kiểm duyệt cả, bạn phải tự chịu trách nhiệm khi Add PPA của một người lạ.",
    },
    {
        id: 3,
        question:
            "Lệnh `sudo add-apt-repository ppa:git-core/ppa` thực chất làm hành động gì bên dưới hệ thống?",
        options: [
            "Nó tự động tải file .deb của Git về thư mục Downloads.",
            "Nó tạo ra một file cấu hình đuôi .list mới bên trong thư mục `/etc/apt/sources.list.d/` để báo cho lệnh apt biết có một cái 'kho' mới vừa mở.",
            "Nó biên dịch lại mã nguồn của hệ điều hành Ubuntu.",
            "Nó gỡ cài đặt phiên bản Git cũ.",
        ],
        correct: 1,
        explanation:
            "Bản chất của việc thêm PPA là cung cấp thêm cho hệ thống APT một đường link URL mới để nó lên đó tìm kiếm phần mềm mỗi khi bạn chạy lệnh 'apt update'.",
    },
    {
        id: 4,
        question:
            "Tại sao công cụ `ppa-purge` lại được KHUYÊN DÙNG hơn là `add-apt-repository --remove` khi bạn muốn dẹp bỏ một PPA?",
        options: [
            "Vì ppa-purge gõ ngắn hơn.",
            "Vì add-apt-repository --remove chỉ xóa cái link tải, các phần mềm bạn đã tải từ PPA đó vẫn còn nằm lỳ trên máy. ppa-purge sẽ xóa PPA và TỰ ĐỘNG HẠ CẤP phần mềm đó về bản gốc của Ubuntu.",
            "Vì ppa-purge xóa sạch mọi file trong ổ cứng.",
            "Vì ppa-purge tự động dọn rác bộ nhớ RAM.",
        ],
        correct: 1,
        explanation:
            "Ví dụ bạn dùng PPA để nâng Git lên bản 2.44, nếu dùng `--remove`, máy bạn vẫn kẹt ở Git 2.44. Nhưng nếu dùng `ppa-purge`, hệ thống sẽ gỡ bản 2.44 và tự cài lại bản Git 2.43 mặc định cho bạn.",
    },
    {
        id: 5,
        question:
            "Tình huống: Bạn dùng PHP để lập trình web. Tuy nhiên Ubuntu mặc định chỉ cho bạn cài đúng 1 phiên bản PHP mới nhất. Bạn muốn cài cùng lúc PHP 7.4, 8.1 và 8.3 trên cùng 1 máy tính. Bạn nên dùng PPA nào?",
        options: [
            "ppa:git-core/ppa",
            "ppa:graphics-drivers/ppa",
            "ppa:ondrej/php",
            "ppa:deadsnakes/ppa",
        ],
        correct: 2,
        explanation:
            "Kho PPA `ondrej/php` được coi là kho 'quốc dân' bất ly thân đối với bất kỳ Web Developer nào dùng Linux. Nó chứa mọi phiên bản PHP từ cổ đại đến hiện đại.",
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
                    <strong className="text-rose-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu hỏi Quản lý PPA.
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
                <span className="text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full">
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
                        className={`p-4 rounded-xl text-sm mb-6 flex gap-3 ${selected === q.correct ? "bg-green-500/10 border border-green-500/20 text-green-300" : "bg-rose-500/10 border border-rose-500/20 text-rose-300"}`}
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
