import React, { useState } from "react";
import {
    AlertTriangle,
    Archive,
    BarChart3,
    BookOpen,
    Bug,
    CheckCircle2,
    ChevronRight,
    ClipboardCheck,
    Eye,
    FileArchive,
    FileSearch,
    Filter,
    History,
    Info,
    KeyRound,
    Layers,
    ListChecks,
    Lock,
    Network,
    RefreshCcw,
    RotateCcw,
    ScrollText,
    Search,
    Server,
    ShieldAlert,
    TerminalSquare,
    Timer,
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
                                journalctl, /var/log, dmesg, logrotate và phân
                                tích sự cố
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400 hidden md:inline-block">
                            Bài trước: 5.5
                        </span>
                        <div className="text-sm font-medium text-rose-400 bg-rose-400/10 px-3 py-1 rounded-full border border-rose-400/20">
                            Phần 5.6
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
                        icon={<ScrollText size={22} />}
                        title="Tại sao log quan trọng?"
                    />
                    <WhyLogsMatter />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="2"
                        color="cyan"
                        icon={<Layers size={22} />}
                        title="Sơ đồ luồng log trong Ubuntu"
                    />
                    <LogFlow />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="3"
                        color="amber"
                        icon={<FileSearch size={22} />}
                        title="/var/log — hệ thống log truyền thống"
                    />
                    <VarLogExplorer />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="4"
                        color="green"
                        icon={<TerminalSquare size={22} />}
                        title="Đọc log text: tail, grep, zgrep"
                    />
                    <TextLogTools />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="5"
                        color="red"
                        icon={<KeyRound size={22} />}
                        title="auth.log — phát hiện brute force và audit sudo"
                    />
                    <AuthLogAnalyzer />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="6"
                        color="sky"
                        icon={<Network size={22} />}
                        title="Nginx log — access, error và phân tích request"
                    />
                    <NginxLogAnalyzer />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="7"
                        color="purple"
                        icon={<ScrollText size={22} />}
                        title="journalctl — journal của systemd"
                    />
                    <JournalctlExplorer />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="8"
                        color="pink"
                        icon={<Bug size={22} />}
                        title="dmesg — kernel log, hardware và OOM"
                    />
                    <DmesgGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="9"
                        color="orange"
                        icon={<RotateCcw size={22} />}
                        title="logrotate — xoay vòng log, tránh đầy disk"
                    />
                    <LogrotateGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="10"
                        color="teal"
                        icon={<BarChart3 size={22} />}
                        title="Phân tích log nâng cao"
                    />
                    <AdvancedLogAnalysis />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="11"
                        color="blue"
                        icon={<TerminalSquare size={22} />}
                        title="Script phân tích log tổng hợp"
                    />
                    <LogAnalyzerPreview />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="12"
                        color="lime"
                        icon={<ClipboardCheck size={22} />}
                        title="Thực hành tổng hợp"
                    />
                    <PracticeChecklist />
                </section>

                <SummarySection />
                <PartFiveCompletion />

                <section className="space-y-6 pt-4">
                    <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-xl">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-rose-500/20 text-rose-400 p-2 rounded-lg">
                                    <ClipboardCheck size={20} />
                                </span>
                                Kiểm tra nhanh: journalctl, /var/log, dmesg,
                                logrotate
                            </h3>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                <div className="text-center pt-8 border-t border-slate-800">
                    <p className="text-slate-400 mb-4">
                        Bạn đã hoàn thành Phần 5.6 — Xem log hệ thống.
                    </p>
                    <button className="bg-rose-600 hover:bg-rose-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-rose-500/20">
                        Phần tiếp theo: 6 — Mạng & Kết nối{" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

function Hero() {
    const cards = [
        [FileSearch, "/var/log", "Log text truyền thống"],
        [ScrollText, "journalctl", "Systemd journal"],
        [Bug, "dmesg", "Kernel/hardware log"],
        [RotateCcw, "logrotate", "Xoay vòng log"],
    ];
    return (
        <section className="text-center space-y-5 py-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm font-medium">
                <Zap size={16} /> journalctl · tail · grep · dmesg · logrotate ·
                goaccess
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Xem Log{" "}
                <span className="text-rose-400 font-mono">Hệ Thống</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Bài này giúp bạn đọc log như một sysadmin: debug service fail,
                phát hiện brute force SSH, phân tích Nginx request, xem kernel
                log, quản lý dung lượng journal và rotate log an toàn.
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
        cyan: "bg-cyan-500/20 text-cyan-400",
        amber: "bg-amber-500/20 text-amber-400",
        green: "bg-green-500/20 text-green-400",
        red: "bg-red-500/20 text-red-400",
        sky: "bg-sky-500/20 text-sky-400",
        purple: "bg-purple-500/20 text-purple-400",
        pink: "bg-pink-500/20 text-pink-400",
        orange: "bg-orange-500/20 text-orange-400",
        teal: "bg-teal-500/20 text-teal-400",
        blue: "bg-blue-500/20 text-blue-400",
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
        cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
        amber: "bg-amber-500/10 border-amber-500/20 text-amber-300",
        green: "bg-green-500/10 border-green-500/20 text-green-300",
        red: "bg-red-500/10 border-red-500/20 text-red-300",
        sky: "bg-sky-500/10 border-sky-500/20 text-sky-300",
        purple: "bg-purple-500/10 border-purple-500/20 text-purple-300",
        pink: "bg-pink-500/10 border-pink-500/20 text-pink-300",
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

function WhyLogsMatter() {
    const items = [
        [
            Bug,
            "Debug lỗi ứng dụng",
            "Traceback, exception, upstream failed, crash reason.",
        ],
        [
            ShieldAlert,
            "Phát hiện xâm nhập",
            "Failed SSH, sudo lạ, scan URL, SQL injection attempts.",
        ],
        [
            BarChart3,
            "Phân tích hiệu suất",
            "Spike request, 5xx, latency, bandwidth, bottleneck.",
        ],
        [History, "Audit trail", "Ai làm gì, khi nào, từ đâu, bằng lệnh nào."],
    ];
    return (
        <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                <div className="flex items-start gap-5">
                    <div className="bg-rose-500/15 text-rose-400 p-4 rounded-2xl border border-rose-500/20">
                        <ScrollText size={42} />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">
                            Log là nhật ký điều tra của hệ thống
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            Khi server crash, service không start, ổ cứng lỗi,
                            SSH bị brute force hoặc web trả 500, log là nơi đầu
                            tiên cần đọc. Không có log thì bạn gần như đang đoán
                            mò.
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                            {items.map(([Icon, title, text]) => (
                                <MiniPoint
                                    key={title}
                                    icon={<Icon size={18} />}
                                    tone="rose"
                                    title={title}
                                    text={text}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-2 space-y-3">
                <CompareLogCard
                    title="journald"
                    cmd="journalctl"
                    desc="Log systemd dạng nhị phân, filter mạnh theo unit, PID, boot, time, level."
                    tone="purple"
                />
                <CompareLogCard
                    title="/var/log"
                    cmd="tail/grep/zgrep"
                    desc="File text truyền thống, rất quen thuộc với syslog, auth.log, nginx, mysql."
                    tone="amber"
                />
                <CompareLogCard
                    title="kernel ring buffer"
                    cmd="dmesg"
                    desc="Log kernel, phần cứng, driver, OOM killer, disk I/O error."
                    tone="pink"
                />
            </div>
        </div>
    );
}

function CompareLogCard({ title, cmd, desc, tone }) {
    const map = {
        purple: "text-purple-300",
        amber: "text-amber-300",
        pink: "text-pink-300",
    };
    return (
        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4">
            <div className="font-bold text-white mb-1">{title}</div>
            <code className={`${map[tone]} text-sm`}>{cmd}</code>
            <p className="text-xs text-slate-500 mt-2">{desc}</p>
        </div>
    );
}

function LogFlow() {
    const [mode, setMode] = useState("flow");
    const code = {
        flow: `Nguồn sinh log
  ├─ Kernel        → dmesg / journalctl -k
  ├─ systemd       → journalctl
  └─ Ứng dụng      → journald hoặc /var/log/app.log

journald
  ├─ /run/log/journal/   volatile, mất khi reboot
  ├─ /var/log/journal/   persistent, giữ qua reboot
  └─ rsyslog             forward sang /var/log/*.log

/var/log/*.log
  ├─ syslog
  ├─ auth.log
  ├─ kern.log
  ├─ nginx/access.log
  └─ mysql/error.log`,
        choose: `Cần xem service nginx lỗi?
  → systemctl status nginx
  → journalctl -u nginx -xe

Cần xem SSH brute force?
  → grep "Failed password" /var/log/auth.log

Cần xem lỗi ổ cứng/kernel?
  → dmesg -T | grep -i "error\|i/o"
  → journalctl -k -p err

Cần xem web request?
  → tail -f /var/log/nginx/access.log
  → awk/grep phân tích status code, IP, URL`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["flow", "Luồng log"],
                    ["choose", "Chọn công cụ"],
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
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <TerminalBlock title="log flow" code={code[mode]} />
                </div>
                <div className="lg:col-span-2 space-y-3">
                    <MiniPoint
                        icon={<Server size={18} />}
                        tone="cyan"
                        title="journald"
                        text="Lớp log trung tâm của systemd, dùng journalctl để truy vấn."
                    />
                    <MiniPoint
                        icon={<Archive size={18} />}
                        tone="amber"
                        title="rsyslog"
                        text="Có thể forward log từ journald sang file text trong /var/log."
                    />
                    <MiniPoint
                        icon={<History size={18} />}
                        tone="purple"
                        title="Persistent journal"
                        text="Muốn giữ journal qua reboot thì dùng /var/log/journal hoặc Storage=persistent."
                    />
                </div>
            </div>
        </div>
    );
}

function VarLogExplorer() {
    const [selected, setSelected] = useState("syslog");
    const logs = {
        syslog: [
            "/var/log/syslog",
            "Log hệ thống tổng hợp",
            "cron, systemd, kernel, daemon thông thường",
        ],
        auth: [
            "/var/log/auth.log",
            "Xác thực và bảo mật",
            "ssh, sudo, login, useradd, authentication failure",
        ],
        kern: [
            "/var/log/kern.log",
            "Kernel messages",
            "driver, hardware, disk, network, kernel warning",
        ],
        boot: [
            "/var/log/boot.log",
            "Quá trình boot",
            "dịch vụ start khi khởi động",
        ],
        dpkg: [
            "/var/log/dpkg.log",
            "Cài/gỡ package",
            "apt install, remove, upgrade",
        ],
        nginx: ["/var/log/nginx/", "Web server log", "access.log, error.log"],
        mysql: [
            "/var/log/mysql/",
            "Database log",
            "error log, startup/shutdown, query lỗi",
        ],
        ufw: ["/var/log/ufw.log", "Firewall log", "UFW allow/block packets"],
    };
    const current = logs[selected];
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3 grid md:grid-cols-2 gap-3">
                    {Object.entries(logs).map(([k, [path, title, desc]]) => (
                        <button
                            key={k}
                            onClick={() => setSelected(k)}
                            className={`text-left rounded-2xl border p-4 transition-all ${selected === k ? "bg-amber-500/10 border-amber-500/40" : "bg-slate-900 border-slate-700 hover:border-slate-500"}`}
                        >
                            <div className="font-mono text-amber-300 font-black text-sm break-all">
                                {path}
                            </div>
                            <div className="font-bold text-white mt-1">
                                {title}
                            </div>
                            <div className="text-xs text-slate-500 mt-1">
                                {desc}
                            </div>
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-2 bg-slate-950 border border-slate-700 rounded-2xl p-6">
                    <FileSearch className="text-amber-400 mb-4" size={42} />
                    <h4 className="text-xl font-bold text-white break-all">
                        {current[0]}
                    </h4>
                    <p className="font-bold text-amber-300 mb-3">
                        {current[1]}
                    </p>
                    <p className="text-sm text-slate-400 mb-5">{current[2]}</p>
                    <TerminalBlock
                        title="xem nhanh"
                        code={`$ sudo tail -f ${current[0]}
$ sudo tail -n 100 ${current[0]}
$ sudo grep -i "error\|warning\|fail" ${current[0]}`}
                    />
                </div>
            </div>
        </div>
    );
}

function TextLogTools() {
    const [tab, setTab] = useState("tail");
    const code = {
        tail: `$ sudo tail -f /var/log/syslog
$ sudo tail -f /var/log/auth.log
$ sudo tail -f /var/log/nginx/access.log

# Theo dõi nhiều file cùng lúc
$ sudo tail -f /var/log/syslog /var/log/auth.log

# Xem N dòng cuối/đầu
$ sudo tail -n 100 /var/log/syslog
$ sudo tail -100 /var/log/syslog
$ sudo head -n 50 /var/log/syslog`,
        grep: `$ sudo grep "error" /var/log/syslog
$ sudo grep -i "error" /var/log/syslog
$ sudo grep -i "error\|warning\|fail" /var/log/syslog
$ sudo grep "Feb 18 14" /var/log/syslog
$ sudo grep "alice" /var/log/auth.log
$ sudo grep "sshd" /var/log/auth.log`,
        rotate: `$ ls /var/log/syslog*
/var/log/syslog
/var/log/syslog.1
/var/log/syslog.2.gz
/var/log/syslog.3.gz

$ sudo zcat /var/log/syslog.2.gz | tail -50
$ sudo zgrep "error" /var/log/syslog.2.gz
$ sudo zcat /var/log/syslog.*.gz | grep "error"`,
        format: `Syslog format:
Feb 18 14:30:01 ubuntu sshd[1200]: Accepted publickey for alice from 192.168.1.5
└date/time───────┘ └host┘ └proc PID┘ └message───────────────────────────────┘

# Lọc theo khoảng thời gian bằng awk
$ sudo awk '/Feb 18 14:/,/Feb 18 15:/' /var/log/syslog

# Tìm lỗi kernel trong syslog
$ sudo grep -i "oom\|out of memory" /var/log/syslog
$ sudo grep -i "disk error\|i/o error" /var/log/syslog
$ sudo grep -i "segfault\|segmentation" /var/log/syslog`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-4 border-b border-slate-700">
                {[
                    ["tail", "tail/head"],
                    ["grep", "grep"],
                    ["rotate", "log nén"],
                    ["format", "format"],
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
                    <TerminalBlock
                        title={`text log — ${tab}`}
                        code={code[tab]}
                    />
                </div>
                <div className="lg:col-span-2 space-y-3">
                    <MiniPoint
                        icon={<Eye size={18} />}
                        tone="green"
                        title="tail -f"
                        text="Theo dõi realtime, tốt khi đang reproduce lỗi."
                    />
                    <MiniPoint
                        icon={<Search size={18} />}
                        tone="cyan"
                        title="grep -i"
                        text="Tìm lỗi không phân biệt hoa/thường."
                    />
                    <MiniPoint
                        icon={<FileArchive size={18} />}
                        tone="amber"
                        title="zgrep/zcat"
                        text="Đọc log đã rotate và nén .gz mà không cần giải nén."
                    />
                    <MiniPoint
                        icon={<Filter size={18} />}
                        tone="purple"
                        title="awk"
                        text="Lọc khoảng thời gian, đếm IP, status code, URL."
                    />
                </div>
            </div>
        </div>
    );
}

function AuthLogAnalyzer() {
    const [mode, setMode] = useState("ssh");
    const code = {
        ssh: `$ sudo grep "sshd" /var/log/auth.log | tail -30

# Đăng nhập thành công
$ sudo grep "Accepted" /var/log/auth.log
Feb 18 09:30:00 ubuntu sshd: Accepted publickey for alice from 192.168.1.5
Feb 18 10:15:00 ubuntu sshd: Accepted password for bob from 192.168.1.10

# Đăng nhập thất bại
$ sudo grep "Failed" /var/log/auth.log | tail -20
Feb 18 11:00:00 ubuntu sshd: Failed password for root from 203.0.113.50
Feb 18 11:00:01 ubuntu sshd: Failed password for root from 203.0.113.50`,
        attack: `$ sudo grep "Failed password" /var/log/auth.log | \
  awk '{print $(NF-3)}' | \
  sort | uniq -c | sort -rn | head -10

  356 203.0.113.50    # TẤN CÔNG
   12 185.220.101.42
    3 192.168.1.5     # Có thể là nhân viên nhập sai`,
        sudo: `$ sudo grep "sudo" /var/log/auth.log | tail -20
Feb 18 14:30:00 ubuntu sudo: alice: TTY=pts/0; USER=root; COMMAND=/bin/apt update
Feb 18 14:32:00 ubuntu sudo: bob:   TTY=pts/1; USER=root; COMMAND=/bin/systemctl restart nginx

$ sudo grep "useradd\|userdel\|usermod\|groupadd" /var/log/auth.log`,
        lock: `$ sudo grep "account locked\|authentication failure" /var/log/auth.log | tail -20

# Report nhanh hôm nay
$ TODAY=$(date +"%b %e")
$ sudo grep "$TODAY" /var/log/auth.log | grep "Accepted"
$ sudo grep "$TODAY" /var/log/auth.log | grep "Failed password" | wc -l`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["ssh", "SSH login"],
                        ["attack", "Top IP fail"],
                        ["sudo", "sudo audit"],
                        ["lock", "Account lock"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setMode(k)}
                            className={`w-full text-left rounded-xl border p-4 font-bold ${mode === k ? "bg-red-500/10 border-red-500/40 text-red-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                    <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4 text-sm text-red-100">
                        Hàng trăm dòng <code>Failed password for root</code>{" "}
                        thường là brute force. Hãy kiểm tra IP, tắt password
                        login, dùng key, fail2ban/UFW.
                    </div>
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`auth.log — ${mode}`}
                        code={code[mode]}
                    />
                </div>
            </div>
        </div>
    );
}

function NginxLogAnalyzer() {
    const [mode, setMode] = useState("format");
    const code = {
        format: `$ sudo tail -f /var/log/nginx/access.log

192.168.1.5 - alice [18/Feb/2026:14:30:00 +0000] "GET /api/users HTTP/1.1" 200 1234 "-" "Mozilla/5.0"
203.0.113.50 - - [18/Feb/2026:14:30:01 +0000] "GET /admin HTTP/1.1" 404 512 "-" "sqlmap/1.7"

# Format:
# IP - user [time] "method path protocol" status size "referer" "user-agent"

# 2xx OK | 3xx Redirect | 4xx Client error | 5xx Server error`,
        ip: `$ sudo awk '{print $1}' /var/log/nginx/access.log | \
  sort | uniq -c | sort -rn | head -10

 5234 192.168.1.5
 3421 192.168.1.10
  856 203.0.113.50  # Cần kiểm tra`,
        status: `$ sudo awk '{print $9}' /var/log/nginx/access.log | \
  sort | uniq -c | sort -rn

45231 200
 1234 404
  456 301
  123 500
   89 403

$ sudo grep '" 500 ' /var/log/nginx/access.log | tail -20`,
        url: `$ sudo awk '{print $7}' /var/log/nginx/access.log | \
  sort | uniq -c | sort -rn | head -10

# Xem request từ IP đáng ngờ
$ sudo grep "^203.0.113.50" /var/log/nginx/access.log

# Top URL trả về 500
$ sudo grep '" 500 ' /var/log/nginx/access.log | \
  awk '{print $7}' | sort | uniq -c | sort -rn | head -10`,
        error: `$ sudo tail -f /var/log/nginx/error.log

2026/02/18 14:30:00 [error] 1203#1203: *1 connect() failed (111: Connection refused)
while connecting to upstream, client: 192.168.1.5, server: example.com,
request: "GET /api HTTP/1.1", upstream: "http://127.0.0.1:8000/api"

# Nginx không kết nối được backend 8000
$ sudo systemctl status myapp
$ sudo journalctl -u myapp -n 100`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["format", "Format"],
                    ["ip", "Top IP"],
                    ["status", "Status code"],
                    ["url", "Top URL"],
                    ["error", "Error log"],
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
                    <TerminalBlock
                        title={`nginx log — ${mode}`}
                        code={code[mode]}
                    />
                </div>
                <div className="lg:col-span-2 space-y-3">
                    <MiniPoint
                        icon={<Network size={18} />}
                        tone="sky"
                        title="access.log"
                        text="Mỗi HTTP request: IP, URL, status, size, user-agent."
                    />
                    <MiniPoint
                        icon={<Bug size={18} />}
                        tone="red"
                        title="error.log"
                        text="Nơi tìm upstream down, permission denied, config/runtime errors."
                    />
                    <MiniPoint
                        icon={<ShieldAlert size={18} />}
                        tone="rose"
                        title="Scanner"
                        text="IP request nhiều URL khác nhau, user-agent lạ như sqlmap, nhiều 404/403."
                    />
                </div>
            </div>
        </div>
    );
}

function JournalctlExplorer() {
    const [tab, setTab] = useState("basic");
    const code = {
        basic: `$ sudo journalctl
$ sudo journalctl --no-pager
$ sudo journalctl -r

$ sudo journalctl -u nginx
$ sudo journalctl -u nginx -u mysql
$ sudo journalctl -u "nginx*"`,
        time: `$ sudo journalctl --since "2026-02-18 09:00:00"
$ sudo journalctl --since "2026-02-18" --until "2026-02-19"
$ sudo journalctl --since "1 hour ago"
$ sudo journalctl --since "30 min ago"
$ sudo journalctl --since today
$ sudo journalctl -u nginx --since "2026-02-18 14:00" --until "2026-02-18 15:00"`,
        realtime: `$ sudo journalctl -n 50
$ sudo journalctl -n 50 -f
$ sudo journalctl -f
$ sudo journalctl -u nginx -f`,
        priority: `$ sudo journalctl -p err
$ sudo journalctl -p warning
$ sudo journalctl -p err..warning
$ sudo journalctl -p err --since today

# 0 emerg | 1 alert | 2 crit | 3 err
# 4 warning | 5 notice | 6 info | 7 debug`,
        boot: `$ sudo journalctl -b
$ sudo journalctl -b -1
$ sudo journalctl -b -2
$ sudo journalctl --list-boots

-1 ghi789jkl 2026-02-17 07:55 → 2026-02-18 00:00
 0 jkl012mno 2026-02-18 07:45 → present`,
        format: `$ sudo journalctl -u nginx -o short
$ sudo journalctl -u nginx -o short-precise
$ sudo journalctl -u nginx -o verbose
$ sudo journalctl -u nginx -o json-pretty
$ sudo journalctl -u nginx -o cat

$ sudo journalctl -u nginx -x
$ sudo journalctl -u nginx -xe

$ sudo journalctl -u nginx --grep="error"
$ sudo journalctl -u nginx --grep="5[0-9]{2}"`,
        storage: `$ sudo journalctl --disk-usage
Archived and active journals take up 1.2G in the file system.

$ sudo nano /etc/systemd/journald.conf
[Journal]
Storage=persistent
Compress=yes
SystemMaxUse=500M
MaxRetentionSec=1month
ForwardToSyslog=yes

$ sudo systemctl restart systemd-journald

$ sudo journalctl --vacuum-size=500M
$ sudo journalctl --vacuum-time=30d
$ sudo journalctl --vacuum-files=10`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-7 border-b border-slate-700">
                {[
                    ["basic", "Cơ bản"],
                    ["time", "Time"],
                    ["realtime", "Realtime"],
                    ["priority", "Level"],
                    ["boot", "Boot"],
                    ["format", "Format"],
                    ["storage", "Storage"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setTab(k)}
                        className={`p-3 font-bold border-b md:border-b-0 md:border-r last:border-r-0 border-slate-700 text-sm ${tab === k ? "bg-purple-500/10 text-purple-300" : "text-slate-400 hover:bg-slate-900"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="p-6 grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`journalctl — ${tab}`}
                        code={code[tab]}
                    />
                </div>
                <div className="lg:col-span-2 space-y-3">
                    <MiniPoint
                        icon={<Server size={18} />}
                        tone="purple"
                        title="-u unit"
                        text="Lọc theo service, ví dụ journalctl -u nginx."
                    />
                    <MiniPoint
                        icon={<Timer size={18} />}
                        tone="amber"
                        title="--since/--until"
                        text="Khoanh vùng thời điểm sự cố để giảm nhiễu."
                    />
                    <MiniPoint
                        icon={<AlertTriangle size={18} />}
                        tone="rose"
                        title="-p err"
                        text="Chỉ xem error trở lên, rất hữu ích khi debug nhanh."
                    />
                    <MiniPoint
                        icon={<History size={18} />}
                        tone="cyan"
                        title="-b -1"
                        text="Xem log boot trước, cực hữu ích sau crash/reboot."
                    />
                </div>
            </div>
        </div>
    );
}

function DmesgGuide() {
    const [mode, setMode] = useState("basic");
    const code = {
        basic: `$ dmesg
$ dmesg | tail -50
$ sudo dmesg -T
$ sudo dmesg -H

# Follow realtime
$ sudo dmesg -w
$ sudo dmesg --follow`,
        level: `$ sudo dmesg --level=err
$ sudo dmesg --level=err,warn
$ sudo dmesg -l err

# Kernel log từ journalctl
$ sudo journalctl -k
$ sudo journalctl -k --since today
$ sudo journalctl -k -p err`,
        disk: `$ sudo dmesg | grep -i "error\|fail\|i/o error" | tail -20
$ sudo dmesg | grep "sda\|sdb\|nvme"

[12345.678] ata1.00: failed command: READ FPDMA QUEUED
[12345.679] ata1.00: status: { DRDY ERR }

# Dấu hiệu disk hoặc controller có vấn đề`,
        devices: `$ sudo dmesg | tail -20
# Sau khi cắm USB/device mới

$ sudo dmesg | grep -i "eth0\|ens\|enp\|link"
[ 5.234] e1000e: eth0 NIC Link is Up 1000 Mbps

$ sudo dmesg | grep -i "memory\|edac\|mce"`,
        oom: `$ sudo dmesg | grep -i "oom\|out of memory\|killed process"
[12345.678] Out of memory: Kill process 3456 (java) score 850 or sacrifice child

# OOM killer đã giết Java
# Cần kiểm tra RAM, swap, memory limit hoặc leak`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["basic", "Cơ bản"],
                        ["level", "Level/kernel"],
                        ["disk", "Disk error"],
                        ["devices", "Device/network"],
                        ["oom", "OOM killer"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setMode(k)}
                            className={`w-full text-left rounded-xl border p-4 font-bold ${mode === k ? "bg-pink-500/10 border-pink-500/40 text-pink-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`dmesg — ${mode}`}
                        code={code[mode]}
                    />
                </div>
            </div>
        </div>
    );
}

function LogrotateGuide() {
    const [tab, setTab] = useState("why");
    const code = {
        why: `Vấn đề:
  Log không rotate → file .log phình to
  Disk đầy → service không ghi được → crash

Giải pháp logrotate:
  daily/weekly/monthly
  compress log cũ
  rotate N bản
  create file mới đúng permission
  postrotate reload service`,
        nginx: `$ cat /etc/logrotate.d/nginx
/var/log/nginx/*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 0640 www-data adm
    sharedscripts
    postrotate
        invoke-rc.d nginx rotate >/dev/null 2>&1
    endscript
}`,
        custom: `$ sudo nano /etc/logrotate.d/myapp

/var/log/myapp/*.log {
    daily
    rotate 30
    compress
    delaycompress
    missingok
    notifempty
    create 0640 www-data adm
    dateext
    postrotate
        systemctl reload myapp 2>/dev/null || true
    endscript
}`,
        test: `$ sudo logrotate -d /etc/logrotate.d/nginx
# -d = dry run, test không rotate thật

$ sudo logrotate -f /etc/logrotate.d/nginx
# -f = force rotate ngay

$ sudo logrotate /etc/logrotate.conf
# Chạy toàn bộ config

$ cat /var/lib/logrotate/status
"/var/log/nginx/access.log" 2026-2-18
"/var/log/syslog" 2026-2-18`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["why", "Vì sao cần"],
                    ["nginx", "Config nginx"],
                    ["custom", "Config myapp"],
                    ["test", "Test/force"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setTab(k)}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${tab === k ? "bg-orange-500/10 border-orange-500/40 text-orange-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`logrotate — ${tab}`}
                        code={code[tab]}
                    />
                </div>
                <div className="lg:col-span-2 space-y-3">
                    <MiniPoint
                        icon={<RotateCcw size={18} />}
                        tone="orange"
                        title="rotate"
                        text="Đổi file log hiện tại sang file cũ, tạo file mới cho app tiếp tục ghi."
                    />
                    <MiniPoint
                        icon={<Archive size={18} />}
                        tone="amber"
                        title="compress"
                        text="Nén log cũ để tiết kiệm disk."
                    />
                    <MiniPoint
                        icon={<RefreshCcw size={18} />}
                        tone="green"
                        title="postrotate"
                        text="Reload service để nó mở file log mới đúng cách."
                    />
                    <MiniPoint
                        icon={<ShieldAlert size={18} />}
                        tone="rose"
                        title="dry run trước"
                        text="Dùng logrotate -d để kiểm tra config trước khi force rotate."
                    />
                </div>
            </div>
        </div>
    );
}

function AdvancedLogAnalysis() {
    const [mode, setMode] = useState("nginx");
    const code = {
        nginx: `# Spike theo giờ
$ sudo awk '{print $4}' /var/log/nginx/access.log | cut -d: -f2 | sort | uniq -c | sort -rn
 15234 14
  8456 15
  7234 13

# Top URL trả về 500
$ sudo grep '" 500 ' /var/log/nginx/access.log | awk '{print $7}' | sort | uniq -c | sort -rn | head -10

# Bandwidth usage
$ sudo awk '{sum += $10} END {printf "Total: %.2f GB\n", sum/1024/1024/1024}' /var/log/nginx/access.log`,
        attack: `# IP request nhiều URL khác nhau = scanner
$ sudo awk '{print $1, $7}' /var/log/nginx/access.log | sort -u | awk '{print $1}' | sort | uniq -c | sort -rn | head -5
 856 203.0.113.50
  45 192.168.1.5

# SQL injection attempts
$ sudo grep -i "union\|select\|insert\|drop\|exec\|script" /var/log/nginx/access.log | tail -20

# Directory traversal
$ sudo grep "\.\./\|%2e%2e" /var/log/nginx/access.log`,
        goaccess: `$ sudo apt install goaccess -y

# Terminal analyzer
$ sudo goaccess /var/log/nginx/access.log --log-format=COMBINED

# Export HTML report
$ sudo goaccess /var/log/nginx/access.log \
  --log-format=COMBINED \
  -o /var/www/html/report.html`,
        security: `#!/bin/bash
AUTH_LOG="/var/log/auth.log"
TODAY=$(date +"%b %e")

echo "=== ĐĂNG NHẬP THÀNH CÔNG ==="
grep "$TODAY" "$AUTH_LOG" | grep "Accepted" | awk '{print $1,$2,$3,"→",$9,"from",$11}' | tail -10

echo "=== ĐĂNG NHẬP THẤT BẠI TOP IP ==="
grep "$TODAY" "$AUTH_LOG" | grep "Failed password" | awk '{print $(NF-3)}' | sort | uniq -c | sort -rn | head -10

echo "=== LỆNH SUDO ==="
grep "$TODAY" "$AUTH_LOG" | grep "sudo.*COMMAND" | tail -10

echo "=== SSH HIỆN TẠI ==="
who | grep "pts"`,
        rsyslog: `$ cat /etc/rsyslog.conf

# Rules:
auth,authpriv.*         /var/log/auth.log
*.*;auth,authpriv.none  /var/log/syslog
kern.*                  /var/log/kern.log
mail.*                  /var/log/mail.log

# Gửi log đến server từ xa:
# *.* @logserver.company.com:514    # UDP
# *.* @@logserver.company.com:514   # TCP

$ sudo nano /etc/rsyslog.d/50-myapp.conf
if $programname == 'myapp' then /var/log/myapp/app.log
& stop

$ sudo systemctl restart rsyslog`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["nginx", "Nginx metrics"],
                        ["attack", "Scan/attack"],
                        ["goaccess", "GoAccess"],
                        ["security", "Security report"],
                        ["rsyslog", "rsyslog"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setMode(k)}
                            className={`w-full text-left rounded-xl border p-4 font-bold ${mode === k ? "bg-teal-500/10 border-teal-500/40 text-teal-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`advanced analysis — ${mode}`}
                        code={code[mode]}
                    />
                </div>
            </div>
        </div>
    );
}

function LogAnalyzerPreview() {
    const [mode, setMode] = useState("menu");
    const content = {
        menu: `╔══════════════════════════════════════╗
║        PHÂN TÍCH LOG HỆ THỐNG       ║
╠══════════════════════════════════════╣
║ 1) Xem log realtime                  ║
║ 2) Tìm kiếm trong log                ║
║ 3) Báo cáo bảo mật                   ║
║ 4) Phân tích Nginx log               ║
║ 5) Xem log theo khoảng thời gian     ║
║ 0) Thoát                             ║
╚══════════════════════════════════════╝`,
        watch: `Chọn nguồn log:
1) Tất cả hệ thống      journalctl -f
2) Chỉ errors           journalctl -p err -f
3) Auth log             tail -f /var/log/auth.log
4) Nginx access+error   tail -f access.log error.log
5) MySQL log            tail -f /var/log/mysql/error.log
6) Kernel log           dmesg -w
7) Custom service       journalctl -u SERVICE -f`,
        search: `Từ khóa: error
Tìm trong:
1) Journal
2) /var/log/syslog
3) /var/log/auth.log
4) /var/log/nginx/
5) Tất cả /var/log/

=== KẾT QUẢ TÌM 'error' ===
Feb 18 14:30:10 ubuntu systemd[1]: nginx.service: Main process exited
Feb 18 14:30:11 ubuntu nginx[1203]: connect() failed upstream`,
        security: `╔══════════════════════════════════════════════╗
║         BÁO CÁO BẢO MẬT HỆ THỐNG           ║
║         2026-02-18 14:30                    ║
╚══════════════════════════════════════════════╝

=== SSH ĐĂNG NHẬP ===
  Thành công:  12 lần
  Thất bại:    356 lần
  ⚠️ Có dấu hiệu brute force attack!

Top 5 IP đăng nhập thất bại:
    356 lần: 203.0.113.50
     12 lần: 185.220.101.42`,
        nginx: `╔══════════════════════════════════════╗
║      PHÂN TÍCH NGINX LOG             ║
╚══════════════════════════════════════╝

Tổng requests: 48231

=== STATUS CODES ===
  45231 × 200
   1234 × 404
    123 × 500

=== TOP 10 IP ===
   5234  192.168.1.5
    856  203.0.113.50

=== LỖI GẦN ĐÂY ===
  connect() failed while connecting to upstream`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-2">
                    {[
                        ["menu", "Menu"],
                        ["watch", "Realtime"],
                        ["search", "Search"],
                        ["security", "Security"],
                        ["nginx", "Nginx"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setMode(k)}
                            className={`w-full text-left rounded-xl border p-3 font-bold text-sm ${mode === k ? "bg-blue-500/10 border-blue-500/40 text-blue-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title="log_analyzer.sh preview"
                        code={content[mode]}
                    />
                </div>
            </div>
        </div>
    );
}

function PracticeChecklist() {
    const tasks = [
        ["Xem các file log hiện có", "ls -lh /var/log/"],
        ["Đọc syslog", "sudo tail -20 /var/log/syslog"],
        ["Xem auth log", "sudo tail -20 /var/log/auth.log"],
        [
            "Tìm lỗi hôm nay",
            'sudo grep -i "error" /var/log/syslog | grep "$(date +%b\\ %e)" | tail -10',
        ],
        ["Xem kernel log", "sudo dmesg -T | tail -20"],
        ["Xem log boot hiện tại", "sudo journalctl -b --no-pager | tail -30"],
        ["Xem log SSH", "sudo journalctl -u ssh -n 20"],
        [
            "Xem errors 1 giờ qua",
            'sudo journalctl -p err --since "1 hour ago" --no-pager',
        ],
        ["Follow log realtime", "sudo journalctl -f &  # rồi kill %1"],
        [
            "Xem log dạng JSON",
            "sudo journalctl -u ssh -n 5 -o json-pretty | head -50",
        ],
        [
            "Kiểm tra ai SSH hôm nay",
            'sudo grep "Accepted" /var/log/auth.log | grep "$(date +%b\\ %e)"',
        ],
        [
            "Đếm failed login",
            'sudo grep "Failed password" /var/log/auth.log | grep "$(date +%b\\ %e)" | wc -l',
        ],
        ["Xem danh sách boot", "sudo journalctl --list-boots"],
        [
            "Dọn journal cũ",
            "sudo journalctl --disk-usage && sudo journalctl --vacuum-time=7d",
        ],
        [
            "Test logrotate",
            "sudo logrotate -d /etc/logrotate.conf 2>&1 | head -30",
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
                        title="/var/log"
                        items={[
                            "/var/log/syslog",
                            "/var/log/auth.log",
                            "/var/log/kern.log",
                            "/var/log/nginx/",
                            "tail -f",
                            "grep",
                            "zcat/zgrep",
                        ]}
                    />
                    <SummaryBox
                        title="journalctl"
                        items={[
                            "journalctl -u svc",
                            "journalctl -u svc -f",
                            "journalctl -p err",
                            "journalctl --since today",
                            "journalctl -b",
                            "journalctl -xe",
                        ]}
                    />
                    <SummaryBox
                        title="dmesg"
                        items={[
                            "dmesg -T",
                            "dmesg -H",
                            "dmesg -w",
                            "dmesg --level=err",
                            "grep i/o error",
                            "grep OOM",
                        ]}
                    />
                    <SummaryBox
                        title="logrotate"
                        items={[
                            "/etc/logrotate.d/",
                            "daily/rotate/compress",
                            "postrotate",
                            "logrotate -d",
                            "logrotate -f",
                            "journalctl --vacuum-time",
                        ]}
                    />
                </div>
                <div className="px-6 md:px-8 pb-8">
                    <div className="bg-rose-500/10 border border-rose-500/30 rounded-2xl p-5 text-rose-100">
                        <strong className="text-white">Workflow debug:</strong>{" "}
                        <code>systemctl status svc</code> →{" "}
                        <code>journalctl -u svc -xe</code> →{" "}
                        <code>
                            journalctl -u svc -p err --since "1 hour ago"
                        </code>{" "}
                        → grep trong <code>/var/log/</code> nếu cần chi tiết
                        file text.
                    </div>
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

function PartFiveCompletion() {
    const lessons = [
        "5.1 Xem tiến trình đang chạy: ps, top, htop",
        "5.2 Quản lý tiến trình: kill, nice, jobs",
        "5.3 Tiến trình nền & foreground: nohup, screen, tmux",
        "5.4 Kiểm tra tài nguyên: CPU, RAM, Disk",
        "5.5 Quản lý dịch vụ với systemctl",
        "5.6 Xem log hệ thống: journalctl, /var/log",
    ];
    return (
        <section className="pt-4">
            <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-3xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                    🎉 Hoàn thành Phần 5 — Quản lý tiến trình & hệ thống
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                    {lessons.map((lesson) => (
                        <div
                            key={lesson}
                            className="bg-slate-950/60 border border-slate-700 rounded-2xl p-4 flex gap-3"
                        >
                            <CheckCircle2 className="text-emerald-400 shrink-0" />
                            <span className="text-slate-200">{lesson}</span>
                        </div>
                    ))}
                </div>
                <p className="text-slate-300 mt-5">
                    Phần tiếp theo là{" "}
                    <strong className="text-cyan-300">
                        Phần 6 — Mạng & Kết nối
                    </strong>
                    : kiểm tra mạng, SSH, firewall và chia sẻ file qua mạng.
                </p>
            </div>
        </section>
    );
}

const questions = [
    {
        question: "Sự khác biệt chính giữa journalctl và /var/log là gì?",
        options: [
            "journalctl đọc systemd journal có filter mạnh; /var/log là file text truyền thống",
            "journalctl chỉ đọc nginx, /var/log chỉ đọc CPU",
            "Không khác nhau",
            "journalctl chỉ chạy trên Windows",
        ],
        correct: 0,
        explanation:
            "journalctl truy vấn journal nhị phân của systemd. /var/log là hệ thống file log text truyền thống như syslog, auth.log, nginx.",
    },
    {
        question:
            "Lệnh nào xem chỉ error của nginx trong 1 giờ qua và follow realtime?",
        options: [
            "sudo journalctl -u nginx -p err --since '1 hour ago' -f",
            "sudo tail -f -p err nginx",
            "sudo dmesg -u nginx -f",
            "sudo logrotate -f nginx",
        ],
        correct: 0,
        explanation:
            "-u lọc service, -p err lọc error trở lên, --since khoanh thời gian, -f follow realtime.",
    },
    {
        question:
            "Tại sao journalctl -b -1 hữu ích sau khi server crash rồi reboot?",
        options: [
            "Nó xem log của boot trước, nơi có thể chứa nguyên nhân crash",
            "Nó reboot server lần nữa",
            "Nó xóa log cũ",
            "Nó chỉ xem nginx access log",
        ],
        correct: 0,
        explanation:
            "Boot hiện tại có thể không còn lỗi trước crash. -b -1 giúp xem phiên boot ngay trước đó.",
    },
    {
        question:
            "/var/log/auth.log có hàng trăm Failed password for root. Nên làm gì tiếp?",
        options: [
            "Xác định IP tấn công, tắt password login root, dùng SSH key, UFW/fail2ban",
            "Xóa toàn bộ /var/log",
            "Tăng CPU",
            "Restart nginx",
        ],
        correct: 0,
        explanation:
            "Đây là dấu hiệu brute force. Cần phân tích nguồn IP và harden SSH/firewall.",
    },
    {
        question: "journalctl --vacuum-time=7d làm gì?",
        options: [
            "Xóa journal cũ hơn 7 ngày",
            "Xem log 7 ngày tới",
            "Nén nginx access log",
            "Tắt journald",
        ],
        correct: 0,
        explanation:
            "Vacuum-time giữ log journal trong khoảng thời gian chỉ định, xóa phần cũ hơn để giải phóng disk.",
    },
    {
        question:
            "dmesg | grep -i 'i/o error' thấy nhiều dòng. Điều đó gợi ý vấn đề gì?",
        options: [
            "Có thể ổ đĩa/controller/filesystem đang lỗi",
            "SSH brute force",
            "Nginx bị 404",
            "RAM cache bình thường",
        ],
        correct: 0,
        explanation:
            "I/O error trong kernel log thường liên quan đến disk, controller, filesystem hoặc thiết bị lưu trữ.",
    },
    {
        question:
            "Muốn xem log nginx từ 14:00 đến 15:00 hôm qua bằng journalctl thì dùng dạng nào?",
        options: [
            "journalctl -u nginx --since 'yesterday 14:00' --until 'yesterday 15:00'",
            "tail -yesterday nginx",
            "dmesg --since nginx",
            "logrotate --since nginx",
        ],
        correct: 0,
        explanation:
            "journalctl hỗ trợ ngôn ngữ thời gian tương đối như yesterday và filter theo unit.",
    },
    {
        question: "logrotate -d dùng để làm gì?",
        options: [
            "Dry run/test config, không rotate thật",
            "Xóa toàn bộ log",
            "Follow realtime",
            "Đọc log nén",
        ],
        correct: 0,
        explanation:
            "-d là debug/dry run, dùng để kiểm tra cấu hình logrotate an toàn trước khi chạy thật.",
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
                    <strong className="text-rose-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu về log hệ thống.
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
