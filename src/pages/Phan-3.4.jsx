import React, { useState, useRef, useEffect } from "react";
import {
    Wrench,
    FileCode2,
    TerminalSquare,
    Layers,
    FolderCog,
    CheckCircle2,
    AlertTriangle,
    ChevronRight,
    PlayCircle,
    Info,
    ArrowRight,
    Download,
    PackageOpen,
    ShieldCheck,
    Box,
    RefreshCcw,
    Command,
    Star,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-amber-500 selection:text-slate-900 pb-20">
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
                            Bài trước: 3.3
                        </span>
                        <div className="text-sm font-medium text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                            Phần 3.4
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                {/* Title Section */}
                <div className="text-center space-y-4 py-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        Cài đặt phần mềm từ{" "}
                        <span className="text-amber-400 font-mono tracking-tighter">
                            Source Code
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Học cách "tự nấu ăn". Biến những dòng code phức tạp
                        thành phần mềm chạy được trên máy tính của bạn. Khó nhất
                        nhưng linh hoạt nhất!
                    </p>
                </div>

                {/* Section 1: Intro */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                        <span className="bg-amber-500/20 text-amber-400 p-2 rounded-lg">
                            1
                        </span>
                        Build from Source là gì?
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                            <p className="text-slate-300 text-lg mb-6">
                                Thay vì tải file chạy sẵn (<code>.deb</code>,{" "}
                                <code>.exe</code>), bạn sẽ tải{" "}
                                <strong>Mã Nguồn</strong> (Source Code) — những
                                dòng chữ do lập trình viên viết ra. Sau đó, dùng
                                các công cụ để <strong>Biên Dịch</strong>{" "}
                                (Build/Compile) mã nguồn đó thành phần mềm.
                            </p>

                            <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl space-y-4">
                                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                                    <div className="font-bold text-sky-400">
                                        APT / Snap
                                    </div>
                                    <ArrowRight className="text-slate-600" />
                                    <div className="text-slate-400 text-sm">
                                        Mua hộp cơm ở siêu thị. (Nhanh, tiện)
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="font-bold text-amber-400">
                                        Build Source
                                    </div>
                                    <ArrowRight className="text-slate-600" />
                                    <div className="text-slate-400 text-sm">
                                        Mua rau cá về tự xào nấu. (Tùy chỉnh
                                        cao)
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-amber-900/20 to-slate-900 border border-amber-500/30 p-6 md:p-8 rounded-3xl">
                            <h4 className="text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
                                <CheckCircle2 size={24} /> Khi nào cần dùng?
                            </h4>
                            <ul className="space-y-3 text-sm text-slate-300">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2
                                        className="text-green-500 shrink-0"
                                        size={18}
                                    />{" "}
                                    <strong>Không có sẵn:</strong> Ứng dụng
                                    không có trên kho APT, Snap hay Flatpak.
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2
                                        className="text-green-500 shrink-0"
                                        size={18}
                                    />{" "}
                                    <strong>Mới nhất:</strong> Cần tính năng vừa
                                    mới code xong hôm qua trên GitHub.
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2
                                        className="text-green-500 shrink-0"
                                        size={18}
                                    />{" "}
                                    <strong>Độ chế:</strong> Bạn muốn bật/tắt
                                    các tính năng riêng biệt (VD: Bật thêm
                                    module chặn quảng cáo cho Web Server).
                                </li>
                                <li className="flex items-start gap-2">
                                    <AlertTriangle
                                        className="text-yellow-500 shrink-0"
                                        size={18}
                                    />{" "}
                                    <strong>Nhược điểm:</strong> Rất dễ gặp lỗi
                                    nếu thiếu kinh nghiệm. Tốn thời gian chờ máy
                                    "build".
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 2: Flow & Tools */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-blue-500/20 text-blue-400 p-2 rounded-lg">
                            2
                        </span>
                        Công cụ và Quy trình cốt lõi
                    </h3>

                    <div className="bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700 mb-8">
                        <div className="flex items-center gap-2 text-rose-400 font-bold mb-4 border-b border-slate-700 pb-2">
                            <Wrench size={20} /> Cần phải cài Công Cụ Xây Dựng
                            trước!
                        </div>
                        <code className="block bg-black p-4 rounded-xl text-green-400 font-mono text-sm shadow-inner border border-slate-800">
                            ${" "}
                            <span className="text-white">
                                sudo apt install build-essential cmake
                                checkinstall git
                            </span>
                        </code>
                        <div className="text-sm text-slate-400 mt-3 flex items-start gap-2">
                            <Info
                                size={16}
                                className="shrink-0 mt-0.5 text-blue-400"
                            />
                            <span>
                                <code>build-essential</code> bao gồm{" "}
                                <strong>gcc, g++, make</strong> — những trình
                                biên dịch ngôn ngữ C/C++ quan trọng nhất của
                                Linux. Còn <code>checkinstall</code> là "chìa
                                khóa vàng" giúp bạn quản lý phần mềm sau khi
                                cài.
                            </span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 relative">
                        <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-slate-800 -z-10 -translate-y-1/2"></div>

                        <div className="bg-slate-900 border border-slate-700 p-5 rounded-2xl text-center shadow-xl relative z-10 hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-blue-500/20 text-blue-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                                1
                            </div>
                            <h4 className="font-bold text-white mb-2">
                                Tải Code
                            </h4>
                            <div className="font-mono text-xs text-slate-400 bg-black p-2 rounded">
                                git clone ...
                            </div>
                        </div>

                        <div className="bg-slate-900 border border-slate-700 p-5 rounded-2xl text-center shadow-xl relative z-10 hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-amber-500/20 text-amber-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                                2
                            </div>
                            <h4 className="font-bold text-white mb-2">
                                Cấu hình
                            </h4>
                            <div className="font-mono text-xs text-slate-400 bg-black p-2 rounded">
                                ./configure
                            </div>
                        </div>

                        <div className="bg-slate-900 border border-slate-700 p-5 rounded-2xl text-center shadow-xl relative z-10 hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-rose-500/20 text-rose-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                                3
                            </div>
                            <h4 className="font-bold text-white mb-2">
                                Biên dịch
                            </h4>
                            <div className="font-mono text-xs text-slate-400 bg-black p-2 rounded">
                                make
                            </div>
                        </div>

                        <div className="bg-slate-900 border border-slate-700 p-5 rounded-2xl text-center shadow-xl relative z-10 hover:-translate-y-2 transition-transform duration-300 border-green-500/30">
                            <div className="bg-green-500/20 text-green-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                                4
                            </div>
                            <h4 className="font-bold text-white mb-2">
                                Cài đặt
                            </h4>
                            <div className="font-mono text-xs text-green-400 bg-black p-2 rounded">
                                sudo make install
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: The Holy Trinity of Commands */}
                <section className="space-y-6 pt-6">
                    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 p-6 md:p-8 rounded-3xl">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-8">
                            <Command size={28} className="text-amber-400" /> Câu
                            thần chú: ./configure, make, make install
                        </h3>

                        <div className="space-y-6">
                            {/* Configure */}
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="bg-black border border-slate-700 font-mono text-amber-400 font-bold px-4 py-2 rounded-lg text-lg min-w-[200px] text-center shadow-lg">
                                    ./configure
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-white text-lg mb-1">
                                        Kiểm tra nguyên liệu
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        Đoạn script này sẽ chạy một vòng để kiểm
                                        tra xem máy tính của bạn đã có đủ các
                                        thư viện cần thiết chưa. Nếu thiếu, nó
                                        sẽ báo lỗi (Thường gặp nhất!). Nếu đủ,
                                        nó sẽ tạo ra file <code>Makefile</code>{" "}
                                        - một bản thiết kế để xây dựng app.
                                    </p>
                                </div>
                            </div>

                            {/* Make */}
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="bg-black border border-slate-700 font-mono text-rose-400 font-bold px-4 py-2 rounded-lg text-lg min-w-[200px] text-center shadow-lg relative">
                                    make -j$(nproc)
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-white text-lg mb-1">
                                        Nấu ăn (Biên dịch)
                                    </h4>
                                    <p className="text-slate-400 text-sm mb-2">
                                        Công cụ <code>make</code> đọc bản thiết
                                        kế và bắt đầu dịch hàng ngàn file chữ
                                        thành file nhị phân (mã máy). Quá trình
                                        này có thể tốn từ 1 phút đến vài giờ tùy
                                        app.
                                    </p>
                                    <div className="bg-slate-950 p-2 rounded text-xs text-sky-300 font-mono inline-block border border-slate-800">
                                        <strong>Mẹo:</strong> Thêm{" "}
                                        <code>-j$(nproc)</code> để huy động TOÀN
                                        BỘ số nhân CPU của máy tính, giúp build
                                        nhanh gấp nhiều lần!
                                    </div>
                                </div>
                            </div>

                            {/* Make Install */}
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="bg-black border border-slate-700 font-mono text-green-400 font-bold px-4 py-2 rounded-lg text-lg min-w-[200px] text-center shadow-lg">
                                    sudo make install
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-white text-lg mb-1">
                                        Dọn ra đĩa (Cài đặt)
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        Sau khi biên dịch xong, các file chạy
                                        được tạo ra vẫn nằm trong thư mục tải
                                        về. Lệnh này sẽ copy (copy) các file đó
                                        vào sâu trong hệ thống (thường là{" "}
                                        <code>/usr/local/bin/</code>) để bạn có
                                        thể gõ lệnh gọi app từ bất cứ đâu.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 bg-amber-900/20 border border-amber-500/30 p-5 rounded-2xl">
                            <h4 className="font-bold text-amber-400 flex items-center gap-2 mb-2">
                                <Star size={20} /> Bí kíp của Pro SysAdmin:
                                checkinstall
                            </h4>
                            <p className="text-sm text-slate-300 mb-4">
                                Lệnh <code>sudo make install</code> có một điểm
                                yếu chết người: RẤT KHÓ ĐỂ GỠ CÀI ĐẶT SAU NÀY vì
                                APT không biết app này tồn tại. Hãy thay thế nó
                                bằng <code>checkinstall</code>!
                            </p>
                            <div className="bg-black p-3 rounded font-mono text-sm text-green-400 border border-slate-800 flex flex-col md:flex-row items-center gap-4">
                                <span className="line-through decoration-rose-500 text-slate-500">
                                    sudo make install
                                </span>
                                <ArrowRight className="text-slate-600 hidden md:block" />
                                <span className="text-white font-bold bg-green-900/30 px-3 py-1 rounded border border-green-500/50">
                                    sudo checkinstall
                                </span>
                            </div>
                            <p className="text-xs text-slate-400 mt-3">
                                Lệnh này sẽ biến app vừa build thành file{" "}
                                <code>.deb</code>, rồi mới cài vào máy. Sau này
                                bạn chỉ cần{" "}
                                <code>sudo apt remove [tên app]</code> là xong!
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 4: Simulator */}
                <section className="space-y-6 pt-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                <span className="bg-teal-500/20 text-teal-400 p-2 rounded-lg">
                                    💻
                                </span>
                                Thực hành Build Code (Giả lập)
                            </h3>
                            <p className="text-slate-400 mt-2">
                                Bấm các nút theo thứ tự từ trên xuống để giả lập
                                quá trình biên dịch phần mềm <code>htop</code>{" "}
                                từ mã nguồn.
                            </p>
                        </div>
                    </div>

                    <BuildSimulator />
                </section>

                {/* Section 5: Common Errors */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-rose-500/20 text-rose-500 p-2 rounded-lg">
                            ⚠️
                        </span>
                        Cẩm nang Bắt Lỗi (Troubleshooting)
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                            <h4 className="font-bold text-rose-400 mb-2 font-mono text-sm">
                                configure: error: OpenSSL library not found!
                            </h4>
                            <p className="text-sm text-slate-300 mb-4">
                                90% lỗi khi build từ source là do thiếu thư viện
                                phát triển (Development Library). Tên các gói
                                này thường có đuôi <code>-dev</code>.
                            </p>
                            <div className="bg-black p-3 rounded-lg font-mono text-xs text-slate-400 border border-slate-700">
                                <span className="text-slate-500">
                                    # Khắc phục (Tìm và cài gói dev):
                                </span>
                                <br />
                                <span className="text-green-400">$</span> apt
                                search openssl | grep dev
                                <br />
                                <span className="text-green-400">$</span> sudo
                                apt install libssl-dev
                            </div>
                        </div>

                        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                            <h4 className="font-bold text-rose-400 mb-2 font-mono text-sm">
                                cannot create regular file: Permission denied
                            </h4>
                            <p className="text-sm text-slate-300 mb-4">
                                Xảy ra ở bước cuối cùng khi đang cố gắng copy
                                các file thực thi vào trong các thư mục hệ thống
                                bảo mật cao như <code>/usr/local/bin/</code>.
                            </p>
                            <div className="bg-black p-3 rounded-lg font-mono text-xs text-slate-400 border border-slate-700">
                                <span className="text-slate-500">
                                    # Thiếu quyền Root! Chạy lại lệnh với Sudo:
                                </span>
                                <br />
                                <span className="text-green-400">$</span>{" "}
                                <span className="font-bold text-white">
                                    sudo
                                </span>{" "}
                                make install
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 6: Quiz */}
                <section className="space-y-6 pt-8">
                    <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-xl">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-amber-500/20 text-amber-500 p-2 rounded-lg">
                                    4
                                </span>
                                Kiểm tra kiến thức Build Source
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
                        Cài đặt thủ công tốn thời gian quá nhỉ? May mắn thay,
                        Ubuntu có PPA - công cụ giúp bạn lấy app mới nhất một
                        cách tự động!
                    </p>
                    <button className="bg-amber-600 hover:bg-amber-500 text-slate-900 font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-amber-500/20">
                        Bài 3.5 — Quản lý PPA (Personal Package Archive){" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

// --- Interactive Simulator Component ---
function BuildSimulator() {
    const [history, setHistory] = useState([
        {
            type: "system",
            text: "Build Simulator v1.0. Giả lập quá trình biên dịch phần mềm HTOP.",
        },
        {
            type: "system",
            text: "Nhấn lần lượt các nút bên trái để xem kết quả.",
        },
    ]);
    const [step, setStep] = useState(0); // 0: start, 1: dl, 2: config, 3: make, 4: install
    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const delayOutput = async (lines) => {
        for (let line of lines) {
            setHistory((prev) => [...prev, { type: "output", text: line }]);
            await new Promise((r) => setTimeout(r, 150));
        }
    };

    const executeCommand = async (cmdId) => {
        if (cmdId === "git") {
            setHistory((prev) => [
                ...prev,
                {
                    type: "input",
                    text: "git clone https://github.com/htop-dev/htop.git",
                },
            ]);
            await delayOutput([
                "Cloning into 'htop'...",
                "remote: Enumerating objects: 15432, done.",
                "remote: Counting objects: 100% (432/432), done.",
                "remote: Compressing objects: 100% (210/210), done.",
                "Receiving objects: 100% (15432/15432), 5.4 MiB | 10.2 MiB/s, done.",
                "Resolving deltas: 100% (10234/10234), done.",
            ]);
            setHistory((prev) => [...prev, { type: "input", text: "cd htop" }]);
            setStep(1);
        } else if (cmdId === "config") {
            if (step < 1) {
                setHistory((prev) => [
                    ...prev,
                    {
                        type: "output",
                        text: "bash: ./configure: No such file or directory (Phải tải source code về trước!)",
                    },
                ]);
                return;
            }
            setHistory((prev) => [
                ...prev,
                { type: "input", text: "./autogen.sh && ./configure" },
            ]);
            await delayOutput([
                "checking for a BSD-compatible install... /usr/bin/install -c",
                "checking whether build environment is sane... yes",
                "checking for gcc... gcc",
                "checking whether the C compiler works... yes",
                "checking for C compiler default output file name... a.out",
                "checking for libncursesw... yes",
                "config.status: creating Makefile",
                "config.status: creating config.h",
            ]);
            setStep(2);
        } else if (cmdId === "make") {
            if (step < 2) {
                setHistory((prev) => [
                    ...prev,
                    {
                        type: "output",
                        text: "make: *** No targets specified and no makefile found.  Stop. (Phải chạy ./configure trước!)",
                    },
                ]);
                return;
            }
            setHistory((prev) => [
                ...prev,
                { type: "input", text: "make -j4" },
            ]);
            await delayOutput([
                "gcc -DHAVE_CONFIG_H -I. -I./include -g -O2 -c htop.c",
                "gcc -DHAVE_CONFIG_H -I. -I./include -g -O2 -c Process.c",
                "gcc -DHAVE_CONFIG_H -I. -I./include -g -O2 -c ProcessList.c",
                "gcc -DHAVE_CONFIG_H -I. -I./include -g -O2 -c linux/LinuxProcess.c",
                "gcc -o htop htop.o Process.o ProcessList.o linux/LinuxProcess.o -lncursesw -lm",
                "make: Leaving directory '/home/alice/htop'",
            ]);
            setStep(3);
        } else if (cmdId === "install") {
            if (step < 3) {
                setHistory((prev) => [
                    ...prev,
                    {
                        type: "output",
                        text: "bash: checkinstall: command not found (Phải biên dịch thành công trước!)",
                    },
                ]);
                return;
            }
            setHistory((prev) => [
                ...prev,
                { type: "input", text: "sudo checkinstall" },
            ]);
            await delayOutput([
                "========== Package creation selected ==========",
                "This package will be built according to these values:",
                "1 -  Summary: [ htop - process viewer ]",
                "2 -  Name: [ htop ]",
                "3 -  Version: [ 3.3.0 ]",
                "Enter a number to change any of them or press ENTER to continue:",
                "...",
                "Building Debian package... OK",
                "Installing Debian package... OK",
                "**********************************************************************",
                " Done. The new package has been installed and saved to",
                " /home/alice/htop/htop_3.3.0-1_amd64.deb",
                "**********************************************************************",
            ]);
            setStep(4);
        } else if (cmdId === "clear") {
            setHistory([]);
            setStep(0);
        }
    };

    return (
        <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1 bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex flex-col gap-3 h-[400px] overflow-y-auto custom-scrollbar">
                <div className="text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">
                    Quy trình (Click tuần tự)
                </div>

                <button
                    onClick={() => executeCommand("git")}
                    className={`w-full text-left bg-slate-900 border ${step >= 0 ? "border-sky-500/50 hover:bg-slate-700 text-sky-400" : "border-slate-700 text-slate-600"} p-3 rounded-xl transition-colors font-mono text-xs flex items-center justify-between`}
                >
                    <span>1. Tải Source</span> <ChevronRight size={14} />
                </button>
                <button
                    onClick={() => executeCommand("config")}
                    className={`w-full text-left bg-slate-900 border ${step >= 1 ? "border-amber-500/50 hover:bg-slate-700 text-amber-400" : "border-slate-700 text-slate-600"} p-3 rounded-xl transition-colors font-mono text-xs flex items-center justify-between`}
                >
                    <span>2. ./configure</span> <ChevronRight size={14} />
                </button>
                <button
                    onClick={() => executeCommand("make")}
                    className={`w-full text-left bg-slate-900 border ${step >= 2 ? "border-rose-500/50 hover:bg-slate-700 text-rose-400" : "border-slate-700 text-slate-600"} p-3 rounded-xl transition-colors font-mono text-xs flex items-center justify-between`}
                >
                    <span>3. make -j4</span> <ChevronRight size={14} />
                </button>
                <button
                    onClick={() => executeCommand("install")}
                    className={`w-full text-left bg-slate-900 border ${step >= 3 ? "border-green-500/50 hover:bg-slate-700 text-green-400" : "border-slate-700 text-slate-600"} p-3 rounded-xl transition-colors font-mono text-xs flex items-center justify-between mb-4`}
                >
                    <span>4. checkinstall</span> <ChevronRight size={14} />
                </button>

                <button
                    onClick={() => executeCommand("clear")}
                    className="w-full text-center bg-slate-800 border border-slate-700 p-2 rounded-xl transition-colors font-mono text-xs text-slate-500 mt-auto hover:bg-slate-700"
                >
                    Reset (Xóa màn hình)
                </button>
            </div>

            <div className="md:col-span-2 bg-[#2c001e] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden font-mono text-[14px] flex flex-col h-[400px]">
                <div className="bg-[#423b3e] px-4 py-2 flex items-center justify-between border-b border-black/50 select-none">
                    <div className="text-slate-300 text-xs font-sans font-bold">
                        Terminal - Build htop
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
                                        line.text.includes("error")
                                            ? "text-rose-400 font-bold"
                                            : "text-slate-300"
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
                                        ~{step >= 1 ? "/htop" : ""}
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
                            ~{step >= 1 ? "/htop" : ""}
                        </span>
                        <span className="text-white shrink-0 mr-2">$</span>
                        <span className="w-2 h-4 bg-slate-300 animate-pulse block"></span>
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
            "Tại sao lệnh `make -j$(nproc)` lại giúp quá trình build code diễn ra nhanh hơn rất nhiều so với lệnh `make` bình thường?",
        options: [
            "Vì nó tự động tải thêm RAM ảo từ Internet.",
            "Vì nó bỏ qua việc kiểm tra lỗi code.",
            "Cờ -j yêu cầu Make chia nhỏ công việc và sử dụng TẤT CẢ các nhân (Cores) của CPU để biên dịch song song cùng lúc.",
            "Vì nó nén file nhỏ lại.",
        ],
        correct: 2,
        explanation:
            "Đây là một Mẹo Vàng! Lệnh `nproc` đếm số nhân CPU của bạn. Nếu máy bạn có 8 nhân, lệnh sẽ trở thành `make -j8`, giúp chia nhỏ khối lượng công việc, build nhanh gấp nhiều lần.",
    },
    {
        id: 2,
        question:
            "Bước ĐẦU TIÊN và quan trọng nhất khi tiến hành build một phần mềm từ Source code là gì?",
        options: [
            "Chạy ngay lệnh sudo make install",
            "Mở thư mục lên và bấm đúp chuột vào các file code",
            "Đọc các file README.md hoặc INSTALL có sẵn trong thư mục mã nguồn để biết cần phải chuẩn bị gì.",
            "Chạy lệnh apt remove",
        ],
        correct: 2,
        explanation:
            "Đừng bao giờ nhắm mắt chạy lệnh. 99% các project đều có file README hướng dẫn chính xác máy bạn cần phải cài những Thư viện phụ thuộc (Dependencies) nào trước khi tiến hành compile.",
    },
    {
        id: 3,
        question:
            "Mục đích của lệnh `./configure` trong quy trình Cổ điển (Autotools) là gì?",
        options: [
            "Để tải mã nguồn từ Github về.",
            "Để kiểm tra xem môi trường máy tính của bạn đã cài ĐỦ các thư viện cần thiết chưa, nếu đủ nó sẽ tạo ra file thiết kế (Makefile).",
            "Để xóa các file rác sau khi build.",
            "Để cập nhật hệ điều hành.",
        ],
        correct: 1,
        explanation:
            "Đây là chốt chặn kiểm tra. Hầu hết các lỗi Build từ source đều 'chết' ở bước này với thông báo: 'configure: error: library X not found'. Khi đó bạn phải chạy apt install gói thư viện X-dev vào.",
    },
    {
        id: 4,
        question:
            "Lý do các chuyên gia SysAdmin KHUYÊN DÙNG lệnh `sudo checkinstall` thay cho `sudo make install` là gì?",
        options: [
            "Vì nó có giao diện đồ họa 3D đẹp mắt.",
            "Vì nó biến thành phẩm thành một gói phần mềm (.deb) rồi đăng ký với hệ thống quản lý gói APT, giúp bạn DỄ DÀNG GỠ CÀI ĐẶT sau này bằng lệnh 'apt remove'.",
            "Vì lệnh make install đã bị loại bỏ khỏi hệ điều hành Linux.",
            "Vì nó không yêu cầu quyền Sudo.",
        ],
        correct: 1,
        explanation:
            "Nếu dùng make install, ứng dụng sẽ quăng rải rác các file thực thi vào hệ thống mà APT không hề biết. Khi muốn gỡ, bạn sẽ phải lần mò đi xóa tay từng file rất vất vả.",
    },
    {
        id: 5,
        question:
            "Khi bạn build phần mềm từ mã nguồn, mặc định các file thực thi (app) sẽ được đẩy vào thư mục nào của hệ thống?",
        options: [
            "/home/Downloads/",
            "/etc/bin/",
            "/usr/bin/ (Khu vực của APT)",
            "/usr/local/bin/ (Khu vực Local - Thủ công)",
        ],
        correct: 3,
        explanation:
            "Linux tách biệt rất rõ ràng: /usr/bin là sân chơi của Hệ thống quản lý gói tự động (APT). Còn những gì bạn cài 'bằng tay' từ Source sẽ được xếp vào /usr/local/bin để tránh gây nhầm lẫn và xung đột.",
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
                    <strong className="text-amber-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu hỏi Cài đặt Mã nguồn.
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
                    let btnClass =
                        "w-full text-left p-4 rounded-xl border text-sm transition-all ";

                    if (!showResult) {
                        btnClass +=
                            "border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:border-slate-500";
                    } else {
                        if (idx === q.correct) {
                            btnClass +=
                                "border-green-500 bg-green-500/10 text-green-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]";
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
