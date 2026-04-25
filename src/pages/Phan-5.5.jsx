import React, { useState } from "react";
import {
    AlertTriangle,
    BookOpen,
    CheckCircle2,
    ChevronRight,
    ClipboardCheck,
    Code2,
    FileCode2,
    GitBranch,
    History,
    Info,
    Layers,
    ListChecks,
    Lock,
    PauseCircle,
    Play,
    Power,
    RefreshCcw,
    RotateCcw,
    ScrollText,
    Search,
    Server,
    Settings,
    ShieldAlert,
    TerminalSquare,
    Timer,
    ToggleLeft,
    Unlock,
    Zap,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-indigo-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 border-b border-slate-800 sticky top-0 z-50 backdrop-blur">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🐧</span>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Linux/Ubuntu
                            </h1>
                            <p className="text-xs text-slate-500 hidden md:block">
                                systemd, systemctl, journalctl và custom service
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400 hidden md:inline-block">
                            Bài trước: 5.4
                        </span>
                        <div className="text-sm font-medium text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full border border-indigo-400/20">
                            Phần 5.5
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <Hero />

                <section className="space-y-6">
                    <SectionTitle
                        n="1"
                        color="indigo"
                        icon={<Server size={22} />}
                        title="systemd là gì?"
                    />
                    <SystemdIntro />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="2"
                        color="cyan"
                        icon={<Layers size={22} />}
                        title="Unit — trái tim của systemd"
                    />
                    <UnitExplorer />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="3"
                        color="green"
                        icon={<Play size={22} />}
                        title="Điều khiển service — start, stop, restart, reload"
                    />
                    <ServiceControlLab />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="4"
                        color="sky"
                        icon={<Search size={22} />}
                        title="Kiểm tra trạng thái — status, is-active, --failed"
                    />
                    <StatusAnalyzer />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="5"
                        color="amber"
                        icon={<ToggleLeft size={22} />}
                        title="Enable, disable và mask — tự khởi động khi boot"
                    />
                    <BootControl />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="6"
                        color="rose"
                        icon={<ScrollText size={22} />}
                        title="journalctl — xem log service"
                    />
                    <JournalctlGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="7"
                        color="purple"
                        icon={<FileCode2 size={22} />}
                        title="File unit — viết service của riêng bạn"
                    />
                    <UnitFileBuilder />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="8"
                        color="pink"
                        icon={<Settings size={22} />}
                        title="systemctl nâng cao — target, override, dependencies"
                    />
                    <AdvancedSystemctl />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="9"
                        color="orange"
                        icon={<ShieldAlert size={22} />}
                        title="Kịch bản thực tế tổng hợp"
                    />
                    <RealWorldScenarios />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="10"
                        color="teal"
                        icon={<TerminalSquare size={22} />}
                        title="Script quản lý service"
                    />
                    <ServiceManagerPreview />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="11"
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
                                <span className="bg-indigo-500/20 text-indigo-400 p-2 rounded-lg">
                                    <ClipboardCheck size={20} />
                                </span>
                                Kiểm tra nhanh: systemctl và systemd service
                            </h3>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                <div className="text-center pt-8 border-t border-slate-800">
                    <p className="text-slate-400 mb-4">
                        Bạn đã hoàn thành Phần 5.5 — Quản lý dịch vụ với
                        systemctl.
                    </p>
                    <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-indigo-500/20">
                        Bài tiếp theo: 5.6 — journalctl và /var/log{" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

function Hero() {
    const cards = [
        [Server, "systemd", "PID 1, quản lý hệ thống"],
        [TerminalSquare, "systemctl", "Start/stop/status service"],
        [ScrollText, "journalctl", "Đọc log tập trung"],
        [FileCode2, "unit file", "Tạo service riêng"],
    ];
    return (
        <section className="text-center space-y-5 py-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium">
                <Zap size={16} /> systemctl · journalctl · unit · timer ·
                override
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Quản Lý Dịch Vụ với{" "}
                <span className="text-indigo-400 font-mono">systemctl</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Bài này giúp bạn bật/tắt service như nginx, mysql, ssh; kiểm tra
                lỗi bằng status và journalctl; enable service khi boot; và viết
                file .service cho ứng dụng của riêng bạn.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4">
                {cards.map(([Icon, title, desc]) => (
                    <div
                        key={title}
                        className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 text-left"
                    >
                        <Icon className="text-indigo-400 mb-3" size={24} />
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
        indigo: "bg-indigo-500/20 text-indigo-400",
        cyan: "bg-cyan-500/20 text-cyan-400",
        green: "bg-green-500/20 text-green-400",
        sky: "bg-sky-500/20 text-sky-400",
        amber: "bg-amber-500/20 text-amber-400",
        rose: "bg-rose-500/20 text-rose-400",
        purple: "bg-purple-500/20 text-purple-400",
        pink: "bg-pink-500/20 text-pink-400",
        orange: "bg-orange-500/20 text-orange-400",
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
        indigo: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
        cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
        green: "bg-green-500/10 border-green-500/20 text-green-300",
        sky: "bg-sky-500/10 border-sky-500/20 text-sky-300",
        amber: "bg-amber-500/10 border-amber-500/20 text-amber-300",
        rose: "bg-rose-500/10 border-rose-500/20 text-rose-300",
        purple: "bg-purple-500/10 border-purple-500/20 text-purple-300",
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

function SystemdIntro() {
    return (
        <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                <div className="flex items-start gap-5">
                    <div className="bg-indigo-500/15 text-indigo-400 p-4 rounded-2xl border border-indigo-500/20">
                        <Server size={42} />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">
                            systemd là PID 1 — cha của mọi process
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            systemd là init system hiện đại trên Ubuntu. Nó khởi
                            động hệ thống song song, quản lý service, timer,
                            socket, mount, target và gom log qua journald. Công
                            cụ chính để điều khiển systemd là{" "}
                            <code>systemctl</code>.
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                            <MiniPoint
                                icon={<Zap size={18} />}
                                tone="indigo"
                                title="Boot nhanh hơn"
                                text="systemd có thể start nhiều unit song song thay vì tuần tự như SysV init."
                            />
                            <MiniPoint
                                icon={<ScrollText size={18} />}
                                tone="sky"
                                title="Log tập trung"
                                text="journald gom log service, giúp journalctl lọc theo service, thời gian, level."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-2 space-y-3">
                <CompareCard
                    title="SysV init cũ"
                    cmd="/etc/init.d/nginx start"
                    desc="Chạy tuần tự, script rời rạc, khó dependency."
                    tone="amber"
                />
                <CompareCard
                    title="service wrapper"
                    cmd="service nginx start"
                    desc="Vẫn thường gặp, nhưng systemctl mới là chuẩn hiện đại."
                    tone="cyan"
                />
                <CompareCard
                    title="systemd hiện tại"
                    cmd="systemctl start nginx"
                    desc="Quản lý service, timer, socket, target, log và dependency."
                    tone="indigo"
                />
            </div>
        </div>
    );
}

function CompareCard({ title, cmd, desc, tone }) {
    const map = {
        amber: "text-amber-300",
        cyan: "text-cyan-300",
        indigo: "text-indigo-300",
    };
    return (
        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4">
            <div className="font-bold text-white mb-1">{title}</div>
            <code className={`${map[tone]} text-sm`}>{cmd}</code>
            <p className="text-xs text-slate-500 mt-2">{desc}</p>
        </div>
    );
}

function UnitExplorer() {
    const [selected, setSelected] = useState("service");
    const units = {
        service: [
            ".service",
            "Dịch vụ",
            "nginx, mysql, ssh, docker",
            "Quản lý process chạy nền.",
        ],
        timer: [
            ".timer",
            "Lịch chạy",
            "backup-db.timer",
            "Thay thế cron bằng systemd timer.",
        ],
        socket: [
            ".socket",
            "Socket activation",
            "ssh.socket",
            "Start service khi có kết nối/socket.",
        ],
        mount: [
            ".mount",
            "Mount point",
            "home.mount",
            "Quản lý filesystem mount.",
        ],
        target: [
            ".target",
            "Nhóm unit",
            "multi-user, graphical",
            "Tương đương runlevel cũ.",
        ],
        path: [
            ".path",
            "Theo dõi file",
            "watch-upload.path",
            "Kích hoạt khi path thay đổi.",
        ],
    };
    const current = units[selected];
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3 grid md:grid-cols-2 gap-3">
                    {Object.entries(units).map(([k, [ext, name, examples]]) => (
                        <button
                            key={k}
                            onClick={() => setSelected(k)}
                            className={`text-left rounded-2xl border p-4 transition-all ${selected === k ? "bg-cyan-500/10 border-cyan-500/40" : "bg-slate-900 border-slate-700 hover:border-slate-500"}`}
                        >
                            <div className="font-mono text-cyan-300 font-black text-lg">
                                {ext}
                            </div>
                            <div className="font-bold text-white">{name}</div>
                            <div className="text-xs text-slate-500 mt-1">
                                {examples}
                            </div>
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-2 bg-slate-950 border border-slate-700 rounded-2xl p-6">
                    <Layers className="text-cyan-400 mb-4" size={42} />
                    <h4 className="text-2xl font-bold text-white">
                        {current[0]}
                    </h4>
                    <p className="font-bold text-cyan-300 mb-3">{current[1]}</p>
                    <p className="text-sm text-slate-400 mb-5">{current[3]}</p>
                    <TerminalBlock
                        title="unit paths"
                        code={`/lib/systemd/system/   # Unit mặc định, không sửa trực tiếp
/etc/systemd/system/   # Custom/override, sửa ở đây
/run/systemd/system/   # Runtime, tạm thời`}
                    />
                </div>
            </div>
            <ServiceStateCards />
        </div>
    );
}

function ServiceStateCards() {
    const states = [
        ["active", "Đang chạy", "text-green-300"],
        ["inactive", "Đã dừng", "text-slate-300"],
        ["failed", "Crash hoặc exit lỗi", "text-rose-300"],
        ["enabled", "Tự start khi boot", "text-cyan-300"],
        ["disabled", "Không tự start", "text-amber-300"],
        ["masked", "Bị chặn hoàn toàn", "text-red-300"],
    ];
    return (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {states.map(([s, desc, color]) => (
                <div
                    key={s}
                    className="bg-slate-950 border border-slate-700 rounded-2xl p-4"
                >
                    <div className={`font-mono font-black ${color}`}>{s}</div>
                    <div className="text-xs text-slate-500 mt-1">{desc}</div>
                </div>
            ))}
        </div>
    );
}

function ServiceControlLab() {
    const [service, setService] = useState("nginx");
    const [action, setAction] = useState("start");
    const commands = {
        start: `$ sudo systemctl start ${service}
$ sudo systemctl start ${service}.service

# Start nhiều service cùng lúc:
$ sudo systemctl start nginx mysql redis`,
        stop: `$ sudo systemctl stop ${service}

# Dừng ngay service, không tự xóa enable boot`,
        restart: `$ sudo systemctl restart ${service}

# Dừng hoàn toàn rồi khởi động lại
# Có downtime ngắn, connection có thể bị cắt`,
        reload: `$ sudo ${service === "nginx" ? "nginx -t" : "systemctl reload " + service}
${service === "nginx" ? "nginx: configuration file /etc/nginx/nginx.conf test is successful\n\n$ sudo systemctl reload nginx" : ""}

# Reload config, thường không downtime
# Không phải service nào cũng hỗ trợ`,
        smart: `$ sudo systemctl reload-or-restart ${service}

# Nếu hỗ trợ reload → reload
# Nếu không hỗ trợ → restart
# Rất hữu ích trong production`,
        try: `$ sudo systemctl try-restart ${service}
$ sudo systemctl condrestart ${service}

# Chỉ restart nếu service đang chạy
# Nếu đang stopped thì không làm gì`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                <div>
                    <h4 className="text-xl font-bold text-white">
                        Lab điều khiển service
                    </h4>
                    <p className="text-sm text-slate-400">
                        Chọn service và thao tác để xem câu lệnh tương ứng.
                    </p>
                </div>
                <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white font-mono"
                >
                    <option value="nginx">nginx</option>
                    <option value="mysql">mysql</option>
                    <option value="ssh">ssh</option>
                    <option value="docker">docker</option>
                    <option value="mywebapp">mywebapp</option>
                </select>
            </div>
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["start", "start"],
                        ["stop", "stop"],
                        ["restart", "restart"],
                        ["reload", "reload"],
                        ["smart", "reload-or-restart"],
                        ["try", "try-restart"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setAction(k)}
                            className={`w-full text-left p-4 rounded-2xl border font-bold ${action === k ? "bg-green-500/10 border-green-500/40 text-green-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`systemctl ${action} ${service}`}
                        code={commands[action]}
                    />
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3 mt-6">
                <MiniPoint
                    icon={<RotateCcw size={18} />}
                    tone="rose"
                    title="restart"
                    text="Dừng rồi start lại, có thể downtime ngắn."
                />
                <MiniPoint
                    icon={<RefreshCcw size={18} />}
                    tone="green"
                    title="reload"
                    text="Nạp lại config, thường zero downtime nếu service hỗ trợ."
                />
            </div>
        </div>
    );
}

function StatusAnalyzer() {
    const [mode, setMode] = useState("running");
    const code = {
        running: `$ sudo systemctl status nginx
● nginx.service - A high performance web server and a reverse proxy server
     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
     Active: active (running) since Tue 2026-02-18 09:30:00 UTC; 5h 30min ago
   Main PID: 1202 (nginx)
      Tasks: 5 (limit: 9450)
     Memory: 12.5M
        CPU: 1.234s
     CGroup: /system.slice/nginx.service
             ├─1202 nginx: master process
             ├─1203 nginx: worker process
             └─1204 nginx: worker process

Feb 18 systemd[1]: Started nginx.`,
        failed: `$ sudo systemctl status mysql
● mysql.service - MySQL Community Server
     Loaded: loaded (/lib/systemd/system/mysql.service; enabled)
     Active: failed (Result: exit-code) since Tue 2026-02-18 14:00:00 UTC
    Process: 2000 ExecStart=/usr/sbin/mysqld (code=exited, status=1/FAILURE)

Feb 18 mysqld[2000]: [ERROR] Can't start server: Bind on TCP/IP port.
Feb 18 mysqld[2000]: [ERROR] Do you already have another mysqld server running on port 3306?
Feb 18 systemd[1]: Failed to start MySQL Community Server.

$ sudo ss -tlnp | grep 3306
$ sudo kill $(lsof -t -i:3306)
$ sudo systemctl start mysql`,
        quick: `$ systemctl is-active nginx
active

$ systemctl is-enabled nginx
enabled

$ systemctl is-failed mysql
failed

if systemctl is-active --quiet nginx; then
  echo "nginx đang chạy"
else
  sudo systemctl start nginx
fi`,
        list: `$ systemctl --failed
  UNIT            LOAD   ACTIVE SUB    DESCRIPTION
● mysql.service   loaded failed failed MySQL Community Server
● php-fpm.service loaded failed failed PHP FastCGI Process Manager

$ systemctl list-units --type=service
$ systemctl list-units --type=service --all
$ systemctl list-units --state=failed
$ systemctl list-units --state=running`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-4 border-b border-slate-700">
                {[
                    ["running", "Service OK"],
                    ["failed", "Service lỗi"],
                    ["quick", "Kiểm tra nhanh"],
                    ["list", "List/failed"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setMode(k)}
                        className={`p-4 font-bold border-b md:border-b-0 md:border-r last:border-r-0 border-slate-700 ${mode === k ? "bg-sky-500/10 text-sky-300" : "text-slate-400 hover:bg-slate-900"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="p-6 grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`status — ${mode}`}
                        code={code[mode]}
                    />
                </div>
                <div className="lg:col-span-2 space-y-3">
                    <MiniPoint
                        icon={<Info size={18} />}
                        tone="sky"
                        title="Loaded"
                        text="Cho biết unit file đã nạp chưa và service enabled/disabled."
                    />
                    <MiniPoint
                        icon={<Play size={18} />}
                        tone="green"
                        title="Active"
                        text="active, inactive, failed, activating, deactivating."
                    />
                    <MiniPoint
                        icon={<Server size={18} />}
                        tone="cyan"
                        title="Main PID / CGroup"
                        text="Process chính và cây process thuộc service."
                    />
                    <MiniPoint
                        icon={<ScrollText size={18} />}
                        tone="amber"
                        title="Log cuối"
                        text="status thường hiển thị vài dòng log gần nhất, rất hữu ích khi debug."
                    />
                </div>
            </div>
        </div>
    );
}

function BootControl() {
    const [action, setAction] = useState("enableNow");
    const code = {
        enable: `$ sudo systemctl enable nginx
Created symlink /etc/systemd/system/multi-user.target.wants/nginx.service → /lib/systemd/system/nginx.service

# Chỉ đặt lịch tự start khi boot, KHÔNG start ngay`,
        enableNow: `$ sudo systemctl enable --now nginx

# enable boot + start ngay bây giờ
# Dùng khi cài service mới`,
        disable: `$ sudo systemctl disable nginx
Removed /etc/systemd/system/multi-user.target.wants/nginx.service

# Không tự start khi boot, nhưng nếu đang chạy thì vẫn chạy`,
        disableNow: `$ sudo systemctl disable --now nginx

# disable boot + stop ngay bây giờ`,
        mask: `$ sudo systemctl mask bluetooth.service
Created symlink /etc/systemd/system/bluetooth.service → /dev/null

$ sudo systemctl start bluetooth
Failed to start bluetooth.service: Unit bluetooth.service is masked.

$ sudo systemctl unmask bluetooth.service`,
        list: `$ systemctl is-enabled nginx
enabled

$ systemctl list-unit-files --type=service | grep -E "nginx|mysql|ssh"
mysql.service  enabled   enabled
nginx.service  enabled   enabled
ssh.service    enabled   enabled

$ systemctl list-unit-files --type=service | sort | column -t`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["enable", "enable"],
                        ["enableNow", "enable --now"],
                        ["disable", "disable"],
                        ["disableNow", "disable --now"],
                        ["mask", "mask/unmask"],
                        ["list", "kiểm tra"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setAction(k)}
                            className={`w-full text-left rounded-xl border p-4 font-bold ${action === k ? "bg-amber-500/10 border-amber-500/40 text-amber-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`boot control — ${action}`}
                        code={code[action]}
                    />
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-3 mt-6">
                <MiniPoint
                    icon={<Play size={18} />}
                    tone="green"
                    title="start"
                    text="Khởi động ngay lập tức."
                />
                <MiniPoint
                    icon={<ToggleLeft size={18} />}
                    tone="amber"
                    title="enable"
                    text="Đặt lịch tự khởi động khi boot."
                />
                <MiniPoint
                    icon={<Lock size={18} />}
                    tone="rose"
                    title="mask"
                    text="Chặn hoàn toàn, không start được bằng cách thông thường."
                />
            </div>
        </div>
    );
}

function JournalctlGuide() {
    const [filter, setFilter] = useState("service");
    const code = {
        service: `$ sudo journalctl -u nginx
$ sudo journalctl -u nginx -u mysql
$ sudo journalctl -u nginx --no-pager

# Theo dõi realtime:
$ sudo journalctl -u nginx -f`,
        time: `$ sudo journalctl -u nginx --since "1 hour ago"
$ sudo journalctl -u nginx --since "2026-02-18 09:00"
$ sudo journalctl -u nginx --since "2026-02-18" --until "2026-02-18 12:00"
$ sudo journalctl -u nginx --since today
$ sudo journalctl -u nginx --since yesterday`,
        tail: `$ sudo journalctl -u nginx -n 50
$ sudo journalctl -u nginx -n 50 -f

# 50 dòng cuối + follow realtime`,
        level: `$ sudo journalctl -u nginx -p err
$ sudo journalctl -u nginx -p warning
$ sudo journalctl -p err --since today

# Level: emerg, alert, crit, err, warning, notice, info, debug`,
        boot: `$ sudo journalctl -u nginx -b
$ sudo journalctl -u nginx -b -1
$ sudo journalctl -u nginx -b -2

# Log boot hiện tại, boot trước, 2 boot trước`,
        clean: `$ sudo journalctl --disk-usage
Archived and active journals take up 1.2G in the file system.

$ sudo journalctl --vacuum-size=500M
$ sudo journalctl --vacuum-time=7d`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["service", "Theo service"],
                    ["time", "Theo thời gian"],
                    ["tail", "N dòng cuối"],
                    ["level", "Theo level"],
                    ["boot", "Theo boot"],
                    ["clean", "Dọn journal"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setFilter(k)}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${filter === k ? "bg-rose-500/10 border-rose-500/40 text-rose-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`journalctl — ${filter}`}
                        code={code[filter]}
                    />
                </div>
                <div className="lg:col-span-2 space-y-3">
                    <MiniPoint
                        icon={<ScrollText size={18} />}
                        tone="rose"
                        title="-u service"
                        text="Lọc log đúng service, ví dụ journalctl -u nginx."
                    />
                    <MiniPoint
                        icon={<Timer size={18} />}
                        tone="amber"
                        title="--since"
                        text="Cực hữu ích khi lỗi vừa xảy ra: --since '5 min ago'."
                    />
                    <MiniPoint
                        icon={<AlertTriangle size={18} />}
                        tone="rose"
                        title="-p err"
                        text="Chỉ xem error trở lên, giảm nhiễu khi debug production."
                    />
                    <MiniPoint
                        icon={<RefreshCcw size={18} />}
                        tone="cyan"
                        title="-f"
                        text="Follow realtime, giống tail -f."
                    />
                </div>
            </div>
        </div>
    );
}

function UnitFileBuilder() {
    const [template, setTemplate] = useState("python");
    const code = {
        anatomy: `[Unit]
Description=A high performance web server and a reverse proxy server
After=network.target nss-lookup.target

[Service]
Type=forking
PIDFile=/run/nginx.pid
ExecStartPre=/usr/sbin/nginx -t -q -g 'daemon on; master_process on;'
ExecStart=/usr/sbin/nginx -g 'daemon on; master_process on;'
ExecReload=/bin/kill -s HUP $MAINPID
ExecStop=/bin/kill -s QUIT $MAINPID
PrivateTmp=true

[Install]
WantedBy=multi-user.target`,
        python: `[Unit]
Description=My Python Web Application
After=network.target
Wants=mysql.service redis.service

[Service]
Type=simple
User=www-data
Group=www-data
WorkingDirectory=/srv/webapp
Environment=PYTHONUNBUFFERED=1
EnvironmentFile=-/srv/webapp/.env
ExecStart=/srv/webapp/venv/bin/python3 -m uvicorn main:app --host 0.0.0.0 --port 8000 --workers 4
Restart=on-failure
RestartSec=5s
StartLimitInterval=60s
StartLimitBurst=3
StandardOutput=journal
StandardError=journal
SyslogIdentifier=mywebapp
NoNewPrivileges=true
PrivateTmp=true

[Install]
WantedBy=multi-user.target

# Kích hoạt:
$ sudo systemctl daemon-reload
$ sudo systemctl enable --now mywebapp
$ sudo journalctl -u mywebapp -f`,
        node: `[Unit]
Description=Node.js Application
After=network.target

[Service]
Type=simple
User=nodeuser
Group=nodeuser
WorkingDirectory=/srv/nodeapp
Environment=NODE_ENV=production
Environment=PORT=3000
EnvironmentFile=-/srv/nodeapp/.env
ExecStart=/usr/bin/node /srv/nodeapp/index.js
ExecReload=/bin/kill -HUP $MAINPID
Restart=always
RestartSec=3s
StandardOutput=journal
StandardError=journal
SyslogIdentifier=nodeapp

[Install]
WantedBy=multi-user.target`,
        timer: `[Unit]
Description=Database Backup
After=mysql.service
Requires=mysql.service

[Service]
Type=oneshot
User=root
ExecStart=/usr/local/bin/backup_db.sh
StandardOutput=journal
StandardError=journal
SyslogIdentifier=backup-db
Restart=no

# backup-db.timer
[Unit]
Description=Run DB Backup Daily at 2 AM
Requires=backup-db.service

[Timer]
OnCalendar=*-*-* 02:00:00
AccuracySec=1min
Persistent=true

[Install]
WantedBy=timers.target

$ sudo systemctl daemon-reload
$ sudo systemctl enable --now backup-db.timer
$ systemctl list-timers`,
        sections: `[Unit]
Description=   # Mô tả
After=         # Start sau unit này
Requires=      # Bắt buộc có unit này
Wants=         # Muốn có nhưng không bắt buộc
Conflicts=     # Không chạy cùng unit này

[Service]
Type=simple|forking|oneshot|notify
ExecStart=     # Lệnh chính
ExecReload=    # Lệnh reload
Restart=on-failure|always|no
User=          # Không chạy root nếu không cần
WorkingDirectory=
Environment=
EnvironmentFile=
MemoryLimit=512M
CPUQuota=50%
PrivateTmp=true
NoNewPrivileges=true

[Install]
WantedBy=multi-user.target`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["anatomy", "Giải phẫu unit"],
                        ["sections", "Section options"],
                        ["python", "Python app"],
                        ["node", "Node.js app"],
                        ["timer", "Backup + timer"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setTemplate(k)}
                            className={`w-full text-left rounded-xl border p-4 font-bold ${template === k ? "bg-purple-500/10 border-purple-500/40 text-purple-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                    <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-4 text-sm text-purple-100">
                        Sau khi tạo hoặc sửa unit file trong{" "}
                        <code>/etc/systemd/system</code>, luôn chạy{" "}
                        <code>systemctl daemon-reload</code>.
                    </div>
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`unit file — ${template}`}
                        code={code[template]}
                    />
                </div>
            </div>
        </div>
    );
}

function AdvancedSystemctl() {
    const [tab, setTab] = useState("targets");
    const code = {
        targets: `$ systemctl get-default
graphical.target

$ sudo systemctl set-default multi-user.target
$ sudo systemctl set-default graphical.target

$ sudo systemctl isolate multi-user.target
$ sudo systemctl isolate rescue.target

$ sudo systemctl reboot
$ sudo systemctl poweroff
$ sudo systemctl suspend
$ sudo systemctl rescue
$ sudo systemctl emergency`,
        override: `$ sudo systemctl edit nginx
# hoặc:
$ sudo mkdir -p /etc/systemd/system/nginx.service.d/
$ sudo nano /etc/systemd/system/nginx.service.d/override.conf

[Service]
LimitNOFILE=65536
Environment=CUSTOM_VAR=value
Restart=always
RestartSec=3s

$ sudo systemctl daemon-reload
$ sudo systemctl restart nginx

$ sudo systemctl cat nginx
$ sudo systemctl show nginx --property=Restart,RestartSec,LimitNOFILE`,
        deps: `$ systemctl list-dependencies nginx
$ systemctl list-dependencies --reverse nginx

$ systemd-analyze
Startup finished in 3.972s (kernel) + 15.345s (userspace) = 19.317s

$ systemd-analyze blame | head -20
8.231s apt-daily-upgrade.service
4.123s mysql.service
2.456s nginx.service

$ systemd-analyze critical-chain
$ systemd-analyze plot > /tmp/boot.svg`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["targets", "Targets/runlevel"],
                    ["override", "Override service"],
                    ["deps", "Dependencies/boot"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setTab(k)}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${tab === k ? "bg-pink-500/10 border-pink-500/40 text-pink-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`advanced — ${tab}`}
                        code={code[tab]}
                    />
                </div>
                <div className="lg:col-span-2 space-y-3">
                    <MiniPoint
                        icon={<GitBranch size={18} />}
                        tone="pink"
                        title="Target"
                        text="Nhóm unit, tương đương runlevel cũ như multi-user hoặc graphical."
                    />
                    <MiniPoint
                        icon={<Settings size={18} />}
                        tone="purple"
                        title="Override"
                        text="Không sửa file gốc trong /lib; dùng systemctl edit hoặc drop-in override."
                    />
                    <MiniPoint
                        icon={<History size={18} />}
                        tone="amber"
                        title="Boot analysis"
                        text="systemd-analyze blame cho biết service nào làm boot chậm."
                    />
                </div>
            </div>
        </div>
    );
}

function RealWorldScenarios() {
    const [scenario, setScenario] = useState("nginx");
    const scenarios = {
        nginx: {
            title: "Cài Nginx + PHP-FPM",
            icon: Server,
            code: `$ sudo apt install nginx php-fpm -y

$ systemctl status nginx
$ systemctl status php8.1-fpm

$ sudo systemctl enable --now nginx
$ sudo systemctl enable --now php8.1-fpm

$ sudo nano /etc/nginx/sites-available/mysite.conf

$ sudo nginx -t
nginx: configuration file /etc/nginx/nginx.conf syntax is ok

$ sudo systemctl reload nginx

$ sudo journalctl -u nginx -n 20 --no-pager
$ sudo journalctl -u nginx -p err --since "5 min ago"`,
        },
        crash: {
            title: "Service crash, tự tìm nguyên nhân",
            icon: AlertTriangle,
            code: `$ sudo systemctl status mywebapp
● mywebapp.service - My Web Application
     Active: failed (Result: exit-code)

# Bước 1: đọc log cuối trong status

$ sudo journalctl -u mywebapp -n 100 --no-pager
$ sudo journalctl -u mywebapp --since "30 min ago"

# Bước 2: chạy thủ công để thấy lỗi trực tiếp
$ sudo -u www-data /srv/webapp/venv/bin/python3 \
  -m uvicorn main:app --host 0.0.0.0 --port 8000

# Bước 3: sửa lỗi rồi start lại
$ sudo systemctl start mywebapp
$ sudo systemctl status mywebapp`,
        },
        boot: {
            title: "Boot xong service không tự start",
            icon: ToggleLeft,
            code: `$ systemctl is-enabled mywebapp
disabled

# Quên enable
$ sudo systemctl enable mywebapp
$ sudo systemctl start mywebapp

# Hoặc gọn hơn:
$ sudo systemctl enable --now mywebapp

$ systemd-analyze blame | grep mywebapp`,
        },
        oneshot: {
            title: "Chạy script một lần khi boot",
            icon: Timer,
            code: `$ sudo nano /etc/systemd/system/init-setup.service

[Unit]
Description=Initial Server Setup Script
After=network.target
ConditionPathExists=!/var/lib/.setup-done

[Service]
Type=oneshot
ExecStart=/usr/local/bin/setup.sh
ExecStartPost=/usr/bin/touch /var/lib/.setup-done
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target

$ sudo systemctl daemon-reload
$ sudo systemctl enable init-setup`,
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
                                className={`w-full text-left p-4 rounded-2xl border transition-all ${scenario === k ? "bg-orange-500/10 border-orange-500/40" : "bg-slate-900 border-slate-700 hover:border-slate-500"}`}
                            >
                                <div className="flex items-center gap-3">
                                    <ItemIcon className="text-orange-400" />
                                    <span className="font-bold text-white">
                                        {s.title}
                                    </span>
                                </div>
                            </button>
                        );
                    })}
                </div>
                <div className="lg:col-span-3">
                    <div className="mb-4 flex items-center gap-2 text-orange-300 font-bold">
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

function ServiceManagerPreview() {
    const [mode, setMode] = useState("dashboard");
    const content = {
        dashboard: `╔══════════════════════════════════════════════════╗
║           SERVICE DASHBOARD                      ║
╠══════════════════════════════════════════════════╣
  SERVICE                    STATUS       BOOT
╠══════════════════════════════════════════════════╣
  nginx                      ● running    enabled
  mysql                      ○ stopped    disabled
  ssh                        ● running    enabled
  docker                     ● running    enabled
╠══════════════════════════════════════════════════╣
║ ✅ Tất cả service bình thường
╚══════════════════════════════════════════════════╝`,
        manage: `Tên service: nginx
Service: nginx
  nginx                      ● running    enabled

Chọn thao tác:
1) start          6) enable
2) stop           7) disable
3) restart        8) mask
4) reload         9) unmask
5) reload-or-restart  10) status đầy đủ
11) Xem log       12) Xem log realtime`,
        failed: `=== SERVICE ĐANG FAILED ===
mysql.service loaded failed failed MySQL Community Server
php-fpm.service loaded failed failed PHP FastCGI Process Manager

Chọn service để xem log: mysql
$ sudo journalctl -u mysql -n 50 --no-pager`,
        create: `=== TẠO SERVICE MỚI ===
Tên service: myapp
Mô tả: My Web App
Lệnh chạy: /srv/app/venv/bin/python3 /srv/app/main.py
User chạy service: www-data
Working directory: /srv/app
Tự restart khi crash? y

✅ Đã tạo: /etc/systemd/system/myapp.service
$ sudo systemctl daemon-reload
$ sudo systemctl enable --now myapp`,
        monitor: `=== SERVICE MONITOR === 14:30:00 ===

  SERVICE                    STATUS       BOOT
  ────────────────────────────────────────────────
  cron                       ● running    enabled
  docker                     ● running    enabled
  nginx                      ● running    enabled
  ssh                        ● running    enabled

  ⚠️  1 service FAILED!
   ✗ mysql.service`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-2">
                    {[
                        ["dashboard", "Dashboard"],
                        ["manage", "Quản lý cụ thể"],
                        ["failed", "Failed services"],
                        ["create", "Tạo service"],
                        ["monitor", "Realtime monitor"],
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
                        title="service_manager.sh preview"
                        code={content[mode]}
                    />
                </div>
            </div>
        </div>
    );
}

function PracticeChecklist() {
    const tasks = [
        [
            "Xem tất cả service đang chạy",
            "systemctl list-units --type=service --state=running",
        ],
        [
            "Kiểm tra service SSH",
            "systemctl status ssh && systemctl is-active ssh && systemctl is-enabled ssh",
        ],
        [
            "Cài và enable nginx",
            "sudo apt install nginx -y && sudo systemctl enable --now nginx",
        ],
        ["Kiểm tra web server", "curl http://localhost"],
        [
            "Thực hành stop/start nginx",
            "sudo systemctl stop nginx; sudo systemctl start nginx",
        ],
        ["Xem log nginx", "sudo journalctl -u nginx -n 20"],
        ["Test reload nginx", "sudo nginx -t && sudo systemctl reload nginx"],
        [
            "Tạo script hello service",
            "cat > /tmp/hello_service.sh && chmod +x /tmp/hello_service.sh",
        ],
        ["Tạo hello.service", "sudo nano /etc/systemd/system/hello.service"],
        ["Reload systemd", "sudo systemctl daemon-reload"],
        [
            "Enable và xem log hello",
            "sudo systemctl enable --now hello && sudo journalctl -u hello -f",
        ],
        [
            "Dọn dẹp hello service",
            "sudo systemctl disable --now hello; sudo rm /etc/systemd/system/hello.service; sudo systemctl daemon-reload",
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
                        <BookOpen className="text-indigo-400" /> Tóm tắt toàn
                        bài
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <SummaryBox
                        title="Điều khiển"
                        items={[
                            "systemctl start svc",
                            "systemctl stop svc",
                            "systemctl restart svc",
                            "systemctl reload svc",
                            "reload-or-restart",
                        ]}
                    />
                    <SummaryBox
                        title="Boot"
                        items={[
                            "systemctl enable svc",
                            "disable svc",
                            "enable --now svc",
                            "mask svc",
                            "unmask svc",
                        ]}
                    />
                    <SummaryBox
                        title="Kiểm tra/log"
                        items={[
                            "status svc",
                            "is-active svc",
                            "is-enabled svc",
                            "systemctl --failed",
                            "journalctl -u svc -f",
                        ]}
                    />
                    <SummaryBox
                        title="Unit file"
                        items={[
                            "/etc/systemd/system",
                            "daemon-reload",
                            "systemctl edit svc",
                            "systemctl cat svc",
                            "list-timers",
                        ]}
                    />
                </div>
                <div className="px-6 md:px-8 pb-8">
                    <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-2xl p-5 text-indigo-100">
                        <strong className="text-white">Quy tắc vàng:</strong>{" "}
                        Sau khi tạo/sửa unit file phải{" "}
                        <code>daemon-reload</code>; chỉ sửa config thì ưu tiên{" "}
                        <code>reload</code>; service mới nên dùng{" "}
                        <code>enable --now</code>; đường dẫn trong unit file nên
                        là đường dẫn tuyệt đối.
                    </div>
                </div>
            </div>
        </section>
    );
}

function SummaryBox({ title, items }) {
    return (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
            <h4 className="font-bold text-indigo-300 uppercase text-xs tracking-widest mb-4">
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
        question:
            "systemctl enable nginx và systemctl start nginx khác nhau thế nào?",
        options: [
            "enable đặt tự start khi boot; start khởi động ngay",
            "enable restart service; start mask service",
            "Không khác nhau",
            "start chỉ dùng cho timer",
        ],
        correct: 0,
        explanation:
            "enable tạo liên kết để service tự chạy khi boot. start chạy service ngay trong phiên hiện tại.",
    },
    {
        question: "Lệnh nào vừa enable boot vừa start service ngay?",
        options: [
            "systemctl enable --now nginx",
            "systemctl start --boot nginx",
            "systemctl mask --now nginx",
            "journalctl -u nginx -f",
        ],
        correct: 0,
        explanation: "enable --now là cách gọn nhất sau khi cài service mới.",
    },
    {
        question: "Khi nào nên dùng reload thay vì restart?",
        options: [
            "Khi chỉ đổi config và service hỗ trợ reload, để tránh downtime",
            "Khi muốn tắt máy",
            "Khi service bị mask",
            "Khi xóa unit file",
        ],
        correct: 0,
        explanation:
            "reload thường gửi SIGHUP hoặc lệnh reload để process đọc lại config mà không dừng toàn bộ.",
    },
    {
        question: "Service bị failed, lệnh nào nên dùng để tìm nguyên nhân?",
        options: [
            "systemctl status svc và journalctl -u svc -n 100",
            "df -h /home",
            "lscpu",
            "passwd -l svc",
        ],
        correct: 0,
        explanation:
            "status cho log cuối và trạng thái. journalctl cho log chi tiết theo service.",
    },
    {
        question: "mask khác disable thế nào?",
        options: [
            "disable chỉ không tự boot; mask chặn hoàn toàn không cho start",
            "mask chỉ đổi tên service",
            "disable xóa service",
            "Không khác nhau",
        ],
        correct: 0,
        explanation:
            "mask tạo symlink tới /dev/null, khiến service không start được cho đến khi unmask.",
    },
    {
        question:
            "Sau khi tạo /etc/systemd/system/myapp.service cần chạy gì trước khi start?",
        options: [
            "sudo systemctl daemon-reload",
            "sudo journalctl --vacuum-time=7d",
            "sudo lscpu",
            "sudo df -i",
        ],
        correct: 0,
        explanation:
            "daemon-reload yêu cầu systemd nạp lại unit files mới hoặc đã sửa.",
    },
    {
        question: "Type=simple và Type=forking khác nhau thế nào?",
        options: [
            "simple dùng process ExecStart làm process chính; forking dành cho daemon fork ra process con rồi process cha thoát",
            "simple là timer; forking là mount",
            "forking chỉ dùng cho journalctl",
            "Không khác nhau",
        ],
        correct: 0,
        explanation:
            "Nhiều app hiện đại dùng simple; nginx/apache truyền thống thường dùng forking.",
    },
    {
        question:
            "Lệnh nào xem 50 dòng log cuối của nginx và theo dõi tiếp realtime?",
        options: [
            "sudo journalctl -u nginx -n 50 -f",
            "sudo systemctl enable nginx",
            "sudo systemctl cat nginx",
            "sudo nginx -t -n 50",
        ],
        correct: 0,
        explanation: "-n 50 lấy 50 dòng cuối, -f follow realtime.",
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
                    <strong className="text-indigo-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu về systemctl.
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
                <span className="text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">
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
