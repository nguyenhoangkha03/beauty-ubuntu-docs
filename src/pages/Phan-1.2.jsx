import React, { useState } from "react";
import {
    Calendar,
    PawPrint,
    ShieldCheck,
    Monitor,
    Server,
    Palette,
    Clock,
    TerminalSquare,
    CheckCircle2,
    ChevronRight,
    Info,
    HardDrive,
    Cpu,
    GitBranch,
    ArrowRight,
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
                    <div className="flex items-center gap-2">
                        <Link
                            to="/phan-1-1"
                            className="text-sm text-slate-400 hidden md:inline-block hover:text-slate-200 transition-colors"
                        >
                            Bài trước: 1.1
                        </Link>
                        <div className="text-sm font-medium text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Phần 1.2
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8 space-y-16">
                {/* Title Section */}
                <div className="text-center space-y-4 py-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        Các phiên bản{" "}
                        <span className="text-orange-500">Ubuntu</span> phổ biến
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Hệ thống đặt tên độc đáo, ý nghĩa của LTS, sự khác biệt
                        giữa Desktop và Server, cùng cách chọn phiên bản chuẩn
                        xác nhất cho máy tính của bạn.
                    </p>
                </div>

                {/* Section 1: Naming Convention */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className="bg-blue-500/20 text-blue-400 p-2 rounded-lg">
                            1
                        </span>
                        Ubuntu đặt tên phiên bản như thế nào?
                    </h3>
                    <p className="text-slate-300">
                        Ubuntu có cách đặt tên rất đặc biệt — sử dụng 2 hệ thống
                        song song:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* YY.MM System */}
                        <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400">
                                    <Calendar size={24} />
                                </div>
                                <h4 className="font-bold text-white text-lg">
                                    Hệ thống Số (YY.MM)
                                </h4>
                            </div>

                            <ul className="space-y-4 font-mono text-sm">
                                <li className="flex justify-between items-center bg-slate-900 p-3 rounded-lg border border-slate-700">
                                    <span className="text-orange-400 font-bold">
                                        Ubuntu 24.04
                                    </span>
                                    <span className="text-slate-400 flex items-center gap-2">
                                        <ArrowRight size={14} /> Tháng 04, 2024
                                    </span>
                                </li>
                                <li className="flex justify-between items-center bg-slate-900 p-3 rounded-lg border border-slate-700">
                                    <span className="text-orange-400 font-bold">
                                        Ubuntu 22.10
                                    </span>
                                    <span className="text-slate-400 flex items-center gap-2">
                                        <ArrowRight size={14} /> Tháng 10, 2022
                                    </span>
                                </li>
                                <li className="flex justify-between items-center bg-slate-900 p-3 rounded-lg border border-slate-700">
                                    <span className="text-orange-400 font-bold">
                                        Ubuntu 20.04
                                    </span>
                                    <span className="text-slate-400 flex items-center gap-2">
                                        <ArrowRight size={14} /> Tháng 04, 2020
                                    </span>
                                </li>
                            </ul>

                            <div className="mt-6 bg-blue-500/10 p-4 rounded-lg border border-blue-500/20 text-sm text-blue-200">
                                <strong className="text-blue-400">
                                    Quy luật:
                                </strong>{" "}
                                Tháng phát hành thường chỉ có 2 giá trị là{" "}
                                <strong>04</strong> (tháng 4) hoặc{" "}
                                <strong>10</strong> (tháng 10).
                            </div>
                        </div>

                        {/* Animal System */}
                        <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-colors">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-orange-500/20 p-3 rounded-xl text-orange-400">
                                    <PawPrint size={24} />
                                </div>
                                <h4 className="font-bold text-white text-lg">
                                    Hệ thống Động vật
                                </h4>
                            </div>

                            <ul className="space-y-4 text-sm">
                                <li className="flex items-center gap-3 bg-slate-900 p-3 rounded-lg border border-slate-700">
                                    <span className="text-2xl">🦔</span>
                                    <div>
                                        <div className="font-bold text-orange-400">
                                            24.04: Noble Numbat
                                        </div>
                                        <div className="text-slate-400 text-xs italic">
                                            Numbat cao quý
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-center gap-3 bg-slate-900 p-3 rounded-lg border border-slate-700">
                                    <span className="text-2xl">🪼</span>
                                    <div>
                                        <div className="font-bold text-orange-400">
                                            22.04: Jammy Jellyfish
                                        </div>
                                        <div className="text-slate-400 text-xs italic">
                                            Sứa vui vẻ
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-center gap-3 bg-slate-900 p-3 rounded-lg border border-slate-700">
                                    <span className="text-2xl">🦊</span>
                                    <div>
                                        <div className="font-bold text-orange-400">
                                            20.04: Focal Fossa
                                        </div>
                                        <div className="text-slate-400 text-xs italic">
                                            Fossa tập trung
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-6 bg-orange-500/10 p-4 rounded-lg border border-orange-500/20 text-sm text-orange-200">
                                <strong className="text-orange-400">
                                    Quy luật:
                                </strong>{" "}
                                Chữ cái đầu tăng dần theo bảng chữ cái:
                                <span className="font-mono bg-black/30 px-1 py-0.5 rounded mx-1">
                                    ...F, J, N, P...
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: LTS */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className="bg-green-500/20 text-green-400 p-2 rounded-lg">
                            2
                        </span>
                        LTS là gì? Tại sao quan trọng?
                    </h3>

                    <div className="bg-gradient-to-br from-green-900/40 to-slate-900 p-1 rounded-2xl">
                        <div className="bg-slate-900 rounded-xl p-6 md:p-8 border border-green-500/30">
                            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                                <div className="flex-1">
                                    <h4 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-2">
                                        LTS = Long Term Support
                                    </h4>
                                    <p className="text-slate-300 font-medium text-lg">
                                        (Phiên bản Hỗ trợ Dài hạn)
                                    </p>

                                    <div className="mt-6 space-y-3 text-slate-300">
                                        <ListItem
                                            icon={
                                                <CheckCircle2
                                                    className="text-green-500"
                                                    size={20}
                                                />
                                            }
                                            text="Phát hành 2 năm / lần (vào các năm chẵn: 20, 22, 24)."
                                        />
                                        <ListItem
                                            icon={
                                                <CheckCircle2
                                                    className="text-green-500"
                                                    size={20}
                                                />
                                            }
                                            text="Được hỗ trợ bảo mật miễn phí trong 5 NĂM."
                                        />
                                        <ListItem
                                            icon={
                                                <CheckCircle2
                                                    className="text-green-500"
                                                    size={20}
                                                />
                                            }
                                            text="Trả tiền (Ubuntu Pro) → được hỗ trợ thêm 5 năm nữa (Tổng 10 năm)."
                                        />
                                        <ListItem
                                            icon={
                                                <CheckCircle2
                                                    className="text-green-500"
                                                    size={20}
                                                />
                                            }
                                            text="Ổn định nhất, ít lỗi nhất, bắt buộc dùng cho server thực tế (production)."
                                        />
                                    </div>
                                </div>

                                <div className="w-full md:w-1/3 bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center relative overflow-hidden">
                                    <ShieldCheck
                                        size={80}
                                        className="mx-auto text-green-500/20 absolute -right-4 -bottom-4"
                                    />
                                    <div className="relative z-10">
                                        <div className="text-sm text-slate-400 mb-1">
                                            Vấn đề của Non-LTS:
                                        </div>
                                        <div className="text-red-400 font-medium mb-4">
                                            6 tháng ra 1 bản, chỉ hỗ trợ 9 tháng
                                            😫
                                        </div>
                                        <div className="w-full h-px bg-slate-700 my-4"></div>
                                        <div className="text-sm text-slate-400 mb-1">
                                            Giải pháp LTS:
                                        </div>
                                        <div className="text-green-400 font-bold text-xl">
                                            Cài 1 lần, yên tâm dùng 5-10 năm! 😌
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Lifecycle Visual */}
                            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                                <h5 className="font-bold text-white mb-6 flex items-center gap-2">
                                    <Clock
                                        size={18}
                                        className="text-slate-400"
                                    />{" "}
                                    Vòng đời thực tế: Ubuntu 22.04 LTS
                                </h5>

                                <div className="relative flex flex-col md:flex-row justify-between md:items-center gap-8 md:gap-0">
                                    {/* Line */}
                                    <div className="absolute left-[15px] top-0 bottom-0 w-1 bg-slate-800 md:left-0 md:right-0 md:top-[15px] md:bottom-auto md:h-1 z-0"></div>
                                    <div className="absolute left-[15px] top-0 bottom-1/2 w-1 bg-green-500 md:left-0 md:right-1/2 md:top-[15px] md:bottom-auto md:h-1 z-0"></div>

                                    {/* Nodes */}
                                    <div className="relative z-10 flex md:flex-col items-center md:justify-center gap-4 group">
                                        <div className="w-8 h-8 rounded-full bg-green-500 border-4 border-slate-950 shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
                                        <div className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700 text-center group-hover:-translate-y-1 transition-transform">
                                            <div className="font-bold text-green-400">
                                                Tháng 4 / 2022
                                            </div>
                                            <div className="text-xs text-slate-400">
                                                Phát hành 22.04
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative z-10 flex md:flex-col items-center md:justify-center gap-4 group">
                                        <div className="w-8 h-8 rounded-full bg-orange-500 border-4 border-slate-950 shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div>
                                        <div className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700 text-center group-hover:-translate-y-1 transition-transform">
                                            <div className="font-bold text-orange-400">
                                                Tháng 4 / 2027
                                            </div>
                                            <div className="text-xs text-slate-400">
                                                Hết hỗ trợ miễn phí (5 năm)
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative z-10 flex md:flex-col items-center md:justify-center gap-4 group">
                                        <div className="w-8 h-8 rounded-full bg-red-500 border-4 border-slate-950 shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
                                        <div className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700 text-center group-hover:-translate-y-1 transition-transform">
                                            <div className="font-bold text-red-400">
                                                Tháng 4 / 2032
                                            </div>
                                            <div className="text-xs text-slate-400">
                                                Hết hỗ trợ trả phí (10 năm)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Types of Ubuntu */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className="bg-purple-500/20 text-purple-400 p-2 rounded-lg">
                            3
                        </span>
                        Các loại Ubuntu theo mục đích
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Desktop */}
                        <div className="bg-slate-800/80 p-8 rounded-2xl border-t-4 border-t-blue-500 border-slate-700 shadow-xl relative overflow-hidden group hover:bg-slate-800 transition-colors">
                            <Monitor
                                size={120}
                                className="absolute -right-10 -bottom-10 text-blue-500/10 group-hover:scale-110 transition-transform"
                            />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-blue-500 p-2 rounded-lg text-white">
                                        <Monitor size={24} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white">
                                        Ubuntu Desktop
                                    </h4>
                                </div>
                                <ul className="space-y-3 mb-8 text-slate-300">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2
                                            className="text-blue-400 shrink-0 mt-0.5"
                                            size={18}
                                        />{" "}
                                        Có giao diện đồ họa (GNOME)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2
                                            className="text-blue-400 shrink-0 mt-0.5"
                                            size={18}
                                        />{" "}
                                        Dành cho máy tính cá nhân
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2
                                            className="text-blue-400 shrink-0 mt-0.5"
                                            size={18}
                                        />{" "}
                                        Dễ dùng, có chuột, cửa sổ
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <HardDrive
                                            className="text-slate-400 shrink-0 mt-0.5"
                                            size={18}
                                        />{" "}
                                        ISO: ~5GB | RAM: ≥ 4GB (Khuyên 8GB)
                                    </li>
                                </ul>
                                <div className="bg-blue-500/10 text-blue-300 p-4 rounded-xl border border-blue-500/20 font-medium flex items-center gap-2">
                                    <ArrowRight size={20} /> Bạn đang học → DÙNG
                                    CÁI NÀY ✅
                                </div>
                            </div>
                        </div>

                        {/* Server */}
                        <div className="bg-slate-800/80 p-8 rounded-2xl border-t-4 border-t-orange-500 border-slate-700 shadow-xl relative overflow-hidden group hover:bg-slate-800 transition-colors">
                            <Server
                                size={120}
                                className="absolute -right-10 -bottom-10 text-orange-500/10 group-hover:scale-110 transition-transform"
                            />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-orange-500 p-2 rounded-lg text-white">
                                        <Server size={24} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white">
                                        Ubuntu Server
                                    </h4>
                                </div>
                                <ul className="space-y-3 mb-8 text-slate-300">
                                    <li className="flex items-start gap-2">
                                        <TerminalSquare
                                            className="text-orange-400 shrink-0 mt-0.5"
                                            size={18}
                                        />{" "}
                                        KHÔNG có giao diện đồ họa
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <TerminalSquare
                                            className="text-orange-400 shrink-0 mt-0.5"
                                            size={18}
                                        />{" "}
                                        Chỉ có màn hình đen + dòng lệnh
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ShieldCheck
                                            className="text-orange-400 shrink-0 mt-0.5"
                                            size={18}
                                        />{" "}
                                        Nhẹ hơn, nhanh hơn, bảo mật hơn
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Cpu
                                            className="text-slate-400 shrink-0 mt-0.5"
                                            size={18}
                                        />{" "}
                                        ISO: ~2GB | RAM: ≥ 512MB
                                    </li>
                                </ul>
                                <div className="bg-orange-500/10 text-orange-300 p-4 rounded-xl border border-orange-500/20 font-medium flex items-center gap-2">
                                    <ArrowRight size={20} /> Học xong Desktop →
                                    Học cái này
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Flavours */}
                    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 mt-6">
                        <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                            <Palette size={20} className="text-purple-400" />{" "}
                            Ubuntu Flavours (Các biến thể chính thức)
                        </h4>
                        <p className="text-sm text-slate-400 mb-6 italic">
                            Tất cả đều dùng chung "nhân" Linux của Ubuntu, chỉ
                            thay đổi "lớp vỏ" (Giao diện đồ họa) để phù hợp các
                            nhu cầu khác nhau.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                            <FlavourCard
                                name="Kubuntu"
                                gui="KDE Plasma"
                                desc="Đẹp, giống Windows"
                            />
                            <FlavourCard
                                name="Xubuntu"
                                gui="XFCE"
                                desc="Rất nhẹ, máy cũ"
                            />
                            <FlavourCard
                                name="Lubuntu"
                                gui="LXQt"
                                desc="Siêu nhẹ"
                            />
                            <FlavourCard
                                name="Ubuntu MATE"
                                gui="MATE"
                                desc="Đơn giản, truyền thống"
                            />
                            <FlavourCard
                                name="Ubuntu Budgie"
                                gui="Budgie"
                                desc="Hiện đại, tinh tế"
                            />
                            <FlavourCard
                                name="Ubuntu Studio"
                                gui="GNOME"
                                desc="Dành cho Creator"
                            />
                        </div>
                    </div>
                </section>

                {/* Section 4: Timeline */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className="bg-pink-500/20 text-pink-400 p-2 rounded-lg">
                            4
                        </span>
                        Lịch sử các phiên bản (Timeline)
                    </h3>

                    <div className="bg-slate-800/50 p-6 md:p-10 rounded-2xl border border-slate-700">
                        <div className="relative border-l-2 border-slate-700 pl-6 ml-4 space-y-8">
                            <TimelineItem
                                year="2004"
                                ver="4.10"
                                name="Warty Warthog"
                                icon="🐗"
                                desc="Phiên bản đầu tiên!"
                                isLTS={false}
                            />
                            <TimelineItem
                                year="2006"
                                ver="6.06"
                                name="Dapper Drake"
                                icon="🦆"
                                desc="Bản LTS đầu tiên"
                                isLTS={true}
                            />
                            <TimelineItem
                                year="2010"
                                ver="10.04"
                                name="Lucid Lynx"
                                icon="🐈"
                                desc="LTS, rất nổi tiếng thời đó"
                                isLTS={true}
                            />
                            <TimelineItem
                                year="2018"
                                ver="18.04"
                                name="Bionic Beaver"
                                icon="🦫"
                                desc="LTS, nhiều server vẫn đang chạy"
                                isLTS={true}
                            />
                            <TimelineItem
                                year="2020"
                                ver="20.04"
                                name="Focal Fossa"
                                icon="🦊"
                                desc="LTS, siêu phổ biến"
                                isLTS={true}
                            />
                            <TimelineItem
                                year="2022"
                                ver="22.04"
                                name="Jammy Jellyfish"
                                icon="🪼"
                                desc="LTS, bản đang phổ biến nhất"
                                isLTS={true}
                                isCurrent={false}
                            />
                            <TimelineItem
                                year="2024"
                                ver="24.04"
                                name="Noble Numbat"
                                icon="🦔"
                                desc="LTS MỚI NHẤT ✅"
                                isLTS={true}
                                isCurrent={true}
                            />
                            <TimelineItem
                                year="2026"
                                ver="26.04"
                                name="???"
                                icon="🐧"
                                desc="Chưa công bố (sắp ra)"
                                isLTS={true}
                                isFuture={true}
                            />
                        </div>
                    </div>
                </section>

                {/* Section 5: Decision Tree */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className="bg-yellow-500/20 text-yellow-500 p-2 rounded-lg">
                            5
                        </span>
                        Nên dùng phiên bản nào?
                    </h3>

                    <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6 overflow-hidden">
                        <h4 className="text-center font-bold text-slate-300 mb-8 uppercase tracking-widest text-sm">
                            Sơ đồ quyết định của bạn
                        </h4>

                        <div className="max-w-2xl mx-auto space-y-4 relative">
                            <div className="absolute left-[23px] top-[40px] bottom-[40px] w-0.5 bg-slate-700 z-0"></div>

                            <div className="flex gap-4 relative z-10">
                                <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center shrink-0 shadow-lg">
                                    ❓
                                </div>
                                <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl flex-1 cursor-pointer hover:border-blue-500 transition-colors group">
                                    <div className="font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                                        Học lập trình / Dùng hàng ngày
                                    </div>
                                    <div className="text-sm text-slate-400 flex items-center gap-2 mt-2">
                                        <ArrowRight
                                            size={16}
                                            className="text-green-400"
                                        />{" "}
                                        Chọn:{" "}
                                        <strong className="text-green-400">
                                            Ubuntu Desktop LTS (24.04)
                                        </strong>{" "}
                                        ✅
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 relative z-10">
                                <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center shrink-0 shadow-lg">
                                    🌐
                                </div>
                                <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl flex-1 cursor-pointer hover:border-orange-500 transition-colors group">
                                    <div className="font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                                        Chạy Server / VPS / Deploy App
                                    </div>
                                    <div className="text-sm text-slate-400 flex items-center gap-2 mt-2">
                                        <ArrowRight
                                            size={16}
                                            className="text-green-400"
                                        />{" "}
                                        Chọn:{" "}
                                        <strong className="text-green-400">
                                            Ubuntu Server LTS (24.04)
                                        </strong>{" "}
                                        ✅
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 relative z-10">
                                <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center shrink-0 shadow-lg">
                                    💻
                                </div>
                                <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl flex-1 cursor-pointer hover:border-purple-500 transition-colors group">
                                    <div className="font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                                        Máy tính cũ, yếu, RAM &lt; 4GB
                                    </div>
                                    <div className="text-sm text-slate-400 flex items-center gap-2 mt-2">
                                        <ArrowRight
                                            size={16}
                                            className="text-green-400"
                                        />{" "}
                                        Chọn:{" "}
                                        <strong className="text-green-400">
                                            Lubuntu hoặc Xubuntu LTS
                                        </strong>{" "}
                                        ✅
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 relative z-10">
                                <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center shrink-0 shadow-lg">
                                    🧪
                                </div>
                                <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl flex-1 cursor-pointer hover:border-red-500 transition-colors group">
                                    <div className="font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                                        Đam mê công nghệ, thích vọc vạch
                                    </div>
                                    <div className="text-sm text-slate-400 flex items-center gap-2 mt-2">
                                        <ArrowRight
                                            size={16}
                                            className="text-yellow-400"
                                        />{" "}
                                        Chọn:{" "}
                                        <strong className="text-yellow-400">
                                            Ubuntu Non-LTS (VD: 24.10)
                                        </strong>{" "}
                                        ⚠️
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 6: How to check version */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className="bg-teal-500/20 text-teal-400 p-2 rounded-lg">
                            6
                        </span>
                        Kiểm tra phiên bản đang dùng
                    </h3>
                    <p className="text-slate-300">
                        Khi bạn đã ở trong hệ điều hành Ubuntu, hãy mở Terminal
                        (Ctrl + Alt + T) và gõ các lệnh sau:
                    </p>

                    <TerminalUI />
                </section>

                {/* Section 7: Summary & Quiz */}
                <section className="space-y-6">
                    <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-yellow-500/20 text-yellow-500 p-2 rounded-lg">
                                    7
                                </span>
                                Tóm tắt & Kiểm tra
                            </h3>
                        </div>

                        <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                            {/* Summary Box */}
                            <div>
                                <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider flex items-center gap-2">
                                    <Info size={18} /> Quy tắc Vàng
                                </h4>
                                <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-inner relative">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-orange-500 rounded-l-xl"></div>
                                    <p className="text-lg text-white font-medium italic mb-6">
                                        "Nếu không biết chọn gì, hãy luôn chọn
                                        Ubuntu bản{" "}
                                        <strong className="text-orange-400">
                                            LTS
                                        </strong>{" "}
                                        mới nhất."
                                    </p>

                                    <ul className="space-y-2 text-sm text-slate-300 font-mono">
                                        <li>
                                            • Tên bản ={" "}
                                            <span className="text-green-400">
                                                YY.MM
                                            </span>{" "}
                                            (VD: 24.04)
                                        </li>
                                        <li>
                                            •{" "}
                                            <span className="text-orange-400 font-bold">
                                                LTS
                                            </span>{" "}
                                            = Hỗ trợ 5 năm, Ổn định
                                        </li>
                                        <li>
                                            •{" "}
                                            <span className="text-blue-400 font-bold">
                                                Desktop
                                            </span>{" "}
                                            = Có giao diện (Học tập)
                                        </li>
                                        <li>
                                            •{" "}
                                            <span className="text-red-400 font-bold">
                                                Server
                                            </span>{" "}
                                            = Dòng lệnh (Máy chủ)
                                        </li>
                                    </ul>
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
                        Bạn đã biết chọn bản nào chưa? Cùng bắt tay vào cài đặt
                        nhé! 🚀
                    </p>
                    <Link
                        to="/"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20"
                    >
                        Quay lại mục lục khóa học{" "}
                        <ChevronRight size={20} />
                    </Link>
                </div>
            </main>
        </div>
    );
}

// --- Sub-Components ---

function ListItem({ icon, text }) {
    return (
        <div className="flex items-start gap-3">
            <div className="mt-0.5 shrink-0">{icon}</div>
            <span>{text}</span>
        </div>
    );
}

function FlavourCard({ name, gui, desc }) {
    return (
        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-slate-500 transition-colors">
            <div className="font-bold text-white">{name}</div>
            <div className="text-purple-400 text-xs mb-2">{gui}</div>
            <div className="text-slate-400 text-xs">{desc}</div>
        </div>
    );
}

function TimelineItem({
    year,
    ver,
    name,
    icon,
    desc,
    isLTS,
    isCurrent,
    isFuture,
}) {
    return (
        <div className={`relative ${isFuture ? "opacity-50" : ""}`}>
            <div
                className={`absolute -left-[35px] w-5 h-5 rounded-full border-4 ${
                    isCurrent
                        ? "bg-orange-500 border-orange-200 shadow-[0_0_10px_rgba(249,115,22,0.8)]"
                        : isLTS
                          ? "bg-green-500 border-slate-900"
                          : "bg-slate-600 border-slate-900"
                }`}
            ></div>

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 -mt-1.5">
                <div className="font-mono font-bold text-lg text-slate-300 w-16">
                    {year}
                </div>
                <div
                    className={`bg-slate-900 px-4 py-3 rounded-xl border flex-1 flex flex-col md:flex-row justify-between md:items-center gap-2 ${
                        isCurrent ? "border-orange-500/50" : "border-slate-700"
                    }`}
                >
                    <div className="flex items-center gap-3">
                        <span className="text-2xl w-8 text-center">{icon}</span>
                        <div>
                            <div className="font-bold text-white flex items-center gap-2">
                                {ver} {name}
                                {isLTS && (
                                    <span className="bg-green-500/20 text-green-400 text-[10px] px-1.5 py-0.5 rounded uppercase tracking-wider border border-green-500/20">
                                        LTS
                                    </span>
                                )}
                            </div>
                            <div className="text-sm text-slate-400">{desc}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TerminalUI() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-black">
            {/* Terminal Header */}
            <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                    user@ubuntu: ~
                </div>
                <div className="w-10"></div>
            </div>

            {/* Terminal Tabs */}
            <div className="flex bg-slate-900 border-b border-slate-800">
                <button
                    onClick={() => setActiveTab(1)}
                    className={`px-4 py-2 text-xs font-mono border-r border-slate-800 ${activeTab === 1 ? "bg-black text-white" : "text-slate-500 hover:text-slate-300"}`}
                >
                    Xem nhanh
                </button>
                <button
                    onClick={() => setActiveTab(2)}
                    className={`px-4 py-2 text-xs font-mono border-r border-slate-800 ${activeTab === 2 ? "bg-black text-white" : "text-slate-500 hover:text-slate-300"}`}
                >
                    Xem file hệ thống
                </button>
                <button
                    onClick={() => setActiveTab(3)}
                    className={`px-4 py-2 text-xs font-mono ${activeTab === 3 ? "bg-black text-white" : "text-slate-500 hover:text-slate-300"}`}
                >
                    Xem Kernel
                </button>
            </div>

            {/* Terminal Body */}
            <div className="p-4 font-mono text-sm sm:text-base min-h-[200px] overflow-x-auto">
                {activeTab === 1 && (
                    <>
                        <div className="mb-2">
                            <span className="text-green-400">user@ubuntu</span>:
                            <span className="text-blue-400">~</span>${" "}
                            <span className="text-white">lsb_release -a</span>
                        </div>
                        <div className="text-slate-300 whitespace-pre">
                            No LSB modules are available.
                            <br />
                            Distributor ID: Ubuntu
                            <br />
                            Description: Ubuntu 22.04.3 LTS
                            <br />
                            Release: 22.04
                            <br />
                            Codename: jammy
                        </div>
                    </>
                )}

                {activeTab === 2 && (
                    <>
                        <div className="mb-2">
                            <span className="text-green-400">user@ubuntu</span>:
                            <span className="text-blue-400">~</span>${" "}
                            <span className="text-white">
                                cat /etc/os-release
                            </span>
                        </div>
                        <div className="text-slate-300 whitespace-pre">
                            PRETTY_NAME="Ubuntu 22.04.3 LTS"
                            <br />
                            NAME="Ubuntu"
                            <br />
                            VERSION_ID="22.04"
                            <br />
                            VERSION="22.04.3 LTS (Jammy Jellyfish)"
                            <br />
                            ...
                        </div>
                    </>
                )}

                {activeTab === 3 && (
                    <>
                        <div className="mb-2">
                            <span className="text-green-400">user@ubuntu</span>:
                            <span className="text-blue-400">~</span>${" "}
                            <span className="text-white">uname -r</span>
                        </div>
                        <div className="text-slate-300">6.2.0-39-generic</div>
                    </>
                )}
                <div className="mt-2 flex items-center">
                    <span className="text-green-400">user@ubuntu</span>:
                    <span className="text-blue-400">~</span>${" "}
                    <span className="inline-block w-2 h-5 bg-white ml-1 animate-pulse"></span>
                </div>
            </div>
        </div>
    );
}

// Quiz Data & Component
const questions = [
    {
        id: 1,
        question: "Phiên bản Ubuntu 24.04 được phát hành vào thời gian nào?",
        options: [
            "Ngày 24 tháng 4 (Năm bất kỳ)",
            "Tháng 4 năm 2024",
            "Tháng 10 năm 2024",
            "Năm 2404",
        ],
        correct: 1,
        explanation:
            "Cách đặt tên của Ubuntu là YY.MM, trong đó YY là năm (24 = 2024), MM là tháng (04 = tháng 4).",
    },
    {
        id: 2,
        question: "LTS (Long Term Support) có nghĩa là gì?",
        options: [
            "Phiên bản hỗ trợ sửa lỗi và bảo mật trong 5 năm (dành cho Server/Môi trường ổn định).",
            "Phiên bản mới nhất chỉ hỗ trợ 9 tháng.",
            "Tên gọi khác của Ubuntu Server.",
            "Là phần mềm yêu cầu phải trả tiền để tải về.",
        ],
        correct: 0,
        explanation:
            "LTS (Long Term Support) là phiên bản hỗ trợ dài hạn (5 năm miễn phí), cực kỳ ổn định và được khuyên dùng cho hầu hết mọi trường hợp.",
    },
    {
        id: 3,
        question:
            "Sự khác biệt chính giữa Ubuntu Desktop và Ubuntu Server là gì?",
        options: [
            "Ubuntu Server miễn phí, Desktop thì mất tiền.",
            "Ubuntu Server có giao diện đẹp hơn.",
            "Ubuntu Desktop có giao diện đồ họa (chuột, cửa sổ), Server chỉ có giao diện dòng lệnh.",
            "Chúng là một, không có gì khác biệt.",
        ],
        correct: 2,
        explanation:
            "Ubuntu Server loại bỏ hoàn toàn giao diện đồ họa để tiết kiệm tài nguyên hệ thống (RAM, CPU), mọi thao tác đều qua lệnh.",
    },
    {
        id: 4,
        question:
            "Bạn có một chiếc máy tính cũ, yếu (RAM khoảng 1GB-2GB). Bạn nên cài phiên bản nào?",
        options: [
            "Ubuntu Desktop tiêu chuẩn",
            "Kubuntu",
            "Lubuntu hoặc Xubuntu",
            "Ubuntu Server",
        ],
        correct: 2,
        explanation:
            "Lubuntu và Xubuntu là các 'Flavor' (biến thể) chính thức sử dụng giao diện cực kỳ nhẹ (LXQt / XFCE), phù hợp cho máy tính đời cũ.",
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
                <div className="text-6xl mb-4">
                    {score === questions.length ? "🏆" : "👏"}
                </div>
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
