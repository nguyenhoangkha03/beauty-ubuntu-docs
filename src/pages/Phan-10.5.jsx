import React, { useState } from "react";
import {
    Shield,
    ShieldCheck,
    ShieldAlert,
    Terminal,
    Lock,
    Unlock,
    Server,
    FileText,
    Settings,
    AlertTriangle,
    Info,
    CheckCircle2,
    XCircle,
    Copy,
    ChevronRight,
    RotateCcw,
    Sparkles,
    Eye,
    Bug,
    Wrench,
    ListChecks,
    Search,
    Database,
    FileWarning,
    Activity,
    PackageCheck,
    FolderLock,
    Ban,
    Globe,
    UserX,
    BookOpen,
    Code2,
    RefreshCw,
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
                                Security · AppArmor · Profiles · Enforce
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 10
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 10.5
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" /> Lớp
                        bảo vệ ứng dụng trên Ubuntu
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        AppArmor <br />
                        <span className="text-orange-500">
                            Tường Lửa Ứng Dụng Cơ Bản
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Bạn sẽ hiểu AppArmor là gì, khác gì với{" "}
                        <code className="text-orange-300">ufw</code>, profile là
                        gì, phân biệt{" "}
                        <code className="text-orange-300">enforce</code> và{" "}
                        <code className="text-orange-300">complain</code>, đọc
                        log <code className="text-orange-300">DENIED</code>,
                        bật/tắt profile và debug ứng dụng bị chặn quyền.
                    </p>
                </section>

                <section className="bg-red-500/10 border border-red-500/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-5 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                        <ShieldAlert size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Không disable profile quá vội
                        </h3>
                        <p className="text-red-100 leading-relaxed">
                            Khi ứng dụng bị AppArmor chặn, đừng vội chạy{" "}
                            <code className="text-white">aa-disable</code>. Cách
                            an toàn hơn là chuyển tạm sang{" "}
                            <code className="text-white">complain</code>, đọc
                            log, thêm rule hẹp vào{" "}
                            <code className="text-white">
                                /etc/apparmor.d/local/
                            </code>
                            , reload profile rồi bật lại{" "}
                            <code className="text-white">enforce</code>.
                        </p>
                    </div>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <AppArmorConceptCard />
                    <ModeSimulator />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="blue"
                        icon={<Shield size={22} />}
                        title="AppArmor là gì?"
                        subtitle="ufw kiểm soát port; fail2ban chặn IP xấu; AppArmor giới hạn ứng dụng được làm gì trong hệ thống."
                    />
                    <LayerCompareSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="green"
                        icon={<FileText size={22} />}
                        title="Profile, enforce, complain, unconfined"
                        subtitle="Profile là bộ luật của ứng dụng. Enforce chặn thật, complain chỉ ghi log, unconfined chưa bị giới hạn."
                    />
                    <ProfileModeSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="orange"
                        icon={<Terminal size={22} />}
                        title="Kiểm tra trạng thái AppArmor"
                        subtitle="Dùng systemctl status apparmor và aa-status để xem module, profile loaded, enforce và complain."
                    />
                    <StatusSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="purple"
                        icon={<Settings size={22} />}
                        title="Quản lý profile"
                        subtitle="Chuyển profile sang enforce/complain, disable khi thật sự cần và reload profile sau khi chỉnh cấu hình."
                    />
                    <ProfileManageSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="cyan"
                        icon={<Search size={22} />}
                        title="Đọc log AppArmor DENIED"
                        subtitle="Log DENIED cho biết profile nào chặn, process nào bị chặn, file nào bị truy cập và quyền nào bị từ chối."
                    />
                    <LogDeniedSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="yellow"
                        icon={<Database size={22} />}
                        title="Tình huống thực tế: MySQL đổi thư mục dữ liệu"
                        subtitle="Khi MySQL chuyển từ /var/lib/mysql sang /data/mysql, AppArmor có thể cần local override hẹp."
                    />
                    <MysqlScenarioSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="red"
                        icon={<Bug size={22} />}
                        title="Lỗi phổ biến và cách xử lý"
                        subtitle="aa-status command not found, nhầm lỗi chmod/chown, disable quá vội, quên reload và sai cú pháp profile."
                    />
                    <CommonErrorsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="8"
                        color="pink"
                        icon={<BookOpen size={22} />}
                        title="Bài tập thực hành"
                        subtitle="Kiểm tra AppArmor, đọc profile có sẵn và phân tích một dòng log DENIED."
                    />
                    <PracticeSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="9"
                        color="emerald"
                        icon={<ListChecks size={22} />}
                        title="Tóm tắt nhanh"
                        subtitle="Các lệnh aa-status, aa-enforce, aa-complain, aa-disable, journalctl và apparmor_parser cần nhớ."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <PackageCheck className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức bài 10.5
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Ôn lại AppArmor, profile, enforce/complain,
                                    DENIED log, local override và reload
                                    profile.
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
                            Hoàn thành Phần 10 — Bảo mật cơ bản
                        </h3>
                        <p className="text-slate-400 max-w-2xl mx-auto mb-6">
                            Bạn đã học cập nhật bảo mật, SSH key, ufw, fail2ban,
                            kiểm tra port mở và AppArmor — bộ kỹ năng nền tảng
                            để bảo vệ Ubuntu Server.
                        </p>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                            Phần 11 — Runtime & môi trường lập trình{" "}
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </section>
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
        cyan: "bg-cyan-500/20 text-cyan-400",
        yellow: "bg-yellow-500/20 text-yellow-400",
        red: "bg-red-500/20 text-red-400",
        pink: "bg-pink-500/20 text-pink-400",
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

function AppArmorConceptCard() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-orange-500/15 text-orange-400 rounded-2xl flex items-center justify-center">
                    <FolderLock size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        AppArmor bảo vệ gì?
                    </h3>
                    <p className="text-slate-500 text-sm">
                        Giới hạn quyền của từng ứng dụng
                    </p>
                </div>
            </div>
            <div className="bg-black border border-slate-800 rounded-2xl p-5 font-mono text-sm text-slate-300 whitespace-pre-wrap mb-5">{`ufw       = bảo vệ cửa ra vào server\nfail2ban  = phát hiện người cố phá cửa\nAppArmor  = giới hạn người đã vào nhà được đi đến phòng nào`}</div>
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4">
                    <CheckCircle2 className="text-green-400 mb-3" />
                    <div className="font-bold text-white">
                        Nginx nên được đọc
                    </div>
                    <code className="text-green-300 text-sm">
                        /var/www/html/
                    </code>
                </div>
                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4">
                    <XCircle className="text-red-400 mb-3" />
                    <div className="font-bold text-white">
                        Nginx không nên đọc
                    </div>
                    <code className="text-red-300 text-sm">/etc/shadow</code>
                </div>
            </div>
        </div>
    );
}

function ModeSimulator() {
    const [mode, setMode] = useState("enforce");
    const data = {
        enforce: [
            "Chặn thật",
            "Ứng dụng vi phạm sẽ bị chặn và ghi log DENIED.",
            "bg-red-500/10 border-red-500/20 text-red-300",
        ],
        complain: [
            "Chỉ ghi log",
            "Ứng dụng vi phạm vẫn được chạy, nhưng AppArmor ghi log cảnh báo.",
            "bg-yellow-500/10 border-yellow-500/20 text-yellow-300",
        ],
        unconfined: [
            "Chưa bị giới hạn",
            "Ứng dụng không có profile AppArmor đang áp dụng.",
            "bg-slate-800 border-slate-700 text-slate-300",
        ],
    };
    return (
        <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <ShieldCheck className="text-orange-400" /> Mô phỏng chế độ
                AppArmor
            </h3>
            <p className="text-slate-400 mb-6">
                Ứng dụng cố đọc file không được phép. Chọn mode để xem kết quả.
            </p>
            <div className="grid grid-cols-3 gap-2 mb-5">
                {Object.keys(data).map((key) => (
                    <button
                        key={key}
                        onClick={() => setMode(key)}
                        className={`p-3 rounded-xl border font-bold text-sm ${mode === key ? "bg-orange-500 text-white border-orange-500" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"}`}
                    >
                        {key}
                    </button>
                ))}
            </div>
            <div className={`rounded-2xl border p-5 ${data[mode][2]}`}>
                <div className="text-xs opacity-80 mb-2">Kết quả</div>
                <div className="text-2xl font-black">{data[mode][0]}</div>
                <p className="text-slate-300 mt-3 text-sm">{data[mode][1]}</p>
            </div>
            <pre className="mt-5 bg-black border border-slate-800 rounded-2xl p-4 text-xs text-green-400 overflow-x-auto">
                <code>
                    {mode === "enforce"
                        ? `apparmor="DENIED" operation="open" profile="/usr/sbin/mysqld" name="/data/mysql/ibdata1"`
                        : mode === "complain"
                          ? `apparmor="ALLOWED" operation="open" profile="/usr/sbin/mysqld" name="/data/mysql/ibdata1"`
                          : `unconfined process: no AppArmor profile enforced`}
                </code>
            </pre>
        </div>
    );
}

function LayerCompareSection() {
    return (
        <div className="grid md:grid-cols-3 gap-4">
            <ToolCard
                icon={<Globe />}
                title="ufw"
                subtitle="Tầng mạng / port"
                example="Allow SSH 22, HTTP 80, HTTPS 443"
            />
            <ToolCard
                icon={<Ban />}
                title="fail2ban"
                subtitle="IP đăng nhập sai"
                example="Ban IP brute-force SSH"
            />
            <ToolCard
                icon={<FolderLock />}
                title="AppArmor"
                subtitle="Quyền ứng dụng"
                example="Nginx không được đọc /etc/shadow"
                highlight
            />
        </div>
    );
}

function ToolCard({ icon, title, subtitle, example, highlight }) {
    return (
        <div
            className={`rounded-3xl border p-6 ${highlight ? "bg-orange-500/10 border-orange-500/20" : "bg-slate-900 border-slate-800"}`}
        >
            <div className="text-orange-400 mb-4">{icon}</div>
            <div className="text-xl font-bold text-white mb-1">{title}</div>
            <div className="text-sm text-slate-500 mb-4">{subtitle}</div>
            <p className="text-slate-400 text-sm">{example}</p>
        </div>
    );
}

function ProfileModeSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="apparmor-key-concepts.txt"
                code={`# Profile là file cấu hình mô tả:\n# - Ứng dụng nào bị giới hạn\n# - Được đọc file nào\n# - Được ghi file nào\n# - Được dùng quyền nào\n# - Bị cấm truy cập gì\n\n# Một số profile thường nằm ở:\n/etc/apparmor.d/\n\n# Ví dụ:\n/etc/apparmor.d/usr.bin.man\n/etc/apparmor.d/usr.sbin.cupsd\n/etc/apparmor.d/usr.sbin.mysqld\n\n# Quy ước tên:\n/usr/sbin/mysqld\n→ /etc/apparmor.d/usr.sbin.mysqld`}
            />
            <CheatCard
                title="Chế độ AppArmor"
                rows={[
                    ["enforce", "Chặn thật nếu ứng dụng vi phạm profile"],
                    ["complain", "Không chặn, chỉ ghi log cảnh báo"],
                    ["unconfined", "Ứng dụng chưa bị profile giới hạn"],
                    ["DENIED", "AppArmor đã chặn hành động"],
                ]}
            />
        </div>
    );
}

function StatusSection() {
    const [tab, setTab] = useState("systemctl");
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                <TabButton id="systemctl" tab={tab} setTab={setTab}>
                    systemctl
                </TabButton>
                <TabButton id="aastatus" tab={tab} setTab={setTab}>
                    aa-status
                </TabButton>
                <TabButton id="profiles" tab={tab} setTab={setTab}>
                    profiles
                </TabButton>
            </div>
            <div className="p-5">
                {tab === "systemctl" && (
                    <CodeBlock
                        title="check-apparmor-service.sh"
                        code={`sudo systemctl status apparmor\n\n# Output mong muốn:\n# ● apparmor.service - Load AppArmor profiles\n#      Loaded: loaded (/lib/systemd/system/apparmor.service; enabled)\n#      Active: active (exited)\n\n# active (exited) không phải lỗi.\n# AppArmor đã nạp profile vào kernel rồi service có thể thoát.`}
                    />
                )}
                {tab === "aastatus" && (
                    <CodeBlock
                        title="aa-status.sh"
                        code={`# Nếu chưa có aa-status:\nsudo apt update\nsudo apt install apparmor-utils\n\n# Kiểm tra trạng thái:\nsudo aa-status\n\n# Output mẫu:\napparmor module is loaded.\n45 profiles are loaded.\n20 profiles are in enforce mode.\n5 profiles are in complain mode.\n0 profiles are in kill mode.\n0 profiles are in unconfined mode.`}
                    />
                )}
                {tab === "profiles" && (
                    <CodeBlock
                        title="list-apparmor-profiles.sh"
                        code={`ls /etc/apparmor.d/\n\n# Output mẫu:\nabstractions\ndisable\nforce-complain\nlocal\ntunables\nusr.bin.man\nusr.sbin.cupsd\nusr.sbin.mysqld\n\n# local/ là nơi thêm tùy chỉnh cục bộ.\n# abstractions/ chứa các đoạn cấu hình dùng chung.`}
                    />
                )}
            </div>
        </div>
    );
}

function ProfileManageSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="manage-apparmor-profile.sh"
                code={`# Chuyển profile sang complain mode để debug\nsudo aa-complain /etc/apparmor.d/usr.sbin.mysqld\n\n# Kiểm tra lại\nsudo aa-status\n\n# Chuyển profile về enforce mode sau khi debug xong\nsudo aa-enforce /etc/apparmor.d/usr.sbin.mysqld\n\n# Disable profile, không nên lạm dụng\nsudo aa-disable /etc/apparmor.d/usr.sbin.mysqld\n\n# Reload toàn bộ AppArmor\nsudo systemctl reload apparmor\n\n# Reload một profile cụ thể\nsudo apparmor_parser -r /etc/apparmor.d/usr.sbin.mysqld`}
            />
            <div className="space-y-4">
                <ExplainCard
                    icon={<Eye />}
                    title="aa-complain"
                    desc="Debug an toàn: không chặn, chỉ ghi log."
                />
                <ExplainCard
                    icon={<ShieldCheck />}
                    title="aa-enforce"
                    desc="Bật lại chế độ bảo vệ thật sau khi sửa rule."
                />
                <ExplainCard
                    icon={<XCircle />}
                    title="aa-disable"
                    desc="Tắt profile, chỉ dùng khi có lý do rõ ràng."
                    danger
                />
                <ExplainCard
                    icon={<RefreshCw />}
                    title="apparmor_parser -r"
                    desc="Nạp lại profile sau khi chỉnh cấu hình."
                />
            </div>
        </div>
    );
}

function LogDeniedSection() {
    return (
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
            <CodeBlock
                title="read-apparmor-denied-log.sh"
                code={`# Tìm log AppArmor\nsudo journalctl -k | grep -i apparmor\n\n# Tìm riêng các hành động bị chặn\nsudo journalctl -k | grep 'apparmor="DENIED"'\n\n# Hoặc xem syslog\nsudo grep -i apparmor /var/log/syslog\n\n# Log mẫu:\naudit: type=1400 audit(1714123456.123:95): apparmor="DENIED" operation="open" profile="/usr/sbin/mysqld" name="/data/mysql/ibdata1" pid=1330 comm="mysqld" requested_mask="r" denied_mask="r"`}
            />
            <CheatCard
                title="Giải thích log DENIED"
                rows={[
                    ["apparmor=DENIED", "AppArmor đã chặn hành động"],
                    ["operation=open", "Ứng dụng cố mở file"],
                    ["profile=/usr/sbin/mysqld", "Profile đang áp dụng"],
                    ["name=/data/mysql/ibdata1", "File bị truy cập"],
                    ["comm=mysqld", "Process thực hiện hành động"],
                    ["requested_mask=r", "Muốn quyền đọc"],
                    ["denied_mask=r", "Quyền đọc bị từ chối"],
                ]}
            />
        </div>
    );
}

function MysqlScenarioSection() {
    return (
        <CodeBlock
            title="mysql-data-dir-apparmor-fix.sh"
            code={`# Tình huống:\n# MySQL chuyển data dir từ /var/lib/mysql/ sang /data/mysql/\n# MySQL failed, log AppArmor có DENIED:\n# name="/data/mysql/ibdata1" requested_mask="r" denied_mask="r"\n\n# 1. Kiểm tra service\nsudo systemctl status mysql\n\n# 2. Kiểm tra log AppArmor\nsudo journalctl -k | grep -i apparmor\n\n# 3. Không disable vội. Thêm local override hẹp:\nsudo nano /etc/apparmor.d/local/usr.sbin.mysqld\n\n# Thêm rule:\n/data/mysql/ r,\n/data/mysql/** rwk,\n\n# Ý nghĩa:\n# /data/mysql/ r,      → cho phép đọc thư mục\n# /data/mysql/** rwk,  → cho phép đọc/ghi/lock file bên trong\n\n# 4. Reload profile\nsudo apparmor_parser -r /etc/apparmor.d/usr.sbin.mysqld\n\n# 5. Restart MySQL\nsudo systemctl restart mysql\n\n# 6. Kiểm tra lại\nsudo systemctl status mysql\nsudo journalctl -k | grep 'apparmor="DENIED"' | tail`}
            note="Không cấp quyền quá rộng như /data/** rwk, nếu chỉ MySQL cần /data/mysql/. Nguyên tắc là cấp quyền vừa đủ."
        />
    );
}

function CommonErrorsSection() {
    const [tab, setTab] = useState("missing");
    const tabs = [
        ["missing", "aa-status missing"],
        ["chmod", "Nhầm chmod"],
        ["disable", "Disable vội"],
        ["reload", "Quên reload"],
        ["syntax", "Sai cú pháp"],
    ];
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                {tabs.map(([id, label]) => (
                    <TabButton key={id} id={id} tab={tab} setTab={setTab}>
                        {label}
                    </TabButton>
                ))}
            </div>
            <div className="p-5">
                {tab === "missing" && (
                    <CodeBlock
                        title="aa-status-command-not-found.sh"
                        code={`sudo aa-status\n# sudo: aa-status: command not found\n\n# Nguyên nhân: chưa cài apparmor-utils\n\n# Sửa:\nsudo apt update\nsudo apt install apparmor-utils\nsudo aa-status`}
                    />
                )}
                {tab === "chmod" && (
                    <CodeBlock
                        title="apparmor-vs-file-permission.sh"
                        code={`# Quyền file có vẻ đúng:\nls -l /data/mysql/\n# -rw-r----- 1 mysql mysql 12582912 ibdata1\n\n# Nhưng MySQL vẫn không chạy. Kiểm tra AppArmor:\nsudo journalctl -k | grep -i apparmor\n\n# Nếu thấy apparmor="DENIED" thì chmod/chown không đủ.\n# Cần chỉnh AppArmor profile hoặc local override.`}
                    />
                )}
                {tab === "disable" && (
                    <CodeBlock
                        title="dont-disable-too-fast.sh"
                        code={`# Không nên lạm dụng:\nsudo aa-disable /etc/apparmor.d/usr.sbin.mysqld\n\n# Tốt hơn khi debug:\nsudo aa-complain /etc/apparmor.d/usr.sbin.mysqld\n\n# Sau khi hiểu lỗi, thêm rule phù hợp rồi bật lại:\nsudo aa-enforce /etc/apparmor.d/usr.sbin.mysqld`}
                    />
                )}
                {tab === "reload" && (
                    <CodeBlock
                        title="forgot-reload-profile.sh"
                        code={`# Bạn đã sửa file nhưng lỗi vẫn còn? Có thể quên reload.\n\n# Reload profile cụ thể:\nsudo apparmor_parser -r /etc/apparmor.d/usr.sbin.mysqld\n\n# Hoặc reload service AppArmor:\nsudo systemctl reload apparmor\n\n# Restart ứng dụng liên quan:\nsudo systemctl restart mysql`}
                    />
                )}
                {tab === "syntax" && (
                    <CodeBlock
                        title="apparmor-syntax-error.sh"
                        code={`sudo apparmor_parser -r /etc/apparmor.d/usr.sbin.mysqld\n# AppArmor parser error ... line 25: syntax error\n\n# Sai: thiếu dấu phẩy cuối dòng\n/data/mysql/** rwk\n\n# Đúng:\n/data/mysql/** rwk,\n\n# Sửa file local override:\nsudo nano /etc/apparmor.d/local/usr.sbin.mysqld\n\n# Reload lại:\nsudo apparmor_parser -r /etc/apparmor.d/usr.sbin.mysqld`}
                    />
                )}
            </div>
        </div>
    );
}

function PracticeSection() {
    return (
        <div className="grid lg:grid-cols-3 gap-4">
            <PracticeCard
                level="Dễ"
                title="Kiểm tra trạng thái"
                code={`sudo systemctl status apparmor\nsudo aa-status`}
                tasks={[
                    "AppArmor có đang bật không?",
                    "Có bao nhiêu profile loaded?",
                    "Bao nhiêu profile enforce?",
                    "Bao nhiêu profile complain?",
                ]}
            />
            <PracticeCard
                level="Trung bình"
                title="Đọc profile"
                code={`ls /etc/apparmor.d/`}
                tasks={[
                    "Chọn 3 profile bất kỳ",
                    "Đổi dấu . thành / để đoán chương trình",
                    "Ví dụ usr.sbin.cupsd → /usr/sbin/cupsd",
                ]}
            />
            <PracticeCard
                level="Nâng cao"
                title="Phân tích DENIED"
                code={`apparmor="DENIED" operation="open" profile="/usr/sbin/mysqld" name="/data/mysql/ibdata1" requested_mask="r" denied_mask="r"`}
                tasks={[
                    "Ứng dụng nào bị chặn?",
                    "File nào bị chặn?",
                    "Muốn quyền gì?",
                    "Nên thêm rule hẹp hay disable?",
                ]}
            />
        </div>
    );
}

function PracticeCard({ level, title, code, tasks }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <div className="text-xs text-orange-300 font-bold uppercase mb-2">
                {level}
            </div>
            <h4 className="font-bold text-white mb-3">{title}</h4>
            <pre className="bg-black/50 border border-slate-800 rounded-xl p-3 text-xs text-green-400 overflow-x-auto mb-4">
                <code>{code}</code>
            </pre>
            <ul className="space-y-2 text-sm text-slate-400">
                {tasks.map((t) => (
                    <li key={t} className="flex gap-2">
                        <CheckCircle2
                            size={15}
                            className="text-green-400 shrink-0 mt-0.5"
                        />
                        {t}
                    </li>
                ))}
            </ul>
        </div>
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

function TabButton({ id, tab, setTab, children }) {
    return (
        <button
            onClick={() => setTab(id)}
            className={`px-4 py-2 rounded-xl text-sm font-bold ${tab === id ? "bg-orange-500 text-white" : "bg-slate-900 text-slate-400 hover:text-slate-200"}`}
        >
            {children}
        </button>
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
            title: "Khái niệm",
            rows: [
                ["AppArmor", "giới hạn quyền ứng dụng"],
                ["Profile", "bộ luật ứng dụng"],
                ["enforce", "chặn thật"],
                ["complain", "chỉ ghi log"],
                ["unconfined", "chưa bị giới hạn"],
            ],
        },
        {
            title: "Trạng thái",
            rows: [
                ["systemctl status apparmor", "xem service"],
                ["aa-status", "xem profile"],
                ["/etc/apparmor.d/", "thư mục profile"],
                ["local/", "override cục bộ"],
            ],
        },
        {
            title: "Quản lý",
            rows: [
                ["aa-enforce", "bật chặn thật"],
                ["aa-complain", "debug không chặn"],
                ["aa-disable", "tắt profile"],
                ["apparmor_parser -r", "reload profile"],
                ["systemctl reload", "reload service"],
            ],
        },
        {
            title: "Log",
            rows: [
                ["journalctl -k", "kernel log"],
                ["grep -i apparmor", "lọc AppArmor"],
                ["DENIED", "bị chặn"],
                ["operation", "hành động"],
                ["requested_mask", "quyền muốn dùng"],
            ],
        },
        {
            title: "Rule",
            rows: [
                ["r", "read"],
                ["w", "write"],
                ["k", "lock"],
                ["/data/mysql/ r,", "đọc thư mục"],
                ["/data/mysql/** rwk,", "file bên trong"],
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
        question: "AppArmor kiểm soát điều gì?",
        options: [
            "Quyền của ứng dụng trong hệ thống",
            "Chỉ port mạng",
            "Chỉ IP brute-force",
            "Chỉ dung lượng ổ đĩa",
        ],
        correct: 0,
        explanation:
            "AppArmor giới hạn ứng dụng được đọc/ghi file nào, dùng quyền gì và làm gì trong hệ thống.",
    },
    {
        question: "AppArmor có thay thế ufw không?",
        options: [
            "Không, ufw bảo vệ tầng mạng còn AppArmor bảo vệ tầng ứng dụng",
            "Có, bật AppArmor thì bỏ ufw",
            "Có, AppArmor chỉ mở port",
            "Không liên quan bảo mật",
        ],
        correct: 0,
        explanation:
            "Hai công cụ bảo vệ hai tầng khác nhau và nên dùng cùng nhau.",
    },
    {
        question: "Enforce mode nghĩa là gì?",
        options: [
            "Chặn thật khi ứng dụng vi phạm profile",
            "Không chặn chỉ log",
            "Tắt profile",
            "Xóa profile",
        ],
        correct: 0,
        explanation:
            "Enforce là chế độ bảo vệ thật: vi phạm profile sẽ bị chặn và ghi log.",
    },
    {
        question: "Complain mode phù hợp khi nào?",
        options: [
            "Khi debug profile vì chỉ ghi log, không chặn",
            "Khi muốn xóa ứng dụng",
            "Khi muốn mở port 80",
            "Khi muốn format ổ",
        ],
        correct: 0,
        explanation:
            "Complain giúp quan sát hành vi bị coi là vi phạm mà chưa chặn ứng dụng.",
    },
    {
        question: "Lệnh nào xem trạng thái profile AppArmor?",
        options: [
            "sudo aa-status",
            "sudo ufw numbered",
            "sudo ss -tulpn",
            "sudo tar -xzf",
        ],
        correct: 0,
        explanation:
            "aa-status hiển thị module, số profile loaded, enforce, complain và unconfined.",
    },
    {
        question:
            'Log apparmor="DENIED" operation="open" profile="/usr/sbin/mysqld" name="/data/mysql/ibdata1" requested_mask="r" cho biết gì?',
        options: [
            "MySQL muốn đọc /data/mysql/ibdata1 nhưng bị AppArmor chặn",
            "MySQL đã mở port 3306",
            "ufw đang tắt",
            "File đã bị nén",
        ],
        correct: 0,
        explanation:
            "profile mysqld chặn quyền đọc r với file /data/mysql/ibdata1.",
    },
    {
        question: "Sau khi sửa local override AppArmor, cần làm gì?",
        options: [
            "Reload profile bằng apparmor_parser -r hoặc reload apparmor rồi restart ứng dụng",
            "Chỉ logout",
            "Chạy apt autoremove",
            "Đổi port SSH",
        ],
        correct: 0,
        explanation:
            "Profile phải được nạp lại vào kernel, sau đó restart ứng dụng liên quan để kiểm tra.",
    },
    {
        question: "Rule nào hẹp và phù hợp hơn cho MySQL data dir mới?",
        options: [
            "/data/mysql/ r, và /data/mysql/** rwk,",
            "/data/** rwk,",
            "/** rwk,",
            "aa-disable mọi profile",
        ],
        correct: 0,
        explanation: "Cấp quyền càng hẹp càng tốt, chỉ đúng thư mục MySQL cần.",
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
