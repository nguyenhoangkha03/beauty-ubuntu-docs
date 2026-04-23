import React, { useState, useRef, useEffect } from "react";
import {
    FileText,
    ScrollText,
    ArrowDownToLine,
    ArrowUpToLine,
    Eye,
    CheckCircle2,
    AlertTriangle,
    ChevronRight,
    Info,
    TerminalSquare,
    Activity,
    Search,
    SplitSquareVertical,
    ArrowDown,
    Filter,
    ArrowRight,
    PlayCircle,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
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
                            Bài trước: 2.3
                        </span>
                        <div className="text-sm font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                            Phần 2.4
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                {/* Title Section */}
                <div className="text-center space-y-4 py-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        <span className="text-cyan-400 font-mono tracking-tighter">
                            Xem nội dung
                        </span>{" "}
                        File & Logs
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Bí kíp đọc hiểu cấu hình, phân tích lỗi và theo dõi máy
                        chủ theo thời gian thực với bộ 5 lệnh: <code>cat</code>,{" "}
                        <code>less</code>, <code>more</code>, <code>head</code>,{" "}
                        <code>tail</code>.
                    </p>
                </div>

                {/* Section 1: The Big Five */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                        <span className="bg-cyan-500/20 text-cyan-400 p-2 rounded-lg">
                            1
                        </span>
                        Tổng quan 5 lệnh đọc file
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <CommandCard
                            cmd="cat"
                            desc="Xem toàn bộ (ngắn)"
                            icon={
                                <FileText className="text-blue-400" size={24} />
                            }
                            color="blue"
                        />
                        <CommandCard
                            cmd="less"
                            desc="Xem cuộn trang ⭐"
                            icon={
                                <ScrollText
                                    className="text-green-400"
                                    size={24}
                                />
                            }
                            color="green"
                        />
                        <CommandCard
                            cmd="more"
                            desc="Xem cuộn (cũ hơn)"
                            icon={<Eye className="text-slate-400" size={24} />}
                            color="slate"
                        />
                        <CommandCard
                            cmd="head"
                            desc="N dòng đầu tiên"
                            icon={
                                <ArrowUpToLine
                                    className="text-orange-400"
                                    size={24}
                                />
                            }
                            color="orange"
                        />
                        <CommandCard
                            cmd="tail"
                            desc="N dòng cuối cùng"
                            icon={
                                <ArrowDownToLine
                                    className="text-rose-400"
                                    size={24}
                                />
                            }
                            color="rose"
                        />
                    </div>
                </section>

                {/* Section 2: CAT */}
                <section className="space-y-6 pt-6">
                    <div className="bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                        <h3 className="text-2xl font-bold text-blue-400 flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                            <FileText size={28} /> Lệnh <code>cat</code>{" "}
                            (Concatenate)
                        </h3>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <p className="text-slate-300">
                                    In toàn bộ nội dung file ra màn hình
                                    Terminal ngay lập tức. Cực kỳ hoàn hảo cho
                                    các <strong>file cấu hình ngắn</strong>.
                                    Nhưng nếu file quá dài (hàng ngàn dòng), màn
                                    hình sẽ bị trôi tuột đi rất nhanh.
                                </p>
                                <div className="bg-black p-4 rounded-xl border border-slate-800 font-mono text-sm space-y-2">
                                    <div className="text-slate-500">
                                        # Xem file cấu hình mạng
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            cat /etc/hostname
                                        </span>
                                    </div>
                                    <div className="text-slate-300">
                                        ubuntu-pc
                                    </div>

                                    <div className="text-slate-500 mt-4">
                                        # Đánh số thứ tự các dòng (-n)
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            cat -n tho.txt
                                        </span>
                                    </div>
                                    <div className="text-slate-300">
                                        &nbsp;&nbsp;1&nbsp;&nbsp;Quê hương là
                                        chùm khế ngọt
                                        <br />
                                        &nbsp;&nbsp;2&nbsp;&nbsp;Cho con trèo
                                        hái mỗi ngày
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-bold text-blue-300 border-l-4 border-blue-500 pl-3">
                                    Sức mạnh thật sự: Ghi & Nối file
                                </h4>
                                <div className="bg-black p-4 rounded-xl border border-slate-800 font-mono text-sm space-y-2">
                                    <div className="text-slate-500">
                                        # Ghép 3 file log thành 1 file mới
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            cat log1 log2 log3{" "}
                                            <strong className="text-orange-400">
                                                &gt;
                                            </strong>{" "}
                                            all_logs.txt
                                        </span>
                                    </div>

                                    <div className="text-slate-500 mt-4">
                                        # Ghi nội dung nhiều dòng (Here
                                        Document)
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            cat{" "}
                                            <strong className="text-orange-400">
                                                &gt;
                                            </strong>{" "}
                                            config.txt{" "}
                                            <strong className="text-blue-400">
                                                &lt;&lt; 'EOF'
                                            </strong>
                                        </span>
                                    </div>
                                    <div className="text-slate-300">
                                        server=localhost
                                        <br />
                                        port=8080
                                    </div>
                                    <div className="text-blue-400">EOF</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: LESS is MORE */}
                <section className="space-y-6 pt-6">
                    <div className="bg-gradient-to-br from-green-900/20 to-slate-900 p-6 md:p-8 rounded-3xl border border-green-500/30">
                        <h3 className="text-2xl font-bold text-green-400 flex items-center gap-3 mb-6">
                            <ScrollText size={28} /> Lệnh <code>less</code> (Xem
                            file dài chuyên nghiệp) ⭐
                        </h3>

                        <p className="text-slate-300 text-lg mb-6">
                            Khi file log lên tới hàng GB, lệnh <code>cat</code>{" "}
                            có thể làm treo máy vì tải toàn bộ vào RAM.{" "}
                            <code>less</code> giải quyết việc này bằng cách{" "}
                            <strong>chỉ tải từng trang màn hình</strong>, cho
                            phép bạn cuộn và tìm kiếm siêu nhanh.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 shadow-inner">
                                <h4 className="font-bold text-slate-300 mb-4 uppercase tracking-widest text-xs border-b border-slate-800 pb-2">
                                    Phím tắt "Sinh Tồn" trong less
                                </h4>
                                <ul className="space-y-3 font-mono text-sm">
                                    <li className="flex justify-between items-center">
                                        <span className="text-rose-400 font-bold bg-rose-500/10 px-2 py-0.5 rounded">
                                            q
                                        </span>{" "}
                                        <span className="text-slate-400">
                                            Thoát khỏi less (Quan trọng!)
                                        </span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="text-green-400 bg-green-500/10 px-2 py-0.5 rounded">
                                            Space / f
                                        </span>{" "}
                                        <span className="text-slate-400">
                                            Cuộn xuống 1 trang
                                        </span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="text-green-400 bg-green-500/10 px-2 py-0.5 rounded">
                                            b
                                        </span>{" "}
                                        <span className="text-slate-400">
                                            Cuộn lên 1 trang
                                        </span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                                            g
                                        </span>{" "}
                                        <span className="text-slate-400">
                                            Lên đỉnh file
                                        </span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                                            G
                                        </span>{" "}
                                        <span className="text-slate-400">
                                            Xuống đáy file
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 shadow-inner">
                                <h4 className="font-bold text-slate-300 mb-4 uppercase tracking-widest text-xs border-b border-slate-800 pb-2 flex items-center gap-2">
                                    <Search size={14} /> Tìm kiếm trong less
                                </h4>
                                <ul className="space-y-3 font-mono text-sm">
                                    <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                                        <span className="text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded">
                                            /ERROR
                                        </span>{" "}
                                        <span className="text-slate-400">
                                            Tìm từ "ERROR" (Tìm xuôi)
                                        </span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                                        <span className="text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded">
                                            ?WARN
                                        </span>{" "}
                                        <span className="text-slate-400">
                                            Tìm từ "WARN" (Tìm ngược)
                                        </span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded">
                                            n
                                        </span>{" "}
                                        <span className="text-slate-400">
                                            Kết quả tiếp theo
                                        </span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded">
                                            N
                                        </span>{" "}
                                        <span className="text-slate-400">
                                            Kết quả trước đó
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6 bg-slate-800/80 p-4 rounded-xl text-sm text-slate-300 flex items-start gap-3">
                            <Info
                                className="text-green-400 shrink-0 mt-0.5"
                                size={18}
                            />
                            <div>
                                <strong>
                                    Lệnh <code>more</code> thì sao?
                                </strong>{" "}
                                <code>more</code> là thế hệ cũ của{" "}
                                <code>less</code>, nó chỉ cho phép cuộn xuống
                                chứ không cuộn ngược lên được. Do đó có câu nói
                                đùa: <em>"less is more"</em> (Lệnh less mạnh hơn
                                cả lệnh more). Ngày nay, hãy luôn dùng{" "}
                                <code>less</code> nhé!
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: HEAD & TAIL */}
                <section className="space-y-6 pt-6">
                    <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                            <span className="bg-slate-800 text-orange-400 p-2 rounded-lg font-mono">
                                head
                            </span>
                            <span className="text-slate-400">&</span>
                            <span className="bg-slate-800 text-rose-400 p-2 rounded-lg font-mono">
                                tail
                            </span>
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* HEAD */}
                        <div className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
                            <h4 className="text-orange-400 font-bold mb-4 flex items-center gap-2 text-xl">
                                <ArrowUpToLine size={24} /> <code>head</code>{" "}
                                (Đầu file)
                            </h4>
                            <p className="text-sm text-slate-300 mb-6">
                                Mặc định in ra <strong>10 dòng đầu tiên</strong>{" "}
                                của file. Cực kỳ tiện khi cần xem cấu trúc
                                Header của file CSV hoặc thông tin version ở đầu
                                script.
                            </p>

                            <div className="bg-black p-4 rounded-xl font-mono text-sm space-y-2 border border-slate-800">
                                <div className="text-green-400">
                                    ${" "}
                                    <span className="text-white">
                                        head -n 3 data.csv
                                    </span>
                                </div>
                                <div className="text-slate-400">
                                    <span className="text-orange-300 bg-orange-500/10 block px-1">
                                        id,name,email,role
                                    </span>
                                    <span className="text-orange-300 bg-orange-500/10 block px-1 mt-0.5">
                                        1,Alice,alice@abc,admin
                                    </span>
                                    <span className="text-orange-300 bg-orange-500/10 block px-1 mt-0.5">
                                        2,Bob,bob@abc,user
                                    </span>
                                </div>
                                <div className="text-slate-600 italic text-xs mt-2">
                                    ... (bỏ qua hàng ngàn dòng sau)
                                </div>
                            </div>
                        </div>

                        {/* TAIL */}
                        <div className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700 relative overflow-hidden">
                            <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-r from-rose-500 to-pink-500"></div>
                            <h4 className="text-rose-400 font-bold mb-4 flex items-center gap-2 text-xl">
                                <ArrowDownToLine size={24} /> <code>tail</code>{" "}
                                (Đuôi file)
                            </h4>
                            <p className="text-sm text-slate-300 mb-6">
                                Mặc định in ra{" "}
                                <strong>10 dòng cuối cùng</strong> của file.
                                Được sử dụng nhiều nhất để kiểm tra xem hệ thống
                                vừa mới ghi nhận lỗi (log) gì.
                            </p>

                            <div className="bg-black p-4 rounded-xl font-mono text-sm space-y-2 border border-slate-800">
                                <div className="text-slate-600 italic text-xs mb-2">
                                    ... (bỏ qua hàng ngàn dòng trước)
                                </div>
                                <div className="text-green-400">
                                    ${" "}
                                    <span className="text-white">
                                        tail -n 2 system.log
                                    </span>
                                </div>
                                <div className="text-slate-400">
                                    <span className="text-rose-300 bg-rose-500/10 block px-1">
                                        2026-02-18 17:30 WARN Disk at 78%
                                    </span>
                                    <span className="text-rose-300 bg-rose-500/10 block px-1 mt-0.5">
                                        2026-02-18 23:59 INFO System OK
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 5: TAIL -F Simulator */}
                <section className="space-y-6 pt-6">
                    <div className="bg-gradient-to-r from-rose-900/30 via-slate-900 to-slate-900 border border-rose-500/30 p-6 md:p-8 rounded-3xl">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-rose-400 flex items-center gap-2 mb-2">
                                    <Activity
                                        size={28}
                                        className="animate-pulse"
                                    />{" "}
                                    Tính năng "Phép thuật": <code>tail -f</code>
                                </h3>
                                <p className="text-slate-300">
                                    Tùy chọn <code>-f</code> (follow) biến
                                    Terminal của bạn thành màn hình giám sát{" "}
                                    <strong>Real-time</strong>. Ngay khi có bất
                                    kỳ dòng log nào được ghi thêm vào file, nó
                                    sẽ tự động nảy lên màn hình!
                                </p>
                            </div>
                        </div>

                        {/* THE TAIL F SIMULATOR */}
                        <TailFSimulator />
                    </div>
                </section>

                {/* Section 6: PIPES */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-slate-800 text-purple-400 p-2 rounded-lg font-mono">
                            |
                        </span>
                        Kết hợp lệnh với Đường Ống (Pipe)
                    </h3>

                    <div className="bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                        <p className="text-slate-300 text-lg mb-8 text-center">
                            Ký tự Pipe (<code>|</code>) lấy đầu ra (output) của
                            lệnh đứng trước làm đầu vào (input) cho lệnh đứng
                            sau. Đây là linh hồn của dòng lệnh Linux!
                        </p>

                        <div className="space-y-8 max-w-3xl mx-auto">
                            {/* Pipe Example 1 */}
                            <div className="relative">
                                <div className="flex flex-col md:flex-row items-center gap-4 bg-slate-900 p-4 rounded-2xl border border-slate-700 font-mono text-sm">
                                    <div className="bg-blue-500/20 text-blue-300 px-4 py-3 rounded-xl border border-blue-500/30 w-full md:w-auto text-center">
                                        cat system.log
                                    </div>
                                    <div className="text-purple-400 font-bold text-2xl flex items-center gap-2">
                                        <span className="hidden md:inline">
                                            <ArrowRight />
                                        </span>
                                        <span>|</span>
                                        <span className="hidden md:inline">
                                            <ArrowRight />
                                        </span>
                                    </div>
                                    <div className="bg-orange-500/20 text-orange-300 px-4 py-3 rounded-xl border border-orange-500/30 w-full md:w-auto text-center">
                                        grep "ERROR"
                                    </div>
                                </div>
                                <div className="text-center text-slate-400 text-sm mt-3 font-medium">
                                    Đọc toàn bộ file log, nhưng{" "}
                                    <strong className="text-orange-400">
                                        chỉ giữ lại
                                    </strong>{" "}
                                    (lọc) những dòng có chữ "ERROR".
                                </div>
                            </div>

                            {/* Pipe Example 2 */}
                            <div className="relative">
                                <div className="flex flex-col md:flex-row items-center gap-4 bg-slate-900 p-4 rounded-2xl border border-slate-700 font-mono text-sm">
                                    <div className="bg-blue-500/20 text-blue-300 px-4 py-3 rounded-xl border border-blue-500/30 w-full md:w-auto text-center">
                                        head -n 10 file.txt
                                    </div>
                                    <div className="text-purple-400 font-bold text-2xl flex items-center gap-2">
                                        <span className="hidden md:inline">
                                            <ArrowRight />
                                        </span>
                                        <span>|</span>
                                        <span className="hidden md:inline">
                                            <ArrowRight />
                                        </span>
                                    </div>
                                    <div className="bg-rose-500/20 text-rose-300 px-4 py-3 rounded-xl border border-rose-500/30 w-full md:w-auto text-center">
                                        tail -n 1
                                    </div>
                                </div>
                                <div className="text-center text-slate-400 text-sm mt-3 font-medium">
                                    Lấy 10 dòng đầu, sau đó trong 10 dòng đó chỉ
                                    lấy 1 dòng cuối cùng. <br />
                                    👉 Kết quả:{" "}
                                    <strong>
                                        Lấy chính xác dòng thứ 10 của file!
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 7: Quiz */}
                <section className="space-y-6 pt-8">
                    <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-xl">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-yellow-500/20 text-yellow-500 p-2 rounded-lg">
                                    6
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
                        Bạn đã biết cách "đọc" dữ liệu. Đã đến lúc học cách "tìm
                        kiếm" dữ liệu trong hàng vạn file!
                    </p>
                    <button className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
                        Bài 2.5 — Tìm kiếm file & nội dung (find, grep){" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

// --- Sub Components ---

function CommandCard({ cmd, desc, icon, color }) {
    const colorMap = {
        blue: "border-blue-500/30 bg-blue-500/5 text-blue-400",
        green: "border-green-500/30 bg-green-500/5 text-green-400",
        slate: "border-slate-500/30 bg-slate-500/5 text-slate-400",
        orange: "border-orange-500/30 bg-orange-500/5 text-orange-400",
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

// --- Tail F Simulator ---
function TailFSimulator() {
    const initialLogs = [
        { time: "08:00:01", level: "INFO", msg: "System started successfully" },
        { time: "08:00:05", level: "INFO", msg: "Loading configuration..." },
        {
            time: "08:00:10",
            level: "INFO",
            msg: "Database connected on port 5432",
        },
        {
            time: "09:15:23",
            level: "WARN",
            msg: "High memory usage detected: 85%",
        },
        {
            time: "10:30:45",
            level: "ERROR",
            msg: "Failed to connect to backup server",
        },
        {
            time: "10:31:00",
            level: "WARN",
            msg: "Running without backup functionality",
        },
    ];

    const futureLogs = [
        { level: "INFO", msg: "User admin authenticated via SSH" },
        { level: "INFO", msg: "Processing incoming web request GET /api/data" },
        { level: "ERROR", msg: "Timeout exception in database query" },
        { level: "INFO", msg: "Restarting worker process #1024" },
        { level: "WARN", msg: "Disk space on /var/log reaching 90% capacity" },
        { level: "INFO", msg: "Routine health check passed" },
        {
            level: "ERROR",
            msg: "Connection refused by external payment gateway",
        },
        { level: "INFO", msg: "Cleaning up temporary files in /tmp" },
    ];

    const [logs, setLogs] = useState(initialLogs);
    const [isFollowing, setIsFollowing] = useState(false);
    const [filterError, setFilterError] = useState(false);
    const scrollRef = useRef(null);
    const intervalRef = useRef(null);

    const getLogColor = (level) => {
        switch (level) {
            case "INFO":
                return "text-cyan-400";
            case "WARN":
                return "text-yellow-400";
            case "ERROR":
                return "text-rose-500 font-bold";
            default:
                return "text-slate-300";
        }
    };

    const startTailF = () => {
        setIsFollowing(true);
        let index = 0;
        intervalRef.current = setInterval(() => {
            const now = new Date();
            const timeString = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;

            const newLog = {
                time: timeString,
                level: futureLogs[index % futureLogs.length].level,
                msg: futureLogs[index % futureLogs.length].msg,
            };

            setLogs((prev) => [...prev, newLog]);
            index++;
        }, 1500); // Add log every 1.5 seconds
    };

    const stopTailF = () => {
        setIsFollowing(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const clearLogs = () => {
        setLogs(initialLogs);
    };

    // Auto scroll to bottom when following
    useEffect(() => {
        if (isFollowing && scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [logs, isFollowing]);

    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const displayedLogs = filterError
        ? logs.filter((l) => l.level === "ERROR")
        : logs;

    return (
        <div className="flex flex-col md:flex-row gap-6">
            {/* Controls */}
            <div className="flex flex-col gap-3 md:w-64">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                        Bảng Điều Khiển
                    </div>

                    {!isFollowing ? (
                        <button
                            onClick={startTailF}
                            className="w-full bg-rose-600 hover:bg-rose-500 text-white font-mono text-sm py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                        >
                            <PlayCircle size={16} /> Gõ: tail -f system.log
                        </button>
                    ) : (
                        <button
                            onClick={stopTailF}
                            className="w-full bg-slate-700 hover:bg-slate-600 text-white font-mono text-sm py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                        >
                            Nhấn Ctrl + C (Dừng)
                        </button>
                    )}

                    <div className="h-px bg-slate-800 my-2"></div>

                    <button
                        onClick={() => setFilterError(!filterError)}
                        className={`w-full font-mono text-sm py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors border ${filterError ? "bg-rose-500/20 border-rose-500/50 text-rose-400" : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"}`}
                    >
                        <Filter size={16} />{" "}
                        {filterError ? "Bỏ lọc" : '| grep "ERROR"'}
                    </button>

                    <button
                        onClick={clearLogs}
                        className="w-full bg-slate-800 hover:bg-slate-700 text-slate-400 font-mono text-sm py-2 px-4 rounded-lg transition-colors mt-2"
                    >
                        Làm lại từ đầu
                    </button>
                </div>

                {isFollowing && (
                    <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl text-green-400 text-sm animate-pulse flex items-center gap-2">
                        <Activity size={18} /> Đang lắng nghe file...
                    </div>
                )}
            </div>

            {/* Terminal View */}
            <div className="flex-1 bg-[#1e1e1e] rounded-xl border-2 border-slate-700 shadow-2xl overflow-hidden font-mono text-sm flex flex-col h-[350px]">
                <div className="bg-[#323232] px-4 py-2 flex items-center justify-between border-b border-black/50 select-none">
                    <div className="text-slate-300 text-xs">
                        {filterError
                            ? 'tail -f system.log | grep "ERROR"'
                            : "tail -f system.log"}
                    </div>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="p-4 flex-1 overflow-y-auto custom-scrollbar"
                >
                    <div className="space-y-1">
                        {displayedLogs.map((log, i) => (
                            <div
                                key={i}
                                className="flex gap-3 hover:bg-white/5 px-1 rounded transition-colors"
                            >
                                <span className="text-slate-500 shrink-0">
                                    2026-02-18 {log.time}
                                </span>
                                <span
                                    className={`w-12 shrink-0 ${getLogColor(log.level)}`}
                                >
                                    {log.level}
                                </span>
                                <span className="text-slate-300 break-words">
                                    {log.msg}
                                </span>
                            </div>
                        ))}
                    </div>
                    {isFollowing && (
                        <div className="mt-2 text-slate-500">
                            <span className="animate-pulse">_</span>
                        </div>
                    )}
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
            "Tình huống: Bạn cần đọc một file log cấu hình Nginx dài khoảng 2000 dòng. Lệnh nào là LỰA CHỌN TỐT NHẤT để xem file này?",
        options: ["cat", "less", "more", "tail"],
        correct: 1,
        explanation:
            "less là công cụ tối ưu nhất cho file dài. Nó cho phép cuộn lên/xuống mượt mà, hỗ trợ tìm kiếm (/text) và không load toàn bộ file vào RAM làm treo máy như cat.",
    },
    {
        id: 2,
        question:
            "Đang xem file bằng lệnh `less`, bạn muốn TÌM KIẾM một từ khóa có tên là 'database'. Bạn sẽ nhấn phím gì?",
        options: [
            "Nhấn phím F, sau đó gõ database",
            "Nhấn phím /, sau đó gõ database và Enter",
            "Nhấn phím Ctrl + F",
            "Gõ trực tiếp chữ database",
        ],
        correct: 1,
        explanation:
            "Trong less (và cả trong vi/vim), phím gạch chéo (/) dùng để tìm kiếm xuôi xuống dưới. Nhấn 'n' để xem kết quả tiếp theo.",
    },
    {
        id: 3,
        question:
            "Để theo dõi Real-time (thời gian thực) một file log web server đang hoạt động, lệnh nào luôn được các Sysadmin sử dụng?",
        options: [
            "cat -f access.log",
            "less access.log",
            "tail -f access.log",
            "head realtime access.log",
        ],
        correct: 2,
        explanation:
            "Cờ -f (follow) của lệnh tail sẽ neo Terminal ở cuối file và tự động in ra màn hình bất cứ dòng text nào mới được ghi vào file.",
    },
    {
        id: 4,
        question: "Công dụng của ký hiệu Pipe `|` trong Linux là gì?",
        options: [
            "Để nối 2 file thành 1 file.",
            "Lấy Output (đầu ra) của lệnh bên trái làm Input (đầu vào) cho lệnh bên phải.",
            "Là dấu 'hoặc' (OR) trong lệnh điều kiện.",
            "Để xóa trắng file.",
        ],
        correct: 1,
        explanation:
            "Pipe `|` giống như một đường ống nước. Ví dụ: `cat file.txt | head -n 5` nghĩa là 'đọc file.txt, lấy dữ liệu đó ném sang cho lệnh head để cắt lấy 5 dòng đầu'.",
    },
    {
        id: 5,
        question:
            "Làm cách nào để kết hợp các lệnh và lấy CHÍNH XÁC dòng thứ 15 của file 'danhsach.txt'?",
        options: [
            "cat -n 15 danhsach.txt",
            "head -n 15 danhsach.txt | tail -n 1",
            "tail -n 15 danhsach.txt | head -n 1",
            "less 15 danhsach.txt",
        ],
        correct: 1,
        explanation:
            "Đầu tiên, `head -n 15` cắt lấy 15 dòng đầu (từ 1 đến 15). Sau đó Pipe qua `tail -n 1` để trong 15 dòng đó, cắt lấy đúng 1 dòng ở dưới cùng. Đó chính là dòng 15!",
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
                    <strong className="text-cyan-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu hỏi Xem nội dung File.
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
                <span className="text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
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
