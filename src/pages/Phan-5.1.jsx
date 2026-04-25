import React, { useMemo, useState } from "react";
import {
    Activity,
    AlertTriangle,
    BookOpen,
    CheckCircle2,
    ChevronRight,
    ClipboardCheck,
    Cpu,
    Eye,
    Gauge,
    GitBranch,
    HardDrive,
    Info,
    Keyboard,
    Layers,
    ListTree,
    MemoryStick,
    Monitor,
    MousePointer2,
    Play,
    RefreshCcw,
    Search,
    Server,
    Settings,
    ShieldAlert,
    Skull,
    SlidersHorizontal,
    TerminalSquare,
    Timer,
    Zap,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-emerald-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 border-b border-slate-800 sticky top-0 z-50 backdrop-blur">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🐧</span>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Linux/Ubuntu
                            </h1>
                            <p className="text-xs text-slate-500 hidden md:block">
                                Tiến trình, CPU, RAM và công cụ quan sát hệ
                                thống
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400 hidden md:inline-block">
                            Bài trước: 4.5
                        </span>
                        <div className="text-sm font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                            Phần 5.1
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <Hero />

                <section className="space-y-6">
                    <SectionTitle
                        n="1"
                        color="emerald"
                        icon={<Cpu size={22} />}
                        title="Tiến trình là gì?"
                    />
                    <div className="grid lg:grid-cols-5 gap-6">
                        <div className="lg:col-span-3 bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                            <div className="flex items-start gap-5">
                                <div className="bg-emerald-500/15 text-emerald-400 p-4 rounded-2xl border border-emerald-500/20">
                                    <Activity size={42} />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-white">
                                        Process = chương trình đang chạy
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed">
                                        Khi bạn mở <code>firefox</code>, chạy{" "}
                                        <code>python3 app.py</code> hoặc đăng
                                        nhập SSH, Linux tạo ra một tiến trình
                                        mới, cấp cho nó một PID duy nhất, cấp
                                        tài nguyên CPU/RAM và theo dõi nó cho
                                        đến khi kết thúc.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <MiniPoint
                                            icon={<Info size={18} />}
                                            tone="emerald"
                                            title="Mỗi process có danh tính"
                                            text="PID, PPID, UID, terminal, lệnh chạy và trạng thái hiện tại."
                                        />
                                        <MiniPoint
                                            icon={<Gauge size={18} />}
                                            tone="amber"
                                            title="Mỗi process tiêu thụ tài nguyên"
                                            text="CPU%, MEM%, VSZ, RSS giúp bạn tìm thủ phạm làm server chậm."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ProcessIdentityCards />
                    </div>
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="2"
                        color="cyan"
                        icon={<ListTree size={22} />}
                        title="Cây tiến trình và trạng thái process"
                    />
                    <div className="grid lg:grid-cols-2 gap-6">
                        <ProcessTreeExplorer />
                        <StateExplorer />
                    </div>
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="3"
                        color="sky"
                        icon={<TerminalSquare size={22} />}
                        title="Lệnh ps — snapshot tiến trình"
                    />
                    <PsExplorer />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="4"
                        color="purple"
                        icon={<Monitor size={22} />}
                        title="Lệnh top — giám sát realtime"
                    />
                    <TopAnalyzer />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="5"
                        color="pink"
                        icon={<MousePointer2 size={22} />}
                        title="Lệnh htop — top đẹp và dễ dùng hơn"
                    />
                    <HtopGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="6"
                        color="amber"
                        icon={<Search size={22} />}
                        title="Công cụ bổ sung — pgrep và pstree"
                    />
                    <UtilityTabs />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="7"
                        color="red"
                        icon={<ShieldAlert size={22} />}
                        title="Kịch bản thực tế khi server chậm"
                    />
                    <TroubleshootingScenarios />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="8"
                        color="teal"
                        icon={<TerminalSquare size={22} />}
                        title="Script giám sát tiến trình"
                    />
                    <ProcessMonitorPreview />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="9"
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
                                <span className="bg-emerald-500/20 text-emerald-400 p-2 rounded-lg">
                                    <ClipboardCheck size={20} />
                                </span>
                                Kiểm tra nhanh: ps, top, htop
                            </h3>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                <div className="text-center pt-8 border-t border-slate-800">
                    <p className="text-slate-400 mb-4">
                        Bạn đã hoàn thành Phần 5.1 — Xem tiến trình đang chạy.
                    </p>
                    <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-emerald-500/20">
                        Bài tiếp theo: 5.2 — kill, killall, nice, jobs{" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

function Hero() {
    const cards = [
        [TerminalSquare, "ps", "Snapshot tĩnh"],
        [Monitor, "top", "Realtime có sẵn"],
        [MousePointer2, "htop", "Tương tác dễ dùng"],
        [Search, "pgrep/pstree", "Tìm PID & xem cây"],
    ];
    return (
        <section className="text-center space-y-5 py-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium">
                <Cpu size={16} /> ps · top · htop · pgrep · pstree
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Xem{" "}
                <span className="text-emerald-400 font-mono">Tiến Trình</span>{" "}
                Đang Chạy
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Bài này giúp bạn hiểu process là gì, đọc được CPU/RAM trong{" "}
                <code>top</code>, tìm process bằng <code>ps</code>, dùng{" "}
                <code>htop</code> để quan sát trực quan và xử lý nhanh khi
                server bị chậm.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4">
                {cards.map(([Icon, title, desc]) => (
                    <div
                        key={title}
                        className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 text-left"
                    >
                        <Icon className="text-emerald-400 mb-3" size={24} />
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
        emerald: "bg-emerald-500/20 text-emerald-400",
        cyan: "bg-cyan-500/20 text-cyan-400",
        sky: "bg-sky-500/20 text-sky-400",
        purple: "bg-purple-500/20 text-purple-400",
        pink: "bg-pink-500/20 text-pink-400",
        amber: "bg-amber-500/20 text-amber-400",
        red: "bg-red-500/20 text-red-400",
        teal: "bg-teal-500/20 text-teal-400",
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
        emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
        amber: "bg-amber-500/10 border-amber-500/20 text-amber-300",
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

function ProcessIdentityCards() {
    const items = [
        ["PID", "ID duy nhất của process", "text-emerald-400"],
        ["PPID", "PID của process cha", "text-cyan-400"],
        ["UID", "User đang chạy process", "text-sky-400"],
        ["STATE", "R, S, D, T, Z, I", "text-amber-400"],
        ["CPU%", "Mức dùng CPU", "text-red-400"],
        ["MEM%", "Mức dùng RAM", "text-purple-400"],
    ];
    return (
        <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {items.map(([title, desc, color]) => (
                <div
                    key={title}
                    className="bg-slate-800/50 border border-slate-700 rounded-3xl p-5"
                >
                    <div className={`font-mono text-2xl font-black ${color}`}>
                        {title}
                    </div>
                    <p className="text-xs text-slate-500 mt-2">{desc}</p>
                </div>
            ))}
        </div>
    );
}

function ProcessTreeExplorer() {
    const [mode, setMode] = useState("basic");
    const code = {
        basic: `PID 1: systemd  ← Cha của mọi process
├── sshd (PID 100)
│   ├── sshd (PID 1234)     ← Session của alice
│   │   └── bash (PID 1235)
│   │       └── vim (PID 1236)
│   └── sshd (PID 2000)     ← Session của bob
│       └── bash (PID 2001)
│           └── python3 (PID 2002)
├── nginx (PID 200)
│   ├── nginx worker (201)
│   └── nginx worker (202)
└── cron (PID 400)`,
        pstree: `$ pstree -p
systemd(1)─┬─sshd(100)─┬─sshd(1234)───bash(1235)───vim(1236)
           │           └─sshd(2000)───bash(2001)───python3(2002)
           ├─nginx(200)─┬─nginx(201)
           │            └─nginx(202)
           └─cron(400)`,
        path: `$ pstree -s 2002
systemd───sshd───sshd───bash───python3

# Path này cho biết python3 sinh ra từ SSH session của bob`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6">
            <div className="flex items-center justify-between gap-4 mb-5">
                <h4 className="font-bold text-white flex items-center gap-2">
                    <GitBranch className="text-cyan-400" /> Quan hệ cha-con
                </h4>
                <div className="flex gap-2 flex-wrap">
                    {[
                        ["basic", "Sơ đồ"],
                        ["pstree", "pstree -p"],
                        ["path", "pstree -s"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setMode(k)}
                            className={`px-3 py-2 rounded-xl border text-xs font-bold ${mode === k ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-300" : "bg-slate-900 border-slate-700 text-slate-400"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>
            <TerminalBlock title="process tree" code={code[mode]} />
            <div className="mt-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 text-sm text-cyan-100">
                Quan hệ cha-con rất quan trọng: kill process cha có thể làm các
                process con bị ngắt theo.
            </div>
        </div>
    );
}

function StateExplorer() {
    const states = [
        [
            "R",
            "Running / Runnable",
            "Đang chạy hoặc sẵn sàng chạy",
            "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
        ],
        [
            "S",
            "Sleeping",
            "Đang ngủ, chờ sự kiện",
            "bg-sky-500/10 border-sky-500/30 text-sky-300",
        ],
        [
            "D",
            "Uninterruptible sleep",
            "Chờ I/O, thường khó kill",
            "bg-amber-500/10 border-amber-500/30 text-amber-300",
        ],
        [
            "T",
            "Stopped",
            "Bị dừng bằng Ctrl+Z hoặc signal",
            "bg-purple-500/10 border-purple-500/30 text-purple-300",
        ],
        [
            "Z",
            "Zombie",
            "Đã chết nhưng chưa được cha dọn",
            "bg-red-500/10 border-red-500/30 text-red-300",
        ],
        [
            "I",
            "Idle",
            "Kernel thread nhàn rỗi",
            "bg-slate-500/10 border-slate-500/30 text-slate-300",
        ],
    ];
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6">
            <h4 className="font-bold text-white flex items-center gap-2 mb-5">
                <Layers className="text-cyan-400" /> Trạng thái process
            </h4>
            <div className="grid gap-3">
                {states.map(([code, name, desc, cls]) => (
                    <div
                        key={code}
                        className={`${cls} border rounded-2xl p-4 flex items-start gap-4`}
                    >
                        <div className="font-mono text-2xl font-black w-8 shrink-0">
                            {code}
                        </div>
                        <div>
                            <div className="font-bold text-white">{name}</div>
                            <p className="text-sm text-slate-300">{desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function PsExplorer() {
    const [tab, setTab] = useState("daily");
    const data = {
        daily: `$ ps
  PID TTY          TIME CMD
 1235 pts/0    00:00:00 bash
 1580 pts/0    00:00:00 ps

$ ps aux
USER       PID %CPU %MEM    VSZ   RSS TTY    STAT START   TIME COMMAND
root         1  0.0  0.1 168952 11000 ?      Ss   07:45   0:03 /sbin/init
root       200  0.0  0.1  55000  5000 ?      Ss   07:46   0:01 /usr/sbin/sshd
alice     1235  0.0  0.1  10000  3000 pts/0  Ss   09:30   0:00 -bash
alice     1236  2.5  5.0 200000 80000 pts/0  Sl   09:31   5:23 python3 app.py
www-data   201  0.1  0.5  80000 20000 ?      S    07:46   0:10 nginx: worker`,
        full: `$ ps -ef
UID   PID  PPID  C STIME TTY      TIME     CMD
root    1     0  0 07:45 ?        00:00:03 /sbin/init
root  200     1  0 07:46 ?        00:00:01 /usr/sbin/sshd -D
alice 1234  200  0 09:30 ?        00:00:00 sshd: alice@pts/0
alice 1235 1234  0 09:30 pts/0    00:00:00 -bash
alice 1236 1235  2 09:31 pts/0    00:05:23 python3 app.py

# PPID cho biết ai sinh ra process hiện tại`,
        search: `$ ps aux | grep nginx
www-data  200  0.0  0.1  nginx: master
www-data  201  0.1  0.5  nginx: worker
alice    1580  0.0  0.0  grep --color nginx   ← grep cũng xuất hiện

$ ps aux | grep [n]ginx
www-data  200  0.0  0.1  nginx: master
www-data  201  0.1  0.5  nginx: worker

$ ps -u alice
$ ps -p 1234,1235,1236`,
        sort: `$ ps aux --sort=-%cpu | head -10
USER     PID  %CPU %MEM COMMAND
alice   1236  85.5  5.0 python3 heavy_task.py
bob     2002  25.3  2.0 java -jar myapp.jar
root     300  10.1  1.0 mysqld

$ ps aux --sort=-%mem | head -10
USER     PID  %CPU %MEM  VSZ    RSS  COMMAND
alice   1236   2.5 15.0 500000 240000 java -Xmx4g app.jar`,
        custom: `$ ps -eo pid,ppid,user,%cpu,%mem,stat,comm
  PID  PPID USER     %CPU %MEM STAT COMMAND
    1     0 root      0.0  0.0 Ss   systemd
  200     1 root      0.0  0.1 Ss   sshd
 1235  1234 alice     0.0  0.1 Ss   bash
 1236  1235 alice    85.5  5.0 Rl   python3

$ watch -n 1 'ps -p 1236 -o pid,%cpu,%mem,stat,time,args'`,
    };
    const notes = {
        daily: "ps aux là lệnh dùng hàng ngày để xem toàn bộ process trên hệ thống.",
        full: "ps -ef mạnh khi cần PPID để lần theo quan hệ cha-con.",
        search: "grep [n]ginx là mẹo tránh việc dòng grep tự xuất hiện trong kết quả.",
        sort: "Sort theo CPU/RAM là bước đầu tiên khi server chậm hoặc hết bộ nhớ.",
        custom: "Custom output giúp viết script sạch hơn, chỉ lấy đúng cột cần dùng.",
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-5 border-b border-slate-700">
                {[
                    ["daily", "Cơ bản"],
                    ["full", "ps -ef"],
                    ["search", "Tìm kiếm"],
                    ["sort", "Sort"],
                    ["custom", "Custom"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setTab(k)}
                        className={`p-4 font-bold border-b md:border-b-0 md:border-r last:border-r-0 border-slate-700 ${tab === k ? "bg-sky-500/10 text-sky-300" : "text-slate-400 hover:bg-slate-900"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="p-6 grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <TerminalBlock title={`ps — ${tab}`} code={data[tab]} />
                </div>
                <div className="lg:col-span-2 bg-slate-950 border border-slate-700 rounded-2xl p-5">
                    <h4 className="text-white font-bold flex items-center gap-2 mb-4">
                        <Info className="text-sky-400" /> Đọc nhanh các cột
                    </h4>
                    <div className="space-y-3 text-sm">
                        <ExplainRow label="USER" text="Ai đang chạy process." />
                        <ExplainRow label="PID" text="Mã định danh process." />
                        <ExplainRow
                            label="PPID"
                            text="PID của process cha, thường có trong ps -ef."
                        />
                        <ExplainRow
                            label="RSS"
                            text="RAM thật đang dùng, quan trọng hơn VSZ."
                        />
                        <ExplainRow
                            label="STAT"
                            text="R, S, D, T, Z và ký tự bổ sung như s, l, +."
                        />
                    </div>
                    <div className="mt-5 bg-sky-500/10 border border-sky-500/30 rounded-xl p-4 text-sm text-sky-100">
                        {notes[tab]}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ExplainRow({ label, text }) {
    return (
        <div className="flex gap-3">
            <code className="text-emerald-300 w-14 shrink-0">{label}</code>
            <span className="text-slate-400">{text}</span>
        </div>
    );
}

function TopAnalyzer() {
    const [focus, setFocus] = useState("load");
    const detail = {
        load: [
            "Load Average",
            "Số process trung bình đang chờ CPU. So sánh với số CPU core: load 4.0 trên máy 4 core là tải đầy; load 8.0 là quá tải.",
        ],
        cpu: [
            "CPU line",
            "id cao nghĩa là CPU còn rảnh. wa cao nghĩa là CPU đang chờ I/O, thường do disk hoặc network chậm.",
        ],
        mem: [
            "Memory line",
            "Linux dùng RAM trống làm cache, nên free thấp chưa chắc xấu. Hãy nhìn avail Mem và Swap used.",
        ],
        tasks: [
            "Tasks line",
            "Zombie > 0 là dấu hiệu process con đã chết nhưng process cha chưa dọn dẹp.",
        ],
    };
    return (
        <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title="top screen anatomy"
                        code={`top - 14:30:00 up 6:45,  3 users,  load average: 1.25, 0.98, 0.75
Tasks: 187 total,   2 running, 185 sleeping,   0 stopped,   0 zombie
%Cpu(s): 15.5 us,  2.3 sy,  0.0 ni, 80.2 id,  1.5 wa,  0.5 si
MiB Mem :   7850.5 total,   1200.3 free,   4500.1 used,   2150.1 buff/cache
MiB Swap:   2048.0 total,   1900.0 free,    148.0 used.   2800.4 avail Mem

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
 1236 alice     20   0  200000  80000  10000 R  85.5   5.0   5:23.45 python3
  300 mysql     20   0  800000 200000  20000 S  10.2  12.8  10:00.00 mysqld
  200 www-data  20   0   80000  20000   5000 S   2.1   1.3   0:10.20 nginx`}
                    />
                </div>
                <div className="lg:col-span-2 space-y-4">
                    <h4 className="text-xl font-bold text-white flex items-center gap-2">
                        <Gauge className="text-purple-400" /> Đọc top trong 30
                        giây
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                        {[
                            ["load", "Load"],
                            ["cpu", "CPU"],
                            ["mem", "RAM"],
                            ["tasks", "Tasks"],
                        ].map(([k, label]) => (
                            <button
                                key={k}
                                onClick={() => setFocus(k)}
                                className={`p-3 rounded-xl border font-bold text-sm ${focus === k ? "bg-purple-500/10 border-purple-500/40 text-purple-300" : "bg-slate-950 border-slate-700 text-slate-400"}`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                    <div className="bg-slate-950 border border-slate-700 rounded-2xl p-5">
                        <h5 className="text-white font-bold mb-2">
                            {detail[focus][0]}
                        </h5>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            {detail[focus][1]}
                        </p>
                    </div>
                    <QuickHealthRules />
                </div>
            </div>
            <TopHotkeys />
        </div>
    );
}

function QuickHealthRules() {
    const rules = [
        ["Load", "load / cores < 70% là ổn"],
        ["CPU id", "> 20% thường là còn khỏe"],
        ["CPU wa", "> 20% có thể nghẽn I/O"],
        ["Swap", "dùng nhiều = thiếu RAM"],
    ];
    return (
        <div className="grid grid-cols-2 gap-2">
            {rules.map(([a, b]) => (
                <div
                    key={a}
                    className="bg-slate-950 border border-slate-700 rounded-xl p-3"
                >
                    <div className="text-purple-300 font-bold text-sm">{a}</div>
                    <div className="text-xs text-slate-500">{b}</div>
                </div>
            ))}
        </div>
    );
}

function TopHotkeys() {
    const keys = [
        ["P", "Sort CPU"],
        ["M", "Sort RAM"],
        ["T", "Sort TIME"],
        ["u", "Lọc user"],
        ["1", "Từng CPU core"],
        ["c", "Full command"],
        ["k", "Kill process"],
        ["q", "Thoát"],
    ];
    return (
        <div className="mt-6 bg-slate-950 border border-slate-700 rounded-2xl p-5">
            <h4 className="font-bold text-white flex items-center gap-2 mb-4">
                <Keyboard className="text-purple-400" /> Phím tắt quan trọng
                trong top
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {keys.map(([key, desc]) => (
                    <div
                        key={key}
                        className="bg-slate-900 border border-slate-700 rounded-xl p-3"
                    >
                        <kbd className="font-mono text-purple-300 font-black text-lg">
                            {key}
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

function HtopGuide() {
    const [view, setView] = useState("screen");
    const code = {
        screen: `CPU[||||||||||||||||          33.3%]   Tasks: 52, 187 thr; 2 running
CPU[||||                      10.5%]   Load average: 1.25 0.98 0.75
CPU[||||||||||||||||||||||    55.2%]   Uptime: 06:45:00
Mem[||||||||||||||||||||  4.50G/7.85G]
Swp[||                  148.0M/2.00G]

PID  USER      PRI NI  VIRT   RES   SHR S CPU% MEM% TIME+   Command
1236 alice      20  0  200M  78.1M 9.7M R 85.5  5.0 5:23.45 python3 app.py
300  mysql      20  0  781M  195M 19.5 S 10.2 12.8 10:00.0 mysqld`,
        install: `$ sudo apt install htop -y
$ htop
$ sudo htop

$ htop -u alice
$ htop -p 1236,2001
$ htop --sort-key=PERCENT_CPU`,
        hotkeys: `F3 hoặc /    Tìm kiếm process
F4          Lọc process
F5 hoặc t   Tree view
F6          Chọn cột sort
F9 hoặc k   Kill process
F7/F8       Tăng/giảm priority
H           Ẩn/hiện user threads
K           Ẩn/hiện kernel threads
q hoặc F10  Thoát`,
        setup: `F2 Setup
├─ Meters: CPU, Memory, Swap, Load, Uptime
├─ Columns: PID, USER, CPU%, MEM%, TIME, COMMAND
├─ Display Options: highlight, shadow users, show threads
└─ Colors: Default, Monochrome, Black Night...

# Cấu hình lưu ở:
~/.config/htop/htoprc`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["screen", "Giao diện"],
                        ["install", "Cài & chạy"],
                        ["hotkeys", "Phím tắt"],
                        ["setup", "Tùy chỉnh"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setView(k)}
                            className={`w-full text-left rounded-xl border p-4 font-bold ${view === k ? "bg-pink-500/10 border-pink-500/40 text-pink-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                    <div className="bg-pink-500/10 border border-pink-500/30 rounded-2xl p-4 text-sm text-pink-100">
                        htop dùng chuột được, scroll ngang/dọc dễ hơn, kill
                        process bằng F9 không cần nhớ PID.
                    </div>
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock title={`htop — ${view}`} code={code[view]} />
                </div>
            </div>
        </div>
    );
}

function UtilityTabs() {
    const [tab, setTab] = useState("pgrep");
    const code = {
        pgrep: `$ pgrep nginx
200
201
202

$ pgrep -l nginx
200 nginx
201 nginx
202 nginx

$ pgrep -la nginx
200 nginx: master process /usr/sbin/nginx
201 nginx: worker process
202 nginx: worker process

$ pgrep -u alice python3
1236

$ pgrep -x bash
# exact match: chỉ khớp đúng tên bash`,
        pstree: `$ pstree
systemd─┬─cron
        ├─mysqld───27*[{mysqld}]
        ├─nginx─┬─nginx
        │       └─nginx
        └─sshd─┬─sshd───bash───python3
                └─sshd───bash

$ pstree -p
$ pstree -u
$ pstree -a
$ pstree -s 1236`,
        script: `if pgrep -x "mysqld" > /dev/null; then
    echo "MySQL đang chạy ✅"
else
    echo "MySQL đã tắt ❌ → Khởi động lại..."
    sudo systemctl start mysql
fi`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["pgrep", "pgrep"],
                    ["pstree", "pstree"],
                    ["script", "Dùng trong script"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setTab(k)}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${tab === k ? "bg-amber-500/10 border-amber-500/40 text-amber-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
                <TerminalBlock title={tab} code={code[tab]} />
                <div className="bg-slate-950 border border-slate-700 rounded-2xl p-5">
                    <h4 className="text-white font-bold flex items-center gap-2 mb-4">
                        <Zap className="text-amber-400" /> Dùng khi nào?
                    </h4>
                    <div className="space-y-4 text-sm text-slate-300">
                        <MiniPoint
                            icon={<Search size={18} />}
                            tone="amber"
                            title="pgrep"
                            text="Tìm PID theo tên nhanh hơn ps aux | grep, đặc biệt hữu ích trong script."
                        />
                        <MiniPoint
                            icon={<ListTree size={18} />}
                            tone="emerald"
                            title="pstree"
                            text="Hiểu quan hệ cha-con, biết process nào sinh ra process nào."
                        />
                        <MiniPoint
                            icon={<AlertTriangle size={18} />}
                            tone="rose"
                            title="Lưu ý"
                            text="Khi kill, đừng chỉ nhìn tên process. Hãy kiểm tra user, command đầy đủ và quan hệ cha-con."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function TroubleshootingScenarios() {
    const [scenario, setScenario] = useState("cpu");
    const scenarios = {
        cpu: {
            title: "Server chậm bất thường",
            icon: Cpu,
            code: `$ uptime
14:30:00 up 6:45, load average: 7.5, 6.8, 5.2
# Máy 4 core mà load 7.5 → QUÁ TẢI

$ ps aux --sort=-%cpu | head -5
USER     PID  %CPU %MEM COMMAND
alice   1236  350.0  5.0 python3 mining.py

$ ps -p 1236 -o pid,user,%cpu,%mem,etime,args
1236 alice 350.0 5.0 01:30:00 python3 /tmp/.hidden/mining.py

$ sudo kill -9 1236`,
        },
        ram: {
            title: "Server hết RAM",
            icon: MemoryStick,
            code: `$ free -h
Mem:   7.8G  7.5G  50M  200M  250M  100M
Swap:  2.0G  1.8G  200M

$ ps aux --sort=-%mem | head -5
USER  PID  %CPU %MEM    VSZ     RSS COMMAND
bob  2002   2.0 45.0 3500000 3500000 java -Xmx4g leaky_app.jar

$ cat /proc/2002/status | grep -E "VmRSS|VmSize|VmSwap"
VmSize: 3500000 kB
VmRSS:  3500000 kB
VmSwap:  500000 kB`,
        },
        file: {
            title: "Ai đang dùng file hoặc port?",
            icon: HardDrive,
            code: `$ fuser /var/log/app.log
/var/log/app.log: 1236 1500

$ ps -p 1236,1500 -o pid,user,command
PID  USER  COMMAND
1236 alice python3 app.py
1500 root  tail -f /var/log/app.log

$ fuser 8080/tcp
8080/tcp: 1236

$ ps -p 1236 -o pid,user,command
1236 alice python3 app.py --port 8080`,
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
                        title="incident workflow"
                        code={current.code}
                    />
                </div>
            </div>
        </div>
    );
}

function ProcessMonitorPreview() {
    const [mode, setMode] = useState("overview");
    const content = {
        overview: `╔══════════════════════════════════════════╗
║         TỔNG QUAN HỆ THỐNG              ║
╚══════════════════════════════════════════╝

⏱️  Uptime:   up 6 hours, 45 minutes
📊 Load:     1.25 (31% / 4 cores)
⚙️  Processes: 187 total, 2 running
💾 RAM:      4.5G used / 7.8G total (avail: 2.8G)
💿 Swap:     148M used / 2.0G total`,
        cpu: `=== TOP 10 PROCESS NGỐN CPU NHẤT ===

PID      USER         %CPU   %MEM   COMMAND
──────────────────────────────────────────────
1236     alice        85.5   5.0    python3
2002     bob          25.3   2.0    java
300      mysql        10.1   1.0    mysqld`,
        mem: `=== TOP 10 PROCESS NGỐN RAM NHẤT ===

PID      USER         %MEM   RSS(MB)  VSZ(MB)  COMMAND
──────────────────────────────────────────────────
2002     bob          45.0   3418.0   3418.0   java
1236     alice        15.0   234.4    488.2    python3`,
        zombie: `✅ Không có zombie process!

# Nếu có zombie:
PID      USER         PPID     COMMAND
──────────────────────────────────────
4321     www-data     3000     php-fpm
   → Kill process cha PID 3000 để dọn zombie`,
        watch: `=== THEO DÕI PID 1236 ===
2026-02-18 14:30:00

PID:     1236
User:    alice
CPU%:    85.5%
MEM%:    5.0%
VSZ:     195.3 MB
RSS:     78.1 MB
State:   R
Elapsed: 01:30:00
Command: python3 app.py`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-2">
                    {[
                        ["overview", "Tổng quan"],
                        ["cpu", "Top CPU"],
                        ["mem", "Top RAM"],
                        ["zombie", "Zombie"],
                        ["watch", "Theo dõi PID"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setMode(k)}
                            className={`w-full text-left rounded-xl border p-3 font-bold text-sm ${mode === k ? "bg-teal-500/10 border-teal-500/40 text-teal-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title="process_monitor.sh preview"
                        code={content[mode]}
                    />
                </div>
            </div>
        </div>
    );
}

function PracticeChecklist() {
    const tasks = [
        ["Xem process của chính mình", "ps && ps -f"],
        ["Xem tất cả process", "ps aux | head -20"],
        ["Tìm process bash", "ps aux | grep [b]ash && pgrep -la bash"],
        ["Xem cây tiến trình", "pstree -p $$"],
        ["Top CPU", "ps aux --sort=-%cpu | head -5"],
        ["Top RAM", "ps aux --sort=-%mem | head -5"],
        ["Thực hành top", "top  # thử P, M, u, 1, c, q"],
        ["Cài và dùng htop", "sudo apt install htop -y && htop"],
        ["Xem load và số core", "uptime && nproc && cat /proc/loadavg"],
        [
            "Tạo process ngốn CPU để quan sát",
            "yes > /dev/null & ; top ; kill %1",
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
                        <BookOpen className="text-emerald-400" /> Tóm tắt toàn
                        bài
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <SummaryBox
                        title="ps"
                        items={[
                            "ps",
                            "ps aux",
                            "ps -ef",
                            "ps -u alice",
                            "ps -p 1234",
                            "ps -eo pid,args",
                        ]}
                    />
                    <SummaryBox
                        title="sort & filter"
                        items={[
                            "grep [n]ginx",
                            "--sort=-%cpu",
                            "--sort=-%mem",
                            "watch -n 1",
                            "pgrep -la",
                            "pgrep -x",
                        ]}
                    />
                    <SummaryBox
                        title="top"
                        items={[
                            "P sort CPU",
                            "M sort RAM",
                            "u filter user",
                            "1 CPU cores",
                            "c full command",
                            "k kill",
                        ]}
                    />
                    <SummaryBox
                        title="htop/pstree"
                        items={[
                            "F3 search",
                            "F4 filter",
                            "F5 tree",
                            "F6 sort column",
                            "F9 kill",
                            "pstree -p",
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
            <h4 className="font-bold text-emerald-300 uppercase text-xs tracking-widest mb-4">
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
        question: "ps và top khác nhau ở điểm gì?",
        options: [
            "ps là snapshot tĩnh; top là realtime tự cập nhật",
            "top chỉ xem file",
            "ps chỉ dùng trên Windows",
            "Không khác nhau",
        ],
        correct: 0,
        explanation:
            "ps chụp trạng thái tại một thời điểm. top cập nhật liên tục và có thể thao tác bằng phím tắt.",
    },
    {
        question: "ps -ef có cột nào rất quan trọng để xem quan hệ cha-con?",
        options: ["PPID", "SHR", "VSZ", "TTY"],
        correct: 0,
        explanation:
            "PPID là Parent PID, cho biết process hiện tại được sinh ra bởi process nào.",
    },
    {
        question: "Load average 6.5 trên máy 4 core nghĩa là gì?",
        options: [
            "Máy đang quá tải so với số core",
            "Máy đang tắt",
            "RAM còn rất nhiều",
            "Không thể kết luận gì về CPU",
        ],
        correct: 0,
        explanation:
            "Load 4.0 trên 4 core là tải đầy. 6.5 cao hơn số core nên có hàng đợi CPU.",
    },
    {
        question: "Trong top, cột wa cao thường chỉ điều gì?",
        options: [
            "CPU đang chờ I/O, có thể disk/network chậm",
            "CPU đang rảnh hoàn toàn",
            "RAM cache quá nhiều",
            "Process đang ở foreground",
        ],
        correct: 0,
        explanation:
            "wa là iowait. Nếu wa cao, bottleneck thường không nằm ở CPU thuần mà ở I/O.",
    },
    {
        question: "RES và VSZ khác nhau thế nào?",
        options: [
            "RES là RAM thực đang dùng; VSZ là bộ nhớ ảo",
            "VSZ là user name",
            "RES là PID cha",
            "Hai cột luôn bằng nhau",
        ],
        correct: 0,
        explanation:
            "Khi xem process ngốn RAM, RES/RSS thường quan trọng hơn VSZ.",
    },
    {
        question: "Trong top, nhấn phím nào để lọc theo user?",
        options: ["u", "P", "M", "q"],
        correct: 0,
        explanation: "Nhấn u rồi nhập username để chỉ xem process của user đó.",
    },
    {
        question: "pgrep -la nginx có lợi thế gì so với ps aux | grep nginx?",
        options: [
            "Hiện PID và full command gọn hơn, không bị dòng grep chen vào",
            "Tự động xóa nginx",
            "Chỉ hoạt động trong htop",
            "Không cần process đang chạy",
        ],
        correct: 0,
        explanation:
            "pgrep được thiết kế để tìm PID theo tên process, rất tiện trong script.",
    },
    {
        question: "Zombie process là gì?",
        options: [
            "Process đã chết nhưng entry chưa được process cha dọn",
            "Process dùng nhiều RAM",
            "Process ưu tiên cao",
            "Process đang chạy GUI",
        ],
        correct: 0,
        explanation:
            "Zombie thường cần xử lý process cha, vì process con đã kết thúc nhưng cha chưa reap.",
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
                    <strong className="text-emerald-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu về tiến trình Linux.
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
                <span className="text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
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
