import React, { useState } from "react";
import {
    Activity,
    AlertTriangle,
    BarChart3,
    BookOpen,
    CheckCircle2,
    ChevronRight,
    ClipboardCheck,
    Clock,
    Code2,
    Database,
    Eye,
    Filter,
    Globe2,
    HelpCircle,
    Info,
    Layers,
    ListChecks,
    Map,
    Network,
    PlugZap,
    Radar,
    RefreshCcw,
    Router,
    Route,
    Search,
    Server,
    ShieldAlert,
    Signal,
    Skull,
    TerminalSquare,
    Timer,
    Wifi,
    Wrench,
    Zap,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-blue-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 border-b border-slate-800 sticky top-0 z-50 backdrop-blur">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🐧</span>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Linux/Ubuntu
                            </h1>
                            <p className="text-xs text-slate-500 hidden md:block">
                                Debug kết nối: ping, traceroute, mtr, ss,
                                netstat, nmap, tcpdump
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400 hidden md:inline-block">
                            Bài trước: 6.1
                        </span>
                        <div className="text-sm font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
                            Phần 6.2
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <Hero />

                <section className="space-y-6">
                    <SectionTitle
                        n="1"
                        color="blue"
                        icon={<Network size={22} />}
                        title="Tổng quan workflow debug mạng"
                    />
                    <NetworkDebugOverview />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="2"
                        color="green"
                        icon={<Signal size={22} />}
                        title="ping — kiểm tra máy đích có sống không"
                    />
                    <PingExplorer />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="3"
                        color="amber"
                        icon={<Activity size={22} />}
                        title="Đọc kết quả ping: latency, packet loss, lỗi thường gặp"
                    />
                    <PingResultAnalyzer />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="4"
                        color="purple"
                        icon={<Route size={22} />}
                        title="traceroute, tracepath, mtr — xem đường đi gói tin"
                    />
                    <TracerouteGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="5"
                        color="cyan"
                        icon={<PlugZap size={22} />}
                        title="ss — xem socket, port, kết nối hiện đại"
                    />
                    <SsExplorer />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="6"
                        color="orange"
                        icon={<TerminalSquare size={22} />}
                        title="netstat — công cụ cũ cần biết"
                    />
                    <NetstatGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="7"
                        color="pink"
                        icon={<Radar size={22} />}
                        title="nmap và tcpdump — scan port, bắt gói tin"
                    />
                    <ExtraToolsGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="8"
                        color="red"
                        icon={<Wrench size={22} />}
                        title="Kịch bản debug mạng thực tế"
                    />
                    <RealWorldScenarios />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="9"
                        color="teal"
                        icon={<Code2 size={22} />}
                        title="Script check_connection.sh — kiểm tra kết nối toàn diện"
                    />
                    <CheckConnectionPreview />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="10"
                        color="sky"
                        icon={<Database size={22} />}
                        title="Bảng port phổ biến cần nhớ"
                    />
                    <PortTable />
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
                                <span className="bg-blue-500/20 text-blue-400 p-2 rounded-lg">
                                    <ClipboardCheck size={20} />
                                </span>
                                Kiểm tra nhanh: ping, traceroute, ss, netstat
                            </h3>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                <div className="text-center pt-8 border-t border-slate-800">
                    <p className="text-slate-400 mb-4">
                        Bạn đã hoàn thành Phần 6.2 — Kiểm tra kết nối mạng.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-blue-500/20">
                        Bài tiếp theo: 6.3 — wget, curl và tải file từ internet{" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

function Hero() {
    const cards = [
        [Signal, "ping", "ICMP, latency, packet loss"],
        [Route, "traceroute/mtr", "Đường đi qua các hop"],
        [PlugZap, "ss", "Socket, port, process"],
        [Radar, "nmap/tcpdump", "Scan và bắt gói"],
    ];
    return (
        <section className="text-center space-y-5 py-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium">
                <Zap size={16} /> ping · traceroute · mtr · ss · netstat · nmap
                · tcpdump
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Kiểm Tra{" "}
                <span className="text-blue-400 font-mono">Kết Nối</span> Mạng
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Bài này giúp bạn debug từng lớp kết nối: DNS, ICMP, TCP port,
                route, service đang listen, process dùng port và packet capture
                khi cần điều tra sâu.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4">
                {cards.map(([Icon, title, desc]) => (
                    <div
                        key={title}
                        className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 text-left"
                    >
                        <Icon className="text-blue-400 mb-3" size={24} />
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
        blue: "bg-blue-500/20 text-blue-400",
        green: "bg-green-500/20 text-green-400",
        amber: "bg-amber-500/20 text-amber-400",
        purple: "bg-purple-500/20 text-purple-400",
        cyan: "bg-cyan-500/20 text-cyan-400",
        orange: "bg-orange-500/20 text-orange-400",
        pink: "bg-pink-500/20 text-pink-400",
        red: "bg-red-500/20 text-red-400",
        teal: "bg-teal-500/20 text-teal-400",
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
        blue: "bg-blue-500/10 border-blue-500/20 text-blue-300",
        green: "bg-green-500/10 border-green-500/20 text-green-300",
        amber: "bg-amber-500/10 border-amber-500/20 text-amber-300",
        purple: "bg-purple-500/10 border-purple-500/20 text-purple-300",
        cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
        orange: "bg-orange-500/10 border-orange-500/20 text-orange-300",
        pink: "bg-pink-500/10 border-pink-500/20 text-pink-300",
        rose: "bg-rose-500/10 border-rose-500/20 text-rose-300",
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

function NetworkDebugOverview() {
    const steps = [
        [
            "1",
            "DNS lookup",
            "google.com → 142.250.77.46",
            "resolvectl / nslookup / dig",
        ],
        [
            "2",
            "TCP connection",
            "192.168.1.100:54321 → 142.250.77.46:443",
            "ss / nc / curl",
        ],
        ["3", "HTTP request", "GET / qua TLS/HTTPS", "curl / wget / browser"],
    ];
    return (
        <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                <div className="flex items-start gap-5">
                    <div className="bg-blue-500/15 text-blue-400 p-4 rounded-2xl border border-blue-500/20">
                        <Network size={42} />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">
                            Debug mạng là debug theo từng lớp
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            Khi truy cập một website, máy cần phân giải DNS, tạo
                            kết nối TCP đến đúng port, rồi mới gửi HTTP request.
                            Mỗi công cụ trong bài này giúp kiểm tra một phần của
                            chuỗi đó.
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                            <MiniPoint
                                icon={<Signal size={18} />}
                                tone="green"
                                title="ping"
                                text="Kiểm tra ICMP, latency, packet loss. Không đảm bảo port web đang mở."
                            />
                            <MiniPoint
                                icon={<PlugZap size={18} />}
                                tone="cyan"
                                title="ss/nc"
                                text="Kiểm tra port đang listen hoặc port đích có mở không."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-2 space-y-3">
                {steps.map(([n, title, desc, tools]) => (
                    <div
                        key={n}
                        className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <span className="font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full px-3 py-1">
                                {n}
                            </span>
                            <div className="font-bold text-white">{title}</div>
                        </div>
                        <div className="text-xs text-slate-400 mb-1">
                            {desc}
                        </div>
                        <code className="text-xs text-blue-300">{tools}</code>
                    </div>
                ))}
            </div>
        </div>
    );
}

function PingExplorer() {
    const [tab, setTab] = useState("basic");
    const code = {
        basic: `$ ping google.com
PING google.com (142.250.77.46) 56(84) bytes of data.
64 bytes from hkg07s38-in-f14.1e100.net (142.250.77.46): icmp_seq=1 ttl=118 time=12.3 ms
64 bytes from hkg07s38-in-f14.1e100.net (142.250.77.46): icmp_seq=2 ttl=118 time=11.8 ms
64 bytes from hkg07s38-in-f14.1e100.net (142.250.77.46): icmp_seq=3 ttl=118 time=12.1 ms
^C
--- google.com ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
rtt min/avg/max/mdev = 11.8/12.0/12.3/0.2 ms`,
        options: `$ ping -c 4 google.com        # Ping 4 lần rồi dừng
$ ping -c 1 192.168.1.1       # Dùng trong script
$ ping -i 0.2 google.com      # Ping nhanh hơn
$ ping -i 5 server.com        # Ping mỗi 5 giây
$ ping -W 2 192.168.1.100     # Timeout 2 giây
$ ping -s 1024 google.com     # Gói 1024 bytes
$ ping -q -c 5 google.com     # Quiet, chỉ summary
$ ping -4 google.com          # Chỉ IPv4
$ ping -6 ipv6.google.com     # Chỉ IPv6
$ ping -D google.com          # In timestamp`,
        step: `# Bước 1: Network stack
$ ping -c 2 127.0.0.1

# Bước 2: Gateway/LAN
$ ping -c 2 192.168.1.1

# Bước 3: Internet bằng IP
$ ping -c 2 8.8.8.8

# Bước 4: DNS + Internet
$ ping -c 2 google.com

# Nếu bước 3 OK nhưng bước 4 FAIL → lỗi DNS
# Nếu bước 2 OK nhưng bước 3 FAIL → lỗi gateway/ISP`,
        script: `if ping -c 1 -W 2 192.168.1.100 &>/dev/null; then
    echo "✅ Server đang online"
else
    echo "❌ Server OFFLINE!"
fi

# Đo latency trung bình
$ ping -c 20 google.com | tail -1
rtt min/avg/max/mdev = 11.2/12.0/15.3/0.8 ms

# Phát hiện packet loss
$ ping -c 100 server.com | grep "packet loss"`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-4 border-b border-slate-700">
                {[
                    ["basic", "Output"],
                    ["options", "Options"],
                    ["step", "Step-by-step"],
                    ["script", "Script"],
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
                    <TerminalBlock title={`ping — ${tab}`} code={code[tab]} />
                </div>
                <div className="lg:col-span-2 space-y-3">
                    <MiniPoint
                        icon={<Signal size={18} />}
                        tone="green"
                        title="ICMP Echo"
                        text="ping gửi Echo Request, đích trả Echo Reply nếu cho phép ICMP."
                    />
                    <MiniPoint
                        icon={<Clock size={18} />}
                        tone="blue"
                        title="time/ms"
                        text="Round-trip time: thời gian đi-về của gói tin."
                    />
                    <MiniPoint
                        icon={<Timer size={18} />}
                        tone="amber"
                        title="ttl"
                        text="Time To Live còn lại, giảm qua mỗi router/hop."
                    />
                    <MiniPoint
                        icon={<AlertTriangle size={18} />}
                        tone="rose"
                        title="Không ping được chưa chắc chết"
                        text="Một số server/firewall chặn ICMP nhưng web/SSH vẫn hoạt động."
                    />
                </div>
            </div>
        </div>
    );
}

function PingResultAnalyzer() {
    const [mode, setMode] = useState("quality");
    const code = {
        quality: `Thời gian ping:
  < 1ms        Loopback/LAN cực nhanh
  1 - 20ms     Rất tốt
  20 - 50ms    Tốt
  50 - 100ms   Bình thường
  100 - 300ms  Chậm
  > 300ms      Rất chậm

Packet loss:
  0%           Hoàn hảo ✅
  1% - 5%      Chấp nhận được
  5% - 25%     Có vấn đề ⚠️
  > 25%        Nghiêm trọng ❌
  100%         Không kết nối được`,
        errors: `# Destination Host Unreachable
From 192.168.1.100 icmp_seq=1 Destination Host Unreachable
# → Không tìm thấy host trong LAN, ARP fail hoặc IP không tồn tại

# Network Unreachable
connect: Network is unreachable
# → Không có route. Kiểm tra: ip route

# Request timeout / 100% loss
Request timeout for icmp_seq 1
# → Host block ICMP hoặc không có đường đi

# Unknown host
ping: nonexistent.domain.xyz: Name or service not known
# → DNS không phân giải được

# TTL exceeded
From 192.168.1.1: icmp_seq=1 Time to live exceeded
# → Gói hết TTL trước khi đến đích`,
        monitor: `$ ping -i 5 myserver.com
# Monitor server mỗi 5 giây

$ ping -c 10 -q google.com
--- google.com ping statistics ---
10 packets transmitted, 10 received, 0% packet loss
rtt min/avg/max/mdev = 11.5/12.0/12.8/0.4 ms

$ sudo ping -f -c 1000 192.168.1.1
# Flood ping, dùng cẩn thận, cần root`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["quality", "Đánh giá chất lượng"],
                    ["errors", "Lỗi thường gặp"],
                    ["monitor", "Monitor"],
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
            <TerminalBlock
                title={`ping analysis — ${mode}`}
                code={code[mode]}
            />
        </div>
    );
}

function TracerouteGuide() {
    const [tab, setTab] = useState("basic");
    const code = {
        basic: `$ sudo apt install traceroute -y
$ traceroute google.com

traceroute to google.com (142.250.77.46), 30 hops max, 60 byte packets
 1  192.168.1.1 (192.168.1.1)             1.234 ms  1.102 ms  1.089 ms
 2  10.10.1.1 (10.10.1.1)                 5.234 ms  5.102 ms  5.456 ms
 3  172.16.0.1 (172.16.0.1)              12.345 ms 12.234 ms 12.567 ms
 4  * * *
 5  203.113.1.1 (203.113.1.1)            18.234 ms 18.456 ms 18.123 ms
 6  72.14.215.165 (72.14.215.165)        20.234 ms 19.456 ms 20.345 ms
 7  142.250.77.46                         21.234 ms 21.456 ms 21.123 ms`,
        analyze: `# * * * không nhất thiết là lỗi
 4  * * *
 5  203.113.1.1 18ms
# Router hop 4 không trả lời ICMP nhưng vẫn forward gói tin

# Latency tăng đột ngột
 5  router.isp.com  18ms
 6  core.isp.com    80ms  ← bottleneck giữa hop 5 và 6

# Routing loop
 5  192.168.1.1
 6  10.0.0.1
 7  192.168.1.1  ← lặp lại`,
        options: `$ traceroute -n google.com       # Không resolve DNS, nhanh hơn
$ traceroute -m 15 google.com      # Tối đa 15 hop
$ traceroute -w 2 google.com       # Timeout 2s mỗi hop
$ traceroute -q 5 google.com       # 5 probe mỗi hop
$ sudo traceroute -I google.com    # Dùng ICMP
$ sudo traceroute -T -p 80 google.com  # Dùng TCP port 80

# tracepath không cần root
$ tracepath google.com`,
        mtr: `$ sudo apt install mtr -y
$ mtr google.com
$ mtr --report google.com
$ mtr -n --report google.com

HOST: ubuntu-pc               Loss%   Snt  Last  Avg  Best  Wrst StDev
 1.|-- 192.168.1.1             0.0%    10   1.2  1.1   1.0   1.5  0.2
 2.|-- 10.10.1.1               0.0%    10   5.3  5.2   5.0   5.8  0.2
 3.|-- 172.16.0.1              0.0%    10  12.3 12.1  12.0  12.8  0.3
 4.|-- ???                   100.0%   10   0.0  0.0   0.0   0.0  0.0
 5.|-- 203.113.1.1             0.0%    10  18.2 18.1  17.9  18.7  0.3`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["basic", "traceroute"],
                        ["analyze", "Phân tích"],
                        ["options", "Options"],
                        ["mtr", "mtr"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setTab(k)}
                            className={`w-full text-left rounded-xl border p-4 font-bold ${tab === k ? "bg-purple-500/10 border-purple-500/40 text-purple-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                    <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-4 text-sm text-purple-100">
                        <code>mtr</code> là lựa chọn tốt nhất khi cần quan sát
                        đường đi realtime vì kết hợp ping + traceroute.
                    </div>
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock title={`trace — ${tab}`} code={code[tab]} />
                </div>
            </div>
        </div>
    );
}

function SsExplorer() {
    const [tab, setTab] = useState("listen");
    const code = {
        basic: `$ ss
Netid  State    Recv-Q  Send-Q  Local Address:Port    Peer Address:Port
u_str  ESTAB    0       0       /run/systemd/...      *
tcp    ESTAB    0       0       192.168.1.100:54321   142.250.77.46:443
tcp    LISTEN   0       128     0.0.0.0:22            0.0.0.0:*

Options:
  -t TCP | -u UDP | -l LISTEN | -n numeric | -p process
  -a all | -e extended | -s summary | -4 IPv4 | -6 IPv6`,
        listen: `$ ss -tuln
Netid State  Recv-Q Send-Q Local Address:Port Peer Address:Port
udp   UNCONN 0      0      0.0.0.0:68         0.0.0.0:*
tcp   LISTEN 0      128    0.0.0.0:22         0.0.0.0:*
tcp   LISTEN 0      511    0.0.0.0:80         0.0.0.0:*
tcp   LISTEN 0      511    0.0.0.0:443        0.0.0.0:*
tcp   LISTEN 0      128    127.0.0.1:5432     0.0.0.0:*

# 0.0.0.0:80 = listen mọi interface
# 127.0.0.1:5432 = chỉ localhost`,
        process: `$ sudo ss -tulnp
Netid State  Local Address:Port Process
tcp   LISTEN 0.0.0.0:22         users:(("sshd",pid=1234,fd=3))
tcp   LISTEN 0.0.0.0:80         users:(("nginx",pid=5678,fd=6))
tcp   LISTEN 0.0.0.0:443        users:(("nginx",pid=5678,fd=7))
tcp   LISTEN 127.0.0.1:5432     users:(("postgres",pid=9012,fd=5))
tcp   LISTEN 0.0.0.0:3306       users:(("mysqld",pid=3456,fd=21))`,
        active: `$ ss -tn
State  Recv-Q Send-Q Local Address:Port    Peer Address:Port
ESTAB  0      0      192.168.1.100:54321 142.250.77.46:443
ESTAB  0      0      192.168.1.100:45678 203.0.113.5:22
ESTAB  0      0      192.168.1.100:56789 104.16.0.1:443

$ ss -tna
$ ss -tunap
$ ss -s
$ ss -uln
$ ss -6 -tuln`,
        filter: `$ ss -tn dport = :443
$ ss -tn sport = :22
$ ss -tn dport = :80 or dport = :443
$ ss -tn dst 142.250.77.46
$ ss -tn src 192.168.1.100
$ ss -tn state established
$ ss -tn state listen
$ ss -tn state time-wait
$ ss -tn dst 192.168.1.0/24

$ ss -tnp state established dst 142.250.77.46
$ ss -tlnp | grep :80
$ ss -tn state established | grep ':80' | wc -l`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-5 border-b border-slate-700">
                {[
                    ["basic", "Cú pháp"],
                    ["listen", "LISTEN"],
                    ["process", "Process"],
                    ["active", "Active"],
                    ["filter", "Filter"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setTab(k)}
                        className={`p-3 font-bold border-b md:border-b-0 md:border-r last:border-r-0 border-slate-700 ${tab === k ? "bg-cyan-500/10 text-cyan-300" : "text-slate-400 hover:bg-slate-900"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="p-6 grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <TerminalBlock title={`ss — ${tab}`} code={code[tab]} />
                </div>
                <div className="lg:col-span-2 space-y-3">
                    <MiniPoint
                        icon={<PlugZap size={18} />}
                        tone="cyan"
                        title="ss thay netstat"
                        text="Nhanh hơn, hiện đại hơn, thường có sẵn trên Ubuntu."
                    />
                    <MiniPoint
                        icon={<Server size={18} />}
                        tone="green"
                        title="LISTEN"
                        text="Server process đang chờ kết nối trên port."
                    />
                    <MiniPoint
                        icon={<Activity size={18} />}
                        tone="blue"
                        title="ESTABLISHED"
                        text="Kết nối TCP đang hoạt động."
                    />
                    <MiniPoint
                        icon={<Search size={18} />}
                        tone="purple"
                        title="-p cần sudo"
                        text="Muốn thấy process/PID đầy đủ thường cần sudo."
                    />
                </div>
            </div>
        </div>
    );
}

function NetstatGuide() {
    const [tab, setTab] = useState("basic");
    const code = {
        basic: `$ sudo apt install net-tools -y

$ netstat -tuln
Proto Recv-Q Send-Q Local Address    Foreign Address State
tcp   0      0      0.0.0.0:22       0.0.0.0:*       LISTEN
tcp   0      0      0.0.0.0:80       0.0.0.0:*       LISTEN
tcp   0      0      127.0.0.1:5432   0.0.0.0:*       LISTEN
udp   0      0      0.0.0.0:68       0.0.0.0:*`,
        process: `$ sudo netstat -tulnp
Proto Local Address  Foreign Address State  PID/Program
tcp   0.0.0.0:22     0.0.0.0:*       LISTEN 1234/sshd
tcp   0.0.0.0:80     0.0.0.0:*       LISTEN 5678/nginx
tcp   127.0.0.1:5432 0.0.0.0:*       LISTEN 9012/postgres

$ netstat -tn
$ netstat -tuna
$ netstat -s
$ netstat -rn`,
        states: `TCP states:
  LISTEN       Server đang chờ kết nối
  ESTABLISHED  Kết nối đang hoạt động
  SYN_SENT     Client đang gửi yêu cầu kết nối
  SYN_RECV     Server nhận SYN, chờ hoàn tất handshake
  FIN_WAIT1    Đang đóng kết nối
  TIME_WAIT    Chờ timeout sau khi đóng, nhiều là bình thường khi server bận
  CLOSE_WAIT   App chưa đóng socket, nhiều có thể là bug
  LAST_ACK     Gần đóng xong

Cần chú ý:
  Nhiều SYN_RECV   → có thể SYN flood
  Nhiều CLOSE_WAIT → app không đóng connection đúng cách`,
        compare: `Mục đích                 netstat cũ       ss mới
────────────────────────────────────────────────────
Port listening           netstat -tuln    ss -tuln
Process trên port        netstat -tulnp   ss -tulnp
Kết nối TCP              netstat -tn      ss -tn
Tất cả                   netstat -tuna    ss -tuna
Thống kê                 netstat -s       ss -s
Routing table            netstat -rn      ip route
Tốc độ                   chậm hơn         nhanh hơn
Có sẵn mặc định          net-tools        thường có sẵn`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["basic", "Cơ bản"],
                    ["process", "Process/routing"],
                    ["states", "TCP states"],
                    ["compare", "So sánh ss"],
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
            <TerminalBlock title={`netstat — ${tab}`} code={code[tab]} />
        </div>
    );
}

function ExtraToolsGuide() {
    const [tool, setTool] = useState("nmap");
    const code = {
        nmap: `$ sudo apt install nmap -y

$ nmap localhost
$ nmap 127.0.0.1
$ nmap 192.168.1.1

$ nmap -p 80,443,22 192.168.1.100
$ nmap -p 1-1000 192.168.1.100
$ nmap -p- 192.168.1.100

$ nmap 192.168.1.0/24
$ nmap -sn 192.168.1.0/24

$ nmap -sV 192.168.1.100
PORT   STATE SERVICE  VERSION
22/tcp open  ssh      OpenSSH 9.6
80/tcp open  http     nginx 1.24.0
443/tcp open ssl/http nginx 1.24.0`,
        tcpdump: `$ sudo apt install tcpdump -y

$ sudo tcpdump -i enp3s0
$ sudo tcpdump -n -i enp3s0
$ sudo tcpdump -i enp3s0 host 8.8.8.8
$ sudo tcpdump -i enp3s0 port 80
$ sudo tcpdump -i enp3s0 port 443
$ sudo tcpdump -i enp3s0 tcp
$ sudo tcpdump -i enp3s0 udp
$ sudo tcpdump -i enp3s0 host 8.8.8.8 and port 53

$ sudo tcpdump -i enp3s0 -c 10
$ sudo tcpdump -i enp3s0 -w capture.pcap -c 100
$ tcpdump -r capture.pcap
$ sudo tcpdump -A -i enp3s0 port 80`,
        warning: `⚠️ Nguyên tắc an toàn:

nmap:
  Chỉ scan máy của bạn hoặc hệ thống được phép.
  Scan máy người khác có thể vi phạm chính sách/pháp luật.

tcpdump:
  Có thể ghi lại dữ liệu nhạy cảm.
  Không chia sẻ file .pcap nếu chưa kiểm tra nội dung.
  Khi SSH từ xa, dùng filter 'not port 22' để tránh nhiễu:

$ sudo tcpdump -c 10 -i any not port 22`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["nmap", "nmap scan port"],
                        ["tcpdump", "tcpdump capture"],
                        ["warning", "Lưu ý an toàn"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setTool(k)}
                            className={`w-full text-left rounded-xl border p-4 font-bold ${tool === k ? "bg-pink-500/10 border-pink-500/40 text-pink-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`extra tools — ${tool}`}
                        code={code[tool]}
                    />
                </div>
            </div>
        </div>
    );
}

function RealWorldScenarios() {
    const [scenario, setScenario] = useState("website");
    const scenarios = {
        website: {
            title: "Website không truy cập được",
            icon: Globe2,
            code: `# 1. DNS có phân giải được không?
$ nslookup mysite.com
$ dig mysite.com

# 2. Server có alive không?
$ ping mysite.com

# 3. Port 443 có mở không?
$ nmap -p 443 mysite.com
# open / closed / filtered

# 4. Đường đi có nghẽn không?
$ traceroute mysite.com
$ mtr --report mysite.com

# 5. Trên server, nginx có listen không?
$ sudo ss -tulnp | grep :443

# 6. Firewall có block không?
$ sudo ufw status | grep 443
$ sudo iptables -L | grep 443`,
        },
        attack: {
            title: "Nhiều kết nối lạ / server chậm",
            icon: ShieldAlert,
            code: `# Số kết nối established
$ ss -tn state established | wc -l
5432

# IP nào kết nối nhiều nhất?
$ ss -tn state established \
  | awk 'NR>1 {print $5}' \
  | cut -d: -f1 \
  | sort | uniq -c | sort -rn | head -10
 4521 203.0.113.1
   89 192.168.1.5

# SYN flood?
$ ss -tn state syn-recv | wc -l
1234

# Block IP
$ sudo ufw deny from 203.0.113.1 to any
$ watch -n 1 "ss -tn state established | wc -l"`,
        },
        port: {
            title: "Port 8080 already in use",
            icon: PlugZap,
            code: `$ sudo ss -tulnp | grep :8080
tcp LISTEN 0 128 0.0.0.0:8080 users:(("java",pid=12345,fd=23))

$ ps aux | grep 12345
alice 12345 0.5 2.3 /usr/bin/java -jar old-app.jar

# Kill process cũ
$ kill 12345
$ kill -9 12345

# Hoặc đổi port app mới
$ java -jar new-app.jar --port 8081`,
        },
        database: {
            title: "App không kết nối được MySQL",
            icon: Database,
            code: `$ sudo ss -tulnp | grep :3306
tcp LISTEN 0 151 127.0.0.1:3306 users:(("mysqld",pid=3456))
# MySQL chỉ listen localhost → app từ xa không vào được

$ sudo grep "bind-address" /etc/mysql/mysql.conf.d/mysqld.cnf
bind-address = 127.0.0.1

# Sửa thành 0.0.0.0 nếu thật sự cần remote access
$ sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
bind-address = 0.0.0.0

$ sudo systemctl restart mysql
$ sudo ufw allow from 192.168.1.0/24 to any port 3306
$ ss -tulnp | grep :3306`,
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

function CheckConnectionPreview() {
    const [view, setView] = useState("summary");
    const content = {
        summary: `╔══════════════════════════════════════════╗
║     KIỂM TRA KẾT NỐI MẠNG              ║
╚══════════════════════════════════════════╝
  Đích kiểm tra: google.com
  Gateway:       192.168.1.1
  DNS server:    8.8.8.8`,
        checks: `▶ 1. Loopback (network stack):
  ✅ Loopback OK (127.0.0.1)

▶ 2. Gateway (mạng nội bộ):
  ✅ Gateway 192.168.1.1 OK (avg: 1.2ms)

▶ 3. Internet (kết nối ra ngoài):
  ✅ Internet OK - 8.8.8.8 (avg: 12.0ms)

▶ 4. DNS (phân giải tên miền):
  ✅ DNS OK - google.com → 142.250.77.46`,
        target: `▶ 5. Kết nối đến google.com:
  ✅ Ping OK (loss: 0%, avg: 12.1ms)
  ✅ Port 80 (HTTP) OPEN
  ✅ Port 443 (HTTPS) OPEN

▶ 6. Route đến google.com:
  ℹ️  142.250.77.46 via 192.168.1.1 dev enp3s0 src 192.168.1.100`,
        listen: `▶ 7. Port đang LISTEN trên máy này:
  ℹ️  Port 22 (tcp) - 0.0.0.0:22
  ℹ️  Port 80 (tcp) - 0.0.0.0:80
  ℹ️  Port 443 (tcp) - 0.0.0.0:443
  ℹ️  Port 5432 (tcp) - 127.0.0.1:5432

══════════════════════════════════════════════`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-2">
                    {[
                        ["summary", "Header"],
                        ["checks", "4 bước đầu"],
                        ["target", "Target/route"],
                        ["listen", "Listening ports"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setView(k)}
                            className={`w-full text-left rounded-xl border p-3 font-bold text-sm ${view === k ? "bg-teal-500/10 border-teal-500/40 text-teal-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title="check_connection.sh preview"
                        code={content[view]}
                    />
                </div>
            </div>
        </div>
    );
}

function PortTable() {
    const ports = [
        ["22", "TCP", "SSH", "Remote shell"],
        ["53", "TCP/UDP", "DNS", "Name resolution"],
        ["67/68", "UDP", "DHCP", "IP cấp tự động"],
        ["80", "TCP", "HTTP", "Web"],
        ["123", "UDP", "NTP", "Đồng bộ giờ"],
        ["443", "TCP", "HTTPS", "Web an toàn"],
        ["3306", "TCP", "MySQL", "Database"],
        ["5432", "TCP", "PostgreSQL", "Database"],
        ["6379", "TCP", "Redis", "Cache/queue"],
        ["8080", "TCP", "HTTP alt", "App dev thường dùng"],
        ["9200", "TCP", "Elasticsearch", "Search"],
        ["27017", "TCP", "MongoDB", "Database"],
    ];
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="overflow-x-auto border border-slate-700 rounded-2xl">
                <table className="w-full text-sm min-w-[680px]">
                    <thead className="bg-slate-950 text-slate-400">
                        <tr>
                            <th className="text-left p-4">Port</th>
                            <th className="text-left p-4">Protocol</th>
                            <th className="text-left p-4">Service</th>
                            <th className="text-left p-4">Ý nghĩa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ports.map(([port, proto, service, desc]) => (
                            <tr
                                key={port}
                                className="border-t border-slate-700 bg-slate-900/60"
                            >
                                <td className="p-4 font-mono text-sky-300 font-bold">
                                    {port}
                                </td>
                                <td className="p-4 text-slate-300">{proto}</td>
                                <td className="p-4 font-bold text-white">
                                    {service}
                                </td>
                                <td className="p-4 text-slate-400">{desc}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function PracticeChecklist() {
    const tasks = [
        ["Ping 5 gói", "ping -c 5 google.com"],
        [
            "Ping gateway",
            "ping -c 3 $(ip route | grep default | awk '{print $3}')",
        ],
        [
            "Ping kiểm tra IP và DNS",
            "ping -c 3 8.8.8.8 && ping -c 3 google.com",
        ],
        ["Ping output ngắn", "ping -c 10 -q google.com"],
        [
            "Ping trong script",
            "if ping -c1 -W2 8.8.8.8 &>/dev/null; then echo 'Có internet ✅'; else echo 'Mất internet ❌'; fi",
        ],
        ["Cài traceroute và mtr", "sudo apt install traceroute mtr -y"],
        ["Traceroute không resolve DNS", "traceroute -n google.com"],
        ["MTR report", "mtr --report -n google.com"],
        ["Xem port listen", "ss -tuln"],
        ["Xem process trên port", "sudo ss -tulnp"],
        ["Xem active TCP", "ss -tn"],
        ["Đếm kết nối established", "ss -tn state established | wc -l"],
        ["Tìm process port 22", "sudo ss -tulnp | grep :22"],
        ["Thống kê socket", "ss -s"],
        [
            "Kiểm tra port bằng nc",
            "nc -z -w 3 google.com 443 && echo 'OPEN' || echo 'CLOSED'",
        ],
        ["Scan localhost", "sudo apt install nmap -y && nmap -sV localhost"],
        [
            "Bắt 10 gói trừ SSH",
            "sudo apt install tcpdump -y && sudo tcpdump -c 10 -i any not port 22",
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
                        <BookOpen className="text-blue-400" /> Tóm tắt bài học
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <SummaryBox
                        title="PING"
                        items={[
                            "ping -c 4 host",
                            "ping -c1 -W2 host",
                            "ping -q -c100 host",
                            "ping 127.0.0.1",
                            "ping gateway",
                            "packet loss",
                        ]}
                    />
                    <SummaryBox
                        title="TRACE"
                        items={[
                            "traceroute -n host",
                            "tracepath host",
                            "mtr host",
                            "mtr --report host",
                            "* * * không luôn là lỗi",
                        ]}
                    />
                    <SummaryBox
                        title="SS"
                        items={[
                            "ss -tuln",
                            "sudo ss -tulnp",
                            "ss -tn",
                            "ss -s",
                            "ss state established",
                            "ss dport = :443",
                        ]}
                    />
                    <SummaryBox
                        title="EXTRA"
                        items={[
                            "netstat -tuln",
                            "nmap localhost",
                            "nmap -sV host",
                            "tcpdump -i any",
                            "nc -z -w3 host port",
                        ]}
                    />
                </div>
                <div className="px-6 md:px-8 pb-8">
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-5 text-blue-100">
                        <strong className="text-white">
                            Debug mạng theo thứ tự:
                        </strong>{" "}
                        <code>ping 127.0.0.1</code> → <code>ping gateway</code>{" "}
                        → <code>ping 8.8.8.8</code> →{" "}
                        <code>ping google.com</code> → <code>ss -tulnp</code> →{" "}
                        <code>traceroute/mtr</code>.
                    </div>
                </div>
            </div>
        </section>
    );
}

function SummaryBox({ title, items }) {
    return (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
            <h4 className="font-bold text-blue-300 uppercase text-xs tracking-widest mb-4">
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
            "Ping thành công 8.8.8.8 nhưng không ping được google.com — vấn đề gì?",
        options: [
            "DNS",
            "Loopback hỏng",
            "Không có card mạng",
            "Port 443 đóng",
        ],
        correct: 0,
        explanation:
            "Ping IP không cần DNS. Ping domain cần phân giải tên miền trước, nên lỗi thường nằm ở DNS.",
    },
    {
        question: "ss -tuln và sudo ss -tulnp khác nhau ở điểm gì?",
        options: [
            "-p hiển thị process/PID đang dùng port, thường cần sudo",
            "-p chỉ xem IPv6",
            "-p xóa port",
            "Không khác nhau",
        ],
        correct: 0,
        explanation:
            "ss -tuln xem port listen. sudo ss -tulnp thêm thông tin process/PID.",
    },
    {
        question: "* * * trong traceroute nghĩa là gì? Có phải lỗi không?",
        options: [
            "Router ở hop đó không trả lời probe; không nhất thiết là lỗi nếu hop sau vẫn đi tiếp",
            "Chắc chắn mất internet",
            "DNS sai",
            "Port 22 đóng",
        ],
        correct: 0,
        explanation:
            "Nhiều router chặn ICMP/UDP probe nhưng vẫn forward traffic bình thường.",
    },
    {
        question: "Làm sao tìm process đang dùng port 8080?",
        options: [
            "sudo ss -tulnp | grep :8080",
            "ping :8080",
            "traceroute -p 8080",
            "hostname -I 8080",
        ],
        correct: 0,
        explanation: "ss với -p hiển thị process và PID trên port.",
    },
    {
        question: "TIME_WAIT trong ss/netstat có nghĩa là gì?",
        options: [
            "Socket vừa đóng và đang chờ timeout để đảm bảo gói cũ không gây nhiễu",
            "Service đang listen",
            "DNS đang fail",
            "Port bị firewall chặn",
        ],
        correct: 0,
        explanation:
            "TIME_WAIT thường bình thường trên server bận. Quá nhiều chỉ đáng chú ý khi gây cạn port/tài nguyên.",
    },
    {
        question: "Lệnh nào vừa ping vừa traceroute, hiển thị realtime?",
        options: ["mtr", "ifconfig", "hostnamectl", "logrotate"],
        correct: 0,
        explanation: "mtr = My TraceRoute, kết hợp ping + traceroute.",
    },
    {
        question: "127.0.0.1 dùng để kiểm tra gì trong workflow ping?",
        options: [
            "Network stack local/loopback",
            "Gateway ISP",
            "DNS public",
            "Port nginx",
        ],
        correct: 0,
        explanation: "Ping 127.0.0.1 kiểm tra TCP/IP stack cục bộ của máy.",
    },
    {
        question: "nmap -sV dùng để làm gì?",
        options: [
            "Phát hiện service/version đang chạy trên port",
            "Đổi DNS",
            "Xem hostname",
            "Bắt gói tin ra file pcap",
        ],
        correct: 0,
        explanation:
            "-sV giúp nmap cố gắng nhận diện dịch vụ và phiên bản trên port mở.",
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
                    <strong className="text-blue-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu về kiểm tra kết nối mạng.
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
                <span className="text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
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
