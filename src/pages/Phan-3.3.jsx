import React, { useState, useRef, useEffect } from "react";
import {
    Package,
    Box,
    FileText,
    TerminalSquare,
    CheckCircle2,
    AlertTriangle,
    ChevronRight,
    PlayCircle,
    Info,
    ArrowRight,
    Download,
    ShieldCheck,
    Wrench,
    FileArchive,
    Search,
    Settings,
    XOctagon,
    Folder,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-sky-500 selection:text-white pb-20">
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
                            Bài trước: 3.2
                        </span>
                        <div className="text-sm font-medium text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full border border-sky-400/20">
                            Phần 3.3
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                {/* Title Section */}
                <div className="text-center space-y-4 py-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        Cài đặt phần mềm từ file{" "}
                        <span className="text-sky-400 font-mono tracking-tighter">
                            .deb
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Học cách xử lý định dạng gói phần mềm truyền thống của
                        Debian/Ubuntu. Giống như file .exe trên Windows, nhưng
                        mạnh mẽ và cần sự tỉ mỉ hơn.
                    </p>
                </div>

                {/* Section 1: Anatomy of .deb */}
                <section className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                            <span className="bg-sky-500/20 text-sky-400 p-2 rounded-lg">
                                1
                            </span>
                            Bên trong file .deb có gì?
                        </h3>
                    </div>

                    <div className="bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700 grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <p className="text-slate-300 text-lg">
                                File <code>.deb</code> thực chất là một{" "}
                                <strong>tập tin nén</strong> chứa toàn bộ cấu
                                trúc thư mục của ứng dụng, kèm theo các "kịch
                                bản" (script) hướng dẫn hệ thống cách cài đặt.
                            </p>
                            <div className="bg-sky-900/20 border border-sky-500/30 p-4 rounded-xl text-sm text-sky-200 space-y-2">
                                <div className="font-bold flex items-center gap-2">
                                    <CheckCircle2 size={16} /> Khi nào cần cài
                                    từ .deb?
                                </div>
                                <ul className="space-y-1 pl-6 list-disc text-sky-300/80">
                                    <li>
                                        App độc quyền: Google Chrome, Zoom,
                                        TeamViewer...
                                    </li>
                                    <li>
                                        Cần bản mới nhất: VS Code, Discord...
                                    </li>
                                    <li>
                                        Môi trường Offline (Không có mạng
                                        Internet).
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Visual .deb anatomy */}
                        <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl font-mono text-sm shadow-xl">
                            <div className="flex items-center gap-2 text-sky-400 font-bold mb-4 border-b border-slate-700 pb-2">
                                <FileArchive size={20} /> google-chrome.deb
                            </div>
                            <div className="space-y-2 text-slate-400">
                                <div className="flex gap-2 items-center">
                                    <FileText size={16} /> debian-binary{" "}
                                    <span className="text-slate-600 text-xs font-sans italic ml-auto">
                                        Version format (2.0)
                                    </span>
                                </div>
                                <div className="flex gap-2 items-center text-orange-400">
                                    <FileArchive size={16} /> control.tar.gz{" "}
                                    <span className="text-slate-600 text-xs font-sans italic ml-auto text-right">
                                        Metadata & Scripts
                                    </span>
                                </div>
                                <div className="border-l-2 border-slate-700 ml-2 pl-4 space-y-2">
                                    <div className="flex gap-2 items-center">
                                        <FileText size={14} /> control{" "}
                                        <span className="text-slate-600 text-xs font-sans italic">
                                            Tên, version, dependencies
                                        </span>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <TerminalSquare size={14} /> preinst /
                                        postinst{" "}
                                        <span className="text-slate-600 text-xs font-sans italic">
                                            Script lúc cài
                                        </span>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <TerminalSquare size={14} /> prerm /
                                        postrm{" "}
                                        <span className="text-slate-600 text-xs font-sans italic">
                                            Script lúc gỡ
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center text-blue-400 mt-2">
                                    <FileArchive size={16} /> data.tar.gz{" "}
                                    <span className="text-slate-600 text-xs font-sans italic ml-auto">
                                        Code thật sự của App
                                    </span>
                                </div>
                                <div className="border-l-2 border-slate-700 ml-2 pl-4 space-y-2">
                                    <div className="flex gap-2 items-center">
                                        <Folder size={14} /> usr/bin/chrome
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <Folder size={14} /> usr/share/icons/
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: APT vs DPKG */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-blue-500/20 text-blue-400 p-2 rounded-lg">
                            2
                        </span>
                        Hai Trường Phái Cài Đặt (apt vs dpkg)
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* DPKG */}
                        <div className="bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-rose-500/30 relative">
                            <h4 className="text-rose-400 font-mono font-bold text-xl mb-4 border-b border-slate-700 pb-2">
                                sudo dpkg -i file.deb
                            </h4>
                            <div className="text-white font-bold mb-4 uppercase tracking-widest text-xs">
                                Cách cũ (Cần cẩn thận)
                            </div>
                            <ul className="text-sm text-slate-300 space-y-3 mb-6">
                                <li className="flex items-start gap-2">
                                    <AlertTriangle
                                        className="text-yellow-500 shrink-0"
                                        size={18}
                                    />{" "}
                                    <strong>Không tự cài dependencies:</strong>{" "}
                                    Nếu file .deb cần thư viện khác, dpkg sẽ báo
                                    lỗi đỏ lòm và dừng lại!
                                </li>
                                <li className="flex items-start gap-2">
                                    <Wrench
                                        className="text-slate-400 shrink-0"
                                        size={18}
                                    />{" "}
                                    <strong>Phải sửa tay:</strong> Bạn phải gõ
                                    thêm <code>sudo apt install -f</code> để hệ
                                    thống sửa lỗi thiếu thư viện.
                                </li>
                            </ul>
                        </div>

                        {/* APT */}
                        <div className="bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-sky-500/50 relative shadow-[0_0_20px_rgba(14,165,233,0.1)]">
                            <h4 className="text-sky-400 font-mono font-bold text-xl mb-4 border-b border-slate-700 pb-2 flex items-center justify-between">
                                <span>sudo apt install ./file.deb</span>
                                <span className="bg-sky-500 text-white text-[10px] px-2 py-1 rounded-full uppercase tracking-wider font-sans">
                                    Khuyên dùng
                                </span>
                            </h4>
                            <div className="text-white font-bold mb-4 uppercase tracking-widest text-xs">
                                Cách hiện đại (Thông minh)
                            </div>
                            <ul className="text-sm text-slate-300 space-y-3 mb-6">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2
                                        className="text-green-500 shrink-0"
                                        size={18}
                                    />{" "}
                                    <strong>Tự động 100%:</strong> Vừa cài file
                                    .deb, vừa lên mạng tải luôn các thư viện
                                    (dependencies) còn thiếu về cài cùng lúc!
                                </li>
                                <li className="flex items-start gap-2 bg-sky-900/30 p-2 rounded-lg border border-sky-500/30">
                                    <Info
                                        className="text-sky-400 shrink-0"
                                        size={18}
                                    />{" "}
                                    <span className="text-sky-200">
                                        <strong>
                                            Dấu ./ BẮT BUỘC phải có!
                                        </strong>{" "}
                                        Nó nói cho apt biết đây là file tải về
                                        nằm trong máy, không phải tên phần mềm
                                        trên mạng.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 3: Inspecting before installing */}
                <section className="space-y-6 pt-6">
                    <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 p-6 md:p-8 rounded-3xl">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                            <Search size={28} className="text-yellow-400" />{" "}
                            Kiểm tra file trước khi cài (Bảo mật)
                        </h3>
                        <p className="text-slate-300 mb-6">
                            Đừng bao giờ nhắm mắt cài bừa một file tải trên
                            mạng. Hãy dùng các lệnh này để "soi" xem bên trong
                            nó có gì.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-black/50 p-5 rounded-2xl border border-slate-700 font-mono text-sm space-y-3">
                                <div className="text-slate-500 text-xs font-sans font-bold uppercase">
                                    1. Kiểm tra format thật
                                </div>
                                <div className="text-green-400">
                                    ${" "}
                                    <span className="text-white">
                                        file app.deb
                                    </span>
                                </div>
                                <div className="text-slate-400 text-xs">
                                    Phòng trường hợp tải nhầm trang web HTML
                                    thay vì file cài đặt.
                                </div>
                            </div>

                            <div className="bg-black/50 p-5 rounded-2xl border border-slate-700 font-mono text-sm space-y-3">
                                <div className="text-slate-500 text-xs font-sans font-bold uppercase">
                                    2. Xem Metadata
                                </div>
                                <div className="text-green-400">
                                    ${" "}
                                    <span className="text-white">
                                        dpkg --info app.deb
                                    </span>
                                </div>
                                <div className="text-slate-400 text-xs">
                                    Đọc cấu hình: Nó cần Dependencies gì? Kích
                                    thước bung nén là bao nhiêu?
                                </div>
                            </div>

                            <div className="bg-black/50 p-5 rounded-2xl border border-slate-700 font-mono text-sm space-y-3">
                                <div className="text-slate-500 text-xs font-sans font-bold uppercase">
                                    3. Xem danh sách File
                                </div>
                                <div className="text-green-400">
                                    ${" "}
                                    <span className="text-white">
                                        dpkg --contents app.deb
                                    </span>
                                </div>
                                <div className="text-slate-400 text-xs">
                                    Nó sẽ quăng những file nào vào hệ thống của
                                    bạn? Cài vào /opt hay /usr?
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Terminal Simulator */}
                <section className="space-y-6 pt-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                <span className="bg-teal-500/20 text-teal-400 p-2 rounded-lg">
                                    💻
                                </span>
                                Thực hành Cài đặt (Giả lập)
                            </h3>
                            <p className="text-slate-400 mt-2">
                                Bấm các nút bên trái để thấy sự khác biệt rùng
                                rợn khi dùng <code>dpkg</code> mà bị thiếu thư
                                viện, và cách <code>apt</code> giải quyết nó gọn
                                gàng!
                            </p>
                        </div>
                    </div>

                    <DebSimulator />
                </section>

                {/* Section 5: Common Errors */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-rose-500/20 text-rose-500 p-2 rounded-lg">
                            ⚠️
                        </span>
                        Lỗi thường gặp & Cách xử lý
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Error 1 */}
                        <div className="bg-slate-800 p-6 rounded-2xl border border-rose-500/30">
                            <h4 className="font-bold text-rose-400 mb-2 font-mono">
                                dpkg frontend is locked
                            </h4>
                            <p className="text-sm text-slate-300 mb-4">
                                Lỗi này xuất hiện khi bạn đang mở Ubuntu
                                Software Center, hoặc một lệnh cài đặt khác đang
                                chạy ngầm.
                            </p>
                            <div className="bg-black p-3 rounded-lg font-mono text-xs text-slate-400 border border-slate-700">
                                <span className="text-green-400">$</span> sudo
                                killall apt apt-get dpkg
                                <br />
                                <span className="text-green-400">$</span> sudo
                                rm -f /var/lib/dpkg/lock-frontend
                                <br />
                                <span className="text-green-400">$</span> sudo
                                dpkg --configure -a
                            </div>
                        </div>

                        {/* Error 2 */}
                        <div className="bg-slate-800 p-6 rounded-2xl border border-rose-500/30">
                            <h4 className="font-bold text-rose-400 mb-2 font-mono">
                                architecture does not match
                            </h4>
                            <p className="text-sm text-slate-300 mb-4">
                                Bạn tải nhầm file <code>arm64</code> (dành cho
                                Mac M1/Raspberry) nhưng cài lên máy tính
                                Intel/AMD (<code>amd64</code>).
                            </p>
                            <div className="bg-black p-3 rounded-lg font-mono text-xs text-slate-400 border border-slate-700">
                                <span className="text-slate-500">
                                    # Kiểm tra kiến trúc máy bạn:
                                </span>
                                <br />
                                <span className="text-green-400">$</span> dpkg
                                --print-architecture
                                <br />
                                amd64
                                <br />
                                <span className="text-slate-500">
                                    → Xóa file tải nhầm, lên web tải lại bản
                                    amd64!
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 6: Quiz */}
                <section className="space-y-6 pt-8">
                    <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-xl">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-sky-500/20 text-sky-500 p-2 rounded-lg">
                                    4
                                </span>
                                Kiểm tra kiến thức Cài đặt .deb
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
                        Vậy là bạn đã biết 99% các cách cài phần mềm có sẵn.
                        Nhưng nếu phần mềm đó KHÔNG CÓ FILE CÀI SẴN thì sao?
                    </p>
                    <button className="bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-sky-500/20">
                        Bài 3.4 — Cài phần mềm từ Source Code (Mã nguồn){" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

// --- Interactive Simulator Component ---
function DebSimulator() {
    const [history, setHistory] = useState([
        { type: "system", text: "Giả lập cài đặt từ file .deb" },
        { type: "system", text: "Thư mục hiện tại có sẵn file: vscode.deb" },
    ]);
    const [input, setInput] = useState("");
    const [libInstalled, setLibInstalled] = useState(false);
    const endRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const delayOutput = async (lines) => {
        for (let line of lines) {
            setHistory((prev) => [...prev, { type: "output", text: line }]);
            await new Promise((r) => setTimeout(r, 200));
        }
    };

    const executeCommand = async (cmd) => {
        const trimmed = cmd.trim();
        if (!trimmed) return;

        setHistory((prev) => [...prev, { type: "input", text: cmd }]);
        setInput("");

        // Simple command parser
        if (trimmed === "clear") {
            setHistory([]);
            return;
        }

        if (trimmed === "ls") {
            await delayOutput(["vscode.deb"]);
            return;
        }

        if (trimmed.includes("dpkg --info") || trimmed.includes("dpkg -I")) {
            await delayOutput([
                " new Debian package, version 2.0.",
                " Package: code",
                " Version: 1.87.2",
                " Architecture: amd64",
                " Depends: libnss3, libxkbfile1, libsecret-1-0",
                " Description: Visual Studio Code editing. Redefined.",
            ]);
            return;
        }

        if (
            trimmed === "sudo dpkg -i vscode.deb" ||
            trimmed === "dpkg -i vscode.deb"
        ) {
            if (libInstalled) {
                await delayOutput([
                    "(Reading database ... 245678 files and directories installed.)",
                    "Preparing to unpack vscode.deb ...",
                    "Unpacking code (1.87.2) ...",
                    "Setting up code (1.87.2) ...",
                    "Processing triggers for desktop-file-utils ...",
                ]);
            } else {
                await delayOutput([
                    "Selecting previously unselected package code.",
                    "Preparing to unpack vscode.deb ...",
                    "Unpacking code (1.87.2) ...",
                    "dpkg: dependency problems prevent configuration of code:",
                    " code depends on libnss3; however:",
                    "  Package libnss3 is not installed.",
                    "dpkg: error processing package code (--install):",
                    " dependency problems - leaving unconfigured",
                ]);
            }
            return;
        }

        if (trimmed === "sudo apt install -f" || trimmed === "apt install -f") {
            if (libInstalled) {
                await delayOutput([
                    "0 upgraded, 0 newly installed, 0 to remove.",
                ]);
            } else {
                await delayOutput([
                    "Reading package lists... Done",
                    "Building dependency tree... Done",
                    "Correcting dependencies... Done",
                    "The following additional packages will be installed:",
                    "  libnss3 libxkbfile1 libsecret-1-0",
                    "Unpacking libnss3 ...",
                    "Setting up libnss3 ...",
                    "Setting up code (1.87.2) ...", // Finishes the broken dpkg setup
                    "Done.",
                ]);
                setLibInstalled(true);
            }
            return;
        }

        if (
            trimmed === "sudo apt install ./vscode.deb" ||
            trimmed === "apt install ./vscode.deb"
        ) {
            await delayOutput(
                [
                    "Reading package lists... Done",
                    "Building dependency tree... Done",
                    "Note, selecting 'code' instead of './vscode.deb'",
                    !libInstalled
                        ? "The following additional packages will be installed:"
                        : "",
                    !libInstalled ? "  libnss3 libxkbfile1 libsecret-1-0" : "",
                    "The following NEW packages will be installed:",
                    !libInstalled
                        ? "  code libnss3 libxkbfile1 libsecret-1-0"
                        : "  code",
                    "Need to get 15 MB of archives.",
                    "Get:1 /home/alice/vscode.deb code amd64 1.87.2",
                    "Unpacking code (1.87.2) ...",
                    "Setting up code (1.87.2) ...",
                    "Done.",
                ].filter(Boolean),
            );
            setLibInstalled(true);
            return;
        }

        // Common mistake
        if (
            trimmed === "sudo apt install vscode.deb" ||
            trimmed === "apt install vscode.deb"
        ) {
            await delayOutput([
                "E: Unable to locate package vscode.deb",
                "E: Couldn't find any package by glob 'vscode.deb'",
                "(Gợi ý: Bạn có quên dấu ./ ở đầu tên file không?)",
            ]);
            return;
        }

        await delayOutput([
            `bash: ${trimmed.split(" ")[0]}: command not found`,
        ]);
    };

    return (
        <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1 bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex flex-col gap-3 h-[400px] overflow-y-auto custom-scrollbar">
                <div className="text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">
                    Cách cũ (Cần xử lý lỗi)
                </div>
                <button
                    onClick={() => executeCommand("dpkg --info vscode.deb")}
                    className="w-full text-left bg-slate-900 hover:bg-slate-700 border border-slate-700 p-3 rounded-xl transition-colors font-mono text-xs text-slate-300 flex items-center justify-between"
                >
                    <span>dpkg --info vscode.deb</span>{" "}
                    <ChevronRight size={14} />
                </button>
                <button
                    onClick={() => executeCommand("sudo dpkg -i vscode.deb")}
                    className="w-full text-left bg-slate-900 hover:bg-slate-700 border border-slate-700 p-3 rounded-xl transition-colors font-mono text-xs text-rose-400 flex items-center justify-between"
                >
                    <span>sudo dpkg -i vscode.deb</span>{" "}
                    <ChevronRight size={14} />
                </button>
                <button
                    onClick={() => executeCommand("sudo apt install -f")}
                    className="w-full text-left bg-slate-900 hover:bg-slate-700 border border-slate-700 p-3 rounded-xl transition-colors font-mono text-xs text-yellow-400 flex items-center justify-between mb-4"
                >
                    <span>sudo apt install -f</span> <ChevronRight size={14} />
                </button>

                <div className="text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">
                    Cách mới (Khuyên dùng)
                </div>
                <button
                    onClick={() =>
                        executeCommand("sudo apt install vscode.deb")
                    }
                    className="w-full text-left bg-slate-900 hover:bg-slate-700 border border-slate-700 p-3 rounded-xl transition-colors font-mono text-xs text-slate-500 flex items-center justify-between line-through decoration-rose-500"
                >
                    <span>sudo apt install vscode.deb</span>{" "}
                    <ChevronRight size={14} />
                </button>
                <button
                    onClick={() =>
                        executeCommand("sudo apt install ./vscode.deb")
                    }
                    className="w-full text-left bg-slate-900 hover:bg-slate-700 border border-slate-700 p-3 rounded-xl transition-colors font-mono text-xs text-sky-400 flex items-center justify-between"
                >
                    <span>sudo apt install ./vscode.deb</span>{" "}
                    <ChevronRight size={14} />
                </button>
                <button
                    onClick={() => executeCommand("clear")}
                    className="w-full text-center bg-slate-800 border border-slate-700 p-2 rounded-xl transition-colors font-mono text-xs text-slate-500 mt-auto"
                >
                    clear
                </button>
            </div>

            <div
                className="md:col-span-2 bg-[#2c001e] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden font-mono text-[14px] cursor-text flex flex-col h-[400px]"
                onClick={() => inputRef.current?.focus()}
            >
                <div className="bg-[#423b3e] px-4 py-2 flex items-center justify-between border-b border-black/50 select-none">
                    <div className="text-slate-300 text-xs font-sans font-bold">
                        Terminal
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
                                        line.text.includes("error") ||
                                        line.text.includes("E:")
                                            ? "text-rose-400 font-bold"
                                            : ""
                                    }
                                >
                                    {line.text}
                                </span>
                            )}
                            {line.type === "input" && (
                                <div>
                                    <span className="text-[#8ae234] font-bold">
                                        alice@ubuntu
                                    </span>
                                    :
                                    <span className="text-[#729fcf] font-bold">
                                        ~/cai_deb
                                    </span>
                                    $ {line.text}
                                </div>
                            )}
                        </div>
                    ))}

                    <div className="flex items-center">
                        <span className="text-[#8ae234] font-bold shrink-0">
                            alice@ubuntu
                        </span>
                        :
                        <span className="text-[#729fcf] font-bold shrink-0">
                            ~/cai_deb
                        </span>
                        <span className="text-white shrink-0 mr-2">$</span>
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
            "Tại sao lệnh `sudo apt install google-chrome.deb` lại BÁO LỖI không tìm thấy package, dù file nằm ngay trong thư mục hiện tại?",
        options: [
            "Vì Google Chrome không hỗ trợ Ubuntu.",
            "Vì thiếu dấu ./ ở đầu tên file. APT lầm tưởng bạn đang yêu cầu nó lên mạng tìm một phần mềm có tên là 'google-chrome.deb' thay vì cài file trong máy.",
            "Vì bạn chưa chạy apt update.",
            "Vì phải giải nén file .deb trước.",
        ],
        correct: 1,
        explanation:
            "Đúng! Cú pháp chuẩn phải là `sudo apt install ./google-chrome.deb`. Dấu chấm-gạch-chéo chỉ định rõ đây là một file cục bộ (local file) ở thư mục hiện tại.",
    },
    {
        id: 2,
        question:
            "Lệnh `sudo dpkg -i file.deb` KHÔNG LÀM điều gì so với lệnh `apt install`?",
        options: [
            "Không bung nén file.",
            "Không kiểm tra phiên bản.",
            "Không tự động lên mạng tải và cài đặt các thư viện phụ thuộc (dependencies) còn thiếu.",
            "Không cần quyền sudo.",
        ],
        correct: 2,
        explanation:
            "dpkg là công cụ tầng thấp (low-level). Nó chỉ nhắm mắt nhắm mũi bung file .deb ra. Nếu thiếu thư viện, nó sẽ báo lỗi và dừng lại. Lệnh apt thông minh hơn, nó dùng dpkg ở bên dưới nhưng biết cách lên mạng tải thư viện thiếu về bù vào.",
    },
    {
        id: 3,
        question:
            "Tình huống: Bạn dùng `dpkg -i` và bị văng ra lỗi 'dependency problems - leaving unconfigured'. Lệnh nào sau đây như một 'thần chú' để APT tự động dọn dẹp và sửa cái đống bừa bộn đó?",
        options: [
            "sudo apt update",
            "sudo apt remove",
            "sudo dpkg --fix",
            "sudo apt install -f",
        ],
        correct: 3,
        explanation:
            "Lệnh `apt install -f` (-f viết tắt của --fix-broken) sẽ quét các package đang cài đặt dở dang bị thiếu dependencies, sau đó tự động tải và cài nốt các dependencies đó để hoàn tất quá trình.",
    },
    {
        id: 4,
        question:
            "Trong cấu trúc giải phẫu của một file .deb, kịch bản (script) nào sẽ tự động được kích hoạt CHẠY SAU KHI ứng dụng được bung nén thành công vào hệ thống?",
        options: ["control", "preinst", "postinst", "postrm"],
        correct: 2,
        explanation:
            "postinst (Post-Install) là script chạy ngay sau khi cài xong. Thông thường nhà phát triển dùng nó để tạo biểu tượng (icon) trên menu, cấu hình ban đầu, hoặc restart dịch vụ.",
    },
    {
        id: 5,
        question:
            "Để kiểm tra xem file .deb bạn vừa tải về có thực sự là định dạng Debian chuẩn không (hay tải nhầm file mã nguồn HTML 404), bạn dùng lệnh nào?",
        options: [
            "cat file.deb",
            "file file.deb",
            "grep file.deb",
            "less file.deb",
        ],
        correct: 1,
        explanation:
            "Lệnh `file` sẽ đọc phần header (magic bytes) của tệp tin để đoán định dạng thực sự của nó, bất kể đuôi mở rộng có bị đặt tên giả mạo hay không.",
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
                    <strong className="text-sky-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu hỏi Cài đặt .deb.
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
                <span className="text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full">
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
                                "border-sky-500 bg-sky-500/10 text-sky-400 shadow-[0_0_15px_rgba(14,165,233,0.1)]";
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
                        className={`p-4 rounded-xl text-sm mb-6 flex gap-3 ${selected === q.correct ? "bg-sky-500/10 border border-sky-500/20 text-sky-300" : "bg-rose-500/10 border border-rose-500/20 text-rose-300"}`}
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
