import React, { useState, useRef, useEffect } from "react";
import {
    FilePlus,
    FolderPlus,
    Copy,
    MoveRight,
    Trash2,
    CheckCircle2,
    AlertTriangle,
    ChevronRight,
    PlayCircle,
    Folder,
    File,
    Info,
    Star,
    TerminalSquare,
    Shield,
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
                            Bài trước: 2.2
                        </span>
                        <div className="text-sm font-medium text-rose-400 bg-rose-400/10 px-3 py-1 rounded-full border border-rose-400/20">
                            Phần 2.3
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                {/* Title Section */}
                <div className="text-center space-y-4 py-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        <span className="text-rose-500 font-mono tracking-tighter">
                            Quản lý
                        </span>{" "}
                        File & Thư mục
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Làm chủ 5 lệnh "phép thuật" để tạo ra, sao chép, di
                        chuyển và tiêu hủy mọi thứ trên hệ thống Linux:{" "}
                        <code>touch</code>, <code>mkdir</code>, <code>cp</code>,{" "}
                        <code>mv</code>, <code>rm</code>.
                    </p>
                </div>

                {/* Section 1: The Big Five */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                        <span className="bg-rose-500/20 text-rose-400 p-2 rounded-lg">
                            1
                        </span>
                        5 Lệnh Thao Tác Cốt Lõi
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <CommandCard
                            cmd="touch"
                            desc="Tạo file rỗng"
                            icon={
                                <FilePlus className="text-blue-400" size={24} />
                            }
                            color="blue"
                        />
                        <CommandCard
                            cmd="mkdir"
                            desc="Tạo thư mục"
                            icon={
                                <FolderPlus
                                    className="text-green-400"
                                    size={24}
                                />
                            }
                            color="green"
                        />
                        <CommandCard
                            cmd="cp"
                            desc="Sao chép"
                            icon={
                                <Copy className="text-purple-400" size={24} />
                            }
                            color="purple"
                        />
                        <CommandCard
                            cmd="mv"
                            desc="Di chuyển/Đổi tên"
                            icon={
                                <MoveRight
                                    className="text-orange-400"
                                    size={24}
                                />
                            }
                            color="orange"
                        />
                        <CommandCard
                            cmd="rm"
                            desc="Xóa (Vĩnh viễn!)"
                            icon={
                                <Trash2 className="text-rose-400" size={24} />
                            }
                            color="rose"
                        />
                    </div>
                </section>

                {/* Section 2: Create (touch & mkdir) */}
                <section className="space-y-6 pt-6">
                    <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                            <span className="bg-slate-800 text-blue-400 p-2 rounded-lg font-mono">
                                touch
                            </span>
                            <span className="text-slate-400">&</span>
                            <span className="bg-slate-800 text-green-400 p-2 rounded-lg font-mono">
                                mkdir
                            </span>
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                            <h4 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
                                <FilePlus size={20} /> Lệnh <code>touch</code>{" "}
                                (Tạo File)
                            </h4>
                            <p className="text-sm text-slate-300 mb-4">
                                Tạo nhanh các file rỗng. Nếu file đã tồn tại, nó
                                sẽ <strong>cập nhật thời gian</strong> sửa đổi
                                mới nhất.
                            </p>

                            <div className="space-y-3 font-mono text-sm">
                                <div className="bg-black p-3 rounded-lg border border-slate-800">
                                    <div className="text-slate-500 mb-1">
                                        # Tạo 1 file
                                    </div>
                                    <span className="text-green-400">$</span>{" "}
                                    <span className="text-white">
                                        touch file.txt
                                    </span>
                                </div>
                                <div className="bg-black p-3 rounded-lg border border-slate-800">
                                    <div className="text-slate-500 mb-1">
                                        # Tạo nhiều file 1 lúc
                                    </div>
                                    <span className="text-green-400">$</span>{" "}
                                    <span className="text-white">
                                        touch a.txt b.txt c.txt
                                    </span>
                                </div>
                                <div className="bg-black p-3 rounded-lg border border-slate-800">
                                    <div className="text-slate-500 mb-1">
                                        # Tính năng tự sinh cực mạnh
                                    </div>
                                    <span className="text-green-400">$</span>{" "}
                                    <span className="text-white">
                                        touch log_&#123;1..5&#125;.txt
                                    </span>
                                    <div className="text-slate-400 mt-1">
                                        → Tạo log_1.txt đến log_5.txt
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                            <h4 className="text-green-400 font-bold mb-4 flex items-center gap-2">
                                <FolderPlus size={20} /> Lệnh <code>mkdir</code>{" "}
                                (Tạo Thư mục)
                            </h4>
                            <p className="text-sm text-slate-300 mb-4">
                                Make Directory. Dùng tùy chọn <code>-p</code> để
                                tạo nguyên một cây thư mục lồng nhau chỉ bằng 1
                                lệnh.
                            </p>

                            <div className="space-y-3 font-mono text-sm">
                                <div className="bg-black p-3 rounded-lg border border-slate-800">
                                    <div className="text-slate-500 mb-1">
                                        # Tạo 1 thư mục
                                    </div>
                                    <span className="text-green-400">$</span>{" "}
                                    <span className="text-white">
                                        mkdir projects
                                    </span>
                                </div>
                                <div className="bg-black p-3 rounded-lg border border-slate-800">
                                    <div className="text-slate-500 mb-1">
                                        # LỖI nếu thư mục cha chưa có
                                    </div>
                                    <span className="text-green-400">$</span>{" "}
                                    <span className="text-white">
                                        mkdir a/b/c
                                    </span>{" "}
                                    <span className="text-rose-400">❌</span>
                                </div>
                                <div className="bg-black p-3 rounded-lg border border-slate-800">
                                    <div className="text-slate-500 mb-1">
                                        # Dùng -p tạo cả cây 3 cấp
                                    </div>
                                    <span className="text-green-400">$</span>{" "}
                                    <span className="text-white">
                                        mkdir -p a/b/c
                                    </span>{" "}
                                    <span className="text-green-400">✅</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Copy & Move */}
                <section className="space-y-6 pt-6">
                    <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                            <span className="bg-slate-800 text-purple-400 p-2 rounded-lg font-mono">
                                cp
                            </span>
                            <span className="text-slate-400">&</span>
                            <span className="bg-slate-800 text-orange-400 p-2 rounded-lg font-mono">
                                mv
                            </span>
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* CP */}
                        <div className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700">
                            <h4 className="text-purple-400 font-bold mb-4 flex items-center gap-2">
                                <Copy size={20} /> <code>cp</code> (Copy - Sao
                                chép)
                            </h4>
                            <p className="text-sm text-slate-300 mb-4 border-b border-slate-700 pb-4">
                                Sao chép file.{" "}
                                <strong className="text-white">
                                    File gốc vẫn còn nguyên
                                </strong>{" "}
                                sau khi lệnh chạy xong.
                            </p>

                            <ul className="space-y-4 text-sm font-mono mt-4">
                                <li>
                                    <div className="text-slate-400 mb-1">
                                        1. Copy và đổi tên:
                                    </div>
                                    <span className="text-green-400">$</span> cp
                                    old.txt new_copy.txt
                                </li>
                                <li>
                                    <div className="text-slate-400 mb-1">
                                        2. Copy file vào thư mục:
                                    </div>
                                    <span className="text-green-400">$</span> cp
                                    data.csv backup/
                                </li>
                                <li className="bg-purple-500/10 p-3 rounded-lg border border-purple-500/30">
                                    <div className="text-purple-300 font-bold mb-1 flex items-center gap-1">
                                        <AlertTriangle size={14} /> QUAN TRỌNG:
                                        COPY THƯ MỤC
                                    </div>
                                    <span className="text-green-400">$</span> cp{" "}
                                    <strong className="text-purple-400">
                                        -r
                                    </strong>{" "}
                                    src/ backup_src/
                                    <br />
                                    <span className="text-xs text-slate-400 font-sans mt-1 block">
                                        Bắt buộc phải có <code>-r</code>{" "}
                                        (recursive) để copy cả thư mục!
                                    </span>
                                </li>
                                <li>
                                    <div className="text-slate-400 mb-1">
                                        3. Backup ĐÚNG NHẤT (giữ quyền/ngày
                                        tháng):
                                    </div>
                                    <span className="text-green-400">$</span> cp{" "}
                                    <strong className="text-purple-400">
                                        -a
                                    </strong>{" "}
                                    project/ project_bak/
                                </li>
                            </ul>
                        </div>

                        {/* MV */}
                        <div className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700">
                            <h4 className="text-orange-400 font-bold mb-4 flex items-center gap-2">
                                <MoveRight size={20} /> <code>mv</code> (Move -
                                Di chuyển/Đổi tên)
                            </h4>
                            <p className="text-sm text-slate-300 mb-4 border-b border-slate-700 pb-4">
                                Di chuyển vị trí file.{" "}
                                <strong className="text-rose-400">
                                    File gốc sẽ BIẾN MẤT
                                </strong>
                                . Linux KHÔNG CÓ lệnh "rename", mà dùng luôn{" "}
                                <code>mv</code>!
                            </p>

                            <ul className="space-y-4 text-sm font-mono mt-4">
                                <li>
                                    <div className="text-slate-400 mb-1">
                                        1. Đổi tên file (vì đích là file mới):
                                    </div>
                                    <span className="text-green-400">$</span> mv
                                    old_name.txt new_name.txt
                                </li>
                                <li>
                                    <div className="text-slate-400 mb-1">
                                        2. Di chuyển vào thư mục (đích là
                                        folder):
                                    </div>
                                    <span className="text-green-400">$</span> mv
                                    file.txt Documents/
                                </li>
                                <li className="bg-orange-500/10 p-3 rounded-lg border border-orange-500/30">
                                    <div className="text-orange-300 font-bold mb-1 flex items-center gap-1">
                                        <Info size={14} /> KHÔNG CẦN -r
                                    </div>
                                    <span className="text-green-400">$</span> mv
                                    old_folder/ new_folder/
                                    <br />
                                    <span className="text-xs text-slate-400 font-sans mt-1 block">
                                        Lệnh mv di chuyển nguyên cả cây thư mục
                                        cái rụp, không cần -r.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 4: The Dangerous RM */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-rose-500/20 text-rose-500 p-2 rounded-lg font-mono">
                            rm
                        </span>
                        Lệnh Nguy Hiểm Nhất Hệ Thống
                    </h3>

                    <div className="bg-gradient-to-br from-rose-900/40 to-slate-900 p-6 md:p-8 rounded-3xl border border-rose-500/30">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1 space-y-4">
                                <div className="bg-rose-500/20 text-rose-300 font-bold px-4 py-2 rounded-lg inline-block mb-2">
                                    ⚠️ LINUX KHÔNG CÓ THÙNG RÁC!
                                </div>
                                <p className="text-slate-300 text-lg">
                                    Khi bạn dùng lệnh <code>rm</code>, file sẽ
                                    bị xóa thẳng khỏi ổ cứng ngay lập tức.{" "}
                                    <strong className="text-white">
                                        Không có đường lui. Không có Ctrl+Z.
                                    </strong>
                                </p>

                                <div className="bg-black/50 p-4 rounded-xl border border-slate-700 font-mono text-sm space-y-3">
                                    <div>
                                        <span className="text-slate-500">
                                            # Xóa 1 file bình thường
                                        </span>
                                        <br />
                                        <span className="text-green-400">
                                            $
                                        </span>{" "}
                                        rm file.txt
                                    </div>
                                    <div>
                                        <span className="text-slate-500">
                                            # Xóa thư mục BẮT BUỘC cần -r
                                        </span>
                                        <br />
                                        <span className="text-green-400">
                                            $
                                        </span>{" "}
                                        rm{" "}
                                        <strong className="text-rose-400">
                                            -r
                                        </strong>{" "}
                                        folder/
                                    </div>
                                    <div>
                                        <span className="text-slate-500">
                                            # Combo Hủy Diệt (Force + Recursive)
                                        </span>
                                        <br />
                                        <span className="text-green-400">
                                            $
                                        </span>{" "}
                                        rm{" "}
                                        <strong className="text-rose-500 font-bold">
                                            -rf
                                        </strong>{" "}
                                        folder/ <br />
                                        <span className="text-xs text-slate-400 font-sans">
                                            (Xóa sạch thư mục và mọi thứ bên
                                            trong mà không hề hỏi 1 câu!)
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-[40%] bg-slate-950 p-6 rounded-2xl border-2 border-rose-500/50 shadow-[0_0_30px_rgba(244,63,94,0.15)]">
                                <h4 className="text-rose-400 font-bold flex items-center gap-2 mb-4 border-b border-rose-500/30 pb-2">
                                    <Shield size={20} /> Mẹo An Toàn (Must Have)
                                </h4>
                                <p className="text-sm text-slate-300 mb-4">
                                    Luôn tạo Alias này trong file cấu hình để
                                    máy tính{" "}
                                    <strong className="text-white">
                                        hỏi lại bạn trước khi xóa
                                    </strong>
                                    :
                                </p>
                                <div className="bg-black p-3 rounded border border-slate-800 font-mono text-xs text-green-400 mb-4">
                                    alias rm='rm -i'
                                    <br />
                                    alias cp='cp -i'
                                    <br />
                                    alias mv='mv -i'
                                </div>
                                <p className="text-xs text-slate-400 italic">
                                    (-i = interactive: Hiện prompt xác nhận y/n
                                    trước khi thực hiện hành động ghi đè hoặc
                                    xóa).
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 5: Wildcards */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-yellow-500/20 text-yellow-400 p-2 rounded-lg">
                            ✨
                        </span>
                        Wildcard: Gõ ít, Làm nhiều
                    </h3>
                    <div className="bg-slate-800/50 rounded-3xl border border-slate-700 p-6">
                        <p className="text-slate-300 mb-4">
                            Dấu sao (<code>*</code>) thay thế cho{" "}
                            <strong>bất kỳ chuỗi ký tự nào</strong>. Nó giúp bạn
                            dọn dẹp hàng ngàn file chỉ với 1 lệnh!
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 font-mono text-sm">
                                <div className="text-green-400 mb-2">
                                    $ rm *.txt
                                </div>
                                <div className="text-slate-400 font-sans text-xs">
                                    Xóa TẤT CẢ các file có đuôi .txt trong thư
                                    mục.
                                </div>
                            </div>
                            <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 font-mono text-sm">
                                <div className="text-green-400 mb-2">
                                    $ mv log_* archive/
                                </div>
                                <div className="text-slate-400 font-sans text-xs">
                                    Chuyển mọi file bắt đầu bằng chữ "log_" vào
                                    thư mục archive.
                                </div>
                            </div>
                            <div className="bg-slate-900 p-4 rounded-xl border border-rose-500/30 shadow-inner font-mono text-sm">
                                <div className="text-rose-400 mb-2">
                                    $ rm -rf *
                                </div>
                                <div className="text-rose-300 font-sans text-xs font-bold flex items-start gap-1">
                                    <AlertTriangle
                                        size={14}
                                        className="shrink-0 mt-0.5"
                                    />{" "}
                                    Xóa sạch bách mọi thứ trong thư mục hiện
                                    tại!
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 6: Interactive Terminal Simulator (File Manager) */}
                <section className="space-y-6 pt-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                <span className="bg-teal-500/20 text-teal-400 p-2 rounded-lg">
                                    💻
                                </span>
                                Thực hành: Dọn dẹp thư mục Downloads
                            </h3>
                            <p className="text-slate-400 mt-2">
                                Hệ thống ảo dưới đây đang ở{" "}
                                <code>/home/alice/Downloads</code>. Hãy dùng{" "}
                                <code>touch</code>, <code>mkdir</code>,{" "}
                                <code>mv</code>, <code>rm</code> để thao tác với
                                các file nhé!
                            </p>
                        </div>
                    </div>

                    <FileManagerSimulator />
                </section>

                {/* Section 7: Quiz */}
                <section className="space-y-6 pt-8">
                    <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-xl">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-yellow-500/20 text-yellow-500 p-2 rounded-lg">
                                    6
                                </span>
                                Kiểm tra kiến thức Quản lý File
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
                        Sau khi đã biết tạo và xóa file, tiếp theo chúng bảo sẽ
                        học cách đọc nội dung bên trong chúng!
                    </p>
                    <button className="bg-rose-600 hover:bg-rose-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-rose-500/20">
                        Bài 2.4 — Xem nội dung file (cat, less, head){" "}
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
            <div className="text-xs text-slate-400">{desc}</div>
        </div>
    );
}

// --- File Manager Simulator ---
function FileManagerSimulator() {
    const [fs, setFs] = useState({
        "file1.txt": "file",
        "photo.jpg": "file",
        "script.py": "file",
        "music.mp3": "file",
        backup: "dir",
    });

    const [history, setHistory] = useState([
        {
            type: "system",
            text: "Bạn đang đứng ở ~/Downloads. Các lệnh hỗ trợ: ls, touch, mkdir, cp, mv, rm, clear",
        },
    ]);
    const [input, setInput] = useState("");
    const endRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const executeCommand = (cmd) => {
        const trimmed = cmd.trim();
        if (!trimmed) return;

        setHistory((prev) => [...prev, { type: "input", text: trimmed }]);

        // Parse parts respecting quotes (simple version)
        const parts =
            trimmed
                .match(/(?:[^\s"']+|"[^"]*"|'[^']*')+/g)
                ?.map((p) => p.replace(/['"]/g, "")) || [];
        const baseCmd = parts[0];
        let output = "";
        let newFs = { ...fs };

        try {
            switch (baseCmd) {
                case "clear":
                    setHistory([]);
                    setInput("");
                    return;

                case "ls":
                    if (Object.keys(newFs).length === 0) {
                        output = "";
                    } else {
                        const items = Object.keys(newFs).sort();
                        // Simple formatting: folders have /
                        output = items
                            .map((k) => (newFs[k] === "dir" ? `${k}/` : k))
                            .join("  ");
                    }
                    break;

                case "touch":
                    if (parts.length < 2)
                        throw new Error("touch: missing file operand");
                    for (let i = 1; i < parts.length; i++) {
                        if (parts[i].startsWith("-")) continue; // skip options for sim
                        if (newFs[parts[i]] === "dir") continue; // don't touch dir in this simple sim
                        newFs[parts[i]] = "file";
                    }
                    break;

                case "mkdir":
                    if (parts.length < 2)
                        throw new Error("mkdir: missing operand");
                    for (let i = 1; i < parts.length; i++) {
                        if (parts[i] === "-p") continue;
                        if (newFs[parts[i]])
                            throw new Error(
                                `mkdir: cannot create directory '${parts[i]}': File exists`,
                            );
                        newFs[parts[i]] = "dir";
                    }
                    break;

                case "cp":
                    if (parts.length < 3)
                        throw new Error("cp: missing file operand");
                    const cpSrc = parts[1];
                    const cpDest = parts[2];

                    if (!newFs[cpSrc])
                        throw new Error(
                            `cp: cannot stat '${cpSrc}': No such file or directory`,
                        );
                    if (newFs[cpSrc] === "dir" && !parts.includes("-r"))
                        throw new Error(
                            `cp: -r not specified; omitting directory '${cpSrc}'`,
                        );

                    // Simple logic: if dest is a dir, copy inside (simulated by creating named "dest/src") - Note: UI doesn't support nested viewing yet, so we just simulate root level
                    if (newFs[cpDest] === "dir") {
                        output = `(Mô phỏng: Đã copy vào trong folder ${cpDest})`;
                    } else {
                        newFs[cpDest] = newFs[cpSrc]; // Duplicate
                    }
                    break;

                case "mv":
                    if (parts.length < 3)
                        throw new Error("mv: missing file operand");
                    const mvSrc = parts[1];
                    const mvDest = parts[2];

                    // Handle wildcards roughly (very basic)
                    if (mvSrc.includes("*")) {
                        const ext = mvSrc.replace("*", "");
                        const matchingFiles = Object.keys(newFs).filter((k) =>
                            k.endsWith(ext),
                        );
                        if (matchingFiles.length === 0)
                            throw new Error(
                                `mv: cannot stat '${mvSrc}': No such file or directory`,
                            );
                        if (newFs[mvDest] !== "dir")
                            throw new Error(
                                `mv: target '${mvDest}' is not a directory`,
                            );

                        matchingFiles.forEach((f) => delete newFs[f]);
                        output = `(Mô phỏng: Đã di chuyển ${matchingFiles.length} files vào ${mvDest}/)`;
                        break;
                    }

                    if (!newFs[mvSrc])
                        throw new Error(
                            `mv: cannot stat '${mvSrc}': No such file or directory`,
                        );

                    if (newFs[mvDest] === "dir") {
                        delete newFs[mvSrc];
                        output = `(Mô phỏng: Đã di chuyển ${mvSrc} vào folder ${mvDest}/)`;
                    } else {
                        // Rename
                        newFs[mvDest] = newFs[mvSrc];
                        delete newFs[mvSrc];
                    }
                    break;

                case "rm":
                    if (parts.length < 2)
                        throw new Error("rm: missing operand");

                    const isRecursive =
                        parts.includes("-r") ||
                        parts.includes("-rf") ||
                        parts.includes("-fr");

                    // Basic wildcard support
                    if (
                        parts[1] === "*" ||
                        parts.includes("*.txt") ||
                        parts.includes("*.jpg")
                    ) {
                        let toDelete = [];
                        if (parts[1] === "*")
                            toDelete = Object.keys(newFs).filter(
                                (k) => newFs[k] === "file",
                            );
                        else {
                            const ext = parts
                                .find((p) => p.startsWith("*"))
                                .replace("*", "");
                            toDelete = Object.keys(newFs).filter((k) =>
                                k.endsWith(ext),
                            );
                        }
                        toDelete.forEach((k) => delete newFs[k]);
                        break;
                    }

                    for (let i = 1; i < parts.length; i++) {
                        if (parts[i].startsWith("-")) continue;
                        if (!newFs[parts[i]])
                            throw new Error(
                                `rm: cannot remove '${parts[i]}': No such file or directory`,
                            );
                        if (newFs[parts[i]] === "dir" && !isRecursive)
                            throw new Error(
                                `rm: cannot remove '${parts[i]}': Is a directory`,
                            );

                        delete newFs[parts[i]];
                    }
                    break;

                default:
                    throw new Error(`bash: ${baseCmd}: command not found`);
            }

            setFs(newFs);
        } catch (e) {
            output = e.message;
        }

        if (output) {
            setHistory((prev) => [...prev, { type: "output", text: output }]);
        }
        setInput("");
    };

    return (
        <div className="grid md:grid-cols-2 gap-6">
            {/* File System Visualizer */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 h-[300px] flex flex-col">
                <div className="text-sm font-bold text-slate-400 mb-4 border-b border-slate-700 pb-2 uppercase tracking-wider">
                    Giao diện GUI (Thư mục ~/Downloads)
                </div>
                <div className="flex-1 overflow-y-auto">
                    {Object.keys(fs).length === 0 ? (
                        <div className="text-slate-500 italic text-center mt-10">
                            Thư mục trống
                        </div>
                    ) : (
                        <div className="grid grid-cols-3 gap-4">
                            {Object.keys(fs)
                                .sort()
                                .map((fileName) => (
                                    <div
                                        key={fileName}
                                        className="flex flex-col items-center gap-2 text-center group"
                                    >
                                        {fs[fileName] === "dir" ? (
                                            <Folder
                                                className="text-blue-400 group-hover:scale-110 transition-transform"
                                                size={40}
                                            />
                                        ) : (
                                            <File
                                                className="text-slate-300 group-hover:scale-110 transition-transform"
                                                size={40}
                                            />
                                        )}
                                        <div className="text-xs break-all w-full leading-tight font-medium text-slate-300">
                                            {fileName}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Terminal */}
            <div
                className="bg-[#2c001e] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden font-mono text-[14px] cursor-text flex flex-col h-[300px]"
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
                                        ~/Downloads
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
                            ~/Downloads
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
            "Bạn gõ lệnh `mkdir a/b/c` nhưng bị báo lỗi 'No such file or directory'. Nguyên nhân do thư mục 'a' và 'b' chưa tồn tại. Phải thêm tùy chọn nào để Linux TỰ TẠO LUÔN thư mục cha?",
        options: [
            "mkdir -r a/b/c",
            "mkdir -p a/b/c",
            "mkdir -f a/b/c",
            "mkdir -a a/b/c",
        ],
        correct: 1,
        explanation:
            "Tùy chọn -p (parents) bảo mkdir tạo cả các thư mục cấp cha nếu chúng chưa tồn tại. Rất tiện khi tạo cấu trúc dự án!",
    },
    {
        id: 2,
        question: "Lệnh nào sau đây sẽ ĐỔI TÊN file 'old.txt' thành 'new.txt'?",
        options: [
            "rename old.txt new.txt",
            "cp old.txt new.txt",
            "mv old.txt new.txt",
            "change old.txt new.txt",
        ],
        correct: 2,
        explanation:
            "Trong Linux không có lệnh rename tiêu chuẩn. Lệnh mv (move) thực chất là di chuyển file vào CÙNG một thư mục nhưng với TÊN MỚI.",
    },
    {
        id: 3,
        question:
            "Tùy chọn BẮT BUỘC phải có khi bạn muốn copy (cp) hoặc xóa (rm) MỘT THƯ MỤC (và nội dung bên trong nó) là gì?",
        options: [
            "-f (force)",
            "-p (preserve)",
            "-i (interactive)",
            "-r (recursive)",
        ],
        correct: 3,
        explanation:
            "Cả cp và rm đều cần cờ -r (recursive - đệ quy) để chúng biết là phải 'chui' vào bên trong thư mục và xử lý từng file con một.",
    },
    {
        id: 4,
        question: "Lệnh `rm -rf /` sẽ làm gì?",
        options: [
            "Xóa thư mục rỗng.",
            "Xóa các file tạm thời trong hệ thống để dọn rác.",
            "Xóa tất cả các file có đuôi .rf",
            "Xóa toàn bộ hệ điều hành (Tự sát).",
        ],
        correct: 3,
        explanation:
            "ĐÂY LÀ LỆNH CẤM KỴ! -r là xóa thư mục, -f là ép buộc không cần hỏi, / là GỐC CỦA HỆ THỐNG. Lệnh này sẽ xóa sạch dữ liệu trên máy tính!",
    },
    {
        id: 5,
        question:
            "Bạn muốn di chuyển TẤT CẢ các ảnh JPG vào thư mục 'Photos'. Lệnh kết hợp wildcard nào là chuẩn nhất?",
        options: [
            "mv *.jpg Photos/",
            "mv ?.jpg Photos/",
            "cp all.jpg Photos/",
            "move *.jpg Photos/",
        ],
        correct: 0,
        explanation:
            "Dấu sao (*) đại diện cho chuỗi ký tự bất kỳ. `*.jpg` nghĩa là 'bất cứ file nào kết thúc bằng .jpg'.",
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
                    câu hỏi Quản lý File.
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
