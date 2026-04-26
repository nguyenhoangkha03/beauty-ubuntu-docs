import React, { useMemo, useState } from "react";
import {
    Archive,
    Package,
    Terminal,
    FileArchive,
    FolderArchive,
    Zap,
    Gauge,
    ShieldCheck,
    Search,
    Eye,
    Download,
    Upload,
    Copy,
    Info,
    CheckCircle2,
    XCircle,
    AlertTriangle,
    ChevronRight,
    RotateCcw,
    Sparkles,
    FileText,
    FolderTree,
    Settings,
    Wrench,
    Lock,
    KeyRound,
    Server,
    Clock,
    Bug,
    HardDrive,
    ListChecks,
    HelpCircle,
    Play,
    Database,
    FileWarning,
    GitCompare,
    Scissors,
    EyeOff,
    PackageCheck,
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
                                Archive · Compression · Backup
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 9
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 9.4
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" />{" "}
                        Backup, chia sẻ, chuyển file và tiết kiệm dung lượng
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Nén & Giải Nén File <br />
                        <span className="text-orange-500">
                            tar, zip, gzip, bz2, xz
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Bài này giúp bạn hiểu sự khác nhau giữa đóng gói và nén,
                        dùng <code className="text-orange-300">tar</code>,{" "}
                        <code className="text-orange-300">gzip</code>,{" "}
                        <code className="text-orange-300">bzip2</code>,{" "}
                        <code className="text-orange-300">xz</code>,{" "}
                        <code className="text-orange-300">zip</code>,{" "}
                        <code className="text-orange-300">7z</code>, viết hàm{" "}
                        <code className="text-orange-300">extract</code> thông
                        minh và script backup tự động.
                    </p>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <ArchiveConceptCard />
                    <FormatPicker />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="blue"
                        icon={<FolderTree size={22} />}
                        title="Tạo môi trường thực hành"
                        subtitle="Tạo thư mục docs, images, code, logs để luyện tar, gzip, zip và backup script."
                    />
                    <PracticeEnvSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="purple"
                        icon={<Archive size={22} />}
                        title="tar — đóng gói file"
                        subtitle="tar gộp nhiều file/thư mục thành archive, có thể kết hợp gzip, bzip2 hoặc xz để nén."
                    />
                    <TarSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="green"
                        icon={<FileArchive size={22} />}
                        title="gzip, bzip2, xz — nén file đơn lẻ"
                        subtitle="gzip nhanh nhất, bzip2 nén tốt hơn gzip, xz nén tốt nhất nhưng chậm hơn."
                    />
                    <SingleFileCompressSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="orange"
                        icon={<Package size={22} />}
                        title="zip & 7zip — đa nền tảng"
                        subtitle="zip phù hợp chia sẻ với Windows/macOS; 7z nén mạnh, hỗ trợ mật khẩu và nhiều định dạng."
                    />
                    <Zip7zSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="cyan"
                        icon={<Search size={22} />}
                        title="extract & peek — hàm thông minh"
                        subtitle="Thêm extract và peek vào ~/.bashrc để giải nén hoặc xem nội dung nhiều định dạng bằng một lệnh."
                    />
                    <SmartExtractSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="yellow"
                        icon={<Database size={22} />}
                        title="Script backup tự động"
                        subtitle="auto_backup.sh tạo file .tar.gz có timestamp, loại trừ file rác, ghi log, kiểm tra integrity và giữ 7 bản mới nhất."
                    />
                    <AutoBackupScript />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="red"
                        icon={<Bug size={22} />}
                        title="Lỗi thường gặp"
                        subtitle="Không đủ dung lượng, archive corrupt, permission denied, absolute path và lỗi encoding khi unzip."
                    />
                    <TroubleshootingSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="8"
                        color="pink"
                        icon={<GitCompare size={22} />}
                        title="So sánh tốc độ & kích thước"
                        subtitle="Chọn gzip khi cần nhanh, xz khi cần nhỏ nhất, zip khi chia sẻ, 7z khi cần mật khẩu/nén mạnh."
                    />
                    <BenchmarkSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="9"
                        color="teal"
                        icon={<ListChecks size={22} />}
                        title="Bảng lệnh & tóm tắt"
                        subtitle="Các lệnh tạo, giải nén, xem nội dung và xem file nén không cần giải nén."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <PackageCheck className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức bài 9.4
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Ôn lại tar, gzip, xz, zip, extract, exclude,
                                    zgrep và backup tự động.
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
                        Bạn đã biết nén, giải nén và backup file. Tiếp theo là
                        kiểm tra sức khỏe ổ đĩa và sửa lỗi filesystem.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                        Bài tiếp theo: 9.5 — Kiểm tra & sửa lỗi ổ đĩa{" "}
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
        purple: "bg-purple-500/20 text-purple-400",
        green: "bg-green-500/20 text-green-400",
        orange: "bg-orange-500/20 text-orange-400",
        cyan: "bg-cyan-500/20 text-cyan-400",
        yellow: "bg-yellow-500/20 text-yellow-400",
        red: "bg-red-500/20 text-red-400",
        pink: "bg-pink-500/20 text-pink-400",
        teal: "bg-teal-500/20 text-teal-400",
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

function ArchiveConceptCard() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-orange-500/15 text-orange-400 rounded-2xl flex items-center justify-center">
                    <Archive size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        Đóng gói khác nén
                    </h3>
                    <p className="text-slate-500 text-sm">
                        Archive vs Compression
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-slate-950 border border-blue-500/20 rounded-2xl p-5">
                    <div className="text-blue-400 font-bold mb-3 flex items-center gap-2">
                        <FolderArchive size={18} /> tar
                    </div>
                    <p className="text-sm text-slate-400">
                        Gộp nhiều file/thư mục thành một file archive. Bản thân{" "}
                        <code className="text-orange-300">.tar</code> không nén.
                    </p>
                </div>
                <div className="bg-slate-950 border border-green-500/20 rounded-2xl p-5">
                    <div className="text-green-400 font-bold mb-3 flex items-center gap-2">
                        <Zap size={18} /> gzip/xz/bzip2
                    </div>
                    <p className="text-sm text-slate-400">
                        Nén dữ liệu để giảm dung lượng. Thường kết hợp với tar
                        thành <code className="text-orange-300">.tar.gz</code>.
                    </p>
                </div>
            </div>
            <div className="bg-black border border-slate-800 rounded-2xl p-5 font-mono text-sm space-y-2">
                <div>
                    <span className="text-slate-500">.tar</span> = đóng gói
                </div>
                <div>
                    <span className="text-green-400">.tar.gz</span> = tar +
                    gzip, phổ biến nhất
                </div>
                <div>
                    <span className="text-cyan-400">.tar.xz</span> = tar + xz,
                    nhỏ nhất
                </div>
                <div>
                    <span className="text-purple-400">.zip</span> = đóng gói +
                    nén, đa nền tảng
                </div>
            </div>
        </div>
    );
}

function FormatPicker() {
    const [format, setFormat] = useState("tar.gz");
    const data = {
        "tar.gz": {
            icon: "📦",
            speed: 5,
            ratio: 3,
            popular: "Linux ✅",
            use: "Backup hằng ngày, nhanh và phổ biến",
            cmd: "tar -czf backup.tar.gz dir/",
        },
        "tar.bz2": {
            icon: "📘",
            speed: 3,
            ratio: 4,
            popular: "Linux",
            use: "Khi muốn nhỏ hơn gzip một chút",
            cmd: "tar -cjf backup.tar.bz2 dir/",
        },
        "tar.xz": {
            icon: "💎",
            speed: 2,
            ratio: 5,
            popular: "Linux/macOS",
            use: "Khi ưu tiên kích thước nhỏ nhất",
            cmd: "tar -cJf backup.tar.xz dir/",
        },
        zip: {
            icon: "🪟",
            speed: 4,
            ratio: 3,
            popular: "Đa nền tảng ✅",
            use: "Chia sẻ với Windows/macOS",
            cmd: "zip -r project.zip dir/",
        },
        "7z": {
            icon: "🔐",
            speed: 2,
            ratio: 5,
            popular: "Đa nền tảng",
            use: "Nén mạnh, có mật khẩu",
            cmd: "7z a -mx=9 archive.7z dir/",
        },
        zst: {
            icon: "⚡",
            speed: 5,
            ratio: 4,
            popular: "Mới, hiện đại",
            use: "Rất nhanh và nén tốt",
            cmd: "tar --zstd -cf archive.tar.zst dir/",
        },
    };
    const item = data[format];
    return (
        <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Gauge className="text-orange-400" /> Chọn định dạng phù hợp
            </h3>
            <p className="text-slate-400 mb-6">
                Bấm vào định dạng để xem tốc độ, tỷ lệ nén và lệnh mẫu.
            </p>
            <div className="grid grid-cols-3 gap-2 mb-5">
                {Object.keys(data).map((key) => (
                    <button
                        key={key}
                        onClick={() => setFormat(key)}
                        className={`p-3 rounded-xl border font-bold text-sm ${format === key ? "bg-orange-500 text-white border-orange-500" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"}`}
                    >
                        {key}
                    </button>
                ))}
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="font-bold text-white text-xl mb-2">
                    .{format}
                </div>
                <p className="text-slate-400 text-sm mb-4">{item.use}</p>
                <Rating label="Tốc độ nén" value={item.speed} />
                <Rating label="Tỷ lệ nén" value={item.ratio} />
                <div className="text-xs text-slate-500 mb-4">
                    Phổ biến: {item.popular}
                </div>
                <pre className="bg-black/50 border border-slate-800 rounded-xl p-4 text-sm text-green-400 overflow-x-auto">
                    <code>{item.cmd}</code>
                </pre>
            </div>
        </div>
    );
}

function Rating({ label, value }) {
    return (
        <div className="flex items-center justify-between mb-2 text-sm">
            <span className="text-slate-500">{label}</span>
            <span className="text-yellow-400">
                {"★".repeat(value)}
                <span className="text-slate-700">{"★".repeat(5 - value)}</span>
            </span>
        </div>
    );
}

function PracticeEnvSection() {
    return (
        <CodeBlock
            title="create-practice-env.sh"
            code={`mkdir -p ~/thuchanh/nen_file/{docs,images,code,logs}\ncd ~/thuchanh/nen_file\n\nfor i in {1..5}; do\n    echo "Nội dung file docs $i - $(date)" > docs/doc$i.txt\ndone\n\nfor i in {1..3}; do\n    dd if=/dev/urandom bs=1K count=100 of=images/img$i.png 2>/dev/null\ndone\n\ncat > code/app.py << 'EOF'\n#!/usr/bin/env python3\nimport os, sys\n\ndef main():\n    print("Hello from Python app!")\n    print(f"Running on: {sys.platform}")\n\nif __name__ == "__main__":\n    main()\nEOF\n\nfor i in {1..100}; do\n    echo "2026-02-18 $(printf '%02d' $((i % 24))):00:00 INFO Log entry $i" >> logs/system.log\ndone\n\ntree ~/thuchanh/nen_file/\ndu -sh ~/thuchanh/nen_file/`}
        />
    );
}

function TarSection() {
    const [tab, setTab] = useState("create");
    const tabs = [
        ["create", "Tạo archive"],
        ["list", "Xem nội dung"],
        ["extract", "Giải nén"],
        ["advanced", "Nâng cao"],
    ];
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                {tabs.map(([id, label]) => (
                    <button
                        key={id}
                        onClick={() => setTab(id)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold ${tab === id ? "bg-purple-500 text-white" : "bg-slate-900 text-slate-400 hover:text-slate-200"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="p-5">
                {tab === "create" && <TarCreate />}
                {tab === "list" && <TarList />}
                {tab === "extract" && <TarExtract />}
                {tab === "advanced" && <TarAdvanced />}
            </div>
        </div>
    );
}

function TarCreate() {
    return (
        <CodeBlock
            title="tar-create.sh"
            code={`cd ~/thuchanh/nen_file\n\n# Đóng gói không nén\ntar -cvf docs_archive.tar docs/\nls -lh docs_archive.tar\n\n# Đóng gói + gzip, phổ biến nhất\ntar -czvf docs_gzip.tar.gz docs/\ntar -czf docs_gzip.tar.gz docs/\n\n# Đóng gói + bzip2\ntar -cjvf docs_bzip2.tar.bz2 docs/\n\n# Đóng gói + xz, nén tốt nhất\ntar -cJvf docs_xz.tar.xz docs/\n\n# Nhiều thư mục\ntar -czf project.tar.gz docs/ code/ images/\n\n# Toàn bộ thư mục hiện tại\ntar -czf backup_$(date +%Y%m%d).tar.gz .\n\n# Backup giữ quyền\nsudo tar -czpf system_backup.tar.gz /etc/`}
        />
    );
}
function TarList() {
    return (
        <CodeBlock
            title="tar-list.sh"
            code={`tar -tvf docs_gzip.tar.gz\ntar -tzvf docs_gzip.tar.gz\ntar -tjvf docs_bzip2.tar.bz2\ntar -tJvf docs_xz.tar.xz\n\n# Đếm số file trong archive\ntar -tzf docs_gzip.tar.gz | wc -l\n\n# Tìm file .py trong archive\ntar -tzf project.tar.gz | grep "\\.py$"`}
        />
    );
}
function TarExtract() {
    return (
        <CodeBlock
            title="tar-extract.sh"
            code={`# Giải nén vào thư mục hiện tại\ntar -xzvf ~/thuchanh/nen_file/docs_gzip.tar.gz\n\n# Giải nén vào thư mục cụ thể\nmkdir /tmp/extract_here\ntar -xzvf ~/thuchanh/nen_file/docs_gzip.tar.gz -C /tmp/extract_here\n\n# .tar.bz2 và .tar.xz\ntar -xjvf docs_bzip2.tar.bz2 -C /tmp/\ntar -xJvf docs_xz.tar.xz -C /tmp/\n\n# Ubuntu hiện đại: tar tự nhận định dạng\ntar -xvf docs_gzip.tar.gz\ntar -xvf docs_bzip2.tar.bz2\ntar -xvf docs_xz.tar.xz\n\n# Giải nén file cụ thể\ntar -xzvf project.tar.gz docs/doc1.txt\ntar -xzvf project.tar.gz --wildcards "docs/*.txt"\n\n# Bỏ cấp thư mục\ntar -xzvf project.tar.gz --strip-components=1`}
        />
    );
}
function TarAdvanced() {
    return (
        <CodeBlock
            title="tar-advanced.sh"
            code={`# Loại trừ file/thư mục\ntar -czf backup.tar.gz /home/alice/ \\\n    --exclude='/home/alice/.cache' \\\n    --exclude='/home/alice/.local/share/Trash' \\\n    --exclude='*.tmp' \\\n    --exclude='*.log' \\\n    --exclude='node_modules'\n\n# Exclude từ file\ncat > /tmp/exclude_list.txt << 'EOF'\n.cache\n.local/share/Trash\n*.tmp\n*.log\nnode_modules\n__pycache__\n.git\nEOF\ntar -czf backup.tar.gz /home/alice/ --exclude-from=/tmp/exclude_list.txt\n\n# Chỉ file mới hơn ngày chỉ định\ntar -czf changes.tar.gz --newer="2026-02-01" /home/alice/\n\n# Thêm file vào .tar chưa nén\ntar -rf docs_archive.tar docs/doc5.txt\n\n# Nén cực mạnh với xz\ntar -cJvf ultra.tar.xz --options xz:compression=9 docs/\n\n# Timestamp tự động\ntar -czf "backup_$(hostname)_$(date +%Y%m%d_%H%M%S).tar.gz" /home/alice/\n\n# Backup qua SSH\ntar -czf - /home/alice/ | ssh user@server "cat > /backup/home.tar.gz"\nssh user@server "tar -czf - /etc/" | tar -xzf - -C /tmp/remote_etc/`}
        />
    );
}

function SingleFileCompressSection() {
    const [tab, setTab] = useState("gzip");
    const tabs = [
        ["gzip", "gzip"],
        ["bzip2", "bzip2"],
        ["xz", "xz"],
        ["zstd", "zstd & khác"],
    ];
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                {tabs.map(([id, label]) => (
                    <button
                        key={id}
                        onClick={() => setTab(id)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold ${tab === id ? "bg-green-500 text-white" : "bg-slate-900 text-slate-400 hover:text-slate-200"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="p-5">
                {tab === "gzip" && <GzipSection />}
                {tab === "bzip2" && <Bzip2Section />}
                {tab === "xz" && <XzSection />}
                {tab === "zstd" && <ZstdSection />}
            </div>
        </div>
    );
}

function GzipSection() {
    return (
        <CodeBlock
            title="gzip.sh"
            code={`cp logs/system.log /tmp/test.log\n\n# Nén: file gốc bị thay bằng .gz\ngzip /tmp/test.log\n\n# Giải nén\ngzip -d /tmp/test.log.gz\ngunzip /tmp/test.log.gz\n\n# Giữ file gốc\ngzip -k /tmp/test.log\n\n# Mức nén 1-9\ngzip -1 /tmp/test.log\ngzip -9 /tmp/test.log\n\n# Xem không giải nén\nzcat /tmp/test.log.gz\nzless /tmp/test.log.gz\nzgrep "ERROR" /tmp/test.log.gz\n\n# Thông tin và kiểm tra\ngzip -l /tmp/test.log.gz\ngzip -t /tmp/test.log.gz\n\n# Nén nhiều file\ngzip /tmp/file1.txt /tmp/file2.txt /tmp/file3.txt`}
            note="gzip chỉ nén từng file riêng lẻ. Muốn nén thư mục, dùng tar trước: tar -czf."
        />
    );
}
function Bzip2Section() {
    return (
        <CodeBlock
            title="bzip2.sh"
            code={`cp logs/system.log /tmp/test_bz2.log\n\nbzip2 /tmp/test_bz2.log\nbzip2 -k /tmp/test_bz2.log\nbzip2 -d /tmp/test_bz2.log.bz2\nbunzip2 /tmp/test_bz2.log.bz2\n\nbzcat /tmp/test_bz2.log.bz2\nbzless /tmp/test_bz2.log.bz2\nbzgrep "ERROR" /tmp/test_bz2.log.bz2\n\nbzip2 -9 /tmp/test_bz2.log\nbzip2 -t /tmp/test_bz2.log.bz2\nbzip2 -v /tmp/test_bz2.log`}
        />
    );
}
function XzSection() {
    return (
        <CodeBlock
            title="xz.sh"
            code={`cp logs/system.log /tmp/test_xz.log\n\nxz /tmp/test_xz.log\nxz -k /tmp/test_xz.log\nxz -d /tmp/test_xz.log.xz\nunxz /tmp/test_xz.log.xz\n\nxzcat /tmp/test_xz.log.xz\nxzless /tmp/test_xz.log.xz\nxzgrep "ERROR" /tmp/test_xz.log.xz\n\nxz -9e /tmp/test_xz.log\nxz -0 /tmp/test_xz.log\nxz -3 /tmp/test_xz.log\n\nxz -l /tmp/test_xz.log.xz`}
        />
    );
}
function ZstdSection() {
    return (
        <CodeBlock
            title="other-formats.sh"
            code={`sudo apt install zstd lzma unrar -y\n\n# zstd rất nhanh\nzstd /tmp/test.log\nzstd -19 /tmp/test.log\nzstd -T4 /tmp/test.log\nunzstd /tmp/test.log.zst\nzstd -d /tmp/test.log.zst\n\n# tar + zstd\ntar -I zstd -cvf archive.tar.zst docs/\ntar --zstd -cvf archive.tar.zst docs/\n\n# rar chỉ giải nén\nunrar x archive.rar\nunrar l archive.rar\nunrar t archive.rar\n\n# lzma cũ\nlzma /tmp/test.log\nunlzma /tmp/test.log.lzma`}
        />
    );
}

function Zip7zSection() {
    const [tab, setTab] = useState("zip");
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                <button
                    onClick={() => setTab("zip")}
                    className={`px-4 py-2 rounded-xl text-sm font-bold ${tab === "zip" ? "bg-orange-500 text-white" : "bg-slate-900 text-slate-400"}`}
                >
                    zip/unzip
                </button>
                <button
                    onClick={() => setTab("7z")}
                    className={`px-4 py-2 rounded-xl text-sm font-bold ${tab === "7z" ? "bg-orange-500 text-white" : "bg-slate-900 text-slate-400"}`}
                >
                    7zip
                </button>
            </div>
            <div className="p-5">
                {tab === "zip" ? <ZipSection /> : <SevenZipSection />}
            </div>
        </div>
    );
}

function ZipSection() {
    return (
        <CodeBlock
            title="zip-unzip.sh"
            code={`sudo apt install zip unzip -y\n\n# Nén file và thư mục\nzip docs_single.zip docs/doc1.txt\nzip docs_multi.zip docs/doc1.txt docs/doc2.txt docs/doc3.txt\nzip -r docs_folder.zip docs/\nzip -r project.zip docs/ code/ logs/\nzip -r backup.zip .\n\n# Mức nén\nzip -0 archive.zip docs/\nzip -9 archive.zip docs/\n\n# Thêm/update/xóa file trong zip\nzip project.zip images/img1.png\nzip project.zip docs/doc1.txt\nzip -d project.zip docs/doc1.txt\n\n# Split zip\nzip -r -s 100m large_backup.zip large_folder/\n\n# Mật khẩu\nzip -re secret.zip docs/\n\n# Xem và giải nén\nunzip -l project.zip\nunzip -v project.zip\nunzip project.zip\nunzip project.zip -d /tmp/extracted/\nunzip project.zip docs/doc1.txt\nunzip project.zip "docs/*.txt"\nunzip -o project.zip -d /tmp/\nunzip -t project.zip\nunzip -p project.zip docs/doc1.txt`}
        />
    );
}
function SevenZipSection() {
    return (
        <CodeBlock
            title="7zip.sh"
            code={`sudo apt install p7zip-full p7zip-rar -y\n\n# Nén\n7z a archive.7z docs/\n7z a -mx=9 archive_ultra.7z docs/\n\n# Nén với mật khẩu + mã hóa tên file\n7z a -p -mhe=on secret.7z docs/\n\n# Xem, test, giải nén\n7z l archive.7z\n7z t archive.7z\n7z x archive.7z\n7z x archive.7z -o/tmp/extracted/\n7z e archive.7z -o/tmp/\n\n# 7z xử lý nhiều định dạng\n7z x file.zip\n7z x file.rar\n7z x file.tar.gz\n7z x file.tar.bz2\n7z x file.tar.xz\n7z x file.iso`}
        />
    );
}

function SmartExtractSection() {
    return (
        <CodeBlock
            title="~/.bashrc extract + peek"
            code={`cat >> ~/.bashrc << 'EOF'\n\nextract() {\n    if [ -z "$1" ]; then\n        echo "Dùng: extract <file>"\n        echo "Hỗ trợ: tar.gz, tar.bz2, tar.xz, zip, rar, 7z, gz, bz2, xz..."\n        return 1\n    fi\n\n    if [ ! -f "$1" ]; then\n        echo "❌ File không tồn tại: $1"\n        return 1\n    fi\n\n    echo "📦 Giải nén: $1"\n\n    case "$1" in\n        *.tar.gz|*.tgz)    tar -xzvf "$1"          ;;\n        *.tar.bz2|*.tbz2)  tar -xjvf "$1"          ;;\n        *.tar.xz|*.txz)    tar -xJvf "$1"          ;;\n        *.tar.zst)         tar --zstd -xvf "$1"    ;;\n        *.tar)             tar -xvf  "$1"          ;;\n        *.gz)              gunzip    "$1"          ;;\n        *.bz2)             bunzip2   "$1"          ;;\n        *.xz)              unxz      "$1"          ;;\n        *.zst)             unzstd    "$1"          ;;\n        *.zip)             unzip     "$1"          ;;\n        *.rar)             unrar x   "$1"          ;;\n        *.7z)              7z x      "$1"          ;;\n        *.Z)               uncompress "$1"         ;;\n        *.lzma)            unlzma    "$1"          ;;\n        *.deb)             ar x      "$1"          ;;\n        *.rpm)             rpm2cpio "$1" | cpio -idmv ;;\n        *.iso)             7z x      "$1"          ;;\n        *)\n            echo "❌ Không nhận ra định dạng: $1"\n            echo "Thử: file $1"\n            return 1\n            ;;\n    esac\n}\n\npeek() {\n    case "$1" in\n        *.tar.gz|*.tgz)    tar -tzvf "$1"   ;;\n        *.tar.bz2|*.tbz2)  tar -tjvf "$1"   ;;\n        *.tar.xz|*.txz)    tar -tJvf "$1"   ;;\n        *.tar)             tar -tvf  "$1"   ;;\n        *.zip)             unzip -l  "$1"   ;;\n        *.7z)              7z l      "$1"   ;;\n        *.rar)             unrar l   "$1"   ;;\n        *) echo "Không hỗ trợ: $1" ;;\n    esac\n}\nEOF\n\nsource ~/.bashrc\nextract docs_gzip.tar.gz\nextract project.zip\npeek archive.7z`}
        />
    );
}

function AutoBackupScript() {
    return (
        <CodeBlock
            title="auto_backup.sh"
            code={`#!/bin/bash\nSRC="${"{"}1:-$HOME{'}'}"\nDEST="${"{"}2:-/tmp/backups{'}'}"\nDATE=$(date +%Y%m%d_%H%M%S)\nHOSTNAME=$(hostname -s)\nBACKUP_NAME="${"{"}HOSTNAME{'}'}_backup_${"{"}DATE{'}'}.tar.gz"\nBACKUP_PATH="${"{"}DEST{'}'}/${"{"}BACKUP_NAME{'}'}"\nLOG_FILE="${"{"}DEST{'}'}/backup_log.txt"\n\nRED='\\033[0;31m'; GREEN='\\033[0;32m'; YELLOW='\\033[1;33m'; BLUE='\\033[0;34m'; NC='\\033[0m'\n\n[ ! -d "$SRC" ] && echo -e "${"{"}RED{'}'}❌ Thư mục nguồn không tồn tại: $SRC${"{"}NC{'}'}" && exit 1\nmkdir -p "$DEST"\n\necho -e "${"{"}BLUE{'}'}╔══════════════════════════════════════╗${"{"}NC{'}'}"\necho -e "${"{"}BLUE{'}'}║         AUTO BACKUP SCRIPT           ║${"{"}NC{'}'}"\necho -e "${"{"}BLUE{'}'}╚══════════════════════════════════════╝${"{"}NC{'}'}"\necho -e "  Nguồn:  ${"{"}YELLOW{'}'}$SRC${"{"}NC{'}'}"\necho -e "  Đích:   ${"{"}YELLOW{'}'}$DEST${"{"}NC{'}'}"\necho -e "  File:   ${"{"}YELLOW{'}'}$BACKUP_NAME${"{"}NC{'}'}"\n\nSRC_SIZE=$(du -sh "$SRC" 2>/dev/null | cut -f1)\necho -e "  Dung lượng nguồn: ${"{"}SRC_SIZE{'}'}"\n\nSTART_TIME=$(date +%s)\necho -e "\\n${"{"}YELLOW{'}'}▶ Đang backup...${"{"}NC{'}'}"\n\ntar -czf "$BACKUP_PATH" \\\n    --exclude='*.tmp' \\\n    --exclude='*.log' \\\n    --exclude='.cache' \\\n    --exclude='.local/share/Trash' \\\n    --exclude='node_modules' \\\n    --exclude='__pycache__' \\\n    --exclude='.git/objects' \\\n    "$SRC" 2>/dev/null\n\nEXIT_CODE=$?\nEND_TIME=$(date +%s)\nDURATION=$((END_TIME - START_TIME))\n\nif [ $EXIT_CODE -eq 0 ]; then\n    BACKUP_SIZE=$(du -sh "$BACKUP_PATH" | cut -f1)\n    echo -e "${"{"}GREEN{'}'}✅ Backup thành công!${"{"}NC{'}'}"\n    echo -e "   Kích thước: ${"{"}BACKUP_SIZE{'}'} (từ ${"{"}SRC_SIZE{'}'})"\n    echo -e "   Thời gian:  ${"{"}DURATION{'}'} giây"\n    echo -e "   Lưu tại:    ${"{"}BACKUP_PATH{'}'}"\n    echo "$(date '+%Y-%m-%d %H:%M:%S') SUCCESS $BACKUP_NAME ${"{"}BACKUP_SIZE{'}'} ${"{"}DURATION{'}'}s" >> "$LOG_FILE"\nelse\n    echo -e "${"{"}RED{'}'}❌ Backup thất bại! (exit code: $EXIT_CODE)${"{"}NC{'}'}"\n    echo "$(date '+%Y-%m-%d %H:%M:%S') FAILED $BACKUP_NAME" >> "$LOG_FILE"\n    exit 1\nfi\n\necho -e "\\n${"{"}YELLOW{'}'}▶ Dọn backup cũ (giữ 7 bản)...${"{"}NC{'}'}"\nls -t "$DEST"/*.tar.gz 2>/dev/null | tail -n +8 | while read old_backup; do\n    rm "$old_backup"\n    echo -e "  ${"{"}RED{'}'}Đã xóa:${"{"}NC{'}'} $(basename $old_backup)"\ndone\n\necho -e "\\n${"{"}YELLOW{'}'}▶ Xác minh integrity...${"{"}NC{'}'}"\nif tar -tzf "$BACKUP_PATH" > /dev/null 2>&1; then\n    echo -e "${"{"}GREEN{'}'}  ✅ Archive hợp lệ${"{"}NC{'}'}"\nelse\n    echo -e "${"{"}RED{'}'}  ❌ Archive bị hỏng!${"{"}NC{'}'}"\n    exit 2\nfi\n\nls -lh "$DEST"/*.tar.gz 2>/dev/null | awk '{printf "  %s  %s\\n", $5, $9}'\n\n# Dùng:\n# chmod +x ~/auto_backup.sh\n# ~/auto_backup.sh ~/thuchanh /tmp/mybackups\n# Cron:\n# 0 2 * * * /home/alice/auto_backup.sh /home/alice /backup/daily >> /var/log/backup.log 2>&1`}
        />
    );
}

function TroubleshootingSection() {
    const [tab, setTab] = useState("space");
    const tabs = [
        ["space", "No space"],
        ["corrupt", "Corrupt"],
        ["permission", "Permission"],
        ["path", "Absolute path"],
        ["encoding", "Encoding"],
    ];
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                {tabs.map(([id, label]) => (
                    <button
                        key={id}
                        onClick={() => setTab(id)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold ${tab === id ? "bg-red-500 text-white" : "bg-slate-900 text-slate-400 hover:text-slate-200"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="p-5">
                {tab === "space" && (
                    <CodeBlock
                        title="no-space-left.sh"
                        code={`tar -xzvf huge_archive.tar.gz\n# tar: ./bigfile: Cannot write: No space left on device\n\ndf -h\ndu -sh ~/* | sort -rh | head -5`}
                    />
                )}
                {tab === "corrupt" && (
                    <CodeBlock
                        title="corrupt-archive.sh"
                        code={`tar -xzvf corrupt.tar.gz\n# gzip: stdin: unexpected end of file\n# tar: Unexpected EOF in archive\n\ngzip -t corrupt.tar.gz\nmd5sum corrupt.tar.gz\n\n# Cố gắng giải nén phần còn đọc được\ntar -xzvf corrupt.tar.gz --ignore-zeros 2>/dev/null`}
                    />
                )}
                {tab === "permission" && (
                    <CodeBlock
                        title="permission-denied.sh"
                        code={`tar -xzvf system_backup.tar.gz\n# tar: etc/passwd: Cannot open: Permission denied\n\nsudo tar -xzvf system_backup.tar.gz`}
                    />
                )}
                {tab === "path" && (
                    <CodeBlock
                        title="absolute-path-warning.sh"
                        code={`tar -xzvf abs_path.tar.gz\n# tar: Removing leading / from member names\n# /etc/hostname\n\n# Đây là cảnh báo bình thường.\n# tar sẽ giải nén thành ./etc/hostname để tránh ghi đè trực tiếp /etc/hostname.`}
                    />
                )}
                {tab === "encoding" && (
                    <CodeBlock
                        title="unzip-encoding.sh"
                        code={`unzip vietnamese.zip\n# bad filename or UTF-8 encoding\n\nunzip -O CP850 vietnamese.zip\nunzip -O UTF-8 vietnamese.zip\n\n# Hoặc dùng 7z\n7z x vietnamese.zip`}
                    />
                )}
            </div>
        </div>
    );
}

function BenchmarkSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="benchmark-compression.sh"
                code={`dd if=/dev/urandom bs=1M count=100 | tr -dc 'a-zA-Z0-9 \\n' > /tmp/testfile.txt\ncd /tmp\n\ntime gzip -k testfile.txt -c > testfile.gz\ntime bzip2 -k testfile.txt -c > testfile.bz2\ntime xz -k testfile.txt -c > testfile.xz\n\nls -lh testfile* | awk '{print $5, $9}'\n\n# Kết luận:\n# Cần nhanh?     → gzip  (tar -czf)\n# Cần nhỏ nhất? → xz     (tar -cJf)\n# Cân bằng?      → bzip2  (tar -cjf)\n# Chia sẻ?       → zip\n# Bảo mật?       → 7z với password`}
            />
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 h-fit">
                <h4 className="font-bold text-white mb-4">
                    Kết quả mẫu với file 100MB
                </h4>
                <CompareBar
                    label="Gốc"
                    size="100M"
                    width="100%"
                    color="bg-slate-500"
                />
                <CompareBar
                    label="gzip"
                    size="38M"
                    width="38%"
                    color="bg-green-500"
                />
                <CompareBar
                    label="bzip2"
                    size="34M"
                    width="34%"
                    color="bg-blue-500"
                />
                <CompareBar
                    label="xz"
                    size="28M"
                    width="28%"
                    color="bg-orange-500"
                />
            </div>
        </div>
    );
}

function CompareBar({ label, size, width, color }) {
    return (
        <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-400">{label}</span>
                <code className="text-orange-300">{size}</code>
            </div>
            <div className="h-4 bg-slate-900 rounded-full overflow-hidden">
                <div
                    className={`${color} h-full rounded-full`}
                    style={{ width }}
                />
            </div>
        </div>
    );
}

function SummaryGrid() {
    const groups = [
        {
            title: "Tạo",
            rows: [
                ["tar -czf", ".tar.gz"],
                ["tar -cjf", ".tar.bz2"],
                ["tar -cJf", ".tar.xz"],
                ["tar -cf", ".tar"],
                ["zip -r", ".zip"],
                ["7z a", ".7z"],
            ],
        },
        {
            title: "Giải nén",
            rows: [
                ["tar -xzf", ".tar.gz"],
                ["tar -xjf", ".tar.bz2"],
                ["tar -xJf", ".tar.xz"],
                ["tar -xf", "tự detect"],
                ["unzip", ".zip"],
                ["7z x", ".7z/rar/iso"],
            ],
        },
        {
            title: "Xem nội dung",
            rows: [
                ["tar -tzf", ".tar.gz"],
                ["tar -tjf", ".tar.bz2"],
                ["unzip -l", ".zip"],
                ["7z l", ".7z"],
                ["peek", "hàm thông minh"],
            ],
        },
        {
            title: "Không giải nén",
            rows: [
                ["zcat", "xem .gz"],
                ["zless", "less .gz"],
                ["zgrep", "grep .gz"],
                ["bzcat", "xem .bz2"],
                ["xzcat", "xem .xz"],
            ],
        },
        {
            title: "Mẹo",
            rows: [
                ["--exclude", "loại trừ"],
                ["-C", "giải nén tới thư mục"],
                ["-k", "giữ file gốc"],
                ["-9", "nén mạnh"],
                ["extract", "giải nén mọi định dạng"],
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
        question: "tar -czf và tar -cJf khác nhau ở điểm nào?",
        options: [
            "-z dùng gzip, -J dùng xz",
            "-z giải nén, -J xóa file",
            "Không khác nhau",
            "-z dùng zip, -J dùng jar",
        ],
        correct: 0,
        explanation:
            "tar -czf tạo .tar.gz bằng gzip; tar -cJf tạo .tar.xz bằng xz, thường nhỏ hơn nhưng chậm hơn.",
    },
    {
        question: "Làm sao giải nén file .tar.gz vào /opt/myapp/?",
        options: [
            "tar -xzf file.tar.gz -C /opt/myapp/",
            "gzip file.tar.gz /opt/myapp",
            "zip -x file.tar.gz /opt/myapp",
            "tar -czf file.tar.gz /opt/myapp",
        ],
        correct: 0,
        explanation:
            "-x giải nén, -z gzip, -f file archive, -C chỉ định thư mục đích.",
    },
    {
        question: "Lệnh nào xem nội dung archive .zip mà không giải nén?",
        options: [
            "zip -r file.zip",
            "unzip -l file.zip",
            "gzip -l file.zip",
            "tar -tf file.zip",
        ],
        correct: 1,
        explanation: "unzip -l liệt kê nội dung file zip.",
    },
    {
        question: "gzip -k file.txt nghĩa là gì?",
        options: [
            "Nén và giữ file gốc",
            "Xóa file gốc ngay",
            "Giải nén file",
            "Kiểm tra file hỏng",
        ],
        correct: 0,
        explanation: "-k = keep, giữ file gốc và tạo thêm file.txt.gz.",
    },
    {
        question: "Làm sao backup /etc nhưng loại trừ *.bak và thư mục ssl/?",
        options: [
            "tar -czf etc.tar.gz /etc --exclude='*.bak' --exclude='/etc/ssl'",
            "zip -d /etc ssl",
            "gzip --exclude /etc",
            "tar -xzf /etc --exclude",
        ],
        correct: 0,
        explanation:
            "tar hỗ trợ --exclude để bỏ file/thư mục khỏi archive khi tạo backup.",
    },
    {
        question: 'zgrep "ERROR" file.log.gz có làm được không?',
        options: [
            "Có, grep trực tiếp trong file .gz không cần giải nén thủ công",
            "Không, phải gunzip trước",
            "Chỉ dùng cho zip",
            "Chỉ dùng cho .xz",
        ],
        correct: 0,
        explanation:
            "zgrep giúp tìm nội dung trong file gzip mà không cần giải nén ra file thường.",
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
