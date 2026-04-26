import React, { useMemo, useState } from "react";
import {
    ShieldCheck,
    Terminal,
    RefreshCw,
    Download,
    PackageCheck,
    Trash2,
    AlertTriangle,
    Info,
    CheckCircle2,
    XCircle,
    Copy,
    ChevronRight,
    RotateCcw,
    Sparkles,
    Server,
    Lock,
    WifiOff,
    Wrench,
    ListChecks,
    Bug,
    Power,
    Eye,
    HelpCircle,
    Activity,
    PackageOpen,
    FileWarning,
    Clock,
    Database,
    Settings,
    Zap,
    ShieldAlert,
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
                                Security · APT · Updates · Patching
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 10
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 10.1
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" /> Bắt
                        đầu Phần 10 — Bảo mật cơ bản
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Cập Nhật Hệ Thống <br />
                        <span className="text-orange-500">
                            Và Vá Lỗi Bảo Mật
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Bạn sẽ hiểu vì sao Ubuntu cần cập nhật thường xuyên,
                        phân biệt{" "}
                        <code className="text-orange-300">apt update</code>,{" "}
                        <code className="text-orange-300">apt upgrade</code>,{" "}
                        <code className="text-orange-300">
                            apt full-upgrade
                        </code>
                        , kiểm tra bản vá bảo mật, reboot khi cần và xử lý lỗi
                        APT phổ biến.
                    </p>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <WhyUpdateCard />
                    <AptFlowSimulator />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="blue"
                        icon={<RefreshCw size={22} />}
                        title="Hiểu đúng apt update, upgrade, full-upgrade"
                        subtitle="update chỉ cập nhật danh sách gói; upgrade mới thực sự tải và cài bản mới."
                    />
                    <AptConceptSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="green"
                        icon={<Terminal size={22} />}
                        title="Quy trình cập nhật cơ bản"
                        subtitle="Chạy apt update, xem gói có thể nâng cấp, rồi upgrade hoặc full-upgrade khi cần."
                    />
                    <BasicUpdateWorkflow />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="orange"
                        icon={<ShieldCheck size={22} />}
                        title="Cập nhật bảo mật cho server"
                        subtitle="Chú ý các gói quan trọng như openssl, openssh-server, sudo, systemd, linux-generic và kiểm tra reboot-required."
                    />
                    <SecurityUpdateSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="purple"
                        icon={<Trash2 size={22} />}
                        title="Dọn dẹp sau cập nhật"
                        subtitle="autoremove giúp xóa gói phụ thuộc cũ, thường gặp nhất là kernel cũ không còn dùng."
                    />
                    <CleanupSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="red"
                        icon={<Bug size={22} />}
                        title="Lỗi phổ biến và cách xử lý"
                        subtitle="Quên sudo, APT bị lock, mất mạng, mirror lỗi hoặc dpkg bị gián đoạn."
                    />
                    <CommonErrorsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="cyan"
                        icon={<Server size={22} />}
                        title="Quy trình an toàn trên server thật"
                        subtitle="Trước khi reboot server, kiểm tra dịch vụ, chọn giờ thấp điểm và ghi lại thay đổi."
                    />
                    <ServerSafeWorkflow />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="yellow"
                        icon={<Wrench size={22} />}
                        title="Script cập nhật tự động có kiểm soát"
                        subtitle="Script update_system.sh ghi log, hỏi xác nhận, kiểm tra reboot-required và dọn dẹp sau cập nhật."
                    />
                    <UpdateScriptSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="8"
                        color="teal"
                        icon={<ListChecks size={22} />}
                        title="Tóm tắt nhanh"
                        subtitle="Các lệnh APT, kiểm tra reboot, xử lý lỗi và mẹo cần nhớ sau bài 10.1."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <PackageCheck className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức bài 10.1
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Ôn lại apt update/upgrade, reboot-required,
                                    autoremove, lock APT và dpkg --configure -a.
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
                        Bạn đã biết cập nhật và vá lỗi bảo mật an toàn. Tiếp
                        theo là bảo vệ đăng nhập bằng SSH keys.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                        Bài tiếp theo: 10.2 — Quản lý khóa SSH{" "}
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
        orange: "bg-orange-500/20 text-orange-400",
        purple: "bg-purple-500/20 text-purple-400",
        red: "bg-red-500/20 text-red-400",
        cyan: "bg-cyan-500/20 text-cyan-400",
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

function WhyUpdateCard() {
    const items = [
        [ShieldAlert, "Lỗ hổng bảo mật", "Có thể bị khai thác qua mạng"],
        [Bug, "Lỗi phần mềm", "Crash, treo service, sai logic"],
        [PackageOpen, "Thư viện cũ", "openssl, curl, libc, systemd..."],
        [Zap, "Hiệu năng", "Bản mới có thể tối ưu tốt hơn"],
    ];
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-orange-500/15 text-orange-400 rounded-2xl flex items-center justify-center">
                    <ShieldCheck size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        Vì sao phải cập nhật?
                    </h3>
                    <p className="text-slate-500 text-sm">
                        Ubuntu cũng cần vá lỗi định kỳ
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mb-5">
                {items.map(([Icon, title, desc]) => (
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
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 text-sm text-blue-100 flex gap-3">
                <Info size={20} className="text-blue-400 shrink-0 mt-0.5" />
                <p>
                    Trên Windows có Windows Update. Trên Ubuntu, công cụ thường
                    dùng nhất là <code className="text-white">apt</code>.
                </p>
            </div>
        </div>
    );
}

function AptFlowSimulator() {
    const [step, setStep] = useState(0);
    const steps = [
        [
            "apt update",
            "Đi hỏi kho phần mềm: Có phiên bản mới chưa?",
            "Chưa cài gì vào máy.",
        ],
        [
            "apt list --upgradable",
            "Xem những gói có thể nâng cấp.",
            "Dùng để kiểm tra trước khi cài.",
        ],
        [
            "apt upgrade",
            "Tải và cài bản cập nhật.",
            "Thực sự thay đổi phần mềm trên máy.",
        ],
        [
            "reboot-required",
            "Kiểm tra có cần khởi động lại không.",
            "Thường cần sau kernel hoặc thư viện hệ thống.",
        ],
        [
            "apt autoremove",
            "Dọn gói cũ không còn cần.",
            "Thường là kernel cũ hoặc dependency cũ.",
        ],
    ];
    return (
        <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Activity className="text-orange-400" /> Luồng cập nhật chuẩn
            </h3>
            <p className="text-slate-400 mb-6">
                Bấm từng bước để hiểu vai trò của mỗi lệnh.
            </p>
            <div className="space-y-2 mb-5">
                {steps.map(([cmd], i) => (
                    <button
                        key={cmd}
                        onClick={() => setStep(i)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all ${step === i ? "bg-orange-500/10 border-orange-500/40" : "bg-slate-950 border-slate-800 hover:text-white text-slate-400"}`}
                    >
                        <span className="font-mono text-orange-300 mr-3">
                            {i + 1}
                        </span>
                        <code className="font-bold">{cmd}</code>
                    </button>
                ))}
            </div>
            <div className="bg-black border border-slate-800 rounded-2xl p-5">
                <div className="text-xs text-slate-500 mb-2">Đang xem</div>
                <code className="text-green-400 text-lg font-bold">
                    {steps[step][0]}
                </code>
                <p className="text-slate-300 mt-3">{steps[step][1]}</p>
                <p className="text-slate-500 text-sm mt-2">{steps[step][2]}</p>
            </div>
        </div>
    );
}

function AptConceptSection() {
    return (
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
            <CodeBlock
                title="apt-concepts.sh"
                code={`# 1. Cập nhật danh sách gói, chưa nâng cấp phần mềm\nsudo apt update\n\n# 2. Xem gói nào có thể nâng cấp\napt list --upgradable\n\n# 3. Nâng cấp các gói đã cài\nsudo apt upgrade\n\n# 4. Nâng cấp toàn diện hơn, có thể thêm/gỡ dependency\nsudo apt full-upgrade\n\n# 5. Xóa gói không còn cần\nsudo apt autoremove\n\n# Cập nhật nhanh bằng một dòng\nsudo apt update && sudo apt upgrade`}
            />
            <CheatCard
                title="Phân biệt nhanh"
                rows={[
                    [
                        "apt update",
                        "Cập nhật danh sách phiên bản mới từ kho Ubuntu",
                    ],
                    ["apt upgrade", "Tải và cài bản mới cho gói đã cài"],
                    [
                        "apt full-upgrade",
                        "Xử lý phụ thuộc phức tạp, có thể thêm/xóa gói",
                    ],
                    ["apt autoremove", "Dọn gói phụ thuộc cũ không còn cần"],
                    ["&&", "Lệnh sau chỉ chạy nếu lệnh trước thành công"],
                ]}
            />
        </div>
    );
}

function BasicUpdateWorkflow() {
    const [tab, setTab] = useState("update");
    const tabs = [
        ["update", "apt update"],
        ["list", "upgradable"],
        ["upgrade", "upgrade"],
        ["full", "full-upgrade"],
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
                {tab === "update" && (
                    <CodeBlock
                        title="sudo apt update"
                        code={`sudo apt update\n\n# Output mẫu:\nHit:1 http://vn.archive.ubuntu.com/ubuntu jammy InRelease\nGet:2 http://vn.archive.ubuntu.com/ubuntu jammy-updates InRelease [119 kB]\nGet:3 http://security.ubuntu.com/ubuntu jammy-security InRelease [110 kB]\nFetched 229 kB in 2s\nReading package lists... Done\nBuilding dependency tree... Done\nReading state information... Done\n15 packages can be upgraded. Run 'apt list --upgradable' to see them.\n\n# Hit = kho đã kiểm tra\n# Get = đang tải thông tin mới\n# jammy-security = kho bản vá bảo mật\n# 15 packages can be upgraded = có 15 gói có thể nâng cấp`}
                    />
                )}
                {tab === "list" && (
                    <CodeBlock
                        title="apt list --upgradable"
                        code={`apt list --upgradable\n\n# Output mẫu:\nopenssl/jammy-updates,jammy-security 3.0.2-0ubuntu1.15 amd64 [upgradable from: 3.0.2-0ubuntu1.12]\ncurl/jammy-updates 7.81.0-1ubuntu1.16 amd64 [upgradable from: 7.81.0-1ubuntu1.13]\nlinux-generic/jammy-updates,jammy-security 5.15.0.105.103 amd64 [upgradable from: 5.15.0.92.90]\n\n# Gói cần chú ý:\n# openssl, openssh-server, sudo, systemd, linux-generic, libc6`}
                    />
                )}
                {tab === "upgrade" && (
                    <CodeBlock
                        title="sudo apt upgrade"
                        code={`sudo apt upgrade\n\n# Output mẫu:\nReading package lists... Done\nBuilding dependency tree... Done\nReading state information... Done\nCalculating upgrade... Done\n\nThe following packages will be upgraded:\n  curl openssl linux-generic\n\n3 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.\nNeed to get 45.2 MB of archives.\nAfter this operation, 12.5 MB of additional disk space will be used.\nDo you want to continue? [Y/n]\n\n# Nhập Y rồi Enter để tiếp tục`}
                    />
                )}
                {tab === "full" && (
                    <CodeBlock
                        title="sudo apt full-upgrade"
                        code={`sudo apt full-upgrade\n\n# Dùng khi muốn cập nhật toàn diện hơn\n# Có thể thêm hoặc gỡ gói phụ thuộc nếu cần\n# Đặc biệt hữu ích trên server lâu ngày chưa cập nhật\n\n# Nên xem kỹ phần:\n# The following packages will be REMOVED\n# The following NEW packages will be installed\n# The following packages will be upgraded`}
                    />
                )}
            </div>
        </div>
    );
}

function SecurityUpdateSection() {
    const [needReboot, setNeedReboot] = useState(true);
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="security-update-server.sh"
                code={`# Quy trình cập nhật bảo mật cho Ubuntu Server\n\n# 1. Cập nhật danh sách gói\nsudo apt update\n\n# 2. Xem gói có thể nâng cấp\napt list --upgradable\n\n# 3. Nâng cấp\nsudo apt upgrade\n\n# 4. Kiểm tra có cần reboot không\nls /var/run/reboot-required\n\n# Nếu file tồn tại → cần reboot\nsudo reboot\n\n# Trước khi reboot server thật, kiểm tra dịch vụ quan trọng:\nsystemctl status nginx\nsystemctl status mysql\nsystemctl status ssh`}
            />
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 h-fit">
                <h4 className="font-bold text-white mb-4">
                    Mô phỏng reboot-required
                </h4>
                <button
                    onClick={() => setNeedReboot((v) => !v)}
                    className={`w-full p-4 rounded-xl border font-bold mb-5 ${needReboot ? "bg-orange-500 text-white border-orange-500" : "bg-slate-900 border-slate-800 text-slate-400"}`}
                >
                    {needReboot ? "Đang cần reboot" : "Chưa cần reboot"}
                </button>
                <pre className="bg-black border border-slate-800 rounded-xl p-4 text-sm whitespace-pre-wrap">
                    <code
                        className={
                            needReboot ? "text-yellow-400" : "text-green-400"
                        }
                    >
                        {needReboot
                            ? `$ ls /var/run/reboot-required\n/var/run/reboot-required\n\n→ Kernel/thư viện hệ thống đã cập nhật.\n→ Nên reboot ở thời điểm an toàn.`
                            : `$ ls /var/run/reboot-required\nls: cannot access '/var/run/reboot-required': No such file or directory\n\n→ Chưa cần reboot.`}
                    </code>
                </pre>
            </div>
        </div>
    );
}

function CleanupSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="cleanup-after-update.sh"
                code={`sudo apt autoremove\n\n# Output mẫu:\nReading package lists... Done\nBuilding dependency tree... Done\nReading state information... Done\n\nThe following packages will be REMOVED:\n  linux-headers-5.15.0-72 linux-image-5.15.0-72-generic\n\n0 upgraded, 0 newly installed, 2 to remove and 0 not upgraded.\nAfter this operation, 320 MB disk space will be freed.\nDo you want to continue? [Y/n]\n\n# Thường có thể chọn Y\n# Nhưng nếu đang debug kernel/driver đặc biệt, hãy cẩn thận hơn`}
            />
            <div className="space-y-4">
                <ExplainCard
                    icon={<Trash2 size={20} />}
                    title="autoremove dọn gì?"
                    desc="Gói phụ thuộc không còn được gói nào cần nữa, ví dụ kernel cũ."
                />
                <ExplainCard
                    icon={<AlertTriangle size={20} />}
                    title="Đọc danh sách trước"
                    desc="Nếu thấy gói quan trọng bị remove ngoài dự kiến, hãy dừng lại bằng n."
                    danger
                />
                <ExplainCard
                    icon={<Database size={20} />}
                    title="Giải phóng dung lượng"
                    desc="Sau nhiều lần cập nhật kernel, autoremove có thể giải phóng hàng trăm MB đến vài GB."
                />
            </div>
        </div>
    );
}

function CommonErrorsSection() {
    const [tab, setTab] = useState("sudo");
    const tabs = [
        ["sudo", "Quên sudo"],
        ["lock", "APT lock"],
        ["network", "Mất mạng"],
        ["dpkg", "dpkg interrupted"],
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
                {tab === "sudo" && (
                    <CodeBlock
                        title="permission-denied.sh"
                        code={`apt upgrade\n\n# Lỗi:\nE: Could not open lock file /var/lib/dpkg/lock-frontend - open (13: Permission denied)\nE: Unable to acquire the dpkg frontend lock\n\n# Sửa:\nsudo apt upgrade`}
                    />
                )}
                {tab === "lock" && (
                    <CodeBlock
                        title="apt-lock.sh"
                        code={`sudo apt update\n\n# Lỗi:\nE: Could not get lock /var/lib/apt/lists/lock. It is held by process 1234 (apt)\nE: Unable to lock directory /var/lib/apt/lists/\n\n# Kiểm tra tiến trình apt:\nps aux | grep apt\n\n# Nếu apt thật sự đang chạy, hãy chờ nó hoàn thành.\n# Không vội xóa file lock nếu chưa hiểu rõ, vì có thể làm hỏng trạng thái cài đặt gói.`}
                    />
                )}
                {tab === "network" && (
                    <CodeBlock
                        title="network-or-mirror-error.sh"
                        code={`sudo apt update\n\n# Lỗi:\nErr:1 http://vn.archive.ubuntu.com/ubuntu jammy InRelease\n  Temporary failure resolving 'vn.archive.ubuntu.com'\nW: Some index files failed to download. They have been ignored\n\n# Kiểm tra mạng/DNS:\nping google.com\nping 8.8.8.8\nresolvectl status\n\n# Nguyên nhân có thể:\n# - Mất internet\n# - DNS lỗi\n# - Mirror Ubuntu chậm/lỗi\n# - Proxy/VPN chặn kết nối`}
                    />
                )}
                {tab === "dpkg" && (
                    <CodeBlock
                        title="dpkg-interrupted.sh"
                        code={`sudo apt upgrade\n\n# Lỗi:\nE: dpkg was interrupted, you must manually run 'sudo dpkg --configure -a'\n\n# Sửa đúng theo gợi ý:\nsudo dpkg --configure -a\n\n# Sau đó chạy lại:\nsudo apt update\nsudo apt upgrade`}
                    />
                )}
            </div>
        </div>
    );
}

function ServerSafeWorkflow() {
    return (
        <CodeBlock
            title="safe-server-update.sh"
            code={`# 1. Kiểm tra dịch vụ đang chạy\nsystemctl status nginx\nsystemctl status mysql\nsystemctl status ssh\n\n# 2. Kiểm tra người dùng và tải hệ thống\nw\nuptime\n\n# 3. Cập nhật\nsudo apt update\napt list --upgradable\nsudo apt upgrade\n\n# 4. Kiểm tra reboot\nif [ -f /var/run/reboot-required ]; then\n    echo "Server cần reboot"\n    cat /var/run/reboot-required.pkgs 2>/dev/null || true\nfi\n\n# 5. Reboot vào giờ thấp điểm\nsudo reboot\n\n# 6. Sau reboot, kiểm tra lại\nuptime\nsystemctl status nginx\nsystemctl status mysql\nsystemctl status ssh`}
            note="Với server thật, không reboot tùy tiện trong giờ cao điểm. Hãy chọn maintenance window và có kế hoạch rollback."
        />
    );
}

function UpdateScriptSection() {
    return (
        <CodeBlock
            title="update_system.sh"
            code={`#!/bin/bash\nset -euo pipefail\n\nLOG_FILE="/var/log/update_system.log"\nRED='\\033[0;31m'; GREEN='\\033[0;32m'; YELLOW='\\033[1;33m'; BLUE='\\033[0;34m'; NC='\\033[0m'\n\nlog() { echo -e "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"; }\n\nif [ "$(id -u)" -ne 0 ]; then\n    echo -e "${"{"}RED{'}'}Vui lòng chạy bằng sudo.${"{"}NC{'}'}"\n    exit 1\nfi\n\nlog "${"{"}BLUE{'}'}=== BẮT ĐẦU CẬP NHẬT HỆ THỐNG ===${"{"}NC{'}'}"\n\nlog "${"{"}YELLOW{'}'}1) apt update...${"{"}NC{'}'}"\napt update\n\nlog "${"{"}YELLOW{'}'}2) Gói có thể nâng cấp:${"{"}NC{'}'}"\napt list --upgradable 2>/dev/null | tee -a "$LOG_FILE"\n\nread -p "Tiếp tục nâng cấp? (y/n): " ans\ncase "$ans" in\n    [Yy]*) ;;\n    *) log "Đã hủy."; exit 0 ;;\nesac\n\nlog "${"{"}YELLOW{'}'}3) apt upgrade...${"{"}NC{'}'}"\napt upgrade -y\n\nlog "${"{"}YELLOW{'}'}4) autoremove...${"{"}NC{'}'}"\napt autoremove -y\n\nif [ -f /var/run/reboot-required ]; then\n    log "${"{"}YELLOW{'}'}⚠ Hệ thống cần reboot.${"{"}NC{'}'}"\n    if [ -f /var/run/reboot-required.pkgs ]; then\n        log "Các gói yêu cầu reboot:"\n        cat /var/run/reboot-required.pkgs | tee -a "$LOG_FILE"\n    fi\nelse\n    log "${"{"}GREEN{'}'}Không cần reboot.${"{"}NC{'}'}"\nfi\n\nlog "${"{"}GREEN{'}'}=== HOÀN TẤT CẬP NHẬT ===${"{"}NC{'}'}"\n\n# Cài đặt:\n# chmod +x update_system.sh\n# sudo ./update_system.sh`}
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
            title: "APT cơ bản",
            rows: [
                ["apt update", "lấy danh sách gói"],
                ["apt list --upgradable", "xem gói mới"],
                ["apt upgrade", "nâng cấp"],
                ["apt full-upgrade", "nâng cấp toàn diện"],
                ["apt autoremove", "dọn gói cũ"],
            ],
        },
        {
            title: "Bảo mật",
            rows: [
                ["jammy-security", "kho bản vá"],
                ["openssl", "mã hóa"],
                ["openssh-server", "SSH"],
                ["sudo", "quyền admin"],
                ["linux-generic", "kernel"],
            ],
        },
        {
            title: "Reboot",
            rows: [
                ["/var/run/reboot-required", "cần reboot"],
                ["reboot-required.pkgs", "gói yêu cầu"],
                ["sudo reboot", "khởi động lại"],
                ["systemctl status", "kiểm tra dịch vụ"],
            ],
        },
        {
            title: "Lỗi thường gặp",
            rows: [
                ["Permission denied", "thiếu sudo"],
                ["APT lock", "apt khác đang chạy"],
                ["Temporary failure", "mạng/DNS/mirror"],
                ["dpkg interrupted", "cài dở dang"],
            ],
        },
        {
            title: "Sửa lỗi",
            rows: [
                ["sudo", "chạy quyền admin"],
                ["ps aux | grep apt", "kiểm tra lock"],
                ["ping google.com", "kiểm tra mạng"],
                ["dpkg --configure -a", "sửa dpkg"],
                ["&&", "chạy nối an toàn"],
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
        question: "Lệnh apt update có thực sự nâng cấp phần mềm không?",
        options: [
            "Có, nó tải và cài bản mới",
            "Không, nó chỉ cập nhật danh sách gói",
            "Có, nhưng chỉ kernel",
            "Không, nó xóa gói cũ",
        ],
        correct: 1,
        explanation:
            "apt update chỉ lấy danh sách phiên bản mới từ kho phần mềm. apt upgrade mới cài bản cập nhật.",
    },
    {
        question: "Lệnh nào xem các gói có thể nâng cấp?",
        options: [
            "apt show all",
            "apt list --upgradable",
            "apt clean --list",
            "dpkg reboot",
        ],
        correct: 1,
        explanation:
            "apt list --upgradable liệt kê các gói đang có phiên bản mới hơn.",
    },
    {
        question: "apt full-upgrade khác apt upgrade ở điểm nào?",
        options: [
            "Không cần sudo",
            "Có thể thêm/gỡ gói phụ thuộc nếu cần",
            "Chỉ tải danh sách",
            "Chỉ dọn cache",
        ],
        correct: 1,
        explanation:
            "full-upgrade xử lý phụ thuộc mạnh hơn, có thể thêm hoặc gỡ gói để hoàn tất nâng cấp.",
    },
    {
        question: "Làm sao kiểm tra hệ thống có cần reboot sau cập nhật không?",
        options: [
            "ls /var/run/reboot-required",
            "apt ping reboot",
            "cat /etc/passwd",
            "sudo apt autoremove",
        ],
        correct: 0,
        explanation:
            "Nếu file /var/run/reboot-required tồn tại, hệ thống cần khởi động lại.",
    },
    {
        question:
            "Lỗi Unable to acquire the dpkg frontend lock do thiếu quyền thì sửa thế nào?",
        options: [
            "Thêm sudo trước lệnh",
            "Xóa toàn bộ /var/lib/dpkg",
            "Reinstall Ubuntu",
            "Chạy zip",
        ],
        correct: 0,
        explanation:
            "Các lệnh thay đổi gói cần quyền quản trị, nên dùng sudo apt upgrade.",
    },
    {
        question: "dpkg was interrupted yêu cầu chạy lệnh nào?",
        options: [
            "sudo dpkg --configure -a",
            "sudo apt remove dpkg",
            "sudo reboot --dpkg",
            "apt list --broken-only",
        ],
        correct: 0,
        explanation:
            "APT thường báo rõ: must manually run sudo dpkg --configure -a để hoàn tất cấu hình bị dở dang.",
    },
    {
        question: "Trước khi reboot server thật, nên làm gì?",
        options: [
            "Kiểm tra dịch vụ quan trọng và chọn giờ thấp điểm",
            "Xóa log ngay",
            "Tắt SSH trước",
            "Không cần kiểm tra gì",
        ],
        correct: 0,
        explanation:
            "Server thật có thể đang chạy website/database/API. Cần kiểm tra dịch vụ và reboot trong maintenance window.",
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
