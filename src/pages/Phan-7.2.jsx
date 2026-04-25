import React, { useState } from "react";
import {
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
    Play,
    Replace,
    RotateCcw,
    Save,
    Search,
    Settings,
    Sparkles,
    TerminalSquare,
    TextCursorInput,
    Trash2,
    Undo2,
    X,
    Zap,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-violet-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 border-b border-slate-800 sticky top-0 z-50 backdrop-blur">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🐧</span>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Linux/Ubuntu
                            </h1>
                            <p className="text-xs text-slate-500 hidden md:block">
                                Text Editor & xử lý văn bản: Vim editor mạnh mẽ
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400 hidden md:inline-block">
                            Bài trước: 7.1
                        </span>
                        <div className="text-sm font-medium text-violet-400 bg-violet-400/10 px-3 py-1 rounded-full border border-violet-400/20">
                            Phần 7.2
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <Hero />

                <section className="space-y-6">
                    <SectionTitle
                        n="1"
                        color="violet"
                        icon={<Edit3 size={22} />}
                        title="Vim là gì? Vì sao đáng học?"
                    />
                    <VimIntro />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="2"
                        color="cyan"
                        icon={<TerminalSquare size={22} />}
                        title="Cài đặt và mở file bằng Vim"
                    />
                    <InstallOpenGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="3"
                        color="blue"
                        icon={<Layers size={22} />}
                        title="Khái niệm quan trọng nhất: Mode"
                    />
                    <ModeDiagram />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="4"
                        color="green"
                        icon={<Move size={22} />}
                        title="Normal Mode: di chuyển cực nhanh"
                    />
                    <MovementGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="5"
                        color="amber"
                        icon={<TextCursorInput size={22} />}
                        title="Insert Mode: gõ văn bản"
                    />
                    <InsertModeGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="6"
                        color="lime"
                        icon={<Save size={22} />}
                        title="Command Mode: lưu và thoát"
                    />
                    <CommandModeGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="7"
                        color="rose"
                        icon={<Trash2 size={22} />}
                        title="Chỉnh sửa trong Normal Mode"
                    />
                    <NormalEditGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="8"
                        color="pink"
                        icon={<Search size={22} />}
                        title="Tìm kiếm và thay thế"
                    />
                    <SearchReplaceGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="9"
                        color="purple"
                        icon={<MousePointer2 size={22} />}
                        title="Visual Mode: chọn vùng văn bản"
                    />
                    <VisualModeGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="10"
                        color="orange"
                        icon={<Sparkles size={22} />}
                        title="Các lệnh hữu ích khác"
                    />
                    <UsefulCommands />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="11"
                        color="teal"
                        icon={<FileCog size={22} />}
                        title="Cấu hình Vim bằng ~/.vimrc"
                    />
                    <VimrcGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="12"
                        color="sky"
                        icon={<Play size={22} />}
                        title="Workflow thực tế"
                    />
                    <RealWorkflow />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="13"
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
                                <span className="bg-violet-500/20 text-violet-400 p-2 rounded-lg">
                                    <ClipboardCheck size={20} />
                                </span>
                                Kiểm tra nhanh: Vim editor
                            </h3>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                <div className="text-center pt-8 border-t border-slate-800">
                    <p className="text-slate-400 mb-4">
                        Bạn đã hoàn thành Phần 7.2 — Vim editor mạnh mẽ.
                    </p>
                    <button className="bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-violet-500/20">
                        Bài tiếp theo: 7.3 — sed, awk, cut, sort, uniq{" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

function Hero() {
    const cards = [
        [Layers, "Mode", "Normal, Insert, Command, Visual"],
        [Move, "hjkl", "Di chuyển không cần chuột"],
        [Trash2, "dd / yy / p", "Xóa, copy, paste rất nhanh"],
        [Search, ":%s", "Tìm và thay thế toàn file"],
    ];
    return (
        <section className="text-center space-y-5 py-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium">
                <Zap size={16} /> vim · i · Esc · :wq · :q! · hjkl · dd · yy · p
                · /search · :%s
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Vim — Editor{" "}
                <span className="text-violet-400 font-mono">Mạnh Mẽ</span> Trong
                Terminal
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Bài này giúp bạn vượt qua “nỗi sợ Vim”: hiểu mode, gõ văn bản
                đúng cách, lưu/thoát, di chuyển bằng bàn phím, chỉnh sửa nhanh,
                tìm-thay thế mạnh mẽ và cấu hình Vim bằng <code>~/.vimrc</code>.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4">
                {cards.map(([Icon, title, desc]) => (
                    <div
                        key={title}
                        className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 text-left"
                    >
                        <Icon className="text-violet-400 mb-3" size={24} />
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
        violet: "bg-violet-500/20 text-violet-400",
        cyan: "bg-cyan-500/20 text-cyan-400",
        blue: "bg-blue-500/20 text-blue-400",
        green: "bg-green-500/20 text-green-400",
        amber: "bg-amber-500/20 text-amber-400",
        lime: "bg-lime-500/20 text-lime-400",
        rose: "bg-rose-500/20 text-rose-400",
        pink: "bg-pink-500/20 text-pink-400",
        purple: "bg-purple-500/20 text-purple-400",
        orange: "bg-orange-500/20 text-orange-400",
        teal: "bg-teal-500/20 text-teal-400",
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
        violet: "bg-violet-500/10 border-violet-500/20 text-violet-300",
        cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
        blue: "bg-blue-500/10 border-blue-500/20 text-blue-300",
        green: "bg-green-500/10 border-green-500/20 text-green-300",
        amber: "bg-amber-500/10 border-amber-500/20 text-amber-300",
        lime: "bg-lime-500/10 border-lime-500/20 text-lime-300",
        rose: "bg-rose-500/10 border-rose-500/20 text-rose-300",
        pink: "bg-pink-500/10 border-pink-500/20 text-pink-300",
        purple: "bg-purple-500/10 border-purple-500/20 text-purple-300",
        orange: "bg-orange-500/10 border-orange-500/20 text-orange-300",
        teal: "bg-teal-500/10 border-teal-500/20 text-teal-300",
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

function VimIntro() {
    return (
        <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                <div className="flex items-start gap-5">
                    <div className="bg-violet-500/15 text-violet-400 p-4 rounded-2xl border border-violet-500/20">
                        <Edit3 size={42} />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">
                            Vim có mặt gần như trên mọi server Linux
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            Vim khó hơn Nano vì dùng nhiều mode, nhưng đổi lại
                            bạn có thể chỉnh sửa cực nhanh bằng bàn phím, không
                            cần chuột và dùng được ở hầu hết Linux/Unix/macOS.
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                            <MiniPoint
                                icon={<Keyboard size={18} />}
                                tone="violet"
                                title="Tối ưu bàn phím"
                                text="Di chuyển, xóa, copy, paste, thay thế mà không rời tay khỏi keyboard."
                            />
                            <MiniPoint
                                icon={<TerminalSquare size={18} />}
                                tone="cyan"
                                title="Server friendly"
                                text="Kể cả server tối giản không có Nano, Vim/Vi thường vẫn có mặt."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-2 space-y-3">
                <CompareCard
                    title="Nano"
                    cmd="nano file.txt"
                    desc="Mở ra gõ luôn, rất dễ cho người mới."
                    tone="lime"
                />
                <CompareCard
                    title="Vim"
                    cmd="vim file.txt"
                    desc="Cần học mode, nhưng rất nhanh khi quen."
                    tone="violet"
                />
                <CompareCard
                    title="Quy tắc vàng"
                    cmd="Esc → Normal"
                    desc="Không biết đang ở đâu thì nhấn Esc 1-2 lần."
                    tone="amber"
                />
            </div>
        </div>
    );
}

function CompareCard({ title, cmd, desc, tone }) {
    const map = {
        lime: "text-lime-300",
        violet: "text-violet-300",
        amber: "text-amber-300",
    };
    return (
        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4">
            <div className="font-bold text-white mb-1">{title}</div>
            <code className={`${map[tone]} text-sm`}>{cmd}</code>
            <p className="text-xs text-slate-500 mt-2">{desc}</p>
        </div>
    );
}

function InstallOpenGuide() {
    const [mode, setMode] = useState("install");
    const code = {
        install: `$ sudo apt update
$ sudo apt install vim -y

$ vim --version
VIM - Vi IMproved ...`,
        open: `$ vim file.txt
$ vim newfile.txt
$ sudo vim /etc/hosts

# Mở và nhảy đến dòng 50
$ vim +50 file.txt

# Mở và tìm từ khóa ngay
$ vim +/keyword file.txt`,
        safe: `# Khi mới học, có thể dùng vimtutor
$ vimtutor

# Thoát khẩn cấp không lưu:
Esc
:q!
Enter

# Lưu rồi thoát:
Esc
:wq
Enter`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["install", "Cài đặt"],
                    ["open", "Mở file"],
                    ["safe", "Cứu hộ người mới"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setMode(k)}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${mode === k ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <TerminalBlock title={`vim open — ${mode}`} code={code[mode]} />
        </div>
    );
}

function ModeDiagram() {
    const [active, setActive] = useState("normal");
    const info = {
        normal: [
            "NORMAL MODE",
            "Mặc định khi mở Vim. Dùng để di chuyển, xóa, copy, paste, tìm kiếm, chạy lệnh.",
        ],
        insert: [
            "INSERT MODE",
            "Dùng để gõ văn bản như Nano. Vào bằng i/a/o/A/O, thoát bằng Esc.",
        ],
        command: [
            "COMMAND MODE",
            "Vào bằng dấu :. Dùng :w, :q, :wq, :%s, :set number...",
        ],
        visual: [
            "VISUAL MODE",
            "Vào bằng v/V/Ctrl+V để chọn vùng, rồi d/y/>/<...",
        ],
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <ModeButton
                            id="normal"
                            active={active}
                            setActive={setActive}
                            title="NORMAL"
                            hint="Esc"
                        />
                        <div className="space-y-3">
                            <ModeButton
                                id="insert"
                                active={active}
                                setActive={setActive}
                                title="INSERT"
                                hint="i / a / o"
                            />
                            <ModeButton
                                id="command"
                                active={active}
                                setActive={setActive}
                                title="COMMAND"
                                hint=":"
                            />
                            <ModeButton
                                id="visual"
                                active={active}
                                setActive={setActive}
                                title="VISUAL"
                                hint="v / V / Ctrl+V"
                            />
                        </div>
                        <div className="bg-slate-950 border border-slate-700 rounded-2xl p-5 text-sm text-slate-300">
                            <div className="font-bold text-white mb-3">
                                Quy tắc vàng
                            </div>
                            <p className="mb-3">Không biết đang ở mode nào?</p>
                            <code className="text-violet-300 text-lg">
                                Nhấn Esc 1-2 lần
                            </code>
                            <p className="mt-3">
                                Sau đó bạn chắc chắn quay về Normal mode.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2 bg-slate-950 border border-slate-700 rounded-2xl p-6">
                    <h4 className="text-xl font-black text-white mb-2">
                        {info[active][0]}
                    </h4>
                    <p className="text-slate-400 mb-5">{info[active][1]}</p>
                    <TerminalBlock
                        title="mode commands"
                        code={`Normal → Insert: i / a / o / A / O
Normal → Command: :
Normal → Visual: v / V / Ctrl+V
Insert/Command/Visual → Normal: Esc`}
                    />
                </div>
            </div>
        </div>
    );
}

function ModeButton({ id, active, setActive, title, hint }) {
    return (
        <button
            onClick={() => setActive(id)}
            className={`rounded-3xl border p-6 text-left transition-all ${active === id ? "bg-violet-500/10 border-violet-500/40" : "bg-slate-950 border-slate-700 hover:border-slate-500"}`}
        >
            <div className="text-2xl font-black text-white">{title}</div>
            <code className="text-violet-300">{hint}</code>
        </button>
    );
}

function MovementGuide() {
    const [mode, setMode] = useState("basic");
    const code = {
        basic: `# Di chuyển cơ bản trong Normal mode
h  → trái
j  → xuống
k  → lên
l  → phải

# Mũi tên cũng dùng được, nhưng hjkl nhanh hơn khi quen.`,
        words: `w  → nhảy tới đầu từ tiếp theo
b  → nhảy lùi về đầu từ trước
e  → nhảy tới cuối từ hiện tại

Ví dụ: Hello World Ubuntu
w → World
w → Ubuntu
b → World`,
        line: `0  → đầu dòng tuyệt đối
^  → ký tự đầu tiên không phải space
$  → cuối dòng

# Rất tiện khi sửa config:
A  → vào Insert ở cuối dòng
I  → vào Insert ở đầu dòng`,
        file: `gg   → đầu file
G    → cuối file
50G  → nhảy đến dòng 50
:50  → nhảy đến dòng 50

Ctrl+F → xuống 1 trang
Ctrl+B → lên 1 trang
Ctrl+D → xuống nửa trang
Ctrl+U → lên nửa trang`,
        count: `Số + lệnh = lặp lại lệnh N lần

5j   → xuống 5 dòng
10l  → sang phải 10 ký tự
3w   → nhảy qua 3 từ
4k   → lên 4 dòng
50G  → đến dòng 50`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["basic", "hjkl"],
                        ["words", "Theo từ"],
                        ["line", "Trong dòng"],
                        ["file", "Trong file"],
                        ["count", "Nhân số"],
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
                        title={`normal movement — ${mode}`}
                        code={code[mode]}
                    />
                </div>
            </div>
        </div>
    );
}

function InsertModeGuide() {
    const cards = [
        ["i", "Insert tại vị trí con trỏ"],
        ["a", "Append sau con trỏ"],
        ["I", "Insert đầu dòng"],
        ["A", "Append cuối dòng"],
        ["o", "Mở dòng mới bên dưới"],
        ["O", "Mở dòng mới bên trên"],
        ["s", "Xóa ký tự rồi vào Insert"],
        ["Esc", "Quay về Normal mode"],
    ];
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                {cards.map(([key, desc]) => (
                    <div
                        key={key}
                        className="bg-slate-950 border border-slate-700 rounded-2xl p-5"
                    >
                        <code className="text-3xl font-black text-amber-300">
                            {key}
                        </code>
                        <p className="text-sm text-slate-400 mt-2">{desc}</p>
                    </div>
                ))}
            </div>
            <div className="mt-6 bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 text-amber-100">
                Ví dụ hay dùng: <code>A</code> để thêm vào cuối dòng,{" "}
                <code>o</code> để tạo dòng mới phía dưới, sau khi gõ xong luôn
                nhấn <code>Esc</code> về Normal mode.
            </div>
        </div>
    );
}

function CommandModeGuide() {
    const [mode, setMode] = useState("save");
    const code = {
        save: `# Từ Normal mode, nhấn : rồi gõ lệnh
:w          lưu file
:w ten.txt  lưu thành tên khác
:w!         ép lưu`,
        quit: `:q          thoát nếu chưa thay đổi
:q!         thoát không lưu
:wq         lưu rồi thoát
:x          lưu rồi thoát

# Trong Normal mode, không cần dấu :
ZZ          lưu rồi thoát
ZQ          thoát không lưu`,
        memory: `Mẹo nhớ:
w = write = lưu
q = quit  = thoát
! = force = ép buộc

:wq = write + quit = lưu rồi thoát
:q! = quit + force = thoát không lưu`,
        rescue: `# Lỡ vào Vim không biết thoát?
Esc
:q!
Enter

# Muốn lưu rồi thoát?
Esc
:wq
Enter`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["save", "Lưu"],
                    ["quit", "Thoát"],
                    ["memory", "Mẹo nhớ"],
                    ["rescue", "Cứu hộ"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setMode(k)}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${mode === k ? "bg-lime-500/10 border-lime-500/40 text-lime-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <TerminalBlock title={`command mode — ${mode}`} code={code[mode]} />
        </div>
    );
}

function NormalEditGuide() {
    const [mode, setMode] = useState("delete");
    const code = {
        delete: `x    → xóa ký tự tại con trỏ
X    → xóa ký tự bên trái
dd   → xóa nguyên dòng
D    → xóa từ con trỏ đến cuối dòng
dw   → xóa 1 từ
d$   → xóa đến cuối dòng
d0   → xóa đến đầu dòng
dG   → xóa từ dòng hiện tại đến cuối file

5dd  → xóa 5 dòng
3dw  → xóa 3 từ`,
        copy: `yy   → copy dòng hiện tại
Y    → copy dòng, giống yy
yw   → copy 1 từ
y$   → copy đến cuối dòng
5yy  → copy 5 dòng

p    → paste bên dưới/sau con trỏ
P    → paste bên trên/trước con trỏ`,
        change: `r    → thay 1 ký tự tại con trỏ
R    → overwrite mode, thay nhiều ký tự
cw   → xóa từ hiện tại rồi vào Insert
cc   → xóa dòng hiện tại rồi vào Insert
C    → xóa đến cuối dòng rồi vào Insert`,
        undo: `u         → Undo
Ctrl + R  → Redo
U         → Undo tất cả thay đổi trên dòng hiện tại
.         → lặp lại lệnh vừa thực hiện

Ví dụ:
dd      xóa 1 dòng
.       xóa tiếp dòng nữa`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["delete", "Xóa"],
                        ["copy", "Copy/Paste"],
                        ["change", "Thay/sửa"],
                        ["undo", "Undo/Repeat"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setMode(k)}
                            className={`w-full text-left rounded-xl border p-4 font-bold ${mode === k ? "bg-rose-500/10 border-rose-500/40 text-rose-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`normal edit — ${mode}`}
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
        search: `/ubuntu      tìm xuôi chữ ubuntu
?ubuntu      tìm ngược chữ ubuntu
n            kết quả tiếp theo
N            kết quả trước đó
*            tìm từ tại con trỏ, xuôi
#            tìm từ tại con trỏ, ngược`,
        replace: `:s/cũ/mới/         thay lần đầu tiên trong dòng hiện tại
:s/cũ/mới/g        thay tất cả trong dòng hiện tại
:%s/cũ/mới/g       thay tất cả trong toàn file
:%s/cũ/mới/gc      thay toàn file, hỏi xác nhận từng cái
:%s/cũ/mới/gi      thay toàn file, không phân biệt hoa thường

:10,20s/foo/bar/g  chỉ thay từ dòng 10 đến 20`,
        examples: `:%s/localhost/192.168.1.100/g
# Thay tất cả localhost trong file

:%s/http/https/gc
# Thay từng cái, hỏi xác nhận

:noh
# Tắt highlight kết quả tìm kiếm`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["search", "Tìm kiếm"],
                    ["replace", "Thay thế"],
                    ["examples", "Ví dụ"],
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

function VisualModeGuide() {
    const [mode, setMode] = useState("basic");
    const code = {
        basic: `v        → Visual mode, chọn từng ký tự
V        → Visual Line, chọn nguyên dòng
Ctrl+V   → Visual Block, chọn hình chữ nhật

Sau khi chọn:
d        xóa vùng chọn
y        copy vùng chọn
>        indent
<        unindent
~        đổi hoa/thường
:        chạy lệnh trên vùng chọn`,
        block: `Ví dụ: thêm dấu # vào đầu 5 dòng liên tiếp

1. Ctrl+V       vào Visual Block
2. 5j           chọn 5 dòng
3. I            Insert trước vùng chọn
4. Gõ #
5. Esc          áp dụng cho tất cả dòng

# Đây là kỹ thuật cực mạnh để comment nhiều dòng.`,
        indent: `# Chọn nhiều dòng bằng V rồi dùng:
>   indent vào
<   unindent ra
=   auto indent

# Normal mode:
>>  indent dòng hiện tại
<<  unindent dòng hiện tại
==  auto indent dòng hiện tại`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["basic", "Chọn vùng"],
                        ["block", "Visual Block"],
                        ["indent", "Indent"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setMode(k)}
                            className={`w-full text-left rounded-xl border p-4 font-bold ${mode === k ? "bg-purple-500/10 border-purple-500/40 text-purple-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`visual mode — ${mode}`}
                        code={code[mode]}
                    />
                </div>
            </div>
        </div>
    );
}

function UsefulCommands() {
    const [mode, setMode] = useState("normal");
    const code = {
        normal: `.          lặp lại lệnh vừa thực hiện
%          nhảy giữa cặp ngoặc () [] {}
>>         indent dòng hiện tại
<<         unindent dòng hiện tại
==         tự động căn indent dòng hiện tại
gg=G       tự động indent toàn bộ file`,
        set: `:set number      bật số dòng
:set nonumber    tắt số dòng
:set hlsearch    highlight kết quả tìm kiếm
:set ignorecase  tìm kiếm không phân biệt hoa thường
:set syntax on   bật tô màu syntax
:noh             tắt highlight tìm kiếm`,
        shell: `:pwd             xem thư mục hiện tại
:! ls -la        chạy lệnh shell từ trong Vim
:! date          xem thời gian
:r !date         chèn output lệnh date vào file

# Sau khi chạy shell command, nhấn Enter để quay lại Vim.`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["normal", "Normal"],
                    ["set", ":set"],
                    ["shell", "Shell"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setMode(k)}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${mode === k ? "bg-orange-500/10 border-orange-500/40 text-orange-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <TerminalBlock
                title={`useful vim commands — ${mode}`}
                code={code[mode]}
            />
        </div>
    );
}

function VimrcGuide() {
    const [mode, setMode] = useState("config");
    const code = {
        open: `$ nano ~/.vimrc
# hoặc dùng chính Vim:
$ vim ~/.vimrc

# File ~/.vimrc chứa cấu hình mặc định cho Vim của user hiện tại.`,
        config: `" Nội dung ~/.vimrc, dấu " là comment

syntax on              " bật tô màu code
set number             " hiện số dòng
set relativenumber     " số dòng tương đối
set tabstop=4          " tab = 4 space
set shiftwidth=4       " indent = 4 space
set expandtab          " tab thành space
set autoindent         " tự indent
set hlsearch           " highlight kết quả tìm
set incsearch          " tìm realtime
set ignorecase         " tìm không phân biệt hoa thường
set smartcase          " nếu gõ hoa thì phân biệt
set cursorline         " highlight dòng con trỏ
set clipboard=unnamed  " dùng clipboard hệ thống`,
        test: `$ vim file.py

# Trong Vim kiểm tra nhanh:
:set number?
:set relativenumber?
:set tabstop?

# Reload ~/.vimrc trong Vim:
:source ~/.vimrc`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["open", "Mở ~/.vimrc"],
                    ["config", "Cấu hình mẫu"],
                    ["test", "Kiểm tra/reload"],
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
            <TerminalBlock title={`~/.vimrc — ${mode}`} code={code[mode]} />
        </div>
    );
}

function RealWorkflow() {
    const [scenario, setScenario] = useState("basic");
    const examples = {
        basic: {
            title: "Mở file, sửa, lưu, thoát",
            icon: FileText,
            code: `$ vim config.txt

1. Vim mở → Normal mode
2. Tìm dòng cần sửa: /từ_cần_tìm → Enter
3. Vào Insert: i hoặc A
4. Sửa nội dung
5. Esc → về Normal
6. :wq → lưu và thoát`,
        },
        delete: {
            title: "Xóa 10 dòng không cần",
            icon: Trash2,
            code: `# Normal mode
# Đi đến dòng đầu cần xóa
10dd

# Nếu xóa nhầm:
u

# Lặp lại xóa tiếp 10 dòng:
.`,
        },
        comment: {
            title: "Comment 5 dòng code",
            icon: Code2,
            code: `# Thêm # vào đầu 5 dòng
Ctrl+V
5j
I
#
Esc

# Bỏ comment có thể dùng Visual Block chọn cột # rồi nhấn x.`,
        },
        replace: {
            title: "Thay dev thành production",
            icon: Replace,
            code: `:%s/dev/production/gc

# g = tất cả trong dòng
# c = confirm từng kết quả

# Nếu chắc chắn thay toàn bộ không hỏi:
:%s/dev/production/g`,
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
                                className={`w-full text-left p-4 rounded-2xl border transition-all ${scenario === k ? "bg-sky-500/10 border-sky-500/40" : "bg-slate-900 border-slate-700 hover:border-slate-500"}`}
                            >
                                <div className="flex items-center gap-3">
                                    <ItemIcon className="text-sky-400" />
                                    <span className="font-bold text-white">
                                        {e.title}
                                    </span>
                                </div>
                            </button>
                        );
                    })}
                </div>
                <div className="lg:col-span-3">
                    <div className="mb-4 flex items-center gap-2 text-sky-300 font-bold">
                        <Icon size={22} /> {current.title}
                    </div>
                    <TerminalBlock
                        title="workflow thực tế"
                        code={current.code}
                    />
                </div>
            </div>
        </div>
    );
}

function PracticeChecklist() {
    const tasks = [
        ["Cài Vim", "sudo apt install vim -y"],
        ["Mở file mới", "vim practice.txt"],
        ["Vào Insert mode", "i"],
        ["Gõ vài dòng văn bản", "Gõ nội dung bất kỳ"],
        ["Về Normal mode", "Esc"],
        ["Lưu và thoát", ":wq"],
        ["Mở lại file", "vim practice.txt"],
        ["Di chuyển hjkl", "h j k l"],
        ["Nhảy theo từ", "w b e"],
        ["Đầu/cuối file", "gg / G"],
        ["Xóa dòng", "dd"],
        ["Undo", "u"],
        ["Copy/paste dòng", "yy rồi p"],
        ["Tìm kiếm", "/ubuntu rồi n/N"],
        ["Thay thế toàn file", ":%s/cũ/mới/gc"],
        ["Visual Line chọn dòng", "V rồi j/k, sau đó y hoặc d"],
        ["Visual Block comment nhiều dòng", "Ctrl+V → chọn dòng → I → # → Esc"],
        ["Tạo ~/.vimrc", "nano ~/.vimrc"],
        ["Chạy vimtutor", "vimtutor"],
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
                        <BookOpen className="text-violet-400" /> Tóm tắt bài học
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <SummaryBox
                        title="Bắt buộc"
                        items={[
                            "i vào Insert",
                            "Esc về Normal",
                            ":wq lưu thoát",
                            ":q! thoát không lưu",
                            "vimtutor",
                            "vim +50 file",
                        ]}
                    />
                    <SummaryBox
                        title="Di chuyển"
                        items={[
                            "hjkl",
                            "w / b / e",
                            "0 / ^ / $",
                            "gg / G",
                            "50G / :50",
                            "5j / 3w",
                        ]}
                    />
                    <SummaryBox
                        title="Chỉnh sửa"
                        items={[
                            "dd xóa dòng",
                            "yy copy dòng",
                            "p paste",
                            "u undo",
                            "Ctrl+R redo",
                            ". lặp lại",
                        ]}
                    />
                    <SummaryBox
                        title="Tìm/thay"
                        items={[
                            "/từ tìm xuôi",
                            "?từ tìm ngược",
                            "n / N",
                            "* / #",
                            ":%s/cũ/mới/g",
                            ":%s/cũ/mới/gc",
                        ]}
                    />
                </div>
                <div className="px-6 md:px-8 pb-8">
                    <div className="bg-violet-500/10 border border-violet-500/30 rounded-2xl p-5 text-violet-100">
                        <strong className="text-white">
                            Lộ trình nhớ nhanh:
                        </strong>{" "}
                        tuần 1 chỉ cần <code>i</code>, <code>Esc</code>,{" "}
                        <code>:wq</code>, <code>:q!</code>, <code>hjkl</code>;
                        tuần 2 thêm <code>dd</code>, <code>yy</code>,{" "}
                        <code>p</code>, <code>u</code>, <code>/</code>; tuần 3
                        thêm <code>w</code>, <code>b</code>, <code>gg</code>,{" "}
                        <code>G</code>, <code>:%s</code>, Visual mode.
                    </div>
                </div>
            </div>
        </section>
    );
}

function SummaryBox({ title, items }) {
    return (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
            <h4 className="font-bold text-violet-300 uppercase text-xs tracking-widest mb-4">
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
        question: "Không biết đang ở mode nào trong Vim thì nên làm gì?",
        options: [
            "Nhấn Esc 1-2 lần để về Normal mode",
            "Nhấn Ctrl+Alt+Del",
            "Gõ :wq ngay dù đang Insert",
            "Đóng terminal",
        ],
        correct: 0,
        explanation:
            "Esc là phím cứu hộ quan trọng nhất: đưa bạn về Normal mode.",
    },
    {
        question:
            "Muốn gõ văn bản trong Vim từ Normal mode, phím cơ bản nhất là gì?",
        options: ["i", ":", "dd", "yy"],
        correct: 0,
        explanation: "i đưa Vim vào Insert mode để gõ văn bản.",
    },
    {
        question: "Lưu và thoát Vim bằng lệnh nào?",
        options: [":wq", ":q!", ":set number", "dd"],
        correct: 0,
        explanation: ":wq = write + quit, tức lưu rồi thoát.",
    },
    {
        question: "Thoát không lưu trong Vim bằng lệnh nào?",
        options: [":q!", ":wq", "i", "p"],
        correct: 0,
        explanation: ":q! = quit force, thoát không lưu thay đổi.",
    },
    {
        question: "Trong Normal mode, dd làm gì?",
        options: ["Xóa nguyên dòng hiện tại", "Copy dòng", "Paste", "Tìm kiếm"],
        correct: 0,
        explanation: "dd delete dòng hiện tại. Có thể dùng 5dd để xóa 5 dòng.",
    },
    {
        question: "yy và p trong Vim dùng để làm gì?",
        options: [
            "Copy dòng rồi paste",
            "Tìm rồi thay thế",
            "Lưu rồi thoát",
            "Undo rồi redo",
        ],
        correct: 0,
        explanation: "yy yank/copy dòng, p paste bên dưới hoặc sau con trỏ.",
    },
    {
        question:
            "Lệnh nào thay tất cả localhost thành 192.168.1.100 trong toàn file?",
        options: [
            ":%s/localhost/192.168.1.100/g",
            ":s/localhost/192.168.1.100/",
            "/localhost/192.168.1.100",
            "dd localhost",
        ],
        correct: 0,
        explanation:
            ":%s/cũ/mới/g thay toàn file; % là toàn bộ file, g là tất cả match trong dòng.",
    },
    {
        question: "Visual Block dùng phím nào để vào?",
        options: ["Ctrl+V", "V", "v", "Ctrl+B"],
        correct: 0,
        explanation:
            "Ctrl+V vào Visual Block, chọn vùng hình chữ nhật, rất hữu ích để comment nhiều dòng.",
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
                    <strong className="text-violet-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu về Vim.
                </p>
                <button
                    onClick={resetQuiz}
                    className="px-6 py-2 bg-slate-900 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-600 font-medium flex items-center gap-2"
                >
                    <RotateCcw size={16} /> Làm lại Quiz
                </button>
            </div>
        );
    const q = questions[currentQ];
    return (
        <div className="flex flex-col h-full max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-6 text-sm font-medium">
                <span className="text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full">
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
