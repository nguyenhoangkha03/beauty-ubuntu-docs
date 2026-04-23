import React, { useState, useRef, useEffect } from "react";
import {
    Terminal,
    TerminalSquare,
    Keyboard,
    Command,
    ShieldAlert,
    Zap,
    Clock,
    XOctagon,
    Search,
    ArrowRight,
    BookOpen,
    CheckCircle2,
    AlertTriangle,
    Monitor,
    ChevronRight,
    PlayCircle,
    FileCode2,
    Info,
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
                            Bài trước: 1.5
                        </span>
                        <div className="text-sm font-medium text-green-400 bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                            Phần 2.1
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                {/* Title Section */}
                <div className="text-center space-y-4 py-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        <span className="text-green-500 font-mono tracking-tighter">
                            Terminal
                        </span>{" "}
                        là gì?
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Vũ khí tối thượng của mọi Hacker và Sysadmin. Đã đến lúc
                        rời xa con chuột và bắt đầu "nói chuyện" trực tiếp với
                        hệ thống!
                    </p>
                </div>

                {/* Section 1: Intro & Why */}
                <section className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                        {/* What is it */}
                        <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 relative overflow-hidden group">
                            <TerminalSquare
                                className="absolute -right-6 -bottom-6 text-slate-700/30 group-hover:scale-110 transition-transform"
                                size={150}
                            />
                            <h3 className="text-2xl font-bold text-white mb-6 relative z-10 flex items-center gap-3">
                                <div className="bg-green-500/20 text-green-400 p-2 rounded-xl">
                                    <Command size={24} />
                                </div>
                                Terminal là gì?
                            </h3>
                            <p className="text-slate-300 relative z-10 text-lg leading-relaxed mb-6">
                                Terminal là cửa sổ để giao tiếp với máy tính
                                bằng <strong>ngôn ngữ văn bản (text)</strong>.
                            </p>
                            <div className="relative z-10 bg-slate-900 border border-slate-700 rounded-xl p-5 shadow-inner">
                                <div className="flex items-center gap-4 mb-3 text-sm text-slate-400">
                                    <div className="flex-1 text-center border-b border-slate-700 pb-2">
                                        Giao diện (GUI)
                                    </div>
                                    <div className="flex-1 text-center border-b border-green-500/50 text-green-400 font-bold pb-2">
                                        Terminal (CLI)
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-sm">
                                    <div className="flex-1 text-center">
                                        Click chuột → Tìm App → Click nút
                                    </div>
                                    <div className="flex-1 text-center font-mono bg-black p-2 rounded text-green-400">
                                        1 lệnh → Enter
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Why learn it */}
                        <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 p-8 rounded-3xl border border-green-500/20 relative">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <div className="bg-blue-500/20 text-blue-400 p-2 rounded-xl">
                                    <Zap size={24} />
                                </div>
                                Tại sao phải dùng Terminal?
                            </h3>

                            <div className="space-y-4">
                                <div className="bg-black/40 border border-slate-700 rounded-xl p-4 flex gap-4 items-center">
                                    <div className="text-4xl">⏱️</div>
                                    <div>
                                        <div className="font-bold text-white">
                                            Nhanh gấp 10 lần
                                        </div>
                                        <div className="text-sm text-slate-400">
                                            Cài 5 phần mềm? GUI tốn 10 phút tìm
                                            và click. Terminal mất 10 giây gõ
                                            lệnh.
                                        </div>
                                    </div>
                                </div>
                                <ul className="space-y-3 text-slate-300 text-sm mt-4 pl-2">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2
                                            className="text-green-500"
                                            size={18}
                                        />{" "}
                                        <strong>Tự động hóa:</strong> Viết
                                        script chạy 1000 file 1 lúc.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2
                                            className="text-green-500"
                                            size={18}
                                        />{" "}
                                        <strong>Server:</strong> Ubuntu Server
                                        hoàn toàn không có GUI!
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2
                                            className="text-green-500"
                                            size={18}
                                        />{" "}
                                        <strong>Toàn quyền:</strong> Can thiệp
                                        sâu vào những file GUI bị giấu đi.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Concepts (Terminal vs Shell vs Bash) */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-2">
                        <span className="bg-purple-500/20 text-purple-400 p-2 rounded-lg">
                            2
                        </span>
                        Terminal ≠ Shell ≠ Bash
                    </h3>
                    <p className="text-slate-400 mb-8">
                        Nhiều người gọi chung là "Terminal", nhưng thực ra chúng
                        là 3 khái niệm lồng nhau.
                    </p>

                    <div className="relative">
                        {/* Visual Diagram */}
                        <div className="hidden md:flex justify-center mb-12">
                            <div className="relative w-[600px] h-[300px]">
                                {/* Terminal Layer */}
                                <div className="absolute inset-0 bg-slate-800 border-2 border-slate-600 rounded-2xl p-6 shadow-2xl flex flex-col items-center">
                                    <div className="absolute top-0 left-0 bg-slate-600 text-white text-xs font-bold px-3 py-1 rounded-br-lg rounded-tl-xl">
                                        GNOME Terminal (Emulator)
                                    </div>
                                    <Monitor
                                        className="text-slate-500 opacity-20 absolute right-4 top-4"
                                        size={60}
                                    />

                                    {/* Shell Layer */}
                                    <div className="mt-8 w-[90%] h-[180px] bg-slate-900 border-2 border-blue-500/50 rounded-xl p-4 relative flex flex-col items-center justify-center">
                                        <div className="absolute top-0 left-0 bg-blue-500/50 text-blue-200 text-xs font-bold px-3 py-1 rounded-br-lg rounded-tl-xl">
                                            Shell (Chương trình xử lý lệnh)
                                        </div>
                                        <Terminal
                                            className="text-blue-500/20 absolute right-4 bottom-4"
                                            size={60}
                                        />

                                        {/* Bash Layer */}
                                        <div className="w-[80%] h-[100px] bg-black border border-green-500 rounded-lg p-3 relative font-mono text-sm">
                                            <div className="absolute -top-3 left-4 bg-green-500 text-black text-[10px] font-bold px-2 py-0.5 rounded">
                                                BASH (Ngôn ngữ)
                                            </div>
                                            <div className="mt-3 text-green-400">
                                                alice@ubuntu:~${" "}
                                                <span className="text-white">
                                                    ls -la
                                                </span>
                                            </div>
                                            <div className="text-slate-500 mt-1">
                                                # Trả về kết quả...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile/Text Explanation */}
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-slate-500 transition-colors">
                                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                    <Monitor size={18} /> Terminal
                                </h4>
                                <p className="text-sm text-slate-400">
                                    Là <strong>cửa sổ phần mềm</strong> vẽ ra
                                    cái khung đen và nhận thao tác gõ phím của
                                    bạn. (VD: GNOME Terminal, iTerm2).
                                </p>
                            </div>
                            <div className="bg-slate-900 p-5 rounded-xl border border-blue-500/30 hover:border-blue-500 transition-colors shadow-inner">
                                <h4 className="font-bold text-blue-400 mb-2 flex items-center gap-2">
                                    <TerminalSquare size={18} /> Shell
                                </h4>
                                <p className="text-sm text-slate-400">
                                    Là{" "}
                                    <strong>chương trình chạy bên trong</strong>{" "}
                                    Terminal. Nó nhận chữ bạn gõ, dịch ra mã máy
                                    để nhân Kernel thực thi.
                                </p>
                            </div>
                            <div className="bg-black p-5 rounded-xl border border-green-500/50 hover:border-green-500 transition-colors shadow-inner">
                                <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2">
                                    <FileCode2 size={18} /> Bash
                                </h4>
                                <p className="text-sm text-slate-400">
                                    Là <strong>loại Shell mặc định</strong> phổ
                                    biến nhất trên Ubuntu (Bourne Again SHell).
                                    Ngoài ra còn có Zsh, Fish...
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Anatomy of a command & Prompt */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className="bg-yellow-500/20 text-yellow-500 p-2 rounded-lg">
                            3
                        </span>
                        Giải mã dòng nhắc lệnh & Cú pháp
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* The Prompt */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-slate-300">
                                Dòng nhắc lệnh (Prompt)
                            </h4>
                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 font-mono text-sm leading-loose">
                                <div>
                                    <span className="text-green-400 font-bold">
                                        alice
                                    </span>
                                    <span className="text-white">@</span>
                                    <span className="text-blue-400 font-bold">
                                        ubuntu-pc
                                    </span>
                                    <span className="text-white">:</span>
                                    <span className="text-purple-400 font-bold">
                                        ~
                                    </span>
                                    <span className="text-white font-bold">
                                        $
                                    </span>
                                </div>

                                <div className="mt-4 space-y-2 border-l-2 border-slate-700 pl-4 relative">
                                    <div className="flex items-center gap-3">
                                        <span className="text-green-400 font-bold w-20 text-right">
                                            alice
                                        </span>
                                        <span className="text-slate-400 text-xs">
                                            ← User đang đăng nhập
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-blue-400 font-bold w-20 text-right">
                                            ubuntu-pc
                                        </span>
                                        <span className="text-slate-400 text-xs">
                                            ← Tên máy tính
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-purple-400 font-bold w-20 text-right">
                                            ~
                                        </span>
                                        <span className="text-slate-400 text-xs">
                                            ← Đang ở thư mục Home
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 mt-4 pt-2 border-t border-slate-800">
                                        <span className="text-white font-bold text-lg w-20 text-right">
                                            $
                                        </span>
                                        <span className="text-slate-400 text-xs">
                                            ← Dấu hiệu User thường (An toàn)
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-red-500 font-bold text-lg w-20 text-right">
                                            #
                                        </span>
                                        <span className="text-red-400 text-xs">
                                            ← Dấu hiệu ROOT (Nguy hiểm! ⚠️)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Command Syntax */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-slate-300">
                                Cú pháp một Lệnh (Command)
                            </h4>
                            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 relative overflow-hidden">
                                <div className="font-mono text-lg mb-8 text-center bg-black/50 p-4 rounded-xl border border-slate-800">
                                    <span className="text-orange-400 font-bold">
                                        command
                                    </span>{" "}
                                    <span className="text-blue-400">
                                        [-options]
                                    </span>{" "}
                                    <span className="text-green-400">
                                        [arguments]
                                    </span>
                                </div>

                                <div className="space-y-6">
                                    <div className="relative">
                                        <div className="font-mono mb-1">
                                            <span className="text-orange-400 font-bold">
                                                ls
                                            </span>{" "}
                                            <span className="text-blue-400">
                                                -la
                                            </span>{" "}
                                            <span className="text-green-400">
                                                /etc
                                            </span>
                                        </div>
                                        <div className="text-sm text-slate-400 flex flex-col gap-1 pl-4 border-l-2 border-slate-700">
                                            <span>
                                                <strong className="text-orange-400">
                                                    Lệnh (Làm gì?):
                                                </strong>{" "}
                                                <code>ls</code> (Liệt kê)
                                            </span>
                                            <span>
                                                <strong className="text-blue-400">
                                                    Tuỳ chọn (Như thế nào?):
                                                </strong>{" "}
                                                <code>-la</code> (Chi tiết +
                                                Hiện file ẩn)
                                            </span>
                                            <span>
                                                <strong className="text-green-400">
                                                    Đối số (Lên cái gì?):
                                                </strong>{" "}
                                                <code>/etc</code> (Thư mục /etc)
                                            </span>
                                        </div>
                                    </div>

                                    <div className="bg-slate-800/50 p-3 rounded-lg text-sm text-slate-300">
                                        <strong>💡 Mẹo:</strong> Tuỳ chọn
                                        (Options) thường bắt đầu bằng 1 dấu gạch
                                        (<code>-l</code>) hoặc 2 dấu gạch (
                                        <code>--list</code>). Có thể gộp lại:{" "}
                                        <code>-l -a</code> thành{" "}
                                        <code>-la</code>.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Interactive Terminal Simulator */}
                <section className="space-y-6 pt-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                <span className="bg-teal-500/20 text-teal-400 p-2 rounded-lg">
                                    4
                                </span>
                                Thực hành gõ lệnh (Giả lập)
                            </h3>
                            <p className="text-slate-400 mt-2">
                                Đừng chỉ đọc, hãy gõ thử! Các lệnh cơ bản:{" "}
                                <code>pwd</code>, <code>whoami</code>,{" "}
                                <code>date</code>, <code>clear</code>,{" "}
                                <code>echo "Hello"</code>
                            </p>
                        </div>

                        <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 text-sm flex flex-col gap-2 min-w-[250px]">
                            <div className="text-slate-400 font-bold mb-1 text-xs uppercase tracking-wider">
                                Phím tắt "Sinh tồn"
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-300 flex items-center gap-1">
                                    <Keyboard size={14} /> Mở Terminal
                                </span>{" "}
                                <Kbd>Ctrl+Alt+T</Kbd>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-300 flex items-center gap-1">
                                    <PlayCircle size={14} /> Hoàn thành từ
                                </span>{" "}
                                <Kbd>Tab</Kbd>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-300 flex items-center gap-1">
                                    <Clock size={14} /> Lịch sử lệnh
                                </span>{" "}
                                <Kbd>↑</Kbd> <Kbd>↓</Kbd>
                            </div>
                        </div>
                    </div>

                    {/* THE SIMULATOR */}
                    <TerminalSimulator />
                </section>

                {/* Section 5: Sudo Magic */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className="bg-red-500/20 text-red-500 p-2 rounded-lg">
                            5
                        </span>
                        Quyền lực tối cao: Lệnh SUDO
                    </h3>

                    <div className="bg-gradient-to-br from-red-900/20 to-slate-900 p-6 md:p-8 rounded-3xl border border-red-500/30">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-1 space-y-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <ShieldAlert
                                        className="text-red-500"
                                        size={32}
                                    />
                                    <h4 className="text-2xl font-bold text-red-400">
                                        sudo = "SuperUser DO"
                                    </h4>
                                </div>
                                <p className="text-slate-300">
                                    Bình thường, user của bạn rất an toàn nhưng
                                    bị giới hạn. Khi thêm chữ <code>sudo</code>{" "}
                                    vào trước một lệnh, bạn đang "mượn" sức mạnh
                                    của Root (Quản trị viên) để thực hiện lệnh
                                    đó.
                                </p>

                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                                        <div className="text-green-400 font-bold mb-2 text-sm">
                                            ✅ KHÔNG CẦN SUDO
                                        </div>
                                        <ul className="text-xs text-slate-400 space-y-2">
                                            <li>• Chuyển thư mục (cd)</li>
                                            <li>• Xem danh sách file (ls)</li>
                                            <li>• Tạo file trong ~/ (home)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-950/30 p-4 rounded-xl border border-red-500/30">
                                        <div className="text-red-400 font-bold mb-2 text-sm">
                                            ⚠️ BẮT BUỘC SUDO
                                        </div>
                                        <ul className="text-xs text-slate-400 space-y-2">
                                            <li>• Cài đặt phần mềm (apt)</li>
                                            <li>• Sửa file trong /etc/</li>
                                            <li>• Khởi động lại Server</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-[400px] bg-black p-5 rounded-2xl border-2 border-slate-800 font-mono text-sm shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
                                <div className="text-slate-400 mb-2">
                                    # Cài đặt phần mềm VIM
                                </div>
                                <div className="mb-2">
                                    <span className="text-green-400">
                                        alice@pc:~$
                                    </span>{" "}
                                    <span className="text-white">
                                        sudo apt install vim
                                    </span>
                                </div>
                                <div className="text-slate-300 mb-2">
                                    [sudo] password for alice:{" "}
                                    <span className="text-slate-600 bg-slate-800 px-1 rounded animate-pulse">
                                        █
                                    </span>
                                </div>

                                <div className="mt-4 bg-red-500/10 border border-red-500/20 p-3 rounded text-red-300 text-xs leading-relaxed">
                                    <strong>💡 BÍ MẬT CỦA SUDO:</strong> Khi gõ
                                    mật khẩu, màn hình sẽ{" "}
                                    <strong>KHÔNG HIỂN THỊ GÌ CẢ</strong> (không
                                    có dấu *). Đừng lo, bàn phím không hỏng đâu!
                                    Cứ gõ đúng pass rồi nhấn Enter.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 6: Quiz */}
                <section className="space-y-6 pt-8">
                    <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
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
                        Mọi thứ mới chỉ là khởi đầu. Bài sau chúng ta sẽ học
                        cách di chuyển bằng lệnh!
                    </p>
                    <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-green-500/20">
                        Bài 2.2 — Điều hướng file & thư mục (cd, ls){" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

// --- Sub Components ---

function Kbd({ children }) {
    return (
        <kbd className="bg-slate-700 border border-slate-600 text-slate-200 px-1.5 py-0.5 rounded-md text-xs font-sans shadow-sm inline-block mx-0.5">
            {children}
        </kbd>
    );
}

// --- Interactive Terminal Simulator ---
function TerminalSimulator() {
    const [history, setHistory] = useState([
        {
            type: "system",
            text: "Welcome to Ubuntu 24.04.1 LTS (GNU/Linux 6.8.0-51-generic x86_64)",
        },
        { type: "system", text: " * Documentation:  https://help.ubuntu.com" },
        { type: "system", text: " " },
    ]);
    const [input, setInput] = useState("");
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);

    const endOfTerminalRef = useRef(null);
    const inputRef = useRef(null);

    // Auto scroll to bottom
    useEffect(() => {
        endOfTerminalRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    // Focus input when clicking anywhere on terminal
    const handleTerminalClick = () => {
        inputRef.current?.focus();
    };

    const executeCommand = (cmd) => {
        const trimmedCmd = cmd.trim();
        if (!trimmedCmd) return;

        // Add to visual history
        setHistory((prev) => [...prev, { type: "input", text: trimmedCmd }]);

        // Add to command history (for up/down arrows)
        setCommandHistory((prev) => [...prev, trimmedCmd]);
        setHistoryIndex(-1);

        // Process command
        let output = "";
        const parts = trimmedCmd.split(" ");
        const baseCmd = parts[0].toLowerCase();

        switch (baseCmd) {
            case "clear":
                setHistory([]);
                setInput("");
                return;
            case "pwd":
                output = "/home/alice";
                break;
            case "whoami":
                output = "alice";
                break;
            case "date":
                output = new Date().toLocaleString("vi-VN", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                });
                break;
            case "hostname":
                output = "ubuntu-pc";
                break;
            case "echo":
                output = parts.slice(1).join(" ").replace(/['"]/g, ""); // Simple remove quotes
                if (!output) output = " ";
                break;
            case "ls":
                output =
                    "Desktop  Documents  Downloads  Music  Pictures  Public  Templates  Videos";
                if (parts.includes("-la") || parts.includes("-al")) {
                    output =
                        "total 48\ndrwxr-x--- 14 alice alice 4096 Feb 18 14:00 .\ndrwxr-xr-x  3 root  root  4096 Jan  1 00:00 ..\n-rw-------  1 alice alice 1234 Feb 18 14:30 .bash_history\n-rw-r--r--  1 alice alice 3771 Feb 18 14:00 .bashrc\ndrwxr-xr-x  2 alice alice 4096 Feb 18 14:00 Desktop\ndrwxr-xr-x  2 alice alice 4096 Feb 18 14:00 Documents";
                }
                break;
            case "sudo":
                output =
                    "[sudo] password for alice: \nSorry, try again.\n[sudo] password for alice: \nsudo: 3 incorrect password attempts";
                break;
            case "help":
                output =
                    "Đây là trình giả lập Terminal cơ bản. Các lệnh có sẵn: pwd, whoami, date, hostname, echo, ls, clear.";
                break;
            default:
                output = `bash: ${baseCmd}: command not found`;
        }

        // Delay slighty for realism
        setTimeout(() => {
            setHistory((prev) => [...prev, { type: "output", text: output }]);
        }, 100);

        setInput("");
    };

    const handleKeyDown = (e) => {
        // History Up/Down
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const newIndex =
                    historyIndex < commandHistory.length - 1
                        ? historyIndex + 1
                        : historyIndex;
                setHistoryIndex(newIndex);
                setInput(commandHistory[commandHistory.length - 1 - newIndex]);
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[commandHistory.length - 1 - newIndex]);
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setInput("");
            }
        }

        // Ctrl+L (Clear)
        if (e.ctrlKey && e.key === "l") {
            e.preventDefault();
            setHistory([]);
        }

        // Ctrl+C (Interrupt)
        if (e.ctrlKey && e.key === "c") {
            e.preventDefault();
            setHistory((prev) => [
                ...prev,
                { type: "input", text: input + "^C" },
            ]);
            setInput("");
            setHistoryIndex(-1);
        }

        // Tab (Fake completion)
        if (e.key === "Tab") {
            e.preventDefault();
            if (input === "ech") setInput("echo ");
            if (input === "who") setInput("whoami");
            if (input === "clear") setInput("clear");
        }
    };

    return (
        <div
            className="bg-[#300a24] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden font-mono text-[15px] cursor-text flex flex-col h-[400px]"
            onClick={handleTerminalClick}
        >
            {/* Title Bar */}
            <div className="bg-[#423b3e] px-4 py-2 flex items-center justify-between border-b border-black/50 select-none">
                <div className="text-slate-300 text-xs font-sans">
                    alice@ubuntu-pc: ~
                </div>
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#f95c5b] border border-[#d64141]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#fdbd2e] border border-[#d69f25]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#28c940] border border-[#1fa531]"></div>
                </div>
            </div>

            {/* Terminal Content */}
            <div className="p-4 flex-1 overflow-y-auto text-slate-300 custom-scrollbar">
                {history.map((line, i) => (
                    <div
                        key={i}
                        className="mb-1 leading-normal whitespace-pre-wrap break-words"
                    >
                        {line.type === "system" && (
                            <span className="text-slate-400">{line.text}</span>
                        )}
                        {line.type === "output" && <span>{line.text}</span>}
                        {line.type === "input" && (
                            <div>
                                <span className="text-[#8ae234] font-bold">
                                    alice@ubuntu-pc
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

                {/* Active Input Line */}
                <div className="flex items-center">
                    <span className="text-[#8ae234] font-bold shrink-0">
                        alice@ubuntu-pc
                    </span>
                    <span className="text-white shrink-0">:</span>
                    <span className="text-[#729fcf] font-bold shrink-0">~</span>
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
                            onKeyDown={handleKeyDown}
                            className="bg-transparent border-none outline-none text-white w-full font-mono caret-[#ffffff] p-0 m-0"
                            autoComplete="off"
                            spellCheck="false"
                            autoFocus
                        />
                    </form>
                </div>
                <div ref={endOfTerminalRef} />
            </div>
        </div>
    );
}

// --- Quiz Component ---
const questions = [
    {
        id: 1,
        question: "Sự khác biệt chính giữa Terminal và Shell là gì?",
        options: [
            "Terminal và Shell là hai từ đồng nghĩa, chỉ cùng một thứ.",
            "Terminal là cửa sổ phần mềm hiển thị chữ, còn Shell là chương trình chạy ngầm bên trong để hiểu và thực thi lệnh.",
            "Shell là phần cứng, Terminal là phần mềm.",
            "Terminal chỉ có trên Linux, còn Shell chỉ có trên Windows.",
        ],
        correct: 1,
        explanation:
            "Đúng! Terminal (như GNOME Terminal) chỉ là 'cái vỏ' (giao diện), còn Shell (như Bash, Zsh) mới là 'bộ脑' xử lý lệnh bạn gõ.",
    },
    {
        id: 2,
        question:
            "Dấu hiệu nào trên dòng nhắc lệnh (Prompt) cảnh báo bạn ĐANG Ở QUYỀN ROOT (rất nguy hiểm)?",
        options: ["Dấu ~", "Dấu $", "Dấu #", "Chữ màu đỏ"],
        correct: 2,
        explanation:
            "Dấu # ở cuối prompt (VD: root@pc:~#) báo hiệu bạn đang nắm toàn quyền hệ thống. Gõ sai 1 lệnh ở đây có thể phá hỏng cả máy!",
    },
    {
        id: 3,
        question:
            "Phím tắt nào giúp bạn TỰ ĐỘNG ĐIỀN nốt tên lệnh hoặc đường dẫn file đang gõ dở?",
        options: ["Phím Enter", "Phím Tab", "Phím Space", "Ctrl + F"],
        correct: 1,
        explanation:
            "Phím Tab là phím được gõ nhiều nhất trong Linux! Gõ vài chữ cái đầu rồi nhấn Tab, Shell sẽ tự đoán và điền nốt phần còn lại.",
    },
    {
        id: 4,
        question:
            "Bạn đang gõ dở một lệnh rất dài thì nhận ra gõ sai và muốn XÓA SẠCH NGUYÊN DÒNG. Phím tắt nào nhanh nhất?",
        options: [
            "Giữ phím Backspace",
            "Nhấn phím Esc",
            "Ctrl + C",
            "Ctrl + U",
        ],
        correct: 3,
        explanation:
            "Ctrl + U sẽ xóa lập tức toàn bộ dòng chữ từ vị trí con trỏ về đầu dòng. (Ctrl + C dùng để dừng tiến trình đang chạy, không phải xóa text chữ).",
    },
    {
        id: 5,
        question:
            "Điều gì xảy ra khi bạn chạy lệnh sudo và gõ mật khẩu, nhưng trên màn hình KHÔNG HIỆN RA DẤU * HAY CHỮ NÀO?",
        options: [
            "Bàn phím của bạn bị hỏng/mất kết nối.",
            "Terminal đang bị treo (đóng băng).",
            "Đó là tính năng bảo mật bình thường của Linux, nó ẩn hoàn toàn độ dài mật khẩu.",
            "Bạn phải nhấn Caps Lock thì mới hiện chữ.",
        ],
        correct: 2,
        explanation:
            "Linux không hiện dấu sao (***) khi gõ password để hacker nhìn lén từ xa không đoán được độ dài mật khẩu của bạn. Cứ gõ và nhấn Enter!",
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
                    <strong className="text-green-500">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu hỏi về Terminal.
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
                <span className="text-green-400 bg-green-500/10 px-3 py-1 rounded-full">
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
                        className={`p-4 rounded-xl text-sm mb-6 flex gap-3 ${selected === q.correct ? "bg-green-500/10 border border-green-500/20 text-green-300" : "bg-red-500/10 border border-red-500/20 text-red-300"}`}
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
