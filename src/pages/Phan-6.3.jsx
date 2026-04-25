import React, { useState } from "react";
import {
    AlertTriangle,
    Archive,
    BookOpen,
    CheckCircle2,
    ChevronRight,
    ClipboardCheck,
    Code2,
    Cookie,
    Database,
    Download,
    FileCheck2,
    FileDown,
    FileJson,
    FileText,
    Gauge,
    Globe2,
    Info,
    KeyRound,
    Layers,
    Link2,
    ListChecks,
    Network,
    Play,
    RefreshCcw,
    RotateCcw,
    Search,
    Server,
    ShieldAlert,
    TerminalSquare,
    UploadCloud,
    Zap,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-emerald-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 border-b border-slate-800 sticky top-0 z-50 backdrop-blur">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🐧</span>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Linux/Ubuntu
                            </h1>
                            <p className="text-xs text-slate-500 hidden md:block">
                                Tải file, gọi API, header, cookie và kiểm tra
                                checksum
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400 hidden md:inline-block">
                            Bài trước: 6.2
                        </span>
                        <div className="text-sm font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                            Phần 6.3
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <Hero />

                <section className="space-y-6">
                    <SectionTitle
                        n="1"
                        color="emerald"
                        icon={<Download size={22} />}
                        title="Tổng quan: wget tải file, curl giao tiếp HTTP/API"
                    />
                    <Overview />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="2"
                        color="green"
                        icon={<FileDown size={22} />}
                        title="wget — tải file xuống đĩa"
                    />
                    <WgetExplorer />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="3"
                        color="cyan"
                        icon={<Layers size={22} />}
                        title="wget nâng cao: tải nền, danh sách URL, mirror website"
                    />
                    <WgetAdvanced />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="4"
                        color="blue"
                        icon={<Globe2 size={22} />}
                        title="curl — xem URL, tải file, theo redirect"
                    />
                    <CurlBasic />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="5"
                        color="purple"
                        icon={<FileJson size={22} />}
                        title="curl với REST API: GET, POST, header, JSON"
                    />
                    <CurlApi />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="6"
                        color="amber"
                        icon={<Cookie size={22} />}
                        title="curl cookie, auth header và progress bar"
                    />
                    <CurlAuthCookie />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="7"
                        color="lime"
                        icon={<FileCheck2 size={22} />}
                        title="Tải file lớn và xác minh SHA256"
                    />
                    <RealWorldDownloads />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="8"
                        color="rose"
                        icon={<ShieldAlert size={22} />}
                        title="Mẹo và lỗi thường gặp: SSL, User-Agent, proxy"
                    />
                    <TipsAndErrors />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="9"
                        color="teal"
                        icon={<Code2 size={22} />}
                        title="Script download_helper.sh — tải, resume, verify"
                    />
                    <DownloadHelperPreview />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="10"
                        color="sky"
                        icon={<ListChecks size={22} />}
                        title="Bảng so sánh wget và curl"
                    />
                    <CompareTable />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="11"
                        color="orange"
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
                                <span className="bg-emerald-500/20 text-emerald-400 p-2 rounded-lg">
                                    <ClipboardCheck size={20} />
                                </span>
                                Kiểm tra nhanh: wget và curl
                            </h3>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                <div className="text-center pt-8 border-t border-slate-800">
                    <p className="text-slate-400 mb-4">
                        Bạn đã hoàn thành Phần 6.3 — Tải file từ internet với
                        wget và curl.
                    </p>
                    <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-emerald-500/20">
                        Bài tiếp theo: 6.4 — SSH kết nối từ xa an toàn{" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

function Hero() {
    const cards = [
        [FileDown, "wget", "Tải file, resume, mirror"],
        [Globe2, "curl", "HTTP, API, header"],
        [FileJson, "REST API", "GET, POST, JSON"],
        [FileCheck2, "checksum", "SHA256 verify"],
    ];
    return (
        <section className="text-center space-y-5 py-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium">
                <Zap size={16} /> wget · curl · redirect · header · POST ·
                cookie · sha256sum
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Tải File từ Internet với{" "}
                <span className="text-emerald-400 font-mono">wget</span> và{" "}
                <span className="text-blue-400 font-mono">curl</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Bài này giúp bạn tải file đơn giản, tiếp tục download khi đứt,
                tải nền, gọi API REST, gửi POST JSON, thêm header/token, dùng
                cookie và xác minh file bằng SHA256.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4">
                {cards.map(([Icon, title, desc]) => (
                    <div
                        key={title}
                        className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 text-left"
                    >
                        <Icon className="text-emerald-400 mb-3" size={24} />
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
        emerald: "bg-emerald-500/20 text-emerald-400",
        green: "bg-green-500/20 text-green-400",
        cyan: "bg-cyan-500/20 text-cyan-400",
        blue: "bg-blue-500/20 text-blue-400",
        purple: "bg-purple-500/20 text-purple-400",
        amber: "bg-amber-500/20 text-amber-400",
        lime: "bg-lime-500/20 text-lime-400",
        rose: "bg-rose-500/20 text-rose-400",
        teal: "bg-teal-500/20 text-teal-400",
        sky: "bg-sky-500/20 text-sky-400",
        orange: "bg-orange-500/20 text-orange-400",
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
        emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
        green: "bg-green-500/10 border-green-500/20 text-green-300",
        cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
        blue: "bg-blue-500/10 border-blue-500/20 text-blue-300",
        purple: "bg-purple-500/10 border-purple-500/20 text-purple-300",
        amber: "bg-amber-500/10 border-amber-500/20 text-amber-300",
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

function Overview() {
    return (
        <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                <div className="flex items-start gap-5">
                    <div className="bg-emerald-500/15 text-emerald-400 p-4 rounded-2xl border border-emerald-500/20">
                        <Download size={42} />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">
                            Hai công cụ, hai thế mạnh
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            <code>wget</code> chuyên tải file xuống đĩa, rất
                            tiện khi tải file lớn, resume, tải nền hoặc mirror
                            website. <code>curl</code> đa năng hơn: đọc URL, tải
                            file, xem header, gửi request API, thêm token,
                            cookie và POST dữ liệu.
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                            <MiniPoint
                                icon={<FileDown size={18} />}
                                tone="green"
                                title="wget"
                                text="Tải file là chính: đơn giản, bền, hợp cho ISO, backup, mirror."
                            />
                            <MiniPoint
                                icon={<Globe2 size={18} />}
                                tone="blue"
                                title="curl"
                                text="Giao tiếp HTTP/API: GET, POST, header, cookie, auth, redirect."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-2 space-y-3">
                <CompareCard
                    title="Tải 1 file"
                    cmd="wget URL  |  curl -O URL"
                    desc="wget tự lưu tên file; curl cần -O hoặc -o khi muốn lưu."
                    tone="green"
                />
                <CompareCard
                    title="Resume download"
                    cmd="wget -c URL  |  curl -C - -O URL"
                    desc="Rất quan trọng khi tải file lớn qua mạng không ổn định."
                    tone="amber"
                />
                <CompareCard
                    title="Gọi API"
                    cmd="curl -X POST -H ... -d ..."
                    desc="curl là lựa chọn chuẩn khi test REST API từ terminal."
                    tone="blue"
                />
            </div>
        </div>
    );
}

function CompareCard({ title, cmd, desc, tone }) {
    const map = {
        green: "text-green-300",
        amber: "text-amber-300",
        blue: "text-blue-300",
    };
    return (
        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4">
            <div className="font-bold text-white mb-1">{title}</div>
            <code className={`${map[tone]} text-sm`}>{cmd}</code>
            <p className="text-xs text-slate-500 mt-2">{desc}</p>
        </div>
    );
}

function WgetExplorer() {
    const [tab, setTab] = useState("basic");
    const code = {
        install: `$ sudo apt update
$ sudo apt install wget -y

$ wget --version
GNU Wget 1.21.x built on linux-gnu.

# Cú pháp:
$ wget [tùy_chọn] URL`,
        basic: `$ wget https://example.com/file.zip
# Lưu thành file.zip trong thư mục hiện tại

$ ls -lh file.zip
-rw-r--r-- 1 user user 120M file.zip

# Tải vào thư mục cụ thể
$ wget -P ~/Downloads https://example.com/file.zip`,
        output: `$ wget -O myfile.zip https://example.com/file.zip
# Lưu thành myfile.zip thay vì tên gốc

# Lưu output web page thành file HTML
$ wget -O homepage.html https://example.com

# Ghi log download
$ wget -o download.log https://example.com/file.zip

# Vừa hiện output, vừa ghi log
$ wget -a download.log https://example.com/file.zip`,
        resume: `$ wget -c https://example.com/largefile.iso
# Tiếp tục tải nếu file đang tải bị đứt giữa chừng

$ wget --limit-rate=500k https://example.com/file.iso
# Giới hạn tốc độ 500 KB/s

$ wget -c --limit-rate=2m https://example.com/ubuntu.iso
# Vừa resume, vừa giới hạn 2 MB/s`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-4 border-b border-slate-700">
                {[
                    ["install", "Cài đặt"],
                    ["basic", "Tải cơ bản"],
                    ["output", "Đặt tên/log"],
                    ["resume", "Resume/rate"],
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
                    <TerminalBlock title={`wget — ${tab}`} code={code[tab]} />
                </div>
                <div className="lg:col-span-2 space-y-3">
                    <MiniPoint
                        icon={<FileDown size={18} />}
                        tone="green"
                        title="Mặc định lưu file"
                        text="wget phù hợp khi mục tiêu là tải file xuống đĩa."
                    />
                    <MiniPoint
                        icon={<RotateCcw size={18} />}
                        tone="amber"
                        title="-c"
                        text="Continue/resume download, cực hữu ích với file lớn."
                    />
                    <MiniPoint
                        icon={<Gauge size={18} />}
                        tone="cyan"
                        title="--limit-rate"
                        text="Giới hạn băng thông để không chiếm hết mạng."
                    />
                </div>
            </div>
        </div>
    );
}

function WgetAdvanced() {
    const [mode, setMode] = useState("background");
    const code = {
        background: `$ wget -b https://example.com/bigfile.iso
Continuing in background, pid 12345.
Output will be written to 'wget-log'.

$ tail -f wget-log

# Chạy nền + resume
$ wget -b -c https://example.com/bigfile.iso
$ ps aux | grep wget`,
        list: `$ cat urls.txt
https://example.com/file1.zip
https://example.com/file2.zip
https://example.com/file3.zip

$ wget -i urls.txt
# Tải tuần tự các URL trong file

$ wget -i urls.txt -P ~/Downloads
# Tải vào thư mục Downloads`,
        mirror: `$ wget -r -np -l 2 https://example.com/docs/

# -r   recursive: tải đệ quy
# -np  no-parent: không đi lên thư mục cha
# -l 2 depth level: chỉ sâu 2 cấp

# Mirror gần đầy đủ hơn
$ wget --mirror --convert-links --page-requisites --no-parent https://example.com/docs/`,
        headers: `$ wget --user-agent="Mozilla/5.0" https://example.com/file.zip

# Thêm header tùy chỉnh
$ wget --header="Authorization: Bearer TOKEN" https://api.example.com/file

# Basic auth
$ wget --user alice --password secret https://example.com/private/file.zip`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["background", "Tải nền"],
                        ["list", "Danh sách URL"],
                        ["mirror", "Mirror website"],
                        ["headers", "Header/Auth"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setMode(k)}
                            className={`w-full text-left rounded-xl border p-4 font-bold ${mode === k ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`wget advanced — ${mode}`}
                        code={code[mode]}
                    />
                </div>
            </div>
        </div>
    );
}

function CurlBasic() {
    const [tab, setTab] = useState("view");
    const code = {
        install: `$ sudo apt update
$ sudo apt install curl -y

$ curl --version
curl 8.x.x ...

# Cú pháp:
$ curl [options] URL`,
        view: `$ curl https://example.com
# In HTML/body ra terminal

$ curl -I https://example.com
HTTP/2 200
content-type: text/html
server: nginx

# -I chỉ xem header, không tải body`,
        download: `$ curl -O https://example.com/file.zip
# -O giữ tên gốc: file.zip

$ curl -o myfile.zip https://example.com/file.zip
# -o đặt tên file mới

$ curl -# -O https://example.com/largefile.iso
# -# hoặc --progress-bar: thanh tiến trình gọn`,
        redirect: `$ curl -L https://bit.ly/some-short-link -O
# -L theo redirect tự động

$ curl -C - -O https://example.com/bigfile.iso
# -C - tự tiếp tục từ vị trí đang dở

$ curl -L -C - -o ubuntu.iso https://example.com/ubuntu.iso
# Redirect + resume + đặt tên file`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-4 border-b border-slate-700">
                {[
                    ["install", "Cài đặt"],
                    ["view", "View/header"],
                    ["download", "Download"],
                    ["redirect", "Redirect/resume"],
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
                    <TerminalBlock title={`curl — ${tab}`} code={code[tab]} />
                </div>
                <div className="lg:col-span-2 space-y-3">
                    <MiniPoint
                        icon={<Globe2 size={18} />}
                        tone="blue"
                        title="Mặc định in ra màn hình"
                        text="curl không tự lưu file nếu bạn không dùng -O hoặc -o."
                    />
                    <MiniPoint
                        icon={<FileText size={18} />}
                        tone="cyan"
                        title="-I"
                        text="Xem HTTP status/header, tốt khi debug redirect/cache/server."
                    />
                    <MiniPoint
                        icon={<Link2 size={18} />}
                        tone="amber"
                        title="-L"
                        text="Theo redirect. Cần khi tải từ short link hoặc GitHub release."
                    />
                </div>
            </div>
        </div>
    );
}

function CurlApi() {
    const [mode, setMode] = useState("get");
    const code = {
        get: `$ curl https://api.github.com/users/torvalds

# Format JSON đẹp bằng Python
$ curl https://api.github.com/users/torvalds | python3 -m json.tool

# Lấy IP public
$ curl https://ipinfo.io/ip

# Ví dụ API text
$ curl 'https://wttr.in/HaNoi?format=3'`,
        post: `$ curl -X POST https://api.example.com/data \
  -H "Content-Type: application/json" \
  -d '{"name":"ubuntu","version":"24.04"}'

# POST form data
$ curl -X POST https://api.example.com/login \
  -d "username=alice" \
  -d "password=secret"`,
        headers: `$ curl -H "Authorization: Bearer mytoken123" \
  https://api.example.com/profile

$ curl -H "Accept: application/json" \
  -H "User-Agent: Ubuntu-Lesson/1.0" \
  https://api.example.com/data

# Debug request/response chi tiết
$ curl -v https://example.com
$ curl -i https://example.com`,
        methods: `$ curl -X GET https://api.example.com/items
$ curl -X POST https://api.example.com/items -d '{"name":"new"}'
$ curl -X PUT https://api.example.com/items/1 -d '{"name":"updated"}'
$ curl -X PATCH https://api.example.com/items/1 -d '{"status":"done"}'
$ curl -X DELETE https://api.example.com/items/1

# Với JSON nên thêm:
# -H "Content-Type: application/json"`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["get", "GET/JSON"],
                        ["post", "POST data"],
                        ["headers", "Header/token"],
                        ["methods", "HTTP methods"],
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
                        title={`curl API — ${mode}`}
                        code={code[mode]}
                    />
                </div>
            </div>
        </div>
    );
}

function CurlAuthCookie() {
    const [mode, setMode] = useState("cookie");
    const code = {
        cookie: `$ curl -c cookies.txt https://example.com/login
# -c lưu cookie server trả về vào cookies.txt

$ curl -b cookies.txt https://example.com/profile
# -b gửi cookie từ file cookies.txt

# Vừa gửi cookie cũ, vừa cập nhật cookie mới
$ curl -b cookies.txt -c cookies.txt https://example.com/profile`,
        auth: `# Bearer token
$ curl -H "Authorization: Bearer TOKEN" https://api.example.com/me

# Basic auth
$ curl -u alice:secret https://example.com/private

# API key header
$ curl -H "X-API-Key: abc123" https://api.example.com/data`,
        progress: `$ curl -# -O https://example.com/largefile.iso
$ curl --progress-bar -O https://example.com/largefile.iso

# Silent nhưng vẫn hiện lỗi
$ curl -sS https://api.example.com/health

# Fail nếu HTTP status >= 400
$ curl -f https://example.com/file.zip -O

# Kết hợp tốt trong script
$ curl -fL -o app.tar.gz https://example.com/app.tar.gz`,
        debug: `$ curl -v https://example.com
# Verbose: thấy DNS, TLS handshake, request/response headers

$ curl -I https://example.com
# Chỉ response header

$ curl -w '\nHTTP %{http_code}\nTime %{time_total}s\n' -o /dev/null -s https://example.com
# In status code và tổng thời gian`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["cookie", "Cookie"],
                    ["auth", "Auth"],
                    ["progress", "Progress/script"],
                    ["debug", "Debug"],
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
                title={`curl auth/cookie — ${mode}`}
                code={code[mode]}
            />
        </div>
    );
}

function RealWorldDownloads() {
    const [scenario, setScenario] = useState("ubuntu");
    const scenarios = {
        ubuntu: {
            title: "Tải Ubuntu ISO bằng wget",
            icon: FileDown,
            code: `$ wget -c --limit-rate=2m \
  https://releases.ubuntu.com/24.04/ubuntu-24.04-desktop-amd64.iso

# Chạy nền
$ wget -b -c \
  https://releases.ubuntu.com/24.04/ubuntu-24.04-desktop-amd64.iso
$ tail -f wget-log`,
        },
        nvm: {
            title: "Cài phần mềm qua curl pipe bash",
            icon: Play,
            code: `$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# | bash nghĩa là lấy output của curl và chạy trực tiếp bằng bash
# Chỉ dùng với nguồn chính thống, đọc script trước nếu cần:
$ curl -fsSL URL -o install.sh
$ less install.sh
$ bash install.sh`,
        },
        api: {
            title: "Kiểm tra API công khai",
            icon: FileJson,
            code: `$ curl 'https://wttr.in/HaNoi?format=3'
HaNoi: ⛅ +30°C

$ curl https://ipinfo.io/ip
203.113.xx.xx

$ curl https://api.github.com/users/torvalds | python3 -m json.tool`,
        },
        checksum: {
            title: "Tải file và xác minh SHA256",
            icon: FileCheck2,
            code: `$ wget https://example.com/file.iso
$ wget https://example.com/file.iso.sha256

$ sha256sum -c file.iso.sha256
file.iso: OK

# Nếu không có file .sha256:
$ sha256sum file.iso
abc123... file.iso
# So sánh hash với hash công bố trên website chính thức`,
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
                                className={`w-full text-left p-4 rounded-2xl border transition-all ${scenario === k ? "bg-lime-500/10 border-lime-500/40" : "bg-slate-900 border-slate-700 hover:border-slate-500"}`}
                            >
                                <div className="flex items-center gap-3">
                                    <ItemIcon className="text-lime-400" />
                                    <span className="font-bold text-white">
                                        {s.title}
                                    </span>
                                </div>
                            </button>
                        );
                    })}
                </div>
                <div className="lg:col-span-3">
                    <div className="mb-4 flex items-center gap-2 text-lime-300 font-bold">
                        <Icon size={22} /> {current.title}
                    </div>
                    <TerminalBlock title="ví dụ thực tế" code={current.code} />
                </div>
            </div>
        </div>
    );
}

function TipsAndErrors() {
    const [mode, setMode] = useState("ssl");
    const code = {
        ssl: `# SSL certificate expired / verification failed
$ wget --no-check-certificate https://example.com/file.zip
$ curl -k https://example.com/file.zip

⚠️ Chỉ dùng khi bạn chắc chắn nguồn đáng tin cậy.
Tốt hơn: kiểm tra ngày giờ hệ thống, CA certificates, URL chính xác.

$ date
$ sudo apt install ca-certificates -y
$ sudo update-ca-certificates`,
        useragent: `# Một số server chặn wget/curl mặc định
$ wget --user-agent="Mozilla/5.0" https://example.com/file.zip
$ curl -A "Mozilla/5.0" https://example.com/file.zip

# Curl với header đầy đủ hơn
$ curl -L -A "Mozilla/5.0" \
  -H "Accept: text/html" \
  https://example.com`,
        proxy: `$ wget -e use_proxy=yes \
  -e http_proxy=http://proxy.example.com:3128 \
  https://example.com/file.zip

$ curl -x http://proxy.example.com:3128 https://example.com

# Proxy qua biến môi trường
$ export http_proxy=http://proxy.example.com:3128
$ export https_proxy=http://proxy.example.com:3128
$ curl https://example.com`,
        errors: `# curl: (6) Could not resolve host
# → DNS lỗi. Test: resolvectl status, nslookup domain

# curl: (7) Failed to connect
# → Port đóng/firewall/server down. Test: ss, nc, nmap

# curl: (22) The requested URL returned error: 404
# → URL sai hoặc file không tồn tại

# wget: unable to resolve host address
# → DNS lỗi

# wget: Connection refused
# → Server từ chối, service/port không mở`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["ssl", "SSL/certificate"],
                        ["useragent", "User-Agent"],
                        ["proxy", "Proxy"],
                        ["errors", "Lỗi thường gặp"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setMode(k)}
                            className={`w-full text-left rounded-xl border p-4 font-bold ${mode === k ? "bg-rose-500/10 border-rose-500/40 text-rose-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={`tips/errors — ${mode}`}
                        code={code[mode]}
                    />
                </div>
            </div>
        </div>
    );
}

function DownloadHelperPreview() {
    const [view, setView] = useState("menu");
    const content = {
        menu: `╔══════════════════════════════════════╗
║        DOWNLOAD HELPER               ║
╠══════════════════════════════════════╣
║ 1) Tải file bằng wget                ║
║ 2) Tải file bằng curl                ║
║ 3) Resume download                   ║
║ 4) Tải danh sách URL                 ║
║ 5) Kiểm tra SHA256                   ║
║ 6) Test API endpoint                 ║
╚══════════════════════════════════════╝`,
        download: `URL: https://example.com/bigfile.iso
Tên file: bigfile.iso
Giới hạn tốc độ: 2m

Command:
wget -c --limit-rate=2m -O bigfile.iso https://example.com/bigfile.iso

✅ Đang tải...
Progress: 43% [████████░░░░░░░░░░]`,
        api: `API URL: https://api.example.com/data
Method: POST
Header: Content-Type: application/json
Body: {"name":"ubuntu"}

Command:
curl -sS -X POST \
  -H "Content-Type: application/json" \
  -d '{"name":"ubuntu"}' \
  https://api.example.com/data | python3 -m json.tool`,
        verify: `File: ubuntu.iso
Checksum file: SHA256SUMS

$ sha256sum -c SHA256SUMS --ignore-missing
ubuntu.iso: OK

✅ File toàn vẹn, hash khớp.`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-2">
                    {[
                        ["menu", "Menu"],
                        ["download", "Download"],
                        ["api", "API test"],
                        ["verify", "Verify"],
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
                        title="download_helper.sh preview"
                        code={content[view]}
                    />
                </div>
            </div>
        </div>
    );
}

function CompareTable() {
    const rows = [
        ["Tải 1 file đơn giản", "wget URL", "curl -O URL"],
        ["Đặt tên file", "wget -O tên URL", "curl -o tên URL"],
        ["Tiếp tục nếu đứt", "wget -c URL", "curl -C - -O URL"],
        ["Theo redirect", "wget tự xử lý khá tốt", "curl -L URL"],
        ["Gọi REST API", "Không phù hợp bằng curl", "curl URL"],
        ["POST JSON", "Có thể nhưng không tiện", "curl -X POST -H ... -d ..."],
        ["Xem HTTP header", "wget --server-response", "curl -I URL"],
        ["Mirror website", "wget -r URL", "Không phải thế mạnh"],
        ["Tải nền", "wget -b URL", "Dùng shell: curl ... &"],
    ];
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="overflow-x-auto border border-slate-700 rounded-2xl">
                <table className="w-full text-sm min-w-[760px]">
                    <thead className="bg-slate-950 text-slate-400">
                        <tr>
                            <th className="text-left p-4">Việc cần làm</th>
                            <th className="text-left p-4">wget</th>
                            <th className="text-left p-4">curl</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([task, wget, curl]) => (
                            <tr
                                key={task}
                                className="border-t border-slate-700 bg-slate-900/60"
                            >
                                <td className="p-4 font-bold text-white">
                                    {task}
                                </td>
                                <td className="p-4 text-green-300 font-mono">
                                    {wget}
                                </td>
                                <td className="p-4 text-blue-300 font-mono">
                                    {curl}
                                </td>
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
        ["Cài wget và curl", "sudo apt install wget curl -y"],
        ["Tải file bằng wget", "wget https://example.com/file.zip"],
        [
            "Tải file đặt tên bằng wget",
            "wget -O myfile.zip https://example.com/file.zip",
        ],
        ["Resume wget", "wget -c https://example.com/largefile.iso"],
        [
            "Tải nền bằng wget",
            "wget -b https://example.com/bigfile.iso && tail -f wget-log",
        ],
        ["Tải bằng curl giữ tên gốc", "curl -O https://example.com/file.zip"],
        [
            "Tải bằng curl đặt tên",
            "curl -o myfile.zip https://example.com/file.zip",
        ],
        ["Curl theo redirect", "curl -L -O https://example.com/file.zip"],
        ["Xem HTTP header", "curl -I https://example.com"],
        [
            "Gọi API JSON",
            "curl https://api.github.com/users/torvalds | python3 -m json.tool",
        ],
        [
            "POST JSON mẫu",
            "curl -X POST https://api.example.com/data -H 'Content-Type: application/json' -d '{\"name\":\"ubuntu\"}'",
        ],
        [
            "Lưu và gửi cookie",
            "curl -c cookies.txt https://example.com/login; curl -b cookies.txt https://example.com/profile",
        ],
        ["Giả lập User-Agent", "curl -A 'Mozilla/5.0' https://example.com"],
        ["Kiểm tra SHA256", "sha256sum file.iso"],
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
                <div className="text-sm font-bold text-orange-300 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2">
                    {done.length}/{tasks.length} hoàn thành
                </div>
            </div>
            <div className="space-y-3">
                {tasks.map(([title, cmd], i) => (
                    <button
                        key={title}
                        onClick={() => toggle(i)}
                        className={`w-full text-left rounded-2xl border p-4 transition-all ${done.includes(i) ? "bg-orange-500/10 border-orange-500/30" : "bg-slate-900 border-slate-700 hover:border-slate-500"}`}
                    >
                        <div className="flex items-start gap-3">
                            {done.includes(i) ? (
                                <CheckCircle2 className="text-orange-400 shrink-0" />
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
                        <BookOpen className="text-emerald-400" /> Tóm tắt bài
                        học
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <SummaryBox
                        title="wget"
                        items={[
                            "wget URL",
                            "wget -O tên URL",
                            "wget -c URL",
                            "wget -b URL",
                            "wget -i urls.txt",
                            "wget -r -np -l 2 URL",
                        ]}
                    />
                    <SummaryBox
                        title="curl tải file"
                        items={[
                            "curl URL",
                            "curl -I URL",
                            "curl -O URL",
                            "curl -o tên URL",
                            "curl -L URL",
                            "curl -C - -O URL",
                            "curl -# -O URL",
                        ]}
                    />
                    <SummaryBox
                        title="curl API"
                        items={[
                            "curl API_URL",
                            "curl -X POST",
                            "-H header",
                            "-d data",
                            "-u user:pass",
                            "-b/-c cookie",
                            "python3 -m json.tool",
                        ]}
                    />
                    <SummaryBox
                        title="an toàn/lỗi"
                        items={[
                            "sha256sum -c",
                            "curl -k",
                            "wget --no-check-certificate",
                            "curl -A",
                            "curl -x proxy",
                            "curl -v",
                            "curl -fL",
                        ]}
                    />
                </div>
                <div className="px-6 md:px-8 pb-8">
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-5 text-emerald-100">
                        <strong className="text-white">Quy tắc nhanh:</strong>{" "}
                        tải file lớn dùng <code>wget -c</code>; tải từ link
                        redirect dùng <code>curl -L -O</code>; test API dùng{" "}
                        <code>curl</code>; file quan trọng phải kiểm tra{" "}
                        <code>sha256sum</code>.
                    </div>
                </div>
            </div>
        </section>
    );
}

function SummaryBox({ title, items }) {
    return (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
            <h4 className="font-bold text-emerald-300 uppercase text-xs tracking-widest mb-4">
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
        question: "wget và curl khác nhau chính ở điểm nào?",
        options: [
            "wget chuyên tải file; curl đa năng hơn cho HTTP/API/header/POST",
            "curl chỉ dùng offline",
            "wget chỉ gọi API",
            "Không khác nhau",
        ],
        correct: 0,
        explanation:
            "wget rất tiện cho download; curl mạnh trong giao tiếp HTTP/API và debug request.",
    },
    {
        question: "Lệnh wget nào tiếp tục tải file bị đứt giữa chừng?",
        options: [
            "wget -c URL",
            "wget -I URL",
            "wget --post URL",
            "wget -k URL",
        ],
        correct: 0,
        explanation: "-c là continue/resume download.",
    },
    {
        question: "curl -O và curl -o khác nhau thế nào?",
        options: [
            "-O giữ tên file gốc từ URL; -o cho phép đặt tên mới",
            "-O là POST; -o là GET",
            "Không khác nhau",
            "-o chỉ xem header",
        ],
        correct: 0,
        explanation:
            "Ví dụ curl -O URL lưu theo tên gốc, còn curl -o myfile.zip URL lưu theo tên bạn chọn.",
    },
    {
        question:
            "Khi tải từ short link hoặc URL redirect bằng curl, option nào rất cần?",
        options: ["-L", "-k", "-c", "-u"],
        correct: 0,
        explanation: "-L cho curl tự theo HTTP redirect.",
    },
    {
        question: "Lệnh nào xem HTTP header mà không tải body?",
        options: ["curl -I URL", "wget -c URL", "curl -d URL", "sha256sum URL"],
        correct: 0,
        explanation: "curl -I gửi HEAD request và chỉ hiển thị header.",
    },
    {
        question: "POST JSON bằng curl cần header nào thường gặp?",
        options: [
            "Content-Type: application/json",
            "Accept-Language: bash",
            "Port: 443",
            "File-Type: zip",
        ],
        correct: 0,
        explanation:
            "API cần biết body là JSON, nên thêm -H 'Content-Type: application/json'.",
    },
    {
        question: "curl -k và wget --no-check-certificate có rủi ro gì?",
        options: [
            "Bỏ qua kiểm tra TLS certificate, dễ bị MITM nếu nguồn không đáng tin",
            "Tự động mã hóa file",
            "Làm download nhanh hơn chắc chắn",
            "Chỉ dùng cho IPv6",
        ],
        correct: 0,
        explanation:
            "Chỉ dùng khi hiểu rõ rủi ro và tin nguồn; tốt hơn là sửa CA/time/certificate.",
    },
    {
        question: "Tải file quan trọng xong nên kiểm tra gì?",
        options: ["sha256sum/checksum", "hostname", "ifconfig", "jobs"],
        correct: 0,
        explanation:
            "Checksum giúp xác nhận file không bị hỏng hoặc bị thay đổi.",
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
                    <strong className="text-emerald-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu về wget và curl.
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
                <span className="text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
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
