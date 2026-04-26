import React, { useMemo, useState } from "react";
import {
    Terminal,
    GitBranch,
    Split,
    Binary,
    Type,
    FileSearch,
    Link2,
    ShieldCheck,
    Server,
    Menu,
    Zap,
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
    Folder,
    FileText,
    Lock,
    Eye,
    Settings,
    Activity,
    Gauge,
    ArrowRight,
    Code2,
    SearchCheck,
    Workflow,
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
                                Bash Script · Conditions · Control Flow
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 8
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 8.3
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" /> Cho
                        script biết ra quyết định
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Câu Lệnh Điều Kiện <br />
                        <span className="text-orange-500">if, else, case</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Điều kiện giúp Bash Script chọn hướng xử lý: file có tồn
                        tại không, user nhập đúng chưa, dịch vụ đang chạy không,
                        và nên thực hiện hành động nào.
                    </p>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <ConditionConceptCard />
                    <IfFlowSimulator />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="blue"
                        icon={<GitBranch size={22} />}
                        title="if – Cấu trúc cơ bản"
                        subtitle="if chạy một khối lệnh khi điều kiện đúng. else chạy khi điều kiện sai. elif dùng cho nhiều nhánh."
                    />
                    <IfStructureSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="purple"
                        icon={<Binary size={22} />}
                        title="Toán tử so sánh"
                        subtitle="Bash có nhóm toán tử riêng cho số, chuỗi, file và thư mục."
                    />
                    <OperatorsTabs />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="green"
                        icon={<Link2 size={22} />}
                        title="Kết hợp điều kiện"
                        subtitle="Dùng AND, OR, NOT để xây dựng điều kiện thực tế phức tạp hơn."
                    />
                    <CombineConditionsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="orange"
                        icon={<Code2 size={22} />}
                        title="[ ] vs [[ ]] – Dùng cái nào?"
                        subtitle="[ ] là POSIX, còn [[ ]] là Bash mở rộng: an toàn hơn, hỗ trợ wildcard và regex."
                    />
                    <BracketComparison />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="cyan"
                        icon={<SearchCheck size={22} />}
                        title="Ví dụ thực tế với if"
                        subtitle="Kiểm tra tham số, kiểm tra file, monitor dịch vụ và phân loại điểm."
                    />
                    <RealIfExamples />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="pink"
                        icon={<Menu size={22} />}
                        title="case – Nhiều nhánh gọn hơn"
                        subtitle="case phù hợp khi kiểm tra một biến với nhiều giá trị cố định, như menu hoặc action dòng lệnh."
                    />
                    <CaseSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="yellow"
                        icon={<Zap size={22} />}
                        title="Một dòng – Viết ngắn gọn"
                        subtitle="Dùng && và || khi điều kiện đơn giản, ví dụ tạo thư mục nếu chưa có hoặc kiểm tra mạng."
                    />
                    <OneLineSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="8"
                        color="teal"
                        icon={<ListChecks size={22} />}
                        title="Tóm tắt nhanh"
                        subtitle="Các cấu trúc và toán tử bạn cần nhớ sau bài 8.3."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <ShieldCheck className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức bài 8.3
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Ôn lại if, toán tử, [[ ]], case và viết gọn
                                    bằng && / ||.
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
                        Script đã biết ra quyết định. Tiếp theo là cho script
                        lặp lại công việc hàng trăm lần.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                        Bài tiếp theo: 8.4 — Vòng lặp for, while, until{" "}
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
        pink: "bg-pink-500/20 text-pink-400",
        yellow: "bg-yellow-500/20 text-yellow-400",
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

function ConditionConceptCard() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-orange-500/15 text-orange-400 rounded-2xl flex items-center justify-center">
                    <GitBranch size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        Điều kiện là gì?
                    </h3>
                    <p className="text-slate-500 text-sm">
                        Cơ chế rẽ nhánh trong script
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-3 mb-5">
                <MiniConcept
                    icon={<Binary size={18} />}
                    title="Số"
                    desc="tuổi, điểm, dung lượng"
                />
                <MiniConcept
                    icon={<Type size={18} />}
                    title="Chuỗi"
                    desc="tên, action, pattern"
                />
                <MiniConcept
                    icon={<FileSearch size={18} />}
                    title="File"
                    desc="tồn tại, đọc, ghi, chạy"
                />
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm space-y-2">
                <div>
                    <span className="text-purple-400">if</span> [{" "}
                    <span className="text-green-400">$diem -ge 50</span> ];{" "}
                    <span className="text-purple-400">then</span>
                </div>
                <div className="pl-5 text-slate-300">echo "Đậu"</div>
                <div>
                    <span className="text-purple-400">else</span>
                </div>
                <div className="pl-5 text-slate-300">echo "Rớt"</div>
                <div>
                    <span className="text-purple-400">fi</span>
                </div>
            </div>
            <div className="mt-5 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 text-sm text-blue-100 flex gap-3">
                <Info size={20} className="text-blue-400 shrink-0 mt-0.5" />
                <p>
                    <strong>fi</strong> là kết thúc của <strong>if</strong>.
                    Trong Bash, nhiều block kết thúc bằng từ khóa viết ngược như{" "}
                    <code className="text-white">case ... esac</code>.
                </p>
            </div>
        </div>
    );
}

function MiniConcept({ icon, title, desc }) {
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
            <div className="text-orange-400 mb-2">{icon}</div>
            <div className="font-bold text-white text-sm">{title}</div>
            <div className="text-xs text-slate-500 mt-1">{desc}</div>
        </div>
    );
}

function IfFlowSimulator() {
    const [score, setScore] = useState(85);
    const result = useMemo(() => {
        if (score >= 90)
            return {
                branch: "if",
                label: "Xuất sắc",
                color: "text-green-400",
                line: "if [ $diem -ge 90 ]",
            };
        if (score >= 80)
            return {
                branch: "elif 80",
                label: "Giỏi",
                color: "text-cyan-400",
                line: "elif [ $diem -ge 80 ]",
            };
        if (score >= 70)
            return {
                branch: "elif 70",
                label: "Khá",
                color: "text-yellow-400",
                line: "elif [ $diem -ge 70 ]",
            };
        if (score >= 50)
            return {
                branch: "elif 50",
                label: "Trung bình",
                color: "text-purple-400",
                line: "elif [ $diem -ge 50 ]",
            };
        return {
            branch: "else",
            label: "Yếu",
            color: "text-red-400",
            line: "else",
        };
    }, [score]);

    const rows = [
        ["if [ $diem -ge 90 ]", score >= 90],
        ["elif [ $diem -ge 80 ]", score < 90 && score >= 80],
        ["elif [ $diem -ge 70 ]", score < 80 && score >= 70],
        ["elif [ $diem -ge 50 ]", score < 70 && score >= 50],
        ["else", score < 50],
    ];

    return (
        <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Workflow className="text-orange-400" /> Mô phỏng luồng if /
                elif / else
            </h3>
            <p className="text-slate-400 mb-6">
                Kéo điểm để xem script đi vào nhánh nào.
            </p>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 mb-5">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-slate-400 text-sm">Điểm</span>
                    <span className="text-3xl font-black text-white">
                        {score}
                    </span>
                </div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={score}
                    onChange={(e) => setScore(Number(e.target.value))}
                    className="w-full accent-orange-500"
                />
            </div>
            <div className="space-y-2 mb-5">
                {rows.map(([text, active]) => (
                    <div
                        key={text}
                        className={`rounded-xl border p-3 flex items-center justify-between transition-all ${active ? "bg-orange-500/10 border-orange-500/40 text-white" : "bg-slate-950 border-slate-800 text-slate-500"}`}
                    >
                        <code className="text-sm">{text}</code>
                        {active ? (
                            <CheckCircle2
                                size={18}
                                className="text-orange-400"
                            />
                        ) : (
                            <span className="text-xs">bỏ qua</span>
                        )}
                    </div>
                ))}
            </div>
            <div className="bg-black border border-slate-800 rounded-2xl p-5">
                <div className="text-xs text-slate-500 mb-2">
                    Terminal output
                </div>
                <div className={`font-mono text-lg font-bold ${result.color}`}>
                    Điểm {score} → {result.label}
                </div>
            </div>
        </div>
    );
}

function IfStructureSection() {
    return (
        <div className="grid lg:grid-cols-3 gap-6">
            <CodeBlock
                title="if cơ bản"
                code={`if [ điều_kiện ]; then\n    # chạy nếu ĐÚNG\nfi`}
            />
            <CodeBlock
                title="if / else"
                code={`if [ điều_kiện ]; then\n    # chạy nếu ĐÚNG\nelse\n    # chạy nếu SAI\nfi`}
            />
            <CodeBlock
                title="if / elif / else"
                code={`if [ điều_kiện_1 ]; then\n    # nhánh 1\nelif [ điều_kiện_2 ]; then\n    # nhánh 2\nelif [ điều_kiện_3 ]; then\n    # nhánh 3\nelse\n    # không nhánh nào đúng\nfi`}
            />
        </div>
    );
}

function OperatorsTabs() {
    const [tab, setTab] = useState("number");
    const tabs = [
        { id: "number", label: "Số", icon: <Binary size={16} /> },
        { id: "string", label: "Chuỗi", icon: <Type size={16} /> },
        { id: "file", label: "File & thư mục", icon: <FileSearch size={16} /> },
    ];
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                {tabs.map((t) => (
                    <button
                        key={t.id}
                        onClick={() => setTab(t.id)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 ${tab === t.id ? "bg-orange-500 text-white" : "bg-slate-900 text-slate-400 hover:text-slate-200"}`}
                    >
                        {t.icon}
                        {t.label}
                    </button>
                ))}
            </div>
            <div className="p-5">
                {tab === "number" && <NumberOperators />}
                {tab === "string" && <StringOperators />}
                {tab === "file" && <FileOperators />}
            </div>
        </div>
    );
}

function NumberOperators() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="compare-number.sh"
                code={`#!/bin/bash\n\na=10\nb=20\n\nif [ $a -eq $b ]; then echo "bằng nhau"; fi\nif [ $a -ne $b ]; then echo "khác nhau"; fi\nif [ $a -lt $b ]; then echo "a nhỏ hơn b"; fi\nif [ $a -le $b ]; then echo "a nhỏ hơn hoặc bằng"; fi\nif [ $a -gt $b ]; then echo "a lớn hơn b"; fi\nif [ $a -ge $b ]; then echo "a lớn hơn hoặc bằng"; fi`}
            />
            <CheatCard
                title="Toán tử số"
                rows={[
                    ["-eq", "==", "bằng"],
                    ["-ne", "!=", "khác"],
                    ["-lt", "<", "nhỏ hơn"],
                    ["-le", "<=", "nhỏ hơn hoặc bằng"],
                    ["-gt", ">", "lớn hơn"],
                    ["-ge", ">=", "lớn hơn hoặc bằng"],
                ]}
            />
        </div>
    );
}

function StringOperators() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="compare-string.sh"
                code={`#!/bin/bash\n\na="hello"\nb="world"\n\nif [ "$a" = "$b" ];  then echo "bằng nhau"; fi\nif [ "$a" != "$b" ]; then echo "khác nhau"; fi\nif [ -z "$a" ];      then echo "chuỗi rỗng"; fi\nif [ -n "$a" ];      then echo "chuỗi không rỗng"; fi\n\n# [[ ]] mạnh hơn [ ]\nif [[ "$a" == "hel"* ]]; then echo "bắt đầu bằng hel"; fi\nif [[ "$a" =~ ^[a-z]+$ ]]; then echo "toàn chữ thường"; fi\nif [[ "$a" < "$b" ]]; then echo "a đứng trước b"; fi`}
            />
            <CheatCard
                title="Toán tử chuỗi"
                rows={[
                    ["= / ==", "", "bằng nhau"],
                    ["!=", "", "khác nhau"],
                    ["-z", "zero", "chuỗi rỗng"],
                    ["-n", "non-zero", "không rỗng"],
                    ["<", "alphabet", "đứng trước"],
                    [">", "alphabet", "đứng sau"],
                ]}
            />
        </div>
    );
}

function FileOperators() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="check-file.sh"
                code={`#!/bin/bash\n\nduong_dan="/etc/hosts"\n\nif [ -e "$duong_dan" ]; then echo "tồn tại"; fi\nif [ -f "$duong_dan" ]; then echo "là file"; fi\nif [ -d "$duong_dan" ]; then echo "là thư mục"; fi\nif [ -r "$duong_dan" ]; then echo "đọc được"; fi\nif [ -w "$duong_dan" ]; then echo "ghi được"; fi\nif [ -x "$duong_dan" ]; then echo "chạy được"; fi\nif [ -s "$duong_dan" ]; then echo "không rỗng"; fi\nif [ -L "$duong_dan" ]; then echo "là symlink"; fi`}
            />
            <CheatCard
                title="Toán tử file"
                rows={[
                    ["-e", "exist", "tồn tại"],
                    ["-f", "file", "file thường"],
                    ["-d", "directory", "thư mục"],
                    ["-r", "readable", "đọc được"],
                    ["-w", "writable", "ghi được"],
                    ["-x", "executable", "chạy được"],
                    ["-s", "size", "> 0 byte"],
                    ["-L", "link", "symlink"],
                ]}
            />
        </div>
    );
}

function CheatCard({ title, rows }) {
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 h-fit">
            <h4 className="font-bold text-white mb-4">{title}</h4>
            <div className="space-y-2">
                {rows.map(([cmd, alias, desc]) => (
                    <div
                        key={cmd + desc}
                        className="bg-slate-900 border border-slate-800 rounded-xl p-3 grid grid-cols-[70px_1fr] gap-2 items-center"
                    >
                        <code className="text-orange-300 text-sm font-bold">
                            {cmd}
                        </code>
                        <div>
                            {alias && (
                                <span className="text-xs text-slate-600 mr-2">
                                    {alias}
                                </span>
                            )}
                            <span className="text-xs text-slate-400">
                                {desc}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function CombineConditionsSection() {
    return (
        <div className="grid lg:grid-cols-2 gap-6">
            <CodeBlock
                title="combine-conditions.sh"
                code={`#!/bin/bash\n\ntuoi=25\nluong=15000000\n\n# AND: cả hai đều đúng\nif [[ $tuoi -ge 18 && $luong -gt 10000000 ]]; then\n    echo "Đủ điều kiện vay"\nfi\n\n# OR: một trong hai đúng\nif [[ $tuoi -lt 18 || $tuoi -gt 60 ]]; then\n    echo "Không trong độ tuổi lao động"\nfi\n\n# NOT: phủ định\nif ! [ -f "/etc/nonexistent" ]; then\n    echo "File không tồn tại"\nfi\n\nif [[ ! $tuoi -eq 30 ]]; then\n    echo "Không phải 30 tuổi"\nfi\n\n# Kết hợp phức tạp: năm nhuận\nnam=2024\nif [[ ($nam % 4 -eq 0 && $nam % 100 -ne 0) || $nam % 400 -eq 0 ]]; then\n    echo "$nam là năm nhuận"\nfi`}
            />
            <div className="space-y-4">
                <LogicCard
                    symbol="&&"
                    name="AND"
                    desc="Cả hai điều kiện đều phải đúng."
                    example="tuoi >= 18 && luong > 10000000"
                />
                <LogicCard
                    symbol="||"
                    name="OR"
                    desc="Chỉ cần một điều kiện đúng."
                    example="tuoi < 18 || tuoi > 60"
                />
                <LogicCard
                    symbol="!"
                    name="NOT"
                    desc="Phủ định kết quả điều kiện."
                    example="! [ -f file.txt ]"
                />
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-5 text-sm text-yellow-100 flex gap-3">
                    <AlertTriangle
                        size={20}
                        className="text-yellow-400 shrink-0"
                    />
                    <p>
                        Nên ưu tiên{" "}
                        <code className="text-white">[[ ... && ... ]]</code> và{" "}
                        <code className="text-white">[[ ... || ... ]]</code>{" "}
                        trong Bash hiện đại thay vì{" "}
                        <code className="text-white">-a</code> /{" "}
                        <code className="text-white">-o</code>.
                    </p>
                </div>
            </div>
        </div>
    );
}

function LogicCard({ symbol, name, desc, example }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 flex items-center justify-center font-black text-xl">
                    {symbol}
                </div>
                <div>
                    <div className="font-bold text-white">{name}</div>
                    <div className="text-sm text-slate-500">{desc}</div>
                </div>
            </div>
            <code className="block bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-orange-300">
                {example}
            </code>
        </div>
    );
}

function BracketComparison() {
    return (
        <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-white mb-4">
                    So sánh nhanh
                </h4>
                <div className="grid gap-3">
                    <CompareRow
                        left="[ ]"
                        right="POSIX chuẩn, chạy trên nhiều shell"
                    />
                    <CompareRow
                        left="[[ ]]"
                        right="Bash mở rộng, mạnh hơn, an toàn hơn"
                        highlight
                    />
                    <CompareRow
                        left="[ ]"
                        right="Biến có dấu cách phải đặt trong dấu nháy kép"
                    />
                    <CompareRow
                        left="[[ ]]"
                        right="Hỗ trợ wildcard với == và regex với =~"
                        highlight
                    />
                </div>
            </div>
            <CodeBlock
                title="brackets.sh"
                code={`#!/bin/bash\n\nten="Nguyen Van A"\n\n# Vấn đề của [ ] khi biến có dấu cách\nif [ $ten = "Nguyen Van A" ]; then   # LỖI\n    echo "OK"\nfi\n\nif [ "$ten" = "Nguyen Van A" ]; then # ĐÚNG\n    echo "OK"\nfi\n\n# [[ ]] an toàn hơn\nif [[ $ten = "Nguyen Van A" ]]; then\n    echo "OK"\nfi\n\n# [[ ]] hỗ trợ wildcard và regex\nif [[ $ten == Nguyen* ]]; then echo "bắt đầu bằng Nguyen"; fi\nif [[ $ten =~ ^[A-Z] ]]; then echo "bắt đầu bằng chữ hoa"; fi`}
            />
        </div>
    );
}

function CompareRow({ left, right, highlight }) {
    return (
        <div
            className={`rounded-xl border p-4 grid grid-cols-[80px_1fr] gap-3 items-center ${highlight ? "bg-orange-500/10 border-orange-500/30" : "bg-slate-950 border-slate-800"}`}
        >
            <code
                className={
                    highlight
                        ? "text-orange-300 font-bold"
                        : "text-slate-300 font-bold"
                }
            >
                {left}
            </code>
            <span className="text-sm text-slate-400">{right}</span>
        </div>
    );
}

function RealIfExamples() {
    const [tab, setTab] = useState("args");
    const tabs = [
        { id: "args", label: "Kiểm tra tham số", icon: <FileText size={16} /> },
        { id: "service", label: "Monitor dịch vụ", icon: <Server size={16} /> },
        { id: "grade", label: "Xếp loại điểm", icon: <Gauge size={16} /> },
    ];
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                {tabs.map((t) => (
                    <button
                        key={t.id}
                        onClick={() => setTab(t.id)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 ${tab === t.id ? "bg-cyan-500 text-white" : "bg-slate-900 text-slate-400 hover:text-slate-200"}`}
                    >
                        {t.icon}
                        {t.label}
                    </button>
                ))}
            </div>
            <div className="p-5">
                {tab === "args" && <ArgsExample />}
                {tab === "service" && <ServiceExample />}
                {tab === "grade" && <GradeExample />}
            </div>
        </div>
    );
}

function ArgsExample() {
    return (
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-6">
            <CodeBlock
                title="check_args.sh"
                code={`#!/bin/bash\n\nif [ $# -eq 0 ]; then\n    echo "Lỗi: Chưa truyền tham số!"\n    echo "Dùng: $0 <tên_file>"\n    exit 1\nfi\n\nFILE=$1\n\nif [ ! -f "$FILE" ]; then\n    echo "Lỗi: File '$FILE' không tồn tại!"\n    exit 1\nfi\n\nif [ ! -r "$FILE" ]; then\n    echo "Lỗi: Không có quyền đọc file '$FILE'!"\n    exit 1\nfi\n\necho "Đang xử lý file: $FILE"\nwc -l "$FILE"`}
            />
            <ExplainCards
                items={[
                    ["$#", "Số lượng tham số được truyền vào script."],
                    ["$1", "Tham số đầu tiên, ở đây là tên file."],
                    ["-f", "Kiểm tra có phải file thường không."],
                    ["-r", "Kiểm tra file có đọc được không."],
                    ["exit 1", "Thoát script với trạng thái lỗi."],
                ]}
            />
        </div>
    );
}

function ServiceExample() {
    return (
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-6">
            <CodeBlock
                title="monitor_nginx.sh"
                code={`#!/bin/bash\n\nDICH_VU="nginx"\n\nif systemctl is-active --quiet $DICH_VU; then\n    echo "✓ $DICH_VU đang chạy bình thường"\nelse\n    echo "✗ $DICH_VU đã dừng! Đang khởi động lại..."\n    sudo systemctl restart $DICH_VU\n\n    sleep 2\n    if systemctl is-active --quiet $DICH_VU; then\n        echo "✓ Khởi động lại thành công!"\n    else\n        echo "✗ THẤT BẠI! Gửi cảnh báo..."\n        # mail -s "ALERT: nginx down!" admin@example.com\n    fi\nfi`}
            />
            <ExplainCards
                items={[
                    [
                        "systemctl is-active --quiet",
                        "Kiểm tra service có đang active không.",
                    ],
                    [
                        "sudo systemctl restart",
                        "Khởi động lại dịch vụ khi bị dừng.",
                    ],
                    ["sleep 2", "Chờ 2 giây trước khi kiểm tra lại."],
                    [
                        "if lồng nhau",
                        "Sau khi restart, kiểm tra tiếp thành công hay thất bại.",
                    ],
                ]}
            />
        </div>
    );
}

function GradeExample() {
    const [score, setScore] = useState("85");
    const valid = /^\d+$/.test(score) && Number(score) <= 100;
    const grade = !valid
        ? "Điểm không hợp lệ"
        : Number(score) >= 90
          ? "Xuất sắc"
          : Number(score) >= 80
            ? "Giỏi"
            : Number(score) >= 70
              ? "Khá"
              : Number(score) >= 50
                ? "Trung bình"
                : "Yếu";
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="xep_loai.sh"
                code={`#!/bin/bash\n\nread -p "Nhập điểm (0-100): " diem\n\nif ! [[ "$diem" =~ ^[0-9]+$ ]] || [ "$diem" -gt 100 ]; then\n    echo "Điểm không hợp lệ!"\n    exit 1\nfi\n\nif [ "$diem" -ge 90 ]; then\n    xep_loai="Xuất sắc"\n    mau="\\e[32m"\nelif [ "$diem" -ge 80 ]; then\n    xep_loai="Giỏi"\n    mau="\\e[36m"\nelif [ "$diem" -ge 70 ]; then\n    xep_loai="Khá"\n    mau="\\e[33m"\nelif [ "$diem" -ge 50 ]; then\n    xep_loai="Trung bình"\n    mau="\\e[35m"\nelse\n    xep_loai="Yếu"\n    mau="\\e[31m"\nfi\n\necho -e "${mau}Điểm $diem → $xep_loai\\e[0m"`}
            />
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 h-fit">
                <h4 className="font-bold text-white mb-4">
                    Thử phân loại điểm
                </h4>
                <input
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500 mb-5"
                />
                <div
                    className={`bg-black border border-slate-800 rounded-xl p-5 font-mono text-lg font-bold ${valid ? "text-green-400" : "text-red-400"}`}
                >
                    {valid ? `Điểm ${score} → ${grade}` : grade}
                </div>
            </div>
        </div>
    );
}

function ExplainCards({ items }) {
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 h-fit">
            <h4 className="font-bold text-white mb-4">Điểm cần hiểu</h4>
            <div className="space-y-3">
                {items.map(([cmd, desc]) => (
                    <div
                        key={cmd}
                        className="bg-slate-900 border border-slate-800 rounded-xl p-4"
                    >
                        <code className="text-orange-300 font-bold text-sm">
                            {cmd}
                        </code>
                        <p className="text-slate-400 text-sm mt-1">{desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function CaseSection() {
    const [tab, setTab] = useState("basic");
    const tabs = [
        { id: "basic", label: "Cú pháp & ngày", icon: <GitBranch size={16} /> },
        {
            id: "wildcard",
            label: "Wildcard file",
            icon: <FileSearch size={16} />,
        },
        { id: "menu", label: "Menu nginx", icon: <Menu size={16} /> },
        {
            id: "args",
            label: "Tham số dòng lệnh",
            icon: <Terminal size={16} />,
        },
    ];
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                {tabs.map((t) => (
                    <button
                        key={t.id}
                        onClick={() => setTab(t.id)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 ${tab === t.id ? "bg-pink-500 text-white" : "bg-slate-900 text-slate-400 hover:text-slate-200"}`}
                    >
                        {t.icon}
                        {t.label}
                    </button>
                ))}
            </div>
            <div className="p-5">
                {tab === "basic" && <CaseBasic />}
                {tab === "wildcard" && <CaseWildcard />}
                {tab === "menu" && <CaseMenu />}
                {tab === "args" && <CaseArgs />}
            </div>
        </div>
    );
}

function CaseBasic() {
    const [day, setDay] = useState("1");
    const map = {
        1: "Thứ Hai",
        2: "Thứ Ba",
        3: "Thứ Tư",
        4: "Thứ Năm",
        5: "Thứ Sáu",
        6: "Thứ Bảy",
        7: "Chủ Nhật",
    };
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="case-basic.sh"
                code={`#!/bin/bash\n\nread -p "Nhập ngày trong tuần (1-7): " ngay\n\ncase $ngay in\n    1) echo "Thứ Hai" ;;\n    2) echo "Thứ Ba" ;;\n    3) echo "Thứ Tư" ;;\n    4) echo "Thứ Năm" ;;\n    5) echo "Thứ Sáu" ;;\n    6) echo "Thứ Bảy" ;;\n    7) echo "Chủ Nhật" ;;\n    *) echo "Ngày không hợp lệ!" ;;\nesac`}
            />
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 h-fit">
                <h4 className="font-bold text-white mb-4">Thử chọn ngày</h4>
                <div className="grid grid-cols-4 gap-2 mb-5">
                    {["1", "2", "3", "4", "5", "6", "7", "x"].map((v) => (
                        <button
                            key={v}
                            onClick={() => setDay(v)}
                            className={`p-3 rounded-xl border font-bold ${day === v ? "bg-pink-500 text-white border-pink-500" : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"}`}
                        >
                            {v}
                        </button>
                    ))}
                </div>
                <div className="bg-black border border-slate-800 rounded-xl p-5 font-mono text-green-400">
                    {map[day] || "Ngày không hợp lệ!"}
                </div>
                <div className="mt-4 text-sm text-slate-500">
                    <code className="text-orange-300">;;</code> kết thúc mỗi
                    nhánh. <code className="text-orange-300">*)</code> là nhánh
                    mặc định giống else.
                </div>
            </div>
        </div>
    );
}

function CaseWildcard() {
    return (
        <CodeBlock
            title="case-file-type.sh"
            code={`#!/bin/bash\n\nread -p "Nhập tên file: " file\n\ncase $file in\n    *.txt)\n        echo "File văn bản"\n        cat "$file"\n        ;;\n    *.jpg | *.jpeg | *.png | *.gif)\n        echo "File hình ảnh"\n        ls -lh "$file"\n        ;;\n    *.sh)\n        echo "File script"\n        bash "$file"\n        ;;\n    *.tar.gz | *.zip | *.bz2)\n        echo "File nén"\n        ls -lh "$file"\n        ;;\n    *)\n        echo "Loại file không xác định"\n        ;;\nesac`}
        />
    );
}

function CaseMenu() {
    return (
        <CodeBlock
            title="menu_server.sh"
            code={`#!/bin/bash\n\necho "=== QUẢN LÝ NGINX ==="\necho "1. Khởi động"\necho "2. Dừng"\necho "3. Khởi động lại"\necho "4. Xem trạng thái"\necho "5. Xem log"\necho "0. Thoát"\necho ""\nread -p "Chọn: " lua_chon\n\ncase $lua_chon in\n    1)\n        sudo systemctl start nginx\n        echo "✓ Đã khởi động nginx"\n        ;;\n    2)\n        sudo systemctl stop nginx\n        echo "✓ Đã dừng nginx"\n        ;;\n    3)\n        sudo systemctl restart nginx\n        echo "✓ Đã khởi động lại nginx"\n        ;;\n    4)\n        systemctl status nginx\n        ;;\n    5)\n        sudo tail -50 /var/log/nginx/access.log\n        ;;\n    0)\n        echo "Tạm biệt!"\n        exit 0\n        ;;\n    *)\n        echo "Lựa chọn không hợp lệ: $lua_chon"\n        exit 1\n        ;;\nesac`}
        />
    );
}

function CaseArgs() {
    return (
        <CodeBlock
            title="service_manager.sh"
            code={`#!/bin/bash\n# Dùng: ./service_manager.sh start|stop|restart nginx\n\nHANH_DONG=$1\nDICH_VU=$2\n\nif [ $# -ne 2 ]; then\n    echo "Dùng: $0 {start|stop|restart|status} <dịch_vụ>"\n    exit 1\nfi\n\ncase $HANH_DONG in\n    start)\n        sudo systemctl start $DICH_VU\n        echo "Đã start $DICH_VU"\n        ;;\n    stop)\n        sudo systemctl stop $DICH_VU\n        echo "Đã stop $DICH_VU"\n        ;;\n    restart)\n        sudo systemctl restart $DICH_VU\n        echo "Đã restart $DICH_VU"\n        ;;\n    status)\n        systemctl status $DICH_VU\n        ;;\n    *)\n        echo "Hành động không hợp lệ: $HANH_DONG"\n        echo "Dùng: start | stop | restart | status"\n        exit 1\n        ;;\nesac`}
        />
    );
}

function OneLineSection() {
    return (
        <div className="grid lg:grid-cols-2 gap-6">
            <CodeBlock
                title="one-line.sh"
                code={`# if một dòng\n[ -f file.txt ] && echo "File tồn tại"\n[ -f file.txt ] || echo "File không tồn tại"\n\n# Ý nghĩa:\n# A && B   → chạy B chỉ khi A đúng\n# A || B   → chạy B chỉ khi A sai\n\n# Ví dụ thực tế\n[ -d /backup ] || mkdir -p /backup\n[ $? -eq 0 ] && echo "OK" || echo "LỖI"\nping -c1 google.com &>/dev/null && echo "Có mạng" || echo "Mất mạng"`}
            />
            <div className="space-y-4">
                <OneLineCard
                    title="A && B"
                    desc="Nếu A đúng thì chạy B."
                    example="[ -f file.txt ] && echo OK"
                />
                <OneLineCard
                    title="A || B"
                    desc="Nếu A sai thì chạy B."
                    example="[ -d /backup ] || mkdir -p /backup"
                />
                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 text-sm text-red-100 flex gap-3">
                    <AlertTriangle
                        size={20}
                        className="text-red-400 shrink-0"
                    />
                    <p>
                        Không nên nhồi điều kiện phức tạp vào một dòng. Dùng
                        if/else đầy đủ sẽ dễ đọc và dễ debug hơn.
                    </p>
                </div>
            </div>
        </div>
    );
}

function OneLineCard({ title, desc, example }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <div className="font-bold text-white mb-1">{title}</div>
            <p className="text-sm text-slate-400 mb-3">{desc}</p>
            <code className="block bg-slate-950 border border-slate-800 rounded-xl p-3 text-orange-300 text-sm">
                {example}
            </code>
        </div>
    );
}

function SummaryGrid() {
    const groups = [
        {
            title: "Cấu trúc",
            rows: [
                ["if [ đk ]; then ... fi", "if cơ bản"],
                ["if ... else ... fi", "có nhánh sai"],
                ["elif", "nhiều nhánh"],
                ["case $var in ... esac", "nhiều mẫu"],
            ],
        },
        {
            title: "So sánh số",
            rows: [
                ["-eq", "bằng"],
                ["-ne", "khác"],
                ["-lt", "nhỏ hơn"],
                ["-le", "<="],
                ["-gt", ">"],
                ["-ge", ">="],
            ],
        },
        {
            title: "Chuỗi",
            rows: [
                ["= / ==", "bằng"],
                ["!=", "khác"],
                ["-z", "rỗng"],
                ["-n", "không rỗng"],
                ["=~", "regex trong [[ ]]"],
            ],
        },
        {
            title: "File",
            rows: [
                ["-e", "tồn tại"],
                ["-f", "file"],
                ["-d", "thư mục"],
                ["-r", "đọc"],
                ["-w", "ghi"],
                ["-x", "chạy"],
                ["-s", ">0 byte"],
            ],
        },
        {
            title: "Kết hợp",
            rows: [
                ["&&", "AND"],
                ["||", "OR"],
                ["!", "NOT"],
                ["if/elif", "điều kiện phức tạp"],
                ["case", "1 biến nhiều giá trị"],
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
        question: "Từ khóa nào kết thúc một khối if trong Bash?",
        options: ["endif", "done", "fi", "esac"],
        correct: 2,
        explanation:
            "Bash dùng fi để kết thúc if. case thì kết thúc bằng esac.",
    },
    {
        question: "Toán tử nào dùng để so sánh hai số bằng nhau?",
        options: ["=", "-eq", "==", "-f"],
        correct: 1,
        explanation:
            "Trong [ ], so sánh số bằng nhau dùng -eq. Dấu = thường dùng cho chuỗi.",
    },
    {
        question: "Toán tử file nào kiểm tra đường dẫn là thư mục?",
        options: ["-f", "-d", "-e", "-x"],
        correct: 1,
        explanation: "-d kiểm tra directory. -f kiểm tra file thường.",
    },
    {
        question:
            "Trong Bash script hiện đại, cú pháp nào an toàn hơn và hỗ trợ regex?",
        options: ["[ ]", "[[ ]]", "(( ))", "{ }"],
        correct: 1,
        explanation:
            "[[ ]] là Bash mở rộng, hỗ trợ wildcard và regex với =~, đồng thời an toàn hơn khi biến có dấu cách.",
    },
    {
        question: "case phù hợp nhất khi nào?",
        options: [
            "Khi cần lặp qua danh sách file",
            "Khi một biến có nhiều giá trị/mẫu cần xử lý",
            "Khi cần khai báo biến môi trường",
            "Khi cần nén file",
        ],
        correct: 1,
        explanation:
            "case giúp thay chuỗi if-elif dài khi kiểm tra một biến với nhiều giá trị cố định hoặc wildcard pattern.",
    },
    {
        question: "Ý nghĩa của A && B là gì?",
        options: [
            "Luôn chạy B",
            "Chạy B khi A đúng",
            "Chạy B khi A sai",
            "Chạy A và B song song",
        ],
        correct: 1,
        explanation:
            "Với &&, lệnh bên phải chỉ chạy khi lệnh bên trái thành công/đúng.",
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
