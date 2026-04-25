import React, { useState } from "react";
import {
    ArrowDownUp,
    BarChart3,
    BookOpen,
    Calculator,
    CheckCircle2,
    ChevronRight,
    ClipboardCheck,
    Code2,
    Columns3,
    Database,
    FileCode2,
    FileText,
    Filter,
    GitBranch,
    Hash,
    Info,
    Layers,
    ListChecks,
    ListFilter,
    Play,
    RefreshCcw,
    Replace,
    Rows3,
    Search,
    Sigma,
    SortAsc,
    Sparkles,
    TerminalSquare,
    TextSearch,
    Trash2,
    Zap,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-orange-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 border-b border-slate-800 sticky top-0 z-50 backdrop-blur">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🐧</span>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Linux/Ubuntu
                            </h1>
                            <p className="text-xs text-slate-500 hidden md:block">
                                Text processing: cut, sort, uniq, sed, awk và
                                pipeline
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400 hidden md:inline-block">
                            Bài trước: 7.2
                        </span>
                        <div className="text-sm font-medium text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Phần 7.3
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <Hero />

                <section className="space-y-6">
                    <SectionTitle
                        n="1"
                        color="orange"
                        icon={<Layers size={22} />}
                        title="Tổng quan: xử lý text bằng pipeline"
                    />
                    <Overview />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="2"
                        color="cyan"
                        icon={<FileText size={22} />}
                        title="File mẫu dùng xuyên suốt bài"
                    />
                    <SampleFiles />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="3"
                        color="blue"
                        icon={<Columns3 size={22} />}
                        title="cut — cắt cột và ký tự"
                    />
                    <CutGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="4"
                        color="green"
                        icon={<SortAsc size={22} />}
                        title="sort — sắp xếp dòng"
                    />
                    <SortGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="5"
                        color="purple"
                        icon={<Rows3 size={22} />}
                        title="uniq — lọc dòng trùng"
                    />
                    <UniqGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="6"
                        color="rose"
                        icon={<Replace size={22} />}
                        title="sed — tìm, thay thế, xóa dòng theo pattern"
                    />
                    <SedGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="7"
                        color="amber"
                        icon={<Sigma size={22} />}
                        title="awk — xử lý file theo cột, lọc và tính toán"
                    />
                    <AwkGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="8"
                        color="pink"
                        icon={<GitBranch size={22} />}
                        title="Pipeline thực tế: log, nhân viên, config, port"
                    />
                    <PipelineExamples />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="9"
                        color="teal"
                        icon={<Code2 size={22} />}
                        title="Script text_toolbox.sh — trợ lý xử lý text"
                    />
                    <TextToolboxPreview />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="10"
                        color="sky"
                        icon={<ListChecks size={22} />}
                        title="Cheatsheet lệnh nhanh"
                    />
                    <Cheatsheet />
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

                <section className="space-y-6 pt-4">
                    <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-xl">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-orange-500/20 text-orange-400 p-2 rounded-lg">
                                    <ClipboardCheck size={20} />
                                </span>
                                Kiểm tra nhanh: cut, sort, uniq, sed, awk
                            </h3>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                <div className="text-center pt-8 border-t border-slate-800">
                    <p className="text-slate-400 mb-4">
                        Bạn đã hoàn thành Phần 7.3 — Xử lý văn bản với sed, awk,
                        cut, sort, uniq.
                    </p>
                    <button className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                        Bài tiếp theo: 7.4 — diff và patch{" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

function Hero() {
    const cards = [
        [Columns3, "cut", "Cắt cột/trường"],
        [SortAsc, "sort", "Sắp xếp dòng"],
        [Rows3, "uniq", "Lọc/đếm trùng"],
        [Replace, "sed", "Thay thế/xóa dòng"],
    ];
    return (
        <section className="text-center space-y-5 py-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm font-medium">
                <Zap size={16} /> cut · sort · uniq · sed · awk · pipeline
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Xử Lý Văn Bản Với{" "}
                <span className="text-orange-400 font-mono">sed</span>,{" "}
                <span className="text-amber-400 font-mono">awk</span>,{" "}
                <span className="text-cyan-400 font-mono">cut</span>,{" "}
                <span className="text-green-400 font-mono">sort</span>,{" "}
                <span className="text-purple-400 font-mono">uniq</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Bài này giúp bạn cắt cột, sắp xếp, lọc trùng, thay thế theo
                pattern, tính toán theo cột và ghép pipeline để phân tích log,
                xử lý CSV, config và danh sách port.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4">
                {cards.map(([Icon, title, desc]) => (
                    <div
                        key={title}
                        className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 text-left"
                    >
                        <Icon className="text-orange-400 mb-3" size={24} />
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
        orange: "bg-orange-500/20 text-orange-400",
        cyan: "bg-cyan-500/20 text-cyan-400",
        blue: "bg-blue-500/20 text-blue-400",
        green: "bg-green-500/20 text-green-400",
        purple: "bg-purple-500/20 text-purple-400",
        rose: "bg-rose-500/20 text-rose-400",
        amber: "bg-amber-500/20 text-amber-400",
        pink: "bg-pink-500/20 text-pink-400",
        teal: "bg-teal-500/20 text-teal-400",
        sky: "bg-sky-500/20 text-sky-400",
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
        orange: "bg-orange-500/10 border-orange-500/20 text-orange-300",
        cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
        blue: "bg-blue-500/10 border-blue-500/20 text-blue-300",
        green: "bg-green-500/10 border-green-500/20 text-green-300",
        purple: "bg-purple-500/10 border-purple-500/20 text-purple-300",
        rose: "bg-rose-500/10 border-rose-500/20 text-rose-300",
        amber: "bg-amber-500/10 border-amber-500/20 text-amber-300",
        pink: "bg-pink-500/10 border-pink-500/20 text-pink-300",
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
    const tools = [
        [Columns3, "cut", "Cắt cột / trường từ mỗi dòng", "blue"],
        [SortAsc, "sort", "Sắp xếp dòng theo chữ, số, cột", "green"],
        [Rows3, "uniq", "Lọc hoặc đếm dòng trùng liền kề", "purple"],
        [Replace, "sed", "Tìm, thay thế, xóa dòng theo pattern", "rose"],
        [Sigma, "awk", "Xử lý theo cột, lọc, tính tổng/trung bình", "amber"],
    ];
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid md:grid-cols-5 gap-3">
                {tools.map(([Icon, name, desc, tone]) => (
                    <div
                        key={name}
                        className="bg-slate-950 border border-slate-700 rounded-2xl p-4"
                    >
                        <Icon className="text-orange-400 mb-3" size={28} />
                        <div className="font-black text-white text-xl">
                            {name}
                        </div>
                        <p className="text-xs text-slate-500 mt-1">{desc}</p>
                    </div>
                ))}
            </div>
            <div className="mt-6 bg-orange-500/10 border border-orange-500/30 rounded-2xl p-5 text-orange-100">
                Pipeline thường dùng:{" "}
                <code>cat file | cut | sort | uniq | awk | sed</code>. Trong
                thực tế, bạn có thể bỏ <code>cat</code> khi lệnh hỗ trợ đọc file
                trực tiếp, nhưng pipeline giúp tư duy từng bước rất rõ.
            </div>
        </div>
    );
}

function SampleFiles() {
    const [tab, setTab] = useState("employees");
    const code = {
        employees: `cat > employees.txt << EOF
Alice,IT,85000,Hanoi
Bob,HR,60000,HCMC
Charlie,IT,92000,Hanoi
Diana,HR,58000,Danang
Eve,IT,85000,HCMC
Frank,Finance,75000,Hanoi
Bob,HR,60000,HCMC
Alice,IT,85000,Hanoi
EOF`,
        log: `cat > access.log << EOF
192.168.1.1 GET /index.html 200
192.168.1.2 POST /login 401
192.168.1.1 GET /about.html 200
192.168.1.3 GET /index.html 200
192.168.1.2 POST /login 200
192.168.1.1 GET /contact.html 404
EOF`,
        inspect: `# Xem file mẫu
cat employees.txt
cat access.log

# Đếm dòng
wc -l employees.txt access.log

# Xem 3 dòng đầu
head -3 employees.txt
head -3 access.log`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["employees", "employees.txt"],
                    ["log", "access.log"],
                    ["inspect", "Kiểm tra file"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setTab(k)}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${tab === k ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <TerminalBlock title={`sample data — ${tab}`} code={code[tab]} />
        </div>
    );
}

function CutGuide() {
    const [mode, setMode] = useState("field");
    const code = {
        syntax: `cut [tùy_chọn] file

-d   delimiter, dấu phân cách, mặc định là Tab
-f   field, cột số mấy
-c   character, ký tự vị trí mấy`,
        field: `# Lấy cột 1: tên nhân viên
cut -d',' -f1 employees.txt

# Lấy cột 2 và 3: phòng ban + lương
cut -d',' -f2,3 employees.txt

# Lấy từ cột 2 đến hết
cut -d',' -f2- employees.txt

# Lấy cột 1 đến cột 3
cut -d',' -f1-3 employees.txt`,
        char: `# Lấy 5 ký tự đầu mỗi dòng
cut -c1-5 employees.txt

# Lấy ký tự từ vị trí 4 đến 10
cut -c4-10 employees.txt

# Lấy từ ký tự 6 đến hết
cut -c6- employees.txt`,
        real: `# Lấy username từ /etc/passwd
cut -d':' -f1 /etc/passwd

# Lấy username và shell
cut -d':' -f1,7 /etc/passwd

# Lấy IP từ file log
cut -d' ' -f1 access.log`,
    };
    return (
        <TabbedSection
            tabs={[
                ["syntax", "Cú pháp"],
                ["field", "Cắt cột"],
                ["char", "Cắt ký tự"],
                ["real", "Thực tế"],
            ]}
            active={mode}
            setActive={setMode}
            color="blue"
            title="cut"
            code={code[mode]}
        />
    );
}

function SortGuide() {
    const [mode, setMode] = useState("basic");
    const code = {
        basic: `# Sắp xếp A-Z mặc định
sort employees.txt

# Sắp xếp Z-A
sort -r employees.txt

# Sắp xếp và bỏ dòng trùng
sort -u employees.txt

# Không phân biệt hoa thường
sort -f employees.txt`,
        column: `# Sắp xếp theo cột 3, delimiter là dấu phẩy
sort -t',' -k3 employees.txt

# Sắp xếp số, rất quan trọng
sort -t',' -k3 -n employees.txt

# Lương cao xuống thấp
sort -t',' -k3 -n -r employees.txt

# Theo nhiều cột: phòng ban rồi lương
sort -t',' -k2,2 -k3,3n employees.txt`,
        why: `# Không có -n: sort so sánh chuỗi
# Có -n: sort so sánh số

printf "9\n85000\n100\n" | sort
# 100
# 85000
# 9

printf "9\n85000\n100\n" | sort -n
# 9
# 100
# 85000`,
        real: `# Top 3 lương cao nhất
sort -t',' -k3 -n -r employees.txt | head -3

# Sort IP đúng thứ tự số
sort -t'.' -k1,1n -k2,2n -k3,3n -k4,4n ip_list.txt

# Sort log theo chữ/thời gian nếu format phù hợp
sort access.log`,
    };
    return (
        <TabbedSection
            tabs={[
                ["basic", "Cơ bản"],
                ["column", "Theo cột"],
                ["why", "Vì sao -n?"],
                ["real", "Thực tế"],
            ]}
            active={mode}
            setActive={setMode}
            color="green"
            title="sort"
            code={code[mode]}
        />
    );
}

function UniqGuide() {
    const [mode, setMode] = useState("basic");
    const code = {
        basic: `# uniq chỉ xử lý dòng trùng LIỀN KỀ
# Vì vậy thường dùng sau sort

sort employees.txt | uniq

# Tương đương gọn hơn trong nhiều trường hợp:
sort -u employees.txt`,
        duplicate: `# Chỉ hiện dòng bị trùng
sort employees.txt | uniq -d

# Chỉ hiện dòng không trùng
sort employees.txt | uniq -u

# Đếm số lần xuất hiện
sort employees.txt | uniq -c`,
        count: `# Đếm rồi sắp xếp theo số lần xuất hiện giảm dần
sort employees.txt | uniq -c | sort -rn

# Đếm IP truy cập nhiều nhất
cut -d' ' -f1 access.log | sort | uniq -c | sort -rn`,
        dept: `# Đếm số phòng ban xuất hiện bao nhiêu lần
cut -d',' -f2 employees.txt | sort | uniq -c

# Output ví dụ:
#   1 Finance
#   2 HR
#   5 IT`,
    };
    return (
        <TabbedSection
            tabs={[
                ["basic", "Cơ bản"],
                ["duplicate", "-d/-u/-c"],
                ["count", "Đếm top"],
                ["dept", "Phòng ban"],
            ]}
            active={mode}
            setActive={setMode}
            color="purple"
            title="uniq"
            code={code[mode]}
        />
    );
}

function SedGuide() {
    const [mode, setMode] = useState("substitute");
    const code = {
        syntax: `sed [tùy_chọn] 'lệnh' file

-i     sửa trực tiếp vào file
-i.bak sửa trực tiếp và tạo backup
-n     không in tự động, dùng với p
-e     chạy nhiều lệnh`,
        substitute: `# Thay lần đầu tiên trong mỗi dòng
sed 's/IT/Engineering/' employees.txt

# Thay tất cả trong mỗi dòng
sed 's/o/0/g' employees.txt

# Thay không phân biệt hoa thường
sed 's/alice/ALICE/gi' employees.txt

# Thay lần xuất hiện thứ 2
sed 's/o/0/2' employees.txt`,
        inplace: `# Sửa trực tiếp file
sed -i 's/Hanoi/Ha Noi/g' employees.txt

# Backup file gốc trước khi sửa
sed -i.bak 's/HR/HumanResources/g' employees.txt

# Tạo employees.txt.bak và employees.txt đã sửa`,
        delete: `# Xóa dòng chứa HR
sed '/HR/d' employees.txt

# Xóa dòng số 2
sed '2d' employees.txt

# Xóa từ dòng 2 đến dòng 4
sed '2,4d' employees.txt

# Xóa dòng trống
sed '/^$/d' employees.txt

# Xóa comment
sed '/^#/d' config.txt`,
        print: `# Chỉ in dòng chứa IT
sed -n '/IT/p' employees.txt

# In dòng số 3
sed -n '3p' employees.txt

# In từ dòng 2 đến dòng 5
sed -n '2,5p' employees.txt`,
        multi: `# Nhiều lệnh bằng -e
sed -e 's/IT/Engineering/' -e 's/HR/HumanResources/' employees.txt

# Hoặc dùng dấu ;
sed 's/IT/Engineering/; s/HR/HumanResources/' employees.txt

# Xóa comment và dòng trống
sed -e '/^#/d' -e '/^$/d' /etc/nginx/nginx.conf`,
    };
    return (
        <TabbedSection
            tabs={[
                ["syntax", "Cú pháp"],
                ["substitute", "s///"],
                ["inplace", "-i/-i.bak"],
                ["delete", "Delete"],
                ["print", "Print"],
                ["multi", "Nhiều lệnh"],
            ]}
            active={mode}
            setActive={setMode}
            color="rose"
            title="sed"
            code={code[mode]}
        />
    );
}

function AwkGuide() {
    const [mode, setMode] = useState("vars");
    const code = {
        syntax: `awk [tùy_chọn] 'pattern { action }' file

-F   chỉ định dấu phân cách Field Separator

# Ví dụ:
awk -F',' '{print $1}' employees.txt`,
        vars: `$0   toàn bộ dòng
$1   cột 1
$2   cột 2
$N   cột N
$NF  cột cuối cùng
NR   số dòng hiện tại
NF   số cột trong dòng hiện tại
FS   dấu phân cách`,
        print: `# In cột 1
awk -F',' '{print $1}' employees.txt

# In tên + lương
awk -F',' '{print $1, $3}' employees.txt

# Format đẹp
awk -F',' '{print "Tên:", $1, "- Lương:", $3}' employees.txt

# In cột cuối
awk -F',' '{print $NF}' employees.txt`,
        filter: `# Lương > 80000
awk -F',' '$3 > 80000' employees.txt

# In tên nhân viên lương > 80000
awk -F',' '$3 > 80000 {print $1}' employees.txt

# Phòng ban IT
awk -F',' '$2 == "IT"' employees.txt

# Chứa Hanoi
awk '/Hanoi/' employees.txt

# Không chứa Hanoi
awk '!/Hanoi/' employees.txt

# Điều kiện kết hợp
awk -F',' '$2 == "IT" && $3 > 80000 {print $1, $3}' employees.txt`,
        math: `# Tổng lương
awk -F',' '{sum += $3} END {print "Tổng:", sum}' employees.txt

# Trung bình
awk -F',' '{sum += $3; count++} END {print "Trung bình:", sum/count}' employees.txt

# Lương cao nhất
awk -F',' 'BEGIN{max=0} $3>max{max=$3} END{print "Cao nhất:", max}' employees.txt

# Đếm theo phòng ban
awk -F',' '{dept[$2]++} END {for (d in dept) print d, dept[d]}' employees.txt`,
        begin: `awk -F',' '
BEGIN {
    print "=== DANH SÁCH NHÂN VIÊN ==="
    print "Tên\t\tPhòng\tLương"
    print "─────────────────────────────"
}
{
    printf "%-10s %-10s %d\n", $1, $2, $3
}
END {
    print "─────────────────────────────"
    print "Tổng số:", NR, "nhân viên"
}
' employees.txt`,
    };
    return (
        <TabbedSection
            tabs={[
                ["syntax", "Cú pháp"],
                ["vars", "Biến đặc biệt"],
                ["print", "In cột"],
                ["filter", "Lọc"],
                ["math", "Tính toán"],
                ["begin", "BEGIN/END"],
            ]}
            active={mode}
            setActive={setMode}
            color="amber"
            title="awk"
            code={code[mode]}
        />
    );
}

function PipelineExamples() {
    const [mode, setMode] = useState("log");
    const code = {
        log: `# Top 3 IP truy cập nhiều nhất
cat access.log \
  | cut -d' ' -f1 \
  | sort \
  | uniq -c \
  | sort -rn \
  | head -3

# Đếm số lỗi 404
grep " 404$" access.log | wc -l

# Đếm HTTP status code
awk '{print $NF}' access.log | sort | uniq -c | sort -rn`,
        employees: `# Nhân viên IT, lương cao xuống thấp
grep "IT" employees.txt \
  | sort -t',' -k3 -n -r \
  | cut -d',' -f1,3

# Tổng lương phòng IT
awk -F',' '$2=="IT" {sum+=$3} END{print "IT payroll:", sum}' employees.txt

# Đếm nhân viên theo thành phố
cut -d',' -f4 employees.txt | sort | uniq -c`,
        config: `# Xem nginx config, bỏ comment và dòng trống
cat /etc/nginx/nginx.conf \
  | sed '/^#/d' \
  | sed '/^$/d' \
  | sed 's/^[ \t]*//'

# Bật dòng config đang comment
sudo sed -i 's/^#PasswordAuthentication/PasswordAuthentication/' /etc/ssh/sshd_config`,
        ports: `# Lấy danh sách port đang listen
ss -tlnp \
  | awk 'NR>1 {print $4}' \
  | cut -d':' -f2 \
  | sort -n \
  | uniq

# Process ngốn RAM nhiều nhất
ps aux | awk 'NR>1 {print $4, $11}' | sort -rn | head -5`,
    };
    return (
        <TabbedSection
            tabs={[
                ["log", "Phân tích log"],
                ["employees", "Nhân viên"],
                ["config", "Config"],
                ["ports", "Port/process"],
            ]}
            active={mode}
            setActive={setMode}
            color="pink"
            title="pipeline"
            code={code[mode]}
        />
    );
}

function TabbedSection({ tabs, active, setActive, color, title, code }) {
    const colorMap = {
        blue: "bg-blue-500/10 border-blue-500/40 text-blue-300",
        green: "bg-green-500/10 border-green-500/40 text-green-300",
        purple: "bg-purple-500/10 border-purple-500/40 text-purple-300",
        rose: "bg-rose-500/10 border-rose-500/40 text-rose-300",
        amber: "bg-amber-500/10 border-amber-500/40 text-amber-300",
        pink: "bg-pink-500/10 border-pink-500/40 text-pink-300",
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {tabs.map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setActive(k)}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${active === k ? colorMap[color] : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <TerminalBlock title={`${title} — ${active}`} code={code} />
        </div>
    );
}

function TextToolboxPreview() {
    const [view, setView] = useState("menu");
    const content = {
        menu: `╔══════════════════════════════════════╗
║          TEXT TOOLBOX                ║
╠══════════════════════════════════════╣
║ 1) Extract CSV columns with cut       ║
║ 2) Sort by column                     ║
║ 3) Count duplicates                   ║
║ 4) Sed replace with backup            ║
║ 5) Awk filter and sum                 ║
║ 6) Analyze access.log                 ║
╚══════════════════════════════════════╝`,
        cut: `▶ EXTRACT COLUMNS
File: employees.txt
Delimiter: ,
Fields: 1,3

Command:
cut -d',' -f1,3 employees.txt

Output:
Alice,85000
Bob,60000
Charlie,92000`,
        sed: `▶ SAFE SED REPLACE
Find: HR
Replace: HumanResources
File: employees.txt

Command:
sed -i.bak 's/HR/HumanResources/g' employees.txt

✅ Backup created: employees.txt.bak`,
        awk: `▶ AWK FILTER + SUM
Department: IT

Command:
awk -F',' '$2=="IT" {sum+=$3; count++} END{print count, sum}' employees.txt

Output:
3 262000`,
        log: `▶ LOG TOP IP
Command:
cut -d' ' -f1 access.log | sort | uniq -c | sort -rn

Output:
3 192.168.1.1
2 192.168.1.2
1 192.168.1.3`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-2">
                    {[
                        ["menu", "Menu"],
                        ["cut", "cut"],
                        ["sed", "sed safe"],
                        ["awk", "awk sum"],
                        ["log", "log top IP"],
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
                        title="text_toolbox.sh preview"
                        code={content[view]}
                    />
                </div>
            </div>
        </div>
    );
}

function Cheatsheet() {
    const groups = [
        [
            "cut",
            "blue",
            [
                ["cut -d',' -f1", "Lấy cột 1"],
                ["cut -d',' -f1,3", "Lấy cột 1 và 3"],
                ["cut -c1-5", "Lấy ký tự 1-5"],
            ],
        ],
        [
            "sort",
            "green",
            [
                ["sort file", "A-Z"],
                ["sort -r", "Đảo ngược"],
                ["sort -n", "Sắp xếp số"],
                ["sort -t',' -k3", "Theo cột 3"],
                ["sort -u", "Sort và bỏ trùng"],
            ],
        ],
        [
            "uniq",
            "purple",
            [
                ["uniq", "Bỏ dòng trùng kề"],
                ["uniq -c", "Đếm"],
                ["uniq -d", "Chỉ dòng trùng"],
                ["uniq -u", "Chỉ dòng không trùng"],
            ],
        ],
        [
            "sed/awk",
            "amber",
            [
                ["sed 's/a/b/g'", "Thay tất cả"],
                ["sed -i.bak", "Sửa + backup"],
                ["awk '{print $1}'", "In cột 1"],
                ["awk -F',' '$3>100'", "Lọc điều kiện"],
                ["awk '{sum+=$3} END{print sum}'", "Tính tổng"],
            ],
        ],
    ];
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {groups.map(([title, tone, items]) => (
                    <div
                        key={title}
                        className="bg-slate-950 border border-slate-700 rounded-2xl p-5"
                    >
                        <h4 className="font-bold text-orange-300 uppercase text-xs tracking-widest mb-4">
                            {title}
                        </h4>
                        <div className="space-y-2">
                            {items.map(([cmd, desc]) => (
                                <div
                                    key={cmd}
                                    className="border-b border-slate-800 pb-2 last:border-b-0"
                                >
                                    <code className="text-cyan-300 text-xs">
                                        {cmd}
                                    </code>
                                    <p className="text-xs text-slate-500 mt-1">
                                        {desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function PracticeChecklist() {
    const tasks = [
        ["Tạo employees.txt", "cat > employees.txt << EOF ... EOF"],
        ["Tạo access.log", "cat > access.log << EOF ... EOF"],
        ["Lấy cột tên", "cut -d',' -f1 employees.txt"],
        ["Lấy IP từ log", "cut -d' ' -f1 access.log"],
        ["Sort theo lương tăng", "sort -t',' -k3 -n employees.txt"],
        ["Top 3 lương cao", "sort -t',' -k3 -n -r employees.txt | head -3"],
        ["Bỏ dòng trùng", "sort employees.txt | uniq"],
        ["Đếm dòng trùng", "sort employees.txt | uniq -c | sort -rn"],
        [
            "Top IP truy cập",
            "cut -d' ' -f1 access.log | sort | uniq -c | sort -rn",
        ],
        [
            "sed thay thử không sửa file",
            "sed 's/IT/Engineering/g' employees.txt",
        ],
        [
            "sed sửa có backup",
            "sed -i.bak 's/HR/HumanResources/g' employees.txt",
        ],
        ["sed in dòng IT", "sed -n '/IT/p' employees.txt"],
        ["awk in tên + lương", "awk -F',' '{print $1, $3}' employees.txt"],
        [
            "awk lọc lương > 80000",
            "awk -F',' '$3 > 80000 {print $1, $3}' employees.txt",
        ],
        [
            "awk tính tổng lương",
            "awk -F',' '{sum += $3} END {print sum}' employees.txt",
        ],
        [
            "awk đếm status code",
            "awk '{print $NF}' access.log | sort | uniq -c | sort -rn",
        ],
        [
            "Lấy port listen",
            "ss -tlnp | awk 'NR>1 {print $4}' | cut -d':' -f2 | sort -n | uniq",
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
                        <BookOpen className="text-orange-400" /> Tóm tắt bài học
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <SummaryBox
                        title="cut"
                        items={[
                            "-d delimiter",
                            "-f field",
                            "-c character",
                            "-f1,3",
                            "-f2-",
                            "-c1-5",
                        ]}
                    />
                    <SummaryBox
                        title="sort"
                        items={[
                            "sort",
                            "-r reverse",
                            "-n numeric",
                            "-t delimiter",
                            "-k key",
                            "-u unique",
                        ]}
                    />
                    <SummaryBox
                        title="uniq"
                        items={[
                            "dùng sau sort",
                            "uniq",
                            "uniq -c",
                            "uniq -d",
                            "uniq -u",
                            "sort | uniq -c",
                        ]}
                    />
                    <SummaryBox
                        title="sed"
                        items={[
                            "s/cũ/mới/",
                            "s/cũ/mới/g",
                            "-i.bak",
                            "'/pat/d'",
                            "-n '/pat/p'",
                            "-e nhiều lệnh",
                        ]}
                    />
                    <SummaryBox
                        title="awk"
                        items={[
                            "$1 $2 $NF",
                            "NR NF",
                            "-F','",
                            "pattern {action}",
                            "BEGIN/END",
                            "sum += $3",
                        ]}
                    />
                </div>
                <div className="px-6 md:px-8 pb-8">
                    <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-5 text-orange-100">
                        <strong className="text-white">
                            Quy tắc nhớ nhanh:
                        </strong>{" "}
                        dùng <code>cut</code> khi chỉ cần cắt cột đơn giản;{" "}
                        <code>sort | uniq -c | sort -rn</code> để đếm top; dùng{" "}
                        <code>sed -i.bak</code> khi sửa file thật; dùng{" "}
                        <code>awk</code> khi cần lọc theo cột hoặc tính toán.
                    </div>
                </div>
            </div>
        </section>
    );
}

function SummaryBox({ title, items }) {
    return (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
            <h4 className="font-bold text-orange-300 uppercase text-xs tracking-widest mb-4">
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
        question: "cut -d',' -f1 employees.txt dùng để làm gì?",
        options: [
            "Lấy cột 1, phân cách bằng dấu phẩy",
            "Sắp xếp cột 1",
            "Xóa cột 1",
            "Tính tổng cột 1",
        ],
        correct: 0,
        explanation: "-d chọn delimiter, -f chọn field/cột.",
    },
    {
        question: "sort -t',' -k3 -n employees.txt có ý nghĩa gì?",
        options: [
            "Sắp xếp theo cột 3 dạng số",
            "Xóa cột 3",
            "Đếm cột 3",
            "Thay cột 3",
        ],
        correct: 0,
        explanation:
            "-t',' đặt delimiter, -k3 chọn key cột 3, -n sort numeric.",
    },
    {
        question: "Vì sao uniq thường dùng sau sort?",
        options: [
            "uniq chỉ lọc dòng trùng liền kề",
            "uniq chỉ đọc file đã nén",
            "uniq chỉ chạy sau awk",
            "uniq cần quyền root",
        ],
        correct: 0,
        explanation:
            "Nếu dòng trùng không đứng cạnh nhau, uniq sẽ không gom được. sort đưa chúng đứng cạnh nhau.",
    },
    {
        question: "Pipeline nào đếm IP truy cập nhiều nhất?",
        options: [
            "cut -d' ' -f1 access.log | sort | uniq -c | sort -rn",
            "sort -n access.log | sed -i",
            "awk -F',' '{print $3}'",
            "uniq access.log | cut -c1",
        ],
        correct: 0,
        explanation: "Lấy IP, sort, đếm bằng uniq -c, rồi sort số giảm dần.",
    },
    {
        question: "sed -i.bak 's/HR/HumanResources/g' employees.txt làm gì?",
        options: [
            "Sửa trực tiếp file và tạo backup .bak",
            "Chỉ in dòng HR",
            "Xóa file backup",
            "Sort file",
        ],
        correct: 0,
        explanation:
            "-i.bak sửa in-place và lưu bản gốc thành employees.txt.bak.",
    },
    {
        question: "sed -n '/IT/p' employees.txt có tác dụng gì?",
        options: [
            "Chỉ in dòng chứa IT",
            "Xóa dòng chứa IT",
            "Thay IT",
            "Sort dòng IT",
        ],
        correct: 0,
        explanation: "-n tắt in tự động, p in các dòng match pattern.",
    },
    {
        question: "Trong awk, $NF nghĩa là gì?",
        options: [
            "Cột cuối cùng",
            "Số dòng hiện tại",
            "Toàn bộ dòng",
            "Dấu phân cách",
        ],
        correct: 0,
        explanation: "NF là số field, nên $NF là field cuối cùng.",
    },
    {
        question: "awk -F',' '$3 > 80000 {print $1}' employees.txt làm gì?",
        options: [
            "In tên nhân viên có lương > 80000",
            "In toàn bộ file",
            "Thay lương thành 80000",
            "Đếm dòng trùng",
        ],
        correct: 0,
        explanation:
            "-F',' tách CSV, điều kiện $3 > 80000, action print $1 in tên.",
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
                    <strong className="text-orange-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu về xử lý văn bản Linux.
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
                <span className="text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full">
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
