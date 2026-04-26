import React, { useMemo, useState } from "react";
import {
    Terminal,
    FunctionSquare,
    Package,
    Repeat,
    Boxes,
    Play,
    Copy,
    Info,
    CheckCircle2,
    XCircle,
    AlertTriangle,
    ChevronRight,
    RotateCcw,
    Sparkles,
    FileText,
    Server,
    Activity,
    Code2,
    Variable,
    CornerDownRight,
    ArrowRight,
    Library,
    ShieldCheck,
    Database,
    HardDrive,
    Cpu,
    Clock,
    Wrench,
    Layers,
    GitBranch,
    Undo2,
    Settings,
    ListChecks,
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
                                Bash Script · Function · Reuse
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 8
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 8.5
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" /> Tổ
                        chức script gọn gàng, tái sử dụng được
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Hàm Function <br />
                        <span className="text-orange-500">Trong Bash</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Hàm giúp bạn gom một nhóm lệnh thành khối có tên, gọi
                        lại nhiều lần, truyền tham số, dùng biến cục bộ và xây
                        dựng thư viện script chuyên nghiệp.
                    </p>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <FunctionConceptCard />
                    <FunctionCallSimulator />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="blue"
                        icon={<FunctionSquare size={22} />}
                        title="Khai báo & gọi hàm"
                        subtitle="Hàm phải được khai báo trước khi gọi. Khi gọi hàm trong Bash, chỉ gõ tên hàm, không thêm dấu ()."
                    />
                    <DeclareCallSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="green"
                        icon={<CornerDownRight size={22} />}
                        title="Tham số của hàm"
                        subtitle="Hàm nhận tham số giống script: $1, $2, $@, $#; thường nên kiểm tra đủ tham số trước khi xử lý."
                    />
                    <ParametersSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="purple"
                        icon={<Variable size={22} />}
                        title="local – Biến cục bộ"
                        subtitle="Không dùng local có thể làm biến ngoài hàm bị thay đổi ngoài ý muốn. Trong hàm, hãy mặc định dùng local."
                    />
                    <LocalSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="orange"
                        icon={<Undo2 size={22} />}
                        title="Giá trị trả về"
                        subtitle="Trong Bash, return chỉ trả exit code 0–255. Muốn trả chuỗi/số, hãy echo rồi bắt bằng $()."
                    />
                    <ReturnSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="pink"
                        icon={<Repeat size={22} />}
                        title="Hàm đệ quy"
                        subtitle="Một hàm có thể tự gọi lại chính nó, ví dụ tính giai thừa, Fibonacci hoặc duyệt thư mục con."
                    />
                    <RecursionSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="cyan"
                        icon={<Library size={22} />}
                        title="Thư viện hàm – Tái sử dụng"
                        subtitle="Tách hàm dùng chung ra lib.sh rồi source vào các script khác để tái sử dụng."
                    />
                    <LibrarySection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="yellow"
                        icon={<Activity size={22} />}
                        title="Script hoàn chỉnh dùng hàm"
                        subtitle="Ví dụ system_report.sh: chia báo cáo thành nhiều hàm nhỏ, dễ đọc, dễ sửa, dễ mở rộng."
                    />
                    <SystemReportSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="8"
                        color="red"
                        icon={<Wrench size={22} />}
                        title="Kỹ thuật nâng cao"
                        subtitle="Giá trị mặc định cho tham số, trả về nhiều giá trị bằng biến toàn cục, và trap để tự dọn dẹp."
                    />
                    <AdvancedSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="9"
                        color="teal"
                        icon={<ListChecks size={22} />}
                        title="Tóm tắt nhanh"
                        subtitle="Các cú pháp function, local, return, echo, source và trap cần nhớ sau bài 8.5."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <ShieldCheck className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức bài 8.5
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Ôn lại khai báo hàm, tham số, local, return,
                                    source và trap.
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
                        Script đã biết tổ chức bằng hàm. Tiếp theo là làm script
                        chắc chắn hơn khi nhận tham số và gặp lỗi.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                        Bài tiếp theo: 8.6 — Xử lý tham số và lỗi{" "}
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

function FunctionConceptCard() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-orange-500/15 text-orange-400 rounded-2xl flex items-center justify-center">
                    <FunctionSquare size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        Hàm là gì?
                    </h3>
                    <p className="text-slate-500 text-sm">
                        Một khối lệnh có tên để gọi lại
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-950 border border-red-500/20 rounded-2xl p-5">
                    <div className="text-red-400 font-bold mb-3 flex items-center gap-2">
                        <XCircle size={18} /> Không dùng hàm
                    </div>
                    <p className="text-sm text-slate-400 mb-4">
                        Code kiểm tra disk bị viết lặp lại ở nhiều nơi. Khi muốn
                        sửa, phải sửa nhiều chỗ.
                    </p>
                    <pre className="text-xs text-slate-500 overflow-x-auto">
                        <code>{`DISK=$(df / | awk 'NR==2{print $5}')
[ $DISK -gt 80 ] && echo "Cảnh báo"
...
DISK=$(df / | awk 'NR==2{print $5}')
[ $DISK -gt 80 ] && echo "Cảnh báo"`}</code>
                    </pre>
                </div>
                <div className="bg-slate-950 border border-green-500/20 rounded-2xl p-5 shadow-[0_0_30px_rgba(34,197,94,0.06)]">
                    <div className="text-green-400 font-bold mb-3 flex items-center gap-2">
                        <CheckCircle2 size={18} /> Dùng hàm
                    </div>
                    <p className="text-sm text-slate-400 mb-4">
                        Gom logic vào một hàm. Gọi lại ở đâu cũng được, sửa một
                        chỗ áp dụng toàn script.
                    </p>
                    <pre className="text-xs text-green-400 overflow-x-auto">
                        <code>{`kiem_tra_disk() {
  DISK=$(df / | awk 'NR==2{print $5}')
  [ $DISK -gt 80 ] && echo "Cảnh báo"
}

kiem_tra_disk`}</code>
                    </pre>
                </div>
            </div>
            <div className="mt-5 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 text-sm text-blue-100 flex gap-3">
                <Info size={20} className="text-blue-400 shrink-0 mt-0.5" />
                <p>
                    Hàm làm script dễ đọc, dễ kiểm thử, dễ tái sử dụng và giảm
                    lỗi copy-paste.
                </p>
            </div>
        </div>
    );
}

function FunctionCallSimulator() {
    const [name, setName] = useState("Alice");
    const [role, setRole] = useState("Kỹ sư");
    const [calls, setCalls] = useState(["Alice", "Bob"]);
    return (
        <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Play className="text-orange-400" /> Mô phỏng gọi hàm
            </h3>
            <p className="text-slate-400 mb-6">
                Thay tham số rồi xem output của hàm.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <label className="space-y-2">
                    <span className="text-sm text-slate-400">
                        Tham số $1: tên
                    </span>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500"
                    />
                </label>
                <label className="space-y-2">
                    <span className="text-sm text-slate-400">
                        Tham số $2: chức vụ
                    </span>
                    <input
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500"
                    />
                </label>
            </div>
            <CodeBlock
                title="function-demo.sh"
                code={`chao() {\n    local ten=$1\n    local chuc=$2\n    echo "Xin chào $ten! Chức vụ: $chuc"\n}\n\nchao "${name}" "${role}"`}
            />
            <div className="mt-5 bg-black border border-slate-800 rounded-2xl p-5">
                <div className="text-xs text-slate-500 mb-3">
                    Terminal output
                </div>
                <div className="font-mono text-sm text-green-400">
                    Xin chào {name}! Chức vụ: {role}
                </div>
            </div>
        </div>
    );
}

function DeclareCallSection() {
    return (
        <div className="grid lg:grid-cols-2 gap-6">
            <CodeBlock
                title="declare-call.sh"
                code={`#!/bin/bash\n\n# Cú pháp 1, phổ biến nhất\nten_ham() {\n    # lệnh\n}\n\n# Cú pháp 2, dùng từ khóa function\nfunction ten_ham_khac {\n    # lệnh\n}\n\n# Ví dụ đơn giản\nchao_mung() {\n    echo "Xin chào, Ubuntu!"\n    echo "Hôm nay: $(date +%d/%m/%Y)"\n}\n\n# Gọi hàm: không có ()\nchao_mung\nchao_mung\nchao_mung`}
            />
            <div className="space-y-4">
                <Rule
                    ok
                    text="ten_ham() { ... }"
                    desc="Cú pháp khai báo phổ biến."
                />
                <Rule
                    ok
                    text="function ten_ham { ... }"
                    desc="Cú pháp khác, vẫn dùng được trong Bash."
                />
                <Rule
                    ok
                    text="chao_mung"
                    desc="Gọi hàm đúng: chỉ gõ tên hàm."
                />
                <Rule
                    bad
                    text="chao_mung()"
                    desc="Sai khi gọi: dấu () chỉ dùng khi khai báo."
                />
                <Rule
                    bad
                    text="gọi trước khi khai báo"
                    desc="Bash đọc từ trên xuống, nên hàm phải được định nghĩa trước khi gọi."
                />
            </div>
        </div>
    );
}

function Rule({ ok, bad, text, desc }) {
    return (
        <div
            className={`rounded-2xl border p-4 ${bad ? "bg-red-500/10 border-red-500/20" : "bg-green-500/10 border-green-500/20"}`}
        >
            <div className="flex items-center gap-2">
                {bad ? (
                    <XCircle size={18} className="text-red-400" />
                ) : (
                    <CheckCircle2 size={18} className="text-green-400" />
                )}
                <code className={bad ? "text-red-200" : "text-green-200"}>
                    {text}
                </code>
            </div>
            <p className="text-slate-400 text-sm mt-1 ml-7">{desc}</p>
        </div>
    );
}

function ParametersSection() {
    return (
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-6">
            <CodeBlock
                title="function-params.sh"
                code={`#!/bin/bash\n\nchao() {\n    local ten=$1\n    local chuc=$2\n    echo "Xin chào $ten! Chức vụ: $chuc"\n}\n\nchao "Alice" "Kỹ sư"\nchao "Bob"   "Quản lý"\n\nmo_ta_tham_so() {\n    echo "Tên script  : $0"\n    echo "Tham số 1   : $1"\n    echo "Tham số 2   : $2"\n    echo "Tất cả      : $@"\n    echo "Số tham số  : $#"\n}\n\nmo_ta_tham_so "hello" "world" "ubuntu"\n\ntao_thu_muc() {\n    if [ $# -eq 0 ]; then\n        echo "Lỗi: Chưa truyền tên thư mục!"\n        return 1\n    fi\n\n    local thu_muc=$1\n    mkdir -p "$thu_muc"\n    echo "✓ Đã tạo: $thu_muc"\n}\n\ntao_thu_muc\ntao_thu_muc "/tmp/test_dir"`}
            />
            <CheatCard
                title="Tham số trong hàm"
                rows={[
                    ["$1", "Tham số thứ nhất"],
                    ["$2", "Tham số thứ hai"],
                    ["$@", "Tất cả tham số"],
                    ["$#", "Số lượng tham số"],
                    ["$0", "Tên script, không phải tên hàm"],
                    ["return 1", "Thoát hàm với trạng thái lỗi"],
                ]}
            />
        </div>
    );
}

function LocalSection() {
    const [useLocal, setUseLocal] = useState(true);
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title={useLocal ? "local-safe.sh" : "global-bug.sh"}
                code={
                    useLocal
                        ? `#!/bin/bash\n\ny=10\n\nham_b() {\n    local y=99\n    echo "Trong ham_b: y=$y"\n}\n\necho "Trước khi gọi: y=$y"\nham_b\necho "Sau khi gọi : y=$y"\n\n# Output:\n# Trước khi gọi: y=10\n# Trong ham_b: y=99\n# Sau khi gọi : y=10`
                        : `#!/bin/bash\n\nx=10\n\nham_a() {\n    x=99\n    echo "Trong ham_a: x=$x"\n}\n\necho "Trước khi gọi: x=$x"\nham_a\necho "Sau khi gọi : x=$x"\n\n# Output:\n# Trước khi gọi: x=10\n# Trong ham_a: x=99\n# Sau khi gọi : x=99`
                }
            />
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 h-fit">
                <h4 className="font-bold text-white mb-4">
                    Bật/tắt local để xem khác biệt
                </h4>
                <div className="grid grid-cols-2 gap-3 mb-5">
                    <button
                        onClick={() => setUseLocal(false)}
                        className={`p-4 rounded-xl border font-bold ${!useLocal ? "bg-red-500 text-white border-red-500" : "bg-slate-900 border-slate-800 text-slate-400"}`}
                    >
                        Không local
                    </button>
                    <button
                        onClick={() => setUseLocal(true)}
                        className={`p-4 rounded-xl border font-bold ${useLocal ? "bg-green-500 text-white border-green-500" : "bg-slate-900 border-slate-800 text-slate-400"}`}
                    >
                        Có local
                    </button>
                </div>
                <div className="bg-black border border-slate-800 rounded-xl p-5 font-mono text-sm whitespace-pre-wrap">
                    {useLocal ? (
                        <span className="text-green-400">
                            Trước khi gọi: y=10{`\n`}Trong ham_b: y=99{`\n`}Sau
                            khi gọi : y=10
                        </span>
                    ) : (
                        <span className="text-red-400">
                            Trước khi gọi: x=10{`\n`}Trong ham_a: x=99{`\n`}Sau
                            khi gọi : x=99
                        </span>
                    )}
                </div>
                <p className="text-slate-500 text-sm mt-4">
                    Quy tắc thực tế:{" "}
                    <strong className="text-white">luôn dùng local</strong> cho
                    biến chỉ dùng bên trong hàm.
                </p>
            </div>
        </div>
    );
}

function ReturnSection() {
    const [tab, setTab] = useState("exitcode");
    const tabs = [
        ["exitcode", "return exit code"],
        ["echo", "echo + $()"],
        ["global", "biến toàn cục"],
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
                {tab === "exitcode" && <ReturnExitCode />}
                {tab === "echo" && <ReturnEcho />}
                {tab === "global" && <ReturnGlobal />}
            </div>
        </div>
    );
}

function ReturnExitCode() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="return-exit-code.sh"
                code={`#!/bin/bash\n\nkiem_tra_file() {\n    local file=$1\n    if [ -f "$file" ]; then\n        return 0\n    else\n        return 1\n    fi\n}\n\nkiem_tra_file "/etc/hosts"\nif [ $? -eq 0 ]; then\n    echo "File tồn tại"\nelse\n    echo "File không tồn tại"\nfi\n\n# Viết gọn hơn\nkiem_tra_file "/etc/hosts" && echo "Tồn tại" || echo "Không có"`}
            />
            <div className="space-y-4">
                <ExplainCard cmd="return 0" desc="Thành công / true." />
                <ExplainCard
                    cmd="return 1"
                    desc="Lỗi / false. Có thể dùng 1–255."
                />
                <ExplainCard
                    cmd="$?"
                    desc="Exit code của lệnh hoặc hàm vừa chạy."
                />
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-5 text-sm text-yellow-100 flex gap-3">
                    <AlertTriangle
                        className="text-yellow-400 shrink-0"
                        size={20}
                    />
                    return không trả chuỗi/số lớn như Python. Nó chỉ dùng cho
                    exit code.
                </div>
            </div>
        </div>
    );
}

function ReturnEcho() {
    return (
        <CodeBlock
            title="return-echo.sh"
            code={`#!/bin/bash\n\nbinh_phuong() {\n    local so=$1\n    echo $((so * so))\n}\n\nket_qua=$(binh_phuong 7)\necho "7² = $ket_qua"\n\necho "5² = $(binh_phuong 5)"`}
        />
    );
}

function ReturnGlobal() {
    return (
        <CodeBlock
            title="return-global.sh"
            code={`#!/bin/bash\n\nKET_QUA=""\n\ntinh_chu_vi() {\n    local ban_kinh=$1\n    KET_QUA=$(echo "scale=2; 2 * 3.14159 * $ban_kinh" | bc)\n}\n\ntinh_chu_vi 5\necho "Chu vi: $KET_QUA"`}
            note="Biến toàn cục có thể dùng khi cần trả nhiều giá trị, nhưng phải đặt tên rõ để tránh ghi đè ngoài ý muốn."
        />
    );
}

function RecursionSection() {
    const [n, setN] = useState(5);
    const fact = (x) => (x <= 1 ? 1 : x * fact(x - 1));
    return (
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-6">
            <CodeBlock
                title="recursion.sh"
                code={`#!/bin/bash\n\ngiai_thua() {\n    local n=$1\n    if [ $n -le 1 ]; then\n        echo 1\n        return\n    fi\n    local n_tru_1=$(giai_thua $((n - 1)))\n    echo $((n * n_tru_1))\n}\n\necho "5! = $(giai_thua 5)"\n\nfib() {\n    local n=$1\n    if [ $n -le 1 ]; then\n        echo $n\n        return\n    fi\n    local a=$(fib $((n-1)))\n    local b=$(fib $((n-2)))\n    echo $((a + b))\n}\n\necho "fib(10) = $(fib 10)"\n\nliet_ke_file() {\n    local thu_muc=$1\n    local can_le=$2\n\n    for item in "$thu_muc"/*; do\n        [ -e "$item" ] || continue\n        printf "%s%s\\n" "$can_le" "$(basename $item)"\n        if [ -d "$item" ]; then\n            liet_ke_file "$item" "  $can_le"\n        fi\n    done\n}`}
            />
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 h-fit">
                <h4 className="font-bold text-white mb-4">
                    Mô phỏng giai thừa
                </h4>
                <input
                    type="range"
                    min="1"
                    max="8"
                    value={n}
                    onChange={(e) => setN(Number(e.target.value))}
                    className="w-full accent-pink-500 mb-4"
                />
                <div className="bg-black border border-slate-800 rounded-xl p-5 font-mono text-green-400 text-lg font-bold">
                    {n}! = {fact(n)}
                </div>
                <div className="mt-4 text-sm text-slate-500">
                    Đệ quy cần điều kiện dừng. Ở đây là{" "}
                    <code className="text-orange-300">n &lt;= 1</code>.
                </div>
            </div>
        </div>
    );
}

function LibrarySection() {
    const [tab, setTab] = useState("lib");
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                <button
                    onClick={() => setTab("lib")}
                    className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 ${tab === "lib" ? "bg-cyan-500 text-white" : "bg-slate-900 text-slate-400"}`}
                >
                    <Library size={16} /> lib.sh
                </button>
                <button
                    onClick={() => setTab("deploy")}
                    className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 ${tab === "deploy" ? "bg-cyan-500 text-white" : "bg-slate-900 text-slate-400"}`}
                >
                    <Server size={16} /> deploy.sh
                </button>
            </div>
            <div className="p-5">
                {tab === "lib" ? <LibCode /> : <DeployCode />}
            </div>
        </div>
    );
}

function LibCode() {
    return (
        <CodeBlock
            title="~/scripts/lib.sh"
            code={`#!/bin/bash\n# lib.sh – Thư viện hàm dùng chung\n\nDO="\\e[31m"\nXANH="\\e[32m"\nVANG="\\e[33m"\nRESET="\\e[0m"\n\nlog_info()  { echo -e "${"{"}XANH{'}'}[INFO]${"{"}RESET{'}'}  $1"; }\nlog_warn()  { echo -e "${"{"}VANG{'}'}[WARN]${"{"}RESET{'}'}  $1"; }\nlog_error() { echo -e "${"{"}DO{'}'}[ERROR]${"{"}RESET{'}'} $1" >&2; }\nlog_ok()    { echo -e "${"{"}XANH{'}'}[  OK ]${"{"}RESET{'}'} $1"; }\n\ncan_lenh_ton_tai() {\n    command -v "$1" &>/dev/null\n}\n\nla_root() {\n    [ "$(id -u)" -eq 0 ]\n}\n\ntao_thu_muc() {\n    local path=$1\n    if [ ! -d "$path" ]; then\n        mkdir -p "$path" && log_ok "Đã tạo: $path" \\\n                        || log_error "Không tạo được: $path"\n    fi\n}\n\nbackup_file() {\n    local file=$1\n    if [ -f "$file" ]; then\n        cp "$file" "${"{"}file{'}'}.bak.$(date +%Y%m%d_%H%M%S)"\n        log_ok "Đã backup: $file"\n    fi\n}\n\nxac_nhan() {\n    local cau_hoi=$1\n    while true; do\n        read -p "$cau_hoi (y/n): " tra_loi\n        case $tra_loi in\n            [Yy]*) return 0 ;;\n            [Nn]*) return 1 ;;\n            *) echo "Nhập y hoặc n." ;;\n        esac\n    done\n}`}
        />
    );
}

function DeployCode() {
    return (
        <CodeBlock
            title="~/scripts/deploy.sh"
            code={`#!/bin/bash\n# deploy.sh – Script deploy dùng lib.sh\n\nsource ~/scripts/lib.sh\n\nif ! la_root; then\n    log_error "Script cần chạy với quyền root!"\n    exit 1\nfi\n\nif ! can_lenh_ton_tai git; then\n    log_error "Git chưa được cài đặt!"\n    exit 1\nfi\n\nlog_info "Bắt đầu deploy..."\n\nbackup_file "/etc/nginx/nginx.conf"\n\ntao_thu_muc "/var/www/myapp"\ntao_thu_muc "/var/log/myapp"\n\nif xac_nhan "Tiếp tục deploy?"; then\n    log_info "Đang kéo code mới..."\n    git -C /var/www/myapp pull origin main \\\n        && log_ok "Deploy thành công!" \\\n        || log_error "Deploy thất bại!"\nelse\n    log_warn "Đã huỷ deploy."\n    exit 0\nfi`}
            note="source nạp các hàm trong lib.sh vào shell hiện tại, nên deploy.sh có thể gọi log_error, la_root, backup_file..."
        />
    );
}

function SystemReportSection() {
    return (
        <CodeBlock
            title="system_report.sh"
            code={`#!/bin/bash\n# Dùng: ./system_report.sh [--full]\n\nsource ~/scripts/lib.sh 2>/dev/null || {\n    log_info()  { echo "[INFO] $1"; }\n    log_ok()    { echo "[ OK ] $1"; }\n    log_error() { echo "[ERR] $1"; }\n}\n\nlay_cpu() {\n    top -bn1 | grep "Cpu(s)" | awk '{print $2}' | cut -d'%' -f1\n}\n\nlay_ram() {\n    free | awk '/Mem:/ {printf "%.1f", $3/$2*100}'\n}\n\nlay_disk() {\n    df -h / | awk 'NR==2 {print $3"/"$2" ("$5")"}'\n}\n\nlay_uptime() {\n    uptime -p | sed 's/up //'\n}\n\ndem_process() {\n    ps aux | wc -l\n}\n\nkiem_tra_dich_vu() {\n    local dv=$1\n    systemctl is-active --quiet "$dv" \\\n        && echo "✓ Đang chạy" \\\n        || echo "✗ Đã dừng"\n}\n\nin_duong_ke() {\n    printf '═%.0s' {1..45}\n    echo ""\n}\n\nin_tieu_de() {\n    echo ""\n    in_duong_ke\n    printf "  %s\\n" "$1"\n    in_duong_ke\n}\n\nin_dong() {\n    printf "  %-18s: %s\\n" "$1" "$2"\n}\n\nbao_cao_tong_quat() {\n    in_tieu_de "THÔNG TIN HỆ THỐNG"\n    in_dong "Hostname"   "$(hostname)"\n    in_dong "OS"         "$(lsb_release -d 2>/dev/null | cut -f2)"\n    in_dong "Kernel"     "$(uname -r)"\n    in_dong "Uptime"     "$(lay_uptime)"\n    in_dong "Thời gian"  "$(date '+%H:%M:%S %d/%m/%Y')"\n}\n\nbao_cao_tai_nguyen() {\n    local cpu=$(lay_cpu)\n    local ram=$(lay_ram)\n    local cpu_int=${"{"}cpu%.*{'}'}\n    local ram_int=${"{"}ram%.*{'}'}\n\n    in_tieu_de "TÀI NGUYÊN"\n    in_dong "CPU"        "${"{"}cpu{'}'}%$([ ${"{"}cpu_int:-0{'}'} -gt 80 ] && echo ' ⚠ CAO')"\n    in_dong "RAM"        "${"{"}ram{'}'}%$([ ${"{"}ram_int:-0{'}'} -gt 80 ] && echo ' ⚠ CAO')"\n    in_dong "Disk /"     "$(lay_disk)"\n    in_dong "Processes"  "$(dem_process)"\n}\n\nbao_cao_dich_vu() {\n    in_tieu_de "DỊCH VỤ"\n    local dvs=("nginx" "mysql" "ssh" "ufw")\n    for dv in "${"{"}dvs[@]{'}'}"; do\n        in_dong "$dv" "$(kiem_tra_dich_vu $dv)"\n    done\n}\n\nmain() {\n    bao_cao_tong_quat\n    bao_cao_tai_nguyen\n\n    if [ "$1" = "--full" ]; then\n        bao_cao_dich_vu\n    fi\n\n    echo ""\n}\n\nmain "$@"`}
        />
    );
}

function AdvancedSection() {
    const [tab, setTab] = useState("default");
    const tabs = [
        ["default", "Tham số mặc định"],
        ["multi", "Nhiều giá trị"],
        ["trap", "trap cleanup"],
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
                {tab === "default" && (
                    <CodeBlock
                        title="default-params.sh"
                        code={`tao_backup() {\n    local nguon=${"{"}1:-"/var/www"{'}'}\n    local dich=${"{"}2:-"/backup"{'}'}\n    local ten=${"{"}3:-"backup_$(date +%Y%m%d)"{'}'}\n\n    echo "Backup: $nguon → $dich/$ten.tar.gz"\n    tar -czf "$dich/$ten.tar.gz" "$nguon" 2>/dev/null\n}\n\ntao_backup\ntao_backup "/home/ubuntu" "/tmp"\ntao_backup "/etc" "/backup" "etc_cfg"`}
                    />
                )}
                {tab === "multi" && (
                    <CodeBlock
                        title="multi-return.sh"
                        code={`lay_thong_tin_ram() {\n    RAM_TOTAL=$(free -m | awk '/Mem:/{print $2}')\n    RAM_USED=$(free  -m | awk '/Mem:/{print $3}')\n    RAM_FREE=$(free  -m | awk '/Mem:/{print $4}')\n    RAM_PCT=$(echo "scale=1; $RAM_USED*100/$RAM_TOTAL" | bc)\n}\n\nlay_thong_tin_ram\necho "Total: ${"{"}RAM_TOTAL{'}'}MB"\necho "Used : ${"{"}RAM_USED{'}'}MB (${"{"}RAM_PCT{'}'}%)"\necho "Free : ${"{"}RAM_FREE{'}'}MB"`}
                    />
                )}
                {tab === "trap" && (
                    <CodeBlock
                        title="trap-cleanup.sh"
                        code={`don_dep() {\n    echo "Đang dọn dẹp file tạm..."\n    rm -f /tmp/script_tmp_*\n    echo "Xong!"\n}\n\ntrap don_dep EXIT\n\ntouch /tmp/script_tmp_001\ntouch /tmp/script_tmp_002\necho "Làm việc..."\n# Khi script thoát → don_dep tự chạy`}
                    />
                )}
            </div>
        </div>
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
            title: "Khai báo & gọi",
            rows: [
                ["ten_ham() { ... }", "Khai báo"],
                ["function ten_ham { }", "Cách khác"],
                ["ten_ham", "Gọi hàm"],
                ["ten_ham arg1 arg2", "Gọi có tham số"],
            ],
        },
        {
            title: "Tham số",
            rows: [
                ["$1 $2", "Tham số thứ tự"],
                ["$@", "Tất cả tham số"],
                ["$#", "Số tham số"],
                ["$0", "Tên script"],
            ],
        },
        {
            title: "Biến",
            rows: [
                ["local x=1", "Biến cục bộ"],
                ["x=1", "Biến toàn cục nếu không local"],
                ["readonly", "Hằng số"],
                ["unset", "Xóa biến"],
            ],
        },
        {
            title: "Trả về",
            rows: [
                ["return 0/1", "Exit code"],
                ["echo kết quả", "Trả chuỗi/số"],
                ["kq=$(ham)", "Bắt output"],
                ["biến toàn cục", "Nhiều giá trị"],
            ],
        },
        {
            title: "Tái sử dụng",
            rows: [
                ["source lib.sh", "Nạp thư viện"],
                [". lib.sh", "Viết tắt source"],
                ["trap cleanup EXIT", "Dọn dẹp khi thoát"],
                ['main "$@"', "Pattern main"],
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
        question: "Khi gọi hàm trong Bash, cú pháp nào đúng?",
        options: [
            "chao_mung()",
            "call chao_mung",
            "chao_mung",
            "function chao_mung()",
        ],
        correct: 2,
        explanation:
            "Khi gọi hàm, chỉ gõ tên hàm và tham số nếu có. Dấu () dùng khi khai báo, không dùng khi gọi.",
    },
    {
        question: "Trong hàm, $1 đại diện cho gì?",
        options: [
            "Tên script",
            "Tham số thứ nhất của hàm",
            "Exit code",
            "PID của shell",
        ],
        correct: 1,
        explanation:
            "$1 là tham số thứ nhất được truyền vào hàm, giống cách script nhận tham số.",
    },
    {
        question: "Tại sao nên dùng local trong hàm?",
        options: [
            "Để biến chỉ sống trong hàm và không làm bẩn biến toàn cục",
            "Để script chạy nhanh gấp đôi",
            "Để hàm tự chạy khi mở terminal",
            "Để xóa file tạm",
        ],
        correct: 0,
        explanation:
            "local giúp biến trong hàm không ghi đè biến bên ngoài ngoài ý muốn.",
    },
    {
        question: "return trong Bash chủ yếu trả về gì?",
        options: ["Chuỗi bất kỳ", "Mảng", "Exit code 0–255", "File output"],
        correct: 2,
        explanation:
            "return trả exit code. Muốn trả chuỗi/số, thường dùng echo rồi bắt bằng $().",
    },
    {
        question: "Cách phổ biến để nhận giá trị số/chuỗi từ hàm là gì?",
        options: [
            "ket_qua=$(ham)",
            "ket_qua=return ham",
            "ham -> ket_qua",
            "local return",
        ],
        correct: 0,
        explanation:
            "Hàm echo kết quả, sau đó command substitution $(ham) bắt output vào biến.",
    },
    {
        question: "source lib.sh dùng để làm gì?",
        options: [
            "Nén file lib.sh",
            "Nạp hàm/biến trong lib.sh vào shell hiện tại",
            "Chạy lib.sh trong tiến trình độc lập",
            "Xóa lib.sh",
        ],
        correct: 1,
        explanation:
            "source nạp nội dung file vào shell hiện tại, nhờ đó script có thể dùng các hàm trong thư viện.",
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
