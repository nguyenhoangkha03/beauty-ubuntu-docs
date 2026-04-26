import React, { useMemo, useState } from "react";
import {
    Terminal,
    ShieldAlert,
    SlidersHorizontal,
    ToggleLeft,
    Settings,
    Bug,
    Siren,
    LogOut,
    FileText,
    Database,
    Play,
    Copy,
    Info,
    CheckCircle2,
    XCircle,
    AlertTriangle,
    ChevronRight,
    RotateCcw,
    Sparkles,
    HelpCircle,
    Code2,
    ClipboardList,
    Wrench,
    Trash2,
    Keyboard,
    Activity,
    ScrollText,
    FolderArchive,
    Server,
    Lock,
    EyeOff,
    PackageCheck,
    ListChecks,
    ArrowRight,
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
                                Bash Script · Arguments · Error Handling
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 8
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 8.6
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" /> Viết
                        Bash Script chắc chắn như production tool
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Xử Lý Tham Số <br />
                        <span className="text-orange-500">
                            Và Lỗi Trong Script
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Bài này giúp script của bạn rõ tham số, có{" "}
                        <code className="text-orange-300">--help</code>, dừng
                        khi lỗi, dọn dẹp file tạm, trả exit code chuẩn và ghi
                        log chuyên nghiệp.
                    </p>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <WhyErrorHandlingCard />
                    <ProductionChecklist />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="blue"
                        icon={<Keyboard size={22} />}
                        title="Xử lý tham số đơn giản"
                        subtitle="Dùng $1, $2, $# khi script chỉ cần vài tham số vị trí rõ ràng."
                    />
                    <SimpleArgsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="green"
                        icon={<SlidersHorizontal size={22} />}
                        title="getopts – Tham số dạng cờ"
                        subtitle="getopts xử lý tham số kiểu Unix như -s value, -d value, -p, -q, -h."
                    />
                    <GetoptsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="purple"
                        icon={<Settings size={22} />}
                        title="Tham số dạng dài --option"
                        subtitle="Dùng vòng while + case để xử lý tham số dài như --env=production, --branch=main, --restart."
                    />
                    <LongOptionSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="orange"
                        icon={<Bug size={22} />}
                        title="set – Bẫy lỗi tự động"
                        subtitle="set -euo pipefail là bộ ba nên đặt đầu script production để lỗi không bị nuốt âm thầm."
                    />
                    <SetSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="pink"
                        icon={<Siren size={22} />}
                        title="trap – Bẫy sự kiện"
                        subtitle="trap cho phép chạy hàm khi script thoát, gặp lỗi, bị Ctrl+C hoặc bị kill."
                    />
                    <TrapSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="cyan"
                        icon={<LogOut size={22} />}
                        title="Exit Code – Mã thoát"
                        subtitle="Exit code giúp script khác, cron job hoặc CI/CD biết script thành công hay lỗi loại nào."
                    />
                    <ExitCodeSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="yellow"
                        icon={<ScrollText size={22} />}
                        title="Ghi log chuyên nghiệp"
                        subtitle="Script chạy ngầm cần log rõ thời gian, mức độ DEBUG/INFO/WARN/ERROR và có log rotation."
                    />
                    <LoggingSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="8"
                        color="red"
                        icon={<Database size={22} />}
                        title="Script hoàn chỉnh – db_backup.sh"
                        subtitle="Tổng hợp: getopts, set -euo pipefail, trap, log, validate input, mysqldump, gzip và xóa backup cũ."
                    />
                    <CompleteScriptSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="9"
                        color="teal"
                        icon={<ListChecks size={22} />}
                        title="Tóm tắt nhanh"
                        subtitle="Các cú pháp tham số, set, trap, exit code và thực hành tốt cần nhớ sau bài 8.6."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <PackageCheck className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức bài 8.6
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Ôn lại getopts, set, trap, exit code, log và
                                    tham số dài.
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
                        Phần Shell Scripting gần hoàn tất. Bài cuối sẽ đưa
                        script vào lịch chạy tự động.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                        Bài tiếp theo: 8.7 — Cron Job tự động hóa theo lịch{" "}
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
        purple: "bg-purple-500/20 text-purple-400",
        orange: "bg-orange-500/20 text-orange-400",
        pink: "bg-pink-500/20 text-pink-400",
        cyan: "bg-cyan-500/20 text-cyan-400",
        yellow: "bg-yellow-500/20 text-yellow-400",
        red: "bg-red-500/20 text-red-400",
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

function WhyErrorHandlingCard() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-red-500/15 text-red-400 rounded-2xl flex items-center justify-center">
                    <ShieldAlert size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        Tại sao cần xử lý lỗi?
                    </h3>
                    <p className="text-slate-500 text-sm">
                        Script càng tự động càng phải an toàn
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-950 border border-red-500/20 rounded-2xl p-5">
                    <div className="text-red-400 font-bold mb-3 flex items-center gap-2">
                        <XCircle size={18} /> Script tệ
                    </div>
                    <ul className="space-y-3 text-sm text-slate-400">
                        <li>Chạy ngầm, không biết thành công hay thất bại.</li>
                        <li>Lỗi giữa chừng vẫn chạy tiếp.</li>
                        <li>Xóa nhầm file vì thiếu kiểm tra.</li>
                        <li>Không có hướng dẫn dùng.</li>
                    </ul>
                </div>
                <div className="bg-slate-950 border border-green-500/20 rounded-2xl p-5 shadow-[0_0_30px_rgba(34,197,94,0.06)]">
                    <div className="text-green-400 font-bold mb-3 flex items-center gap-2">
                        <CheckCircle2 size={18} /> Script tốt
                    </div>
                    <ul className="space-y-3 text-sm text-slate-400">
                        <li>
                            Tham số rõ ràng, có{" "}
                            <code className="text-orange-300">--help</code>.
                        </li>
                        <li>Gặp lỗi thì dừng và báo lý do.</li>
                        <li>Dọn file tạm dù thoát bình thường hay lỗi.</li>
                        <li>Ghi log để kiểm tra sau.</li>
                    </ul>
                </div>
            </div>
            <div className="mt-5 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 text-sm text-blue-100 flex gap-3">
                <Info size={20} className="text-blue-400 shrink-0 mt-0.5" />
                <p>
                    Với script backup, deploy, xóa file, hoặc chạy cron, xử lý
                    lỗi không phải “phần phụ” mà là phần bảo vệ dữ liệu.
                </p>
            </div>
        </div>
    );
}

function ProductionChecklist() {
    const items = [
        [HelpCircle, "Có hướng dẫn", "-h hoặc --help"],
        [SlidersHorizontal, "Tham số rõ", "getopts / --option"],
        [Bug, "Dừng khi lỗi", "set -euo pipefail"],
        [Trash2, "Dọn file tạm", "trap cleanup EXIT"],
        [LogOut, "Exit code chuẩn", "exit 0/1/2/127"],
        [ScrollText, "Ghi log", "INFO/WARN/ERROR"],
    ];
    return (
        <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <ClipboardList className="text-orange-400" /> Checklist script
                production
            </h3>
            <p className="text-slate-400 mb-6">
                Một script tốt nên có ít nhất các mảnh ghép này.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
                {items.map(([Icon, title, desc]) => (
                    <div
                        key={title}
                        className="bg-slate-950 border border-slate-800 rounded-2xl p-4"
                    >
                        <Icon className="text-orange-400 mb-3" size={22} />
                        <div className="font-bold text-white text-sm">
                            {title}
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                            <code>{desc}</code>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-5 bg-black/40 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-400">
                ./backup.sh --source /var/www --dest /backup --days 7
            </div>
        </div>
    );
}

function SimpleArgsSection() {
    const [args, setArgs] = useState("/var/www /backup/www");
    const parts = args.trim() ? args.trim().split(/\s+/) : [];
    const validCount = parts.length === 2;
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="copy_file.sh"
                code={`#!/bin/bash\n\nif [ $# -ne 2 ]; then\n    echo "Lỗi: Cần đúng 2 tham số!"\n    echo "Dùng: $0 <nguồn> <đích>"\n    echo "Ví dụ: $0 /var/www /backup/www"\n    exit 1\nfi\n\nNGUON=$1\nDICH=$2\n\nif [ ! -e "$NGUON" ]; then\n    echo "Lỗi: '$NGUON' không tồn tại!"\n    exit 1\nfi\n\nif [ ! -d "$DICH" ]; then\n    echo "Lỗi: '$DICH' không phải thư mục!"\n    exit 1\nfi\n\ncp -r "$NGUON" "$DICH"\necho "✓ Đã copy $NGUON → $DICH"`}
            />
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 h-fit">
                <h4 className="font-bold text-white mb-4">Mô phỏng $# $1 $2</h4>
                <input
                    value={args}
                    onChange={(e) => setArgs(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500 mb-5"
                    placeholder="/var/www /backup/www"
                />
                <div className="space-y-3 mb-5">
                    <InfoRow label="$#" value={String(parts.length)} />
                    <InfoRow label="$1" value={parts[0] || "(trống)"} />
                    <InfoRow label="$2" value={parts[1] || "(trống)"} />
                </div>
                <div
                    className={`rounded-xl border p-4 text-sm flex gap-3 ${validCount ? "bg-green-500/10 border-green-500/20 text-green-200" : "bg-red-500/10 border-red-500/20 text-red-200"}`}
                >
                    {validCount ? (
                        <CheckCircle2 className="text-green-400" size={18} />
                    ) : (
                        <XCircle className="text-red-400" size={18} />
                    )}
                    {validCount
                        ? "Đủ đúng 2 tham số."
                        : "Sai số tham số. Script nên in hướng dẫn và exit 1."}
                </div>
            </div>
        </div>
    );
}

function InfoRow({ label, value }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex items-center justify-between gap-3">
            <code className="text-orange-300 font-bold">{label}</code>
            <span className="text-sm text-slate-300 text-right">{value}</span>
        </div>
    );
}

function GetoptsSection() {
    const [preview, setPreview] = useState(true);
    const [quiet, setQuiet] = useState(false);
    return (
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-6">
            <CodeBlock
                title="backup.sh"
                code={`#!/bin/bash\n\nNGUON=""\nDICH="/backup"\nSO_NGAY=7\nXEM_TRUOC=false\nCHE_DO_IM=false\n\nhuong_dan() {\n    cat << EOF\nDùng: $0 [tuỳ_chọn]\n\nTuỳ chọn:\n  -s <thư_mục>   Thư mục nguồn (bắt buộc)\n  -d <thư_mục>   Thư mục đích  (mặc định: /backup)\n  -n <số_ngày>   Xoá backup cũ hơn N ngày (mặc định: 7)\n  -p             Chỉ xem trước, không chạy thật\n  -q             Chế độ im lặng\n  -h             Hiện hướng dẫn này\nEOF\n}\n\nwhile getopts "s:d:n:pqh" opt; do\n    case $opt in\n        s) NGUON=$OPTARG ;;\n        d) DICH=$OPTARG ;;\n        n) SO_NGAY=$OPTARG ;;\n        p) XEM_TRUOC=true ;;\n        q) CHE_DO_IM=true ;;\n        h) huong_dan; exit 0 ;;\n        ?) echo "Tham số không hợp lệ: -$OPTARG"; exit 1 ;;\n    esac\ndone\n\nif [ -z "$NGUON" ]; then\n    echo "Lỗi: Thiếu thư mục nguồn (-s)!"\n    echo "Dùng -h để xem hướng dẫn"\n    exit 1\nfi\n\n$CHE_DO_IM || echo "Nguồn : $NGUON"\n$CHE_DO_IM || echo "Đích   : $DICH"\n$CHE_DO_IM || echo "Giữ    : $SO_NGAY ngày"\n\nif $XEM_TRUOC; then\n    echo "[XEM TRƯỚC] Không có gì thay đổi."\n    exit 0\nfi\n\nmkdir -p "$DICH"\nTEN="backup_$(date +%Y%m%d_%H%M%S).tar.gz"\ntar -czf "$DICH/$TEN" "$NGUON" 2>/dev/null\nfind "$DICH" -name "backup_*.tar.gz" -mtime +$SO_NGAY -delete\n$CHE_DO_IM || echo "✓ Xong! → $DICH/$TEN"`}
            />
            <div className="space-y-6">
                <CheatCard
                    title="getopts cần nhớ"
                    rows={[
                        ["s:", "Cờ -s cần giá trị đi kèm"],
                        ["p", "Cờ -p không cần giá trị"],
                        ["OPTARG", "Giá trị đi kèm cờ hiện tại"],
                        ["opt", "Tên cờ đang được xử lý"],
                        ["?)", "Nhánh tham số không hợp lệ"],
                    ]}
                />
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                    <h4 className="font-bold text-white mb-4">
                        Mô phỏng -p và -q
                    </h4>
                    <div className="grid grid-cols-2 gap-3 mb-5">
                        <button
                            onClick={() => setPreview((v) => !v)}
                            className={`p-3 rounded-xl border font-bold ${preview ? "bg-orange-500 text-white border-orange-500" : "bg-slate-900 border-slate-800 text-slate-400"}`}
                        >
                            -p preview
                        </button>
                        <button
                            onClick={() => setQuiet((v) => !v)}
                            className={`p-3 rounded-xl border font-bold ${quiet ? "bg-orange-500 text-white border-orange-500" : "bg-slate-900 border-slate-800 text-slate-400"}`}
                        >
                            -q quiet
                        </button>
                    </div>
                    <pre className="bg-black border border-slate-800 rounded-xl p-4 text-sm text-green-400 whitespace-pre-wrap">
                        <code>
                            {quiet
                                ? preview
                                    ? "[XEM TRƯỚC] Không có gì thay đổi."
                                    : ""
                                : `Nguồn : /var/www\nĐích   : /backup\nGiữ    : 7 ngày${preview ? "\n[XEM TRƯỚC] Không có gì thay đổi." : "\n✓ Xong! → /backup/backup_YYYYmmdd_HHMMSS.tar.gz"}`}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );
}

function LongOptionSection() {
    return (
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-6">
            <CodeBlock
                title="deploy.sh"
                code={`#!/bin/bash\n\nMOI_TRUONG=""\nBRANCH="main"\nKHOI_DONG_LAI=false\n\nwhile [ $# -gt 0 ]; do\n    case $1 in\n        --env=*)\n            MOI_TRUONG="${"{"}1#--env={'}'}"\n            shift\n            ;;\n        --branch=*)\n            BRANCH="${"{"}1#--branch={'}'}"\n            shift\n            ;;\n        --restart)\n            KHOI_DONG_LAI=true\n            shift\n            ;;\n        --help | -h)\n            echo "Dùng: $0 --env=production --branch=main [--restart]"\n            exit 0\n            ;;\n        *)\n            echo "Tham số không rõ: $1"\n            exit 1\n            ;;\n    esac\ndone\n\n[ -z "$MOI_TRUONG" ] && echo "Lỗi: Thiếu --env" && exit 1\n[[ "$MOI_TRUONG" =~ ^(dev|staging|production)$ ]] || {\n    echo "Lỗi: --env phải là dev|staging|production"\n    exit 1\n}\n\necho "Deploy → env=$MOI_TRUONG branch=$BRANCH restart=$KHOI_DONG_LAI"`}
            />
            <div className="space-y-4">
                <ExplainCard
                    cmd="while [ $# -gt 0 ]"
                    desc="Lặp cho đến khi xử lý hết tham số."
                />
                <ExplainCard
                    cmd="${1#--env=}"
                    desc="Cắt tiền tố --env= để lấy giá trị."
                />
                <ExplainCard
                    cmd="shift"
                    desc="Bỏ tham số hiện tại, đẩy tham số tiếp theo lên $1."
                />
                <ExplainCard
                    cmd="--help | -h"
                    desc="Cho phép cả dạng dài và ngắn."
                />
            </div>
        </div>
    );
}

function SetSection() {
    const [mode, setMode] = useState("euo");
    const modes = {
        euo: {
            title: "set -euo pipefail",
            desc: "Bộ ba khuyến nghị cho script production.",
            code: `#!/bin/bash\nset -euo pipefail\n\n# -e: dừng khi lệnh lỗi\n# -u: lỗi khi dùng biến chưa khai báo\n# pipefail: lỗi trong pipe cũng làm pipeline fail`,
        },
        sete: {
            title: "set -e",
            desc: "Dừng ngay khi có lệnh lỗi.",
            code: `set -e\n\necho "Bước 1: OK"\nls /thu_muc_khong_ton_tai\necho "Bước 2: KHÔNG BAO GIỜ CHẠY"`,
        },
        setu: {
            title: "set -u",
            desc: "Báo lỗi nếu dùng biến chưa khai báo.",
            code: `set -u\n\necho $BIEN_CHUA_KHAI_BAO\n# bash: unbound variable`,
        },
        allow: {
            title: "Cho phép lỗi có kiểm soát",
            desc: "Không phải lỗi nào cũng cần làm script dừng ngay.",
            code: `set -e\n\nrm /file/co_the_khong_ton_tai || true\n\nif ! ping -c1 google.com &>/dev/null; then\n    echo "Không có mạng, bỏ qua bước này"\nfi\n\nset +e\nket_qua=$(lenh_co_the_loi)\nMA_LOI=$?\nset -e\n\nif [ $MA_LOI -ne 0 ]; then\n    echo "Lệnh thất bại với mã lỗi: $MA_LOI"\nfi`,
        },
    };
    return (
        <div className="grid lg:grid-cols-[280px_1fr] gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 space-y-2 h-fit">
                {Object.entries(modes).map(([key, item]) => (
                    <button
                        key={key}
                        onClick={() => setMode(key)}
                        className={`w-full text-left p-4 rounded-xl border transition-all ${mode === key ? "bg-orange-500/10 border-orange-500/40 text-white" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                    >
                        <div className="font-semibold text-sm">
                            {item.title}
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                            {item.desc}
                        </div>
                    </button>
                ))}
            </div>
            <CodeBlock
                title={`${modes[mode].title}.sh`}
                code={modes[mode].code}
            />
        </div>
    );
}

function TrapSection() {
    const [event, setEvent] = useState("EXIT");
    const output = {
        EXIT: "Làm việc trong /tmp/tmp.XYZ\nĐang dọn dẹp...\n✓ Đã xoá thư mục tạm: /tmp/tmp.XYZ",
        INT: "^C\nĐã nhấn Ctrl+C! Đang thoát an toàn...",
        ERR: "╔══════════════════════════════════╗\n║           SCRIPT LỖI             ║\n╠══════════════════════════════════╣\n║ Dòng    : 42\n║ Mã lỗi  : 1\n║ Lệnh    : cp missing target\n╚══════════════════════════════════╝",
    };
    return (
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-6">
            <CodeBlock
                title="trap.sh"
                code={`#!/bin/bash\n\nTMP_DIR=$(mktemp -d)\n\ndon_dep() {\n    echo ""\n    echo "Đang dọn dẹp..."\n    rm -rf "$TMP_DIR"\n    echo "✓ Đã xoá thư mục tạm: $TMP_DIR"\n}\ntrap don_dep EXIT\n\nngat_chuong_trinh() {\n    echo ""\n    echo "Đã nhấn Ctrl+C! Đang thoát an toàn..."\n    exit 1\n}\ntrap ngat_chuong_trinh INT\n\nxu_ly_loi() {\n    local ma_loi=$?\n    local dong_lenh=$BASH_LINENO\n    echo ""\n    echo "╔══════════════════════════════════╗"\n    echo "║           SCRIPT LỖI             ║"\n    echo "╠══════════════════════════════════╣"\n    echo "║ Dòng    : $dong_lenh"\n    echo "║ Mã lỗi  : $ma_loi"\n    echo "║ Lệnh    : $BASH_COMMAND"\n    echo "╚══════════════════════════════════╝"\n}\ntrap xu_ly_loi ERR\n\n# Kết hợp:\ntrap 'don_dep; exit 1' INT TERM\ntrap 'xu_ly_loi' ERR\ntrap 'don_dep' EXIT`}
            />
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 h-fit">
                <h4 className="font-bold text-white mb-4">
                    Mô phỏng tín hiệu trap
                </h4>
                <div className="grid grid-cols-3 gap-2 mb-5">
                    {Object.keys(output).map((e) => (
                        <button
                            key={e}
                            onClick={() => setEvent(e)}
                            className={`p-3 rounded-xl border font-bold ${event === e ? "bg-pink-500 text-white border-pink-500" : "bg-slate-900 border-slate-800 text-slate-400"}`}
                        >
                            {e}
                        </button>
                    ))}
                </div>
                <pre className="bg-black border border-slate-800 rounded-xl p-4 text-sm text-green-400 whitespace-pre-wrap">
                    <code>{output[event]}</code>
                </pre>
                <div className="mt-4 text-sm text-slate-500">
                    <code className="text-orange-300">EXIT</code> dùng rất nhiều
                    để dọn file tạm tạo bằng{" "}
                    <code className="text-orange-300">mktemp</code>.
                </div>
            </div>
        </div>
    );
}

function ExitCodeSection() {
    const [code, setCode] = useState("0");
    const meaning = {
        0: "Thành công",
        1: "Lỗi chung",
        2: "Sai cú pháp / tham số",
        126: "Không có quyền chạy",
        127: "Lệnh không tìm thấy",
        130: "Bị ngắt bởi Ctrl+C",
    };
    return (
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-6">
            <CodeBlock
                title="exit-code.sh"
                code={`#!/bin/bash\n\n# Quy ước exit code\n# 0   → Thành công\n# 1   → Lỗi chung\n# 2   → Sai cú pháp / tham số\n# 126 → Không có quyền chạy\n# 127 → Lệnh không tìm thấy\n# 130 → Bị ngắt bởi Ctrl+C\n\nls /etc/hosts\necho "Exit code: $?"\n\nreadonly E_OK=0\nreadonly E_THIEU_THAM_SO=1\nreadonly E_FILE_KHONG_TON_TAI=2\nreadonly E_MAT_QUYEN=3\nreadonly E_MAT_KET_NOI=4\n\nham_chinh() {\n    [ $# -eq 0 ] && return $E_THIEU_THAM_SO\n    [ ! -f "$1" ] && return $E_FILE_KHONG_TON_TAI\n    [ ! -r "$1" ] && return $E_MAT_QUYEN\n    ping -c1 google.com &>/dev/null || return $E_MAT_KET_NOI\n    return $E_OK\n}\n\nham_chinh "$@"\nMA_THOAT=$?\n\ncase $MA_THOAT in\n    $E_OK) echo "✓ Thành công" ;;\n    $E_THIEU_THAM_SO) echo "✗ Thiếu tham số" ;;\n    $E_FILE_KHONG_TON_TAI) echo "✗ File không tồn tại" ;;\n    $E_MAT_QUYEN) echo "✗ Không có quyền đọc" ;;\n    $E_MAT_KET_NOI) echo "✗ Mất kết nối mạng" ;;\nesac\n\nexit $MA_THOAT`}
            />
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 h-fit">
                <h4 className="font-bold text-white mb-4">
                    Tra nhanh exit code
                </h4>
                <div className="grid grid-cols-3 gap-2 mb-5">
                    {Object.keys(meaning).map((c) => (
                        <button
                            key={c}
                            onClick={() => setCode(c)}
                            className={`p-3 rounded-xl border font-bold ${code === c ? "bg-cyan-500 text-white border-cyan-500" : "bg-slate-900 border-slate-800 text-slate-400"}`}
                        >
                            {c}
                        </button>
                    ))}
                </div>
                <div className="bg-black border border-slate-800 rounded-xl p-5">
                    <div className="text-xs text-slate-500 mb-2">Ý nghĩa</div>
                    <div className="font-mono text-lg text-green-400">
                        {meaning[code]}
                    </div>
                </div>
            </div>
        </div>
    );
}

function LoggingSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="logging.sh"
                code={`#!/bin/bash\n\nLOG_FILE="/var/log/myscript.log"\nLOG_LEVEL="INFO"\n\n_log() {\n    local level=$1\n    local msg=$2\n    local thoi_gian=$(date '+%Y-%m-%d %H:%M:%S')\n    local dong="[$thoi_gian] [$level] $msg"\n\n    echo "$dong" >> "$LOG_FILE"\n\n    case $level in\n        DEBUG) [ "$LOG_LEVEL" = "DEBUG" ] && echo -e "\\e[37m$dong\\e[0m" ;;\n        INFO)  echo -e "\\e[32m$dong\\e[0m" ;;\n        WARN)  echo -e "\\e[33m$dong\\e[0m" ;;\n        ERROR) echo -e "\\e[31m$dong\\e[0m" >&2 ;;\n    esac\n}\n\nlog_debug() { _log "DEBUG" "$1"; }\nlog_info()  { _log "INFO"  "$1"; }\nlog_warn()  { _log "WARN"  "$1"; }\nlog_error() { _log "ERROR" "$1"; }\n\nlog_info  "Script bắt đầu chạy"\nlog_debug "Chi tiết: biến A=$A"\nlog_warn  "Disk sắp đầy: 85%"\nlog_error "Kết nối database thất bại!"\n\nxoay_log() {\n    local max_size=$((10 * 1024 * 1024))\n    if [ -f "$LOG_FILE" ]; then\n        local kich_thuoc=$(stat -c%s "$LOG_FILE")\n        if [ "$kich_thuoc" -gt "$max_size" ]; then\n            mv "$LOG_FILE" "${"{"}LOG_FILE{'}'}.$(date +%Y%m%d)"\n            gzip "${"{"}LOG_FILE{'}'}.$(date +%Y%m%d)"\n            log_info "Đã xoay vòng log"\n        fi\n    fi\n}`}
            />
            <div className="space-y-4">
                <LogSample level="DEBUG" text="Chi tiết: biến A=42" />
                <LogSample level="INFO" text="Script bắt đầu chạy" />
                <LogSample level="WARN" text="Disk sắp đầy: 85%" />
                <LogSample level="ERROR" text="Kết nối database thất bại!" />
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm text-blue-100 flex gap-3">
                    <Info className="text-blue-400 shrink-0" size={20} />
                    ERROR nên ghi ra stderr bằng{" "}
                    <code className="text-white">&gt;&amp;2</code> để tách khỏi
                    output bình thường.
                </div>
            </div>
        </div>
    );
}

function LogSample({ level, text }) {
    const color =
        level === "ERROR"
            ? "text-red-400"
            : level === "WARN"
              ? "text-yellow-400"
              : level === "DEBUG"
                ? "text-slate-400"
                : "text-green-400";
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono text-sm">
            <span className={color}>[2026-04-26 10:00:00] [{level}]</span>{" "}
            <span className="text-slate-300">{text}</span>
        </div>
    );
}

function CompleteScriptSection() {
    const [tab, setTab] = useState("overview");
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                <button
                    onClick={() => setTab("overview")}
                    className={`px-4 py-2 rounded-xl text-sm font-bold ${tab === "overview" ? "bg-red-500 text-white" : "bg-slate-900 text-slate-400"}`}
                >
                    Tổng quan
                </button>
                <button
                    onClick={() => setTab("code")}
                    className={`px-4 py-2 rounded-xl text-sm font-bold ${tab === "code" ? "bg-red-500 text-white" : "bg-slate-900 text-slate-400"}`}
                >
                    Code đầy đủ
                </button>
            </div>
            <div className="p-5">
                {tab === "overview" ? <DbBackupOverview /> : <DbBackupCode />}
            </div>
        </div>
    );
}

function DbBackupOverview() {
    const items = [
        [
            Bug,
            "set -euo pipefail",
            "Dừng khi lỗi, bắt biến thiếu, bắt lỗi pipe.",
        ],
        [Trash2, "mktemp + trap", "Tạo thư mục tạm an toàn và tự dọn."],
        [SlidersHorizontal, "getopts", "Nhận -d, -u, -H, -p, -o, -n, -h."],
        [ShieldAlert, "validate", "Kiểm tra DB name, số ngày, mysqldump."],
        [Database, "mysqldump", "Dump database ra file SQL tạm."],
        [FolderArchive, "gzip + find", "Nén backup và xóa bản cũ."],
    ];
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map(([Icon, title, desc]) => (
                <div
                    key={title}
                    className="bg-slate-950 border border-slate-800 rounded-2xl p-5"
                >
                    <Icon className="text-red-400 mb-3" size={24} />
                    <div className="font-bold text-white">{title}</div>
                    <p className="text-sm text-slate-500 mt-2">{desc}</p>
                </div>
            ))}
        </div>
    );
}

function DbBackupCode() {
    return (
        <CodeBlock
            title="db_backup.sh"
            code={`#!/bin/bash\n# db_backup.sh – Backup database chuyên nghiệp\n# Dùng: ./db_backup.sh -d mydb -u root -p\nset -euo pipefail\n\nreadonly SCRIPT_TEN=$(basename "$0")\nreadonly SCRIPT_DIR=$(dirname "$(readlink -f "$0")")\nreadonly LOG_FILE="/var/log/db_backup.log"\nreadonly TMP_DIR=$(mktemp -d)\n\nDB_TEN=""\nDB_USER="root"\nDB_HOST="localhost"\nHOI_MAT_KHAU=false\nDICH="/backup/db"\nGIU_SO_NGAY=7\n\nlog() {\n    local level=$1; shift\n    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [$level] $*" | tee -a "$LOG_FILE"\n}\ninfo()  { log "INFO " "$@"; }\nwarn()  { log "WARN " "$@"; }\nerror() { log "ERROR" "$@" >&2; }\n\ndon_dep() {\n    rm -rf "$TMP_DIR"\n    info "Đã dọn dẹp file tạm"\n}\ntrap don_dep EXIT\ntrap 'error "Bị ngắt bởi người dùng!"; exit 130' INT TERM\n\nhuong_dan() {\n    cat << EOF\nDùng: $SCRIPT_TEN [tuỳ_chọn]\n\nBắt buộc:\n  -d <tên_db>   Tên database cần backup\n\nTuỳ chọn:\n  -u <user>     MySQL user (mặc định: root)\n  -H <host>     MySQL host (mặc định: localhost)\n  -p            Hỏi mật khẩu\n  -o <thư_mục>  Thư mục lưu backup (mặc định: /backup/db)\n  -n <ngày>     Giữ backup trong N ngày (mặc định: 7)\n  -h            Hiện hướng dẫn này\nEOF\n}\n\n[ $# -eq 0 ] && huong_dan && exit 1\n\nwhile getopts "d:u:H:po:n:h" opt; do\n    case $opt in\n        d) DB_TEN=$OPTARG ;;\n        u) DB_USER=$OPTARG ;;\n        H) DB_HOST=$OPTARG ;;\n        p) HOI_MAT_KHAU=true ;;\n        o) DICH=$OPTARG ;;\n        n) GIU_SO_NGAY=$OPTARG ;;\n        h) huong_dan; exit 0 ;;\n        ?) error "Tham số không hợp lệ: -$OPTARG"; exit 2 ;;\n    esac\ndone\n\n[ -z "$DB_TEN" ] && error "Thiếu tên database (-d)!" && exit 1\n\nif ! [[ "$GIU_SO_NGAY" =~ ^[0-9]+$ ]]; then\n    error "Số ngày phải là số nguyên dương!"\n    exit 2\nfi\n\nif ! command -v mysqldump &>/dev/null; then\n    error "mysqldump chưa được cài đặt!"\n    exit 127\nfi\n\nDB_PASS=""\nif $HOI_MAT_KHAU; then\n    read -s -p "Nhập mật khẩu MySQL: " DB_PASS\n    echo ""\nfi\n\nmkdir -p "$DICH"\n\nTEN_FILE="${"{"}DB_TEN{'}'}_$(date +%Y%m%d_%H%M%S).sql.gz"\nDUONG_DAN_FULL="$DICH/$TEN_FILE"\nTMP_FILE="$TMP_DIR/${"{"}DB_TEN{'}'}.sql"\n\ninfo "Bắt đầu backup database: $DB_TEN"\n\nif mysqldump \\\n    -h "$DB_HOST" \\\n    -u "$DB_USER" \\\n    ${"{"}DB_PASS:+-p"$DB_PASS"{'}'} \\\n    "$DB_TEN" > "$TMP_FILE" 2>/dev/null; then\n    info "Dump thành công ($(wc -l < $TMP_FILE) dòng SQL)"\nelse\n    error "Dump thất bại! Kiểm tra tên DB và quyền truy cập."\n    exit 1\nfi\n\ngzip -c "$TMP_FILE" > "$DUONG_DAN_FULL"\nKICH_THUOC=$(du -sh "$DUONG_DAN_FULL" | cut -f1)\ninfo "Đã nén → $TEN_FILE ($KICH_THUOC)"\n\nSO_XOA=$(find "$DICH" -name "${"{"}DB_TEN{'}'}_*.sql.gz" -mtime +$GIU_SO_NGAY | wc -l)\nfind "$DICH" -name "${"{"}DB_TEN{'}'}_*.sql.gz" -mtime +$GIU_SO_NGAY -delete\n[ "$SO_XOA" -gt 0 ] && info "Đã xoá $SO_XOA backup cũ"\n\ninfo "✓ Backup hoàn thành: $DUONG_DAN_FULL"\nexit 0`}
        />
    );
}

function ExplainCard({ cmd, desc }) {
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
            <code className="text-orange-300 font-bold">{cmd}</code>
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
            title: "Tham số",
            rows: [
                ["$1 $2 $@", "Tham số vị trí"],
                ["$#", "Số tham số"],
                ['getopts "s:d:h"', "Cờ ngắn"],
                ["OPTARG", "Giá trị cờ"],
                ["${1#--env=}", "Cắt tham số dài"],
            ],
        },
        {
            title: "set",
            rows: [
                ["set -e", "Dừng khi lỗi"],
                ["set -u", "Biến chưa khai báo"],
                ["set -o pipefail", "Lỗi trong pipe"],
                ["set -euo pipefail", "Khuyến nghị"],
            ],
        },
        {
            title: "trap",
            rows: [
                ["trap 'cmd' EXIT", "Khi thoát"],
                ["trap 'cmd' ERR", "Khi lỗi"],
                ["trap 'cmd' INT", "Ctrl+C"],
                ["mktemp -d", "Thư mục tạm an toàn"],
            ],
        },
        {
            title: "Exit code",
            rows: [
                ["$?", "Mã lệnh vừa chạy"],
                ["exit 0", "Thành công"],
                ["exit 1", "Lỗi chung"],
                ["exit 2", "Sai tham số"],
                ["exit 127", "Lệnh không tìm thấy"],
            ],
        },
        {
            title: "Thực hành tốt",
            rows: [
                ["--help", "Có hướng dẫn"],
                ["validate input", "Kiểm tra trước khi dùng"],
                ["log", "Ghi lịch sử"],
                ["trap cleanup", "Dọn dẹp"],
                ["readonly", "Hằng số"],
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
        question: "Biến nào chứa số lượng tham số truyền vào script?",
        options: ["$@", "$#", "$?", "$0"],
        correct: 1,
        explanation: "$# là số lượng tham số. $@ là tất cả tham số.",
    },
    {
        question: "Trong getopts, chuỗi s:d:n:pqh nghĩa là gì với s, d, n?",
        options: [
            "s d n không cần giá trị",
            "s d n cần giá trị đi kèm",
            "s d n là biến môi trường",
            "s d n là exit code",
        ],
        correct: 1,
        explanation:
            "Dấu : sau chữ cái nghĩa là cờ đó cần giá trị, ví dụ -s /var/www.",
    },
    {
        question: "set -u có tác dụng gì?",
        options: [
            "Dừng khi lệnh lỗi",
            "Bắt lỗi trong pipe",
            "Báo lỗi khi dùng biến chưa khai báo",
            "Tự tạo log",
        ],
        correct: 2,
        explanation:
            "set -u làm script lỗi ngay khi tham chiếu biến chưa được khai báo.",
    },
    {
        question: "trap 'don_dep' EXIT dùng để làm gì?",
        options: [
            "Chạy don_dep khi script thoát",
            "Chạy don_dep mỗi 5 giây",
            "Tắt script ngay",
            "Bỏ qua lỗi",
        ],
        correct: 0,
        explanation:
            "EXIT trap chạy khi script kết thúc, rất phù hợp để dọn file/thư mục tạm.",
    },
    {
        question: "Exit code 0 thường có nghĩa là gì?",
        options: [
            "Lỗi chung",
            "Thành công",
            "Lệnh không tìm thấy",
            "Bị Ctrl+C",
        ],
        correct: 1,
        explanation: "Theo quy ước Unix/Linux, exit 0 nghĩa là thành công.",
    },
    {
        question: "Vì sao nên ghi log cho script chạy ngầm hoặc cron?",
        options: [
            "Để script có màu đẹp hơn",
            "Để kiểm tra sau khi script chạy và biết lỗi ở đâu",
            "Để thay thế chmod",
            "Để bỏ qua validate",
        ],
        correct: 1,
        explanation:
            "Script chạy ngầm không có người nhìn terminal, nên log là bằng chứng để debug và audit.",
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
        if (current === quizQuestions.length - 1) {
            setFinished(true);
        } else {
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

    if (finished) {
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
    }

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
