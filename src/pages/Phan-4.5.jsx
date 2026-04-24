import React, { useMemo, useState } from "react";
import {
    Eye,
    Users,
    User,
    TerminalSquare,
    Monitor,
    Server,
    Wifi,
    MousePointer2,
    Clock,
    Activity,
    History,
    ScrollText,
    ShieldAlert,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    Info,
    LogOut,
    Megaphone,
    MessageSquare,
    FileText,
    Radio,
    Search,
    Bug,
    Lock,
    Ban,
    Network,
    Cpu,
    ListTree,
    ClipboardCheck,
    RefreshCcw,
    ChevronRight,
    BookOpen,
    Zap,
    ShieldCheck,
    Gauge,
    UserX,
    Play,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-sky-500 selection:text-white pb-20">
            <header className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50 backdrop-blur">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🐧</span>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Linux/Ubuntu
                            </h1>
                            <p className="text-xs text-slate-500 hidden md:block">
                                Phiên đăng nhập, audit và xử lý user online
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400 hidden md:inline-block">
                            Bài trước: 4.4
                        </span>
                        <div className="text-sm font-medium text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full border border-sky-400/20">
                            Phần 4.5
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center space-y-5 py-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-sm font-medium">
                        <Eye size={16} /> who · w · last · loginctl · pkill
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Xem & Quản lý{" "}
                        <span className="text-sky-400 font-mono">
                            Phiên Đăng Nhập
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Bài này giúp bạn biết <strong>ai đang online</strong>,
                        họ đăng nhập từ đâu, đang chạy lệnh gì, lịch sử đăng
                        nhập ra sao, cách phát hiện brute force SSH và cách kick
                        user khỏi hệ thống khi cần.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4">
                        {[
                            [Users, "who / w", "Ai đang online"],
                            [History, "last", "Lịch sử login"],
                            [Activity, "loginctl", "Session systemd"],
                            [UserX, "kick", "Ngắt phiên"],
                        ].map(([Icon, title, desc]) => (
                            <div
                                key={title}
                                className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 text-left"
                            >
                                <Icon className="text-sky-400 mb-3" size={24} />
                                <div className="font-bold text-white">
                                    {title}
                                </div>
                                <div className="text-xs text-slate-500">
                                    {desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        n="1"
                        color="sky"
                        icon={<Monitor size={22} />}
                        title="Phiên đăng nhập là gì?"
                    />
                    <div className="grid lg:grid-cols-5 gap-6">
                        <div className="lg:col-span-3 bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                            <div className="flex items-start gap-5">
                                <div className="bg-sky-500/15 text-sky-400 p-4 rounded-2xl border border-sky-500/20">
                                    <Eye size={42} />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-white">
                                        Mỗi lần user đăng nhập = một session
                                    </h3>
                                    <p className="text-slate-300">
                                        Session có thể đến từ console vật lý,
                                        terminal TTY, terminal giả PTS qua SSH,
                                        terminal app trong GUI, hoặc đăng nhập
                                        giao diện đồ họa. Admin cần biết ai đang
                                        online, họ đang làm gì và khi nào phải
                                        ngắt phiên.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <MiniPoint
                                            icon={<Search size={18} />}
                                            tone="sky"
                                            title="Quan sát"
                                            text="who, w, loginctl cho biết user, terminal, IP nguồn, thời gian login và lệnh đang chạy."
                                        />
                                        <MiniPoint
                                            icon={<ShieldAlert size={18} />}
                                            tone="rose"
                                            title="Phản ứng"
                                            text="Khi có user lạ hoặc brute force SSH, cần kiểm tra process, khóa tài khoản, block IP và audit log."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SessionTypeCards />
                    </div>
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="2"
                        color="cyan"
                        icon={<Users size={22} />}
                        title="Xem ai đang đăng nhập — who và w"
                    />
                    <WhoWExplorer />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="3"
                        color="amber"
                        icon={<History size={22} />}
                        title="Lịch sử đăng nhập — last, lastb và lastlog"
                    />
                    <LoginHistoryTabs />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="4"
                        color="purple"
                        icon={<Activity size={22} />}
                        title="Theo dõi phiên systemd — loginctl"
                    />
                    <LoginctlSimulator />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="5"
                        color="green"
                        icon={<ListTree size={22} />}
                        title="Theo dõi process của user — ps và pstree"
                    />
                    <div className="grid lg:grid-cols-2 gap-6">
                        <CommandCard
                            title="Xem process của một user"
                            icon={<Cpu size={20} />}
                            lines={[
                                ["# Process đơn giản của bob", "ps -u bob"],
                                [
                                    "# Full format: PID, PPID, TTY, CMD",
                                    "ps -u bob -f",
                                ],
                                [
                                    "# Mọi process, sắp theo user",
                                    "ps aux | head -1; ps aux | grep -v '^USER' | sort -k1",
                                ],
                                ["# Cây tiến trình", "pstree -u -p"],
                            ]}
                        />
                        <ProcessTreeDemo />
                    </div>
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="6"
                        color="rose"
                        icon={<UserX size={22} />}
                        title="Kick user — ngắt phiên đăng nhập"
                    />
                    <KickUserLab />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="7"
                        color="orange"
                        icon={<ScrollText size={22} />}
                        title="File log đăng nhập — đọc hiểu auth.log, wtmp, btmp"
                    />
                    <LogAnalyzer />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="8"
                        color="red"
                        icon={<ShieldAlert size={22} />}
                        title="Phát hiện & phản ứng xâm nhập"
                    />
                    <IncidentResponseTimeline />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="9"
                        color="teal"
                        icon={<TerminalSquare size={22} />}
                        title="Script giám sát phiên đăng nhập"
                    />
                    <SessionMonitorPreview />
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

                <section className="pt-4">
                    <div className="bg-slate-950 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                <BookOpen className="text-sky-400" /> Tóm tắt
                                toàn bài
                            </h3>
                        </div>
                        <div className="p-6 md:p-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <SummaryBox
                                title="ai đang online"
                                items={[
                                    "who",
                                    "who -H",
                                    "w",
                                    "w -s",
                                    "w user",
                                    "whoami",
                                ]}
                            />
                            <SummaryBox
                                title="lịch sử login"
                                items={[
                                    "last",
                                    "last user",
                                    "last reboot",
                                    "sudo lastb",
                                    "lastlog",
                                    "lastlog -b 30",
                                ]}
                            />
                            <SummaryBox
                                title="loginctl"
                                items={[
                                    "list-sessions",
                                    "show-session N",
                                    "session-status N",
                                    "terminate-session N",
                                    "terminate-user user",
                                ]}
                            />
                            <SummaryBox
                                title="kick & log"
                                items={[
                                    "pkill -u user",
                                    "pkill -9 -u user",
                                    "wall",
                                    "write user pts/N",
                                    "/var/log/auth.log",
                                ]}
                            />
                        </div>
                    </div>
                </section>

                <section className="space-y-6 pt-4">
                    <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-xl">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-sky-500/20 text-sky-400 p-2 rounded-lg">
                                    <ClipboardCheck size={20} />
                                </span>
                                Kiểm tra nhanh: phiên đăng nhập Linux
                            </h3>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                <div className="text-center pt-8 border-t border-slate-800">
                    <p className="text-slate-400 mb-4">
                        Chúc mừng! Bạn đã hoàn thành Phần 4 — Phân quyền & Người
                        dùng.
                    </p>
                    <button className="bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-sky-500/20">
                        Phần 5 — Quản lý tiến trình & hệ thống{" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

function SectionTitle({ n, color, icon, title }) {
    const colorMap = {
        sky: "bg-sky-500/20 text-sky-400",
        cyan: "bg-cyan-500/20 text-cyan-400",
        amber: "bg-amber-500/20 text-amber-400",
        purple: "bg-purple-500/20 text-purple-400",
        green: "bg-green-500/20 text-green-400",
        rose: "bg-rose-500/20 text-rose-400",
        orange: "bg-orange-500/20 text-orange-400",
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
        sky: "bg-sky-500/10 border-sky-500/20 text-sky-300",
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

function SessionTypeCards() {
    const cards = [
        [Monitor, "Console", "Ngồi trực tiếp tại máy", "text-blue-400"],
        [
            TerminalSquare,
            "TTY",
            "Terminal vật lý Ctrl+Alt+F1-F6",
            "text-cyan-400",
        ],
        [Wifi, "PTY/PTS", "SSH hoặc Terminal app", "text-green-400"],
        [MousePointer2, "GUI", "Đăng nhập giao diện đồ họa", "text-purple-400"],
    ];
    return (
        <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {cards.map(([Icon, title, desc, color]) => (
                <div
                    key={title}
                    className="bg-slate-800/50 border border-slate-700 rounded-3xl p-5"
                >
                    <Icon className={`${color} mb-3`} size={30} />
                    <div className="font-bold text-white">{title}</div>
                    <p className="text-xs text-slate-500 mt-1">{desc}</p>
                </div>
            ))}
        </div>
    );
}

const onlineSessions = [
    {
        user: "alice",
        tty: "tty1",
        from: "-",
        login: "08:00",
        idle: "3:30",
        what: "-bash",
        type: "Console",
    },
    {
        user: "alice",
        tty: "pts/0",
        from: ":0",
        login: "09:30",
        idle: "10:00",
        what: "vim notes.txt",
        type: "GUI Terminal",
    },
    {
        user: "bob",
        tty: "pts/1",
        from: "192.168.1.5",
        login: "10:15",
        idle: "5.00s",
        what: "python3 app.py",
        type: "SSH LAN",
    },
    {
        user: "eve",
        tty: "pts/2",
        from: "10.0.0.20",
        login: "10:45",
        idle: "2.00s",
        what: "sudo apt upgrade",
        type: "SSH VPN",
    },
    {
        user: "charlie",
        tty: "pts/3",
        from: "192.168.1.8",
        login: "11:00",
        idle: "1:00",
        what: "-bash",
        type: "SSH LAN",
    },
];

function WhoWExplorer() {
    const [mode, setMode] = useState("w");
    const [selected, setSelected] = useState("all");
    const rows =
        selected === "all"
            ? onlineSessions
            : onlineSessions.filter((s) => s.user === selected);
    const whoOutput = rows
        .map(
            (s) =>
                `${s.user.padEnd(8)} ${s.tty.padEnd(8)} 2026-02-18 ${s.login.padEnd(5)} ${s.from !== "-" ? `(${s.from})` : ""}`,
        )
        .join("\n");
    const wOutput =
        `11:30:00 up 3:44, ${rows.length} users, load average: 0.15, 0.20, 0.18\nUSER     TTY      FROM             LOGIN@   IDLE    WHAT\n` +
        rows
            .map(
                (s) =>
                    `${s.user.padEnd(8)} ${s.tty.padEnd(8)} ${s.from.padEnd(16)} ${s.login.padEnd(8)} ${s.idle.padEnd(7)} ${s.what}`,
            )
            .join("\n");
    return (
        <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                    <h4 className="text-xl font-bold text-white">
                        Dashboard user online
                    </h4>
                    <p className="text-sm text-slate-400">
                        Chuyển giữa <code>who</code> và <code>w</code> để thấy
                        mức độ chi tiết khác nhau.
                    </p>
                </div>
                <div className="flex gap-2 flex-wrap">
                    <button
                        onClick={() => setMode("who")}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${mode === "who" ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        who
                    </button>
                    <button
                        onClick={() => setMode("w")}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${mode === "w" ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        w
                    </button>
                    <select
                        value={selected}
                        onChange={(e) => setSelected(e.target.value)}
                        className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white text-sm"
                    >
                        <option value="all">Tất cả</option>
                        <option value="alice">alice</option>
                        <option value="bob">bob</option>
                        <option value="eve">eve</option>
                        <option value="charlie">charlie</option>
                    </select>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
                <TerminalBlock
                    title={
                        mode === "who"
                            ? "who -H"
                            : selected === "all"
                              ? "w"
                              : `w ${selected}`
                    }
                    code={mode === "who" ? whoOutput : wOutput}
                />
                <div className="bg-slate-950 border border-slate-700 rounded-2xl overflow-hidden">
                    <div className="bg-slate-900 px-4 py-3 border-b border-slate-700 text-xs uppercase tracking-widest text-slate-400">
                        Giải thích nhanh
                    </div>
                    <div className="p-4 space-y-3 text-sm">
                        <ExplainRow
                            label="TTY"
                            text="tty = console; pts = pseudo terminal thường đến từ SSH hoặc terminal app."
                        />
                        <ExplainRow
                            label="FROM"
                            text="IP nguồn hoặc :0 nếu terminal local trong GUI."
                        />
                        <ExplainRow
                            label="IDLE"
                            text="Bao lâu user chưa tương tác. IDLE lớn có thể là phiên bỏ quên."
                        />
                        <ExplainRow
                            label="WHAT"
                            text="Lệnh hiện tại. Đây là cột quan trọng nhất để biết user đang làm gì."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function ExplainRow({ label, text }) {
    return (
        <div className="flex gap-3">
            <code className="text-sky-300 w-14 shrink-0">{label}</code>
            <span className="text-slate-400">{text}</span>
        </div>
    );
}

function LoginHistoryTabs() {
    const [tab, setTab] = useState("last");
    const data = {
        last: `alice    pts/0    :0             Tue Feb 18 09:30   still logged in
alice    pts/1    192.168.1.5    Mon Feb 17 20:00 - 22:30  (02:30)
bob      pts/0    192.168.1.10   Mon Feb 17 14:00 - 18:00  (04:00)
reboot   system boot 6.8.0       Mon Feb 17 07:55`,
        lastb: `root     ssh:notty  203.0.113.50   Tue Feb 18 10:55
root     ssh:notty  203.0.113.50   Tue Feb 18 10:54
admin    ssh:notty  203.0.113.50   Tue Feb 18 10:54
alice    ssh:notty  192.168.1.5    Tue Feb 18 11:00`,
        lastlog: `Username         Port     From             Latest
root             pts/0                     Mon Feb 17 08:00:00 +0000 2026
daemon                                     **Never logged in**
alice            pts/0    :0               Tue Feb 18 09:30:00 +0000 2026
intern01         pts/0    192.168.1.20     Fri Feb 14 09:00:00 +0000 2026`,
    };
    const notes = {
        last: [
            "Đọc từ /var/log/wtmp",
            "Dùng để xem login/logout, reboot, shutdown và session còn online.",
        ],
        lastb: [
            "Đọc từ /var/log/btmp",
            "Dùng để xem đăng nhập thất bại, rất hữu ích khi phát hiện brute force SSH.",
        ],
        lastlog: [
            "Đọc last-login database",
            "Dùng để tìm user chưa từng login hoặc không login trong N ngày.",
        ],
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-3 border-b border-slate-700">
                {[
                    ["last", "last"],
                    ["lastb", "sudo lastb"],
                    ["lastlog", "lastlog"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setTab(k)}
                        className={`p-4 font-bold border-b md:border-b-0 md:border-r last:border-r-0 border-slate-700 ${tab === k ? "bg-amber-500/10 text-amber-300" : "text-slate-400 hover:bg-slate-900"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="p-6 grid lg:grid-cols-2 gap-6">
                <TerminalBlock title={tab} code={data[tab]} />
                <div className="bg-slate-950 border border-slate-700 rounded-2xl p-5">
                    <h4 className="text-white font-bold flex items-center gap-2 mb-3">
                        <Info className="text-amber-400" /> {notes[tab][0]}
                    </h4>
                    <p className="text-slate-400 text-sm mb-4">
                        {notes[tab][1]}
                    </p>
                    {tab === "lastb" && (
                        <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl p-4 text-sm text-rose-200 flex gap-3">
                            <AlertTriangle className="shrink-0" size={18} />
                            Nếu một IP xuất hiện hàng chục hoặc hàng trăm lần,
                            đó có thể là brute force. Cần block IP và kiểm tra
                            SSH policy.
                        </div>
                    )}
                    {tab === "lastlog" && (
                        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm text-amber-200">
                            Lệnh <code>lastlog -b 90</code> giúp tìm tài khoản
                            không hoạt động lâu ngày để khóa hoặc xóa.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function LoginctlSimulator() {
    const sessions = [
        {
            id: 1,
            uid: 1000,
            user: "alice",
            tty: "tty1",
            service: "login",
            remote: "no",
            host: "-",
            leader: 900,
            what: "bash",
        },
        {
            id: 2,
            uid: 1000,
            user: "alice",
            tty: "pts/0",
            service: "gnome-terminal",
            remote: "no",
            host: ":0",
            leader: 2100,
            what: "vim notes.txt",
        },
        {
            id: 3,
            uid: 1001,
            user: "bob",
            tty: "pts/1",
            service: "sshd",
            remote: "yes",
            host: "192.168.1.5",
            leader: 1234,
            what: "python3 app.py",
        },
        {
            id: 4,
            uid: 1002,
            user: "eve",
            tty: "pts/2",
            service: "sshd",
            remote: "yes",
            host: "10.0.0.20",
            leader: 3000,
            what: "sudo apt upgrade",
        },
    ];
    const [selected, setSelected] = useState(3);
    const s = sessions.find((x) => x.id === selected);
    return (
        <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {sessions.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setSelected(item.id)}
                            className={`w-full text-left p-4 rounded-2xl border transition-all ${selected === item.id ? "bg-purple-500/10 border-purple-500/40" : "bg-slate-900 border-slate-700 hover:border-slate-500"}`}
                        >
                            <div className="font-bold text-white">
                                Session {item.id} — {item.user}
                            </div>
                            <div className="text-xs text-slate-500 mt-1">
                                {item.service} · {item.tty} · {item.host}
                            </div>
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`loginctl show-session ${s.id}`}
                        code={`Id=${s.id}
User=${s.uid}
Name=${s.user}
Service=${s.service}
Remote=${s.remote}
RemoteHost=${s.host}
Type=tty
Class=user
Active=yes
State=active
Leader=${s.leader}

# loginctl session-status ${s.id}
session-${s.id}.scope
 └─${s.leader} ${s.service === "sshd" ? `sshd: ${s.user}@${s.tty}` : "bash"}
 └─${s.leader + 1} -bash
 └─${s.leader + 2} ${s.what}`}
                    />
                </div>
            </div>
        </div>
    );
}

function CommandCard({ title, icon, lines }) {
    return (
        <div className="bg-slate-800 rounded-3xl p-6 border border-slate-700">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2 text-green-300">
                {icon}
                {title}
            </h4>
            <div className="bg-black rounded-2xl p-4 font-mono text-sm border border-slate-900 space-y-4">
                {lines.map(([comment, cmd]) => (
                    <div key={cmd}>
                        <div className="text-slate-500 text-xs">{comment}</div>
                        <div>
                            <span className="text-green-400">$</span>{" "}
                            <span className="text-white">{cmd}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ProcessTreeDemo() {
    return (
        <div className="bg-slate-950 border border-slate-700 rounded-3xl p-6">
            <h4 className="font-bold text-white flex items-center gap-2 mb-4">
                <ListTree className="text-green-400" /> Cây tiến trình mẫu
            </h4>
            <pre className="text-sm text-slate-300 font-mono overflow-x-auto leading-relaxed">
                <code>{`init(1)
├─sshd(1200)
│ ├─sshd(1234)─bash(1235)─python3(1236)
│ └─sshd(3100)─bash(3101)
└─login(800)─bash(900)─vim(901)`}</code>
            </pre>
            <div className="mt-4 bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-sm text-green-200">
                Muốn kick một session SSH, thường kill shell hoặc dùng{" "}
                <code>loginctl terminate-session</code> sạch hơn.
            </div>
        </div>
    );
}

function KickUserLab() {
    const [method, setMethod] = useState("loginctl");
    const [warn, setWarn] = useState(true);
    const methods = {
        kill: [
            "Kill shell/session",
            `ps aux | grep "pts/1"
sudo kill -HUP 1235
# hoặc rất mạnh:
sudo kill -9 1235`,
        ],
        pkill: [
            "Kill tất cả process của user",
            `sudo pkill -u bob
# mạnh hơn, không cho dọn dẹp:
sudo pkill -9 -u bob`,
        ],
        loginctl: [
            "Cách hiện đại",
            `loginctl list-sessions
sudo loginctl terminate-session 3
# hoặc kick mọi session của bob:
sudo loginctl terminate-user bob`,
        ],
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                <div>
                    <h4 className="text-xl font-bold text-white">
                        Lab chọn cách kick user bob
                    </h4>
                    <p className="text-sm text-slate-400">
                        Ưu tiên cảnh báo trước bằng <code>wall</code> hoặc{" "}
                        <code>write</code> nếu không phải sự cố bảo mật khẩn
                        cấp.
                    </p>
                </div>
                <label className="flex items-center gap-3 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={warn}
                        onChange={() => setWarn(!warn)}
                        className="accent-rose-500 w-5 h-5"
                    />
                    <span className="font-bold text-white">Cảnh báo trước</span>
                </label>
            </div>
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {Object.entries(methods).map(([k, [title]]) => (
                        <button
                            key={k}
                            onClick={() => setMethod(k)}
                            className={`w-full text-left p-4 rounded-2xl border font-bold ${method === k ? "bg-rose-500/10 border-rose-500/40 text-rose-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {title}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={methods[method][0]}
                        code={`${
                            warn
                                ? `echo "Server sẽ bảo trì sau 5 phút. Hãy lưu công việc!" | sudo wall

`
                                : ""
                        }${methods[method][1]}

who | grep bob
# Trống = bob đã bị kick`}
                    />
                </div>
            </div>
        </div>
    );
}

function LogAnalyzer() {
    const [view, setView] = useState("failed");
    const logs = {
        success: `Feb 18 10:15:22 ubuntu sshd[1200]: Accepted publickey for bob from 192.168.1.5
Feb 18 10:15:22 ubuntu pam_unix(sshd:session): session opened for user bob
Feb 18 11:45:10 ubuntu pam_unix(sshd:session): session closed for user bob`,
        failed: `Feb 18 11:00:05 ubuntu sshd[1300]: Failed password for root from 203.0.113.50
Feb 18 11:00:06 ubuntu sshd[1300]: Failed password for root from 203.0.113.50
Feb 18 11:00:07 ubuntu sshd[1300]: Failed password for admin from 203.0.113.50
Feb 18 11:00:08 ubuntu sshd[1300]: maximum authentication attempts exceeded`,
        sudo: `Feb 18 11:30:00 ubuntu sudo: alice : TTY=pts/0 ; USER=root ; COMMAND=/bin/systemctl restart nginx
Feb 18 11:32:15 ubuntu sudo: eve : TTY=pts/2 ; USER=root ; COMMAND=/usr/bin/apt upgrade`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["success", "Login thành công"],
                    ["failed", "Login thất bại"],
                    ["sudo", "Sudo activity"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setView(k)}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${view === k ? "bg-orange-500/10 border-orange-500/40 text-orange-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
                <TerminalBlock title="/var/log/auth.log" code={logs[view]} />
                <TerminalBlock
                    title="Lệnh lọc hữu ích"
                    code={
                        view === "failed"
                            ? `sudo grep "Failed password" /var/log/auth.log | tail -20

sudo grep "Failed password" /var/log/auth.log | \
  awk '{for(i=1;i<=NF;i++) if($i=="from") print $(i+1)}' | \
  sort | uniq -c | sort -rn | head -10

sudo ufw deny from 203.0.113.50 to any`
                            : view === "success"
                              ? `sudo grep "session opened" /var/log/auth.log
sudo grep "Accepted" /var/log/auth.log
sudo journalctl -u sshd --since "1 hour ago"`
                              : `sudo grep "sudo:" /var/log/auth.log | tail -20
sudo journalctl | grep sudo | tail -30`
                    }
                />
            </div>
        </div>
    );
}

function IncidentResponseTimeline() {
    const steps = [
        ["1", "Xem ai đang online", "who -H", Users],
        ["2", "Xem user lạ đang làm gì", "w | grep hacker", Eye],
        ["3", "Xem process", "ps -u hacker -f", Cpu],
        ["4", "Kick ngay", "sudo pkill -9 -u hacker", UserX],
        ["5", "Khóa tài khoản", "sudo passwd -l hacker", Lock],
        ["6", "Block IP", "sudo ufw deny from 203.0.113.50", Ban],
        ["7", "Audit log", "grep hacker /var/log/auth.log", ScrollText],
        [
            "8",
            "Kiểm tra file nghi ngờ",
            "find /tmp -user hacker -type f",
            Search,
        ],
    ];
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map(([n, title, cmd, Icon]) => (
                <div
                    key={n}
                    className="bg-slate-800 border border-red-500/20 rounded-3xl p-5"
                >
                    <div className="flex items-center justify-between mb-4">
                        <Icon className="text-red-400" size={26} />
                        <span className="font-mono text-red-300 bg-red-500/10 border border-red-500/20 rounded-full px-3 py-1">
                            {n}
                        </span>
                    </div>
                    <h4 className="font-bold text-white mb-2">{title}</h4>
                    <code className="text-xs text-slate-400 break-all">
                        {cmd}
                    </code>
                </div>
            ))}
        </div>
    );
}

function SessionMonitorPreview() {
    const [mode, setMode] = useState("online");
    const content = {
        online: `USER     TTY      FROM             LOGIN@   IDLE WHAT
alice    pts/0    :0               09:30   10:00 vim notes.txt
bob      pts/1    192.168.1.5      10:15   5.00s python3 app.py

Tổng: 2 phiên | Uptime: up 3 hours, 44 minutes`,
        history: `=== LỊCH SỬ CỦA bob ===
bob pts/1 192.168.1.5 Tue Feb 18 10:15 still logged in
bob pts/0 192.168.1.10 Mon Feb 17 14:00 - 18:00`,
        kick: `User đang online:
bob pts/1 2026-02-18 10:15 (192.168.1.5)

Gửi cảnh báo trước? y
sudo loginctl terminate-user bob
✅ Đã kick 'bob' bằng loginctl`,
        threat: `=== IP TẤN CÔNG NHIỀU NHẤT ===
356 lần: 203.0.113.50
12 lần: 185.220.101.1
3 lần: 192.168.1.5`,
        realtime: `=== REALTIME SESSION MONITOR ===
2026-02-18 11:30:00
🟢 ONLINE: eve@pts/2
🔴 OFFLINE: charlie@pts/3`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-2">
                    {[
                        ["online", "Xem online"],
                        ["history", "Lịch sử"],
                        ["kick", "Kick user"],
                        ["threat", "Phân tích threat"],
                        ["realtime", "Realtime"],
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
                        title="session_monitor.sh preview"
                        code={content[mode]}
                    />
                </div>
            </div>
        </div>
    );
}

function PracticeChecklist() {
    const tasks = [
        ["Xem ai đang login", "who -H && w"],
        ["Xem lịch sử của chính mình", "last $(whoami) | head -10"],
        ["Xem lần cuối mọi user đăng nhập", "lastlog"],
        ["Mở terminal thứ 2 và quan sát", "who && w"],
        [
            "Xem session chi tiết",
            "loginctl list-sessions && loginctl show-session 1",
        ],
        [
            "Tạo user test",
            "sudo useradd -m -s /bin/bash kicker_test && sudo passwd kicker_test",
        ],
        ["Kick user test", "sudo pkill -u kicker_test"],
        ["Xem log auth", "sudo tail -20 /var/log/auth.log"],
        [
            "Kiểm tra failed login",
            "sudo lastb -n 10 2>/dev/null || echo 'Chưa có failed login'",
        ],
        ["Dọn dẹp", "sudo userdel -r kicker_test"],
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

function SummaryBox({ title, items }) {
    return (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
            <h4 className="font-bold text-sky-300 uppercase text-xs tracking-widest mb-4">
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
        question: "who và w khác nhau ở điểm gì?",
        options: [
            "who chỉ hiện danh sách đơn giản; w hiện thêm uptime, idle, CPU và lệnh đang chạy",
            "w chỉ dùng cho Windows",
            "who hiện password",
            "Không khác nhau",
        ],
        correct: 0,
        explanation:
            "who dùng để xem nhanh ai online. w chi tiết hơn, đặc biệt có cột WHAT cho biết user đang làm gì.",
    },
    {
        question: "Cột IDLE trong w cho biết điều gì?",
        options: [
            "Bao lâu user chưa tương tác",
            "Địa chỉ IP",
            "Tên shell",
            "Dung lượng RAM",
        ],
        correct: 0,
        explanation:
            "IDLE cho biết thời gian user chưa gõ gì. IDLE cao có thể là phiên bị bỏ quên.",
    },
    {
        question: "last và lastb đọc dữ liệu từ file nào?",
        options: [
            "last từ wtmp, lastb từ btmp",
            "Cả hai từ /etc/passwd",
            "last từ auth.log, lastb từ sudo.log",
            "Cả hai từ bash_history",
        ],
        correct: 0,
        explanation:
            "last đọc /var/log/wtmp; lastb đọc /var/log/btmp chứa các lần đăng nhập thất bại.",
    },
    {
        question: "Làm sao phát hiện IP brute force SSH?",
        options: [
            "Đếm Failed password theo IP trong auth.log hoặc dùng lastb",
            "Chạy whoami",
            "Xem df -h",
            "Xóa /var/log/auth.log",
        ],
        correct: 0,
        explanation:
            "Các dòng Failed password lặp lại nhiều lần từ cùng IP là dấu hiệu brute force.",
    },
    {
        question: "pkill -u bob khác gì loginctl terminate-user bob?",
        options: [
            "pkill kill process theo user; loginctl kết thúc session systemd của user",
            "loginctl chỉ đổi password",
            "pkill chỉ gửi tin nhắn",
            "Không có khác biệt",
        ],
        correct: 0,
        explanation:
            "loginctl hiện đại và làm việc theo session systemd. pkill trực tiếp giết process của user.",
    },
    {
        question: "Lệnh nào gửi thông báo đến tất cả user đang online?",
        options: ["wall", "write bob pts/1", "whoami", "lastlog"],
        correct: 0,
        explanation:
            "wall broadcast message tới mọi terminal đang nhận tin nhắn.",
    },
    {
        question: "lastlog -b 90 dùng để làm gì?",
        options: [
            "Tìm user không đăng nhập trong 90 ngày",
            "Kick user trong 90 giây",
            "Xóa log 90 ngày",
            "Xem CPU 90%",
        ],
        correct: 0,
        explanation:
            "lastlog -b N liệt kê user không login trong N ngày qua, hữu ích để phát hiện tài khoản bỏ quên.",
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
                    <strong className="text-sky-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu về phiên đăng nhập.
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
                <span className="text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full">
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
