import React, { useMemo, useState } from "react";
import {
    HardDrive,
    Terminal,
    AlertTriangle,
    Info,
    CheckCircle2,
    XCircle,
    Copy,
    ChevronRight,
    RotateCcw,
    Sparkles,
    Database,
    ShieldAlert,
    FileText,
    ListChecks,
    Search,
    Wrench,
    FolderTree,
    Settings,
    Save,
    Play,
    Usb,
    Server,
    Lock,
    Eye,
    Trash2,
    RefreshCw,
    FileWarning,
    Bug,
    Power,
    Archive,
    KeyRound,
    FolderOpen,
    MemoryStick,
    PackageCheck,
    Gauge,
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
                                Filesystem · Mount · fstab
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 9
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 9.2
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" /> Từ
                        phân vùng trống đến ổ đĩa dùng được
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Format & Mount Ổ Đĩa <br />
                        <span className="text-orange-500">
                            mkfs, mount, umount, fstab
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Sau khi có phân vùng như{" "}
                        <code className="text-orange-300">/dev/sdb1</code>, bạn
                        cần tạo filesystem bằng{" "}
                        <code className="text-orange-300">mkfs</code>, mount vào
                        một thư mục, rồi thêm vào{" "}
                        <code className="text-orange-300">/etc/fstab</code> để
                        tự mount khi boot.
                    </p>
                </section>

                <section className="bg-red-500/10 border border-red-500/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-5 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                        <ShieldAlert size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Cảnh báo: mkfs sẽ xoá dữ liệu trên phân vùng
                        </h3>
                        <p className="text-red-100 leading-relaxed">
                            <code className="text-white">
                                mkfs.ext4 /dev/sdb1
                            </code>
                            , <code className="text-white">mkfs.xfs</code>,{" "}
                            <code className="text-white">mkfs.exfat</code> là
                            lệnh format. Nếu chọn sai phân vùng, dữ liệu cũ sẽ
                            mất. Luôn kiểm tra bằng{" "}
                            <code className="text-white">lsblk -f</code> và{" "}
                            <code className="text-white">blkid</code> trước khi
                            chạy.
                        </p>
                    </div>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <WorkflowCard />
                    <FilesystemPicker />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="blue"
                        icon={<Wrench size={22} />}
                        title="mkfs – Tạo filesystem"
                        subtitle="Format phân vùng thành ext4, xfs, btrfs, fat32, exfat, ntfs hoặc swap."
                    />
                    <MkfsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="green"
                        icon={<FolderOpen size={22} />}
                        title="mount – Gắn filesystem"
                        subtitle="Mount biến một phân vùng thành một thư mục trong cây / để đọc/ghi file bình thường."
                    />
                    <MountSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="purple"
                        icon={<RefreshCw size={22} />}
                        title="umount – Tháo gắn kết"
                        subtitle="Tháo filesystem an toàn, xử lý lỗi device is busy bằng lsof, fuser hoặc cd ra khỏi thư mục mount."
                    />
                    <UmountSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="orange"
                        icon={<FileText size={22} />}
                        title="/etc/fstab – Tự động mount khi boot"
                        subtitle="fstab là file cấu hình quan trọng. Sai fstab có thể khiến máy boot lỗi, nên luôn backup và test bằng mount -a."
                    />
                    <FstabSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="cyan"
                        icon={<Server size={22} />}
                        title="Ví dụ thực tế đầy đủ"
                        subtitle="Chuẩn bị ổ dữ liệu /data cho server và mount USB/ổ ngoài tạm thời."
                    />
                    <RealExamplesSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="red"
                        icon={<Bug size={22} />}
                        title="Kiểm tra & xử lý lỗi fstab"
                        subtitle="Cách test fstab, khôi phục khi boot lỗi, kiểm tra UUID sau khi format lại và dùng findmnt --verify."
                    />
                    <FstabTroubleshootingSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="yellow"
                        icon={<PackageCheck size={22} />}
                        title="Script tiện ích – mount_info.sh"
                        subtitle="Một script nhỏ để xem tổng quan ổ đĩa, filesystem, UUID, swap, dung lượng và nội dung fstab."
                    />
                    <UtilityScriptSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="8"
                        color="teal"
                        icon={<ListChecks size={22} />}
                        title="Tóm tắt nhanh"
                        subtitle="Các lệnh mkfs, mount, umount và fstab cần nhớ sau bài 9.2."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <CheckCircle2 className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức bài 9.2
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Ôn lại format, mount, umount, UUID, fstab,
                                    mount -a và xử lý lỗi busy.
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
                        Bạn đã biết format và mount ổ đĩa. Tiếp theo là quản lý
                        dung lượng linh hoạt hơn bằng LVM.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                        Bài tiếp theo: 9.3 — LVM Logical Volume Manager{" "}
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
        red: "bg-red-500/20 text-red-400",
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

function WorkflowCard() {
    const [step, setStep] = useState(0);
    const steps = [
        ["Phân vùng mới", "/dev/sdb1", "Một partition đã tạo ở bài 9.1."],
        [
            "mkfs",
            "sudo mkfs.ext4 /dev/sdb1",
            "Tạo filesystem để Linux có thể lưu file.",
        ],
        [
            "mount",
            "sudo mount /dev/sdb1 /data",
            "Gắn filesystem vào cây thư mục /.",
        ],
        ["Sử dụng", "ls /data", "Đọc/ghi file như thư mục bình thường."],
        ["fstab", "UUID=... /data ext4 ...", "Tự động mount lại khi boot."],
    ];
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-orange-500/15 text-orange-400 rounded-2xl flex items-center justify-center">
                    <HardDrive size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        Luồng làm việc
                    </h3>
                    <p className="text-slate-500 text-sm">
                        Partition → Filesystem → Mount → fstab
                    </p>
                </div>
            </div>
            <div className="space-y-3 mb-5">
                {steps.map(([title], i) => (
                    <button
                        key={title}
                        onClick={() => setStep(i)}
                        className={`w-full text-left rounded-2xl border p-4 transition-all ${step === i ? "bg-orange-500/10 border-orange-500/40" : "bg-slate-950 border-slate-800 hover:border-slate-700"}`}
                    >
                        <div className="flex items-center gap-3">
                            <span
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step === i ? "bg-orange-500 text-white" : "bg-slate-800 text-slate-500"}`}
                            >
                                {i + 1}
                            </span>
                            <span className="font-bold text-white">
                                {title}
                            </span>
                        </div>
                    </button>
                ))}
            </div>
            <div className="bg-black border border-slate-800 rounded-2xl p-5">
                <div className="text-xs text-slate-500 mb-2">
                    Bước {step + 1}
                </div>
                <code className="text-green-400 font-mono text-sm block mb-3">
                    {steps[step][1]}
                </code>
                <p className="text-slate-400 text-sm">{steps[step][2]}</p>
            </div>
        </div>
    );
}

function FilesystemPicker() {
    const [fs, setFs] = useState("ext4");
    const data = {
        ext4: [
            "Chuẩn Linux phổ biến nhất",
            'sudo mkfs.ext4 -L "data-disk" /dev/sdb1',
        ],
        xfs: [
            "Hiệu năng cao, tốt cho file lớn",
            'sudo mkfs.xfs -L "fast-data" /dev/sdb1',
        ],
        btrfs: [
            "Hiện đại, snapshot, subvolume",
            'sudo mkfs.btrfs -L "snap-data" /dev/sdb1',
        ],
        fat32: [
            "Tương thích rộng, nhưng giới hạn 4GB/file",
            'sudo mkfs.fat -F 32 -n "USB-DRIVE" /dev/sdb1',
        ],
        exfat: [
            "USB dung lượng lớn, file > 4GB",
            'sudo mkfs.exfat -n "BIG-USB" /dev/sdb1',
        ],
        swap: [
            "Bộ nhớ ảo, không mount như thư mục",
            "sudo mkswap /dev/sdb2 && sudo swapon /dev/sdb2",
        ],
    };
    return (
        <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Database className="text-orange-400" /> Chọn filesystem phù hợp
            </h3>
            <p className="text-slate-400 mb-6">
                Bấm để xem dùng filesystem nào và lệnh format tương ứng.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                {Object.keys(data).map((key) => (
                    <button
                        key={key}
                        onClick={() => setFs(key)}
                        className={`p-3 rounded-xl border font-bold text-sm uppercase ${fs === key ? "bg-orange-500 text-white border-orange-500" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"}`}
                    >
                        {key}
                    </button>
                ))}
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                <div className="text-sm text-slate-400 mb-3">{data[fs][0]}</div>
                <pre className="bg-black/50 border border-slate-800 rounded-xl p-4 text-sm text-green-400 overflow-x-auto">
                    <code>{data[fs][1]}</code>
                </pre>
            </div>
        </div>
    );
}

function MkfsSection() {
    const [tab, setTab] = useState("ext4");
    const tabs = [
        ["ext4", "ext4"],
        ["xfs", "xfs"],
        ["fat", "FAT32/exFAT"],
        ["swap", "swap"],
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
                {tab === "ext4" && <Ext4Section />}
                {tab === "xfs" && <XfsSection />}
                {tab === "fat" && <FatSection />}
                {tab === "swap" && <SwapSection />}
            </div>
        </div>
    );
}

function Ext4Section() {
    return (
        <CodeBlock
            title="mkfs-ext4.sh"
            code={`# Format đơn giản nhất\nsudo mkfs.ext4 /dev/sdb1\n\n# Format với nhãn dễ nhận biết\nsudo mkfs.ext4 -L "data-disk" /dev/sdb1\nsudo mkfs.ext4 -L "backup"    /dev/sdb2\nsudo mkfs.ext4 -L "media"     /dev/sdb3\n\n# Block size tuỳ chỉnh\nsudo mkfs.ext4 -b 4096 /dev/sdb1\nsudo mkfs.ext4 -b 1024 /dev/sdb1\n\n# Xem thông tin filesystem\nsudo tune2fs -l /dev/sdb1\nsudo dumpe2fs /dev/sdb1 | head -30`}
            note="ext4 là lựa chọn mặc định tốt nhất cho đa số server Ubuntu/Linux."
        />
    );
}
function XfsSection() {
    return (
        <CodeBlock
            title="mkfs-xfs.sh"
            code={`sudo mkfs.xfs /dev/sdb1\nsudo mkfs.xfs -L "fast-data" /dev/sdb1\nsudo mkfs.xfs -f /dev/sdb1\n\nsudo xfs_info /dev/sdb1`}
            note="mkfs.xfs thường cần -f nếu phân vùng đã có filesystem cũ."
        />
    );
}
function FatSection() {
    return (
        <CodeBlock
            title="mkfs-fat-exfat.sh"
            code={`sudo apt install dosfstools exfatprogs\n\n# FAT32 cho USB/thẻ nhớ nhỏ\nsudo mkfs.fat -F 32 /dev/sdb1\nsudo mkfs.vfat /dev/sdb1\nsudo mkfs.fat -F 32 -n "USB-DRIVE" /dev/sdb1\n\n# exFAT cho USB lớn, file > 4GB\nsudo mkfs.exfat -n "BIG-USB" /dev/sdb1`}
        />
    );
}
function SwapSection() {
    return (
        <CodeBlock
            title="swap.sh"
            code={`sudo mkswap /dev/sdb2\nsudo swapon /dev/sdb2\n\nswapon --show\nfree -h\n\nsudo swapoff /dev/sdb2`}
        />
    );
}

function MountSection() {
    const [tab, setTab] = useState("basic");
    const tabs = [
        ["basic", "Mount cơ bản"],
        ["opts", "Tùy chọn"],
        ["view", "Xem mount"],
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
                {tab === "basic" && (
                    <CodeBlock
                        title="mount-basic.sh"
                        code={`sudo mkdir -p /data\nsudo mkdir -p /mnt/usb\nsudo mkdir -p /mnt/backup\n\n# Tự nhận filesystem\nsudo mount /dev/sdb1 /data\n\n# Chỉ định filesystem\nsudo mount -t ext4 /dev/sdb1 /data\nsudo mount -t xfs  /dev/sdb1 /data\nsudo mount -t vfat /dev/sdb1 /mnt/usb\n\n# Mount bằng UUID\nsudo blkid /dev/sdb1\nsudo mount UUID="a1b2c3d4-e5f6-7890-abcd-ef1234567890" /data\n\n# Mount bằng label\nsudo mount LABEL="data-disk" /data`}
                        note="Điểm mount là thư mục đã tạo sẵn. Sau khi mount, nội dung thiết bị sẽ hiện tại thư mục đó."
                    />
                )}
                {tab === "opts" && (
                    <CodeBlock
                        title="mount-options.sh"
                        code={`sudo mount -o ro /dev/sdb1 /data\nsudo mount -o rw /dev/sdb1 /data\nsudo mount -o noexec /dev/sdb1 /data\nsudo mount -o noatime /dev/sdb1 /data\n\n# Kết hợp nhiều option\nsudo mount -o rw,noatime,noexec /dev/sdb1 /data\n\n# Remount không cần umount\nsudo mount -o remount,ro /data\nsudo mount -o remount,rw /data\n\n# Mount tất cả từ fstab\nsudo mount -a`}
                    />
                )}
                {tab === "view" && (
                    <CodeBlock
                        title="view-mounted.sh"
                        code={`lsblk\ndf -h\nmount | grep "^/dev"\nfindmnt\nfindmnt /data\nfindmnt -t ext4`}
                    />
                )}
            </div>
        </div>
    );
}

function UmountSection() {
    return (
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
            <CodeBlock
                title="umount.sh"
                code={`# Tháo theo điểm mount\nsudo umount /data\nsudo umount /mnt/usb\n\n# Tháo theo thiết bị\nsudo umount /dev/sdb1\n\n# Force hoặc lazy umount\nsudo umount -f /data\nsudo umount -l /data\n\n# Lỗi thường gặp: target is busy\nsudo umount /data\n# umount: /data: target is busy\n\n# Tìm process đang dùng\nlsof +D /data\nfuser -m /data\nfuser -km /data\n\n# Nếu shell đang đứng trong /data\npwd\ncd /\nsudo umount /data`}
            />
            <div className="space-y-4">
                <ExplainCard
                    icon={<Search size={20} />}
                    title="lsof +D /data"
                    desc="Liệt kê file/process đang mở bên trong /data."
                />
                <ExplainCard
                    icon={<Bug size={20} />}
                    title="fuser -m /data"
                    desc="Hiển thị PID đang dùng mount point."
                />
                <ExplainCard
                    icon={<Trash2 size={20} />}
                    title="fuser -km /data"
                    desc="Kill process đang dùng. Cẩn thận vì có thể làm mất dữ liệu chưa lưu."
                    danger
                />
                <ExplainCard
                    icon={<Terminal size={20} />}
                    title="cd /"
                    desc="Nếu terminal đang đứng trong /data, hãy cd ra ngoài trước khi umount."
                />
            </div>
        </div>
    );
}

function FstabSection() {
    const [tab, setTab] = useState("structure");
    const tabs = [
        ["structure", "Cấu trúc"],
        ["add", "Thêm ổ"],
        ["common", "Dòng hay dùng"],
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
                {tab === "structure" && <FstabStructure />}
                {tab === "add" && <AddFstab />}
                {tab === "common" && <CommonFstabLines />}
            </div>
        </div>
    );
}

function FstabStructure() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="/etc/fstab"
                code={`# <thiết_bị>      <điểm_mount> <loại_fs> <tuỳ_chọn>        <dump> <pass>\nUUID=a1b2c3d4... /           ext4      errors=remount-ro 0      1\nUUID=e5f6g7h8... /boot       ext4      defaults          0      2\nUUID=1234-ABCD    /boot/efi   vfat      umask=0077        0      1\nUUID=i9j0k1l2... /home       ext4      defaults          0      2\nUUID=m3n4o5p6... none        swap      sw                0      0`}
            />
            <CheatCard
                title="6 cột fstab"
                rows={[
                    ["1. thiết bị", "UUID=, LABEL= hoặc /dev/sdb1"],
                    ["2. mount point", "/data, /home, none cho swap"],
                    ["3. filesystem", "ext4, xfs, vfat, exfat, swap"],
                    ["4. options", "defaults, noatime, nofail, ro"],
                    ["5. dump", "thường là 0"],
                    ["6. pass", "0 không check, 1 root, 2 phân vùng khác"],
                ]}
            />
        </div>
    );
}
function AddFstab() {
    return (
        <CodeBlock
            title="add-to-fstab.sh"
            code={`# 1. Lấy UUID\nsudo blkid /dev/sdb1\n\n# 2. Backup fstab trước khi sửa\nsudo cp /etc/fstab /etc/fstab.bak\n\n# 3. Mở fstab\nsudo nano /etc/fstab\n\n# 4. Thêm dòng vào cuối\nUUID=a1b2c3d4-e5f6-7890-abcd-ef1234567890  /data  ext4  defaults,noatime  0  2\n\n# USB/ổ ngoài, không phải lúc nào cũng cắm\nUUID=1234-ABCD  /mnt/usb  vfat  defaults,nofail,uid=1000,gid=1000  0  0\n\n# Swap\nUUID=swap-uuid  none  swap  sw  0  0\n\n# 5. Test fstab, cực kỳ quan trọng\nsudo mount -a\n\n# 6. Kiểm tra\ndf -h /data\nfindmnt /data`}
            note="Nếu mount -a báo lỗi, hãy sửa ngay trước khi reboot."
        />
    );
}
function CommonFstabLines() {
    return (
        <CodeBlock
            title="common-fstab-lines.txt"
            code={`# ext4 cơ bản\nUUID=xxxx  /data     ext4  defaults                    0  2\n\n# ext4 tối ưu cho SSD\nUUID=xxxx  /data     ext4  defaults,noatime,discard    0  2\n\n# ext4 an toàn\nUUID=xxxx  /data     ext4  defaults,errors=remount-ro  0  2\n\n# USB/ổ ngoài\nUUID=xxxx  /mnt/usb  vfat  defaults,nofail,x-systemd.device-timeout=5  0  0\n\n# Chia sẻ nhiều user\nUUID=xxxx  /shared   ext4  defaults,umask=0002         0  2\n\n# NFS\n192.168.1.100:/exports/data  /mnt/nfs  nfs  defaults,nofail  0  0\n\n# tmpfs RAM disk\ntmpfs  /tmp  tmpfs  defaults,size=2G,noatime  0  0`}
        />
    );
}

function RealExamplesSection() {
    const [tab, setTab] = useState("server");
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                <button
                    onClick={() => setTab("server")}
                    className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 ${tab === "server" ? "bg-cyan-500 text-white" : "bg-slate-900 text-slate-400"}`}
                >
                    <Server size={16} /> Server /data
                </button>
                <button
                    onClick={() => setTab("usb")}
                    className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 ${tab === "usb" ? "bg-cyan-500 text-white" : "bg-slate-900 text-slate-400"}`}
                >
                    <Usb size={16} /> USB tạm thời
                </button>
            </div>
            <div className="p-5">
                {tab === "server" ? <ServerDataExample /> : <UsbExample />}
            </div>
        </div>
    );
}

function ServerDataExample() {
    return (
        <CodeBlock
            title="prepare-data-disk.sh"
            code={`# Tình huống: Gắn thêm SSD 500GB làm /data\n\n# 1. Phát hiện ổ mới\nlsblk\n\n# 2. Tạo phân vùng\nsudo parted -s /dev/sdb mklabel gpt\nsudo parted -s /dev/sdb mkpart primary ext4 0% 100%\nsudo partprobe /dev/sdb\nlsblk /dev/sdb\n\n# 3. Format\nsudo mkfs.ext4 -L "server-data" /dev/sdb1\n\n# 4. Lấy UUID\nsudo blkid /dev/sdb1\n\n# 5. Tạo điểm mount\nsudo mkdir -p /data\n\n# 6. Mount thử\nsudo mount /dev/sdb1 /data\ndf -h /data\n\n# 7. Backup fstab và thêm vào\nsudo cp /etc/fstab /etc/fstab.bak\necho "UUID=ab12cd34-ef56-7890-abcd-ef1234567890  /data  ext4  defaults,noatime  0  2" | sudo tee -a /etc/fstab\n\n# 8. Test fstab\nsudo umount /data\nsudo mount -a\ndf -h /data\n\n# 9. Cấp quyền cho user\nsudo chown ubuntu:ubuntu /data\nsudo chmod 755 /data\n\necho "✓ Ổ đĩa /data đã sẵn sàng!"`}
        />
    );
}
function UsbExample() {
    return (
        <CodeBlock
            title="mount-usb.sh"
            code={`lsblk\nsudo blkid /dev/sdc1\n\nsudo mkdir -p /mnt/usb\nsudo mount -t vfat /dev/sdc1 /mnt/usb\n# hoặc tự nhận loại\nsudo mount /dev/sdc1 /mnt/usb\n\nls /mnt/usb\ncp /home/ubuntu/file.txt /mnt/usb/\n\n# Đảm bảo ghi hết trước khi tháo\nsync\n\n# Tháo USB an toàn\nsudo umount /mnt/usb`}
        />
    );
}

function FstabTroubleshootingSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="fstab-troubleshooting.sh"
                code={`# Luôn test trước khi reboot\nsudo mount -a\n\n# Nếu boot không được:\n# 1. Vào recovery mode hoặc live USB\n# 2. Mount phân vùng root\nsudo mount /dev/sda3 /mnt\n\n# 3. Sửa fstab hoặc restore backup\nsudo nano /mnt/etc/fstab\nsudo cp /mnt/etc/fstab.bak /mnt/etc/fstab\n\n# UUID thay đổi sau khi format lại\nsudo blkid\ncat /etc/fstab\n\n# Kiểm tra fstab bằng findmnt\nfindmnt --verify\nfindmnt --fstab`}
            />
            <div className="space-y-4">
                <ExplainCard
                    icon={<FileWarning size={20} />}
                    title="fstab sai có thể boot lỗi"
                    desc="Không reboot trước khi sudo mount -a chạy không lỗi."
                    danger
                />
                <ExplainCard
                    icon={<Archive size={20} />}
                    title="Backup trước khi sửa"
                    desc="sudo cp /etc/fstab /etc/fstab.bak"
                />
                <ExplainCard
                    icon={<KeyRound size={20} />}
                    title="UUID thay đổi khi format"
                    desc="Sau mkfs, hãy blkid lại rồi cập nhật fstab."
                />
                <ExplainCard
                    icon={<Search size={20} />}
                    title="findmnt --verify"
                    desc="Kiểm tra tính hợp lệ của các mount point trong fstab."
                />
            </div>
        </div>
    );
}

function UtilityScriptSection() {
    return (
        <CodeBlock
            title="mount_info.sh"
            code={`#!/bin/bash\n\necho "╔═══════════════════════════════════════════════╗"\necho "║           THÔNG TIN Ổ ĐĨA & MOUNT            ║"\necho "╠═══════════════════════════════════════════════╣"\n\necho ""\necho "── Ổ ĐĨA & PHÂN VÙNG ────────────────────────────"\nlsblk -o NAME,SIZE,FSTYPE,LABEL,MOUNTPOINT\n\necho ""\necho "── DUNG LƯỢNG SỬ DỤNG ───────────────────────────"\ndf -h -x tmpfs -x devtmpfs\n\necho ""\necho "── UUID TẤT CẢ PHÂN VÙNG ────────────────────────"\nsudo blkid | sort\n\necho ""\necho "── SWAP ──────────────────────────────────────────"\nswapon --show\nfree -h | grep Swap\n\necho ""\necho "── NỘI DUNG /etc/fstab ───────────────────────────"\ngrep -v "^#" /etc/fstab | grep -v "^$"`}
        />
    );
}

function ExplainCard({ icon, title, desc, danger }) {
    return (
        <div
            className={`rounded-2xl border p-5 ${danger ? "bg-red-500/10 border-red-500/20" : "bg-slate-950 border-slate-800"}`}
        >
            <div
                className={`mb-3 ${danger ? "text-red-400" : "text-orange-400"}`}
            >
                {icon}
            </div>
            <div className="font-bold text-white">{title}</div>
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
            title: "mkfs",
            rows: [
                ["mkfs.ext4", "ext4 phổ biến"],
                ["mkfs.ext4 -L", "thêm label"],
                ["mkfs.xfs", "xfs"],
                ["mkfs.fat -F 32", "FAT32"],
                ["mkfs.exfat", "exFAT"],
                ["mkswap", "swap"],
            ],
        },
        {
            title: "mount",
            rows: [
                ["mount /dev/sdb1 /data", "mount đơn giản"],
                ["mount -t ext4", "chỉ định fs"],
                ["mount -o ro", "chỉ đọc"],
                ["noatime", "giảm I/O"],
                ["remount,rw", "đổi option"],
                ["mount -a", "mount từ fstab"],
            ],
        },
        {
            title: "umount",
            rows: [
                ["umount /data", "tháo theo mount point"],
                ["umount /dev/sdb1", "tháo theo thiết bị"],
                ["umount -l", "lazy"],
                ["lsof +D", "tìm process"],
                ["fuser -m", "xem PID"],
            ],
        },
        {
            title: "fstab",
            rows: [
                ["blkid", "lấy UUID"],
                ["fstab.bak", "backup trước"],
                ["UUID=xxx", "ổn định"],
                ["nofail", "ổ ngoài"],
                ["0 2", "fsck sau root"],
                ["findmnt --verify", "kiểm tra"],
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
        question: "Lệnh mkfs.ext4 /dev/sdb1 dùng để làm gì?",
        options: [
            "Mount ổ vào /data",
            "Format phân vùng thành filesystem ext4",
            "Xem UUID",
            "Tháo ổ đĩa",
        ],
        correct: 1,
        explanation:
            "mkfs.ext4 tạo filesystem ext4 trên phân vùng, tức là format phân vùng đó.",
    },
    {
        question: "Vì sao nên dùng UUID trong /etc/fstab thay vì /dev/sdb1?",
        options: [
            "UUID ổn định hơn khi thêm/bớt ổ",
            "UUID chạy nhanh hơn",
            "UUID không cần filesystem",
            "UUID tự format ổ",
        ],
        correct: 0,
        explanation:
            "Tên /dev/sdb có thể thay đổi khi thêm/bớt ổ. UUID gắn với filesystem nên ổn định hơn.",
    },
    {
        question: "Lệnh nào test /etc/fstab trước khi reboot?",
        options: [
            "sudo mount -a",
            "sudo reboot -f",
            "sudo mkfs.ext4",
            "sudo umount -a",
        ],
        correct: 0,
        explanation:
            "sudo mount -a mount tất cả mục trong fstab. Nếu có lỗi, cần sửa ngay trước khi reboot.",
    },
    {
        question:
            "Khi umount báo target is busy, lệnh nào giúp tìm process đang dùng /data?",
        options: ["mkfs", "lsof +D /data", "blkid -w", "fdisk -w"],
        correct: 1,
        explanation: "lsof +D /data liệt kê file/process đang mở trong /data.",
    },
    {
        question:
            "Tùy chọn mount nào thường dùng để không cập nhật access time, giảm I/O?",
        options: ["noatime", "nofail", "ro", "sw"],
        correct: 0,
        explanation:
            "noatime không cập nhật thời gian truy cập file, giúp giảm ghi đĩa.",
    },
    {
        question:
            "Sau khi format lại phân vùng, điều gì có thể thay đổi cần cập nhật trong fstab?",
        options: ["UUID", "Tên lệnh mount", "Tên thư mục /", "Kernel version"],
        correct: 0,
        explanation:
            "mkfs tạo filesystem mới nên UUID thường thay đổi. Cần blkid lại và cập nhật fstab.",
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
