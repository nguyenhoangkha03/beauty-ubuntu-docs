import React, { useMemo, useState } from "react";
import {
    Shield,
    Crown,
    KeyRound,
    User,
    Users,
    TerminalSquare,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    Info,
    Lock,
    Unlock,
    FileText,
    FileCode2,
    ScrollText,
    Activity,
    Eye,
    Server,
    Clock,
    ChevronRight,
    Play,
    RefreshCcw,
    ClipboardCheck,
    Settings,
    UserPlus,
    UserMinus,
    Bug,
    BookOpen,
    ShieldCheck,
    GitBranch,
    Fingerprint,
    Home,
    Zap,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-amber-500 selection:text-slate-950 pb-20">
            {/* Header */}
            <header className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50 backdrop-blur">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🐧</span>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Linux/Ubuntu
                            </h1>
                            <p className="text-xs text-slate-500 hidden md:block">
                                User, Permission, sudo và bảo mật hệ thống
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400 hidden md:inline-block">
                            Bài trước: 4.2
                        </span>
                        <div className="text-sm font-medium text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                            Phần 4.3
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                {/* Title */}
                <section className="text-center space-y-5 py-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm font-medium">
                        <Shield size={16} /> Quyền tối cao trong Linux
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Lệnh{" "}
                        <span className="text-amber-400 font-mono">sudo</span>{" "}
                        và Tài khoản{" "}
                        <span className="text-rose-400 font-mono">root</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Bài này giúp bạn hiểu vì sao <strong>root</strong> nguy
                        hiểm, vì sao Ubuntu khuyến khích dùng{" "}
                        <strong>sudo</strong>, cách đọc cấu hình{" "}
                        <code>/etc/sudoers</code>, cấp quyền đúng chuẩn và xử lý
                        sự cố khi sudo bị lỗi.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4">
                        {[
                            [Crown, "Root", "God mode"],
                            [KeyRound, "sudo", "Từng lệnh"],
                            [FileCode2, "sudoers", "Bản đồ quyền"],
                            [ScrollText, "log", "Ai đã làm gì"],
                        ].map(([Icon, title, desc]) => (
                            <div
                                key={title}
                                className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 text-left"
                            >
                                <Icon
                                    className="text-amber-400 mb-3"
                                    size={24}
                                />
                                <div className="font-bold text-white">
                                    {title}
                                </div>
                                <div className="text-xs text-slate-500">
                                    {desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 1 Root concept */}
                <section className="space-y-6">
                    <SectionTitle
                        n="1"
                        color="rose"
                        icon={<Crown size={22} />}
                        title="ROOT là gì? Tại sao nguy hiểm?"
                    />
                    <div className="grid lg:grid-cols-5 gap-6">
                        <div className="lg:col-span-3 bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                            <div className="flex items-start gap-5">
                                <div className="bg-rose-500/15 text-rose-400 p-4 rounded-2xl border border-rose-500/20">
                                    <Crown size={42} />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-white">
                                        Root = Superuser = God Mode
                                    </h3>
                                    <p className="text-slate-300">
                                        <strong>root</strong> là tài khoản có
                                        quyền cao nhất trong Linux. Nó có thể bỏ
                                        qua permission, đọc file của mọi user,
                                        cài/gỡ phần mềm, thay đổi hệ thống, tắt
                                        dịch vụ và xóa bất kỳ file nào.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <MiniPoint
                                            icon={<CheckCircle2 size={18} />}
                                            tone="green"
                                            title="Có thể làm mọi thứ"
                                            text="Cài package, sửa /etc, restart service, đổi owner, đọc log hệ thống."
                                        />
                                        <MiniPoint
                                            icon={<AlertTriangle size={18} />}
                                            tone="rose"
                                            title="Sai một lệnh là thảm họa"
                                            text="Gõ nhầm đường dẫn, nhầm ổ đĩa hoặc chạy malware bằng root đều rất nguy hiểm."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <DangerCommandDemo />
                    </div>
                </section>

                {/* 2 comparison */}
                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="2"
                        color="blue"
                        icon={<GitBranch size={22} />}
                        title="Sự khác biệt: root trực tiếp vs sudo"
                    />
                    <RootVsSudoTable />
                </section>

                {/* 3 sudo flow */}
                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="3"
                        color="amber"
                        icon={<Activity size={22} />}
                        title="sudo hoạt động như thế nào?"
                    />
                    <SudoFlowSimulator />
                </section>

                {/* 4 commands */}
                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="4"
                        color="teal"
                        icon={<TerminalSquare size={22} />}
                        title="Cú pháp sudo cơ bản"
                    />
                    <div className="grid lg:grid-cols-2 gap-6">
                        <CommandCard
                            title="Chạy lệnh với quyền cao hơn"
                            icon={<Zap size={20} />}
                            lines={[
                                [
                                    "# Chạy 1 lệnh với quyền root",
                                    "sudo apt update",
                                ],
                                [
                                    "# Restart service hệ thống",
                                    "sudo systemctl restart nginx",
                                ],
                                ["# Sửa file hệ thống", "sudo nano /etc/hosts"],
                                [
                                    "# Chạy với quyền user khác",
                                    "sudo -u www-data ls /var/www/html/",
                                ],
                            ]}
                        />
                        <CommandCard
                            title="Root shell, cache và kiểm tra quyền"
                            icon={<Fingerprint size={20} />}
                            lines={[
                                [
                                    "# Mở shell root, giữ môi trường hiện tại",
                                    "sudo -s",
                                ],
                                [
                                    "# Mở shell root như đăng nhập root thật",
                                    "sudo -i",
                                ],
                                [
                                    "# Xóa cache sudo, buộc nhập mật khẩu lại",
                                    "sudo -k",
                                ],
                                ["# Xem bạn được sudo những gì", "sudo -l"],
                            ]}
                        />
                    </div>
                    <SudoShellCompare />
                </section>

                {/* 5 sudoers */}
                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="5"
                        color="purple"
                        icon={<FileCode2 size={22} />}
                        title="File /etc/sudoers — trung tâm điều khiển"
                    />
                    <div className="bg-gradient-to-br from-purple-950/30 to-slate-900 border border-purple-500/30 rounded-3xl p-6 md:p-8">
                        <div className="grid lg:grid-cols-2 gap-6 items-start">
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-purple-500/20 text-purple-300 p-3 rounded-2xl">
                                        <FileText size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">
                                            /etc/sudoers = bản đồ quyền hạn sudo
                                        </h3>
                                        <p className="text-slate-300 mt-2">
                                            File này quyết định user hoặc group
                                            nào được chạy lệnh nào, chạy với tư
                                            cách ai, có cần mật khẩu không và có
                                            log thêm input/output không.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-rose-500/10 border border-rose-500/30 rounded-2xl p-4 flex gap-3 text-rose-200">
                                    <AlertTriangle
                                        className="shrink-0 mt-0.5"
                                        size={20}
                                    />
                                    <div>
                                        <strong className="text-white">
                                            Không sửa trực tiếp bằng nano/vim.
                                        </strong>
                                        <p className="text-sm mt-1">
                                            Luôn dùng <code>sudo visudo</code>{" "}
                                            vì visudo kiểm tra cú pháp trước khi
                                            lưu. Sai sudoers có thể làm toàn bộ
                                            hệ thống mất khả năng sudo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <TerminalBlock
                                title="Cấu trúc sudoers rút gọn"
                                code={`# Defaults
Defaults env_reset
Defaults timestamp_timeout=15
Defaults passwd_tries=3

# WHO  WHERE=(AS_WHOM) COMMAND
root   ALL=(ALL:ALL) ALL
%sudo  ALL=(ALL:ALL) ALL

# Include file riêng
@includedir /etc/sudoers.d`}
                            />
                        </div>
                    </div>
                    <SudoersBuilder />
                </section>

                {/* 6 sudoers.d */}
                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="6"
                        color="cyan"
                        icon={<Settings size={22} />}
                        title="/etc/sudoers.d/ — quản lý quyền theo file riêng"
                    />
                    <div className="grid lg:grid-cols-3 gap-5">
                        <PracticeCard
                            icon={<FileCode2 />}
                            title="Tạo file riêng"
                            code={`sudo visudo -f /etc/sudoers.d/deploy

deploy ALL=(ALL) NOPASSWD: /srv/deploy.sh`}
                        />
                        <PracticeCard
                            icon={<Lock />}
                            title="Permission đúng"
                            code={`sudo chmod 0440 /etc/sudoers.d/deploy
# hoặc
sudo chmod 0640 /etc/sudoers.d/deploy`}
                        />
                        <PracticeCard
                            icon={<UserMinus />}
                            title="Thu hồi nhanh"
                            code={`sudo rm /etc/sudoers.d/intern01
# Xóa file = mất quyền ngay`}
                        />
                    </div>
                </section>

                {/* 7 Ubuntu root and su */}
                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="7"
                        color="green"
                        icon={<Lock size={22} />}
                        title="Tài khoản root trong Ubuntu và lệnh su"
                    />
                    <div className="grid lg:grid-cols-2 gap-6">
                        <div className="bg-slate-800 rounded-3xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                <Lock className="text-green-400" /> Ubuntu khóa
                                root mặc định
                            </h3>
                            <p className="text-slate-300 text-sm mb-4">
                                Ubuntu không đặt mật khẩu root mặc định. Vì vậy
                                root bị khóa, không đăng nhập trực tiếp bằng{" "}
                                <code>su -</code> hoặc SSH root theo mặc định.
                            </p>
                            <TerminalBlock
                                title="Root bị khóa"
                                code={`$ sudo grep root /etc/shadow
root:!:19000:0:99999:7:::
#    ↑ ! = tài khoản root bị khóa

$ su -
Password:
su: Authentication failure`}
                            />
                        </div>
                        <div className="bg-slate-800 rounded-3xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                <Unlock className="text-amber-400" /> Cách đúng
                                khi cần quyền root
                            </h3>
                            <p className="text-slate-300 text-sm mb-4">
                                Ưu tiên chạy từng lệnh bằng sudo. Khi thật sự
                                cần shell root, dùng <code>sudo -i</code> thay
                                vì mở khóa root lâu dài.
                            </p>
                            <TerminalBlock
                                title="Cách dùng an toàn hơn"
                                code={`# Tốt nhất: chạy từng lệnh
sudo systemctl restart nginx
sudo apt update

# Khi cần root shell tạm thời
sudo -i
root@ubuntu:~# exit

# Khóa root lại nếu từng mở
sudo passwd -l root`}
                            />
                        </div>
                    </div>
                    <SuVsSudo />
                </section>

                {/* 8 logs and hardening */}
                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="8"
                        color="orange"
                        icon={<ScrollText size={22} />}
                        title="Xem log sudo và tăng cường bảo mật"
                    />
                    <div className="grid lg:grid-cols-2 gap-6">
                        <TerminalBlock
                            title="Ai đã dùng sudo?"
                            code={`sudo grep sudo /var/log/auth.log | tail -20

# Ví dụ log:
alice : TTY=pts/0 ; PWD=/home/alice ; \
USER=root ; COMMAND=/usr/bin/apt update

# Tìm nhập sai mật khẩu
sudo grep "incorrect password" /var/log/auth.log`}
                        />
                        <TerminalBlock
                            title="Hardening sudo"
                            code={`sudo visudo

Defaults timestamp_timeout=5
Defaults timestamp_type=tty
Defaults passwd_tries=3
Defaults secure_path="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
Defaults logfile=/var/log/sudo.log`}
                        />
                    </div>
                </section>

                {/* 9 add remove sudo */}
                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="9"
                        color="emerald"
                        icon={<UserPlus size={22} />}
                        title="Thêm/xóa quyền sudo cho user"
                    />
                    <GrantRevokePlayground />
                </section>

                {/* 10 Scenario */}
                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="10"
                        color="sky"
                        icon={<Server size={22} />}
                        title="Kịch bản thực tế: phân quyền sudo cho team"
                    />
                    <TeamScenario />
                </section>

                {/* 11 Troubleshooting */}
                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="11"
                        color="rose"
                        icon={<Bug size={22} />}
                        title="Xử lý sự cố sudo thường gặp"
                    />
                    <TroubleshootingTabs />
                </section>

                {/* 12 Practice */}
                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="12"
                        color="lime"
                        icon={<ClipboardCheck size={22} />}
                        title="Thực hành tổng hợp"
                    />
                    <PracticeChecklist />
                </section>

                {/* Summary */}
                <section className="pt-4">
                    <div className="bg-slate-950 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                <BookOpen className="text-amber-400" /> Tóm tắt
                                toàn bài
                            </h3>
                        </div>
                        <div className="p-6 md:p-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <SummaryBox
                                title="sudo cơ bản"
                                items={[
                                    "sudo lệnh",
                                    "sudo -u bob lệnh",
                                    "sudo -i",
                                    "sudo -l",
                                    "sudo -k",
                                ]}
                            />
                            <SummaryBox
                                title="quản lý quyền"
                                items={[
                                    "usermod -aG sudo user",
                                    "deluser user sudo",
                                    "visudo",
                                    "visudo -f /etc/sudoers.d/name",
                                ]}
                            />
                            <SummaryBox
                                title="sudoers syntax"
                                items={[
                                    "user ALL=(ALL) ALL",
                                    "NOPASSWD",
                                    "/bin/cmd",
                                    "%group ALL=(ALL) ALL",
                                ]}
                            />
                            <SummaryBox
                                title="nguyên tắc vàng"
                                items={[
                                    "Luôn dùng visudo",
                                    "Cấp đủ dùng",
                                    "Root bị khóa là an toàn",
                                    "Theo dõi log",
                                ]}
                            />
                        </div>
                    </div>
                </section>

                {/* Quiz */}
                <section className="space-y-6 pt-4">
                    <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-xl">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-amber-500/20 text-amber-400 p-2 rounded-lg">
                                    <ClipboardCheck size={20} />
                                </span>
                                Kiểm tra nhanh: sudo và root
                            </h3>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <div className="text-center pt-8 border-t border-slate-800">
                    <p className="text-slate-400 mb-4">
                        Bạn đã hiểu cách nâng quyền đúng chuẩn, cấp quyền sudo
                        có kiểm soát và tránh root shell khi không cần thiết.
                    </p>
                    <button className="bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-amber-500/20">
                        Bài 4.4 — Quản lý mật khẩu <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

function SectionTitle({ n, color, icon, title }) {
    const colorMap = {
        rose: "bg-rose-500/20 text-rose-400",
        blue: "bg-blue-500/20 text-blue-400",
        amber: "bg-amber-500/20 text-amber-400",
        teal: "bg-teal-500/20 text-teal-400",
        purple: "bg-purple-500/20 text-purple-400",
        cyan: "bg-cyan-500/20 text-cyan-400",
        green: "bg-green-500/20 text-green-400",
        orange: "bg-orange-500/20 text-orange-400",
        emerald: "bg-emerald-500/20 text-emerald-400",
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
        green: "bg-green-500/10 border-green-500/20 text-green-300",
        rose: "bg-rose-500/10 border-rose-500/20 text-rose-300",
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

function DangerCommandDemo() {
    const [bad, setBad] = useState(false);
    return (
        <div
            className={`lg:col-span-2 rounded-3xl border p-6 transition-all ${bad ? "bg-rose-950/40 border-rose-500/50 shadow-[0_0_30px_rgba(244,63,94,0.12)]" : "bg-slate-800/50 border-slate-700"}`}
        >
            <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-white flex items-center gap-2">
                    <AlertTriangle className="text-rose-400" /> Minh họa nguy
                    hiểm
                </h4>
                <button
                    onClick={() => setBad(!bad)}
                    className="text-xs px-3 py-1 rounded-full bg-slate-950 border border-slate-700 hover:border-rose-400 transition-colors"
                >
                    {bad ? "Xem lệnh đúng" : "Tạo lỗi dấu cách"}
                </button>
            </div>
            <div className="bg-black rounded-2xl p-4 font-mono text-sm border border-slate-800">
                <div className="text-slate-500"># Muốn xóa thư mục app</div>
                <div className="mt-2">
                    <span className="text-green-400">$</span> rm -rf{" "}
                    <span
                        className={
                            bad
                                ? "text-rose-400 bg-rose-500/10 px-1 rounded"
                                : "text-emerald-400"
                        }
                    >
                        {bad ? "/ home/app" : "/home/app"}
                    </span>
                </div>
                <div
                    className={`mt-4 p-3 rounded-xl border ${bad ? "bg-rose-500/10 border-rose-500/30 text-rose-200" : "bg-emerald-500/10 border-emerald-500/30 text-emerald-200"}`}
                >
                    {bad
                        ? "SAI: dấu cách sau / biến lệnh thành xóa từ thư mục gốc. Với root shell, hệ thống không hỏi lại."
                        : "ĐÚNG: chỉ xóa /home/app theo ý định."}
                </div>
            </div>
            <p className="text-sm text-slate-400 mt-4">
                Với sudo, việc phải nhập mật khẩu tạo một khoảng dừng để bạn
                nhìn lại lệnh. Với root shell, mọi lệnh chạy ngay với quyền tối
                cao.
            </p>
        </div>
    );
}

function RootVsSudoTable() {
    const rows = [
        ["Đăng nhập", "su - / ssh root@...", "Dùng user thường"],
        ["Mật khẩu", "Mật khẩu root", "Mật khẩu của bạn"],
        ["Audit log", "Khó biết ai làm", "Ghi lại từng lệnh"],
        ["Phạm vi", "Toàn phiên làm việc", "Từng lệnh riêng lẻ"],
        ["Kiểm soát", "Khó giới hạn", "Cấu hình chi tiết"],
        ["Ubuntu mặc định", "Root bị khóa", "Khuyến khích dùng"],
        ["Mức nguy hiểm", "Cao", "Thấp hơn"],
    ];
    return (
        <div className="bg-slate-950 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-3 bg-slate-900 border-b border-slate-700 text-sm font-bold text-slate-300">
                <div className="p-4">Tiêu chí</div>
                <div className="p-4 text-rose-300 border-l border-slate-700">
                    ROOT trực tiếp
                </div>
                <div className="p-4 text-emerald-300 border-l border-slate-700">
                    SUDO
                </div>
            </div>
            {rows.map(([a, b, c]) => (
                <div
                    key={a}
                    className="grid grid-cols-3 border-b border-slate-800 last:border-b-0 hover:bg-slate-900/60 transition-colors text-sm"
                >
                    <div className="p-4 font-bold text-white">{a}</div>
                    <div className="p-4 border-l border-slate-800 text-slate-300">
                        {b}
                    </div>
                    <div className="p-4 border-l border-slate-800 text-slate-300">
                        {c}
                    </div>
                </div>
            ))}
        </div>
    );
}

function SudoFlowSimulator() {
    const [allowed, setAllowed] = useState(true);
    const steps = allowed
        ? [
              ["alice gõ lệnh", "sudo apt install nginx", TerminalSquare],
              ["Kiểm tra sudoers", "alice có quyền chạy apt không?", FileCode2],
              ["Hỏi mật khẩu", "Nhập mật khẩu của alice", KeyRound],
              ["Ghi log", "/var/log/auth.log lưu COMMAND", ScrollText],
              ["Chạy với quyền root", "Lệnh được thực thi", Crown],
          ]
        : [
              ["alice gõ lệnh", "sudo apt install nginx", TerminalSquare],
              ["Kiểm tra sudoers", "Không tìm thấy quyền phù hợp", FileCode2],
              ["Từ chối", "alice is not in the sudoers file", XCircle],
          ];
    return (
        <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                    <h4 className="text-xl font-bold text-white">
                        Mô phỏng một lần chạy sudo
                    </h4>
                    <p className="text-slate-400 text-sm mt-1">
                        Bật/tắt trạng thái user có trong sudoers để thấy luồng
                        xử lý khác nhau.
                    </p>
                </div>
                <button
                    onClick={() => setAllowed(!allowed)}
                    className={`px-4 py-2 rounded-xl font-bold text-sm border transition-colors ${allowed ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300" : "bg-rose-500/10 border-rose-500/30 text-rose-300"}`}
                >
                    {allowed ? "alice CÓ quyền sudo" : "alice KHÔNG có quyền"}
                </button>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
                {steps.map(([title, desc, Icon], idx) => (
                    <div
                        key={title}
                        className={`relative rounded-2xl border p-4 ${idx === steps.length - 1 && !allowed ? "bg-rose-500/10 border-rose-500/30" : idx === steps.length - 1 ? "bg-emerald-500/10 border-emerald-500/30" : "bg-slate-900 border-slate-700"}`}
                    >
                        {idx < steps.length - 1 && <ArrowConnector />}
                        <Icon className="text-amber-400 mb-3" size={26} />
                        <div className="font-bold text-white text-sm">
                            {title}
                        </div>
                        <div className="text-xs text-slate-400 mt-1">
                            {desc}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ArrowConnector() {
    return (
        <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-500">
            <ChevronRight size={22} />
        </div>
    );
}

function CommandCard({ title, icon, lines }) {
    return (
        <div className="bg-slate-800 rounded-3xl p-6 border border-slate-700">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2 text-teal-300">
                {icon}
                {title}
            </h4>
            <div className="bg-black rounded-2xl p-4 font-mono text-sm border border-slate-900 space-y-4">
                {lines.map(([comment, cmd]) => (
                    <div key={cmd}>
                        <div className="text-slate-500 text-xs">{comment}</div>
                        <div>
                            <span className="text-green-400">$</span>{" "}
                            <span className="text-white">{cmd}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function SudoShellCompare() {
    return (
        <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-950 border border-slate-700 rounded-2xl p-5">
                <h4 className="font-bold text-white flex items-center gap-2 mb-2">
                    <Home className="text-blue-400" /> sudo -s
                </h4>
                <p className="text-sm text-slate-400">
                    Mở root shell nhưng giữ nhiều biến môi trường hiện tại. Ví
                    dụ <code>$HOME</code> có thể vẫn là <code>/home/alice</code>
                    .
                </p>
            </div>
            <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-5">
                <h4 className="font-bold text-white flex items-center gap-2 mb-2">
                    <Crown className="text-amber-400" /> sudo -i
                </h4>
                <p className="text-sm text-slate-400">
                    Mở login shell của root đầy đủ. <code>$HOME</code> đổi thành{" "}
                    <code>/root</code>. Thường rõ ràng và sạch hơn khi cần root
                    shell.
                </p>
            </div>
        </div>
    );
}

function SudoersBuilder() {
    const [user, setUser] = useState("bob");
    const [nopass, setNopass] = useState(false);
    const [scope, setScope] = useState("nginx");
    const command = useMemo(() => {
        const cmdMap = {
            all: "ALL",
            nginx: "/bin/systemctl restart nginx",
            docker: "/usr/bin/docker, /usr/bin/docker-compose",
            apt: "/usr/bin/apt, /usr/bin/apt-get",
        };
        return `${user} ALL=(ALL) ${nopass ? "NOPASSWD: " : ""}${cmdMap[scope]}`;
    }, [user, nopass, scope]);
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Settings className="text-purple-400" /> Trình tạo dòng sudoers
            </h4>
            <p className="text-sm text-slate-400 mb-6">
                Chọn user, phạm vi lệnh và chế độ mật khẩu để thấy sudoers được
                tạo ra như thế nào.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
                <label className="space-y-2">
                    <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                        User
                    </span>
                    <select
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white"
                    >
                        <option>alice</option>
                        <option>bob</option>
                        <option>deploy</option>
                        <option>eve</option>
                    </select>
                </label>
                <label className="space-y-2">
                    <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                        Phạm vi
                    </span>
                    <select
                        value={scope}
                        onChange={(e) => setScope(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white"
                    >
                        <option value="nginx">Chỉ restart nginx</option>
                        <option value="docker">Docker</option>
                        <option value="apt">APT</option>
                        <option value="all">Toàn quyền</option>
                    </select>
                </label>
                <label className="flex items-center justify-between gap-3 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 mt-6 md:mt-0 md:self-end cursor-pointer">
                    <span className="font-bold text-white">NOPASSWD</span>
                    <input
                        type="checkbox"
                        checked={nopass}
                        onChange={() => setNopass(!nopass)}
                        className="w-5 h-5 accent-purple-500"
                    />
                </label>
            </div>
            <div
                className={`rounded-2xl p-4 border font-mono text-sm ${scope === "all" && nopass ? "bg-rose-500/10 border-rose-500/40 text-rose-200" : "bg-slate-950 border-slate-700 text-amber-300"}`}
            >
                {command}
            </div>
            {scope === "all" && nopass && (
                <div className="mt-4 bg-rose-500/10 border border-rose-500/30 rounded-2xl p-4 text-sm text-rose-200 flex gap-3">
                    <AlertTriangle size={18} className="shrink-0" /> Toàn quyền
                    không cần mật khẩu rất nguy hiểm. Chỉ dùng cho tài khoản
                    automation/CI-CD được kiểm soát chặt.
                </div>
            )}
        </div>
    );
}

function PracticeCard({ icon, title, code }) {
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-5">
            <div className="text-cyan-400 mb-3">
                {React.cloneElement(icon, { size: 26 })}
            </div>
            <h4 className="font-bold text-white mb-3">{title}</h4>
            <pre className="bg-black border border-slate-900 rounded-xl p-3 text-xs text-slate-300 overflow-x-auto whitespace-pre-wrap">
                <code>{code}</code>
            </pre>
        </div>
    );
}

function SuVsSudo() {
    return (
        <div className="bg-slate-950 border border-slate-700 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2">
                <div className="p-6 border-b md:border-b-0 md:border-r border-slate-700">
                    <h4 className="font-bold text-white text-lg mb-2 flex items-center gap-2">
                        <User className="text-blue-400" /> su
                    </h4>
                    <p className="text-sm text-slate-400 mb-4">
                        Switch User. Cần mật khẩu của user đích.
                    </p>
                    <pre className="bg-black rounded-xl p-4 text-sm text-slate-300 overflow-x-auto">
                        <code>{`su bob
su - bob
su -c "whoami" bob`}</code>
                    </pre>
                </div>
                <div className="p-6">
                    <h4 className="font-bold text-white text-lg mb-2 flex items-center gap-2">
                        <KeyRound className="text-amber-400" /> sudo -u
                    </h4>
                    <p className="text-sm text-slate-400 mb-4">
                        Chạy với user khác nhưng xác thực bằng mật khẩu của
                        chính bạn.
                    </p>
                    <pre className="bg-black rounded-xl p-4 text-sm text-slate-300 overflow-x-auto">
                        <code>{`sudo -u bob whoami
sudo -u bob cat /home/bob/.bashrc
sudo -i`}</code>
                    </pre>
                </div>
            </div>
        </div>
    );
}

function GrantRevokePlayground() {
    const [hasSudo, setHasSudo] = useState(false);
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-2 gap-6 items-start">
                <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                        User mẫu:{" "}
                        <span className="font-mono text-emerald-400">
                            testuser
                        </span>
                    </h4>
                    <p className="text-slate-400 text-sm mb-6">
                        Bấm nút để mô phỏng thêm hoặc thu hồi quyền sudo bằng
                        group <code>sudo</code>.
                    </p>
                    <div className="flex gap-3 flex-wrap">
                        <button
                            onClick={() => setHasSudo(true)}
                            className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center gap-2"
                        >
                            <UserPlus size={18} /> Cấp sudo
                        </button>
                        <button
                            onClick={() => setHasSudo(false)}
                            className="px-4 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold flex items-center gap-2"
                        >
                            <UserMinus size={18} /> Thu hồi
                        </button>
                    </div>
                </div>
                <div className="bg-black border border-slate-900 rounded-2xl p-4 font-mono text-sm text-slate-300">
                    <div className="text-slate-500"># Lệnh tương ứng</div>
                    <div className="mt-2">
                        <span className="text-green-400">$</span>{" "}
                        {hasSudo
                            ? "sudo usermod -aG sudo testuser"
                            : "sudo deluser testuser sudo"}
                    </div>
                    <div className="mt-5 text-slate-500"># Kiểm tra</div>
                    <div>
                        <span className="text-green-400">$</span> groups
                        testuser
                    </div>
                    <div className="mt-2 text-white">
                        testuser : testuser{" "}
                        {hasSudo ? (
                            <span className="text-emerald-400">sudo</span>
                        ) : (
                            <span className="text-slate-500">developers</span>
                        )}
                    </div>
                    <div
                        className={`mt-4 p-3 rounded-xl border ${hasSudo ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300" : "bg-rose-500/10 border-rose-500/30 text-rose-300"}`}
                    >
                        {hasSudo
                            ? "testuser có toàn quyền sudo theo rule %sudo ALL=(ALL:ALL) ALL."
                            : "testuser không còn trong group sudo, nên không được sudo theo mặc định."}
                    </div>
                </div>
            </div>
        </div>
    );
}

function TeamScenario() {
    const people = [
        [
            "alice",
            "Tech Lead",
            "Toàn quyền",
            "alice ALL=(ALL:ALL) ALL",
            "amber",
        ],
        [
            "bob",
            "Backend Dev",
            "Chỉ service + docker",
            "bob ALL=(ALL) BOB_CMDS",
            "blue",
        ],
        [
            "eve",
            "DevOps",
            "Toàn quyền, không hỏi pass",
            "eve ALL=(ALL) NOPASSWD: ALL",
            "rose",
        ],
        [
            "deploy",
            "CI/CD bot",
            "Chỉ deploy script",
            "deploy ALL=(ALL) NOPASSWD: /srv/webapp/deploy.sh",
            "green",
        ],
        [
            "intern",
            "Intern",
            "Không có sudo",
            "Không tạo file sudoers",
            "slate",
        ],
    ];
    const [selected, setSelected] = useState(people[0]);
    return (
        <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2 space-y-3">
                {people.map((p) => (
                    <button
                        key={p[0]}
                        onClick={() => setSelected(p)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all ${selected[0] === p[0] ? "bg-sky-500/10 border-sky-500/40" : "bg-slate-800 border-slate-700 hover:border-slate-500"}`}
                    >
                        <div className="font-bold text-white">
                            {p[0]}{" "}
                            <span className="text-xs text-slate-500 font-normal">
                                — {p[1]}
                            </span>
                        </div>
                        <div className="text-sm text-slate-400 mt-1">
                            {p[2]}
                        </div>
                    </button>
                ))}
            </div>
            <div className="lg:col-span-3 bg-slate-950 border border-slate-700 rounded-3xl p-6">
                <h4 className="text-2xl font-bold text-white mb-2">
                    {selected[0]}
                </h4>
                <p className="text-slate-400 mb-5">
                    Vai trò:{" "}
                    <strong className="text-white">{selected[1]}</strong> —{" "}
                    {selected[2]}
                </p>
                <pre className="bg-black rounded-2xl p-5 text-sm text-amber-300 overflow-x-auto border border-slate-900 whitespace-pre-wrap">
                    <code>{selected[3]}</code>
                </pre>
                {selected[0] === "eve" && (
                    <div className="mt-4 text-sm text-rose-200 bg-rose-500/10 border border-rose-500/30 rounded-2xl p-4 flex gap-3">
                        <AlertTriangle size={18} className="shrink-0" />{" "}
                        NOPASSWD: ALL chỉ nên dùng cho DevOps/automation đã được
                        kiểm soát và theo dõi log.
                    </div>
                )}
            </div>
        </div>
    );
}

function TroubleshootingTabs() {
    const cases = [
        [
            "Không sudo được",
            "alice is not in the sudoers file",
            `ssh admin@server
sudo usermod -aG sudo alice
# alice logout/login lại`,
        ],
        [
            "sudoers lỗi cú pháp",
            "no valid sudoers sources found",
            `# Cần root hoặc recovery mode
visudo -c -f /etc/sudoers
visudo -f /etc/sudoers`,
        ],
        [
            "Quên mật khẩu",
            "Không xác thực được sudo",
            `sudo passwd alice
# Nếu không còn ai sudo được: Recovery Mode -> passwd alice`,
        ],
        [
            "Brute force sudo",
            "Nhiều incorrect password",
            `sudo grep "incorrect" /var/log/auth.log
sudo visudo
Defaults passwd_tries=3
Defaults mail_badpass`,
        ],
    ];
    const [active, setActive] = useState(0);
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-4 border-b border-slate-700">
                {cases.map((c, idx) => (
                    <button
                        key={c[0]}
                        onClick={() => setActive(idx)}
                        className={`p-4 text-sm font-bold border-b md:border-b-0 md:border-r last:border-r-0 border-slate-700 ${active === idx ? "bg-rose-500/10 text-rose-300" : "text-slate-400 hover:bg-slate-900"}`}
                    >
                        {c[0]}
                    </button>
                ))}
            </div>
            <div className="p-6 grid lg:grid-cols-2 gap-6">
                <div className="bg-rose-500/10 border border-rose-500/30 rounded-2xl p-5">
                    <h4 className="font-bold text-white flex items-center gap-2 mb-2">
                        <AlertTriangle className="text-rose-400" /> Dấu hiệu
                    </h4>
                    <p className="font-mono text-rose-200">
                        {cases[active][1]}
                    </p>
                </div>
                <TerminalBlock title="Cách xử lý" code={cases[active][2]} />
            </div>
        </div>
    );
}

function PracticeChecklist() {
    const tasks = [
        [
            "Tạo user testuser",
            "sudo useradd -m -s /bin/bash testuser && sudo passwd testuser",
        ],
        ["Kiểm tra chưa có sudo", "sudo -l -U testuser"],
        ["Thêm vào group sudo", "sudo usermod -aG sudo testuser"],
        ["Thu hồi group sudo", "sudo deluser testuser sudo"],
        ["Tạo quyền giới hạn", "sudo visudo -f /etc/sudoers.d/testuser"],
        ["Test lệnh được phép/bị chặn", "sudo -u testuser sudo ls /root"],
        ["Xem log", "sudo grep testuser /var/log/auth.log | tail -5"],
        [
            "Dọn dẹp",
            "sudo rm /etc/sudoers.d/testuser && sudo userdel -r testuser",
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
                        Checklist lab trên máy ảo Ubuntu
                    </h4>
                    <p className="text-slate-400 text-sm">
                        Đánh dấu từng bước khi bạn thực hành xong.
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

function SummaryBox({ title, items }) {
    return (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
            <h4 className="font-bold text-amber-300 uppercase text-xs tracking-widest mb-4">
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
        question: "Tại sao Ubuntu khóa root mặc định?",
        options: [
            "Để Linux chạy nhanh hơn",
            "Để giảm rủi ro đăng nhập và thao tác trực tiếp bằng quyền tối cao",
            "Vì Ubuntu không có tài khoản root",
            "Để không cần dùng mật khẩu",
        ],
        correct: 1,
        explanation:
            "Root vẫn tồn tại, nhưng không có mật khẩu đăng nhập trực tiếp. Ubuntu khuyến khích dùng sudo để kiểm soát từng lệnh và có log rõ hơn.",
    },
    {
        question: "Khác biệt chính giữa sudo -i và sudo -s là gì?",
        options: [
            "sudo -i mở login shell root đầy đủ, còn sudo -s giữ môi trường hiện tại nhiều hơn",
            "sudo -s an toàn hơn vì không có quyền root",
            "sudo -i chỉ dùng cho Docker",
            "Không có khác biệt nào",
        ],
        correct: 0,
        explanation:
            "sudo -i giống đăng nhập root thật hơn, HOME thường là /root. sudo -s mở shell root nhưng giữ nhiều biến môi trường của user hiện tại.",
    },
    {
        question: "Vì sao phải dùng visudo thay vì nano /etc/sudoers?",
        options: [
            "Vì nano không sửa được file hệ thống",
            "Vì visudo tự động thêm user",
            "Vì visudo kiểm tra cú pháp trước khi lưu, tránh làm hỏng sudo",
            "Vì visudo không cần quyền root",
        ],
        correct: 2,
        explanation:
            "Sai cú pháp sudoers có thể khiến không ai sudo được. visudo sẽ cảnh báo và cho sửa lại trước khi lưu thay đổi nguy hiểm.",
    },
    {
        question:
            "Dòng `bob ALL=(ALL) NOPASSWD: /bin/systemctl restart nginx` nghĩa là gì?",
        options: [
            "bob có thể restart nginx bằng sudo mà không cần nhập mật khẩu",
            "bob có toàn quyền root",
            "bob bị cấm restart nginx",
            "bob chỉ được dùng nginx nhưng không được sudo",
        ],
        correct: 0,
        explanation:
            "Rule này giới hạn bob ở đúng lệnh /bin/systemctl restart nginx và thêm tag NOPASSWD nên không hỏi mật khẩu.",
    },
    {
        question: "Dấu `%` trong sudoers dùng để làm gì?",
        options: [
            "Đánh dấu comment",
            "Đại diện cho group",
            "Đại diện cho root",
            "Bật NOPASSWD",
        ],
        correct: 1,
        explanation:
            "Ví dụ `%sudo ALL=(ALL:ALL) ALL` nghĩa là mọi thành viên của group sudo có quyền chạy mọi lệnh theo rule đó.",
    },
    {
        question:
            "Cách thu hồi quyền sudo đơn giản nếu user được cấp qua group sudo là gì?",
        options: [
            "sudo passwd -l root",
            "sudo deluser alice sudo hoặc sudo gpasswd -d alice sudo",
            "sudo -k",
            "sudo apt remove sudo",
        ],
        correct: 1,
        explanation:
            "Nếu user có sudo nhờ group sudo, hãy xóa user khỏi group đó. sudo -k chỉ xóa cache mật khẩu, không thu hồi quyền.",
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
        } else {
            setCurrentQ("finished");
        }
    };

    const resetQuiz = () => {
        setCurrentQ(0);
        setSelected(null);
        setShowResult(false);
        setScore(0);
    };

    if (currentQ === "finished") {
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
                    <strong className="text-amber-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu về sudo và root.
                </p>
                <button
                    onClick={resetQuiz}
                    className="px-6 py-2 bg-slate-900 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-600 font-medium flex items-center gap-2"
                >
                    <RefreshCcw size={16} /> Làm lại Quiz
                </button>
            </div>
        );
    }

    const q = questions[currentQ];
    return (
        <div className="flex flex-col h-full max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-6 text-sm font-medium">
                <span className="text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full">
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
