import React, { useState } from "react";
import {
    Activity,
    AlertTriangle,
    BarChart3,
    BookOpen,
    CheckCircle2,
    ChevronRight,
    ClipboardCheck,
    Cpu,
    Database,
    FileSearch,
    Gauge,
    HardDrive,
    Info,
    Layers,
    MemoryStick,
    MonitorCog,
    RefreshCcw,
    Search,
    Server,
    ShieldAlert,
    TerminalSquare,
    Timer,
    Zap,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-blue-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 border-b border-slate-800 sticky top-0 z-50 backdrop-blur">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🐧</span>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Linux/Ubuntu
                            </h1>
                            <p className="text-xs text-slate-500 hidden md:block">
                                CPU, RAM, Disk và phân tích bottleneck hệ thống
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400 hidden md:inline-block">
                            Bài trước: 5.3
                        </span>
                        <div className="text-sm font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
                            Phần 5.4
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <Hero />

                <section className="space-y-6">
                    <SectionTitle
                        n="1"
                        color="blue"
                        icon={<Gauge size={22} />}
                        title="Tại sao cần kiểm tra tài nguyên?"
                    />
                    <ResourceOverview />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="2"
                        color="cyan"
                        icon={<Cpu size={22} />}
                        title="CPU — lscpu, /proc/cpuinfo, mpstat"
                    />
                    <CpuExplorer />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="3"
                        color="emerald"
                        icon={<MemoryStick size={22} />}
                        title="RAM — free và /proc/meminfo"
                    />
                    <RamExplorer />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="4"
                        color="amber"
                        icon={<HardDrive size={22} />}
                        title="Disk Space — df xem dung lượng phân vùng"
                    />
                    <DfExplorer />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="5"
                        color="orange"
                        icon={<FileSearch size={22} />}
                        title="Disk Usage — du tìm thư mục/file ăn disk"
                    />
                    <DuWorkflow />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="6"
                        color="purple"
                        icon={<Activity size={22} />}
                        title="Công cụ tổng hợp — vmstat, iostat, sar"
                    />
                    <StatsTools />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="7"
                        color="pink"
                        icon={<BarChart3 size={22} />}
                        title="Công cụ trực quan — ncdu và duf"
                    />
                    <VisualTools />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="8"
                        color="teal"
                        icon={<TerminalSquare size={22} />}
                        title="Script giám sát tài nguyên tổng hợp"
                    />
                    <ResourceMonitorPreview />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="9"
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
                                <span className="bg-blue-500/20 text-blue-400 p-2 rounded-lg">
                                    <ClipboardCheck size={20} />
                                </span>
                                Kiểm tra nhanh: CPU, RAM, Disk
                            </h3>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                <div className="text-center pt-8 border-t border-slate-800">
                    <p className="text-slate-400 mb-4">
                        Bạn đã hoàn thành Phần 5.4 — Kiểm tra tài nguyên hệ
                        thống.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-blue-500/20">
                        Bài tiếp theo: 5.5 — systemctl start, stop, enable,
                        status <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

function Hero() {
    const cards = [
        [Cpu, "CPU", "lscpu · nproc · mpstat"],
        [MemoryStick, "RAM", "free · meminfo · swap"],
        [HardDrive, "Disk", "df · du · inode"],
        [Activity, "Realtime", "vmstat · iostat · sar"],
    ];
    return (
        <section className="text-center space-y-5 py-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium">
                <MonitorCog size={16} /> lscpu · free · df · du · vmstat ·
                iostat · ncdu
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Kiểm Tra{" "}
                <span className="text-blue-400 font-mono">Tài Nguyên</span> Hệ
                Thống
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Bài này giúp bạn đọc đúng CPU, RAM, Disk; biết khi nào server
                thiếu RAM, khi nào disk sắp đầy, khi nào CPU/I/O đang nghẽn và
                cách tìm thủ phạm bằng workflow sysadmin thực tế.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4">
                {cards.map(([Icon, title, desc]) => (
                    <div
                        key={title}
                        className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 text-left"
                    >
                        <Icon className="text-blue-400 mb-3" size={24} />
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
        blue: "bg-blue-500/20 text-blue-400",
        cyan: "bg-cyan-500/20 text-cyan-400",
        emerald: "bg-emerald-500/20 text-emerald-400",
        amber: "bg-amber-500/20 text-amber-400",
        orange: "bg-orange-500/20 text-orange-400",
        purple: "bg-purple-500/20 text-purple-400",
        pink: "bg-pink-500/20 text-pink-400",
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
        blue: "bg-blue-500/10 border-blue-500/20 text-blue-300",
        cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
        emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
        amber: "bg-amber-500/10 border-amber-500/20 text-amber-300",
        orange: "bg-orange-500/10 border-orange-500/20 text-orange-300",
        purple: "bg-purple-500/10 border-purple-500/20 text-purple-300",
        rose: "bg-rose-500/10 border-rose-500/20 text-rose-300",
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

function ResourceOverview() {
    const resources = [
        [
            Cpu,
            "CPU",
            "Bộ não",
            "Xử lý tính toán",
            "Server chậm, load cao, lệnh lag",
            "cyan",
        ],
        [
            MemoryStick,
            "RAM",
            "Bàn làm việc",
            "Lưu tạm dữ liệu đang dùng",
            "Swap nhiều, app crash, OOM",
            "emerald",
        ],
        [
            HardDrive,
            "DISK",
            "Tủ hồ sơ",
            "Lưu dữ liệu lâu dài",
            "Không ghi file, service crash",
            "amber",
        ],
    ];
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-4">
                {resources.map(([Icon, name, metaphor, job, symptom, tone]) => (
                    <div
                        key={name}
                        className="bg-slate-950 border border-slate-700 rounded-3xl p-6"
                    >
                        <Icon
                            className={`mb-4 ${tone === "cyan" ? "text-cyan-400" : tone === "emerald" ? "text-emerald-400" : "text-amber-400"}`}
                            size={42}
                        />
                        <h4 className="text-2xl font-black text-white">
                            {name}
                        </h4>
                        <p className="font-bold text-slate-400 mb-3">
                            {metaphor}
                        </p>
                        <p className="text-sm text-slate-300 mb-4">{job}</p>
                        <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-3 text-sm text-rose-200">
                            Thiếu: {symptom}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 bg-blue-500/10 border border-blue-500/30 rounded-2xl p-5 flex gap-3 text-blue-100">
                <Info className="shrink-0 mt-0.5" />
                <p>
                    Sysadmin giỏi không chờ hệ thống “nổ” mới xử lý. Họ đọc chỉ
                    số định kỳ, phát hiện dấu hiệu sớm và tìm đúng bottleneck:
                    CPU, RAM, Disk space, inode hay Disk I/O.
                </p>
            </div>
        </div>
    );
}

function CpuExplorer() {
    const [tab, setTab] = useState("lscpu");
    const code = {
        lscpu: `$ lscpu
Architecture:            x86_64
CPU(s):                  8
Thread(s) per core:      2
Core(s) per socket:      4
Socket(s):               1
Model name:              Intel(R) Core(TM) i7-10700 CPU @ 2.90GHz
CPU max MHz:             4800.0000
CPU min MHz:             800.0000
L3:                      16 MiB
Virtualization:          VT-x

# Đọc nhanh:
# 8 logical CPU = 4 core vật lý × 2 thread
# Hyperthreading đang bật`,
        quick: `$ nproc
8

$ lscpu | grep -E "^CPU\\(s\\)|Thread|Core|Socket"
CPU(s):                  8
Thread(s) per core:      2
Core(s) per socket:      4
Socket(s):               1

$ lscpu --extended
CPU NODE SOCKET CORE ONLINE MAXMHZ MINMHZ
0   0    0      0    yes    4800.0 800.0
1   0    0      0    yes    4800.0 800.0`,
        cpuinfo: `$ grep -c "^processor" /proc/cpuinfo
8

$ grep "model name" /proc/cpuinfo | head -1
model name : Intel(R) Core(TM) i7-10700 CPU @ 2.90GHz

$ grep "cpu MHz" /proc/cpuinfo
cpu MHz : 3200.000
cpu MHz : 2900.000
cpu MHz : 800.000

$ grep "flags" /proc/cpuinfo | head -1 | tr ' ' '\n' | grep -E "^(avx|avx2|aes|vmx|lm)$"
avx
avx2
aes
vmx
lm`,
        realtime: `$ mpstat -P ALL 1 5
# Cài: sudo apt install sysstat

Time     CPU  %usr %sys %iowait %idle
14:30:01 all  15.5  2.3    1.5  80.2
14:30:01   0  85.0  5.0    0.0   9.0  ← Core 0 bận
14:30:01   2   5.0  1.0    8.0  86.0  ← iowait cao

$ watch -n 1 'grep "cpu MHz" /proc/cpuinfo'

$ stress --cpu 4 --timeout 30`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-4 border-b border-slate-700">
                {[
                    ["lscpu", "lscpu"],
                    ["quick", "Core/thread"],
                    ["cpuinfo", "/proc/cpuinfo"],
                    ["realtime", "Realtime"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setTab(k)}
                        className={`p-4 font-bold border-b md:border-b-0 md:border-r last:border-r-0 border-slate-700 ${tab === k ? "bg-cyan-500/10 text-cyan-300" : "text-slate-400 hover:bg-slate-900"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="p-6 grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <TerminalBlock title={`CPU — ${tab}`} code={code[tab]} />
                </div>
                <div className="lg:col-span-2 space-y-3">
                    <MiniPoint
                        icon={<Cpu size={18} />}
                        tone="cyan"
                        title="CPU(s)"
                        text="Logical CPU. Đây là số thread hệ điều hành nhìn thấy."
                    />
                    <MiniPoint
                        icon={<Layers size={18} />}
                        tone="blue"
                        title="Core(s)"
                        text="Số nhân vật lý. Nếu Thread/core = 2 thì hyperthreading bật."
                    />
                    <MiniPoint
                        icon={<Gauge size={18} />}
                        tone="amber"
                        title="Load vs core"
                        text="Load nên được so với số logical CPU/core để đánh giá bận hay rảnh."
                    />
                    <MiniPoint
                        icon={<AlertTriangle size={18} />}
                        tone="rose"
                        title="iowait"
                        text="CPU idle không thấp nhưng iowait cao có thể là nghẽn disk/network."
                    />
                </div>
            </div>
        </div>
    );
}

function RamExplorer() {
    const [mode, setMode] = useState("free");
    const code = {
        free: `$ free -h
               total   used   free  shared  buff/cache  available
Mem:           7.7Gi  4.3Gi  500Mi   200Mi       2.9Gi      2.9Gi
Swap:          2.0Gi  148Mi  1.9Gi

# Đơn vị:
$ free -m
$ free -g
$ free -h -s 2
$ free -h -s 1 -c 5
$ watch -n 2 free -h`,
        explain: `total      = Tổng RAM vật lý
used       = RAM đang dùng cho programs + kernel
free       = RAM thật sự trống, thường thấp là bình thường
shared     = tmpfs/shared memory
buff/cache = RAM Linux dùng cache disk
available  = RAM có thể dùng được ⭐

Sai lầm phổ biến:
  free = 500MB → tưởng hết RAM
Thực tế:
  available = 2.9GB → vẫn còn ổn

Chỉ lo khi:
  available < 200MB
  swap used > 500MB`,
        meminfo: `$ grep -E "MemTotal|MemFree|MemAvailable|SwapTotal|SwapFree|Cached:" /proc/meminfo
MemTotal:        8037776 kB
MemFree:          512000 kB
MemAvailable:    3023728 kB
Cached:          2818928 kB
SwapTotal:       2097152 kB
SwapFree:        1945600 kB

$ awk '/MemTotal/{total=$2}/MemAvailable/{avail=$2}/SwapTotal/{stotal=$2}/SwapFree/{sfree=$2} END {print "RAM Total:", int(total/1024), "MB"; print "RAM Available:", int(avail/1024), "MB"; print "Swap Used:", int((stotal-sfree)/1024), "MB"}' /proc/meminfo`,
        process: `$ ps aux --sort=-%mem | head -10
USER     PID  %CPU %MEM    VSZ    RSS  COMMAND
bob     2002   2.0 45.0 3500000 3500000 java -Xmx4g app.jar
alice   1236   5.0 10.5 1000000 850000 python3 ml_model.py
mysql    300   0.5  8.0  800000 645000 mysqld

$ ps -eo pid,user,rss,vsz,comm --sort=-rss | head -10

$ cat /proc/2002/status | grep -E "VmRSS|VmSize|VmSwap|VmPeak"
VmPeak: 3800000 kB
VmSize: 3600000 kB
VmRSS:  3500000 kB
VmSwap:   50000 kB`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["free", "free -h"],
                        ["explain", "Đọc đúng RAM"],
                        ["meminfo", "/proc/meminfo"],
                        ["process", "Top RAM process"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setMode(k)}
                            className={`w-full text-left rounded-xl border p-4 font-bold ${mode === k ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 text-sm text-emerald-100">
                        Khi đọc RAM Linux, hãy nhìn <code>available</code>,
                        không hoảng vì <code>free</code> thấp.
                    </div>
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock title={`RAM — ${mode}`} code={code[mode]} />
                </div>
            </div>
            <RamBars />
        </div>
    );
}

function RamBars() {
    const bars = [
        ["Used programs", 56, "bg-emerald-400"],
        ["Buff/cache", 38, "bg-blue-400"],
        ["Free", 6, "bg-slate-500"],
    ];
    return (
        <div className="mt-6 bg-slate-950 border border-slate-700 rounded-2xl p-5">
            <h4 className="font-bold text-white flex items-center gap-2 mb-4">
                <MemoryStick className="text-emerald-400" /> Hình dung RAM Linux
            </h4>
            <div className="h-8 bg-slate-800 rounded-full overflow-hidden flex">
                {bars.map(([label, pct, cls]) => (
                    <div
                        key={label}
                        className={`${cls} h-full`}
                        style={{ width: `${pct}%` }}
                    />
                ))}
            </div>
            <div className="grid md:grid-cols-3 gap-3 mt-4 text-sm">
                {bars.map(([label, pct, cls]) => (
                    <div
                        key={label}
                        className="bg-slate-900 border border-slate-700 rounded-xl p-3"
                    >
                        <div className="font-bold text-white">{label}</div>
                        <div className="text-slate-500">{pct}% minh họa</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function DfExplorer() {
    const [view, setView] = useState("basic");
    const code = {
        basic: `$ df -h
Filesystem       Size  Used Avail Use% Mounted on
tmpfs            980M   15M  965M   2% /run
/dev/sda1         98G   44G   55G  45% /
/dev/sda2        195G  172G   24G  88% /home
/dev/sdb1        477G  9.6G  467G   2% /backup

# Use% > 80% nên bắt đầu xử lý`,
        columns: `Filesystem = Thiết bị/phân vùng
Size       = Tổng dung lượng
Used       = Đã dùng
Avail      = Còn trống
Use%       = % đã dùng
Mounted on = Mount point trong cây thư mục

Ngưỡng cảnh báo:
  <70%     Bình thường
  70-85%   Theo dõi
  85-95%   Cần xử lý sớm
  >95%     Khẩn cấp`,
        advanced: `$ df -h -x tmpfs -x devtmpfs
# Bỏ tmpfs/devtmpfs, chỉ xem filesystem thật

$ df -hT
Filesystem Type Size Used Avail Use% Mounted on
/dev/sda1  ext4 98G  44G  55G   45% /
/dev/sda2  ext4 195G 172G 24G   88% /home
/dev/sdb1  xfs  477G 9.6G 467G   2% /backup

$ df -h /var/log
# Xem /var/log nằm trên phân vùng nào`,
        inode: `$ df -i
Filesystem       Inodes   IUsed    IFree IUse% Mounted on
/dev/sda1       6553600  450000  6103600    7% /
/dev/sda2      13107200 9500000  3607200   73% /home

# Inode đầy = không tạo thêm file được dù còn GB
# Hay gặp khi quá nhiều file nhỏ: email, cache, logs

$ df -h | awk 'NR>1 {pct=$5; gsub(/%/,"",pct); if (pct+0 >= 80) printf "CẢNH BÁO: %s dùng %s (%s)\n", $6, $5, $1}'`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["basic", "df -h"],
                    ["columns", "Đọc cột"],
                    ["advanced", "Nâng cao"],
                    ["inode", "Inode"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setView(k)}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${view === k ? "bg-amber-500/10 border-amber-500/40 text-amber-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <TerminalBlock title={`df — ${view}`} code={code[view]} />
                </div>
                <div className="lg:col-span-2 space-y-3">
                    <DiskThreshold pct={45} label="/" state="Ổn" />
                    <DiskThreshold
                        pct={88}
                        label="/home"
                        state="Cần xử lý sớm"
                    />
                    <DiskThreshold pct={97} label="/var" state="Khẩn cấp" />
                    <MiniPoint
                        icon={<AlertTriangle size={18} />}
                        tone="rose"
                        title="Đừng quên inode"
                        text="Nếu inode hết, hệ thống vẫn lỗi dù df -h còn dung lượng."
                    />
                </div>
            </div>
        </div>
    );
}

function DiskThreshold({ pct, label, state }) {
    const color =
        pct >= 95
            ? "bg-red-400"
            : pct >= 85
              ? "bg-orange-400"
              : pct >= 70
                ? "bg-amber-400"
                : "bg-emerald-400";
    return (
        <div className="bg-slate-950 border border-slate-700 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white">{label}</span>
                <span className="font-mono text-slate-300">{pct}%</span>
            </div>
            <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                <div
                    className={`h-full ${color}`}
                    style={{ width: `${pct}%` }}
                />
            </div>
            <div className="text-xs text-slate-500 mt-2">{state}</div>
        </div>
    );
}

function DuWorkflow() {
    const [step, setStep] = useState(0);
    const steps = [
        [
            "1. Xác nhận phân vùng đầy",
            `$ df -h
/dev/sda2   195G  172G  24G  88% /home`,
        ],
        [
            "2. Xem từng user",
            `$ sudo du -h --max-depth=1 /home/ | sort -rh
172G  /home
8.5G  /home/charlie
4.5G  /home/alice
1.2G  /home/bob`,
        ],
        [
            "3. Đào sâu thư mục lớn",
            `$ sudo du -h --max-depth=2 /home/charlie/ | sort -rh | head -10
8.5G /home/charlie
8.0G /home/charlie/datasets
400M /home/charlie/.cache`,
        ],
        [
            "4. Tìm file thủ phạm",
            `$ sudo du -ah /home/charlie/datasets/ | sort -rh | head -5
8.0G /home/charlie/datasets/train_v1.bin
50M  /home/charlie/datasets/test.csv`,
        ],
        [
            "5. Xác nhận rồi xóa",
            `$ sudo rm /home/charlie/datasets/train_v1.bin
$ df -h /home
/dev/sda2 195G 164G 32G 84% /home`,
        ],
    ];
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {steps.map(([title], i) => (
                        <button
                            key={title}
                            onClick={() => setStep(i)}
                            className={`w-full text-left p-4 rounded-2xl border font-bold ${step === i ? "bg-orange-500/10 border-orange-500/40 text-orange-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {title}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title={steps[step][0]}
                        code={steps[step][1]}
                    />
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-3 mt-6">
                <MiniPoint
                    icon={<Database size={18} />}
                    tone="amber"
                    title="df"
                    text="Cho biết phân vùng nào đầy."
                />
                <MiniPoint
                    icon={<FileSearch size={18} />}
                    tone="orange"
                    title="du"
                    text="Cho biết thư mục/file nào gây đầy."
                />
                <MiniPoint
                    icon={<Search size={18} />}
                    tone="cyan"
                    title="find"
                    text="Tìm file lớn theo điều kiện như size > 100M."
                />
            </div>
        </div>
    );
}

function StatsTools() {
    const [tool, setTool] = useState("vmstat");
    const code = {
        vmstat: `$ vmstat 2
procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
 2  0 151552 512000 204800 2818928   0    1    50    30  500 1000 15  2 80  2  0

# r > số core = CPU bận
# b > 0 = process blocked chờ I/O
# si/so > 0 liên tục = đang swap
# wa cao = iowait`,
        iostat: `$ iostat -x 2
Device r/s  w/s rMB/s wMB/s avgqu-sz await r_await w_await %util
sda   20.0 30.0 0.80  0.60  0.80     16.0  10.0    20.0    20.0
sdb    2.0  3.0 0.05  0.03  0.10      5.0   4.0     6.0     1.0

# await < 20ms tốt
# %util > 80% = disk bottleneck
# await > 100ms = disk rất chậm
# avgqu-sz > 2 = queue dài`,
        sar: `$ sudo systemctl enable sysstat
$ sudo systemctl start sysstat
# /etc/default/sysstat: ENABLED="true"

$ sar -u 1 5
$ sar -u
$ sar -r
$ sar -b
$ sar -d
$ sar -n DEV 1 5
$ sar -A

12:20:01 %user %system %iowait %idle
12:20:01 85.50 5.00    2.00   7.50  ← CPU bận lúc 12h20`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {[
                    ["vmstat", "vmstat"],
                    ["iostat", "iostat"],
                    ["sar", "sar"],
                ].map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setTool(k)}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${tool === k ? "bg-purple-500/10 border-purple-500/40 text-purple-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <TerminalBlock title={tool} code={code[tool]} />
                </div>
                <div className="lg:col-span-2 space-y-3">
                    <MiniPoint
                        icon={<Activity size={18} />}
                        tone="purple"
                        title="vmstat"
                        text="Snapshot tổng hợp CPU, RAM, Swap, I/O mỗi giây."
                    />
                    <MiniPoint
                        icon={<HardDrive size={18} />}
                        tone="amber"
                        title="iostat -x"
                        text="Dùng để xác định disk I/O bottleneck qua await, %util, queue."
                    />
                    <MiniPoint
                        icon={<Timer size={18} />}
                        tone="cyan"
                        title="sar"
                        text="Xem lịch sử tài nguyên theo thời gian để phân tích sự cố đã xảy ra."
                    />
                </div>
            </div>
        </div>
    );
}

function VisualTools() {
    const [view, setView] = useState("ncdu");
    const code = {
        ncdu: `$ sudo apt install ncdu -y

$ ncdu
$ ncdu /home/
$ sudo ncdu /

# Phím tắt:
↑↓      Di chuyển
Enter   Vào thư mục
d       Xóa file/thư mục
n       Sort theo tên
s       Sort theo size
q       Thoát

$ sudo ncdu -o /tmp/disk_report.json /
$ ncdu -f /tmp/disk_report.json`,
        duf: `$ sudo apt install duf -y
$ duf

╭──────────────────────────────────────────────╮
│ MOUNTED ON │ SIZE  │ USED  │ AVAIL │ USE% │
├────────────┼───────┼───────┼───────┼──────┤
│ /          │ 97.7G │ 43.6G │ 54.1G │ 45%  │
│ /home      │195.3G │171.7G │ 23.7G │ 88%  │
│ /backup    │476.8G │  9.5G │467.2G │  2%  │
╰──────────────────────────────────────────────╯`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-3">
                    {[
                        ["ncdu", "ncdu — du trực quan"],
                        ["duf", "duf — df đẹp hơn"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setView(k)}
                            className={`w-full text-left rounded-xl border p-4 font-bold ${view === k ? "bg-pink-500/10 border-pink-500/40 text-pink-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                    <div className="bg-pink-500/10 border border-pink-500/30 rounded-2xl p-4 text-sm text-pink-100">
                        Lần đầu tìm disk đầy, <code>ncdu /</code> rất trực quan
                        vì thấy ngay thư mục nào chiếm nhiều nhất.
                    </div>
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock title={view} code={code[view]} />
                </div>
            </div>
        </div>
    );
}

function ResourceMonitorPreview() {
    const [mode, setMode] = useState("quick");
    const content = {
        quick: `CPU: [████████░░░░░░░░░░░░░░░░░░░░] 31%
RAM: [████████████████░░░░░░░░░░░░░░] 63%
DSK: [██████████████████████████░░░░] 88%
Load: 1.25 | Uptime: up 6 hours, 45 minutes`,
        cpu: `═══ CPU ═══════════════════════════════
Model:  Intel(R) Core(TM) i7-10700 CPU @ 2.90GHz
Cores:  8 logical CPUs
Load:   1.25 (1m)  0.98 (5m)  0.75 (15m)
Usage:  [████████░░░░░░░░░░░░░░░░░░░░]
Freq:   2900 MHz (average)

Top 5 process ngốn CPU:
  1236   alice       85.5%  python3
  2002   bob         25.3%  java
  300    mysql       10.1%  mysqld`,
        ram: `═══ RAM ═══════════════════════════════
Total:     7 GB
RAM Used:  [████████████████░░░░░░░░░░░░░░]
           4GB used / 2GB available
Swap:      [██░░░░░░░░░░░░░░░░░░░░░░░░░░░░]
           0GB used / 2GB total

Top 5 process ngốn RAM:
  2002   bob        45.0%  3418MB  java
  1236   alice      10.5%   830MB  python3`,
        disk: `═══ DISK ══════════════════════════════
/       98G   44G   55G   45% /dev/sda1
/home  195G  172G   24G   88% /dev/sda2
/backup 477G 9.6G  467G    2% /dev/sdb1

Top 5 thư mục lớn nhất (/home):
  8.5G  /home/charlie
  4.5G  /home/alice
  1.2G  /home/bob`,
        alerts: `═══ CẢNH BÁO ══════════════════════════
⚠️  DISK CAO: /home đang 88%
⚠️  SWAP: Đang dùng 620MB swap

Gợi ý:
  df -h /home
  sudo du -h --max-depth=1 /home | sort -rh
  ps aux --sort=-%mem | head`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-2">
                    {[
                        ["quick", "Báo cáo 1 dòng"],
                        ["cpu", "CPU"],
                        ["ram", "RAM"],
                        ["disk", "Disk"],
                        ["alerts", "Cảnh báo"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setMode(k)}
                            className={`w-full text-left rounded-xl border p-3 font-bold text-sm ${mode === k ? "bg-teal-500/10 border-teal-500/40 text-teal-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title="resource_monitor.sh preview"
                        code={content[mode]}
                    />
                </div>
            </div>
        </div>
    );
}

function PracticeChecklist() {
    const tasks = [
        [
            "Xem thông tin CPU",
            'lscpu | grep -E "Model name|CPU\\(s\\)|Thread|Core|MHz"',
        ],
        ["Xem số core", "nproc"],
        [
            "Tạo load giả và quan sát",
            "stress --cpu 2 --timeout 15 &; vmstat 1 5; mpstat -P ALL 1 3",
        ],
        ["Xem RAM tổng quan", "free -h"],
        [
            "Xem chi tiết RAM",
            'grep -E "MemTotal|MemAvailable|Cached:|SwapTotal|SwapFree" /proc/meminfo',
        ],
        ["Top process ngốn RAM", "ps aux --sort=-%mem | head -6"],
        ["Xem disk tổng quan", "df -hT | grep -v tmpfs"],
        [
            "Xem dung lượng thư mục home",
            "du -h --max-depth=1 ~/ | sort -rh | head -10",
        ],
        [
            "Tìm file lớn trong home",
            "find ~/ -type f -size +10M -exec ls -lh {} + 2>/dev/null | sort -k5 -rh | head -5",
        ],
        ["Xem inode", "df -i | grep -v tmpfs"],
        ["Snapshot tất cả", "vmstat 1 3"],
        ["Disk I/O", "iostat -h 1 3"],
        ["Cài và dùng ncdu", "sudo apt install ncdu -y && ncdu ~/"],
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
                        <BookOpen className="text-blue-400" /> Tóm tắt toàn bài
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <SummaryBox
                        title="CPU"
                        items={[
                            "lscpu",
                            "nproc",
                            "cat /proc/cpuinfo",
                            "mpstat -P ALL 1",
                            "stress --cpu 4",
                        ]}
                    />
                    <SummaryBox
                        title="RAM"
                        items={[
                            "free -h",
                            "free -h -s 2",
                            "/proc/meminfo",
                            "available không phải free",
                            "ps aux --sort=-%mem",
                        ]}
                    />
                    <SummaryBox
                        title="DISK"
                        items={[
                            "df -h",
                            "df -hT",
                            "df -i",
                            "du -sh /path",
                            "du -h -d 1",
                            "ncdu /path",
                        ]}
                    />
                    <SummaryBox
                        title="TỔNG HỢP"
                        items={[
                            "vmstat 1",
                            "iostat -x 1",
                            "sar -u",
                            "sar -r",
                            "sar -d",
                            "df → du → sort",
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}

function SummaryBox({ title, items }) {
    return (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
            <h4 className="font-bold text-blue-300 uppercase text-xs tracking-widest mb-4">
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
        question:
            "free -h hiện free = 50MB nhưng available = 3GB. RAM có thiếu không?",
        options: [
            "Chưa chắc thiếu; Linux dùng RAM trống làm cache, nên phải nhìn available",
            "Chắc chắn thiếu RAM",
            "CPU đang quá tải",
            "Disk đã đầy inode",
        ],
        correct: 0,
        explanation:
            "available là lượng RAM có thể cấp cho ứng dụng sau khi reclaim cache. Đây là số quan trọng hơn free.",
    },
    {
        question: "df -h hiện /home Use% = 92%. Bước tiếp theo hợp lý là gì?",
        options: [
            "Dùng du -h --max-depth=1 /home | sort -rh để tìm thư mục lớn",
            "Chạy lscpu",
            "Xóa /proc/cpuinfo",
            "Đổi hostname",
        ],
        correct: 0,
        explanation:
            "df cho biết phân vùng đầy; du giúp tìm thư mục/file nào gây đầy.",
    },
    {
        question:
            "lscpu hiện CPU(s)=8, Core(s) per socket=4, Thread(s) per core=2. Hyperthreading có bật không?",
        options: ["Có", "Không", "Không thể biết", "Chỉ bật nếu disk là SSD"],
        correct: 0,
        explanation:
            "4 core vật lý × 2 thread/core = 8 logical CPU, tức hyperthreading/SMT đang bật.",
    },
    {
        question: "iostat -x hiện %util = 95% cho sda. Điều đó nghĩa là gì?",
        options: [
            "Disk gần như bận liên tục, có thể là bottleneck I/O",
            "RAM đang free nhiều",
            "CPU đang tắt",
            "Không có vấn đề gì",
        ],
        correct: 0,
        explanation:
            "%util cao cho thấy thiết bị disk bận phần lớn thời gian. Nếu kèm await cao thì rất đáng chú ý.",
    },
    {
        question: "Khi nào disk không tạo được file dù df -h vẫn còn trống?",
        options: [
            "Khi inode đầy",
            "Khi CPU có 8 core",
            "Khi lscpu không có AVX",
            "Khi free thấp",
        ],
        correct: 0,
        explanation:
            "Mỗi file cần inode. Quá nhiều file nhỏ có thể làm hết inode trước khi hết GB.",
    },
    {
        question: "vmstat hiện so > 0 liên tục là dấu hiệu gì?",
        options: [
            "Hệ thống đang swap out, có thể thiếu RAM",
            "Disk đang rỗng",
            "CPU idle 100%",
            "Network mất kết nối",
        ],
        correct: 0,
        explanation:
            "so là Swap Out: RAM bị đẩy ra swap. Nếu liên tục thì hiệu năng sẽ giảm mạnh.",
    },
    {
        question: "du và df khác nhau thế nào?",
        options: [
            "df xem tổng phân vùng; du xem dung lượng file/thư mục cụ thể",
            "du xem CPU, df xem RAM",
            "Không khác nhau",
            "df chỉ dùng cho Docker",
        ],
        correct: 0,
        explanation:
            "Dùng df để biết mount point nào đầy, dùng du để tìm thủ phạm bên trong thư mục.",
    },
    {
        question:
            "Cột nào trong top/free nên ưu tiên khi đánh giá RAM còn dùng được?",
        options: ["available", "free", "TTY", "BogoMIPS"],
        correct: 0,
        explanation:
            "available ước lượng RAM có thể cấp cho app mới mà không cần swap mạnh.",
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
                    <strong className="text-blue-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu về tài nguyên hệ thống.
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
                <span className="text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
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
