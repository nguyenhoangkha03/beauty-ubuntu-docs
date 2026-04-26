import React, { useMemo, useState } from "react";

import {
    Terminal,
    FileCode2,
    Play,
    KeyRound,
    CheckCircle2,
    XCircle,
    Info,
    Copy,
    Bug,
    FolderTree,
    Archive,
    Activity,
    Cpu,
    HardDrive,
    MemoryStick,
    Clock,
    ChevronRight,
    ShieldCheck,
    ListChecks,
    Sparkles,
    AlertTriangle,
    ArrowRight,
    Code2,
    Braces,
    Hash,
    PackageCheck,
    RotateCcw,
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
                                Automation · Terminal · Bash
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 8
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 8.1
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" /> Tự
                        động hóa công việc lặp lại bằng Bash
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Bash Script Là Gì? <br />
                        <span className="text-orange-500">
                            Tạo Script Đầu Tiên
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Thay vì gõ từng lệnh mỗi ngày, bạn gom chúng vào một
                        file <code className="text-orange-300">.sh</code>, cấp
                        quyền chạy, rồi để Linux thực hiện tuần tự từ trên xuống
                        dưới.
                    </p>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <ConceptCard />
                    <ScriptFlowDemo />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="blue"
                        icon={<FileCode2 size={22} />}
                        title="Cấu trúc một Bash Script"
                        subtitle="Một script tốt luôn bắt đầu bằng shebang, có comment rõ ràng, và chạy các lệnh theo thứ tự."
                    />
                    <div className="grid lg:grid-cols-2 gap-6">
                        <CodeBlock
                            title="hello-minimal.sh"
                            code={`#!/bin/bash\n# Đây là comment: dòng giải thích, không chạy\n\necho "Hello, Ubuntu!"`}
                        />
                        <ShebangExplainer />
                    </div>
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="orange"
                        icon={<Terminal size={22} />}
                        title="Tạo & Chạy Script Đầu Tiên"
                        subtitle="Đi theo 4 bước: tạo file, lưu file, cấp quyền thực thi, chạy script."
                    />
                    <CreateRunWizard />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="green"
                        icon={<Hash size={22} />}
                        title="echo – In ra Terminal"
                        subtitle="echo dùng để in chữ, in màu, in dòng trống, hoặc in kết quả của lệnh khác."
                    />
                    <EchoPlayground />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="purple"
                        icon={<Braces size={22} />}
                        title="Biến Trong Script"
                        subtitle="Biến giúp script linh hoạt: lưu tên, ngày giờ, đường dẫn, kết quả lệnh, phép tính."
                    />
                    <VariablesSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="pink"
                        icon={<PackageCheck size={22} />}
                        title="2 Script Thực Tế"
                        subtitle="Backup website và kiểm tra sức khỏe server là hai ví dụ rất gần với công việc quản trị Linux."
                    />
                    <RealScriptsTabs />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="yellow"
                        icon={<Bug size={22} />}
                        title="Debug Script"
                        subtitle="Khi script chạy sai, đừng đoán mò. Hãy bật debug để xem từng lệnh đang được thực thi."
                    />
                    <DebugSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="cyan"
                        icon={<FolderTree size={22} />}
                        title="Cấu Trúc Thư Mục Script Tốt"
                        subtitle="Đưa script vào ~/bin hoặc /usr/local/bin để chạy ở mọi nơi như một lệnh thật."
                    />
                    <PathSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="8"
                        color="teal"
                        icon={<ListChecks size={22} />}
                        title="Tóm tắt nhanh"
                        subtitle="Những lệnh, ký hiệu và quy tắc bạn cần nhớ sau bài này."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <ShieldCheck className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức Bash Script
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Trả lời để kiểm tra bạn đã nắm chắc bài 8.1
                                    chưa.
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
                        Bạn đã biết tạo script đầu tiên. Bước tiếp theo là làm
                        script biết nhận dữ liệu từ người dùng.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                        Bài tiếp theo: 8.2 — Biến, kiểu dữ liệu & nhập liệu{" "}
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
        orange: "bg-orange-500/20 text-orange-400",
        green: "bg-green-500/20 text-green-400",
        purple: "bg-purple-500/20 text-purple-400",
        pink: "bg-pink-500/20 text-pink-400",
        yellow: "bg-yellow-500/20 text-yellow-400",
        cyan: "bg-cyan-500/20 text-cyan-400",
        teal: "bg-teal-500/20 text-teal-400",
    };
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
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
        </div>
    );
}

function Kbd({ children }) {
    return (
        <kbd className="bg-slate-800 border border-slate-600 text-slate-200 px-2 py-1 rounded-md text-xs font-sans shadow-sm inline-block">
            {children}
        </kbd>
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

function ConceptCard() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-orange-500/15 text-orange-400 rounded-2xl flex items-center justify-center">
                    <FileCode2 size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        Bash Script là gì?
                    </h3>
                    <p className="text-slate-500 text-sm">
                        File văn bản chứa các lệnh shell
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5">
                    <div className="text-red-400 font-bold mb-3 flex items-center gap-2">
                        <XCircle size={18} /> Làm thủ công
                    </div>
                    <div className="font-mono text-sm text-slate-400 space-y-2">
                        <div>$ mkdir backup</div>
                        <div>$ cp *.txt backup/</div>
                        <div>$ zip backup.zip backup/</div>
                        <div>$ echo "Xong!"</div>
                    </div>
                    <p className="text-xs text-slate-500 mt-4">
                        Ngày nào cũng gõ lại nhiều lệnh.
                    </p>
                </div>
                <div className="bg-slate-950 rounded-2xl border border-orange-500/30 p-5 shadow-[0_0_30px_rgba(249,115,22,0.08)]">
                    <div className="text-green-400 font-bold mb-3 flex items-center gap-2">
                        <CheckCircle2 size={18} /> Dùng script
                    </div>
                    <div className="font-mono text-sm text-slate-300 space-y-2">
                        <div>$ ./backup.sh</div>
                        <div className="text-green-400">→ tự chạy toàn bộ</div>
                    </div>
                    <p className="text-xs text-slate-500 mt-4">
                        Một lệnh, chạy hết quy trình.
                    </p>
                </div>
            </div>
            <div className="mt-5 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 text-sm text-blue-100 flex gap-3">
                <Info size={20} className="text-blue-400 shrink-0 mt-0.5" />
                <p>
                    <strong>Bash Script</strong> chạy tuần tự từ trên xuống
                    dưới, có thể truyền tham số, xử lý lỗi, ghi log và lập lịch
                    tự động bằng cron.
                </p>
            </div>
        </div>
    );
}

function ScriptFlowDemo() {
    const [step, setStep] = useState(0);
    const steps = [
        {
            title: "1. Viết lệnh vào file",
            cmd: "nano hello.sh",
            desc: "Tạo file văn bản chứa các lệnh Bash.",
        },
        {
            title: "2. Cấp quyền chạy",
            cmd: "chmod +x hello.sh",
            desc: "Thêm quyền executable để Linux cho phép chạy trực tiếp.",
        },
        {
            title: "3. Chạy script",
            cmd: "./hello.sh",
            desc: "Dấu ./ nghĩa là chạy file ở thư mục hiện tại.",
        },
        {
            title: "4. Nhận output",
            cmd: "Xin chào Ubuntu Linux!",
            desc: "Script in kết quả ra terminal và kết thúc.",
        },
    ];
    return (
        <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Play className="text-orange-400" /> Mô phỏng quy trình chạy
                script
            </h3>
            <p className="text-slate-400 mb-6">
                Bấm từng bước để xem Linux xử lý script như thế nào.
            </p>
            <div className="grid grid-cols-4 gap-2 mb-6">
                {steps.map((s, i) => (
                    <button
                        key={s.title}
                        onClick={() => setStep(i)}
                        className={`h-2 rounded-full transition-all ${i <= step ? "bg-orange-500" : "bg-slate-700"}`}
                        aria-label={s.title}
                    />
                ))}
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 min-h-[220px] flex flex-col justify-between">
                <div>
                    <div className="text-sm text-orange-400 font-bold mb-2">
                        {steps[step].title}
                    </div>
                    <div className="font-mono text-lg md:text-xl text-green-400 bg-black/40 rounded-xl p-4 border border-slate-800">
                        $ {steps[step].cmd}
                    </div>
                    <p className="text-slate-400 mt-4">{steps[step].desc}</p>
                </div>
                <div className="flex justify-between mt-6">
                    <button
                        onClick={() => setStep(Math.max(0, step - 1))}
                        className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-sm disabled:opacity-40"
                        disabled={step === 0}
                    >
                        Quay lại
                    </button>
                    <button
                        onClick={() =>
                            setStep(Math.min(steps.length - 1, step + 1))
                        }
                        className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold disabled:opacity-40"
                        disabled={step === steps.length - 1}
                    >
                        Tiếp tục
                    </button>
                </div>
            </div>
        </div>
    );
}

function ShebangExplainer() {
    const items = [
        [
            "#!/bin/bash",
            "Dùng Bash trực tiếp tại /bin/bash. Phổ biến nhất trên Ubuntu.",
        ],
        ["#!/bin/sh", "Dùng sh. Portable hơn nhưng ít tính năng Bash hơn."],
        [
            "#!/usr/bin/env bash",
            "Tự tìm bash trong PATH. Linh hoạt khi môi trường khác nhau.",
        ],
    ];
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <KeyRound className="text-blue-400" /> Shebang là gì?
            </h4>
            <p className="text-slate-400 mb-5 text-sm">
                Dòng đầu tiên báo cho hệ thống biết nên dùng chương trình nào để
                chạy file script.
            </p>
            <div className="space-y-3">
                {items.map(([cmd, desc]) => (
                    <div
                        key={cmd}
                        className="bg-slate-950 border border-slate-800 rounded-xl p-4"
                    >
                        <code className="text-green-400 font-semibold">
                            {cmd}
                        </code>
                        <p className="text-slate-400 text-sm mt-1">{desc}</p>
                    </div>
                ))}
            </div>
            <div className="mt-4 bg-red-500/10 border border-red-500/20 text-red-200 rounded-xl p-4 text-sm flex gap-3">
                <AlertTriangle size={18} className="text-red-400 shrink-0" />{" "}
                Thiếu shebang có thể làm script chạy sai shell hoặc báo lỗi khó
                hiểu.
            </div>
        </div>
    );
}

function CreateRunWizard() {
    const [active, setActive] = useState(0);
    const steps = [
        {
            title: "Bước 1 — Tạo file script",
            command: "nano hello.sh",
            body: `#!/bin/bash\n# Script đầu tiên của tôi\n# Tác giả: Ubuntu Learner\n\necho "==========================="\necho "   Xin chào Ubuntu Linux!  "\necho "==========================="\necho ""\necho "Ngày hôm nay: $(date)"\necho "Bạn đang đăng nhập là: $(whoami)"\necho "Thư mục hiện tại: $(pwd)"\necho "Hostname: $(hostname)"\necho "Uptime  : $(uptime -p)"`,
        },
        {
            title: "Bước 2 — Lưu file trong nano",
            command: "Ctrl + O → Enter → Ctrl + X",
            body: "Ctrl + O: ghi file ra đĩa\nEnter: xác nhận tên file\nCtrl + X: thoát nano",
        },
        {
            title: "Bước 3 — Cấp quyền thực thi",
            command: "chmod +x hello.sh",
            body: "Kiểm tra quyền:\nls -l hello.sh\n\nKết quả mong muốn:\n-rwxr-xr-x 1 ubuntu ubuntu 245 Jan 15 10:00 hello.sh\n   ↑\n   x = executable, file có quyền chạy",
        },
        {
            title: "Bước 4 — Chạy script",
            command: "./hello.sh",
            body: "Cách 1: ./hello.sh       # cần chmod +x\nCách 2: bash hello.sh    # không cần chmod +x\nCách 3: sh hello.sh      # dùng sh, có thể khác bash",
        },
    ];
    return (
        <div className="grid lg:grid-cols-[320px_1fr] gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 space-y-2 h-fit">
                {steps.map((s, i) => (
                    <button
                        key={s.title}
                        onClick={() => setActive(i)}
                        className={`w-full text-left p-4 rounded-xl border transition-all ${active === i ? "bg-orange-500/10 border-orange-500/40 text-white" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                    >
                        <div className="flex items-center gap-3">
                            <span
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${active === i ? "bg-orange-500 text-white" : "bg-slate-800 text-slate-500"}`}
                            >
                                {i + 1}
                            </span>
                            <span className="font-semibold text-sm">
                                {s.title}
                            </span>
                        </div>
                    </button>
                ))}
            </div>
            <div className="space-y-4">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                    <div className="text-sm text-slate-500 mb-2">
                        Lệnh cần chạy
                    </div>
                    <div className="font-mono text-green-400 bg-black/40 rounded-xl p-4 border border-slate-800">
                        $ {steps[active].command}
                    </div>
                </div>
                <CodeBlock
                    title="Nội dung / kết quả cần hiểu"
                    code={steps[active].body}
                />
            </div>
        </div>
    );
}

function EchoPlayground() {
    const [mode, setMode] = useState("normal");
    const examples = {
        normal: {
            title: "In chuỗi thường",
            code: `echo "Xin chào!"`,
            output: "Xin chào!",
        },
        nonewline: {
            title: "In không xuống dòng",
            code: `echo -n "Nhập tên: "`,
            output: "Nhập tên: █",
        },
        color: {
            title: "In có màu",
            code: `echo -e "\\e[32mDòng này màu xanh lá\\e[0m"\necho -e "\\e[31mDòng này màu đỏ\\e[0m"`,
            output: "Dòng này màu xanh lá\nDòng này màu đỏ",
        },
        command: {
            title: "In kết quả lệnh",
            code: `echo "Hôm nay là: $(date +%A)"\necho "Có $(ls | wc -l) file trong thư mục này"`,
            output: "Hôm nay là: Monday\nCó 8 file trong thư mục này",
        },
    };
    const palette = [
        ["\\e[0m", "reset"],
        ["\\e[1m", "in đậm"],
        ["\\e[31m", "đỏ"],
        ["\\e[32m", "xanh lá"],
        ["\\e[33m", "vàng"],
        ["\\e[34m", "xanh dương"],
        ["\\e[35m", "tím"],
        ["\\e[36m", "xanh ngọc"],
    ];
    return (
        <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <h4 className="font-bold text-white mb-4">Chọn kiểu echo</h4>
                <div className="grid sm:grid-cols-2 gap-3 mb-5">
                    {Object.entries(examples).map(([key, ex]) => (
                        <button
                            key={key}
                            onClick={() => setMode(key)}
                            className={`p-3 rounded-xl border text-left text-sm transition-all ${mode === key ? "border-green-500/50 bg-green-500/10 text-white" : "border-slate-800 bg-slate-950 text-slate-400 hover:text-slate-200"}`}
                        >
                            {ex.title}
                        </button>
                    ))}
                </div>
                <CodeBlock title="echo-example.sh" code={examples[mode].code} />
            </div>
            <div className="space-y-6">
                <div className="bg-black border border-slate-800 rounded-2xl p-5 min-h-[180px]">
                    <div className="text-xs text-slate-500 mb-3">
                        Terminal output
                    </div>
                    <pre
                        className={`font-mono text-sm whitespace-pre-wrap ${mode === "color" ? "text-green-400" : "text-slate-200"}`}
                    >
                        {examples[mode].output}
                    </pre>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                    <h4 className="font-bold text-white mb-4">
                        Bảng màu thường dùng
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {palette.map(([code, label]) => (
                            <div
                                key={code}
                                className="bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm"
                            >
                                <code className="text-orange-300">{code}</code>
                                <div className="text-slate-500 text-xs mt-1">
                                    {label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function VariablesSection() {
    const specials = [
        ["$0", "Tên script"],
        ["$1", "Tham số thứ 1"],
        ["$2", "Tham số thứ 2"],
        ["$@", "Tất cả tham số"],
        ["$#", "Số lượng tham số"],
        ["$$", "PID của script"],
        ["$?", "Exit code lệnh trước"],
    ];
    return (
        <div className="grid lg:grid-cols-2 gap-6">
            <CodeBlock
                title="variables.sh"
                code={`#!/bin/bash\n\n# Khai báo biến: KHÔNG có dấu cách quanh dấu =\nten="Ubuntu"\nphien_ban=24\nthu_muc="/home/ubuntu"\n\necho "Hệ điều hành: $ten"\necho "Phiên bản: $phien_ban"\necho "Chào mừng đến ${ten}${phien_ban}.04 LTS!"\n\n# Biến từ kết quả lệnh\nngay_hom_nay=$(date +%Y-%m-%d)\nso_file=$(ls /home | wc -l)\necho "Ngày: $ngay_hom_nay"\necho "Số user: $so_file"\n\n# Biến số học\na=10\nb=3\necho "$a + $b = $((a + b))"\necho "$a / $b = $((a / b)) dư $((a % b))"`}
            />
            <div className="space-y-6">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-white mb-4">
                        3 quy tắc vàng về biến
                    </h4>
                    <div className="space-y-3">
                        <Rule ok text={'Đúng: ten="Ubuntu"'} />
                        <Rule bad text={'Sai: ten = "Ubuntu"'} />
                        <Rule ok text={"Dùng biến: $ten hoặc ${ten}"} />
                        <Rule ok text={"Lấy kết quả lệnh: ngay=$(date)"} />
                    </div>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-white mb-4">
                        Biến đặc biệt có sẵn
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {specials.map(([k, v]) => (
                            <div
                                key={k}
                                className="bg-slate-950 border border-slate-800 rounded-xl p-3 flex items-center justify-between gap-3"
                            >
                                <code className="text-orange-300 font-bold">
                                    {k}
                                </code>
                                <span className="text-slate-400 text-sm text-right">
                                    {v}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 text-sm text-slate-500">
                        Ví dụ: chạy{" "}
                        <code className="text-green-400">
                            ./script.sh hello world
                        </code>{" "}
                        thì <code>$1</code> là <code>hello</code>,{" "}
                        <code>$2</code> là <code>world</code>.
                    </div>
                </div>
            </div>
        </div>
    );
}

function Rule({ ok, bad, text }) {
    return (
        <div
            className={`flex items-center gap-3 rounded-xl border p-3 text-sm ${bad ? "bg-red-500/10 border-red-500/20 text-red-200" : "bg-green-500/10 border-green-500/20 text-green-200"}`}
        >
            {bad ? (
                <XCircle size={18} className="text-red-400" />
            ) : (
                <CheckCircle2 size={18} className="text-green-400" />
            )}{" "}
            <code>{text}</code>
        </div>
    );
}

function RealScriptsTabs() {
    const [tab, setTab] = useState("backup");
    const backup = `#!/bin/bash\n# Script: backup.sh\n# Mục đích: Backup thư mục website\n\nNGUON="/var/www/html"\nDICH="/backup/website"\nNGAY=$(date +%Y%m%d_%H%M%S)\nTEN_FILE="backup_$NGAY.tar.gz"\nLOG="/var/log/backup.log"\n\nmkdir -p $DICH\n\necho "[$NGAY] Bắt đầu backup..." | tee -a $LOG\necho "  Nguồn : $NGUON"\necho "  Lưu về: $DICH/$TEN_FILE"\n\ntar -czf $DICH/$TEN_FILE $NGUON 2>/dev/null\n\nif [ $? -eq 0 ]; then\n    KICH_THUOC=$(du -sh $DICH/$TEN_FILE | cut -f1)\n    echo "[$NGAY] Backup thành công! ($KICH_THUOC)" | tee -a $LOG\nelse\n    echo "[$NGAY] Backup THẤT BẠI!" | tee -a $LOG\nfi\n\nfind $DICH -name "backup_*.tar.gz" -mtime +7 -delete\necho "[$NGAY] Đã xoá backup cũ hơn 7 ngày" | tee -a $LOG`;
    const health = `#!/bin/bash\n# system_check.sh – Kiểm tra sức khoẻ server\n\necho -e "\\e[36m╔══════════════════════════════╗\\e[0m"\necho -e "\\e[36m║     SYSTEM HEALTH CHECK      ║\\e[0m"\necho -e "\\e[36m╚══════════════════════════════╝\\e[0m"\necho ""\n\nCPU=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}')\necho -e "\\e[1m🖥  CPU Usage:\\e[0m $CPU%"\n\nRAM_TOTAL=$(free -m | awk '/Mem:/ {print $2}')\nRAM_DUNG=$(free -m | awk '/Mem:/ {print $3}')\nRAM_PCT=$((RAM_DUNG * 100 / RAM_TOTAL))\necho -e "\\e[1m🧠 RAM Usage:\\e[0m ${RAM_DUNG}MB / ${RAM_TOTAL}MB (${RAM_PCT}%)"\n\nDISK=$(df -h / | awk 'NR==2 {print $3"/"$2" ("$5" dùng)"}')\necho -e "\\e[1m💾 Disk /   :\\e[0m $DISK"\n\necho -e "\\e[1m⏱  Uptime   :\\e[0m $(uptime -p)"\nLOAD=$(cat /proc/loadavg | cut -d' ' -f1-3)\necho -e "\\e[1m📊 Load Avg :\\e[0m $LOAD"\n\necho ""\necho "Kiểm tra lúc: $(date '+%H:%M:%S %d/%m/%Y')"`;
    const explain =
        tab === "backup"
            ? [
                  [
                      Archive,
                      "tar -czf",
                      "Nén thư mục nguồn thành file .tar.gz.",
                  ],
                  [
                      Terminal,
                      "tee -a",
                      "Vừa in ra màn hình, vừa ghi thêm vào file log.",
                  ],
                  [Bug, "$?", "Kiểm tra exit code của lệnh tar vừa chạy."],
                  [
                      FolderTree,
                      "find -mtime +7 -delete",
                      "Xóa file backup cũ hơn 7 ngày.",
                  ],
              ]
            : [
                  [Cpu, "top", "Lấy thông tin CPU hiện tại."],
                  [MemoryStick, "free -m", "Xem RAM theo MB."],
                  [HardDrive, "df -h /", "Xem dung lượng phân vùng root."],
                  [Clock, "uptime -p", "Hiển thị máy đã chạy bao lâu."],
              ];
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                <button
                    onClick={() => setTab("backup")}
                    className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 ${tab === "backup" ? "bg-orange-500 text-white" : "bg-slate-900 text-slate-400 hover:text-slate-200"}`}
                >
                    <Archive size={16} /> Backup file
                </button>
                <button
                    onClick={() => setTab("health")}
                    className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 ${tab === "health" ? "bg-blue-500 text-white" : "bg-slate-900 text-slate-400 hover:text-slate-200"}`}
                >
                    <Activity size={16} /> Kiểm tra hệ thống
                </button>
            </div>
            <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-0">
                <div className="p-5">
                    <CodeBlock
                        title={
                            tab === "backup" ? "backup.sh" : "system_check.sh"
                        }
                        code={tab === "backup" ? backup : health}
                    />
                </div>
                <div className="p-5 border-t lg:border-t-0 lg:border-l border-slate-800 bg-slate-950/30">
                    <h4 className="font-bold text-white mb-4">
                        Các mảnh ghép quan trọng
                    </h4>
                    <div className="space-y-3">
                        {explain.map(([Icon, cmd, desc]) => (
                            <div
                                key={cmd}
                                className="bg-slate-900 border border-slate-800 rounded-xl p-4"
                            >
                                <div className="flex items-center gap-2 font-bold text-orange-300">
                                    <Icon size={17} /> <code>{cmd}</code>
                                </div>
                                <p className="text-sm text-slate-400 mt-1">
                                    {desc}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-5 bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 text-sm text-yellow-100 flex gap-3">
                        <AlertTriangle
                            size={18}
                            className="text-yellow-400 shrink-0"
                        />{" "}
                        Khi script ghi vào /var/log hoặc /backup, bạn có thể cần
                        quyền sudo tùy cấu hình máy.
                    </div>
                </div>
            </div>
        </div>
    );
}

function DebugSection() {
    return (
        <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
                <CodeBlock
                    title="Chạy script ở chế độ debug"
                    code={`bash -x hello.sh\n\n# Output mẫu:\n+ echo '==========================='\n===========================\n+ echo '   Xin chào Ubuntu Linux!  '\n   Xin chào Ubuntu Linux!`}
                />
                <CodeBlock
                    title="Bật/tắt debug trong script"
                    code={`#!/bin/bash\nset -x    # bật debug từ đây\n\necho "lệnh 1"\necho "lệnh 2"\n\nset +x    # tắt debug từ đây\necho "lệnh 3 (không debug)"`}
                />
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-fit">
                <h4 className="text-lg font-bold text-white mb-4">
                    set hữu ích
                </h4>
                <div className="space-y-3">
                    <DebugFlag
                        flag="set -e"
                        desc="Dừng ngay nếu có lệnh lỗi."
                    />
                    <DebugFlag
                        flag="set -u"
                        desc="Báo lỗi nếu dùng biến chưa khai báo."
                    />
                    <DebugFlag flag="set -x" desc="In từng lệnh đang chạy." />
                    <DebugFlag
                        flag="set -euo pipefail"
                        desc="Cấu hình thường dùng cho script production."
                        highlight
                    />
                </div>
            </div>
        </div>
    );
}

function DebugFlag({ flag, desc, highlight }) {
    return (
        <div
            className={`rounded-xl border p-4 ${highlight ? "bg-orange-500/10 border-orange-500/30" : "bg-slate-950 border-slate-800"}`}
        >
            <code
                className={
                    highlight
                        ? "text-orange-300 font-bold"
                        : "text-green-400 font-bold"
                }
            >
                {flag}
            </code>
            <p className="text-slate-400 text-sm mt-1">{desc}</p>
        </div>
    );
}

function PathSection() {
    return (
        <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-white mb-5">
                    Nên đặt script ở đâu?
                </h4>
                <div className="space-y-4">
                    <PathRow
                        path="/usr/local/bin/"
                        desc="Script dùng cho cả hệ thống, mọi user đều chạy được nếu có quyền."
                    />
                    <PathRow
                        path="~/bin/"
                        desc="Script riêng của user, tiện để chạy như lệnh cá nhân."
                    />
                    <PathRow
                        path="~/scripts/"
                        desc="Thư mục tổ chức script khi học tập hoặc phát triển."
                    />
                </div>
            </div>
            <CodeBlock
                title="Đưa script vào PATH"
                code={`# Thêm ~/bin vào PATH\necho 'export PATH="$HOME/bin:$PATH"' >> ~/.bashrc\nsource ~/.bashrc\n\n# Đặt script vào ~/bin\ncp backup.sh ~/bin/backup\nchmod +x ~/bin/backup\n\n# Giờ chạy ở đâu cũng được\nbackup`}
            />
        </div>
    );
}

function PathRow({ path, desc }) {
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex gap-3">
            <FolderTree className="text-cyan-400 shrink-0" size={20} />
            <div>
                <code className="text-orange-300 font-bold">{path}</code>
                <p className="text-slate-400 text-sm mt-1">{desc}</p>
            </div>
        </div>
    );
}

function SummaryGrid() {
    const groups = [
        {
            title: "Tạo script",
            rows: [
                ["#!/bin/bash", "Dòng đầu tiên"],
                ["# comment", "Ghi chú"],
                ["chmod +x script.sh", "Cấp quyền"],
                ["./script.sh", "Chạy trực tiếp"],
                ["bash script.sh", "Chạy không cần +x"],
            ],
        },
        {
            title: "Biến",
            rows: [
                ['ten="hello"', "Khai báo, không cách"],
                ["$ten / ${ten}", "Dùng biến"],
                ["ket_qua=$(lệnh)", "Lấy output lệnh"],
                ["$((a + b))", "Tính toán"],
            ],
        },
        {
            title: "Biến đặc biệt",
            rows: [
                ["$0", "Tên script"],
                ["$1", "Tham số thứ 1"],
                ["$@", "Tất cả tham số"],
                ["$#", "Số lượng tham số"],
                ["$?", "Exit code"],
                ["$$", "PID"],
            ],
        },
        {
            title: "Debug",
            rows: [
                ["bash -x script.sh", "Chạy debug"],
                ["set -e", "Dừng khi lỗi"],
                ["set -u", "Bắt biến chưa khai báo"],
                ["set -x", "In từng lệnh"],
            ],
        },
    ];
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {groups.map((g) => (
                <div
                    key={g.title}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-5"
                >
                    <h4 className="font-bold text-white mb-4">{g.title}</h4>
                    <div className="space-y-2">
                        {g.rows.map(([cmd, desc]) => (
                            <div
                                key={cmd}
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
        question: "Bash Script là gì?",
        options: [
            "Một file ảnh giao diện Ubuntu",
            "Một file văn bản chứa các lệnh shell chạy tuần tự",
            "Một trình duyệt web",
            "Một loại phân vùng ổ cứng",
        ],
        correct: 1,
        explanation:
            "Bash Script là file text chứa lệnh shell. Khi chạy, các lệnh thường được thực thi từ trên xuống dưới.",
    },
    {
        question: "Dòng #!/bin/bash ở đầu script được gọi là gì?",
        options: ["Pipeline", "Alias", "Shebang", "Exit code"],
        correct: 2,
        explanation:
            "Shebang cho hệ thống biết dùng chương trình nào, ở đây là Bash, để chạy file script.",
    },
    {
        question: "Lệnh nào cấp quyền thực thi cho file hello.sh?",
        options: [
            "chmod +x hello.sh",
            "sudo run hello.sh",
            "exec hello.sh",
            "permission hello.sh",
        ],
        correct: 0,
        explanation:
            "chmod +x thêm quyền executable. Sau đó bạn có thể chạy bằng ./hello.sh.",
    },
    {
        question: "Cách khai báo biến nào đúng trong Bash?",
        options: [
            "ten = Ubuntu",
            'ten="Ubuntu"',
            "$ten=Ubuntu",
            "var ten Ubuntu",
        ],
        correct: 1,
        explanation:
            "Bash không cho phép dấu cách quanh dấu = khi khai báo biến.",
    },
    {
        question: "Biến đặc biệt nào chứa exit code của lệnh vừa chạy?",
        options: ["$0", "$@", "$?", "$$"],
        correct: 2,
        explanation:
            "$? chứa mã thoát của lệnh trước. 0 thường nghĩa là thành công.",
    },
    {
        question:
            "Lệnh nào chạy script ở chế độ debug, in từng lệnh đang chạy?",
        options: [
            "bash -x hello.sh",
            "bash --fast hello.sh",
            "debug hello.sh",
            "chmod -d hello.sh",
        ],
        correct: 0,
        explanation:
            "bash -x script.sh giúp bạn nhìn thấy từng lệnh sau khi shell mở rộng biến và thực thi.",
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
