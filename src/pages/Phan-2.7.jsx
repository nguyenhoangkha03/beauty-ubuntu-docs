import React, { useState, useRef, useEffect } from "react";
import {
    Keyboard,
    History,
    Zap,
    Settings,
    Command,
    TerminalSquare,
    ArrowLeftRight,
    FastForward,
    RotateCcw,
    Save,
    Trash2,
    CheckCircle2,
    AlertTriangle,
    ChevronRight,
    PlayCircle,
    Info,
    ArrowRight,
    Search,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-pink-500 selection:text-white pb-20">
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
                            Bài trước: 2.6
                        </span>
                        <div className="text-sm font-medium text-pink-400 bg-pink-400/10 px-3 py-1 rounded-full border border-pink-400/20">
                            Phần 2.7
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                {/* Title Section */}
                <div className="text-center space-y-4 py-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        <span className="text-pink-400 font-mono tracking-tighter">
                            Lịch sử lệnh
                        </span>{" "}
                        & Phím tắt
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Bí quyết làm việc nhanh gấp 10 lần trên Terminal. Học
                        cách để tay của bạn không bao giờ phải với tới con chuột
                        nữa!
                    </p>
                </div>

                {/* Section 1: The Magic of History */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                        <span className="bg-pink-500/20 text-pink-400 p-2 rounded-lg">
                            1
                        </span>
                        Quản lý Lịch sử (History)
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                            <h4 className="text-pink-400 font-bold mb-4 flex items-center gap-2 text-xl">
                                <History size={24} /> Lệnh <code>history</code>
                            </h4>
                            <p className="text-sm text-slate-300 mb-6 border-b border-slate-700 pb-4">
                                Bash tự động ghi nhớ mọi lệnh bạn gõ (lưu trong
                                file <code>~/.bash_history</code>). Đừng bao giờ
                                phải gõ lại một lệnh dài dòng từ đầu!
                            </p>

                            <div className="space-y-4 font-mono text-sm">
                                <div>
                                    <div className="text-slate-500 mb-1">
                                        # Xem 10 lệnh gần nhất
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            history 10
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-slate-500 mb-1">
                                        # Tìm lệnh có chữ "apt" trong quá khứ
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            history | grep "apt"
                                        </span>
                                    </div>
                                    <div className="text-slate-400">
                                        &nbsp;&nbsp;42&nbsp;&nbsp;sudo apt
                                        install nginx
                                        <br />
                                        &nbsp;&nbsp;87&nbsp;&nbsp;sudo apt
                                        update
                                    </div>
                                </div>
                                <div>
                                    <div className="text-slate-500 mb-1">
                                        # Đếm xem bạn đã gõ lệnh "ls" bao nhiêu
                                        lần
                                    </div>
                                    <div className="text-green-400">
                                        ${" "}
                                        <span className="text-white">
                                            history | grep "ls" | wc -l
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-700 shadow-inner">
                                <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                                    <RotateCcw className="text-blue-400" /> Gọi
                                    hồn lệnh cũ (History Expansion)
                                </h4>
                                <ul className="space-y-3 font-mono text-sm">
                                    <li className="flex items-center justify-between border-b border-slate-800 pb-2">
                                        <span className="text-blue-400 font-bold text-lg bg-blue-500/10 px-2 rounded">
                                            !!
                                        </span>
                                        <span className="text-slate-300 text-right">
                                            Chạy lại lệnh VỪA GÕ xong
                                        </span>
                                    </li>
                                    <li className="flex items-center justify-between border-b border-slate-800 pb-2">
                                        <span className="text-slate-400 text-xs italic">
                                            Ví dụ: Quên sudo? Gõ{" "}
                                            <code className="text-rose-400 bg-rose-500/10 px-1 rounded">
                                                sudo !!
                                            </code>
                                        </span>
                                    </li>
                                    <li className="flex items-center justify-between border-b border-slate-800 pb-2 mt-2">
                                        <span className="text-blue-400 font-bold text-lg bg-blue-500/10 px-2 rounded">
                                            !42
                                        </span>
                                        <span className="text-slate-300 text-right">
                                            Chạy lại lệnh số 42 trong lịch sử
                                        </span>
                                    </li>
                                    <li className="flex items-center justify-between border-b border-slate-800 pb-2 mt-2">
                                        <span className="text-blue-400 font-bold text-lg bg-blue-500/10 px-2 rounded">
                                            !git
                                        </span>
                                        <span className="text-slate-300 text-right">
                                            Chạy lại lệnh BẮT ĐẦU bằng "git" gần
                                            nhất
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Ctrl+R Simulator */}
                <section className="space-y-6 pt-6">
                    <div className="bg-gradient-to-r from-blue-900/30 via-slate-900 to-purple-900/20 border border-blue-500/30 p-6 md:p-8 rounded-3xl">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-blue-400 flex items-center gap-2 mb-2">
                                    <Search size={28} /> Phím tắt quan trọng
                                    nhất: Ctrl + R
                                </h3>
                                <p className="text-slate-300">
                                    <strong>Reverse Search:</strong> Đừng bao
                                    giờ dùng phím Mũi tên Lên (↑) để tìm lại một
                                    lệnh bạn đã gõ từ 3 ngày trước. Hãy nhấn{" "}
                                    <Kbd>Ctrl</Kbd>+<Kbd>R</Kbd> và gõ một vài
                                    ký tự của lệnh đó!
                                </p>
                            </div>
                        </div>

                        <CtrlRSimulator />
                    </div>
                </section>

                {/* Section 3: Keyboard Shortcuts */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-orange-500/20 text-orange-400 p-2 rounded-lg">
                            2
                        </span>
                        Di chuyển & Xóa siêu tốc
                    </h3>

                    <div className="bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                        <p className="text-slate-300 mb-8 text-center max-w-2xl mx-auto">
                            Dòng lệnh quá dài và bạn gõ sai một chữ ở giữa? Đừng
                            giữ phím Backspace! Các phím tắt này là tiêu chuẩn
                            trên Linux (dựa trên Emacs).
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Di chuyển */}
                            <div>
                                <h4 className="font-bold text-orange-400 mb-4 flex items-center gap-2 border-b border-slate-700 pb-2">
                                    <ArrowLeftRight size={20} /> Di chuyển con
                                    trỏ
                                </h4>
                                <div className="space-y-3 font-mono text-sm">
                                    <div className="flex justify-between items-center bg-slate-900 p-3 rounded-xl border border-slate-800">
                                        <span className="flex gap-1">
                                            <Kbd>Ctrl</Kbd>+<Kbd>A</Kbd>
                                        </span>
                                        <span className="text-slate-400 font-sans">
                                            Nhảy về ĐẦU dòng
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center bg-slate-900 p-3 rounded-xl border border-slate-800">
                                        <span className="flex gap-1">
                                            <Kbd>Ctrl</Kbd>+<Kbd>E</Kbd>
                                        </span>
                                        <span className="text-slate-400 font-sans">
                                            Nhảy về CUỐI dòng
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center bg-slate-900 p-3 rounded-xl border border-slate-800">
                                        <span className="flex gap-1">
                                            <Kbd>Ctrl</Kbd>+<Kbd>←</Kbd> /{" "}
                                            <Kbd>→</Kbd>
                                        </span>
                                        <span className="text-slate-400 font-sans">
                                            Nhảy theo TỪNG TỪ
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Xóa */}
                            <div>
                                <h4 className="font-bold text-rose-400 mb-4 flex items-center gap-2 border-b border-slate-700 pb-2">
                                    <Trash2 size={20} /> Cắt & Xóa
                                </h4>
                                <div className="space-y-3 font-mono text-sm">
                                    <div className="flex justify-between items-center bg-slate-900 p-3 rounded-xl border border-rose-500/20">
                                        <span className="flex gap-1">
                                            <Kbd>Ctrl</Kbd>+<Kbd>U</Kbd>
                                        </span>
                                        <span className="text-slate-400 font-sans">
                                            Xóa từ con trỏ về{" "}
                                            <strong className="text-rose-400">
                                                ĐẦU
                                            </strong>{" "}
                                            dòng
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center bg-slate-900 p-3 rounded-xl border border-rose-500/20">
                                        <span className="flex gap-1">
                                            <Kbd>Ctrl</Kbd>+<Kbd>K</Kbd>
                                        </span>
                                        <span className="text-slate-400 font-sans">
                                            Xóa từ con trỏ đến{" "}
                                            <strong className="text-rose-400">
                                                CUỐI
                                            </strong>{" "}
                                            dòng
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center bg-slate-900 p-3 rounded-xl border border-slate-800">
                                        <span className="flex gap-1">
                                            <Kbd>Ctrl</Kbd>+<Kbd>W</Kbd>
                                        </span>
                                        <span className="text-slate-400 font-sans">
                                            Xóa 1 TỪ về bên trái
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center bg-slate-900 p-3 rounded-xl border border-green-500/20 mt-4 pt-4 border-t border-slate-800">
                                        <span className="flex gap-1">
                                            <Kbd>Ctrl</Kbd>+<Kbd>Y</Kbd>
                                        </span>
                                        <span className="text-slate-400 font-sans">
                                            <strong className="text-green-400">
                                                Dán (Paste)
                                            </strong>{" "}
                                            lại những gì vừa bị xóa bằng lệnh
                                            trên.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <ShortcutSimulator />
                        </div>
                    </div>
                </section>

                {/* Section 4: Advanced Control */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-teal-500/20 text-teal-400 p-2 rounded-lg">
                            3
                        </span>
                        Kiểm soát Terminal
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center">
                            <div className="text-rose-500 font-bold font-mono bg-rose-500/10 px-3 py-1 rounded inline-block mb-4">
                                Ctrl + C
                            </div>
                            <h4 className="font-bold text-white mb-2">
                                Hủy Bỏ (Cancel)
                            </h4>
                            <p className="text-sm text-slate-400">
                                Lệnh đang chạy mãi không dừng? Ping vô tận? Nhấn
                                Ctrl+C để buộc ngắt tiến trình ngay lập tức.
                            </p>
                        </div>

                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center">
                            <div className="text-yellow-500 font-bold font-mono bg-yellow-500/10 px-3 py-1 rounded inline-block mb-4">
                                Ctrl + L
                            </div>
                            <h4 className="font-bold text-white mb-2">
                                Làm sạch (Clear)
                            </h4>
                            <p className="text-sm text-slate-400">
                                Màn hình quá rối mắt? Ctrl+L dọn dẹp sạch sẽ màn
                                hình (giống như gõ lệnh <code>clear</code>)
                                nhưng tay vẫn trên bàn phím.
                            </p>
                        </div>

                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-12 h-12 bg-green-500/20 rounded-bl-full"></div>
                            <div className="text-green-500 font-bold font-mono bg-green-500/10 px-3 py-1 rounded inline-block mb-4">
                                Alt + .
                            </div>
                            <h4 className="font-bold text-white mb-2">
                                Gọi tham số cũ ⭐
                            </h4>
                            <p className="text-sm text-slate-400">
                                Tự động điền argument (tham số) cuối cùng của
                                lệnh vừa gõ. Ví dụ: Bạn gõ{" "}
                                <code>mkdir /du/ong/dan/dai</code>, sau đó gõ{" "}
                                <code>cd [Alt+.]</code>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 5: Aliases & Customization */}
                <section className="space-y-6 pt-6">
                    <div className="bg-gradient-to-r from-amber-900/20 to-slate-900 border border-amber-500/20 rounded-3xl p-6 md:p-8">
                        <h3 className="text-2xl font-bold text-amber-400 flex items-center gap-2 mb-4">
                            <Settings size={28} /> Độ Terminal với{" "}
                            <code>.bashrc</code>
                        </h3>
                        <p className="text-slate-300 mb-6">
                            Bạn có thể tùy chỉnh vĩnh viễn hành vi của Terminal,
                            tạo các alias (phím tắt cho lệnh), hoặc thậm chí
                            chỉnh sửa màu sắc bằng cách chỉnh sửa file cấu hình
                            ẩn <code>~/.bashrc</code>.
                        </p>

                        <div className="bg-black p-5 rounded-2xl border border-slate-700 font-mono text-sm">
                            <div className="text-slate-500 mb-2">
                                # Cấu hình lưu Lịch sử lệnh nhiều hơn
                            </div>
                            <div className="text-blue-300">HISTSIZE=10000</div>
                            <div className="text-blue-300">
                                HISTFILESIZE=20000
                            </div>
                            <div className="text-slate-500 mt-4 mb-2">
                                # Không lưu các lệnh trùng lặp liên tiếp
                            </div>
                            <div className="text-green-400">
                                HISTCONTROL=ignoreboth
                            </div>
                            <div className="text-slate-500 mt-4 mb-2">
                                # Thêm ngày giờ vào lịch sử lệnh
                            </div>
                            <div className="text-amber-300">
                                HISTTIMEFORMAT="%Y-%m-%d %H:%M:%S "
                            </div>
                        </div>

                        <p className="text-sm text-slate-400 mt-4 italic flex items-center gap-2">
                            <Info size={16} /> Mẹo: Gõ{" "}
                            <code>source ~/.bashrc</code> sau khi sửa file để áp
                            dụng cấu hình mới ngay lập tức mà không cần khởi
                            động lại.
                        </p>
                    </div>
                </section>

                {/* Section 6: Quiz */}
                <section className="space-y-6 pt-8">
                    <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-xl">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-yellow-500/20 text-yellow-500 p-2 rounded-lg">
                                    4
                                </span>
                                Kiểm tra kiến thức Lịch sử & Phím tắt
                            </h3>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                {/* Course Progress & Footer */}
                <div className="bg-pink-500/10 border border-pink-500/30 rounded-2xl p-8 text-center mt-12 animate-in fade-in slide-in-from-bottom-4">
                    <div className="text-6xl mb-4">🏆</div>
                    <h3 className="text-2xl font-bold text-pink-400 mb-4">
                        CHÚC MỪNG BẠN ĐÃ HOÀN THÀNH CHƯƠNG 2!
                    </h3>
                    <p className="text-slate-300 mb-6">
                        Bạn đã nắm trong tay những vũ khí cơ bản nhưng uy lực
                        nhất của thế giới Command Line. Từ giờ, không có file
                        hay thư mục nào có thể làm khó bạn.
                    </p>

                    <p className="text-slate-400 mb-6">
                        Phần tiếp theo, chúng ta sẽ học cách hô biến một chiếc
                        máy tính trống rỗng thành một cỗ máy đa năng thông qua
                        việc Quản lý phần mềm.
                    </p>
                    <button className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-4 px-10 rounded-full inline-flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] hover:-translate-y-1">
                        BÀI 3.1 — QUẢN LÝ PHẦN MỀM VỚI APT{" "}
                        <ArrowRight size={24} />
                    </button>
                </div>
            </main>
        </div>
    );
}

// --- Sub Components ---
function Kbd({ children }) {
    return (
        <kbd className="bg-slate-700 border border-slate-600 text-slate-200 px-1.5 py-0.5 rounded-md text-xs font-sans shadow-sm inline-block mx-0.5 font-bold uppercase">
            {children}
        </kbd>
    );
}

// --- Ctrl+R Simulator ---
function CtrlRSimulator() {
    const mockHistory = [
        "sudo apt update && sudo apt upgrade",
        "cd /var/log/nginx",
        'cat access.log | grep "ERROR"',
        "docker run -d -p 8080:80 nginx",
        "nano ~/.bashrc",
        'find . -name "*.py" -exec grep -l "TODO" {} \\;',
        "ping google.com",
        "ssh root@192.168.1.100",
    ];

    const [input, setInput] = useState("");
    const [match, setMatch] = useState(null);

    useEffect(() => {
        if (!input) {
            setMatch(null);
            return;
        }
        // Reverse search logic
        const found = [...mockHistory]
            .reverse()
            .find((cmd) => cmd.toLowerCase().includes(input.toLowerCase()));
        setMatch(found || null);
    }, [input]);

    return (
        <div className="bg-black border border-slate-700 rounded-xl overflow-hidden shadow-2xl font-mono text-sm max-w-2xl mx-auto">
            <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex justify-between items-center text-xs">
                <span className="text-slate-400">Terminal - Ctrl+R Search</span>
            </div>
            <div className="p-6 space-y-4">
                {/* The Prompt */}
                <div className="flex items-center gap-2">
                    <span className="text-blue-400">(reverse-i-search)</span>
                    <span className="text-slate-400">`</span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="bg-transparent border-none outline-none text-white w-32 border-b border-slate-700 focus:border-blue-500 caret-white transition-colors"
                        placeholder="Gõ 'docker', 'grep'..."
                        spellCheck="false"
                    />
                    <span className="text-slate-400">':</span>

                    <span className="text-green-400 ml-2">
                        {match ? (
                            <span>
                                {/* Simple highlight logic */}
                                {match
                                    .split(new RegExp(`(${input})`, "gi"))
                                    .map((part, i) =>
                                        part.toLowerCase() ===
                                        input.toLowerCase() ? (
                                            <u
                                                key={i}
                                                className="text-white no-underline bg-white/20"
                                            >
                                                {part}
                                            </u>
                                        ) : (
                                            <span key={i}>{part}</span>
                                        ),
                                    )}
                            </span>
                        ) : (
                            <span className="text-slate-600 italic">
                                Không tìm thấy
                            </span>
                        )}
                    </span>
                </div>

                <div className="text-xs text-slate-500 pt-4 border-t border-slate-800">
                    <strong>Mẹo:</strong> Thử gõ <code>grep</code> hoặc{" "}
                    <code>apt</code>. Nếu dùng máy thật, bấm Ctrl+R lần nữa để
                    chuyển sang kết quả cũ hơn tiếp theo.
                </div>
            </div>
        </div>
    );
}

// --- Shortcut Action Simulator ---
function ShortcutSimulator() {
    const [cmd, setCmd] = useState("sudo apt-get install python3 vim curl");
    const [cursorIdx, setCursorIdx] = useState(13); // starting at 'install'
    const [killRing, setKillRing] = useState("");

    // Helper to visually split text based on cursor
    const renderText = () => {
        return (
            <div className="flex text-lg font-mono tracking-widest text-green-400 py-4 px-2">
                <span className="text-blue-400 font-bold mr-3">$</span>
                <span>{cmd.slice(0, cursorIdx)}</span>
                <span className="w-3 bg-white/70 animate-pulse h-6 block translate-y-1 rounded-sm mx-px"></span>
                <span>{cmd.slice(cursorIdx)}</span>
            </div>
        );
    };

    const actionCtrlA = () => setCursorIdx(0);
    const actionCtrlE = () => setCursorIdx(cmd.length);
    const actionCtrlU = () => {
        setKillRing(cmd.slice(0, cursorIdx));
        setCmd(cmd.slice(cursorIdx));
        setCursorIdx(0);
    };
    const actionCtrlK = () => {
        setKillRing(cmd.slice(cursorIdx));
        setCmd(cmd.slice(0, cursorIdx));
    };
    const actionCtrlW = () => {
        if (cursorIdx === 0) return;
        const beforeCursor = cmd.slice(0, cursorIdx);
        // basic word boundary search
        const words = beforeCursor.trimEnd().split(" ");
        const lastWord = words.pop();
        const newBefore = words.length > 0 ? words.join(" ") + " " : "";

        setKillRing(cmd.slice(newBefore.length, cursorIdx));
        setCmd(newBefore + cmd.slice(cursorIdx));
        setCursorIdx(newBefore.length);
    };
    const actionCtrlY = () => {
        if (!killRing) return;
        setCmd(cmd.slice(0, cursorIdx) + killRing + cmd.slice(cursorIdx));
        setCursorIdx(cursorIdx + killRing.length);
    };
    const reset = () => {
        setCmd("sudo apt-get install python3 vim curl");
        setCursorIdx(13);
        setKillRing("");
    };

    return (
        <div className="bg-black border border-slate-700 rounded-2xl overflow-hidden shadow-2xl mt-8 max-w-3xl mx-auto">
            <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-wider">
                Phòng Tập Gym: Phím tắt
            </div>

            <div className="p-6">
                <div className="bg-[#1e1e1e] p-4 rounded-xl border border-slate-700 mb-6 shadow-inner h-20 flex items-center overflow-x-auto">
                    {renderText()}
                </div>

                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
                    <button
                        onClick={actionCtrlA}
                        className="bg-slate-800 hover:bg-slate-700 py-2 rounded-lg font-mono text-sm text-slate-300 border border-slate-700"
                    >
                        Ctrl+A
                    </button>
                    <button
                        onClick={actionCtrlE}
                        className="bg-slate-800 hover:bg-slate-700 py-2 rounded-lg font-mono text-sm text-slate-300 border border-slate-700"
                    >
                        Ctrl+E
                    </button>
                    <button
                        onClick={actionCtrlU}
                        className="bg-rose-500/20 hover:bg-rose-500/40 py-2 rounded-lg font-mono text-sm text-rose-400 border border-rose-500/30"
                    >
                        Ctrl+U
                    </button>
                    <button
                        onClick={actionCtrlK}
                        className="bg-rose-500/20 hover:bg-rose-500/40 py-2 rounded-lg font-mono text-sm text-rose-400 border border-rose-500/30"
                    >
                        Ctrl+K
                    </button>
                    <button
                        onClick={actionCtrlW}
                        className="bg-orange-500/20 hover:bg-orange-500/40 py-2 rounded-lg font-mono text-sm text-orange-400 border border-orange-500/30"
                    >
                        Ctrl+W
                    </button>
                    <button
                        onClick={actionCtrlY}
                        disabled={!killRing}
                        className="bg-green-500/20 hover:bg-green-500/40 py-2 rounded-lg font-mono text-sm text-green-400 border border-green-500/30 disabled:opacity-30"
                    >
                        Ctrl+Y
                    </button>
                </div>

                <div className="flex justify-between items-center text-sm">
                    <div className="text-slate-500 flex gap-2 items-center">
                        <strong>Kill Ring (Bộ nhớ tạm):</strong>
                        <span className="font-mono text-xs bg-slate-800 px-2 py-1 rounded">
                            {killRing || "<trống>"}
                        </span>
                    </div>
                    <button
                        onClick={reset}
                        className="text-blue-400 hover:underline font-medium"
                    >
                        Làm lại
                    </button>
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
            "Lệnh nào sau đây cho phép bạn gọi lại (thực thi ngay lập tức) lệnh mà bạn VỪA MỚI gõ xong?",
        options: ["!!", "history 1", "!$", "Ctrl+R"],
        correct: 0,
        explanation:
            "Dấu chấm than kép `!!` là cú pháp gọi lại lệnh vừa gõ. Rất hay dùng trong trường hợp quên sudo: gõ `sudo !!`.",
    },
    {
        id: 2,
        question:
            "Tình huống: Bạn đang gõ một lệnh rất dài, nhưng phát hiện chữ đầu tiên bị sai. Phím tắt nào đưa con trỏ về ĐẦU DÒNG nhanh nhất?",
        options: ["Nhấn phím ← liên tục.", "Ctrl + E", "Ctrl + A", "Alt + B"],
        correct: 2,
        explanation:
            "Ctrl+A đưa bạn về đầu dòng (A = thẻ Home), trong khi Ctrl+E đưa bạn về cuối dòng (E = End).",
    },
    {
        id: 3,
        question:
            "Bạn vừa gõ `mkdir /var/log/my_app/2026/02/18`. Bạn muốn nhảy vào thư mục đó. Làm cách nào nhanh nhất mà KHÔNG cần gõ lại đoạn đường dẫn dài ngoằng đó?",
        options: [
            "Gõ `cd /var/log/my_app/2026/02/18`",
            "Gõ `cd !!`",
            "Gõ `cd ` rồi nhấn tổ hợp phím `Alt + .`",
            "Không có cách nào, phải gõ lại.",
        ],
        correct: 2,
        explanation:
            "Tổ hợp phím Alt + . (dấu chấm) sẽ bê nguyên Argument (tham số) cuối cùng của lệnh liền trước dán vào chỗ bạn đang gõ.",
    },
    {
        id: 4,
        question:
            "Bạn đang chạy một tiến trình (như xem log bằng tail -f, hoặc một lệnh ping). Phím tắt nào dùng để BUỘC NGẮT (Dừng) tiến trình đó để trả lại Terminal cho bạn?",
        options: ["Ctrl + Z", "Ctrl + D", "Ctrl + C", "Ctrl + Q"],
        correct: 2,
        explanation:
            "Ctrl + C gửi tín hiệu SIGINT (Interrupt) báo cho tiến trình đang chạy phải tắt đi ngay lập tức.",
    },
    {
        id: 5,
        question:
            "Bạn vừa gõ một nửa lệnh và muốn XÓA TOÀN BỘ từ chỗ con trỏ về phía TRƯỚC (về đầu dòng). Bạn nhấn:",
        options: ["Ctrl + U", "Ctrl + K", "Ctrl + W", "Ctrl + L"],
        correct: 0,
        explanation:
            "Ctrl+U cắt từ con trỏ về đầu dòng. Ctrl+K cắt từ con trỏ về cuối dòng. Text bị cắt sẽ lưu vào bộ nhớ tạm để paste lại bằng Ctrl+Y nếu muốn.",
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
                    <strong className="text-pink-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu hỏi Lịch sử & Phím tắt.
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
                <span className="text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full">
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
