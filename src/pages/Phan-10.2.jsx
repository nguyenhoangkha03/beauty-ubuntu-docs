import React, { useMemo, useState } from "react";
import {
    KeyRound,
    Terminal,
    ShieldCheck,
    Lock,
    Unlock,
    Server,
    Laptop,
    FileText,
    Copy,
    Info,
    CheckCircle2,
    XCircle,
    AlertTriangle,
    ChevronRight,
    RotateCcw,
    Sparkles,
    UserCheck,
    Fingerprint,
    Settings,
    Eye,
    EyeOff,
    Bug,
    Wrench,
    ListChecks,
    HelpCircle,
    DoorOpen,
    FileKey,
    Network,
    ShieldAlert,
    ClipboardCheck,
    FolderLock,
    Search,
    Mail,
    Globe,
    Zap,
    PackageCheck,
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
                                Security · SSH · Keys · authorized_keys
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 10
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 10.2
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" /> Đăng
                        nhập server an toàn hơn mật khẩu
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Quản Lý Khóa SSH <br />
                        <span className="text-orange-500">
                            Tạo key pair & authorized_keys
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Bạn sẽ hiểu SSH key là gì, tạo cặp khóa{" "}
                        <code className="text-orange-300">private/public</code>,
                        copy public key lên server bằng{" "}
                        <code className="text-orange-300">ssh-copy-id</code>,
                        cấu hình{" "}
                        <code className="text-orange-300">~/.ssh/config</code>,
                        đặt quyền đúng và xử lý lỗi thường gặp.
                    </p>
                </section>

                <section className="bg-red-500/10 border border-red-500/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-5 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                        <ShieldAlert size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Cảnh báo quan trọng: không bao giờ chia sẻ private
                            key
                        </h3>
                        <p className="text-red-100 leading-relaxed">
                            File không có đuôi{" "}
                            <code className="text-white">.pub</code>, ví dụ{" "}
                            <code className="text-white">
                                ~/.ssh/id_ed25519
                            </code>
                            , là private key. Không gửi qua chat, email, GitHub,
                            Google Drive công khai hoặc paste vào website. Chỉ
                            chia sẻ file public key có đuôi{" "}
                            <code className="text-white">.pub</code>.
                        </p>
                    </div>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <SshConceptCard />
                    <KeyPairSimulator />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="blue"
                        icon={<KeyRound size={22} />}
                        title="SSH key là gì?"
                        subtitle="Private key ở máy cá nhân; public key được đưa lên server trong authorized_keys."
                    />
                    <SshKeyConceptSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="green"
                        icon={<Terminal size={22} />}
                        title="Tạo SSH key pair bằng ssh-keygen"
                        subtitle="Khuyến nghị dùng ed25519: hiện đại, an toàn, nhanh và key ngắn gọn."
                    />
                    <KeygenSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="orange"
                        icon={<Copy size={22} />}
                        title="Copy public key lên server"
                        subtitle="Dùng ssh-copy-id nếu có; nếu không, thêm thủ công vào ~/.ssh/authorized_keys."
                    />
                    <CopyKeySection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="purple"
                        icon={<Settings size={22} />}
                        title="Dùng key riêng và SSH config"
                        subtitle="Tạo key riêng cho từng server/dịch vụ và dùng alias để không phải gõ lệnh dài."
                    />
                    <SshConfigSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="cyan"
                        icon={<FolderLock size={22} />}
                        title="Phân quyền chuẩn cho SSH"
                        subtitle="SSH rất nghiêm ngặt với quyền file. Sai permission có thể khiến key bị từ chối."
                    />
                    <PermissionSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="red"
                        icon={<Bug size={22} />}
                        title="Lỗi phổ biến và cách xử lý"
                        subtitle="Permission denied, private key quá mở, host key changed, thiếu ssh-copy-id và sai quyền home/.ssh."
                    />
                    <CommonErrorsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="yellow"
                        icon={<ShieldCheck size={22} />}
                        title="Workflow an toàn cho server public"
                        subtitle="Bật SSH key, test kết nối mới, rồi mới hạn chế password/root login ở bài bảo mật SSH nâng cao."
                    />
                    <SafeServerWorkflow />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="8"
                        color="teal"
                        icon={<ListChecks size={22} />}
                        title="Tóm tắt nhanh"
                        subtitle="Các file, lệnh và quyền quan trọng khi làm việc với SSH key."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <PackageCheck className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức bài 10.2
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Ôn lại private/public key, authorized_keys,
                                    chmod 600, ssh-copy-id, known_hosts và SSH
                                    config.
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
                        Bạn đã biết đăng nhập server bằng SSH key. Tiếp theo là
                        dựng tường lửa và chống brute-force.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                        Bài tiếp theo: 10.3 — Cấu hình ufw và fail2ban{" "}
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

function SshConceptCard() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-orange-500/15 text-orange-400 rounded-2xl flex items-center justify-center">
                    <Network size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        SSH là gì?
                    </h3>
                    <p className="text-slate-500 text-sm">
                        Secure Shell — đăng nhập Linux từ xa an toàn
                    </p>
                </div>
            </div>
            <CodeBlock
                title="ssh-basic.sh"
                code={`ssh user@192.168.1.100\n\n# ssh  : công cụ kết nối từ xa\n# user : user trên server\n# IP   : địa chỉ server hoặc domain`}
            />
            <div className="grid sm:grid-cols-2 gap-4 mt-5">
                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4">
                    <div className="text-red-300 font-bold flex items-center gap-2">
                        <XCircle size={18} /> Mật khẩu
                    </div>
                    <p className="text-sm text-slate-400 mt-2">
                        Dễ bị dò nếu yếu, phải nhập nhiều lần, không lý tưởng
                        cho server public.
                    </p>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4">
                    <div className="text-green-300 font-bold flex items-center gap-2">
                        <CheckCircle2 size={18} /> SSH key
                    </div>
                    <p className="text-sm text-slate-400 mt-2">
                        An toàn hơn, tiện tự động hóa, phù hợp server public và
                        DevOps workflow.
                    </p>
                </div>
            </div>
        </div>
    );
}

function KeyPairSimulator() {
    const [showPrivate, setShowPrivate] = useState(false);
    const [copied, setCopied] = useState(false);
    return (
        <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <KeyRound className="text-orange-400" /> Mô phỏng private/public
                key
            </h3>
            <p className="text-slate-400 mb-6">
                Private key là chìa khóa thật. Public key là ổ khóa đặt trên
                server.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-slate-950 border border-red-500/20 rounded-2xl p-5">
                    <Lock className="text-red-400 mb-3" />
                    <div className="font-bold text-white mb-2">Private key</div>
                    <code className="text-red-300 text-sm">
                        ~/.ssh/id_ed25519
                    </code>
                    <button
                        onClick={() => setShowPrivate((v) => !v)}
                        className="mt-4 w-full px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-sm font-bold flex items-center justify-center gap-2"
                    >
                        {showPrivate ? <EyeOff size={16} /> : <Eye size={16} />}{" "}
                        {showPrivate ? "Ẩn" : "Xem cảnh báo"}
                    </button>
                    {showPrivate && (
                        <div className="mt-3 text-xs text-red-100 bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                            Không gửi file này cho bất kỳ ai.
                        </div>
                    )}
                </div>
                <div className="bg-slate-950 border border-green-500/20 rounded-2xl p-5">
                    <Unlock className="text-green-400 mb-3" />
                    <div className="font-bold text-white mb-2">Public key</div>
                    <code className="text-green-300 text-sm">
                        ~/.ssh/id_ed25519.pub
                    </code>
                    <button
                        onClick={() => setCopied(true)}
                        className={`mt-4 w-full px-4 py-2 rounded-xl border text-sm font-bold flex items-center justify-center gap-2 ${copied ? "bg-green-500 text-white border-green-500" : "bg-green-500/10 border-green-500/20 text-green-200"}`}
                    >
                        <Copy size={16} />{" "}
                        {copied
                            ? "Đã đưa lên server"
                            : "Copy lên authorized_keys"}
                    </button>
                </div>
            </div>
            <div className="bg-black border border-slate-800 rounded-2xl p-5 font-mono text-sm text-green-400">
                {copied
                    ? "Server có public key → private key khớp → login OK"
                    : "Server chưa có public key → Permission denied"}
            </div>
        </div>
    );
}

function SshKeyConceptSection() {
    return (
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-5">
                    <ConceptBox
                        icon={<Laptop />}
                        title="Máy cá nhân"
                        code={`~/.ssh/id_ed25519\n~/.ssh/id_ed25519.pub`}
                        desc="Giữ private key và public key."
                    />
                    <ConceptBox
                        icon={<Server />}
                        title="Ubuntu Server"
                        code={`~/.ssh/authorized_keys`}
                        desc="Chứa public key được phép đăng nhập."
                    />
                </div>
                <div className="bg-black border border-slate-800 rounded-2xl p-5 font-mono text-sm text-slate-300 whitespace-pre-wrap">{`Máy cá nhân có private key\n          │\n          │ chứng minh danh tính\n          ▼\nServer có public key trong authorized_keys\n          │\n          ▼\nĐăng nhập thành công`}</div>
            </div>
            <CheatCard
                title="File quan trọng"
                rows={[
                    ["id_ed25519", "Private key, tuyệt đối không chia sẻ"],
                    ["id_ed25519.pub", "Public key, có thể đưa lên server"],
                    ["authorized_keys", "Danh sách public key được phép login"],
                    ["known_hosts", "Fingerprint server đã từng kết nối"],
                    ["~/.ssh/config", "Alias và cấu hình SSH client"],
                ]}
            />
        </div>
    );
}

function ConceptBox({ icon, title, code, desc }) {
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
            <div className="text-orange-400 mb-3">{icon}</div>
            <div className="font-bold text-white mb-2">{title}</div>
            <pre className="bg-black/50 rounded-xl border border-slate-800 p-3 text-xs text-green-400 overflow-x-auto">
                <code>{code}</code>
            </pre>
            <p className="text-slate-500 text-sm mt-3">{desc}</p>
        </div>
    );
}

function KeygenSection() {
    const [passphrase, setPassphrase] = useState(true);
    return (
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-6">
            <CodeBlock
                title="ssh-keygen-ed25519.sh"
                code={`# Kiểm tra đã có SSH key chưa\nls -la ~/.ssh\n\n# Tạo key pair khuyến nghị\nssh-keygen -t ed25519 -C "kha@ubuntu-laptop"\n\n# Output mẫu:\nGenerating public/private ed25519 key pair.\nEnter file in which to save the key (/home/kha/.ssh/id_ed25519):\n\n# Nhấn Enter để dùng đường dẫn mặc định\n# Sau đó đặt passphrase hoặc bỏ trống\n\n# Kết quả:\n# /home/kha/.ssh/id_ed25519      private key\n# /home/kha/.ssh/id_ed25519.pub  public key\n\n# Xem public key\ncat ~/.ssh/id_ed25519.pub`}
            />
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 h-fit">
                <h4 className="font-bold text-white mb-4">
                    Có nên đặt passphrase?
                </h4>
                <div className="grid grid-cols-2 gap-3 mb-5">
                    <button
                        onClick={() => setPassphrase(false)}
                        className={`p-4 rounded-xl border font-bold ${!passphrase ? "bg-yellow-500 text-slate-950 border-yellow-500" : "bg-slate-900 border-slate-800 text-slate-400"}`}
                    >
                        Bỏ trống
                    </button>
                    <button
                        onClick={() => setPassphrase(true)}
                        className={`p-4 rounded-xl border font-bold ${passphrase ? "bg-green-500 text-white border-green-500" : "bg-slate-900 border-slate-800 text-slate-400"}`}
                    >
                        Có passphrase
                    </button>
                </div>
                <div
                    className={`rounded-2xl border p-5 ${passphrase ? "bg-green-500/10 border-green-500/20" : "bg-yellow-500/10 border-yellow-500/20"}`}
                >
                    <div className="font-bold text-white mb-2">
                        {passphrase
                            ? "An toàn hơn"
                            : "Tiện hơn nhưng rủi ro hơn"}
                    </div>
                    <p className="text-slate-400 text-sm">
                        {passphrase
                            ? "Nếu private key bị lộ, kẻ khác vẫn cần passphrase để dùng key."
                            : "Không cần nhập passphrase khi SSH, nhưng nếu private key bị lộ thì rất nguy hiểm."}
                    </p>
                </div>
            </div>
        </div>
    );
}

function CopyKeySection() {
    const [tab, setTab] = useState("copyid");
    const tabs = [
        ["copyid", "ssh-copy-id"],
        ["manual", "Thủ công"],
        ["test", "Thử SSH"],
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
                {tab === "copyid" && (
                    <CodeBlock
                        title="ssh-copy-id.sh"
                        code={`# Giả sử server:\n# User: kha\n# IP:   192.168.1.100\n\nssh-copy-id kha@192.168.1.100\n\n# Output mẫu lần đầu:\n/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/home/kha/.ssh/id_ed25519.pub"\nThe authenticity of host '192.168.1.100 (192.168.1.100)' can't be established.\nED25519 key fingerprint is SHA256:xyz789example.\nAre you sure you want to continue connecting (yes/no/[fingerprint])?\n\n# Nhập yes\n# Sau đó nhập password user trên server\n\n# Thành công:\nNumber of key(s) added: 1\nNow try logging into the machine, with:\n  "ssh 'kha@192.168.1.100'"`}
                    />
                )}
                {tab === "manual" && (
                    <CodeBlock
                        title="manual-authorized-keys.sh"
                        code={`# 1. Trên máy cá nhân, xem public key\ncat ~/.ssh/id_ed25519.pub\n\n# Copy toàn bộ một dòng dạng:\n# ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIBExampleKeyContent kha@ubuntu-laptop\n\n# 2. Trên server, tạo thư mục .ssh\nmkdir -p ~/.ssh\n\n# 3. Mở authorized_keys\nnano ~/.ssh/authorized_keys\n\n# Dán public key vào một dòng mới\n# Lưu: Ctrl + O → Enter → Ctrl + X\n\n# 4. Sửa phân quyền\nchmod 700 ~/.ssh\nchmod 600 ~/.ssh/authorized_keys`}
                    />
                )}
                {tab === "test" && (
                    <CodeBlock
                        title="test-ssh-login.sh"
                        code={`ssh kha@192.168.1.100\n\n# Nếu đúng:\nWelcome to Ubuntu 22.04.5 LTS\nkha@server:~$\n\n# Nếu dùng key cụ thể:\nssh -i ~/.ssh/id_ed25519 kha@192.168.1.100\n\n# Debug nếu lỗi:\nssh -v kha@192.168.1.100`}
                    />
                )}
            </div>
        </div>
    );
}

function SshConfigSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="ssh-config-alias.sh"
                code={`# Tạo key riêng cho VPS Kafood\nssh-keygen -t ed25519 -f ~/.ssh/vps_kafood -C "vps-kafood"\n\n# Copy public key riêng lên server\nssh-copy-id -i ~/.ssh/vps_kafood.pub kha@192.168.1.100\n\n# SSH bằng key cụ thể\nssh -i ~/.ssh/vps_kafood kha@192.168.1.100\n\n# Tạo alias trong ~/.ssh/config\nnano ~/.ssh/config\n\n# Nội dung:\nHost kafood-vps\n    HostName 192.168.1.100\n    User kha\n    IdentityFile ~/.ssh/vps_kafood\n    Port 22\n\n# Sửa quyền config\nchmod 600 ~/.ssh/config\n\n# Từ nay đăng nhập ngắn gọn:\nssh kafood-vps`}
            />
            <CheatCard
                title="Ý nghĩa ~/.ssh/config"
                rows={[
                    ["Host", "Tên tắt tự đặt, ví dụ kafood-vps"],
                    ["HostName", "IP hoặc domain server"],
                    ["User", "Username trên server"],
                    ["IdentityFile", "Private key dùng để login"],
                    ["Port", "Cổng SSH, mặc định 22"],
                ]}
            />
        </div>
    );
}

function PermissionSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="ssh-permissions.sh"
                code={`# Trên máy cá nhân\nchmod 700 ~/.ssh\nchmod 600 ~/.ssh/id_ed25519\nchmod 644 ~/.ssh/id_ed25519.pub\nchmod 600 ~/.ssh/config\n\n# Trên server\nchmod 755 ~\nchmod 700 ~/.ssh\nchmod 600 ~/.ssh/authorized_keys\n\n# Nếu sai owner trên server\nsudo chown -R $USER:$USER ~/.ssh\n\n# Kiểm tra\nls -ld ~ ~/.ssh\nls -l ~/.ssh/id_ed25519 ~/.ssh/id_ed25519.pub 2>/dev/null\nls -l ~/.ssh/authorized_keys 2>/dev/null`}
            />
            <div className="space-y-4">
                <PermissionCard
                    file="~"
                    perm="755"
                    desc="Home không được quá mở nếu SSH strict modes bật."
                />
                <PermissionCard
                    file="~/.ssh"
                    perm="700"
                    desc="Chỉ owner được vào thư mục SSH."
                />
                <PermissionCard
                    file="private key"
                    perm="600"
                    desc="Chỉ owner đọc/ghi. SSH sẽ từ chối nếu quá mở."
                    danger
                />
                <PermissionCard
                    file="authorized_keys"
                    perm="600"
                    desc="Chỉ owner đọc/ghi danh sách key được phép login."
                />
                <PermissionCard
                    file="public key"
                    perm="644"
                    desc="Có thể đọc công khai, vì public key không phải bí mật."
                />
            </div>
        </div>
    );
}

function PermissionCard({ file, perm, desc, danger }) {
    return (
        <div
            className={`rounded-2xl border p-4 ${danger ? "bg-red-500/10 border-red-500/20" : "bg-slate-950 border-slate-800"}`}
        >
            <div className="flex items-center justify-between gap-3 mb-2">
                <code className="text-orange-300">{file}</code>
                <span className="font-bold text-white">{perm}</span>
            </div>
            <p className="text-slate-500 text-sm">{desc}</p>
        </div>
    );
}

function CommonErrorsSection() {
    const [tab, setTab] = useState("publickey");
    const tabs = [
        ["publickey", "Permission denied"],
        ["openkey", "Private key quá mở"],
        ["hostkey", "Host key changed"],
        ["copyid", "ssh-copy-id thiếu"],
        ["modes", "Bad ownership"],
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
                {tab === "publickey" && (
                    <CodeBlock
                        title="permission-denied-publickey.sh"
                        code={`ssh kha@192.168.1.100\n# kha@192.168.1.100: Permission denied (publickey).\n\n# Thử chỉ định key\nssh -i ~/.ssh/id_ed25519 kha@192.168.1.100\n\n# Debug\nssh -v kha@192.168.1.100\n\n# Nếu thấy Offering public key nhưng vẫn bị từ chối, kiểm tra server:\ncat ~/.ssh/authorized_keys\nchmod 700 ~/.ssh\nchmod 600 ~/.ssh/authorized_keys\n\n# Kiểm tra đúng user chưa:\nwhoami\npwd`}
                    />
                )}
                {tab === "openkey" && (
                    <CodeBlock
                        title="unprotected-private-key.sh"
                        code={`ssh -i ~/.ssh/id_ed25519 kha@192.168.1.100\n\n# WARNING: UNPROTECTED PRIVATE KEY FILE!\n# Permissions 0644 for '/home/kha/.ssh/id_ed25519' are too open.\n# This private key will be ignored.\n\n# Sửa:\nchmod 600 ~/.ssh/id_ed25519\n\n# Kiểm tra đúng:\nls -l ~/.ssh/id_ed25519\n# -rw------- 1 kha kha 411 Apr 26 10:00 /home/kha/.ssh/id_ed25519`}
                    />
                )}
                {tab === "hostkey" && (
                    <CodeBlock
                        title="host-key-verification-failed.sh"
                        code={`ssh kha@192.168.1.100\n\n# WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!\n# Host key verification failed.\n\n# Nguyên nhân có thể:\n# - Server vừa cài lại OS\n# - IP đó thuộc máy khác\n# - Có nguy cơ bị giả mạo server\n\n# Nếu chắc chắn server đã cài lại:\nssh-keygen -R 192.168.1.100\nssh kha@192.168.1.100\n\n# Nhập yes khi xác nhận fingerprint mới`}
                    />
                )}
                {tab === "copyid" && (
                    <CodeBlock
                        title="ssh-copy-id-command-not-found.sh"
                        code={`ssh-copy-id kha@192.168.1.100\n# ssh-copy-id: command not found\n\n# Trên Ubuntu, cài openssh-client\nsudo apt update\nsudo apt install openssh-client\n\n# Hoặc thêm key thủ công vào ~/.ssh/authorized_keys trên server`}
                    />
                )}
                {tab === "modes" && (
                    <CodeBlock
                        title="bad-ownership-or-modes.sh"
                        code={`# Server log có thể báo:\n# Authentication refused: bad ownership or modes for directory /home/kha\n\n# Sửa trên server:\nchmod 755 ~\nchmod 700 ~/.ssh\nchmod 600 ~/.ssh/authorized_keys\nsudo chown -R $USER:$USER ~/.ssh\n\n# Xem log SSH server:\nsudo journalctl -u ssh -n 50\nsudo tail -f /var/log/auth.log`}
                    />
                )}
            </div>
        </div>
    );
}

function SafeServerWorkflow() {
    return (
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
            <CodeBlock
                title="safe-ssh-key-workflow.sh"
                code={`# 1. Tạo key trên máy cá nhân\nssh-keygen -t ed25519 -C "kha@ubuntu-laptop"\n\n# 2. Copy public key lên server\nssh-copy-id kha@192.168.1.100\n\n# 3. Test login bằng key\nssh kha@192.168.1.100\n\n# 4. Mở terminal thứ hai và test lại lần nữa\nssh -v kha@192.168.1.100\n\n# 5. Chỉ sau khi chắc chắn key hoạt động, mới học tiếp bài nâng cao:\n# - Hạn chế PasswordAuthentication\n# - Tắt PermitRootLogin\n# - Đổi port SSH nếu cần\n# - Dùng ufw/fail2ban`}
                note="Không tự tắt password/root login khi chưa chắc chắn SSH key hoạt động, vì có thể tự khóa mình khỏi server."
            />
            <div className="space-y-4">
                <ExplainCard
                    icon={<ClipboardCheck size={20} />}
                    title="Test trên terminal mới"
                    desc="Giữ phiên SSH cũ mở, mở terminal khác để test key. Nếu lỗi, bạn vẫn còn phiên cũ để sửa."
                />
                <ExplainCard
                    icon={<ShieldCheck size={20} />}
                    title="Key trước, hardening sau"
                    desc="Ưu tiên làm key hoạt động ổn định trước khi tắt password login."
                />
                <ExplainCard
                    icon={<AlertTriangle size={20} />}
                    title="Không khóa chính mình"
                    desc="Sai sshd_config có thể khiến bạn mất quyền vào server từ xa."
                    danger
                />
            </div>
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
            title: "File",
            rows: [
                ["id_ed25519", "private key"],
                ["id_ed25519.pub", "public key"],
                ["authorized_keys", "key được phép"],
                ["known_hosts", "fingerprint server"],
                ["config", "alias SSH"],
            ],
        },
        {
            title: "Lệnh chính",
            rows: [
                ["ssh-keygen", "tạo key"],
                ["cat *.pub", "xem public key"],
                ["ssh-copy-id", "copy lên server"],
                ["ssh user@host", "đăng nhập"],
                ["ssh -i key", "chỉ định key"],
            ],
        },
        {
            title: "Quyền",
            rows: [
                ["chmod 700 ~/.ssh", "thư mục SSH"],
                ["chmod 600 private", "private key"],
                ["chmod 600 authorized_keys", "server"],
                ["chmod 600 config", "SSH config"],
                ["chmod 755 ~", "home server"],
            ],
        },
        {
            title: "Config",
            rows: [
                ["Host", "alias"],
                ["HostName", "IP/domain"],
                ["User", "user server"],
                ["IdentityFile", "private key"],
                ["Port", "cổng SSH"],
            ],
        },
        {
            title: "Debug",
            rows: [
                ["ssh -v", "debug client"],
                ["journalctl -u ssh", "log server"],
                ["ssh-keygen -R", "xóa known_hosts"],
                ["chown -R", "sửa owner"],
                ["Offering public key", "đang gửi key"],
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
        question: "File nào là private key và tuyệt đối không chia sẻ?",
        options: [
            "~/.ssh/id_ed25519",
            "~/.ssh/id_ed25519.pub",
            "~/.ssh/authorized_keys",
            "~/.ssh/known_hosts",
        ],
        correct: 0,
        explanation:
            "Private key thường không có đuôi .pub, ví dụ ~/.ssh/id_ed25519. Không chia sẻ file này.",
    },
    {
        question: "File authorized_keys trên server dùng để làm gì?",
        options: [
            "Chứa danh sách public key được phép đăng nhập",
            "Chứa password user",
            "Chứa IP bị chặn",
            "Chứa log SSH",
        ],
        correct: 0,
        explanation:
            "authorized_keys lưu các public key được phép login vào user đó.",
    },
    {
        question: "Lệnh khuyến nghị để tạo SSH key hiện đại là gì?",
        options: [
            'ssh-keygen -t ed25519 -C "comment"',
            "ssh create password",
            "ssh-copy-id -t rsa",
            "chmod 700 id_ed25519",
        ],
        correct: 0,
        explanation:
            "ed25519 là thuật toán hiện đại, an toàn và nhanh, thường được khuyến nghị.",
    },
    {
        question:
            "Private key bị báo Permissions 0644 are too open. Sửa thế nào?",
        options: [
            "chmod 600 ~/.ssh/id_ed25519",
            "chmod 777 ~/.ssh/id_ed25519",
            "rm ~/.ssh/id_ed25519.pub",
            "ssh-keygen -R server",
        ],
        correct: 0,
        explanation: "Private key phải chỉ owner đọc/ghi, thường là chmod 600.",
    },
    {
        question: "Muốn SSH bằng key cụ thể dùng tùy chọn nào?",
        options: [
            "ssh -i ~/.ssh/key user@host",
            "ssh -k user@host",
            "ssh --public user@host",
            "ssh -R known_hosts",
        ],
        correct: 0,
        explanation: "-i chỉ định IdentityFile/private key dùng để xác thực.",
    },
    {
        question: "REMOTE HOST IDENTIFICATION HAS CHANGED cảnh báo điều gì?",
        options: [
            "Fingerprint server thay đổi, cần xác minh trước khi xóa known_hosts",
            "Private key quá mở",
            "Public key chưa copy",
            "Server hết RAM",
        ],
        correct: 0,
        explanation:
            "Host key changed có thể do cài lại server hoặc nguy cơ giả mạo. Chỉ ssh-keygen -R khi chắc chắn.",
    },
    {
        question: "Trong ~/.ssh/config, dòng IdentityFile nghĩa là gì?",
        options: [
            "Private key dùng cho host đó",
            "Tên người dùng",
            "Địa chỉ IP server",
            "Cổng SSH",
        ],
        correct: 0,
        explanation:
            "IdentityFile trỏ đến private key mà SSH client sẽ dùng khi kết nối host đó.",
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
