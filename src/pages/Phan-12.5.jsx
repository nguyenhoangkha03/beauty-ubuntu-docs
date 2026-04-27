import React, { useState } from "react";
import {
    Activity,
    Cpu,
    MemoryStick,
    HardDrive,
    Network,
    Server,
    Terminal,
    FileText,
    ShieldAlert,
    PackageCheck,
    Info,
    CheckCircle2,
    XCircle,
    Copy,
    ChevronRight,
    RotateCcw,
    Sparkles,
    Bug,
    Wrench,
    ListChecks,
    Search,
    Gauge,
    Eye,
    Database,
    Globe,
    Lock,
    AlertTriangle,
    RefreshCw,
    Trash2,
    Timer,
    Zap,
    Boxes,
    Wifi,
    KeyRound,
    ScrollText,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-orange-500 selection:text-white pb-20">
            <header className="bg-slate-950/90 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-2xl">
                            🐧
                        </div>
                        <div>
                            <h1 className="text-lg md:text-xl font-bold text-white tracking-tight">
                                Khóa học Linux/Ubuntu
                            </h1>
                            <p className="text-xs text-slate-500 hidden sm:block">
                                Monitoring · Logs · Services · Troubleshooting
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 12
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 12.5
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" /> Hoàn
                        thành Phần 12 — Ubuntu Server & Triển khai
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Giám Sát Server <br />
                        <span className="text-orange-500">Cơ Bản</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Bạn sẽ biết kiểm tra nhanh{" "}
                        <code className="text-orange-300">CPU</code>,{" "}
                        <code className="text-orange-300">RAM</code>,{" "}
                        <code className="text-orange-300">Disk</code>,{" "}
                        <code className="text-orange-300">Network</code>,
                        service, log, port, tiến trình nặng và quy trình xử lý
                        khi website chậm, lỗi 502, đầy disk hoặc database chết.
                    </p>
                </section>

                <section className="bg-red-500/10 border border-red-500/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-5 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                        <ShieldAlert size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Không xử lý server bằng cách đoán mò
                        </h3>
                        <p className="text-red-100 leading-relaxed">
                            Khi server chậm hoặc website lỗi, đừng
                            restart/kill/xóa file bừa bãi. Hãy kiểm tra theo
                            lớp: tài nguyên → service → port → log → app/backend
                            → database → disk. Đặc biệt không xóa thủ công trong{" "}
                            <code className="text-white">/var/lib/mysql</code>,{" "}
                            <code className="text-white">
                                /var/lib/postgresql
                            </code>{" "}
                            hoặc{" "}
                            <code className="text-white">/var/lib/docker</code>{" "}
                            nếu chưa backup và chưa hiểu rõ.
                        </p>
                    </div>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <MonitoringConceptCard />
                    <HealthPicker />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="blue"
                        icon={<Activity size={22} />}
                        title="Giám sát server là gì?"
                        subtitle="Theo dõi CPU, RAM, disk, network, service và log để biết server đang khỏe hay đang gặp vấn đề."
                    />
                    <MonitoringIntroSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="green"
                        icon={<Gauge size={22} />}
                        title="Kiểm tra tổng quan hệ thống"
                        subtitle="Dùng uptime, nproc, lscpu, free -h, df -h và du để đọc tình trạng server nhanh."
                    />
                    <SystemOverviewSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="orange"
                        icon={<Cpu size={22} />}
                        title="Theo dõi tiến trình bằng top/htop/ps"
                        subtitle="Tìm process ăn CPU/RAM, hiểu PID, COMMAND, %CPU, %MEM và không kill bừa bãi."
                    />
                    <ProcessSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="purple"
                        icon={<Server size={22} />}
                        title="Kiểm tra service bằng systemctl"
                        subtitle="Kiểm tra Nginx, Apache, MySQL, PostgreSQL, Docker, PHP-FPM và hiểu start/stop/restart/reload/enable."
                    />
                    <ServiceSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="cyan"
                        icon={<ScrollText size={22} />}
                        title="Xem log hệ thống và log dịch vụ"
                        subtitle="Dùng journalctl, /var/log, access.log, error.log và auth.log để tìm nguyên nhân thay vì đoán."
                    />
                    <LogSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="yellow"
                        icon={<Network size={22} />}
                        title="Kiểm tra mạng và port"
                        subtitle="Dùng ss -tulpn, ping, curl -I để kiểm tra service có listen, Internet/DNS có ổn và HTTP/HTTPS trả mã gì."
                    />
                    <NetworkPortSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="pink"
                        icon={<KeyRound size={22} />}
                        title="Kiểm tra bảo mật đăng nhập SSH"
                        subtitle="Xem auth.log, phân biệt Accepted publickey và Failed password, đếm số lần SSH đăng nhập thất bại."
                    />
                    <SecurityLoginSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="8"
                        color="teal"
                        icon={<Wrench size={22} />}
                        title="Tình huống thực tế: chậm, 502, đầy disk, database chết"
                        subtitle="Các playbook từng bước để debug website chậm, 502 Bad Gateway, No space left on device và MySQL failed."
                    />
                    <PlaybookSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="9"
                        color="red"
                        icon={<Bug size={22} />}
                        title="Lỗi phổ biến và cách xử lý"
                        subtitle="Nhìn nhầm RAM free, disk đầy vì Docker/log, restart service không đọc log, 502 nhưng restart Nginx liên tục."
                    />
                    <CommonErrorsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="10"
                        color="indigo"
                        icon={<Wrench size={22} />}
                        title="Bài tập thực hành"
                        subtitle="Kiểm tra sức khỏe server, web server, thư mục lớn và debug lỗi 502 theo quy trình."
                    />
                    <PracticeSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="11"
                        color="emerald"
                        icon={<ListChecks size={22} />}
                        title="Tóm tắt nhanh"
                        subtitle="Bảng lệnh monitoring, service, log, port và checklist khi website chậm/502/disk đầy."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <PackageCheck className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức bài 12.5
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Ôn lại uptime/load, available RAM, df/du,
                                    top/htop, systemctl, journalctl, ss, 502,
                                    disk full và Docker prune.
                                </p>
                            </div>
                            <div className="hidden sm:block text-3xl">🧪</div>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                <section className="pt-4">
                    <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-green-500/20 border border-orange-500/20 rounded-3xl p-8 text-center">
                        <div className="text-5xl mb-4">🎉</div>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                            Hoàn thành Phần 12 — Ubuntu Server & Triển khai
                        </h3>
                        <p className="text-slate-400 max-w-3xl mx-auto mb-6">
                            Bạn đã học Desktop vs Server, Apache/Nginx,
                            MySQL/PostgreSQL, Domain + SSL Let’s Encrypt và giám
                            sát server cơ bản — đủ nền tảng để triển khai và vận
                            hành một server Ubuntu thực tế.
                        </p>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                            Bài tiếp theo: Project triển khai server thực tế A-Z{" "}
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}

function SectionTitle({ number, color, icon, title, subtitle }) {
    const colorMap = {
        blue: "bg-blue-500/20 text-blue-400",
        green: "bg-green-500/20 text-green-400",
        orange: "bg-orange-500/20 text-orange-400",
        purple: "bg-purple-500/20 text-purple-400",
        cyan: "bg-cyan-500/20 text-cyan-400",
        yellow: "bg-yellow-500/20 text-yellow-400",
        pink: "bg-pink-500/20 text-pink-400",
        teal: "bg-teal-500/20 text-teal-400",
        red: "bg-red-500/20 text-red-400",
        indigo: "bg-indigo-500/20 text-indigo-400",
        emerald: "bg-emerald-500/20 text-emerald-400",
    };
    return (
        <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                <span
                    className={`${colorMap[color]} p-2 rounded-xl inline-flex items-center gap-2`}
                >
                    <span className="text-sm font-black">{number}</span>
                    {icon}
                </span>
                {title}
            </h3>
            <p className="text-slate-400 mt-2 max-w-3xl">{subtitle}</p>
        </div>
    );
}

function CodeBlock({ title, code, note }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                    <Terminal size={16} className="text-orange-400" /> {title}
                </div>
                <Copy size={15} className="text-slate-600" />
            </div>
            <pre className="p-5 overflow-x-auto text-sm leading-6 text-slate-200">
                <code>{code}</code>
            </pre>
            {note && (
                <div className="px-5 pb-5 text-xs text-slate-500">{note}</div>
            )}
        </div>
    );
}

function MonitoringConceptCard() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-orange-500/15 text-orange-400 rounded-2xl flex items-center justify-center">
                    <Activity size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        Server có “sức khỏe”
                    </h3>
                    <p className="text-slate-500 text-sm">
                        CPU, RAM, disk, network, service, log
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <MiniCard
                    icon={<Cpu />}
                    title="CPU Load"
                    desc="Server có đang quá tải xử lý không?"
                />
                <MiniCard
                    icon={<MemoryStick />}
                    title="RAM Available"
                    desc="Bộ nhớ còn dùng thực tế bao nhiêu?"
                />
                <MiniCard
                    icon={<HardDrive />}
                    title="Disk Use%"
                    desc="Ổ / có gần đầy không?"
                />
                <MiniCard
                    icon={<ScrollText />}
                    title="Logs"
                    desc="Service/app đang báo lỗi gì?"
                />
            </div>
            <div className="bg-black border border-slate-800 rounded-2xl p-5 font-mono text-sm text-green-400 whitespace-pre-wrap">{`Không đoán mò:\n1. Tài nguyên\n2. Service\n3. Port\n4. Log\n5. App/Backend\n6. Database\n7. Disk/File`}</div>
        </div>
    );
}

function MiniCard({ icon, title, desc }) {
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
            <div className="text-orange-400 mb-3">{icon}</div>
            <div className="font-bold text-white mb-1">{title}</div>
            <p className="text-xs text-slate-500">{desc}</p>
        </div>
    );
}

function HealthPicker() {
    const [item, setItem] = useState("cpu");
    const data = {
        cpu: {
            title: "CPU / Load",
            icon: "🫀",
            command: "uptime\nnproc\nlscpu",
            read: "So sánh load average với số CPU core.",
        },
        ram: {
            title: "RAM",
            icon: "🧠",
            command: "free -h",
            read: "Nhìn cột available, không chỉ nhìn free.",
        },
        disk: {
            title: "Disk",
            icon: "💾",
            command: "df -h\nsudo du -h --max-depth=1 /var | sort -h",
            read: "Nếu / trên 90%, cần kiểm tra log, Docker, database, upload.",
        },
        service: {
            title: "Service",
            icon: "⚙️",
            command: "sudo systemctl status nginx\njournalctl -u nginx -n 50",
            read: "Nếu service failed, đọc log trước khi restart liên tục.",
        },
        port: {
            title: "Network/Port",
            icon: "🌐",
            command: "sudo ss -tulpn\ncurl -I https://example.com",
            read: "Kiểm tra port 22/80/443/3306/5432/backend có listen không.",
        },
    };
    const current = data[item];
    return (
        <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Gauge className="text-orange-400" /> Bộ kiểm tra nhanh
            </h3>
            <p className="text-slate-400 mb-6">
                Chọn một nhóm để xem lệnh kiểm tra và cách đọc.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                {Object.keys(data).map((key) => (
                    <button
                        key={key}
                        onClick={() => setItem(key)}
                        className={`p-3 rounded-xl border font-bold text-sm ${item === key ? "bg-orange-500 text-white border-orange-500" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"}`}
                    >
                        {data[key].title}
                    </button>
                ))}
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                <div className="text-4xl mb-3">{current.icon}</div>
                <div className="font-bold text-white text-2xl mb-2">
                    {current.title}
                </div>
                <pre className="bg-black/50 border border-slate-800 rounded-xl p-4 text-sm text-green-400 overflow-x-auto mb-4">
                    <code>{current.command}</code>
                </pre>
                <p className="text-slate-400 text-sm">{current.read}</p>
            </div>
        </div>
    );
}

function MonitoringIntroSection() {
    return (
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
            <CodeBlock
                title="monitoring-model.txt"
                code={`Người dùng\n   ↓\nInternet / Domain / DNS\n   ↓\nNginx hoặc Apache\n   ↓\nBackend App\n   ↓\nDatabase\n   ↓\nDisk / Log / File upload\n\nNếu website lỗi, nguyên nhân có thể ở bất kỳ tầng nào.`}
            />
            <CheatCard
                title="Khi nào cần kiểm tra?"
                rows={[
                    ["Website chậm", "kiểm tra load/process/log"],
                    ["API timeout", "kiểm tra backend/database"],
                    ["502 Bad Gateway", "backend/upstream chết"],
                    ["No space left", "disk đầy"],
                    ["Docker container chết", "docker ps/logs/systemd"],
                    ["SSL không renew", "certbot/log/port 80/disk"],
                ]}
            />
        </div>
    );
}

function SystemOverviewSection() {
    const [tab, setTab] = useState("quick");
    const tabs = [
        ["quick", "Một lệnh nhanh"],
        ["load", "Load/CPU"],
        ["ram", "RAM"],
        ["disk", "Disk"],
        ["du", "Thư mục lớn"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="green">
            {tab === "quick" && (
                <CodeBlock
                    title="quick-health-check.sh"
                    code={`uptime && echo "---- RAM ----" && free -h && echo "---- DISK ----" && df -h\n\n# Dùng khi cần nhìn nhanh:\n# - Server chạy bao lâu?\n# - Load có cao không?\n# - RAM available còn bao nhiêu?\n# - Disk / đã dùng bao nhiêu %?`}
                />
            )}
            {tab === "load" && (
                <CodeBlock
                    title="check-load-cpu.sh"
                    code={`uptime\n# load average: 0.35, 0.42, 0.50\n\nnproc\n# 2\n\nlscpu\n# CPU(s): 2\n\n# Hiểu đơn giản:\n# 1 core: load 1.0 ≈ gần đầy\n# 2 core: load 2.0 ≈ gần đầy\n# load cao hơn số core nhiều lần → có thể quá tải`}
                />
            )}
            {tab === "ram" && (
                <CodeBlock
                    title="check-ram.sh"
                    code={`free -h\n\n# Cột quan trọng nhất với người mới:\n# available\n\n# Linux dùng RAM rảnh để cache, nên không chỉ nhìn free.\n# Nếu free thấp nhưng available còn tốt, chưa chắc server hết RAM.`}
                />
            )}
            {tab === "disk" && (
                <CodeBlock
                    title="check-disk.sh"
                    code={`df -h\n\n# Chú ý dòng mounted on /\n# Ví dụ:\n# /dev/sda1  40G  28G  10G  74%  /\n\n# Nếu / đạt 90% trở lên, cần xử lý.\n# Nếu 100%, service/database/app có thể lỗi ghi file.`}
                />
            )}
            {tab === "du" && (
                <CodeBlock
                    title="find-large-directories.sh"
                    code={`# Tìm thư mục lớn trong /\nsudo du -h --max-depth=1 / 2>/dev/null | sort -h\n\n# /var thường chứa log, cache, Docker, database\nsudo du -h --max-depth=1 /var 2>/dev/null | sort -h\n\n# Tìm log lớn\nsudo find /var/log -type f -size +100M -exec ls -lh {} \;`}
                />
            )}
        </Tabbed>
    );
}

function ProcessSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="process-monitoring.sh"
                code={`top\n# Phím trong top:\n# P  → sắp xếp theo CPU\n# M  → sắp xếp theo RAM\n# k  → kill process, cẩn thận\n# q  → thoát\n\nsudo apt install htop -y\nhtop\n# F6 → chọn cột sắp xếp\n# F9 → kill process\n# F10 → thoát\n# /  → tìm process\n\n# Tìm process theo tên\nps aux | grep nginx\nps aux | grep mysql\nps aux | grep node\n\n# Trước khi kill PID:\nps -p PID -f`}
                note="Không dùng kill -9 nếu chưa biết process là gì. Với service, thường nên dùng systemctl restart service hoặc công cụ quản lý app như PM2/Docker."
            />
            <CheatCard
                title="Cột quan trọng trong top"
                rows={[
                    ["PID", "mã tiến trình"],
                    ["USER", "user chạy process"],
                    ["%CPU", "CPU đang dùng"],
                    ["%MEM", "RAM đang dùng"],
                    ["COMMAND", "tên chương trình"],
                ]}
            />
        </div>
    );
}

function ServiceSection() {
    const [tab, setTab] = useState("status");
    const tabs = [
        ["status", "Status"],
        ["common", "Service thường gặp"],
        ["actions", "Start/Stop"],
        ["reload", "Restart vs Reload"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="purple">
            {tab === "status" && (
                <CodeBlock
                    title="systemctl-status.sh"
                    code={`sudo systemctl status nginx\n\n# Dòng quan trọng:\n# Active: active (running) → đang chạy\n# Active: failed           → lỗi\n# Active: inactive         → chưa chạy`}
                />
            )}
            {tab === "common" && (
                <CodeBlock
                    title="common-services.sh"
                    code={`sudo systemctl status nginx\nsudo systemctl status apache2\nsudo systemctl status mysql\nsudo systemctl status postgresql\nsudo systemctl status docker\nsudo systemctl status php8.1-fpm`}
                />
            )}
            {tab === "actions" && (
                <CodeBlock
                    title="service-actions.sh"
                    code={`sudo systemctl start nginx\nsudo systemctl stop nginx\nsudo systemctl restart nginx\nsudo systemctl reload nginx\nsudo systemctl enable nginx\nsudo systemctl disable nginx`}
                />
            )}
            {tab === "reload" && (
                <CodeBlock
                    title="restart-vs-reload.txt"
                    code={`start   → chạy service\nstop    → dừng service\nrestart → dừng rồi chạy lại\nreload  → nạp lại cấu hình, ít gián đoạn hơn restart\nenable  → tự chạy khi boot\ndisable → không tự chạy khi boot\n\nVới Nginx/Apache, sau khi sửa config:\n1. Test config\n2. Reload service`}
                />
            )}
        </Tabbed>
    );
}

function LogSection() {
    const [tab, setTab] = useState("journal");
    const tabs = [
        ["journal", "journalctl"],
        ["service", "Log service"],
        ["varlog", "/var/log"],
        ["nginx", "Nginx log"],
        ["apache", "Apache log"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="cyan">
            {tab === "journal" && (
                <CodeBlock
                    title="journalctl-basics.sh"
                    code={`journalctl -xe\n\n# Xem log hệ thống gần đây.\n# Ví dụ có thể thấy:\n# nginx: configuration file test failed\n# nginx.service: Failed with result 'exit-code'`}
                />
            )}
            {tab === "service" && (
                <CodeBlock
                    title="service-logs.sh"
                    code={`journalctl -u nginx\njournalctl -u nginx -n 50\njournalctl -u nginx -f\n\njournalctl -u apache2 -n 50\njournalctl -u mysql -n 50\njournalctl -u postgresql -n 50\njournalctl -u docker -n 50`}
                />
            )}
            {tab === "varlog" && (
                <CodeBlock
                    title="var-log-common.sh"
                    code={`ls -lh /var/log\n\n# Log phổ biến:\n# /var/log/syslog       → log hệ thống chung\n# /var/log/auth.log     → SSH, sudo, login\n# /var/log/nginx/       → log Nginx\n# /var/log/apache2/     → log Apache\n# /var/log/mysql/       → log MySQL nếu có\n# /var/log/postgresql/  → log PostgreSQL`}
                />
            )}
            {tab === "nginx" && (
                <CodeBlock
                    title="nginx-logs.sh"
                    code={`sudo tail -f /var/log/nginx/access.log\nsudo tail -f /var/log/nginx/error.log\n\n# Xem 50 dòng cuối\nsudo tail -n 50 /var/log/nginx/access.log\n\n# Lọc request lỗi 500\nsudo awk '$9 == 500 {print}' /var/log/nginx/access.log\n\n# Lọc request lỗi 404\nsudo awk '$9 == 404 {print}' /var/log/nginx/access.log`}
                />
            )}
            {tab === "apache" && (
                <CodeBlock
                    title="apache-logs.sh"
                    code={`sudo tail -f /var/log/apache2/access.log\nsudo tail -f /var/log/apache2/error.log\n\n# Xem log Apache từ systemd\njournalctl -u apache2 -n 50`}
                />
            )}
        </Tabbed>
    );
}

function NetworkPortSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="network-and-ports.sh"
                code={`# Xem các port đang lắng nghe\nsudo ss -tulpn\n\n# Kiểm tra port cụ thể\nsudo ss -tulpn | grep ':22'\nsudo ss -tulpn | grep ':80'\nsudo ss -tulpn | grep ':443'\nsudo ss -tulpn | grep ':3306'\nsudo ss -tulpn | grep ':5432'\nsudo ss -tulpn | grep ':3000'\n\n# Kiểm tra Internet\nping -c 4 8.8.8.8\n\n# Kiểm tra DNS\nping -c 4 google.com\n\n# Kiểm tra HTTP/HTTPS\ncurl -I http://example.com\ncurl -I https://example.com`}
            />
            <CheatCard
                title="Port thường gặp"
                rows={[
                    ["22", "SSH"],
                    ["80", "HTTP"],
                    ["443", "HTTPS"],
                    ["3306", "MySQL"],
                    ["5432", "PostgreSQL"],
                    ["3000", "Node.js backend local"],
                ]}
            />
        </div>
    );
}

function SecurityLoginSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="ssh-auth-log.sh"
                code={`# Xem log đăng nhập SSH realtime\nsudo tail -f /var/log/auth.log\n\n# Log mẫu:\n# Accepted publickey for ubuntu from 113.22.10.5 port 51234 ssh2\n# Failed password for root from 45.10.20.30 port 40222 ssh2\n\n# Đếm số lần SSH failed\nsudo grep "Failed password" /var/log/auth.log | wc -l`}
            />
            <CheatCard
                title="Ý nghĩa log SSH"
                rows={[
                    ["Accepted publickey", "đăng nhập SSH thành công bằng key"],
                    ["Failed password", "có người thử sai mật khẩu"],
                    ["for root", "đang thử user root"],
                    ["Tăng nhanh", "có thể bị brute-force"],
                ]}
            />
        </div>
    );
}

function PlaybookSection() {
    const [tab, setTab] = useState("slow");
    const tabs = [
        ["slow", "Website chậm"],
        ["502", "502 Bad Gateway"],
        ["disk", "Disk đầy"],
        ["mysql", "MySQL chết"],
        ["codes", "404/500"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="teal">
            {tab === "slow" && (
                <CodeBlock
                    title="playbook-website-slow.sh"
                    code={`# 1. Xem load\nuptime\nnproc\n\n# 2. Xem process ăn CPU/RAM\ntop\n# hoặc\nhtop\n\n# 3. Xem request gần đây\nsudo tail -f /var/log/nginx/access.log\n\n# 4. Nếu PHP-FPM treo, restart tạm\nsudo systemctl restart php8.1-fpm\n\n# Nếu Node.js qua PM2\npm2 list\npm2 restart all\n\n# Nếu Docker\ndocker ps\ndocker restart container_name\n\n# Restart chỉ là tạm thời. Về lâu dài cần tối ưu code/query/cache/rate limit.`}
                />
            )}
            {tab === "502" && (
                <CodeBlock
                    title="playbook-502-bad-gateway.sh"
                    code={`# 502 thường là: Browser → Nginx ✅ → Backend ❌\n\n# 1. Kiểm tra Nginx\nsudo systemctl status nginx\n\n# 2. Xem error log\nsudo tail -n 50 /var/log/nginx/error.log\n# connect() failed (111: Connection refused) while connecting to upstream\n\n# 3. Kiểm tra backend port, ví dụ 3000\nsudo ss -tulpn | grep ':3000'\n\n# 4. Restart backend theo cách bạn chạy app\npm2 restart app_name\nsudo systemctl restart myapp\ndocker restart myapp`}
                />
            )}
            {tab === "disk" && (
                <CodeBlock
                    title="playbook-disk-full.sh"
                    code={`# Triệu chứng:\n# No space left on device\n\n# 1. Kiểm tra disk\ndf -h\n\n# 2. Tìm thư mục lớn\nsudo du -h --max-depth=1 / 2>/dev/null | sort -h\nsudo du -h --max-depth=1 /var 2>/dev/null | sort -h\n\n# 3. Nếu Docker lớn\ndocker system df\ndocker system prune\n\n# Cảnh báo mạnh:\n# docker system prune -a --volumes\n# Có thể xóa volume không dùng, cần hiểu rõ trước khi chạy.\n\n# 4. Nếu log lớn\nsudo find /var/log -type f -size +100M -exec ls -lh {} \;\nsudo truncate -s 0 /var/log/nginx/access.log`}
                />
            )}
            {tab === "mysql" && (
                <CodeBlock
                    title="playbook-mysql-failed.sh"
                    code={`# Website báo:\n# SQLSTATE[HY000] [2002] Connection refused\n\n# 1. Kiểm tra MySQL\nsudo systemctl status mysql\n\n# 2. Xem log MySQL\njournalctl -u mysql -n 100\n\n# Nếu thấy No space left on device:\ndf -h\n\n# 3. Giải phóng dung lượng rồi restart\nsudo systemctl restart mysql\nsudo systemctl status mysql`}
                />
            )}
            {tab === "codes" && (
                <CodeBlock
                    title="playbook-nginx-status-codes.sh"
                    code={`# Xem 50 dòng access log cuối\nsudo tail -n 50 /var/log/nginx/access.log\n\n# Lọc lỗi 500\nsudo awk '$9 == 500 {print}' /var/log/nginx/access.log\n\n# Lọc lỗi 404\nsudo awk '$9 == 404 {print}' /var/log/nginx/access.log\n\n# Mã HTTP thường gặp:\n# 200     thành công\n# 301/302 redirect\n# 403     bị cấm\n# 404     không tìm thấy\n# 500     lỗi server\n# 502     bad gateway\n# 504     gateway timeout`}
                />
            )}
        </Tabbed>
    );
}

function CommonErrorsSection() {
    const [tab, setTab] = useState("ram");
    const tabs = [
        ["ram", "Nhìn nhầm RAM"],
        ["disk", "Disk đầy"],
        ["service", "Service failed"],
        ["502", "502 sai hướng"],
        ["firewall", "Firewall/cloud"],
        ["danger", "Lệnh nguy hiểm"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="red">
            {tab === "ram" && (
                <CodeBlock
                    title="free-ram-misread.sh"
                    code={`free -h\n# Mem: total 2.0Gi, used 1.6Gi, free 100Mi, buff/cache 300Mi, available 900Mi\n\n# Người mới hay hoảng vì free = 100Mi.\n# Cách đọc đúng: nhìn available = 900Mi.\n# Linux dùng RAM rảnh để cache, không phải lỗi.`}
                />
            )}
            {tab === "disk" && (
                <CodeBlock
                    title="disk-full-log-docker.sh"
                    code={`df -h\nsudo du -h --max-depth=1 /var 2>/dev/null | sort -h\n\n# Nếu log lớn:\nsudo find /var/log -type f -size +100M -exec ls -lh {} \;\n\n# Nếu Docker lớn:\ndocker system df\ndocker system prune\n\n# Không xóa bừa /var/lib/mysql, /var/lib/postgresql, /var/lib/docker.`}
                />
            )}
            {tab === "service" && (
                <CodeBlock
                    title="service-restart-loop.sh"
                    code={`sudo systemctl status nginx\n# Active: failed\n\n# Không restart liên tục. Debug đúng:\njournalctl -u nginx -n 100\nsudo nginx -t\n\n# Apache:\nsudo apache2ctl configtest\n\n# Sửa nguyên nhân rồi mới reload/restart.`}
                />
            )}
            {tab === "502" && (
                <CodeBlock
                    title="502-not-nginx-dead.sh"
                    code={`# 502 Bad Gateway thường không phải Nginx chết.\n# Thường là backend phía sau không phản hồi.\n\nsudo systemctl status nginx\nsudo tail -n 50 /var/log/nginx/error.log\nsudo ss -tulpn | grep ':3000'\n\n# Nếu backend không listen, restart backend/app/container.`}
                />
            )}
            {tab === "firewall" && (
                <CodeBlock
                    title="service-running-but-external-fail.sh"
                    code={`# Service local chạy nhưng bên ngoài không vào được\n\nsudo ss -tulpn | grep ':80'\nsudo ufw status\n\n# Nếu dùng cloud/VPS, còn phải kiểm tra:\n# - Security Group\n# - Cloud Firewall\n# - Provider firewall\n# - DNS trỏ đúng IP chưa`}
                />
            )}
            {tab === "danger" && (
                <CodeBlock
                    title="dangerous-commands-warning.sh"
                    code={`# Không kill bừa:\nsudo kill -9 PID\n\n# Trước khi kill:\nps -p PID -f\n\n# Không xóa bừa:\nsudo rm -rf /var/lib/mysql\nsudo rm -rf /var/lib/postgresql\nsudo rm -rf /var/lib/docker\n\n# Cẩn thận Docker volume:\ndocker system prune -a --volumes\n# Có thể mất dữ liệu volume không dùng.`}
                />
            )}
        </Tabbed>
    );
}

function PracticeSection() {
    return (
        <div className="grid lg:grid-cols-4 gap-4">
            <PracticeCard
                level="Dễ"
                title="Sức khỏe server"
                code={`uptime\nnproc\nfree -h\ndf -h`}
                tasks={[
                    "Server đã chạy bao lâu?",
                    "Có bao nhiêu CPU core?",
                    "RAM available bao nhiêu?",
                    "Disk / dùng bao nhiêu %?",
                ]}
            />
            <PracticeCard
                level="Trung bình"
                title="Web server"
                code={`sudo systemctl status nginx\nsudo ss -tulpn | grep ':80'\nsudo ss -tulpn | grep ':443'\ncurl -I http://example.com\ncurl -I https://example.com`}
                tasks={[
                    "Nginx/Apache active không?",
                    "Port 80/443 listen không?",
                    "HTTP status là gì?",
                    "Có cần xem error log không?",
                ]}
            />
            <PracticeCard
                level="Trung bình"
                title="Tìm thư mục lớn"
                code={`df -h\nsudo du -h --max-depth=1 / 2>/dev/null | sort -h\nsudo du -h --max-depth=1 /var 2>/dev/null | sort -h`}
                tasks={[
                    "/ có đầy không?",
                    "Thư mục nào lớn nhất?",
                    "/var/log hay /var/lib lớn?",
                    "Có Docker/database/log lớn không?",
                ]}
            />
            <PracticeCard
                level="Nâng cao"
                title="Debug 502"
                code={`sudo systemctl status nginx\nsudo tail -n 50 /var/log/nginx/error.log\nsudo ss -tulpn | grep ':3000'\npm2 list\ndocker ps -a`}
                tasks={[
                    "Nginx còn chạy không?",
                    "Error log báo upstream nào?",
                    "Backend port có listen không?",
                    "Restart backend bằng gì?",
                ]}
            />
        </div>
    );
}

function PracticeCard({ level, title, code, tasks }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <div className="text-xs text-orange-300 font-bold uppercase mb-2">
                {level}
            </div>
            <h4 className="font-bold text-white mb-3">{title}</h4>
            <pre className="bg-black/50 border border-slate-800 rounded-xl p-3 text-xs text-green-400 overflow-x-auto mb-4">
                <code>{code}</code>
            </pre>
            <ul className="space-y-2 text-sm text-slate-400">
                {tasks.map((t) => (
                    <li key={t} className="flex gap-2">
                        <CheckCircle2
                            size={15}
                            className="text-green-400 shrink-0 mt-0.5"
                        />
                        {t}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Tabbed({ tabs, tab, setTab, color, children }) {
    const activeMap = {
        green: "bg-green-500",
        purple: "bg-purple-500",
        cyan: "bg-cyan-500",
        teal: "bg-teal-500",
        red: "bg-red-500",
    };
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                {tabs.map(([id, label]) => (
                    <button
                        key={id}
                        onClick={() => setTab(id)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold ${tab === id ? `${activeMap[color]} text-white` : "bg-slate-900 text-slate-400 hover:text-slate-200"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="p-5">{children}</div>
        </div>
    );
}

function CheatCard({ title, rows }) {
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 h-fit">
            <h4 className="font-bold text-white mb-4">{title}</h4>
            <div className="space-y-2">
                {rows.map(([cmd, desc]) => (
                    <div
                        key={cmd + desc}
                        className="bg-slate-900 border border-slate-800 rounded-xl p-3"
                    >
                        <code className="text-orange-300 text-sm">{cmd}</code>
                        <div className="text-xs text-slate-500 mt-1">
                            {desc}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function SummaryGrid() {
    const groups = [
        {
            title: "Hệ thống",
            rows: [
                ["uptime", "load"],
                ["nproc", "CPU core"],
                ["lscpu", "CPU info"],
                ["free -h", "RAM"],
                ["df -h", "disk"],
            ],
        },
        {
            title: "Dung lượng",
            rows: [
                ["du --max-depth=1", "thư mục lớn"],
                ["/var/log", "log"],
                ["/var/lib/docker", "Docker data"],
                ["docker system df", "Docker size"],
                ["truncate -s 0", "làm rỗng log"],
            ],
        },
        {
            title: "Process",
            rows: [
                ["top", "realtime"],
                ["htop", "dễ nhìn"],
                ["ps aux | grep", "tìm process"],
                ["ps -p PID -f", "xem PID"],
                ["kill -9", "rất cẩn thận"],
            ],
        },
        {
            title: "Service/log",
            rows: [
                ["systemctl status", "trạng thái"],
                ["journalctl -u", "log service"],
                ["journalctl -xe", "log hệ thống"],
                ["tail -f access.log", "request"],
                ["tail -f error.log", "lỗi"],
            ],
        },
        {
            title: "Network",
            rows: [
                ["ss -tulpn", "port listen"],
                ["ping 8.8.8.8", "Internet"],
                ["ping google.com", "DNS"],
                ["curl -I", "HTTP header"],
                ["ufw status", "firewall"],
            ],
        },
    ];
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {groups.map((g) => (
                <div
                    key={g.title}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-5"
                >
                    <h4 className="font-bold text-white mb-4">{g.title}</h4>
                    <div className="space-y-2">
                        {g.rows.map(([cmd, desc]) => (
                            <div
                                key={cmd + desc}
                                className="bg-slate-950 border border-slate-800 rounded-xl p-3"
                            >
                                <code className="text-orange-300 text-sm">
                                    {cmd}
                                </code>
                                <div className="text-xs text-slate-500 mt-1">
                                    {desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

const quizQuestions = [
    {
        question:
            "Khi xem RAM bằng free -h, cột nào quan trọng nhất để biết RAM còn dùng thực tế?",
        options: ["available", "free", "shared", "total"],
        correct: 0,
        explanation:
            "Linux dùng RAM rảnh để cache, nên available phản ánh RAM còn có thể dùng thực tế tốt hơn free.",
    },
    {
        question:
            "Nếu server có 2 CPU core, load average khoảng bao nhiêu là gần đầy?",
        options: [
            "Khoảng 2.0",
            "Khoảng 0.1",
            "Khoảng 20.0 mới đáng lo",
            "Không liên quan số core",
        ],
        correct: 0,
        explanation:
            "Load nên so với số CPU core; 2 core thì load 2.0 là gần mức đầy.",
    },
    {
        question: "Lệnh nào xem dung lượng phân vùng disk?",
        options: ["df -h", "free -h", "nproc", "journalctl -xe"],
        correct: 0,
        explanation:
            "df -h hiển thị dung lượng filesystem, Use%, và mount point như /.",
    },
    {
        question: "Lệnh nào tìm thư mục lớn trong /var?",
        options: [
            "sudo du -h --max-depth=1 /var 2>/dev/null | sort -h",
            "uptime",
            "systemctl status /var",
            "curl -I /var",
        ],
        correct: 0,
        explanation:
            "du đo dung lượng thư mục; sort -h sắp xếp theo dung lượng dễ đọc.",
    },
    {
        question: "502 Bad Gateway với Nginx thường nghĩa là gì?",
        options: [
            "Nginx còn chạy nhưng backend/upstream phía sau lỗi",
            "DNS chưa trỏ IP",
            "RAM free thấp",
            "SSH sai key",
        ],
        correct: 0,
        explanation:
            "502 thường xảy ra khi reverse proxy không kết nối được backend như 127.0.0.1:3000.",
    },
    {
        question: "Khi service failed, bước debug đúng là gì?",
        options: [
            "Xem systemctl status và journalctl -u service trước",
            "Restart liên tục",
            "Xóa /var/lib",
            "Tắt firewall ngay",
        ],
        correct: 0,
        explanation:
            "Đọc log giúp tìm nguyên nhân thật trước khi restart hoặc sửa cấu hình.",
    },
    {
        question:
            "Không nên xóa thủ công thư mục nào nếu chưa backup và chưa hiểu rõ?",
        options: [
            "/var/lib/mysql",
            "/tmp/test-demo",
            "~/Downloads",
            "README.md",
        ],
        correct: 0,
        explanation:
            "/var/lib/mysql chứa dữ liệu MySQL, xóa nhầm có thể mất database.",
    },
    {
        question: "Lệnh nào xem các port đang lắng nghe?",
        options: ["sudo ss -tulpn", "df -h", "free -h", "lscpu"],
        correct: 0,
        explanation:
            "ss -tulpn hiển thị TCP/UDP listening ports và process liên quan.",
    },
];

function InteractiveQuiz() {
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const q = quizQuestions[current];
    const choose = (idx) => {
        if (selected !== null) return;
        setSelected(idx);
        if (idx === q.correct) setScore((s) => s + 1);
    };
    const next = () => {
        if (current === quizQuestions.length - 1) setFinished(true);
        else {
            setCurrent((c) => c + 1);
            setSelected(null);
        }
    };
    const reset = () => {
        setCurrent(0);
        setSelected(null);
        setScore(0);
        setFinished(false);
    };
    if (finished)
        return (
            <div className="text-center min-h-[280px] flex flex-col items-center justify-center animate-in zoom-in duration-300">
                <div className="text-6xl mb-4">
                    {score === quizQuestions.length ? "🏆" : "👏"}
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                    Hoàn thành!
                </h4>
                <p className="text-slate-400 mb-6">
                    Bạn trả lời đúng{" "}
                    <strong className="text-orange-400">
                        {score}/{quizQuestions.length}
                    </strong>{" "}
                    câu.
                </p>
                <button
                    onClick={reset}
                    className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold inline-flex items-center gap-2"
                >
                    <RotateCcw size={18} /> Làm lại quiz
                </button>
            </div>
        );
    return (
        <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-6 text-sm">
                <span className="text-orange-300 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
                    Câu {current + 1}/{quizQuestions.length}
                </span>
                <span className="text-slate-500">
                    Điểm: <strong className="text-white">{score}</strong>
                </span>
            </div>
            <h4 className="text-xl font-bold text-white mb-6 leading-snug">
                {q.question}
            </h4>
            <div className="space-y-3">
                {q.options.map((opt, idx) => {
                    let cls =
                        "w-full text-left p-4 rounded-xl border transition-all text-sm ";
                    if (selected === null)
                        cls +=
                            "bg-slate-950 border-slate-800 hover:bg-slate-800 text-slate-300";
                    else if (idx === q.correct)
                        cls +=
                            "bg-green-500/10 border-green-500/40 text-green-300";
                    else if (idx === selected)
                        cls += "bg-red-500/10 border-red-500/40 text-red-300";
                    else
                        cls +=
                            "bg-slate-950/50 border-slate-900 text-slate-600";
                    return (
                        <button
                            key={opt}
                            onClick={() => choose(idx)}
                            disabled={selected !== null}
                            className={cls}
                        >
                            <span className="text-slate-500 font-mono mr-2">
                                {String.fromCharCode(65 + idx)}.
                            </span>
                            {opt}
                        </button>
                    );
                })}
            </div>
            {selected !== null && (
                <div className="mt-6 pt-6 border-t border-slate-800 animate-in fade-in slide-in-from-bottom-2">
                    <div
                        className={`rounded-xl p-4 text-sm mb-5 flex gap-3 ${selected === q.correct ? "bg-green-500/10 border border-green-500/20 text-green-200" : "bg-orange-500/10 border border-orange-500/20 text-orange-200"}`}
                    >
                        <Info size={18} className="shrink-0 mt-0.5" />
                        <div>
                            <strong className="text-white block mb-1">
                                {selected === q.correct
                                    ? "Chính xác!"
                                    : "Giải thích"}
                            </strong>
                            {q.explanation}
                        </div>
                    </div>
                    <button
                        onClick={next}
                        className="w-full md:w-auto md:px-8 py-3 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-bold ml-auto block"
                    >
                        {current === quizQuestions.length - 1
                            ? "Xem kết quả"
                            : "Câu tiếp theo"}
                    </button>
                </div>
            )}
        </div>
    );
}
