import React, { useState, useRef, useEffect } from "react";
import {
    Users,
    UserPlus,
    UserCog,
    UserMinus,
    Shield,
    Cpu,
    User,
    FileText,
    TerminalSquare,
    CheckCircle2,
    AlertTriangle,
    ChevronRight,
    ArrowRight,
    Lock,
    Unlock,
    Info,
    ShieldAlert,
    Database,
    UserCheck,
    Trash2,
    XOctagon,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-fuchsia-500 selection:text-white pb-20">
            {/* Header */}
            <header className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🐧</span>
                        <h1 className="text-xl font-bold text-white tracking-tight">
                            Khóa học Linux/Ubuntu
                        </h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400 hidden md:inline-block">
                            Bài trước: 3.5
                        </span>
                        <div className="text-sm font-medium text-fuchsia-400 bg-fuchsia-400/10 px-3 py-1 rounded-full border border-fuchsia-400/20">
                            Phần 4.1
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                {/* Title Section */}
                <div className="text-center space-y-4 py-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        Quản lý{" "}
                        <span className="text-fuchsia-400 font-mono tracking-tighter">
                            User & Group
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Linux là hệ điều hành đa người dùng (Multi-user). Hãy
                        học cách tạo, sửa, xóa và nhóm các tài khoản lại với
                        nhau để thiết lập nền tảng bảo mật vững chắc.
                    </p>
                </div>

                {/* Section 1: Types of Users */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                        <span className="bg-fuchsia-500/20 text-fuchsia-400 p-2 rounded-lg">
                            1
                        </span>
                        Phân loại Người dùng (UID)
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Root */}
                        <div className="bg-slate-800/50 p-6 rounded-3xl border border-rose-500/30 text-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                            <div className="absolute top-0 left-0 w-full h-1 bg-rose-500"></div>
                            <ShieldAlert
                                size={48}
                                className="text-rose-500 mx-auto mb-4 group-hover:scale-110 transition-transform"
                            />
                            <h4 className="text-xl font-bold text-white mb-1 font-mono">
                                ROOT USER
                            </h4>
                            <div className="text-rose-400 font-bold mb-3">
                                UID = 0
                            </div>
                            <p className="text-sm text-slate-300">
                                Siêu người dùng (Superuser). Nắm toàn quyền sinh
                                sát trên hệ thống.
                                <br />
                                <br />
                                <span className="text-slate-400 block text-left bg-black/30 p-2 rounded text-xs mt-2">
                                    • Home: /root
                                    <br />• Tên: root
                                </span>
                            </p>
                        </div>

                        {/* System */}
                        <div className="bg-slate-800/50 p-6 rounded-3xl border border-blue-500/30 text-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                            <Cpu
                                size={48}
                                className="text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform"
                            />
                            <h4 className="text-xl font-bold text-white mb-1 font-mono">
                                SYSTEM USERS
                            </h4>
                            <div className="text-blue-400 font-bold mb-3">
                                UID = 1 đến 999
                            </div>
                            <p className="text-sm text-slate-300">
                                Tài khoản ảo dùng để chạy các dịch vụ ngầm (như
                                web server, database). Không thể đăng nhập trực
                                tiếp.
                                <br />
                                <br />
                                <span className="text-slate-400 block text-left bg-black/30 p-2 rounded text-xs mt-2">
                                    • Shell: /usr/sbin/nologin
                                    <br />• Tên: www-data, mysql...
                                </span>
                            </p>
                        </div>

                        {/* Regular */}
                        <div className="bg-slate-800/50 p-6 rounded-3xl border border-green-500/30 text-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                            <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                            <User
                                size={48}
                                className="text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform"
                            />
                            <h4 className="text-xl font-bold text-white mb-1 font-mono">
                                REGULAR USERS
                            </h4>
                            <div className="text-green-400 font-bold mb-3">
                                UID = 1000+
                            </div>
                            <p className="text-sm text-slate-300">
                                Người dùng thật sự (như bạn). Bắt đầu từ số 1000
                                và tăng dần. Có thư mục riêng để lưu trữ dữ liệu
                                cá nhân.
                                <br />
                                <br />
                                <span className="text-slate-400 block text-left bg-black/30 p-2 rounded text-xs mt-2">
                                    • Home: /home/username
                                    <br />• Shell: /bin/bash
                                </span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 2: Core Files Decoder */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-teal-500/20 text-teal-400 p-2 rounded-lg">
                            2
                        </span>
                        Hồ sơ hệ thống (Các file cấu hình)
                    </h3>
                    <p className="text-slate-400 mb-6">
                        Mọi thông tin về user và group trên Linux đều được lưu
                        dưới dạng văn bản (text) trong 3 file chính nằm ở thư
                        mục <code>/etc</code>.
                    </p>

                    <FileDecoder />
                </section>

                {/* Section 3: Commands (Add, Mod, Del) */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-orange-500/20 text-orange-400 p-2 rounded-lg">
                            3
                        </span>
                        Quản lý Người dùng (CRUD)
                    </h3>

                    <div className="bg-slate-800/50 rounded-3xl border border-slate-700 overflow-hidden">
                        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-700">
                            {/* Create */}
                            <div className="p-6 bg-green-950/10 hover:bg-green-900/20 transition-colors">
                                <div className="flex items-center gap-2 text-green-400 font-bold mb-4 border-b border-slate-700 pb-2">
                                    <UserPlus size={20} /> Tạo mới (useradd)
                                </div>
                                <code className="block bg-black p-3 rounded text-green-400 font-mono text-xs mb-3 border border-slate-800">
                                    sudo useradd -m -s /bin/bash -c "Tên Đầy Đủ"
                                    username
                                </code>
                                <ul className="text-sm text-slate-300 space-y-2">
                                    <li>
                                        • <code>-m</code>: Tạo thư mục
                                        /home/username
                                    </li>
                                    <li>
                                        • <code>-s</code>: Cấp vỏ shell để gõ
                                        lệnh
                                    </li>
                                    <li>
                                        Sau khi tạo, bắt buộc phải đặt mật khẩu
                                        bằng lệnh:{" "}
                                        <code>sudo passwd username</code>
                                    </li>
                                </ul>
                            </div>

                            {/* Update */}
                            <div className="p-6 bg-blue-950/10 hover:bg-blue-900/20 transition-colors">
                                <div className="flex items-center gap-2 text-blue-400 font-bold mb-4 border-b border-slate-700 pb-2">
                                    <UserCog size={20} /> Chỉnh sửa (usermod)
                                </div>
                                <code className="block bg-black p-3 rounded text-blue-400 font-mono text-xs mb-3 border border-slate-800">
                                    sudo usermod -aG docker alice
                                    <br />
                                    <br />
                                    sudo usermod -L alice
                                </code>
                                <ul className="text-sm text-slate-300 space-y-2">
                                    <li>
                                        • <code>-aG</code>: Thêm user vào group
                                        mới
                                    </li>
                                    <li>
                                        • <code>-L</code>: Khóa (Lock) tài khoản
                                    </li>
                                    <li>
                                        • <code>-U</code>: Mở khóa (Unlock)
                                    </li>
                                </ul>
                            </div>

                            {/* Delete */}
                            <div className="p-6 bg-rose-950/10 hover:bg-rose-900/20 transition-colors">
                                <div className="flex items-center gap-2 text-rose-400 font-bold mb-4 border-b border-slate-700 pb-2">
                                    <UserMinus size={20} /> Xóa bỏ (userdel)
                                </div>
                                <code className="block bg-black p-3 rounded text-rose-400 font-mono text-xs mb-3 border border-slate-800">
                                    sudo userdel -r alice
                                </code>
                                <ul className="text-sm text-slate-300 space-y-2">
                                    <li>
                                        • Nếu KHÔNG có <code>-r</code>: Xóa tài
                                        khoản, nhưng giữ lại file cá nhân ở
                                        /home/alice.
                                    </li>
                                    <li>
                                        • CÓ <code>-r</code>: Quét sạch mọi dấu
                                        vết (Xóa cả tài khoản lẫn /home).
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: The Deadly Trap */}
                <section className="space-y-6 pt-6">
                    <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border-2 border-red-500/50 p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-[0_0_30px_rgba(239,68,68,0.15)]">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <AlertTriangle size={150} />
                        </div>
                        <h3 className="text-2xl font-bold text-red-400 flex items-center gap-2 mb-4 relative z-10">
                            <AlertTriangle size={28} /> Cái bẫy "Chết người" của
                            lệnh usermod
                        </h3>

                        <p className="text-slate-300 text-lg mb-6 relative z-10">
                            Khi bạn muốn cấp thêm quyền (thêm vào group mới) cho
                            một user, 99% người mới học Linux sẽ gõ sai lệnh này
                            và tự nhốt mình ngoài hệ thống!
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 relative z-10 font-mono text-sm">
                            <div className="bg-black p-5 rounded-2xl border border-red-500/50">
                                <div className="text-red-500 font-bold mb-2 flex items-center gap-2">
                                    <XOctagon size={16} /> SAI LẦM
                                </div>
                                <div className="text-white mb-2">
                                    $ sudo usermod{" "}
                                    <strong className="text-red-500 bg-red-500/20 px-1">
                                        -G
                                    </strong>{" "}
                                    docker alice
                                </div>
                                <div className="text-slate-400 text-xs font-sans">
                                    Lệnh này yêu cầu hệ thống:{" "}
                                    <strong>
                                        "Hãy GHI ĐÈ danh sách group của alice
                                        thành docker"
                                    </strong>
                                    . <br />
                                    <br />
                                    Hậu quả: Alice bị đá văng ra khỏi nhóm{" "}
                                    <code>sudo</code>, mất luôn quyền admin và
                                    không bao giờ sửa lại được hệ thống nữa!
                                </div>
                            </div>

                            <div className="bg-black p-5 rounded-2xl border border-green-500/50">
                                <div className="text-green-500 font-bold mb-2 flex items-center gap-2">
                                    <CheckCircle2 size={16} /> CHÍNH XÁC
                                </div>
                                <div className="text-white mb-2">
                                    $ sudo usermod{" "}
                                    <strong className="text-green-500 bg-green-500/20 px-1">
                                        -aG
                                    </strong>{" "}
                                    docker alice
                                </div>
                                <div className="text-slate-400 text-xs font-sans">
                                    Thêm chữ{" "}
                                    <strong className="text-green-400">
                                        a (Append)
                                    </strong>
                                    . <br />
                                    Lệnh này yêu cầu:{" "}
                                    <strong>
                                        "Giữ nguyên các group cũ, và NỐI THÊM
                                        group docker vào danh sách"
                                    </strong>
                                    . Đây là cách đúng và an toàn duy nhất!
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 5: Simulator */}
                <section className="space-y-6 pt-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                <span className="bg-fuchsia-500/20 text-fuchsia-400 p-2 rounded-lg">
                                    💻
                                </span>
                                Thực hành: Quản lý Nhân sự (Giả lập)
                            </h3>
                            <p className="text-slate-400 mt-2">
                                Hệ thống đang có user <code>alice</code> (sudo)
                                và <code>bob</code>. Thử tạo user{" "}
                                <code>charlie</code> và thêm vào group{" "}
                                <code>developers</code> nhé!
                            </p>
                        </div>
                    </div>

                    <UserManagerSimulator />
                </section>

                {/* Section 6: Quiz */}
                <section className="space-y-6 pt-8">
                    <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-xl">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-yellow-500/20 text-yellow-500 p-2 rounded-lg">
                                    4
                                </span>
                                Kiểm tra kiến thức
                            </h3>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                {/* Footer Next Step */}
                <div className="text-center pt-8 border-t border-slate-800">
                    <p className="text-slate-400 mb-4">
                        Bạn đã biết cách tạo ra các User và Group. Nhưng làm sao
                        để cấp cho họ quyền "Chỉ được xem, cấm xóa" đối với một
                        file cụ thể?
                    </p>
                    <button className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-fuchsia-500/20">
                        Bài 4.2 — Hệ thống Phân quyền (rwx, chmod){" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

// --- Sub Components ---

// --- File Decoder ---
function FileDecoder() {
    const [activeFile, setActiveFile] = useState("passwd");
    const [activePart, setActivePart] = useState(null);

    const passwdParts = [
        {
            id: "user",
            text: "alice",
            label: "1. Username",
            desc: "Tên đăng nhập của người dùng.",
        },
        {
            id: "pass",
            text: "x",
            label: "2. Password",
            desc: "Chữ x báo hiệu mật khẩu đã được băm (hash) và giấu an toàn sang file /etc/shadow.",
        },
        {
            id: "uid",
            text: "1000",
            label: "3. UID",
            desc: "User ID. Con số đại diện cho user này trong mắt hệ điều hành Linux (thường từ 1000 trở lên).",
        },
        {
            id: "gid",
            text: "1000",
            label: "4. GID",
            desc: "Group ID chính (Primary Group) của user.",
        },
        {
            id: "info",
            text: "Alice Nguyen",
            label: "5. GECOS (Thông tin)",
            desc: "Tên đầy đủ, số điện thoại, thông tin liên lạc (có thể bỏ trống).",
        },
        {
            id: "home",
            text: "/home/alice",
            label: "6. Home Directory",
            desc: "Thư mục cá nhân của user. Khi đăng nhập, user sẽ xuất hiện ngay tại đây.",
        },
        {
            id: "shell",
            text: "/bin/bash",
            label: "7. Login Shell",
            desc: "Chương trình diễn dịch dòng lệnh mặc định khi user này mở Terminal.",
        },
    ];

    const groupParts = [
        {
            id: "gname",
            text: "developers",
            label: "1. Tên Group",
            desc: "Tên của nhóm người dùng.",
        },
        {
            id: "gpass",
            text: "x",
            label: "2. Mật khẩu Group",
            desc: "Ít khi dùng. Chữ x báo hiệu mật khẩu (nếu có) được giấu ở /etc/gshadow.",
        },
        {
            id: "ggid",
            text: "1001",
            label: "3. GID",
            desc: "Group ID. Con số duy nhất định danh nhóm này trên hệ thống.",
        },
        {
            id: "members",
            text: "alice,bob",
            label: "4. Thành viên (Members)",
            desc: "Danh sách các tài khoản (user) thuộc nhóm này, cách nhau bởi dấu phẩy.",
        },
    ];

    const activeData = activeFile === "passwd" ? passwdParts : groupParts;

    return (
        <div className="bg-slate-950 border-2 border-teal-500/30 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex border-b border-slate-800">
                <button
                    onClick={() => {
                        setActiveFile("passwd");
                        setActivePart(null);
                    }}
                    className={`flex-1 py-3 font-mono font-bold text-sm transition-colors ${activeFile === "passwd" ? "bg-teal-500/20 text-teal-400 border-b-2 border-teal-500" : "text-slate-500 hover:text-slate-300 hover:bg-slate-800"}`}
                >
                    <FileText size={16} className="inline mr-2 -mt-1" />{" "}
                    /etc/passwd
                </button>
                <button
                    onClick={() => {
                        setActiveFile("group");
                        setActivePart(null);
                    }}
                    className={`flex-1 py-3 font-mono font-bold text-sm transition-colors ${activeFile === "group" ? "bg-teal-500/20 text-teal-400 border-b-2 border-teal-500" : "text-slate-500 hover:text-slate-300 hover:bg-slate-800"}`}
                >
                    <Users size={16} className="inline mr-2 -mt-1" /> /etc/group
                </button>
            </div>

            <div className="p-6 md:p-8">
                <div className="text-center mb-8">
                    <p className="text-slate-400 text-sm mb-4">
                        Rê chuột vào từng thành phần được ngăn cách bởi dấu hai
                        chấm (<code>:</code>) để xem ý nghĩa.
                    </p>
                    <div className="inline-flex bg-black p-4 rounded-xl border border-slate-700 font-mono text-lg md:text-xl shadow-inner">
                        {activeData.map((p, i) => (
                            <React.Fragment key={p.id}>
                                <span
                                    className={`cursor-pointer transition-all duration-200 px-1 rounded ${activePart === p.id ? "bg-teal-500 text-black font-bold scale-110" : "text-slate-300 hover:text-teal-300"}`}
                                    onMouseEnter={() => setActivePart(p.id)}
                                    onClick={() => setActivePart(p.id)}
                                >
                                    {p.text}
                                </span>
                                {i < activeData.length - 1 && (
                                    <span className="text-slate-600 px-1">
                                        :
                                    </span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="h-32 bg-slate-900 border border-slate-800 rounded-xl p-6 flex items-center justify-center text-center">
                    {activePart ? (
                        <div className="animate-in fade-in slide-in-from-bottom-2">
                            <h4 className="text-teal-400 font-bold text-lg mb-2">
                                {
                                    activeData.find((d) => d.id === activePart)
                                        .label
                                }
                            </h4>
                            <p className="text-slate-300 text-sm max-w-md mx-auto">
                                {
                                    activeData.find((d) => d.id === activePart)
                                        .desc
                                }
                            </p>
                        </div>
                    ) : (
                        <div className="text-slate-500 italic">...</div>
                    )}
                </div>
            </div>
        </div>
    );
}

// --- Interactive User Manager Simulator ---
function UserManagerSimulator() {
    const [history, setHistory] = useState([
        { type: "system", text: "Mô phỏng Quản lý User/Group." },
        {
            type: "system",
            text: "Lệnh khả dụng: useradd, usermod, userdel, groupadd, groups, id, cat /etc/passwd",
        },
    ]);
    const [input, setInput] = useState("");
    const endRef = useRef(null);
    const inputRef = useRef(null);

    // Initial State (Mock DB)
    const [db, setDb] = useState({
        users: {
            alice: {
                uid: 1000,
                gid: 1000,
                groups: ["alice", "sudo"],
                home: "/home/alice",
                shell: "/bin/bash",
                desc: "Alice",
            },
            bob: {
                uid: 1001,
                gid: 1001,
                groups: ["bob"],
                home: "/home/bob",
                shell: "/bin/bash",
                desc: "Bob Tran",
            },
        },
        groups: {
            alice: 1000,
            bob: 1001,
            sudo: 27,
            developers: 1002,
        },
        nextUid: 1002,
        nextGid: 1003,
    });

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const executeCommand = (cmdStr) => {
        const trimmed = cmdStr.trim().replace(/^sudo /, ""); // Ignore sudo
        if (!trimmed) return;

        setHistory((prev) => [...prev, { type: "input", text: cmdStr }]);
        setInput("");

        const parts =
            trimmed
                .match(/(?:[^\s"']+|"[^"]*"|'[^']*')+/g)
                ?.map((p) => p.replace(/['"]/g, "")) || [];
        const baseCmd = parts[0];
        let output = "";
        let newDb = { ...db };

        try {
            switch (baseCmd) {
                case "clear":
                    setHistory([]);
                    return;

                case "cat":
                    if (parts[1] === "/etc/passwd") {
                        output = Object.entries(newDb.users)
                            .map(
                                ([u, info]) =>
                                    `${u}:x:${info.uid}:${info.gid}:${info.desc}:${info.home}:${info.shell}`,
                            )
                            .join("\n");
                    } else if (parts[1] === "/etc/group") {
                        output = Object.entries(newDb.groups)
                            .map(([g, gid]) => {
                                const members = Object.entries(newDb.users)
                                    .filter(
                                        ([u, info]) =>
                                            info.groups.includes(g) &&
                                            info.gid !== gid,
                                    )
                                    .map(([u]) => u)
                                    .join(",");
                                return `${g}:x:${gid}:${members}`;
                            })
                            .join("\n");
                    } else {
                        output = `cat: ${parts[1]}: No such file or directory`;
                    }
                    break;

                case "id":
                    const targetUser = parts[1] || "alice";
                    if (newDb.users[targetUser]) {
                        const u = newDb.users[targetUser];
                        const groupStrs = u.groups
                            .map((g) => `${newDb.groups[g]}(${g})`)
                            .join(",");
                        output = `uid=${u.uid}(${targetUser}) gid=${u.gid}(${targetUser}) groups=${groupStrs}`;
                    } else {
                        output = `id: '${targetUser}': no such user`;
                    }
                    break;

                case "groups":
                    const gTarget = parts[1] || "alice";
                    if (newDb.users[gTarget]) {
                        output = `${gTarget} : ${newDb.users[gTarget].groups.join(" ")}`;
                    } else {
                        output = `groups: '${gTarget}': no such user`;
                    }
                    break;

                case "useradd":
                    const newUname = parts[parts.length - 1];
                    if (newUname.startsWith("-") || !newUname)
                        throw new Error("useradd: invalid user name");
                    if (newDb.users[newUname])
                        throw new Error(
                            `useradd: user '${newUname}' already exists`,
                        );

                    const hasM = parts.includes("-m");
                    newDb.users[newUname] = {
                        uid: newDb.nextUid,
                        gid: newDb.nextUid,
                        groups: [newUname],
                        home: hasM ? `/home/${newUname}` : "",
                        shell: parts.includes("-s")
                            ? parts[parts.indexOf("-s") + 1]
                            : "/bin/sh",
                        desc: parts.includes("-c")
                            ? parts[parts.indexOf("-c") + 1]
                            : "",
                    };
                    newDb.groups[newUname] = newDb.nextUid;
                    newDb.nextUid++;
                    newDb.nextGid++;
                    break;

                case "userdel":
                    const isRecursive = parts.includes("-r");
                    const delUname = parts[parts.length - 1];
                    if (!newDb.users[delUname])
                        throw new Error(
                            `userdel: user '${delUname}' does not exist`,
                        );

                    delete newDb.users[delUname];
                    delete newDb.groups[delUname];
                    output = isRecursive
                        ? `(Đã xóa user và thư mục /home/${delUname})`
                        : `(Đã xóa user)`;
                    break;

                case "groupadd":
                    const newGname = parts[parts.length - 1];
                    if (newGname.startsWith("-") || !newGname)
                        throw new Error("groupadd: invalid group name");
                    if (newDb.groups[newGname])
                        throw new Error(
                            `groupadd: group '${newGname}' already exists`,
                        );
                    newDb.groups[newGname] = newDb.nextGid;
                    newDb.nextGid++;
                    break;

                case "usermod":
                    const uModTarget = parts[parts.length - 1];
                    if (!newDb.users[uModTarget])
                        throw new Error(
                            `usermod: user '${uModTarget}' does not exist`,
                        );

                    if (
                        parts.includes("-aG") ||
                        (parts.includes("-a") && parts.includes("-G"))
                    ) {
                        const groupArgIdx = parts.findIndex(
                            (p) => p.startsWith("-G") || p === "-aG",
                        );
                        let groupsToAdd = [];
                        if (
                            parts[groupArgIdx] === "-aG" ||
                            parts[groupArgIdx] === "-G"
                        ) {
                            groupsToAdd = parts[groupArgIdx + 1].split(",");
                        } else {
                            groupsToAdd = parts[groupArgIdx]
                                .substring(2)
                                .split(","); // handle -Gdocker
                        }

                        // Validate groups exist
                        for (let g of groupsToAdd) {
                            if (!newDb.groups[g])
                                throw new Error(
                                    `usermod: group '${g}' does not exist`,
                                );
                        }

                        // Add unique groups
                        const currGroups = new Set(
                            newDb.users[uModTarget].groups,
                        );
                        groupsToAdd.forEach((g) => currGroups.add(g));
                        newDb.users[uModTarget].groups = Array.from(currGroups);
                    } else if (parts.includes("-G")) {
                        // THE DANGEROUS ONE - OVERWRITE
                        const gIdx = parts.indexOf("-G") + 1;
                        const groupsToSet = parts[gIdx].split(",");
                        for (let g of groupsToSet) {
                            if (!newDb.groups[g])
                                throw new Error(
                                    `usermod: group '${g}' does not exist`,
                                );
                        }
                        // Overwrite! (but keep primary group)
                        newDb.users[uModTarget].groups = [
                            uModTarget,
                            ...groupsToSet,
                        ];
                        output = `CẢNH BÁO: Vì thiếu '-a', bạn đã XÓA các group cũ của ${uModTarget}!`;
                    }
                    break;

                default:
                    throw new Error(`bash: ${baseCmd}: command not found`);
            }

            setDb(newDb);
        } catch (e) {
            output = e.message;
        }

        if (output) {
            setHistory((prev) => [...prev, { type: "output", text: output }]);
        }
    };

    return (
        <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1 bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex flex-col gap-3 h-[400px] overflow-y-auto custom-scrollbar">
                <div className="text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">
                    Lệnh Mẫu
                </div>

                <button
                    onClick={() => executeCommand("id bob")}
                    className="w-full text-left bg-slate-900 hover:bg-slate-700 border border-slate-700 p-3 rounded-xl transition-colors font-mono text-xs text-sky-400 flex items-center justify-between"
                >
                    <span>id bob</span> <ChevronRight size={14} />
                </button>
                <button
                    onClick={() => executeCommand("useradd -m charlie")}
                    className="w-full text-left bg-slate-900 hover:bg-slate-700 border border-slate-700 p-3 rounded-xl transition-colors font-mono text-xs text-green-400 flex items-center justify-between"
                >
                    <span>useradd -m charlie</span> <ChevronRight size={14} />
                </button>
                <button
                    onClick={() => executeCommand("groupadd developers")}
                    className="w-full text-left bg-slate-900 hover:bg-slate-700 border border-slate-700 p-3 rounded-xl transition-colors font-mono text-xs text-green-400 flex items-center justify-between"
                >
                    <span>groupadd developers</span> <ChevronRight size={14} />
                </button>
                <button
                    onClick={() =>
                        executeCommand("usermod -aG developers charlie")
                    }
                    className="w-full text-left bg-slate-900 hover:bg-slate-700 border border-slate-700 p-3 rounded-xl transition-colors font-mono text-xs text-blue-400 flex items-center justify-between"
                >
                    <span>usermod -aG developers charlie</span>{" "}
                    <ChevronRight size={14} />
                </button>
                <button
                    onClick={() =>
                        executeCommand("usermod -G developers alice")
                    }
                    className="w-full text-left bg-rose-900/30 hover:bg-rose-900/50 border border-rose-500/50 p-3 rounded-xl transition-colors font-mono text-xs text-rose-400 flex items-center justify-between"
                >
                    <span className="truncate pr-2">
                        usermod -G developers alice
                    </span>{" "}
                    <AlertTriangle size={14} />
                </button>
                <button
                    onClick={() => executeCommand("cat /etc/passwd")}
                    className="w-full text-left bg-slate-900 hover:bg-slate-700 border border-slate-700 p-3 rounded-xl transition-colors font-mono text-xs text-slate-400 flex items-center justify-between"
                >
                    <span>cat /etc/passwd</span> <ChevronRight size={14} />
                </button>

                <button
                    onClick={() => executeCommand("clear")}
                    className="w-full text-center bg-slate-800 border border-slate-700 p-2 rounded-xl transition-colors font-mono text-xs text-slate-500 mt-auto hover:bg-slate-700"
                >
                    clear
                </button>
            </div>

            <div
                className="md:col-span-2 bg-[#2c001e] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden font-mono text-[14px] flex flex-col h-[400px]"
                onClick={() => inputRef.current?.focus()}
            >
                <div className="bg-[#423b3e] px-4 py-2 flex items-center justify-between border-b border-black/50 select-none">
                    <div className="text-slate-300 text-xs font-sans font-bold">
                        Terminal - root (Sudo)
                    </div>
                </div>

                <div className="p-4 flex-1 overflow-y-auto text-slate-300 custom-scrollbar">
                    {history.map((line, i) => (
                        <div
                            key={i}
                            className="mb-1 leading-normal whitespace-pre-wrap"
                        >
                            {line.type === "system" && (
                                <span className="text-slate-400 italic">
                                    {line.text}
                                </span>
                            )}
                            {line.type === "output" && (
                                <span
                                    className={
                                        line.text.includes("CẢNH BÁO") ||
                                        line.text.includes("error") ||
                                        line.text.includes("bash:")
                                            ? "text-rose-400 font-bold"
                                            : "text-slate-300"
                                    }
                                >
                                    {line.text}
                                </span>
                            )}
                            {line.type === "input" && (
                                <div>
                                    <span className="text-red-400 font-bold">
                                        root@ubuntu
                                    </span>
                                    :
                                    <span className="text-[#729fcf] font-bold">
                                        ~
                                    </span>
                                    # {line.text}
                                </div>
                            )}
                        </div>
                    ))}

                    <div className="flex items-center">
                        <span className="text-red-400 font-bold shrink-0">
                            root@ubuntu
                        </span>
                        :
                        <span className="text-[#729fcf] font-bold shrink-0">
                            ~
                        </span>
                        <span className="text-white shrink-0 mr-2">#</span>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                executeCommand(input);
                            }}
                            className="flex-1 flex"
                        >
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="bg-transparent border-none outline-none text-white w-full font-mono p-0 m-0"
                                autoComplete="off"
                                spellCheck="false"
                            />
                        </form>
                    </div>
                    <div ref={endRef} />
                </div>
            </div>
        </div>
    );
}

// --- Quiz Component ---
const questions = [
    {
        id: 1,
        question:
            "Tài khoản có quyền lực tối cao nhất trong hệ thống Linux (Superuser) có tên mặc định là gì và sở hữu UID bằng bao nhiêu?",
        options: [
            "Tên: admin, UID: 1000",
            "Tên: superuser, UID: 1",
            "Tên: root, UID: 0",
            "Tên: ubuntu, UID: 999",
        ],
        correct: 2,
        explanation:
            "User Root nắm giữ UID 0. Đây là 'vị thần' của Linux, có thể xóa bất kỳ file nào kể cả file hệ điều hành đang chạy.",
    },
    {
        id: 2,
        question:
            "Bạn muốn tìm thông tin xem User tên là 'bob' được cấp cho Shell nào khi đăng nhập. Bạn nên dùng lệnh 'cat' để đọc nội dung file nào?",
        options: [
            "/etc/shadow",
            "/etc/passwd",
            "/etc/group",
            "/home/bob/config",
        ],
        correct: 1,
        explanation:
            "File /etc/passwd lưu trữ thông tin công khai của tất cả users (bao gồm UID, GID, Home Dir, và Shell). Mật khẩu thực sự thì nằm ở /etc/shadow.",
    },
    {
        id: 3,
        question:
            "Cú pháp ĐÚNG và AN TOÀN NHẤT để thêm user 'alice' vào group 'docker' là gì?",
        options: [
            "sudo usermod -G docker alice",
            "sudo usermod -aG docker alice",
            "sudo usermod -add docker alice",
            "sudo useradd docker alice",
        ],
        correct: 1,
        explanation:
            "Đừng quên chữ 'a' (Append)! -aG nghĩa là NỐI THÊM vào các group đang có. Nếu chỉ dùng -G, hệ thống sẽ XÓA alice khỏi mọi group cũ và chỉ giữ lại group docker.",
    },
    {
        id: 4,
        question:
            "Khi tạo một User mới dành cho nhân viên công ty, để hệ thống TỰ ĐỘNG TẠO luôn thư mục cá nhân (vd: /home/nhanvien), bạn phải truyền cờ (option) nào vào lệnh useradd?",
        options: ["-c", "-s", "-m", "-d"],
        correct: 2,
        explanation:
            "Cờ -m (Make home directory) rất quan trọng khi tạo user thật. Nếu thiếu nó, user đăng nhập vào sẽ báo lỗi vì không có 'nhà' để đứng.",
    },
    {
        id: 5,
        question:
            "Bạn muốn xóa tài khoản của nhân viên 'charlie' vừa nghỉ việc, VÀ muốn dọn dẹp sạch sẽ toàn bộ thư mục cá nhân (/home/charlie) của anh ta cho đỡ tốn ổ cứng. Lệnh nào sau đây là đúng?",
        options: [
            "sudo userdel charlie",
            "sudo userdel -f charlie",
            "sudo userdel -r charlie",
            "sudo rm -rf charlie",
        ],
        correct: 2,
        explanation:
            "Cờ -r (Remove) đi kèm lệnh userdel sẽ xóa cả tài khoản trong hệ thống lẫn mọi dấu vết (thư mục /home) của user đó trên ổ cứng.",
    },
];

function InteractiveQuiz() {
    const [currentQ, setCurrentQ] = useState(0);
    const [selected, setSelected] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const handleSelect = (index) => {
        if (showResult) return;
        setSelected(index);
        setShowResult(true);
        if (index === questions[currentQ].correct) {
            setScore((s) => s + 1);
        }
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
            <div className="text-center flex flex-col justify-center items-center h-full min-h-[300px] animate-in zoom-in duration-300">
                <div className="text-6xl mb-4">
                    {score === questions.length ? "🏆" : "👏"}
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                    Hoàn thành bài kiểm tra!
                </h4>
                <p className="text-slate-400 mb-6">
                    Bạn trả lời đúng{" "}
                    <strong className="text-fuchsia-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu hỏi Quản lý User.
                </p>
                <button
                    onClick={resetQuiz}
                    className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-600 font-medium"
                >
                    Làm lại bài Quiz
                </button>
            </div>
        );
    }

    const q = questions[currentQ];

    return (
        <div className="flex flex-col h-full max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-6 text-sm font-medium">
                <span className="text-fuchsia-400 bg-fuchsia-500/10 px-3 py-1 rounded-full">
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
                    let btnClass =
                        "w-full text-left p-4 rounded-xl border text-sm transition-all ";

                    if (!showResult) {
                        btnClass +=
                            "border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:border-slate-500";
                    } else {
                        if (idx === q.correct) {
                            btnClass +=
                                "border-green-500 bg-green-500/10 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.1)]";
                        } else if (idx === selected) {
                            btnClass +=
                                "border-rose-500 bg-rose-500/10 text-rose-400";
                        } else {
                            btnClass +=
                                "border-slate-800 bg-slate-800/30 text-slate-600 opacity-50";
                        }
                    }

                    return (
                        <button
                            key={idx}
                            onClick={() => handleSelect(idx)}
                            disabled={showResult}
                            className={btnClass}
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
