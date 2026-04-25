import React, { useMemo, useState } from "react";
import {
    Activity,
    AlertTriangle,
    ArrowRight,
    Ban,
    BookOpen,
    CheckCircle2,
    ChevronRight,
    ClipboardCheck,
    Cpu,
    Gauge,
    HardDrive,
    Info,
    Keyboard,
    Layers,
    ListChecks,
    Lock,
    PauseCircle,
    Play,
    Radio,
    RefreshCcw,
    Rocket,
    Search,
    Server,
    Settings,
    ShieldAlert,
    Signal,
    Skull,
    SlidersHorizontal,
    TerminalSquare,
    Timer,
    User,
    Zap,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-rose-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 border-b border-slate-800 sticky top-0 z-50 backdrop-blur">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🐧</span>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Linux/Ubuntu
                            </h1>
                            <p className="text-xs text-slate-500 hidden md:block">
                                Signal, kill, priority, jobs và chạy nền an toàn
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400 hidden md:inline-block">
                            Bài trước: 5.1
                        </span>
                        <div className="text-sm font-medium text-rose-400 bg-rose-400/10 px-3 py-1 rounded-full border border-rose-400/20">
                            Phần 5.2
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <Hero />

                <section className="space-y-6">
                    <SectionTitle
                        n="1"
                        color="rose"
                        icon={<Signal size={22} />}
                        title="Signal — ngôn ngữ giao tiếp với process"
                    />
                    <div className="grid lg:grid-cols-5 gap-6">
                        <div className="lg:col-span-3 bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                            <div className="flex items-start gap-5">
                                <div className="bg-rose-500/15 text-rose-400 p-4 rounded-2xl border border-rose-500/20">
                                    <Radio size={42} />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-white">
                                        Signal = tín hiệu gửi đến process
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed">
                                        Bạn không “nói chuyện” trực tiếp với
                                        process. Linux dùng signal để yêu cầu
                                        process dừng, reload cấu hình, tạm dừng,
                                        tiếp tục hoặc bị kernel kết thúc ngay
                                        lập tức.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <MiniPoint
                                            icon={<Keyboard size={18} />}
                                            tone="rose"
                                            title="Ctrl+C / Ctrl+Z"
                                            text="Ctrl+C gửi SIGINT. Ctrl+Z gửi SIGTSTP để tạm dừng job foreground."
                                        />
                                        <MiniPoint
                                            icon={<ShieldAlert size={18} />}
                                            tone="amber"
                                            title="Quy tắc vàng"
                                            text="Luôn thử SIGTERM trước, chờ vài giây, chỉ dùng SIGKILL khi process không phản hồi."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <GoldenRuleCard />
                    </div>
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="2"
                        color="amber"
                        icon={<ListChecks size={22} />}
                        title="Bảng signal quan trọng nhất"
                    />
                    <SignalExplorer />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="3"
                        color="red"
                        icon={<Skull size={22} />}
                        title="Lệnh kill — gửi signal theo PID"
                    />
                    <KillLab />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="4"
                        color="orange"
                        icon={<Search size={22} />}
                        title="killall và pkill — kill theo tên, user, terminal hoặc full command"
                    />
                    <KillAllPkillTabs />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="5"
                        color="purple"
                        icon={<Gauge size={22} />}
                        title="nice và renice — điều chỉnh độ ưu tiên CPU"
                    />
                    <NiceReniceSimulator />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="6"
                        color="cyan"
                        icon={<Layers size={22} />}
                        title="Quản lý job — jobs, fg, bg"
                    />
                    <JobsWorkflow />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="7"
                        color="teal"
                        icon={<Rocket size={22} />}
                        title="nohup và disown — chạy tiếp khi logout"
                    />
                    <NohupGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="8"
                        color="green"
                        icon={<Server size={22} />}
                        title="Kịch bản thực tế tổng hợp"
                    />
                    <RealWorldScenarios />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="9"
                        color="sky"
                        icon={<TerminalSquare size={22} />}
                        title="Script quản lý tiến trình"
                    />
                    <ProcessManagerPreview />
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
                                <span className="bg-rose-500/20 text-rose-400 p-2 rounded-lg">
                                    <ClipboardCheck size={20} />
                                </span>
                                Kiểm tra nhanh: kill, nice, jobs, nohup
                            </h3>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                <div className="text-center pt-8 border-t border-slate-800">
                    <p className="text-slate-400 mb-4">
                        Bạn đã hoàn thành Phần 5.2 — Quản lý tiến trình.
                    </p>
                    <button className="bg-rose-600 hover:bg-rose-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-rose-500/20">
                        Bài tiếp theo: 5.3 — screen, tmux và session nền nâng
                        cao <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

function Hero() {
    const cards = [
        [Signal, "signal", "Ra lệnh cho process"],
        [Skull, "kill", "Gửi signal theo PID"],
        [Gauge, "nice", "Đổi ưu tiên CPU"],
        [Layers, "jobs", "fg · bg · nohup"],
    ];
    return (
        <section className="text-center space-y-5 py-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm font-medium">
                <Zap size={16} /> kill · killall · pkill · nice · renice · jobs
                · nohup
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Quản lý{" "}
                <span className="text-rose-400 font-mono">Tiến Trình</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Bài này giúp bạn dừng process đúng cách, phân biệt SIGTERM và
                SIGKILL, kill theo tên hoặc full command, điều chỉnh priority
                bằng nice/renice và điều khiển job foreground/background.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4">
                {cards.map(([Icon, title, desc]) => (
                    <div
                        key={title}
                        className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 text-left"
                    >
                        <Icon className="text-rose-400 mb-3" size={24} />
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
        rose: "bg-rose-500/20 text-rose-400",
        amber: "bg-amber-500/20 text-amber-400",
        red: "bg-red-500/20 text-red-400",
        orange: "bg-orange-500/20 text-orange-400",
        purple: "bg-purple-500/20 text-purple-400",
        cyan: "bg-cyan-500/20 text-cyan-400",
        teal: "bg-teal-500/20 text-teal-400",
        green: "bg-green-500/20 text-green-400",
        sky: "bg-sky-500/20 text-sky-400",
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
        rose: "bg-rose-500/10 border-rose-500/20 text-rose-300",
        amber: "bg-amber-500/10 border-amber-500/20 text-amber-300",
        purple: "bg-purple-500/10 border-purple-500/20 text-purple-300",
        cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
        teal: "bg-teal-500/10 border-teal-500/20 text-teal-300",
        green: "bg-green-500/10 border-green-500/20 text-green-300",
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

function GoldenRuleCard() {
    return (
        <div className="lg:col-span-2 bg-slate-800/50 border border-slate-700 rounded-3xl p-6">
            <h4 className="font-bold text-white flex items-center gap-2 mb-5">
                <ShieldAlert className="text-amber-400" /> Quy trình kill an
                toàn
            </h4>
            <div className="space-y-4">
                <StepCard
                    n="1"
                    tone="green"
                    title="SIGTERM trước"
                    cmd="kill -15 PID"
                    text="Yêu cầu process dừng lịch sự và tự cleanup."
                />
                <StepCard
                    n="2"
                    tone="amber"
                    title="Chờ và kiểm tra"
                    cmd="sleep 5 && kill -0 PID"
                    text="kill -0 chỉ kiểm tra process còn sống không."
                />
                <StepCard
                    n="3"
                    tone="red"
                    title="SIGKILL cuối cùng"
                    cmd="kill -9 PID"
                    text="Kernel giết ngay. Không cleanup, không hỏi process."
                />
            </div>
        </div>
    );
}

function StepCard({ n, tone, title, cmd, text }) {
    const toneMap = {
        green: "border-green-500/30 bg-green-500/10 text-green-300",
        amber: "border-amber-500/30 bg-amber-500/10 text-amber-300",
        red: "border-red-500/30 bg-red-500/10 text-red-300",
    };
    return (
        <div className={`${toneMap[tone]} border rounded-2xl p-4`}>
            <div className="flex items-center gap-3 mb-2">
                <span className="font-mono bg-slate-950/70 border border-white/10 rounded-full px-3 py-1">
                    {n}
                </span>
                <div className="font-bold text-white">{title}</div>
            </div>
            <code className="text-sm block mb-2">{cmd}</code>
            <p className="text-xs text-slate-300">{text}</p>
        </div>
    );
}

const signalRows = [
    {
        num: 1,
        name: "SIGHUP",
        icon: RefreshCcw,
        color: "teal",
        desc: "Reload cấu hình hoặc báo terminal bị hangup. Hay dùng với nginx/sshd.",
    },
    {
        num: 2,
        name: "SIGINT",
        icon: Ban,
        color: "amber",
        desc: "Interrupt như Ctrl+C. Process có thể bắt và xử lý.",
    },
    {
        num: 3,
        name: "SIGQUIT",
        icon: AlertTriangle,
        color: "orange",
        desc: "Quit như Ctrl+\\, thường tạo core dump để debug.",
    },
    {
        num: 9,
        name: "SIGKILL",
        icon: Skull,
        color: "red",
        desc: "Giết ngay lập tức. Không thể bắt, bỏ qua hoặc cleanup.",
    },
    {
        num: 15,
        name: "SIGTERM",
        icon: CheckCircle2,
        color: "green",
        desc: "Yêu cầu dừng lịch sự. Đây là signal mặc định của kill.",
    },
    {
        num: 18,
        name: "SIGCONT",
        icon: Play,
        color: "cyan",
        desc: "Tiếp tục process đang bị STOP/TSTP.",
    },
    {
        num: 19,
        name: "SIGSTOP",
        icon: PauseCircle,
        color: "purple",
        desc: "Tạm dừng ngay. Không thể bị process bỏ qua.",
    },
    {
        num: 20,
        name: "SIGTSTP",
        icon: PauseCircle,
        color: "sky",
        desc: "Terminal stop như Ctrl+Z. Process có thể bắt và xử lý.",
    },
];

function SignalExplorer() {
    const [selected, setSelected] = useState(15);
    const s = signalRows.find((x) => x.num === selected);
    const Icon = s.icon;
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3 grid md:grid-cols-2 gap-3">
                    {signalRows.map((item) => (
                        <button
                            key={item.num}
                            onClick={() => setSelected(item.num)}
                            className={`text-left rounded-2xl border p-4 transition-all ${selected === item.num ? "bg-amber-500/10 border-amber-500/50" : "bg-slate-900 border-slate-700 hover:border-slate-500"}`}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <item.icon
                                        className="text-amber-400"
                                        size={20}
                                    />
                                    <span className="font-bold text-white">
                                        {item.name}
                                    </span>
                                </div>
                                <span className="font-mono text-amber-300">
                                    {item.num}
                                </span>
                            </div>
                            <p className="text-xs text-slate-500 line-clamp-2">
                                {item.desc}
                            </p>
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-2">
                    <div className="bg-slate-950 border border-slate-700 rounded-2xl p-6 h-full">
                        <Icon className="text-amber-400 mb-4" size={42} />
                        <h4 className="text-2xl font-bold text-white">
                            {s.name}
                        </h4>
                        <p className="font-mono text-amber-300 mb-4">
                            Signal #{s.num}
                        </p>
                        <p className="text-sm text-slate-400 leading-relaxed mb-5">
                            {s.desc}
                        </p>
                        <TerminalBlock
                            title="ví dụ"
                            code={
                                s.num === 15
                                    ? "$ kill 1236\n$ kill -15 1236\n$ kill -TERM 1236"
                                    : s.num === 9
                                      ? "$ kill -9 1236\n$ kill -KILL 1236"
                                      : s.num === 1
                                        ? "$ sudo kill -HUP $(pgrep nginx)"
                                        : s.num === 19
                                          ? "$ kill -STOP 1236"
                                          : s.num === 18
                                            ? "$ kill -CONT 1236"
                                            : s.num === 20
                                              ? "Ctrl+Z\n# gửi SIGTSTP tới foreground job"
                                              : s.num === 2
                                                ? "Ctrl+C\n# gửi SIGINT tới foreground job"
                                                : "Ctrl+\\\n# gửi SIGQUIT"
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function KillLab() {
    const [mode, setMode] = useState("term");
    const [pid, setPid] = useState("1236");
    const commands = {
        term: `$ pgrep -la python3
${pid} python3 heavy_task.py

$ kill -15 ${pid}
# SIGTERM: yêu cầu dừng lịch sự

$ sleep 5
$ kill -0 ${pid} 2>/dev/null || echo "Đã dừng"`,
        kill: `$ kill -9 ${pid}
# SIGKILL: kernel giết ngay, không cleanup

$ pgrep -la python3
# Không có output = process đã chết`,
        hup: `$ sudo kill -HUP $(pgrep nginx)
# Reload config nginx, không dừng service

$ sudo kill -HUP $(pgrep sshd)
# SSHD reload config`,
        stop: `$ kill -STOP ${pid}
# Freeze process

$ strace -p ${pid}
# Debug/attach nếu cần

$ kill -CONT ${pid}
# Tiếp tục chạy`,
        multi: `$ kill -9 1234 1235 1236

$ kill -9 $(pgrep python3)
# Cẩn thận: kill tất cả python3

$ kill %1
# Kill job số 1 trong shell hiện tại`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                <div>
                    <h4 className="text-xl font-bold text-white">
                        Lab chọn signal để gửi đến PID
                    </h4>
                    <p className="text-sm text-slate-400">
                        kill không chỉ để “giết”; nó là công cụ gửi signal đến
                        process.
                    </p>
                </div>
                <label className="flex items-center gap-3 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3">
                    <span className="text-sm text-slate-500">PID</span>
                    <input
                        value={pid}
                        onChange={(e) => setPid(e.target.value)}
                        className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 w-24 text-white font-mono"
                    />
                </label>
            </div>
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["term", "SIGTERM lịch sự"],
                        ["kill", "SIGKILL ngay"],
                        ["hup", "SIGHUP reload"],
                        ["stop", "STOP / CONT"],
                        ["multi", "Nhiều PID / job"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setMode(k)}
                            className={`w-full text-left p-4 rounded-2xl border font-bold ${mode === k ? "bg-red-500/10 border-red-500/40 text-red-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`kill — ${mode}`}
                        code={commands[mode]}
                    />
                </div>
            </div>
        </div>
    );
}

function KillAllPkillTabs() {
    const [tab, setTab] = useState("compare");
    const code = {
        compare: `# kill   → cần PID
$ kill 1234

# killall → dùng tên command
$ killall firefox
$ killall -9 firefox

# pkill → linh hoạt theo regex/user/tty/full command
$ pkill firefox
$ pkill -u alice
$ pkill -t pts/1
$ pkill -f "python3 app.py"`,
        killall: `$ killall firefox
$ killall -9 firefox
$ killall -KILL chrome

$ killall -e python3
# Exact: python3, không phải python3.11

$ sudo killall -u bob
$ sudo killall -u bob python3

$ killall -HUP nginx
$ killall -STOP firefox
$ killall -CONT firefox

$ killall -i firefox
# Hỏi từng process trước khi kill

$ killall -w firefox
# Chờ đến khi firefox chết hẳn`,
        pkill: `$ pkill firefox
$ pkill -9 firefox
$ pkill -u alice
$ pkill -u alice python3
$ pkill -t pts/1

$ pkill python3
# Khớp tên process

$ pkill -f "python3 app.py"
# Khớp full command, chính xác hơn khi có nhiều python3`,
        safe: `$ pgrep -la python3
1236 python3 app.py
1500 python3 worker.py

# Sai nếu chỉ muốn kill app.py:
$ pkill python3
# Kill cả app.py và worker.py

# Đúng hơn:
$ pkill -f "python3 app.py"

# Kiểm tra trước khi kill:
$ pgrep -laf "python3 app.py"
$ pkill -TERM -f "python3 app.py"`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-4 border-b border-slate-700">
                {[
                    ["compare", "So sánh"],
                    ["killall", "killall"],
                    ["pkill", "pkill"],
                    ["safe", "An toàn"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setTab(k)}
                        className={`p-4 font-bold border-b md:border-b-0 md:border-r last:border-r-0 border-slate-700 ${tab === k ? "bg-orange-500/10 text-orange-300" : "text-slate-400 hover:bg-slate-900"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="p-6 grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <TerminalBlock title={tab} code={code[tab]} />
                </div>
                <div className="lg:col-span-2 space-y-3">
                    <MiniPoint
                        icon={<Skull size={18} />}
                        tone="rose"
                        title="kill PID"
                        text="Chính xác nhất khi đã biết PID cụ thể."
                    />
                    <MiniPoint
                        icon={<Search size={18} />}
                        tone="amber"
                        title="killall name"
                        text="Nhanh nhưng nguy hiểm nếu tên process quá chung."
                    />
                    <MiniPoint
                        icon={<Settings size={18} />}
                        tone="cyan"
                        title="pkill -f"
                        text="Khớp full command, rất hữu ích khi có nhiều process cùng tên."
                    />
                    <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4 text-sm text-red-100">
                        Không chạy <code>pkill python3</code> trên server
                        production nếu chưa kiểm tra bằng{" "}
                        <code>pgrep -la python3</code>.
                    </div>
                </div>
            </div>
        </div>
    );
}

function NiceReniceSimulator() {
    const [nice, setNice] = useState(10);
    const priorityLabel =
        nice < 0
            ? "Ưu tiên cao"
            : nice === 0
              ? "Mặc định"
              : nice >= 15
                ? "Ưu tiên rất thấp"
                : "Ưu tiên thấp";
    const barWidth = Math.max(8, 100 - ((nice + 20) / 39) * 92);
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 bg-slate-950 border border-slate-700 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                        <SlidersHorizontal className="text-purple-400" /> Nice
                        Value
                    </h4>
                    <p className="text-sm text-slate-400 mb-6">
                        NI càng âm càng ưu tiên cao. NI càng dương càng “nhường
                        CPU”.
                    </p>
                    <div className="space-y-5">
                        <input
                            type="range"
                            min="-20"
                            max="19"
                            value={nice}
                            onChange={(e) => setNice(Number(e.target.value))}
                            className="w-full accent-purple-500"
                        />
                        <div className="flex items-end justify-between">
                            <div>
                                <div className="text-sm text-slate-500">
                                    Nice value
                                </div>
                                <div className="text-5xl font-black text-purple-300 font-mono">
                                    {nice}
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm text-slate-500">
                                    Priority
                                </div>
                                <div className="text-2xl font-bold text-white">
                                    PR ≈ {20 + nice}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-purple-400 rounded-full"
                                    style={{ width: `${barWidth}%` }}
                                />
                            </div>
                            <div className="mt-2 text-sm font-bold text-purple-300">
                                {priorityLabel}
                            </div>
                        </div>
                        <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-sm text-purple-100">
                            User thường chỉ đặt được NI từ 0 đến +19. Muốn NI âm
                            cần quyền root.
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-3 space-y-6">
                    <TerminalBlock
                        title="nice — chạy process với priority"
                        code={`$ nice -n ${nice} python3 heavy.py &
[1] 1500

$ ps -p 1500 -o pid,ni,pri,%cpu,comm
  PID  NI PRI %CPU COMM
 1500 ${String(nice).padStart(3)} ${String(20 + nice).padStart(3)} 99.0 python3

# Ví dụ thực tế:
$ nice -n 19 tar -czf backup.tar.gz /home/
$ sudo nice -n -10 python3 critical_task.py`}
                    />
                    <TerminalBlock
                        title="renice — đổi priority đang chạy"
                        code={`$ renice -n ${nice} -p 1236
1236 (process ID) old priority 0, new priority ${nice}

$ sudo renice -n -10 -p 4567
# Tăng ưu tiên process quan trọng

$ sudo renice -n 10 -u bob
# Giảm priority mọi process của bob`}
                    />
                </div>
            </div>
        </div>
    );
}

function JobsWorkflow() {
    const [step, setStep] = useState(0);
    const steps = [
        {
            title: "Chạy foreground",
            cmd: `$ python3 app.py
# Process chiếm terminal, bạn chưa gõ lệnh khác được.`,
        },
        {
            title: "Ctrl+Z suspend",
            cmd: `^Z
[1]+  Stopped   python3 app.py
# Shell gửi SIGTSTP, job tạm dừng.`,
        },
        {
            title: "Đẩy xuống background",
            cmd: `$ bg
[1]+ python3 app.py &
$ jobs
[1]+ Running   python3 app.py &`,
        },
        {
            title: "Kéo về foreground",
            cmd: `$ fg %1
python3 app.py
# Job quay lại chiếm terminal.`,
        },
        {
            title: "Dừng hẳn",
            cmd: `Ctrl+C
# Gửi SIGINT

# Hoặc:
$ kill %1`,
        },
    ];
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2">
                    <h4 className="text-xl font-bold text-white mb-4">
                        Vòng đời job trong shell
                    </h4>
                    <div className="space-y-3">
                        {steps.map((s, i) => (
                            <button
                                key={s.title}
                                onClick={() => setStep(i)}
                                className={`w-full text-left p-4 rounded-2xl border transition-all ${step === i ? "bg-cyan-500/10 border-cyan-500/40" : "bg-slate-900 border-slate-700 hover:border-slate-500"}`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1">
                                        {i + 1}
                                    </span>
                                    <span className="font-bold text-white">
                                        {s.title}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={steps[step].title}
                        code={steps[step].cmd}
                    />
                    <div className="grid md:grid-cols-2 gap-3 mt-6">
                        <MiniPoint
                            icon={<Play size={18} />}
                            tone="cyan"
                            title="Foreground"
                            text="Đang chiếm terminal, cần Ctrl+C hoặc Ctrl+Z để can thiệp."
                        />
                        <MiniPoint
                            icon={<PauseCircle size={18} />}
                            tone="purple"
                            title="Background"
                            text="Chạy phía sau, terminal vẫn dùng được. Thêm & để chạy nền ngay."
                        />
                    </div>
                </div>
            </div>
            <JobReferenceCheatsheet />
        </div>
    );
}

function JobReferenceCheatsheet() {
    const refs = [
        ["%N", "Job số N"],
        ["%str", "Job bắt đầu bằng str"],
        ["%?str", "Job chứa str"],
        ["%+ / %%", "Job hiện tại"],
        ["%-", "Job trước đó"],
        ["jobs -l", "Hiện job kèm PID"],
    ];
    return (
        <div className="mt-6 bg-slate-950 border border-slate-700 rounded-2xl p-5">
            <h4 className="font-bold text-white flex items-center gap-2 mb-4">
                <Keyboard className="text-cyan-400" /> Tham chiếu job nhanh
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {refs.map(([k, desc]) => (
                    <div
                        key={k}
                        className="bg-slate-900 border border-slate-700 rounded-xl p-3"
                    >
                        <kbd className="font-mono text-cyan-300 font-black text-lg">
                            {k}
                        </kbd>
                        <div className="text-xs text-slate-500 mt-1">
                            {desc}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function NohupGuide() {
    const [mode, setMode] = useState("problem");
    const code = {
        problem: `# Vấn đề:
# Khi logout hoặc đóng terminal, shell gửi SIGHUP
# đến các jobs của nó.

$ python3 long_task.py &
[1] 1500

# Logout SSH...
# Job có thể bị kill theo shell!`,
        nohup: `$ nohup python3 long_task.py &
[1] 1500
nohup: ignoring input and appending output to 'nohup.out'

$ tail -f nohup.out
# Xem output realtime`,
        redirect: `$ nohup python3 app.py > /var/log/app.log 2>&1 &
# stdout và stderr cùng vào app.log

$ nohup python3 app.py > app.log 2> error.log &
# stdout và stderr tách riêng

$ nohup python3 app.py > /dev/null 2>&1 &
# Bỏ output`,
        disown: `$ python3 app.py &
[1] 1600

$ disown %1
# Tách khỏi shell, không còn trong jobs list

$ jobs
# Không còn thấy job này

$ pgrep -la python3
1600 python3 app.py`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["problem", "Vấn đề SIGHUP"],
                        ["nohup", "nohup cơ bản"],
                        ["redirect", "Redirect log"],
                        ["disown", "disown"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setMode(k)}
                            className={`w-full text-left rounded-xl border p-4 font-bold ${mode === k ? "bg-teal-500/10 border-teal-500/40 text-teal-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                    <div className="bg-teal-500/10 border border-teal-500/30 rounded-2xl p-4 text-sm text-teal-100">
                        <code>command &</code> chỉ chạy background. Muốn sống
                        sau logout, dùng <code>nohup command &</code> hoặc{" "}
                        <code>disown</code>.
                    </div>
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`nohup — ${mode}`}
                        code={code[mode]}
                    />
                </div>
            </div>
            <NohupCompare />
        </div>
    );
}

function NohupCompare() {
    const rows = [
        ["command", "Foreground", "Bị kill khi đóng terminal"],
        ["command &", "Background", "Vẫn có thể bị SIGHUP khi logout"],
        ["nohup command &", "Background bền", "Tiếp tục chạy"],
        ["command & disown", "Tách khỏi shell", "Tiếp tục chạy"],
    ];
    return (
        <div className="mt-6 overflow-hidden border border-slate-700 rounded-2xl">
            <table className="w-full text-sm">
                <thead className="bg-slate-950 text-slate-400">
                    <tr>
                        <th className="text-left p-3">Cách chạy</th>
                        <th className="text-left p-3">Kiểu</th>
                        <th className="text-left p-3">Khi logout</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map(([a, b, c]) => (
                        <tr
                            key={a}
                            className="border-t border-slate-700 bg-slate-900/60"
                        >
                            <td className="p-3 font-mono text-teal-300">{a}</td>
                            <td className="p-3 text-slate-300">{b}</td>
                            <td className="p-3 text-slate-400">{c}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function RealWorldScenarios() {
    const [scenario, setScenario] = useState("hung");
    const scenarios = {
        hung: {
            title: "Dọn dẹp process treo",
            icon: Skull,
            code: `$ ps aux | grep [f]irefox
alice 2345 0.1 8.5 firefox
alice 2346 0.0 2.0 firefox

$ killall -TERM firefox
$ sleep 5

$ pgrep firefox
2345

$ killall -KILL firefox
$ pgrep firefox
# Không có output = đã chết ✅`,
        },
        backup: {
            title: "Backup không làm chậm server",
            icon: HardDrive,
            code: `# Sai: backup có thể tranh CPU/I/O
$ tar -czf /backup/full.tar.gz /var/www/ /home/ /etc/

# Đúng: priority CPU và I/O thấp
$ nice -n 19 ionice -c3 tar -czf /backup/full.tar.gz \
    /var/www/ /home/ /etc/ &

$ jobs
[1]+ Running nice -n 19 ionice -c3 tar ...`,
        },
        priority: {
            title: "Task quan trọng bị chậm",
            icon: Gauge,
            code: `$ pgrep -la python3
1236 python3 train_model.py
1500 python3 log_processor.py
1600 python3 report_generator.py

$ renice -n 15 -p 1500
$ renice -n 15 -p 1600
$ sudo renice -n -10 -p 1236

$ ps -p 1236,1500,1600 -o pid,ni,comm
  PID  NI COMM
 1236 -10 python3
 1500  15 python3
 1600  15 python3`,
        },
        parallel: {
            title: "Chạy nhiều task song song",
            icon: Rocket,
            code: `$ nice -n 5  python3 task1.py > /tmp/task1.log 2>&1 &
$ nice -n 10 python3 task2.py > /tmp/task2.log 2>&1 &
$ nice -n 15 python3 task3.py > /tmp/task3.log 2>&1 &

$ jobs -l
[1] 1234 Running nice -n 5 python3 task1.py
[2] 1235 Running nice -n 10 python3 task2.py
[3] 1236 Running nice -n 15 python3 task3.py

$ wait
echo "Tất cả task đã hoàn thành!"`,
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
                                className={`w-full text-left p-4 rounded-2xl border transition-all ${scenario === k ? "bg-green-500/10 border-green-500/40" : "bg-slate-900 border-slate-700 hover:border-slate-500"}`}
                            >
                                <div className="flex items-center gap-3">
                                    <ItemIcon className="text-green-400" />
                                    <span className="font-bold text-white">
                                        {s.title}
                                    </span>
                                </div>
                            </button>
                        );
                    })}
                </div>
                <div className="lg:col-span-3">
                    <div className="mb-4 flex items-center gap-2 text-green-300 font-bold">
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

function ProcessManagerPreview() {
    const [mode, setMode] = useState("kill");
    const content = {
        kill: `Tên process cần kill: firefox

Các process tìm thấy:
2345 firefox
2346 firefox --type=renderer
2347 firefox --type=gpu-process

Chọn signal:
1) SIGTERM (15) - Lịch sự
2) SIGKILL (9)  - Ngay lập tức
3) SIGHUP  (1)  - Reload config
4) SIGSTOP (19) - Tạm dừng
5) SIGCONT (18) - Tiếp tục

Xác nhận kill 'firefox' với signal -15? y
✅ Đã kill 'firefox' thành công`,
        renice: `PID cần thay đổi priority: 1236

Process: python3 (PID: 1236)
Nice hiện tại: 0

Chọn mức priority:
1) Rất cao  (NI = -20, cần root)
2) Cao      (NI = -10, cần root)
3) Mặc định (NI = 0)
4) Thấp     (NI = +10)
5) Rất thấp (NI = +19)

✅ Đã đổi NI: 0 → 19`,
        bg: `Lệnh cần chạy: python3 long_task.py
Nice value [19]: 19
File log output [/tmp/bg_task.log]: /tmp/task.log

Chạy: python3 long_task.py
Nice: 19
Log: /tmp/task.log

✅ Đang chạy với PID: 2400
Xem log: tail -f /tmp/task.log

PID   NI %CPU %MEM ELAPSED COMMAND
2400  19 95.0  2.1 00:00   python3`,
        jobs: `=== BACKGROUND JOBS CỦA SHELL HIỆN TẠI ===
[1]  1234 Running   sleep 500 &
[2]- 1235 Running   python3 task.py &
[3]+ 1236 Stopped   vim notes.txt

Running: 2  |  Stopped: 1`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-2">
                    {[
                        ["kill", "Kill theo tên"],
                        ["renice", "Đổi priority"],
                        ["bg", "Chạy nền với nice"],
                        ["jobs", "Xem jobs"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setMode(k)}
                            className={`w-full text-left rounded-xl border p-3 font-bold text-sm ${mode === k ? "bg-sky-500/10 border-sky-500/40 text-sky-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title="process_manager.sh preview"
                        code={content[mode]}
                    />
                </div>
            </div>
        </div>
    );
}

function PracticeChecklist() {
    const tasks = [
        ["Chạy 3 background jobs", "sleep 500 &; sleep 600 &; sleep 700 &"],
        ["Xem danh sách jobs kèm PID", "jobs -l"],
        ["Kéo job 2 về foreground", "fg %2  # rồi Ctrl+Z"],
        ["Đẩy job hiện tại xuống background", "bg"],
        ["Kill job số 1", "kill %1"],
        ["Kill tất cả jobs còn lại", "kill $(jobs -p)"],
        ["Tạo process để kill", "sleep 9999 &"],
        ["Kill lịch sự", "kill -15 PID"],
        ["Tạo CPU hog với nice thấp", "nice -n 19 yes > /dev/null &"],
        ["Xem nice value", "ps -p PID -o pid,ni,%cpu,comm"],
        ["Renice process", "renice -n 10 -p PID"],
        [
            "Chạy nohup và disown",
            "nohup sleep 300 > /tmp/nohup_test.log 2>&1 &; disown %1",
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
                        <BookOpen className="text-rose-400" /> Tóm tắt toàn bài
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <SummaryBox
                        title="signal"
                        items={[
                            "kill -15 PID",
                            "kill -9 PID",
                            "kill -1 PID",
                            "kill -19 PID",
                            "kill -18 PID",
                            "kill -0 PID",
                        ]}
                    />
                    <SummaryBox
                        title="killall/pkill"
                        items={[
                            "killall firefox",
                            "killall -9 firefox",
                            "killall -HUP nginx",
                            "pkill -u alice",
                            "pkill -t pts/1",
                            "pkill -f cmd",
                        ]}
                    />
                    <SummaryBox
                        title="nice/renice"
                        items={[
                            "nice -n 19 cmd",
                            "sudo nice -n -10 cmd",
                            "renice -n 19 -p PID",
                            "renice -n 10 -u bob",
                            "F7/F8 trong htop",
                            "r trong top",
                        ]}
                    />
                    <SummaryBox
                        title="jobs/nohup"
                        items={[
                            "command &",
                            "Ctrl+Z",
                            "jobs -l",
                            "fg %N",
                            "bg %N",
                            "nohup cmd &",
                            "disown %N",
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
            <h4 className="font-bold text-rose-300 uppercase text-xs tracking-widest mb-4">
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
        question: "Tại sao nên dùng kill -15 trước kill -9?",
        options: [
            "Vì SIGTERM cho process cơ hội cleanup, SIGKILL giết ngay không cleanup",
            "Vì -9 luôn reload config",
            "Vì -15 chỉ dùng cho Windows",
            "Vì -9 chậm hơn -15",
        ],
        correct: 0,
        explanation:
            "SIGTERM là yêu cầu dừng lịch sự. SIGKILL là biện pháp cuối khi process treo hoặc không phản hồi.",
    },
    {
        question: "kill -1 $(pgrep nginx) thường dùng để làm gì?",
        options: [
            "Reload cấu hình nginx bằng SIGHUP",
            "Xóa nginx khỏi hệ thống",
            "Đổi nice value",
            "Đưa nginx xuống background",
        ],
        correct: 0,
        explanation:
            "SIGHUP thường được nhiều daemon dùng để reload config mà không dừng hẳn service.",
    },
    {
        question: "kill -0 PID có tác dụng gì?",
        options: [
            "Kiểm tra process còn tồn tại/quyền signal, không gửi signal thật",
            "Kill process bằng SIGKILL",
            "Tạm dừng process",
            "Đổi priority về 0",
        ],
        correct: 0,
        explanation:
            "kill -0 là mẹo kiểm tra process còn sống không, thường dùng trong script.",
    },
    {
        question: "pkill -f khác pkill thường ở điểm gì?",
        options: [
            "pkill -f khớp full command line",
            "pkill -f chỉ kill foreground job",
            "pkill -f đổi priority",
            "Không khác nhau",
        ],
        correct: 0,
        explanation:
            "pkill python3 khớp tên process, còn pkill -f 'python3 app.py' khớp toàn bộ command line.",
    },
    {
        question: "Nice value nào được ưu tiên CPU cao hơn?",
        options: ["-20", "+19", "+10", "Tất cả như nhau"],
        correct: 0,
        explanation:
            "NI càng âm thì priority càng cao. User thường cần root để đặt nice âm.",
    },
    {
        question:
            "Đang chạy foreground command, muốn tạm dừng rồi đưa xuống background thì làm gì?",
        options: [
            "Ctrl+Z rồi bg",
            "Ctrl+C rồi fg",
            "kill -9 rồi jobs",
            "nohup rồi Ctrl+C",
        ],
        correct: 0,
        explanation:
            "Ctrl+Z gửi SIGTSTP để suspend job, bg tiếp tục job ở background.",
    },
    {
        question: "Trong jobs, dấu + ở [2]+ nghĩa là gì?",
        options: [
            "Đó là current job, fg/bg mặc định tác động vào job này",
            "Job đã lỗi",
            "Job có quyền root",
            "Job không thể kill",
        ],
        correct: 0,
        explanation:
            "Dấu + đánh dấu current job. fg hoặc bg không chỉ định số job sẽ dùng job này.",
    },
    {
        question:
            "Tại sao command & chưa đủ nếu muốn process chạy tiếp sau khi logout?",
        options: [
            "Vì shell có thể gửi SIGHUP khi logout; dùng nohup hoặc disown để tránh",
            "Vì & luôn làm process chạy chậm",
            "Vì & chỉ chạy trên GUI",
            "Vì & đổi process thành zombie",
        ],
        correct: 0,
        explanation:
            "& chỉ đưa process xuống background. nohup/disown mới giúp tránh bị shell xử lý khi logout.",
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
    if (currentQ === "finished") {
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
                    <strong className="text-rose-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu về quản lý tiến trình.
                </p>
                <button
                    onClick={resetQuiz}
                    className="px-6 py-2 bg-slate-900 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-600 font-medium flex items-center gap-2"
                >
                    <RefreshCcw size={16} /> Làm lại Quiz
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
