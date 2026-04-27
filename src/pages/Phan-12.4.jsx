import React, { useState } from "react";
import {
    Globe,
    ShieldCheck,
    Lock,
    Unlock,
    Terminal,
    Server,
    Network,
    Route,
    KeyRound,
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
    RefreshCw,
    Cloud,
    Eye,
    Timer,
    Fingerprint,
    Link,
    Code2,
    MousePointer2,
    FileWarning,
    Zap,
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
                                Domain · DNS · HTTPS · Let’s Encrypt · Certbot
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 12
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 12.4
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" /> Đưa
                        website từ IP sang HTTPS có ổ khóa
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Cấu Hình Tên Miền & SSL <br />
                        <span className="text-orange-500">
                            Với Let’s Encrypt
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Bạn sẽ hiểu{" "}
                        <code className="text-orange-300">domain</code>,{" "}
                        <code className="text-orange-300">DNS</code>,{" "}
                        <code className="text-orange-300">HTTP/HTTPS</code>,{" "}
                        <code className="text-orange-300">SSL/TLS</code>, trỏ
                        domain về server, cài Certbot, cấp SSL cho Nginx/Apache
                        và kiểm tra tự động gia hạn.
                    </p>
                </section>

                <section className="bg-red-500/10 border border-red-500/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-5 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                        <ShieldAlert size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            HTTP port 80 vẫn rất quan trọng
                        </h3>
                        <p className="text-red-100 leading-relaxed">
                            Với xác minh HTTP-01, Let’s Encrypt cần truy cập
                            domain qua{" "}
                            <code className="text-white">port 80</code>. Bạn có
                            thể redirect HTTP sang HTTPS, nhưng không nên chặn
                            port 80 hoàn toàn nếu đang dùng Certbot HTTP-01 để
                            cấp hoặc gia hạn chứng chỉ.
                        </p>
                    </div>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <DomainSslConceptCard />
                    <FlowSimulator />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="blue"
                        icon={<Globe size={22} />}
                        title="Domain, DNS, A record, CNAME là gì?"
                        subtitle="Domain là tên dễ nhớ, DNS là danh bạ, A record trỏ về IP, CNAME trỏ tên này sang tên khác."
                    />
                    <DnsConceptSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="green"
                        icon={<Lock size={22} />}
                        title="HTTP, HTTPS và SSL/TLS"
                        subtitle="HTTPS là HTTP có mã hóa TLS, giúp website có ổ khóa và bảo vệ dữ liệu trên đường truyền."
                    />
                    <HttpsConceptSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="orange"
                        icon={<Search size={22} />}
                        title="Chuẩn bị domain và kiểm tra DNS"
                        subtitle="Lấy IP public server, tạo bản ghi DNS, kiểm tra bằng dig và mở firewall 80/443."
                    />
                    <PrepareDomainSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="cyan"
                        icon={<Server size={22} />}
                        title="Cấu hình Nginx + SSL"
                        subtitle="Tạo web root, server block, test HTTP trước, cài certbot nginx và cấp SSL bằng certbot --nginx."
                    />
                    <NginxSslSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="purple"
                        icon={<Server size={22} />}
                        title="Cấu hình Apache + SSL"
                        subtitle="Tạo VirtualHost, a2ensite, configtest, cài certbot apache và cấp SSL bằng certbot --apache."
                    />
                    <ApacheSslSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="yellow"
                        icon={<RefreshCw size={22} />}
                        title="Kiểm tra và gia hạn SSL"
                        subtitle="Xem chứng chỉ, chạy dry-run, kiểm tra certbot.timer và hiểu chứng chỉ Let’s Encrypt có hạn 90 ngày."
                    />
                    <RenewalSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="pink"
                        icon={<Route size={22} />}
                        title="Ví dụ thực tế: API reverse proxy + SSL"
                        subtitle="Trỏ api.kafood.vn về server, Nginx proxy đến Node.js port 3000 và cấp SSL cho API."
                    />
                    <ReverseProxySection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="8"
                        color="teal"
                        icon={<Fingerprint size={22} />}
                        title="Nhiều domain và Wildcard SSL"
                        subtitle="Certbot có thể cấp một chứng chỉ cho nhiều domain; wildcard *.example.com cần DNS-01 challenge."
                    />
                    <WildcardSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="9"
                        color="red"
                        icon={<Bug size={22} />}
                        title="Lỗi phổ biến và cách xử lý"
                        subtitle="DNS sai, port 80 bị chặn, Nginx/Apache config lỗi, Cloudflare SSL mode sai, rate limit và website vẫn Not Secure."
                    />
                    <CommonErrorsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="10"
                        color="indigo"
                        icon={<Wrench size={22} />}
                        title="Bài tập thực hành"
                        subtitle="Kiểm tra DNS, cấu hình Nginx cho domain, cấp SSL và reverse proxy API local port 3000."
                    />
                    <PracticeSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="11"
                        color="emerald"
                        icon={<ListChecks size={22} />}
                        title="Tóm tắt nhanh"
                        subtitle="Các lệnh DNS, Nginx, Apache, Certbot, firewall và quy trình chuẩn domain + SSL cần nhớ."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <PackageCheck className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức bài 12.4
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Ôn lại DNS, A/CNAME, HTTPS, Let’s Encrypt,
                                    Certbot, HTTP-01, Nginx/Apache SSL, renew và
                                    Cloudflare Full strict.
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
                        Bạn đã biết cấu hình domain và SSL. Tiếp theo là giám
                        sát server cơ bản.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                        Bài tiếp theo: 12.5 — Giám sát server cơ bản{" "}
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
        cyan: "bg-cyan-500/20 text-cyan-400",
        purple: "bg-purple-500/20 text-purple-400",
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

function DomainSslConceptCard() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-orange-500/15 text-orange-400 rounded-2xl flex items-center justify-center">
                    <Globe size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        Từ IP đến HTTPS
                    </h3>
                    <p className="text-slate-500 text-sm">
                        Domain dễ nhớ, HTTPS an toàn hơn
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5">
                    <Unlock className="text-red-400 mb-3" />
                    <div className="font-bold text-white mb-2">Trước SSL</div>
                    <p className="text-sm text-slate-400">
                        http://103.45.67.89 hoặc http://example.com — khó nhớ,
                        chưa mã hóa.
                    </p>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-5">
                    <Lock className="text-green-400 mb-3" />
                    <div className="font-bold text-white mb-2">Sau SSL</div>
                    <p className="text-sm text-slate-400">
                        https://example.com — có ổ khóa, mã hóa TLS, phù hợp
                        production.
                    </p>
                </div>
            </div>
            <div className="bg-black border border-slate-800 rounded-2xl p-5 font-mono text-sm text-green-400 whitespace-pre-wrap">{`Domain → DNS → Server IP → Nginx/Apache → Certbot → HTTPS`}</div>
        </div>
    );
}

function FlowSimulator() {
    const [step, setStep] = useState(0);
    const steps = [
        ["DNS", "example.com trỏ về IP server bằng A record."],
        ["HTTP", "Nginx/Apache phục vụ website qua port 80."],
        ["Certbot", "Certbot xin chứng chỉ từ Let’s Encrypt."],
        [
            "Validation",
            "Let’s Encrypt kiểm tra domain có trỏ đúng server không.",
        ],
        ["HTTPS", "Certbot cấu hình web server dùng chứng chỉ SSL/TLS."],
        ["Renew", "Certbot timer tự kiểm tra và gia hạn khi gần hết hạn."],
    ];
    return (
        <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Zap className="text-orange-400" /> Luồng cấp SSL
            </h3>
            <p className="text-slate-400 mb-6">
                Bấm từng bước để xem Certbot và Let’s Encrypt hoạt động thế nào.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-5">
                {steps.map(([name], i) => (
                    <button
                        key={name}
                        onClick={() => setStep(i)}
                        className={`p-3 rounded-xl border font-bold text-sm ${step === i ? "bg-orange-500 text-white border-orange-500" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"}`}
                    >
                        {i + 1}. {name}
                    </button>
                ))}
            </div>
            <div className="bg-black border border-slate-800 rounded-2xl p-5">
                <div className="text-xs text-slate-500 mb-2">
                    Bước {step + 1}
                </div>
                <code className="text-green-400 text-xl font-bold">
                    {steps[step][0]}
                </code>
                <p className="text-slate-300 mt-3 text-sm">{steps[step][1]}</p>
            </div>
        </div>
    );
}

function DnsConceptSection() {
    return (
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
            <CodeBlock
                title="domain-dns-records.txt"
                code={`example.com      → domain gốc\nwww.example.com  → subdomain www\napi.example.com  → subdomain api\n\nA record:\n@       A       103.45.67.89\nwww     A       103.45.67.89\napi     A       103.45.67.89\n\nCNAME record:\nwww     CNAME   example.com\n\n# @ thường đại diện cho domain gốc.`}
            />
            <CheatCard
                title="So sánh đơn giản"
                rows={[
                    ["IP server", "Địa chỉ nhà"],
                    ["Domain", "Tên cửa hàng"],
                    ["DNS", "Danh bạ địa chỉ"],
                    ["A record", "Tên → IPv4"],
                    ["CNAME", "Tên → tên khác"],
                ]}
            />
        </div>
    );
}

function HttpsConceptSection() {
    return (
        <div className="grid lg:grid-cols-2 gap-6">
            <CodeBlock
                title="http-vs-https.txt"
                code={`HTTP:\nBrowser  ---- dữ liệu thô ----> Server\n\nHTTPS:\nBrowser  ==== dữ liệu mã hóa ====> Server\n\nhttp://example.com   ❌ chưa mã hóa\nhttps://example.com  ✅ mã hóa TLS, có ổ khóa`}
            />
            <CheatCard
                title="Let’s Encrypt / Certbot"
                rows={[
                    ["Let’s Encrypt", "CA cấp chứng chỉ SSL/TLS miễn phí"],
                    ["Certbot", "ACME client xin/gia hạn SSL"],
                    ["90 ngày", "hạn mặc định chứng chỉ"],
                    ["HTTP-01", "xác minh qua port 80"],
                    ["Domain Validation", "xác minh bạn kiểm soát domain"],
                ]}
            />
        </div>
    );
}

function PrepareDomainSection() {
    const [tab, setTab] = useState("ip");
    const tabs = [
        ["ip", "IP public"],
        ["dns", "DNS records"],
        ["dig", "Kiểm tra DNS"],
        ["firewall", "Firewall"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="orange">
            {tab === "ip" && (
                <CodeBlock
                    title="check-public-ip.sh"
                    code={`sudo apt update\nsudo apt install curl -y\n\n# Xem IP public của server\ncurl -4 ifconfig.me\n# 103.45.67.89`}
                />
            )}
            {tab === "dns" && (
                <CodeBlock
                    title="dns-records-example.txt"
                    code={`Trong trang quản lý DNS, tạo bản ghi:\n\nType: A\nHost: @\nValue: 103.45.67.89\nTTL: Auto\n\nType: A\nHost: www\nValue: 103.45.67.89\nTTL: Auto\n\nHoặc:\nType: CNAME\nHost: www\nValue: example.com\nTTL: Auto`}
                />
            )}
            {tab === "dig" && (
                <CodeBlock
                    title="check-dns-with-dig.sh"
                    code={`sudo apt install dnsutils -y\n\n# Kiểm tra domain trỏ về IP nào\ndig example.com\n\n# Chỉ lấy IP trả về\ndig +short example.com\n# 103.45.67.89\n\n# So sánh với IP server:\ncurl -4 ifconfig.me`}
                />
            )}
            {tab === "firewall" && (
                <CodeBlock
                    title="open-http-https-ufw.sh"
                    code={`# Cho phép HTTP và HTTPS\nsudo ufw allow 80/tcp\nsudo ufw allow 443/tcp\n\n# Không khóa SSH nếu đang quản trị từ xa\nsudo ufw allow 22/tcp\n\nsudo ufw status`}
                />
            )}
        </Tabbed>
    );
}

function NginxSslSection() {
    const [tab, setTab] = useState("site");
    const tabs = [
        ["site", "Tạo site"],
        ["block", "Server block"],
        ["certbot", "Certbot"],
        ["test", "Test HTTPS"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="cyan">
            {tab === "site" && (
                <CodeBlock
                    title="nginx-create-web-root.sh"
                    code={`sudo apt update\nsudo apt install nginx -y\nsudo systemctl status nginx\n\nsudo mkdir -p /var/www/example.com/html\nsudo chown -R $USER:$USER /var/www/example.com/html\n\ncat > /var/www/example.com/html/index.html << 'EOF'\n<!DOCTYPE html>\n<html>\n<head><meta charset="UTF-8"><title>Example Website</title></head>\n<body><h1>Website example.com đã chạy trên Nginx</h1></body>\n</html>\nEOF`}
                />
            )}
            {tab === "block" && (
                <CodeBlock
                    title="nginx-example.com.conf"
                    code={`sudo tee /etc/nginx/sites-available/example.com > /dev/null << 'EOF'\nserver {\n    listen 80;\n    listen [::]:80;\n\n    server_name example.com www.example.com;\n\n    root /var/www/example.com/html;\n    index index.html index.htm;\n\n    location / {\n        try_files $uri $uri/ =404;\n    }\n}\nEOF\n\nsudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/\nsudo nginx -t\nsudo systemctl reload nginx\n\n# Test HTTP trước khi cấp SSL\ncurl -I http://example.com`}
                />
            )}
            {tab === "certbot" && (
                <CodeBlock
                    title="certbot-nginx-ssl.sh"
                    code={`sudo apt install certbot python3-certbot-nginx -y\n\n# Cấp SSL cho domain và www\nsudo certbot --nginx -d example.com -d www.example.com\n\n# Nên chọn redirect HTTP sang HTTPS khi Certbot hỏi.`}
                />
            )}
            {tab === "test" && (
                <CodeBlock
                    title="test-nginx-https.sh"
                    code={`# Kiểm tra HTTPS\ncurl -I https://example.com\n# HTTP/2 200\n# server: nginx\n\n# Kiểm tra HTTP redirect sang HTTPS\ncurl -I http://example.com\n# HTTP/1.1 301 Moved Permanently\n# Location: https://example.com/`}
                />
            )}
        </Tabbed>
    );
}

function ApacheSslSection() {
    const [tab, setTab] = useState("site");
    const tabs = [
        ["site", "Tạo site"],
        ["vhost", "VirtualHost"],
        ["certbot", "Certbot"],
        ["test", "Test HTTPS"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="purple">
            {tab === "site" && (
                <CodeBlock
                    title="apache-create-web-root.sh"
                    code={`sudo apt update\nsudo apt install apache2 -y\nsudo systemctl status apache2\n\nsudo mkdir -p /var/www/example.com/public_html\nsudo chown -R $USER:$USER /var/www/example.com/public_html\n\ncat > /var/www/example.com/public_html/index.html << 'EOF'\n<!DOCTYPE html>\n<html>\n<head><meta charset="UTF-8"><title>Example Apache</title></head>\n<body><h1>Website example.com đã chạy trên Apache</h1></body>\n</html>\nEOF`}
                />
            )}
            {tab === "vhost" && (
                <CodeBlock
                    title="apache-example.com.conf"
                    code={`sudo tee /etc/apache2/sites-available/example.com.conf > /dev/null << 'EOF'\n<VirtualHost *:80>\n    ServerName example.com\n    ServerAlias www.example.com\n\n    DocumentRoot /var/www/example.com/public_html\n\n    ErrorLog ${APACHE_LOG_DIR}/example.com_error.log\n    CustomLog ${APACHE_LOG_DIR}/example.com_access.log combined\n</VirtualHost>\nEOF\n\nsudo a2ensite example.com.conf\nsudo a2dissite 000-default.conf\nsudo apache2ctl configtest\nsudo systemctl reload apache2\n\n# Test HTTP trước khi cấp SSL\ncurl -I http://example.com`}
                />
            )}
            {tab === "certbot" && (
                <CodeBlock
                    title="certbot-apache-ssl.sh"
                    code={`sudo apt install certbot python3-certbot-apache -y\n\n# Cấp SSL cho domain và www\nsudo certbot --apache -d example.com -d www.example.com`}
                />
            )}
            {tab === "test" && (
                <CodeBlock
                    title="test-apache-https.sh"
                    code={`curl -I https://example.com\n# HTTP/2 200\n# server: Apache\n\nsudo certbot certificates`}
                />
            )}
        </Tabbed>
    );
}

function RenewalSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="certbot-renewal-check.sh"
                code={`# Xem certificate Certbot đang quản lý\nsudo certbot certificates\n\n# Test gia hạn, không cấp chứng chỉ thật\nsudo certbot renew --dry-run\n\n# Kiểm tra timer tự động gia hạn\nsystemctl list-timers | grep certbot\nsystemctl status certbot.timer\n\n# Nếu cấu hình thủ công, có thể cần reload web server sau renew:\nsudo systemctl reload nginx\nsudo systemctl reload apache2`}
            />
            <CheatCard
                title="Ghi nhớ gia hạn"
                rows={[
                    ["90 ngày", "hạn mặc định chứng chỉ Let’s Encrypt"],
                    ["~60 ngày", "thời điểm thường khuyến nghị gia hạn"],
                    ["--dry-run", "test gia hạn bằng staging"],
                    ["certbot.timer", "tự động chạy renew định kỳ"],
                    ["certbot certificates", "xem cert đang có"],
                ]}
            />
        </div>
    );
}

function ReverseProxySection() {
    return (
        <CodeBlock
            title="nginx-api-reverse-proxy-ssl.sh"
            code={`# Ví dụ: api.kafood.vn trỏ về server IP 103.45.67.89\n# Backend Node.js chạy local: 127.0.0.1:3000\n\nsudo tee /etc/nginx/sites-available/api.kafood.vn > /dev/null << 'EOF'\nserver {\n    listen 80;\n    listen [::]:80;\n\n    server_name api.kafood.vn;\n\n    location / {\n        proxy_pass http://127.0.0.1:3000;\n\n        proxy_http_version 1.1;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $scheme;\n    }\n}\nEOF\n\nsudo ln -s /etc/nginx/sites-available/api.kafood.vn /etc/nginx/sites-enabled/\nsudo nginx -t\nsudo systemctl reload nginx\n\n# Cấp SSL\nsudo apt install certbot python3-certbot-nginx -y\nsudo certbot --nginx -d api.kafood.vn\n\n# Test\ncurl -I https://api.kafood.vn`}
        />
    );
}

function WildcardSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="multi-domain-and-wildcard.sh"
                code={`# Một chứng chỉ nhiều domain với Nginx\nsudo certbot --nginx \\\n  -d example.com \\\n  -d www.example.com \\\n  -d api.example.com \\\n  -d admin.example.com\n\n# Wildcard SSL cần DNS-01 challenge\nsudo certbot certonly \\\n  --manual \\\n  --preferred-challenges dns \\\n  -d example.com \\\n  -d "*.example.com"\n\n# Certbot sẽ yêu cầu tạo TXT record:\n# _acme-challenge.example.com`}
                note="Wildcard thủ công không tiện cho production vì gia hạn dễ phải làm tay. Nên dùng DNS provider có API nếu cần tự động hóa DNS-01."
            />
            <CheatCard
                title="Wildcard bao phủ"
                rows={[
                    ["*.example.com", "api/admin/app/cdn.example.com"],
                    ["Không bao phủ", "example.com domain gốc"],
                    ["Cần cả hai", "example.com và *.example.com"],
                    ["DNS-01", "xác minh bằng TXT record"],
                    ["HTTP-01", "không dùng được cho wildcard"],
                ]}
            />
        </div>
    );
}

function CommonErrorsSection() {
    const [tab, setTab] = useState("dns");
    const tabs = [
        ["dns", "DNS sai"],
        ["port80", "Port 80"],
        ["nginx", "Nginx config"],
        ["apache", "Apache config"],
        ["cloudflare", "Cloudflare"],
        ["rate", "Rate limit"],
        ["notsecure", "Not Secure"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="red">
            {tab === "dns" && (
                <CodeBlock
                    title="certbot-dns-problem.sh"
                    code={`sudo certbot --nginx -d example.com\n# Certbot failed to authenticate some domains\n# DNS problem: NXDOMAIN looking up A for example.com\n\n# Kiểm tra domain trỏ về IP nào\ndig +short example.com\n\n# So sánh với IP server\ncurl -4 ifconfig.me\n\n# Nếu khác nhau: sửa DNS A record hoặc chờ DNS propagate.`}
                />
            )}
            {tab === "port80" && (
                <CodeBlock
                    title="port-80-blocked.sh"
                    code={`# Lỗi mẫu:\n# Timeout during connect likely firewall problem\n\n# Mở HTTP/HTTPS\nsudo ufw allow 80/tcp\nsudo ufw allow 443/tcp\nsudo ufw status\n\n# Kiểm tra web server có listen port 80 không\nsudo ss -tulpn | grep ':80'\n\n# Test HTTP trước SSL\ncurl -I http://example.com`}
                />
            )}
            {tab === "nginx" && (
                <CodeBlock
                    title="nginx-config-error.sh"
                    code={`sudo nginx -t\n# nginx: [emerg] unexpected "}" in /etc/nginx/sites-enabled/example.com:12\n\n# Sửa file cấu hình\nsudo nano /etc/nginx/sites-available/example.com\n\n# Test lại\nsudo nginx -t\n\n# Nếu OK\nsudo systemctl reload nginx`}
                />
            )}
            {tab === "apache" && (
                <CodeBlock
                    title="apache-config-error.sh"
                    code={`sudo apache2ctl configtest\n# AH00526: Syntax error on line 5 of /etc/apache2/sites-enabled/example.com.conf\n\n# Sửa file VirtualHost\nsudo nano /etc/apache2/sites-available/example.com.conf\n\n# Test lại\nsudo apache2ctl configtest\n# Syntax OK\n\nsudo systemctl reload apache2`}
                />
            )}
            {tab === "cloudflare" && (
                <CodeBlock
                    title="cloudflare-ssl-mode.txt"
                    code={`Triệu chứng:\nToo many redirects\nSSL handshake failed\n\nNguyên nhân thường gặp:\nCloudflare SSL mode đặt sai.\n\nKhi server đã có Let’s Encrypt thật, nên dùng:\nFull (strict)\n\nQuy trình:\n1. Cấp SSL thật trên server bằng Let’s Encrypt\n2. Vào Cloudflare → SSL/TLS\n3. Chọn Full (strict)`}
                />
            )}
            {tab === "rate" && (
                <CodeBlock
                    title="certbot-rate-limit.sh"
                    code={`# Lỗi:\n# too many certificates already issued for exact set of domains\n\n# Khi thử nghiệm, dùng staging:\nsudo certbot --nginx --staging -d example.com -d www.example.com\n\n# Test gia hạn bằng dry-run:\nsudo certbot renew --dry-run\n\n# Khi chắc chắn mới chạy thật:\nsudo certbot --nginx -d example.com -d www.example.com`}
                />
            )}
            {tab === "notsecure" && (
                <CodeBlock
                    title="website-not-secure.sh"
                    code={`# Kiểm tra redirect HTTP → HTTPS\ncurl -I http://example.com\n# Output đúng có:\n# HTTP/1.1 301 Moved Permanently\n# Location: https://example.com/\n\n# Kiểm tra certificate\nsudo certbot certificates\n\n# Kiểm tra DNS\ndig +short example.com\n\n# Nguyên nhân khác:\n# - Truy cập bằng http://\n# - Chứng chỉ không đúng domain\n# - Mixed content trong HTML/JS/CSS\n# - DNS trỏ sai server`}
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
                title="Kiểm tra DNS"
                code={`curl -4 ifconfig.me\ndig +short example.com\nsudo apt install dnsutils -y`}
                tasks={[
                    "IP public server là gì?",
                    "Domain trỏ về IP nào?",
                    "Hai IP có trùng không?",
                ]}
            />
            <PracticeCard
                level="Trung bình"
                title="Nginx site"
                code={`sudo mkdir -p /var/www/demo.example.com/html\nsudo chown -R $USER:$USER /var/www/demo.example.com/html\n# tạo index.html\n# tạo /etc/nginx/sites-available/demo.example.com\nsudo ln -s /etc/nginx/sites-available/demo.example.com /etc/nginx/sites-enabled/\nsudo nginx -t\nsudo systemctl reload nginx`}
                tasks={[
                    "server_name đúng chưa?",
                    "root đúng chưa?",
                    "HTTP chạy chưa?",
                    "curl -I http://domain trả gì?",
                ]}
            />
            <PracticeCard
                level="Trung bình"
                title="Cấp SSL"
                code={`sudo apt install certbot python3-certbot-nginx -y\nsudo certbot --nginx -d demo.example.com\ncurl -I https://demo.example.com\nsudo certbot renew --dry-run`}
                tasks={[
                    "Certbot chạy thành công không?",
                    "HTTPS trả 200/301 không?",
                    "Dry-run thành công không?",
                ]}
            />
            <PracticeCard
                level="Nâng cao"
                title="Reverse proxy API"
                code={`# backend: 127.0.0.1:3000\n# domain: api.example.com\n# Nginx location / proxy_pass http://127.0.0.1:3000;\nsudo nginx -t\nsudo systemctl reload nginx\nsudo certbot --nginx -d api.example.com`}
                tasks={[
                    "Backend local chạy chưa?",
                    "Nginx proxy đúng port chưa?",
                    "DNS api đúng IP chưa?",
                    "SSL API hoạt động chưa?",
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
        purple: "bg-purple-500",
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
            title: "DNS",
            rows: [
                ["curl -4 ifconfig.me", "IP public"],
                ["dig +short domain", "IP DNS"],
                ["A record", "domain → IPv4"],
                ["CNAME", "domain → domain"],
                ["TTL", "thời gian cache"],
            ],
        },
        {
            title: "Ports",
            rows: [
                ["22", "SSH"],
                ["80", "HTTP"],
                ["443", "HTTPS"],
                ["3000", "Node.js local"],
                ["ufw allow 80/443", "mở web"],
            ],
        },
        {
            title: "Nginx",
            rows: [
                ["apt install nginx", "cài"],
                ["nginx -t", "test config"],
                ["systemctl reload nginx", "reload"],
                ["server_name", "domain"],
                ["proxy_pass", "reverse proxy"],
            ],
        },
        {
            title: "Apache",
            rows: [
                ["apt install apache2", "cài"],
                ["a2ensite", "bật site"],
                ["apache2ctl configtest", "test config"],
                ["systemctl reload apache2", "reload"],
                ["VirtualHost", "site config"],
            ],
        },
        {
            title: "Certbot",
            rows: [
                ["certbot --nginx", "SSL Nginx"],
                ["certbot --apache", "SSL Apache"],
                ["certbot certificates", "xem cert"],
                ["renew --dry-run", "test renew"],
                ["certbot.timer", "auto-renew"],
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
        question: "DNS dùng để làm gì?",
        options: [
            "Chuyển domain thành IP server",
            "Mã hóa password database",
            "Tạo user Linux",
            "Chạy Docker container",
        ],
        correct: 0,
        explanation:
            "DNS giống danh bạ: nó cho biết domain đang trỏ về IP nào.",
    },
    {
        question: "A record dùng để làm gì?",
        options: [
            "Trỏ domain/subdomain về IPv4",
            "Trỏ domain sang email",
            "Tạo HTTPS",
            "Gia hạn SSL",
        ],
        correct: 0,
        explanation:
            "A record ánh xạ domain hoặc subdomain sang địa chỉ IPv4 của server.",
    },
    {
        question: "HTTPS khác HTTP ở điểm quan trọng nào?",
        options: [
            "HTTPS có mã hóa TLS",
            "HTTPS luôn chạy port 22",
            "HTTPS không cần domain",
            "HTTPS chỉ dùng cho SSH",
        ],
        correct: 0,
        explanation:
            "HTTPS là HTTP có mã hóa TLS, giúp dữ liệu truyền an toàn hơn.",
    },
    {
        question: "HTTP-01 challenge của Let’s Encrypt cần port nào?",
        options: ["80", "443", "22", "3306"],
        correct: 0,
        explanation: "HTTP-01 xác minh qua HTTP port 80.",
    },
    {
        question: "Lệnh cấp SSL cho Nginx bằng Certbot thường là gì?",
        options: [
            "sudo certbot --nginx -d example.com",
            "sudo nginx --ssl example.com",
            "sudo apt install ssl",
            "sudo ufw allow ssl",
        ],
        correct: 0,
        explanation:
            "Certbot plugin Nginx dùng cú pháp certbot --nginx -d domain.",
    },
    {
        question: "Trước khi chạy Certbot nên kiểm tra gì?",
        options: [
            "HTTP domain chạy ổn bằng curl -I http://domain",
            "Chỉ cần reboot server",
            "Tắt port 80",
            "Xóa DNS",
        ],
        correct: 0,
        explanation:
            "Nếu HTTP/DNS/web server còn lỗi, cấp SSL thường cũng thất bại.",
    },
    {
        question:
            "Cloudflare mode nào nên dùng khi server đã có Let’s Encrypt hợp lệ?",
        options: ["Full (strict)", "Flexible", "Off", "DNS only mandatory"],
        correct: 0,
        explanation:
            "Full strict kiểm tra certificate hợp lệ từ Cloudflare đến origin server.",
    },
    {
        question: "Wildcard *.example.com cần challenge nào?",
        options: ["DNS-01", "HTTP-01", "SSH-01", "MySQL-01"],
        correct: 0,
        explanation:
            "Wildcard certificate bắt buộc dùng DNS-01, xác minh bằng TXT record _acme-challenge.",
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
