import React, { useState } from "react";
import {
    AlertTriangle,
    ArrowRight,
    BookOpen,
    CheckCircle2,
    ChevronRight,
    ClipboardCheck,
    Code2,
    Copy,
    Cpu,
    ExternalLink,
    Eye,
    GitBranch,
    Grid2X2,
    HardDrive,
    Info,
    Keyboard,
    Layers,
    LayoutPanelTop,
    ListChecks,
    Monitor,
    PauseCircle,
    Play,
    PlugZap,
    RefreshCcw,
    Rocket,
    ScrollText,
    Server,
    ShieldCheck,
    TerminalSquare,
    Timer,
    Unplug,
    WifiOff,
    Zap,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 border-b border-slate-800 sticky top-0 z-50 backdrop-blur">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🐧</span>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Linux/Ubuntu
                            </h1>
                            <p className="text-xs text-slate-500 hidden md:block">
                                Background, foreground, nohup, screen và tmux
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400 hidden md:inline-block">
                            Bài trước: 5.2
                        </span>
                        <div className="text-sm font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                            Phần 5.3
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <Hero />

                <section className="space-y-6">
                    <SectionTitle
                        n="1"
                        color="cyan"
                        icon={<WifiOff size={22} />}
                        title="Vấn đề cốt lõi: mất SSH là mất process?"
                    />
                    <CoreProblem />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="2"
                        color="sky"
                        icon={<GitBranch size={22} />}
                        title="Sơ đồ vòng đời job foreground/background"
                    />
                    <JobLifecycle />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="3"
                        color="teal"
                        icon={<ShieldCheck size={22} />}
                        title="nohup — chạy tiếp sau khi logout"
                    />
                    <NohupDeepDive />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="4"
                        color="amber"
                        icon={<Unplug size={22} />}
                        title="disown — cứu job đã chạy mà quên nohup"
                    />
                    <DisownWorkflow />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="5"
                        color="green"
                        icon={<Monitor size={22} />}
                        title="GNU Screen — session không chết"
                    />
                    <ScreenGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="6"
                        color="purple"
                        icon={<LayoutPanelTop size={22} />}
                        title="tmux — terminal multiplexer mạnh nhất"
                    />
                    <TmuxGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="7"
                        color="pink"
                        icon={<Code2 size={22} />}
                        title="tmux scripting — tự động tạo workspace"
                    />
                    <TmuxScripting />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="8"
                        color="orange"
                        icon={<ListChecks size={22} />}
                        title="So sánh tổng quan — chọn công cụ nào?"
                    />
                    <ChooserMatrix />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="9"
                        color="red"
                        icon={<Server size={22} />}
                        title="Kịch bản thực tế tổng hợp"
                    />
                    <RealWorldScenarios />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="10"
                        color="lime"
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
                                <span className="bg-cyan-500/20 text-cyan-400 p-2 rounded-lg">
                                    <ClipboardCheck size={20} />
                                </span>
                                Kiểm tra nhanh: &, nohup, screen, tmux
                            </h3>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                <div className="text-center pt-8 border-t border-slate-800">
                    <p className="text-slate-400 mb-4">
                        Bạn đã hoàn thành Phần 5.3 — Tiến trình nền &
                        Foreground.
                    </p>
                    <button className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
                        Bài tiếp theo: 5.4 — CPU, RAM, Disk: free, df, du, lscpu{" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

function Hero() {
    const cards = [
        [Play, "& / jobs", "Chạy nền cơ bản"],
        [ShieldCheck, "nohup", "Sống sau logout"],
        [Monitor, "screen", "Reconnect session"],
        [LayoutPanelTop, "tmux", "Window + pane mạnh"],
    ];
    return (
        <section className="text-center space-y-5 py-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium">
                <PlugZap size={16} /> & · fg · bg · nohup · disown · screen ·
                tmux
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Tiến Trình Nền &{" "}
                <span className="text-cyan-400 font-mono">Foreground</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Bài này giúp bạn chạy task dài an toàn qua SSH, hiểu vì sao{" "}
                <code>&</code> chưa đủ, dùng <code>nohup</code>/
                <code>disown</code>, và làm việc chuyên nghiệp với{" "}
                <code>screen</code> hoặc <code>tmux</code>.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4">
                {cards.map(([Icon, title, desc]) => (
                    <div
                        key={title}
                        className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 text-left"
                    >
                        <Icon className="text-cyan-400 mb-3" size={24} />
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
        cyan: "bg-cyan-500/20 text-cyan-400",
        sky: "bg-sky-500/20 text-sky-400",
        teal: "bg-teal-500/20 text-teal-400",
        amber: "bg-amber-500/20 text-amber-400",
        green: "bg-green-500/20 text-green-400",
        purple: "bg-purple-500/20 text-purple-400",
        pink: "bg-pink-500/20 text-pink-400",
        orange: "bg-orange-500/20 text-orange-400",
        red: "bg-red-500/20 text-red-400",
        lime: "bg-lime-500/20 text-lime-400",
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
        cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
        teal: "bg-teal-500/10 border-teal-500/20 text-teal-300",
        amber: "bg-amber-500/10 border-amber-500/20 text-amber-300",
        green: "bg-green-500/10 border-green-500/20 text-green-300",
        purple: "bg-purple-500/10 border-purple-500/20 text-purple-300",
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

function CoreProblem() {
    const levels = [
        ["Cấp 1", "&", "Background nhưng dễ chết khi logout", "text-red-300"],
        ["Cấp 2", "nohup &", "Thoát terminal vẫn sống", "text-teal-300"],
        ["Cấp 3", "disown", "Tách job khỏi shell", "text-amber-300"],
        ["Cấp 4", "screen", "Session riêng, reconnect được", "text-green-300"],
        ["Cấp 5", "tmux", "Mạnh nhất, chia pane đẹp", "text-purple-300"],
    ];
    return (
        <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                <div className="flex items-start gap-5">
                    <div className="bg-cyan-500/15 text-cyan-400 p-4 rounded-2xl border border-cyan-500/20">
                        <WifiOff size={42} />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">
                            SSH rớt giữa chừng là tình huống rất thật
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            Bạn SSH vào server, chạy lệnh nặng 2 tiếng. Nếu mạng
                            đứt, laptop hết pin hoặc terminal bị đóng, shell có
                            thể gửi SIGHUP và task bị kill theo. Mục tiêu của
                            bài này là chọn đúng mức bảo vệ cho từng tình huống.
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                            <MiniPoint
                                icon={<AlertTriangle size={18} />}
                                tone="rose"
                                title="Sai lầm phổ biến"
                                text="Chạy command & rồi tưởng nó sẽ sống mãi sau logout."
                            />
                            <MiniPoint
                                icon={<ShieldCheck size={18} />}
                                tone="teal"
                                title="Cách chuyên nghiệp"
                                text="Task đơn giản dùng nohup; làm việc server hàng ngày dùng tmux."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-2 space-y-3">
                {levels.map(([level, cmd, desc, color]) => (
                    <div
                        key={level}
                        className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 flex items-center gap-4"
                    >
                        <div className="text-xs font-bold text-slate-500 w-12">
                            {level}
                        </div>
                        <div>
                            <div
                                className={`font-mono font-black text-lg ${color}`}
                            >
                                {cmd}
                            </div>
                            <div className="text-xs text-slate-500">{desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function JobLifecycle() {
    const [mode, setMode] = useState("diagram");
    const code = {
        diagram: `Gõ lệnh
  ├─ Bình thường → FOREGROUND → Ctrl+Z → STOPPED
  │                    ↑             │
  │                    └──── fg ◄────┘
  │                                  │
  │                                  └─ bg → RUNNING background
  │
  └─ Thêm & → BACKGROUND → jobs -l → fg / kill %N

Khi LOGOUT:
  command &            → thường BỊ KILL bởi SIGHUP
  nohup command &      → SỐNG SÓT
  command & + disown   → SỐNG SÓT
  screen/tmux session  → SỐNG SÓT + reconnect được`,
        commands: `$ python3 app.py
# foreground: chiếm terminal

Ctrl+Z
[1]+ Stopped python3 app.py

$ bg
[1]+ python3 app.py &

$ jobs -l
[1]+ 1234 Running python3 app.py &

$ fg %1
python3 app.py

$ kill %1`,
        background: `$ python3 app.py &
[1] 1234
$ echo $!
1234

$ jobs -l
[1]+ 1234 Running python3 app.py &

$ wait %1
# Chờ riêng job 1 hoàn thành`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["diagram", "Sơ đồ"],
                    ["commands", "Ctrl+Z → bg → fg"],
                    ["background", "command &"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setMode(k)}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${mode === k ? "bg-sky-500/10 border-sky-500/40 text-sky-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <TerminalBlock title="job lifecycle" code={code[mode]} />
                </div>
                <div className="lg:col-span-2 space-y-3">
                    <MiniPoint
                        icon={<Play size={18} />}
                        tone="cyan"
                        title="Foreground"
                        text="Process chiếm terminal. Bạn cần Ctrl+C, Ctrl+Z hoặc chờ nó xong."
                    />
                    <MiniPoint
                        icon={<PauseCircle size={18} />}
                        tone="amber"
                        title="Stopped"
                        text="Process bị suspend, chưa chạy tiếp cho đến khi fg hoặc bg."
                    />
                    <MiniPoint
                        icon={<Layers size={18} />}
                        tone="green"
                        title="Background"
                        text="Process chạy phía sau, terminal vẫn nhận lệnh mới."
                    />
                </div>
            </div>
        </div>
    );
}

function NohupDeepDive() {
    const [view, setView] = useState("proof");
    const code = {
        proof: `# Với &: có thể chết khi logout
$ sleep 9999 &
[1] 1234
$ echo "PID: $!"
PID: 1234

# Đóng terminal / logout...
$ ps aux | grep sleep
# Không còn → bị SIGHUP giết chết

# Với nohup: sống sót
$ nohup sleep 9999 &
[1] 1235
nohup: ignoring input and appending output to 'nohup.out'

# Login lại:
$ ps aux | grep sleep
alice 1235 0.0 0.0 sleep 9999`,
        redirect: `$ nohup python3 app.py &
# stdout/stderr mặc định → nohup.out

$ nohup python3 app.py > /var/log/app.log 2>&1 &
# Gộp stdout + stderr vào một file

$ nohup python3 app.py > app.log 2> error.log &
# Tách stdout và stderr

$ nohup python3 app.py > /dev/null 2>&1 &
# Bỏ toàn bộ output`,
        pid: `$ nohup python3 app.py > app.log 2>&1 &
$ echo "Đang chạy với PID: $!"
Đang chạy với PID: 1500

$ echo $! > /tmp/app.pid
$ cat /tmp/app.pid
1500

# Sau này muốn kill:
$ kill $(cat /tmp/app.pid)`,
        multi: `$ nohup python3 worker1.py > /tmp/w1.log 2>&1 &
$ nohup python3 worker2.py > /tmp/w2.log 2>&1 &
$ nohup python3 worker3.py > /tmp/w3.log 2>&1 &

$ tail -f /tmp/w1.log /tmp/w2.log /tmp/w3.log`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["proof", "& vs nohup"],
                        ["redirect", "Redirect output"],
                        ["pid", "Lưu PID"],
                        ["multi", "Nhiều worker"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setView(k)}
                            className={`w-full text-left rounded-xl border p-4 font-bold ${view === k ? "bg-teal-500/10 border-teal-500/40 text-teal-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                    <div className="bg-teal-500/10 border border-teal-500/30 rounded-2xl p-4 text-sm text-teal-100">
                        Công thức chuẩn:{" "}
                        <code>nohup command &gt; log 2&gt;&amp;1 &amp;</code>
                    </div>
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`nohup — ${view}`}
                        code={code[view]}
                    />
                </div>
            </div>
        </div>
    );
}

function DisownWorkflow() {
    const [mode, setMode] = useState("rescue");
    const code = {
        rescue: `$ rsync -av /data/ /backup/
# Lỡ chạy foreground, quên nohup

Ctrl+Z
[1]+ Stopped rsync -av /data/ /backup/

$ bg
[1]+ rsync -av /data/ /backup/ &

$ disown %1
# Tách khỏi shell

$ jobs
# Không còn output

$ ps aux | grep rsync
alice 1600 25.0 3.0 rsync -av /data/ /backup/`,
        options: `$ python3 long_task.py &
[1] 1600

$ disown %1
# Xóa khỏi jobs list, tránh SIGHUP

$ disown 1600
# Tách theo PID

$ disown -a
# Tách tất cả jobs

$ disown -h %1
# Giữ trong jobs nhưng bỏ qua SIGHUP`,
        compare: `nohup:
  Dùng TRƯỚC khi chạy
  Output thường redirect rõ ràng
  Stdin chuyển từ /dev/null

Disown:
  Dùng SAU khi đã chạy
  Cứu job quên nohup
  disown %1: biến mất khỏi jobs
  disown -h %1: vẫn trong jobs nhưng immune SIGHUP`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["rescue", "Workflow cứu vãn"],
                    ["options", "Cú pháp"],
                    ["compare", "nohup vs disown"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setMode(k)}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${mode === k ? "bg-amber-500/10 border-amber-500/40 text-amber-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
                <TerminalBlock title="disown" code={code[mode]} />
                <div className="bg-slate-950 border border-slate-700 rounded-2xl p-5">
                    <h4 className="text-white font-bold flex items-center gap-2 mb-4">
                        <Unplug className="text-amber-400" /> Khi nào dùng
                        disown?
                    </h4>
                    <div className="space-y-3">
                        <MiniPoint
                            icon={<AlertTriangle size={18} />}
                            tone="amber"
                            title="Quên nohup"
                            text="Đã chạy task dài rồi mới nhớ ra sắp logout."
                        />
                        <MiniPoint
                            icon={<ArrowRight size={18} />}
                            tone="cyan"
                            title="Ctrl+Z → bg → disown"
                            text="Đây là workflow cứu vãn kinh điển khi command đang foreground."
                        />
                        <MiniPoint
                            icon={<Info size={18} />}
                            tone="teal"
                            title="Không reconnect được"
                            text="disown giữ process sống, nhưng không cho bạn quay lại terminal như screen/tmux."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function ScreenGuide() {
    const [tab, setTab] = useState("basic");
    const code = {
        basic: `$ sudo apt install screen -y
$ screen --version

$ screen
$ screen -S training
$ screen -S backup

# Trong screen:
$ python3 train_model.py

# Detach:
Ctrl+A, D
[detached from 1234.training]`,
        attach: `$ screen -ls
There are screens on:
  1234.training (Detached)
  1235.backup   (Detached)
  1236.pts-0    (Attached)

$ screen -r training
$ screen -r 1234
$ screen -r 1234.training

# Nếu đang Attached:
$ screen -d -r 1236`,
        hotkeys: `PREFIX = Ctrl+A

Ctrl+A, D       Detach
Ctrl+A, c       Window mới
Ctrl+A, n       Window tiếp theo
Ctrl+A, p       Window trước đó
Ctrl+A, 0-9     Chuyển window số N
Ctrl+A, "       Danh sách windows
Ctrl+A, A       Đổi tên window
Ctrl+A, k       Kill window
Ctrl+A, ?       Help
Ctrl+A, :quit   Hủy session`,
        workflow: `$ screen -S ai_project

# Window 0: training
$ python3 train.py --epochs 100

Ctrl+A, c
# Window 1: monitoring
$ watch -n 5 'nvidia-smi; free -h; df -h'

Ctrl+A, c
# Window 2: log
$ tail -f /var/log/train.log

Ctrl+A, D
# Về nhà, session vẫn chạy

$ screen -r ai_project`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-4 border-b border-slate-700">
                {[
                    ["basic", "Cơ bản"],
                    ["attach", "List/Attach"],
                    ["hotkeys", "Phím tắt"],
                    ["workflow", "Workflow"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setTab(k)}
                        className={`p-4 font-bold border-b md:border-b-0 md:border-r last:border-r-0 border-slate-700 ${tab === k ? "bg-green-500/10 text-green-300" : "text-slate-400 hover:bg-slate-900"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="p-6 grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <TerminalBlock title={`screen — ${tab}`} code={code[tab]} />
                </div>
                <div className="lg:col-span-2 space-y-3">
                    <MiniPoint
                        icon={<Monitor size={18} />}
                        tone="green"
                        title="Session riêng"
                        text="Detach ra ngoài nhưng lệnh bên trong vẫn chạy."
                    />
                    <MiniPoint
                        icon={<RefreshCcw size={18} />}
                        tone="cyan"
                        title="Reconnect được"
                        text="SSH lại rồi screen -r để quay lại đúng terminal cũ."
                    />
                    <MiniPoint
                        icon={<Keyboard size={18} />}
                        tone="amber"
                        title="Prefix Ctrl+A"
                        text="Mọi phím tắt screen bắt đầu bằng Ctrl+A."
                    />
                </div>
            </div>
        </div>
    );
}

function TmuxGuide() {
    const [section, setSection] = useState("session");
    const code = {
        session: `$ sudo apt install tmux -y
$ tmux -V

$ tmux
$ tmux new
$ tmux new -s work
$ tmux new-session -s deploy

# Detach:
Ctrl+B, D

$ tmux ls
work: 3 windows

$ tmux a -t work
$ tmux kill-session -t work`,
        window: `PREFIX = Ctrl+B

Ctrl+B, c       Create window
Ctrl+B, ,       Đổi tên window
Ctrl+B, n       Next window
Ctrl+B, p       Previous window
Ctrl+B, 0-9     Chuyển window số N
Ctrl+B, w       Menu window
Ctrl+B, l       Last window
Ctrl+B, &       Kill window`,
        pane: `Ctrl+B, %       Chia dọc: 2 cột
Ctrl+B, "       Chia ngang: 2 hàng
Ctrl+B, ←→↑↓    Di chuyển pane
Ctrl+B, q       Hiện số pane
Ctrl+B, z       Zoom pane
Ctrl+B, x       Kill pane
Ctrl+B, Space   Đổi layout
Ctrl+B, Ctrl+←→↑↓ Resize pane`,
        copy: `Ctrl+B, [       Copy mode / scroll
Space           Bắt đầu chọn
Enter           Copy và thoát
Ctrl+B, ]       Paste

# Bật mouse tạm thời:
Ctrl+B, :set -g mouse on

# Trong ~/.tmux.conf:
set -g mouse on`,
        workflow: `$ tmux new -s devops

# Window 1: editor
$ vim /srv/webapp/app.py

Ctrl+B, c
# Window 2: logs
$ tail -f /var/log/nginx/access.log /var/log/app/app.log

Ctrl+B, c
# Window 3: monitor
Ctrl+B, %
$ htop
Ctrl+B, →
$ watch -n 5 df -h

Ctrl+B, D

$ tmux a -t devops`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["session", "Session"],
                        ["window", "Window"],
                        ["pane", "Pane"],
                        ["copy", "Copy mode"],
                        ["workflow", "Workflow"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setSection(k)}
                            className={`w-full text-left rounded-xl border p-4 font-bold ${section === k ? "bg-purple-500/10 border-purple-500/40 text-purple-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                    <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-4 text-sm text-purple-100">
                        tmux có cấu trúc: <code>SESSION → WINDOW → PANE</code>.
                        Đây là công cụ nên học nếu bạn làm việc server thường
                        xuyên.
                    </div>
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`tmux — ${section}`}
                        code={code[section]}
                    />
                </div>
            </div>
            <TmuxLayoutDemo />
        </div>
    );
}

function TmuxLayoutDemo() {
    return (
        <div className="mt-6 bg-slate-950 border border-slate-700 rounded-2xl p-5">
            <h4 className="font-bold text-white flex items-center gap-2 mb-4">
                <Grid2X2 className="text-purple-400" /> Layout 4 pane mẫu
            </h4>
            <div className="grid grid-cols-2 gap-2 font-mono text-sm">
                <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 min-h-24">
                    <span className="text-purple-300">Pane 1</span>
                    <br />
                    htop
                </div>
                <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 min-h-24">
                    <span className="text-purple-300">Pane 2</span>
                    <br />
                    watch df -h
                </div>
                <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 min-h-24">
                    <span className="text-purple-300">Pane 3</span>
                    <br />
                    tail -f logs
                </div>
                <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 min-h-24">
                    <span className="text-purple-300">Pane 4</span>
                    <br />
                    docker ps
                </div>
            </div>
        </div>
    );
}

function TmuxScripting() {
    const [view, setView] = useState("workspace");
    const code = {
        workspace: `#!/bin/bash
SESSION="workspace"

tmux kill-session -t "$SESSION" 2>/dev/null

tmux new-session -d -s "$SESSION" -n "editor"
tmux send-keys -t "$SESSION:editor" \
  "cd /srv/webapp && vim ." C-m

tmux new-window -t "$SESSION" -n "logs"
tmux split-window -h -t "$SESSION:logs"
tmux send-keys -t "$SESSION:logs.left" \
  "tail -f /var/log/nginx/error.log" C-m
tmux send-keys -t "$SESSION:logs.right" \
  "tail -f /var/log/app/app.log" C-m

tmux new-window -t "$SESSION" -n "shell"
tmux send-keys -t "$SESSION:shell" "cd /srv/webapp" C-m

tmux select-window -t "$SESSION:editor"
tmux attach-session -t "$SESSION"`,
        config: `# ~/.tmux.conf
set -g mouse on
set -g history-limit 50000
set -g base-index 1
setw -g pane-base-index 1
set -g renumber-windows on

bind r source-file ~/.tmux.conf \; display "Config reloaded! ✅"

bind | split-window -h -c "#{pane_current_path}"
bind - split-window -v -c "#{pane_current_path}"

bind h select-pane -L
bind j select-pane -D
bind k select-pane -U
bind l select-pane -R

setw -g mode-keys vi`,
        workers: `#!/bin/bash
SESSION="ai_workers"
tmux kill-session -t "$SESSION" 2>/dev/null
tmux new-session -d -s "$SESSION"

for i in 1 2 3 4; do
  if [ $i -eq 1 ]; then
    tmux send-keys -t "$SESSION" \
      "nice -n 5 python3 worker.py --id $i > /tmp/worker$i.log 2>&1" C-m
  else
    tmux new-window -t "$SESSION"
    tmux send-keys -t "$SESSION" \
      "nice -n 5 python3 worker.py --id $i > /tmp/worker$i.log 2>&1" C-m
  fi
done

tmux new-window -t "$SESSION" -n "logs"
tmux send-keys -t "$SESSION:logs" "tail -f /tmp/worker*.log" C-m

echo "Xem: tmux a -t $SESSION"`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["workspace", "setup_workspace.sh"],
                    ["config", "~/.tmux.conf"],
                    ["workers", "AI workers"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setView(k)}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${view === k ? "bg-pink-500/10 border-pink-500/40 text-pink-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <TerminalBlock title={view} code={code[view]} />
                </div>
                <div className="lg:col-span-2 space-y-3">
                    <MiniPoint
                        icon={<Code2 size={18} />}
                        tone="purple"
                        title="Automation"
                        text="tmux có thể tạo session/window/pane và gửi lệnh bằng script."
                    />
                    <MiniPoint
                        icon={<ScrollText size={18} />}
                        tone="green"
                        title="Workspace chuẩn"
                        text="Một lệnh mở sẵn editor, logs, monitoring và shell đúng thư mục."
                    />
                    <MiniPoint
                        icon={<Rocket size={18} />}
                        tone="cyan"
                        title="Workers song song"
                        text="Chạy nhiều worker trong nhiều window, gom log ở window cuối."
                    />
                </div>
            </div>
        </div>
    );
}

function ChooserMatrix() {
    const rows = [
        ["Task ngắn nền", "✅", "✅", "-", "-"],
        ["Survive logout", "❌", "✅", "✅", "✅"],
        ["Reconnect sau", "❌", "❌", "✅", "✅"],
        ["Nhiều windows", "❌", "❌", "✅", "✅"],
        ["Chia màn hình", "❌", "❌", "✅", "✅✅"],
        ["Có sẵn Ubuntu", "✅", "✅", "Cài", "Cài"],
        ["Dùng trong CI/CD", "✅", "✅", "-", "-"],
        ["Làm việc server", "-", "-", "✅", "✅✅"],
    ];
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="overflow-x-auto border border-slate-700 rounded-2xl">
                <table className="w-full text-sm min-w-[720px]">
                    <thead className="bg-slate-950 text-slate-400">
                        <tr>
                            <th className="text-left p-4">Tình huống</th>
                            <th className="p-4">&</th>
                            <th className="p-4">nohup</th>
                            <th className="p-4">screen</th>
                            <th className="p-4">tmux</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((r) => (
                            <tr
                                key={r[0]}
                                className="border-t border-slate-700 bg-slate-900/60"
                            >
                                <td className="p-4 font-bold text-white">
                                    {r[0]}
                                </td>
                                {r.slice(1).map((c, i) => (
                                    <td
                                        key={i}
                                        className="p-4 text-center text-slate-300"
                                    >
                                        {c}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="grid md:grid-cols-3 gap-3 mt-6">
                <MiniPoint
                    icon={<TerminalSquare size={18} />}
                    tone="teal"
                    title="Task đơn giản"
                    text="Dùng nohup cmd > log 2>&1 &"
                />
                <MiniPoint
                    icon={<Monitor size={18} />}
                    tone="green"
                    title="Server cũ"
                    text="Dùng screen nếu tmux không có sẵn."
                />
                <MiniPoint
                    icon={<LayoutPanelTop size={18} />}
                    tone="purple"
                    title="Làm việc hằng ngày"
                    text="Dùng tmux: reconnect, pane, config, scripting."
                />
            </div>
        </div>
    );
}

function RealWorldScenarios() {
    const [scenario, setScenario] = useState("deploy");
    const scenarios = {
        deploy: {
            title: "Deploy ứng dụng + giám sát không gián đoạn",
            icon: Server,
            code: `$ tmux new -s deploy_v2

# Window 1: deploy
$ nohup bash deploy.sh > /var/log/deploy.log 2>&1

Ctrl+B, c
# Window 2: log
$ tail -f /var/log/deploy.log

Ctrl+B, c
# Window 3: monitor
Ctrl+B, %
$ htop
Ctrl+B, →
$ watch -n 2 'systemctl status nginx mysql myapp'

Ctrl+B, D

$ tmux a -t deploy_v2`,
        },
        ai: {
            title: "Chạy nhiều AI workers song song",
            icon: Cpu,
            code: `$ cat > ~/run_workers.sh << 'EOF'
#!/bin/bash
SESSION="ai_workers"
tmux kill-session -t "$SESSION" 2>/dev/null
tmux new-session -d -s "$SESSION"

for i in 1 2 3 4; do
  tmux new-window -t "$SESSION" -n "worker$i"
  tmux send-keys -t "$SESSION:worker$i" \
    "nice -n 5 python3 worker.py --id $i > /tmp/worker$i.log 2>&1" C-m
done

tmux new-window -t "$SESSION" -n "logs"
tmux send-keys -t "$SESSION:logs" "tail -f /tmp/worker*.log" C-m
EOF

$ bash ~/run_workers.sh
$ tmux a -t ai_workers`,
        },
        backup: {
            title: "Backup dài qua đêm",
            icon: HardDrive,
            code: `$ tmux new -s backup

$ nohup nice -n 19 tar -czf /backup/full.tar.gz /home/ /etc/ \
  > /var/log/backup.log 2>&1 &
$ echo $! > /tmp/backup.pid

Ctrl+B, c
$ tail -f /var/log/backup.log

Ctrl+B, D

# Sáng hôm sau
$ tmux a -t backup
$ ps -p $(cat /tmp/backup.pid) -o pid,etime,%cpu,%mem,comm`,
        },
    };
    const current = scenarios[scenario];
    const Icon = current.icon;
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {Object.entries(scenarios).map(([k, s]) => {
                        const ItemIcon = s.icon;
                        return (
                            <button
                                key={k}
                                onClick={() => setScenario(k)}
                                className={`w-full text-left p-4 rounded-2xl border transition-all ${scenario === k ? "bg-red-500/10 border-red-500/40" : "bg-slate-900 border-slate-700 hover:border-slate-500"}`}
                            >
                                <div className="flex items-center gap-3">
                                    <ItemIcon className="text-red-400" />
                                    <span className="font-bold text-white">
                                        {s.title}
                                    </span>
                                </div>
                            </button>
                        );
                    })}
                </div>
                <div className="lg:col-span-3">
                    <div className="mb-4 flex items-center gap-2 text-red-300 font-bold">
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
        [
            "Chạy nohup task có log",
            "nohup bash -c 'for i in $(seq 1 60); do echo Step $i; sleep 1; done' > /tmp/task.log 2>&1 &",
        ],
        ["Theo dõi log", "tail -f /tmp/task.log"],
        [
            "Kiểm tra process sau khi mở terminal mới",
            "pgrep -la bash && tail /tmp/task.log",
        ],
        ["Tạo screen session", "screen -S practice"],
        ["Detach screen", "Ctrl+A, D"],
        ["Attach lại screen", "screen -r practice"],
        ["Tạo tmux session", "tmux new -s practice"],
        ["Chia tmux pane", 'Ctrl+B, %  và Ctrl+B, "'],
        [
            "Chạy lệnh trong từng pane",
            "htop | watch -n 1 date | tail -f /var/log/syslog",
        ],
        ["Zoom pane", "Ctrl+B, z"],
        ["Detach tmux", "Ctrl+B, D"],
        [
            "Attach và kill tmux session",
            "tmux a -t practice && tmux kill-session -t practice",
        ],
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
                <div className="text-sm font-bold text-lime-300 bg-lime-500/10 border border-lime-500/20 rounded-full px-4 py-2">
                    {done.length}/{tasks.length} hoàn thành
                </div>
            </div>
            <div className="space-y-3">
                {tasks.map(([title, cmd], i) => (
                    <button
                        key={title}
                        onClick={() => toggle(i)}
                        className={`w-full text-left rounded-2xl border p-4 transition-all ${done.includes(i) ? "bg-lime-500/10 border-lime-500/30" : "bg-slate-900 border-slate-700 hover:border-slate-500"}`}
                    >
                        <div className="flex items-start gap-3">
                            {done.includes(i) ? (
                                <CheckCircle2 className="text-lime-400 shrink-0" />
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
                        <BookOpen className="text-cyan-400" /> Cheat sheet nhanh
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <SummaryBox
                        title="background"
                        items={[
                            "cmd &",
                            "Ctrl+Z",
                            "bg",
                            "fg %2",
                            "jobs -l",
                            "kill %1",
                            "wait",
                        ]}
                    />
                    <SummaryBox
                        title="nohup/disown"
                        items={[
                            "nohup cmd &",
                            "nohup cmd > log 2>&1 &",
                            "echo $! > app.pid",
                            "disown %1",
                            "disown -a",
                        ]}
                    />
                    <SummaryBox
                        title="screen"
                        items={[
                            "screen -S name",
                            "screen -ls",
                            "screen -r name",
                            "screen -d -r name",
                            "Ctrl+A,D",
                            "Ctrl+A,c",
                        ]}
                    />
                    <SummaryBox
                        title="tmux"
                        items={[
                            "tmux new -s name",
                            "tmux ls",
                            "tmux a -t name",
                            "Ctrl+B,D",
                            "Ctrl+B,%",
                            'Ctrl+B,"',
                            "Ctrl+B,z",
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}

function SummaryBox({ title, items }) {
    return (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
            <h4 className="font-bold text-cyan-300 uppercase text-xs tracking-widest mb-4">
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
        question: "Tại sao command & có thể bị kill khi logout?",
        options: [
            "Vì shell có thể gửi SIGHUP đến background jobs khi session đóng",
            "Vì & luôn gửi SIGKILL",
            "Vì & chỉ chạy trong 10 giây",
            "Vì process không có PID",
        ],
        correct: 0,
        explanation:
            "& chỉ đưa job xuống background, không bảo vệ job khỏi SIGHUP khi shell/SSH session kết thúc.",
    },
    {
        question:
            "Công thức nohup chuẩn để lưu cả stdout và stderr vào log là gì?",
        options: [
            "nohup cmd > log 2>&1 &",
            "cmd | nohup",
            "nohup cmd < log",
            "nohup -9 cmd",
        ],
        correct: 0,
        explanation:
            "2>&1 gộp stderr vào stdout, còn & cuối lệnh đưa process xuống background.",
    },
    {
        question: "Đang chạy foreground mà quên nohup, workflow cứu vãn là gì?",
        options: [
            "Ctrl+Z → bg → disown %1",
            "Ctrl+C → nohup",
            "kill -9 → screen",
            "exit → fg",
        ],
        correct: 0,
        explanation:
            "Ctrl+Z suspend, bg cho chạy nền, disown tách khỏi shell để tránh SIGHUP.",
    },
    {
        question: "disown %1 và disown -h %1 khác nhau thế nào?",
        options: [
            "disown %1 xóa khỏi jobs; disown -h giữ trong jobs nhưng bỏ qua SIGHUP",
            "Không khác nhau",
            "-h sẽ kill job",
            "disown %1 chỉ dùng với tmux",
        ],
        correct: 0,
        explanation:
            "-h nghĩa là hangup immune: job vẫn hiện trong jobs nhưng không nhận SIGHUP từ shell.",
    },
    {
        question: "Screen dùng prefix mặc định nào?",
        options: ["Ctrl+A", "Ctrl+B", "Ctrl+C", "Alt+D"],
        correct: 0,
        explanation: "screen dùng Ctrl+A làm prefix; tmux dùng Ctrl+B.",
    },
    {
        question: "Trong tmux, Ctrl+B, % dùng để làm gì?",
        options: [
            "Chia dọc thành 2 cột",
            "Detach session",
            "Kill pane",
            "Paste clipboard",
        ],
        correct: 0,
        explanation:
            'Ctrl+B, % split vertical theo nghĩa tạo hai cột. Ctrl+B, " chia ngang thành hai hàng.',
    },
    {
        question: "Làm sao tạo tmux session detached để dùng trong script?",
        options: [
            "tmux new-session -d -s name",
            "tmux attach -d name",
            "tmux kill-session -d",
            "screen -r name",
        ],
        correct: 0,
        explanation:
            "-d tạo session ở chế độ detached, rất hữu ích khi script tự setup workspace.",
    },
    {
        question: "Bạn mất kết nối SSH khi đang ở tmux, dữ liệu có mất không?",
        options: [
            "Không, SSH lại rồi tmux a -t session để reconnect",
            "Có, tmux luôn bị kill",
            "Chỉ mất window 0",
            "Chỉ sống nếu dùng Ctrl+C",
        ],
        correct: 0,
        explanation:
            "tmux session vẫn chạy trên server. Khi SSH lại, dùng tmux ls và tmux a -t name.",
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
                    <strong className="text-cyan-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu về background, nohup, screen, tmux.
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
