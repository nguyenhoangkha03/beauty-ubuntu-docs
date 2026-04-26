import React, { useMemo, useState } from "react";
import {
    HardDrive,
    Layers,
    Terminal,
    AlertTriangle,
    Info,
    CheckCircle2,
    XCircle,
    Copy,
    Play,
    ChevronRight,
    RotateCcw,
    Sparkles,
    Database,
    Cpu,
    Server,
    ShieldAlert,
    FileText,
    ListChecks,
    Search,
    Wrench,
    FolderTree,
    Settings,
    GitBranch,
    Box,
    Eye,
    Trash2,
    PlusCircle,
    Save,
    DoorOpen,
    Zap,
    Code2,
    Gauge,
    Lock,
    CheckSquare,
    HelpCircle,
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
                                Disk · Partition · Storage
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 9
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 9.1
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" /> Bắt
                        đầu Phần 9 – Quản lý Đĩa & Hệ Thống File
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Phân Vùng Ổ Đĩa <br />
                        <span className="text-orange-500">
                            fdisk, parted, lsblk
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Bài này giúp bạn hiểu ổ đĩa vật lý, phân vùng, tên thiết
                        bị Linux, MBR/GPT, cách xem ổ bằng{" "}
                        <code className="text-orange-300">lsblk</code>, và cách
                        phân vùng an toàn bằng{" "}
                        <code className="text-orange-300">fdisk</code> hoặc{" "}
                        <code className="text-orange-300">parted</code>.
                    </p>
                </section>

                <section className="bg-red-500/10 border border-red-500/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-5 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                        <ShieldAlert size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Cảnh báo an toàn dữ liệu
                        </h3>
                        <p className="text-red-100 leading-relaxed">
                            Các lệnh phân vùng như{" "}
                            <code className="text-white">fdisk</code>,{" "}
                            <code className="text-white">parted mklabel</code>,{" "}
                            <code className="text-white">rm</code>,{" "}
                            <code className="text-white">mkfs</code> có thể làm
                            mất dữ liệu nếu dùng sai ổ. Trong bài học, hãy thực
                            hành trên máy ảo hoặc ổ test, luôn kiểm tra kỹ bằng{" "}
                            <code className="text-white">lsblk</code> trước khi
                            ghi thay đổi.
                        </p>
                    </div>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <DiskConceptCard />
                    <DeviceNameSimulator />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="blue"
                        icon={<Search size={22} />}
                        title="lsblk – Xem ổ đĩa & phân vùng"
                        subtitle="lsblk là lệnh an toàn để xem block devices, không cần root và không thay đổi dữ liệu."
                    />
                    <LsblkSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="purple"
                        icon={<Terminal size={22} />}
                        title="fdisk – Phân vùng ổ đĩa"
                        subtitle="fdisk là công cụ tương tác phổ biến. Thay đổi chỉ thật sự ghi vào đĩa khi bạn dùng lệnh w."
                    />
                    <FdiskSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="green"
                        icon={<Wrench size={22} />}
                        title="parted – Phân vùng nâng cao"
                        subtitle="parted mạnh hơn fdisk cho GPT, ổ lớn, resize và đặc biệt thân thiện với script nhờ chế độ -s."
                    />
                    <PartedSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="orange"
                        icon={<CheckSquare size={22} />}
                        title="Quy trình thực tế – Chuẩn bị ổ đĩa mới"
                        subtitle="Từ lúc cắm SSD mới đến khi có phân vùng sẵn sàng để format và mount."
                    />
                    <WorkflowSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="cyan"
                        icon={<Server size={22} />}
                        title="Một số tình huống thực tế"
                        subtitle="Xem ổ trên VPS/cloud, kiểm tra ổ đã có phân vùng chưa, và script prep_disk.sh tự động."
                    />
                    <RealScenariosSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="pink"
                        icon={<Gauge size={22} />}
                        title="fdisk vs parted – Dùng cái nào?"
                        subtitle="So sánh nhanh để chọn đúng công cụ: thao tác nhanh, script, GPT, ổ lớn hoặc resize."
                    />
                    <CompareToolsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="teal"
                        icon={<ListChecks size={22} />}
                        title="Tóm tắt nhanh"
                        subtitle="Các lệnh xem thông tin, fdisk, parted và bước cần làm sau khi thay đổi bảng phân vùng."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <CheckCircle2 className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức bài 9.1
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Ôn lại tên thiết bị, MBR/GPT, lsblk, fdisk,
                                    parted và quy trình chuẩn bị ổ mới.
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
                        Bạn đã biết tạo phân vùng. Bước tiếp theo là tạo
                        filesystem và mount ổ đĩa vào hệ thống.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                        Bài tiếp theo: 9.2 — Format & Mount ổ đĩa{" "}
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

function DiskConceptCard() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-orange-500/15 text-orange-400 rounded-2xl flex items-center justify-center">
                    <HardDrive size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        Phân vùng là gì?
                    </h3>
                    <p className="text-slate-500 text-sm">
                        Chia một ổ vật lý thành nhiều vùng logic
                    </p>
                </div>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 mb-5">
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                    <Database size={18} className="text-orange-400" /> Ổ đĩa vật
                    lý
                </div>
                <div className="space-y-3">
                    <PartitionBar
                        label="Partition 1"
                        mount="/boot"
                        width="18%"
                    />
                    <PartitionBar
                        label="Partition 2"
                        mount="/ root"
                        width="35%"
                    />
                    <PartitionBar
                        label="Partition 3"
                        mount="/home"
                        width="65%"
                    />
                    <PartitionBar
                        label="Partition 4"
                        mount="swap"
                        width="28%"
                    />
                </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
                Hãy tưởng tượng một mảnh đất lớn được chia thành nhiều lô nhỏ.
                Mỗi lô có thể format khác nhau, mount vào vị trí khác nhau, và
                phục vụ mục đích khác nhau.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mt-5">
                <MiniCard
                    title="MBR"
                    desc="Cũ, tối đa 4 primary, tối đa 2TB, BIOS"
                />
                <MiniCard
                    title="GPT"
                    desc="Mới, tối đa 128 phân vùng, >2TB, UEFI"
                    highlight
                />
            </div>
        </div>
    );
}

function PartitionBar({ label, mount, width }) {
    return (
        <div>
            <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">{label}</span>
                <code className="text-orange-300">{mount}</code>
            </div>
            <div className="h-4 bg-slate-900 border border-slate-800 rounded-full overflow-hidden">
                <div
                    className="h-full bg-orange-500/70 rounded-full"
                    style={{ width }}
                />
            </div>
        </div>
    );
}

function MiniCard({ title, desc, highlight }) {
    return (
        <div
            className={`rounded-xl border p-4 ${highlight ? "bg-green-500/10 border-green-500/20" : "bg-slate-950 border-slate-800"}`}
        >
            <div className="font-bold text-white">{title}</div>
            <div className="text-xs text-slate-500 mt-1">{desc}</div>
        </div>
    );
}

function DeviceNameSimulator() {
    const [type, setType] = useState("sata");
    const data = {
        sata: {
            disk: "/dev/sda",
            part: "/dev/sda1",
            desc: "Ổ SATA/USB thứ 1. Phân vùng thêm số trực tiếp.",
        },
        nvme: {
            disk: "/dev/nvme0n1",
            part: "/dev/nvme0n1p1",
            desc: "Ổ NVMe thứ 1. Phân vùng thêm p + số.",
        },
        virt: {
            disk: "/dev/vda",
            part: "/dev/vda1",
            desc: "Ổ ảo thường gặp trên VPS/VM.",
        },
        ide: {
            disk: "/dev/hda",
            part: "/dev/hda1",
            desc: "Ổ IDE cũ, ít gặp trên máy hiện đại.",
        },
    };
    const item = data[type];
    return (
        <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <GitBranch className="text-orange-400" /> Tên thiết bị trong
                Linux
            </h3>
            <p className="text-slate-400 mb-6">
                Chọn loại ổ để xem cách Linux đặt tên ổ và phân vùng.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-5">
                {Object.entries({
                    sata: "SATA/USB",
                    nvme: "NVMe",
                    virt: "VPS/VM",
                    ide: "IDE cũ",
                }).map(([key, label]) => (
                    <button
                        key={key}
                        onClick={() => setType(key)}
                        className={`p-3 rounded-xl border font-bold text-sm ${type === key ? "bg-orange-500 text-white border-orange-500" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="bg-black border border-slate-800 rounded-2xl p-5 font-mono space-y-4">
                <div>
                    <span className="text-slate-500">Ổ đĩa:</span>{" "}
                    <span className="text-green-400 text-xl font-bold">
                        {item.disk}
                    </span>
                </div>
                <div>
                    <span className="text-slate-500">Phân vùng:</span>{" "}
                    <span className="text-orange-300 text-xl font-bold">
                        {item.part}
                    </span>
                </div>
            </div>
            <div className="mt-5 bg-slate-950 border border-slate-800 rounded-2xl p-4 text-sm text-slate-400">
                {item.desc}
            </div>
        </div>
    );
}

function LsblkSection() {
    const [tab, setTab] = useState("basic");
    const tabs = [
        ["basic", "lsblk"],
        ["full", "lsblk -f"],
        ["custom", "Tùy chọn"],
        ["other", "Lệnh khác"],
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
                {tab === "basic" && <LsblkBasic />}
                {tab === "full" && <LsblkFull />}
                {tab === "custom" && <LsblkCustom />}
                {tab === "other" && <OtherDiskCommands />}
            </div>
        </div>
    );
}

function LsblkBasic() {
    return (
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-6">
            <CodeBlock
                title="lsblk"
                code={`lsblk\n\n# NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\n# sda           8:0    0   500G  0 disk\n# ├─sda1        8:1    0   512M  0 part /boot/efi\n# ├─sda2        8:2    0     1G  0 part /boot\n# ├─sda3        8:3    0    50G  0 part /\n# └─sda4        8:4    0   448G  0 part /home\n# sdb           8:16   0     2T  0 disk\n# └─sdb1        8:17   0     2T  0 part /data\n# sr0          11:0    1  1024M  0 rom`}
            />
            <CheatCard
                title="Cột quan trọng"
                rows={[
                    ["NAME", "Tên thiết bị"],
                    ["SIZE", "Dung lượng"],
                    ["TYPE", "disk / part / rom / lvm"],
                    ["MOUNTPOINT", "Đang mount ở đâu"],
                ]}
            />
        </div>
    );
}
function LsblkFull() {
    return (
        <CodeBlock
            title="lsblk -f"
            code={`lsblk -f\n\n# NAME    FSTYPE LABEL UUID        MOUNTPOINT\n# sda\n# ├─sda1  vfat   EFI   1234-ABCD   /boot/efi\n# ├─sda2  ext4         a1b2c3d4... /boot\n# ├─sda3  ext4         e5f6g7h8... /\n# └─sda4  ext4         i9j0k1l2... /home\n# sdb\n# └─sdb1  xfs          m3n4o5p6... /data`}
            note="lsblk -f rất hữu ích trước khi sửa /etc/fstab vì nó hiện filesystem và UUID."
        />
    );
}
function LsblkCustom() {
    return (
        <CodeBlock
            title="lsblk-options.sh"
            code={`lsblk -b\nlsblk -d -o NAME,MODEL,SERIAL,SIZE,TRAN\nlsblk -o NAME,SIZE,FSTYPE,TYPE,MOUNTPOINT,LABEL,UUID\nlsblk -d\nlsblk /dev/sda`}
        />
    );
}
function OtherDiskCommands() {
    return (
        <CodeBlock
            title="other-disk-commands.sh"
            code={`sudo fdisk -l\nsudo fdisk -l /dev/sda\nsudo parted -l\nsudo blkid\nsudo blkid /dev/sda1\nsudo hdparm -I /dev/sda\nsudo nvme list\nsudo lshw -class disk -short`}
        />
    );
}

function FdiskSection() {
    const [step, setStep] = useState(0);
    const steps = [
        ["p", "print", "Xem bảng phân vùng hiện tại"],
        ["g", "gpt", "Tạo bảng phân vùng GPT mới"],
        ["n", "new", "Tạo phân vùng mới"],
        ["t", "type", "Đổi loại phân vùng"],
        ["w", "write", "Lưu thay đổi vào đĩa"],
        ["q", "quit", "Thoát không lưu"],
    ];
    return (
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 h-fit">
                <h4 className="font-bold text-white mb-4">
                    Lệnh fdisk quan trọng
                </h4>
                <div className="space-y-2">
                    {steps.map(([key, name, desc], i) => (
                        <button
                            key={key}
                            onClick={() => setStep(i)}
                            className={`w-full text-left p-3 rounded-xl border transition-all ${step === i ? "bg-purple-500/10 border-purple-500/40 text-white" : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"}`}
                        >
                            <code className="text-orange-300 font-bold mr-2">
                                {key}
                            </code>{" "}
                            <span className="font-semibold">{name}</span>
                            <div className="text-xs text-slate-500 mt-1">
                                {desc}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
            <div className="space-y-6">
                <CodeBlock
                    title="fdisk-create-partitions.txt"
                    code={`sudo fdisk /dev/sdb\n\nCommand: p\nCommand: g\nCommand: n\nPartition number: 1\nFirst sector: 2048\nLast sector: +512M\n\nCommand: n\nPartition number: 2\nFirst sector: Enter\nLast sector: +50G\n\nCommand: n\nPartition number: 3\nFirst sector: Enter\nLast sector: Enter\n\nCommand: p\nCommand: t\nPartition number: 1\nPartition type: 1\n\nCommand: w\n\nsudo partprobe /dev/sdb`}
                    note="Sai thao tác nhưng chưa w thì dùng q để thoát an toàn, không lưu thay đổi."
                />
                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 text-sm text-red-100 flex gap-3">
                    <AlertTriangle
                        className="text-red-400 shrink-0"
                        size={20}
                    />{" "}
                    <p>
                        <code className="text-white">w</code> là lệnh thực sự
                        ghi bảng phân vùng vào đĩa. Hãy kiểm tra bằng{" "}
                        <code className="text-white">p</code> trước khi dùng{" "}
                        <code className="text-white">w</code>.
                    </p>
                </div>
            </div>
        </div>
    );
}

function PartedSection() {
    const [tab, setTab] = useState("interactive");
    const tabs = [
        ["interactive", "Tương tác"],
        ["script", "Script -s"],
        ["flags", "Flag & name"],
    ];
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                {tabs.map(([id, label]) => (
                    <button
                        key={id}
                        onClick={() => setTab(id)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold ${tab === id ? "bg-green-500 text-white" : "bg-slate-900 text-slate-400 hover:text-slate-200"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="p-5">
                {tab === "interactive" && (
                    <CodeBlock
                        title="parted-interactive.sh"
                        code={`sudo parted /dev/sdb\n\n(parted) print\n(parted) print free\n(parted) unit GB print\n\n(parted) mklabel gpt\n(parted) mklabel msdos\n\n(parted) mkpart primary ext4 0% 50%\n(parted) mkpart primary ext4 50% 100%\n\n(parted) mkpart primary ext4 1MiB 512MiB\n(parted) mkpart primary ext4 512MiB 50GiB\n(parted) mkpart primary ext4 50GiB 100%\n\n(parted) rm 1\n(parted) quit`}
                    />
                )}
                {tab === "script" && (
                    <CodeBlock
                        title="parted-non-interactive.sh"
                        code={`sudo parted -s /dev/sdb mklabel gpt\nsudo parted -s /dev/sdb mkpart primary ext4 1MiB 512MiB\nsudo parted -s /dev/sdb mkpart primary ext4 512MiB 50GiB\nsudo parted -s /dev/sdb mkpart primary ext4 50GiB 100%\nsudo parted -s /dev/sdb set 1 boot on\n\nsudo parted -s /dev/sdb print\n\nsudo parted -s /dev/sdb --align optimal mkpart primary ext4 0% 100%`}
                    />
                )}
                {tab === "flags" && (
                    <CodeBlock
                        title="parted-flags-name.sh"
                        code={`sudo parted /dev/sdb\n\n(parted) set 1 boot on\n(parted) set 1 esp on\n\n# Đổi tên phân vùng, chỉ GPT\n(parted) name 1 "EFI"\n(parted) name 2 "root"\n(parted) name 3 "home"\n\n(parted) print\n(parted) quit`}
                    />
                )}
            </div>
        </div>
    );
}

function WorkflowSection() {
    const [step, setStep] = useState(0);
    const steps = [
        ["Xác nhận ổ mới", "lsblk và fdisk -l /dev/sdb để chắc chắn đúng ổ."],
        ["Tạo GPT", "sudo parted -s /dev/sdb mklabel gpt"],
        ["Tạo phân vùng", "Một phân vùng 100% hoặc chia data/media/bak."],
        ["partprobe", "Thông báo kernel cập nhật bảng phân vùng."],
        ["Kiểm tra", "lsblk /dev/sdb và parted print."],
        ["Format", "mkfs.ext4 /dev/sdb1, học kỹ ở bài 9.2."],
        ["Mount", "mkdir /data, mount /dev/sdb1 /data, df -h."],
    ];
    return (
        <div className="grid lg:grid-cols-[320px_1fr] gap-6">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3 space-y-2 h-fit">
                {steps.map(([title], i) => (
                    <button
                        key={title}
                        onClick={() => setStep(i)}
                        className={`w-full text-left p-4 rounded-xl border ${step === i ? "bg-orange-500/10 border-orange-500/40 text-white" : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"}`}
                    >
                        <span className="font-bold text-orange-300 mr-2">
                            {i + 1}
                        </span>
                        {title}
                    </button>
                ))}
            </div>
            <div className="space-y-6">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-white mb-2">
                        Bước {step + 1}: {steps[step][0]}
                    </h4>
                    <p className="text-slate-400">{steps[step][1]}</p>
                </div>
                <CodeBlock
                    title="prepare-new-disk.sh"
                    code={`# Tình huống: Cắm thêm SSD 1TB ở /dev/sdb\n\nlsblk\nsudo fdisk -l /dev/sdb\n\nsudo parted -s /dev/sdb mklabel gpt\n\n# Phương án A: 1 phân vùng dùng hết ổ\nsudo parted -s /dev/sdb mkpart primary ext4 0% 100%\n\n# Phương án B: Chia nhiều phân vùng\nsudo parted -s /dev/sdb mkpart data  ext4 0%   60%\nsudo parted -s /dev/sdb mkpart media ext4 60%  90%\nsudo parted -s /dev/sdb mkpart bak   ext4 90%  100%\n\nsudo partprobe /dev/sdb\nlsblk /dev/sdb\nsudo parted /dev/sdb print\n\n# Bước 9.2 sẽ học kỹ:\nsudo mkfs.ext4 /dev/sdb1\nsudo mkdir -p /data\nsudo mount /dev/sdb1 /data\ndf -h /data`}
                />
            </div>
        </div>
    );
}

function RealScenariosSection() {
    const [tab, setTab] = useState("vps");
    const tabs = [
        ["vps", "VPS/Cloud"],
        ["check", "Kiểm tra phân vùng"],
        ["script", "prep_disk.sh"],
    ];
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                {tabs.map(([id, label]) => (
                    <button
                        key={id}
                        onClick={() => setTab(id)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold ${tab === id ? "bg-cyan-500 text-white" : "bg-slate-900 text-slate-400 hover:text-slate-200"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="p-5">
                {tab === "vps" && (
                    <CodeBlock
                        title="vps-lsblk.txt"
                        code={`lsblk\n\n# NAME    SIZE  TYPE  MOUNTPOINT\n# vda      50G  disk\n# └─vda1   50G  part  /\n# vdb     100G  disk           ← ổ data mới vừa gắn thêm`}
                    />
                )}
                {tab === "check" && (
                    <CodeBlock
                        title="check-partition.sh"
                        code={`lsblk /dev/sdb\n# Nếu không thấy phân vùng con → chưa phân vùng\n\nsudo fdisk -l /dev/sdb | grep "Disklabel type"\n# Disklabel type: gpt   → đã có GPT\n# không có dòng này      → ổ trống\n\nsudo parted /dev/sdb print 2>&1 | head -5`}
                    />
                )}
                {tab === "script" && <PrepDiskScript />}
            </div>
        </div>
    );
}

function PrepDiskScript() {
    return (
        <CodeBlock
            title="prep_disk.sh"
            code={`#!/bin/bash\nset -euo pipefail\n\nif [ $# -ne 2 ]; then\n    echo "Dùng: $0 <ổ_đĩa> <điểm_mount>"\n    echo "Ví dụ: $0 /dev/sdb /data"\n    exit 1\nfi\n\nO_DIA=$1\nMOUNT=$2\n\n[ -b "$O_DIA" ] || { echo "Lỗi: $O_DIA không tồn tại!"; exit 1; }\n\nif mount | grep -q "$O_DIA"; then\n    echo "Lỗi: $O_DIA đang được mount!"\n    exit 1\nfi\n\necho "Chuẩn bị ổ đĩa: $O_DIA"\necho "Điểm mount    : $MOUNT"\nread -p "⚠ DỮ LIỆU TRÊN $O_DIA SẼ BỊ XOÁ! Tiếp tục? (yes/no): " xn\n[ "$xn" = "yes" ] || { echo "Đã huỷ."; exit 0; }\n\nsudo parted -s "$O_DIA" mklabel gpt\nsudo parted -s "$O_DIA" mkpart primary ext4 0% 100%\nsudo partprobe "$O_DIA"\nsleep 2\n\nPHAN_VUNG="${"{"}O_DIA{'}'}1"\n[ -b "${"{"}O_DIA{'}'}p1" ] && PHAN_VUNG="${"{"}O_DIA{'}'}p1"\n\nsudo mkfs.ext4 -L "$(basename $MOUNT)" "$PHAN_VUNG"\nsudo mkdir -p "$MOUNT"\nsudo mount "$PHAN_VUNG" "$MOUNT"\n\nUUID=$(sudo blkid -s UUID -o value "$PHAN_VUNG")\necho "UUID=$UUID $MOUNT ext4 defaults 0 2" | sudo tee -a /etc/fstab\n\necho "✓ Hoàn tất!"\ndf -h "$MOUNT"`}
        />
    );
}

function CompareToolsSection() {
    const rows = [
        ["Giao diện", "Tương tác", "Tương tác + dòng lệnh"],
        ["Ổ > 2TB", "Từ bản mới", "Có, tốt hơn"],
        ["GPT", "Có", "Có, tốt hơn"],
        ["Dùng trong script", "Khó hơn", "Dễ với -s"],
        ["Resize", "Không", "Có"],
        ["Khuyến nghị", "Thao tác nhanh", "Script, GPT, ổ lớn"],
    ];
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-950 border-b border-slate-800 text-sm font-bold text-white">
                <div className="p-4">Tiêu chí</div>
                <div className="p-4">fdisk</div>
                <div className="p-4">parted</div>
            </div>
            {rows.map(([a, b, c]) => (
                <div
                    key={a}
                    className="grid grid-cols-3 border-b border-slate-800 last:border-0 text-sm"
                >
                    <div className="p-4 text-slate-400">{a}</div>
                    <div className="p-4 text-slate-300">{b}</div>
                    <div className="p-4 text-orange-300">{c}</div>
                </div>
            ))}
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
            title: "Xem thông tin",
            rows: [
                ["lsblk", "xem nhanh"],
                ["lsblk -f", "filesystem, UUID"],
                ["fdisk -l", "chi tiết"],
                ["parted -l", "xem bằng parted"],
                ["blkid", "UUID"],
            ],
        },
        {
            title: "fdisk",
            rows: [
                ["p", "print"],
                ["n", "new"],
                ["d", "delete"],
                ["g", "GPT"],
                ["t", "type"],
                ["w", "write"],
                ["q", "quit"],
            ],
        },
        {
            title: "parted",
            rows: [
                ["print", "xem"],
                ["mklabel gpt", "tạo GPT"],
                ["mkpart", "tạo phân vùng"],
                ["rm 1", "xóa phân vùng"],
                ["-s", "script mode"],
            ],
        },
        {
            title: "Sau khi đổi",
            rows: [
                ["partprobe", "cập nhật kernel"],
                ["lsblk /dev/sdb", "kiểm tra"],
                ["mkfs.ext4", "format, bài 9.2"],
                ["mount", "gắn vào hệ thống"],
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
            "Lệnh nào xem ổ đĩa và phân vùng dạng cây, an toàn, không cần root?",
        options: ["mkfs.ext4", "lsblk", "fdisk /dev/sdb", "mount"],
        correct: 1,
        explanation:
            "lsblk dùng để liệt kê block devices, không thay đổi dữ liệu.",
    },
    {
        question:
            "Phân vùng đầu tiên của ổ NVMe /dev/nvme0n1 thường tên là gì?",
        options: [
            "/dev/nvme0n11",
            "/dev/nvme0n1p1",
            "/dev/nvme0p1",
            "/dev/sda1",
        ],
        correct: 1,
        explanation: "NVMe dùng hậu tố p + số: /dev/nvme0n1p1.",
    },
    {
        question:
            "Chuẩn bảng phân vùng nào được khuyến nghị cho máy mới và ổ > 2TB?",
        options: ["MBR", "GPT", "FAT", "swap"],
        correct: 1,
        explanation:
            "GPT hỗ trợ nhiều phân vùng hơn, ổ lớn hơn 2TB và phù hợp UEFI.",
    },
    {
        question: "Trong fdisk, lệnh nào thực sự ghi thay đổi vào đĩa?",
        options: ["p", "n", "q", "w"],
        correct: 3,
        explanation:
            "w = write. Đây là bước nguy hiểm, cần kiểm tra kỹ trước khi dùng.",
    },
    {
        question: "parted -s hữu ích nhất khi nào?",
        options: [
            "Khi muốn xem man page",
            "Khi dùng parted trong script không tương tác",
            "Khi muốn tắt ổ cứng",
            "Khi muốn mount ổ",
        ],
        correct: 1,
        explanation:
            "-s là script mode, giúp chạy parted không cần giao diện tương tác.",
    },
    {
        question:
            "Sau khi thay đổi bảng phân vùng, lệnh nào thông báo kernel đọc lại bảng phân vùng?",
        options: ["partprobe", "lsblk -f", "chmod +x", "df -h"],
        correct: 0,
        explanation:
            "partprobe /dev/sdb yêu cầu kernel cập nhật thông tin bảng phân vùng.",
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
