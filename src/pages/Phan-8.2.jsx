import React, { useMemo, useState } from "react";
import {
    Terminal,
    Braces,
    Type,
    Hash,
    List,
    Keyboard,
    ShieldCheck,
    Globe2,
    Play,
    Copy,
    Info,
    CheckCircle2,
    XCircle,
    AlertTriangle,
    ChevronRight,
    RotateCcw,
    Sparkles,
    EyeOff,
    Clock,
    Mail,
    UserPlus,
    Server,
    Cpu,
    HardDrive,
    MemoryStick,
    Activity,
    Menu,
    ArrowRight,
    Variable,
    FileText,
    Settings,
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
                                Bash Script · Input · Validation
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 8
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 8.2
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" /> Làm
                        script biết nhớ, tính toán và hỏi người dùng
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Biến, Kiểu Dữ Liệu <br />
                        <span className="text-orange-500">
                            & Nhập Liệu Người Dùng
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Bài này giúp bạn viết script linh hoạt hơn: lưu dữ liệu
                        bằng biến, xử lý chuỗi/số/mảng, nhận input bằng{" "}
                        <code className="text-orange-300">read</code>, kiểm tra
                        dữ liệu và dùng biến môi trường.
                    </p>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <VariableConceptCard />
                    <InteractiveVariableDemo />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="blue"
                        icon={<Variable size={22} />}
                        title="Biến – Ôn lại & nâng cao"
                        subtitle="Biến trong Bash rất đơn giản, nhưng chỉ cần sai khoảng trắng quanh dấu = là script lỗi ngay."
                    />
                    <VariablesAdvanced />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="purple"
                        icon={<Type size={22} />}
                        title="Kiểu dữ liệu trong Bash"
                        subtitle="Bash không ép kiểu cứng như Python/Java. Mặc định mọi thứ là chuỗi, nhưng có thể xử lý như số hoặc mảng."
                    />
                    <DataTypesTabs />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="green"
                        icon={<Keyboard size={22} />}
                        title="read – Nhập liệu từ người dùng"
                        subtitle="read biến script thành chương trình tương tác: hỏi tên, tuổi, mật khẩu, xác nhận, timeout và đọc file."
                    />
                    <ReadPlayground />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="orange"
                        icon={<Menu size={22} />}
                        title="Script thực tế – Menu tương tác"
                        subtitle="Một script quản trị hệ thống có menu để người dùng chọn tác vụ cần chạy."
                    />
                    <MenuScriptSimulator />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="red"
                        icon={<ShieldCheck size={22} />}
                        title="Validate – Kiểm tra input người dùng"
                        subtitle="Không bao giờ tin input người dùng. Hãy kiểm tra trống, số, khoảng giá trị, email, username và mật khẩu."
                    />
                    <ValidationSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="cyan"
                        icon={<Globe2 size={22} />}
                        title="Biến môi trường"
                        subtitle="Biến môi trường giúp truyền cấu hình cho shell, script con và ứng dụng mà không cần hard-code vào file."
                    />
                    <EnvironmentSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="teal"
                        icon={<FileText size={22} />}
                        title="Tóm tắt nhanh"
                        subtitle="Các cú pháp quan trọng nhất của bài 8.2: biến, chuỗi, mảng, nhập liệu và số học."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <ShieldCheck className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức bài 8.2
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Kiểm tra nhanh biến, kiểu dữ liệu, read và
                                    validate.
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
                        Sau khi biết nhận dữ liệu, bước tiếp theo là cho script
                        ra quyết định bằng điều kiện.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                        Bài tiếp theo: 8.3 — if, else, case{" "}
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
        red: "bg-red-500/20 text-red-400",
        cyan: "bg-cyan-500/20 text-cyan-400",
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

function Kbd({ children }) {
    return (
        <kbd className="bg-slate-800 border border-slate-600 text-slate-200 px-2 py-1 rounded-md text-xs font-sans shadow-sm inline-block">
            {children}
        </kbd>
    );
}

function VariableConceptCard() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-blue-500/15 text-blue-400 rounded-2xl flex items-center justify-center">
                    <Braces size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        Biến là gì?
                    </h3>
                    <p className="text-slate-500 text-sm">
                        Một “ô nhớ” có tên để lưu dữ liệu
                    </p>
                </div>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm space-y-3">
                <div>
                    <span className="text-purple-400">ten</span>=
                    <span className="text-green-400">"Alice"</span>
                </div>
                <div>
                    <span className="text-purple-400">tuoi</span>=
                    <span className="text-green-400">25</span>
                </div>
                <div>
                    <span className="text-purple-400">ngay</span>=
                    <span className="text-green-400">$(date +%Y-%m-%d)</span>
                </div>
                <div className="border-t border-slate-800 pt-3 text-slate-500">
                    echo "Xin chào,{" "}
                    <span className="text-orange-300">$ten</span>"
                </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-3 mt-5">
                <MiniConcept
                    icon={<Type size={18} />}
                    title="Chuỗi"
                    desc="Tên, đường dẫn, email"
                />
                <MiniConcept
                    icon={<Hash size={18} />}
                    title="Số"
                    desc="Tuổi, port, phép tính"
                />
                <MiniConcept
                    icon={<List size={18} />}
                    title="Mảng"
                    desc="Danh sách giá trị"
                />
            </div>
            <div className="mt-5 bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4 text-sm text-orange-100 flex gap-3">
                <Info size={20} className="text-orange-400 shrink-0 mt-0.5" />
                <p>
                    Trong Bash, khi in chuỗi có biến, nên dùng dấu nháy kép:{" "}
                    <code className="text-white">"$ten"</code>. Cách này tránh
                    lỗi khi giá trị có dấu cách.
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

function InteractiveVariableDemo() {
    const [name, setName] = useState("Alice");
    const [age, setAge] = useState("25");
    const validAge = /^\d+$/.test(age);
    return (
        <div className="bg-gradient-to-br from-blue-500/20 via-slate-900 to-orange-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Play className="text-orange-400" /> Thử thay giá trị biến
            </h3>
            <p className="text-slate-400 mb-6">
                Nhập tên và tuổi để xem script tạo output như thế nào.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <label className="space-y-2">
                    <span className="text-sm text-slate-400">ten</span>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500"
                    />
                </label>
                <label className="space-y-2">
                    <span className="text-sm text-slate-400">tuoi</span>
                    <input
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500"
                    />
                </label>
            </div>
            <CodeBlock
                title="demo.sh"
                code={`#!/bin/bash\nten="${name || ""}"\ntuoi="${age || ""}"\n\necho "Xin chào, $ten"\necho "Bạn $tuoi tuổi"`}
            />
            <div className="mt-5 bg-black border border-slate-800 rounded-2xl p-5">
                <div className="text-xs text-slate-500 mb-3">
                    Terminal output
                </div>
                <div className="font-mono text-sm text-green-400 space-y-1">
                    <div>Xin chào, {name || ""}</div>
                    <div>Bạn {age || ""} tuổi</div>
                </div>
            </div>
            {!validAge && age && (
                <div className="mt-4 bg-red-500/10 border border-red-500/20 text-red-200 rounded-xl p-3 text-sm flex gap-2">
                    <AlertTriangle size={18} className="text-red-400" /> Tuổi
                    hiện không phải số. Phần validate bên dưới sẽ xử lý lỗi này.
                </div>
            )}
        </div>
    );
}

function VariablesAdvanced() {
    return (
        <div className="grid lg:grid-cols-2 gap-6">
            <CodeBlock
                title="variables-advanced.sh"
                code={`#!/bin/bash\n\n# Khai báo cơ bản\nten="Alice"\ntuoi=25\nluong=15000000\n\n# Dùng biến\necho $ten\necho ${ten}\necho "${ten} học Linux"\n\n# Biến từ kết quả lệnh\nngay=$(date +%Y-%m-%d)\nso_process=$(ps aux | wc -l)\nip=$(hostname -I | cut -d' ' -f1)\n\necho "Ngày   : $ngay"\necho "Process: $so_process"\necho "IP     : $ip"\n\n# Biến readonly\nreadonly VERSION="1.0.0"\nreadonly MAX_RETRY=3\n\n# Xoá biến\ntam="tạm thời"\necho $tam\nunset tam\necho $tam`}
            />
            <div className="space-y-6">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-white mb-4">
                        Đúng / Sai khi khai báo biến
                    </h4>
                    <div className="space-y-3">
                        <Rule
                            ok
                            text={'ten="Alice"'}
                            desc="Đúng: không có dấu cách quanh dấu ="
                        />
                        <Rule
                            bad
                            text={'ten = "Alice"'}
                            desc="Sai: Bash hiểu ten là lệnh, = là tham số"
                        />
                        <Rule
                            bad
                            text={'ten ="Alice"'}
                            desc="Sai: vẫn có khoảng trắng trước dấu ="
                        />
                        <Rule
                            bad
                            text={'ten= "Alice"'}
                            desc="Sai: Bash hiểu Alice là lệnh riêng"
                        />
                    </div>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-white mb-4">
                        readonly và unset
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                            <code className="text-orange-300 font-bold">
                                readonly VERSION="1.0.0"
                            </code>
                            <p className="text-slate-400 text-sm mt-2">
                                Tạo hằng số. Sau đó gán lại sẽ báo lỗi.
                            </p>
                        </div>
                        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                            <code className="text-orange-300 font-bold">
                                unset tam
                            </code>
                            <p className="text-slate-400 text-sm mt-2">
                                Xóa biến khỏi shell hiện tại.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Rule({ ok, bad, text, desc }) {
    return (
        <div
            className={`rounded-xl border p-4 ${bad ? "bg-red-500/10 border-red-500/20" : "bg-green-500/10 border-green-500/20"}`}
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

function DataTypesTabs() {
    const [tab, setTab] = useState("string");
    const tabs = [
        { id: "string", label: "Chuỗi", icon: <Type size={16} /> },
        { id: "number", label: "Số", icon: <Hash size={16} /> },
        { id: "array", label: "Mảng", icon: <List size={16} /> },
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
                {tab === "string" && <StringSection />}
                {tab === "number" && <NumberSection />}
                {tab === "array" && <ArraySection />}
            </div>
        </div>
    );
}

function StringSection() {
    return (
        <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-6">
            <CodeBlock
                title="string.sh"
                code={`#!/bin/bash\n\nten="Ubuntu Linux"\n\n# Độ dài chuỗi\necho ${"#"}{ten}          # 12\n\n# Cắt chuỗi\necho ${"{"}ten:0:6{'}'}       # Ubuntu\necho ${"{"}ten:7{'}'}         # Linux\necho ${"{"}ten:7:5{'}'}       # Linux\n\n# Hoa / thường\nchuoi="hello world"\necho ${"{"}chuoi^{'}'}        # Hello world\necho ${"{"}chuoi^^{'}'}       # HELLO WORLD\n\nchuoi2="HELLO WORLD"\necho ${"{"}chuoi2,{'}'}       # hELLO WORLD\necho ${"{"}chuoi2,,{'}'}      # hello world\n\n# Thay thế\nduong_dan="/home/ubuntu/documents/file.txt"\necho ${"{"}duong_dan/ubuntu/alice{'}'}\necho ${"{"}duong_dan//o/0{'}'}\n\n# Xoá tiền tố / hậu tố\nfile="backup_20240115.tar.gz"\necho ${"{"}file#backup_{'}'}\necho ${"{"}file##*.{'}'}\necho ${"{"}file%.tar.gz{'}'}\necho ${"{"}file%%.*{'}'}\n\n# Giá trị mặc định\nten=""\necho ${"{"}ten:-"Người dùng ẩn danh"{'}'}\necho ${"{"}ten:="Người dùng ẩn danh"{'}'}`}
            />
            <CheatCard
                title="Mẫu xử lý chuỗi hay dùng"
                rows={[
                    ["${#ten}", "Độ dài chuỗi"],
                    ["${ten:0:5}", "Cắt chuỗi"],
                    ["${ten^^}", "HOA tất cả"],
                    ["${ten,,}", "thường tất cả"],
                    ["${ten/cũ/mới}", "Thay lần đầu"],
                    ["${ten//cũ/mới}", "Thay tất cả"],
                    ["${ten:-mặc định}", "Dùng giá trị mặc định"],
                ]}
            />
        </div>
    );
}

function NumberSection() {
    return (
        <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-6">
            <CodeBlock
                title="number.sh"
                code={`#!/bin/bash\n\na=10\nb=3\n\necho $((a + b))       # 13\necho $((a - b))       # 7\necho $((a * b))       # 30\necho $((a / b))       # 3, chia nguyên\necho $((a % b))       # 1, chia dư\necho $((a ** b))      # 1000, luỹ thừa\n\n# Số thực với bc\necho "scale=2; 10 / 3" | bc\necho "scale=4; sqrt(2)" | bc\necho "scale=2; 15.5 * 3.14" | bc\n\n# Tăng / giảm\nx=5\n((x++))\n((x--))\n((x+=10))\n((x*=2))\necho $x\n\n# Kiểm tra số nguyên\ngia_tri="123"\nif [[ $gia_tri =~ ^[0-9]+$ ]]; then\n    echo "$gia_tri là số nguyên"\nelse\n    echo "$gia_tri không phải số"\nfi`}
            />
            <div className="space-y-6">
                <CheatCard
                    title="Toán tử số học"
                    rows={[
                        ["+", "Cộng"],
                        ["-", "Trừ"],
                        ["*", "Nhân"],
                        ["/", "Chia nguyên"],
                        ["%", "Chia dư"],
                        ["**", "Lũy thừa"],
                    ]}
                />
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-5 text-sm text-yellow-100 flex gap-3">
                    <AlertTriangle
                        size={20}
                        className="text-yellow-400 shrink-0"
                    />
                    <p>
                        <strong>Bash chia nguyên.</strong> Muốn tính số thực như
                        10/3 = 3.33 thì dùng{" "}
                        <code className="text-white">bc</code>.
                    </p>
                </div>
            </div>
        </div>
    );
}

function ArraySection() {
    return (
        <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-6">
            <CodeBlock
                title="array.sh"
                code={`#!/bin/bash\n\ntrai_cay=("táo" "cam" "xoài" "chuối")\n\necho ${"{"}trai_cay[0]{'}'}        # táo\necho ${"{"}trai_cay[2]{'}'}        # xoài\necho ${"{"}trai_cay[-1]{'}'}       # chuối\n\necho ${"{"}trai_cay[@]{'}'}        # tất cả phần tử\necho ${"#"}{trai_cay[@]}       # số phần tử\n\ntrai_cay+=("dưa hấu")\ntrai_cay[1]="quýt"\nunset trai_cay[3]\n\nfor qua in "${"{"}trai_cay[@]{'}'}"; do\n    echo "  - $qua"\ndone\n\necho ${"{"}trai_cay[@]:1:2{'}'}\n\n# Associative Array\ndeclare -A thong_tin\nthong_tin["ten"]="Alice"\nthong_tin["tuoi"]="25"\nthong_tin["phong"]="IT"\n\necho ${"{"}thong_tin["ten"]{'}'}\necho ${"{"}!thong_tin[@]{'}'}\necho ${"{"}thong_tin[@]{'}'}`}
            />
            <CheatCard
                title="Mảng cần nhớ"
                rows={[
                    ['arr=("a" "b")', "Khai báo"],
                    ["${arr[0]}", "Phần tử đầu"],
                    ["${arr[@]}", "Tất cả phần tử"],
                    ["${#arr[@]}", "Số phần tử"],
                    ['arr+=("d")', "Thêm phần tử"],
                    ["unset arr[1]", "Xóa phần tử"],
                    ["declare -A map", "Mảng kết hợp"],
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
                {rows.map(([cmd, desc]) => (
                    <div
                        key={cmd}
                        className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex items-center justify-between gap-3"
                    >
                        <code className="text-orange-300 text-sm">{cmd}</code>
                        <span className="text-xs text-slate-500 text-right">
                            {desc}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ReadPlayground() {
    const [mode, setMode] = useState("basic");
    const examples = {
        basic: {
            label: "Nhập cơ bản",
            icon: <Keyboard size={16} />,
            code: `echo -n "Nhập tên của bạn: "\nread ten\necho "Xin chào, $ten!"`,
            output: "Nhập tên của bạn: Alice\nXin chào, Alice!",
        },
        prompt: {
            label: "Prompt -p",
            icon: <Terminal size={16} />,
            code: `read -p "Nhập tuổi: " tuoi\necho "Bạn $tuoi tuổi"`,
            output: "Nhập tuổi: 25\nBạn 25 tuổi",
        },
        password: {
            label: "Mật khẩu -s",
            icon: <EyeOff size={16} />,
            code: `read -s -p "Nhập mật khẩu: " matkhau\necho ""\necho "Mật khẩu đã nhập (${"${#matkhau}"} ký tự)"`,
            output: "Nhập mật khẩu: ******\nMật khẩu đã nhập (6 ký tự)",
        },
        multi: {
            label: "Nhiều biến",
            icon: <Braces size={16} />,
            code: `read -p "Nhập họ và tên: " ho ten\necho "Họ: $ho"\necho "Tên: $ten"`,
            output: "Nhập họ và tên: Nguyen An\nHọ: Nguyen\nTên: An",
        },
        onechar: {
            label: "Một ký tự -n",
            icon: <CheckCircle2 size={16} />,
            code: `read -n 1 -p "Bạn có chắc không? (y/n): " xacnhan\necho ""\necho "Bạn chọn: $xacnhan"`,
            output: "Bạn có chắc không? (y/n): y\nBạn chọn: y",
        },
        timeout: {
            label: "Timeout -t",
            icon: <Clock size={16} />,
            code: `read -t 5 -p "Nhập tên (5 giây): " ten\nif [ $? -ne 0 ]; then\n    ten="Khách"\n    echo ""\n    echo "Hết thời gian! Dùng tên mặc định: $ten"\nfi`,
            output: "Nhập tên (5 giây): \nHết thời gian! Dùng tên mặc định: Khách",
        },
        file: {
            label: "Đọc file",
            icon: <FileText size={16} />,
            code: `while read -r dong; do\n    echo "Dòng: $dong"\ndone < /etc/hosts`,
            output: "Dòng: 127.0.0.1 localhost\nDòng: 127.0.1.1 ubuntu",
        },
    };
    const ex = examples[mode];
    return (
        <div className="grid lg:grid-cols-[320px_1fr] gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 space-y-2 h-fit">
                {Object.entries(examples).map(([key, item]) => (
                    <button
                        key={key}
                        onClick={() => setMode(key)}
                        className={`w-full text-left p-4 rounded-xl border transition-all ${mode === key ? "bg-green-500/10 border-green-500/40 text-white" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}
                    >
                        <div className="flex items-center gap-3 text-sm font-semibold">
                            {item.icon}
                            {item.label}
                        </div>
                    </button>
                ))}
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
                <CodeBlock
                    title="read-example.sh"
                    code={`#!/bin/bash\n\n${ex.code}`}
                />
                <div className="bg-black border border-slate-800 rounded-2xl p-5 min-h-[260px]">
                    <div className="text-xs text-slate-500 mb-3">
                        Terminal output mô phỏng
                    </div>
                    <pre className="font-mono text-sm text-green-400 whitespace-pre-wrap">
                        {ex.output}
                    </pre>
                </div>
            </div>
        </div>
    );
}

function MenuScriptSimulator() {
    const [choice, setChoice] = useState("1");
    const outputs = {
        1: "=== THÔNG TIN HỆ THỐNG ===\nLinux ubuntu 6.8.0-generic x86_64 GNU/Linux",
        2: "=== DUNG LƯỢNG Ổ ĐĨA ===\nFilesystem      Size  Used Avail Use% Mounted on\n/dev/sda1        50G   18G   30G  38% /",
        3: "=== RAM ===\n               total        used        free\nMem:            7.7Gi       2.1Gi       4.3Gi",
        4: "=== TOP 10 PROCESS ===\nUSER       PID %CPU %MEM COMMAND\nubuntu    512 12.5  2.1 firefox\nroot      101  3.2  0.5 systemd",
        0: "Tạm biệt!",
        x: "Lựa chọn không hợp lệ!",
    };
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="menu.sh"
                code={`#!/bin/bash\n# menu.sh – Script có menu tương tác\n\nhien_menu() {\n    clear\n    echo -e "\\e[36m╔══════════════════════════╗\\e[0m"\n    echo -e "\\e[36m║     QUẢN LÝ HỆ THỐNG    ║\\e[0m"\n    echo -e "\\e[36m╚══════════════════════════╝\\e[0m"\n    echo ""\n    echo "  1. Xem thông tin hệ thống"\n    echo "  2. Xem dung lượng ổ đĩa"\n    echo "  3. Xem RAM đang dùng"\n    echo "  4. Xem các process đang chạy"\n    echo "  0. Thoát"\n    echo ""\n    read -p "  Chọn [0-4]: " lua_chon\n}\n\nxu_ly() {\n    case $lua_chon in\n        1) uname -a ;;\n        2) df -h ;;\n        3) free -h ;;\n        4) ps aux --sort=-%cpu | head -11 ;;\n        0) echo "Tạm biệt!"; exit 0 ;;\n        *) echo -e "\\e[31mLựa chọn không hợp lệ!\\e[0m"; sleep 1 ;;\n    esac\n}\n\nwhile true; do\n    hien_menu\n    xu_ly\ndone`}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-fit">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Server className="text-orange-400" /> Mô phỏng chọn menu
                </h4>
                <div className="grid grid-cols-3 gap-2 mb-5">
                    {["1", "2", "3", "4", "0", "x"].map((v) => (
                        <button
                            key={v}
                            onClick={() => setChoice(v)}
                            className={`p-3 rounded-xl border font-bold ${choice === v ? "bg-orange-500 text-white border-orange-500" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"}`}
                        >
                            {v}
                        </button>
                    ))}
                </div>
                <div className="bg-black border border-slate-800 rounded-2xl p-5">
                    <div className="text-xs text-slate-500 mb-3">
                        Terminal output
                    </div>
                    <pre className="font-mono text-sm text-green-400 whitespace-pre-wrap">
                        {outputs[choice]}
                    </pre>
                </div>
                <div className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
                    <FeaturePill
                        icon={<Menu size={16} />}
                        text="while true tạo vòng lặp menu"
                    />
                    <FeaturePill
                        icon={<Settings size={16} />}
                        text="case xử lý từng lựa chọn"
                    />
                    <FeaturePill
                        icon={<Keyboard size={16} />}
                        text="read nhận lựa chọn"
                    />
                    <FeaturePill
                        icon={<ArrowRight size={16} />}
                        text="exit 0 thoát sạch"
                    />
                </div>
            </div>
        </div>
    );
}

function FeaturePill({ icon, text }) {
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 flex items-center gap-2 text-slate-400">
            {icon}
            <span>{text}</span>
        </div>
    );
}

function ValidationSection() {
    const [input, setInput] = useState("alice_01");
    const checks = [
        { label: "Không để trống", ok: input.length > 0 },
        {
            label: "Chỉ chữ thường, số, gạch dưới",
            ok: /^[a-z0-9_]+$/.test(input),
        },
        { label: "Tối thiểu 3 ký tự", ok: input.length >= 3 },
    ];
    return (
        <div className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
                <CodeBlock
                    title="validate-input.sh"
                    code={`#!/bin/bash\n# Luôn kiểm tra input trước khi dùng!\n\n# Không được để trống\nread -p "Nhập tên: " ten\nif [ -z "$ten" ]; then\n    echo "Lỗi: Tên không được để trống!"\n    exit 1\nfi\n\n# Phải là số\nread -p "Nhập tuổi: " tuoi\nif ! [[ "$tuoi" =~ ^[0-9]+$ ]]; then\n    echo "Lỗi: Tuổi phải là số nguyên!"\n    exit 1\nfi\n\nif [ "$tuoi" -lt 1 ] || [ "$tuoi" -gt 120 ]; then\n    echo "Lỗi: Tuổi phải từ 1 đến 120!"\n    exit 1\nfi\n\n# Định dạng email\nread -p "Nhập email: " email\nif ! [[ "$email" =~ ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$ ]]; then\n    echo "Lỗi: Email không hợp lệ!"\n    exit 1\nfi`}
                />
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                        <UserPlus className="text-red-400" /> Test validate
                        username
                    </h4>
                    <p className="text-slate-400 text-sm mb-5">
                        Thử nhập username để xem các điều kiện validate hoạt
                        động.
                    </p>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500 mb-5"
                        placeholder="vd: alice_01"
                    />
                    <div className="space-y-3">
                        {checks.map((c) => (
                            <div
                                key={c.label}
                                className={`rounded-xl border p-3 flex items-center gap-3 ${c.ok ? "bg-green-500/10 border-green-500/20 text-green-200" : "bg-red-500/10 border-red-500/20 text-red-200"}`}
                            >
                                {c.ok ? (
                                    <CheckCircle2
                                        size={18}
                                        className="text-green-400"
                                    />
                                ) : (
                                    <XCircle
                                        size={18}
                                        className="text-red-400"
                                    />
                                )}
                                <span className="text-sm">{c.label}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-5 bg-black border border-slate-800 rounded-xl p-4 font-mono text-sm">
                        {checks.every((c) => c.ok) ? (
                            <span className="text-green-400">
                                ✓ Username hợp lệ
                            </span>
                        ) : (
                            <span className="text-red-400">
                                ✗ Username chưa hợp lệ
                            </span>
                        )}
                    </div>
                </div>
            </div>
            <CodeBlock
                title="tao_user.sh"
                code={`#!/bin/bash\n\nread -p "Tên đăng nhập mới: " username\n\n[ -z "$username" ] && echo "Lỗi: Không được trống!" && exit 1\n\n[[ ! "$username" =~ ^[a-z0-9_]+$ ]] && \\\n    echo "Lỗi: Chỉ dùng chữ thường, số, gạch dưới!" && exit 1\n\nid "$username" &>/dev/null && \\\n    echo "Lỗi: User '$username' đã tồn tại!" && exit 1\n\nread -s -p "Mật khẩu: " pass1\necho ""\nread -s -p "Nhập lại : " pass2\necho ""\n\n[ "$pass1" != "$pass2" ] && echo "Lỗi: Mật khẩu không khớp!" && exit 1\n[ ${"#"}{pass1} -lt 8 ]      && echo "Lỗi: Mật khẩu tối thiểu 8 ký tự!" && exit 1\n\necho "✓ Tạo user '$username' thành công!"\n# sudo useradd -m "$username"\n# echo "$username:$pass1" | sudo chpasswd`}
            />
        </div>
    );
}

function EnvironmentSection() {
    return (
        <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-6">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-white mb-4">
                        Biến môi trường có sẵn
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {[
                            ["$HOME", "/home/ubuntu"],
                            ["$USER", "ubuntu"],
                            ["$PATH", "đường dẫn tìm lệnh"],
                            ["$SHELL", "/bin/bash"],
                            ["$PWD", "thư mục hiện tại"],
                            ["$HOSTNAME", "tên máy"],
                            ["$LANG", "ngôn ngữ"],
                            ["$TERM", "loại terminal"],
                        ].map(([k, v]) => (
                            <div
                                key={k}
                                className="bg-slate-950 border border-slate-800 rounded-xl p-3"
                            >
                                <code className="text-cyan-300 font-bold">
                                    {k}
                                </code>
                                <div className="text-xs text-slate-500 mt-1">
                                    {v}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm text-blue-100 flex gap-3">
                    <Info size={20} className="text-blue-400 shrink-0" />
                    <p>
                        Dùng <code className="text-white">env</code> hoặc{" "}
                        <code className="text-white">printenv</code> để xem tất
                        cả biến môi trường hiện có.
                    </p>
                </div>
            </div>
            <CodeBlock
                title="environment.sh"
                code={`# Đặt biến môi trường\nexport MY_APP_PORT=8080\nexport DB_HOST="localhost"\nexport DB_NAME="mydb"\n\n# Biến export được dùng ở script con\nexport CONFIG_DIR="/etc/myapp"\nbash child_script.sh\n\n# Đặt biến vĩnh viễn trong ~/.bashrc\necho 'export MY_VAR="giá trị"' >> ~/.bashrc\nsource ~/.bashrc\n\n# Đặt biến chỉ cho 1 lệnh\nLANG=C ls\nDEBUG=true ./script.sh`}
            />
        </div>
    );
}

function SummaryGrid() {
    const groups = [
        {
            title: "Biến",
            rows: [
                ['ten="hello"', "Khai báo"],
                ["echo $ten", "Dùng biến"],
                ["${ten}", "Rõ ràng hơn"],
                ["ket_qua=$(lệnh)", "Gán từ output"],
                ["readonly PI=3.14", "Hằng số"],
                ["unset ten", "Xóa biến"],
            ],
        },
        {
            title: "Chuỗi",
            rows: [
                ["${#ten}", "Độ dài"],
                ["${ten:0:5}", "Cắt chuỗi"],
                ["${ten^^}", "HOA tất cả"],
                ["${ten,,}", "thường tất cả"],
                ["${ten/cũ/mới}", "Thay lần đầu"],
                ["${ten:-mặc định}", "Giá trị mặc định"],
            ],
        },
        {
            title: "Mảng",
            rows: [
                ['arr=("a" "b")', "Khai báo"],
                ["${arr[0]}", "Phần tử đầu"],
                ["${arr[@]}", "Tất cả"],
                ["${#arr[@]}", "Số phần tử"],
                ['arr+=("d")', "Thêm phần tử"],
            ],
        },
        {
            title: "Nhập liệu",
            rows: [
                ["read ten", "Nhập biến"],
                ["read -p", "Có prompt"],
                ["read -s", "Ẩn mật khẩu"],
                ["read -t 5", "Timeout"],
                ["read -n 1", "Một ký tự"],
            ],
        },
        {
            title: "Số học",
            rows: [
                ["$((a + b))", "Cộng trừ nhân chia"],
                ["$((a % b))", "Chia dư"],
                ["$((a ** b))", "Lũy thừa"],
                ["bc", "Số thực"],
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
        question: "Cách khai báo biến nào đúng trong Bash?",
        options: [
            'ten = "Alice"',
            'ten="Alice"',
            "$ten=Alice",
            "var ten = Alice",
        ],
        correct: 1,
        explanation:
            "Bash không cho phép dấu cách quanh dấu = khi khai báo biến.",
    },
    {
        question: "Cú pháp nào lấy độ dài chuỗi trong biến ten?",
        options: ["length($ten)", "${#ten}", "$ten.length", "len ten"],
        correct: 1,
        explanation: "${#ten} trả về số ký tự của chuỗi trong biến ten.",
    },
    {
        question: "Bash dùng cú pháp nào để tính toán số nguyên?",
        options: ["$((a + b))", "calc(a+b)", "${a + b}", "math a+b"],
        correct: 0,
        explanation: "$(( )) là arithmetic expansion trong Bash.",
    },
    {
        question: "Tùy chọn nào của read dùng để nhập mật khẩu ẩn ký tự?",
        options: ["read -p", "read -s", "read -t", "read -n"],
        correct: 1,
        explanation: "-s là silent, không hiển thị ký tự người dùng nhập.",
    },
    {
        question: "Cú pháp nào thêm phần tử mới vào mảng arr?",
        options: ['arr.add("d")', 'arr += "d"', 'arr+=("d")', "push arr d"],
        correct: 2,
        explanation: 'arr+=("d") thêm phần tử vào cuối mảng trong Bash.',
    },
    {
        question: "Lệnh nào đặt biến môi trường để script con cũng thấy được?",
        options: [
            "readonly PORT=8080",
            "export PORT=8080",
            "unset PORT",
            "local PORT=8080",
        ],
        correct: 1,
        explanation:
            "export đưa biến vào environment để tiến trình con có thể đọc được.",
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
