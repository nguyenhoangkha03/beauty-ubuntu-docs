import React, { useState, useRef, useEffect } from "react";
import {
    Search,
    FolderSearch,
    FileSearch,
    Zap,
    Filter,
    AlignLeft,
    TerminalSquare,
    CheckCircle2,
    ChevronRight,
    PlayCircle,
    Info,
    AlertTriangle,
    Database,
    Clock,
    FileCode2,
    Crosshair,
    ArrowRight,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-amber-500 selection:text-slate-900 pb-20">
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
                            Bài trước: 2.4
                        </span>
                        <div className="text-sm font-medium text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                            Phần 2.5
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                {/* Title Section */}
                <div className="text-center space-y-4 py-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        <span className="text-amber-400 font-mono tracking-tighter">
                            Tìm kiếm
                        </span>{" "}
                        File & Nội dung
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Hệ thống có hàng triệu file? Không thành vấn đề. Hãy học
                        cách "mò kim đáy bể" trong chớp mắt với 3 siêu công cụ:{" "}
                        <code>find</code>, <code>locate</code>, và{" "}
                        <code>grep</code>.
                    </p>
                </div>

                {/* Section 1: The Big Three */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                        <span className="bg-amber-500/20 text-amber-400 p-2 rounded-lg">
                            1
                        </span>
                        Bộ ba Công cụ Tìm kiếm
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-slate-800/50 p-6 rounded-2xl border border-orange-500/30 hover:bg-slate-800 transition-colors">
                            <FolderSearch
                                className="text-orange-400 mb-4"
                                size={32}
                            />
                            <h4 className="text-xl font-bold text-white mb-2 font-mono">
                                find
                            </h4>
                            <p className="text-sm text-slate-300 mb-4">
                                Tìm <strong>FILE</strong> trực tiếp trên ổ cứng.
                                Chậm nhưng cực kỳ mạnh mẽ (theo tên, dung lượng,
                                ngày, quyền...). Có thể thực thi lệnh ngay trên
                                file tìm được.
                            </p>
                        </div>

                        <div className="bg-slate-800/50 p-6 rounded-2xl border border-blue-500/30 hover:bg-slate-800 transition-colors">
                            <Zap className="text-blue-400 mb-4" size={32} />
                            <h4 className="text-xl font-bold text-white mb-2 font-mono">
                                locate
                            </h4>
                            <p className="text-sm text-slate-300 mb-4">
                                Tìm <strong>FILE</strong> trong cơ sở dữ liệu
                                (Database). Nhanh như chớp mắt nhưng độ chính
                                xác phụ thuộc vào lần cập nhật DB gần nhất.
                            </p>
                        </div>

                        <div className="bg-slate-800/50 p-6 rounded-2xl border border-green-500/30 hover:bg-slate-800 transition-colors relative overflow-hidden">
                            <div className="absolute -right-4 -top-4 text-green-500/10 rotate-12">
                                <Search size={100} />
                            </div>
                            <FileSearch
                                className="text-green-400 mb-4 relative z-10"
                                size={32}
                            />
                            <h4 className="text-xl font-bold text-white mb-2 font-mono relative z-10">
                                grep ⭐
                            </h4>
                            <p className="text-sm text-slate-300 mb-4 relative z-10">
                                Tìm <strong>NỘI DUNG</strong> (Text) bên trong
                                file. Lệnh được sử dụng nhiều nhất hàng ngày để
                                lọc log, tìm code, phân tích dữ liệu.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 2: FIND */}
                <section className="space-y-6 pt-6">
                    <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                            <span className="bg-slate-800 text-orange-400 p-2 rounded-lg font-mono">
                                find
                            </span>
                            Tìm kiếm File toàn năng
                        </h3>
                    </div>

                    <div className="bg-gradient-to-br from-orange-900/20 to-slate-900 p-6 md:p-8 rounded-3xl border border-orange-500/20">
                        <p className="text-slate-300 mb-6">
                            Cú pháp:{" "}
                            <code className="bg-black px-2 py-1 rounded text-orange-400">
                                find [nơi_tìm] [điều_kiện] [hành_động]
                            </code>
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-sm">
                                    <div className="text-slate-500 mb-1">
                                        # Theo Tên (-name, -iname)
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            find . -name "*.py"
                                        </span>
                                    </div>
                                    <div className="text-slate-400 text-xs font-sans mt-1">
                                        Tìm tất cả file kết thúc bằng .py trong
                                        thư mục hiện tại.
                                    </div>
                                </div>

                                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-sm">
                                    <div className="text-slate-500 mb-1">
                                        # Theo Loại (-type f/d)
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            find /var/log -type d
                                        </span>
                                    </div>
                                    <div className="text-slate-400 text-xs font-sans mt-1">
                                        Chỉ tìm thư mục (directory) trong
                                        /var/log.
                                    </div>
                                </div>

                                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-sm">
                                    <div className="text-slate-500 mb-1">
                                        # Theo Dung lượng (-size)
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            find / -type f -size +1G
                                        </span>
                                    </div>
                                    <div className="text-slate-400 text-xs font-sans mt-1">
                                        Tìm các file lớn hơn 1GB trên toàn hệ
                                        thống (+ là lớn hơn, - là nhỏ hơn).
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-sm">
                                    <div className="text-slate-500 mb-1">
                                        # Theo Thời gian (-mtime, -mmin)
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            find . -type f -mmin -60
                                        </span>
                                    </div>
                                    <div className="text-slate-400 text-xs font-sans mt-1">
                                        Tìm file được sửa đổi trong vòng 60 phút
                                        qua (-mtime là tính theo ngày).
                                    </div>
                                </div>

                                <div className="bg-orange-500/10 p-4 rounded-xl border border-orange-500/30 font-mono text-sm">
                                    <div className="text-orange-300 font-bold font-sans flex items-center gap-2 mb-2">
                                        <Zap size={16} /> Sức mạnh: Thực thi
                                        lệnh (-exec)
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            find . -name "*.tmp" -exec rm -i
                                            &#123;&#125; \;
                                        </span>
                                    </div>
                                    <div className="text-orange-200/80 text-xs font-sans mt-2">
                                        Tìm tất cả file .tmp và thực thi lệnh{" "}
                                        <code>rm -i</code> lên từng file đó. Ký
                                        hiệu <code>&#123;&#125;</code> đại diện
                                        cho tên file tìm được.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: LOCATE */}
                <section className="space-y-6 pt-6">
                    <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                            <span className="bg-slate-800 text-blue-400 p-2 rounded-lg font-mono">
                                locate
                            </span>
                            Tìm kiếm siêu tốc
                        </h3>
                    </div>

                    <div className="bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700 flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 space-y-4">
                            <p className="text-slate-300">
                                Nếu bạn chỉ nhớ mang máng tên file và muốn tìm
                                nó trên toàn bộ máy tính NGAY LẬP TỨC, hãy dùng{" "}
                                <code>locate</code>. Nó không đi quét ổ cứng, mà
                                chỉ việc "tra từ điển" (Database).
                            </p>
                            <div className="bg-black p-4 rounded-xl font-mono text-sm space-y-3 border border-slate-800">
                                <div>
                                    <div className="text-slate-500">
                                        # 1. Cập nhật Database (Cần Sudo)
                                    </div>
                                    <span className="text-green-400">$</span>{" "}
                                    <span className="text-white">
                                        sudo updatedb
                                    </span>
                                </div>
                                <div>
                                    <div className="text-slate-500">
                                        # 2. Tìm kiếm (chớp mắt là ra)
                                    </div>
                                    <span className="text-green-400">$</span>{" "}
                                    <span className="text-white">
                                        locate nginx.conf
                                    </span>
                                    <br />
                                    <span className="text-slate-300">
                                        /etc/nginx/nginx.conf
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 flex justify-center">
                            <div className="relative text-center">
                                <Database
                                    size={80}
                                    className="text-blue-400 mx-auto mb-2 opacity-50"
                                />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <Search size={40} className="text-white" />
                                </div>
                                <div className="text-xs font-bold text-blue-400 mt-2">
                                    mlocate.db
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: GREP & Visual Grep Simulator */}
                <section className="space-y-6 pt-6">
                    <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                            <span className="bg-slate-800 text-green-400 p-2 rounded-lg font-mono">
                                grep
                            </span>
                            Lọc & Tìm Nội Dung (Bá chủ Terminal)
                        </h3>
                    </div>

                    <div className="bg-gradient-to-r from-green-900/20 to-slate-900 border border-green-500/20 rounded-3xl p-6 md:p-8">
                        <p className="text-slate-300 mb-6 text-lg">
                            <code>grep</code> (Global Regular Expression Print)
                            là lệnh bạn sẽ gõ nhiều nhất. Bất kể là tìm chữ
                            "ERROR" trong một file log khổng lồ, hay tìm cấu
                            hình "port" trong thư mục, <code>grep</code> đều làm
                            xuất sắc.
                        </p>

                        {/* VISUAL GREP SIMULATOR */}
                        <VisualGrepSimulator />
                    </div>
                </section>

                {/* Section 5: COMBOS (Pipes) */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-yellow-500/20 text-yellow-400 p-2 rounded-lg">
                            ✨
                        </span>
                        Combos Thần Thánh (Pipes + Grep)
                    </h3>
                    <div className="bg-slate-800/50 rounded-3xl border border-slate-700 p-6 md:p-8">
                        <p className="text-slate-300 mb-6">
                            Kết hợp <code>grep</code> với lệnh khác qua đường
                            ống (<code>|</code>) tạo ra những lệnh cực kỳ lợi
                            hại:
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">
                            <div className="bg-black p-4 rounded-xl border border-slate-800">
                                <div className="text-slate-500 mb-2">
                                    # Tìm process có chữ 'python' đang chạy
                                </div>
                                <div className="text-green-400">
                                    ${" "}
                                    <span className="text-white">
                                        ps aux | grep "python"
                                    </span>
                                </div>
                            </div>
                            <div className="bg-black p-4 rounded-xl border border-slate-800">
                                <div className="text-slate-500 mb-2">
                                    # Tìm IP truy cập nhiều nhất trong Access
                                    Log
                                </div>
                                <div className="text-green-400">
                                    ${" "}
                                    <span className="text-white">
                                        cat access.log | grep -oE "^[0-9\.]+" |
                                        sort | uniq -c
                                    </span>
                                </div>
                            </div>
                            <div className="bg-black p-4 rounded-xl border border-slate-800">
                                <div className="text-slate-500 mb-2">
                                    # Lọc Real-time log chỉ lấy lỗi ERROR
                                </div>
                                <div className="text-green-400">
                                    ${" "}
                                    <span className="text-white">
                                        tail -f syslog | grep "ERROR"
                                    </span>
                                </div>
                            </div>
                            <div className="bg-black p-4 rounded-xl border border-slate-800">
                                <div className="text-slate-500 mb-2">
                                    # Tìm tất cả file Python và đếm số TODO
                                </div>
                                <div className="text-green-400">
                                    ${" "}
                                    <span className="text-white">
                                        find . -name "*.py" | xargs grep -c
                                        "TODO"
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 6: Terminal Simulator */}
                <section className="space-y-6 pt-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                <span className="bg-teal-500/20 text-teal-400 p-2 rounded-lg">
                                    💻
                                </span>
                                Thực hành Terminal
                            </h3>
                            <p className="text-slate-400 mt-2">
                                Bấm các nút bên dưới để xem cách{" "}
                                <code>find</code> và <code>grep</code> thực sự
                                hoạt động trong môi trường giả lập.
                            </p>
                        </div>
                    </div>

                    <TerminalPractice />
                </section>

                {/* Section 7: Quiz */}
                <section className="space-y-6 pt-8">
                    <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-xl">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-amber-500/20 text-amber-500 p-2 rounded-lg">
                                    6
                                </span>
                                Kiểm tra kiến thức Tìm Kiếm
                            </h3>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                {/* Course Progress & Footer */}
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8 text-center mt-12 animate-in fade-in slide-in-from-bottom-4">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-2xl font-bold text-amber-400 mb-4">
                        XUẤT SẮC! BẠN ĐÃ LÀM CHỦ CÁC CÔNG CỤ TÌM KIẾM!
                    </h3>
                    <p className="text-slate-300 mb-6">
                        Bạn không còn phải sợ hãi khi phải mò mẫm trong một hệ
                        thống Linux hàng triệu file nữa.
                    </p>

                    <p className="text-slate-400 mb-6">
                        Bước tiếp theo, chúng ta sẽ học một khái niệm cực kỳ
                        quan trọng khác: Điều hướng luồng dữ liệu.
                    </p>
                    <button className="bg-amber-600 hover:bg-amber-500 text-slate-900 font-bold py-4 px-10 rounded-full inline-flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(217,119,6,0.4)] hover:shadow-[0_0_30px_rgba(217,119,6,0.6)] hover:-translate-y-1">
                        BÀI 2.6 — WILDCARD & REDIRECTION (*, &gt;, |){" "}
                        <ArrowRight size={24} />
                    </button>
                </div>
            </main>
        </div>
    );
}

// --- Sub Components ---

// --- Visual Grep Simulator ---
function VisualGrepSimulator() {
    const rawLogData = [
        "2026-02-18 08:00:01 INFO  System started successfully",
        "2026-02-18 09:15:23 ERROR Null pointer exception in module auth",
        "2026-02-18 10:30:45 ERROR Failed to connect to backup server",
        "2026-02-18 10:30:46 error Retry attempt 1/3 failed",
        "2026-02-18 14:22:33 WARNING High memory usage: 85%",
        "2026-02-18 15:45:10 ERROR Timeout connecting to API",
        "2026-02-18 16:00:00 INFO  Service restarted successfully",
        "2026-02-18 17:30:00 Warning Disk quota exceeded for user alice",
    ];

    const [searchTerm, setSearchTerm] = useState("ERROR");
    const [optI, setOptI] = useState(false);
    const [optV, setOptV] = useState(false);
    const [optN, setOptN] = useState(false);

    // Calculate results
    const filteredLogs = rawLogData
        .map((line, idx) => {
            if (!searchTerm) return { line, idx: idx + 1, match: true };

            let isMatch = false;
            if (optI) {
                isMatch = line.toLowerCase().includes(searchTerm.toLowerCase());
            } else {
                isMatch = line.includes(searchTerm);
            }

            if (optV) isMatch = !isMatch; // Invert

            return { line, idx: idx + 1, match: isMatch };
        })
        .filter((item) => item.match);

    const getHighlightRegex = () => {
        if (!searchTerm || optV) return null; // Don't highlight if inverted
        return new RegExp(`(${searchTerm})`, optI ? "gi" : "g");
    };

    const highlightText = (text, regex) => {
        if (!regex) return text;
        const parts = text.split(regex);
        return parts.map((part, i) => {
            if (regex.test(part)) {
                return (
                    <span
                        key={i}
                        className="bg-rose-500/40 text-white font-bold px-0.5 rounded"
                    >
                        {part}
                    </span>
                );
            }
            return <span key={i}>{part}</span>;
        });
    };

    return (
        <div className="bg-slate-950 border-2 border-green-500/30 rounded-2xl overflow-hidden shadow-2xl">
            {/* Control Panel */}
            <div className="bg-slate-900 p-4 border-b border-slate-800">
                <div className="font-mono flex flex-wrap items-center gap-3">
                    <span className="text-green-400 font-bold text-lg">
                        grep
                    </span>

                    {/* Options Toggles */}
                    <div className="flex gap-2 bg-black rounded-lg p-1 border border-slate-700">
                        <button
                            onClick={() => setOptI(!optI)}
                            className={`px-2 py-1 rounded text-sm transition-colors ${optI ? "bg-green-500 text-black font-bold" : "text-slate-400 hover:text-slate-200"}`}
                            title="-i : Ignore case (Không phân biệt hoa thường)"
                        >
                            -i
                        </button>
                        <button
                            onClick={() => setOptV(!optV)}
                            className={`px-2 py-1 rounded text-sm transition-colors ${optV ? "bg-rose-500 text-white font-bold" : "text-slate-400 hover:text-slate-200"}`}
                            title="-v : Invert match (Lọc BỎ những dòng chứa từ khóa)"
                        >
                            -v
                        </button>
                        <button
                            onClick={() => setOptN(!optN)}
                            className={`px-2 py-1 rounded text-sm transition-colors ${optN ? "bg-blue-500 text-white font-bold" : "text-slate-400 hover:text-slate-200"}`}
                            title="-n : Line number (Hiện số dòng)"
                        >
                            -n
                        </button>
                    </div>

                    <div className="flex-1 min-w-[200px] flex items-center bg-black border border-slate-700 rounded-lg px-3 py-2 focus-within:border-green-500 transition-colors">
                        <span className="text-slate-500 mr-2">"</span>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-transparent outline-none w-full text-white placeholder:text-slate-600"
                            placeholder="Nhập từ khóa cần tìm..."
                        />
                        <span className="text-slate-500 ml-2">"</span>
                    </div>

                    <span className="text-slate-400">server.log</span>
                </div>
            </div>

            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
                {/* Raw File */}
                <div className="p-4 font-mono text-sm">
                    <div className="text-slate-500 mb-3 text-xs uppercase tracking-wider flex justify-between">
                        <span>Nội dung file gốc</span>
                        <span>{rawLogData.length} dòng</span>
                    </div>
                    <div className="space-y-1 opacity-70">
                        {rawLogData.map((line, i) => (
                            <div
                                key={i}
                                className="text-slate-400 whitespace-pre-wrap"
                            >
                                {line}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Output */}
                <div className="p-4 font-mono text-sm bg-black/30">
                    <div className="text-green-400 mb-3 text-xs uppercase tracking-wider flex justify-between">
                        <span>Kết quả Output</span>
                        <span>{filteredLogs.length} dòng</span>
                    </div>
                    <div className="space-y-1 min-h-[160px]">
                        {filteredLogs.length > 0 ? (
                            filteredLogs.map((item, i) => (
                                <div
                                    key={i}
                                    className="text-slate-300 whitespace-pre-wrap"
                                >
                                    {optN && (
                                        <span className="text-blue-400 mr-2">
                                            {item.idx}:
                                        </span>
                                    )}
                                    {highlightText(
                                        item.line,
                                        getHighlightRegex(),
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="text-slate-600 italic h-full flex items-center justify-center">
                                Không có kết quả phù hợp
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// --- Terminal Practice Simulator ---
function TerminalPractice() {
    const [output, setOutput] = useState({ command: "", result: "" });

    const commands = [
        {
            label: "Tìm file Python",
            cmd: 'find . -name "*.py"',
            res: "./projects/app.py\n./projects/utils.py\n./projects/test.py",
        },
        {
            label: "Tìm file > 1MB",
            cmd: "find /var/log -type f -size +1M",
            res: "/var/log/syslog\n/var/log/nginx/access.log",
        },
        {
            label: "Tìm ERROR (grep)",
            cmd: 'grep -n "ERROR" logs/error.log',
            res: "1:2026-02-18 08:00:01 ERROR Database connection failed\n2:2026-02-18 09:15:23 ERROR Null pointer exception in module auth\n3:2026-02-18 10:30:45 ERROR Failed to connect to backup server\n6:2026-02-18 15:45:10 ERROR Timeout connecting to API",
        },
        {
            label: "Tìm chữ trong thư mục (-r)",
            cmd: 'grep -rn "port" configs/',
            res: "configs/app.conf:4:port=5432\nconfigs/app.conf:9:port=8080",
        },
        {
            label: "Chỉ hiện tên file (-l)",
            cmd: 'grep -rl "localhost" .',
            res: "./projects/app.py\n./configs/nginx.conf\n./configs/app.conf",
        },
        {
            label: "Combo: find + grep",
            cmd: 'find . -name "*.py" -exec grep -l "TODO" {} \\;',
            res: "./projects/utils.py\n./projects/app.py",
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
                        <code className="text-xs text-green-400 bg-black px-2 py-1 rounded hidden lg:block">
                            {c.cmd}
                        </code>
                    </button>
                ))}
            </div>

            {/* Terminal Display */}
            <div className="bg-black rounded-2xl border-4 border-slate-800 shadow-2xl overflow-hidden flex flex-col font-mono text-sm">
                <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-2 text-slate-400 text-xs">
                        alice@ubuntu-pc:~/tim_kiem
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
                                    ~/tim_kiem
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

// --- Quiz Component ---
const questions = [
    {
        id: 1,
        question: "Điểm khác biệt LỚN NHẤT giữa lệnh `find` và `locate` là gì?",
        options: [
            "find chỉ tìm được thư mục, locate chỉ tìm được file.",
            "find quét trực tiếp ổ đĩa nên chậm nhưng kết quả luôn chính xác. locate tìm trong CSDL nên rất nhanh nhưng cần chạy 'sudo updatedb' để làm mới CSDL.",
            "find là lệnh của Windows, locate là lệnh của Linux.",
            "Cả hai giống hệt nhau về tốc độ và cách hoạt động.",
        ],
        correct: 1,
        explanation:
            "Đó là lý do locate trả về kết quả trong 0.1 giây, còn find quét toàn bộ hệ thống có thể mất vài phút.",
    },
    {
        id: 2,
        question:
            "Bạn muốn tìm TẤT CẢ các file có đuôi '.py' trong thư mục hiện tại và các thư mục con. Lệnh nào ĐÚNG?",
        options: [
            'find . -name "*.py"',
            'grep "*.py" .',
            "locate .py",
            "find *.py",
        ],
        correct: 0,
        explanation:
            'Cú pháp chuẩn của find là: find [nơi_tìm] -name "[mẫu_tên_file]". Lưu ý luôn đặt dấu * trong ngoặc kép để tránh bị shell tự động mở rộng.',
    },
    {
        id: 3,
        question: "Trong lệnh `grep`, cờ `-i` có tác dụng gì?",
        options: [
            "Hiện số dòng (line number).",
            "Đảo ngược kết quả (lọc bỏ dòng chứa từ khóa).",
            "Không phân biệt chữ hoa, chữ thường (Ignore case).",
            "Chỉ in ra tên file.",
        ],
        correct: 2,
        explanation:
            "Ví dụ `grep -i 'error'` sẽ tìm ra cả 'ERROR', 'Error', và 'error'.",
    },
    {
        id: 4,
        question:
            "Bạn muốn tìm chữ 'localhost' trong TẤT CẢ các file nằm trong thư mục 'configs/' và các thư mục con của nó. Cờ nào của grep giúp tìm đệ quy (recursive)?",
        options: [
            "grep -v 'localhost' configs/",
            "grep -r 'localhost' configs/",
            "grep -l 'localhost' configs/",
            "grep -n 'localhost' configs/",
        ],
        correct: 1,
        explanation:
            "Cờ -r (recursive) bắt grep phải chui vào từng thư mục con bên trong 'configs/' để mở từng file ra đọc.",
    },
    {
        id: 5,
        question:
            "Bạn muốn tìm các file Python (.py) và tự động ĐẾM SỐ LƯỢNG từ 'TODO' trong mỗi file. Lệnh kết hợp nào sau đây sử dụng tính năng thực thi (-exec) của find?",
        options: [
            "find . -name '*.py' -exec grep -c 'TODO' {} \\;",
            "grep 'TODO' *.py",
            "find . -name 'TODO' | grep '.py'",
            "locate TODO | grep py",
        ],
        correct: 0,
        explanation:
            "Cờ -exec của lệnh find cực kỳ bá đạo. Ở đây `{}` đại diện cho tên từng file Python mà find tìm thấy, và nó sẽ ném file đó vào lệnh `grep -c`.",
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
                    <strong className="text-amber-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu hỏi Tìm kiếm.
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
                <span className="text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full">
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
