import React, { useState } from "react";
import {
    Monitor,
    Server,
    Terminal,
    ShieldCheck,
    Cpu,
    HardDrive,
    Wifi,
    Network,
    PackageCheck,
    Settings,
    AlertTriangle,
    Info,
    CheckCircle2,
    XCircle,
    Copy,
    ChevronRight,
    RotateCcw,
    Sparkles,
    ShieldAlert,
    Bug,
    Wrench,
    ListChecks,
    Search,
    Globe,
    Database,
    Boxes,
    FileText,
    Lock,
    KeyRound,
    Activity,
    Gauge,
    MousePointer2,
    Keyboard,
    Cloud,
    Router,
    Eye,
    Power,
    PackageOpen,
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
                                Desktop · Server · SSH · System Administration
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 12
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 12.1
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" /> Bắt
                        đầu Phần 12 — Ubuntu Desktop và Server
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Khác Biệt Giữa <br />
                        <span className="text-orange-500">
                            Ubuntu Desktop và Server
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Bạn sẽ hiểu khi nào dùng Ubuntu Desktop, khi nào dùng
                        Ubuntu Server, vì sao server thường không có giao diện
                        đồ họa, cách kiểm tra GUI bằng{" "}
                        <code className="text-orange-300">
                            XDG_CURRENT_DESKTOP
                        </code>
                        /<code className="text-orange-300">gdm3</code>, và cách
                        quản trị server bằng Terminal/SSH.
                    </p>
                </section>

                <section className="bg-yellow-500/10 border border-yellow-500/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-5 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center shrink-0">
                        <ShieldAlert size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Server không có giao diện không phải là lỗi
                        </h3>
                        <p className="text-yellow-100 leading-relaxed">
                            Sau khi cài Ubuntu Server, màn hình{" "}
                            <code className="text-white">server login:</code> là
                            bình thường. Server được thiết kế để quản trị bằng
                            dòng lệnh và SSH, giúp nhẹ hơn, ít phần mềm thừa hơn
                            và dễ tự động hóa hơn.
                        </p>
                    </div>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <DesktopServerConceptCard />
                    <DesktopServerSimulator />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="blue"
                        icon={<Monitor size={22} />}
                        title="Ubuntu Desktop là gì?"
                        subtitle="Bản Ubuntu dành cho máy cá nhân, học tập, lập trình, có giao diện GNOME, trình duyệt, file manager và app store."
                    />
                    <DesktopSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="green"
                        icon={<Server size={22} />}
                        title="Ubuntu Server là gì?"
                        subtitle="Bản Ubuntu tối giản cho máy chủ, thường chạy website, API, database, Docker host, CI/CD hoặc monitoring."
                    />
                    <ServerSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="orange"
                        icon={<Activity size={22} />}
                        title="So sánh Desktop và Server"
                        subtitle="Desktop ưu tiên trải nghiệm người dùng; Server ưu tiên nhẹ, ổn định, ít bề mặt tấn công và quản trị từ xa."
                    />
                    <CompareTableSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="purple"
                        icon={<Search size={22} />}
                        title="Nhận biết máy đang giống Desktop hay Server"
                        subtitle="lsb_release cho biết phiên bản Ubuntu, còn XDG_CURRENT_DESKTOP và gdm3 giúp nhận biết có GUI hay không."
                    />
                    <DetectSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="cyan"
                        icon={<KeyRound size={22} />}
                        title="Quản trị Ubuntu Server bằng SSH"
                        subtitle="Cài openssh-server, bật service ssh, kiểm tra port 22 và kết nối bằng ssh user@server_ip."
                    />
                    <SshAdminSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="yellow"
                        icon={<Gauge size={22} />}
                        title="Kiểm tra tài nguyên server"
                        subtitle="Dùng free -h, df -h, uptime, top và systemctl để xem RAM, disk, tải hệ thống và service đang chạy."
                    />
                    <ResourceSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="pink"
                        icon={<Settings size={22} />}
                        title="Có nên cài GUI lên Ubuntu Server?"
                        subtitle="Có thể cài ubuntu-desktop, nhưng thường không khuyến nghị trên server production vì tốn tài nguyên và tăng độ phức tạp."
                    />
                    <GuiOnServerSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="8"
                        color="red"
                        icon={<Bug size={22} />}
                        title="Lỗi phổ biến và cách xử lý"
                        subtitle="Tưởng server bị lỗi vì không có GUI, SSH refused, không biết IP, GUI làm máy chậm và nhầm local/VPS/cloud server."
                    />
                    <CommonErrorsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="9"
                        color="teal"
                        icon={<Wrench size={22} />}
                        title="Bài tập thực hành"
                        subtitle="Kiểm tra GUI, SSH, RAM, disk, service đang chạy và phân loại máy giống Desktop hay Server hơn."
                    />
                    <PracticeSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="10"
                        color="emerald"
                        icon={<ListChecks size={22} />}
                        title="Tóm tắt nhanh"
                        subtitle="Các điểm khác biệt và lệnh quan trọng cần nhớ khi học Ubuntu Desktop và Ubuntu Server."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <PackageCheck className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức bài 12.1
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Ôn lại Desktop/Server, GNOME/gdm3, SSH, tài
                                    nguyên server, GUI trên server và cloud
                                    firewall.
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
                        Bạn đã phân biệt được Ubuntu Desktop và Server. Tiếp
                        theo là cài đặt web server Apache và Nginx.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                        Bài tiếp theo: 12.2 — Cài đặt Web Server: Apache, Nginx{" "}
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
        yellow: "bg-yellow-500/20 text-yellow-400",
        pink: "bg-pink-500/20 text-pink-400",
        red: "bg-red-500/20 text-red-400",
        teal: "bg-teal-500/20 text-teal-400",
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

function DesktopServerConceptCard() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-orange-500/15 text-orange-400 rounded-2xl flex items-center justify-center">
                    <Monitor size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        Một hệ điều hành, hai mục đích
                    </h3>
                    <p className="text-slate-500 text-sm">
                        Desktop cho người dùng trực tiếp, Server cho dịch vụ
                        24/7
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5">
                    <Monitor className="text-blue-400 mb-3" />
                    <div className="font-bold text-white mb-2">
                        Ubuntu Desktop
                    </div>
                    <p className="text-sm text-slate-400">
                        Có GNOME GUI, dock, file manager, Firefox, app store,
                        terminal. Phù hợp laptop/PC.
                    </p>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-5">
                    <Server className="text-green-400 mb-3" />
                    <div className="font-bold text-white mb-2">
                        Ubuntu Server
                    </div>
                    <p className="text-sm text-slate-400">
                        Tối giản, thường không GUI, quản trị bằng Terminal/SSH.
                        Phù hợp VPS/cloud/server.
                    </p>
                </div>
            </div>
            <div className="bg-black border border-slate-800 rounded-2xl p-5 font-mono text-sm text-slate-300 whitespace-pre-wrap">{`Ubuntu Desktop = máy cá nhân có màn hình, chuột, app\nUbuntu Server  = máy chủ chạy website/API/database 24/7`}</div>
        </div>
    );
}

function DesktopServerSimulator() {
    const [mode, setMode] = useState("server");
    return (
        <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Eye className="text-orange-400" /> Mô phỏng thành phần mặc định
            </h3>
            <p className="text-slate-400 mb-6">
                Chọn Desktop hoặc Server để xem hệ thống thường có gì.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-5">
                <button
                    onClick={() => setMode("desktop")}
                    className={`p-4 rounded-xl border font-bold ${mode === "desktop" ? "bg-blue-500 text-white border-blue-500" : "bg-slate-950 border-slate-800 text-slate-400"}`}
                >
                    Desktop
                </button>
                <button
                    onClick={() => setMode("server")}
                    className={`p-4 rounded-xl border font-bold ${mode === "server" ? "bg-green-500 text-white border-green-500" : "bg-slate-950 border-slate-800 text-slate-400"}`}
                >
                    Server
                </button>
            </div>
            <div className="bg-black border border-slate-800 rounded-2xl p-5 font-mono text-sm text-green-400 whitespace-pre-wrap">
                {mode === "desktop"
                    ? `Ubuntu Desktop\n├── Linux kernel\n├── systemd\n├── network\n├── GNOME Desktop\n├── Firefox\n├── Files / Nautilus\n├── App Center\n└── Terminal`
                    : `Ubuntu Server\n├── Linux kernel\n├── systemd\n├── network\n├── OpenSSH Server\n├── Web server nếu cài\n├── Database nếu cài\n└── Docker nếu cài`}
            </div>
            <div
                className={`mt-5 rounded-2xl border p-4 text-sm ${mode === "desktop" ? "bg-blue-500/10 border-blue-500/20 text-blue-100" : "bg-green-500/10 border-green-500/20 text-green-100"}`}
            >
                {mode === "desktop"
                    ? "Desktop ưu tiên trải nghiệm người dùng: chuột, bàn phím, cửa sổ, trình duyệt và IDE."
                    : "Server ưu tiên chạy dịch vụ ổn định, nhẹ, ít thành phần không cần thiết và dễ tự động hóa."}
            </div>
        </div>
    );
}

function DesktopSection() {
    return (
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
            <CodeBlock
                title="ubuntu-desktop-use-cases.txt"
                code={`Ubuntu Desktop phù hợp cho:\n\nHọc Linux cơ bản\nLập trình trên laptop\nDùng VS Code\nDuyệt web\nSoạn tài liệu\nChạy Docker để dev\nDùng máy cá nhân hằng ngày\n\nBạn có thể dùng chuột, bàn phím, mở cửa sổ, kéo thả file giống Windows/macOS.`}
            />
            <CheatCard
                title="Thành phần Desktop thường có"
                rows={[
                    ["GNOME GUI", "Môi trường desktop"],
                    ["Dock", "Thanh ứng dụng"],
                    ["Files/Nautilus", "File manager"],
                    ["Firefox", "Trình duyệt"],
                    ["App Center", "Cài ứng dụng GUI"],
                    ["Terminal", "Vẫn có dòng lệnh"],
                ]}
            />
        </div>
    );
}

function ServerSection() {
    return (
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
            <CodeBlock
                title="ubuntu-server-login.txt"
                code={`# Màn hình đăng nhập Ubuntu Server thường có dạng:\nUbuntu 22.04.5 LTS server tty1\n\nserver login:\n\n# Sau khi đăng nhập:\nkha@server:~$\n\n# Đây là bình thường, không phải lỗi.\n# Bạn quản trị server chủ yếu bằng lệnh Terminal.`}
            />
            <CheatCard
                title="Server thường dùng để chạy"
                rows={[
                    ["Website", "Apache/Nginx"],
                    ["API backend", "Node.js, Python, Java"],
                    ["Database", "MySQL, PostgreSQL"],
                    ["Docker host", "Container services"],
                    ["CI/CD runner", "Build/deploy tự động"],
                    ["Monitoring", "Theo dõi hệ thống"],
                ]}
            />
        </div>
    );
}

function CompareTableSection() {
    const rows = [
        [
            "Mục đích",
            "Dùng cá nhân, học tập, lập trình",
            "Chạy dịch vụ, website, database",
        ],
        ["Giao diện", "Có GNOME GUI", "Thường không có GUI"],
        ["Cách dùng", "Chuột + bàn phím + Terminal", "Terminal + SSH"],
        [
            "Phần mềm mặc định",
            "Trình duyệt, File Manager, App Store",
            "Dịch vụ hệ thống, server packages",
        ],
        ["Tài nguyên", "Tốn RAM/CPU hơn", "Nhẹ hơn"],
        [
            "Bảo mật",
            "Nhiều thành phần cho người dùng",
            "Tối giản hơn, ít bề mặt tấn công hơn",
        ],
        [
            "Môi trường",
            "Laptop, PC, máy ảo học tập",
            "VPS, cloud, data center, server nội bộ",
        ],
    ];
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-950 border-b border-slate-800 text-sm font-bold text-white">
                <div className="p-4">Tiêu chí</div>
                <div className="p-4 text-blue-300">Ubuntu Desktop</div>
                <div className="p-4 text-green-300">Ubuntu Server</div>
            </div>
            {rows.map(([a, b, c]) => (
                <div
                    key={a}
                    className="grid grid-cols-3 border-b border-slate-800 last:border-b-0 text-sm"
                >
                    <div className="p-4 font-bold text-slate-300">{a}</div>
                    <div className="p-4 text-slate-400">{b}</div>
                    <div className="p-4 text-slate-400">{c}</div>
                </div>
            ))}
        </div>
    );
}

function DetectSection() {
    const [tab, setTab] = useState("version");
    const tabs = [
        ["version", "Phiên bản"],
        ["desktop", "GUI"],
        ["gdm3", "gdm3"],
        ["apps", "App Desktop"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="purple">
            {tab === "version" && (
                <CodeBlock
                    title="check-ubuntu-version.sh"
                    code={`lsb_release -a\n\n# Output mẫu:\n# No LSB modules are available.\n# Distributor ID: Ubuntu\n# Description:    Ubuntu 22.04.5 LTS\n# Release:        22.04\n# Codename:       jammy\n\n# Lệnh này cho biết phiên bản Ubuntu, nhưng chưa chắc phân biệt Desktop hay Server.`}
                />
            )}
            {tab === "desktop" && (
                <CodeBlock
                    title="check-desktop-environment.sh"
                    code={`echo $XDG_CURRENT_DESKTOP\n\n# Output Desktop:\n# ubuntu:GNOME\n\n# Output Server thuần hoặc SSH shell có thể trống:\n#\n\n# Kết luận:\n# Có ubuntu:GNOME → thường là Ubuntu Desktop đang dùng GUI.\n# Trống → có thể là server không GUI hoặc shell SSH.`}
                />
            )}
            {tab === "gdm3" && (
                <CodeBlock
                    title="check-gdm3.sh"
                    code={`systemctl status gdm3\n\n# Desktop có GNOME thường thấy:\n# ● gdm3.service - GNOME Display Manager\n#      Active: active (running)\n\n# Server thường không có:\n# Unit gdm3.service could not be found.`}
                />
            )}
            {tab === "apps" && (
                <CodeBlock
                    title="check-desktop-apps.sh"
                    code={`which firefox\nwhich nautilus\n\n# Desktop có thể có:\n# /snap/bin/firefox\n# /usr/bin/nautilus\n\n# Server thuần thường không có output.`}
                />
            )}
        </Tabbed>
    );
}

function SshAdminSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="ssh-admin-server.sh"
                code={`# Trên server: kiểm tra SSH\nsystemctl status ssh\n\n# Nếu chưa cài SSH server:\nsudo apt update\nsudo apt install openssh-server\n\n# Bật SSH ngay và tự chạy khi boot\nsudo systemctl enable --now ssh\n\n# Kiểm tra port 22 listen\nsudo ss -tulpn | grep ':22'\n\n# Nếu dùng ufw, mở SSH\nsudo ufw allow ssh\nsudo ufw status\n\n# Từ máy cá nhân: kết nối SSH\nssh kha@192.168.1.100\n\n# Nếu dùng port khác, ví dụ 2222:\nssh -p 2222 kha@192.168.1.100`}
            />
            <CheatCard
                title="3 điều kiện SSH thường cần"
                rows={[
                    ["sshd đang chạy", "systemctl status ssh"],
                    ["port 22 đang listen", "ss -tulpn | grep ':22'"],
                    ["firewall cho phép", "ufw allow ssh"],
                    ["IP đúng", "hostname -I hoặc ip addr"],
                ]}
            />
        </div>
    );
}

function ResourceSection() {
    return (
        <CodeBlock
            title="check-server-resources.sh"
            code={`free -h\n# Xem RAM\n\ndf -h\n# Xem dung lượng ổ đĩa\n\nuptime\n# Xem thời gian chạy và tải hệ thống\n\ntop\n# Xem tiến trình realtime\n\nsystemctl --type=service --state=running\n# Xem các service đang chạy\n\n# Gợi ý đọc uptime:\n# up 5 days      → server đã chạy liên tục 5 ngày\n# 1 user         → có 1 phiên đăng nhập\n# load average   → tải hệ thống trung bình`}
        />
    );
}

function GuiOnServerSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="install-or-remove-gui-server.sh"
                code={`# Có thể cài GUI lên Ubuntu Server:\nsudo apt update\nsudo apt install ubuntu-desktop\nsudo reboot\n\n# Nhưng thường không khuyến nghị trên server production.\n\n# Nếu lỡ cài và muốn gỡ, cân nhắc rất kỹ:\nsudo apt remove ubuntu-desktop gdm3\nsudo apt autoremove\n\n# Cảnh báo:\n# Không gỡ package trên production nếu không chắc.\n# Nên snapshot/backup trước khi thao tác.`}
            />
            <div className="space-y-4">
                <ExplainCard
                    icon={<Cpu />}
                    title="Tốn RAM/CPU"
                    desc="GUI cần nhiều process nền và tài nguyên hơn server thuần."
                    danger
                />
                <ExplainCard
                    icon={<PackageOpen />}
                    title="Nhiều package hơn"
                    desc="Nhiều package nghĩa là nhiều thứ cần cập nhật và bảo trì hơn."
                    danger
                />
                <ExplainCard
                    icon={<ShieldCheck />}
                    title="Ưu tiên SSH"
                    desc="Quản trị server bằng SSH, Terminal, dashboard/monitoring khi cần."
                />
            </div>
        </div>
    );
}

function CommonErrorsSection() {
    const [tab, setTab] = useState("nogui");
    const tabs = [
        ["nogui", "Không có GUI"],
        ["ssh", "SSH refused"],
        ["slow", "GUI làm chậm"],
        ["ip", "Không biết IP"],
        ["cloud", "Local/VPS/Cloud"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="red">
            {tab === "nogui" && (
                <CodeBlock
                    title="server-login-not-error.sh"
                    code={`# Tình huống:\nserver login:\n\n# Đây không phải lỗi. Đây là màn hình login dòng lệnh của Ubuntu Server.\n\n# Nhập username và password đã tạo khi cài:\nserver login: kha\nPassword:\n\n# Sau khi đăng nhập:\nkha@server:~$`}
                />
            )}
            {tab === "ssh" && (
                <CodeBlock
                    title="ssh-connection-refused.sh"
                    code={`ssh kha@192.168.1.100\n# ssh: connect to host 192.168.1.100 port 22: Connection refused\n\n# Kiểm tra trên server:\nsystemctl status ssh\n\n# Nếu chưa cài:\nsudo apt update\nsudo apt install openssh-server\nsudo systemctl enable --now ssh\n\n# Kiểm tra port:\nsudo ss -tulpn | grep ':22'\n\n# Nếu dùng ufw:\nsudo ufw allow ssh\nsudo ufw status`}
                />
            )}
            {tab === "slow" && (
                <CodeBlock
                    title="server-slow-after-gui.sh"
                    code={`# VPS nhỏ ví dụ 1 CPU / 1 GB RAM / 20 GB disk\n# Cài GUI có thể khiến máy nặng.\n\nfree -h\ntop\nsystemctl --type=service --state=running\n\n# Nếu không cần GUI, cân nhắc gỡ:\nsudo apt remove ubuntu-desktop gdm3\nsudo apt autoremove\n\n# Cảnh báo: snapshot/backup trước trên server quan trọng.`}
                />
            )}
            {tab === "ip" && (
                <CodeBlock
                    title="find-server-ip.sh"
                    code={`hostname -I\n# Output mẫu:\n# 192.168.1.100\n\nip addr\n# Tìm dòng inet, ví dụ:\n# inet 192.168.1.100/24 brd 192.168.1.255 scope global dynamic enp0s3`}
                />
            )}
            {tab === "cloud" && (
                <CodeBlock
                    title="local-vps-cloud-server.txt"
                    code={`# Server local:\n# IP LAN như 192.168.x.x, truy cập trong mạng nhà/công ty.\n\n# VPS:\n# IP public từ nhà cung cấp như DigitalOcean, Vultr, Linode...\n\n# Cloud server:\n# AWS EC2, Azure VM, GCP Compute. Ngoài ufw còn có security group/cloud firewall.\n\n# Ví dụ:\n# Ubuntu ufw mở port 22\n# Nhưng AWS Security Group chưa mở port 22\n# → SSH vẫn không vào được.`}
                />
            )}
        </Tabbed>
    );
}

function PracticeSection() {
    return (
        <div className="grid lg:grid-cols-3 gap-4">
            <PracticeCard
                level="Dễ"
                title="Nhận biết Desktop/Server"
                code={`lsb_release -a\necho $XDG_CURRENT_DESKTOP\nsystemctl status gdm3`}
                tasks={[
                    "Máy đang dùng Ubuntu phiên bản nào?",
                    "Có desktop environment không?",
                    "gdm3 có active không?",
                    "Máy giống Desktop hay Server hơn?",
                ]}
            />
            <PracticeCard
                level="Trung bình"
                title="Kiểm tra SSH Server"
                code={`systemctl status ssh\nsudo ss -tulpn | grep ':22'\nsudo ufw status`}
                tasks={[
                    "SSH service có chạy không?",
                    "Port 22 có listen không?",
                    "Firewall có cho SSH không?",
                    "Nếu chưa có SSH thì cài gì?",
                ]}
            />
            <PracticeCard
                level="Nâng cao"
                title="So sánh tài nguyên"
                code={`free -h\ndf -h\nsystemctl --type=service --state=running`}
                tasks={[
                    "RAM đang dùng bao nhiêu?",
                    "Ổ đĩa root còn trống bao nhiêu?",
                    "Có bao nhiêu service chạy?",
                    "Có service GUI nào không?",
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
    const activeMap = { purple: "bg-purple-500", red: "bg-red-500" };
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

function ExplainCard({ icon, title, desc, danger }) {
    return (
        <div
            className={`rounded-2xl border p-5 ${danger ? "bg-red-500/10 border-red-500/20" : "bg-slate-950 border-slate-800"}`}
        >
            <div
                className={`mb-3 ${danger ? "text-red-400" : "text-orange-400"}`}
            >
                {icon}
            </div>
            <div className="font-bold text-white">{title}</div>
            <p className="text-slate-400 text-sm mt-2">{desc}</p>
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
            title: "Desktop",
            rows: [
                ["GNOME GUI", "giao diện"],
                ["Firefox", "trình duyệt"],
                ["Nautilus", "file manager"],
                ["App Center", "cài app"],
                ["VS Code", "lập trình"],
            ],
        },
        {
            title: "Server",
            rows: [
                ["Terminal", "quản trị"],
                ["SSH", "truy cập từ xa"],
                ["Nginx/Apache", "web server"],
                ["Database", "dịch vụ dữ liệu"],
                ["Docker", "container host"],
            ],
        },
        {
            title: "Kiểm tra GUI",
            rows: [
                ["echo $XDG_CURRENT_DESKTOP", "desktop env"],
                ["systemctl status gdm3", "display manager"],
                ["which firefox", "trình duyệt"],
                ["which nautilus", "file manager"],
            ],
        },
        {
            title: "SSH",
            rows: [
                ["systemctl status ssh", "trạng thái SSH"],
                ["apt install openssh-server", "cài SSH"],
                ["enable --now ssh", "bật SSH"],
                ["ssh user@ip", "kết nối"],
                ["ssh -p 2222", "port khác"],
            ],
        },
        {
            title: "Tài nguyên",
            rows: [
                ["free -h", "RAM"],
                ["df -h", "disk"],
                ["uptime", "thời gian/tải"],
                ["top", "process realtime"],
                ["hostname -I", "IP nhanh"],
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
        question: "Ubuntu Desktop phù hợp nhất cho trường hợp nào?",
        options: [
            "Máy cá nhân, học Linux, lập trình, dùng GUI",
            "VPS production tối giản",
            "Database server không cần GUI",
            "CI runner không màn hình",
        ],
        correct: 0,
        explanation:
            "Ubuntu Desktop có GUI, trình duyệt, file manager, app store và phù hợp máy cá nhân/laptop/PC.",
    },
    {
        question: "Ubuntu Server thường quản trị bằng gì?",
        options: [
            "Terminal và SSH",
            "Chỉ chuột và dock",
            "App Store",
            "Trình duyệt Firefox",
        ],
        correct: 0,
        explanation:
            "Ubuntu Server thường không có GUI mặc định và được quản trị bằng dòng lệnh/SSH.",
    },
    {
        question:
            "Màn hình server login: sau khi cài Ubuntu Server nghĩa là gì?",
        options: [
            "Bình thường, đó là màn hình đăng nhập dòng lệnh",
            "Cài đặt bị lỗi",
            "Ổ đĩa hỏng",
            "Không có kernel",
        ],
        correct: 0,
        explanation:
            "Ubuntu Server mặc định dùng dòng lệnh, nên server login: là bình thường.",
    },
    {
        question: "Lệnh nào kiểm tra desktop environment hiện tại?",
        options: [
            "echo $XDG_CURRENT_DESKTOP",
            "free -h",
            "df -h",
            "ssh user@ip",
        ],
        correct: 0,
        explanation:
            "XDG_CURRENT_DESKTOP thường hiện ubuntu:GNOME nếu đang dùng GUI GNOME.",
    },
    {
        question: "gdm3 là gì?",
        options: [
            "GNOME Display Manager",
            "Database server",
            "Docker daemon",
            "SSH client",
        ],
        correct: 0,
        explanation:
            "gdm3 là display manager của GNOME, thường có trên Ubuntu Desktop.",
    },
    {
        question: "Muốn cài SSH server trên Ubuntu dùng lệnh nào?",
        options: [
            "sudo apt install openssh-server",
            "sudo apt install ubuntu-desktop",
            "sudo apt install firefox",
            "sudo apt remove gdm3",
        ],
        correct: 0,
        explanation:
            "openssh-server cung cấp dịch vụ SSH để đăng nhập từ xa vào server.",
    },
    {
        question: "Ba điều kiện thường cần để SSH vào server là gì?",
        options: [
            "sshd chạy, port 22 listen, firewall cho phép",
            "Firefox chạy, gdm3 active, có GUI",
            "Docker chạy, nginx chạy, mysql chạy",
            "Có wallpaper, dock, file manager",
        ],
        correct: 0,
        explanation:
            "SSH cần service sshd, port SSH listen và firewall/security group cho phép kết nối.",
    },
    {
        question: "Vì sao không khuyến nghị cài GUI lên server production?",
        options: [
            "Tốn tài nguyên, tăng package cần cập nhật và bề mặt tấn công",
            "Vì Ubuntu Server không thể cài GUI",
            "Vì SSH sẽ biến mất",
            "Vì không dùng được apt",
        ],
        correct: 0,
        explanation:
            "GUI làm server nặng hơn, nhiều thành phần hơn và phức tạp hơn để bảo trì/bảo mật.",
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
