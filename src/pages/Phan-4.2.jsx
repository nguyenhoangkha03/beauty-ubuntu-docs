import React, { useState, useRef, useEffect } from "react";
import {
    Shield,
    Key,
    Users,
    User,
    FileText,
    TerminalSquare,
    CheckCircle2,
    AlertTriangle,
    ChevronRight,
    Info,
    ArrowRight,
    Folder,
    Calculator,
    ShieldAlert,
    FileKey,
    Lock,
    Unlock,
    Eye,
    Edit3,
    Play,
    Globe,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-teal-500 selection:text-white pb-20">
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
                            Bài trước: 4.1
                        </span>
                        <div className="text-sm font-medium text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full border border-teal-400/20">
                            Phần 4.2
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                {/* Title Section */}
                <div className="text-center space-y-4 py-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        Hệ thống phân quyền{" "}
                        <span className="text-teal-400 font-mono tracking-tighter">
                            Linux
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Trái tim của bảo mật Linux. Học cách kiểm soát chính xác{" "}
                        <strong>Ai</strong> được phép làm <strong>Gì</strong>{" "}
                        với các file và thư mục của bạn thông qua{" "}
                        <code>rwx</code>, <code>chmod</code> và{" "}
                        <code>chown</code>.
                    </p>
                </div>

                {/* Section 1: The Concept */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                        <span className="bg-teal-500/20 text-teal-400 p-2 rounded-lg">
                            1
                        </span>
                        Tại sao lại cần phân quyền?
                    </h3>

                    <div className="bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700 flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1 space-y-4">
                            <p className="text-slate-300 text-lg">
                                Hãy tưởng tượng hệ thống Linux như một{" "}
                                <strong>tòa nhà văn phòng</strong>:
                            </p>
                            <ul className="space-y-3 text-slate-300 bg-black/30 p-4 rounded-xl border border-slate-800">
                                <li className="flex items-center gap-3">
                                    <div className="bg-rose-500/20 p-2 rounded text-rose-400">
                                        <Lock size={18} />
                                    </div>{" "}
                                    <strong>Phòng Server:</strong> Chỉ IT (Root)
                                    vào được.
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="bg-blue-500/20 p-2 rounded text-blue-400">
                                        <FileText size={18} />
                                    </div>{" "}
                                    <strong>Phòng Kế toán:</strong> Chỉ nhân
                                    viên kế toán đọc hồ sơ.
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="bg-green-500/20 p-2 rounded text-green-400">
                                        <Users size={18} />
                                    </div>{" "}
                                    <strong>Phòng Họp:</strong> Mọi người đều
                                    vào được.
                                </li>
                            </ul>
                            <p className="text-slate-400 text-sm mt-4">
                                Mỗi File hay Thư mục trong Linux đều có một bộ
                                "khóa" (Permissions) tương tự như vậy để quyết
                                định Ai được xem, Ai được sửa.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex justify-center">
                            <ShieldAlert
                                size={150}
                                className="text-teal-500/20"
                            />
                        </div>
                    </div>
                </section>

                {/* Section 2: Anatomy of ls -l */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-indigo-500/20 text-indigo-400 p-2 rounded-lg">
                            2
                        </span>
                        Giải phẫu thông tin phân quyền
                    </h3>
                    <p className="text-slate-400 mb-6">
                        Khi bạn gõ lệnh <code>ls -l</code>, bạn sẽ thấy một
                        chuỗi ký tự kỳ lạ ở đầu mỗi dòng. Hãy giải mã nó!
                    </p>

                    <div className="bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl font-mono text-sm md:text-base">
                        <div className="bg-slate-800 px-6 py-3 text-slate-400 text-xs uppercase tracking-widest border-b border-slate-700">
                            Output của lệnh ls -la
                        </div>
                        <div className="p-6 md:p-8 space-y-2 overflow-x-auto text-slate-300">
                            <div className="flex gap-4 min-w-[600px] border-b border-slate-800 pb-2 mb-4 text-xs font-bold text-slate-500 uppercase">
                                <span className="w-32">Permissions</span>
                                <span className="w-8">Links</span>
                                <span className="w-20">Owner</span>
                                <span className="w-24">Group</span>
                                <span className="w-16">Size</span>
                                <span className="w-32">Date</span>
                                <span className="flex-1">Name</span>
                            </div>
                            <div className="flex gap-4 min-w-[600px] hover:bg-slate-800/50 p-2 rounded transition-colors cursor-crosshair group">
                                <span className="w-32">
                                    <span className="text-pink-400 font-bold">
                                        -
                                    </span>
                                    <span className="text-green-400 font-bold group-hover:bg-green-500/20">
                                        rwx
                                    </span>
                                    <span className="text-blue-400 font-bold group-hover:bg-blue-500/20">
                                        r-x
                                    </span>
                                    <span className="text-orange-400 font-bold group-hover:bg-orange-500/20">
                                        ---
                                    </span>
                                </span>
                                <span className="w-8">1</span>
                                <span className="w-20 text-green-400 font-bold group-hover:bg-green-500/20">
                                    alice
                                </span>
                                <span className="w-24 text-blue-400 font-bold group-hover:bg-blue-500/20">
                                    developers
                                </span>
                                <span className="w-16">512</span>
                                <span className="w-32 text-slate-500">
                                    Feb 18 14:30
                                </span>
                                <span className="flex-1 text-white">
                                    deploy.sh
                                </span>
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="bg-slate-950 p-6 border-t border-slate-700 grid md:grid-cols-4 gap-6 font-sans">
                            <div className="space-y-2">
                                <div className="text-pink-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                                    <Folder size={14} /> Loại File
                                </div>
                                <div className="text-sm text-slate-400">
                                    <code>-</code> : File thường
                                    <br />
                                    <code>d</code> : Thư mục
                                    <br />
                                    <code>l</code> : Shortcut
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-green-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                                    <User size={14} /> OWNER (Chủ sở hữu)
                                </div>
                                <div className="text-sm text-slate-400">
                                    Người tạo ra file. Ở đây Alice có quyền{" "}
                                    <code>rwx</code> (Đọc, Ghi, Chạy).
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-blue-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                                    <Users size={14} /> GROUP (Nhóm)
                                </div>
                                <div className="text-sm text-slate-400">
                                    Những ai thuộc nhóm <code>developers</code>{" "}
                                    sẽ có quyền <code>r-x</code> (Chỉ Đọc,
                                    Chạy).
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-orange-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                                    <Globe size={14} /> OTHERS (Kẻ lạ)
                                </div>
                                <div className="text-sm text-slate-400">
                                    Những người còn lại trong máy tính bị cấm
                                    hoàn toàn <code>---</code>.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: RWX Meaning */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-green-500/20 text-green-400 p-2 rounded-lg">
                            3
                        </span>
                        Ý nghĩa thực sự của R, W, X
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-slate-800 p-6 rounded-2xl border-t-4 border-t-blue-500 shadow-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400">
                                    <Eye size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-xl">
                                        R (Read)
                                    </h4>
                                    <div className="text-xs text-slate-400 font-mono">
                                        Quyền Đọc
                                    </div>
                                </div>
                            </div>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li>
                                    <strong className="text-white">
                                        Với File:
                                    </strong>{" "}
                                    Xem nội dung bên trong (lệnh{" "}
                                    <code>cat</code>, <code>less</code>).
                                </li>
                                <li className="mt-2 pt-2 border-t border-slate-700">
                                    <strong className="text-white">
                                        Với Thư mục:
                                    </strong>{" "}
                                    Xem được danh sách các file nằm bên trong
                                    (lệnh <code>ls</code>).
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-800 p-6 rounded-2xl border-t-4 border-t-orange-500 shadow-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-orange-500/20 p-3 rounded-xl text-orange-400">
                                    <Edit3 size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-xl">
                                        W (Write)
                                    </h4>
                                    <div className="text-xs text-slate-400 font-mono">
                                        Quyền Ghi/Sửa
                                    </div>
                                </div>
                            </div>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li>
                                    <strong className="text-white">
                                        Với File:
                                    </strong>{" "}
                                    Sửa đổi hoặc xóa bỏ nội dung file.
                                </li>
                                <li className="mt-2 pt-2 border-t border-slate-700">
                                    <strong className="text-white">
                                        Với Thư mục:
                                    </strong>{" "}
                                    Tạo mới, Đổi tên hoặc Xóa các file TRONG thư
                                    mục đó.
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-800 p-6 rounded-2xl border-t-4 border-t-rose-500 shadow-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-rose-500/20 p-3 rounded-xl text-rose-400">
                                    <Play size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-xl">
                                        X (Execute)
                                    </h4>
                                    <div className="text-xs text-slate-400 font-mono">
                                        Quyền Thực thi
                                    </div>
                                </div>
                            </div>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li>
                                    <strong className="text-white">
                                        Với File:
                                    </strong>{" "}
                                    Được phép chạy file đó như một phần
                                    mềm/script (VD: <code>./script.sh</code>).
                                </li>
                                <li className="mt-2 pt-2 border-t border-slate-700">
                                    <strong className="text-white bg-rose-500/20 px-1 rounded">
                                        Với Thư mục (QUAN TRỌNG):
                                    </strong>{" "}
                                    Cho phép bạn "bước vào" thư mục (lệnh{" "}
                                    <code>cd</code>). Nếu thiếu <code>x</code>,
                                    bạn không thể vào thư mục dù có quyền{" "}
                                    <code>r</code>.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 4: Interactive Permission Calculator */}
                <section className="space-y-6 pt-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                <span className="bg-amber-500/20 text-amber-400 p-2 rounded-lg">
                                    4
                                </span>
                                Bộ tính toán Phân quyền (chmod)
                            </h3>
                            <p className="text-slate-400 mt-2">
                                SysAdmin thường không dùng chữ, họ dùng hệ{" "}
                                <strong>Cơ số 8 (Octal)</strong> để phân quyền
                                cực nhanh. Hãy click vào các hộp kiểm bên dưới
                                để hiểu cách tính toán!
                            </p>
                        </div>
                    </div>

                    <PermissionCalculator />
                </section>

                {/* Section 5: chmod & chown Commands */}
                <section className="space-y-6 pt-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <span className="bg-purple-500/20 text-purple-400 p-2 rounded-lg">
                            5
                        </span>
                        Thay đổi Quyền và Chủ sở hữu
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* CHMOD */}
                        <div className="bg-slate-800 p-6 md:p-8 rounded-3xl border border-slate-700">
                            <h4 className="font-bold text-purple-400 text-xl mb-2 font-mono border-b border-slate-700 pb-2">
                                chmod
                            </h4>
                            <p className="text-sm text-slate-300 mb-6">
                                Thay đổi quyền (CHange MODe). Dùng hệ số Octal ở
                                trên hoặc dùng chữ cái (u=user, g=group,
                                o=others, +=thêm, -=bớt).
                            </p>
                            <div className="bg-black p-4 rounded-xl font-mono text-sm space-y-4 border border-slate-800">
                                <div>
                                    <span className="text-slate-500 text-xs block">
                                        # Chỉ Owner được đọc/ghi (File bí mật)
                                    </span>
                                    <span className="text-green-400">$</span>{" "}
                                    <span className="text-white">
                                        chmod 600 secret.txt
                                    </span>
                                </div>
                                <div>
                                    <span className="text-slate-500 text-xs block">
                                        # Cấp quyền chạy script cho TẤT CẢ mọi
                                        người
                                    </span>
                                    <span className="text-green-400">$</span>{" "}
                                    <span className="text-white">
                                        chmod +x script.sh
                                    </span>
                                </div>
                                <div>
                                    <span className="text-slate-500 text-xs block">
                                        # Set đệ quy (-R) thư mục web (Cẩn
                                        thận!)
                                    </span>
                                    <span className="text-green-400">$</span>{" "}
                                    <span className="text-white">
                                        chmod -R 755 /var/www/html/
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* CHOWN */}
                        <div className="bg-slate-800 p-6 md:p-8 rounded-3xl border border-slate-700">
                            <h4 className="font-bold text-blue-400 text-xl mb-2 font-mono border-b border-slate-700 pb-2">
                                chown
                            </h4>
                            <p className="text-sm text-slate-300 mb-6">
                                Đổi chủ sở hữu (CHange OWNer). Chỉ có{" "}
                                <strong>Root (sudo)</strong> mới được phép đổi
                                chủ của một file. Cú pháp:{" "}
                                <code>chown user:group file</code>
                            </p>
                            <div className="bg-black p-4 rounded-xl font-mono text-sm space-y-4 border border-slate-800">
                                <div>
                                    <span className="text-slate-500 text-xs block">
                                        # Chuyển chủ file sang alice
                                    </span>
                                    <span className="text-green-400">$</span>{" "}
                                    <span className="text-white">
                                        sudo chown alice data.txt
                                    </span>
                                </div>
                                <div>
                                    <span className="text-slate-500 text-xs block">
                                        # Chuyển cả Owner (alice) và Group
                                        (devs)
                                    </span>
                                    <span className="text-green-400">$</span>{" "}
                                    <span className="text-white">
                                        sudo chown alice:devs data.txt
                                    </span>
                                </div>
                                <div>
                                    <span className="text-slate-500 text-xs block">
                                        # Chuyển toàn bộ thư mục (-R) cho user
                                        web
                                    </span>
                                    <span className="text-green-400">$</span>{" "}
                                    <span className="text-white">
                                        sudo chown -R www-data:www-data /var/www
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 6: Special Permissions & Traps */}
                <section className="space-y-6 pt-6">
                    <div className="bg-gradient-to-br from-rose-900/20 to-slate-900 border-2 border-rose-500/50 p-6 md:p-8 rounded-3xl relative overflow-hidden">
                        <h3 className="text-2xl font-bold text-rose-400 flex items-center gap-2 mb-6">
                            <ShieldAlert size={28} /> Những quyền năng Đặc biệt
                            & Lỗi thường gặp
                        </h3>

                        <div className="space-y-6 relative z-10">
                            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700">
                                <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                                    <Lock
                                        size={18}
                                        className="text-yellow-500"
                                    />{" "}
                                    SUID (SetUID) — <code>chmod 4755</code>
                                </h4>
                                <p className="text-slate-300 text-sm">
                                    Cho phép user bình thường chạy một file với
                                    quyền của người đã tạo ra file đó (thường là
                                    Root).
                                    <br />
                                    👉 Ví dụ: Lệnh <code>passwd</code> cần ghi
                                    vào file <code>/etc/shadow</code> (của
                                    root). Nó có SUID nên bạn mới tự đổi mật
                                    khẩu của mình được.
                                </p>
                            </div>

                            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700">
                                <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                                    <Folder
                                        size={18}
                                        className="text-blue-500"
                                    />{" "}
                                    SGID (SetGID) — <code>chmod 2775</code>
                                </h4>
                                <p className="text-slate-300 text-sm">
                                    Cực kỳ hữu ích khi làm việc nhóm! Nếu đặt
                                    SGID lên một thư mục, MỌI FILE TẠO MỚI trong
                                    đó sẽ tự động kế thừa Group của thư mục đó
                                    (thay vì group của người tạo ra nó). Các dev
                                    có thể thoải mái sửa file của nhau.
                                </p>
                            </div>

                            <div className="bg-rose-950/40 p-5 rounded-2xl border border-rose-500/30 shadow-[0_0_15px_rgba(244,63,94,0.1)]">
                                <h4 className="text-rose-400 font-bold text-lg mb-2 flex items-center gap-2">
                                    <AlertTriangle size={18} /> Sai lầm "Chết
                                    người": chmod -R 777
                                </h4>
                                <p className="text-slate-300 text-sm mb-3">
                                    Khi gặp lỗi "Permission denied", người mới
                                    thường ốp ngay{" "}
                                    <code>chmod -R 777 /thu/muc</code>. ĐIỀU NÀY
                                    LÀ THẢM HỌA BẢO MẬT! Nó cho phép bất kỳ ai
                                    (kể cả hacker truy cập từ web) có quyền
                                    Xóa/Sửa file của bạn. Hãy cấp quyền vừa đủ
                                    (VD: 644 cho file, 755 cho folder).
                                </p>
                                <div className="bg-black p-3 rounded font-mono text-xs text-green-400 border border-slate-800">
                                    <span className="text-slate-500">
                                        # Cách đúng để fix quyền nguyên 1 thư
                                        mục project:
                                    </span>
                                    <br />
                                    $ find /project -type d -exec chmod 755
                                    &#123;&#125; \;
                                    <br />$ find /project -type f -exec chmod
                                    644 &#123;&#125; \;
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 7: Quiz */}
                <section className="space-y-6 pt-8">
                    <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-xl">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-teal-500/20 text-teal-500 p-2 rounded-lg">
                                    5
                                </span>
                                Kiểm tra kiến thức Phân quyền
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
                        Bạn đã làm chủ được hệ thống User và Phân quyền. Còn một
                        "vị thần" cuối cùng chúng ta cần đối mặt!
                    </p>
                    <button className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-teal-500/20">
                        Bài 4.3 — Lệnh Sudo & Tài khoản Root{" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

// --- Sub Components ---

// --- Permission Calculator Simulator ---
function PermissionCalculator() {
    const [perms, setPerms] = useState({
        owner: { r: true, w: true, x: false },
        group: { r: true, w: false, x: false },
        others: { r: true, w: false, x: false },
    });

    const togglePerm = (entity, type) => {
        setPerms((prev) => ({
            ...prev,
            [entity]: {
                ...prev[entity],
                [type]: !prev[entity][type],
            },
        }));
    };

    // Calculate Octal
    const getOctal = (pObj) => {
        return (pObj.r ? 4 : 0) + (pObj.w ? 2 : 0) + (pObj.x ? 1 : 0);
    };

    const ownerOctal = getOctal(perms.owner);
    const groupOctal = getOctal(perms.group);
    const othersOctal = getOctal(perms.others);
    const totalOctal = `${ownerOctal}${groupOctal}${othersOctal}`;

    // Calculate Symbolic
    const getSym = (pObj) => {
        return `${pObj.r ? "r" : "-"}${pObj.w ? "w" : "-"}${pObj.x ? "x" : "-"}`;
    };
    const totalSym = `-${getSym(perms.owner)}${getSym(perms.group)}${getSym(perms.others)}`;

    // Explain meaning
    let meaning = "Tùy chỉnh phân quyền...";
    if (totalOctal === "777")
        meaning =
            "CỰC KỲ NGUY HIỂM! Bất kỳ ai cũng có thể đọc, sửa, xóa và chạy file này.";
    else if (totalOctal === "755")
        meaning =
            "Chuẩn cho Thư mục hoặc File Script. Chỉ bạn được sửa, người khác chỉ xem/chạy.";
    else if (totalOctal === "644")
        meaning =
            "Chuẩn cho File cấu hình, text. Bạn đọc/ghi, người khác chỉ đọc.";
    else if (totalOctal === "600")
        meaning =
            "Bảo mật cao. Chỉ mình bạn được xem và sửa. Dùng cho file SSH Key, Passwords.";
    else if (totalOctal === "700")
        meaning =
            "Thư mục riêng tư. Không ai khác được phép chui vào thư mục này.";

    return (
        <div className="bg-slate-950 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <div className="bg-slate-900 p-4 border-b border-slate-800 flex items-center justify-between text-sm">
                <div className="font-bold text-amber-400 flex items-center gap-2">
                    <Calculator size={18} /> Máy tính Octal
                </div>
                <div className="font-mono text-slate-400 bg-black px-3 py-1 rounded">
                    ls -l output:{" "}
                    <span className="text-white font-bold">{totalSym}</span>
                </div>
            </div>

            <div className="p-6 md:p-8">
                <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8">
                    {/* Owner */}
                    <div className="bg-slate-800 rounded-xl p-4 md:p-6 border-t-4 border-green-500 shadow-lg text-center">
                        <div className="text-green-400 font-bold mb-1 uppercase text-sm md:text-base">
                            Owner
                        </div>
                        <div className="text-xs text-slate-400 mb-4">
                            (Chủ file)
                        </div>

                        <div className="text-4xl font-mono font-bold text-white mb-6 bg-black/30 py-3 rounded-lg border border-slate-700">
                            {ownerOctal}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="flex items-center justify-between bg-slate-900 p-2 rounded cursor-pointer border border-slate-700 hover:border-slate-500 transition-colors">
                                <span className="font-mono text-sm md:text-base text-slate-300">
                                    Read (4)
                                </span>
                                <input
                                    type="checkbox"
                                    checked={perms.owner.r}
                                    onChange={() => togglePerm("owner", "r")}
                                    className="w-4 h-4 accent-green-500"
                                />
                            </label>
                            <label className="flex items-center justify-between bg-slate-900 p-2 rounded cursor-pointer border border-slate-700 hover:border-slate-500 transition-colors">
                                <span className="font-mono text-sm md:text-base text-slate-300">
                                    Write (2)
                                </span>
                                <input
                                    type="checkbox"
                                    checked={perms.owner.w}
                                    onChange={() => togglePerm("owner", "w")}
                                    className="w-4 h-4 accent-green-500"
                                />
                            </label>
                            <label className="flex items-center justify-between bg-slate-900 p-2 rounded cursor-pointer border border-slate-700 hover:border-slate-500 transition-colors">
                                <span className="font-mono text-sm md:text-base text-slate-300">
                                    Exec (1)
                                </span>
                                <input
                                    type="checkbox"
                                    checked={perms.owner.x}
                                    onChange={() => togglePerm("owner", "x")}
                                    className="w-4 h-4 accent-green-500"
                                />
                            </label>
                        </div>
                    </div>

                    {/* Group */}
                    <div className="bg-slate-800 rounded-xl p-4 md:p-6 border-t-4 border-blue-500 shadow-lg text-center">
                        <div className="text-blue-400 font-bold mb-1 uppercase text-sm md:text-base">
                            Group
                        </div>
                        <div className="text-xs text-slate-400 mb-4">
                            (Nhóm)
                        </div>

                        <div className="text-4xl font-mono font-bold text-white mb-6 bg-black/30 py-3 rounded-lg border border-slate-700">
                            {groupOctal}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="flex items-center justify-between bg-slate-900 p-2 rounded cursor-pointer border border-slate-700 hover:border-slate-500 transition-colors">
                                <span className="font-mono text-sm md:text-base text-slate-300">
                                    Read (4)
                                </span>
                                <input
                                    type="checkbox"
                                    checked={perms.group.r}
                                    onChange={() => togglePerm("group", "r")}
                                    className="w-4 h-4 accent-blue-500"
                                />
                            </label>
                            <label className="flex items-center justify-between bg-slate-900 p-2 rounded cursor-pointer border border-slate-700 hover:border-slate-500 transition-colors">
                                <span className="font-mono text-sm md:text-base text-slate-300">
                                    Write (2)
                                </span>
                                <input
                                    type="checkbox"
                                    checked={perms.group.w}
                                    onChange={() => togglePerm("group", "w")}
                                    className="w-4 h-4 accent-blue-500"
                                />
                            </label>
                            <label className="flex items-center justify-between bg-slate-900 p-2 rounded cursor-pointer border border-slate-700 hover:border-slate-500 transition-colors">
                                <span className="font-mono text-sm md:text-base text-slate-300">
                                    Exec (1)
                                </span>
                                <input
                                    type="checkbox"
                                    checked={perms.group.x}
                                    onChange={() => togglePerm("group", "x")}
                                    className="w-4 h-4 accent-blue-500"
                                />
                            </label>
                        </div>
                    </div>

                    {/* Others */}
                    <div className="bg-slate-800 rounded-xl p-4 md:p-6 border-t-4 border-orange-500 shadow-lg text-center">
                        <div className="text-orange-400 font-bold mb-1 uppercase text-sm md:text-base">
                            Others
                        </div>
                        <div className="text-xs text-slate-400 mb-4">
                            (Người lạ)
                        </div>

                        <div className="text-4xl font-mono font-bold text-white mb-6 bg-black/30 py-3 rounded-lg border border-slate-700">
                            {othersOctal}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="flex items-center justify-between bg-slate-900 p-2 rounded cursor-pointer border border-slate-700 hover:border-slate-500 transition-colors">
                                <span className="font-mono text-sm md:text-base text-slate-300">
                                    Read (4)
                                </span>
                                <input
                                    type="checkbox"
                                    checked={perms.others.r}
                                    onChange={() => togglePerm("others", "r")}
                                    className="w-4 h-4 accent-orange-500"
                                />
                            </label>
                            <label className="flex items-center justify-between bg-slate-900 p-2 rounded cursor-pointer border border-slate-700 hover:border-slate-500 transition-colors">
                                <span className="font-mono text-sm md:text-base text-slate-300">
                                    Write (2)
                                </span>
                                <input
                                    type="checkbox"
                                    checked={perms.others.w}
                                    onChange={() => togglePerm("others", "w")}
                                    className="w-4 h-4 accent-orange-500"
                                />
                            </label>
                            <label className="flex items-center justify-between bg-slate-900 p-2 rounded cursor-pointer border border-slate-700 hover:border-slate-500 transition-colors">
                                <span className="font-mono text-sm md:text-base text-slate-300">
                                    Exec (1)
                                </span>
                                <input
                                    type="checkbox"
                                    checked={perms.others.x}
                                    onChange={() => togglePerm("others", "x")}
                                    className="w-4 h-4 accent-orange-500"
                                />
                            </label>
                        </div>
                    </div>
                </div>

                {/* Result Area */}
                <div
                    className={`p-4 rounded-xl border flex flex-col md:flex-row items-center justify-between gap-4 transition-colors ${totalOctal === "777" ? "bg-rose-500/10 border-rose-500/50" : "bg-slate-900 border-slate-700"}`}
                >
                    <div className="font-mono text-lg md:text-2xl font-bold bg-black px-4 py-2 rounded-lg text-amber-400 border border-slate-800 shadow-inner">
                        chmod {totalOctal} file.txt
                    </div>
                    <div
                        className={`flex-1 text-sm md:text-base flex items-center gap-2 ${totalOctal === "777" ? "text-rose-400 font-bold" : "text-slate-300"}`}
                    >
                        {totalOctal === "777" && (
                            <AlertTriangle size={20} className="shrink-0" />
                        )}
                        {meaning}
                    </div>
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
            "Bạn gõ lệnh `ls -l deploy.sh` và nhận được chuỗi `-rwxr-x---`. Quyền hạn của những 'Người lạ' (Others) đối với file này là gì?",
        options: [
            "Họ được phép đọc và thực thi file.",
            "Họ được toàn quyền.",
            "Họ bị cấm hoàn toàn, không thể đọc, ghi hay chạy file.",
            "Họ chỉ được phép đọc.",
        ],
        correct: 2,
        explanation:
            "Chuỗi phân quyền chia làm 3 phần. Phần cuối cùng `---` dành cho Others, nghĩa là quyền Đọc(r), Ghi(w), Chạy(x) đều bị tước bỏ (biểu diễn bằng dấu -).",
    },
    {
        id: 2,
        question:
            "Con số hệ Bát phân (Octal) `755` thường được dùng cho Thư mục. Con số này tương đương với chữ cái nào?",
        options: ["rwxrwxrwx", "rwxr-xr-x", "rw-r--r--", "rwx---r-x"],
        correct: 1,
        explanation:
            "Số 7 = 4(r) + 2(w) + 1(x) = rwx. Số 5 = 4(r) + 0 + 1(x) = r-x. Do đó 755 là `rwxr-xr-x`. Chủ sở hữu toàn quyền, người khác chỉ được xem/vào.",
    },
    {
        id: 3,
        question:
            "Đối với một THƯ MỤC (Directory), quyền `x` (Execute) có ý nghĩa đặc biệt gì?",
        options: [
            "Cho phép chạy các chương trình đuôi .exe bên trong thư mục đó.",
            "Cho phép xóa thư mục.",
            "Cho phép dùng lệnh `cd` để 'bước vào' (truy cập) thư mục đó.",
            "Cho phép nén thư mục thành file .zip.",
        ],
        correct: 2,
        explanation:
            "Đây là một 'cú lừa' kinh điển của Linux. Với file, x là chạy. Nhưng với thư mục, x là quyền 'Mở cửa bước vào' (pass through). Dù bạn có quyền r (đọc danh sách), nhưng mất x thì cũng không thể cd vào thư mục đó được.",
    },
    {
        id: 4,
        question:
            "Bạn có một file chứa mật khẩu quan trọng tên là `secret.txt`. Bạn chỉ muốn một mình bạn (Owner) được đọc và ghi, còn lại cấm tất cả. Lệnh nào sau đây là chuẩn nhất?",
        options: [
            "chmod 777 secret.txt",
            "chmod 644 secret.txt",
            "chmod 600 secret.txt",
            "chmod 000 secret.txt",
        ],
        correct: 2,
        explanation:
            "Số 6 (4+2) cho bạn quyền đọc/ghi. Hai số 0 đằng sau tước bỏ mọi quyền của Group và Others. Đây là permission tiêu chuẩn cho các file Private Key (id_rsa).",
    },
    {
        id: 5,
        question: "Lệnh `chown` dùng để làm gì?",
        options: [
            "Thay đổi quyền rwx của file.",
            "Chuyển đổi chủ sở hữu (Owner) và nhóm sở hữu (Group) của file/thư mục.",
            "Xóa file nếu không đủ quyền.",
            "Tạo một Group mới.",
        ],
        correct: 1,
        explanation:
            "chown (Change Owner). Cú pháp chuẩn là `chown user:group file`. Thường chỉ có Root (dùng sudo) mới có quyền lấy file của người này chuyển cho người khác.",
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
                    <strong className="text-teal-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu hỏi Phân quyền Linux.
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
                <span className="text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full">
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
