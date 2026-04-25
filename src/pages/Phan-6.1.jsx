import React, { useState } from "react";
import {
    Activity,
    AlertTriangle,
    BookOpen,
    CheckCircle2,
    ChevronRight,
    ClipboardCheck,
    Cpu,
    Database,
    Dna,
    FileCode2,
    Globe2,
    HardDrive,
    HelpCircle,
    Home,
    Info,
    Keyboard,
    Layers,
    ListChecks,
    Map,
    MonitorCog,
    Network,
    Plug,
    RefreshCcw,
    Router,
    Route,
    Search,
    Server,
    Settings,
    ShieldAlert,
    Signal,
    TerminalSquare,
    Wifi,
    Wrench,
    Zap,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 border-b border-slate-800 sticky top-0 z-50 backdrop-blur">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🐧</span>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Linux/Ubuntu
                            </h1>
                            <p className="text-xs text-slate-500 hidden md:block">
                                Mạng & kết nối: ip, ifconfig, hostname, nmcli,
                                DNS
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400 hidden md:inline-block">
                            Phần 6 — Mạng & Kết nối
                        </span>
                        <div className="text-sm font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                            Phần 6.1
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <Hero />

                <section className="space-y-6">
                    <SectionTitle
                        n="1"
                        color="cyan"
                        icon={<Network size={22} />}
                        title="Tổng quan: interface, IP, route, DNS, hostname"
                    />
                    <Overview />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="2"
                        color="blue"
                        icon={<TerminalSquare size={22} />}
                        title="Lệnh ip — công cụ mạng hiện đại"
                    />
                    <IpCommandExplorer />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="3"
                        color="teal"
                        icon={<Plug size={22} />}
                        title="ip link — quản lý network interface"
                    />
                    <IpLinkLab />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="4"
                        color="purple"
                        icon={<Route size={22} />}
                        title="ip route và ip neigh — route, gateway, ARP"
                    />
                    <RouteNeighExplorer />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="5"
                        color="amber"
                        icon={<MonitorCog size={22} />}
                        title="ifconfig — công cụ mạng cũ nhưng vẫn gặp nhiều"
                    />
                    <IfconfigGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="6"
                        color="green"
                        icon={<Server size={22} />}
                        title="hostname và hostnamectl — tên máy trong mạng"
                    />
                    <HostnameGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="7"
                        color="pink"
                        icon={<Wifi size={22} />}
                        title="nmcli — NetworkManager CLI"
                    />
                    <NmcliGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="8"
                        color="orange"
                        icon={<Globe2 size={22} />}
                        title="resolvectl — kiểm tra DNS"
                    />
                    <DnsGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="9"
                        color="sky"
                        icon={<FileCode2 size={22} />}
                        title="Script show_network.sh — xem toàn bộ cấu hình mạng"
                    />
                    <ShowNetworkPreview />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="10"
                        color="lime"
                        icon={<Settings size={22} />}
                        title="Cấu hình IP tĩnh: nmcli và Netplan"
                    />
                    <StaticIpGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="11"
                        color="red"
                        icon={<Wrench size={22} />}
                        title="Xử lý lỗi mạng thường gặp"
                    />
                    <Troubleshooting />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="12"
                        color="emerald"
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
                                <span className="bg-cyan-500/20 text-cyan-400 p-2 rounded-lg">
                                    <ClipboardCheck size={20} />
                                </span>
                                Kiểm tra nhanh: ip, ifconfig, hostname, DNS
                            </h3>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                <div className="text-center pt-8 border-t border-slate-800">
                    <p className="text-slate-400 mb-4">
                        Bạn đã hoàn thành Phần 6.1 — Kiểm tra cấu hình mạng.
                    </p>
                    <button className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
                        Bài tiếp theo: 6.2 — ping, traceroute, netstat, ss{" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

function Hero() {
    const cards = [
        [TerminalSquare, "ip", "addr · link · route · neigh"],
        [MonitorCog, "ifconfig", "net-tools, cách cũ"],
        [Server, "hostname", "Tên máy, FQDN, hostnamectl"],
        [Wifi, "nmcli/DNS", "NetworkManager, resolvectl"],
    ];
    return (
        <section className="text-center space-y-5 py-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium">
                <Zap size={16} /> ip · ifconfig · hostname · nmcli · resolvectl
                · netplan
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Kiểm Tra{" "}
                <span className="text-cyan-400 font-mono">Cấu Hình Mạng</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Bài này giúp bạn đọc IP, interface, route, ARP, DNS và hostname
                trên Ubuntu; biết dùng lệnh hiện đại <code>ip</code>, hiểu{" "}
                <code>ifconfig</code> cũ, cấu hình IP tĩnh và xử lý lỗi mạng phổ
                biến.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4">
                {cards.map(([Icon, title, desc]) => (
                    <div
                        key={title}
                        className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 text-left"
                    >
                        <Icon className="text-cyan-400 mb-3" size={24} />
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
        cyan: "bg-cyan-500/20 text-cyan-400",
        blue: "bg-blue-500/20 text-blue-400",
        teal: "bg-teal-500/20 text-teal-400",
        purple: "bg-purple-500/20 text-purple-400",
        amber: "bg-amber-500/20 text-amber-400",
        green: "bg-green-500/20 text-green-400",
        pink: "bg-pink-500/20 text-pink-400",
        orange: "bg-orange-500/20 text-orange-400",
        sky: "bg-sky-500/20 text-sky-400",
        lime: "bg-lime-500/20 text-lime-400",
        red: "bg-red-500/20 text-red-400",
        emerald: "bg-emerald-500/20 text-emerald-400",
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
        cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
        blue: "bg-blue-500/10 border-blue-500/20 text-blue-300",
        teal: "bg-teal-500/10 border-teal-500/20 text-teal-300",
        purple: "bg-purple-500/10 border-purple-500/20 text-purple-300",
        amber: "bg-amber-500/10 border-amber-500/20 text-amber-300",
        green: "bg-green-500/10 border-green-500/20 text-green-300",
        pink: "bg-pink-500/10 border-pink-500/20 text-pink-300",
        orange: "bg-orange-500/10 border-orange-500/20 text-orange-300",
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

function Overview() {
    const interfaces = [
        ["eth0 / enp3s0", "Ethernet có dây", "text-cyan-300"],
        ["wlan0 / wlp2s0", "WiFi", "text-pink-300"],
        ["lo", "Loopback 127.0.0.1", "text-green-300"],
        ["docker0", "Bridge ảo Docker", "text-blue-300"],
        ["virbr0", "Bridge ảo KVM", "text-purple-300"],
        ["tun0", "VPN tunnel", "text-amber-300"],
    ];
    return (
        <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                <div className="flex items-start gap-5">
                    <div className="bg-cyan-500/15 text-cyan-400 p-4 rounded-2xl border border-cyan-500/20">
                        <Network size={42} />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">
                            Network interface = cổng kết nối mạng
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            Khi debug mạng, bạn cần trả lời 5 câu hỏi: máy có
                            interface không, interface có UP không, có IP không,
                            có route/gateway không, và DNS có hoạt động không.
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                            <MiniPoint
                                icon={<Route size={18} />}
                                tone="cyan"
                                title="IP + route"
                                text="IP cho biết máy nằm ở mạng nào; route cho biết gói tin đi ra đâu."
                            />
                            <MiniPoint
                                icon={<Globe2 size={18} />}
                                tone="orange"
                                title="DNS"
                                text="Ping IP được nhưng domain không được thường là lỗi DNS."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 gap-3">
                {interfaces.map(([name, desc, color]) => (
                    <div
                        key={name}
                        className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4"
                    >
                        <div className={`font-mono font-black ${color}`}>
                            {name}
                        </div>
                        <p className="text-xs text-slate-500 mt-1">{desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function IpCommandExplorer() {
    const [tab, setTab] = useState("syntax");
    const code = {
        syntax: `ip [options] OBJECT COMMAND

OBJECT:
  addr / a      # địa chỉ IP
  link / l      # network interface
  route / r     # bảng định tuyến
  neigh / n     # ARP/neighbor table
  rule          # routing rules
  tunnel        # tunnel

OPTIONS:
  -4            # chỉ IPv4
  -6            # chỉ IPv6
  -s            # statistics
  -h            # human readable
  -c            # color output
  -br           # brief, ngắn gọn`,
        addr: `$ ip addr
$ ip a

2: enp3s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 state UP
    link/ether ac:bc:32:c8:4d:e2 brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.100/24 brd 192.168.1.255 scope global dynamic enp3s0
    inet6 fe80::aebf:32ff:fec8:4de2/64 scope link

# inet 192.168.1.100/24 = IPv4 + subnet
# dynamic = lấy từ DHCP
# link/ether = MAC address`,
        brief: `$ ip -br addr
lo      UNKNOWN   127.0.0.1/8 ::1/128
enp3s0  UP        192.168.1.100/24 fe80::aebf:32ff:fec8:4de2/64
wlp2s0  DOWN

$ ip -c -br addr
$ ip -4 -br addr
$ ip -6 addr
$ ip addr show enp3s0
$ ip addr show up

# Lấy IP nhanh:
$ hostname -I
192.168.1.100 172.17.0.1`,
        script: `$ ip -4 addr show enp3s0 | grep inet | awk '{print $2}' | cut -d/ -f1
192.168.1.100

# Public IP cần internet:
$ curl -s ifconfig.me
203.113.xx.xx

$ curl -s ipinfo.io/ip
203.113.xx.xx`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-4 border-b border-slate-700">
                {[
                    ["syntax", "Cú pháp"],
                    ["addr", "ip addr"],
                    ["brief", "Brief/IPv4"],
                    ["script", "Script"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setTab(k)}
                        className={`p-4 font-bold border-b md:border-b-0 md:border-r last:border-r-0 border-slate-700 ${tab === k ? "bg-blue-500/10 text-blue-300" : "text-slate-400 hover:bg-slate-900"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="p-6 grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <TerminalBlock title={`ip — ${tab}`} code={code[tab]} />
                </div>
                <div className="lg:col-span-2 space-y-3">
                    <MiniPoint
                        icon={<TerminalSquare size={18} />}
                        tone="blue"
                        title="iproute2"
                        text="Bộ công cụ hiện đại thay cho ifconfig, route, arp."
                    />
                    <MiniPoint
                        icon={<Info size={18} />}
                        tone="cyan"
                        title="/24"
                        text="CIDR subnet prefix, tương đương netmask 255.255.255.0."
                    />
                    <MiniPoint
                        icon={<Plug size={18} />}
                        tone="teal"
                        title="LOWER_UP"
                        text="Có kết nối vật lý/link carrier, ví dụ cáp Ethernet cắm vào."
                    />
                    <MiniPoint
                        icon={<Database size={18} />}
                        tone="amber"
                        title="dynamic"
                        text="IP được cấp bởi DHCP, không phải IP tĩnh."
                    />
                </div>
            </div>
        </div>
    );
}

function IpLinkLab() {
    const [mode, setMode] = useState("show");
    const [iface, setIface] = useState("enp3s0");
    const code = {
        show: `$ ip link
$ ip link show
$ ip l

$ ip -br link
lo      UNKNOWN   00:00:00:00:00:00 <LOOPBACK,UP,LOWER_UP>
${iface}  UP        ac:bc:32:c8:4d:e2 <BROADCAST,MULTICAST,UP,LOWER_UP>
wlp2s0  DOWN      a4:c3:f0:7e:2b:1a <BROADCAST,MULTICAST>

$ ip link show ${iface}`,
        updown: `$ sudo ip link set ${iface} up
$ sudo ip link set ${iface} down
$ sudo ip link set wlp2s0 up

# Cẩn thận khi SSH: down interface đang dùng có thể làm bạn mất kết nối!`,
        stats: `$ ip -s link show ${iface}
2: ${iface}: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500
    RX: bytes  packets  errors  dropped missed  mcast
    125436789  98234    0       5       0       0
    TX: bytes  packets  errors  dropped carrier collsns
    45678901   75123    0       0       0       0

# RX = nhận, TX = gửi
# errors/dropped tăng liên tục = cần kiểm tra card/cáp/driver`,
        mtu: `$ sudo ip link set ${iface} mtu 9000
# Jumbo frames, chỉ dùng khi toàn mạng hỗ trợ

# Đổi MAC tạm thời:
$ sudo ip link set ${iface} down
$ sudo ip link set ${iface} address 02:00:00:00:00:01
$ sudo ip link set ${iface} up`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                <div>
                    <h4 className="text-xl font-bold text-white">
                        Lab interface
                    </h4>
                    <p className="text-sm text-slate-400">
                        Chọn interface để xem câu lệnh tương ứng.
                    </p>
                </div>
                <input
                    value={iface}
                    onChange={(e) => setIface(e.target.value)}
                    className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white font-mono"
                />
            </div>
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["show", "Xem interface"],
                        ["updown", "Bật/tắt"],
                        ["stats", "Thống kê"],
                        ["mtu", "MTU/MAC"],
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
                        title={`ip link — ${mode}`}
                        code={code[mode]}
                    />
                </div>
            </div>
        </div>
    );
}

function RouteNeighExplorer() {
    const [tab, setTab] = useState("route");
    const code = {
        route: `$ ip route
$ ip route show
$ ip r

default via 192.168.1.1 dev enp3s0 proto dhcp metric 100
192.168.1.0/24 dev enp3s0 proto kernel scope link src 192.168.1.100
172.17.0.0/16 dev docker0 proto kernel scope link src 172.17.0.1

# default via = gateway mặc định
# src = IP nguồn máy sẽ dùng`,
        get: `$ ip route get 8.8.8.8
8.8.8.8 via 192.168.1.1 dev enp3s0 src 192.168.1.100 uid 1000

$ ip route get 192.168.1.200
192.168.1.200 dev enp3s0 src 192.168.1.100

# 8.8.8.8 đi qua gateway
# 192.168.1.200 cùng LAN nên đi trực tiếp qua enp3s0`,
        modify: `$ sudo ip route add 10.0.0.0/8 via 192.168.1.254
$ sudo ip route add default via 192.168.1.1

$ sudo ip route del 10.0.0.0/8
$ sudo ip route del default via 192.168.1.254

# Route bằng ip là tạm thời, mất sau reboot nếu không cấu hình qua Netplan/NM`,
        neigh: `$ ip neigh
$ ip neigh show
$ ip n

192.168.1.1    dev enp3s0 lladdr ac:bc:32:01:02:03 REACHABLE
192.168.1.200  dev enp3s0 lladdr 11:22:33:44:55:66 STALE
192.168.1.201  dev enp3s0                           FAILED

# REACHABLE = kết nối được
# STALE = đã biết nhưng lâu không dùng
# FAILED = không tìm được MAC/không kết nối được

$ sudo ip neigh flush dev enp3s0
$ sudo ip neigh flush all`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["route", "ip route"],
                    ["get", "route get"],
                    ["modify", "add/del route"],
                    ["neigh", "ip neigh"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setTab(k)}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${tab === k ? "bg-purple-500/10 border-purple-500/40 text-purple-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`route/neigh — ${tab}`}
                        code={code[tab]}
                    />
                </div>
                <div className="lg:col-span-2 space-y-3">
                    <MiniPoint
                        icon={<Router size={18} />}
                        tone="purple"
                        title="default route"
                        text="Gói tin ra internet thường đi qua default gateway."
                    />
                    <MiniPoint
                        icon={<Map size={18} />}
                        tone="cyan"
                        title="route get"
                        text="Cho biết gói tin đến một IP sẽ đi qua interface/gateway nào."
                    />
                    <MiniPoint
                        icon={<Dna size={18} />}
                        tone="amber"
                        title="ARP/neigh"
                        text="Ánh xạ IP LAN sang MAC address."
                    />
                </div>
            </div>
        </div>
    );
}

function IfconfigGuide() {
    const [tab, setTab] = useState("basic");
    const code = {
        install: `$ ifconfig
Command 'ifconfig' not found. Install: sudo apt install net-tools

$ sudo apt install net-tools -y
$ ifconfig --version
net-tools 2.10`,
        basic: `$ ifconfig

enp3s0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.1.100  netmask 255.255.255.0  broadcast 192.168.1.255
        inet6 fe80::aebf:32ff:fec8:4de2  prefixlen 64  scopeid 0x20<link>
        ether ac:bc:32:c8:4d:e2  txqueuelen 1000  (Ethernet)
        RX packets 98234  bytes 125436789 (125.4 MB)
        RX errors 0  dropped 5  overruns 0  frame 0
        TX packets 75123  bytes 45678901 (45.6 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0`,
        commands: `$ ifconfig enp3s0
$ ifconfig lo
$ ifconfig -a

$ sudo ifconfig enp3s0 up
$ sudo ifconfig enp3s0 down

# Đặt IP tạm thời
$ sudo ifconfig enp3s0 192.168.1.200 netmask 255.255.255.0
$ sudo ifconfig enp3s0 192.168.1.200/24

# IP alias
$ sudo ifconfig enp3s0:0 192.168.1.201 netmask 255.255.255.0
$ sudo ifconfig enp3s0:0 down`,
        compare: `Tác dụng              ifconfig              ip hiện đại
─────────────────────────────────────────────────────────
Xem tất cả           ifconfig -a           ip addr
Xem 1 interface      ifconfig eth0         ip addr show eth0
Bật interface        ifconfig eth0 up      ip link set eth0 up
Tắt interface        ifconfig eth0 down    ip link set eth0 down
Đặt IP               ifconfig eth0 IP      ip addr add IP/prefix dev eth0
Routing table        route -n              ip route
ARP table            arp -n                ip neigh
Thống kê             ifconfig -s           ip -s link
Ngắn gọn             -                     ip -br addr`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-4 border-b border-slate-700">
                {[
                    ["install", "Cài đặt"],
                    ["basic", "Output"],
                    ["commands", "Lệnh hữu ích"],
                    ["compare", "So sánh"],
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
            <div className="p-6 grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`ifconfig — ${tab}`}
                        code={code[tab]}
                    />
                </div>
                <div className="lg:col-span-2 space-y-3">
                    <MiniPoint
                        icon={<AlertTriangle size={18} />}
                        tone="amber"
                        title="Công cụ cũ"
                        text="ifconfig thuộc net-tools, nhiều Ubuntu mới không cài sẵn."
                    />
                    <MiniPoint
                        icon={<CheckCircle2 size={18} />}
                        tone="green"
                        title="Vẫn nên biết"
                        text="Nhiều tài liệu cũ, script cũ và admin cũ vẫn dùng ifconfig."
                    />
                    <MiniPoint
                        icon={<Zap size={18} />}
                        tone="cyan"
                        title="Khuyến nghị"
                        text="Dùng ip cho hệ thống Ubuntu hiện đại."
                    />
                </div>
            </div>
        </div>
    );
}

function HostnameGuide() {
    const [mode, setMode] = useState("show");
    const code = {
        show: `$ hostname
ubuntu-pc

$ hostname -f
ubuntu-pc.local

$ hostname -d
local

$ hostname -I
192.168.1.100 172.17.0.1

$ hostname -i
192.168.1.100

$ hostname -s
ubuntu-pc

$ hostname --hardware-platform
x86_64

$ hostname --operating-system
GNU/Linux`,
        change: `# Cách khuyến nghị
$ sudo hostnamectl set-hostname new-server-name

$ hostnamectl
 Static hostname: new-server-name
       Icon name: computer-vm
         Chassis: vm
Operating System: Ubuntu 24.04.1 LTS
          Kernel: Linux 6.8.0-51-generic
    Architecture: x86-64

# Tạm thời, mất sau reboot
$ sudo hostname temp-name`,
        files: `$ sudo nano /etc/hostname
new-server-name

$ sudo nano /etc/hosts
127.0.0.1   localhost
127.0.1.1   new-server-name
::1         localhost ip6-localhost ip6-loopback

$ sudo systemctl restart systemd-hostnamed

$ hostname
new-server-name
$ cat /etc/hostname
new-server-name`,
        types: `$ hostnamectl
 Static hostname: ubuntu-pc
Transient hostname: temp-name
  Pretty hostname: Ubuntu PC 🐧

# Static = vĩnh viễn, lưu /etc/hostname
# Transient = tạm thời, có thể do DHCP cấp
# Pretty = tên đẹp, có khoảng trắng/emoji

$ sudo hostnamectl set-hostname "my-server" --static
$ sudo hostnamectl set-hostname "My Beautiful Server 🚀" --pretty
$ sudo hostnamectl set-hostname "temp-host" --transient

$ hostnamectl --static
$ hostnamectl --pretty
$ hostnamectl --transient`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["show", "Xem hostname"],
                        ["change", "Đổi bằng hostnamectl"],
                        ["files", "/etc/hostname + hosts"],
                        ["types", "Static/Transient/Pretty"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setMode(k)}
                            className={`w-full text-left rounded-xl border p-4 font-bold ${mode === k ? "bg-green-500/10 border-green-500/40 text-green-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`hostname — ${mode}`}
                        code={code[mode]}
                    />
                </div>
            </div>
        </div>
    );
}

function NmcliGuide() {
    const [tab, setTab] = useState("status");
    const code = {
        status: `$ nmcli general status
STATE      CONNECTIVITY  WIFI-HW  WIFI    WWAN-HW  WWAN
connected  full          enabled  enabled enabled  enabled

$ nmcli device
DEVICE   TYPE      STATE         CONNECTION
enp3s0   ethernet  connected     Wired connection 1
wlp2s0   wifi      disconnected  --
lo       loopback  unmanaged     --

$ nmcli device show enp3s0`,
        wifi: `$ nmcli device wifi list
IN-USE  BSSID              SSID            MODE   CHAN  RATE        SIGNAL
*       AA:BB:CC:DD:EE:FF  HomeWiFi        Infra  6     130 Mbit/s  85
        11:22:33:44:55:66  NeighborWiFi    Infra  11    54 Mbit/s   42

$ nmcli device wifi connect "HomeWiFi" password "mypassword"

$ nmcli radio wifi on
$ nmcli radio wifi off`,
        con: `$ nmcli connection show
$ nmcli con show
NAME                UUID    TYPE      DEVICE
Wired connection 1  abc...  ethernet  enp3s0
HomeWiFi            def...  wifi      wlp2s0

$ nmcli networking on
$ nmcli networking off

$ nmcli -f all device show enp3s0`,
        static: `$ sudo nmcli connection modify "Wired connection 1" \
  ipv4.method manual \
  ipv4.addresses "192.168.1.100/24" \
  ipv4.gateway "192.168.1.1" \
  ipv4.dns "8.8.8.8,8.8.4.4"

$ sudo nmcli connection up "Wired connection 1"

# Về lại DHCP
$ sudo nmcli connection modify "Wired connection 1" \
  ipv4.method auto \
  ipv4.addresses "" \
  ipv4.gateway "" \
  ipv4.dns ""
$ sudo nmcli connection up "Wired connection 1"`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["status", "Status/device"],
                    ["wifi", "WiFi"],
                    ["con", "Connections"],
                    ["static", "Static IP"],
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
                    <TerminalBlock title={`nmcli — ${tab}`} code={code[tab]} />
                </div>
                <div className="lg:col-span-2 space-y-3">
                    <MiniPoint
                        icon={<Wifi size={18} />}
                        tone="pink"
                        title="Ubuntu Desktop"
                        text="NetworkManager/nmcli rất phổ biến trên Ubuntu Desktop."
                    />
                    <MiniPoint
                        icon={<Settings size={18} />}
                        tone="purple"
                        title="Profile"
                        text="nmcli quản lý connection profile, không chỉ interface hiện tại."
                    />
                    <MiniPoint
                        icon={<AlertTriangle size={18} />}
                        tone="amber"
                        title="SSH cẩn thận"
                        text="Đổi IP/gateway từ xa có thể làm rớt SSH nếu cấu hình sai."
                    />
                </div>
            </div>
        </div>
    );
}

function DnsGuide() {
    const [mode, setMode] = useState("status");
    const code = {
        status: `$ resolvectl status
Global
       Protocols: -LLMNR -mDNS -DNSOverTLS DNSSEC=no/unsupported
resolv.conf mode: stub

Link 2 (enp3s0)
    Current Scopes: DNS
Current DNS Server: 8.8.8.8
       DNS Servers: 8.8.8.8 8.8.4.4
        DNS Domain: local`,
        dns: `$ resolvectl dns
Global:
Link 2 (enp3s0): 8.8.8.8 8.8.4.4

$ resolvectl query google.com
google.com: 142.250.77.46
            -- Information acquired via protocol DNS
            -- Data is authenticated: no`,
        files: `$ cat /etc/resolv.conf
nameserver 127.0.0.53
options edns0 trust-ad search local

# 127.0.0.53 = systemd-resolved local DNS stub

$ cat /run/systemd/resolve/resolv.conf
nameserver 8.8.8.8
nameserver 8.8.4.4
search local`,
        test: `$ ping -c 4 8.8.8.8
# Test internet/IP layer

$ ping -c 4 google.com
# Test internet + DNS

$ nslookup google.com
$ dig google.com
$ host google.com

# Ping IP được nhưng domain không được = thường lỗi DNS`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["status", "resolvectl status"],
                        ["dns", "dns/query"],
                        ["files", "resolv.conf"],
                        ["test", "Test DNS"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setMode(k)}
                            className={`w-full text-left rounded-xl border p-4 font-bold ${mode === k ? "bg-orange-500/10 border-orange-500/40 text-orange-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock title={`DNS — ${mode}`} code={code[mode]} />
                </div>
            </div>
        </div>
    );
}

function ShowNetworkPreview() {
    const [view, setView] = useState("dashboard");
    const content = {
        dashboard: `╔══════════════════════════════════════════════╗
║         THÔNG TIN MẠNG HỆ THỐNG            ║
╚══════════════════════════════════════════════╝

▶ HOSTNAME:
  Tên máy:     ubuntu-pc
  FQDN:        ubuntu-pc.local
  OS:          Ubuntu 24.04.1 LTS

▶ NETWORK INTERFACES:
  lo         ? UNKNOWN  127.0.0.1/8 ::1/128
  enp3s0     ● UP       192.168.1.100/24
  docker0    ● UP       172.17.0.1/16`,
        ip: `▶ ĐỊA CHỈ IP:
  lo                   127.0.0.1/8
  enp3s0               192.168.1.100/24
  docker0              172.17.0.1/16

▶ DEFAULT GATEWAY:
  192.168.1.1 (qua enp3s0)

▶ DNS SERVERS:
  Link 2 (enp3s0): 8.8.8.8 8.8.4.4`,
        mac: `▶ MAC ADDRESSES:
  enp3s0: ac:bc:32:c8:4d:e2
  wlp2s0: a4:c3:f0:7e:2b:1a
  docker0: 02:42:ac:11:00:01

▶ ROUTING TABLE:
  default via 192.168.1.1 dev enp3s0 proto dhcp metric 100
  192.168.1.0/24 dev enp3s0 proto kernel scope link src 192.168.1.100`,
        stats: `▶ IP PUBLIC:
  203.113.xx.xx

▶ THỐNG KÊ (enp3s0):
  RX: 125436789 bytes, 98234 packets
  TX: 45678901 bytes, 75123 packets

════════════════════════════════════════════════`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-2">
                    {[
                        ["dashboard", "Hostname/interfaces"],
                        ["ip", "IP/gateway/DNS"],
                        ["mac", "MAC/route"],
                        ["stats", "Public IP/stats"],
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
                        title="show_network.sh preview"
                        code={content[view]}
                    />
                </div>
            </div>
        </div>
    );
}

function StaticIpGuide() {
    const [method, setMethod] = useState("netplan");
    const code = {
        nmcli: `$ nmcli connection show
NAME                UUID                  TYPE
Wired connection 1  abc-123-def-456...    ethernet

$ sudo nmcli connection modify "Wired connection 1" \
  ipv4.method manual \
  ipv4.addresses "192.168.1.100/24" \
  ipv4.gateway "192.168.1.1" \
  ipv4.dns "8.8.8.8,8.8.4.4"

$ sudo nmcli connection up "Wired connection 1"

$ ip addr show enp3s0
$ ip route
$ resolvectl dns`,
        dhcp: `$ sudo nmcli connection modify "Wired connection 1" \
  ipv4.method auto \
  ipv4.addresses "" \
  ipv4.gateway "" \
  ipv4.dns ""

$ sudo nmcli connection up "Wired connection 1"`,
        netplan: `$ ls /etc/netplan/
01-netcfg.yaml

$ cat /etc/netplan/01-netcfg.yaml
network:
  version: 2
  ethernets:
    enp3s0:
      dhcp4: true

$ sudo nano /etc/netplan/01-netcfg.yaml

network:
  version: 2
  renderer: networkd
  ethernets:
    enp3s0:
      dhcp4: false
      addresses:
        - 192.168.1.100/24
      routes:
        - to: default
          via: 192.168.1.1
      nameservers:
        addresses:
          - 8.8.8.8
          - 8.8.4.4`,
        apply: `$ sudo netplan try
# Test 120 giây, tự hoàn tác nếu lỗi

$ sudo netplan apply
# Áp dụng vĩnh viễn

$ ip -br addr
$ ip route
$ resolvectl status`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["netplan", "Netplan static"],
                    ["apply", "Try/apply"],
                    ["nmcli", "nmcli static"],
                    ["dhcp", "Về DHCP"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setMethod(k)}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${method === k ? "bg-lime-500/10 border-lime-500/40 text-lime-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`static IP — ${method}`}
                        code={code[method]}
                    />
                </div>
                <div className="lg:col-span-2 space-y-3">
                    <MiniPoint
                        icon={<ShieldAlert size={18} />}
                        tone="rose"
                        title="Dùng netplan try"
                        text="Khi cấu hình từ xa qua SSH, netplan try giúp tự rollback nếu mất mạng."
                    />
                    <MiniPoint
                        icon={<Home size={18} />}
                        tone="green"
                        title="Ubuntu Server"
                        text="Thường dùng Netplan với renderer networkd."
                    />
                    <MiniPoint
                        icon={<Wifi size={18} />}
                        tone="pink"
                        title="Ubuntu Desktop"
                        text="Thường dùng NetworkManager/nmcli."
                    />
                </div>
            </div>
        </div>
    );
}

function Troubleshooting() {
    const [caseId, setCaseId] = useState("noip");
    const cases = {
        noip: {
            title: "Không có IP address",
            icon: AlertTriangle,
            code: `$ ip addr show enp3s0 | grep inet
# Không có dòng inet

# Xin IP từ DHCP:
$ sudo dhclient enp3s0

# Release rồi xin lại:
$ sudo dhclient -r enp3s0
$ sudo dhclient enp3s0

# NetworkManager:
$ sudo nmcli device disconnect enp3s0
$ sudo nmcli device connect enp3s0`,
        },
        down: {
            title: "Interface DOWN",
            icon: Plug,
            code: `$ ip link show enp3s0 | grep "state DOWN"

$ sudo ip link set enp3s0 up
$ sudo ifconfig enp3s0 up

$ ip -br link
$ ip -br addr`,
        },
        noroute: {
            title: "Có IP nhưng không ra mạng",
            icon: Route,
            code: `$ ping 8.8.8.8
connect: Network is unreachable

$ ip route
# Không có default via ...

$ sudo ip route add default via 192.168.1.1 dev enp3s0

$ ip route get 8.8.8.8
$ ping -c 3 8.8.8.8`,
        },
        dns: {
            title: "Ping IP được, domain không được",
            icon: Globe2,
            code: `$ ping -c 3 8.8.8.8     # OK
$ ping -c 3 google.com   # FAILED

$ cat /etc/resolv.conf
$ resolvectl status

# Restart DNS resolver
$ sudo systemctl restart systemd-resolved

# Test lại
$ resolvectl query google.com
$ ping -c 3 google.com`,
        },
        wifi: {
            title: "WiFi không kết nối được",
            icon: Wifi,
            code: `$ nmcli device wifi list
$ nmcli device

$ sudo nmcli radio wifi off
$ sudo nmcli radio wifi on

$ nmcli device wifi connect "SSID" password "password"

# Kiểm tra driver WiFi
$ lspci -k | grep -A3 -i "network"`,
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
                                className={`w-full text-left p-4 rounded-2xl border transition-all ${caseId === k ? "bg-red-500/10 border-red-500/40" : "bg-slate-900 border-slate-700 hover:border-slate-500"}`}
                            >
                                <div className="flex items-center gap-3">
                                    <ItemIcon className="text-red-400" />
                                    <span className="font-bold text-white">
                                        {c.title}
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
                        title="network troubleshooting"
                        code={current.code}
                    />
                </div>
            </div>
        </div>
    );
}

function PracticeChecklist() {
    const tasks = [
        ["Xem tất cả interface", "ip addr && ip -br addr && ip -c -br addr"],
        ["Xem chỉ IPv4", "ip -4 addr"],
        ["Xem link status", "ip -br link"],
        ["Xem routing table", "ip route && ip route get 8.8.8.8"],
        ["Xem ARP table", "ip neigh"],
        ["Xem thống kê interface", "ip -s link show enp3s0"],
        ["Cài net-tools", "sudo apt install net-tools -y"],
        ["Xem ifconfig", "ifconfig -a && ifconfig lo"],
        [
            "Xem hostname",
            "hostname && hostname -f && hostname -I && hostnamectl",
        ],
        ["Đổi hostname tạm thời", "sudo hostname test-server && hostname"],
        [
            "Đổi hostname vĩnh viễn",
            "sudo hostnamectl set-hostname my-ubuntu-server && cat /etc/hostname",
        ],
        ["Đổi về tên cũ", "sudo hostnamectl set-hostname ubuntu-pc"],
        ["Xem DNS", "resolvectl status && cat /etc/resolv.conf"],
        [
            "Tìm IP public",
            "curl -s ifconfig.me && curl -s ipinfo.io/json | python3 -m json.tool",
        ],
        ["Xem port listen", "ss -tuln"],
        ["Kiểm tra kết nối", "ping -c 3 8.8.8.8 && ping -c 3 google.com"],
        [
            "Xem MAC/hardware",
            "ip link | grep 'link/ether'; cat /sys/class/net/enp3s0/operstate",
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
                <div className="text-sm font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2">
                    {done.length}/{tasks.length} hoàn thành
                </div>
            </div>
            <div className="space-y-3">
                {tasks.map(([title, cmd], i) => (
                    <button
                        key={title}
                        onClick={() => toggle(i)}
                        className={`w-full text-left rounded-2xl border p-4 transition-all ${done.includes(i) ? "bg-emerald-500/10 border-emerald-500/30" : "bg-slate-900 border-slate-700 hover:border-slate-500"}`}
                    >
                        <div className="flex items-start gap-3">
                            {done.includes(i) ? (
                                <CheckCircle2 className="text-emerald-400 shrink-0" />
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
                        <BookOpen className="text-cyan-400" /> Tóm tắt bài học
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <SummaryBox
                        title="ip command"
                        items={[
                            "ip addr",
                            "ip -br addr",
                            "ip -c -br addr",
                            "ip link",
                            "ip route",
                            "ip route get 8.8.8.8",
                            "ip neigh",
                        ]}
                    />
                    <SummaryBox
                        title="ifconfig"
                        items={[
                            "sudo apt install net-tools",
                            "ifconfig",
                            "ifconfig -a",
                            "ifconfig eth0",
                            "ifconfig eth0 up/down",
                        ]}
                    />
                    <SummaryBox
                        title="hostname"
                        items={[
                            "hostname",
                            "hostname -I",
                            "hostnamectl",
                            "hostnamectl set-hostname",
                            "/etc/hostname",
                            "/etc/hosts",
                        ]}
                    />
                    <SummaryBox
                        title="DNS/NM"
                        items={[
                            "nmcli device",
                            "nmcli wifi list",
                            "resolvectl status",
                            "resolvectl dns",
                            "netplan try",
                            "ss -tuln",
                        ]}
                    />
                </div>
                <div className="px-6 md:px-8 pb-8">
                    <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-5 text-cyan-100">
                        <strong className="text-white">
                            Quy trình debug mạng nhanh:
                        </strong>{" "}
                        <code>ip -br link</code> → <code>ip -br addr</code> →{" "}
                        <code>ip route</code> → <code>ping 8.8.8.8</code> →{" "}
                        <code>ping google.com</code> →{" "}
                        <code>resolvectl status</code>.
                    </div>
                </div>
            </div>
        </section>
    );
}

function SummaryBox({ title, items }) {
    return (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
            <h4 className="font-bold text-cyan-300 uppercase text-xs tracking-widest mb-4">
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
        question: "ip addr và ifconfig khác nhau ở điểm gì?",
        options: [
            "ip là công cụ hiện đại từ iproute2; ifconfig là công cụ cũ từ net-tools",
            "ifconfig chỉ xem DNS",
            "ip chỉ chạy trên Windows",
            "Không khác nhau",
        ],
        correct: 0,
        explanation:
            "Ubuntu hiện đại khuyến nghị dùng ip vì đầy đủ hơn và thay thế ifconfig/route/arp.",
    },
    {
        question:
            "Lệnh nào xem nhanh IP của tất cả interface dạng ngắn gọn, có màu?",
        options: [
            "ip -c -br addr",
            "ifconfig -color",
            "hostname -route",
            "nmcli color ip",
        ],
        correct: 0,
        explanation:
            "-br là brief, -c là color. Đây là lệnh rất tiện để xem nhanh IP.",
    },
    {
        question: "ip route get 8.8.8.8 cho biết gì?",
        options: [
            "Gói tin đến 8.8.8.8 sẽ đi qua gateway/interface nào và dùng IP nguồn nào",
            "DNS server đang chạy version gì",
            "MAC của Google",
            "Hostname của máy",
        ],
        correct: 0,
        explanation: "route get mô phỏng đường đi routing đến một đích cụ thể.",
    },
    {
        question: "Làm sao đổi hostname vĩnh viễn không cần reboot?",
        options: [
            "sudo hostnamectl set-hostname new-name",
            "sudo hostname new-name",
            "ip link set hostname",
            "ifconfig hostname up",
        ],
        correct: 0,
        explanation:
            "hostnamectl set-hostname cập nhật static hostname và có hiệu lực ngay. hostname command thường chỉ tạm thời.",
    },
    {
        question: "state UP và state DOWN trong ip link nghĩa là gì?",
        options: [
            "UP là interface đang bật; DOWN là interface bị tắt",
            "UP là DNS tốt; DOWN là DNS lỗi",
            "UP là IP public; DOWN là IP private",
            "Không liên quan interface",
        ],
        correct: 0,
        explanation:
            "Interface DOWN thì dù cấu hình đúng cũng không truyền nhận mạng được cho đến khi bật lên.",
    },
    {
        question: "Lệnh nào xem DNS server đang được dùng?",
        options: [
            "resolvectl status hoặc resolvectl dns",
            "ip neigh",
            "hostname -d",
            "ifconfig -dns",
        ],
        correct: 0,
        explanation:
            "resolvectl hiển thị DNS theo từng link khi dùng systemd-resolved.",
    },
    {
        question:
            "Ping 8.8.8.8 được nhưng ping google.com không được thường là lỗi gì?",
        options: [
            "DNS",
            "Interface DOWN",
            "Không có IP",
            "Cáp mạng đứt chắc chắn",
        ],
        correct: 0,
        explanation:
            "Ping IP kiểm tra kết nối layer IP. Ping domain cần DNS resolve trước.",
    },
    {
        question:
            "Khi cấu hình static IP qua Netplan từ xa, nên chạy gì trước netplan apply?",
        options: [
            "sudo netplan try",
            "sudo rm /etc/netplan",
            "sudo ifconfig -a",
            "sudo hostname -I",
        ],
        correct: 0,
        explanation:
            "netplan try có cơ chế tự hoàn tác nếu cấu hình làm mất kết nối, an toàn hơn khi SSH.",
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
                    <strong className="text-cyan-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu về cấu hình mạng Ubuntu.
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
                <span className="text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
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
