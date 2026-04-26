import React, { useState } from "react";
import {
    Network,
    Server,
    Terminal,
    Shield,
    Globe,
    Database,
    Search,
    Activity,
    Eye,
    AlertTriangle,
    Info,
    CheckCircle2,
    XCircle,
    Copy,
    ChevronRight,
    RotateCcw,
    Sparkles,
    Lock,
    Unlock,
    Wifi,
    WifiOff,
    Bug,
    Wrench,
    ListChecks,
    FileText,
    Settings,
    Radar,
    Router,
    Cpu,
    DoorOpen,
    PackageCheck,
    ShieldAlert,
    Trash2,
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
                                Security · Ports · ss · lsof · nmap
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 10
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 10.4
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" /> Kiểm
                        tra bề mặt tấn công của server
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Kiểm Tra Cổng Mở <br />
                        <span className="text-orange-500">
                            Và Dịch Vụ Đang Lắng Nghe
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Bạn sẽ hiểu port là gì, dịch vụ listen nghĩa là gì, phân
                        biệt <code className="text-orange-300">127.0.0.1</code>{" "}
                        và <code className="text-orange-300">0.0.0.0</code>,
                        dùng <code className="text-orange-300">ss</code>,{" "}
                        <code className="text-orange-300">lsof</code>,{" "}
                        <code className="text-orange-300">systemctl</code>,{" "}
                        <code className="text-orange-300">ufw</code> và{" "}
                        <code className="text-orange-300">nmap</code> để kiểm
                        tra server.
                    </p>
                </section>

                <section className="bg-red-500/10 border border-red-500/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-5 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                        <ShieldAlert size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Cảnh báo khi dùng nmap
                        </h3>
                        <p className="text-red-100 leading-relaxed">
                            Chỉ quét port trên máy chủ của bạn hoặc hệ thống bạn
                            được phép kiểm tra. Không tự ý quét hệ thống của
                            người khác. Với server production, hãy quét có kiểm
                            soát để tránh làm nhiễu log hoặc cảnh báo bảo mật.
                        </p>
                    </div>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <PortConceptCard />
                    <ListenAddressSimulator />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="blue"
                        icon={<Network size={22} />}
                        title="Port và dịch vụ listen là gì?"
                        subtitle="IP là địa chỉ tòa nhà; port là cửa/phòng; dịch vụ là chương trình đang chờ kết nối ở cửa đó."
                    />
                    <PortConceptSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="green"
                        icon={<Terminal size={22} />}
                        title="Dùng ss kiểm tra port đang lắng nghe"
                        subtitle="ss là công cụ hiện đại thay thế netstat, dùng để xem socket, port và process."
                    />
                    <SsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="orange"
                        icon={<Search size={22} />}
                        title="Tìm process đang dùng một port"
                        subtitle="Dùng grep với ss hoặc lsof để biết port 80, 22, 3306, 3000 đang do process nào chiếm."
                    />
                    <FindProcessSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="purple"
                        icon={<Shield size={22} />}
                        title="So sánh listen port với firewall ufw"
                        subtitle="Một port public cần cả hai điều kiện: dịch vụ đang listen và firewall cho phép đi vào."
                    />
                    <FirewallCompareSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="cyan"
                        icon={<Radar size={22} />}
                        title="Quét từ bên ngoài bằng nmap"
                        subtitle="nmap cho biết từ máy khác nhìn thấy port nào open, closed hoặc filtered."
                    />
                    <NmapSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="red"
                        icon={<Database size={22} />}
                        title="Tình huống nguy hiểm: database listen public"
                        subtitle="MySQL 0.0.0.0:3306 cộng với ufw allow 3306 là cấu hình rủi ro lớn."
                    />
                    <DatabaseRiskSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="yellow"
                        icon={<Bug size={22} />}
                        title="Lỗi phổ biến và cách xử lý"
                        subtitle="Không thấy process vì thiếu sudo, nmap chưa cài, port listen nhưng ngoài không vào được, nhầm 127.0.0.1 và xóa nhầm ufw rule."
                    />
                    <CommonErrorsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="8"
                        color="pink"
                        icon={<FileText size={22} />}
                        title="Bài tập thực hành"
                        subtitle="Tự kiểm tra port listen, so sánh với ufw và xử lý tình huống MySQL public."
                    />
                    <PracticeSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="9"
                        color="emerald"
                        icon={<ListChecks size={22} />}
                        title="Tóm tắt nhanh"
                        subtitle="Các lệnh ss, lsof, ufw, systemctl và nmap cần nhớ sau bài 10.4."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <PackageCheck className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức bài 10.4
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Ôn lại ss -tulpn, 127.0.0.1 vs 0.0.0.0, ufw,
                                    lsof, nmap và database public.
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
                        Bạn đã biết kiểm tra cổng mở và dịch vụ listen. Tiếp
                        theo là AppArmor — lớp bảo vệ ứng dụng trên Ubuntu.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                        Bài tiếp theo: 10.5 — AppArmor cơ bản{" "}
                        <ChevronRight size={20} />
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
        red: "bg-red-500/20 text-red-400",
        yellow: "bg-yellow-500/20 text-yellow-400",
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

function PortConceptCard() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-orange-500/15 text-orange-400 rounded-2xl flex items-center justify-center">
                    <DoorOpen size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        Port là gì?
                    </h3>
                    <p className="text-slate-500 text-sm">
                        Cửa/phòng của dịch vụ mạng
                    </p>
                </div>
            </div>
            <div className="bg-black border border-slate-800 rounded-2xl p-5 font-mono text-sm text-slate-300 whitespace-pre-wrap mb-5">{`Server Ubuntu = một tòa nhà\nIP address    = địa chỉ tòa nhà\nPort          = số phòng/cửa\nDịch vụ       = người/ngành làm việc trong phòng`}</div>
            <div className="grid sm:grid-cols-2 gap-3">
                <PortCard service="SSH" port="22" icon={<Lock />} />
                <PortCard service="HTTP" port="80" icon={<Globe />} />
                <PortCard service="HTTPS" port="443" icon={<Shield />} />
                <PortCard
                    service="MySQL"
                    port="3306"
                    icon={<Database />}
                    danger
                />
                <PortCard
                    service="PostgreSQL"
                    port="5432"
                    icon={<Database />}
                    danger
                />
                <PortCard
                    service="Redis"
                    port="6379"
                    icon={<Database />}
                    danger
                />
            </div>
        </div>
    );
}

function PortCard({ service, port, icon, danger }) {
    return (
        <div
            className={`rounded-2xl border p-4 ${danger ? "bg-red-500/10 border-red-500/20" : "bg-slate-950 border-slate-800"}`}
        >
            <div
                className={
                    danger ? "text-red-400 mb-2" : "text-orange-400 mb-2"
                }
            >
                {icon}
            </div>
            <div className="flex justify-between gap-3 items-center">
                <span className="font-bold text-white">{service}</span>
                <code className="text-orange-300">{port}</code>
            </div>
        </div>
    );
}

function ListenAddressSimulator() {
    const [addr, setAddr] = useState("127.0.0.1");
    const data = {
        "127.0.0.1": [
            "Chỉ local server truy cập được",
            "Không public ra ngoài",
            "bg-green-500/10 border-green-500/20 text-green-300",
        ],
        "0.0.0.0": [
            "Lắng nghe mọi card mạng IPv4",
            "Có thể public nếu firewall cho phép",
            "bg-red-500/10 border-red-500/20 text-red-300",
        ],
        "::": [
            "Lắng nghe mọi card mạng IPv6",
            "Có thể public qua IPv6",
            "bg-yellow-500/10 border-yellow-500/20 text-yellow-300",
        ],
        "192.168.1.100": [
            "Lắng nghe trên IP cụ thể",
            "Truy cập trong mạng tương ứng",
            "bg-blue-500/10 border-blue-500/20 text-blue-300",
        ],
    };
    return (
        <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Eye className="text-orange-400" /> Listen address quan trọng
                thế nào?
            </h3>
            <p className="text-slate-400 mb-6">
                Chọn địa chỉ listen để xem mức độ public của dịch vụ.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-5">
                {Object.keys(data).map((key) => (
                    <button
                        key={key}
                        onClick={() => setAddr(key)}
                        className={`p-3 rounded-xl border font-bold text-sm ${addr === key ? "bg-orange-500 text-white border-orange-500" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"}`}
                    >
                        {key}
                    </button>
                ))}
            </div>
            <div className={`rounded-2xl border p-5 ${data[addr][2]}`}>
                <div className="text-xs opacity-80 mb-2">Ví dụ</div>
                <code className="text-2xl font-black">{addr}:3306</code>
                <p className="text-slate-200 mt-4 font-semibold">
                    {data[addr][0]}
                </p>
                <p className="text-slate-400 text-sm mt-2">{data[addr][1]}</p>
            </div>
            <div className="mt-5 bg-slate-950 border border-slate-800 rounded-2xl p-4 text-sm text-slate-400">
                Port listen chưa chắc public: còn phụ thuộc firewall, cloud
                security group, router/NAT và cấu hình dịch vụ.
            </div>
        </div>
    );
}

function PortConceptSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="listen-concepts.txt"
                code={`# Dịch vụ listen nghĩa là:\n# Chương trình đang mở một port và chờ kết nối.\n\nsshd  listen 22    → cho phép SSH\nnginx listen 80    → website HTTP\nnginx listen 443   → website HTTPS\nmysql listen 3306  → database MySQL\n\n# Hai tầng cần kiểm tra:\n# Tầng 1: Dịch vụ có listen port không?\n# Tầng 2: Firewall có cho bên ngoài vào port đó không?\n\n# Port public thực tế thường cần:\n# listen 0.0.0.0 hoặc IP public/private phù hợp\n# + ufw/cloud firewall allow\n# + service chạy ổn định`}
            />
            <CheatCard
                title="Địa chỉ listen"
                rows={[
                    ["127.0.0.1", "Chỉ local server truy cập được"],
                    ["localhost", "Tương tự 127.0.0.1"],
                    ["0.0.0.0", "Mọi card mạng IPv4"],
                    ["::", "Mọi card mạng IPv6"],
                    ["192.168.1.100", "IP cụ thể của máy"],
                ]}
            />
        </div>
    );
}

function SsSection() {
    const [tab, setTab] = useState("all");
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                <TabButton id="all" tab={tab} setTab={setTab}>
                    ss -tulpn
                </TabButton>
                <TabButton id="tcp" tab={tab} setTab={setTab}>
                    TCP only
                </TabButton>
                <TabButton id="output" tab={tab} setTab={setTab}>
                    Đọc output
                </TabButton>
            </div>
            <div className="p-5">
                {tab === "all" && (
                    <CodeBlock
                        title="ss-all-listening.sh"
                        code={`sudo ss -tulpn\n\n# sudo: xem đầy đủ tên process\n# ss: xem socket/network connection\n# -t: TCP\n# -u: UDP\n# -l: chỉ port đang LISTEN\n# -p: hiện process/program\n# -n: hiện số port, không đổi sang tên dịch vụ`}
                    />
                )}
                {tab === "tcp" && (
                    <CodeBlock
                        title="ss-tcp-listening.sh"
                        code={`sudo ss -tlpn\n\n# -t: TCP\n# -l: listening\n# -p: process\n# -n: numeric\n\n# Kiểm tra nhanh web server:\nsudo ss -tulpn | grep -E ':22|:80|:443'`}
                    />
                )}
                {tab === "output" && (
                    <CodeBlock
                        title="ss-output-example.txt"
                        code={`$ sudo ss -tulpn\nNetid State  Recv-Q Send-Q Local Address:Port  Peer Address:Port Process\ntcp   LISTEN 0      128    0.0.0.0:22          0.0.0.0:*     users:(("sshd",pid=812,fd=3))\ntcp   LISTEN 0      511    0.0.0.0:80          0.0.0.0:*     users:(("nginx",pid=1024,fd=6))\ntcp   LISTEN 0      151    127.0.0.1:3306      0.0.0.0:*     users:(("mysqld",pid=1330,fd=21))\ntcp   LISTEN 0      511    [::]:443            [::]:*        users:(("nginx",pid=1025,fd=6))\n\n# Phân tích:\n# 0.0.0.0:22      → SSH nghe mọi IPv4\n# 0.0.0.0:80      → Nginx HTTP nghe mọi IPv4\n# 127.0.0.1:3306  → MySQL chỉ local, tốt\n# [::]:443        → Nginx HTTPS nghe IPv6`}
                    />
                )}
            </div>
        </div>
    );
}

function FindProcessSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="find-process-by-port.sh"
                code={`# Tìm dịch vụ đang dùng port cụ thể bằng ss\nsudo ss -tulpn | grep ':80'\nsudo ss -tulpn | grep ':22'\nsudo ss -tulpn | grep ':3306'\nsudo ss -tulpn | grep ':3000'\n\n# Dùng lsof\nsudo lsof -i :80\nsudo lsof -i :3000\n\n# Output mẫu lsof:\n# COMMAND  PID     USER   FD   TYPE DEVICE SIZE/OFF NODE NAME\n# nginx   1024     root    6u  IPv4  28123      0t0  TCP *:http (LISTEN)\n# nginx   1025 www-data    6u  IPv4  28123      0t0  TCP *:http (LISTEN)\n\n# Kiểm tra service systemd liên quan\nsystemctl status ssh\nsystemctl status nginx\nsystemctl status mysql`}
            />
            <CheatCard
                title="Cột lsof"
                rows={[
                    ["COMMAND", "Tên chương trình"],
                    ["PID", "Mã tiến trình"],
                    ["USER", "User chạy process"],
                    ["FD", "File descriptor"],
                    ["TYPE", "IPv4/IPv6"],
                    ["NAME", "Port/dịch vụ"],
                ]}
            />
        </div>
    );
}

function FirewallCompareSection() {
    return (
        <CodeBlock
            title="compare-listen-and-ufw.sh"
            code={`# 1. Xem dịch vụ đang listen\nsudo ss -tulpn\n\n# 2. Xem firewall\nsudo ufw status verbose\nsudo ufw status numbered\n\n# Ví dụ kết luận tốt:\n# ss:  0.0.0.0:22   users:(("sshd"))\n# ufw: 22/tcp ALLOW Anywhere\n# → SSH có thể truy cập từ ngoài nếu network/cloud firewall cũng cho phép\n\n# ss:  127.0.0.1:3306 users:(("mysqld"))\n# ufw: không có 3306\n# → MySQL chỉ local, tốt\n\n# Port cần public thường phải có cả:\n# 1. Dịch vụ đang listen\n# 2. Firewall cho phép\n# 3. Cloud firewall/security group/router cũng cho phép\n# 4. Dịch vụ hoạt động đúng`}
        />
    );
}

function NmapSection() {
    const [state, setState] = useState("open");
    const text = {
        open: ["open", "Port đang mở và nhận kết nối", "text-green-400"],
        closed: [
            "closed",
            "Máy có phản hồi nhưng port không mở",
            "text-yellow-400",
        ],
        filtered: [
            "filtered",
            "Firewall lọc/chặn, không xác định rõ",
            "text-red-400",
        ],
    };
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="nmap-scan.sh"
                code={`# Cài nmap\nsudo apt update\nsudo apt install nmap\n\n# Quét các port phổ biến\nnmap 192.168.1.100\n\n# Quét port chỉ định\nnmap -p 22,80,443,3306 192.168.1.100\n\n# Output mẫu:\n# PORT     STATE  SERVICE\n# 22/tcp   open   ssh\n# 80/tcp   open   http\n# 443/tcp  open   https\n# 3306/tcp closed mysql\n\n# Kết luận:\n# 22,80,443 mở\n# 3306 đóng\n# → Hợp lý cho web server cơ bản`}
            />
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 h-fit">
                <h4 className="font-bold text-white mb-4">
                    Mô phỏng nmap state
                </h4>
                <div className="grid grid-cols-3 gap-2 mb-5">
                    {Object.keys(text).map((k) => (
                        <button
                            key={k}
                            onClick={() => setState(k)}
                            className={`p-3 rounded-xl border font-bold text-sm ${state === k ? "bg-orange-500 text-white border-orange-500" : "bg-slate-900 border-slate-800 text-slate-400"}`}
                        >
                            {k}
                        </button>
                    ))}
                </div>
                <div className="bg-black border border-slate-800 rounded-xl p-5">
                    <code className={`text-3xl font-black ${text[state][2]}`}>
                        {text[state][0]}
                    </code>
                    <p className="text-slate-400 mt-3 text-sm">
                        {text[state][1]}
                    </p>
                </div>
            </div>
        </div>
    );
}

function DatabaseRiskSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="mysql-public-risk-fix.sh"
                code={`# Phát hiện MySQL listen public\nsudo ss -tulpn | grep ':3306'\n# tcp LISTEN 0 151 0.0.0.0:3306 0.0.0.0:* users:(("mysqld",pid=1330,fd=21))\n\n# Kiểm tra firewall\nsudo ufw status numbered\n# [ 4] 3306/tcp ALLOW IN Anywhere\n\n# Bước 1: Xác nhận app có cần truy cập MySQL từ xa không\n# Nếu không cần, xóa rule ufw 3306:\nsudo ufw delete 4\n\n# Bước 2: Cấu hình MySQL chỉ nghe local\nsudo nano /etc/mysql/mysql.conf.d/mysqld.cnf\n\n# Đổi:\nbind-address = 0.0.0.0\n# thành:\nbind-address = 127.0.0.1\n\n# Bước 3: Restart MySQL\nsudo systemctl restart mysql\n\n# Bước 4: Kiểm tra lại\nsudo ss -tulpn | grep ':3306'\n# tcp LISTEN 0 151 127.0.0.1:3306 ... mysqld`}
                note="Không đổi bind-address trên production nếu app thật sự kết nối DB từ server khác. Hãy xác nhận kiến trúc trước."
            />
            <div className="space-y-4">
                <RiskCard
                    title="0.0.0.0:3306"
                    desc="MySQL nghe mọi IPv4. Nếu firewall mở, rất rủi ro."
                    danger
                />
                <RiskCard
                    title="127.0.0.1:3306"
                    desc="MySQL chỉ local server truy cập được. Phù hợp app và DB cùng máy."
                />
                <RiskCard
                    title="ufw allow 3306"
                    desc="Chỉ dùng nếu bắt buộc, nên giới hạn theo IP tin cậy."
                    danger
                />
            </div>
        </div>
    );
}

function RiskCard({ title, desc, danger }) {
    return (
        <div
            className={`rounded-2xl border p-5 ${danger ? "bg-red-500/10 border-red-500/20" : "bg-green-500/10 border-green-500/20"}`}
        >
            <div
                className={danger ? "text-red-400 mb-3" : "text-green-400 mb-3"}
            >
                {danger ? <AlertTriangle /> : <CheckCircle2 />}
            </div>
            <div className="font-bold text-white">
                <code>{title}</code>
            </div>
            <p className="text-sm text-slate-400 mt-2">{desc}</p>
        </div>
    );
}

function CommonErrorsSection() {
    const [tab, setTab] = useState("sudo");
    const tabs = [
        ["sudo", "Thiếu sudo"],
        ["nmap", "nmap missing"],
        ["external", "Ngoài không vào"],
        ["localhost", "127.0.0.1"],
        ["ufw", "Xóa nhầm rule"],
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
                {tab === "sudo" && (
                    <CodeBlock
                        title="ss-without-sudo.sh"
                        code={`ss -tulpn\n# Output thiếu process hoặc không đủ thông tin\n\n# Nguyên nhân: không dùng sudo\n\n# Sửa:\nsudo ss -tulpn`}
                    />
                )}
                {tab === "nmap" && (
                    <CodeBlock
                        title="nmap-command-not-found.sh"
                        code={`nmap 192.168.1.100\n# nmap: command not found\n\n# Sửa:\nsudo apt update\nsudo apt install nmap`}
                    />
                )}
                {tab === "external" && (
                    <CodeBlock
                        title="listen-but-not-accessible.sh"
                        code={`# Trên server thấy nginx listen 80:\nsudo ss -tulpn | grep ':80'\n# tcp LISTEN 0 511 0.0.0.0:80 ... nginx\n\n# Nhưng máy khác không vào được website. Kiểm tra từng lớp:\nsudo ufw status\nsudo ufw allow 80/tcp\n\nsystemctl status nginx\ncurl http://localhost\n\n# Cũng cần kiểm tra:\n# - Cloud firewall/security group\n# - Router/NAT port forward\n# - DNS/domain trỏ đúng IP\n# - Website service thật sự trả response`}
                    />
                )}
                {tab === "localhost" && (
                    <CodeBlock
                        title="localhost-not-public.sh"
                        code={`sudo ss -tulpn | grep ':3000'\n# tcp LISTEN 0 511 127.0.0.1:3000 ... node\n\n# Dù mở ufw, bên ngoài vẫn không vào được:\nsudo ufw allow 3000/tcp\n\n# Nguyên nhân:\n# App chỉ listen 127.0.0.1, chỉ local truy cập được.\n\n# Ví dụ Node.js nếu muốn public:\napp.listen(3000, '0.0.0.0');\n\n# Kiểm tra lại:\nsudo ss -tulpn | grep ':3000'\n# 0.0.0.0:3000\n\n# Cảnh báo: không phải app nào cũng nên public.`}
                    />
                )}
                {tab === "ufw" && (
                    <CodeBlock
                        title="deleted-ssh-rule.sh"
                        code={`# Xóa nhầm rule SSH:\nsudo ufw delete 1\n\n# Nếu rule 1 là 22/tcp, SSH mới có thể không vào được.\n\n# Phòng tránh:\nsudo ufw status numbered\n# Đọc kỹ từng rule trước khi delete\n\n# Nếu đang SSH từ xa:\n# - Giữ terminal cũ mở\n# - Mở terminal mới test SSH\n# - Không xóa rule SSH nếu chưa có port thay thế`}
                    />
                )}
            </div>
        </div>
    );
}

function PracticeSection() {
    return (
        <div className="grid lg:grid-cols-3 gap-4">
            <PracticeCard
                level="Dễ"
                title="Kiểm tra port listen"
                code={`sudo ss -tulpn`}
                tasks={[
                    "Máy đang mở port nào?",
                    "Dịch vụ nào dùng từng port?",
                    "Có 127.0.0.1 không?",
                    "Có 0.0.0.0 không?",
                ]}
            />
            <PracticeCard
                level="Trung bình"
                title="So sánh với firewall"
                code={`sudo ss -tulpn\nsudo ufw status verbose`}
                tasks={[
                    "Port nào đang listen?",
                    "Port nào được ufw cho phép?",
                    "Có port listen nhưng ufw không allow?",
                    "Có ufw allow nhưng service không listen?",
                ]}
            />
            <PracticeCard
                level="Nâng cao"
                title="Xử lý MySQL public"
                code={`ss: 0.0.0.0:3306\nufw: 3306 ALLOW Anywhere`}
                tasks={[
                    "Xác nhận app có cần DB từ xa không",
                    "Nếu không cần: xóa rule ufw",
                    "Đổi bind-address 127.0.0.1",
                    "Restart MySQL",
                    "Kiểm tra lại bằng ss",
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
            title: "ss",
            rows: [
                ["ss -tulpn", "TCP/UDP listen + process"],
                ["ss -tlpn", "TCP listen"],
                ["grep ':80'", "lọc port"],
                ["sudo", "xem đủ process"],
                ["LISTEN", "đang lắng nghe"],
            ],
        },
        {
            title: "lsof/systemctl",
            rows: [
                ["lsof -i :80", "process dùng port"],
                ["systemctl status ssh", "SSH"],
                ["systemctl status nginx", "Nginx"],
                ["systemctl status mysql", "MySQL"],
            ],
        },
        {
            title: "ufw",
            rows: [
                ["ufw status verbose", "firewall chi tiết"],
                ["ufw status numbered", "rule có số"],
                ["ufw allow 80/tcp", "mở HTTP"],
                ["ufw delete NUMBER", "xóa rule"],
            ],
        },
        {
            title: "nmap",
            rows: [
                ["nmap IP", "quét port phổ biến"],
                ["nmap -p 22,80", "quét port chỉ định"],
                ["open", "đang nhận kết nối"],
                ["closed", "port không mở"],
                ["filtered", "firewall lọc"],
            ],
        },
        {
            title: "Ghi nhớ",
            rows: [
                ["127.0.0.1", "chỉ local"],
                ["0.0.0.0", "mọi IPv4"],
                ["::", "mọi IPv6"],
                ["DB/cache", "không public nếu không cần"],
                ["ít port", "an toàn hơn"],
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
        question: "Lệnh nào xem TCP/UDP port đang listen kèm process?",
        options: [
            "sudo ss -tulpn",
            "sudo apt update",
            "sudo chmod 600",
            "sudo tar -czf",
        ],
        correct: 0,
        explanation:
            "ss -tulpn xem TCP/UDP, listen, process và numeric port. sudo giúp hiện đủ process.",
    },
    {
        question: "127.0.0.1:3306 nghĩa là gì?",
        options: [
            "MySQL chỉ local server truy cập được",
            "MySQL public toàn internet",
            "Port bị xóa",
            "Firewall đang tắt",
        ],
        correct: 0,
        explanation:
            "127.0.0.1 là loopback/localhost, chỉ chính máy đó truy cập được.",
    },
    {
        question: "0.0.0.0:3306 có gì đáng chú ý?",
        options: [
            "Dịch vụ nghe mọi IPv4, cần cẩn thận nếu firewall mở",
            "Chắc chắn bị chặn",
            "Chỉ local",
            "Port đã đóng",
        ],
        correct: 0,
        explanation:
            "0.0.0.0 nghĩa là listen trên mọi card IPv4. Nếu firewall cho phép thì có thể public.",
    },
    {
        question: "Lệnh nào tìm process đang dùng port 80 bằng lsof?",
        options: [
            "sudo lsof -i :80",
            "sudo lsof /80",
            "sudo ss -delete 80",
            "systemctl port 80",
        ],
        correct: 0,
        explanation: "lsof -i :80 lọc socket mạng liên quan port 80.",
    },
    {
        question:
            "Port listen nhưng bên ngoài không truy cập được. Nguyên nhân nào hợp lý?",
        options: [
            "ufw/cloud firewall chưa mở port",
            "Port càng thấp càng chậm",
            "Do thiếu zip",
            "Do lsblk chưa chạy",
        ],
        correct: 0,
        explanation:
            "Listen chỉ là tầng dịch vụ. Bên ngoài còn phụ thuộc ufw, cloud firewall, router/NAT, DNS và service response.",
    },
    {
        question: "nmap state filtered nghĩa là gì?",
        options: [
            "Firewall lọc/chặn, không xác định rõ",
            "Port chắc chắn mở",
            "Service đang restart",
            "Port là localhost",
        ],
        correct: 0,
        explanation:
            "filtered thường nghĩa là gói tin bị firewall lọc/chặn nên nmap không xác định rõ open hay closed.",
    },
    {
        question:
            "Nếu phát hiện MySQL 0.0.0.0:3306 và ufw allow 3306 Anywhere, bước giảm rủi ro hợp lý là gì?",
        options: [
            "Xác nhận nhu cầu, xóa rule 3306 nếu không cần, đổi bind-address về 127.0.0.1",
            "Mở thêm port 5432",
            "Tắt SSH",
            "Chạy apt autoremove",
        ],
        correct: 0,
        explanation:
            "Database public là rủi ro lớn. Cần xác nhận kiến trúc rồi hạn chế firewall và bind-address nếu không cần truy cập từ xa.",
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
