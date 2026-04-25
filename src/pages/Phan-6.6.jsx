import React, { useState } from "react";
import {
    Archive,
    ArrowDownToLine,
    ArrowRightLeft,
    ArrowUpToLine,
    BookOpen,
    CheckCircle2,
    ChevronRight,
    ClipboardCheck,
    Clock,
    Code2,
    Database,
    FileCheck2,
    FileCog,
    FileText,
    FolderOpen,
    FolderSync,
    Globe2,
    HardDrive,
    Info,
    KeyRound,
    Layers,
    ListChecks,
    Lock,
    Monitor,
    Network,
    Play,
    RefreshCcw,
    RotateCcw,
    Search,
    Server,
    Settings,
    Share2,
    ShieldAlert,
    TerminalSquare,
    Trash2,
    UploadCloud,
    Users,
    Wifi,
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
                                SCP, Rsync, Samba, backup, LAN share và mount
                                CIFS
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400 hidden md:inline-block">
                            Bài trước: 6.5
                        </span>
                        <div className="text-sm font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                            Phần 6.6
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
                        icon={<Share2 size={22} />}
                        title="Tổng quan: SCP, Rsync, Samba dùng khi nào?"
                    />
                    <Overview />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="2"
                        color="blue"
                        icon={<TerminalSquare size={22} />}
                        title="SCP — Secure Copy qua SSH"
                    />
                    <ScpExplorer />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="3"
                        color="green"
                        icon={<FolderSync size={22} />}
                        title="Rsync — đồng bộ thông minh, chỉ copy phần thay đổi"
                    />
                    <RsyncExplorer />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="4"
                        color="emerald"
                        icon={<Clock size={22} />}
                        title="Rsync thực tế: dry-run, --delete, backup bằng cron"
                    />
                    <RsyncRealWorld />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="5"
                        color="purple"
                        icon={<Users size={22} />}
                        title="Samba — chia sẻ thư mục trong LAN"
                    />
                    <SambaIntro />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="6"
                        color="amber"
                        icon={<FileCog size={22} />}
                        title="Cấu hình Samba: public share và private share"
                    />
                    <SambaConfig />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="7"
                        color="pink"
                        icon={<Monitor size={22} />}
                        title="Kết nối Samba từ Linux, Windows, macOS"
                    />
                    <SambaClients />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="8"
                        color="orange"
                        icon={<ShieldAlert size={22} />}
                        title="Quyền truy cập, UFW và lỗi thường gặp"
                    />
                    <SecurityTroubleshooting />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="9"
                        color="sky"
                        icon={<Code2 size={22} />}
                        title="Script file_share_helper.sh — trợ lý chia sẻ file"
                    />
                    <FileShareHelperPreview />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="10"
                        color="teal"
                        icon={<Layers size={22} />}
                        title="Bảng so sánh SCP, Rsync, Samba"
                    />
                    <CompareTable />
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
                <PartSixCompletion />

                <section className="space-y-6 pt-4">
                    <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-xl">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-cyan-500/20 text-cyan-400 p-2 rounded-lg">
                                    <ClipboardCheck size={20} />
                                </span>
                                Kiểm tra nhanh: SCP, Rsync, Samba
                            </h3>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                <div className="text-center pt-8 border-t border-slate-800">
                    <p className="text-slate-400 mb-4">
                        Bạn đã hoàn thành Phần 6.6 — Chia sẻ file qua mạng.
                    </p>
                    <button className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
                        Phần tiếp theo: 7 — Text Editor & Xử lý văn bản{" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

function Hero() {
    const cards = [
        [TerminalSquare, "SCP", "Copy file nhanh qua SSH"],
        [FolderSync, "Rsync", "Sync thông minh, backup"],
        [Share2, "Samba", "Ổ mạng cho LAN/Windows"],
        [Clock, "Cron backup", "Tự động hóa đồng bộ"],
    ];
    return (
        <section className="text-center space-y-5 py-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium">
                <Zap size={16} /> scp · rsync · samba · smbclient · mount.cifs ·
                cron
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Chia Sẻ File Qua Mạng với{" "}
                <span className="text-cyan-400 font-mono">SCP</span>,{" "}
                <span className="text-green-400 font-mono">Rsync</span>,{" "}
                <span className="text-purple-400 font-mono">Samba</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Bài này giúp bạn copy file qua SSH, đồng bộ thư mục lớn tiết
                kiệm băng thông, backup tự động hằng ngày, và chia sẻ thư mục
                Linux cho Windows/macOS/Linux trong mạng LAN.
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
        green: "bg-green-500/20 text-green-400",
        emerald: "bg-emerald-500/20 text-emerald-400",
        purple: "bg-purple-500/20 text-purple-400",
        amber: "bg-amber-500/20 text-amber-400",
        pink: "bg-pink-500/20 text-pink-400",
        orange: "bg-orange-500/20 text-orange-400",
        sky: "bg-sky-500/20 text-sky-400",
        teal: "bg-teal-500/20 text-teal-400",
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
        cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
        blue: "bg-blue-500/10 border-blue-500/20 text-blue-300",
        green: "bg-green-500/10 border-green-500/20 text-green-300",
        emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
        purple: "bg-purple-500/10 border-purple-500/20 text-purple-300",
        amber: "bg-amber-500/10 border-amber-500/20 text-amber-300",
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
    const tools = [
        [
            TerminalSquare,
            "SCP",
            "Copy file lẻ nhanh",
            "Dùng một lần, cú pháp giống cp nhưng qua SSH",
            "blue",
        ],
        [
            FolderSync,
            "Rsync",
            "Backup/sync thư mục lớn",
            "Chỉ copy phần thay đổi, có dry-run và --delete",
            "green",
        ],
        [
            Share2,
            "Samba",
            "Chia sẻ ổ mạng LAN",
            "Windows/macOS/Linux truy cập như network drive",
            "purple",
        ],
    ];
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-4">
                {tools.map(([Icon, name, best, desc, tone]) => (
                    <div
                        key={name}
                        className="bg-slate-950 border border-slate-700 rounded-3xl p-6"
                    >
                        <Icon
                            className={`${tone === "blue" ? "text-blue-400" : tone === "green" ? "text-green-400" : "text-purple-400"} mb-4`}
                            size={42}
                        />
                        <h4 className="text-2xl font-black text-white">
                            {name}
                        </h4>
                        <p className="font-bold text-slate-300 mb-3">{best}</p>
                        <p className="text-sm text-slate-500">{desc}</p>
                    </div>
                ))}
            </div>
            <div className="grid md:grid-cols-3 gap-3 mt-6">
                <MiniPoint
                    icon={<ArrowRightLeft size={18} />}
                    tone="cyan"
                    title="Copy file lẻ"
                    text="Chọn SCP vì nhanh, dễ nhớ và tận dụng SSH sẵn có."
                />
                <MiniPoint
                    icon={<RotateCcw size={18} />}
                    tone="green"
                    title="Sync lặp lại"
                    text="Chọn Rsync vì lần sau chỉ truyền phần thay đổi."
                />
                <MiniPoint
                    icon={<Monitor size={18} />}
                    tone="purple"
                    title="Ổ mạng nội bộ"
                    text="Chọn Samba khi nhiều máy trong LAN cần dùng chung thư mục."
                />
            </div>
        </div>
    );
}

function ScpExplorer() {
    const [mode, setMode] = useState("upload");
    const code = {
        syntax: `scp [tùy_chọn] nguồn đích

# Local path:
file.txt
./folder
/home/user/report.pdf

# Remote path:
user@host:/path/to/file
ubuntu@192.168.1.100:/home/ubuntu/
myserver:/var/www/html/

# SCP dùng SSH bên dưới, nên dùng được SSH key/config alias.`,
        upload: `# Copy 1 file từ máy bạn lên server
$ scp file.txt ubuntu@192.168.1.100:/home/ubuntu/

# Copy vào web root
$ scp report.pdf ubuntu@192.168.1.100:/var/www/html/

# Copy cả thư mục
$ scp -r ./my-project ubuntu@192.168.1.100:/home/ubuntu/`,
        download: `# Tải file từ server về máy bạn
$ scp ubuntu@192.168.1.100:/var/log/nginx/error.log ./

# Tải cả thư mục từ server về
$ scp -r ubuntu@192.168.1.100:/var/www/html ./backup/

# Dùng alias trong ~/.ssh/config
$ scp myserver:/var/log/syslog ./`,
        server: `# Copy giữa 2 server
$ scp ubuntu@server1:/data/file.txt ubuntu@server2:/data/

# Tùy môi trường SSH, dữ liệu có thể đi qua client hoặc copy trực tiếp.
# Với file lớn giữa server, cân nhắc rsync hoặc chạy lệnh trên một server.`,
        options: `# SSH port khác: SCP dùng -P chữ HOA
$ scp -P 2222 file.txt ubuntu@host:/path/

# Chỉ định private key
$ scp -i ~/.ssh/mykey file.txt ubuntu@host:/path/

# Nén khi truyền
$ scp -C file.txt ubuntu@host:/path/

# Verbose debug
$ scp -v file.txt ubuntu@host:/path/`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-5 border-b border-slate-700">
                {[
                    ["syntax", "Cú pháp"],
                    ["upload", "Upload"],
                    ["download", "Download"],
                    ["server", "Server ↔ Server"],
                    ["options", "Options"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setMode(k)}
                        className={`p-3 font-bold border-b md:border-b-0 md:border-r last:border-r-0 border-slate-700 ${mode === k ? "bg-blue-500/10 text-blue-300" : "text-slate-400 hover:bg-slate-900"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="p-6 grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <TerminalBlock title={`scp — ${mode}`} code={code[mode]} />
                </div>
                <div className="lg:col-span-2 space-y-3">
                    <MiniPoint
                        icon={<KeyRound size={18} />}
                        tone="blue"
                        title="Qua SSH"
                        text="SCP dùng cùng user, host, port, key như SSH."
                    />
                    <MiniPoint
                        icon={<ArrowUpToLine size={18} />}
                        tone="green"
                        title="Upload"
                        text="Local source → remote destination."
                    />
                    <MiniPoint
                        icon={<ArrowDownToLine size={18} />}
                        tone="cyan"
                        title="Download"
                        text="Remote source → local destination."
                    />
                    <MiniPoint
                        icon={<Info size={18} />}
                        tone="amber"
                        title="Port khác"
                        text="ssh dùng -p, nhưng scp dùng -P chữ hoa."
                    />
                </div>
            </div>
        </div>
    );
}

function RsyncExplorer() {
    const [mode, setMode] = useState("options");
    const code = {
        install: `$ sudo apt update
$ sudo apt install rsync -y

$ rsync --version
rsync  version 3.x.x

# Cú pháp:
$ rsync [tùy_chọn] nguồn đích`,
        options: `Các option quan trọng:

-a  archive mode: giữ quyền, owner, group, timestamp, symlink
-v  verbose: hiện file đang copy
-z  nén dữ liệu khi truyền qua mạng
-h  human-readable: dung lượng dễ đọc
-P  progress + partial: hiện tiến trình và resume nếu đứt
--delete   xóa file ở đích nếu source đã xóa
--dry-run  chạy thử, không copy thật

Combo hay dùng:
rsync -avzh source/ dest/
rsync -avzh -P source/ user@host:/dest/`,
        slash: `# Dấu / cuối source rất quan trọng

$ rsync -avh /home/user/documents/ /backup/documents/
# Copy NỘI DUNG bên trong documents vào /backup/documents/

$ rsync -avh /home/user/documents /backup/
# Copy CẢ THƯ MỤC documents vào /backup/documents

Quy tắc nhớ nhanh:
source/  = nội dung bên trong
source   = cả thư mục source`,
        upload: `# Sync website lên server
$ rsync -avzh ./website/ ubuntu@192.168.1.100:/var/www/html/

# Có tiến trình + resume
$ rsync -avzh -P ./website/ ubuntu@192.168.1.100:/var/www/html/

# Dùng SSH port khác
$ rsync -avzh -e "ssh -p 2222" ./website/ ubuntu@host:/var/www/html/

# Dùng SSH key cụ thể
$ rsync -avzh -e "ssh -i ~/.ssh/id_ed25519" ./website/ ubuntu@host:/var/www/html/`,
        download: `# Backup thư mục web từ server về
$ rsync -avzh ubuntu@192.168.1.100:/var/www/html/ ./backup-html/

# Backup database dump
$ rsync -avzh ubuntu@192.168.1.100:/backup/db/ ./local-db-backup/

# Sync local 2 thư mục trong cùng máy
$ rsync -avh /home/user/documents/ /backup/documents/`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["install", "Cài đặt"],
                        ["options", "Options"],
                        ["slash", "Dấu / cuối"],
                        ["upload", "Upload sync"],
                        ["download", "Download backup"],
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
                        title={`rsync — ${mode}`}
                        code={code[mode]}
                    />
                </div>
            </div>
        </div>
    );
}

function RsyncRealWorld() {
    const [mode, setMode] = useState("dryrun");
    const code = {
        dryrun: `# Chạy thử trước khi sync thật
$ rsync -avzh --dry-run ./website/ ubuntu@host:/var/www/

sending incremental file list
index.html
css/style.css
img/logo.png

sent 1.2K bytes  received 200 bytes  2.8K bytes/sec

# Không copy/xóa gì thật, chỉ báo sẽ làm gì.`,
        delete: `# Sync và xóa file thừa ở đích nếu source đã xóa
$ rsync -avzh --delete ./website/ ubuntu@host:/var/www/html/

⚠️ --delete rất mạnh:
- Nếu source rỗng hoặc sai đường dẫn → có thể xóa nhiều file ở đích.
- Luôn thử trước:
$ rsync -avzh --dry-run --delete ./website/ ubuntu@host:/var/www/html/`,
        progress: `# File lớn, có resume khi đứt
$ rsync -avzh -P ./bigfile.iso ubuntu@host:/data/

# -P = --partial + --progress
# Nếu mạng đứt, chạy lại cùng lệnh để tiếp tục từ phần còn dở.`,
        cron: `# Mở crontab
$ crontab -e

# Backup /home/user lên backup server lúc 2h sáng mỗi ngày
0 2 * * * rsync -avzh --delete /home/user/ ubuntu@192.168.1.100:/backup/user/

# Backup và ghi log
0 2 * * * rsync -avzh /var/www/ ubuntu@backup-server:/backup/www/ >> /var/log/rsync.log 2>&1

# Kiểm tra log
$ tail -f /var/log/rsync.log`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["dryrun", "--dry-run"],
                    ["delete", "--delete"],
                    ["progress", "-P/resume"],
                    ["cron", "Cron backup"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setMode(k)}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${mode === k ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <TerminalBlock
                title={`rsync real-world — ${mode}`}
                code={code[mode]}
            />
        </div>
    );
}

function SambaIntro() {
    return (
        <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                <div className="flex items-start gap-5">
                    <div className="bg-purple-500/15 text-purple-400 p-4 rounded-2xl border border-purple-500/20">
                        <Share2 size={42} />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">
                            Samba biến thư mục Linux thành ổ mạng trong LAN
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            Samba triển khai giao thức SMB/CIFS. Máy Windows có
                            thể truy cập bằng đường dẫn{" "}
                            <code>\\192.168.1.100\share</code>, macOS dùng{" "}
                            <code>smb://...</code>, Linux dùng{" "}
                            <code>smbclient</code> hoặc mount CIFS.
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                            <MiniPoint
                                icon={<Monitor size={18} />}
                                tone="purple"
                                title="Windows/macOS friendly"
                                text="Phù hợp chia sẻ nội bộ cho nhiều máy khác hệ điều hành."
                            />
                            <MiniPoint
                                icon={<HardDrive size={18} />}
                                tone="cyan"
                                title="Ổ mạng"
                                text="Có thể mount như một ổ đĩa để mở/copy file bằng GUI."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-2 bg-slate-800/60 border border-slate-700 rounded-3xl p-6">
                <h4 className="font-bold text-white flex items-center gap-2 mb-4">
                    <Network className="text-purple-400" /> Sơ đồ
                </h4>
                <TerminalBlock
                    title="samba flow"
                    code={`Ubuntu Samba server
  /srv/samba/share
        │
        │ LAN / SMB
        ▼
Windows: \\192.168.1.100\\public-share
macOS:   smb://192.168.1.100/public-share
Linux:   smbclient //192.168.1.100/public-share`}
                />
            </div>
        </div>
    );
}

function SambaConfig() {
    const [mode, setMode] = useState("install");
    const code = {
        install: `$ sudo apt update
$ sudo apt install samba -y

$ sudo systemctl status smbd
$ sudo systemctl enable --now smbd

# Mở firewall nếu dùng UFW
$ sudo ufw allow samba`,
        dirs: `# Public share
$ sudo mkdir -p /srv/samba/share
$ sudo chmod 777 /srv/samba/share
$ sudo chown -R nobody:nogroup /srv/samba/share

# Private share
$ sudo mkdir -p /srv/samba/private
$ sudo chown -R ubuntu:ubuntu /srv/samba/private
$ sudo chmod 770 /srv/samba/private`,
        public: `$ sudo cp /etc/samba/smb.conf /etc/samba/smb.conf.bak
$ sudo nano /etc/samba/smb.conf

# Thêm cuối file:
[public-share]
   path = /srv/samba/share
   browseable = yes
   read only = no
   guest ok = yes
   create mask = 0644
   directory mask = 0755

$ testparm
$ sudo systemctl restart smbd`,
        private: `# Thêm cuối /etc/samba/smb.conf
[private-share]
   path = /srv/samba/private
   browseable = yes
   read only = no
   guest ok = no
   valid users = ubuntu
   create mask = 0644

# User Samba phải là user Linux đã tồn tại
$ sudo smbpasswd -a ubuntu
New SMB password:
Retype new SMB password:

$ testparm
$ sudo systemctl restart smbd`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["install", "Cài đặt/service"],
                        ["dirs", "Tạo thư mục"],
                        ["public", "Public share"],
                        ["private", "Private share"],
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
                        title={`samba config — ${mode}`}
                        code={code[mode]}
                    />
                </div>
            </div>
        </div>
    );
}

function SambaClients() {
    const [mode, setMode] = useState("linux");
    const code = {
        linux: `# Cài client
$ sudo apt install smbclient cifs-utils -y

# Xem danh sách share, không cần mật khẩu
$ smbclient -L //192.168.1.100 -N

# Kết nối public share như FTP shell
$ smbclient //192.168.1.100/public-share -N
smb: \\> ls
smb: \\> put file.txt
smb: \\> get report.pdf
smb: \\> exit

# Kết nối private share
$ smbclient //192.168.1.100/private-share -U ubuntu`,
        mount: `# Mount public share
$ sudo mkdir -p /mnt/share
$ sudo mount -t cifs //192.168.1.100/public-share /mnt/share -o guest

# Mount private share
$ sudo mkdir -p /mnt/private
$ sudo mount -t cifs //192.168.1.100/private-share /mnt/private -o username=ubuntu

# Kiểm tra
$ df -h | grep cifs
$ ls -la /mnt/share

# Unmount
$ sudo umount /mnt/share`,
        windows: `# Từ Windows
File Explorer → thanh địa chỉ:
\\192.168.1.100\public-share

# Private share:
\\192.168.1.100\private-share

# Map network drive:
This PC → Map network drive → Folder:
\\192.168.1.100\public-share`,
        macos: `# Từ macOS
Finder → Go → Connect to Server

smb://192.168.1.100/public-share
smb://192.168.1.100/private-share

# Sau đó nhập username/password Samba nếu private share.`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["linux", "Linux smbclient"],
                    ["mount", "Mount CIFS"],
                    ["windows", "Windows"],
                    ["macos", "macOS"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setMode(k)}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${mode === k ? "bg-pink-500/10 border-pink-500/40 text-pink-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <TerminalBlock
                title={`samba clients — ${mode}`}
                code={code[mode]}
            />
        </div>
    );
}

function SecurityTroubleshooting() {
    const [mode, setMode] = useState("ufw");
    const code = {
        ufw: `# Mở Samba trong UFW
$ sudo ufw allow samba

# Kiểm tra rule
$ sudo ufw status

# Samba thường dùng các port:
# 137/udp, 138/udp, 139/tcp, 445/tcp

# Chỉ cho LAN truy cập Samba
$ sudo ufw allow from 192.168.1.0/24 to any app Samba`,
        perms: `# Lỗi không ghi được thường do permission Linux hoặc Samba config
$ ls -ld /srv/samba/share
$ ls -ld /srv/samba/private

# Public share demo lab:
$ sudo chmod 777 /srv/samba/share

# Private share nên dùng group/user rõ ràng:
$ sudo chown -R ubuntu:ubuntu /srv/samba/private
$ sudo chmod -R 770 /srv/samba/private

# Test config
$ testparm`,
        service: `# Service không chạy
$ sudo systemctl status smbd
$ sudo systemctl restart smbd
$ sudo journalctl -u smbd -n 100

# Kiểm tra port Samba listen
$ sudo ss -tulnp | grep -E ':139|:445'

# Client không thấy share:
$ smbclient -L //192.168.1.100 -N`,
        rsync: `# Rsync lỗi permission denied
# 1. Kiểm tra SSH trước
$ ssh ubuntu@host

# 2. Kiểm tra quyền thư mục đích
$ ssh ubuntu@host 'ls -ld /var/www/html'

# 3. Nếu cần sudo ở đích, cân nhắc sync vào /tmp rồi move bằng sudo
$ rsync -avzh ./site/ ubuntu@host:/tmp/site/
$ ssh ubuntu@host 'sudo rsync -avh /tmp/site/ /var/www/html/'

# 4. Luôn dùng --dry-run trước --delete`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["ufw", "UFW/Samba ports"],
                        ["perms", "Permission"],
                        ["service", "Service/ports"],
                        ["rsync", "Rsync permission"],
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
                    <TerminalBlock
                        title={`security/troubleshooting — ${mode}`}
                        code={code[mode]}
                    />
                </div>
            </div>
        </div>
    );
}

function FileShareHelperPreview() {
    const [view, setView] = useState("menu");
    const content = {
        menu: `╔══════════════════════════════════════╗
║          FILE SHARE HELPER           ║
╠══════════════════════════════════════╣
║ 1) SCP upload/download               ║
║ 2) Rsync sync/backup                 ║
║ 3) Rsync dry-run + --delete          ║
║ 4) Tạo Samba public share            ║
║ 5) Tạo Samba private share           ║
║ 6) Test Samba client                 ║
║ 7) Mount CIFS share                  ║
╚══════════════════════════════════════╝`,
        scp: `▶ SCP UPLOAD
Local file: ./report.pdf
Remote: ubuntu@192.168.1.100:/home/ubuntu/

Command:
scp ./report.pdf ubuntu@192.168.1.100:/home/ubuntu/

✅ Upload completed`,
        rsync: `▶ RSYNC WEBSITE DEPLOY
Source: ./website/
Target: ubuntu@host:/var/www/html/
Options: -avzh --delete

Dry-run first:
rsync -avzh --dry-run --delete ./website/ ubuntu@host:/var/www/html/

Run real:
rsync -avzh --delete ./website/ ubuntu@host:/var/www/html/`,
        samba: `▶ SAMBA PUBLIC SHARE
Path: /srv/samba/share
Name: public-share

Commands:
sudo mkdir -p /srv/samba/share
sudo chmod 777 /srv/samba/share
sudo nano /etc/samba/smb.conf
sudo testparm
sudo systemctl restart smbd
sudo ufw allow samba

Access:
Windows: \\192.168.1.100\public-share`,
        mount: `▶ MOUNT CIFS
Server: 192.168.1.100
Share: public-share
Mount point: /mnt/share

Command:
sudo mount -t cifs //192.168.1.100/public-share /mnt/share -o guest

Check:
df -h | grep cifs`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-2">
                    {[
                        ["menu", "Menu"],
                        ["scp", "SCP"],
                        ["rsync", "Rsync"],
                        ["samba", "Samba"],
                        ["mount", "Mount"],
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
                        title="file_share_helper.sh preview"
                        code={content[view]}
                    />
                </div>
            </div>
        </div>
    );
}

function CompareTable() {
    const rows = [
        ["Tốc độ copy lần đầu", "Nhanh", "Nhanh", "Trung bình"],
        ["Tốc độ lần sau", "Copy lại hết", "Chỉ copy thay đổi", "Tùy"],
        ["Cần SSH", "Có", "Có khi sync qua mạng", "Không"],
        ["Windows dùng dễ", "Không", "Không", "Có"],
        ["Dùng như ổ mạng", "Không", "Không", "Có"],
        ["Dry-run", "Không tiện", "Có --dry-run", "Không phải mục tiêu"],
        [
            "Xóa file thừa ở đích",
            "Không",
            "Có --delete",
            "Người dùng thao tác trực tiếp",
        ],
        ["Phù hợp", "Copy một lần", "Backup/deploy/sync", "Chia sẻ nội bộ"],
    ];
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="overflow-x-auto border border-slate-700 rounded-2xl">
                <table className="w-full text-sm min-w-[760px]">
                    <thead className="bg-slate-950 text-slate-400">
                        <tr>
                            <th className="text-left p-4">Tiêu chí</th>
                            <th className="text-left p-4">SCP</th>
                            <th className="text-left p-4">Rsync</th>
                            <th className="text-left p-4">Samba</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([criteria, scp, rsync, samba]) => (
                            <tr
                                key={criteria}
                                className="border-t border-slate-700 bg-slate-900/60"
                            >
                                <td className="p-4 font-bold text-white">
                                    {criteria}
                                </td>
                                <td className="p-4 text-blue-300">{scp}</td>
                                <td className="p-4 text-green-300">{rsync}</td>
                                <td className="p-4 text-purple-300">{samba}</td>
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
        ["SCP upload file", "scp file.txt ubuntu@192.168.1.100:/home/ubuntu/"],
        [
            "SCP download file",
            "scp ubuntu@192.168.1.100:/var/log/nginx/error.log ./",
        ],
        [
            "SCP upload thư mục",
            "scp -r ./my-project ubuntu@192.168.1.100:/home/ubuntu/",
        ],
        ["SCP qua port khác", "scp -P 2222 file.txt ubuntu@host:/path/"],
        ["Cài rsync", "sudo apt install rsync -y"],
        ["Rsync local", "rsync -avh ~/documents/ ~/backup/documents/"],
        [
            "Rsync upload website",
            "rsync -avzh ./website/ ubuntu@192.168.1.100:/var/www/html/",
        ],
        [
            "Rsync dry-run delete",
            "rsync -avzh --dry-run --delete ./website/ ubuntu@host:/var/www/html/",
        ],
        [
            "Rsync backup server về local",
            "rsync -avzh ubuntu@192.168.1.100:/var/www/html/ ./backup-html/",
        ],
        ["Thêm cron rsync", "crontab -e"],
        [
            "Cài Samba",
            "sudo apt install samba -y && sudo systemctl status smbd",
        ],
        [
            "Tạo thư mục share",
            "sudo mkdir -p /srv/samba/share && sudo chmod 777 /srv/samba/share",
        ],
        [
            "Backup smb.conf",
            "sudo cp /etc/samba/smb.conf /etc/samba/smb.conf.bak",
        ],
        ["Kiểm tra Samba config", "testparm"],
        ["Tạo Samba user", "sudo smbpasswd -a ubuntu"],
        [
            "Restart Samba và mở UFW",
            "sudo systemctl restart smbd && sudo ufw allow samba",
        ],
        ["Test share từ Linux", "smbclient -L //192.168.1.100 -N"],
        [
            "Mount CIFS",
            "sudo mount -t cifs //192.168.1.100/public-share /mnt/share -o guest",
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
                        <BookOpen className="text-cyan-400" /> Tóm tắt bài học
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <SummaryBox
                        title="SCP"
                        items={[
                            "scp file user@host:/path/",
                            "scp user@host:/file ./",
                            "scp -r folder host:/path/",
                            "scp -P 2222",
                            "scp -i key",
                            "scp -C",
                        ]}
                    />
                    <SummaryBox
                        title="Rsync"
                        items={[
                            "rsync -avzh src/ dst/",
                            "--dry-run",
                            "--delete",
                            "-P progress/resume",
                            "-e 'ssh -p 2222'",
                            "source/ vs source",
                        ]}
                    />
                    <SummaryBox
                        title="Samba server"
                        items={[
                            "apt install samba",
                            "smb.conf",
                            "testparm",
                            "smbpasswd -a user",
                            "systemctl restart smbd",
                            "ufw allow samba",
                        ]}
                    />
                    <SummaryBox
                        title="Samba client"
                        items={[
                            "smbclient -L //host -N",
                            "smbclient //host/share",
                            "mount -t cifs",
                            "cifs-utils",
                            "Windows \\host\\share",
                            "macOS smb://host/share",
                        ]}
                    />
                </div>
                <div className="px-6 md:px-8 pb-8">
                    <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-5 text-cyan-100">
                        <strong className="text-white">
                            Quy tắc chọn nhanh:
                        </strong>{" "}
                        copy file lẻ dùng <code>scp</code>; backup/deploy lặp
                        lại dùng <code>rsync -avzh --dry-run</code> trước khi
                        chạy thật; chia sẻ thư mục cho nhiều máy trong LAN dùng{" "}
                        <code>Samba</code>.
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

function PartSixCompletion() {
    const lessons = [
        "6.1 Kiểm tra cấu hình mạng: ip, ifconfig, hostname",
        "6.2 Kiểm tra kết nối: ping, traceroute, netstat, ss",
        "6.3 Tải file từ internet: wget, curl",
        "6.4 SSH kết nối từ xa an toàn",
        "6.5 Cấu hình tường lửa với ufw",
        "6.6 Chia sẻ file qua mạng: SCP, Rsync, Samba",
    ];
    return (
        <section className="pt-4">
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-3xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                    🎉 Hoàn thành Phần 6 — Mạng & Kết Nối
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                    {lessons.map((lesson) => (
                        <div
                            key={lesson}
                            className="bg-slate-950/60 border border-slate-700 rounded-2xl p-4 flex gap-3"
                        >
                            <CheckCircle2 className="text-emerald-400 shrink-0" />
                            <span className="text-slate-200">{lesson}</span>
                        </div>
                    ))}
                </div>
                <p className="text-slate-300 mt-5">
                    Phần tiếp theo là{" "}
                    <strong className="text-cyan-300">
                        Phần 7 — Text Editor & Xử lý văn bản
                    </strong>
                    : Nano, Vim, sed, awk và các thao tác văn bản trong
                    terminal.
                </p>
            </div>
        </section>
    );
}

const questions = [
    {
        question:
            "Khi cần copy nhanh một file lẻ qua SSH, công cụ nào phù hợp nhất?",
        options: ["SCP", "Samba", "cron", "testparm"],
        correct: 0,
        explanation: "SCP đơn giản, dùng SSH và phù hợp copy file một lần.",
    },
    {
        question: "Rsync tốt hơn SCP ở điểm nào khi backup lặp lại?",
        options: [
            "Chỉ copy phần thay đổi, tiết kiệm thời gian và băng thông",
            "Không cần network",
            "Luôn nhanh hơn Samba trong mọi tình huống",
            "Tự tạo Windows share",
        ],
        correct: 0,
        explanation:
            "Rsync có incremental transfer, lần sau chỉ truyền phần khác biệt.",
    },
    {
        question: "Trong rsync, source có dấu / cuối nghĩa là gì?",
        options: [
            "Copy nội dung bên trong thư mục",
            "Copy cả thư mục cha",
            "Xóa thư mục đích",
            "Nén dữ liệu",
        ],
        correct: 0,
        explanation:
            "source/ copy nội dung bên trong; source copy cả thư mục source vào đích.",
    },
    {
        question:
            "Option nào của rsync giúp kiểm tra trước mà không copy/xóa thật?",
        options: ["--dry-run", "--delete", "-z", "-h"],
        correct: 0,
        explanation:
            "--dry-run cho biết rsync sẽ làm gì mà không thay đổi file thật.",
    },
    {
        question: "Option --delete trong rsync làm gì?",
        options: [
            "Xóa file ở đích nếu file đó không còn ở nguồn",
            "Xóa source",
            "Xóa SSH key",
            "Xóa log",
        ],
        correct: 0,
        explanation:
            "--delete đồng bộ đích giống nguồn hơn, nhưng rất nguy hiểm nếu source sai/rỗng.",
    },
    {
        question: "Samba phù hợp nhất cho tình huống nào?",
        options: [
            "Chia sẻ thư mục trong LAN cho Windows/macOS/Linux như ổ mạng",
            "Tải file từ internet",
            "Xem process CPU",
            "Đổi hostname",
        ],
        correct: 0,
        explanation:
            "Samba dùng SMB/CIFS, rất phù hợp chia sẻ thư mục trong mạng nội bộ.",
    },
    {
        question:
            "Sau khi sửa /etc/samba/smb.conf, nên chạy gì để kiểm tra config?",
        options: ["testparm", "rsync -P", "scp -v", "hostnamectl"],
        correct: 0,
        explanation:
            "testparm kiểm tra cú pháp và hiển thị cấu hình Samba đã parse.",
    },
    {
        question: "Lệnh nào thêm user Samba cho user Linux ubuntu?",
        options: [
            "sudo smbpasswd -a ubuntu",
            "sudo adduser samba ubuntu",
            "scp ubuntu samba",
            "testparm -a ubuntu",
        ],
        correct: 0,
        explanation:
            "smbpasswd -a tạo mật khẩu Samba cho user Linux đã tồn tại.",
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
                    câu về chia sẻ file qua mạng.
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
