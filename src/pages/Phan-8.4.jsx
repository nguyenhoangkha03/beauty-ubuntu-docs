import React, { useMemo, useState } from "react";
import {
    Terminal,
    Repeat,
    List,
    RotateCw,
    TimerReset,
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
    Server,
    Activity,
    Menu,
    ArrowRight,
    Code2,
    Layers,
    Gauge,
    Clock,
    PauseCircle,
    SkipForward,
    PackageCheck,
    SearchCheck,
    Cpu,
    HardDrive,
    Wifi,
    Database,
    FileCog,
    ClipboardList,
    Workflow,
    Hash,
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
                                Bash Script · Loops · Automation
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 8
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 8.4
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" /> Lặp
                        lại hàng nghìn tác vụ chỉ với vài dòng Bash
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Vòng Lặp Bash <br />
                        <span className="text-orange-500">
                            for, while, until
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Vòng lặp giúp script xử lý danh sách file, server, dòng
                        dữ liệu, retry khi lỗi, theo dõi hệ thống và tạo menu tự
                        động.
                    </p>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <LoopOverviewCard />
                    <LoopPicker />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="blue"
                        icon={<Repeat size={22} />}
                        title="for – Lặp qua danh sách"
                        subtitle="Dùng for khi bạn đã biết danh sách hoặc số lần cần lặp: màu, số, file, mảng, output lệnh."
                    />
                    <ForSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="green"
                        icon={<RotateCw size={22} />}
                        title="while – Lặp khi điều kiện còn đúng"
                        subtitle="Dùng while khi chưa biết trước số lần lặp, ví dụ hỏi lại input, đọc file từng dòng, hoặc monitor hệ thống."
                    />
                    <WhileSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="purple"
                        icon={<TimerReset size={22} />}
                        title="until – Lặp cho đến khi điều kiện đúng"
                        subtitle="until ngược với while: tiếp tục lặp khi điều kiện sai, dừng khi điều kiện đúng."
                    />
                    <UntilSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="orange"
                        icon={<SkipForward size={22} />}
                        title="break và continue"
                        subtitle="break thoát vòng lặp ngay. continue bỏ qua lần lặp hiện tại rồi chạy lần kế tiếp."
                    />
                    <BreakContinueSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="cyan"
                        icon={<PackageCheck size={22} />}
                        title="Ví dụ thực tế"
                        subtitle="Batch rename, kiểm tra nhiều server, retry khi lỗi và tạo báo cáo dung lượng thư mục."
                    />
                    <RealExamplesTabs />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="pink"
                        icon={<Menu size={22} />}
                        title="select – Menu tự động từ mảng"
                        subtitle="select giúp Bash tự sinh menu đánh số từ một mảng, rất tiện cho script quản trị tương tác."
                    />
                    <SelectSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="teal"
                        icon={<ClipboardList size={22} />}
                        title="Tóm tắt nhanh"
                        subtitle="Các cú pháp vòng lặp và điều khiển vòng lặp cần nhớ sau bài 8.4."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <SearchCheck className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức bài 8.4
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Ôn lại for, while, until, break/continue và
                                    select.
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
                        Script đã biết lặp. Tiếp theo là gom code thành các khối
                        tái sử dụng bằng hàm.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                        Bài tiếp theo: 8.5 — Hàm function trong Bash{" "}
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
        cyan: "bg-cyan-500/20 text-cyan-400",
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

function LoopOverviewCard() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-orange-500/15 text-orange-400 rounded-2xl flex items-center justify-center">
                    <Repeat size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        Vòng lặp là gì?
                    </h3>
                    <p className="text-slate-500 text-sm">
                        Cách để script làm đi làm lại một việc
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-3 mb-5">
                <LoopMini
                    icon={<List size={18} />}
                    title="for"
                    desc="Có danh sách / biết số lần"
                />
                <LoopMini
                    icon={<RotateCw size={18} />}
                    title="while"
                    desc="Lặp khi điều kiện đúng"
                />
                <LoopMini
                    icon={<TimerReset size={18} />}
                    title="until"
                    desc="Lặp cho đến khi đúng"
                />
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm space-y-3">
                <div>
                    <span className="text-purple-400">for</span> file{" "}
                    <span className="text-purple-400">in</span> *.txt;{" "}
                    <span className="text-purple-400">do</span>
                </div>
                <div className="pl-5 text-slate-300">wc -l "$file"</div>
                <div>
                    <span className="text-purple-400">done</span>
                </div>
            </div>
            <div className="mt-5 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 text-sm text-blue-100 flex gap-3">
                <Info size={20} className="text-blue-400 shrink-0 mt-0.5" />
                <p>
                    <strong>done</strong> là từ khóa kết thúc vòng lặp trong
                    Bash. <code className="text-white">do</code> bắt đầu khối
                    lệnh, <code className="text-white">done</code> kết thúc khối
                    lệnh.
                </p>
            </div>
        </div>
    );
}

function LoopMini({ icon, title, desc }) {
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
            <div className="text-orange-400 mb-2">{icon}</div>
            <div className="font-bold text-white text-sm">{title}</div>
            <div className="text-xs text-slate-500 mt-1">{desc}</div>
        </div>
    );
}

function LoopPicker() {
    const [scenario, setScenario] = useState("files");
    const data = {
        files: {
            title: "Xử lý tất cả file .txt",
            best: "for",
            reason: "Bạn đã có danh sách file biết trước qua wildcard *.txt.",
            code: 'for file in *.txt; do\n    wc -l "$file"\ndone',
        },
        input: {
            title: "Hỏi lại đến khi nhập đúng",
            best: "while",
            reason: "Không biết người dùng sẽ nhập sai bao nhiêu lần.",
            code: 'while true; do\n    read -p "Nhập số 1-10: " so\n    # đúng thì break\ndone',
        },
        server: {
            title: "Chờ server online",
            best: "until",
            reason: "Muốn lặp cho đến khi ping thành công.",
            code: "until ping -c1 server &>/dev/null; do\n    sleep 5\ndone",
        },
        report: {
            title: "Lặp qua mảng thư mục",
            best: "for",
            reason: "Danh sách thư mục đã biết trước.",
            code: 'for dir in /var/log /home /tmp; do\n    du -sh "$dir"\ndone',
        },
    };
    const item = data[scenario];
    return (
        <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Workflow className="text-orange-400" /> Chọn vòng lặp phù hợp
            </h3>
            <p className="text-slate-400 mb-6">
                Bấm vào tình huống để xem nên dùng for, while hay until.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-5">
                {Object.entries(data).map(([key, value]) => (
                    <button
                        key={key}
                        onClick={() => setScenario(key)}
                        className={`p-4 rounded-xl border text-left transition-all ${scenario === key ? "bg-orange-500/10 border-orange-500/40 text-white" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                    >
                        <div className="font-semibold text-sm">
                            {value.title}
                        </div>
                    </button>
                ))}
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                <div className="text-sm text-slate-500 mb-2">Nên dùng</div>
                <div className="text-4xl font-black text-orange-400 mb-3">
                    {item.best}
                </div>
                <p className="text-slate-400 mb-4">{item.reason}</p>
                <pre className="bg-black/50 border border-slate-800 rounded-xl p-4 text-sm text-green-400 overflow-x-auto">
                    <code>{item.code}</code>
                </pre>
            </div>
        </div>
    );
}

function ForSection() {
    const [tab, setTab] = useState("list");
    const tabs = [
        { id: "list", label: "Danh sách", icon: <List size={16} /> },
        { id: "cstyle", label: "Kiểu C", icon: <Hash size={16} /> },
        { id: "files", label: "File & thư mục", icon: <Folder size={16} /> },
        { id: "array", label: "Mảng", icon: <Layers size={16} /> },
        { id: "output", label: "Output lệnh", icon: <Terminal size={16} /> },
    ];
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                {tabs.map((t) => (
                    <button
                        key={t.id}
                        onClick={() => setTab(t.id)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 ${tab === t.id ? "bg-blue-500 text-white" : "bg-slate-900 text-slate-400 hover:text-slate-200"}`}
                    >
                        {t.icon}
                        {t.label}
                    </button>
                ))}
            </div>
            <div className="p-5">
                {tab === "list" && <ForList />}
                {tab === "cstyle" && <ForCStyle />}
                {tab === "files" && <ForFiles />}
                {tab === "array" && <ForArray />}
                {tab === "output" && <ForOutput />}
            </div>
        </div>
    );
}

function ForList() {
    return (
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-6">
            <CodeBlock
                title="for-list.sh"
                code={`#!/bin/bash\n\n# Danh sách chuỗi\nfor mau in đỏ vàng xanh tím cam; do\n    echo "Màu: $mau"\ndone\n\n# Danh sách số\nfor so in 1 2 3 4 5; do\n    echo "Số: $so"\ndone\n\n# Dãy số với {start..end}\nfor i in {1..10}; do\n    echo "Dòng $i"\ndone\n\n# Dãy số với bước nhảy\nfor i in {0..20..5}; do\n    echo -n "$i "\ndone\necho ""\n\n# Đếm ngược\nfor i in {10..1}; do\n    echo -n "$i "\ndone`}
            />
            <CheatCard
                title="Cú pháp for cơ bản"
                rows={[
                    ["for x in a b c; do", "Lặp qua danh sách"],
                    ["done", "Kết thúc vòng lặp"],
                    ["{1..10}", "Dãy số tăng"],
                    ["{0..20..5}", "Dãy số có bước nhảy"],
                    ["{10..1}", "Đếm ngược"],
                ]}
            />
        </div>
    );
}

function ForCStyle() {
    return (
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-6">
            <CodeBlock
                title="for-c-style.sh"
                code={`#!/bin/bash\n\nfor ((i=1; i<=5; i++)); do\n    echo "i = $i"\ndone\n\nfor ((i=0; i<=20; i+=2)); do\n    echo -n "$i "\ndone\necho ""\n\nfor ((i=10; i>=1; i--)); do\n    echo -n "$i "\ndone\n\n# Lồng nhau\nfor ((hang=1; hang<=3; hang++)); do\n    for ((cot=1; cot<=3; cot++)); do\n        echo -n "$hang×$cot=$((hang*cot))  "\n    done\n    echo ""\ndone`}
            />
            <MultiplicationDemo />
        </div>
    );
}

function MultiplicationDemo() {
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 h-fit">
            <h4 className="font-bold text-white mb-4">
                Output vòng lặp lồng nhau
            </h4>
            <div className="grid grid-cols-3 gap-2 font-mono text-sm">
                {[1, 2, 3].map((r) =>
                    [1, 2, 3].map((c) => (
                        <div
                            key={`${r}-${c}`}
                            className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center text-green-400"
                        >
                            {r}×{c}={r * c}
                        </div>
                    )),
                )}
            </div>
            <p className="text-slate-500 text-sm mt-4">
                Vòng ngoài chạy hàng, vòng trong chạy cột. Mỗi hàng kết thúc
                bằng <code className="text-orange-300">echo ""</code>.
            </p>
        </div>
    );
}

function ForFiles() {
    return (
        <CodeBlock
            title="for-files.sh"
            code={`#!/bin/bash\n\n# Tất cả file trong thư mục hiện tại\nfor file in *; do\n    echo "$file"\ndone\n\n# File .txt\nfor file in *.txt; do\n    echo "Xử lý: $file"\n    wc -l "$file"\ndone\n\n# File log với đường dẫn đầy đủ\nfor file in /var/log/*.log; do\n    echo "Log: $file ($(wc -l < $file) dòng)"\ndone\n\n# Thư mục con\nfor dir in /home/*/; do\n    echo "User home: $dir"\ndone\n\n# Kết quả find\nfor file in $(find /var/log -name "*.log" -mtime -7); do\n    echo "Log mới: $file"\ndone`}
        />
    );
}

function ForArray() {
    return (
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-6">
            <CodeBlock
                title="for-array.sh"
                code={`#!/bin/bash\n\nservers=("web-01" "web-02" "db-01" "cache-01")\n\n# Lặp qua giá trị\nfor server in "${"{"}servers[@]{'}'}"; do\n    echo "Ping $server..."\n    ping -c1 -W1 $server &>/dev/null \\\n        && echo "  ✓ Online" \\\n        || echo "  ✗ Offline"\ndone\n\n# Lặp qua index\nfor i in "${"{"}!servers[@]{'}'}"; do\n    echo "Server[$i]: ${"{"}servers[$i]{'}'}"\ndone`}
            />
            <CheatCard
                title="Mảng trong vòng for"
                rows={[
                    ["${arr[@]}", "Tất cả giá trị"],
                    ["${!arr[@]}", "Tất cả index"],
                    ['"${arr[@]}"', "Giữ nguyên phần tử có dấu cách"],
                    ["${arr[$i]}", "Truy cập theo index"],
                ]}
            />
        </div>
    );
}

function ForOutput() {
    return (
        <CodeBlock
            title="for-output.sh"
            code={`#!/bin/bash\n\n# User trong /etc/passwd\nfor user in $(cut -d':' -f1 /etc/passwd | head -5); do\n    echo "User: $user"\ndone\n\n# Danh sách process nginx\nfor pid in $(pgrep nginx); do\n    echo "Nginx PID: $pid"\ndone\n\n# Danh sách IP trong file\nfor ip in $(cat ip_list.txt); do\n    ping -c1 -W1 $ip &>/dev/null \\\n        && echo "$ip: UP" \\\n        || echo "$ip: DOWN"\ndone`}
            note="Lưu ý: for x in $(lệnh) tách theo whitespace. Với dữ liệu từng dòng có khoảng trắng, ưu tiên while IFS= read -r."
        />
    );
}

function WhileSection() {
    const [tab, setTab] = useState("basic");
    const tabs = [
        { id: "basic", label: "Cơ bản", icon: <RotateCw size={16} /> },
        { id: "readfile", label: "Đọc file", icon: <FileText size={16} /> },
        { id: "input", label: "Input", icon: <Terminal size={16} /> },
        { id: "monitor", label: "Monitor", icon: <Activity size={16} /> },
    ];
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                {tabs.map((t) => (
                    <button
                        key={t.id}
                        onClick={() => setTab(t.id)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 ${tab === t.id ? "bg-green-500 text-white" : "bg-slate-900 text-slate-400 hover:text-slate-200"}`}
                    >
                        {t.icon}
                        {t.label}
                    </button>
                ))}
            </div>
            <div className="p-5">
                {tab === "basic" && <WhileBasic />}
                {tab === "readfile" && <WhileReadFile />}
                {tab === "input" && <WhileInput />}
                {tab === "monitor" && <WhileMonitor />}
            </div>
        </div>
    );
}

function WhileBasic() {
    const [n, setN] = useState(5);
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="while-basic.sh"
                code={`#!/bin/bash\n\n# Đếm từ 1 đến 5\ndem=1\nwhile [ $dem -le 5 ]; do\n    echo "Đang đếm: $dem"\n    ((dem++))\ndone\n\n# Đếm ngược\ndem=10\nwhile [ $dem -ge 1 ]; do\n    echo -n "$dem "\n    ((dem--))\ndone\necho ""\n\n# Vòng lặp vô hạn\nwhile true; do\n    echo "Đang chạy... $(date +%H:%M:%S)"\n    sleep 5\ndone`}
            />
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 h-fit">
                <h4 className="font-bold text-white mb-4">
                    Mô phỏng đếm while
                </h4>
                <input
                    type="range"
                    min="1"
                    max="10"
                    value={n}
                    onChange={(e) => setN(Number(e.target.value))}
                    className="w-full accent-green-500 mb-4"
                />
                <div className="text-slate-400 text-sm mb-3">
                    dem chạy từ 1 đến {n}
                </div>
                <div className="grid grid-cols-5 gap-2">
                    {Array.from({ length: n }, (_, i) => i + 1).map((x) => (
                        <div
                            key={x}
                            className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center font-mono text-green-400"
                        >
                            {x}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function WhileReadFile() {
    return (
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-6">
            <CodeBlock
                title="while-read-file.sh"
                code={`#!/bin/bash\n\n# Đọc file từng dòng, chuẩn và an toàn nhất\nwhile IFS= read -r dong; do\n    echo "Dòng: $dong"\ndone < /etc/hosts\n\n# Đọc CSV\nwhile IFS=',' read -r ten phong luong; do\n    echo "Tên: $ten | Phòng: $phong | Lương: $luong"\ndone < employees.csv\n\n# Đọc từ kết quả lệnh\nwhile IFS= read -r line; do\n    echo "Log: $line"\ndone < <(grep "ERROR" /var/log/syslog | tail -20)`}
            />
            <div className="space-y-4">
                <ExplainCard
                    cmd="IFS="
                    desc="Không bỏ khoảng trắng đầu/cuối dòng."
                />
                <ExplainCard
                    cmd="read -r"
                    desc="Không xử lý backslash như ký tự escape."
                />
                <ExplainCard
                    cmd="done < file"
                    desc="Nạp file làm input cho vòng while."
                />
                <ExplainCard
                    cmd="<(lệnh)"
                    desc="Process substitution: biến output của lệnh thành input đọc được."
                />
            </div>
        </div>
    );
}

function WhileInput() {
    return (
        <CodeBlock
            title="while-input.sh"
            code={`#!/bin/bash\n\n# Hỏi lại cho đến khi người dùng nhập đúng\nwhile true; do\n    read -p "Nhập số từ 1-10: " so\n\n    if [[ "$so" =~ ^[0-9]+$ ]] && \\\n       [ "$so" -ge 1 ] && \\\n       [ "$so" -le 10 ]; then\n        echo "Bạn nhập: $so"\n        break\n    else\n        echo "Sai! Vui lòng nhập lại."\n    fi\ndone\n\n# Hỏi xác nhận yes/no\nwhile true; do\n    read -p "Tiếp tục? (y/n): " ans\n    case $ans in\n        [Yy] | yes | YES) echo "OK, tiếp tục!"; break ;;\n        [Nn] | no  | NO ) echo "Đã huỷ."; exit 0 ;;\n        *) echo "Nhập y hoặc n." ;;\n    esac\ndone`}
        />
    );
}

function WhileMonitor() {
    return (
        <CodeBlock
            title="monitor.sh"
            code={`#!/bin/bash\n# Theo dõi server mỗi 10 giây\n\nLOG="/var/log/monitor.log"\n\necho "Bắt đầu theo dõi... (Ctrl+C để dừng)"\n\nwhile true; do\n    THOI_GIAN=$(date '+%Y-%m-%d %H:%M:%S')\n    CPU=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}')\n    RAM=$(free | awk '/Mem:/ {printf "%.1f", $3/$2*100}')\n    DISK=$(df / | awk 'NR==2 {print $5}')\n\n    DONG="[$THOI_GIAN] CPU:${CPU}% RAM:${RAM}% DISK:${DISK}"\n    echo "$DONG"\n    echo "$DONG" >> $LOG\n\n    RAM_INT=${"{"}RAM%.*{'}'}\n    if [ "$RAM_INT" -gt 90 ]; then\n        echo "⚠ CẢNH BÁO: RAM cao: ${"{"}RAM{'}'}%"\n    fi\n\n    sleep 10\ndone`}
        />
    );
}

function UntilSection() {
    const [ready, setReady] = useState(false);
    return (
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-6">
            <CodeBlock
                title="until.sh"
                code={`#!/bin/bash\n\n# Đếm từ 1 đến 5 bằng until\ndem=1\nuntil [ $dem -gt 5 ]; do\n    echo "Đếm: $dem"\n    ((dem++))\ndone\n\n# Chờ file xuất hiện\nuntil [ -f /tmp/ready.flag ]; do\n    echo "Chờ file /tmp/ready.flag..."\n    sleep 2\ndone\necho "File đã sẵn sàng! Tiếp tục..."\n\n# Chờ server online\nuntil ping -c1 -W1 192.168.1.100 &>/dev/null; do\n    echo "Server chưa online, thử lại sau 5 giây..."\n    sleep 5\ndone\necho "✓ Server đã online!"\n\n# Chờ MySQL sẵn sàng\nuntil mysqladmin ping -h localhost &>/dev/null; do\n    echo "Đợi MySQL..."\n    sleep 3\ndone\necho "✓ MySQL sẵn sàng!"`}
            />
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 h-fit">
                <h4 className="font-bold text-white mb-4">
                    Mô phỏng until chờ file
                </h4>
                <button
                    onClick={() => setReady((v) => !v)}
                    className={`w-full p-4 rounded-xl border font-bold mb-5 ${ready ? "bg-green-500 text-white border-green-500" : "bg-slate-900 border-slate-800 text-slate-300"}`}
                >
                    {ready
                        ? "File /tmp/ready.flag đã xuất hiện"
                        : "File chưa xuất hiện"}
                </button>
                <div className="bg-black border border-slate-800 rounded-xl p-5 font-mono text-sm whitespace-pre-wrap">
                    {ready ? (
                        <span className="text-green-400">
                            File đã sẵn sàng! Tiếp tục...
                        </span>
                    ) : (
                        <span className="text-yellow-400">
                            Chờ file /tmp/ready.flag...\nsleep 2\nChờ file
                            /tmp/ready.flag...
                        </span>
                    )}
                </div>
                <p className="text-slate-500 text-sm mt-4">
                    <code className="text-orange-300">until [ đk ]</code> tương
                    đương{" "}
                    <code className="text-orange-300">while [ ! đk ]</code>.
                </p>
            </div>
        </div>
    );
}

function BreakContinueSection() {
    const [mode, setMode] = useState("break");
    const output = {
        break: "i = 1\ni = 2\ni = 3\ni = 4\nGặp số 5, dừng!",
        continue: "Số lẻ: 1\nSố lẻ: 3\nSố lẻ: 5\nSố lẻ: 7\nSố lẻ: 9",
        nested: "i=1 j=1\ni=2 j=1\ni=3 j=1",
        break2: "i=1 j=1",
    };
    const code = {
        break: `for i in {1..10}; do\n    if [ $i -eq 5 ]; then\n        echo "Gặp số 5, dừng!"\n        break\n    fi\n    echo "i = $i"\ndone`,
        continue: `for i in {1..10}; do\n    if [ $((i % 2)) -eq 0 ]; then\n        continue\n    fi\n    echo "Số lẻ: $i"\ndone`,
        nested: `for ((i=1; i<=3; i++)); do\n    for ((j=1; j<=3; j++)); do\n        if [ $j -eq 2 ]; then\n            break\n        fi\n        echo "i=$i j=$j"\n    done\ndone`,
        break2: `for ((i=1; i<=3; i++)); do\n    for ((j=1; j<=3; j++)); do\n        if [ $j -eq 2 ]; then\n            break 2\n        fi\n        echo "i=$i j=$j"\n    done\ndone`,
    };
    const labels = {
        break: "break",
        continue: "continue",
        nested: "break trong vòng lồng nhau",
        break2: "break 2",
    };
    return (
        <div className="grid lg:grid-cols-[280px_1fr] gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 space-y-2 h-fit">
                {Object.keys(labels).map((key) => (
                    <button
                        key={key}
                        onClick={() => setMode(key)}
                        className={`w-full text-left p-4 rounded-xl border text-sm font-semibold transition-all ${mode === key ? "bg-orange-500/10 border-orange-500/40 text-white" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                    >
                        {labels[key]}
                    </button>
                ))}
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
                <CodeBlock
                    title={`${labels[mode]}.sh`}
                    code={`#!/bin/bash\n\n${code[mode]}`}
                />
                <div className="bg-black border border-slate-800 rounded-2xl p-5 min-h-[260px]">
                    <div className="text-xs text-slate-500 mb-3">
                        Terminal output
                    </div>
                    <pre className="font-mono text-sm text-green-400 whitespace-pre-wrap">
                        {output[mode]}
                    </pre>
                </div>
            </div>
        </div>
    );
}

function RealExamplesTabs() {
    const [tab, setTab] = useState("rename");
    const tabs = [
        { id: "rename", label: "Batch rename", icon: <FileCog size={16} /> },
        { id: "servers", label: "Check servers", icon: <Server size={16} /> },
        { id: "retry", label: "Retry", icon: <RotateCcw size={16} /> },
        { id: "report", label: "Report", icon: <ClipboardList size={16} /> },
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
                {tab === "rename" && <BatchRename />}
                {tab === "servers" && <CheckServers />}
                {tab === "retry" && <RetryExample />}
                {tab === "report" && <ReportExample />}
            </div>
        </div>
    );
}

function BatchRename() {
    return (
        <CodeBlock
            title="batch_rename.sh"
            code={`#!/bin/bash\n# Đổi tên hàng loạt file\n\nTHEM_TIEN_TO="2024_"\nDEM=0\n\nfor file in *.jpg *.png *.jpeg; do\n    [ -f "$file" ] || continue\n\n    TEN_MOI="${"{"}THEM_TIEN_TO{'}'}${"{"}file{'}'}"\n    mv "$file" "$TEN_MOI"\n    echo "✓ $file → $TEN_MOI"\n    ((DEM++))\ndone\n\necho ""\necho "Đã đổi tên $DEM file."`}
        />
    );
}

function CheckServers() {
    return (
        <CodeBlock
            title="check_servers.sh"
            code={`#!/bin/bash\n\nservers=(\n    "192.168.1.10:web-01"\n    "192.168.1.11:web-02"\n    "192.168.1.20:db-01"\n    "192.168.1.30:cache-01"\n)\n\nonline=0\noffline=0\n\necho "╔══════════════════════════════════╗"\necho "║       KIỂM TRA SERVER            ║"\necho "╚══════════════════════════════════╝"\n\nfor entry in "${"{"}servers[@]{'}'}"; do\n    IP=$(echo $entry | cut -d':' -f1)\n    TEN=$(echo $entry | cut -d':' -f2)\n\n    if ping -c1 -W2 $IP &>/dev/null; then\n        echo "  ✓ $TEN ($IP) – Online"\n        ((online++))\n    else\n        echo "  ✗ $TEN ($IP) – OFFLINE ⚠"\n        ((offline++))\n    fi\ndone\n\necho ""\necho "  Online : $online server"\necho "  Offline: $offline server"`}
        />
    );
}

function RetryExample() {
    return (
        <CodeBlock
            title="retry.sh"
            code={`#!/bin/bash\n# Thử lại tối đa N lần\n\nMAX_TRY=3\nTRY=1\nTHANH_CONG=false\n\nwhile [ $TRY -le $MAX_TRY ]; do\n    echo "Lần thử $TRY/$MAX_TRY..."\n\n    if curl -sf https://example.com/api/data -o /tmp/data.json; then\n        THANH_CONG=true\n        break\n    fi\n\n    echo "  Thất bại! Thử lại sau 5 giây..."\n    sleep 5\n    ((TRY++))\ndone\n\nif $THANH_CONG; then\n    echo "✓ Thành công sau $((TRY)) lần thử!"\nelse\n    echo "✗ Thất bại sau $MAX_TRY lần thử!"\n    exit 1\nfi`}
        />
    );
}

function ReportExample() {
    return (
        <CodeBlock
            title="report.sh"
            code={`#!/bin/bash\n# Tổng hợp dung lượng các thư mục\n\necho "╔══════════════════════════════════════╗"\necho "║     BÁO CÁO DUNG LƯỢNG THƯ MỤC     ║"\necho "╠══════════════════════════════════════╣"\nprintf "║ %-20s %15s ║\\n" "Thư mục" "Dung lượng"\necho "╠══════════════════════════════════════╣"\n\nTONG=0\n\nfor dir in /var/log /var/www /home /tmp /opt; do\n    if [ -d "$dir" ]; then\n        DUNG_LUONG=$(du -sh "$dir" 2>/dev/null | cut -f1)\n        BYTE=$(du -sb "$dir" 2>/dev/null | cut -f1)\n        printf "║ %-20s %15s ║\\n" "$dir" "$DUNG_LUONG"\n        TONG=$((TONG + BYTE))\n    fi\ndone\n\nTONG_HR=$(echo "scale=1; $TONG/1024/1024" | bc)\necho "╠══════════════════════════════════════╣"\nprintf "║ %-20s %13s MB ║\\n" "TỔNG CỘNG" "$TONG_HR"\necho "╚══════════════════════════════════════╝"`}
        />
    );
}

function SelectSection() {
    const [choice, setChoice] = useState("nginx");
    const services = ["nginx", "mysql", "redis", "thoát"];
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="select-menu.sh"
                code={`#!/bin/bash\n# select tự tạo menu đánh số từ mảng\n\nDICH_VU=("nginx" "mysql" "redis" "thoát")\n\necho "Chọn dịch vụ cần restart:"\n\nselect lua_chon in "${"{"}DICH_VU[@]{'}'}"; do\n    case $lua_chon in\n        "thoát")\n            echo "Tạm biệt!"\n            break\n            ;;\n        "")\n            echo "Lựa chọn không hợp lệ!"\n            ;;\n        *)\n            echo "Đang restart $lua_chon..."\n            sudo systemctl restart $lua_chon\n            echo "✓ Xong!"\n            break\n            ;;\n    esac\ndone`}
            />
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 h-fit">
                <h4 className="font-bold text-white mb-4">Mô phỏng select</h4>
                <div className="space-y-2 mb-5">
                    {services.map((s, i) => (
                        <button
                            key={s}
                            onClick={() => setChoice(s)}
                            className={`w-full p-3 rounded-xl border text-left ${choice === s ? "bg-pink-500 text-white border-pink-500" : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"}`}
                        >
                            {i + 1}) {s}
                        </button>
                    ))}
                </div>
                <div className="bg-black border border-slate-800 rounded-xl p-5 font-mono text-sm whitespace-pre-wrap text-green-400">
                    {choice === "thoát"
                        ? "Tạm biệt!"
                        : `Đang restart ${choice}...\n✓ Xong!`}
                </div>
                <p className="text-slate-500 text-sm mt-4">
                    Nếu người dùng nhập số ngoài menu, biến{" "}
                    <code className="text-orange-300">lua_chon</code> sẽ rỗng.
                </p>
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
                        key={cmd}
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
            title: "for",
            rows: [
                ["for x in a b c; do", "Danh sách"],
                ["for i in {1..10}; do", "Dãy số"],
                ["for f in *.txt; do", "Wildcard file"],
                ['for x in "${arr[@]}"', "Mảng"],
                ["for ((i=0;i<n;i++))", "Kiểu C"],
            ],
        },
        {
            title: "while",
            rows: [
                ["while [ đk ]; do", "Lặp khi đúng"],
                ["while true; do", "Vô hạn"],
                ["while IFS= read -r line", "Đọc từng dòng"],
                ["done < file.txt", "Input từ file"],
            ],
        },
        {
            title: "until",
            rows: [
                ["until [ đk ]; do", "Lặp đến khi đúng"],
                ["until ping ...", "Chờ server"],
                ["until [ -f file ]", "Chờ file"],
                ["until mysqladmin ping", "Chờ dịch vụ"],
            ],
        },
        {
            title: "Điều khiển",
            rows: [
                ["break", "Thoát vòng lặp"],
                ["break 2", "Thoát 2 vòng lồng nhau"],
                ["continue", "Bỏ qua lượt hiện tại"],
                ["sleep 5", "Chờ giữa các lần lặp"],
            ],
        },
        {
            title: "Ứng dụng",
            rows: [
                ["batch rename", "Đổi tên hàng loạt"],
                ["check servers", "Kiểm tra nhiều máy"],
                ["retry", "Thử lại khi lỗi"],
                ["select", "Menu tự động"],
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
        question:
            "Vòng lặp nào phù hợp nhất khi đã có danh sách file hoặc mảng biết trước?",
        options: ["for", "while", "until", "case"],
        correct: 0,
        explanation:
            "for phù hợp khi biết danh sách hoặc số lần lặp, ví dụ *.txt hoặc ${arr[@]}.",
    },
    {
        question: "while lặp khi nào?",
        options: [
            "Khi điều kiện sai",
            "Khi điều kiện đúng",
            "Chỉ đúng 1 lần",
            "Khi gặp file .sh",
        ],
        correct: 1,
        explanation:
            "while [ điều_kiện ] sẽ tiếp tục lặp khi điều kiện còn đúng.",
    },
    {
        question: "until khác while ở điểm nào?",
        options: [
            "until không cần done",
            "until lặp khi điều kiện sai và dừng khi đúng",
            "until chỉ dùng cho số",
            "until chỉ đọc file",
        ],
        correct: 1,
        explanation:
            "until ngược với while: lặp cho đến khi điều kiện trở thành đúng.",
    },
    {
        question: "Cách đọc file từng dòng an toàn nhất trong Bash là gì?",
        options: [
            "for line in $(cat file)",
            "while IFS= read -r line; do ... done < file",
            "read file all",
            "cat file | for line",
        ],
        correct: 1,
        explanation:
            "while IFS= read -r giữ khoảng trắng và không xử lý backslash đặc biệt.",
    },
    {
        question: "continue có tác dụng gì?",
        options: [
            "Thoát toàn bộ script",
            "Thoát vòng lặp ngay",
            "Bỏ qua lần lặp hiện tại và lặp tiếp",
            "Dừng máy",
        ],
        correct: 2,
        explanation:
            "continue bỏ qua phần còn lại của lần lặp hiện tại, rồi chuyển sang lần kế tiếp.",
    },
    {
        question: "select trong Bash dùng để làm gì?",
        options: [
            "Tự tạo menu đánh số từ danh sách/mảng",
            "Chọn text trong terminal",
            "Tạo file nén",
            "Kiểm tra mạng",
        ],
        correct: 0,
        explanation:
            "select tự sinh menu đánh số và lưu lựa chọn vào biến, thường dùng cho script tương tác.",
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
