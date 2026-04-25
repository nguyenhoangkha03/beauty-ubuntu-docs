import React, { useState } from "react";
import {
    AlertTriangle,
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    BookOpen,
    CheckCircle2,
    ChevronRight,
    ClipboardCheck,
    Code2,
    Copy,
    Edit3,
    FileCog,
    FileText,
    HelpCircle,
    Home,
    Info,
    Keyboard,
    Layers,
    ListChecks,
    MousePointer2,
    Move,
    Replace,
    RotateCcw,
    Save,
    Search,
    Settings,
    TerminalSquare,
    TextCursorInput,
    Undo2,
    X,
    Zap,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-lime-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 border-b border-slate-800 sticky top-0 z-50 backdrop-blur">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🐧</span>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Linux/Ubuntu
                            </h1>
                            <p className="text-xs text-slate-500 hidden md:block">
                                Text Editor & xử lý văn bản: Nano cho người mới
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400 hidden md:inline-block">
                            Phần 7 — Text Editor
                        </span>
                        <div className="text-sm font-medium text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/20">
                            Phần 7.1
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <Hero />

                <section className="space-y-6">
                    <SectionTitle
                        n="1"
                        color="lime"
                        icon={<Edit3 size={22} />}
                        title="Nano là gì? Vì sao phù hợp cho người mới?"
                    />
                    <NanoIntro />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="2"
                        color="cyan"
                        icon={<TerminalSquare size={22} />}
                        title="Mở file bằng Nano"
                    />
                    <OpenNanoGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="3"
                        color="blue"
                        icon={<Layers size={22} />}
                        title="Hiểu giao diện Nano"
                    />
                    <NanoInterface />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="4"
                        color="green"
                        icon={<Save size={22} />}
                        title="Thao tác cơ bản: gõ, lưu, thoát"
                    />
                    <BasicActions />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="5"
                        color="purple"
                        icon={<Move size={22} />}
                        title="Di chuyển con trỏ nhanh"
                    />
                    <MovementGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="6"
                        color="amber"
                        icon={<Copy size={22} />}
                        title="Chỉnh sửa: xóa, cut, copy, paste, undo"
                    />
                    <EditingGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="7"
                        color="pink"
                        icon={<Search size={22} />}
                        title="Tìm kiếm và thay thế"
                    />
                    <SearchReplaceGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="8"
                        color="orange"
                        icon={<Settings size={22} />}
                        title="Tùy chọn khi mở Nano"
                    />
                    <NanoOptions />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="9"
                        color="teal"
                        icon={<FileCog size={22} />}
                        title="Cấu hình mặc định bằng ~/.nanorc"
                    />
                    <NanorcGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="10"
                        color="rose"
                        icon={<Code2 size={22} />}
                        title="Ví dụ thực tế hay dùng"
                    />
                    <RealWorldExamples />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="11"
                        color="sky"
                        icon={<Keyboard size={22} />}
                        title="Bảng phím tắt quan trọng"
                    />
                    <ShortcutCheatsheet />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="12"
                        color="emerald"
                        icon={<ClipboardCheck size={22} />}
                        title="Thực hành tổng hợp"
                    />
                    <PracticeChecklist />
                </section>

                <SummarySection />

                <section className="space-y-6 pt-4">
                    <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-xl">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-lime-500/20 text-lime-400 p-2 rounded-lg">
                                    <ClipboardCheck size={20} />
                                </span>
                                Kiểm tra nhanh: Nano editor
                            </h3>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                <div className="text-center pt-8 border-t border-slate-800">
                    <p className="text-slate-400 mb-4">
                        Bạn đã hoàn thành Phần 7.1 — Nano editor cho người mới.
                    </p>
                    <button className="bg-lime-600 hover:bg-lime-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-lime-500/20">
                        Bài tiếp theo: 7.2 — Vim Editor mạnh mẽ{" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

function Hero() {
    const cards = [
        [Edit3, "Mở là gõ", "Không có mode như Vim"],
        [Save, "Ctrl+O", "Lưu file"],
        [X, "Ctrl+X", "Thoát Nano"],
        [Search, "Ctrl+W", "Tìm kiếm nhanh"],
    ];
    return (
        <section className="text-center space-y-5 py-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-300 text-sm font-medium">
                <Zap size={16} /> nano · Ctrl+O · Ctrl+X · Ctrl+W · Ctrl+K ·
                ~/.nanorc
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Nano — Editor{" "}
                <span className="text-lime-400 font-mono">Dễ Dùng</span> Cho
                Người Mới
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Bài này giúp bạn dùng Nano để sửa file cấu hình Linux an toàn:
                mở file, lưu, thoát, di chuyển nhanh, cut/copy/paste, tìm-thay
                thế, bật số dòng và cấu hình mặc định bằng{" "}
                <code>~/.nanorc</code>.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4">
                {cards.map(([Icon, title, desc]) => (
                    <div
                        key={title}
                        className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 text-left"
                    >
                        <Icon className="text-lime-400 mb-3" size={24} />
                        <div className="font-bold text-white">{title}</div>
                        <div className="text-xs text-slate-500">{desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function SectionTitle({ n, color, icon, title }) {
    const colorMap = {
        lime: "bg-lime-500/20 text-lime-400",
        cyan: "bg-cyan-500/20 text-cyan-400",
        blue: "bg-blue-500/20 text-blue-400",
        green: "bg-green-500/20 text-green-400",
        purple: "bg-purple-500/20 text-purple-400",
        amber: "bg-amber-500/20 text-amber-400",
        pink: "bg-pink-500/20 text-pink-400",
        orange: "bg-orange-500/20 text-orange-400",
        teal: "bg-teal-500/20 text-teal-400",
        rose: "bg-rose-500/20 text-rose-400",
        sky: "bg-sky-500/20 text-sky-400",
        emerald: "bg-emerald-500/20 text-emerald-400",
    };
    return (
        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <span
                className={`${colorMap[color]} p-2 rounded-lg flex items-center gap-1`}
            >
                {icon}
                <span className="text-sm font-mono">{n}</span>
            </span>
            {title}
        </h3>
    );
}

function MiniPoint({ icon, tone, title, text }) {
    const toneMap = {
        lime: "bg-lime-500/10 border-lime-500/20 text-lime-300",
        cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
        blue: "bg-blue-500/10 border-blue-500/20 text-blue-300",
        green: "bg-green-500/10 border-green-500/20 text-green-300",
        purple: "bg-purple-500/10 border-purple-500/20 text-purple-300",
        amber: "bg-amber-500/10 border-amber-500/20 text-amber-300",
        pink: "bg-pink-500/10 border-pink-500/20 text-pink-300",
        orange: "bg-orange-500/10 border-orange-500/20 text-orange-300",
        teal: "bg-teal-500/10 border-teal-500/20 text-teal-300",
        rose: "bg-rose-500/10 border-rose-500/20 text-rose-300",
    };
    return (
        <div className={`${toneMap[tone]} border rounded-2xl p-4`}>
            <div className="flex items-center gap-2 font-bold text-white mb-1">
                {icon}
                {title}
            </div>
            <p className="text-sm text-slate-300">{text}</p>
        </div>
    );
}

function TerminalBlock({ title, code }) {
    return (
        <div className="bg-slate-950 border border-slate-700 rounded-2xl overflow-hidden shadow-xl font-mono text-sm">
            <div className="bg-slate-900 px-4 py-3 border-b border-slate-700 flex items-center justify-between">
                <span className="text-slate-400 text-xs uppercase tracking-widest">
                    {title}
                </span>
                <TerminalSquare size={16} className="text-slate-500" />
            </div>
            <pre className="p-4 overflow-x-auto text-slate-300 leading-relaxed whitespace-pre-wrap">
                <code>{code}</code>
            </pre>
        </div>
    );
}

function NanoIntro() {
    return (
        <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                <div className="flex items-start gap-5">
                    <div className="bg-lime-500/15 text-lime-400 p-4 rounded-2xl border border-lime-500/20">
                        <Edit3 size={42} />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">
                            Nano là text editor chạy trong terminal
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            Nano đơn giản hơn Vim vì mở lên là gõ được ngay. Các
                            phím tắt quan trọng luôn hiện ở cuối màn hình, nên
                            rất phù hợp khi bạn mới làm quen Linux hoặc đang sửa
                            file qua SSH.
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                            <MiniPoint
                                icon={<Keyboard size={18} />}
                                tone="lime"
                                title="Không cần học mode"
                                text="Bạn không phải chuyển Insert/Normal mode như Vim."
                            />
                            <MiniPoint
                                icon={<TerminalSquare size={18} />}
                                tone="cyan"
                                title="Dùng tốt qua SSH"
                                text="Không cần giao diện đồ họa, chỉ cần terminal là đủ."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-2 space-y-3">
                <CompareCard
                    title="Nano"
                    cmd="nano file.txt"
                    desc="Mở ra gõ luôn, dễ học nhất cho người mới."
                    tone="lime"
                />
                <CompareCard
                    title="Vim"
                    cmd="vim file.txt"
                    desc="Cực mạnh, nhưng cần học mode và phím tắt riêng."
                    tone="amber"
                />
                <CompareCard
                    title="Gedit"
                    cmd="gedit file.txt"
                    desc="Có giao diện đồ họa, không phù hợp server SSH không desktop."
                    tone="blue"
                />
            </div>
        </div>
    );
}

function CompareCard({ title, cmd, desc, tone }) {
    const map = {
        lime: "text-lime-300",
        amber: "text-amber-300",
        blue: "text-blue-300",
    };
    return (
        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4">
            <div className="font-bold text-white mb-1">{title}</div>
            <code className={`${map[tone]} text-sm`}>{cmd}</code>
            <p className="text-xs text-slate-500 mt-2">{desc}</p>
        </div>
    );
}

function OpenNanoGuide() {
    const [mode, setMode] = useState("basic");
    const code = {
        basic: `# Mở file có sẵn
$ nano file.txt

# Tạo file mới
$ nano newfile.txt

# Mở file trong thư mục hiện tại
$ nano notes.md`,
        root: `# Mở file cần quyền root
$ sudo nano /etc/hosts
$ sudo nano /etc/ssh/sshd_config
$ sudo nano /etc/crontab

# Cẩn thận với sudo nano:
# sửa sai file hệ thống có thể làm dịch vụ lỗi.`,
        line: `# Mở file và nhảy đến dòng 50
$ nano +50 file.txt

# Mở file ở chế độ chỉ đọc
$ nano -v file.txt

# Hiện số dòng ngay khi mở
$ nano -l file.txt`,
        combo: `# Không wrap dòng dài + hiện số dòng
$ nano -lw file.txt

# Tự indent khi viết script/code
$ nano -i script.sh

# Bật syntax highlighting theo ngôn ngữ
$ nano -Y python file.py
$ nano -Y sh script.sh`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["basic", "Mở/tạo file"],
                        ["root", "File cần sudo"],
                        ["line", "Dòng/chỉ đọc"],
                        ["combo", "Kết hợp option"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setMode(k)}
                            className={`w-full text-left rounded-xl border p-4 font-bold ${mode === k ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`open nano — ${mode}`}
                        code={code[mode]}
                    />
                </div>
            </div>
        </div>
    );
}

function NanoInterface() {
    const [showHelp, setShowHelp] = useState(true);
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="bg-slate-950 border border-slate-700 rounded-3xl overflow-hidden font-mono shadow-2xl">
                <div className="bg-slate-800 px-4 py-3 border-b border-slate-700 flex justify-between text-sm">
                    <span className="text-lime-300 font-bold">
                        GNU nano 6.2
                    </span>
                    <span className="text-slate-300">file.txt</span>
                </div>
                <div className="p-5 min-h-[260px] text-slate-200 leading-8">
                    <div>Đây là nội dung file</div>
                    <div>Dòng 2</div>
                    <div>Dòng 3</div>
                    <div>
                        <span className="bg-lime-400 text-slate-950 px-1 animate-pulse">
                            _
                        </span>
                    </div>
                </div>
                {showHelp && (
                    <div className="border-t border-slate-700 bg-slate-900 grid grid-cols-2 md:grid-cols-3 gap-px text-xs">
                        <HelpKey k="^G" text="Help" />
                        <HelpKey k="^O" text="Save" />
                        <HelpKey k="^X" text="Exit" />
                        <HelpKey k="^K" text="Cut" />
                        <HelpKey k="^U" text="Paste" />
                        <HelpKey k="^W" text="Search" />
                    </div>
                )}
            </div>
            <div className="mt-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 text-sm text-blue-100">
                    Ký hiệu <code>^</code> nghĩa là phím <strong>Ctrl</strong>.
                    Ví dụ <code>^X</code> = <strong>Ctrl + X</strong>.
                </div>
                <button
                    onClick={() => setShowHelp(!showHelp)}
                    className="px-4 py-2 rounded-xl border border-slate-600 bg-slate-900 hover:bg-slate-700 font-bold text-sm"
                >
                    {showHelp ? "Ẩn" : "Hiện"} thanh phím tắt
                </button>
            </div>
        </div>
    );
}

function HelpKey({ k, text }) {
    return (
        <div className="p-3 flex gap-2">
            <span className="text-lime-300 font-bold">{k}</span>
            <span className="text-slate-400">{text}</span>
        </div>
    );
}

function BasicActions() {
    const [mode, setMode] = useState("save");
    const code = {
        type: `# Mở file
$ nano test.txt

# Sau đó gõ nội dung bình thường như Notepad.
# Dùng phím mũi tên để di chuyển con trỏ.
# Không cần bấm i để vào chế độ insert như Vim.`,
        save: `Ctrl + O

Nano sẽ hỏi:
File Name to Write: test.txt

Nhấn Enter để giữ tên cũ.
Hoặc gõ tên mới rồi Enter để Save As.`,
        exit: `Ctrl + X

Nếu chưa lưu, Nano hỏi:
Save modified buffer?

Y        lưu rồi thoát
N        không lưu, thoát luôn
Ctrl+C   hủy, quay lại editor`,
        suspend: `Ctrl + Z

# Tạm treo Nano về shell
[1]+  Stopped  nano file.txt

# Quay lại Nano:
$ fg

# Dùng khi cần chạy lệnh nhanh mà chưa muốn thoát Nano.`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["type", "Gõ nội dung"],
                        ["save", "Lưu Ctrl+O"],
                        ["exit", "Thoát Ctrl+X"],
                        ["suspend", "Tạm treo Ctrl+Z"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setMode(k)}
                            className={`w-full text-left rounded-xl border p-4 font-bold ${mode === k ? "bg-green-500/10 border-green-500/40 text-green-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`basic action — ${mode}`}
                        code={code[mode]}
                    />
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-3 mt-6">
                <MiniPoint
                    icon={<Save size={18} />}
                    tone="green"
                    title="Ctrl+O"
                    text="Write Out: lưu file."
                />
                <MiniPoint
                    icon={<X size={18} />}
                    tone="rose"
                    title="Ctrl+X"
                    text="Exit: thoát Nano."
                />
                <MiniPoint
                    icon={<Info size={18} />}
                    tone="cyan"
                    title="Enter"
                    text="Xác nhận tên file khi lưu."
                />
            </div>
        </div>
    );
}

function MovementGuide() {
    const shortcuts = [
        [ArrowLeft, "← → ↑ ↓", "Di chuyển từng ký tự/dòng"],
        [Home, "Ctrl+A", "Đầu dòng"],
        [ArrowRight, "Ctrl+E", "Cuối dòng"],
        [ArrowUp, "Ctrl+Y", "Lên 1 trang"],
        [ArrowDown, "Ctrl+V", "Xuống 1 trang"],
        [TextCursorInput, "Ctrl+W rồi Ctrl+T", "Nhảy đến dòng số"],
        [ArrowUp, "Alt+\\", "Đầu file"],
        [ArrowDown, "Alt+/", "Cuối file"],
    ];
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                {shortcuts.map(([Icon, key, desc]) => (
                    <div
                        key={key}
                        className="bg-slate-950 border border-slate-700 rounded-2xl p-4"
                    >
                        <Icon className="text-purple-400 mb-3" size={24} />
                        <div className="font-mono text-purple-300 font-black">
                            {key}
                        </div>
                        <div className="text-sm text-slate-400 mt-1">
                            {desc}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 bg-purple-500/10 border border-purple-500/30 rounded-2xl p-5 text-purple-100">
                Khi sửa file cấu hình dài, bộ đôi quan trọng nhất là{" "}
                <code>Ctrl+W</code> để tìm từ khóa và{" "}
                <code>Ctrl+W rồi Ctrl+T</code> để nhảy đến dòng cụ thể.
            </div>
        </div>
    );
}

function EditingGuide() {
    const [mode, setMode] = useState("line");
    const code = {
        delete: `Backspace  → xóa ký tự bên trái con trỏ
Delete     → xóa ký tự bên phải con trỏ

Ctrl + K   → cắt/xóa cả dòng hiện tại
Alt  + 6   → copy dòng hiện tại
Ctrl + U   → paste dòng vừa cut/copy`,
        line: `# Cắt nguyên dòng
Ctrl + K

# Nhấn Ctrl+K nhiều lần để cắt nhiều dòng liên tiếp
Ctrl + K
Ctrl + K
Ctrl + K

# Paste lại ở vị trí con trỏ
Ctrl + U`,
        region: `# Chọn vùng rồi cắt/copy
Alt + A        # bắt đầu chọn vùng, đặt mark
Mũi tên        # mở rộng vùng chọn
Ctrl + K       # cắt vùng đã chọn
Alt + 6        # copy vùng đã chọn
Ctrl + U       # paste`,
        undo: `Alt + U   → Undo, hoàn tác
Alt + E   → Redo, làm lại

# Nếu terminal hoặc hệ thống bắt phím Alt,
# có thể thử Esc rồi phím tương ứng:
Esc, U
Esc, E`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["delete", "Xóa/copy dòng"],
                        ["line", "Cut nhiều dòng"],
                        ["region", "Chọn vùng"],
                        ["undo", "Undo/Redo"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setMode(k)}
                            className={`w-full text-left rounded-xl border p-4 font-bold ${mode === k ? "bg-amber-500/10 border-amber-500/40 text-amber-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`editing — ${mode}`}
                        code={code[mode]}
                    />
                </div>
            </div>
        </div>
    );
}

function SearchReplaceGuide() {
    const [mode, setMode] = useState("search");
    const code = {
        search: `Ctrl + W
# Nano mở ô tìm kiếm
Search: PasswordAuthentication

Enter
# Nhảy tới kết quả đầu tiên

Alt + W
# Tìm kết quả tiếp theo`,
        case: `Ctrl + W
Alt + C

# Alt+C toggle case-sensitive.
# Tìm phân biệt hoa thường hoặc không phân biệt hoa thường tùy trạng thái.`,
        replace: `Ctrl + \\
# Mở tìm và thay thế

Search: localhost
Replace with: 192.168.1.100

Y = thay kết quả hiện tại
N = bỏ qua
A = thay tất cả`,
        example: `Ví dụ: thay tất cả "localhost" thành "192.168.1.100"

1. Ctrl + \\
2. Gõ: localhost → Enter
3. Gõ: 192.168.1.100 → Enter
4. Nhấn A để thay tất cả
5. Ctrl + O → Enter để lưu
6. Ctrl + X để thoát`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["search", "Tìm kiếm"],
                    ["case", "Case-sensitive"],
                    ["replace", "Thay thế"],
                    ["example", "Ví dụ thực tế"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setMode(k)}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${mode === k ? "bg-pink-500/10 border-pink-500/40 text-pink-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <TerminalBlock
                title={`search/replace — ${mode}`}
                code={code[mode]}
            />
        </div>
    );
}

function NanoOptions() {
    const [mode, setMode] = useState("line");
    const code = {
        line: `# Hiện số dòng
$ nano -l file.txt

# Mở file và nhảy đến dòng 50
$ nano +50 file.txt

# Xem dòng/cột hiện tại trong Nano
Ctrl + C`,
        indent: `# Tự động indent
$ nano -i file.txt

# Không wrap dòng dài
$ nano -w file.txt

# Kết hợp: hiện số dòng + không wrap
$ nano -lw file.txt`,
        syntax: `# Bật syntax highlighting theo ngôn ngữ
$ nano -Y python file.py
$ nano -Y sh script.sh
$ nano -Y javascript app.js

# Nếu có include nanorc syntax, Nano có thể tự nhận diện theo extension.`,
        readonly: `# Mở chỉ đọc, tránh sửa nhầm
$ nano -v file.txt

# Dùng khi chỉ muốn xem file trong Nano
# mà không vô tình lưu thay đổi.`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["line", "Số dòng"],
                        ["indent", "Indent/wrap"],
                        ["syntax", "Syntax màu"],
                        ["readonly", "Chỉ đọc"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setMode(k)}
                            className={`w-full text-left rounded-xl border p-4 font-bold ${mode === k ? "bg-orange-500/10 border-orange-500/40 text-orange-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`nano options — ${mode}`}
                        code={code[mode]}
                    />
                </div>
            </div>
        </div>
    );
}

function NanorcGuide() {
    const [mode, setMode] = useState("config");
    const code = {
        open: `$ nano ~/.nanorc

# File này chứa cấu hình mặc định cho Nano của user hiện tại.
# Sau khi lưu, mở Nano lại là có hiệu lực.`,
        config: `# Nội dung ~/.nanorc

set linenumbers        # luôn hiện số dòng
set autoindent         # tự indent
set mouse              # dùng chuột được
set smooth             # cuộn mượt
set tabsize 4          # tab = 4 space
set tabstospaces       # tab thành space

# Tô màu syntax cho các ngôn ngữ có sẵn
include "/usr/share/nano/*.nanorc"`,
        test: `$ nano file.py
# Tự hiện số dòng, có syntax màu nếu include đúng.

$ nano script.sh
# Autoindent và tab size theo ~/.nanorc

# Nếu cấu hình lỗi, Nano thường báo khi mở file.
# Hãy mở ~/.nanorc và sửa lại dòng bị lỗi.`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["open", "Mở ~/.nanorc"],
                    ["config", "Cấu hình mẫu"],
                    ["test", "Kiểm tra"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setMode(k)}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${mode === k ? "bg-teal-500/10 border-teal-500/40 text-teal-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <TerminalBlock title={`~/.nanorc — ${mode}`} code={code[mode]} />
        </div>
    );
}

function RealWorldExamples() {
    const [scenario, setScenario] = useState("hosts");
    const examples = {
        hosts: {
            title: "Chỉnh /etc/hosts",
            icon: FileText,
            code: `$ sudo nano /etc/hosts

# Thêm dòng ví dụ:
0.0.0.0 facebook.com

# Lưu và thoát:
Ctrl + O → Enter → Ctrl + X`,
        },
        ssh: {
            title: "Chỉnh SSH config server",
            icon: Lock,
            code: `$ sudo nano /etc/ssh/sshd_config

# Tìm:
Ctrl + W
PasswordAuthentication
Enter

# Sửa thành:
PasswordAuthentication no

# Lưu/thoát:
Ctrl + O → Enter → Ctrl + X

# Kiểm tra syntax trước khi restart/reload:
$ sudo sshd -t
$ sudo systemctl restart ssh`,
        },
        script: {
            title: "Tạo script bash nhanh",
            icon: Code2,
            code: `$ nano backup.sh

#!/bin/bash
echo "Backup started"
rsync -avzh /var/www/ /backup/www/
echo "Backup done"

# Lưu/thoát:
Ctrl + O → Enter → Ctrl + X

$ chmod +x backup.sh
$ ./backup.sh`,
        },
        cron: {
            title: "Sửa crontab hệ thống",
            icon: Settings,
            code: `$ sudo nano /etc/crontab

# Ví dụ thêm job:
0 2 * * * root /usr/local/bin/backup.sh

# Lưu/thoát:
Ctrl + O → Enter → Ctrl + X

# Kiểm tra log cron nếu cần:
$ grep CRON /var/log/syslog | tail`,
        },
    };
    const current = examples[scenario];
    const Icon = current.icon;
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {Object.entries(examples).map(([k, e]) => {
                        const ItemIcon = e.icon;
                        return (
                            <button
                                key={k}
                                onClick={() => setScenario(k)}
                                className={`w-full text-left p-4 rounded-2xl border transition-all ${scenario === k ? "bg-rose-500/10 border-rose-500/40" : "bg-slate-900 border-slate-700 hover:border-slate-500"}`}
                            >
                                <div className="flex items-center gap-3">
                                    <ItemIcon className="text-rose-400" />
                                    <span className="font-bold text-white">
                                        {e.title}
                                    </span>
                                </div>
                            </button>
                        );
                    })}
                </div>
                <div className="lg:col-span-3">
                    <div className="mb-4 flex items-center gap-2 text-rose-300 font-bold">
                        <Icon size={22} /> {current.title}
                    </div>
                    <TerminalBlock title="ví dụ thực tế" code={current.code} />
                </div>
            </div>
        </div>
    );
}

function ShortcutCheatsheet() {
    const groups = [
        [
            "Lưu & thoát",
            "green",
            [
                ["Ctrl+O", "Lưu file"],
                ["Ctrl+X", "Thoát"],
                ["Ctrl+Z", "Tạm treo"],
            ],
        ],
        [
            "Di chuyển",
            "purple",
            [
                ["Ctrl+A", "Đầu dòng"],
                ["Ctrl+E", "Cuối dòng"],
                ["Ctrl+Y", "Trang trước"],
                ["Ctrl+V", "Trang sau"],
                ["Alt+\\", "Đầu file"],
                ["Alt+/", "Cuối file"],
            ],
        ],
        [
            "Chỉnh sửa",
            "amber",
            [
                ["Ctrl+K", "Cắt dòng/vùng"],
                ["Ctrl+U", "Paste"],
                ["Alt+6", "Copy"],
                ["Alt+U", "Undo"],
                ["Alt+E", "Redo"],
            ],
        ],
        [
            "Tìm kiếm",
            "pink",
            [
                ["Ctrl+W", "Tìm"],
                ["Alt+W", "Tìm tiếp"],
                ["Ctrl+\\", "Tìm và thay thế"],
                ["Ctrl+C", "Xem dòng/cột"],
            ],
        ],
    ];
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {groups.map(([title, tone, items]) => (
                    <div
                        key={title}
                        className="bg-slate-950 border border-slate-700 rounded-2xl p-5"
                    >
                        <h4 className="font-bold text-white mb-4">{title}</h4>
                        <div className="space-y-2">
                            {items.map(([key, desc]) => (
                                <div
                                    key={key}
                                    className="flex justify-between gap-3 border-b border-slate-800 pb-2 last:border-b-0"
                                >
                                    <code className="text-lime-300 font-bold">
                                        {key}
                                    </code>
                                    <span className="text-sm text-slate-400 text-right">
                                        {desc}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 bg-lime-500/10 border border-lime-500/30 rounded-2xl p-5 text-lime-100">
                80% công việc hằng ngày chỉ cần nhớ: <code>Ctrl+O</code> để lưu,{" "}
                <code>Ctrl+X</code> để thoát, <code>Ctrl+W</code> để tìm,{" "}
                <code>Ctrl+\</code> để thay thế.
            </div>
        </div>
    );
}

function PracticeChecklist() {
    const tasks = [
        ["Tạo file mới bằng Nano", "nano test.txt"],
        ["Gõ vài dòng nội dung", "Dùng bàn phím gõ trực tiếp trong Nano"],
        ["Lưu file", "Ctrl+O → Enter"],
        ["Thoát Nano", "Ctrl+X"],
        ["Mở lại file và nhảy đến dòng 3", "nano +3 test.txt"],
        ["Tìm từ khóa", "Ctrl+W → nhập từ khóa → Enter"],
        ["Tìm tiếp", "Alt+W"],
        ["Cut một dòng", "Ctrl+K"],
        ["Paste dòng vừa cut", "Ctrl+U"],
        ["Copy dòng", "Alt+6"],
        ["Undo/Redo", "Alt+U / Alt+E"],
        [
            "Tìm và thay thế",
            "Ctrl+\\ → nhập từ tìm → Enter → nhập từ thay → Enter",
        ],
        ["Mở Nano với số dòng", "nano -l test.txt"],
        ["Tạo ~/.nanorc", "nano ~/.nanorc"],
        ["Bật linenumbers mặc định", "set linenumbers"],
        ["Sửa file root an toàn", "sudo nano /etc/hosts"],
    ];
    const [done, setDone] = useState([]);
    const toggle = (i) =>
        setDone((d) => (d.includes(i) ? d.filter((x) => x !== i) : [...d, i]));
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                    <h4 className="text-xl font-bold text-white">
                        Checklist lab trên Ubuntu
                    </h4>
                    <p className="text-slate-400 text-sm">
                        Đánh dấu từng bước khi thực hành xong.
                    </p>
                </div>
                <div className="text-sm font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2">
                    {done.length}/{tasks.length} hoàn thành
                </div>
            </div>
            <div className="space-y-3">
                {tasks.map(([title, cmd], i) => (
                    <button
                        key={title}
                        onClick={() => toggle(i)}
                        className={`w-full text-left rounded-2xl border p-4 transition-all ${done.includes(i) ? "bg-emerald-500/10 border-emerald-500/30" : "bg-slate-900 border-slate-700 hover:border-slate-500"}`}
                    >
                        <div className="flex items-start gap-3">
                            {done.includes(i) ? (
                                <CheckCircle2 className="text-emerald-400 shrink-0" />
                            ) : (
                                <div className="w-6 h-6 rounded-full border border-slate-600 shrink-0" />
                            )}
                            <div>
                                <div className="font-bold text-white">
                                    {i + 1}. {title}
                                </div>
                                <code className="text-xs text-slate-400 break-all">
                                    {cmd}
                                </code>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}

function SummarySection() {
    return (
        <section className="pt-4">
            <div className="bg-slate-950 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
                <div className="bg-slate-900 p-6 border-b border-slate-700">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <BookOpen className="text-lime-400" /> Tóm tắt bài học
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <SummaryBox
                        title="Mở file"
                        items={[
                            "nano file.txt",
                            "nano newfile.txt",
                            "sudo nano /etc/hosts",
                            "nano +50 file.txt",
                            "nano -v file.txt",
                            "nano -lw file.txt",
                        ]}
                    />
                    <SummaryBox
                        title="Lưu/thoát"
                        items={[
                            "Ctrl+O lưu",
                            "Enter xác nhận tên",
                            "Ctrl+X thoát",
                            "Y lưu rồi thoát",
                            "N thoát không lưu",
                            "Ctrl+C hủy prompt",
                        ]}
                    />
                    <SummaryBox
                        title="Chỉnh sửa"
                        items={[
                            "Ctrl+K cut dòng",
                            "Alt+6 copy",
                            "Ctrl+U paste",
                            "Alt+A chọn vùng",
                            "Alt+U undo",
                            "Alt+E redo",
                        ]}
                    />
                    <SummaryBox
                        title="Tìm/cấu hình"
                        items={[
                            "Ctrl+W tìm",
                            "Alt+W tìm tiếp",
                            "Ctrl+\\ thay thế",
                            "set linenumbers",
                            "set autoindent",
                            "include nanorc",
                        ]}
                    />
                </div>
                <div className="px-6 md:px-8 pb-8">
                    <div className="bg-lime-500/10 border border-lime-500/30 rounded-2xl p-5 text-lime-100">
                        <strong className="text-white">Nhớ nhanh:</strong>{" "}
                        <code>^</code> nghĩa là Ctrl. <code>^O</code> = Ctrl+O
                        để lưu, <code>^X</code> = Ctrl+X để thoát. Với người
                        mới, chỉ cần 4 phím: <code>Ctrl+O</code>,{" "}
                        <code>Ctrl+X</code>, <code>Ctrl+W</code>,{" "}
                        <code>Ctrl+\</code>.
                    </div>
                </div>
            </div>
        </section>
    );
}

function SummaryBox({ title, items }) {
    return (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
            <h4 className="font-bold text-lime-300 uppercase text-xs tracking-widest mb-4">
                {title}
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
                {items.map((i) => (
                    <li key={i} className="flex gap-2">
                        <CheckCircle2
                            size={16}
                            className="text-emerald-400 shrink-0 mt-0.5"
                        />
                        <code>{i}</code>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const questions = [
    {
        question: "Trong Nano, ký hiệu ^X nghĩa là gì?",
        options: ["Ctrl + X", "Shift + X", "Alt + X", "Gõ dấu ^ rồi X"],
        correct: 0,
        explanation: "Trong Nano, ^ là Ctrl. Vì vậy ^X = Ctrl + X.",
    },
    {
        question: "Phím nào dùng để lưu file trong Nano?",
        options: ["Ctrl+O", "Ctrl+X", "Ctrl+W", "Alt+U"],
        correct: 0,
        explanation: "Ctrl+O là Write Out, dùng để lưu file.",
    },
    {
        question: "Thoát Nano bằng phím nào?",
        options: ["Ctrl+X", "Ctrl+O", "Ctrl+K", "Alt+6"],
        correct: 0,
        explanation:
            "Ctrl+X là Exit. Nếu file chưa lưu, Nano sẽ hỏi có lưu không.",
    },
    {
        question: "Tìm kiếm trong Nano dùng phím nào?",
        options: ["Ctrl+W", "Ctrl+K", "Alt+6", "Ctrl+U"],
        correct: 0,
        explanation: "Ctrl+W mở ô tìm kiếm. Alt+W tìm kết quả tiếp theo.",
    },
    {
        question: "Cắt dòng hiện tại trong Nano dùng phím nào?",
        options: ["Ctrl+K", "Ctrl+U", "Alt+E", "Ctrl+C"],
        correct: 0,
        explanation: "Ctrl+K cut dòng hiện tại hoặc vùng đã chọn.",
    },
    {
        question: "Paste dòng/vùng vừa cut hoặc copy dùng phím nào?",
        options: ["Ctrl+U", "Ctrl+O", "Alt+W", "Ctrl+Y"],
        correct: 0,
        explanation: "Ctrl+U paste nội dung vừa cut/copy.",
    },
    {
        question: "Mở Nano và nhảy đến dòng 50 dùng lệnh nào?",
        options: [
            "nano +50 file.txt",
            "nano -50 file.txt",
            "nano --line 50 file.txt",
            "nano file.txt:50",
        ],
        correct: 0,
        explanation: "Nano hỗ trợ cú pháp nano +SỐ_DÒNG file.",
    },
    {
        question: "File cấu hình mặc định của Nano cho user hiện tại là gì?",
        options: ["~/.nanorc", "/etc/hosts", "~/.bashrc", "/etc/nano.conf"],
        correct: 0,
        explanation: "~/.nanorc chứa cấu hình Nano riêng cho user hiện tại.",
    },
];

function InteractiveQuiz() {
    const [currentQ, setCurrentQ] = useState(0);
    const [selected, setSelected] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const handleSelect = (idx) => {
        if (showResult) return;
        setSelected(idx);
        setShowResult(true);
        if (idx === questions[currentQ].correct) setScore((s) => s + 1);
    };
    const handleNext = () => {
        if (currentQ < questions.length - 1) {
            setCurrentQ((c) => c + 1);
            setSelected(null);
            setShowResult(false);
        } else setCurrentQ("finished");
    };
    const resetQuiz = () => {
        setCurrentQ(0);
        setSelected(null);
        setShowResult(false);
        setScore(0);
    };
    if (currentQ === "finished")
        return (
            <div className="text-center flex flex-col justify-center items-center min-h-[300px] animate-in zoom-in duration-300">
                <div className="text-6xl mb-4">
                    {score === questions.length ? "🏆" : "👏"}
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                    Hoàn thành bài kiểm tra!
                </h4>
                <p className="text-slate-400 mb-6">
                    Bạn trả lời đúng{" "}
                    <strong className="text-lime-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu về Nano.
                </p>
                <button
                    onClick={resetQuiz}
                    className="px-6 py-2 bg-slate-900 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-600 font-medium flex items-center gap-2"
                >
                    <RefreshCcw size={16} /> Làm lại Quiz
                </button>
            </div>
        );
    const q = questions[currentQ];
    return (
        <div className="flex flex-col h-full max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-6 text-sm font-medium">
                <span className="text-lime-400 bg-lime-500/10 px-3 py-1 rounded-full">
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
                    let cls =
                        "w-full text-left p-4 rounded-xl border text-sm transition-all ";
                    if (!showResult)
                        cls +=
                            "border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:border-slate-500";
                    else if (idx === q.correct)
                        cls +=
                            "border-green-500 bg-green-500/10 text-green-400";
                    else if (idx === selected)
                        cls += "border-rose-500 bg-rose-500/10 text-rose-400";
                    else
                        cls +=
                            "border-slate-800 bg-slate-800/30 text-slate-600 opacity-50";
                    return (
                        <button
                            key={opt}
                            onClick={() => handleSelect(idx)}
                            disabled={showResult}
                            className={cls}
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
