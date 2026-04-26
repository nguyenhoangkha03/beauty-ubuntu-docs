import React, { useMemo, useState } from "react";
import {
    Terminal,
    Clock,
    CalendarClock,
    Timer,
    Repeat,
    Settings,
    Server,
    Bug,
    FileText,
    ListChecks,
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
    ClipboardList,
    FolderCog,
    ScrollText,
    Wrench,
    Lock,
    Mail,
    ShieldCheck,
    Archive,
    Database,
    Trash2,
    Activity,
    HardDrive,
    PackageOpen,
    Power,
    Search,
    CalendarDays,
    Zap,
    Hash,
    Eye,
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
                                Bash Script · Cron · Automation
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 8
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 8.7
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" /> Tự
                        động hóa script theo lịch trên Linux
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Cron Job <br />
                        <span className="text-orange-500">
                            Tự Động Hoá Theo Lịch
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Cron giúp bạn chạy backup lúc 2 giờ sáng, dọn log hằng
                        tuần, kiểm tra server mỗi 5 phút và chạy script khi máy
                        khởi động mà không cần thao tác thủ công.
                    </p>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <CronConceptCard />
                    <CronExpressionSimulator />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="blue"
                        icon={<CalendarClock size={22} />}
                        title="Cú pháp Crontab"
                        subtitle="Mỗi dòng crontab gồm 5 trường thời gian và lệnh cần chạy."
                    />
                    <CrontabSyntaxSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="green"
                        icon={<Clock size={22} />}
                        title="Đọc & viết Cron Expression"
                        subtitle="Từ mỗi ngày 02:00 đến mỗi 5 phút, mỗi thứ Hai, cuối tuần hoặc khi reboot."
                    />
                    <ExpressionExamplesSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="purple"
                        icon={<Terminal size={22} />}
                        title="Quản lý Crontab"
                        subtitle="Các lệnh crontab -l, -e, -r, -i, backup/restore và kiểm tra cron daemon."
                    />
                    <ManageCrontabSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="orange"
                        icon={<ShieldCheck size={22} />}
                        title="Viết Crontab đúng cách"
                        subtitle="Luôn dùng đường dẫn tuyệt đối, khai báo môi trường, redirect output và dùng flock chống chạy chồng."
                    />
                    <BestPracticeSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="cyan"
                        icon={<ClipboardList size={22} />}
                        title="Ví dụ Crontab thực tế"
                        subtitle="Backup web/database/config, dọn log, giám sát nginx/disk, cập nhật package và chạy khi boot."
                    />
                    <RealCrontabSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="pink"
                        icon={<FolderCog size={22} />}
                        title="/etc/cron.d và Cron hệ thống"
                        subtitle="Cron hệ thống có thêm cột USER và các thư mục cron.hourly/daily/weekly/monthly."
                    />
                    <SystemCronSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="yellow"
                        icon={<Bug size={22} />}
                        title="Xem Log & Debug Cron"
                        subtitle="Cron chạy trong môi trường tối giản, nên cần log, journalctl và test bằng env -i."
                    />
                    <DebugCronSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="8"
                        color="red"
                        icon={<Power size={22} />}
                        title="anacron – Cron cho máy không chạy 24/7"
                        subtitle="Nếu máy tắt đúng giờ chạy cron, anacron có thể chạy bù khi máy bật lại."
                    />
                    <AnacronSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="9"
                        color="teal"
                        icon={<Wrench size={22} />}
                        title="Script tiện ích – Quản lý Cron"
                        subtitle="cron_manager.sh giúp list, add, remove, test và xem log cron dễ dàng."
                    />
                    <CronManagerSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="10"
                        color="rose"
                        icon={<AlertTriangle size={22} />}
                        title="Lỗi hay gặp & cách sửa"
                        subtitle="PATH khác, ký tự %, biến môi trường, thiếu log debug và job chạy chồng."
                    />
                    <CommonErrorsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="11"
                        color="emerald"
                        icon={<ListChecks size={22} />}
                        title="Tóm tắt nhanh"
                        subtitle="Cú pháp crontab, lệnh quản lý, chuỗi đặc biệt và quy tắc vàng."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <PackageOpen className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức bài 8.7
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Ôn lại cron expression, crontab, debug,
                                    flock, anacron và lỗi thường gặp.
                                </p>
                            </div>
                            <div className="hidden sm:block text-3xl">🧪</div>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                <section className="pt-4">
                    <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-green-500/20 border border-orange-500/20 rounded-3xl p-8 text-center">
                        <div className="text-5xl mb-4">🎉</div>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                            Hoàn thành Phần 8 – Shell Scripting Bash!
                        </h3>
                        <p className="text-slate-400 max-w-2xl mx-auto mb-6">
                            Bạn đã đi từ script đầu tiên đến biến, input, điều
                            kiện, vòng lặp, hàm, xử lý lỗi và tự động hóa bằng
                            cron.
                        </p>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                            Phần 9 — Quản lý Đĩa & Hệ Thống File{" "}
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </section>
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
        cyan: "bg-cyan-500/20 text-cyan-400",
        pink: "bg-pink-500/20 text-pink-400",
        yellow: "bg-yellow-500/20 text-yellow-400",
        red: "bg-red-500/20 text-red-400",
        teal: "bg-teal-500/20 text-teal-400",
        rose: "bg-rose-500/20 text-rose-400",
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

function CronConceptCard() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-orange-500/15 text-orange-400 rounded-2xl flex items-center justify-center">
                    <CalendarClock size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        Cron là gì?
                    </h3>
                    <p className="text-slate-500 text-sm">
                        Bộ lập lịch tác vụ của Linux
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-950 border border-red-500/20 rounded-2xl p-5">
                    <div className="text-red-400 font-bold mb-3 flex items-center gap-2">
                        <XCircle size={18} /> Không có Cron
                    </div>
                    <ul className="space-y-3 text-sm text-slate-400">
                        <li>2 giờ sáng phải tự chạy backup.</li>
                        <li>Mỗi tuần tự dọn log.</li>
                        <li>Mỗi giờ tự kiểm tra server.</li>
                    </ul>
                </div>
                <div className="bg-slate-950 border border-green-500/20 rounded-2xl p-5 shadow-[0_0_30px_rgba(34,197,94,0.06)]">
                    <div className="text-green-400 font-bold mb-3 flex items-center gap-2">
                        <CheckCircle2 size={18} /> Có Cron
                    </div>
                    <ul className="space-y-3 text-sm text-slate-400">
                        <li>Viết lịch một lần.</li>
                        <li>Cron tự chạy đúng giờ.</li>
                        <li>Có thể ghi log và gửi mail.</li>
                    </ul>
                </div>
            </div>
            <div className="mt-5 grid sm:grid-cols-2 gap-3">
                <MiniTerm
                    term="crond"
                    desc="daemon chạy nền, đọc lịch và thực thi job"
                />
                <MiniTerm
                    term="crontab"
                    desc="file chứa danh sách lịch chạy của user"
                />
            </div>
        </div>
    );
}

function MiniTerm({ term, desc }) {
    return (
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 text-sm">
            <code className="text-blue-300 font-bold">{term}</code>
            <p className="text-slate-400 mt-1">{desc}</p>
        </div>
    );
}

function CronExpressionSimulator() {
    const [expr, setExpr] = useState("0 2 * * *");
    const presets = [
        ["0 2 * * *", "Mỗi ngày 02:00"],
        ["*/5 * * * *", "Mỗi 5 phút"],
        ["0 9 * * 1", "Thứ Hai 09:00"],
        ["0 */2 * * *", "Mỗi 2 giờ"],
        ["0 8,12,18 * * *", "8h, 12h, 18h"],
        ["@reboot", "Khi boot"],
    ];
    const parsed = describeCron(expr);
    return (
        <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Timer className="text-orange-400" /> Giải mã Cron Expression
            </h3>
            <p className="text-slate-400 mb-6">
                Chọn mẫu hoặc nhập biểu thức 5 trường để xem ý nghĩa.
            </p>
            <input
                value={expr}
                onChange={(e) => setExpr(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white font-mono outline-none focus:border-orange-500 mb-4"
            />
            <div className="grid sm:grid-cols-2 gap-2 mb-5">
                {presets.map(([value, label]) => (
                    <button
                        key={value}
                        onClick={() => setExpr(value)}
                        className={`p-3 rounded-xl border text-left text-sm ${expr === value ? "bg-orange-500 text-white border-orange-500" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"}`}
                    >
                        <code>{value}</code>
                        <div className="text-xs opacity-75 mt-1">{label}</div>
                    </button>
                ))}
            </div>
            <div className="bg-black border border-slate-800 rounded-2xl p-5">
                <div className="text-xs text-slate-500 mb-3">Ý nghĩa</div>
                <div
                    className={`font-mono text-lg font-bold ${parsed.valid ? "text-green-400" : "text-red-400"}`}
                >
                    {parsed.text}
                </div>
                {parsed.fields && (
                    <div className="grid grid-cols-5 gap-2 mt-5 text-center text-xs">
                        {parsed.fields.map(([label, value]) => (
                            <div
                                key={label}
                                className="bg-slate-900 border border-slate-800 rounded-xl p-2"
                            >
                                <div className="text-slate-500">{label}</div>
                                <code className="text-orange-300">{value}</code>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function describeCron(expr) {
    const special = {
        "@reboot": "Chạy một lần khi máy khởi động",
        "@yearly": "Mỗi năm 1 lần",
        "@monthly": "Mỗi tháng 1 lần",
        "@weekly": "Mỗi tuần 1 lần",
        "@daily": "Mỗi ngày 1 lần",
        "@hourly": "Mỗi giờ 1 lần",
    };
    if (special[expr.trim()])
        return { valid: true, text: special[expr.trim()] };
    const parts = expr.trim().split(/\s+/);
    if (parts.length !== 5)
        return {
            valid: false,
            text: "Cron expression cần 5 trường: phút giờ ngày tháng thứ",
        };
    const [min, hour, dom, mon, dow] = parts;
    const known = {
        "0 2 * * *": "Mỗi ngày lúc 02:00",
        "30 8 * * *": "Mỗi ngày lúc 08:30",
        "0 0 1 * *": "Mồng 1 mỗi tháng lúc 00:00",
        "0 9 * * 1": "Mỗi thứ Hai lúc 09:00",
        "*/5 * * * *": "Mỗi 5 phút",
        "*/15 * * * *": "Mỗi 15 phút",
        "0 */2 * * *": "Mỗi 2 giờ",
        "0 8-18 * * 1-5": "Mỗi giờ từ 8h đến 18h, thứ Hai đến thứ Sáu",
        "0 0 * * 0,6": "Mỗi cuối tuần lúc nửa đêm",
        "0 6 1 1 *": "Mồng 1 tháng 1 lúc 06:00",
        "0 8,12,18 * * *": "Mỗi ngày lúc 8h, 12h và 18h",
    };
    return {
        valid: true,
        text:
            known[expr.trim()] ||
            `Phút=${min}, Giờ=${hour}, Ngày=${dom}, Tháng=${mon}, Thứ=${dow}`,
        fields: [
            ["Phút", min],
            ["Giờ", hour],
            ["Ngày", dom],
            ["Tháng", mon],
            ["Thứ", dow],
        ],
    };
}

function CrontabSyntaxSection() {
    return (
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h4 className="font-bold text-white mb-5">
                    5 trường thời gian
                </h4>
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm mb-5">
                    <div className="text-green-400">
                        * * * * * lệnh_cần_chạy
                    </div>
                    <div className="grid grid-cols-5 gap-2 mt-5 text-center">
                        {["Phút", "Giờ", "Ngày", "Tháng", "Thứ"].map((x) => (
                            <div
                                key={x}
                                className="bg-slate-900 border border-slate-800 rounded-xl p-3"
                            >
                                <div className="text-orange-300">*</div>
                                <div className="text-xs text-slate-500 mt-1">
                                    {x}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                    <RangeItem label="Phút" value="0-59" />
                    <RangeItem label="Giờ" value="0-23" />
                    <RangeItem label="Ngày trong tháng" value="1-31" />
                    <RangeItem label="Tháng" value="1-12" />
                    <RangeItem
                        label="Thứ trong tuần"
                        value="0-7, 0 và 7 đều là CN"
                    />
                </div>
            </div>
            <CheatCard
                title="Ký tự đặc biệt"
                rows={[
                    ["*", "Mọi giá trị, every"],
                    [",", "Liệt kê nhiều giá trị: 1,3,5"],
                    ["-", "Dải giá trị: 1-5"],
                    ["/", "Bước nhảy: */5"],
                ]}
            />
        </div>
    );
}

function RangeItem({ label, value }) {
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
            <div className="text-sm font-bold text-white">{label}</div>
            <div className="text-xs text-slate-500 mt-1">{value}</div>
        </div>
    );
}

function ExpressionExamplesSection() {
    const rows = [
        ["0 2 * * *", "Mỗi ngày lúc 02:00"],
        ["30 8 * * *", "Mỗi ngày lúc 08:30"],
        ["0 0 1 * *", "Mồng 1 mỗi tháng lúc 00:00"],
        ["0 9 * * 1", "Mỗi thứ Hai lúc 09:00"],
        ["*/5 * * * *", "Mỗi 5 phút"],
        ["*/15 * * * *", "Mỗi 15 phút"],
        ["0 */2 * * *", "Mỗi 2 giờ"],
        ["0 8-18 * * 1-5", "T2-T6, 8h-18h"],
        ["0 0 * * 0,6", "Mỗi cuối tuần lúc nửa đêm"],
        ["0 6 1 1 *", "Mồng 1 tháng 1 lúc 06:00"],
        ["30 23 28-31 * *", "23:30 từ ngày 28-31"],
        ["0 8,12,18 * * *", "Mỗi ngày lúc 8h, 12h, 18h"],
    ];
    const specials = [
        ["@reboot", "Khi máy khởi động"],
        ["@yearly", "Mỗi năm"],
        ["@monthly", "Mỗi tháng"],
        ["@weekly", "Mỗi tuần"],
        ["@daily", "Mỗi ngày"],
        ["@hourly", "Mỗi giờ"],
    ];
    return (
        <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <h4 className="font-bold text-white mb-4">
                    Ví dụ từ dễ đến khó
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                    {rows.map(([expr, desc]) => (
                        <div
                            key={expr}
                            className="bg-slate-950 border border-slate-800 rounded-xl p-3"
                        >
                            <code className="text-orange-300">{expr}</code>
                            <div className="text-xs text-slate-500 mt-1">
                                {desc}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <CheatCard title="Chuỗi đặc biệt" rows={specials} />
        </div>
    );
}

function ManageCrontabSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="crontab-commands.sh"
                code={`# Lệnh crontab cơ bản\ncrontab -l          # Liệt kê crontab user hiện tại\ncrontab -e          # Sửa crontab\ncrontab -r          # Xoá TOÀN BỘ crontab\ncrontab -i          # Xoá nhưng hỏi xác nhận\n\n# Xem crontab user khác, cần root\nsudo crontab -l -u ubuntu\nsudo crontab -e -u www-data\n\n# Backup & restore\ncrontab -l > ~/crontab_backup.txt\ncrontab ~/crontab_backup.txt\n\n# Kiểm tra cron daemon\nsudo systemctl status cron\nsudo systemctl start cron\nsudo systemctl enable cron`}
            />
            <div className="space-y-4">
                <CommandCard
                    cmd="crontab -l"
                    desc="Xem danh sách job hiện tại."
                />
                <CommandCard
                    cmd="crontab -e"
                    desc="Mở editor sửa crontab. Lưu lại là cron tự nạp."
                />
                <CommandCard
                    cmd="crontab -r"
                    desc="Xóa toàn bộ crontab. Rất nguy hiểm."
                    danger
                />
                <CommandCard
                    cmd="crontab -i"
                    desc="Xóa có hỏi xác nhận, an toàn hơn -r."
                />
            </div>
        </div>
    );
}

function CommandCard({ cmd, desc, danger }) {
    return (
        <div
            className={`border rounded-2xl p-5 ${danger ? "bg-red-500/10 border-red-500/20" : "bg-slate-950 border-slate-800"}`}
        >
            <code
                className={
                    danger
                        ? "text-red-300 font-bold"
                        : "text-orange-300 font-bold"
                }
            >
                {cmd}
            </code>
            <p className="text-slate-400 text-sm mt-2">{desc}</p>
        </div>
    );
}

function BestPracticeSection() {
    const [tab, setTab] = useState("path");
    const tabs = [
        ["path", "Đường dẫn"],
        ["env", "Môi trường"],
        ["redirect", "Redirect log"],
        ["flock", "flock lock"],
    ];
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                {tabs.map(([id, label]) => (
                    <button
                        key={id}
                        onClick={() => setTab(id)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold ${tab === id ? "bg-orange-500 text-white" : "bg-slate-900 text-slate-400 hover:text-slate-200"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="p-5">
                {tab === "path" && <PathPractice />}
                {tab === "env" && <EnvPractice />}
                {tab === "redirect" && <RedirectPractice />}
                {tab === "flock" && <FlockPractice />}
            </div>
        </div>
    );
}

function PathPractice() {
    return (
        <div className="grid lg:grid-cols-2 gap-6">
            <RuleCard
                bad
                title="Sai"
                code={`* * * * * backup.sh\n* * * * * python script.py`}
                desc="Cron không dùng PATH giống terminal của bạn."
            />
            <RuleCard
                ok
                title="Đúng"
                code={`* * * * * /home/ubuntu/scripts/backup.sh\n* * * * * /usr/bin/python3 /home/ubuntu/script.py`}
                desc="Luôn dùng đường dẫn tuyệt đối cho script và interpreter."
            />
        </div>
    );
}
function EnvPractice() {
    return (
        <CodeBlock
            title="crontab-env"
            code={`SHELL=/bin/bash\nPATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\nHOME=/home/ubuntu\nMAILTO="admin@example.com"\nMAILTO=""   # tắt email`}
        />
    );
}
function RedirectPractice() {
    return (
        <CodeBlock
            title="redirect-output.cron"
            code={`# Bỏ hết output\n* * * * * /script.sh > /dev/null 2>&1\n\n# Chỉ ghi stdout vào log\n* * * * * /script.sh >> /var/log/myjob.log\n\n# Ghi cả stdout và stderr vào log\n* * * * * /script.sh >> /var/log/myjob.log 2>&1\n\n# Ghi với timestamp\n* * * * * echo "$(date): bắt đầu" >> /var/log/job.log && /script.sh >> /var/log/job.log 2>&1`}
        />
    );
}
function FlockPractice() {
    return (
        <CodeBlock
            title="flock.cron"
            code={`# Nếu job trước chưa xong, bỏ qua lần chạy mới\n*/5 * * * * flock -n /tmp/myjob.lock /script.sh\n\n# Dạng rõ hơn với -c\n*/5 * * * * flock -n /tmp/myjob.lock -c "/script.sh"`}
            note="Dùng flock khi job có thể chạy lâu hơn interval, ví dụ mỗi 5 phút nhưng script mất 10 phút."
        />
    );
}

function RuleCard({ ok, bad, title, code, desc }) {
    return (
        <div
            className={`rounded-2xl border p-5 ${bad ? "bg-red-500/10 border-red-500/20" : "bg-green-500/10 border-green-500/20"}`}
        >
            <div className="font-bold mb-3 flex items-center gap-2 text-white">
                {bad ? (
                    <XCircle className="text-red-400" size={18} />
                ) : (
                    <CheckCircle2 className="text-green-400" size={18} />
                )}{" "}
                {title}
            </div>
            <pre className="bg-black/50 border border-slate-800 rounded-xl p-4 text-sm text-slate-200 overflow-x-auto">
                <code>{code}</code>
            </pre>
            <p className="text-slate-400 text-sm mt-3">{desc}</p>
        </div>
    );
}

function RealCrontabSection() {
    return (
        <CodeBlock
            title="example-crontab"
            code={`SHELL=/bin/bash\nPATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\nMAILTO=""\n\n# Backup website mỗi ngày lúc 2:00 sáng\n0 2 * * * /home/ubuntu/scripts/backup_web.sh >> /var/log/backup.log 2>&1\n\n# Backup database mỗi ngày lúc 2:30 sáng\n30 2 * * * /home/ubuntu/scripts/backup_db.sh -d myapp >> /var/log/backup.log 2>&1\n\n# Backup config server mỗi Chủ Nhật lúc 3:00\n0 3 * * 0 tar -czf /backup/config_$(date +\\%Y\\%m\\%d).tar.gz /etc >> /dev/null 2>&1\n\n# Xoá file tạm cũ hơn 7 ngày, mỗi ngày lúc 4:00\n0 4 * * * find /tmp -type f -mtime +7 -delete > /dev/null 2>&1\n\n# Xoá log cũ hơn 30 ngày, mỗi tháng ngày 1\n0 5 1 * * find /var/log/myapp -name "*.log" -mtime +30 -delete\n\n# Kiểm tra nginx mỗi 5 phút\n*/5 * * * * /home/ubuntu/scripts/check_nginx.sh >> /var/log/monitor.log 2>&1\n\n# Kiểm tra disk mỗi giờ\n0 * * * * /home/ubuntu/scripts/check_disk.sh >> /var/log/monitor.log 2>&1\n\n# Báo cáo hệ thống mỗi sáng thứ Hai lúc 8:00\n0 8 * * 1 /home/ubuntu/scripts/system_report.sh | mail -s "Báo cáo tuần" admin@example.com\n\n# Cập nhật package mỗi ngày lúc 6:00\n0 6 * * * apt-get update -qq > /dev/null 2>&1\n\n# Chạy khi khởi động\n@reboot sleep 30 && /home/ubuntu/scripts/startup_check.sh\n@reboot /home/ubuntu/scripts/mount_nas.sh`}
            note="Trong crontab, ký tự % có ý nghĩa đặc biệt nên date +%Y%m%d phải escape thành +\%Y\%m\%d."
        />
    );
}

function SystemCronSection() {
    return (
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <h4 className="font-bold text-white mb-4">
                    Cấu trúc cron hệ thống
                </h4>
                <div className="space-y-2">
                    {[
                        "/etc/crontab",
                        "/etc/cron.d/",
                        "/etc/cron.hourly/",
                        "/etc/cron.daily/",
                        "/etc/cron.weekly/",
                        "/etc/cron.monthly/",
                    ].map((p) => (
                        <div
                            key={p}
                            className="bg-slate-950 border border-slate-800 rounded-xl p-3"
                        >
                            <code className="text-orange-300">{p}</code>
                        </div>
                    ))}
                </div>
                <div className="mt-5 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 text-sm text-blue-100 flex gap-3">
                    <Info className="text-blue-400 shrink-0" size={20} />
                    Đặt script executable vào /etc/cron.daily hoặc
                    weekly/monthly để cron tự chạy theo chu kỳ.
                </div>
            </div>
            <CodeBlock
                title="/etc/cron.d/myapp"
                code={`SHELL=/bin/bash\nPATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin\n\n# Phút Giờ  Ngày  Tháng Thứ  User      Lệnh\n0     2     *     *     *    ubuntu    /opt/myapp/scripts/backup.sh\n*/5   *     *     *     *    www-data  /opt/myapp/scripts/cleanup.sh`}
                note="Khác user crontab, file trong /etc/cron.d có thêm cột USER."
            />
        </div>
    );
}

function DebugCronSection() {
    const [tab, setTab] = useState("logs");
    const tabs = [
        ["logs", "Log cron"],
        ["journal", "journalctl"],
        ["env", "Giả lập env"],
        ["test", "Test phút sau"],
    ];
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                {tabs.map(([id, label]) => (
                    <button
                        key={id}
                        onClick={() => setTab(id)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold ${tab === id ? "bg-yellow-500 text-slate-950" : "bg-slate-900 text-slate-400 hover:text-slate-200"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="p-5">
                {tab === "logs" && (
                    <CodeBlock
                        title="cron-logs.sh"
                        code={`sudo grep CRON /var/log/syslog | tail -20\nsudo grep CRON /var/log/syslog | grep "ubuntu"\n\n# Realtime\nsudo tail -f /var/log/syslog | grep CRON`}
                    />
                )}
                {tab === "journal" && (
                    <CodeBlock
                        title="journalctl-cron.sh"
                        code={`sudo journalctl -u cron -f\nsudo journalctl -u cron --since today\nsudo journalctl -u cron -n 50`}
                    />
                )}
                {tab === "env" && (
                    <CodeBlock
                        title="test-like-cron.sh"
                        code={`env -i HOME=/home/ubuntu \\\n       SHELL=/bin/bash \\\n       PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin \\\n       /home/ubuntu/scripts/backup.sh`}
                        note="Cron chạy với môi trường rất tối giản. env -i giúp bạn tái hiện môi trường đó để debug."
                    />
                )}
                {tab === "test" && (
                    <CodeBlock
                        title="test-next-minute.txt"
                        code={`date\n# Nếu giờ hiện tại là 10:24, thêm job chạy lúc 10:25:\n25 10 * * * /path/script.sh >> /tmp/test_cron.log 2>&1\n\n# Đến 10:25, xem log:\ntail -f /tmp/test_cron.log`}
                    />
                )}
            </div>
        </div>
    );
}

function AnacronSection() {
    return (
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h4 className="font-bold text-white mb-4">
                    Cron thường vs anacron
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4">
                        <div className="text-red-300 font-bold">
                            Cron thường
                        </div>
                        <p className="text-sm text-slate-400 mt-2">
                            Máy tắt lúc 2:00 thì job backup bị bỏ qua, không
                            chạy bù.
                        </p>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4">
                        <div className="text-green-300 font-bold">anacron</div>
                        <p className="text-sm text-slate-400 mt-2">
                            Nếu bỏ lỡ, lần sau bật máy sẽ chạy bù sau thời gian
                            trễ.
                        </p>
                    </div>
                </div>
            </div>
            <CodeBlock
                title="/etc/anacrontab"
                code={`# Kỳ(ngày)  Trễ(phút)  Tên job     Lệnh\n  1          5          backup      /home/ubuntu/scripts/backup.sh\n  7          10         cleanup     /home/ubuntu/scripts/cleanup.sh\n  30         15         monthly     /home/ubuntu/scripts/monthly.sh\n\n# Xem lần cuối chạy\nls -la /var/spool/anacron/\ncat /var/spool/anacron/backup\n\n# Test thủ công\nsudo anacron -f -d`}
            />
        </div>
    );
}

function CronManagerSection() {
    return (
        <CodeBlock
            title="cron_manager.sh"
            code={`#!/bin/bash\n# cron_manager.sh – Thêm/xoá/xem cron job dễ dàng\n\nhuong_dan() {\n    cat << EOF\nDùng: $0 <lệnh>\n\n  list              Xem tất cả cron job\n  add "* * * * *" "lệnh"    Thêm job mới\n  remove <từ_khoá>  Xoá job chứa từ khoá\n  test <script>     Chạy thử script trong môi trường cron\n  log               Xem log cron gần đây\nEOF\n}\n\nxem_danh_sach() {\n    echo "╔══════════════════════════════════════════╗"\n    echo "║           DANH SÁCH CRON JOB             ║"\n    echo "╚══════════════════════════════════════════╝"\n    if crontab -l 2>/dev/null | grep -v "^#" | grep -v "^$"; then\n        :\n    else\n        echo "  (Chưa có cron job nào)"\n    fi\n}\n\nthem_job() {\n    local lich=$1\n    local lenh=$2\n    local dong="$lich $lenh"\n\n    if crontab -l 2>/dev/null | grep -qF "$lenh"; then\n        echo "Job đã tồn tại!"\n        return 1\n    fi\n\n    (crontab -l 2>/dev/null; echo "$dong") | crontab -\n    echo "✓ Đã thêm: $dong"\n}\n\nxoa_job() {\n    local tu_khoa=$1\n    local truoc=$(crontab -l 2>/dev/null | wc -l)\n\n    crontab -l 2>/dev/null | grep -v "$tu_khoa" | crontab -\n\n    local sau=$(crontab -l 2>/dev/null | wc -l)\n    local da_xoa=$((truoc - sau))\n\n    if [ $da_xoa -gt 0 ]; then\n        echo "✓ Đã xoá $da_xoa job chứa '$tu_khoa'"\n    else\n        echo "Không tìm thấy job nào chứa '$tu_khoa'"\n    fi\n}\n\nchay_thu() {\n    local script=$1\n    echo "Chạy thử: $script"\n    env -i HOME=$HOME SHELL=/bin/bash \\\n        PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin \\\n        bash "$script"\n    echo "Exit code: $?"\n}\n\nxem_log() {\n    echo "=== LOG CRON (20 dòng gần nhất) ==="\n    sudo grep CRON /var/log/syslog 2>/dev/null | tail -20 \\\n        || sudo journalctl -u cron -n 20\n}\n\ncase ${"{"}1:-""{'}'} in\n    list)    xem_danh_sach ;;\n    add)     them_job "$2" "$3" ;;\n    remove)  xoa_job "$2" ;;\n    test)    chay_thu "$2" ;;\n    log)     xem_log ;;\n    *)       huong_dan ;;\nesac\n\n# Ví dụ dùng:\n# ./cron_manager.sh list\n# ./cron_manager.sh add "0 2 * * *" "/home/ubuntu/scripts/backup.sh >> /var/log/backup.log 2>&1"\n# ./cron_manager.sh remove "backup.sh"\n# ./cron_manager.sh test /home/ubuntu/scripts/backup.sh\n# ./cron_manager.sh log`}
        />
    );
}

function CommonErrorsSection() {
    const [tab, setTab] = useState("path");
    const tabs = [
        ["path", "PATH"],
        ["percent", "%"],
        ["env", "ENV"],
        ["log", "Log"],
        ["overlap", "Overlap"],
    ];
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                {tabs.map(([id, label]) => (
                    <button
                        key={id}
                        onClick={() => setTab(id)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold ${tab === id ? "bg-rose-500 text-white" : "bg-slate-900 text-slate-400 hover:text-slate-200"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="p-5">
                {tab === "path" && (
                    <div className="grid lg:grid-cols-2 gap-6">
                        <RuleCard
                            bad
                            title="Sai"
                            code={`* * * * * python script.py`}
                            desc="Cron không tìm thấy python hoặc script.py."
                        />
                        <RuleCard
                            ok
                            title="Đúng"
                            code={`* * * * * /usr/bin/python3 /home/ubuntu/script.py`}
                            desc="Dùng which python3 để lấy đường dẫn tuyệt đối."
                        />
                    </div>
                )}
                {tab === "percent" && (
                    <div className="grid lg:grid-cols-2 gap-6">
                        <RuleCard
                            bad
                            title="Sai"
                            code={`0 2 * * * echo "$(date +%Y-%m-%d)" >> /var/log/date.log`}
                            desc="% trong crontab có nghĩa xuống dòng."
                        />
                        <RuleCard
                            ok
                            title="Đúng"
                            code={`0 2 * * * echo "$(date +\\%Y-\\%m-\\%d)" >> /var/log/date.log`}
                            desc="Escape % thành \%."
                        />
                    </div>
                )}
                {tab === "env" && (
                    <div className="grid lg:grid-cols-2 gap-6">
                        <RuleCard
                            bad
                            title="Sai"
                            code={`0 2 * * * $HOME/scripts/backup.sh`}
                            desc="$HOME có thể không như bạn nghĩ trong cron."
                        />
                        <RuleCard
                            ok
                            title="Đúng"
                            code={`0 2 * * * /home/ubuntu/scripts/backup.sh`}
                            desc="Dùng đường dẫn tuyệt đối."
                        />
                    </div>
                )}
                {tab === "log" && (
                    <div className="grid lg:grid-cols-2 gap-6">
                        <RuleCard
                            bad
                            title="Khó debug"
                            code={`0 2 * * * /script.sh > /dev/null 2>&1`}
                            desc="Không biết lỗi gì khi script fail."
                        />
                        <RuleCard
                            ok
                            title="Tốt hơn"
                            code={`0 2 * * * /script.sh >> /tmp/cron_debug.log 2>&1`}
                            desc="Ghi log khi debug."
                        />
                    </div>
                )}
                {tab === "overlap" && (
                    <CodeBlock
                        title="flock-fix.cron"
                        code={`# Nếu job chạy lâu hơn interval, nhiều instance có thể chồng lên nhau\n# Sửa bằng flock:\n*/5 * * * * flock -n /tmp/myjob.lock -c "/script.sh"\n# -n: không chờ, bỏ qua nếu job trước đang chạy`}
                    />
                )}
            </div>
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
            title: "Cú pháp",
            rows: [
                ["* * * * *", "phút giờ ngày tháng thứ"],
                ["*", "mọi giá trị"],
                [",", "liệt kê"],
                ["-", "dải"],
                ["/", "bước nhảy"],
            ],
        },
        {
            title: "Crontab",
            rows: [
                ["crontab -l", "xem"],
                ["crontab -e", "sửa"],
                ["crontab -r", "xóa hết"],
                ["crontab -i", "xóa có xác nhận"],
            ],
        },
        {
            title: "Chuỗi đặc biệt",
            rows: [
                ["@reboot", "khi boot"],
                ["@daily", "mỗi ngày"],
                ["@weekly", "mỗi tuần"],
                ["@monthly", "mỗi tháng"],
                ["@hourly", "mỗi giờ"],
            ],
        },
        {
            title: "Debug",
            rows: [
                ["grep CRON", "syslog"],
                ["journalctl -u cron", "log service"],
                ["env -i", "giả lập môi trường"],
                [">> log 2>&1", "ghi stdout+stderr"],
            ],
        },
        {
            title: "Quy tắc vàng",
            rows: [
                ["absolute path", "đường dẫn tuyệt đối"],
                ["\\%", "escape %"],
                ["flock", "chống chạy chồng"],
                ["MAILTO", "email output"],
                ["anacron", "chạy bù"],
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
        question: "Biểu thức cron nào chạy mỗi ngày lúc 02:00?",
        options: ["0 2 * * *", "2 0 * * *", "*/2 * * * *", "@hourly"],
        correct: 0,
        explanation:
            "Trường đầu là phút, trường hai là giờ. 0 2 * * * nghĩa là phút 0, giờ 2, mọi ngày.",
    },
    {
        question: "Lệnh nào dùng để sửa crontab của user hiện tại?",
        options: ["crontab -l", "crontab -e", "crontab -r", "cron edit"],
        correct: 1,
        explanation: "crontab -e mở editor để sửa crontab.",
    },
    {
        question: "Vì sao trong cron nên dùng đường dẫn tuyệt đối?",
        options: [
            "Vì cron có PATH tối giản",
            "Vì cron không chạy bash",
            "Vì đường dẫn tương đối bị cấm",
            "Vì chmod cần nó",
        ],
        correct: 0,
        explanation:
            "Cron không có môi trường giống terminal đăng nhập, PATH thường rất tối giản.",
    },
    {
        question:
            "Ký tự % trong crontab cần xử lý thế nào khi dùng trong date +%Y?",
        options: [
            "Không cần làm gì",
            "Escape thành \\%",
            "Đổi thành #",
            "Xóa luôn",
        ],
        correct: 1,
        explanation:
            "% trong crontab có ý nghĩa đặc biệt, nên cần escape thành \%.",
    },
    {
        question: "Dùng công cụ nào để tránh cron job chạy chồng lên nhau?",
        options: ["grep", "flock", "tail", "anacron"],
        correct: 1,
        explanation:
            "flock dùng file lock để bỏ qua hoặc chờ nếu instance trước vẫn đang chạy.",
    },
    {
        question: "anacron hữu ích khi nào?",
        options: [
            "Máy không chạy 24/7 và có thể bỏ lỡ cron",
            "Cần chạy mỗi giây",
            "Cần xóa crontab",
            "Cần sửa quyền file",
        ],
        correct: 0,
        explanation:
            "anacron chạy bù các job định kỳ nếu máy tắt vào thời điểm cron đáng lẽ chạy.",
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
