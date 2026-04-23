import React, { useState, useRef, useEffect } from "react";
import {
    TerminalSquare,
    CheckCircle2,
    ChevronRight,
    Info,
    AlertTriangle,
    Asterisk,
    HelpCircle,
    Brackets,
    Beaker,
    FileOutput,
    FileInput,
    ArrowRight,
    Filter,
    PlayCircle,
    Layers,
    Trash2,
    SplitSquareHorizontal,
    Database,
    Keyboard,
    Monitor,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-purple-500 selection:text-white pb-20">
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
                            Bài trước: 2.5
                        </span>
                        <div className="text-sm font-medium text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/20">
                            Phần 2.6
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                {/* Title Section */}
                <div className="text-center space-y-4 py-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        <span className="text-purple-400 font-mono tracking-tighter">
                            Wildcard & Redirection
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Học cách sử dụng Ký tự đại diện để gom nhóm hàng ngàn
                        file, và Điều hướng luồng dữ liệu (Input/Output/Pipe) để
                        ghép nối các lệnh như những khối Lego!
                    </p>
                </div>

                {/* Section 1: Wildcards */}
                <section className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                            <span className="bg-purple-500/20 text-purple-400 p-2 rounded-lg">
                                1
                            </span>
                            Wildcard — Ký tự Đại diện
                        </h3>
                    </div>

                    <div className="bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                        <p className="text-slate-300 mb-6 text-lg">
                            Thay vì phải gõ tên từng file một, bạn có thể dùng{" "}
                            <strong>Wildcard</strong> (Ký tự đại diện) để nhờ
                            Shell tự động tìm và điền các file khớp với một
                            "mẫu" (pattern) nhất định.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                            <div className="bg-slate-900 p-5 rounded-2xl border border-slate-700 shadow-inner">
                                <Asterisk
                                    className="text-purple-400 mb-3"
                                    size={28}
                                />
                                <h4 className="font-bold text-white text-lg font-mono mb-1">
                                    *
                                </h4>
                                <p className="text-sm text-slate-400">
                                    Khớp với <strong>MỌI</strong> chuỗi ký tự
                                    (kể cả rỗng).
                                </p>
                                <code className="block mt-3 text-xs bg-black p-2 rounded text-green-400 border border-slate-800">
                                    *.txt, file*
                                </code>
                            </div>
                            <div className="bg-slate-900 p-5 rounded-2xl border border-slate-700 shadow-inner">
                                <HelpCircle
                                    className="text-blue-400 mb-3"
                                    size={28}
                                />
                                <h4 className="font-bold text-white text-lg font-mono mb-1">
                                    ?
                                </h4>
                                <p className="text-sm text-slate-400">
                                    Khớp với <strong>ĐÚNG 1</strong> ký tự bất
                                    kỳ.
                                </p>
                                <code className="block mt-3 text-xs bg-black p-2 rounded text-green-400 border border-slate-800">
                                    file?.txt
                                </code>
                            </div>
                            <div className="bg-slate-900 p-5 rounded-2xl border border-slate-700 shadow-inner">
                                <Brackets
                                    className="text-orange-400 mb-3"
                                    size={28}
                                />
                                <h4 className="font-bold text-white text-lg font-mono mb-1">
                                    [abc] / [a-z]
                                </h4>
                                <p className="text-sm text-slate-400">
                                    Khớp với{" "}
                                    <strong>1 ký tự thuộc danh sách</strong>{" "}
                                    hoặc khoảng.
                                </p>
                                <code className="block mt-3 text-xs bg-black p-2 rounded text-green-400 border border-slate-800">
                                    [a-z]*.csv
                                </code>
                            </div>
                            <div className="bg-slate-900 p-5 rounded-2xl border border-slate-700 shadow-inner">
                                <Layers
                                    className="text-rose-400 mb-3"
                                    size={28}
                                />
                                <h4 className="font-bold text-white text-lg font-mono mb-1">
                                    &#123;a,b&#125;
                                </h4>
                                <p className="text-sm text-slate-400">
                                    Mở rộng chuỗi (Brace expansion), tự động
                                    sinh ra text.
                                </p>
                                <code className="block mt-3 text-xs bg-black p-2 rounded text-green-400 border border-slate-800">
                                    &#123;1..5&#125;.txt
                                </code>
                            </div>
                        </div>

                        {/* WILDCARD SIMULATOR */}
                        <WildcardSimulator />
                    </div>
                </section>

                {/* Section 2: Data Streams */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-blue-500/20 text-blue-400 p-2 rounded-lg">
                            2
                        </span>
                        3 Luồng Dữ liệu Cơ bản (Streams)
                    </h3>
                    <p className="text-slate-400 max-w-3xl">
                        Trong Linux, mỗi lệnh khi chạy đều giao tiếp với bên
                        ngoài thông qua 3 "đường ống" (streams) đánh số từ 0 đến
                        2.
                    </p>

                    <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 relative">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 text-center w-48 relative">
                                <div className="absolute -top-3 -right-3 bg-slate-700 w-8 h-8 rounded-full flex items-center justify-center font-bold font-mono">
                                    0
                                </div>
                                <div className="font-bold text-white mb-1">
                                    STDIN
                                </div>
                                <div className="text-xs text-slate-400">
                                    Standard Input
                                </div>
                                <div className="mt-2 text-blue-400">
                                    <Keyboard className="mx-auto" size={24} />
                                </div>
                                <div className="text-[10px] text-slate-500 mt-2">
                                    (Mặc định: Bàn phím)
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <ArrowRight
                                    className="text-slate-500"
                                    size={32}
                                />
                            </div>

                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl border border-slate-500 shadow-2xl text-center w-48 z-10">
                                <div className="font-bold text-white text-xl">
                                    LỆNH
                                </div>
                                <div className="text-xs text-blue-200 mt-1">
                                    (vd: ls, cat, grep)
                                </div>
                            </div>

                            <div className="flex flex-col gap-8 items-center relative">
                                {/* Arrow to STDOUT */}
                                <div className="hidden md:block absolute -left-12 top-[-10px] w-12 h-10 border-t-2 border-r-2 border-slate-500 rounded-tr-lg"></div>
                                <div className="hidden md:block absolute -left-12 bottom-[-10px] w-12 h-10 border-b-2 border-r-2 border-rose-500/50 rounded-br-lg"></div>
                                <ArrowRight
                                    className="md:hidden text-slate-500"
                                    size={32}
                                />
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className="bg-slate-900 p-4 rounded-xl border border-green-500/30 text-center w-48 relative shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                                    <div className="absolute -top-3 -left-3 bg-green-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold font-mono">
                                        1
                                    </div>
                                    <div className="font-bold text-green-400 mb-1">
                                        STDOUT
                                    </div>
                                    <div className="text-xs text-slate-400">
                                        Standard Output
                                    </div>
                                    <div className="mt-2 text-slate-300">
                                        <Monitor
                                            className="mx-auto"
                                            size={24}
                                        />
                                    </div>
                                    <div className="text-[10px] text-slate-500 mt-2">
                                        (Kết quả thành công)
                                    </div>
                                </div>

                                <div className="bg-slate-900 p-4 rounded-xl border border-rose-500/30 text-center w-48 relative shadow-[0_0_15px_rgba(244,63,94,0.1)]">
                                    <div className="absolute -top-3 -left-3 bg-rose-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold font-mono">
                                        2
                                    </div>
                                    <div className="font-bold text-rose-400 mb-1">
                                        STDERR
                                    </div>
                                    <div className="text-xs text-slate-400">
                                        Standard Error
                                    </div>
                                    <div className="mt-2 text-slate-300">
                                        <AlertTriangle
                                            className="mx-auto"
                                            size={24}
                                        />
                                    </div>
                                    <div className="text-[10px] text-slate-500 mt-2">
                                        (Thông báo lỗi)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Redirection (>, >>, <, 2>) */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-orange-500/20 text-orange-400 p-2 rounded-lg">
                            3
                        </span>
                        Redirection — Điều hướng Luồng
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* > (Ghi đè) */}
                        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                            <h4 className="font-mono text-xl font-bold text-orange-400 flex items-center gap-2 mb-3">
                                <FileOutput size={24} /> {">"} (Ghi đè file)
                            </h4>
                            <p className="text-sm text-slate-300 mb-4">
                                Chuyển STDOUT (1) vào file. Nếu file đã tồn tại,
                                nó sẽ <strong>GHI ĐÈ SẠCH SẼ</strong> nội dung
                                cũ!
                            </p>
                            <div className="bg-black p-3 rounded font-mono text-sm text-green-400 border border-slate-800">
                                $ echo "Hello" {">"} test.txt
                                <br />$ ls -la {">"} files_list.txt
                            </div>
                        </div>

                        {/* >> (Thêm) */}
                        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                            <h4 className="font-mono text-xl font-bold text-green-400 flex items-center gap-2 mb-3">
                                <FileOutput size={24} /> {">>"} (Thêm vào cuối)
                            </h4>
                            <p className="text-sm text-slate-300 mb-4">
                                Chuyển STDOUT vào file, nhưng{" "}
                                <strong>THÊM VÀO CUỐI DÒNG</strong> (Append). An
                                toàn hơn khi lưu log.
                            </p>
                            <div className="bg-black p-3 rounded font-mono text-sm text-green-400 border border-slate-800">
                                $ echo "Log mới" {">>"} app.log
                                <br />$ date {">>"} history.txt
                            </div>
                        </div>

                        {/* 2> (Lỗi) */}
                        <div className="bg-slate-800 p-6 rounded-2xl border border-rose-500/30 shadow-[0_0_15px_rgba(244,63,94,0.05)]">
                            <h4 className="font-mono text-xl font-bold text-rose-400 flex items-center gap-2 mb-3">
                                <AlertTriangle size={24} /> 2{">"} (Điều hướng
                                Lỗi)
                            </h4>
                            <p className="text-sm text-slate-300 mb-4">
                                Chỉ chuyển STDERR (2) vào file. Kết quả bình
                                thường (1) vẫn in ra màn hình.
                            </p>
                            <div className="bg-black p-3 rounded font-mono text-sm text-green-400 border border-slate-800">
                                $ ls /bin /fake_dir 2{">"} err.log
                                <br />
                                <span className="text-slate-500">
                                    # Bỏ qua mọi lỗi (Hố đen /dev/null):
                                </span>
                                <br />$ find / -name "*.conf" 2{">"}/dev/null
                            </div>
                        </div>

                        {/* < (Input) */}
                        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                            <h4 className="font-mono text-xl font-bold text-blue-400 flex items-center gap-2 mb-3">
                                <FileInput size={24} /> {"<"} (Lấy Input)
                            </h4>
                            <p className="text-sm text-slate-300 mb-4">
                                Ép lệnh lấy STDIN (0) từ một file thay vì chờ
                                người dùng gõ phím.
                            </p>
                            <div className="bg-black p-3 rounded font-mono text-sm text-green-400 border border-slate-800">
                                $ sort {"<"} list_names.txt
                                <br />$ wc -l {"<"} file.txt
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: PIPES */}
                <section className="space-y-6 pt-6">
                    <div className="bg-gradient-to-r from-purple-900/40 via-slate-900 to-blue-900/20 border border-purple-500/30 p-6 md:p-8 rounded-3xl">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                            <div>
                                <h3 className="text-2xl font-bold text-purple-400 flex items-center gap-2 mb-2">
                                    <SplitSquareHorizontal size={28} /> Đường
                                    ống PIPE ( | )
                                </h3>
                                <p className="text-slate-300">
                                    Lấy Output của lệnh{" "}
                                    <strong>BÊN TRÁI</strong> làm Input cho lệnh{" "}
                                    <strong>BÊN PHẢI</strong>. Đây là tính năng
                                    vĩ đại nhất của Unix/Linux, cho phép bạn
                                    ghép các lệnh nhỏ thành một cỗ máy xử lý dữ
                                    liệu khổng lồ!
                                </p>
                            </div>
                        </div>

                        {/* THE PIPE SIMULATOR */}
                        <PipeSimulator />
                    </div>
                </section>

                {/* Section 5: Quiz */}
                <section className="space-y-6 pt-8">
                    <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-xl">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-yellow-500/20 text-yellow-500 p-2 rounded-lg">
                                    5
                                </span>
                                Kiểm tra kiến thức Wildcard & Redirection
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
                        Bạn đã nắm giữ những sức mạnh cốt lõi nhất của Terminal!
                        Tiếp theo là vài thủ thuật để gõ lệnh nhanh hơn.
                    </p>
                    <button className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-purple-500/20">
                        Bài 2.7 — Lịch sử lệnh & Phím tắt Pro{" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

// --- Sub Components ---

// --- Wildcard Simulator ---
function WildcardSimulator() {
    const [pattern, setPattern] = useState("*.txt");

    const files = [
        "a.txt",
        "b.txt",
        "file1.txt",
        "file2.txt",
        "file10.txt",
        "data_2024.csv",
        "data_2025.csv",
        "report_jan.pdf",
        "report_feb.pdf",
        "script.sh",
        "image.jpg",
        "log.txt",
        "log_old.txt.bak",
    ];

    let error = "";
    let fileStatus = [];

    try {
        let regexStr = (pattern || "")
            .replace(/\./g, "\\.") // escape dots
            .replace(/\*/g, ".*") // * -> .*
            .replace(/\?/g, ".") // ? -> .
            .replace(/\{([^}]+)\}/g, function (match, p1) {
                // {a,b} -> (a|b)
                return "(" + p1.replace(/,/g, "|") + ")";
            });

        const regex = new RegExp("^" + regexStr + "$");
        fileStatus = files.map((f) => ({
            name: f,
            matched: pattern ? regex.test(f) : false,
        }));
    } catch (err) {
        error = "Pattern không hợp lệ!";
        fileStatus = files.map((f) => ({ name: f, matched: false }));
    }

    const matchedCount = fileStatus.filter((f) => f.matched).length;

    return (
        <div className="bg-slate-950 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-slate-900 p-4 border-b border-slate-800 flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-2 font-mono text-green-400 bg-black px-4 py-2 rounded-lg border border-slate-700 flex-1">
                    <span className="text-slate-400">$ ls</span>
                    <input
                        type="text"
                        value={pattern}
                        onChange={(e) => setPattern(e.target.value)}
                        className="bg-transparent border-none outline-none text-white w-full caret-white"
                        placeholder="Nhập wildcard... (vd: *.txt, file?.txt)"
                        spellCheck="false"
                    />
                </div>
                <div className="text-sm font-medium text-slate-400 shrink-0">
                    Kết quả khớp:{" "}
                    <strong className="text-purple-400">{matchedCount}</strong>{" "}
                    / {files.length}
                </div>
            </div>

            {error && (
                <div className="bg-rose-500/20 text-rose-400 text-sm p-2 text-center">
                    {error}
                </div>
            )}

            <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {fileStatus.map((f, i) => (
                        <div
                            key={i}
                            className={`p-3 rounded-xl border flex items-center gap-2 font-mono text-sm transition-all duration-300 ${f.matched ? "bg-purple-500/20 border-purple-500/50 text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.2)]" : "bg-slate-800/50 border-slate-800 text-slate-500 opacity-50"}`}
                        >
                            {f.matched ? (
                                <CheckCircle2
                                    size={16}
                                    className="text-purple-400 shrink-0"
                                />
                            ) : (
                                <div className="w-4 shrink-0"></div>
                            )}
                            <span className="truncate">{f.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-slate-900 p-4 border-t border-slate-800 flex gap-2 overflow-x-auto hide-scrollbar">
                <button
                    onClick={() => setPattern("*.txt")}
                    className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs font-mono rounded text-slate-300 whitespace-nowrap"
                >
                    *.txt
                </button>
                <button
                    onClick={() => setPattern("file?.txt")}
                    className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs font-mono rounded text-slate-300 whitespace-nowrap"
                >
                    file?.txt
                </button>
                <button
                    onClick={() => setPattern("data_*.csv")}
                    className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs font-mono rounded text-slate-300 whitespace-nowrap"
                >
                    data_*.csv
                </button>
                <button
                    onClick={() => setPattern("report_{jan,feb}.pdf")}
                    className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs font-mono rounded text-slate-300 whitespace-nowrap"
                >
                    report_&#123;jan,feb&#125;.pdf
                </button>
            </div>
        </div>
    );
}

// --- Pipe Simulator ---
function PipeSimulator() {
    const initialData = [
        "2026-02-18 08:00 INFO System start",
        "2026-02-18 09:15 ERROR Database connect failed",
        "2026-02-18 10:30 ERROR Timeout API",
        "2026-02-18 11:00 INFO User login",
        "2026-02-18 12:05 WARN Disk 85%",
        "2026-02-18 13:10 ERROR Null pointer exception",
    ];

    const [pipeline, setPipeline] = useState([]);

    // Compute current data through pipeline
    let currentData = [...initialData];

    for (let cmd of pipeline) {
        if (cmd === 'grep "ERROR"') {
            currentData = currentData.filter((line) => line.includes("ERROR"));
        } else if (cmd === "tail -n 2") {
            currentData = currentData.slice(-2);
        } else if (cmd === "wc -l") {
            currentData = [currentData.length.toString()];
        }
    }

    const addCommand = (cmd) => {
        // Prevent adding wc -l multiple times or after wc -l
        if (pipeline.includes("wc -l")) return;
        setPipeline([...pipeline, cmd]);
    };

    const removeLast = () => {
        setPipeline(pipeline.slice(0, -1));
    };

    const reset = () => {
        setPipeline([]);
    };

    return (
        <div className="bg-slate-950 rounded-2xl border border-purple-500/30 shadow-2xl overflow-hidden flex flex-col md:flex-row">
            {/* Left: Input & Pipe Builder */}
            <div className="w-full md:w-1/2 border-r border-slate-800 flex flex-col">
                <div className="bg-slate-900 p-4 border-b border-slate-800">
                    <div className="font-mono text-sm text-slate-400 mb-2">
                        Xây dựng luồng lệnh:
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                        <div className="bg-blue-500/20 text-blue-300 font-mono px-3 py-1.5 rounded-lg border border-blue-500/30 text-sm">
                            cat server.log
                        </div>

                        {pipeline.map((cmd, i) => (
                            <React.Fragment key={i}>
                                <span className="text-purple-500 font-bold">
                                    |
                                </span>
                                <div className="bg-purple-500/20 text-purple-300 font-mono px-3 py-1.5 rounded-lg border border-purple-500/30 text-sm">
                                    {cmd}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="p-4 bg-slate-900/50 flex-1 space-y-3">
                    <div className="text-xs font-bold text-slate-500 uppercase">
                        Thêm lệnh vào ống dẫn:
                    </div>
                    <div className="flex flex-col gap-2">
                        <button
                            onClick={() => addCommand('grep "ERROR"')}
                            disabled={pipeline.includes("wc -l")}
                            className="bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed border border-slate-700 px-4 py-2 rounded-lg text-left font-mono text-sm text-green-400 flex items-center justify-between"
                        >
                            <span>| grep "ERROR"</span>{" "}
                            <span className="text-xs text-slate-400 font-sans">
                                Lọc lấy dòng ERROR
                            </span>
                        </button>
                        <button
                            onClick={() => addCommand("tail -n 2")}
                            disabled={pipeline.includes("wc -l")}
                            className="bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed border border-slate-700 px-4 py-2 rounded-lg text-left font-mono text-sm text-green-400 flex items-center justify-between"
                        >
                            <span>| tail -n 2</span>{" "}
                            <span className="text-xs text-slate-400 font-sans">
                                Lấy 2 dòng cuối
                            </span>
                        </button>
                        <button
                            onClick={() => addCommand("wc -l")}
                            disabled={pipeline.includes("wc -l")}
                            className="bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed border border-slate-700 px-4 py-2 rounded-lg text-left font-mono text-sm text-green-400 flex items-center justify-between"
                        >
                            <span>| wc -l</span>{" "}
                            <span className="text-xs text-slate-400 font-sans">
                                Đếm số dòng (Output cuối)
                            </span>
                        </button>
                    </div>

                    <div className="flex gap-2 mt-4 pt-4 border-t border-slate-800">
                        <button
                            onClick={removeLast}
                            disabled={pipeline.length === 0}
                            className="flex-1 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 px-3 py-2 rounded-lg text-sm text-slate-300"
                        >
                            Xóa bước cuối
                        </button>
                        <button
                            onClick={reset}
                            disabled={pipeline.length === 0}
                            className="flex-1 bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 disabled:opacity-50 px-3 py-2 rounded-lg text-sm border border-rose-500/20"
                        >
                            Làm lại
                        </button>
                    </div>
                </div>
            </div>

            {/* Right: Output Result */}
            <div className="w-full md:w-1/2 flex flex-col bg-black">
                <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700 select-none">
                    <TerminalSquare size={16} className="text-slate-400" />
                    <div className="text-slate-300 text-xs font-bold font-sans">
                        Kết Quả Output (STDOUT)
                    </div>
                </div>
                <div className="p-4 font-mono text-sm text-slate-300 flex-1 overflow-y-auto">
                    {currentData.map((line, i) => {
                        // Highlight ERROR for visual
                        const isError = line.includes("ERROR");
                        return (
                            <div key={i} className="mb-1">
                                {isError && !pipeline.includes("wc -l") ? (
                                    <span className="text-rose-400 font-bold">
                                        {line}
                                    </span>
                                ) : (
                                    <span className="text-green-400 font-bold">
                                        {line}
                                    </span>
                                )}
                            </div>
                        );
                    })}
                    {currentData.length === 0 && (
                        <div className="text-slate-600 italic">
                            Không có dữ liệu...
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
            "Sự khác biệt khi chạy lệnh `echo 'Hello' > file.txt` so với `echo 'Hello' >> file.txt` là gì?",
        options: [
            "> sẽ in ra màn hình, còn >> sẽ không in ra màn hình.",
            "> sẽ xóa sạch nội dung cũ của file trước khi ghi (ghi đè), còn >> sẽ thêm nội dung mới vào cuối file hiện tại.",
            "> dùng cho file text, >> dùng cho file ảnh.",
            "Không có khác biệt, cả hai đều thêm vào cuối file.",
        ],
        correct: 1,
        explanation:
            "Dấu > (Redirect Output) mang tính chất hủy diệt nội dung cũ nếu file đã tồn tại. Để ghi Log an toàn, người ta luôn dùng dấu >> (Append).",
    },
    {
        id: 2,
        question:
            "Bạn muốn xem danh sách các file có đuôi '.csv' bắt đầu bằng chữ 'data_2024'. Cú pháp Wildcard nào chính xác?",
        options: [
            "ls data_2024?.csv",
            "ls data_2024*.csv",
            "ls data_2024[csv]",
            "ls data_2024*.txt",
        ],
        correct: 1,
        explanation:
            "Dấu * đại diện cho MỌI chuỗi ký tự (bao gồm các tháng Q1, Q2, 01, 12...). Dấu ? chỉ đại diện đúng 1 ký tự nên sẽ không khớp nếu tên dài.",
    },
    {
        id: 3,
        question: "Lệnh `ls /thu_muc_ao 2> error.log` sẽ làm gì?",
        options: [
            "Lưu danh sách file vào error.log",
            "Ghi cả kết quả thành công và báo lỗi vào error.log",
            "Chỉ bắt lấy luồng thông báo lỗi (STDERR - số 2) và lưu vào file error.log, không in lỗi ra màn hình.",
            "Xóa file error.log",
        ],
        correct: 2,
        explanation:
            "STDERR (Standard Error) có mã số luồng (file descriptor) là 2. Dùng 2> giúp bạn bắt riêng phần báo lỗi mà không bị lẫn với dữ liệu thành công.",
    },
    {
        id: 4,
        question:
            "Để 'ném' (ẩn) mọi thông báo lỗi khi đang chạy lệnh tìm kiếm bằng `find`, người ta thường thêm đoạn nào vào cuối lệnh?",
        options: ["| hide", "> /dev/null", "2> /dev/null", ">> /dev/null"],
        correct: 2,
        explanation:
            "2> /dev/null nghĩa là chuyển STDERR (luồng số 2) vào thư mục '/dev/null'. Trong Linux, /dev/null giống như một 'hố đen vũ trụ', mọi thứ ném vào đó đều biến mất không để lại dấu vết.",
    },
    {
        id: 5,
        question:
            "Câu lệnh `cat server.log | grep ERROR | wc -l` dùng để làm gì?",
        options: [
            "Xóa tất cả các dòng ERROR trong file.",
            "Đọc file, lọc lấy các dòng có chữ ERROR, sau đó đếm xem tổng cộng có bao nhiêu dòng ERROR.",
            "Tìm file tên là ERROR và đếm số lượng.",
            "Sắp xếp các dòng ERROR theo thứ tự bảng chữ cái.",
        ],
        correct: 1,
        explanation:
            "Đường ống Pipe (|) đã kết hợp 3 lệnh: Đọc dữ liệu (cat) -> Chảy qua bộ lọc (grep) -> Chảy qua bộ đếm (wc). Kết quả cuối cùng là một con số duy nhất báo hiệu số lỗi.",
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
                    <strong className="text-purple-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu hỏi về Wildcard & Pipe.
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
                <span className="text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
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
