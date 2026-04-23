import React, { useState, useRef, useEffect } from "react";
import {
    Terminal,
    TerminalSquare,
    Keyboard,
    Command,
    Clock,
    Search,
    ArrowRight,
    CheckCircle2,
    AlertTriangle,
    Monitor,
    ChevronRight,
    PlayCircle,
    Folder,
    File,
    CornerDownRight,
    Info,
    Map,
    Shield,
    Hash,
    List,
    FolderTree,
    Navigation,
    Compass,
    Star,
    HardDrive,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-blue-500 selection:text-white pb-20">
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
                            Bài trước: 2.1
                        </span>
                        <div className="text-sm font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
                            Phần 2.2
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                {/* Title Section */}
                <div className="text-center space-y-4 py-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        Điều hướng{" "}
                        <span className="text-blue-400 font-mono tracking-tighter">
                            File & Thư mục
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Học cách di chuyển thoăn thoắt khắp hệ thống Linux chỉ
                        bằng bàn phím. Bộ tứ quyền lực: <code>pwd</code>,{" "}
                        <code>ls</code>, <code>cd</code>, <code>tree</code>.
                    </p>
                </div>

                {/* Section 1: The Core Four */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                        <span className="bg-blue-500/20 text-blue-400 p-2 rounded-lg">
                            1
                        </span>
                        Bốn lệnh cốt lõi (Bộ tứ quyền lực)
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <CommandCard
                            cmd="pwd"
                            desc="Tôi đang ở đâu?"
                            icon={<Map className="text-blue-400" size={24} />}
                            color="blue"
                        />
                        <CommandCard
                            cmd="ls"
                            desc="Trong đây có gì?"
                            icon={<List className="text-green-400" size={24} />}
                            color="green"
                        />
                        <CommandCard
                            cmd="cd"
                            desc="Đi đến chỗ khác"
                            icon={
                                <Navigation
                                    className="text-orange-400"
                                    size={24}
                                />
                            }
                            color="orange"
                        />
                        <CommandCard
                            cmd="tree"
                            desc="Xem bản đồ cây"
                            icon={
                                <FolderTree
                                    className="text-purple-400"
                                    size={24}
                                />
                            }
                            color="purple"
                        />
                    </div>
                    <div className="text-center text-slate-400 italic mt-4">
                        "Chỉ cần nắm vững 4 lệnh này, bạn đã có thể tự do di
                        chuyển khắp mọi ngóc ngách của Linux!" 🗺️
                    </div>
                </section>

                {/* Section 2: PWD */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-slate-800 text-blue-400 p-2 rounded-lg font-mono">
                            pwd
                        </span>
                        Print Working Directory
                    </h3>

                    <div className="bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700 grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="text-slate-300 text-lg mb-4">
                                <strong>Hành động:</strong> "Định vị bản thân
                                trên bản đồ."
                            </p>
                            <p className="text-slate-400 mb-6">
                                Khi bị lạc trong hàng ngàn thư mục, lệnh{" "}
                                <code>pwd</code> sẽ in ra đường dẫn tuyệt đối
                                (từ gốc <code>/</code>) của thư mục bạn đang
                                đứng.
                            </p>
                            <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 font-mono text-sm space-y-2">
                                <div className="text-green-400">
                                    alice@ubuntu:~${" "}
                                    <span className="text-white font-bold">
                                        pwd
                                    </span>
                                </div>
                                <div className="text-slate-300">
                                    /home/alice
                                </div>
                                <div className="mt-2 text-green-400">
                                    alice@ubuntu:/etc/apt${" "}
                                    <span className="text-white font-bold">
                                        pwd
                                    </span>
                                </div>
                                <div className="text-slate-300">/etc/apt</div>
                            </div>
                        </div>
                        <div className="bg-blue-500/10 p-6 rounded-2xl border border-blue-500/30">
                            <h4 className="text-blue-400 font-bold mb-3 flex items-center gap-2">
                                <Info size={18} /> Mẹo Sysadmin
                            </h4>
                            <p className="text-sm text-slate-300 mb-4">
                                Lưu vị trí hiện tại để dùng lại sau:
                            </p>
                            <code className="block bg-black p-3 rounded-lg text-green-400 text-sm border border-slate-800 mb-2">
                                $ CURRENT=$(pwd)
                                <br />
                                $ echo $CURRENT
                                <br />
                                <span className="text-slate-400">
                                    /home/alice/Documents
                                </span>
                            </code>
                        </div>
                    </div>
                </section>

                {/* Section 3: LS & Interactive Decoder */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-slate-800 text-green-400 p-2 rounded-lg font-mono">
                            ls
                        </span>
                        List Directory Contents
                    </h3>

                    <div className="space-y-8">
                        <p className="text-slate-300 text-lg">
                            <strong>Hành động:</strong> "Liệt kê danh sách file
                            và thư mục." (Lệnh dùng nhiều NHẤT trong Linux!)
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                                <div className="font-mono font-bold text-green-400 mb-2 border-b border-slate-700 pb-2">
                                    ls
                                </div>
                                <div className="text-sm text-slate-400 mb-2">
                                    Xem cơ bản
                                </div>
                                <code className="text-xs bg-black p-2 block text-slate-300 rounded">
                                    Desktop Documents Downloads
                                </code>
                            </div>
                            <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                                <div className="font-mono font-bold text-green-400 mb-2 border-b border-slate-700 pb-2">
                                    ls -a
                                </div>
                                <div className="text-sm text-slate-400 mb-2">
                                    Xem cả file ẩn (All)
                                </div>
                                <code className="text-xs bg-black p-2 block text-slate-300 rounded">
                                    . .. .bashrc Desktop Documents
                                </code>
                            </div>
                            <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                                <div className="font-mono font-bold text-green-400 mb-2 border-b border-slate-700 pb-2">
                                    ls -lhS
                                </div>
                                <div className="text-sm text-slate-400 mb-2">
                                    Sắp xếp theo Size, dễ đọc
                                </div>
                                <code className="text-xs bg-black p-2 block text-slate-300 rounded">
                                    5.7G iso 120M video 45K text
                                </code>
                            </div>
                        </div>

                        {/* Interactive LS Decoder */}
                        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 md:p-8">
                            <h4 className="font-bold text-white mb-6 flex items-center gap-2">
                                <Search className="text-orange-400" /> Giải mã
                                kết quả của lệnh <code>ls -l</code>
                            </h4>
                            <p className="text-slate-400 text-sm mb-8">
                                Rê chuột (hoặc chạm) vào từng phần của dòng lệnh
                                dưới đây để xem ý nghĩa của chúng.
                            </p>

                            <LsDecoder />
                        </div>
                    </div>
                </section>

                {/* Section 4: CD */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-slate-800 text-orange-400 p-2 rounded-lg font-mono">
                            cd
                        </span>
                        Change Directory
                    </h3>

                    <div className="bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                        <p className="text-slate-300 text-lg mb-8">
                            <strong>Hành động:</strong> "Di chuyển tôi đến thư
                            mục khác."
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-orange-400 border-b border-slate-700 pb-2">
                                    Các đường tắt "Thần thánh"
                                </h4>

                                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex justify-between items-center group hover:border-orange-500/50 transition-colors">
                                    <div>
                                        <div className="font-mono font-bold text-white mb-1">
                                            <span className="text-orange-400">
                                                cd
                                            </span>{" "}
                                            ~{" "}
                                            <span className="text-slate-500 text-xs ml-2">
                                                (hoặc chỉ gõ cd)
                                            </span>
                                        </div>
                                        <div className="text-sm text-slate-400">
                                            Về thẳng nhà (Home) từ bất cứ đâu
                                        </div>
                                    </div>
                                    <HomeIcon
                                        size={20}
                                        className="text-slate-600 group-hover:text-orange-400"
                                    />
                                </div>

                                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex justify-between items-center group hover:border-orange-500/50 transition-colors">
                                    <div>
                                        <div className="font-mono font-bold text-white mb-1">
                                            <span className="text-orange-400">
                                                cd
                                            </span>{" "}
                                            ..
                                        </div>
                                        <div className="text-sm text-slate-400">
                                            Đi lên thư mục CHA (1 cấp)
                                        </div>
                                    </div>
                                    <ArrowUpIcon
                                        size={20}
                                        className="text-slate-600 group-hover:text-orange-400"
                                    />
                                </div>

                                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex justify-between items-center group hover:border-orange-500/50 transition-colors">
                                    <div>
                                        <div className="font-mono font-bold text-white mb-1">
                                            <span className="text-orange-400">
                                                cd
                                            </span>{" "}
                                            -
                                        </div>
                                        <div className="text-sm text-slate-400">
                                            Quay lại thư mục VỪA RỜI KHỎI
                                        </div>
                                    </div>
                                    <ArrowLeftIcon
                                        size={20}
                                        className="text-slate-600 group-hover:text-orange-400"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-bold text-orange-400 border-b border-slate-700 pb-2">
                                    Bí kíp sinh tồn: Ký tự KHOẢNG TRẮNG
                                </h4>
                                <p className="text-sm text-slate-300">
                                    Nếu tên thư mục có khoảng trắng (VD:{" "}
                                    <code>My Documents</code>), bạn không thể gõ{" "}
                                    <code>cd My Documents</code> vì Linux sẽ
                                    hiểu đó là 2 thư mục!
                                </p>

                                <div className="bg-black p-4 rounded-xl border border-slate-800 space-y-3 font-mono text-sm">
                                    <div className="text-red-400">
                                        ❌ cd My Documents
                                    </div>
                                    <div className="text-green-400 flex items-center justify-between">
                                        <span>✅ cd "My Documents"</span>{" "}
                                        <span className="text-xs text-slate-500 font-sans">
                                            (Dùng nháy kép)
                                        </span>
                                    </div>
                                    <div className="text-green-400 flex items-center justify-between">
                                        <span>✅ cd My\ Documents</span>{" "}
                                        <span className="text-xs text-slate-500 font-sans">
                                            (Dùng gạch chéo ngược)
                                        </span>
                                    </div>
                                    <div className="text-yellow-400 flex items-center justify-between pt-2 border-t border-slate-800 mt-2">
                                        <span>⭐ cd My[nhấn TAB]</span>{" "}
                                        <span className="text-xs text-slate-500 font-sans">
                                            (Tuyệt chiêu Tab tự điền!)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 5: TREE */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-slate-800 text-purple-400 p-2 rounded-lg font-mono">
                            tree
                        </span>
                        Hiển thị cây thư mục
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700">
                            <p className="text-slate-300 mb-6">
                                <code>tree</code> không có sẵn mà phải cài đặt
                                qua lệnh: <br />
                                <code className="bg-black px-2 py-1 rounded text-green-400 mt-2 inline-block">
                                    sudo apt install tree
                                </code>
                            </p>

                            <div className="space-y-4">
                                <div className="border-l-2 border-purple-500 pl-4">
                                    <div className="font-mono text-purple-400 font-bold">
                                        tree -L 2
                                    </div>
                                    <div className="text-sm text-slate-400">
                                        Chỉ xem sâu 2 cấp, tránh in ra hàng ngàn
                                        file làm treo màn hình.
                                    </div>
                                </div>
                                <div className="border-l-2 border-purple-500 pl-4">
                                    <div className="font-mono text-purple-400 font-bold">
                                        tree -d
                                    </div>
                                    <div className="text-sm text-slate-400">
                                        Chỉ hiển thị Thư mục (bỏ qua các file).
                                    </div>
                                </div>
                                <div className="border-l-2 border-purple-500 pl-4">
                                    <div className="font-mono text-purple-400 font-bold">
                                        tree -h
                                    </div>
                                    <div className="text-sm text-slate-400">
                                        Hiển thị dung lượng file kèm theo.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black p-6 rounded-3xl border border-slate-700 shadow-2xl font-mono text-sm">
                            <div className="text-green-400 mb-2">
                                alice@ubuntu:~${" "}
                                <span className="text-white">
                                    tree ~/Documents
                                </span>
                            </div>
                            <div className="text-slate-300">
                                /home/alice/Documents
                                <br />
                                ├── notes.txt
                                <br />
                                └──{" "}
                                <span className="text-blue-400 font-bold">
                                    projects
                                </span>
                                <br />
                                &nbsp;&nbsp;&nbsp; ├──{" "}
                                <span className="text-blue-400 font-bold">
                                    myapp
                                </span>
                                <br />
                                &nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; ├── app.py
                                <br />
                                &nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; └──{" "}
                                <span className="text-blue-400 font-bold">
                                    static
                                </span>
                                <br />
                                &nbsp;&nbsp;&nbsp;
                                │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └──
                                style.css
                                <br />
                                &nbsp;&nbsp;&nbsp; └──{" "}
                                <span className="text-blue-400 font-bold">
                                    website
                                </span>
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └──
                                index.html
                                <br />
                                <br />
                                <span className="text-slate-500">
                                    4 directories, 4 files
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 6: Terminal Practice (Interactive) */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-teal-500/20 text-teal-400 p-2 rounded-lg">
                            5
                        </span>
                        Thực hành Điều hướng (Mô phỏng thực tế)
                    </h3>
                    <p className="text-slate-400 mb-4">
                        Hệ thống ảo bên dưới có các thư mục: <code>/etc</code>,{" "}
                        <code>/var/log</code>, và{" "}
                        <code>/home/alice/Documents</code>. Hãy thử dùng{" "}
                        <code>pwd</code>, <code>ls</code>, và <code>cd</code> để
                        khám phá nhé!
                    </p>

                    <NavigationSimulator />
                </section>

                {/* Section 7: Alias */}
                <section className="space-y-6 pt-6">
                    <div className="bg-gradient-to-r from-blue-900/40 to-slate-900 border border-blue-500/30 p-6 md:p-8 rounded-3xl">
                        <h3 className="text-2xl font-bold text-blue-400 flex items-center gap-2 mb-4">
                            <Star size={24} /> Alias — Tạo phím tắt cho lệnh dài
                        </h3>
                        <p className="text-slate-300 mb-6">
                            Bạn lười phải gõ <code>ls -lah</code> hàng chục lần
                            mỗi ngày? Hãy biến nó thành lệnh <code>ll</code> chỉ
                            với tính năng Alias!
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
                                <div className="text-slate-400 font-bold text-sm mb-2">
                                    Tạo Alias tạm thời (Mất khi tắt máy):
                                </div>
                                <code className="text-green-400 font-mono text-sm block">
                                    $ alias ll='ls -lah'
                                    <br />
                                    $ alias ..='cd ..'
                                    <br />$ alias home='cd ~'
                                </code>
                            </div>
                            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
                                <div className="text-slate-400 font-bold text-sm mb-2">
                                    Lưu VĨNH VIỄN vào cấu hình Bash:
                                </div>
                                <code className="text-slate-300 font-mono text-sm block">
                                    $ echo "alias ll='ls -lah'"{" "}
                                    <span className="text-orange-400">
                                        &gt;&gt;
                                    </span>{" "}
                                    ~/.bashrc
                                    <br />$ source ~/.bashrc
                                </code>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 8: Quiz */}
                <section className="space-y-6 pt-8">
                    <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-xl">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-yellow-500/20 text-yellow-500 p-2 rounded-lg">
                                    6
                                </span>
                                Kiểm tra kiến thức Điều hướng
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
                        Bạn đã biết cách "đi dạo" trong Linux. Giờ là lúc bắt
                        đầu xây nhà (tạo/xóa file)!
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-blue-500/20">
                        Bài 2.3 — Tạo, Xóa, Copy, Move{" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

// --- Sub Components ---

function CommandCard({ cmd, desc, icon, color }) {
    const colorMap = {
        blue: "border-blue-500/30 bg-blue-500/5 hover:border-blue-500 text-blue-400",
        green: "border-green-500/30 bg-green-500/5 hover:border-green-500 text-green-400",
        orange: "border-orange-500/30 bg-orange-500/5 hover:border-orange-500 text-orange-400",
        purple: "border-purple-500/30 bg-purple-500/5 hover:border-purple-500 text-purple-400",
    };

    return (
        <div
            className={`p-4 rounded-2xl border transition-all duration-300 text-center group cursor-default ${colorMap[color]}`}
        >
            <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div className="font-mono font-bold text-xl mb-1">{cmd}</div>
            <div className="text-xs text-slate-400">{desc}</div>
        </div>
    );
}

// Icons for shortcuts
const HomeIcon = ({ className, size }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
);
const ArrowUpIcon = ({ className, size }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="m5 12 7-7 7 7" />
        <path d="M12 19V5" />
    </svg>
);
const ArrowLeftIcon = ({ className, size }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
    </svg>
);

// --- LS Decoder Component ---
function LsDecoder() {
    const [activePart, setActivePart] = useState("all");

    const parts = [
        {
            id: "type",
            text: "d",
            label: "Loại File",
            color: "text-pink-400",
            bg: "bg-pink-500/20",
            desc: "Chữ 'd' nghĩa là Directory (Thư mục). Dấu '-' là file thường. Dữ 'l' là Link (đường dẫn tắt).",
        },
        {
            id: "perms",
            text: "rwxr-xr-x",
            label: "Quyền (Permissions)",
            color: "text-orange-400",
            bg: "bg-orange-500/20",
            desc: "Chia làm 3 cụm (rwx / r-x / r-x) tương ứng với Owner / Group / Others. r=Đọc, w=Ghi, x=Thực thi.",
        },
        {
            id: "links",
            text: " 2 ",
            label: "Hard Links",
            color: "text-slate-500",
            bg: "bg-slate-700",
            desc: "Số lượng liên kết cứng (hard links) trỏ đến file/thư mục này.",
        },
        {
            id: "owner",
            text: " alice ",
            label: "Chủ sở hữu",
            color: "text-blue-400",
            bg: "bg-blue-500/20",
            desc: "Người dùng (User) tạo ra hoặc làm chủ file này.",
        },
        {
            id: "group",
            text: " alice ",
            label: "Nhóm",
            color: "text-indigo-400",
            bg: "bg-indigo-500/20",
            desc: "Nhóm người dùng (Group) có quyền truy cập dựa trên Permissions.",
        },
        {
            id: "size",
            text: " 4096 ",
            label: "Kích thước",
            color: "text-green-400",
            bg: "bg-green-500/20",
            desc: "Kích thước tính bằng byte. (Lệnh ls -h sẽ chuyển thành KB, MB dễ đọc hơn).",
        },
        {
            id: "date",
            text: " Feb 15 09:30 ",
            label: "Thời gian sửa",
            color: "text-yellow-400",
            bg: "bg-yellow-500/20",
            desc: "Thời điểm file/thư mục này được chỉnh sửa lần cuối cùng.",
        },
        {
            id: "name",
            text: " projects",
            label: "Tên File/Thư mục",
            color: "text-white",
            bg: "bg-slate-600",
            desc: "Tên của tập tin hoặc thư mục.",
        },
    ];

    return (
        <div>
            <div className="bg-black p-4 md:p-6 rounded-xl font-mono text-base md:text-lg overflow-x-auto whitespace-nowrap text-center flex justify-center mb-6 border border-slate-700 shadow-inner">
                {parts.map((p) => (
                    <span
                        key={p.id}
                        className={`cursor-pointer transition-colors border-b-2 px-0.5 
              ${activePart === p.id ? `${p.bg} ${p.color} border-current rounded-t` : "border-transparent text-slate-400 hover:text-slate-200"}`}
                        onMouseEnter={() => setActivePart(p.id)}
                        onClick={() => setActivePart(p.id)}
                    >
                        {p.text}
                    </span>
                ))}
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 min-h-[120px] flex items-center justify-center text-center animate-in fade-in">
                {activePart === "all" ? (
                    <div className="text-slate-400">
                        Hãy trỏ chuột vào dòng lệnh phía trên để xem chi tiết
                        từng phần.
                    </div>
                ) : (
                    <div>
                        <div
                            className={`font-bold text-xl mb-2 ${parts.find((p) => p.id === activePart).color}`}
                        >
                            {parts.find((p) => p.id === activePart).label}
                        </div>
                        <p className="text-slate-300">
                            {parts.find((p) => p.id === activePart).desc}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

// --- Interactive Navigation Simulator ---

// A simplified mock file system
const mockFS = {
    "/": { type: "dir", contents: ["bin", "etc", "home", "var", "tmp"] },
    "/bin": { type: "dir", contents: ["bash", "ls", "pwd"] },
    "/etc": { type: "dir", contents: ["apt", "nginx", "hostname", "passwd"] },
    "/etc/apt": { type: "dir", contents: ["sources.list"] },
    "/etc/nginx": { type: "dir", contents: ["nginx.conf"] },
    "/home": { type: "dir", contents: ["alice"] },
    "/home/alice": {
        type: "dir",
        contents: ["Desktop", "Documents", "Downloads", ".bashrc"],
    },
    "/home/alice/Documents": {
        type: "dir",
        contents: ["projects", "report.pdf", "notes.txt"],
    },
    "/home/alice/Documents/projects": { type: "dir", contents: ["myapp"] },
    "/home/alice/Downloads": { type: "dir", contents: ["ubuntu.iso"] },
    "/var": { type: "dir", contents: ["log", "cache"] },
    "/var/log": { type: "dir", contents: ["syslog", "auth.log", "apt"] },
    "/tmp": { type: "dir", contents: ["test.txt"] },
};

// Helper to resolve paths
function resolvePath(currentDir, target) {
    if (!target) return currentDir;
    if (target === "~") return "/home/alice";

    let newPath = target.startsWith("/")
        ? target
        : `${currentDir === "/" ? "" : currentDir}/${target}`;

    // Normalize path (handle .. and .)
    const parts = newPath.split("/").filter((p) => p !== "" && p !== ".");
    const resolvedParts = [];
    for (let p of parts) {
        if (p === "..") {
            if (resolvedParts.length > 0) resolvedParts.pop();
        } else {
            resolvedParts.push(p);
        }
    }

    return "/" + resolvedParts.join("/");
}

function NavigationSimulator() {
    const [history, setHistory] = useState([
        {
            type: "system",
            text: 'Navigation Simulator v1.0. (Gõ "help" để xem hướng dẫn)',
        },
    ]);
    const [input, setInput] = useState("");
    const [currentDir, setCurrentDir] = useState("/home/alice");
    const [previousDir, setPreviousDir] = useState("");

    const endRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const getPrompt = (dir) => {
        let displayDir = dir;
        if (dir.startsWith("/home/alice")) {
            displayDir = dir.replace("/home/alice", "~");
        }
        return `alice@ubuntu-pc:${displayDir}$`;
    };

    const executeCommand = (cmd) => {
        const trimmed = cmd.trim();
        if (!trimmed) return;

        setHistory((prev) => [
            ...prev,
            { type: "input", text: trimmed, prompt: getPrompt(currentDir) },
        ]);

        const parts = trimmed.split(" ").filter((p) => p !== "");
        const baseCmd = parts[0];
        const arg = parts[1];
        let output = "";
        let newDir = currentDir;

        switch (baseCmd) {
            case "clear":
                setHistory([]);
                setInput("");
                return;

            case "pwd":
                output = currentDir;
                break;

            case "cd":
                if (!arg || arg === "~") {
                    setPreviousDir(currentDir);
                    newDir = "/home/alice";
                } else if (arg === "-") {
                    if (previousDir) {
                        newDir = previousDir;
                        setPreviousDir(currentDir);
                        output = newDir; // cd - prints the new dir
                    } else {
                        output = "bash: cd: OLDPWD not set";
                    }
                } else {
                    const target = resolvePath(currentDir, arg);
                    if (mockFS[target] && mockFS[target].type === "dir") {
                        setPreviousDir(currentDir);
                        newDir = target;
                    } else if (mockFS[target]) {
                        output = `bash: cd: ${arg}: Not a directory`;
                    } else {
                        output = `bash: cd: ${arg}: No such file or directory`;
                    }
                }
                break;

            case "ls":
                const targetDir =
                    arg && !arg.startsWith("-")
                        ? resolvePath(currentDir, arg)
                        : currentDir;
                const isHidden =
                    parts.includes("-a") ||
                    parts.includes("-la") ||
                    parts.includes("-al");
                const isLong =
                    parts.includes("-l") ||
                    parts.includes("-la") ||
                    parts.includes("-al");

                if (mockFS[targetDir] && mockFS[targetDir].type === "dir") {
                    let contents = mockFS[targetDir].contents;
                    if (!isHidden) {
                        contents = contents.filter((c) => !c.startsWith("."));
                    } else {
                        contents = [".", "..", ...contents];
                    }

                    if (isLong) {
                        output = contents
                            .map(
                                (c) =>
                                    `drwxr-xr-x 2 alice alice 4096 Feb 18 10:00 ${c}`,
                            )
                            .join("\n");
                    } else {
                        output = contents.join("  ");
                    }
                } else {
                    output = `ls: cannot access '${targetDir}': No such file or directory`;
                }
                break;

            case "tree":
                output = `.\n├── file1.txt\n├── file2.pdf\n└── folder\n    └── subfile.js\n\n1 directory, 3 files`;
                break;

            case "help":
                output = `Các lệnh hỗ trợ:\npwd     - Xem đường dẫn hiện tại\nls      - Xem danh sách (hỗ trợ ls -a, ls -l)\ncd      - Di chuyển (hỗ trợ cd .., cd ~, cd -, cd /etc)\nclear   - Xóa màn hình\ntree    - In cây thư mục ảo`;
                break;

            default:
                output = `bash: ${baseCmd}: command not found`;
        }

        if (newDir !== currentDir) {
            setCurrentDir(newDir);
        }

        if (output) {
            setHistory((prev) => [...prev, { type: "output", text: output }]);
        }
        setInput("");
    };

    return (
        <div
            className="bg-[#2c001e] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden font-mono text-[15px] cursor-text flex flex-col h-[350px]"
            onClick={() => inputRef.current?.focus()}
        >
            <div className="bg-[#423b3e] px-4 py-2 flex items-center justify-between border-b border-black/50 select-none">
                <div className="text-slate-300 text-xs font-sans font-bold">
                    Terminal - Thử nghiệm Navigation
                </div>
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#f95c5b] border border-[#d64141]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#fdbd2e] border border-[#d69f25]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#28c940] border border-[#1fa531]"></div>
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
                        {line.type === "output" && <span>{line.text}</span>}
                        {line.type === "input" && (
                            <div>
                                <span className="text-[#8ae234] font-bold">
                                    {line.prompt.split("$")[0]}
                                </span>
                                <span className="text-white mr-2">$</span>
                                {line.text}
                            </div>
                        )}
                    </div>
                ))}

                <div className="flex items-center">
                    <span className="text-[#8ae234] font-bold shrink-0">
                        {getPrompt(currentDir).split("$")[0]}
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
    );
}

// --- Quiz Component ---
const questions = [
    {
        id: 1,
        question:
            "Lệnh nào sau đây dùng để cho bạn biết chính xác đường dẫn tuyệt đối của thư mục bạn đang đứng?",
        options: ["ls", "cd", "pwd", "whoami"],
        correct: 2,
        explanation:
            "pwd (Print Working Directory) in ra đường dẫn tuyệt đối từ gốc /, giúp bạn không bao giờ bị lạc.",
    },
    {
        id: 2,
        question:
            "Sự khác biệt khi chạy lệnh `ls -la` so với lệnh `ls` thông thường là gì?",
        options: [
            "Nó xóa tất cả các file trong thư mục.",
            "Nó hiển thị chi tiết (quyền, kích thước, chủ sở hữu) và bao gồm CẢ các file ẩn (bắt đầu bằng dấu chấm).",
            "Nó chỉ hiển thị thư mục, không hiển thị file.",
            "Nó sắp xếp các file theo thứ tự bảng chữ cái ngược.",
        ],
        correct: 1,
        explanation:
            "Tùy chọn -l (long format) cho xem dạng danh sách chi tiết, và -a (all) cho xem cả file ẩn. Kết hợp lại thành ls -la.",
    },
    {
        id: 3,
        question:
            "Bạn đang ở /var/log. Bạn muốn NHẢY LÊN thư mục cha (về /var). Bạn dùng lệnh nào?",
        options: ["cd /var", "cd ..", "Cả hai lệnh trên đều đúng.", "cd -"],
        correct: 2,
        explanation:
            "Cả hai cách đều hoạt động! 'cd /var' là dùng đường dẫn tuyệt đối, còn 'cd ..' là dùng đường dẫn tương đối (lên 1 cấp).",
    },
    {
        id: 4,
        question: "Lệnh `cd -` có tác dụng gì?",
        options: [
            "Quay lại thư mục gốc /",
            "Quay lại thư mục Home ~",
            "Quay lại thư mục trước đó vừa rời khỏi (giống nút Back trên trình duyệt).",
            "Xóa thư mục hiện tại.",
        ],
        correct: 2,
        explanation:
            "cd - rất hữu ích khi bạn phải nhảy qua nhảy lại giữa 2 thư mục làm việc nằm xa nhau mà không muốn gõ lại đường dẫn dài.",
    },
    {
        id: 5,
        question:
            "Lệnh tree rất trực quan để xem cây thư mục. Tùy chọn nào giúp hạn chế ĐỘ SÂU (chỉ xem 2 cấp) để màn hình không bị tràn?",
        options: ["tree -h", "tree -L 2", "tree -d", "tree --limit 2"],
        correct: 1,
        explanation:
            "Tùy chọn -L (Level) giới hạn độ sâu khi quét cây thư mục. Cực kỳ quan trọng vì nếu gõ `tree /` không có giới hạn, máy bạn có thể bị treo vì in ra hàng triệu file!",
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
                    <strong className="text-blue-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu hỏi Điều hướng.
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
                <span className="text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
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
                                "border-red-500 bg-red-500/10 text-red-400";
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
                        className={`p-4 rounded-xl text-sm mb-6 flex gap-3 ${selected === q.correct ? "bg-green-500/10 border border-green-500/20 text-green-300" : "bg-red-500/10 border border-red-500/20 text-red-300"}`}
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
