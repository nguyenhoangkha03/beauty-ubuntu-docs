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
    Play,
    Server,
    Lock,
    Eye,
    Trash2,
    RefreshCw,
    Bug,
    Archive,
    Gauge,
    PackageCheck,
    PlusCircle,
    MinusCircle,
    Camera,
    Undo2,
    Box,
    Cpu,
    Workflow,
    Beaker,
    MoveRight,
    Droplets,
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
                                Storage · LVM · Resize · Snapshot
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 9
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 9.3
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" /> Quản
                        lý dung lượng linh hoạt hơn partition truyền thống
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        LVM Cơ Bản <br />
                        <span className="text-orange-500">
                            Logical Volume Manager
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        LVM tạo một lớp trừu tượng giữa ổ đĩa vật lý và
                        filesystem, giúp gộp nhiều ổ, tăng dung lượng online,
                        snapshot nhanh và quản lý storage linh hoạt.
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
                            Các lệnh như{" "}
                            <code className="text-white">pvcreate</code>,{" "}
                            <code className="text-white">lvremove</code>,{" "}
                            <code className="text-white">vgremove</code>,{" "}
                            <code className="text-white">lvreduce</code> có thể
                            làm mất dữ liệu. Hãy thực hành bằng loopback device
                            trong bài này trước khi dùng ổ thật.
                        </p>
                    </div>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <LvmConceptCard />
                    <LvmLayerSimulator />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="blue"
                        icon={<Layers size={22} />}
                        title="Kiến trúc LVM: PV → VG → LV"
                        subtitle="PV là ổ/partition vật lý, VG là pool dung lượng, LV là volume logic để format và mount."
                    />
                    <ArchitectureSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="green"
                        icon={<Beaker size={22} />}
                        title="Lab an toàn bằng loopback device"
                        subtitle="Tạo file ảo đóng vai trò như ổ đĩa thật để thực hành LVM mà không đụng vào dữ liệu thật."
                    />
                    <LoopbackLabSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="purple"
                        icon={<Workflow size={22} />}
                        title="Tạo LVM từng bước"
                        subtitle="Cài lvm2, tạo PV, tạo VG, tạo LV, format, mount và thêm vào fstab."
                    />
                    <CreateLvmWorkflow />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="orange"
                        icon={<PlusCircle size={22} />}
                        title="Mở rộng LV — tính năng hay dùng nhất"
                        subtitle="Tăng dung lượng LV và filesystem, thường không cần unmount khi dùng ext4 hoặc XFS."
                    />
                    <ExtendSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="red"
                        icon={<MinusCircle size={22} />}
                        title="Giảm LV — thao tác nguy hiểm"
                        subtitle="Phải backup, unmount, kiểm tra filesystem, shrink filesystem trước rồi mới shrink LV. XFS không shrink được."
                    />
                    <ReduceSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="cyan"
                        icon={<Camera size={22} />}
                        title="Snapshot — sao lưu nhanh"
                        subtitle="Snapshot chụp trạng thái LV trong vài giây, dùng để backup hoặc rollback trước thao tác rủi ro."
                    />
                    <SnapshotSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="pink"
                        icon={<Trash2 size={22} />}
                        title="Xóa LVM đúng thứ tự"
                        subtitle="Khi xóa, làm ngược thứ tự tạo: unmount → LV → VG → PV → loopback cleanup."
                    />
                    <DeleteSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="8"
                        color="yellow"
                        icon={<Server size={22} />}
                        title="Kịch bản thực tế: setup server với LVM"
                        subtitle="Tạo /data và /backup từ ổ /dev/sdb, sau 6 tháng thêm /dev/sdc rồi mở rộng /data."
                    />
                    <ServerScenarioSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="9"
                        color="teal"
                        icon={<Wrench size={22} />}
                        title="Script quản lý LVM"
                        subtitle="lvm_manager.sh giúp xem tổng quan, tạo LV mới, mở rộng LV và tạo snapshot bằng menu."
                    />
                    <LvmManagerScript />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="10"
                        color="emerald"
                        icon={<ListChecks size={22} />}
                        title="Bảng lệnh & tóm tắt"
                        subtitle="Các lệnh PV, VG, LV quan trọng và quy trình thực hành đầy đủ cần nhớ."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <PackageCheck className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức bài 9.3
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Ôn lại PV/VG/LV, lvextend -r, snapshot, XFS
                                    shrink và thứ tự xóa LVM.
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
                        Bạn đã biết quản lý dung lượng linh hoạt bằng LVM. Tiếp
                        theo là nén và giải nén file phục vụ backup, chuyển file
                        và lưu trữ.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                        Bài tiếp theo: 9.4 — Nén & Giải Nén File{" "}
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
        red: "bg-red-500/20 text-red-400",
        cyan: "bg-cyan-500/20 text-cyan-400",
        pink: "bg-pink-500/20 text-pink-400",
        yellow: "bg-yellow-500/20 text-yellow-400",
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

function LvmConceptCard() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-orange-500/15 text-orange-400 rounded-2xl flex items-center justify-center">
                    <Layers size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        LVM là gì?
                    </h3>
                    <p className="text-slate-500 text-sm">
                        Logical Volume Manager
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-slate-950 border border-red-500/20 rounded-2xl p-5">
                    <div className="text-red-400 font-bold mb-3 flex items-center gap-2">
                        <XCircle size={18} /> Partition truyền thống
                    </div>
                    <ul className="space-y-3 text-sm text-slate-400">
                        <li>Dung lượng cố định.</li>
                        <li>/ đầy khó lấy dung lượng từ /home.</li>
                        <li>Thêm ổ mới không gộp linh hoạt.</li>
                        <li>Không có snapshot.</li>
                    </ul>
                </div>
                <div className="bg-slate-950 border border-green-500/20 rounded-2xl p-5 shadow-[0_0_30px_rgba(34,197,94,0.06)]">
                    <div className="text-green-400 font-bold mb-3 flex items-center gap-2">
                        <CheckCircle2 size={18} /> LVM
                    </div>
                    <ul className="space-y-3 text-sm text-slate-400">
                        <li>Resize LV linh hoạt.</li>
                        <li>Gộp nhiều ổ thành một pool.</li>
                        <li>Snapshot nhanh để backup.</li>
                        <li>Migrate data giữa ổ ít downtime.</li>
                    </ul>
                </div>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 text-sm text-blue-100 flex gap-3">
                <Info size={20} className="text-blue-400 shrink-0 mt-0.5" />
                <p>
                    LVM không thay thế filesystem. Bạn vẫn tạo filesystem như
                    ext4/xfs trên LV, rồi mount LV như một phân vùng bình
                    thường.
                </p>
            </div>
        </div>
    );
}

function LvmLayerSimulator() {
    const [extraDisk, setExtraDisk] = useState(false);
    const total = extraDisk ? 300 : 200;
    return (
        <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Droplets className="text-orange-400" /> Hình dung LVM như bể
                nước
            </h3>
            <p className="text-slate-400 mb-6">
                PV là nguồn nước, VG là bể chứa, LV là vòi lấy nước.
            </p>
            <button
                onClick={() => setExtraDisk((v) => !v)}
                className={`w-full p-4 rounded-2xl border font-bold mb-5 ${extraDisk ? "bg-green-500 text-white border-green-500" : "bg-slate-950 border-slate-800 text-slate-300"}`}
            >
                {extraDisk
                    ? "Đã thêm PV /dev/sdc 100GB"
                    : "Thêm PV /dev/sdc 100GB vào VG"}
            </button>
            <div className="space-y-4">
                <LayerBar
                    title="PV nguồn 1"
                    value="/dev/sdb = 200GB"
                    width="66%"
                    color="bg-blue-500"
                />
                {extraDisk && (
                    <LayerBar
                        title="PV nguồn 2"
                        value="/dev/sdc = 100GB"
                        width="33%"
                        color="bg-cyan-500"
                    />
                )}
                <LayerBar
                    title="VG bể chứa"
                    value={`vg_server = ${total}GB`}
                    width="100%"
                    color="bg-orange-500"
                />
                <div className="grid grid-cols-2 gap-3">
                    <LayerBar
                        title="LV vòi 1"
                        value="lv_data = 150GB"
                        width="75%"
                        color="bg-green-500"
                        small
                    />
                    <LayerBar
                        title="LV vòi 2"
                        value="lv_backup = 50GB"
                        width="25%"
                        color="bg-purple-500"
                        small
                    />
                </div>
                <div className="bg-black border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-400">
                    VFree: {total - 200}GB{" "}
                    {extraDisk ? "→ có thể lvextend" : "→ chưa còn trống"}
                </div>
            </div>
        </div>
    );
}

function LayerBar({ title, value, width, color, small }) {
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
            <div className="flex justify-between gap-3 text-sm mb-2">
                <span className="text-slate-400">{title}</span>
                <code className="text-orange-300">{value}</code>
            </div>
            <div
                className={`${small ? "h-3" : "h-4"} bg-slate-900 rounded-full overflow-hidden`}
            >
                <div
                    className={`h-full ${color} rounded-full`}
                    style={{ width }}
                />
            </div>
        </div>
    );
}

function ArchitectureSection() {
    return (
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
                <div className="space-y-4">
                    <ArchLayer
                        color="bg-green-500/15 text-green-400 border-green-500/20"
                        title="Filesystem"
                        desc="ext4, xfs, btrfs — tạo trên LV và mount vào /data, /home, /var"
                    />
                    <MoveRight className="mx-auto text-slate-600 rotate-90" />
                    <ArchLayer
                        color="bg-orange-500/15 text-orange-400 border-orange-500/20"
                        title="LV — Logical Volume"
                        desc="/dev/vg_data/lv_home, /dev/vg_data/lv_var — nơi format và mount"
                    />
                    <MoveRight className="mx-auto text-slate-600 rotate-90" />
                    <ArchLayer
                        color="bg-blue-500/15 text-blue-400 border-blue-500/20"
                        title="VG — Volume Group"
                        desc="vg_data — pool dung lượng tổng hợp từ nhiều PV"
                    />
                    <MoveRight className="mx-auto text-slate-600 rotate-90" />
                    <ArchLayer
                        color="bg-purple-500/15 text-purple-400 border-purple-500/20"
                        title="PV — Physical Volume"
                        desc="/dev/sdb, /dev/sdc, /dev/sda2 — ổ thật hoặc partition vật lý"
                    />
                </div>
            </div>
            <CheatCard
                title="3 lớp LVM"
                rows={[
                    [
                        "PV",
                        "Physical Volume: ổ/partition được đánh dấu dùng LVM",
                    ],
                    ["VG", "Volume Group: nhóm/pool dung lượng từ PV"],
                    ["LV", "Logical Volume: volume logic tạo từ VG"],
                    ["PE", "Physical Extent: đơn vị chia nhỏ, thường 4MB"],
                ]}
            />
        </div>
    );
}

function ArchLayer({ color, title, desc }) {
    return (
        <div className={`rounded-2xl border p-5 ${color}`}>
            <div className="font-bold text-white text-lg">{title}</div>
            <p className="text-slate-400 text-sm mt-2">{desc}</p>
        </div>
    );
}

function LoopbackLabSection() {
    return (
        <CodeBlock
            title="loopback-lab.sh"
            code={`sudo apt install lvm2 -y\nsudo systemctl status lvm2-monitor\nlvm version\n\n# Tạo môi trường thực hành an toàn\nmkdir ~/lvm_practice\ncd ~/lvm_practice\n\n# Tạo 3 file ảo làm ổ đĩa\ndd if=/dev/zero of=disk1.img bs=1M count=1024\ndd if=/dev/zero of=disk2.img bs=1M count=1024\ndd if=/dev/zero of=disk3.img bs=1M count=512\n\n# Gắn file vào loopback device\nsudo losetup /dev/loop10 disk1.img\nsudo losetup /dev/loop11 disk2.img\nsudo losetup /dev/loop12 disk3.img\n\n# Kiểm tra\nsudo losetup -l | grep loop1\nlsblk | grep loop1\n\n# /dev/loop10, /dev/loop11, /dev/loop12 đóng vai trò như ổ thật`}
            note="Loopback device là cách luyện LVM rất an toàn vì bạn thao tác trên file ảo, không phải ổ thật."
        />
    );
}

function CreateLvmWorkflow() {
    const [step, setStep] = useState(0);
    const steps = [
        [
            "PV",
            "sudo pvcreate /dev/loop10 /dev/loop11 /dev/loop12",
            "Đánh dấu thiết bị dùng cho LVM.",
        ],
        [
            "VG",
            "sudo vgcreate vg_data /dev/loop10 /dev/loop11",
            "Gộp PV thành pool dung lượng.",
        ],
        [
            "Extend VG",
            "sudo vgextend vg_data /dev/loop12",
            "Thêm PV thứ 3 vào VG.",
        ],
        [
            "LV",
            "sudo lvcreate -L 500M -n lv_home vg_data",
            "Tạo Logical Volume từ VG.",
        ],
        [
            "Filesystem",
            "sudo mkfs.ext4 /dev/vg_data/lv_home",
            "Format LV như phân vùng bình thường.",
        ],
        [
            "Mount",
            "sudo mount /dev/vg_data/lv_home /mnt/lvm/home",
            "Gắn LV vào thư mục để sử dụng.",
        ],
    ];
    return (
        <div className="grid lg:grid-cols-[320px_1fr] gap-6">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3 space-y-2 h-fit">
                {steps.map(([title], i) => (
                    <button
                        key={title}
                        onClick={() => setStep(i)}
                        className={`w-full text-left p-4 rounded-xl border ${step === i ? "bg-purple-500/10 border-purple-500/40 text-white" : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"}`}
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
                    <code className="block bg-black/50 border border-slate-800 rounded-xl p-4 text-green-400 text-sm overflow-x-auto">
                        {steps[step][1]}
                    </code>
                    <p className="text-slate-400 mt-4">{steps[step][2]}</p>
                </div>
                <CodeBlock
                    title="create-lvm-full.sh"
                    code={`# 1. Tạo PV\nsudo pvcreate /dev/loop10 /dev/loop11 /dev/loop12\nsudo pvs\nsudo pvdisplay /dev/loop10\n\n# 2. Tạo VG\nsudo vgcreate vg_data /dev/loop10 /dev/loop11\nsudo vgs\nsudo vgdisplay vg_data\n\n# 3. Mở rộng VG\nsudo vgextend vg_data /dev/loop12\nsudo vgs | grep vg_data\n\n# 4. Tạo LV\nsudo lvcreate -L 500M -n lv_home vg_data\nsudo lvcreate -l 50%VG -n lv_root vg_data\nsudo lvcreate -l 100%FREE -n lv_var vg_data\nsudo lvs\n\n# 5. Format và mount\nsudo mkfs.ext4 /dev/vg_data/lv_home\nsudo mkfs.ext4 /dev/vg_data/lv_root\nsudo mkfs.xfs /dev/vg_data/lv_var\nsudo mkdir -p /mnt/lvm/{home,root,var}\nsudo mount /dev/vg_data/lv_home /mnt/lvm/home\nsudo mount /dev/vg_data/lv_root /mnt/lvm/root\nsudo mount /dev/vg_data/lv_var  /mnt/lvm/var\n\ndf -h | grep lvm\nlsblk`}
                />
            </div>
        </div>
    );
}

function ExtendSection() {
    const [amount, setAmount] = useState(200);
    return (
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-6">
            <CodeBlock
                title="extend-lv.sh"
                code={`# Kiểm tra VG còn trống bao nhiêu\nsudo vgs\n\n# Thêm 200MB vào LV\nsudo lvextend -L +200M /dev/vg_data/lv_home\n\n# Tăng lên kích thước cụ thể 1GB\nsudo lvextend -L 1G /dev/vg_data/lv_home\n\n# Dùng hết phần còn trống\nsudo lvextend -l +100%FREE /dev/vg_data/lv_home\n\n# Resize filesystem sau khi extend\n# ext4:\nsudo resize2fs /dev/vg_data/lv_home\n\n# XFS: truyền mount point\nsudo xfs_growfs /mnt/lvm/var\n\n# Cách nhanh nhất: tự resize filesystem\nsudo lvextend -L +200M -r /dev/vg_data/lv_home\n\n# Kiểm tra\ndf -h /mnt/lvm/home`}
            />
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 h-fit">
                <h4 className="font-bold text-white mb-4">Mô phỏng lvextend</h4>
                <input
                    type="range"
                    min="100"
                    max="1000"
                    step="100"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full accent-orange-500 mb-4"
                />
                <div className="bg-black border border-slate-800 rounded-xl p-5 font-mono text-sm text-green-400 whitespace-pre-wrap">{`lv_home cũ : 500M\nThêm      : +${amount}M\nlv_home mới: ${500 + amount}M\n\nsudo lvextend -L +${amount}M -r /dev/vg_data/lv_home`}</div>
                <div className="mt-4 bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-sm text-green-100">
                    <code className="text-white">-r</code> = resize filesystem
                    tự động, rất tiện và hay dùng.
                </div>
            </div>
        </div>
    );
}

function ReduceSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="reduce-lv-ext4.sh"
                code={`# Chỉ áp dụng cho ext4/ext3/ext2. XFS không shrink được.\n\n# 1. Backup dữ liệu quan trọng\nsudo tar -czf /tmp/home_backup.tar.gz /mnt/lvm/home/\n\n# 2. Unmount bắt buộc\nsudo umount /mnt/lvm/home\n\n# 3. Kiểm tra filesystem\nsudo e2fsck -f /dev/vg_data/lv_home\n\n# 4. Shrink filesystem TRƯỚC\nsudo resize2fs /dev/vg_data/lv_home 300M\n\n# 5. Shrink LV SAU\nsudo lvreduce -L 300M /dev/vg_data/lv_home\n\n# 6. Kiểm tra lại filesystem\nsudo e2fsck -f /dev/vg_data/lv_home\n\n# 7. Mount lại\nsudo mount /dev/vg_data/lv_home /mnt/lvm/home\ndf -h /mnt/lvm/home\n\n# Cách tự động hơn\nsudo lvresize -L 300M --resizefs /dev/vg_data/lv_home`}
            />
            <div className="space-y-4">
                <ExplainCard
                    icon={<AlertTriangle size={20} />}
                    title="Giảm LV nguy hiểm hơn tăng"
                    desc="Nếu thứ tự sai, dữ liệu có thể hỏng ngay."
                    danger
                />
                <ExplainCard
                    icon={<Archive size={20} />}
                    title="Backup trước"
                    desc="Luôn backup dữ liệu quan trọng trước khi lvreduce."
                />
                <ExplainCard
                    icon={<RefreshCw size={20} />}
                    title="Shrink filesystem trước"
                    desc="resize2fs về kích thước mới rồi mới lvreduce."
                />
                <ExplainCard
                    icon={<XCircle size={20} />}
                    title="XFS không shrink"
                    desc="XFS chỉ hỗ trợ grow, không hỗ trợ giảm kích thước."
                    danger
                />
            </div>
        </div>
    );
}

function SnapshotSection() {
    const [snap, setSnap] = useState(25);
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="snapshot.sh"
                code={`# Tạo snapshot\nsudo lvcreate -s -L 100M -n lv_home_snap /dev/vg_data/lv_home\nsudo lvs\n\n# Mount snapshot read-only để xem data cũ\nsudo mkdir /mnt/snap_home\nsudo mount -o ro /dev/vg_data/lv_home_snap /mnt/snap_home\nls /mnt/snap_home\n\n# Theo dõi snapshot đầy chưa\nsudo lvs | grep snap\n\n# Tăng snapshot nếu sắp đầy\nsudo lvextend -L +50M /dev/vg_data/lv_home_snap\n\n# Rollback về snapshot\nsudo umount /mnt/lvm/home\nsudo lvconvert --merge /dev/vg_data/lv_home_snap\nsudo lvchange -ay /dev/vg_data/lv_home\nsudo mount /dev/vg_data/lv_home /mnt/lvm/home\n\n# Xóa snapshot sau khi dùng\nsudo umount /mnt/snap_home\nsudo lvremove /dev/vg_data/lv_home_snap`}
            />
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 h-fit">
                <h4 className="font-bold text-white mb-4">Mô phỏng Snap%</h4>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={snap}
                    onChange={(e) => setSnap(Number(e.target.value))}
                    className="w-full accent-cyan-500 mb-4"
                />
                <div className="h-5 bg-slate-900 border border-slate-800 rounded-full overflow-hidden mb-4">
                    <div
                        className={`${snap >= 90 ? "bg-red-500" : snap >= 70 ? "bg-yellow-500" : "bg-cyan-500"} h-full`}
                        style={{ width: `${snap}%` }}
                    />
                </div>
                <div className="bg-black border border-slate-800 rounded-xl p-5 font-mono text-sm whitespace-pre-wrap">
                    <span
                        className={
                            snap >= 100 ? "text-red-400" : "text-green-400"
                        }
                    >
                        lv_home_snap Snap% = {snap}%
                    </span>
                </div>
                <p className="text-slate-500 text-sm mt-4">
                    Khi Snap% đạt 100%, snapshot có thể invalid. Cần xóa hoặc
                    tăng kích thước snapshot trước khi đầy.
                </p>
            </div>
        </div>
    );
}

function DeleteSection() {
    return (
        <CodeBlock
            title="delete-lvm.sh"
            code={`# Xóa ngược thứ tự tạo: LV → VG → PV\n\n# 1. Unmount tất cả LV\nsudo umount /mnt/lvm/home\nsudo umount /mnt/lvm/root\nsudo umount /mnt/lvm/var\n\n# 2. Xóa LV\nsudo lvremove /dev/vg_data/lv_home\nsudo lvremove /dev/vg_data/lv_root\nsudo lvremove /dev/vg_data/lv_var\n\n# Hoặc xóa tất cả LV trong VG\nsudo lvremove /dev/vg_data/*\n\n# 3. Xóa VG\nsudo vgremove vg_data\n\n# 4. Xóa PV\nsudo pvremove /dev/loop10\nsudo pvremove /dev/loop11 /dev/loop12\n\n# 5. Giải phóng loopback nếu dùng lab\nsudo losetup -d /dev/loop10\nsudo losetup -d /dev/loop11\nsudo losetup -d /dev/loop12`}
            note="Trước khi xóa LVM thật, kiểm tra df -h, lsblk, lvs, vgs, pvs và backup dữ liệu."
        />
    );
}

function ServerScenarioSection() {
    return (
        <CodeBlock
            title="server-lvm-scenario.sh"
            code={`# Tình huống: /dev/sdb = 200GB mới, tạo /data và /backup\n\nlsblk\nsudo apt install lvm2 -y\n\n# Tạo PV và VG\nsudo pvcreate /dev/sdb\nsudo vgcreate vg_server /dev/sdb\n\n# Tạo LV\nsudo lvcreate -L 150G -n lv_data vg_server\nsudo lvcreate -l 100%FREE -n lv_backup vg_server\n\n# Format và mount\nsudo mkfs.ext4 /dev/vg_server/lv_data\nsudo mkfs.ext4 /dev/vg_server/lv_backup\nsudo mkdir -p /data /backup\nsudo mount /dev/vg_server/lv_data /data\nsudo mount /dev/vg_server/lv_backup /backup\n\n# fstab\necho "/dev/vg_server/lv_data    /data   ext4  defaults  0  2" | sudo tee -a /etc/fstab\necho "/dev/vg_server/lv_backup  /backup ext4  defaults  0  2" | sudo tee -a /etc/fstab\nsudo mount -a\ndf -h | grep -E "data|backup"\n\n# 6 tháng sau: thêm ổ /dev/sdc = 100GB\nsudo pvcreate /dev/sdc\nsudo vgextend vg_server /dev/sdc\nsudo vgs\n\n# Mở rộng /data thêm 80GB, tự resize filesystem\nsudo lvextend -L +80G -r /dev/vg_server/lv_data\ndf -h /data`}
        />
    );
}

function LvmManagerScript() {
    return (
        <CodeBlock
            title="lvm_manager.sh"
            code={`#!/bin/bash\nRED='\\033[0;31m'; GREEN='\\033[0;32m'; YELLOW='\\033[1;33m'; BLUE='\\033[0;34m'; NC='\\033[0m'\n\nshow_overview() {\n    echo -e "${BLUE}╔══════════════════════════════════╗${NC}"\n    echo -e "${BLUE}║         LVM OVERVIEW             ║${NC}"\n    echo -e "${BLUE}╚══════════════════════════════════╝${NC}"\n    echo -e "\\n${YELLOW}▶ PHYSICAL VOLUMES:${NC}"; sudo pvs --units g 2>/dev/null || echo "  Không có PV"\n    echo -e "\\n${YELLOW}▶ VOLUME GROUPS:${NC}"; sudo vgs --units g 2>/dev/null || echo "  Không có VG"\n    echo -e "\\n${YELLOW}▶ LOGICAL VOLUMES:${NC}"; sudo lvs 2>/dev/null || echo "  Không có LV"\n    echo -e "\\n${YELLOW}▶ MOUNTED LVM:${NC}"; df -h | grep mapper || true\n    echo -e "\\n${YELLOW}▶ DISK LAYOUT:${NC}"; lsblk | grep -E "lvm|disk|part"\n}\n\ncreate_lv() {\n    echo -e "${YELLOW}=== TẠO LOGICAL VOLUME ===${NC}"\n    sudo vgs --noheadings -o vg_name,vg_free 2>/dev/null | nl | awk '{printf "  %s) %s (Free: %s)\\n", $1, $2, $3}'\n    read -p "Tên VG: " vg_name\n    read -p "Tên LV: " lv_name\n    read -p "Kích thước (10G, 500M, 50%FREE): " lv_size\n    read -p "Filesystem (ext4/xfs) [ext4]: " fstype\n    fstype="${"{"}fstype:-ext4{'}'}"\n    read -p "Mount point (vd: /data): " mountpoint\n\n    if [[ "$lv_size" == *"%"* ]]; then\n        sudo lvcreate -l "$lv_size" -n "$lv_name" "$vg_name"\n    else\n        sudo lvcreate -L "$lv_size" -n "$lv_name" "$vg_name"\n    fi\n\n    sudo mkfs.$fstype /dev/$vg_name/$lv_name\n    if [ -n "$mountpoint" ]; then\n        sudo mkdir -p "$mountpoint"\n        sudo mount /dev/$vg_name/$lv_name "$mountpoint"\n        echo "/dev/$vg_name/$lv_name  $mountpoint  $fstype  defaults  0  2" | sudo tee -a /etc/fstab > /dev/null\n        echo -e "${GREEN}✅ LV '$lv_name' đã tạo và mount tại '$mountpoint'${NC}"\n        df -h "$mountpoint"\n    fi\n}\n\nextend_lv() {\n    echo -e "${YELLOW}=== MỞ RỘNG LOGICAL VOLUME ===${NC}"\n    sudo lvs --noheadings -o lv_path,lv_size,vg_free 2>/dev/null | nl\n    read -p "Đường dẫn LV: " lv_path\n    read -p "Thêm bao nhiêu? (+10G, +50%FREE): " extend_size\n    sudo lvextend -L "$extend_size" -r "$lv_path" && echo -e "${GREEN}✅ Đã mở rộng!${NC}"\n}\n\ncreate_snapshot() {\n    echo -e "${YELLOW}=== TẠO SNAPSHOT ===${NC}"\n    sudo lvs --noheadings -o lv_path,lv_size 2>/dev/null | grep -v snap | nl\n    read -p "Đường dẫn LV gốc: " lv_path\n    read -p "Tên snapshot: " snap_name\n    read -p "Kích thước snapshot: " snap_size\n    sudo lvcreate -s -L "$snap_size" -n "$snap_name" "$lv_path"\n    echo -e "${GREEN}✅ Snapshot đã tạo!${NC}"\n}\n\nwhile true; do\n    echo -e "${BLUE}╔══════════════════════════╗${NC}"\n    echo -e "${BLUE}║    LVM MANAGER           ║${NC}"\n    echo -e "${BLUE}╠══════════════════════════╣${NC}"\n    echo -e "${BLUE}║ 1) Xem tổng quan         ║${NC}"\n    echo -e "${BLUE}║ 2) Tạo LV mới            ║${NC}"\n    echo -e "${BLUE}║ 3) Mở rộng LV            ║${NC}"\n    echo -e "${BLUE}║ 4) Tạo Snapshot          ║${NC}"\n    echo -e "${BLUE}║ 0) Thoát                 ║${NC}"\n    echo -e "${BLUE}╚══════════════════════════╝${NC}"\n    read -p "Chọn: " choice\n    case $choice in\n        1) show_overview ;;\n        2) create_lv ;;\n        3) extend_lv ;;\n        4) create_snapshot ;;\n        0) exit 0 ;;\n        *) echo -e "${RED}Không hợp lệ!${NC}" ;;\n    esac\ndone`}
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
            title: "PV",
            rows: [
                ["pvcreate", "tạo PV"],
                ["pvs", "xem ngắn"],
                ["pvdisplay", "xem chi tiết"],
                ["pvscan", "scan"],
                ["pvremove", "xóa PV"],
                ["pvmove", "di chuyển data"],
            ],
        },
        {
            title: "VG",
            rows: [
                ["vgcreate", "tạo VG"],
                ["vgs", "xem ngắn"],
                ["vgdisplay", "xem chi tiết"],
                ["vgextend", "thêm PV"],
                ["vgreduce", "bỏ PV"],
                ["vgremove", "xóa VG"],
            ],
        },
        {
            title: "LV",
            rows: [
                ["lvcreate", "tạo LV"],
                ["lvs", "xem ngắn"],
                ["lvdisplay", "xem chi tiết"],
                ["lvextend -r", "tăng + resize fs"],
                ["lvreduce", "giảm nguy hiểm"],
                ["lvremove", "xóa LV"],
            ],
        },
        {
            title: "Snapshot",
            rows: [
                ["lvcreate -s", "tạo snapshot"],
                ["lvs", "xem Snap%"],
                ["mount -o ro", "mount đọc"],
                ["lvconvert --merge", "rollback"],
                ["lvremove snap", "xóa snapshot"],
            ],
        },
        {
            title: "Quy trình",
            rows: [
                ["PV → VG → LV", "3 lớp"],
                ["mkfs", "tạo filesystem"],
                ["mount", "gắn vào thư mục"],
                ["fstab", "mount khi boot"],
                ["LV → VG → PV", "thứ tự xóa"],
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
        question: "Ba lớp chính của LVM là gì?",
        options: [
            "PV → VG → LV",
            "MBR → GPT → ext4",
            "mount → mkfs → fsck",
            "tar → gzip → zip",
        ],
        correct: 0,
        explanation:
            "LVM gồm PV Physical Volume, VG Volume Group và LV Logical Volume.",
    },
    {
        question: "Lệnh nào tạo Physical Volume trên /dev/sdb?",
        options: [
            "vgcreate /dev/sdb",
            "pvcreate /dev/sdb",
            "lvcreate /dev/sdb",
            "mkfs.lvm /dev/sdb",
        ],
        correct: 1,
        explanation: "pvcreate đánh dấu ổ/partition để dùng trong LVM.",
    },
    {
        question: "Tùy chọn -r trong lvextend -L +5G -r có tác dụng gì?",
        options: [
            "Xóa LV",
            "Tự resize filesystem sau khi tăng LV",
            "Rollback snapshot",
            "Đổi tên VG",
        ],
        correct: 1,
        explanation:
            "-r hoặc --resizefs tự mở rộng filesystem sau khi LV được extend.",
    },
    {
        question: "Filesystem nào không hỗ trợ shrink trong nội dung bài?",
        options: ["ext4", "ext3", "XFS", "ext2"],
        correct: 2,
        explanation: "XFS chỉ hỗ trợ grow, không hỗ trợ giảm kích thước.",
    },
    {
        question: "Snapshot LVM dùng để làm gì?",
        options: [
            "Chụp trạng thái LV tại một thời điểm để đọc/backup/rollback",
            "Format ổ đĩa",
            "Đổi tên file",
            "Cài package",
        ],
        correct: 0,
        explanation:
            "Snapshot là ảnh chụp tức thì của LV, có thể mount read-only hoặc merge để rollback.",
    },
    {
        question: "Thứ tự đúng khi xóa LVM là gì?",
        options: [
            "PV → VG → LV",
            "VG → PV → LV",
            "Unmount → LV → VG → PV",
            "fstab → mkfs → mount",
        ],
        correct: 2,
        explanation:
            "Xóa ngược thứ tự tạo: unmount filesystem, xóa LV, xóa VG, rồi xóa PV.",
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
