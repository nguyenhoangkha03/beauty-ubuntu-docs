import React, { useState } from "react";
import {
    AlertTriangle,
    BookOpen,
    CheckCircle2,
    ChevronRight,
    ClipboardCheck,
    Code2,
    Database,
    Eye,
    FileText,
    Filter,
    Globe2,
    Info,
    Layers,
    ListChecks,
    Lock,
    Network,
    RefreshCcw,
    RotateCcw,
    Search,
    Server,
    Shield,
    ShieldAlert,
    ShieldCheck,
    TerminalSquare,
    Trash2,
    Unlock,
    Wifi,
    Zap,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-red-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 border-b border-slate-800 sticky top-0 z-50 backdrop-blur">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🐧</span>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Linux/Ubuntu
                            </h1>
                            <p className="text-xs text-slate-500 hidden md:block">
                                UFW, firewall policy, allow/deny, logging và bảo
                                vệ SSH
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400 hidden md:inline-block">
                            Bài trước: 6.4
                        </span>
                        <div className="text-sm font-medium text-red-400 bg-red-400/10 px-3 py-1 rounded-full border border-red-400/20">
                            Phần 6.5
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <Hero />

                <section className="space-y-6">
                    <SectionTitle
                        n="1"
                        color="red"
                        icon={<Shield size={22} />}
                        title="UFW là gì?"
                    />
                    <UfwOverview />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="2"
                        color="cyan"
                        icon={<TerminalSquare size={22} />}
                        title="Cài đặt, trạng thái, bật/tắt và reset UFW"
                    />
                    <InstallStatusGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="3"
                        color="amber"
                        icon={<Lock size={22} />}
                        title="Chính sách mặc định: deny incoming, allow outgoing"
                    />
                    <DefaultPolicyGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="4"
                        color="green"
                        icon={<Unlock size={22} />}
                        title="Allow/Deny theo port, service và protocol"
                    />
                    <PortRulesLab />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="5"
                        color="blue"
                        icon={<Filter size={22} />}
                        title="Lọc theo IP và subnet"
                    />
                    <IpFilterGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="6"
                        color="purple"
                        icon={<ListChecks size={22} />}
                        title="Xem và xóa rule an toàn"
                    />
                    <RuleManagement />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="7"
                        color="pink"
                        icon={<Layers size={22} />}
                        title="UFW Application Profiles"
                    />
                    <AppProfilesGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="8"
                        color="teal"
                        icon={<Server size={22} />}
                        title="Cấu hình thực tế cho Web Server"
                    />
                    <WebServerScenario />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="9"
                        color="orange"
                        icon={<FileText size={22} />}
                        title="Logging: xem packet bị UFW chặn"
                    />
                    <LoggingGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="10"
                        color="rose"
                        icon={<ShieldAlert size={22} />}
                        title="Lỗi hay gặp và cách cứu khi bị khóa SSH"
                    />
                    <Troubleshooting />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="11"
                        color="sky"
                        icon={<Code2 size={22} />}
                        title="Script ufw_manager.sh — quản lý firewall"
                    />
                    <UfwManagerPreview />
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

                <section className="space-y-6 pt-4">
                    <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-xl">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-red-500/20 text-red-400 p-2 rounded-lg">
                                    <ClipboardCheck size={20} />
                                </span>
                                Kiểm tra nhanh: UFW firewall
                            </h3>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                <div className="text-center pt-8 border-t border-slate-800">
                    <p className="text-slate-400 mb-4">
                        Bạn đã hoàn thành Phần 6.5 — Cấu hình tường lửa với UFW.
                    </p>
                    <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-red-500/20">
                        Bài tiếp theo: 6.6 — Chia sẻ file qua mạng{" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

function Hero() {
    const cards = [
        [Shield, "ufw", "Uncomplicated Firewall"],
        [Lock, "default deny", "Chặn inbound mặc định"],
        [Unlock, "allow/deny", "Mở hoặc chặn port"],
        [FileText, "logging", "Ghi log packet bị chặn"],
    ];
    return (
        <section className="text-center space-y-5 py-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-sm font-medium">
                <Zap size={16} /> ufw · allow · deny · status numbered · app
                profiles · logging
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Cấu Hình Tường Lửa với{" "}
                <span className="text-red-400 font-mono">ufw</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Bài này giúp bạn bật firewall Ubuntu an toàn, mở đúng port cần
                thiết, chặn port nhạy cảm, giới hạn theo IP/subnet, dùng
                application profiles, xem log và tránh tự khóa SSH.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4">
                {cards.map(([Icon, title, desc]) => (
                    <div
                        key={title}
                        className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 text-left"
                    >
                        <Icon className="text-red-400 mb-3" size={24} />
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
        red: "bg-red-500/20 text-red-400",
        cyan: "bg-cyan-500/20 text-cyan-400",
        amber: "bg-amber-500/20 text-amber-400",
        green: "bg-green-500/20 text-green-400",
        blue: "bg-blue-500/20 text-blue-400",
        purple: "bg-purple-500/20 text-purple-400",
        pink: "bg-pink-500/20 text-pink-400",
        teal: "bg-teal-500/20 text-teal-400",
        orange: "bg-orange-500/20 text-orange-400",
        rose: "bg-rose-500/20 text-rose-400",
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
        red: "bg-red-500/10 border-red-500/20 text-red-300",
        cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
        amber: "bg-amber-500/10 border-amber-500/20 text-amber-300",
        green: "bg-green-500/10 border-green-500/20 text-green-300",
        blue: "bg-blue-500/10 border-blue-500/20 text-blue-300",
        purple: "bg-purple-500/10 border-purple-500/20 text-purple-300",
        pink: "bg-pink-500/10 border-pink-500/20 text-pink-300",
        teal: "bg-teal-500/10 border-teal-500/20 text-teal-300",
        rose: "bg-rose-500/10 border-rose-500/20 text-rose-300",
        orange: "bg-orange-500/10 border-orange-500/20 text-orange-300",
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

function UfwOverview() {
    return (
        <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                <div className="flex items-start gap-5">
                    <div className="bg-red-500/15 text-red-400 p-4 rounded-2xl border border-red-500/20">
                        <Shield size={42} />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">
                            UFW là lớp điều khiển firewall đơn giản cho Ubuntu
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            <code>ufw</code> là giao diện đơn giản hóa cho
                            firewall Linux. Thay vì viết rule iptables phức tạp,
                            bạn dùng cú pháp gần ngôn ngữ tự nhiên như{" "}
                            <code>ufw allow 22/tcp</code> hoặc{" "}
                            <code>ufw deny from 203.0.113.0/24</code>.
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                            <MiniPoint
                                icon={<Globe2 size={18} />}
                                tone="red"
                                title="Inbound"
                                text="Kết nối từ ngoài vào server. Thường nên chặn mặc định."
                            />
                            <MiniPoint
                                icon={<Network size={18} />}
                                tone="green"
                                title="Outbound"
                                text="Kết nối từ server đi ra internet. Thường cho phép mặc định."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-2 bg-slate-800/60 border border-slate-700 rounded-3xl p-6">
                <h4 className="font-bold text-white flex items-center gap-2 mb-4">
                    <Server className="text-red-400" /> Sơ đồ firewall
                </h4>
                <div className="space-y-3 font-mono text-sm">
                    <FlowRow left="Internet" mid="request" right="UFW" />
                    <FlowRow left="UFW" mid="allow 80/443/22" right="Server" />
                    <FlowRow left="UFW" mid="deny others" right="DROP" />
                </div>
                <div className="mt-5 bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 text-sm text-amber-100">
                    Khi đang SSH từ xa, luôn mở SSH trước khi{" "}
                    <code>ufw enable</code>.
                </div>
            </div>
        </div>
    );
}

function FlowRow({ left, mid, right }) {
    return (
        <div className="grid grid-cols-3 items-center gap-2 bg-slate-950 border border-slate-700 rounded-xl p-3">
            <span className="text-cyan-300">{left}</span>
            <span className="text-center text-red-300">→ {mid} →</span>
            <span className="text-right text-green-300">{right}</span>
        </div>
    );
}

function InstallStatusGuide() {
    const [tab, setTab] = useState("install");
    const code = {
        install: `$ sudo apt update
$ sudo apt install ufw -y

$ ufw version
ufw 0.36.x`,
        status: `$ sudo ufw status
Status: inactive

$ sudo ufw status verbose
Status: active
Logging: on (low)
Default: deny (incoming), allow (outgoing), disabled (routed)
New profiles: skip`,
        toggle: `# Bật UFW
$ sudo ufw enable
Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
Firewall is active and enabled on system startup

# Tắt UFW
$ sudo ufw disable
Firewall stopped and disabled on system startup

# Reset toàn bộ rule
$ sudo ufw reset`,
        safe: `# Checklist an toàn trước khi enable qua SSH
$ sudo ufw allow ssh
# hoặc nếu SSH port là 2222:
$ sudo ufw allow 2222/tcp

$ sudo ufw show added
Added user rules:
ufw allow 22/tcp

$ sudo ufw enable
$ sudo ufw status verbose`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["install", "Cài đặt"],
                    ["status", "Status"],
                    ["toggle", "Enable/disable/reset"],
                    ["safe", "Enable an toàn"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setTab(k)}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${tab === k ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <TerminalBlock title={`ufw basic — ${tab}`} code={code[tab]} />
        </div>
    );
}

function DefaultPolicyGuide() {
    const [mode, setMode] = useState("recommended");
    const code = {
        recommended: `# Chính sách mặc định khuyến nghị cho server
$ sudo ufw default deny incoming
Default incoming policy changed to 'deny'

$ sudo ufw default allow outgoing
Default outgoing policy changed to 'allow'

# Ý nghĩa:
# Vào  → DENY  : chặn hết, chỉ mở port cần thiết
# Ra   → ALLOW : server vẫn update apt/curl/wget ra internet được`,
        strict: `# Chính sách rất chặt: chặn cả outbound
$ sudo ufw default deny incoming
$ sudo ufw default deny outgoing

# Sau đó phải mở outbound cần thiết:
$ sudo ufw allow out 53
$ sudo ufw allow out 80/tcp
$ sudo ufw allow out 443/tcp

# Không khuyến nghị cho người mới vì dễ tự làm hỏng apt/DNS`,
        verify: `$ sudo ufw status verbose
Status: active
Logging: on (low)
Default: deny (incoming), allow (outgoing), disabled (routed)

$ sudo ufw show raw
# Xem rule backend chi tiết hơn`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["recommended", "Recommended"],
                        ["strict", "Strict outbound"],
                        ["verify", "Kiểm tra"],
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
                        title={`default policy — ${mode}`}
                        code={code[mode]}
                    />
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3 mt-6">
                <MiniPoint
                    icon={<Lock size={18} />}
                    tone="amber"
                    title="deny incoming"
                    text="Chặn kết nối từ internet vào server nếu chưa có allow rule."
                />
                <MiniPoint
                    icon={<Unlock size={18} />}
                    tone="green"
                    title="allow outgoing"
                    text="Cho server đi ra internet để update, tải package, gọi API."
                />
            </div>
        </div>
    );
}

function PortRulesLab() {
    const [mode, setMode] = useState("allowService");
    const code = {
        allowService: `# Theo tên dịch vụ
$ sudo ufw allow ssh      # port 22
$ sudo ufw allow http     # port 80
$ sudo ufw allow https    # port 443

# Kiểm tra
$ sudo ufw status`,
        allowPort: `# Theo số port
$ sudo ufw allow 22
$ sudo ufw allow 8080
$ sudo ufw allow 3306

# Theo port + protocol
$ sudo ufw allow 22/tcp
$ sudo ufw allow 53/udp

# Dải port
$ sudo ufw allow 8000:9000/tcp`,
        deny: `# Chặn port
$ sudo ufw deny 3306
$ sudo ufw deny 8080

# Chặn protocol cụ thể
$ sudo ufw deny 3306/tcp

# Ví dụ: MySQL không nên mở public nếu không cần
$ sudo ufw deny 3306`,
        direction: `# Rule theo chiều vào/ra
$ sudo ufw allow in 80/tcp
$ sudo ufw allow in 443/tcp

$ sudo ufw deny out 25/tcp
# Chặn outbound SMTP port 25 để hạn chế spam

$ sudo ufw allow out 443/tcp
# Cho server gọi HTTPS ra ngoài`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-4 border-b border-slate-700">
                {[
                    ["allowService", "Service name"],
                    ["allowPort", "Port/protocol"],
                    ["deny", "Deny"],
                    ["direction", "In/out"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setMode(k)}
                        className={`p-4 font-bold border-b md:border-b-0 md:border-r last:border-r-0 border-slate-700 ${mode === k ? "bg-green-500/10 text-green-300" : "text-slate-400 hover:bg-slate-900"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="p-6 grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`ufw rules — ${mode}`}
                        code={code[mode]}
                    />
                </div>
                <div className="lg:col-span-2 space-y-3">
                    <MiniPoint
                        icon={<Server size={18} />}
                        tone="green"
                        title="Tên dịch vụ"
                        text="ssh, http, https là alias tiện dụng cho port phổ biến."
                    />
                    <MiniPoint
                        icon={<Database size={18} />}
                        tone="amber"
                        title="Database port"
                        text="3306/5432 không nên mở public nếu không thật sự cần."
                    />
                    <MiniPoint
                        icon={<Network size={18} />}
                        tone="cyan"
                        title="Protocol"
                        text="TCP dùng cho SSH/HTTP/HTTPS; UDP dùng cho DNS/DHCP/NTP."
                    />
                </div>
            </div>
        </div>
    );
}

function IpFilterGuide() {
    const [mode, setMode] = useState("allow");
    const code = {
        allow: `# Cho phép một IP cụ thể kết nối vào
$ sudo ufw allow from 192.168.1.50

# Cho phép cả subnet LAN
$ sudo ufw allow from 192.168.1.0/24

# Chỉ cho IP cụ thể vào SSH
$ sudo ufw allow from 192.168.1.50 to any port 22

# Chỉ cho IP văn phòng vào port SSH mới
$ sudo ufw allow from 203.0.113.10 to any port 2222 proto tcp`,
        deny: `# Chặn IP cụ thể
$ sudo ufw deny from 203.0.113.100

# Chặn cả subnet
$ sudo ufw deny from 203.0.113.0/24

# Chặn IP vào port cụ thể
$ sudo ufw deny from 203.0.113.100 to any port 22`,
        mysql: `# Chỉ cho LAN truy cập MySQL
$ sudo ufw allow from 192.168.1.0/24 to any port 3306 proto tcp

# Chặn public MySQL
$ sudo ufw deny 3306/tcp

# Kiểm tra MySQL listen ở đâu
$ sudo ss -tulnp | grep :3306

# Tốt nhất: MySQL bind 127.0.0.1 hoặc private IP, không bind 0.0.0.0 nếu không cần`,
        order: `# UFW xử lý rule theo thứ tự.
# Deny cụ thể nên đặt trước allow rộng nếu cần ưu tiên.

$ sudo ufw status numbered

# Chèn rule vào vị trí số 1
$ sudo ufw insert 1 deny from 203.0.113.100

# Chèn allow SSH từ IP admin vào đầu danh sách
$ sudo ufw insert 1 allow from 203.0.113.10 to any port 22 proto tcp`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["allow", "Allow IP/subnet"],
                        ["deny", "Deny IP/subnet"],
                        ["mysql", "MySQL nội bộ"],
                        ["order", "Thứ tự rule"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setMode(k)}
                            className={`w-full text-left rounded-xl border p-4 font-bold ${mode === k ? "bg-blue-500/10 border-blue-500/40 text-blue-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`ip filtering — ${mode}`}
                        code={code[mode]}
                    />
                </div>
            </div>
        </div>
    );
}

function RuleManagement() {
    const [mode, setMode] = useState("numbered");
    const code = {
        numbered: `$ sudo ufw status numbered
Status: active

     To                         Action      From
     --                         ------      ----
[ 1] 22/tcp                     ALLOW IN    Anywhere
[ 2] 80/tcp                     ALLOW IN    Anywhere
[ 3] 443/tcp                    ALLOW IN    Anywhere
[ 4] 3306                       DENY IN     Anywhere
[ 5] 22/tcp                     ALLOW IN    192.168.1.50`,
        deleteNumber: `# Xóa rule theo số thứ tự
$ sudo ufw delete 4
Deleting:
 deny 3306
Proceed with operation (y|n)? y

# Sau khi xóa, số thứ tự rule thay đổi.
# Nếu xóa nhiều rule, nên xóa từ số lớn xuống số nhỏ.`,
        deleteText: `# Xóa theo nội dung rule
$ sudo ufw delete allow 8080
$ sudo ufw delete deny 3306
$ sudo ufw delete allow 22/tcp

# Xóa rule IP cụ thể
$ sudo ufw delete allow from 192.168.1.50 to any port 22`,
        showAdded: `# Xem rule đã thêm ở dạng command
$ sudo ufw show added
Added user rules:
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow from 192.168.1.0/24 to any port 3306 proto tcp

# Rất hữu ích trước khi enable hoặc trước khi backup config`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["numbered", "Status numbered"],
                    ["deleteNumber", "Delete số"],
                    ["deleteText", "Delete nội dung"],
                    ["showAdded", "Show added"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setMode(k)}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${mode === k ? "bg-purple-500/10 border-purple-500/40 text-purple-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <TerminalBlock
                title={`rule management — ${mode}`}
                code={code[mode]}
            />
        </div>
    );
}

function AppProfilesGuide() {
    const [mode, setMode] = useState("list");
    const code = {
        list: `$ sudo ufw app list
Available applications:
  Apache
  Apache Full
  Apache Secure
  Nginx Full
  Nginx HTTP
  Nginx HTTPS
  OpenSSH`,
        info: `$ sudo ufw app info 'Nginx Full'
Profile: Nginx Full
Title: Web Server (Nginx, HTTP + HTTPS)
Description: Small, but very powerful and efficient web server

Ports:
  80,443/tcp

$ sudo ufw app info OpenSSH
Ports:
  22/tcp`,
        apply: `$ sudo ufw allow 'Nginx Full'
$ sudo ufw allow 'Nginx HTTP'
$ sudo ufw allow 'Nginx HTTPS'
$ sudo ufw allow 'Apache Secure'
$ sudo ufw allow OpenSSH

$ sudo ufw status

# App profile dễ đọc hơn port số khi quản lý web server`,
        custom: `# Profile thường nằm trong:
$ ls /etc/ufw/applications.d/

# Ví dụ custom profile
$ sudo nano /etc/ufw/applications.d/myapp

[MyApp]
title=My Custom App
description=My application on port 8080
ports=8080/tcp

$ sudo ufw app update MyApp
$ sudo ufw allow MyApp`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["list", "List profiles"],
                        ["info", "Profile info"],
                        ["apply", "Apply profile"],
                        ["custom", "Custom profile"],
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
                        title={`app profiles — ${mode}`}
                        code={code[mode]}
                    />
                </div>
            </div>
        </div>
    );
}

function WebServerScenario() {
    const [step, setStep] = useState(0);
    const steps = [
        [
            "1. Default policy",
            `$ sudo ufw default deny incoming
$ sudo ufw default allow outgoing`,
        ],
        [
            "2. Mở SSH/Web",
            `$ sudo ufw allow ssh
$ sudo ufw allow http
$ sudo ufw allow https

# Hoặc dùng profile:
$ sudo ufw allow OpenSSH
$ sudo ufw allow 'Nginx Full'`,
        ],
        [
            "3. MySQL chỉ nội bộ",
            `$ sudo ufw allow from 192.168.1.0/24 to any port 3306 proto tcp

# Nếu không cần remote MySQL, tốt hơn không mở 3306 public.`,
        ],
        [
            "4. Enable và kiểm tra",
            `$ sudo ufw show added
$ sudo ufw enable
$ sudo ufw status verbose`,
        ],
        [
            "5. Kết quả mong muốn",
            `Port 22   → ALLOW  SSH quản trị
Port 80   → ALLOW  HTTP public
Port 443  → ALLOW  HTTPS public
Port 3306 → ALLOW  chỉ từ 192.168.1.0/24
Còn lại   → DENY   theo default policy`,
        ],
    ];
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {steps.map(([title], i) => (
                        <button
                            key={title}
                            onClick={() => setStep(i)}
                            className={`w-full text-left p-4 rounded-2xl border font-bold ${step === i ? "bg-teal-500/10 border-teal-500/40 text-teal-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {title}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={steps[step][0]}
                        code={steps[step][1]}
                    />
                </div>
            </div>
            <div className="grid md:grid-cols-4 gap-3 mt-6">
                <PortBadge port="22" label="SSH" tone="cyan" />
                <PortBadge port="80" label="HTTP" tone="green" />
                <PortBadge port="443" label="HTTPS" tone="green" />
                <PortBadge port="3306" label="MySQL LAN only" tone="amber" />
            </div>
        </div>
    );
}

function PortBadge({ port, label, tone }) {
    const map = {
        cyan: "text-cyan-300 border-cyan-500/20 bg-cyan-500/10",
        green: "text-green-300 border-green-500/20 bg-green-500/10",
        amber: "text-amber-300 border-amber-500/20 bg-amber-500/10",
    };
    return (
        <div className={`${map[tone]} border rounded-2xl p-4 text-center`}>
            <div className="font-mono text-2xl font-black">{port}</div>
            <div className="text-xs text-slate-300">{label}</div>
        </div>
    );
}

function LoggingGuide() {
    const [mode, setMode] = useState("enable");
    const code = {
        enable: `# Bật ghi log
$ sudo ufw logging on

# Tắt log
$ sudo ufw logging off

# Mức độ log
$ sudo ufw logging low
$ sudo ufw logging medium
$ sudo ufw logging high

# low: chủ yếu packet bị chặn
# medium/high: nhiều log hơn, dễ ồn trên server bận`,
        files: `$ sudo tail -f /var/log/ufw.log

# Xem packet bị block
$ sudo grep "BLOCK" /var/log/ufw.log | tail -20

# Đếm IP bị block nhiều nhất
$ sudo grep "BLOCK" /var/log/ufw.log \
  | awk -F'SRC=' '{print $2}' \
  | awk '{print $1}' \
  | sort | uniq -c | sort -rn | head`,
        journal: `$ sudo journalctl -f | grep UFW

# Log UFW hôm nay
$ sudo journalctl --since today | grep UFW

# Log bị block 1 giờ qua
$ sudo journalctl --since "1 hour ago" | grep "UFW BLOCK"`,
        read: `Ví dụ log:
[UFW BLOCK] IN=enp3s0 OUT= MAC=... SRC=203.0.113.100 DST=192.168.1.100 LEN=60 PROTO=TCP SPT=54321 DPT=3306

SRC=203.0.113.100   IP nguồn
DST=192.168.1.100   IP đích
PROTO=TCP           Giao thức
SPT=54321           Source port
DPT=3306            Destination port bị chặn
IN=enp3s0           Interface nhận packet`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["enable", "Bật logging"],
                    ["files", "ufw.log"],
                    ["journal", "journalctl"],
                    ["read", "Đọc log"],
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
            <TerminalBlock title={`ufw logging — ${mode}`} code={code[mode]} />
        </div>
    );
}

function Troubleshooting() {
    const [caseId, setCaseId] = useState("locked");
    const cases = {
        locked: {
            title: "Bị khóa SSH sau khi enable UFW",
            icon: ShieldAlert,
            code: `# Nếu còn console/VNC/provider console:
$ sudo ufw allow ssh
$ sudo ufw reload

# Nếu SSH port là 2222:
$ sudo ufw allow 2222/tcp
$ sudo ufw reload

# Cứu nhanh:
$ sudo ufw disable
$ sudo ufw reset`,
        },
        precheck: {
            title: "Kiểm tra rule trước khi enable",
            icon: Search,
            code: `$ sudo ufw show added
Added user rules:
ufw default deny incoming
ufw default allow outgoing
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp

# Nếu không thấy rule SSH, thêm ngay:
$ sudo ufw allow ssh`,
        },
        blocked: {
            title: "Service chạy nhưng không truy cập được",
            icon: Server,
            code: `# 1. Service có listen không?
$ sudo ss -tulnp | grep :8080

# 2. UFW có mở port không?
$ sudo ufw status numbered | grep 8080

# 3. Mở port nếu cần
$ sudo ufw allow 8080/tcp

# 4. Xem log block
$ sudo grep "DPT=8080" /var/log/ufw.log | tail -20`,
        },
        wrongDelete: {
            title: "Xóa nhầm rule",
            icon: Trash2,
            code: `# Xem rule hiện tại
$ sudo ufw status numbered

# Nếu xóa nhầm allow SSH, thêm lại trước khi reload/enable:
$ sudo ufw allow ssh

# Backup danh sách rule dạng command:
$ sudo ufw show added > ufw-rules-backup.txt

# Reset và tạo lại từ đầu khi quá rối:
$ sudo ufw reset
$ sudo ufw default deny incoming
$ sudo ufw default allow outgoing
$ sudo ufw allow ssh`,
        },
    };
    const current = cases[caseId];
    const Icon = current.icon;
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {Object.entries(cases).map(([k, c]) => {
                        const ItemIcon = c.icon;
                        return (
                            <button
                                key={k}
                                onClick={() => setCaseId(k)}
                                className={`w-full text-left p-4 rounded-2xl border transition-all ${caseId === k ? "bg-rose-500/10 border-rose-500/40" : "bg-slate-900 border-slate-700 hover:border-slate-500"}`}
                            >
                                <div className="flex items-center gap-3">
                                    <ItemIcon className="text-rose-400" />
                                    <span className="font-bold text-white">
                                        {c.title}
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
                    <TerminalBlock
                        title="ufw troubleshooting"
                        code={current.code}
                    />
                </div>
            </div>
        </div>
    );
}

function UfwManagerPreview() {
    const [view, setView] = useState("menu");
    const content = {
        menu: `╔══════════════════════════════════════╗
║            UFW MANAGER               ║
╠══════════════════════════════════════╣
║ 1) Xem trạng thái firewall           ║
║ 2) Thiết lập web server chuẩn        ║
║ 3) Mở port                           ║
║ 4) Chặn IP                           ║
║ 5) Xóa rule theo số                  ║
║ 6) Bật logging                       ║
║ 7) Xem log bị BLOCK                  ║
╚══════════════════════════════════════╝`,
        status: `▶ UFW STATUS
Status: active
Logging: on (low)
Default: deny incoming, allow outgoing

Rules:
[1] 22/tcp   ALLOW IN Anywhere
[2] 80/tcp   ALLOW IN Anywhere
[3] 443/tcp  ALLOW IN Anywhere
[4] 3306/tcp ALLOW IN 192.168.1.0/24`,
        web: `▶ APPLY WEB SERVER PROFILE
$ sudo ufw default deny incoming
$ sudo ufw default allow outgoing
$ sudo ufw allow OpenSSH
$ sudo ufw allow 'Nginx Full'
$ sudo ufw allow from 192.168.1.0/24 to any port 3306 proto tcp
$ sudo ufw enable

✅ Web firewall profile applied`,
        block: `▶ BLOCK IP
IP: 203.0.113.100

$ sudo ufw insert 1 deny from 203.0.113.100

✅ Blocked 203.0.113.100

Recent blocks:
$ sudo grep "SRC=203.0.113.100" /var/log/ufw.log | tail`,
        logs: `▶ RECENT UFW BLOCKS
SRC=203.0.113.100 DPT=3306 PROTO=TCP
SRC=198.51.100.20  DPT=22   PROTO=TCP
SRC=203.0.113.88   DPT=8080 PROTO=TCP

Top blocked IPs:
  120 203.0.113.100
   45 198.51.100.20`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-2">
                    {[
                        ["menu", "Menu"],
                        ["status", "Status"],
                        ["web", "Web profile"],
                        ["block", "Block IP"],
                        ["logs", "Logs"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setView(k)}
                            className={`w-full text-left rounded-xl border p-3 font-bold text-sm ${view === k ? "bg-sky-500/10 border-sky-500/40 text-sky-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title="ufw_manager.sh preview"
                        code={content[view]}
                    />
                </div>
            </div>
        </div>
    );
}

function PracticeChecklist() {
    const tasks = [
        ["Cài UFW", "sudo apt install ufw -y"],
        ["Xem trạng thái", "sudo ufw status verbose"],
        [
            "Đặt default policy",
            "sudo ufw default deny incoming && sudo ufw default allow outgoing",
        ],
        ["Mở SSH trước khi enable", "sudo ufw allow ssh"],
        ["Mở web ports", "sudo ufw allow http && sudo ufw allow https"],
        ["Xem rule sắp áp dụng", "sudo ufw show added"],
        ["Bật UFW", "sudo ufw enable"],
        ["Xem rule có số thứ tự", "sudo ufw status numbered"],
        ["Mở port 8080", "sudo ufw allow 8080/tcp"],
        ["Xóa rule 8080", "sudo ufw delete allow 8080/tcp"],
        [
            "Chỉ cho LAN vào MySQL",
            "sudo ufw allow from 192.168.1.0/24 to any port 3306 proto tcp",
        ],
        ["Xem app profiles", "sudo ufw app list && sudo ufw app info OpenSSH"],
        ["Bật logging", "sudo ufw logging on && sudo ufw logging low"],
        ["Xem log block", "sudo grep 'BLOCK' /var/log/ufw.log | tail -20"],
        ["Tắt UFW trong lab", "sudo ufw disable"],
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
                        <BookOpen className="text-red-400" /> Tóm tắt bài học
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <SummaryBox
                        title="Cơ bản"
                        items={[
                            "ufw status",
                            "ufw status verbose",
                            "ufw enable",
                            "ufw disable",
                            "ufw reset",
                            "ufw show added",
                        ]}
                    />
                    <SummaryBox
                        title="Policy/port"
                        items={[
                            "default deny incoming",
                            "default allow outgoing",
                            "allow ssh",
                            "allow 80/tcp",
                            "allow 8000:9000/tcp",
                            "deny 3306",
                        ]}
                    />
                    <SummaryBox
                        title="IP/rule"
                        items={[
                            "allow from IP",
                            "allow from subnet",
                            "allow from IP to any port 22",
                            "status numbered",
                            "delete 3",
                            "insert 1 deny from IP",
                        ]}
                    />
                    <SummaryBox
                        title="Profile/log"
                        items={[
                            "ufw app list",
                            "app info 'Nginx Full'",
                            "allow 'Nginx Full'",
                            "logging on",
                            "tail -f /var/log/ufw.log",
                            "grep BLOCK",
                        ]}
                    />
                </div>
                <div className="px-6 md:px-8 pb-8">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5 text-red-100">
                        <strong className="text-white">Quy tắc vàng:</strong>{" "}
                        khi đang quản trị server qua SSH, hãy chạy{" "}
                        <code>sudo ufw allow ssh</code> hoặc mở đúng SSH port
                        mới trước khi <code>sudo ufw enable</code>. Luôn kiểm
                        tra bằng <code>sudo ufw show added</code>.
                    </div>
                </div>
            </div>
        </section>
    );
}

function SummaryBox({ title, items }) {
    return (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
            <h4 className="font-bold text-red-300 uppercase text-xs tracking-widest mb-4">
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
        question: "UFW là gì?",
        options: [
            "Giao diện đơn giản để quản lý firewall Linux",
            "Công cụ tải file",
            "Trình soạn thảo text",
            "Dịch vụ SSH client",
        ],
        correct: 0,
        explanation:
            "UFW giúp quản lý rule firewall bằng cú pháp đơn giản hơn iptables/nftables trực tiếp.",
    },
    {
        question: "Trước khi bật UFW qua SSH, việc quan trọng nhất là gì?",
        options: [
            "Mở port SSH bằng ufw allow ssh hoặc allow port SSH đang dùng",
            "Xóa /var/log/ufw.log",
            "Tắt network",
            "Deny outgoing",
        ],
        correct: 0,
        explanation:
            "Nếu không allow SSH trước, bạn có thể tự khóa mình khỏi server.",
    },
    {
        question: "Default policy khuyến nghị cho server thường là gì?",
        options: [
            "deny incoming, allow outgoing",
            "allow incoming, deny outgoing",
            "deny cả incoming và outgoing ngay lập tức",
            "allow tất cả",
        ],
        correct: 0,
        explanation:
            "Chặn inbound mặc định và chỉ mở port cần thiết là mô hình an toàn phổ biến.",
    },
    {
        question: "Lệnh nào mở HTTPS?",
        options: [
            "sudo ufw allow https",
            "sudo ufw deny https",
            "sudo ufw reset https",
            "sudo ufw delete https",
        ],
        correct: 0,
        explanation: "https là profile/alias cho port 443/tcp.",
    },
    {
        question: "Lệnh nào chỉ cho IP 192.168.1.50 vào SSH?",
        options: [
            "sudo ufw allow from 192.168.1.50 to any port 22",
            "sudo ufw allow 192.168.1.50 out",
            "sudo ufw deny ssh",
            "sudo ufw reset 192.168.1.50",
        ],
        correct: 0,
        explanation:
            "Cú pháp from IP to any port PORT giới hạn nguồn truy cập.",
    },
    {
        question: "Muốn xóa rule theo số thứ tự cần xem gì trước?",
        options: [
            "sudo ufw status numbered",
            "sudo ufw app list",
            "sudo ufw logging high",
            "sudo ufw disable",
        ],
        correct: 0,
        explanation:
            "status numbered hiển thị rule kèm số để dùng ufw delete N.",
    },
    {
        question: "Nginx Full profile thường mở port nào?",
        options: ["80 và 443/tcp", "22/tcp", "3306/tcp", "53/udp"],
        correct: 0,
        explanation: "Nginx Full thường bao gồm HTTP và HTTPS.",
    },
    {
        question: "Xem packet bị UFW chặn bằng lệnh nào?",
        options: [
            "sudo grep 'BLOCK' /var/log/ufw.log | tail -20",
            "sudo ufw allow BLOCK",
            "ssh -v BLOCK",
            "df -h /var/log/ufw.log",
        ],
        correct: 0,
        explanation:
            "UFW log thường nằm trong /var/log/ufw.log; dòng block có nhãn UFW BLOCK hoặc BLOCK.",
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
                    <strong className="text-red-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu về UFW.
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
                <span className="text-red-400 bg-red-500/10 px-3 py-1 rounded-full">
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
