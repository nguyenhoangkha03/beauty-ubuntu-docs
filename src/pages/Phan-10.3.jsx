import React, { useState } from "react";
import {
    Shield,
    ShieldCheck,
    ShieldAlert,
    Terminal,
    Lock,
    Unlock,
    Server,
    Network,
    Ban,
    DoorOpen,
    KeyRound,
    Globe,
    Database,
    Webhook,
    AlertTriangle,
    Info,
    CheckCircle2,
    XCircle,
    Copy,
    ChevronRight,
    RotateCcw,
    Sparkles,
    Settings,
    Bug,
    Wrench,
    ListChecks,
    Eye,
    Trash2,
    Search,
    FileText,
    Activity,
    Clock,
    UserX,
    PackageCheck,
    LifeBuoy,
    WifiOff,
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
                                Security · Firewall · UFW · Fail2Ban
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 10
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 10.3
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" /> Tường
                        lửa và chống brute-force cho Ubuntu Server
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Cấu Hình <span className="text-orange-500">ufw</span>{" "}
                        <br />
                        Và <span className="text-orange-500">fail2ban</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Bạn sẽ biết mở/chặn port bằng{" "}
                        <code className="text-orange-300">ufw</code>, bật
                        firewall an toàn khi đang SSH, không mở database public,
                        cài <code className="text-orange-300">fail2ban</code> và
                        tự động ban IP brute-force SSH.
                    </p>
                </section>

                <section className="bg-red-500/10 border border-red-500/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-5 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                        <ShieldAlert size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Cảnh báo: mở SSH trước khi bật ufw
                        </h3>
                        <p className="text-red-100 leading-relaxed">
                            Nếu bạn đang cấu hình server từ xa qua SSH, luôn
                            chạy{" "}
                            <code className="text-white">
                                sudo ufw allow ssh
                            </code>{" "}
                            hoặc mở đúng port SSH như{" "}
                            <code className="text-white">
                                sudo ufw allow 2222/tcp
                            </code>{" "}
                            trước khi chạy{" "}
                            <code className="text-white">sudo ufw enable</code>.
                            Nếu làm ngược lại, bạn có thể tự khóa mình khỏi
                            server.
                        </p>
                    </div>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <FirewallConceptCard />
                    <FirewallRuleSimulator />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="blue"
                        icon={<Shield size={22} />}
                        title="ufw là gì?"
                        subtitle="Uncomplicated Firewall giúp kiểm soát dịch vụ nào được phép nhận kết nối từ bên ngoài."
                    />
                    <UfwConceptSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="green"
                        icon={<DoorOpen size={22} />}
                        title="Bật firewall an toàn cho SSH"
                        subtitle="Quy trình chuẩn: kiểm tra trạng thái → allow SSH → enable → status verbose."
                    />
                    <EnableUfwSafelySection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="orange"
                        icon={<Globe size={22} />}
                        title="Mở port web và đóng port thừa"
                        subtitle="Mở 80/443 cho website; không mở database như 3306, 5432, 6379, 27017 ra internet nếu không cần."
                    />
                    <PortRulesSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="purple"
                        icon={<Trash2 size={22} />}
                        title="Xem và xóa rule ufw"
                        subtitle="Dùng status numbered để lấy số thứ tự rule rồi xóa bằng ufw delete NUMBER."
                    />
                    <DeleteRulesSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="cyan"
                        icon={<Ban size={22} />}
                        title="fail2ban là gì?"
                        subtitle="fail2ban đọc log, phát hiện đăng nhập sai nhiều lần và tự động chặn IP gây rối."
                    />
                    <Fail2banConceptSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="yellow"
                        icon={<Settings size={22} />}
                        title="Cài đặt và cấu hình fail2ban cho SSH"
                        subtitle="Không sửa jail.conf trực tiếp; tạo jail.local để bật jail sshd với maxretry/findtime/bantime."
                    />
                    <Fail2banConfigSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="teal"
                        icon={<Activity size={22} />}
                        title="Xem trạng thái, banned IP và gỡ ban"
                        subtitle="Dùng fail2ban-client status sshd để xem IP đang bị ban và unbanip khi bị chặn nhầm."
                    />
                    <Fail2banStatusSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="8"
                        color="red"
                        icon={<Bug size={22} />}
                        title="Lỗi phổ biến và cách xử lý"
                        subtitle="Tự khóa SSH, mở sai port, fail2ban không có jail, bị ban IP của mình và nhầm deny/delete."
                    />
                    <CommonErrorsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="9"
                        color="pink"
                        icon={<ShieldCheck size={22} />}
                        title="Checklist bảo mật server cơ bản"
                        subtitle="SSH key + ufw + fail2ban + cập nhật bảo mật + không mở port thừa."
                    />
                    <SecurityChecklistSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="10"
                        color="emerald"
                        icon={<ListChecks size={22} />}
                        title="Tóm tắt nhanh"
                        subtitle="Các lệnh ufw, fail2ban-client và cấu hình jail cần nhớ sau bài 10.3."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <PackageCheck className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức bài 10.3
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Ôn lại allow SSH trước khi enable, status
                                    numbered, fail2ban jail, unbanip và
                                    ignoreip.
                                </p>
                            </div>
                            <div className="hidden sm:block text-3xl">🧪</div>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                <footer className="text-center pt-8 border-t border-slate-800">
                    <p className="text-slate-400 mb-4">
                        Bạn đã biết dựng tường lửa và chống brute-force. Tiếp
                        theo là kiểm tra port mở và dịch vụ đang lắng nghe.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                        Bài tiếp theo: 10.4 — Kiểm tra cổng mở và dịch vụ lắng
                        nghe <ChevronRight size={20} />
                    </button>
                </footer>
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
        teal: "bg-teal-500/20 text-teal-400",
        red: "bg-red-500/20 text-red-400",
        pink: "bg-pink-500/20 text-pink-400",
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

function FirewallConceptCard() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-orange-500/15 text-orange-400 rounded-2xl flex items-center justify-center">
                    <Shield size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        ufw và fail2ban khác nhau thế nào?
                    </h3>
                    <p className="text-slate-500 text-sm">
                        Một cái khóa cửa, một cái ghi nhớ kẻ phá rối
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-slate-950 border border-blue-500/20 rounded-2xl p-5">
                    <Shield className="text-blue-400 mb-3" />
                    <div className="font-bold text-white mb-2">ufw</div>
                    <p className="text-sm text-slate-400">
                        Mở/chặn port theo rule cố định. Ví dụ cho phép SSH 22,
                        HTTP 80, HTTPS 443.
                    </p>
                </div>
                <div className="bg-slate-950 border border-red-500/20 rounded-2xl p-5">
                    <Ban className="text-red-400 mb-3" />
                    <div className="font-bold text-white mb-2">fail2ban</div>
                    <p className="text-sm text-slate-400">
                        Theo dõi log đăng nhập. Sai nhiều lần thì tự động ban IP
                        trong một thời gian.
                    </p>
                </div>
            </div>
            <div className="bg-black border border-slate-800 rounded-2xl p-5 font-mono text-sm text-slate-300 whitespace-pre-wrap">{`Server Ubuntu = Tòa nhà\nPort          = Cửa ra vào\nufw           = Bảo vệ kiểm soát cửa\nfail2ban      = Bảo vệ ghi nhớ kẻ phá rối\nSSH key       = Chìa khóa an toàn hơn mật khẩu`}</div>
        </div>
    );
}

function FirewallRuleSimulator() {
    const [ssh, setSsh] = useState(true);
    const [web, setWeb] = useState(true);
    const [db, setDb] = useState(false);
    const [enabled, setEnabled] = useState(false);
    const locked = enabled && !ssh;
    return (
        <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Network className="text-orange-400" /> Mô phỏng rule firewall
            </h3>
            <p className="text-slate-400 mb-6">
                Bật/tắt các cửa để xem server có an toàn không.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mb-5">
                <ToggleCard
                    label="SSH 22"
                    icon={<KeyRound />}
                    active={ssh}
                    setActive={setSsh}
                />
                <ToggleCard
                    label="Web 80/443"
                    icon={<Globe />}
                    active={web}
                    setActive={setWeb}
                />
                <ToggleCard
                    label="DB 3306"
                    icon={<Database />}
                    active={db}
                    setActive={setDb}
                    danger
                />
            </div>
            <button
                onClick={() => setEnabled((v) => !v)}
                className={`w-full p-4 rounded-2xl border font-bold mb-5 ${enabled ? "bg-green-500 text-white border-green-500" : "bg-slate-950 border-slate-800 text-slate-300"}`}
            >
                {enabled ? "Firewall đang bật" : "Firewall chưa bật"}
            </button>
            <div
                className={`rounded-2xl border p-5 ${locked ? "bg-red-500/10 border-red-500/20" : db ? "bg-yellow-500/10 border-yellow-500/20" : enabled ? "bg-green-500/10 border-green-500/20" : "bg-slate-950 border-slate-800"}`}
            >
                <div className="font-bold text-white mb-2">Kết luận</div>
                <p className="text-slate-300 text-sm">
                    {locked
                        ? "Nguy hiểm: firewall bật nhưng SSH chưa được allow. Bạn có thể bị khóa khỏi server."
                        : db
                          ? "Cẩn thận: database đang mở public. Chỉ làm vậy khi có lý do rõ ràng và lớp bảo vệ bổ sung."
                          : enabled
                            ? "Tốt: firewall bật, SSH/web được mở đúng nhu cầu, database không public."
                            : "Firewall chưa bật. Rule đã khai báo nhưng chưa bảo vệ server."}
                </p>
            </div>
        </div>
    );
}

function ToggleCard({ label, icon, active, setActive, danger }) {
    return (
        <button
            onClick={() => setActive((v) => !v)}
            className={`p-4 rounded-2xl border text-left transition-all ${active ? (danger ? "bg-red-500/10 border-red-500/40" : "bg-green-500/10 border-green-500/40") : "bg-slate-950 border-slate-800"}`}
        >
            <div
                className={
                    active
                        ? danger
                            ? "text-red-400"
                            : "text-green-400"
                        : "text-slate-500"
                }
            >
                {icon}
            </div>
            <div className="font-bold text-white mt-3">{label}</div>
            <div className="text-xs text-slate-500 mt-1">
                {active ? "ALLOW" : "BLOCK"}
            </div>
        </button>
    );
}

function UfwConceptSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="common-ports.txt"
                code={`SSH      → port 22\nHTTP     → port 80\nHTTPS    → port 443\nMySQL    → port 3306\nPostgres → port 5432\nRedis    → port 6379\nMongoDB  → port 27017\n\n# Nguyên tắc:\n# - Chỉ mở port thật sự cần thiết\n# - Database thường KHÔNG mở public\n# - SSH nên dùng key + fail2ban\n# - Web server thường mở 80/443`}
            />
            <CheatCard
                title="Mặc định nên dùng"
                rows={[
                    [
                        "deny incoming",
                        "Chặn kết nối đi vào nếu chưa có rule allow",
                    ],
                    ["allow outgoing", "Cho phép server đi ra internet"],
                    ["allow ssh", "Luôn mở SSH trước khi enable từ xa"],
                    ["allow 80/443", "Mở HTTP/HTTPS khi chạy website"],
                ]}
            />
        </div>
    );
}

function EnableUfwSafelySection() {
    return (
        <CodeBlock
            title="enable-ufw-safely.sh"
            code={`# 1. Kiểm tra trạng thái\nsudo ufw status\n# Status: inactive\n\n# 2. Cho phép SSH trước khi bật firewall\nsudo ufw allow ssh\n# hoặc:\nsudo ufw allow 22/tcp\n\n# Nếu SSH chạy port khác, ví dụ 2222:\nsudo ufw allow 2222/tcp\n\n# 3. Bật firewall\nsudo ufw enable\n# Command may disrupt existing ssh connections. Proceed with operation (y|n)? y\n# Firewall is active and enabled on system startup\n\n# 4. Kiểm tra chi tiết\nsudo ufw status verbose\n\n# Output quan trọng:\n# Status: active\n# Logging: on\n# Default: deny (incoming), allow (outgoing), disabled (routed)\n# 22/tcp ALLOW IN Anywhere`}
            note="Mẹo an toàn: giữ terminal SSH cũ mở, mở terminal thứ hai để test SSH lại sau khi bật ufw."
        />
    );
}

function PortRulesSection() {
    const [tab, setTab] = useState("web");
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                <TabButton id="web" tab={tab} setTab={setTab}>
                    Web 80/443
                </TabButton>
                <TabButton id="db" tab={tab} setTab={setTab}>
                    Database
                </TabButton>
                <TabButton id="ip" tab={tab} setTab={setTab}>
                    Chặn IP
                </TabButton>
            </div>
            <div className="p-5">
                {tab === "web" && (
                    <CodeBlock
                        title="open-web-ports.sh"
                        code={`# Mở HTTP và HTTPS\nsudo ufw allow 80/tcp\nsudo ufw allow 443/tcp\n\n# Hoặc dùng app profile nếu có\nsudo ufw app list\nsudo ufw allow "Nginx Full"\n\n# Kiểm tra\nsudo ufw status numbered\n\n# Kết quả mong muốn:\n# 22/tcp   ALLOW IN Anywhere\n# 80/tcp   ALLOW IN Anywhere\n# 443/tcp  ALLOW IN Anywhere`}
                    />
                )}
                {tab === "db" && (
                    <CodeBlock
                        title="do-not-open-database.sh"
                        code={`# Database thường KHÔNG nên mở public:\n# MySQL    3306\n# Postgres 5432\n# Redis    6379\n# MongoDB  27017\n\nsudo ufw status\n\n# Output tốt cho web server:\n# 22/tcp   ALLOW Anywhere\n# 80/tcp   ALLOW Anywhere\n# 443/tcp  ALLOW Anywhere\n\n# Nếu lỡ mở MySQL public:\nsudo ufw status numbered\nsudo ufw delete 4\n\n# Nếu bắt buộc mở DB, chỉ allow IP tin cậy:\nsudo ufw allow from 203.0.113.10 to any port 3306 proto tcp`}
                    />
                )}
                {tab === "ip" && (
                    <CodeBlock
                        title="deny-ip.sh"
                        code={`# Chặn mọi kết nối từ IP cụ thể\nsudo ufw deny from 203.0.113.50\n\n# Chặn IP đó chỉ vào SSH port 22\nsudo ufw deny from 203.0.113.50 to any port 22 proto tcp\n\n# Cho phép IP văn phòng vào SSH, chặn còn lại là bài nâng cao\nsudo ufw allow from 203.0.113.10 to any port 22 proto tcp\n\n# Kiểm tra\nsudo ufw status numbered`}
                    />
                )}
            </div>
        </div>
    );
}

function DeleteRulesSection() {
    return (
        <CodeBlock
            title="delete-ufw-rule.sh"
            code={`# Xem rule có số thứ tự\nsudo ufw status numbered\n\n# Output mẫu:\n# Status: active\n#\n#      To                         Action      From\n#      --                         ------      ----\n# [ 1] 22/tcp                     ALLOW IN    Anywhere\n# [ 2] 80/tcp                     ALLOW IN    Anywhere\n# [ 3] 443/tcp                    ALLOW IN    Anywhere\n# [ 4] 3306/tcp                   ALLOW IN    Anywhere\n\n# Xóa rule số 4, ví dụ MySQL public\nsudo ufw delete 4\n# Deleting:\n#  allow 3306/tcp\n# Proceed with operation (y|n)? y\n# Rule deleted\n\n# Lưu ý:\n# sudo ufw deny 3306/tcp KHÔNG xóa rule allow cũ.\n# Nó thêm một rule deny mới. Muốn xóa rule, dùng ufw delete NUMBER.`}
        />
    );
}

function Fail2banConceptSection() {
    return (
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
                <h4 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                    <UserX className="text-cyan-400" /> Luồng fail2ban
                </h4>
                <div className="space-y-3">
                    <FlowStep
                        icon={<Terminal />}
                        title="1. Hacker thử SSH sai"
                        desc="Sai mật khẩu nhiều lần trong thời gian ngắn."
                    />
                    <FlowStep
                        icon={<FileText />}
                        title="2. Log ghi nhận"
                        desc="sshd ghi lỗi vào journal hoặc /var/log/auth.log."
                    />
                    <FlowStep
                        icon={<Search />}
                        title="3. fail2ban đọc log"
                        desc="Filter sshd phát hiện số lần sai vượt maxretry."
                    />
                    <FlowStep
                        icon={<Ban />}
                        title="4. Ban IP"
                        desc="fail2ban ra lệnh firewall chặn IP trong bantime."
                    />
                </div>
            </div>
            <CheatCard
                title="Khái niệm fail2ban"
                rows={[
                    ["jail", "Bộ cấu hình bảo vệ một dịch vụ, ví dụ sshd"],
                    ["filter", "Mẫu nhận diện log lỗi"],
                    ["maxretry", "Sai bao nhiêu lần thì ban"],
                    ["findtime", "Khoảng thời gian đếm lỗi"],
                    ["bantime", "Thời gian ban IP"],
                    ["ignoreip", "IP tin cậy không bị ban"],
                ]}
            />
        </div>
    );
}

function FlowStep({ icon, title, desc }) {
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start">
            <div className="text-orange-400 shrink-0">{icon}</div>
            <div>
                <div className="font-bold text-white">{title}</div>
                <p className="text-sm text-slate-500 mt-1">{desc}</p>
            </div>
        </div>
    );
}

function Fail2banConfigSection() {
    return (
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-6">
            <CodeBlock
                title="install-and-configure-fail2ban.sh"
                code={`# 1. Cài đặt\nsudo apt update\nsudo apt install fail2ban\n\n# 2. Kiểm tra dịch vụ\nsudo systemctl status fail2ban\n# Active: active (running)\n\n# 3. Không sửa trực tiếp jail.conf\n# Tạo file cấu hình riêng:\nsudo nano /etc/fail2ban/jail.local\n\n# Nội dung tối thiểu:\n[sshd]\nenabled = true\nport = ssh\nfilter = sshd\nlogpath = %(sshd_log)s\nbackend = systemd\nmaxretry = 5\nfindtime = 10m\nbantime = 1h\n\n# 4. Restart để áp dụng\nsudo systemctl restart fail2ban\n\n# 5. Kiểm tra jail\nsudo fail2ban-client status\nsudo fail2ban-client status sshd`}
            />
            <CheatCard
                title="Giải thích jail sshd"
                rows={[
                    ["enabled = true", "Bật bảo vệ SSH"],
                    ["port = ssh", "Dùng port SSH mặc định, thường là 22"],
                    ["backend = systemd", "Đọc log qua systemd journal"],
                    ["maxretry = 5", "Sai 5 lần thì ban"],
                    ["findtime = 10m", "Đếm lỗi trong 10 phút"],
                    ["bantime = 1h", "Ban trong 1 giờ"],
                ]}
            />
        </div>
    );
}

function Fail2banStatusSection() {
    const [banned, setBanned] = useState(true);
    return (
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
            <CodeBlock
                title="fail2ban-status-and-unban.sh"
                code={`# Xem danh sách jail\nsudo fail2ban-client status\n\n# Output mẫu:\n# Status\n# |- Number of jail:      1\n# \\- Jail list:           sshd\n\n# Xem jail sshd\nsudo fail2ban-client status sshd\n\n# Output mẫu:\n# Currently failed: 1\n# Total failed:     12\n# Currently banned: 2\n# Total banned:     5\n# Banned IP list:   203.0.113.50 198.51.100.20\n\n# Gỡ ban IP bị chặn nhầm\nsudo fail2ban-client set sshd unbanip 203.0.113.50\n# Output 1 = đã gỡ ban thành công\n\n# Thêm IP tin cậy vào jail.local:\n[DEFAULT]\nignoreip = 127.0.0.1/8 ::1 203.0.113.50\n\nsudo systemctl restart fail2ban`}
            />
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 h-fit">
                <h4 className="font-bold text-white mb-4">
                    Mô phỏng IP bị ban
                </h4>
                <button
                    onClick={() => setBanned((v) => !v)}
                    className={`w-full p-4 rounded-xl border font-bold mb-5 ${banned ? "bg-red-500 text-white border-red-500" : "bg-green-500 text-white border-green-500"}`}
                >
                    {banned
                        ? "203.0.113.50 đang bị ban"
                        : "203.0.113.50 đã được gỡ ban"}
                </button>
                <pre className="bg-black border border-slate-800 rounded-xl p-4 text-sm whitespace-pre-wrap">
                    <code
                        className={banned ? "text-red-400" : "text-green-400"}
                    >
                        {banned
                            ? `Banned IP list: 203.0.113.50\n\n$ sudo fail2ban-client set sshd unbanip 203.0.113.50\n1`
                            : `Banned IP list:\n\nIP đã được gỡ ban khỏi jail sshd.`}
                    </code>
                </pre>
            </div>
        </div>
    );
}

function CommonErrorsSection() {
    const [tab, setTab] = useState("locked");
    const tabs = [
        ["locked", "Tự khóa SSH"],
        ["port", "Sai port SSH"],
        ["nojail", "Không thấy jail"],
        ["selfban", "Bị ban IP mình"],
        ["deny", "deny vs delete"],
    ];
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                {tabs.map(([id, label]) => (
                    <TabButton key={id} id={id} tab={tab} setTab={setTab}>
                        {label}
                    </TabButton>
                ))}
            </div>
            <div className="p-5">
                {tab === "locked" && (
                    <CodeBlock
                        title="locked-out-by-ufw.sh"
                        code={`# Triệu chứng:\nssh kha@192.168.1.100\n# ssh: connect to host 192.168.1.100 port 22: Connection timed out\n\n# Nguyên nhân thường gặp:\n# Bật ufw nhưng quên allow SSH.\n\n# Phòng tránh:\nsudo ufw allow ssh\nsudo ufw enable\n\n# Nếu đã bị khóa:\n# Vào Web Console / Recovery Console / Serial Console của VPS\nsudo ufw allow ssh\nsudo ufw reload\n\n# Hoặc tắt tạm firewall:\nsudo ufw disable`}
                    />
                )}
                {tab === "port" && (
                    <CodeBlock
                        title="wrong-ssh-port.sh"
                        code={`# SSH server chạy port 2222 nhưng bạn chỉ mở 22\nssh -p 2222 kha@192.168.1.100\n# ssh: connect to host 192.168.1.100 port 2222: Connection timed out\n\n# Kiểm tra port SSH trên server:\nsudo ss -tulpn | grep ssh\n# tcp LISTEN 0 128 0.0.0.0:2222 ... sshd\n\n# Sửa:\nsudo ufw allow 2222/tcp\nsudo ufw reload`}
                    />
                )}
                {tab === "nojail" && (
                    <CodeBlock
                        title="fail2ban-no-sshd-jail.sh"
                        code={`sudo fail2ban-client status\n# Number of jail: 0\n# Jail list:\n\n# Kiểm tra cấu hình:\nsudo nano /etc/fail2ban/jail.local\n\n# Nội dung tối thiểu:\n[sshd]\nenabled = true\nbackend = systemd\nmaxretry = 5\nfindtime = 10m\nbantime = 1h\n\n# Restart:\nsudo systemctl restart fail2ban\n\n# Nếu vẫn lỗi, xem log:\nsudo journalctl -u fail2ban --no-pager -n 50`}
                    />
                )}
                {tab === "selfban" && (
                    <CodeBlock
                        title="unban-yourself.sh"
                        code={`# Triệu chứng: nhập sai nhiều lần rồi SSH timeout\n# Vào console của nhà cung cấp VPS rồi chạy:\n\nsudo fail2ban-client status sshd\n\n# Nếu IP của bạn có trong Banned IP list:\nsudo fail2ban-client set sshd unbanip YOUR_IP\n\n# Ví dụ:\nsudo fail2ban-client set sshd unbanip 203.0.113.50\n\n# Phòng tránh với IP cố định đáng tin cậy:\nsudo nano /etc/fail2ban/jail.local\n\n[DEFAULT]\nignoreip = 127.0.0.1/8 ::1 203.0.113.50\n\nsudo systemctl restart fail2ban`}
                    />
                )}
                {tab === "deny" && (
                    <CodeBlock
                        title="deny-vs-delete.sh"
                        code={`# Muốn xóa rule mở 3306 nhưng chạy sai:\nsudo ufw deny 3306/tcp\n\n# Lệnh này KHÔNG xóa rule allow cũ. Nó thêm rule chặn mới.\n\n# Cách đúng:\nsudo ufw status numbered\nsudo ufw delete NUMBER\n\n# Ví dụ:\nsudo ufw delete 4`}
                    />
                )}
            </div>
        </div>
    );
}

function SecurityChecklistSection() {
    const items = [
        [KeyRound, "SSH dùng key", "Ưu tiên SSH key thay vì password."],
        [Shield, "Allow SSH trước", "Không tự khóa mình khi enable ufw."],
        [
            Globe,
            "Chỉ mở port cần thiết",
            "80/443 cho web; port khác xem xét kỹ.",
        ],
        [
            Database,
            "Không mở database public",
            "MySQL/Postgres/Redis/MongoDB nên private.",
        ],
        [Ban, "Cài fail2ban", "Tự ban IP brute-force SSH."],
        [
            PackageCheck,
            "Cập nhật bảo mật",
            "apt update && apt upgrade định kỳ.",
        ],
    ];
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map(([Icon, title, desc]) => (
                <div
                    key={title}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-5"
                >
                    <Icon className="text-orange-400 mb-3" size={24} />
                    <div className="font-bold text-white mb-1">{title}</div>
                    <p className="text-sm text-slate-500">{desc}</p>
                </div>
            ))}
        </div>
    );
}

function TabButton({ id, tab, setTab, children }) {
    return (
        <button
            onClick={() => setTab(id)}
            className={`px-4 py-2 rounded-xl text-sm font-bold ${tab === id ? "bg-orange-500 text-white" : "bg-slate-900 text-slate-400 hover:text-slate-200"}`}
        >
            {children}
        </button>
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
            title: "ufw cơ bản",
            rows: [
                ["ufw status", "xem trạng thái"],
                ["status verbose", "chi tiết"],
                ["status numbered", "có số rule"],
                ["ufw enable", "bật firewall"],
                ["ufw disable", "tắt firewall"],
            ],
        },
        {
            title: "Allow/Deny",
            rows: [
                ["allow ssh", "mở SSH"],
                ["allow 80/tcp", "HTTP"],
                ["allow 443/tcp", "HTTPS"],
                ["deny from IP", "chặn IP"],
                ["delete NUMBER", "xóa rule"],
            ],
        },
        {
            title: "fail2ban",
            rows: [
                ["apt install fail2ban", "cài đặt"],
                ["systemctl status", "kiểm tra service"],
                ["jail.local", "cấu hình riêng"],
                ["backend=systemd", "đọc journal"],
                ["restart", "áp dụng config"],
            ],
        },
        {
            title: "Jail sshd",
            rows: [
                ["enabled=true", "bật jail"],
                ["maxretry=5", "sai 5 lần"],
                ["findtime=10m", "trong 10 phút"],
                ["bantime=1h", "ban 1 giờ"],
                ["ignoreip", "IP tin cậy"],
            ],
        },
        {
            title: "Debug",
            rows: [
                ["ss -tulpn", "xem port SSH"],
                ["journalctl -u fail2ban", "log fail2ban"],
                ["status sshd", "banned IP"],
                ["unbanip IP", "gỡ ban"],
                ["console VPS", "cứu khi khóa SSH"],
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
        question: "Trước khi bật ufw trên server đang SSH từ xa, phải làm gì?",
        options: [
            "sudo ufw allow ssh",
            "sudo ufw delete ssh",
            "sudo ufw deny 22",
            "sudo apt remove ssh",
        ],
        correct: 0,
        explanation:
            "Phải mở SSH trước khi ufw enable để tránh tự khóa kết nối SSH.",
    },
    {
        question: "Lệnh nào xem rule ufw kèm số thứ tự để xóa?",
        options: [
            "sudo ufw status numbered",
            "sudo ufw list ids",
            "sudo ufw rules -n",
            "sudo fail2ban-client numbered",
        ],
        correct: 0,
        explanation:
            "ufw status numbered hiển thị số thứ tự rule, sau đó xóa bằng ufw delete NUMBER.",
    },
    {
        question:
            "Port nào thường không nên mở public nếu database chỉ dùng nội bộ?",
        options: ["3306", "443", "80", "22"],
        correct: 0,
        explanation:
            "MySQL dùng port 3306. Database thường không nên mở ra internet nếu không có lý do rõ ràng.",
    },
    {
        question: "fail2ban làm gì?",
        options: [
            "Theo dõi log và tự ban IP đăng nhập sai nhiều lần",
            "Format ổ đĩa",
            "Cài Ubuntu",
            "Tạo SSH key",
        ],
        correct: 0,
        explanation:
            "fail2ban đọc log, nhận diện brute-force và chặn IP bằng firewall.",
    },
    {
        question: "File cấu hình riêng nên dùng cho fail2ban là gì?",
        options: [
            "/etc/fail2ban/jail.local",
            "/etc/fail2ban/jail.conf",
            "/etc/ufw/fail.local",
            "~/.ssh/authorized_keys",
        ],
        correct: 0,
        explanation:
            "Không nên sửa trực tiếp jail.conf; jail.local dùng để ghi đè cấu hình riêng an toàn hơn.",
    },
    {
        question: "Trong jail sshd, maxretry = 5 nghĩa là gì?",
        options: [
            "Sai 5 lần thì bị ban",
            "Ban trong 5 giờ",
            "Mở 5 port",
            "Cho phép 5 user",
        ],
        correct: 0,
        explanation:
            "maxretry quy định số lần thất bại tối đa trong findtime trước khi fail2ban ban IP.",
    },
    {
        question: "Muốn gỡ ban IP 203.0.113.50 trong jail sshd dùng lệnh nào?",
        options: [
            "sudo fail2ban-client set sshd unbanip 203.0.113.50",
            "sudo ufw allow ban 203.0.113.50",
            "sudo fail2ban remove sshd 203.0.113.50",
            "sudo systemctl unban fail2ban",
        ],
        correct: 0,
        explanation:
            "fail2ban-client set sshd unbanip IP dùng để gỡ IP khỏi danh sách bị ban của jail sshd.",
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
