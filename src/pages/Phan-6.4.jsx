import React, { useState } from "react";
import {
    AlertTriangle,
    ArrowRight,
    BookOpen,
    CheckCircle2,
    ChevronRight,
    ClipboardCheck,
    Code2,
    Copy,
    FileKey2,
    FileText,
    FolderSync,
    Globe2,
    HardDrive,
    History,
    Info,
    KeyRound,
    Layers,
    Link2,
    ListChecks,
    Lock,
    Monitor,
    Network,
    Play,
    RefreshCcw,
    Route,
    Search,
    Server,
    Settings,
    ShieldAlert,
    ShieldCheck,
    TerminalSquare,
    UserCheck,
    Users,
    Wifi,
    Zap,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-violet-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 border-b border-slate-800 sticky top-0 z-50 backdrop-blur">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🐧</span>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Linux/Ubuntu
                            </h1>
                            <p className="text-xs text-slate-500 hidden md:block">
                                SSH, key pair, scp, tunnel và bảo mật truy cập
                                từ xa
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400 hidden md:inline-block">
                            Bài trước: 6.3
                        </span>
                        <div className="text-sm font-medium text-violet-400 bg-violet-400/10 px-3 py-1 rounded-full border border-violet-400/20">
                            Phần 6.4
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <Hero />

                <section className="space-y-6">
                    <SectionTitle
                        n="1"
                        color="violet"
                        icon={<ShieldCheck size={22} />}
                        title="SSH là gì và hoạt động ra sao?"
                    />
                    <SshOverview />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="2"
                        color="cyan"
                        icon={<Server size={22} />}
                        title="Cài đặt SSH client/server và kiểm tra service"
                    />
                    <InstallAndService />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="3"
                        color="green"
                        icon={<TerminalSquare size={22} />}
                        title="Kết nối SSH cơ bản"
                    />
                    <BasicSshLab />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="4"
                        color="amber"
                        icon={<KeyRound size={22} />}
                        title="SSH Key — đăng nhập không cần mật khẩu"
                    />
                    <SshKeyWorkflow />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="5"
                        color="blue"
                        icon={<FileText size={22} />}
                        title="SSH config — đặt tên tắt cho server"
                    />
                    <SshConfigGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="6"
                        color="teal"
                        icon={<FolderSync size={22} />}
                        title="SCP — copy file qua SSH"
                    />
                    <ScpGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="7"
                        color="purple"
                        icon={<Route size={22} />}
                        title="SSH tunneling — local forwarding và SOCKS proxy"
                    />
                    <TunnelGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="8"
                        color="rose"
                        icon={<Lock size={22} />}
                        title="Bảo mật SSH server cơ bản"
                    />
                    <SshHardening />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="9"
                        color="pink"
                        icon={<Users size={22} />}
                        title="ssh-agent, ai đang login và lệnh hữu ích"
                    />
                    <AgentAndAudit />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="10"
                        color="orange"
                        icon={<ShieldAlert size={22} />}
                        title="Xử lý lỗi SSH thường gặp"
                    />
                    <Troubleshooting />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="11"
                        color="sky"
                        icon={<Code2 size={22} />}
                        title="Script ssh_helper.sh — quản lý kết nối SSH"
                    />
                    <SshHelperPreview />
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
                                <span className="bg-violet-500/20 text-violet-400 p-2 rounded-lg">
                                    <ClipboardCheck size={20} />
                                </span>
                                Kiểm tra nhanh: SSH, key, config, SCP, tunnel
                            </h3>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                <div className="text-center pt-8 border-t border-slate-800">
                    <p className="text-slate-400 mb-4">
                        Bạn đã hoàn thành Phần 6.4 — SSH kết nối từ xa an toàn.
                    </p>
                    <button className="bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-violet-500/20">
                        Bài tiếp theo: 6.5 — Cấu hình tường lửa với ufw{" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

function Hero() {
    const cards = [
        [TerminalSquare, "ssh", "Remote shell mã hóa"],
        [KeyRound, "SSH key", "Đăng nhập bằng key pair"],
        [FolderSync, "scp", "Copy file qua SSH"],
        [Route, "tunnel", "Port forwarding an toàn"],
    ];
    return (
        <section className="text-center space-y-5 py-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium">
                <Zap size={16} /> ssh · ssh-keygen · ssh-copy-id · ~/.ssh/config
                · scp · ssh -L · ssh -D
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                SSH — Kết Nối Từ Xa{" "}
                <span className="text-violet-400 font-mono">An Toàn</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Bài này giúp bạn kết nối Linux server bằng SSH, tạo key ED25519,
                copy public key lên server, đặt alias trong SSH config, copy
                file bằng SCP, tạo tunnel và harden SSH server.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4">
                {cards.map(([Icon, title, desc]) => (
                    <div
                        key={title}
                        className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 text-left"
                    >
                        <Icon className="text-violet-400 mb-3" size={24} />
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
        violet: "bg-violet-500/20 text-violet-400",
        cyan: "bg-cyan-500/20 text-cyan-400",
        green: "bg-green-500/20 text-green-400",
        amber: "bg-amber-500/20 text-amber-400",
        blue: "bg-blue-500/20 text-blue-400",
        teal: "bg-teal-500/20 text-teal-400",
        purple: "bg-purple-500/20 text-purple-400",
        rose: "bg-rose-500/20 text-rose-400",
        pink: "bg-pink-500/20 text-pink-400",
        orange: "bg-orange-500/20 text-orange-400",
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
        violet: "bg-violet-500/10 border-violet-500/20 text-violet-300",
        cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
        green: "bg-green-500/10 border-green-500/20 text-green-300",
        amber: "bg-amber-500/10 border-amber-500/20 text-amber-300",
        blue: "bg-blue-500/10 border-blue-500/20 text-blue-300",
        teal: "bg-teal-500/10 border-teal-500/20 text-teal-300",
        purple: "bg-purple-500/10 border-purple-500/20 text-purple-300",
        rose: "bg-rose-500/10 border-rose-500/20 text-rose-300",
        pink: "bg-pink-500/10 border-pink-500/20 text-pink-300",
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

function SshOverview() {
    return (
        <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                <div className="flex items-start gap-5">
                    <div className="bg-violet-500/15 text-violet-400 p-4 rounded-2xl border border-violet-500/20">
                        <ShieldCheck size={42} />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">
                            SSH = terminal từ xa được mã hóa
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            SSH cho phép bạn điều khiển máy Linux khác qua mạng
                            bằng terminal. Máy bạn là client, server chạy daemon{" "}
                            <code>sshd</code>, và dữ liệu được mã hóa trên đường
                            truyền.
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                            <MiniPoint
                                icon={<Monitor size={18} />}
                                tone="violet"
                                title="Client"
                                text="Máy bạn chạy lệnh ssh/scp để kết nối đi."
                            />
                            <MiniPoint
                                icon={<Server size={18} />}
                                tone="cyan"
                                title="Server"
                                text="Máy từ xa chạy openssh-server và service ssh/sshd."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-2 bg-slate-800/60 border border-slate-700 rounded-3xl p-6">
                <h4 className="font-bold text-white flex items-center gap-2 mb-4">
                    <Network className="text-violet-400" /> Luồng kết nối
                </h4>
                <div className="space-y-3 font-mono text-sm">
                    <FlowRow left="Client" mid="ssh user@host" right="Server" />
                    <FlowRow left="Terminal" mid="AES encrypted" right="sshd" />
                    <FlowRow
                        left="Private key"
                        mid="signature"
                        right="Public key"
                    />
                </div>
                <div className="mt-5 bg-violet-500/10 border border-violet-500/30 rounded-2xl p-4 text-sm text-violet-100">
                    Private key ở máy bạn, public key nằm trong{" "}
                    <code>~/.ssh/authorized_keys</code> trên server.
                </div>
            </div>
        </div>
    );
}

function FlowRow({ left, mid, right }) {
    return (
        <div className="grid grid-cols-3 items-center gap-2 bg-slate-950 border border-slate-700 rounded-xl p-3">
            <span className="text-cyan-300">{left}</span>
            <span className="text-center text-violet-300">→ {mid} →</span>
            <span className="text-right text-green-300">{right}</span>
        </div>
    );
}

function InstallAndService() {
    const [tab, setTab] = useState("install");
    const code = {
        install: `# SSH client: dùng để kết nối đi, thường đã có sẵn
$ sudo apt update
$ sudo apt install openssh-client -y

# SSH server: cho phép máy khác kết nối vào máy bạn
$ sudo apt install openssh-server -y

$ ssh -V
OpenSSH_9.xp1 Ubuntu-...`,
        service: `$ sudo systemctl status ssh
● ssh.service - OpenBSD Secure Shell server
     Loaded: loaded (/lib/systemd/system/ssh.service; enabled)
     Active: active (running)

$ sudo systemctl enable --now ssh
$ sudo systemctl restart ssh
$ sudo systemctl reload ssh

# Kiểm tra port 22 đang listen
$ sudo ss -tulnp | grep :22
tcp LISTEN 0 128 0.0.0.0:22 users:(("sshd",pid=1234))`,
        firewall: `# Nếu dùng UFW
$ sudo ufw allow ssh
# hoặc nếu đổi port 2222:
$ sudo ufw allow 2222/tcp

$ sudo ufw status

# Test từ máy khác
$ ssh ubuntu@192.168.1.100`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["install", "Cài client/server"],
                    ["service", "Service/port"],
                    ["firewall", "Firewall"],
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
            <TerminalBlock title={`ssh install — ${tab}`} code={code[tab]} />
        </div>
    );
}

function BasicSshLab() {
    const [host, setHost] = useState("192.168.1.100");
    const [user, setUser] = useState("ubuntu");
    const [port, setPort] = useState("22");
    const [mode, setMode] = useState("connect");
    const code = {
        connect: `$ ssh ${user}@${host}

# Nếu dùng port khác
$ ssh -p ${port} ${user}@${host}

# Lần đầu sẽ hỏi xác nhận fingerprint:
# Are you sure you want to continue connecting (yes/no/[fingerprint])? yes`,
        verbose: `$ ssh -v ${user}@${host}
$ ssh -vv ${user}@${host}
$ ssh -vvv ${user}@${host}

# -v/-vv/-vvv giúp debug quá trình bắt tay, key, auth, config`,
        remote: `$ ssh ${user}@${host} "df -h"
$ ssh ${user}@${host} "ls /var/log"
$ ssh ${user}@${host} "uptime && free -h && who"

# Chạy lệnh nhiều dòng
$ ssh ${user}@${host} 'bash -s' << 'EOF'
echo "Hostname: $(hostname)"
df -h /
free -h
EOF`,
        exit: `# Thoát khỏi phiên SSH
$ exit

# Hoặc:
Ctrl + D

# Nếu terminal bị treo:
Enter ~ .
# Gõ Enter, rồi ~, rồi . để disconnect SSH session`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-3 mb-6">
                <label className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-3">
                    <div className="text-xs text-slate-500 mb-1">User</div>
                    <input
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        className="bg-transparent text-white font-mono w-full outline-none"
                    />
                </label>
                <label className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-3">
                    <div className="text-xs text-slate-500 mb-1">Host/IP</div>
                    <input
                        value={host}
                        onChange={(e) => setHost(e.target.value)}
                        className="bg-transparent text-white font-mono w-full outline-none"
                    />
                </label>
                <label className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-3">
                    <div className="text-xs text-slate-500 mb-1">Port</div>
                    <input
                        value={port}
                        onChange={(e) => setPort(e.target.value)}
                        className="bg-transparent text-white font-mono w-full outline-none"
                    />
                </label>
            </div>
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["connect", "Kết nối"],
                        ["verbose", "Verbose debug"],
                        ["remote", "Chạy lệnh từ xa"],
                        ["exit", "Thoát/escape"],
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
                    <TerminalBlock title={`ssh — ${mode}`} code={code[mode]} />
                </div>
            </div>
        </div>
    );
}

function SshKeyWorkflow() {
    const [step, setStep] = useState(0);
    const steps = [
        [
            "1. Tạo key ED25519",
            `$ ssh-keygen -t ed25519 -C "email@example.com"

# Enter file: nhấn Enter để lưu ~/.ssh/id_ed25519
# Enter passphrase: nên đặt passphrase bảo vệ key

$ ls -l ~/.ssh/id_ed25519*
-rw------- id_ed25519      # private key: KHÔNG CHIA SẺ
-rw-r--r-- id_ed25519.pub  # public key: copy lên server`,
        ],
        [
            "2. Copy public key",
            `$ ssh-copy-id ubuntu@192.168.1.100

# Nếu dùng port khác:
$ ssh-copy-id -p 2222 ubuntu@192.168.1.100

# Cách thủ công:
$ cat ~/.ssh/id_ed25519.pub | ssh ubuntu@192.168.1.100 \
  "mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"`,
        ],
        [
            "3. Login bằng key",
            `$ ssh ubuntu@192.168.1.100
# Không hỏi password server nữa
# Nếu key có passphrase, có thể hỏi passphrase key

# Chỉ định key cụ thể:
$ ssh -i ~/.ssh/id_ed25519 ubuntu@192.168.1.100`,
        ],
        [
            "4. Kiểm tra public key",
            `$ cat ~/.ssh/id_ed25519.pub
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAI... email@example.com

# Trên server:
$ cat ~/.ssh/authorized_keys

# Permission đúng:
$ chmod 700 ~/.ssh
$ chmod 600 ~/.ssh/authorized_keys`,
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
                            className={`w-full text-left p-4 rounded-2xl border font-bold ${step === i ? "bg-amber-500/10 border-amber-500/40 text-amber-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {title}
                        </button>
                    ))}
                    <div className="bg-rose-500/10 border border-rose-500/30 rounded-2xl p-4 text-sm text-rose-100">
                        Private key <code>~/.ssh/id_ed25519</code> tuyệt đối
                        không gửi cho ai. Chỉ copy file <code>.pub</code> lên
                        server.
                    </div>
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={steps[step][0]}
                        code={steps[step][1]}
                    />
                </div>
            </div>
        </div>
    );
}

function SshConfigGuide() {
    const [mode, setMode] = useState("basic");
    const code = {
        basic: `$ nano ~/.ssh/config

Host myserver
    HostName 192.168.1.100
    User ubuntu
    Port 2222
    IdentityFile ~/.ssh/id_ed25519

Host vps-production
    HostName 103.45.67.89
    User root
    IdentityFile ~/.ssh/id_ed25519_vps

$ chmod 600 ~/.ssh/config

# Giờ chỉ cần:
$ ssh myserver
$ ssh vps-production`,
        options: `Host *.company
    User deploy
    IdentityFile ~/.ssh/id_ed25519_company
    ServerAliveInterval 60
    ServerAliveCountMax 3
    ForwardAgent no

Host bastion
    HostName bastion.company.com
    User admin

Host private-db
    HostName 10.0.2.15
    User ubuntu
    ProxyJump bastion`,
        test: `$ ssh -G myserver | head -30
# Hiển thị config cuối cùng sau khi resolve alias

$ ssh -v myserver
# Debug xem đang dùng HostName, User, Port, IdentityFile nào

$ scp myserver:/home/ubuntu/log.txt ./
# SCP cũng dùng được alias trong ~/.ssh/config`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["basic", "Alias cơ bản"],
                    ["options", "Options nâng cao"],
                    ["test", "Test/debug"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setMode(k)}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${mode === k ? "bg-blue-500/10 border-blue-500/40 text-blue-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <TerminalBlock
                title={`~/.ssh/config — ${mode}`}
                code={code[mode]}
            />
        </div>
    );
}

function ScpGuide() {
    const [mode, setMode] = useState("download");
    const code = {
        download: `# Copy file TỪ server VỀ máy bạn
$ scp ubuntu@192.168.1.100:/home/ubuntu/file.txt ./

# Dùng port khác
$ scp -P 2222 ubuntu@192.168.1.100:/var/log/syslog ./

# Dùng alias trong config
$ scp myserver:/home/ubuntu/log.txt ./`,
        upload: `# Copy file TỪ máy bạn LÊN server
$ scp ./file.txt ubuntu@192.168.1.100:/home/ubuntu/

# Copy vào web root
$ scp ./index.html ubuntu@192.168.1.100:/var/www/html/

# Chỉ định key
$ scp -i ~/.ssh/id_ed25519 ./file.txt ubuntu@192.168.1.100:/tmp/`,
        folder: `# Copy cả thư mục
$ scp -r ./project ubuntu@192.168.1.100:/var/www/

# Nén khi truyền
$ scp -C largefile.iso ubuntu@192.168.1.100:/tmp/

# Giới hạn băng thông, đơn vị Kbit/s
$ scp -l 8000 bigfile.iso ubuntu@192.168.1.100:/tmp/`,
        rsync: `# Với thư mục lớn, rsync thường tốt hơn scp
$ rsync -avz ./project/ ubuntu@192.168.1.100:/var/www/project/

# Resume/đồng bộ lại nhanh hơn
$ rsync -avz --progress ./project/ myserver:/var/www/project/

# Xóa file đích nếu source đã xóa
$ rsync -avz --delete ./project/ myserver:/var/www/project/`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["download", "Server → máy bạn"],
                        ["upload", "Máy bạn → server"],
                        ["folder", "Thư mục/options"],
                        ["rsync", "Gợi ý rsync"],
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
                    <TerminalBlock title={`scp — ${mode}`} code={code[mode]} />
                </div>
            </div>
        </div>
    );
}

function TunnelGuide() {
    const [mode, setMode] = useState("local");
    const code = {
        local: `# Local forwarding: máy bạn:9999 → SSH tunnel → server:3306
$ ssh -L 9999:localhost:3306 ubuntu@192.168.1.100

# Giờ trên máy bạn, kết nối MySQL vào localhost:9999
$ mysql -h 127.0.0.1 -P 9999 -u appuser -p

Sơ đồ:
  Laptop:9999 ──SSH encrypted──> Server:localhost:3306`,
        web: `# Truy cập web app nội bộ trên server port 8000
$ ssh -L 8080:localhost:8000 ubuntu@192.168.1.100

# Mở browser trên máy bạn:
http://localhost:8080

# Chạy tunnel nền không mở shell
$ ssh -N -L 8080:localhost:8000 ubuntu@192.168.1.100`,
        dynamic: `# Dynamic forwarding: dùng SSH như SOCKS proxy
$ ssh -D 1080 ubuntu@192.168.1.100

# Browser/app cấu hình SOCKS5 proxy:
Host: 127.0.0.1
Port: 1080

# Chạy nền:
$ ssh -N -D 1080 ubuntu@192.168.1.100`,
        remote: `# Remote forwarding: server:9000 → laptop:3000
$ ssh -R 9000:localhost:3000 ubuntu@192.168.1.100

# Người trên server truy cập localhost:9000
# sẽ được forward về app localhost:3000 trên máy bạn

# Cần cấu hình thêm nếu muốn bind ra ngoài server:
# GatewayPorts yes`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["local", "Local -L DB"],
                        ["web", "Local -L web"],
                        ["dynamic", "SOCKS -D"],
                        ["remote", "Remote -R"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setMode(k)}
                            className={`w-full text-left rounded-xl border p-4 font-bold ${mode === k ? "bg-purple-500/10 border-purple-500/40 text-purple-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`ssh tunneling — ${mode}`}
                        code={code[mode]}
                    />
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-3 mt-6">
                <MiniPoint
                    icon={<ArrowRight size={18} />}
                    tone="purple"
                    title="-L"
                    text="Local port trên máy bạn forward đến host/port phía server."
                />
                <MiniPoint
                    icon={<Globe2 size={18} />}
                    tone="blue"
                    title="-D"
                    text="SOCKS proxy động qua SSH."
                />
                <MiniPoint
                    icon={<Route size={18} />}
                    tone="amber"
                    title="-N"
                    text="Không mở shell, chỉ giữ tunnel."
                />
            </div>
        </div>
    );
}

function SshHardening() {
    const [mode, setMode] = useState("config");
    const code = {
        config: `$ sudo nano /etc/ssh/sshd_config

# Tắt login password, chỉ dùng key
PasswordAuthentication no

# Tắt root login trực tiếp
PermitRootLogin no

# Đổi port mặc định
Port 2222

# Chỉ cho phép user cụ thể
AllowUsers ubuntu deploy`,
        apply: `# Kiểm tra syntax trước khi restart
$ sudo sshd -t

# Nếu đổi port, mở firewall trước
$ sudo ufw allow 2222/tcp

# Reload an toàn hơn restart trong nhiều trường hợp
$ sudo systemctl reload ssh

# Mở terminal khác test trước khi đóng phiên hiện tại:
$ ssh -p 2222 ubuntu@server-ip`,
        permissions: `# Quyền file quan trọng
$ chmod 700 ~/.ssh
$ chmod 600 ~/.ssh/authorized_keys
$ chmod 600 ~/.ssh/config
$ chmod 600 ~/.ssh/id_ed25519
$ chmod 644 ~/.ssh/id_ed25519.pub

# Server side:
$ ls -ld ~/.ssh
$ ls -l ~/.ssh/authorized_keys`,
        logs: `# Xem log SSH service
$ sudo journalctl -u ssh -n 100
$ sudo journalctl -u ssh -f

# Auth log
$ sudo grep "sshd" /var/log/auth.log | tail -50
$ sudo grep "Failed password" /var/log/auth.log | tail -20
$ sudo grep "Accepted" /var/log/auth.log | tail -20`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["config", "sshd_config"],
                    ["apply", "Apply an toàn"],
                    ["permissions", "Permissions"],
                    ["logs", "Logs/audit"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setMode(k)}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${mode === k ? "bg-rose-500/10 border-rose-500/40 text-rose-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <TerminalBlock
                title={`ssh hardening — ${mode}`}
                code={code[mode]}
            />
        </div>
    );
}

function AgentAndAudit() {
    const [mode, setMode] = useState("agent");
    const code = {
        agent: `# Xem key đang được ssh-agent quản lý
$ ssh-add -l

# Thêm key vào agent để không phải nhập passphrase nhiều lần
$ ssh-add ~/.ssh/id_ed25519

# Xóa 1 key khỏi agent
$ ssh-add -d ~/.ssh/id_ed25519

# Xóa tất cả key khỏi agent
$ ssh-add -D`,
        public: `# Xem public key của mình
$ cat ~/.ssh/id_ed25519.pub

# Tạo public key từ private key nếu lỡ mất file .pub
$ ssh-keygen -y -f ~/.ssh/id_ed25519 > ~/.ssh/id_ed25519.pub

# Fingerprint key
$ ssh-keygen -lf ~/.ssh/id_ed25519.pub`,
        who: `# Xem ai đang kết nối vào server
$ who
$ w
$ users

# Lịch sử đăng nhập
$ last
$ last -a

# Xem SSH sessions hiện tại
$ ps aux | grep sshd
$ ss -tnp | grep sshd`,
        known: `# Known hosts lưu fingerprint server đã từng kết nối
$ cat ~/.ssh/known_hosts

# Xóa host cũ khi server reinstall đổi fingerprint
$ ssh-keygen -R 192.168.1.100
$ ssh-keygen -R myserver

# Scan fingerprint server
$ ssh-keyscan -H 192.168.1.100 >> ~/.ssh/known_hosts`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["agent", "ssh-agent"],
                        ["public", "Public key"],
                        ["who", "Ai đang login"],
                        ["known", "known_hosts"],
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
                        title={`ssh utilities — ${mode}`}
                        code={code[mode]}
                    />
                </div>
            </div>
        </div>
    );
}

function Troubleshooting() {
    const [caseId, setCaseId] = useState("refused");
    const cases = {
        refused: {
            title: "Connection refused",
            icon: AlertTriangle,
            code: `$ ssh ubuntu@192.168.1.100
ssh: connect to host 192.168.1.100 port 22: Connection refused

# Trên server:
$ sudo systemctl status ssh
$ sudo systemctl enable --now ssh
$ sudo ss -tulnp | grep :22
$ sudo ufw status

# Có thể service ssh chưa chạy hoặc firewall/port sai`,
        },
        timeout: {
            title: "Connection timed out",
            icon: Wifi,
            code: `$ ssh ubuntu@192.168.1.100
ssh: connect to host 192.168.1.100 port 22: Connection timed out

# Kiểm tra mạng/route/firewall
$ ping 192.168.1.100
$ traceroute 192.168.1.100
$ nc -vz 192.168.1.100 22

# Timeout thường là không tới được host/port bị drop`,
        },
        denied: {
            title: "Permission denied publickey/password",
            icon: Lock,
            code: `$ ssh -v ubuntu@192.168.1.100
Permission denied (publickey).

# Kiểm tra user đúng chưa
# Kiểm tra key có được dùng không:
$ ssh -i ~/.ssh/id_ed25519 -v ubuntu@192.168.1.100

# Trên server:
$ ls -ld ~/.ssh
$ ls -l ~/.ssh/authorized_keys
$ tail -f /var/log/auth.log`,
        },
        fingerprint: {
            title: "Host key changed",
            icon: ShieldAlert,
            code: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

# Có thể server reinstall đổi fingerprint, hoặc có rủi ro MITM.
# Xác minh fingerprint server trước.

$ ssh-keygen -R 192.168.1.100
$ ssh ubuntu@192.168.1.100`,
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
                                className={`w-full text-left p-4 rounded-2xl border transition-all ${caseId === k ? "bg-orange-500/10 border-orange-500/40" : "bg-slate-900 border-slate-700 hover:border-slate-500"}`}
                            >
                                <div className="flex items-center gap-3">
                                    <ItemIcon className="text-orange-400" />
                                    <span className="font-bold text-white">
                                        {c.title}
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
                        title="ssh troubleshooting"
                        code={current.code}
                    />
                </div>
            </div>
        </div>
    );
}

function SshHelperPreview() {
    const [view, setView] = useState("menu");
    const content = {
        menu: `╔══════════════════════════════════════╗
║            SSH HELPER                ║
╠══════════════════════════════════════╣
║ 1) Test kết nối SSH                  ║
║ 2) Tạo SSH key                       ║
║ 3) Copy public key lên server        ║
║ 4) Tạo SSH config alias              ║
║ 5) Copy file bằng SCP                ║
║ 6) Tạo SSH tunnel                    ║
║ 7) Audit SSH server                  ║
╚══════════════════════════════════════╝`,
        test: `Host: 192.168.1.100
User: ubuntu
Port: 22

▶ Ping host...
✅ Host reachable

▶ Check port 22...
✅ Port open

▶ SSH verbose test...
✅ Authentication succeeded`,
        key: `▶ Tạo ED25519 key
$ ssh-keygen -t ed25519 -C "ubuntu-lab" -f ~/.ssh/id_ed25519_lab

▶ Copy key
$ ssh-copy-id -i ~/.ssh/id_ed25519_lab.pub ubuntu@192.168.1.100

▶ Test login
$ ssh -i ~/.ssh/id_ed25519_lab ubuntu@192.168.1.100`,
        tunnel: `Local port: 9999
Remote target: localhost:3306
Server: myserver

Command:
ssh -N -L 9999:localhost:3306 myserver

✅ Tunnel running
Connect local app to: 127.0.0.1:9999`,
        audit: `SSH server audit:
  ✅ ssh service active
  ✅ port 2222 listening
  ✅ PermitRootLogin no
  ✅ PasswordAuthentication no
  ✅ AllowUsers configured
  ⚠️  UFW: port 2222 allowed from anywhere

Recommendation:
  sudo ufw allow from YOUR_IP to any port 2222 proto tcp`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-2">
                    {[
                        ["menu", "Menu"],
                        ["test", "Test SSH"],
                        ["key", "Key setup"],
                        ["tunnel", "Tunnel"],
                        ["audit", "Audit"],
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
                        title="ssh_helper.sh preview"
                        code={content[view]}
                    />
                </div>
            </div>
        </div>
    );
}

function PracticeChecklist() {
    const tasks = [
        [
            "Cài SSH client/server",
            "sudo apt install openssh-client openssh-server -y",
        ],
        [
            "Kiểm tra service ssh",
            "sudo systemctl status ssh && sudo ss -tulnp | grep :22",
        ],
        ["SSH vào server", "ssh ubuntu@192.168.1.100"],
        ["SSH verbose", "ssh -v ubuntu@192.168.1.100"],
        ["Chạy lệnh từ xa", "ssh ubuntu@192.168.1.100 'df -h && uptime'"],
        ["Tạo SSH key ED25519", "ssh-keygen -t ed25519 -C 'lab@example.com'"],
        ["Copy key lên server", "ssh-copy-id ubuntu@192.168.1.100"],
        ["Test login bằng key", "ssh ubuntu@192.168.1.100"],
        ["Tạo SSH alias", "nano ~/.ssh/config && chmod 600 ~/.ssh/config"],
        ["SSH bằng alias", "ssh myserver"],
        ["Copy file lên server", "scp ./file.txt myserver:/tmp/"],
        ["Copy file từ server về", "scp myserver:/var/log/syslog ./"],
        ["Tạo local tunnel", "ssh -N -L 8080:localhost:80 myserver"],
        ["Xem ai đang login", "who; w; last | head"],
        [
            "Audit SSH log",
            "sudo journalctl -u ssh -n 50; sudo grep 'sshd' /var/log/auth.log | tail",
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
                        <BookOpen className="text-violet-400" /> Tóm tắt bài học
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <SummaryBox
                        title="SSH cơ bản"
                        items={[
                            "ssh user@host",
                            "ssh -p 2222 user@host",
                            "ssh -v user@host",
                            "ssh user@host 'df -h'",
                            "exit / Ctrl+D",
                        ]}
                    />
                    <SummaryBox
                        title="SSH key/config"
                        items={[
                            "ssh-keygen -t ed25519",
                            "ssh-copy-id user@host",
                            "ssh -i key user@host",
                            "~/.ssh/config",
                            "ssh myserver",
                        ]}
                    />
                    <SummaryBox
                        title="Copy/tunnel"
                        items={[
                            "scp file user@host:/path",
                            "scp user@host:/file ./",
                            "scp -r folder host:/path",
                            "ssh -L local:host:port",
                            "ssh -D 1080 host",
                        ]}
                    />
                    <SummaryBox
                        title="Bảo mật"
                        items={[
                            "PasswordAuthentication no",
                            "PermitRootLogin no",
                            "Port 2222",
                            "AllowUsers",
                            "sshd -t",
                            "journalctl -u ssh",
                        ]}
                    />
                </div>
                <div className="px-6 md:px-8 pb-8">
                    <div className="bg-violet-500/10 border border-violet-500/30 rounded-2xl p-5 text-violet-100">
                        <strong className="text-white">Quy tắc an toàn:</strong>{" "}
                        tạo key ED25519, không chia sẻ private key, mở firewall
                        port mới trước khi đổi SSH port, chạy{" "}
                        <code>sshd -t</code> trước khi reload, và luôn test bằng
                        terminal thứ hai trước khi đóng phiên SSH hiện tại.
                    </div>
                </div>
            </div>
        </section>
    );
}

function SummaryBox({ title, items }) {
    return (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
            <h4 className="font-bold text-violet-300 uppercase text-xs tracking-widest mb-4">
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
        question: "SSH dùng để làm gì?",
        options: [
            "Điều khiển máy từ xa qua terminal với kết nối mã hóa",
            "Chỉ tải file ISO",
            "Chỉ format disk",
            "Chỉ xem RAM",
        ],
        correct: 0,
        explanation:
            "SSH cung cấp remote shell an toàn, dữ liệu được mã hóa giữa client và server.",
    },
    {
        question: "File nào là private key và tuyệt đối không được chia sẻ?",
        options: [
            "~/.ssh/id_ed25519",
            "~/.ssh/id_ed25519.pub",
            "~/.ssh/config",
            "/etc/hosts",
        ],
        correct: 0,
        explanation:
            "File không có .pub là private key. Public key mới là file được copy lên server.",
    },
    {
        question: "Lệnh nào copy public key lên server dễ nhất?",
        options: [
            "ssh-copy-id user@host",
            "scp ~/.ssh/id_ed25519 user@host",
            "ssh-keygen -R host",
            "ssh-add -D",
        ],
        correct: 0,
        explanation:
            "ssh-copy-id tự thêm public key vào ~/.ssh/authorized_keys trên server.",
    },
    {
        question: "Muốn SSH vào port 2222 dùng lệnh nào?",
        options: [
            "ssh -p 2222 user@host",
            "ssh -P 2222 user@host",
            "ssh --port-copy 2222",
            "scp -p 2222 user@host",
        ],
        correct: 0,
        explanation: "ssh dùng -p chữ thường cho port. scp dùng -P chữ hoa.",
    },
    {
        question: "~/.ssh/config giúp gì?",
        options: [
            "Đặt alias và lưu HostName/User/Port/IdentityFile để gõ ssh myserver",
            "Tăng dung lượng ổ cứng",
            "Tắt DNS",
            "Chỉ dùng cho wget",
        ],
        correct: 0,
        explanation:
            "SSH config giúp gom thông tin kết nối và đặt tên tắt cho server.",
    },
    {
        question: "Copy thư mục project lên server bằng scp dùng option nào?",
        options: [
            "scp -r ./project user@host:/path/",
            "scp -L ./project",
            "ssh -r ./project",
            "scp --json ./project",
        ],
        correct: 0,
        explanation: "-r là recursive, dùng để copy thư mục.",
    },
    {
        question: "Lệnh ssh -L 9999:localhost:3306 user@server có ý nghĩa gì?",
        options: [
            "Forward localhost:9999 trên máy bạn tới localhost:3306 trên server qua SSH",
            "Đổi port SSH server thành 9999",
            "Copy database về máy bạn",
            "Tắt MySQL",
        ],
        correct: 0,
        explanation:
            "Đây là local port forwarding, thường dùng truy cập DB nội bộ qua tunnel.",
    },
    {
        question:
            "Trước khi restart/reload SSH sau khi sửa sshd_config nên làm gì?",
        options: [
            "sudo sshd -t để kiểm tra syntax",
            "rm ~/.ssh/id_ed25519",
            "tắt toàn bộ firewall",
            "reboot ngay",
        ],
        correct: 0,
        explanation:
            "sshd -t phát hiện lỗi cấu hình trước khi áp dụng, tránh tự khóa mình khỏi server.",
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
                    <strong className="text-violet-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu về SSH.
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
                <span className="text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full">
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
