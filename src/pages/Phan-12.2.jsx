import React, { useState } from "react";
import {
    Globe,
    Server,
    Terminal,
    ShieldCheck,
    Network,
    FileText,
    Settings,
    PackageCheck,
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
    Activity,
    FolderOpen,
    Lock,
    Unlock,
    Play,
    StopCircle,
    RefreshCw,
    Power,
    Eye,
    Route,
    Database,
    Code2,
    FileWarning,
    Link,
    MousePointer2,
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
                                Web Server · Apache · Nginx · Virtual Host
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 12
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 12.2
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" /> Chạy
                        website đầu tiên trên Ubuntu Server
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Cài Đặt Web Server <br />
                        <span className="text-orange-500">Apache và Nginx</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Bạn sẽ hiểu web server là gì, phân biệt Apache và Nginx,
                        cài đặt trên Ubuntu, mở firewall HTTP/HTTPS, kiểm tra
                        bằng <code className="text-orange-300">systemctl</code>/
                        <code className="text-orange-300">curl</code>, và tạo
                        website riêng bằng Apache Virtual Host hoặc Nginx Server
                        Block.
                    </p>
                </section>

                <section className="bg-red-500/10 border border-red-500/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-5 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                        <ShieldAlert size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Không để Apache và Nginx cùng tranh port 80/443
                        </h3>
                        <p className="text-red-100 leading-relaxed">
                            Bạn có thể cài cả Apache và Nginx để học, nhưng
                            không nên để cả hai cùng listen{" "}
                            <code className="text-white">80</code> hoặc{" "}
                            <code className="text-white">443</code>. Nếu gặp lỗi{" "}
                            <code className="text-white">
                                Address already in use
                            </code>
                            , hãy kiểm tra bằng{" "}
                            <code className="text-white">
                                sudo ss -tulpn | grep ':80'
                            </code>{" "}
                            rồi dừng service đang chiếm port.
                        </p>
                    </div>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <WebServerConceptCard />
                    <ApacheNginxPicker />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="blue"
                        icon={<Globe size={22} />}
                        title="Web server là gì?"
                        subtitle="Web server nhận HTTP request từ trình duyệt và trả về HTML, CSS, JavaScript, hình ảnh hoặc dữ liệu API."
                    />
                    <WebServerIntroSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="green"
                        icon={<Server size={22} />}
                        title="Apache và Nginx khác nhau thế nào?"
                        subtitle="Apache dễ học, phổ biến với PHP/WordPress; Nginx nhẹ, nhanh, mạnh về static file, reverse proxy và production."
                    />
                    <CompareSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="orange"
                        icon={<Terminal size={22} />}
                        title="Cài và kiểm tra Apache"
                        subtitle="Cài apache2, kiểm tra service, test localhost, mở firewall và thay nội dung index.html."
                    />
                    <ApacheInstallSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="purple"
                        icon={<FileText size={22} />}
                        title="Apache Virtual Host"
                        subtitle="Tạo website demo.local với thư mục riêng trong /var/www, file .conf, a2ensite, configtest và reload."
                    />
                    <ApacheVirtualHostSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="cyan"
                        icon={<Terminal size={22} />}
                        title="Cài và kiểm tra Nginx"
                        subtitle="Dừng Apache nếu đang chiếm port 80, cài nginx, kiểm tra service, test localhost và mở firewall."
                    />
                    <NginxInstallSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="yellow"
                        icon={<Route size={22} />}
                        title="Nginx Server Block"
                        subtitle="Tạo nginx-demo.local, cấu hình listen 80, server_name, root, index, try_files, symlink và reload."
                    />
                    <NginxServerBlockSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="pink"
                        icon={<ShieldCheck size={22} />}
                        title="Firewall, port 80/443 và kiểm tra listen"
                        subtitle="HTTP dùng port 80, HTTPS dùng port 443; mở bằng ufw app profile hoặc allow trực tiếp theo port."
                    />
                    <FirewallPortSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="8"
                        color="red"
                        icon={<Bug size={22} />}
                        title="Lỗi phổ biến và cách xử lý"
                        subtitle="Port 80 bị chiếm, truy cập từ máy khác không được, Virtual Host/Server Block không hoạt động, 403, 404 và quên reload."
                    />
                    <CommonErrorsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="9"
                        color="teal"
                        icon={<Wrench size={22} />}
                        title="Bài tập thực hành"
                        subtitle="Cài Apache, tạo Apache Virtual Host, cài Nginx, tạo Nginx Server Block và test bằng curl."
                    />
                    <PracticeSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="10"
                        color="emerald"
                        icon={<ListChecks size={22} />}
                        title="Tóm tắt nhanh"
                        subtitle="Các lệnh Apache, Nginx, ufw, ss, configtest, nginx -t, a2ensite và symlink cần nhớ."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <PackageCheck className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức bài 12.2
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Ôn lại web server, Apache/Nginx, port
                                    80/443, ufw profiles, Virtual Host, Server
                                    Block và lỗi 403/404.
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
                        Bạn đã biết cài và cấu hình web server cơ bản. Tiếp theo
                        là cài đặt Database: MySQL và PostgreSQL.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                        Bài tiếp theo: 12.3 — Cài đặt Database: MySQL,
                        PostgreSQL <ChevronRight size={20} />
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

function WebServerConceptCard() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-orange-500/15 text-orange-400 rounded-2xl flex items-center justify-center">
                    <Globe size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        Web server làm gì?
                    </h3>
                    <p className="text-slate-500 text-sm">
                        Nhận request và trả response
                    </p>
                </div>
            </div>
            <div className="bg-black border border-slate-800 rounded-2xl p-5 font-mono text-sm text-green-400 whitespace-pre-wrap mb-5">{`Trình duyệt\n    │ HTTP Request\n    ▼\nApache / Nginx\n    │ HTTP Response\n    ▼\nTrình duyệt hiển thị website`}</div>
            <div className="grid sm:grid-cols-2 gap-4">
                <MiniCard
                    icon={<FileText />}
                    title="Static files"
                    desc="HTML, CSS, JS, hình ảnh"
                />
                <MiniCard
                    icon={<Route />}
                    title="Reverse proxy"
                    desc="Chuyển request đến app Node/Python/Java"
                />
            </div>
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

function ApacheNginxPicker() {
    const [server, setServer] = useState("nginx");
    const data = {
        apache: {
            title: "Apache",
            icon: "🪶",
            good: "Dễ học, phổ biến với PHP/WordPress, hỗ trợ .htaccess.",
            service: "apache2",
            config: "/etc/apache2/",
            test: "sudo apache2ctl configtest",
        },
        nginx: {
            title: "Nginx",
            icon: "🚀",
            good: "Nhẹ, nhanh, mạnh về static file, reverse proxy và production.",
            service: "nginx",
            config: "/etc/nginx/",
            test: "sudo nginx -t",
        },
    };
    const item = data[server];
    return (
        <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <MousePointer2 className="text-orange-400" /> Chọn web server
            </h3>
            <p className="text-slate-400 mb-6">
                Bấm để xem service, thư mục config và lệnh test cấu hình.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-5">
                <button
                    onClick={() => setServer("apache")}
                    className={`p-4 rounded-xl border font-bold ${server === "apache" ? "bg-orange-500 text-white border-orange-500" : "bg-slate-950 border-slate-800 text-slate-400"}`}
                >
                    Apache
                </button>
                <button
                    onClick={() => setServer("nginx")}
                    className={`p-4 rounded-xl border font-bold ${server === "nginx" ? "bg-cyan-500 text-white border-cyan-500" : "bg-slate-950 border-slate-800 text-slate-400"}`}
                >
                    Nginx
                </button>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="font-bold text-white text-2xl mb-2">
                    {item.title}
                </div>
                <p className="text-slate-400 text-sm mb-4">{item.good}</p>
                <div className="grid sm:grid-cols-3 gap-3 text-sm">
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">
                        <div className="text-slate-500 mb-1">Service</div>
                        <code className="text-orange-300">{item.service}</code>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">
                        <div className="text-slate-500 mb-1">Config</div>
                        <code className="text-orange-300">{item.config}</code>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">
                        <div className="text-slate-500 mb-1">Test</div>
                        <code className="text-orange-300">{item.test}</code>
                    </div>
                </div>
            </div>
        </div>
    );
}

function WebServerIntroSection() {
    return (
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
            <CodeBlock
                title="http-flow.txt"
                code={`Người dùng truy cập website\n        ↓\nNginx hoặc Apache nhận request\n        ↓\nWeb server tìm file index.html\n        ↓\nTrả nội dung về trình duyệt\n\nVí dụ URL:\nhttp://example.com  → port 80\nhttps://example.com → port 443`}
            />
            <CheatCard
                title="Web server thường trả về"
                rows={[
                    ["HTML", "Cấu trúc trang"],
                    ["CSS", "Giao diện"],
                    ["JavaScript", "Tương tác"],
                    ["Images", "Hình ảnh"],
                    ["API data", "JSON/XML từ backend"],
                ]}
            />
        </div>
    );
}

function CompareSection() {
    const rows = [
        ["Dễ học", "Rất dễ", "Dễ nhưng cấu hình hơi khác"],
        ["PHP/WordPress", "Rất phổ biến", "Phổ biến, thường qua PHP-FPM"],
        ["Reverse proxy", "Có thể dùng", "Rất mạnh"],
        ["Static file", "Tốt", "Rất tốt"],
        [".htaccess", "Có", "Không dùng .htaccess"],
        ["Production hiện đại", "Có", "Rất phổ biến"],
    ];
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-950 border-b border-slate-800 text-sm font-bold text-white">
                <div className="p-4">Tiêu chí</div>
                <div className="p-4 text-orange-300">Apache</div>
                <div className="p-4 text-cyan-300">Nginx</div>
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

function ApacheInstallSection() {
    const [tab, setTab] = useState("install");
    const tabs = [
        ["install", "Cài đặt"],
        ["manage", "Quản lý"],
        ["curl", "Test"],
        ["index", "Đổi index"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="orange">
            {tab === "install" && (
                <CodeBlock
                    title="install-apache.sh"
                    code={`sudo apt update\nsudo apt install apache2\n\nsystemctl status apache2\n# Active: active (running)`}
                />
            )}
            {tab === "manage" && (
                <CodeBlock
                    title="manage-apache.sh"
                    code={`sudo systemctl start apache2\nsudo systemctl stop apache2\nsudo systemctl restart apache2\nsudo systemctl reload apache2\nsudo systemctl enable apache2\nsudo systemctl disable apache2\n\n# reload: nạp lại cấu hình, ít gián đoạn hơn restart`}
                />
            )}
            {tab === "curl" && (
                <CodeBlock
                    title="test-apache-local.sh"
                    code={`curl http://localhost\n\n# Nếu từ máy khác:\n# http://SERVER_IP\n# Ví dụ:\n# http://192.168.1.100\n\n# Mở firewall HTTP cho Apache:\nsudo ufw app list\nsudo ufw allow 'Apache'\nsudo ufw status`}
                />
            )}
            {tab === "index" && (
                <CodeBlock
                    title="change-apache-index.sh"
                    code={`# Backup file cũ\nsudo cp /var/www/html/index.html /var/www/html/index.html.backup\n\n# Ghi nội dung mới\necho "<h1>Hello Apache from Ubuntu</h1>" | sudo tee /var/www/html/index.html\n\n# Test lại\ncurl http://localhost\n# <h1>Hello Apache from Ubuntu</h1>`}
                />
            )}
        </Tabbed>
    );
}

function ApacheVirtualHostSection() {
    return (
        <CodeBlock
            title="apache-virtual-host-demo.sh"
            code={`# Website: demo.local\n# Web root: /var/www/demo.local\n\nsudo mkdir -p /var/www/demo.local\nsudo chown -R $USER:$USER /var/www/demo.local\n\ncat > /var/www/demo.local/index.html << 'EOF'\n<!DOCTYPE html>\n<html>\n<head><meta charset="UTF-8"><title>Demo Apache Site</title></head>\n<body>\n  <h1>Demo Apache Site</h1>\n  <p>Website này chạy bằng Apache trên Ubuntu.</p>\n</body>\n</html>\nEOF\n\nsudo tee /etc/apache2/sites-available/demo.local.conf > /dev/null << 'EOF'\n<VirtualHost *:80>\n    ServerName demo.local\n    ServerAdmin webmaster@localhost\n    DocumentRoot /var/www/demo.local\n\n    ErrorLog ${APACHE_LOG_DIR}/demo.local_error.log\n    CustomLog ${APACHE_LOG_DIR}/demo.local_access.log combined\n</VirtualHost>\nEOF\n\nsudo a2ensite demo.local.conf\nsudo a2dissite 000-default.conf\nsudo apache2ctl configtest\nsudo systemctl reload apache2\n\n# Thêm local domain\necho "127.0.0.1 demo.local" | sudo tee -a /etc/hosts\n\ncurl http://demo.local`}
            note="Apache bật site bằng a2ensite. Sau khi sửa config, luôn apache2ctl configtest rồi reload."
        />
    );
}

function NginxInstallSection() {
    const [tab, setTab] = useState("prepare");
    const tabs = [
        ["prepare", "Tránh xung đột"],
        ["install", "Cài đặt"],
        ["manage", "Quản lý"],
        ["test", "Test"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="cyan">
            {tab === "prepare" && (
                <CodeBlock
                    title="prepare-for-nginx.sh"
                    code={`# Nếu Apache đang chạy port 80, dừng Apache trước:\nsudo systemctl stop apache2\n\n# Nếu không muốn Apache tự bật lại khi boot:\nsudo systemctl disable apache2\n\n# Kiểm tra port 80:\nsudo ss -tulpn | grep ':80'`}
                />
            )}
            {tab === "install" && (
                <CodeBlock
                    title="install-nginx.sh"
                    code={`sudo apt update\nsudo apt install nginx\n\nsystemctl status nginx\n# Active: active (running)`}
                />
            )}
            {tab === "manage" && (
                <CodeBlock
                    title="manage-nginx.sh"
                    code={`sudo systemctl start nginx\nsudo systemctl stop nginx\nsudo systemctl restart nginx\nsudo systemctl reload nginx\nsudo systemctl enable nginx\nsudo systemctl disable nginx`}
                />
            )}
            {tab === "test" && (
                <CodeBlock
                    title="test-nginx-local.sh"
                    code={`curl http://localhost\n# Nếu thấy Welcome to nginx, Nginx đã chạy.\n\n# Mở firewall HTTP cho Nginx:\nsudo ufw app list\nsudo ufw allow 'Nginx HTTP'\nsudo ufw status`}
                />
            )}
        </Tabbed>
    );
}

function NginxServerBlockSection() {
    return (
        <CodeBlock
            title="nginx-server-block-demo.sh"
            code={`# Website: nginx-demo.local\n# Web root: /var/www/nginx-demo.local\n\nsudo mkdir -p /var/www/nginx-demo.local\nsudo chown -R $USER:$USER /var/www/nginx-demo.local\n\ncat > /var/www/nginx-demo.local/index.html << 'EOF'\n<!DOCTYPE html>\n<html>\n<head><meta charset="UTF-8"><title>Nginx Demo Site</title></head>\n<body>\n  <h1>Nginx Demo Site</h1>\n  <p>Website này chạy bằng Nginx trên Ubuntu.</p>\n</body>\n</html>\nEOF\n\nsudo tee /etc/nginx/sites-available/nginx-demo.local > /dev/null << 'EOF'\nserver {\n    listen 80;\n    listen [::]:80;\n\n    server_name nginx-demo.local;\n\n    root /var/www/nginx-demo.local;\n    index index.html;\n\n    location / {\n        try_files $uri $uri/ =404;\n    }\n\n    access_log /var/log/nginx/nginx-demo.local_access.log;\n    error_log /var/log/nginx/nginx-demo.local_error.log;\n}\nEOF\n\n# Bật server block bằng symlink\nsudo ln -s /etc/nginx/sites-available/nginx-demo.local /etc/nginx/sites-enabled/\n\n# Tắt site mặc định nếu muốn\nsudo rm /etc/nginx/sites-enabled/default\n\nsudo nginx -t\nsudo systemctl reload nginx\n\n# Thêm local domain\necho "127.0.0.1 nginx-demo.local" | sudo tee -a /etc/hosts\n\ncurl http://nginx-demo.local`}
            note="Nginx bật site bằng symlink từ sites-available sang sites-enabled. Sau khi sửa config, luôn nginx -t rồi reload."
        />
    );
}

function FirewallPortSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="web-firewall-and-ports.sh"
                code={`# HTTP và HTTPS\n# HTTP  → 80\n# HTTPS → 443\n\n# Apache profiles\nsudo ufw app list\nsudo ufw allow 'Apache'\nsudo ufw allow 'Apache Full'\n\n# Nginx profiles\nsudo ufw allow 'Nginx HTTP'\nsudo ufw allow 'Nginx Full'\n\n# Hoặc mở trực tiếp theo port\nsudo ufw allow 80/tcp\nsudo ufw allow 443/tcp\n\n# Kiểm tra web server đang listen port nào\nsudo ss -tulpn | grep ':80'\nsudo ss -tulpn | grep ':443'`}
            />
            <CheatCard
                title="UFW app profile"
                rows={[
                    ["Apache", "Port 80"],
                    ["Apache Secure", "Port 443"],
                    ["Apache Full", "Port 80 và 443"],
                    ["Nginx HTTP", "Port 80"],
                    ["Nginx HTTPS", "Port 443"],
                    ["Nginx Full", "Port 80 và 443"],
                ]}
            />
        </div>
    );
}

function CommonErrorsSection() {
    const [tab, setTab] = useState("port");
    const tabs = [
        ["port", "Port 80"],
        ["remote", "Máy khác không vào"],
        ["apache", "Apache vhost"],
        ["nginx", "Nginx block"],
        ["403", "403"],
        ["404", "404"],
        ["reload", "Quên reload"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="red">
            {tab === "port" && (
                <CodeBlock
                    title="port-80-address-in-use.sh"
                    code={`sudo systemctl status nginx\n# nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)\n\n# Kiểm tra ai đang dùng port 80:\nsudo ss -tulpn | grep ':80'\n\n# Nếu Apache đang dùng port 80 mà muốn dùng Nginx:\nsudo systemctl stop apache2\nsudo systemctl disable apache2\nsudo systemctl start nginx\n\n# Nếu Nginx đang dùng port 80 mà muốn dùng Apache:\nsudo systemctl stop nginx\nsudo systemctl disable nginx\nsudo systemctl start apache2`}
                />
            )}
            {tab === "remote" && (
                <CodeBlock
                    title="localhost-ok-remote-fail.sh"
                    code={`# Trên server curl localhost được, nhưng máy khác truy cập http://SERVER_IP không được.\n\n# Kiểm tra web server listen mọi địa chỉ:\nsudo ss -tulpn | grep ':80'\n# Output tốt có 0.0.0.0:80 hoặc [::]:80\n\n# Kiểm tra firewall:\nsudo ufw status\nsudo ufw allow 80/tcp\n\n# Nếu là cloud/VPS, kiểm tra thêm security group/cloud firewall.\n# Nếu server local, kiểm tra cùng mạng và IP đúng.`}
                />
            )}
            {tab === "apache" && (
                <CodeBlock
                    title="apache-vhost-not-working.sh"
                    code={`# Triệu chứng: tạo demo.local.conf nhưng vẫn ra trang mặc định.\n\n# Sửa:\nsudo a2ensite demo.local.conf\nsudo apache2ctl configtest\nsudo systemctl reload apache2\n\n# Kiểm tra hosts:\ncat /etc/hosts\n# Phải có:\n# 127.0.0.1 demo.local\n\n# Nếu site mặc định bắt request:\nsudo a2dissite 000-default.conf\nsudo systemctl reload apache2`}
                />
            )}
            {tab === "nginx" && (
                <CodeBlock
                    title="nginx-server-block-not-working.sh"
                    code={`# Triệu chứng: tạo sites-available nhưng vẫn ra trang mặc định.\n\n# Bật site bằng symlink:\nsudo ln -s /etc/nginx/sites-available/nginx-demo.local /etc/nginx/sites-enabled/\n\n# Kiểm tra cú pháp:\nsudo nginx -t\nsudo systemctl reload nginx\n\n# Nếu site mặc định gây nhầm lẫn:\nsudo rm /etc/nginx/sites-enabled/default\nsudo nginx -t\nsudo systemctl reload nginx`}
                />
            )}
            {tab === "403" && (
                <CodeBlock
                    title="403-forbidden.sh"
                    code={`# 403 Forbidden thường do:\n# - Thư mục web không có quyền đọc/truy cập\n# - Thiếu index.html\n# - root trỏ sai thư mục\n# - User web server không đọc được file\n\nls -la /var/www/demo.local\nls -ld /var/www/demo.local\n\n# Cách sửa phổ biến:\nsudo chmod -R 755 /var/www/demo.local\nsudo chmod 644 /var/www/demo.local/index.html`}
                />
            )}
            {tab === "404" && (
                <CodeBlock
                    title="404-not-found.sh"
                    code={`# 404 nghĩa là web server chạy được nhưng không tìm thấy file.\n\nls -la /var/www/nginx-demo.local\n\n# Nếu thiếu index.html:\necho "<h1>Hello</h1>" | sudo tee /var/www/nginx-demo.local/index.html\n\n# Kiểm tra root/index trong config:\nsudo nginx -t\nsudo systemctl reload nginx`}
                />
            )}
            {tab === "reload" && (
                <CodeBlock
                    title="forgot-reload.sh"
                    code={`# Sửa config xong nhưng website không đổi → có thể quên reload.\n\n# Apache:\nsudo apache2ctl configtest\nsudo systemctl reload apache2\n\n# Nginx:\nsudo nginx -t\nsudo systemctl reload nginx`}
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
                title="Cài Apache"
                code={`sudo apt update\nsudo apt install apache2\nsystemctl status apache2\ncurl http://localhost`}
                tasks={[
                    "Apache service có active không?",
                    "curl localhost trả về HTML không?",
                    "File web mặc định nằm ở đâu?",
                    "Mở firewall Apache bằng profile nào?",
                ]}
            />
            <PracticeCard
                level="Trung bình"
                title="Apache Virtual Host"
                code={`sudo mkdir -p /var/www/myapache.local\nsudo chown -R $USER:$USER /var/www/myapache.local\n# tạo index.html\n# tạo /etc/apache2/sites-available/myapache.local.conf\nsudo a2ensite myapache.local.conf\nsudo apache2ctl configtest\nsudo systemctl reload apache2`}
                tasks={[
                    "ServerName là gì?",
                    "DocumentRoot ở đâu?",
                    "Đã thêm /etc/hosts chưa?",
                    "curl myapache.local được chưa?",
                ]}
            />
            <PracticeCard
                level="Nâng cao"
                title="Nginx Server Block"
                code={`sudo systemctl stop apache2\nsudo apt install nginx\nsudo mkdir -p /var/www/mynginx.local\n# tạo index.html\n# tạo /etc/nginx/sites-available/mynginx.local\nsudo ln -s /etc/nginx/sites-available/mynginx.local /etc/nginx/sites-enabled/\nsudo nginx -t\nsudo systemctl reload nginx`}
                tasks={[
                    "Port 80 có bị chiếm không?",
                    "server_name đúng chưa?",
                    "root đúng chưa?",
                    "curl mynginx.local được chưa?",
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
        orange: "bg-orange-500",
        cyan: "bg-cyan-500",
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
            title: "Apache",
            rows: [
                ["apt install apache2", "cài"],
                ["systemctl status apache2", "trạng thái"],
                ["apache2ctl configtest", "test config"],
                ["a2ensite", "bật site"],
                ["/etc/apache2/", "config"],
            ],
        },
        {
            title: "Nginx",
            rows: [
                ["apt install nginx", "cài"],
                ["systemctl status nginx", "trạng thái"],
                ["nginx -t", "test config"],
                ["ln -s", "bật server block"],
                ["/etc/nginx/", "config"],
            ],
        },
        {
            title: "Service",
            rows: [
                ["start", "khởi động"],
                ["stop", "dừng"],
                ["restart", "khởi động lại"],
                ["reload", "nạp config"],
                ["enable", "tự chạy khi boot"],
            ],
        },
        {
            title: "Firewall/Port",
            rows: [
                ["HTTP", "80"],
                ["HTTPS", "443"],
                ["ufw allow 80/tcp", "mở HTTP"],
                ["ufw allow 'Nginx Full'", "80+443"],
                ["ss -tulpn", "xem listen"],
            ],
        },
        {
            title: "Web root",
            rows: [
                ["/var/www/html/", "mặc định"],
                ["/var/www/site/", "site riêng"],
                ["index.html", "file mặc định"],
                ["/etc/hosts", "local domain"],
                ["curl localhost", "test"],
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
        question: "Web server làm nhiệm vụ gì?",
        options: [
            "Nhận HTTP request và trả HTTP response",
            "Quản lý user Linux",
            "Format ổ đĩa",
            "Cài Docker image",
        ],
        correct: 0,
        explanation:
            "Web server như Apache/Nginx nhận request từ trình duyệt và trả HTML/CSS/JS/API response.",
    },
    {
        question: "HTTP và HTTPS thường dùng port nào?",
        options: ["80 và 443", "22 và 3306", "25 và 53", "8080 và 6379"],
        correct: 0,
        explanation: "HTTP dùng port 80, HTTPS dùng port 443.",
    },
    {
        question: "Service Apache trên Ubuntu thường tên là gì?",
        options: ["apache2", "httpd", "nginx", "webserver"],
        correct: 0,
        explanation: "Trên Ubuntu/Debian, Apache service thường là apache2.",
    },
    {
        question: "Lệnh nào kiểm tra cú pháp cấu hình Nginx?",
        options: [
            "sudo nginx -t",
            "sudo apache2ctl configtest",
            "sudo ufw status",
            "curl http://localhost",
        ],
        correct: 0,
        explanation:
            "nginx -t kiểm tra cú pháp và khả năng nạp cấu hình Nginx.",
    },
    {
        question: "Apache bật website trong sites-available bằng lệnh nào?",
        options: [
            "sudo a2ensite site.conf",
            "sudo ln -s only",
            "sudo nginx -t",
            "sudo ufw allow site",
        ],
        correct: 0,
        explanation:
            "Apache trên Ubuntu dùng a2ensite để bật site từ sites-available.",
    },
    {
        question: "Nginx bật server block thường bằng cách nào?",
        options: [
            "Tạo symlink từ sites-available sang sites-enabled",
            "Chạy a2ensite",
            "Chạy pip install",
            "Sửa .htaccess",
        ],
        correct: 0,
        explanation:
            "Nginx thường dùng symlink từ /etc/nginx/sites-available/ sang /etc/nginx/sites-enabled/.",
    },
    {
        question:
            "Lỗi Address already in use khi start Nginx/Apache thường do gì?",
        options: [
            "Port 80/443 đã bị service khác chiếm",
            "Thiếu index.html",
            "Sai user.email",
            "Không có Python venv",
        ],
        correct: 0,
        explanation:
            "Hai service không thể cùng bind một IP:port như 0.0.0.0:80.",
    },
    {
        question: "Sau khi sửa config Apache/Nginx, quy trình an toàn là gì?",
        options: [
            "Test config rồi reload service",
            "Reload ngay không kiểm tra",
            "Reboot máy luôn",
            "Xóa sites-enabled",
        ],
        correct: 0,
        explanation:
            "Luôn apache2ctl configtest hoặc nginx -t trước, sau đó reload service.",
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
