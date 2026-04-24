import React, { useMemo, useState } from "react";
import {
    Lock,
    Unlock,
    KeyRound,
    Shield,
    ShieldCheck,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    Info,
    TerminalSquare,
    FileText,
    FileCode2,
    Clock,
    CalendarDays,
    TimerReset,
    User,
    Users,
    UserPlus,
    UserMinus,
    Eye,
    EyeOff,
    Hash,
    Database,
    Settings,
    ClipboardCheck,
    ChevronRight,
    RefreshCcw,
    BookOpen,
    Activity,
    ScrollText,
    Bug,
    Gauge,
    Fingerprint,
    History,
    Building2,
    ListChecks,
    Zap,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
            <header className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50 backdrop-blur">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🐧</span>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Linux/Ubuntu
                            </h1>
                            <p className="text-xs text-slate-500 hidden md:block">
                                Bảo mật user, mật khẩu và policy hệ thống
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400 hidden md:inline-block">
                            Bài trước: 4.3
                        </span>
                        <div className="text-sm font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                            Phần 4.4
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center space-y-5 py-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium">
                        <KeyRound size={16} /> passwd · chage · PAM policy
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Quản lý{" "}
                        <span className="text-cyan-400 font-mono">
                            Mật khẩu
                        </span>{" "}
                        trong Linux
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Học cách Linux lưu mật khẩu trong{" "}
                        <code>/etc/shadow</code>, đổi/khóa/mở khóa bằng{" "}
                        <code>passwd</code>, quản lý vòng đời bằng{" "}
                        <code>chage</code>, thiết lập policy toàn hệ thống và
                        kiểm soát độ mạnh mật khẩu bằng PAM.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4">
                        {[
                            [Hash, "/etc/shadow", "Hash & aging"],
                            [KeyRound, "passwd", "Đổi/khóa pass"],
                            [Clock, "chage", "Vòng đời"],
                            [ShieldCheck, "PAM", "Độ mạnh pass"],
                        ].map(([Icon, title, desc]) => (
                            <div
                                key={title}
                                className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 text-left"
                            >
                                <Icon
                                    className="text-cyan-400 mb-3"
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

                <section className="space-y-6">
                    <SectionTitle
                        n="1"
                        color="cyan"
                        icon={<Database size={22} />}
                        title="Tổng quan hệ thống mật khẩu Linux"
                    />
                    <div className="grid lg:grid-cols-5 gap-6">
                        <div className="lg:col-span-3 bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                            <div className="flex items-start gap-5">
                                <div className="bg-cyan-500/15 text-cyan-400 p-4 rounded-2xl border border-cyan-500/20">
                                    <Hash size={42} />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-white">
                                        Linux không lưu mật khẩu dạng plaintext
                                    </h3>
                                    <p className="text-slate-300">
                                        Mật khẩu được{" "}
                                        <strong>hash một chiều</strong> rồi lưu
                                        trong <code>/etc/shadow</code>. Khi đăng
                                        nhập, Linux hash mật khẩu bạn vừa nhập
                                        rồi so sánh với hash cũ. Khớp thì cho
                                        vào, không khớp thì từ chối.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-3">
                                        <MiniPoint
                                            icon={<EyeOff size={18} />}
                                            tone="cyan"
                                            title="Không giải mã ngược"
                                            text="Hash không phải mã hóa 2 chiều, nên không thể lấy lại password gốc."
                                        />
                                        <MiniPoint
                                            icon={<Lock size={18} />}
                                            tone="green"
                                            title="Chỉ root đọc"
                                            text="/etc/shadow được bảo vệ vì chứa hash và thông tin aging."
                                        />
                                        <MiniPoint
                                            icon={<Shield size={18} />}
                                            tone="amber"
                                            title="Salt + thuật toán"
                                            text="yescrypt, SHA-512, SHA-256... giúp chống dò mật khẩu tốt hơn."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <PasswordHashSimulator />
                    </div>
                    <ShadowDecoder />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="2"
                        color="blue"
                        icon={<KeyRound size={22} />}
                        title="Lệnh passwd — đổi, khóa, mở khóa mật khẩu"
                    />
                    <div className="grid lg:grid-cols-2 gap-6">
                        <CommandCard
                            title="Đổi và đặt mật khẩu"
                            icon={<KeyRound size={20} />}
                            lines={[
                                [
                                    "# User thường đổi mật khẩu của chính mình",
                                    "passwd",
                                ],
                                [
                                    "# Root/sudo đổi mật khẩu cho user khác",
                                    "sudo passwd bob",
                                ],
                                [
                                    "# Đặt pass cho user mới",
                                    "sudo useradd -m testuser && sudo passwd testuser",
                                ],
                                [
                                    "# Bắt buộc đổi pass lần đăng nhập tiếp theo",
                                    "sudo passwd -e alice",
                                ],
                            ]}
                        />
                        <CommandCard
                            title="Trạng thái, lock, unlock"
                            icon={<Lock size={20} />}
                            lines={[
                                [
                                    "# Xem trạng thái password",
                                    "sudo passwd -S alice",
                                ],
                                [
                                    "# Xem trạng thái tất cả user",
                                    "sudo passwd -Sa",
                                ],
                                ["# Khóa tài khoản", "sudo passwd -l alice"],
                                ["# Mở khóa tài khoản", "sudo passwd -u alice"],
                            ]}
                        />
                    </div>
                    <PasswdStatusPlayground />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="3"
                        color="amber"
                        icon={<Clock size={22} />}
                        title="Lệnh chage — quản lý vòng đời mật khẩu"
                    />
                    <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-6 md:p-8">
                        <div className="grid lg:grid-cols-2 gap-6 items-start">
                            <div>
                                <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                    <CalendarDays className="text-amber-400" />{" "}
                                    chage = CHange AGE
                                </h4>
                                <p className="text-slate-300 mb-4">
                                    Dùng để kiểm soát mật khẩu sống bao lâu, khi
                                    nào cảnh báo, khi nào bắt buộc đổi và khi
                                    nào tài khoản bị khóa do không đổi mật khẩu.
                                </p>
                                <TerminalBlock
                                    title="Xem vòng đời mật khẩu"
                                    code={`sudo chage -l alice

Last password change                    : Feb 18, 2026
Password expires                        : May 19, 2026
Password inactive                       : Jun 18, 2026
Account expires                         : never
Minimum number of days between password change : 7
Maximum number of days between password change : 90
Number of days of warning before password expires : 14`}
                                />
                            </div>
                            <ChageTimeline />
                        </div>
                    </div>
                    <ChagePolicyBuilder />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="4"
                        color="purple"
                        icon={<Settings size={22} />}
                        title="Chính sách mật khẩu toàn hệ thống"
                    />
                    <div className="grid lg:grid-cols-2 gap-6">
                        <div className="bg-slate-800 rounded-3xl p-6 border border-slate-700">
                            <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                <FileText className="text-purple-400" />{" "}
                                /etc/login.defs
                            </h4>
                            <p className="text-sm text-slate-400 mb-4">
                                Đây là default policy cho user mới tạo sau này.
                                User đã tồn tại cần dùng <code>chage</code> để
                                áp dụng lại.
                            </p>
                            <TerminalBlock
                                title="login.defs"
                                code={`PASS_MAX_DAYS   90
PASS_MIN_DAYS   7
PASS_WARN_AGE   14
PASS_MIN_LEN    8
ENCRYPT_METHOD  yescrypt
UMASK           022`}
                            />
                        </div>
                        <div className="bg-slate-800 rounded-3xl p-6 border border-slate-700">
                            <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                <Users className="text-cyan-400" /> Áp dụng cho
                                user hiện có
                            </h4>
                            <p className="text-sm text-slate-400 mb-4">
                                Vì <code>/etc/login.defs</code> không tự sửa
                                policy của user cũ, admin thường chạy vòng lặp
                                để áp dụng bằng <code>chage</code>.
                            </p>
                            <TerminalBlock
                                title="Apply existing users"
                                code={`for user in $(awk -F: '$3 >= 1000 && $3 != 65534 {print $1}' /etc/passwd); do
  echo "Setting policy for: $user"
  sudo chage -m 7 -M 90 -W 14 -I 30 "$user"
done`}
                            />
                        </div>
                    </div>
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="5"
                        color="green"
                        icon={<ShieldCheck size={22} />}
                        title="PAM và pwquality — kiểm soát độ phức tạp mật khẩu"
                    />
                    <div className="grid lg:grid-cols-5 gap-6">
                        <div className="lg:col-span-2 bg-slate-800 rounded-3xl p-6 border border-slate-700">
                            <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                <ShieldCheck className="text-green-400" /> PAM
                                là gì?
                            </h4>
                            <p className="text-sm text-slate-300 mb-4">
                                PAM là hệ thống module xác thực của Linux. Với
                                mật khẩu, PAM có thể kiểm tra độ dài, chữ
                                hoa/thường, số, ký tự đặc biệt, username,
                                dictionary và lịch sử mật khẩu.
                            </p>
                            <TerminalBlock
                                title="Cài và kiểm tra pwquality"
                                code={`sudo apt install libpam-pwquality -y

dpkg -l | grep pwquality

cat /etc/pam.d/common-password | grep pwquality
password requisite pam_pwquality.so retry=3`}
                            />
                        </div>
                        <div className="lg:col-span-3">
                            <PasswordStrengthLab />
                        </div>
                    </div>
                    <PwqualityConfig />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="6"
                        color="rose"
                        icon={<History size={22} />}
                        title="Lịch sử mật khẩu — không dùng lại pass cũ"
                    />
                    <div className="bg-gradient-to-br from-rose-950/30 to-slate-900 border border-rose-500/30 rounded-3xl p-6 md:p-8">
                        <div className="grid lg:grid-cols-2 gap-6 items-start">
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold text-white flex items-center gap-2">
                                    <History className="text-rose-400" />{" "}
                                    pam_pwhistory
                                </h4>
                                <p className="text-slate-300">
                                    Module này ngăn user đổi mật khẩu nhiều lần
                                    để quay lại mật khẩu cũ. Ví dụ{" "}
                                    <code>remember=10</code> nghĩa là không được
                                    dùng lại 10 mật khẩu gần nhất.
                                </p>
                                <div className="bg-rose-500/10 border border-rose-500/30 rounded-2xl p-4 text-sm text-rose-200 flex gap-3">
                                    <AlertTriangle
                                        size={18}
                                        className="shrink-0"
                                    />{" "}
                                    Không chỉ cần mật khẩu mạnh; còn phải ngăn
                                    việc tái sử dụng mật khẩu cũ.
                                </div>
                            </div>
                            <TerminalBlock
                                title="Bật pwhistory"
                                code={`sudo nano /etc/pam.d/common-password

# Thêm sau dòng pam_pwquality:
password required pam_pwhistory.so remember=10 use_authok

# File lưu lịch sử hash cũ:
sudo cat /etc/security/opasswd`}
                            />
                        </div>
                    </div>
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="7"
                        color="orange"
                        icon={<Activity size={22} />}
                        title="Kiểm tra mật khẩu sắp hết hạn theo thời gian thực"
                    />
                    <ExpiryScanner />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="8"
                        color="sky"
                        icon={<Building2 size={22} />}
                        title="Kịch bản thực tế — thiết lập policy cho công ty"
                    />
                    <CompanyPolicyScenario />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="9"
                        color="teal"
                        icon={<TerminalSquare size={22} />}
                        title="Script quản lý mật khẩu tổng hợp"
                    />
                    <PasswordManagerPreview />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="10"
                        color="lime"
                        icon={<ClipboardCheck size={22} />}
                        title="Thực hành tổng hợp"
                    />
                    <PracticeChecklist />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-950 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                <BookOpen className="text-cyan-400" /> Tóm tắt
                                toàn bài
                            </h3>
                        </div>
                        <div className="p-6 md:p-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <SummaryBox
                                title="passwd"
                                items={[
                                    "passwd",
                                    "sudo passwd user",
                                    "sudo passwd -l user",
                                    "sudo passwd -u user",
                                    "sudo passwd -e user",
                                    "sudo passwd -S user",
                                ]}
                            />
                            <SummaryBox
                                title="chage"
                                items={[
                                    "chage -l user",
                                    "chage -m 7 user",
                                    "chage -M 90 user",
                                    "chage -W 14 user",
                                    "chage -I 30 user",
                                    "chage -d 0 user",
                                ]}
                            />
                            <SummaryBox
                                title="policy"
                                items={[
                                    "/etc/login.defs",
                                    "pwquality.conf",
                                    "common-password",
                                    "pam_pwquality",
                                    "pam_pwhistory",
                                ]}
                            />
                            <SummaryBox
                                title="mật khẩu mạnh"
                                items={[
                                    "Tối thiểu 12 ký tự",
                                    "Hoa + thường + số + đặc biệt",
                                    "Không chứa username",
                                    "Không dùng dictionary",
                                    "Không dùng lại pass cũ",
                                ]}
                            />
                        </div>
                    </div>
                </section>

                <section className="space-y-6 pt-4">
                    <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-xl">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-cyan-500/20 text-cyan-400 p-2 rounded-lg">
                                    <ClipboardCheck size={20} />
                                </span>
                                Kiểm tra nhanh: passwd, chage và policy
                            </h3>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                <div className="text-center pt-8 border-t border-slate-800">
                    <p className="text-slate-400 mb-4">
                        Bạn đã biết cách kiểm soát mật khẩu ở cấp user, cấp
                        policy hệ thống và cấp PAM module.
                    </p>
                    <button className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
                        Bài 4.5 — Xem & Quản lý phiên đăng nhập{" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

function SectionTitle({ n, color, icon, title }) {
    const colorMap = {
        cyan: "bg-cyan-500/20 text-cyan-400",
        blue: "bg-blue-500/20 text-blue-400",
        amber: "bg-amber-500/20 text-amber-400",
        purple: "bg-purple-500/20 text-purple-400",
        green: "bg-green-500/20 text-green-400",
        rose: "bg-rose-500/20 text-rose-400",
        orange: "bg-orange-500/20 text-orange-400",
        sky: "bg-sky-500/20 text-sky-400",
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
        cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
        green: "bg-green-500/10 border-green-500/20 text-green-300",
        amber: "bg-amber-500/10 border-amber-500/20 text-amber-300",
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

function PasswordHashSimulator() {
    const [input, setInput] = useState("MyS3cur3P@ss");
    const fakeHash = useMemo(() => {
        let h = 0;
        for (let i = 0; i < input.length; i++)
            h = (Math.imul(31, h) + input.charCodeAt(i)) | 0;
        return `$y$j9T$salt${Math.abs(h).toString(16)}$${Math.abs(
            h * 2654435761,
        )
            .toString(16)
            .slice(0, 18)}...`;
    }, [input]);
    return (
        <div className="lg:col-span-2 bg-slate-800/50 border border-slate-700 rounded-3xl p-6">
            <h4 className="font-bold text-white flex items-center gap-2 mb-4">
                <Fingerprint className="text-cyan-400" /> Mô phỏng hash
            </h4>
            <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                Mật khẩu nhập vào
            </label>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="mt-2 w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white font-mono"
            />
            <div className="mt-4 text-xs uppercase tracking-widest text-slate-500 font-bold">
                Hash lưu trong /etc/shadow
            </div>
            <div className="mt-2 bg-black border border-slate-900 rounded-xl p-3 text-cyan-300 font-mono text-sm break-all">
                {fakeHash}
            </div>
            <p className="text-xs text-slate-500 mt-3">
                Đây là mô phỏng trực quan, không phải thuật toán hash thật. Ý
                chính: cùng một input tạo hash để so sánh, không lưu plaintext.
            </p>
        </div>
    );
}

function ShadowDecoder() {
    const fields = [
        ["1", "username", "alice", "Tên tài khoản"],
        [
            "2",
            "password",
            "$y$j9T$salt$hash",
            "Hash mật khẩu hoặc ký hiệu khóa",
        ],
        ["3", "lastchg", "19750", "Ngày đổi pass cuối tính từ Unix epoch"],
        ["4", "minage", "7", "Tối thiểu 7 ngày giữa 2 lần đổi"],
        ["5", "maxage", "90", "Tối đa 90 ngày dùng mật khẩu"],
        ["6", "warn", "14", "Cảnh báo trước 14 ngày"],
        ["7", "inactive", "30", "Khóa sau 30 ngày không đổi"],
        ["8", "expire", "20100", "Ngày hết hạn tài khoản"],
        ["9", "reserved", "", "Để dành"],
    ];
    const symbols = [
        ["!", "Tài khoản bị khóa"],
        ["*", "Không đăng nhập bằng mật khẩu"],
        ["!!", "Chưa đặt mật khẩu lần nào"],
        ["$y$", "yescrypt"],
        ["$6$", "SHA-512"],
        ["$1$", "MD5 cũ, không an toàn"],
    ];
    return (
        <div className="bg-slate-950 border border-slate-700 rounded-3xl overflow-hidden">
            <div className="bg-slate-900 p-4 border-b border-slate-700 font-mono text-sm text-slate-300 overflow-x-auto">
                alice:
                <span className="text-cyan-300">
                    $y$j9T$abc123xyz$hashed...
                </span>
                :19750:7:90:14:30:20100:
            </div>
            <div className="p-6 grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 grid md:grid-cols-3 gap-3">
                    {fields.map(([n, name, value, desc]) => (
                        <div
                            key={n}
                            className="bg-slate-900 border border-slate-800 rounded-2xl p-4"
                        >
                            <div className="text-xs text-cyan-400 font-bold">
                                Trường {n}
                            </div>
                            <div className="font-bold text-white mt-1">
                                {name}
                            </div>
                            <code className="text-xs text-slate-400 block mt-1 break-all">
                                {value || "(empty)"}
                            </code>
                            <p className="text-xs text-slate-500 mt-2">
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                        <Info size={18} className="text-cyan-400" /> Ký hiệu đặc
                        biệt
                    </h4>
                    <div className="space-y-2">
                        {symbols.map(([s, d]) => (
                            <div key={s} className="flex gap-3 text-sm">
                                <code className="text-amber-300 w-10">{s}</code>
                                <span className="text-slate-400">{d}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function CommandCard({ title, icon, lines }) {
    return (
        <div className="bg-slate-800 rounded-3xl p-6 border border-slate-700">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2 text-blue-300">
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

function PasswdStatusPlayground() {
    const [status, setStatus] = useState("P");
    const map = {
        P: [
            "Active",
            "Có mật khẩu và đăng nhập được",
            "text-green-300 bg-green-500/10 border-green-500/30",
            "alice P 02/18/2026 7 90 14 30",
        ],
        L: [
            "Locked",
            "Bị khóa bằng passwd -l",
            "text-rose-300 bg-rose-500/10 border-rose-500/30",
            "alice L 02/18/2026 7 90 14 30",
        ],
        NP: [
            "No Password",
            "Không có mật khẩu — rất nguy hiểm",
            "text-amber-300 bg-amber-500/10 border-amber-500/30",
            "alice NP 02/18/2026 7 90 14 30",
        ],
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                <div>
                    <h4 className="text-xl font-bold text-white">
                        Mô phỏng trạng thái passwd -S
                    </h4>
                    <p className="text-sm text-slate-400">
                        Chọn hành động và xem trạng thái user thay đổi.
                    </p>
                </div>
                <div className="flex gap-2 flex-wrap">
                    <button
                        onClick={() => setStatus("P")}
                        className="px-3 py-2 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-sm"
                    >
                        Mở khóa
                    </button>
                    <button
                        onClick={() => setStatus("L")}
                        className="px-3 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm"
                    >
                        Khóa
                    </button>
                    <button
                        onClick={() => setStatus("NP")}
                        className="px-3 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm"
                    >
                        Xóa pass
                    </button>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-black border border-slate-900 rounded-2xl p-4 font-mono text-sm">
                    <div className="text-slate-500">$ sudo passwd -S alice</div>
                    <div className="text-white mt-2">{map[status][3]}</div>
                </div>
                <div className={`rounded-2xl border p-4 ${map[status][2]}`}>
                    <div className="font-bold text-white">{map[status][0]}</div>
                    <p className="text-sm mt-1">{map[status][1]}</p>
                </div>
            </div>
        </div>
    );
}

function ChageTimeline() {
    return (
        <div className="bg-slate-950 border border-slate-700 rounded-3xl p-6">
            <h4 className="font-bold text-white mb-6 flex items-center gap-2">
                <TimerReset className="text-amber-400" /> Timeline: -M 90 -W 14
                -I 30
            </h4>
            <div className="space-y-4">
                {[
                    [
                        "Ngày 0",
                        "Đổi mật khẩu",
                        "Mật khẩu bắt đầu vòng đời mới",
                        "green",
                    ],
                    [
                        "Ngày 76",
                        "Bắt đầu cảnh báo",
                        "Còn 14 ngày nữa hết hạn",
                        "amber",
                    ],
                    [
                        "Ngày 90",
                        "Mật khẩu hết hạn",
                        "Buộc đổi khi đăng nhập",
                        "rose",
                    ],
                    [
                        "Ngày 120",
                        "Tài khoản inactive",
                        "Bị khóa hoàn toàn nếu không đổi",
                        "slate",
                    ],
                ].map(([day, title, desc, tone]) => (
                    <div key={day} className="flex gap-4">
                        <div
                            className={`w-24 font-mono text-sm ${tone === "green" ? "text-green-400" : tone === "amber" ? "text-amber-400" : tone === "rose" ? "text-rose-400" : "text-slate-400"}`}
                        >
                            {day}
                        </div>
                        <div className="flex-1 border-l border-slate-700 pl-4 pb-4">
                            <div className="font-bold text-white">{title}</div>
                            <div className="text-sm text-slate-400">{desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ChagePolicyBuilder() {
    const [min, setMin] = useState(7);
    const [max, setMax] = useState(90);
    const [warn, setWarn] = useState(14);
    const [inactive, setInactive] = useState(30);
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Gauge className="text-amber-400" /> Bộ tạo lệnh chage
            </h4>
            <p className="text-sm text-slate-400 mb-6">
                Điều chỉnh các thông số để tạo policy mật khẩu cho user{" "}
                <code>alice</code>.
            </p>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
                <RangeBox
                    label="Min days"
                    value={min}
                    setValue={setMin}
                    min={0}
                    max={30}
                />
                <RangeBox
                    label="Max days"
                    value={max}
                    setValue={setMax}
                    min={30}
                    max={180}
                />
                <RangeBox
                    label="Warn days"
                    value={warn}
                    setValue={setWarn}
                    min={0}
                    max={30}
                />
                <RangeBox
                    label="Inactive"
                    value={inactive}
                    setValue={setInactive}
                    min={-1}
                    max={60}
                />
            </div>
            <div className="bg-black rounded-2xl p-4 border border-slate-900 font-mono text-cyan-300 text-sm overflow-x-auto">
                sudo chage -m {min} -M {max} -W {warn} -I {inactive} alice
            </div>
            <div className="mt-4 grid md:grid-cols-3 gap-3 text-sm">
                <div className="bg-slate-950 border border-slate-700 rounded-xl p-3">
                    Cảnh báo từ ngày:{" "}
                    <strong className="text-amber-300">
                        {Math.max(0, max - warn)}
                    </strong>
                </div>
                <div className="bg-slate-950 border border-slate-700 rounded-xl p-3">
                    Hết hạn ngày:{" "}
                    <strong className="text-rose-300">{max}</strong>
                </div>
                <div className="bg-slate-950 border border-slate-700 rounded-xl p-3">
                    Khóa sau ngày:{" "}
                    <strong className="text-slate-300">
                        {inactive >= 0 ? max + inactive : "không khóa"}
                    </strong>
                </div>
            </div>
        </div>
    );
}

function RangeBox({ label, value, setValue, min, max }) {
    return (
        <label className="bg-slate-950 border border-slate-700 rounded-2xl p-4">
            <div className="flex justify-between mb-2">
                <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                    {label}
                </span>
                <span className="font-mono text-white">{value}</span>
            </div>
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="w-full accent-amber-500"
            />
        </label>
    );
}

function PasswordStrengthLab() {
    const [pass, setPass] = useState("password123");
    const checks = useMemo(() => {
        const lower = /[a-z]/.test(pass),
            upper = /[A-Z]/.test(pass),
            digit = /\d/.test(pass),
            special = /[^A-Za-z0-9]/.test(pass);
        const username = /alice|bob|admin|user/i.test(pass);
        const dictionary = /password|qwerty|123456|letmein/i.test(pass);
        const repeat = /(.)\1\1\1/.test(pass);
        return [
            ["Tối thiểu 12 ký tự", pass.length >= 12],
            ["Có chữ thường", lower],
            ["Có chữ hoa", upper],
            ["Có chữ số", digit],
            ["Có ký tự đặc biệt", special],
            ["Không chứa username phổ biến", !username],
            ["Không phải từ điển dễ đoán", !dictionary],
            ["Không lặp 4 ký tự liên tiếp", !repeat],
        ];
    }, [pass]);
    const passed = checks.filter((c) => c[1]).length;
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6">
            <h4 className="font-bold text-white text-xl mb-3 flex items-center gap-2">
                <Gauge className="text-green-400" /> Lab kiểm tra độ mạnh
            </h4>
            <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white font-mono mb-4"
            />
            <div className="h-3 bg-slate-950 rounded-full overflow-hidden mb-4 border border-slate-800">
                <div
                    className={`h-full transition-all ${passed >= 7 ? "bg-green-500" : passed >= 5 ? "bg-amber-500" : "bg-rose-500"}`}
                    style={{ width: `${(passed / checks.length) * 100}%` }}
                />
            </div>
            <div className="grid md:grid-cols-2 gap-2">
                {checks.map(([label, ok]) => (
                    <div
                        key={label}
                        className={`flex items-center gap-2 text-sm rounded-xl p-2 ${ok ? "text-green-300 bg-green-500/10" : "text-rose-300 bg-rose-500/10"}`}
                    >
                        {ok ? (
                            <CheckCircle2 size={16} />
                        ) : (
                            <XCircle size={16} />
                        )}
                        {label}
                    </div>
                ))}
            </div>
        </div>
    );
}

function PwqualityConfig() {
    return (
        <TerminalBlock
            title="/etc/security/pwquality.conf — cấu hình gợi ý"
            code={`minlen = 12
dcredit = -1      # bắt buộc ít nhất 1 số
ucredit = -1      # bắt buộc ít nhất 1 chữ hoa
lcredit = -1      # bắt buộc ít nhất 1 chữ thường
ocredit = -1      # bắt buộc ít nhất 1 ký tự đặc biệt
minclass = 3
maxrepeat = 3
maxsequence = 3
usercheck = 1
gecoscheck = 1
dictcheck = 1
difok = 5
retry = 3`}
        />
    );
}

function ExpiryScanner() {
    const users = [
        ["alice", 12],
        ["bob", 3],
        ["charlie", 27],
        ["dave", -1],
        ["eve", 60],
    ];
    const [threshold, setThreshold] = useState(14);
    const visible = users.filter(([, days]) => days <= threshold);
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                <div>
                    <h4 className="text-xl font-bold text-white">
                        Scanner user sắp hết hạn
                    </h4>
                    <p className="text-sm text-slate-400">
                        Mô phỏng script đọc /etc/shadow và lọc user còn ít ngày.
                    </p>
                </div>
                <label className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-3">
                    <span className="text-xs text-slate-500 uppercase font-bold mr-3">
                        Ngưỡng
                    </span>
                    <input
                        type="number"
                        value={threshold}
                        onChange={(e) => setThreshold(Number(e.target.value))}
                        className="bg-transparent text-white w-16 font-mono"
                    />{" "}
                    ngày
                </label>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-700">
                <table className="w-full text-sm">
                    <thead className="bg-slate-950 text-slate-400">
                        <tr>
                            <th className="text-left p-4">User</th>
                            <th className="text-left p-4">Còn lại</th>
                            <th className="text-left p-4">Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        {visible.map(([u, d]) => (
                            <tr
                                key={u}
                                className="border-t border-slate-700 bg-slate-900/50"
                            >
                                <td className="p-4 font-bold text-white">
                                    {u}
                                </td>
                                <td
                                    className={`p-4 font-mono ${d < 0 ? "text-rose-400" : d <= 3 ? "text-amber-400" : "text-cyan-300"}`}
                                >
                                    {d < 0
                                        ? `Đã hết hạn ${-d} ngày`
                                        : `${d} ngày`}
                                </td>
                                <td className="p-4">
                                    {d < 0
                                        ? "Cần xử lý ngay"
                                        : d <= 3
                                          ? "Rất gấp"
                                          : "Sắp hết hạn"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function CompanyPolicyScenario() {
    const steps = [
        [
            "1",
            "Cài module",
            "sudo apt install libpam-pwquality -y",
            ShieldCheck,
        ],
        [
            "2",
            "Cấu hình độ mạnh",
            "minlen=12, d/u/l/ocredit=-1, dictcheck=1",
            Gauge,
        ],
        [
            "3",
            "Bật lịch sử",
            "pam_pwhistory.so remember=10 use_authok",
            History,
        ],
        [
            "4",
            "Cập nhật login.defs",
            "PASS_MAX_DAYS=90, PASS_MIN_DAYS=7",
            FileText,
        ],
        ["5", "Áp dụng user cũ", "chage -m 7 -M 90 -W 14 -I 30", Users],
        [
            "6",
            "Kiểm tra",
            "chage -l, passwd -S, test pass yếu/mạnh",
            ListChecks,
        ],
    ];
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map(([n, title, desc, Icon]) => (
                <div
                    key={n}
                    className="bg-slate-800 border border-slate-700 rounded-3xl p-5"
                >
                    <div className="flex items-center justify-between mb-4">
                        <Icon className="text-sky-400" size={28} />
                        <span className="font-mono text-sky-300 bg-sky-500/10 border border-sky-500/20 rounded-full px-3 py-1">
                            Bước {n}
                        </span>
                    </div>
                    <h4 className="font-bold text-white mb-2">{title}</h4>
                    <code className="text-xs text-slate-400 break-all">
                        {desc}
                    </code>
                </div>
            ))}
        </div>
    );
}

function PasswordManagerPreview() {
    const [mode, setMode] = useState("report");
    const content = {
        info: `Username: alice\nTrạng thái: ✅ Active\nPassword expires: May 19, 2026\nCòn 84 ngày`,
        policy: `1) Chuẩn doanh nghiệp\n2) Bảo mật cao\n3) Tài khoản tạm thời\n4) Tùy chỉnh`,
        force: `sudo chage -d 0 alice\n✅ alice sẽ phải đổi mật khẩu lần đăng nhập tiếp`,
        lock: `sudo passwd -l alice\n🔒 Đã KHÓA alice`,
        report: `USER            STATUS   HẾT HẠN      CÒN LẠI\nalice           ACTIVE   2026-05-19   84 ngày\nbob             ACTIVE   2026-02-21   ⚡ 3 ngày\ncharlie         LOCKED   N/A          N/A`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-2">
                    {[
                        ["info", "Xem thông tin user"],
                        ["policy", "Đặt policy"],
                        ["force", "Buộc đổi pass"],
                        ["lock", "Khóa/mở khóa"],
                        ["report", "Báo cáo hệ thống"],
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
                        title="password_manager.sh preview"
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
            "Tạo user thực hành",
            'sudo useradd -m -s /bin/bash -c "Test User" testuser && sudo passwd testuser',
        ],
        [
            "Xem trạng thái ban đầu",
            "sudo chage -l testuser && sudo passwd -S testuser",
        ],
        ["Đặt policy", "sudo chage -m 7 -M 90 -W 14 -I 30 testuser"],
        ["Kiểm tra sau khi đặt", "sudo chage -l testuser"],
        ["Bắt buộc đổi pass lần sau", "sudo chage -d 0 testuser"],
        ["Khóa tài khoản", "sudo passwd -l testuser"],
        ["Mở khóa tài khoản", "sudo passwd -u testuser"],
        [
            "Đặt ngày hết hạn tài khoản",
            'sudo chage -E $(date -d "+30 days" +%Y-%m-%d) testuser',
        ],
        ["Dọn dẹp", "sudo userdel -r testuser"],
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

function SummaryBox({ title, items }) {
    return (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
            <h4 className="font-bold text-cyan-300 uppercase text-xs tracking-widest mb-4">
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
        question: "Mật khẩu Linux được lưu dạng gì trong /etc/shadow?",
        options: [
            "Plaintext",
            "Hash một chiều kèm salt/thông tin thuật toán",
            "Base64",
            "File zip được mã hóa",
        ],
        correct: 1,
        explanation:
            "Linux lưu hash mật khẩu, không lưu plaintext. Khi đăng nhập, mật khẩu nhập vào được hash lại rồi so sánh.",
    },
    {
        question:
            "passwd -l alice và chage -E 2026-01-01 alice khác nhau thế nào?",
        options: [
            "Không khác gì",
            "passwd -l khóa password ngay; chage -E đặt ngày hết hạn tài khoản",
            "chage -E chỉ đổi tên user",
            "passwd -l xóa user",
        ],
        correct: 1,
        explanation:
            "passwd -l khóa mật khẩu bằng cách làm trường password không còn đăng nhập được. chage -E đặt ngày hết hạn tài khoản theo lịch.",
    },
    {
        question: "chage -d 0 alice dùng để làm gì?",
        options: [
            "Xóa user alice",
            "Buộc alice đổi mật khẩu ở lần đăng nhập tiếp theo",
            "Đặt mật khẩu không bao giờ hết hạn",
            "Khóa root",
        ],
        correct: 1,
        explanation:
            "-d đặt ngày đổi pass cuối. Giá trị 0 tương đương rất cũ, làm password bị coi là hết hạn ngay.",
    },
    {
        question: "Tại sao nên đặt PASS_MIN_DAYS > 0?",
        options: [
            "Để user không đổi pass liên tục rồi quay lại pass cũ",
            "Để máy chạy nhanh hơn",
            "Để tắt PAM",
            "Để root không cần mật khẩu",
        ],
        correct: 0,
        explanation:
            "Min days ngăn user đổi mật khẩu nhiều lần liên tục nhằm vượt qua lịch sử mật khẩu và quay về password cũ.",
    },
    {
        question: "pam_pwquality và pam_pwhistory khác nhau thế nào?",
        options: [
            "pwquality kiểm tra độ mạnh; pwhistory ngăn dùng lại pass cũ",
            "Cả hai đều chỉ khóa user",
            "pwhistory kiểm tra chữ hoa",
            "pwquality lưu /etc/shadow",
        ],
        correct: 0,
        explanation:
            "pwquality kiểm tra độ dài, loại ký tự, dictionary, username... còn pwhistory kiểm tra mật khẩu đã dùng trước đó.",
    },
    {
        question:
            "Ký hiệu ! trong trường password của /etc/shadow nghĩa là gì?",
        options: [
            "Password rất mạnh",
            "Tài khoản bị khóa",
            "Không có user",
            "Dùng MD5",
        ],
        correct: 1,
        explanation:
            "Dấu ! thường cho biết tài khoản/password bị khóa, không thể đăng nhập bằng mật khẩu đó.",
    },
    {
        question:
            "Muốn xem mật khẩu của alice còn bao nhiêu ngày nữa hết hạn, dùng lệnh nào?",
        options: [
            "sudo chage -l alice",
            "sudo rm alice",
            "passwd -d alice",
            "cat /etc/passwd | grep pass",
        ],
        correct: 0,
        explanation:
            "chage -l hiển thị ngày đổi cuối, ngày hết hạn password, inactive, account expiry, min/max/warn days.",
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
                    <strong className="text-cyan-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu về quản lý mật khẩu.
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
                <span className="text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
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
