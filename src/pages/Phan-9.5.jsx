import React, { useMemo, useState } from "react";
import {
    HardDrive,
    Activity,
    Terminal,
    AlertTriangle,
    Info,
    CheckCircle2,
    XCircle,
    Copy,
    ChevronRight,
    RotateCcw,
    Sparkles,
    ShieldAlert,
    Search,
    Wrench,
    FileText,
    ListChecks,
    Bug,
    Thermometer,
    Server,
    Clock,
    Cpu,
    Database,
    Gauge,
    Archive,
    Stethoscope,
    Play,
    Eye,
    Zap,
    Power,
    Cable,
    FolderSearch,
    PackageCheck,
    Settings,
    Mail,
    Timer,
    AlertCircle,
    LifeBuoy,
    Trash2,
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
                                Disk Health · fsck · SMART · Recovery
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 9
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 9.5
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" /> Bảo
                        vệ dữ liệu trước khi ổ đĩa hỏng thật sự
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Kiểm Tra & Sửa Lỗi Ổ Đĩa <br />
                        <span className="text-orange-500">
                            smartctl, fsck, badblocks
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Bài này giúp bạn nhận diện lỗi ổ đĩa, đọc chỉ số SMART,
                        chạy self-test, dùng{" "}
                        <code className="text-orange-300">fsck</code> đúng cách,
                        quét bad sector và viết script kiểm tra sức khỏe ổ đĩa
                        tự động.
                    </p>
                </section>

                <section className="bg-red-500/10 border border-red-500/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-5 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                        <ShieldAlert size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Quy tắc vàng: backup trước, unmount trước
                        </h3>
                        <p className="text-red-100 leading-relaxed">
                            Nếu <code className="text-white">smartctl -H</code>{" "}
                            báo <strong>FAILED</strong>, việc đầu tiên là backup
                            dữ liệu ngay. Không chạy{" "}
                            <code className="text-white">fsck</code> trên phân
                            vùng đang mount vì có thể làm hỏng dữ liệu. Với phân
                            vùng root <code className="text-white">/</code>, hãy
                            chạy từ Recovery Mode hoặc Live USB.
                        </p>
                    </div>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <WhyDiskFailsCard />
                    <DiskHealthSimulator />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="red"
                        icon={<Bug size={22} />}
                        title="Dấu hiệu ổ đĩa có vấn đề"
                        subtitle="I/O error, bad sector, failed command và EXT4-fs error trong dmesg/syslog là tín hiệu cần backup ngay."
                    />
                    <DiskErrorSignsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="blue"
                        icon={<Stethoscope size={22} />}
                        title="smartctl — đọc sức khỏe ổ đĩa"
                        subtitle="SMART giúp ổ đĩa tự báo tình trạng: model, nhiệt độ, bad sector, thời gian chạy và kết quả self-test."
                    />
                    <SmartctlSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="orange"
                        icon={<Gauge size={22} />}
                        title="Các thuộc tính SMART nguy hiểm"
                        subtitle="Reallocated, Pending, Uncorrectable, Reported_Uncorrect và Temperature là những chỉ số cần đọc trước tiên."
                    />
                    <SmartAttributesSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="green"
                        icon={<Timer size={22} />}
                        title="Self-test & giám sát tự động smartd"
                        subtitle="Short test kiểm tra nhanh; long test kiểm tra toàn bộ ổ; smartd tự chạy nền và gửi cảnh báo."
                    />
                    <SelfTestSmartdSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="purple"
                        icon={<Wrench size={22} />}
                        title="fsck — kiểm tra và sửa filesystem"
                        subtitle="fsck sửa lỗi logic của filesystem, không sửa phần cứng. Phải unmount trước khi chạy."
                    />
                    <FsckSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="cyan"
                        icon={<FolderSearch size={22} />}
                        title="/lost+found và filesystem khác"
                        subtitle="fsck có thể đưa file mồ côi vào /lost+found. XFS, BTRFS, FAT, NTFS có công cụ sửa riêng."
                    />
                    <LostFoundAndOtherFsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="yellow"
                        icon={<Search size={22} />}
                        title="badblocks — quét bad sector"
                        subtitle="badblocks kiểm tra sector hỏng vật lý, rất chậm với ổ lớn và cần chạy cẩn thận."
                    />
                    <BadblocksSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="8"
                        color="pink"
                        icon={<Server size={22} />}
                        title="Kịch bản thực tế tổng hợp"
                        subtitle="Server có I/O errors, kiểm tra ổ mới trước khi dùng, và cứu máy không boot được do filesystem lỗi."
                    />
                    <RealScenariosSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="9"
                        color="teal"
                        icon={<Activity size={22} />}
                        title="Script kiểm tra sức khỏe ổ đĩa"
                        subtitle="disk_health_check.sh tự quét SMART, nhiệt độ, bad sector, dung lượng, inode và kernel disk errors."
                    />
                    <DiskHealthScriptSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="10"
                        color="emerald"
                        icon={<ListChecks size={22} />}
                        title="Tóm tắt nhanh"
                        subtitle="Các lệnh smartctl, fsck, badblocks và workflow xử lý sự cố ổ đĩa cần nhớ."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <PackageCheck className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức bài 9.5
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Ôn lại SMART FAILED, thuộc tính nguy hiểm,
                                    fsck root, nhiệt độ, lost+found và bad
                                    sector.
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
                            Hoàn thành Phần 9 — Quản lý Đĩa & Hệ Thống File
                        </h3>
                        <p className="text-slate-400 max-w-2xl mx-auto mb-6">
                            Bạn đã học phân vùng, format/mount, LVM, nén/backup
                            và kiểm tra sức khỏe ổ đĩa — các kỹ năng nền tảng để
                            quản trị server an toàn.
                        </p>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                            Phần 10 — Bảo mật cơ bản <ChevronRight size={20} />
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}

function SectionTitle({ number, color, icon, title, subtitle }) {
    const colorMap = {
        red: "bg-red-500/20 text-red-400",
        blue: "bg-blue-500/20 text-blue-400",
        orange: "bg-orange-500/20 text-orange-400",
        green: "bg-green-500/20 text-green-400",
        purple: "bg-purple-500/20 text-purple-400",
        cyan: "bg-cyan-500/20 text-cyan-400",
        yellow: "bg-yellow-500/20 text-yellow-400",
        pink: "bg-pink-500/20 text-pink-400",
        teal: "bg-teal-500/20 text-teal-400",
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

function WhyDiskFailsCard() {
    const causes = [
        [Zap, "Mất điện", "Filesystem không nhất quán"],
        [Thermometer, "Quá nhiệt", "Bad sectors, giảm tuổi thọ"],
        [HardDrive, "Va đập HDD", "Đầu đọc/mặt đĩa hỏng"],
        [Clock, "Già cỗi", "Wear out SSD/HDD"],
        [Bug, "Firmware bug", "Ghi sai dữ liệu"],
        [Cable, "Cáp lỏng", "UDMA CRC / I/O errors"],
    ];
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-red-500/15 text-red-400 rounded-2xl flex items-center justify-center">
                    <HardDrive size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        Vì sao ổ đĩa bị lỗi?
                    </h3>
                    <p className="text-slate-500 text-sm">
                        Hardware vs Software errors
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mb-5">
                {causes.map(([Icon, title, desc]) => (
                    <div
                        key={title}
                        className="bg-slate-950 border border-slate-800 rounded-2xl p-4"
                    >
                        <Icon className="text-orange-400 mb-3" size={21} />
                        <div className="font-bold text-white text-sm">
                            {title}
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                            {desc}
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4">
                    <div className="font-bold text-red-300">Physical</div>
                    <p className="text-sm text-slate-400 mt-2">
                        Bad sector, đầu đọc hỏng, SSD wear. Thường cần thay ổ.
                    </p>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-4">
                    <div className="font-bold text-yellow-300">Logical</div>
                    <p className="text-sm text-slate-400 mt-2">
                        Filesystem không nhất quán. fsck có thể sửa được.
                    </p>
                </div>
            </div>
        </div>
    );
}

function DiskHealthSimulator() {
    const [reallocated, setReallocated] = useState(0);
    const [pending, setPending] = useState(0);
    const [uncorrect, setUncorrect] = useState(0);
    const [temp, setTemp] = useState(35);
    const alerts = [
        reallocated > 0,
        pending > 0,
        uncorrect > 0,
        temp > 55,
    ].filter(Boolean).length;
    const status = alerts === 0 ? "PASSED" : alerts >= 2 ? "DANGER" : "WARNING";
    return (
        <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Activity className="text-orange-400" /> Mô phỏng sức khỏe ổ đĩa
            </h3>
            <p className="text-slate-400 mb-6">
                Thay đổi chỉ số SMART để xem mức cảnh báo.
            </p>
            <Slider
                label="Reallocated_Sector_Ct"
                value={reallocated}
                setValue={setReallocated}
                max={20}
            />
            <Slider
                label="Current_Pending_Sector"
                value={pending}
                setValue={setPending}
                max={20}
            />
            <Slider
                label="Offline_Uncorrectable"
                value={uncorrect}
                setValue={setUncorrect}
                max={20}
            />
            <Slider
                label="Temperature °C"
                value={temp}
                setValue={setTemp}
                min={25}
                max={75}
            />
            <div
                className={`mt-5 rounded-2xl border p-5 ${status === "PASSED" ? "bg-green-500/10 border-green-500/20" : status === "WARNING" ? "bg-yellow-500/10 border-yellow-500/20" : "bg-red-500/10 border-red-500/20"}`}
            >
                <div className="text-xs text-slate-500 mb-2">Kết luận</div>
                <div
                    className={`text-2xl font-black ${status === "PASSED" ? "text-green-400" : status === "WARNING" ? "text-yellow-400" : "text-red-400"}`}
                >
                    {status}
                </div>
                <p className="text-slate-400 text-sm mt-2">
                    {status === "PASSED"
                        ? "Chưa thấy chỉ số nguy hiểm."
                        : status === "WARNING"
                          ? "Backup và theo dõi sát. Chạy SMART long test."
                          : "Backup ngay và chuẩn bị thay ổ đĩa."}
                </p>
            </div>
        </div>
    );
}

function Slider({ label, value, setValue, min = 0, max }) {
    return (
        <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-400">{label}</span>
                <code
                    className={
                        value > 0 && label !== "Temperature °C"
                            ? "text-red-400"
                            : value > 55
                              ? "text-red-400"
                              : "text-orange-300"
                    }
                >
                    {value}
                </code>
            </div>
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="w-full accent-orange-500"
            />
        </div>
    );
}

function DiskErrorSignsSection() {
    return (
        <CodeBlock
            title="disk-error-signs.sh"
            code={`sudo dmesg | grep -i "error\\|failed\\|bad sector\\|i/o"\nsudo dmesg -T | grep -i "error\\|i/o\\|bad" | tail -10\nsudo journalctl -k --since today | grep -i "error\\|fail" | head -10\n\n# Các thông báo nguy hiểm:\n# ata1.00: failed command: READ FPDMA QUEUED\n# ata1.00: status: { DRDY ERR }\n# ata1.00: error: { UNC }\n# end_request: I/O error, dev sda, sector 12345678\n# Buffer I/O error on dev sda1, logical block 6172839\n# EXT4-fs error (device sda1): ext4_find_entry:1455\n\n# Thấy các dòng này:\n# 1. Backup NGAY\n# 2. smartctl -H /dev/sdX\n# 3. smartctl -A /dev/sdX\n# 4. Chạy self-test\n# 5. fsck nếu là lỗi filesystem logic`}
        />
    );
}

function SmartctlSection() {
    const [tab, setTab] = useState("install");
    const tabs = [
        ["install", "Cài đặt"],
        ["info", "smartctl -i"],
        ["health", "smartctl -H"],
        ["full", "smartctl -a"],
        ["nvme", "NVMe"],
    ];
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                {tabs.map(([id, label]) => (
                    <button
                        key={id}
                        onClick={() => setTab(id)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold ${tab === id ? "bg-blue-500 text-white" : "bg-slate-900 text-slate-400 hover:text-slate-200"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="p-5">
                {tab === "install" && (
                    <CodeBlock
                        title="install-smartmontools.sh"
                        code={`sudo apt install smartmontools -y\n\nlsblk\nlsblk -d -o NAME,SIZE,TYPE,ROTA,TRAN,MODEL\n\n# HDD/SSD SATA\nsudo smartctl -i /dev/sda\n\n# NVMe SSD\nsudo smartctl -i /dev/nvme0n1`}
                    />
                )}
                {tab === "info" && (
                    <CodeBlock
                        title="smartctl-info.sh"
                        code={`sudo smartctl -i /dev/sda\n\n# Chú ý các dòng:\n# Device Model:     WDC WD10EZEX-08WN4A0\n# Serial Number:    WD-WCC6Y7XXXXXX\n# User Capacity:    1,000,204,886,016 bytes [1.00 TB]\n# Sector Sizes:     512 bytes logical, 4096 bytes physical\n# Rotation Rate:    7200 rpm\n# SMART support is: Available\n# SMART support is: Enabled\n\n# Nếu SMART chưa bật:\nsudo smartctl -s on /dev/sda`}
                    />
                )}
                {tab === "health" && (
                    <CodeBlock
                        title="smartctl-health.sh"
                        code={`sudo smartctl -H /dev/sda\n\n# PASSED = ổ đang ổn theo SMART\n# SMART overall-health self-assessment test result: PASSED\n\n# FAILED = backup ngay và thay ổ\n# SMART overall-health self-assessment test result: FAILED!\n\nfor disk in /dev/sd{a,b,c}; do\n    [ -b "$disk" ] || continue\n    result=$(sudo smartctl -H "$disk" | grep "test result")\n    echo "$disk: $result"\ndone`}
                    />
                )}
                {tab === "full" && (
                    <CodeBlock
                        title="smartctl-full-report.sh"
                        code={`sudo smartctl -a /dev/sda\n\n# Lọc các chỉ số quan trọng:\nsudo smartctl -A /dev/sda | grep -E "Reallocated|Pending|Uncorrect|Temperature|Power_On"\n\n# Xem nhiệt độ nhanh:\nsudo smartctl -A /dev/sda | awk '/Temperature/ {print $1, $2, $NF"°C"}'\n\n# HDD lý tưởng: 30-45°C\n# HDD > 55°C: quá nóng, cần xử lý tản nhiệt\n# SSD SATA < 70°C thường ổn`}
                    />
                )}
                {tab === "nvme" && (
                    <CodeBlock
                        title="smartctl-nvme.sh"
                        code={`sudo smartctl -i /dev/nvme0n1\nsudo smartctl -a /dev/nvme0n1\n\n# NVMe cần chú ý:\n# Critical Warning: 0x00        → tốt\n# Temperature: 35 Celsius\n# Available Spare: 100%         → còn spare blocks\n# Percentage Used: 0%           → wear level\n# Unsafe Shutdowns: 5\n# Media and Data Integrity Errors: 0\n# Error Information Log Entries: 0\n\n# Cảnh báo:\n# Available Spare < 10%\n# Percentage Used > 90%\n# Media Integrity Errors > 0`}
                    />
                )}
            </div>
        </div>
    );
}

function SmartAttributesSection() {
    const attrs = [
        [
            "5",
            "Reallocated_Sector_Ct",
            "Sector hỏng đã remap",
            "RAW > 0: backup và theo dõi/thay ổ",
        ],
        [
            "187",
            "Reported_Uncorrect",
            "Lỗi không thể sửa được",
            "RAW > 0: nghiêm trọng",
        ],
        [
            "194",
            "Temperature_Celsius",
            "Nhiệt độ ổ đĩa",
            "HDD > 55°C: quá nóng",
        ],
        [
            "196",
            "Reallocated_Event_Count",
            "Số lần remap sector",
            "RAW > 0: có bad sector",
        ],
        [
            "197",
            "Current_Pending_Sector",
            "Sector nghi ngờ bad",
            "RAW > 0: đáng lo",
        ],
        [
            "198",
            "Offline_Uncorrectable",
            "Sector lỗi offline",
            "RAW > 0: nghiêm trọng",
        ],
        [
            "199",
            "UDMA_CRC_Error_Count",
            "Lỗi truyền qua cáp SATA",
            "RAW > 0: kiểm tra cáp",
        ],
        ["9", "Power_On_Hours", "Tổng giờ đã chạy", "Đánh giá tuổi thọ"],
    ];
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {attrs.map(([id, name, meaning, action]) => (
                <div
                    key={id}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-5"
                >
                    <div className="text-xs text-slate-500 mb-1">ID {id}</div>
                    <div className="font-bold text-white text-sm mb-2 break-words">
                        {name}
                    </div>
                    <p className="text-slate-400 text-xs mb-3">{meaning}</p>
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-xs text-red-100">
                        {action}
                    </div>
                </div>
            ))}
        </div>
    );
}

function SelfTestSmartdSection() {
    const [tab, setTab] = useState("test");
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                <button
                    onClick={() => setTab("test")}
                    className={`px-4 py-2 rounded-xl text-sm font-bold ${tab === "test" ? "bg-green-500 text-white" : "bg-slate-900 text-slate-400"}`}
                >
                    Self-test
                </button>
                <button
                    onClick={() => setTab("smartd")}
                    className={`px-4 py-2 rounded-xl text-sm font-bold ${tab === "smartd" ? "bg-green-500 text-white" : "bg-slate-900 text-slate-400"}`}
                >
                    smartd
                </button>
            </div>
            <div className="p-5">
                {tab === "test" ? (
                    <CodeBlock
                        title="smartctl-selftest.sh"
                        code={`# Short test, 1-2 phút\nsudo smartctl -t short /dev/sda\n\n# Long test, có thể mất nhiều giờ\nsudo smartctl -t long /dev/sda\n\n# Conveyance test sau vận chuyển HDD\nsudo smartctl -t conveyance /dev/sda\n\n# Xem kết quả test\nsudo smartctl -l selftest /dev/sda\n\n# Status tốt:\n# Completed without error\n\n# Status xấu:\n# Completed: read failure\n# LBA_of_first_error = sector lỗi đầu tiên\n\n# Theo dõi tiến trình\nsudo smartctl -a /dev/sda | grep "Self-test execution"`}
                    />
                ) : (
                    <CodeBlock
                        title="smartd.conf"
                        code={`sudo nano /etc/smartd.conf\n\n# Giám sát tất cả ổ, short test 2h sáng mỗi ngày, long test 3h sáng thứ 7\nDEVICESCAN -d auto -n standby,q \\\n           -s (S/../.././02|L/../../6/03) \\\n           -m admin@company.com \\\n           -M exec /usr/share/smartmontools/smartd-runner\n\n# Hoặc từng ổ riêng\n/dev/sda -a -o on -S on \\\n          -s (S/../.././02|L/../../6/03) \\\n          -m admin@company.com\n\nsudo systemctl enable --now smartd\nsudo systemctl status smartd\n\n# Debug smartd đang giám sát gì\nsudo smartd --debug 2>&1 | head -30`}
                    />
                )}
            </div>
        </div>
    );
}

function FsckSection() {
    const [tab, setTab] = useState("before");
    const tabs = [
        ["before", "Trước fsck"],
        ["normal", "Phân vùng thường"],
        ["root", "Root /"],
        ["output", "Đọc output"],
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
                {tab === "before" && <FsckBefore />}
                {tab === "normal" && <FsckNormal />}
                {tab === "root" && <FsckRoot />}
                {tab === "output" && <FsckOutput />}
            </div>
        </div>
    );
}

function FsckBefore() {
    return (
        <CodeBlock
            title="before-fsck.sh"
            code={`lsblk\ndf -T\n\n# Xem thông tin ext4\nsudo tune2fs -l /dev/sda1 | grep -E "Mount count|Maximum|Last|Check|Filesystem state"\n\n# Dry run, không sửa gì\nsudo fsck -n /dev/sdb1\n\n# Quy tắc:\n# 1. Backup trước khi fsck\n# 2. Unmount trước khi fsck\n# 3. Không fsck trực tiếp phân vùng root đang chạy`}
        />
    );
}
function FsckNormal() {
    return (
        <CodeBlock
            title="fsck-normal-partition.sh"
            code={`# Phân vùng không phải /\n\n# 1. Unmount\nsudo umount /dev/sdb1\n\n# Nếu busy:\nsudo fuser -m /dev/sdb1\nsudo lsof /backup\nsudo umount -l /dev/sdb1\n\n# 2. Chạy fsck\nsudo fsck /dev/sdb1\nsudo fsck.ext4 /dev/sdb1\nsudo e2fsck /dev/sdb1\n\n# Options quan trọng\nsudo fsck -n /dev/sdb1\nsudo fsck -y /dev/sdb1\nsudo fsck -f /dev/sdb1\nsudo fsck -v /dev/sdb1\nsudo fsck -C /dev/sdb1\n\n# Hay dùng nhất\nsudo fsck -fyC /dev/sdb1\n\n# 3. Mount lại\nsudo mount /dev/sdb1 /backup\ndf -h /backup`}
        />
    );
}
function FsckRoot() {
    return (
        <CodeBlock
            title="fsck-root.sh"
            code={`# Không thể unmount / khi hệ thống đang chạy bình thường\n\n# Cách 1: Lên lịch fsck khi reboot\nsudo touch /forcefsck\nsudo shutdown -rF now\n\n# Cách 2: Recovery Mode\n# Reboot → Shift → Advanced options → Recovery mode → fsck\n\n# Cách 3: Live USB\n# Boot Ubuntu Live USB rồi chạy:\nsudo fsck -fyC /dev/sda1\n\n# Cách 4: Single-user mode, remount root read-only\nsudo mount -o remount,ro /\nsudo fsck -fy /dev/sda1\nsudo mount -o remount,rw /`}
        />
    );
}
function FsckOutput() {
    return (
        <CodeBlock
            title="fsck-output.txt"
            code={`# Tốt:\n/dev/sdb1: clean, 145234/131072000 files, 756432000/2097152000 blocks\n\n# Có lỗi và đã sửa:\n/dev/sdb1: recovering journal\nPass 1: Checking inodes, blocks, and sizes\nInode 12345 has imagic flag set. Fix? yes\nUnattached inode 12346\nConnect to /lost+found? yes\n/dev/sdb1: ***** FILE SYSTEM WAS MODIFIED *****\n\n# Lỗi nghiêm trọng:\n/dev/sdb1: UNEXPECTED INCONSISTENCY; RUN fsck MANUALLY.\n\n# Bad block:\nBad block 123456789 found while reading inode bitmap\n# → Kiểm tra SMART, cân nhắc thay ổ`}
        />
    );
}

function LostFoundAndOtherFsSection() {
    return (
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
            <CodeBlock
                title="lost-found.sh"
                code={`# /lost+found chứa file/directory mồ côi fsck tìm thấy\nsudo ls /lost+found/\n\n# Tên thường là số inode\nsudo file /lost+found/\#12345\nsudo cat /lost+found/\#12345 | head -20\n\n# Phục hồi file\nsudo cp /lost+found/\#12345 /home/alice/recovered_file.txt\n\n# Sau khi phục hồi hoặc xác định không cần\nsudo rm -rf /lost+found/#*`}
            />
            <CodeBlock
                title="other-filesystems.sh"
                code={`# ext2/ext3/ext4\nsudo fsck.ext4 /dev/sdb1\nsudo e2fsck /dev/sdb1\n\n# XFS: không dùng fsck, dùng xfs_repair\nsudo umount /dev/sdc1\nsudo xfs_repair /dev/sdc1\nsudo xfs_repair -L /dev/sdc1\n\n# BTRFS\nsudo btrfs check /dev/sdd1\nsudo btrfs scrub start /mnt/data\nsudo btrfs scrub status /mnt/data\n\n# FAT32/exFAT\nsudo fsck.vfat /dev/sde1\nsudo fsck.fat -a /dev/sde1\nsudo dosfsck -w -r /dev/sde1\n\n# NTFS\nsudo apt install ntfs-3g -y\nsudo ntfsfix /dev/sde1`}
            />
        </div>
    );
}

function BadblocksSection() {
    return (
        <CodeBlock
            title="badblocks.sh"
            code={`# Read-only scan, an toàn nhưng chậm\nsudo badblocks -sv /dev/sdb1\n\n# Options:\n# -s = show progress\n# -v = verbose\n# -n = non-destructive read-write test\n# -w = write mode test, HỦY DỮ LIỆU\n# -b = block size\n\n# Scan và lưu bad blocks vào file\nsudo badblocks -sv /dev/sdb1 > /tmp/bad_blocks.txt\n\n# Báo cho e2fsck biết không dùng các block này\nsudo e2fsck -l /tmp/bad_blocks.txt /dev/sdb1\n\n# Ổ lớn nên chạy qua đêm\nnohup sudo badblocks -sv /dev/sdb1 > /tmp/badblocks.log 2>&1 &\ntail -f /tmp/badblocks.log\n\n# Ước tính: HDD 1TB có thể mất khoảng vài giờ tùy tốc độ đọc`}
        />
    );
}

function RealScenariosSection() {
    const [tab, setTab] = useState("io");
    const tabs = [
        ["io", "I/O errors"],
        ["newdisk", "Ổ mới"],
        ["boot", "Không boot"],
    ];
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                {tabs.map(([id, label]) => (
                    <button
                        key={id}
                        onClick={() => setTab(id)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold ${tab === id ? "bg-pink-500 text-white" : "bg-slate-900 text-slate-400 hover:text-slate-200"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="p-5">
                {tab === "io" && (
                    <CodeBlock
                        title="scenario-io-errors.sh"
                        code={`echo "=== BƯỚC 1: Xác nhận có lỗi ==="\nsudo dmesg | grep -i "i/o error\\|failed\\|bad sector" | tail -10\n\necho "=== BƯỚC 2: Xem ổ bị lỗi ==="\nlsblk\ndf -h\n\necho "=== BƯỚC 3: SMART ngay ==="\nsudo smartctl -H /dev/sda\nsudo smartctl -A /dev/sda | grep -E "Reallocated|Pending|Uncorrect|Temperature"\n\necho "=== BƯỚC 4: Short test ==="\nsudo smartctl -t short /dev/sda\nsleep 120\nsudo smartctl -l selftest /dev/sda | head -5\n\necho "=== BƯỚC 5: fsck phân vùng phụ ==="\nsudo umount /dev/sdb1 2>/dev/null\nsudo fsck -fyC /dev/sdb1\nsudo mount /dev/sdb1 /backup`}
                    />
                )}
                {tab === "newdisk" && (
                    <CodeBlock
                        title="scenario-new-disk.sh"
                        code={`# Kiểm tra ổ mới /dev/sdc trước khi dùng\nsudo smartctl -i /dev/sdc\nsudo smartctl -H /dev/sdc\n\n# Test sau vận chuyển\nsudo smartctl -t conveyance /dev/sdc\nsleep 300\nsudo smartctl -l selftest /dev/sdc\n\n# Scan bad block read-only\nnohup sudo badblocks -sv /dev/sdc > /tmp/sdc_badblocks.log 2>&1 &\necho "Scan PID: $!"\ntail -f /tmp/sdc_badblocks.log`}
                    />
                )}
                {tab === "boot" && (
                    <CodeBlock
                        title="scenario-no-boot.sh"
                        code={`# Từ Recovery Mode hoặc Live USB:\nlsblk\nsudo fdisk -l /dev/sda\n\n# Chạy fsck root\nsudo fsck -fyC /dev/sda1\n\n# Nếu lỗi journal, thử sửa an toàn trước\nsudo e2fsck -p /dev/sda1\nsudo e2fsck -fy /dev/sda1\n\n# Extreme case: clear journal, có thể mất transaction chưa commit\nsudo tune2fs -O ^has_journal /dev/sda1\nsudo e2fsck -fy /dev/sda1\nsudo tune2fs -O has_journal /dev/sda1`}
                    />
                )}
            </div>
        </div>
    );
}

function DiskHealthScriptSection() {
    return (
        <CodeBlock
            title="disk_health_check.sh"
            code={`#!/bin/bash\nRED='\\033[0;31m'; GREEN='\\033[0;32m'; YELLOW='\\033[1;33m'; BLUE='\\033[0;34m'; CYAN='\\033[0;36m'; BOLD='\\033[1m'; NC='\\033[0m'\nREPORT_FILE="/tmp/disk_health_$(date +%Y%m%d_%H%M%S).txt"\nALERTS=0\n\nlog() { echo -e "$1" | tee -a "$REPORT_FILE"; }\nalert() { log "${"{"}RED{'}'}⚠️  CẢNH BÁO: $1${"{"}NC{'}'}"; ALERTS=$((ALERTS + 1)); }\nok() { log "${"{"}GREEN{'}'}✅ $1${"{"}NC{'}'}"; }\nwarn() { log "${"{"}YELLOW{'}'}⚡ $1${"{"}NC{'}'}"; }\ninfo() { log "${"{"}BLUE{'}'}ℹ️  $1${"{"}NC{'}'}"; }\n\nlog ""\nlog "${"{"}BOLD{'}'}${"{"}CYAN{'}'}╔══════════════════════════════════════════════════╗${"{"}NC{'}'}"\nlog "${"{"}BOLD{'}'}${"{"}CYAN{'}'}║     BÁO CÁO SỨC KHỎE Ổ ĐĨA                    ║${"{"}NC{'}'}"\nlog "${"{"}BOLD{'}'}${"{"}CYAN{'}'}║     $(date '+%Y-%m-%d %H:%M:%S') — $(hostname)${"{"}NC{'}'}"\nlog "${"{"}BOLD{'}'}${"{"}CYAN{'}'}╚══════════════════════════════════════════════════╝${"{"}NC{'}'}"\n\nlog ""\nlog "${"{"}BOLD{'}'}${"{"}BLUE{'}'}═══ DANH SÁCH Ổ ĐĨA ═══════════════════════════${"{"}NC{'}'}"\nlsblk -d -o NAME,SIZE,TYPE,ROTA,TRAN,MODEL | awk 'NR==1{print "  "$0} NR>1{print "  "$0}' | tee -a "$REPORT_FILE"\n\ncheck_disk() {\n    local disk="$1"\n    log ""\n    log "${"{"}BOLD{'}'}${"{"}CYAN{'}'}═══ Ổ ĐĨA: $disk ═══════════════════════════${"{"}NC{'}'}"\n\n    if ! sudo smartctl -i "$disk" &>/dev/null; then\n        warn "$disk: Không đọc được SMART"\n        return\n    fi\n\n    local model=$(sudo smartctl -i "$disk" | grep -E "Device Model|Product|Model Number" | head -1 | sed 's/.*:\\s*//')\n    local serial=$(sudo smartctl -i "$disk" | grep "Serial Number" | sed 's/.*:\\s*//')\n    local hours=$(sudo smartctl -A "$disk" 2>/dev/null | grep "Power_On_Hours" | awk '{print $NF}')\n\n    info "Model:  $model"\n    info "Serial: $serial"\n    [ -n "$hours" ] && info "Đã dùng: $hours giờ (~$(( hours / 24 )) ngày)"\n\n    local health=$(sudo smartctl -H "$disk" | grep "test result" | awk '{print $NF}')\n    if [ "$health" = "PASSED" ]; then ok "$disk: SMART Health = PASSED"; else alert "$disk: SMART Health = $health — CẦN THAY Ổ!"; fi\n\n    for pair in \\\n        "Reallocated_Sector reallocated" \\\n        "Current_Pending_Sector pending" \\\n        "Offline_Uncorrectable uncorrect" \\\n        "Reported_Uncorrect reported"; do\n        attr=$(echo $pair | awk '{print $1}')\n        label=$(echo $pair | awk '{print $2}')\n        value=$(sudo smartctl -A "$disk" 2>/dev/null | awk -v a="$attr" '$0 ~ a {print $NF}')\n        if [ -n "$value" ] && [ "$value" -gt 0 ] 2>/dev/null; then\n            alert "$disk: $attr = $value"\n        elif [ -n "$value" ]; then\n            ok "$disk: $attr = 0"\n        fi\n    done\n\n    local temp=$(sudo smartctl -A "$disk" 2>/dev/null | awk '/Temperature_Celsius|Airflow_Temperature/ {print $NF}' | head -1)\n    [ -z "$temp" ] && temp=$(sudo smartctl -a "$disk" 2>/dev/null | grep "^Temperature:" | awk '{print $2}')\n    if [ -n "$temp" ]; then\n        if [ "$temp" -gt 55 ] 2>/dev/null; then alert "$disk: Nhiệt độ = ${"{"}temp{'}'}°C — QUÁ NÓNG!"; elif [ "$temp" -gt 45 ] 2>/dev/null; then warn "$disk: Nhiệt độ = ${"{"}temp{'}'}°C"; else ok "$disk: Nhiệt độ = ${"{"}temp{'}'}°C"; fi\n    fi\n\n    local last_test=$(sudo smartctl -l selftest "$disk" 2>/dev/null | grep "# 1" | head -1)\n    if [ -n "$last_test" ]; then\n        echo "$last_test" | grep -q "without error" && ok "$disk: Self-test PASSED" || alert "$disk: Self-test FAILED"\n    else\n        warn "$disk: Chưa có self-test"\n    fi\n}\n\ncheck_filesystem() {\n    log ""; log "${"{"}BOLD{'}'}${"{"}BLUE{'}'}═══ FILESYSTEM HEALTH ════════════════════════${"{"}NC{'}'}"\n    df -h | grep -v "tmpfs\\|devtmpfs\\|loop" | awk 'NR>1 {pct=$5; gsub(/%/,"",pct); if (pct+0 >= 90) printf "  ⚠️  %s: %s used (%s) — SẮP ĐẦY!\\n", $6, $5, $1; else printf "  ✅ %s: %s used (%s)\\n", $6, $5, $1}' | tee -a "$REPORT_FILE"\n    log ""; log "${"{"}BLUE{'}'}Inode usage:${"{"}NC{'}'}"\n    df -i | grep -v "tmpfs\\|devtmpfs\\|loop" | awk 'NR>1 {print "  "$6": "$5" inodes used"}' | tee -a "$REPORT_FILE"\n}\n\ncheck_kernel_errors() {\n    log ""; log "${"{"}BOLD{'}'}${"{"}BLUE{'}'}═══ KERNEL DISK ERRORS 24H ═══════════${"{"}NC{'}'}"\n    local errors=$(sudo journalctl -k --since "24 hours ago" --no-pager 2>/dev/null | grep -iE "i/o error|bad sector|ata.*error|disk.*error|failed command" | wc -l)\n    if [ "$errors" -gt 0 ]; then alert "Phát hiện $errors kernel disk errors trong 24h!"; else ok "Không có kernel disk errors trong 24 giờ qua"; fi\n}\n\nDISKS=$(lsblk -d -n -o NAME,TYPE | awk '$2=="disk" {print "/dev/"$1}')\nfor disk in $DISKS; do check_disk "$disk"; done\ncheck_filesystem\ncheck_kernel_errors\n\nlog ""; log "${"{"}BOLD{'}'}${"{"}CYAN{'}'}═══ TỔNG KẾT ══════════════════════════════════${"{"}NC{'}'}"\nif [ "$ALERTS" -eq 0 ]; then\n    log "${"{"}GREEN{'}'}${"{"}BOLD{'}'}✅ TẤT CẢ Ổ ĐĨA BÌNH THƯỜNG${"{"}NC{'}'}"\nelse\n    log "${"{"}RED{'}'}${"{"}BOLD{'}'}⚠️  CÓ $ALERTS CẢNH BÁO CẦN XỬ LÝ NGAY!${"{"}NC{'}'}"\n    log "  1. Backup dữ liệu NGAY"\n    log "  2. Chạy: sudo smartctl -t long /dev/sdX"\n    log "  3. Cân nhắc thay ổ nếu có bad sector"\nfi\nlog "Báo cáo đã lưu: $REPORT_FILE"\n\n# Chạy:\n# chmod +x ~/disk_health_check.sh\n# sudo bash ~/disk_health_check.sh`}
        />
    );
}

function SummaryGrid() {
    const groups = [
        {
            title: "smartctl",
            rows: [
                ["-i", "thông tin ổ"],
                ["-H", "health nhanh"],
                ["-A", "attributes"],
                ["-a", "full report"],
                ["-t short", "short test"],
                ["-t long", "long test"],
                ["-l selftest", "kết quả test"],
            ],
        },
        {
            title: "SMART nguy hiểm",
            rows: [
                ["ID 5", "Reallocated"],
                ["ID 187", "Reported_Uncorrect"],
                ["ID 197", "Pending"],
                ["ID 198", "Offline_Uncorrect"],
                ["ID 194", "Temperature"],
                ["ID 199", "CRC/cáp"],
            ],
        },
        {
            title: "fsck",
            rows: [
                ["fsck -n", "dry run"],
                ["fsck -fyC", "auto fix + progress"],
                ["e2fsck -p", "sửa an toàn"],
                ["fsck -A", "theo fstab"],
                ["xfs_repair", "cho XFS"],
            ],
        },
        {
            title: "badblocks",
            rows: [
                ["-s", "progress"],
                ["-v", "verbose"],
                ["-n", "non-destructive"],
                ["-w", "xóa dữ liệu"],
                ["e2fsck -l", "mark bad blocks"],
            ],
        },
        {
            title: "Workflow sự cố",
            rows: [
                ["dmesg", "xác nhận lỗi"],
                ["smartctl -H", "health"],
                ["smartctl -A", "chi tiết"],
                ["BACKUP", "ngay lập tức"],
                ["fsck", "sửa logic"],
                ["thay ổ", "nếu bad sector"],
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
            "smartctl -H /dev/sda trả về FAILED. Việc đầu tiên cần làm là gì?",
        options: [
            "Chạy mkfs ngay",
            "Backup dữ liệu ngay và chuẩn bị thay ổ",
            "Tắt SMART",
            "Xóa /var/log",
        ],
        correct: 1,
        explanation:
            "SMART FAILED là cảnh báo nghiêm trọng. Ưu tiên đầu tiên là backup dữ liệu trước khi thao tác thêm.",
    },
    {
        question: "Thuộc tính SMART nào báo sector hỏng đã được remap?",
        options: [
            "Power_On_Hours",
            "Reallocated_Sector_Ct",
            "Temperature_Celsius",
            "UDMA_CRC_Error_Count",
        ],
        correct: 1,
        explanation:
            "Reallocated_Sector_Ct > 0 nghĩa là đã có sector hỏng được remap, cần backup và theo dõi/thay ổ.",
    },
    {
        question: "Tại sao không chạy fsck trên phân vùng đang mount?",
        options: [
            "Vì fsck cần internet",
            "Vì filesystem đang thay đổi, có thể làm mất dữ liệu",
            "Vì fsck chỉ chạy trên Windows",
            "Vì fsck cần zip",
        ],
        correct: 1,
        explanation:
            "fsck sửa metadata filesystem. Nếu filesystem đang mount và được ghi, sửa chữa có thể làm hỏng dữ liệu.",
    },
    {
        question: "Muốn fsck phân vùng root / an toàn nhất thì làm thế nào?",
        options: [
            "Chạy fsck /dev/sda1 ngay trong terminal đang dùng",
            "Boot Recovery Mode hoặc Live USB rồi chạy fsck",
            "Dùng zip để nén root",
            "Xóa /forcefsck",
        ],
        correct: 1,
        explanation:
            "Root đang mount khi hệ thống chạy. Recovery Mode hoặc Live USB cho phép kiểm tra khi root không mount read-write.",
    },
    {
        question: "Temperature = 62°C với HDD có đáng lo không?",
        options: [
            "Không, càng nóng càng tốt",
            "Có, >55°C là quá nóng và cần xử lý",
            "Chỉ đáng lo với USB",
            "Không liên quan ổ đĩa",
        ],
        correct: 1,
        explanation:
            "HDD trên 55°C là quá nóng, làm giảm tuổi thọ và tăng rủi ro lỗi.",
    },
    {
        question:
            "fsck đưa unattached inode vào /lost+found. Điều đó nghĩa là gì?",
        options: [
            "File mồ côi được phục hồi nhưng mất tên gốc",
            "Ổ đã format xong",
            "SMART đã tắt",
            "Không có lỗi nào",
        ],
        correct: 0,
        explanation:
            "/lost+found chứa file/directory mồ côi mà fsck tìm lại được, thường đặt tên theo inode.",
    },
    {
        question:
            "Reallocated_Sector_Ct = 5 nhưng SMART vẫn PASSED. Ổ có hoàn toàn ổn không?",
        options: [
            "Hoàn toàn ổn, bỏ qua",
            "Không. Cần backup, theo dõi, chạy long test và chuẩn bị thay nếu tăng",
            "Cần chmod +x",
            "Chỉ cần unzip",
        ],
        correct: 1,
        explanation:
            "SMART overall có thể vẫn PASSED dù đã có bad sector. RAW_VALUE > 0 ở Reallocated là tín hiệu đáng lo.",
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
