import React, { useState } from "react";
import {
    Terminal,
    Shield,
    Globe,
    Cpu,
    HardDrive,
    CheckCircle2,
    XCircle,
    ChevronRight,
    Server,
    Smartphone,
    Award,
    AlertTriangle,
    Download,
    FolderTree,
    Lock,
    Unlock,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

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
                    <div className="text-sm font-medium text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                        Phần 1.1
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8 space-y-16">
                {/* Title Section */}
                <div className="text-center space-y-4 py-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        Linux là gì?{" "}
                        <span className="text-orange-500">Ubuntu là gì?</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Khám phá "trái tim" của các hệ thống máy chủ toàn cầu và
                        bước đầu làm quen với hệ điều hành thân thiện nhất dành
                        cho người mới.
                    </p>
                </div>

                {/* Section 1: OS Analogy */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className="bg-blue-500/20 text-blue-400 p-2 rounded-lg">
                            1
                        </span>
                        Hệ điều hành là gì?
                    </h3>
                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                        <p className="mb-6 text-slate-300">
                            Hãy hình dung máy tính như một nhà hàng. Bạn không
                            thể tự xông vào bếp để nấu ăn, bạn cần một người
                            trung gian!
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                            {/* Customer */}
                            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 w-full md:w-1/3 text-center hover:border-blue-500 transition-colors group">
                                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                                    🍽️
                                </div>
                                <h4 className="font-bold text-white mb-1">
                                    Khách hàng
                                </h4>
                                <p className="text-sm text-slate-400">
                                    (Là Bạn / Phần mềm)
                                </p>
                            </div>

                            <ChevronRight
                                className="text-slate-500 hidden md:block"
                                size={32}
                            />
                            <div className="text-slate-500 md:hidden">↓</div>

                            {/* Waiter (OS) */}
                            <div className="bg-blue-500/10 p-6 rounded-xl border-2 border-blue-500 w-full md:w-1/3 text-center relative shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    HỆ ĐIỀU HÀNH
                                </div>
                                <div className="text-4xl mb-3 mt-2">👨‍💼</div>
                                <h4 className="font-bold text-blue-400 mb-1">
                                    Người phục vụ
                                </h4>
                                <p className="text-sm text-blue-200/70">
                                    (Cầu nối giao tiếp)
                                </p>
                            </div>

                            <ChevronRight
                                className="text-slate-500 hidden md:block"
                                size={32}
                            />
                            <div className="text-slate-500 md:hidden">↓</div>

                            {/* Kitchen */}
                            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 w-full md:w-1/3 text-center hover:border-orange-500 transition-colors group">
                                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                                    👨‍🍳
                                </div>
                                <h4 className="font-bold text-white mb-1">
                                    Nhà bếp
                                </h4>
                                <p className="text-sm text-slate-400">
                                    (Phần cứng: CPU, RAM...)
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 text-center text-slate-400 italic">
                            "Không có hệ điều hành, bạn không thể ra lệnh cho
                            phần cứng làm gì cả."
                        </div>
                    </div>
                </section>

                {/* Section 2: What is Linux */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className="bg-green-500/20 text-green-400 p-2 rounded-lg">
                            2
                        </span>
                        Linux là gì?
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                            <h4 className="font-bold text-white mb-2 text-lg">
                                📖 Định nghĩa đơn giản
                            </h4>
                            <p className="text-slate-300">
                                Linux thực chất là một{" "}
                                <strong>nhân hệ điều hành (Kernel)</strong> —
                                tức là phần lõi, phần "trái tim" điều khiển phần
                                cứng. Nó chưa có giao diện đẹp đẽ để bạn click
                                chuột đâu!
                            </p>

                            <div className="mt-6 space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-700 text-slate-300 font-bold text-xs shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                        '69
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded border border-slate-700">
                                        <p className="font-bold text-sm text-white">
                                            Unix ra đời
                                        </p>
                                        <p className="text-xs text-slate-400">
                                            Tại Bell Labs (AT&T)
                                        </p>
                                    </div>
                                </div>
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-green-500 text-white font-bold text-xs shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                        '91
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-green-500/10 p-4 rounded border border-green-500/30">
                                        <p className="font-bold text-sm text-green-400">
                                            Linus Torvalds
                                        </p>
                                        <p className="text-xs text-slate-300">
                                            Viết Linux Kernel và chia sẻ MIỄN
                                            PHÍ! 🎉
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-bold text-white text-lg">
                                💡 Điểm đặc biệt của Linux
                            </h4>
                            <div className="grid grid-cols-1 gap-3">
                                <FeatureCard
                                    icon={<Unlock size={20} />}
                                    title="Mã nguồn mở"
                                    desc="Ai cũng đọc được code, sửa được."
                                />
                                <FeatureCard
                                    icon={<Award size={20} />}
                                    title="Miễn phí"
                                    desc="Không mất tiền mua bản quyền."
                                />
                                <FeatureCard
                                    icon={<Server size={20} />}
                                    title="Bền vững"
                                    desc="Server chạy nhiều năm không cần restart."
                                />
                                <FeatureCard
                                    icon={<Shield size={20} />}
                                    title="Bảo mật cao"
                                    desc="Ít virus, phân quyền rất chặt chẽ."
                                />
                                <FeatureCard
                                    icon={<Zap size={20} />}
                                    title="Tùy biến"
                                    desc="Thay đổi mọi thứ theo ý muốn."
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: What is Ubuntu */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className="bg-orange-500/20 text-orange-500 p-2 rounded-lg">
                            3
                        </span>
                        Ubuntu là gì?
                    </h3>

                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
                        <div className="max-w-2xl mx-auto text-center mb-8">
                            <h4 className="text-xl font-bold text-white mb-2">
                                Vấn đề với Linux thuần
                            </h4>
                            <p className="text-slate-300">
                                Linux kernel một mình không dùng được — nó chỉ
                                là{" "}
                                <strong className="text-orange-400">
                                    "động cơ"
                                </strong>
                                , không có{" "}
                                <strong className="text-orange-400">
                                    "thân xe"
                                </strong>
                                .
                            </p>
                        </div>

                        {/* Architecture Diagram */}
                        <div className="relative pt-8 pb-12">
                            <div className="flex justify-center mb-8">
                                <div className="bg-slate-700 px-6 py-3 rounded-xl border-2 border-slate-600 font-bold text-white shadow-lg relative z-10 flex items-center gap-2">
                                    <Cpu size={20} className="text-green-400" />
                                    LINUX KERNEL (Trái tim chung)
                                </div>
                            </div>

                            {/* Connecting lines */}
                            <div className="absolute top-[4.5rem] left-1/2 w-px h-8 bg-slate-600 -translate-x-1/2 z-0"></div>
                            <div className="absolute top-[6.5rem] left-[15%] right-[15%] md:left-[25%] md:right-[25%] h-px bg-slate-600 z-0"></div>

                            <div className="grid grid-cols-3 gap-2 md:gap-6 relative z-10 pt-4 max-w-3xl mx-auto">
                                <div className="flex flex-col items-center">
                                    <div className="w-px h-6 bg-slate-600 mb-2"></div>
                                    <div className="bg-orange-500/20 border-2 border-orange-500 rounded-lg p-4 w-full text-center hover:-translate-y-1 transition-transform">
                                        <div className="font-bold text-orange-500 mb-1">
                                            Ubuntu
                                        </div>
                                        <div className="text-xs text-slate-400">
                                            (Dễ dùng)
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-px h-6 bg-slate-600 mb-2"></div>
                                    <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-4 w-full text-center hover:-translate-y-1 transition-transform opacity-70">
                                        <div className="font-bold text-blue-400 mb-1">
                                            Fedora
                                        </div>
                                        <div className="text-xs text-slate-400">
                                            (Hiện đại)
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-px h-6 bg-slate-600 mb-2"></div>
                                    <div className="bg-purple-500/20 border border-purple-500/50 rounded-lg p-4 w-full text-center hover:-translate-y-1 transition-transform opacity-70">
                                        <div className="font-bold text-purple-400 mb-1">
                                            Arch
                                        </div>
                                        <div className="text-xs text-slate-400">
                                            (Cho Pro)
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Equation */}
                            <div className="mt-12 bg-slate-800/80 p-6 rounded-xl border border-slate-700 max-w-md mx-auto">
                                <h5 className="text-center font-bold text-white mb-4 border-b border-slate-700 pb-2">
                                    Hệ điều hành hoàn chỉnh (Distro)
                                </h5>
                                <ul className="space-y-2 text-sm text-slate-300 font-mono">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">
                                            +
                                        </span>{" "}
                                        Giao diện đồ họa (GNOME)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">
                                            +
                                        </span>{" "}
                                        Kho phần mềm (apt)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">
                                            +
                                        </span>{" "}
                                        Công cụ hệ thống
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">
                                            +
                                        </span>{" "}
                                        Tài liệu hướng dẫn
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Ubuntu specific info */}
                        <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-500/20 mt-4">
                            <h4 className="font-bold text-orange-400 text-lg mb-4 flex items-center gap-2">
                                🟠 Ubuntu cụ thể là gì?
                            </h4>
                            <ul className="space-y-3 text-slate-300">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2
                                        size={20}
                                        className="text-orange-500 shrink-0 mt-0.5"
                                    />
                                    <span>
                                        Tạo bởi công ty{" "}
                                        <strong>Canonical</strong> (Nam Phi), ra
                                        mắt năm 2004.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2
                                        size={20}
                                        className="text-orange-500 shrink-0 mt-0.5"
                                    />
                                    <span>
                                        Tên "Ubuntu" xuất phát từ tiếng
                                        Zulu/Xhosa:{" "}
                                        <em>"Tôi tồn tại vì chúng ta"</em> 🤝
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2
                                        size={20}
                                        className="text-orange-500 shrink-0 mt-0.5"
                                    />
                                    <span>
                                        Triết lý:{" "}
                                        <strong>
                                            Linux dành cho mọi người
                                        </strong>
                                        , không chỉ dân kỹ thuật.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2
                                        size={20}
                                        className="text-orange-500 shrink-0 mt-0.5"
                                    />
                                    <span>
                                        Cập nhật 6 tháng/lần, phiên bản{" "}
                                        <strong>LTS (ổn định)</strong> 2
                                        năm/lần.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 4: Comparisons */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className="bg-purple-500/20 text-purple-400 p-2 rounded-lg">
                            4
                        </span>
                        So sánh các Hệ điều hành
                    </h3>
                    <ComparisonSection />
                </section>

                {/* Section 5: Target Audience */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className="bg-teal-500/20 text-teal-400 p-2 rounded-lg">
                            5
                        </span>
                        Ai nên dùng Ubuntu?
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-6">
                            <h4 className="text-green-400 font-bold text-xl mb-6 flex items-center gap-2">
                                <CheckCircle2 /> NÊN DÙNG NẾU:
                            </h4>
                            <ul className="space-y-4">
                                <ListItem
                                    icon={
                                        <CheckCircle2
                                            className="text-green-500"
                                            size={20}
                                        />
                                    }
                                    text="Bạn muốn học lập trình / DevOps / Sysadmin"
                                />
                                <ListItem
                                    icon={
                                        <CheckCircle2
                                            className="text-green-500"
                                            size={20}
                                        />
                                    }
                                    text="Bạn cần máy chủ (server) hoạt động cực kỳ ổn định"
                                />
                                <ListItem
                                    icon={
                                        <CheckCircle2
                                            className="text-green-500"
                                            size={20}
                                        />
                                    }
                                    text="Bạn muốn hiểu sâu về cách máy tính hoạt động"
                                />
                                <ListItem
                                    icon={
                                        <CheckCircle2
                                            className="text-green-500"
                                            size={20}
                                        />
                                    }
                                    text="Bạn thích tự do tùy biến giao diện, hệ thống"
                                />
                                <ListItem
                                    icon={
                                        <CheckCircle2
                                            className="text-green-500"
                                            size={20}
                                        />
                                    }
                                    text="Bạn không muốn tốn tiền mua bản quyền phần mềm"
                                />
                            </ul>
                        </div>

                        <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
                            <h4 className="text-red-400 font-bold text-xl mb-6 flex items-center gap-2">
                                <XCircle /> KHÔNG NÊN NẾU:
                            </h4>
                            <ul className="space-y-4">
                                <ListItem
                                    icon={
                                        <XCircle
                                            className="text-red-500"
                                            size={20}
                                        />
                                    }
                                    text="Bạn chơi game AAA cường độ cao (Windows hỗ trợ tốt hơn nhiều)"
                                />
                                <ListItem
                                    icon={
                                        <XCircle
                                            className="text-red-500"
                                            size={20}
                                        />
                                    }
                                    text="Bạn phụ thuộc vào phần mềm chuyên biệt (AutoCAD, bộ Adobe Photoshop/Premiere, MS Office chuẩn...)"
                                />
                                <ListItem
                                    icon={
                                        <XCircle
                                            className="text-red-500"
                                            size={20}
                                        />
                                    }
                                    text="Bạn ngại việc thi thoảng phải gõ vài dòng lệnh"
                                />
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 6: Summary & Quiz */}
                <section className="space-y-6">
                    <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-yellow-500/20 text-yellow-500 p-2 rounded-lg">
                                    6
                                </span>
                                Tóm tắt & Kiểm tra
                            </h3>
                        </div>

                        <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                            {/* Summary Box */}
                            <div>
                                <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                                    Ghi nhớ nhanh
                                </h4>
                                <div className="font-mono text-sm bg-slate-950 p-6 rounded-xl text-green-400 border border-slate-800 shadow-inner">
                                    <p>LINUX = Nhân hệ điều hành (Kernel)</p>
                                    <p>UBUNTU = Linux + Giao diện + Phần mềm</p>
                                    <p className="pl-7">= HĐH hoàn chỉnh</p>
                                    <br />
                                    <p className="text-slate-400">
                                        # Ubuntu khác Win/Mac:
                                    </p>
                                    <p className="text-slate-300">
                                        - Miễn phí & mã nguồn mở
                                    </p>
                                    <p className="text-slate-300">
                                        - Bảo mật cao hơn
                                    </p>
                                    <p className="text-slate-300">
                                        - Tốt hơn cho code & server
                                    </p>
                                    <p className="text-slate-300">
                                        - Cần thời gian làm quen
                                    </p>
                                </div>
                            </div>

                            {/* Interactive Quiz */}
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                {/* Footer Next Step */}
                <div className="text-center pt-8 border-t border-slate-800">
                    <p className="text-slate-400 mb-4">
                        Bạn đã sẵn sàng cho phần tiếp theo chưa?
                    </p>
                    <Link
                        to="/phan-1-2"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20"
                    >
                        Bài tiếp theo: 1.2 — Các phiên bản Ubuntu{" "}
                        <ChevronRight size={20} />
                    </Link>
                </div>
            </main>
        </div>
    );
}

// --- Sub-Components ---

function FeatureCard({ icon, title, desc }) {
    return (
        <div className="flex gap-4 p-4 bg-slate-800/80 rounded-xl hover:bg-slate-700 transition-colors border border-transparent hover:border-slate-600 group">
            <div className="bg-slate-900 p-3 rounded-lg text-orange-400 h-fit group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div>
                <h5 className="font-bold text-white">{title}</h5>
                <p className="text-sm text-slate-400 mt-1">{desc}</p>
            </div>
        </div>
    );
}

function ListItem({ icon, text }) {
    return (
        <li className="flex items-start gap-3">
            <div className="mt-0.5 shrink-0">{icon}</div>
            <span className="text-slate-300 leading-snug">{text}</span>
        </li>
    );
}

function ComparisonSection() {
    const [activeTab, setActiveTab] = useState("overview");

    const tabs = [
        { id: "overview", label: "Tổng quan", icon: <Globe size={16} /> },
        { id: "files", label: "Hệ thống File", icon: <FolderTree size={16} /> },
        { id: "software", label: "Phần mềm", icon: <Download size={16} /> },
        { id: "security", label: "Bảo mật", icon: <Lock size={16} /> },
    ];

    return (
        <div className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden">
            {/* Tab Nav */}
            <div className="flex overflow-x-auto border-b border-slate-700 bg-slate-900/50 p-2 gap-2 hide-scrollbar">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
                            activeTab === tab.id
                                ? "bg-orange-500 text-white shadow-md"
                                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                        }`}
                    >
                        {tab.icon} {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="p-6">
                {/* Tab 1: Overview Table */}
                {activeTab === "overview" && (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[600px]">
                            <thead>
                                <tr className="border-b border-slate-700 text-slate-400 text-sm">
                                    <th className="p-3 font-semibold">
                                        Tiêu chí
                                    </th>
                                    <th className="p-3 font-semibold text-orange-400">
                                        🐧 Ubuntu/Linux
                                    </th>
                                    <th className="p-3 font-semibold text-blue-400">
                                        🪟 Windows
                                    </th>
                                    <th className="p-3 font-semibold text-slate-300">
                                        🍎 macOS
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b border-slate-800 hover:bg-slate-800/50">
                                    <td className="p-3 font-medium text-slate-300">
                                        Chi phí
                                    </td>
                                    <td className="p-3 text-green-400 font-bold">
                                        Miễn phí
                                    </td>
                                    <td className="p-3 text-slate-400">
                                        ~4–10 triệu VNĐ
                                    </td>
                                    <td className="p-3 text-slate-400">
                                        Kèm theo máy (rất đắt)
                                    </td>
                                </tr>
                                <tr className="border-b border-slate-800 hover:bg-slate-800/50">
                                    <td className="p-3 font-medium text-slate-300">
                                        Mã nguồn
                                    </td>
                                    <td className="p-3 text-green-400">
                                        Mở hoàn toàn
                                    </td>
                                    <td className="p-3 text-red-400">Đóng</td>
                                    <td className="p-3 text-yellow-500">
                                        Một phần mở
                                    </td>
                                </tr>
                                <tr className="border-b border-slate-800 hover:bg-slate-800/50">
                                    <td className="p-3 font-medium text-slate-300">
                                        Bảo mật
                                    </td>
                                    <td className="p-3 tracking-widest text-yellow-400">
                                        ⭐⭐⭐⭐⭐
                                    </td>
                                    <td className="p-3 tracking-widest text-yellow-400 opacity-60">
                                        ⭐⭐⭐
                                    </td>
                                    <td className="p-3 tracking-widest text-yellow-400">
                                        ⭐⭐⭐⭐
                                    </td>
                                </tr>
                                <tr className="border-b border-slate-800 hover:bg-slate-800/50">
                                    <td className="p-3 font-medium text-slate-300">
                                        Dễ dùng
                                    </td>
                                    <td className="p-3 tracking-widest text-yellow-400 opacity-80">
                                        ⭐⭐⭐⭐
                                    </td>
                                    <td className="p-3 tracking-widest text-yellow-400">
                                        ⭐⭐⭐⭐⭐
                                    </td>
                                    <td className="p-3 tracking-widest text-yellow-400">
                                        ⭐⭐⭐⭐⭐
                                    </td>
                                </tr>
                                <tr className="border-b border-slate-800 hover:bg-slate-800/50">
                                    <td className="p-3 font-medium text-slate-300">
                                        Lập trình
                                    </td>
                                    <td className="p-3 tracking-widest text-yellow-400">
                                        ⭐⭐⭐⭐⭐
                                    </td>
                                    <td className="p-3 tracking-widest text-yellow-400 opacity-60">
                                        ⭐⭐⭐
                                    </td>
                                    <td className="p-3 tracking-widest text-yellow-400">
                                        ⭐⭐⭐⭐⭐
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-800/50">
                                    <td className="p-3 font-medium text-slate-300">
                                        Gaming
                                    </td>
                                    <td className="p-3 tracking-widest text-yellow-400 opacity-60">
                                        ⭐⭐⭐
                                    </td>
                                    <td className="p-3 tracking-widest text-yellow-400">
                                        ⭐⭐⭐⭐⭐
                                    </td>
                                    <td className="p-3 tracking-widest text-yellow-400 opacity-40">
                                        ⭐⭐
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Tab 2: File System */}
                {activeTab === "files" && (
                    <div>
                        <p className="text-slate-300 mb-6 text-center">
                            Windows chia ổ đĩa (C:, D:), trong khi Linux gộp tất
                            cả vào một <strong>cây thư mục duy nhất</strong> bắt
                            đầu từ gốc <code>/</code>.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-slate-900 p-5 rounded-xl border border-slate-700 font-mono text-sm overflow-x-auto">
                                <div className="text-blue-400 mb-2 font-bold flex items-center gap-2">
                                    <HardDrive size={16} /> WINDOWS
                                </div>
                                <div className="text-slate-400">
                                    <span className="text-white">C:\</span>
                                    <br />
                                    ├── Windows\
                                    <br />
                                    ├── Program Files\
                                    <br />
                                    ├── Users\
                                    <br />│ └──{" "}
                                    <span className="text-green-300">
                                        TenBan\
                                    </span>
                                    <br />
                                    │ ├── Desktop\
                                    <br />
                                    │ └── Documents\
                                    <br />
                                    └── Temp\
                                </div>
                                <div className="mt-4 pt-4 border-t border-slate-800 text-red-400 text-xs">
                                    ❌ Có nhiều ổ gốc (C:, D:, E:...)
                                </div>
                            </div>
                            <div className="bg-slate-900 p-5 rounded-xl border border-slate-700 font-mono text-sm overflow-x-auto">
                                <div className="text-orange-400 mb-2 font-bold flex items-center gap-2">
                                    <Terminal size={16} /> LINUX / UBUNTU
                                </div>
                                <div className="text-slate-400">
                                    <span className="text-white">/</span>{" "}
                                    <span className="text-slate-500 italic">
                                        (root)
                                    </span>
                                    <br />
                                    ├── etc/{" "}
                                    <span className="text-slate-500 italic">
                                        (cấu hình)
                                    </span>
                                    <br />
                                    ├── home/ <br />│ └──{" "}
                                    <span className="text-green-300">
                                        TenBan/
                                    </span>{" "}
                                    <span className="text-slate-500 italic">
                                        (dữ liệu của bạn)
                                    </span>
                                    <br />
                                    ├── usr/{" "}
                                    <span className="text-slate-500 italic">
                                        (phần mềm)
                                    </span>
                                    <br />
                                    ├── var/{" "}
                                    <span className="text-slate-500 italic">
                                        (log, cache)
                                    </span>
                                    <br />
                                    └── tmp/{" "}
                                    <span className="text-slate-500 italic">
                                        (tạm thời)
                                    </span>
                                </div>
                                <div className="mt-4 pt-4 border-t border-slate-800 text-green-400 text-xs">
                                    ✅ Tất cả quy về 1 gốc duy nhất (/)
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Tab 3: Software */}
                {activeTab === "software" && (
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-blue-400 font-bold mb-2">
                                <Globe size={20} /> Cách Windows cài App
                            </div>
                            <ol className="list-decimal list-inside space-y-2 text-slate-300 text-sm">
                                <li>Mở trình duyệt Web</li>
                                <li>Tìm kiếm phần mềm</li>
                                <li>
                                    Tải file{" "}
                                    <code className="bg-slate-800 px-1 rounded">
                                        .exe
                                    </code>{" "}
                                    (Cẩn thận nhầm nút Download giả)
                                </li>
                                <li>Click đúp file tải về</li>
                                <li>
                                    Bấm Next, Next... Cẩn thận bỏ tick phần mềm
                                    rác
                                </li>
                                <li>Finish!</li>
                            </ol>
                            <div className="bg-red-500/10 text-red-400 p-3 rounded-lg text-sm flex gap-2">
                                <AlertTriangle
                                    size={16}
                                    className="shrink-0 mt-0.5"
                                />
                                Rủi ro: Dễ tải nhầm virus, phần mềm kèm quảng
                                cáo độc hại.
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-orange-400 font-bold mb-2">
                                <Terminal size={20} /> Cách Ubuntu cài App
                            </div>
                            <p className="text-slate-300 text-sm">
                                Chỉ cần mở Terminal và gõ 1 dòng lệnh:
                            </p>
                            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-sm shadow-inner relative">
                                <span className="text-green-400">
                                    user@ubuntu
                                </span>
                                :<span className="text-blue-400">~</span>$ sudo
                                apt install vlc
                            </div>
                            <ul className="space-y-2 text-slate-300 text-sm">
                                <li className="flex items-center gap-2">
                                    ✨ Tự động tìm trong Kho ứng dụng chính thức
                                </li>
                                <li className="flex items-center gap-2">
                                    ✨ Tự động tải về & cài đặt
                                </li>
                                <li className="flex items-center gap-2">
                                    ✨ Xong! Không quảng cáo, không virus.
                                </li>
                            </ul>
                        </div>
                    </div>
                )}

                {/* Tab 4: Security */}
                {activeTab === "security" && (
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div className="bg-slate-900 p-6 rounded-xl border border-red-500/30 text-center">
                            <Unlock
                                size={40}
                                className="mx-auto text-red-400 mb-4"
                            />
                            <h4 className="font-bold text-white mb-2">
                                WINDOWS
                            </h4>
                            <p className="text-sm text-slate-400 mb-4">
                                Người dùng thông thường thường được cấp sẵn
                                quyền Admin.
                            </p>
                            <div className="text-red-400 text-sm font-medium">
                                → Virus tải về có thể tự động chạy và phá hoại
                                hệ thống mà không cần hỏi! 😱
                            </div>
                        </div>

                        <div className="bg-slate-900 p-6 rounded-xl border border-green-500/30 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                            <Lock
                                size={40}
                                className="mx-auto text-green-400 mb-4"
                            />
                            <h4 className="font-bold text-white mb-2">
                                UBUNTU
                            </h4>
                            <p className="text-sm text-slate-400 mb-4">
                                Người dùng thường bị giới hạn. Quyền Admin
                                (root) bị khóa.
                            </p>
                            <div className="text-green-400 text-sm font-medium">
                                → Bất cứ hành động cài đặt/thay đổi hệ thống nào
                                cũng bắt buộc phải gõ mật khẩu (sudo). Virus "bó
                                tay" vì không có pass! 🔒
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// Quiz Data & Component
const questions = [
    {
        id: 1,
        question:
            "Linux Kernel (nhân hệ điều hành) được tạo ra bởi ai và vào năm nào?",
        options: [
            "Bill Gates, năm 1985",
            "Steve Jobs, năm 1976",
            "Linus Torvalds, năm 1991",
            "Công ty Canonical, năm 2004",
        ],
        correct: 2,
        explanation:
            "Linus Torvalds (sinh viên Phần Lan) đã viết ra Linux Kernel vào năm 1991 và chia sẻ nó miễn phí.",
    },
    {
        id: 2,
        question: "Điểm khác biệt cốt lõi giữa 'Linux' và 'Ubuntu' là gì?",
        options: [
            "Linux mất phí, Ubuntu miễn phí",
            "Linux chỉ là cái 'nhân' (kernel), Ubuntu là hệ điều hành hoàn chỉnh (có giao diện, phần mềm...)",
            "Ubuntu là phần cứng, Linux là phần mềm",
            "Chúng hoàn toàn giống nhau 100%, chỉ khác tên gọi",
        ],
        correct: 1,
        explanation:
            "Linux chỉ là 'động cơ'. Ubuntu lấy động cơ đó lắp thêm 'khung gầm, vô lăng' (giao diện, phần mềm) để tạo thành chiếc xe hoàn chỉnh (Distro).",
    },
    {
        id: 3,
        question:
            "Tại sao Ubuntu (và Linux nói chung) thường bảo mật, ít dính virus hơn Windows?",
        options: [
            "Vì nó quá ít người dùng nên hacker không thèm viết virus",
            "Vì nó có sẵn phần mềm diệt virus tốt nhất thế giới",
            "Vì thiết kế phân quyền chặt chẽ, người dùng thường không có quyền Admin (phải dùng lệnh sudo + mật khẩu để can thiệp hệ thống)",
            "Vì máy tính chạy Linux không kết nối mạng được",
        ],
        correct: 2,
        explanation:
            "Cơ chế phân quyền của Linux rất chặt chẽ. Kể cả lỡ tải file độc hại, nó cũng không thể tự chạy hay tự cài đặt nếu không có lệnh sudo và mật khẩu của bạn.",
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
            // Finished
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
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 text-center flex flex-col justify-center items-center h-full min-h-[300px]">
                <div className="text-6xl mb-4">{score === 3 ? "🏆" : "👏"}</div>
                <h4 className="text-2xl font-bold text-white mb-2">
                    Hoàn thành!
                </h4>
                <p className="text-slate-400 mb-6">
                    Bạn trả lời đúng{" "}
                    <strong className="text-orange-500">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu hỏi.
                </p>
                <button
                    onClick={resetQuiz}
                    className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-600"
                >
                    Làm lại
                </button>
            </div>
        );
    }

    const q = questions[currentQ];

    return (
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 flex flex-col h-full">
            <div className="flex justify-between items-center mb-4 text-sm font-medium">
                <span className="text-orange-400">
                    Câu hỏi {currentQ + 1}/{questions.length}
                </span>
                <span className="text-slate-500">Điểm: {score}</span>
            </div>

            <h4 className="text-lg font-bold text-white mb-6 leading-snug">
                {q.question}
            </h4>

            <div className="space-y-3 flex-grow">
                {q.options.map((opt, idx) => {
                    let btnClass =
                        "w-full text-left p-4 rounded-lg border text-sm transition-all ";

                    if (!showResult) {
                        btnClass +=
                            "border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300";
                    } else {
                        if (idx === q.correct) {
                            btnClass +=
                                "border-green-500 bg-green-500/10 text-green-400"; // Correct
                        } else if (idx === selected) {
                            btnClass +=
                                "border-red-500 bg-red-500/10 text-red-400"; // Wrong selected
                        } else {
                            btnClass +=
                                "border-slate-800 bg-slate-800/50 text-slate-500 opacity-50"; // Others
                        }
                    }

                    return (
                        <button
                            key={idx}
                            onClick={() => handleSelect(idx)}
                            disabled={showResult}
                            className={btnClass}
                        >
                            {opt}
                        </button>
                    );
                })}
            </div>

            {showResult && (
                <div className="mt-6 pt-6 border-t border-slate-800 animate-in fade-in slide-in-from-bottom-2">
                    <div
                        className={`p-4 rounded-lg text-sm mb-4 ${selected === q.correct ? "bg-green-500/10 text-green-400" : "bg-orange-500/10 text-orange-400"}`}
                    >
                        <strong>Giải thích:</strong> {q.explanation}
                    </div>
                    <button
                        onClick={handleNext}
                        className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors"
                    >
                        {currentQ < questions.length - 1
                            ? "Câu tiếp theo"
                            : "Xem kết quả"}
                    </button>
                </div>
            )}
        </div>
    );
}
