import React, { useState } from "react";
import {
    Monitor,
    Layout,
    Settings,
    Terminal,
    Folder,
    Globe,
    Search,
    Maximize,
    Minimize,
    X,
    Layers,
    Keyboard,
    ChevronRight,
    Info,
    CheckCircle2,
    Sliders,
    Image,
    Zap,
    AppWindow,
    FileText,
    Battery,
    Wifi,
    Volume2,
    Power,
    ArrowRight,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-orange-500 selection:text-white pb-20">
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
                            Bài trước: 1.3
                        </span>
                        <div className="text-sm font-medium text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Phần 1.4
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                {/* Title Section */}
                <div className="text-center space-y-4 py-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        Giao diện GNOME:{" "}
                        <span className="text-orange-500">
                            Làm quen Desktop
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Bỏ túi ngay các phím tắt "thần thánh" và khám phá triết
                        lý thiết kế tối giản, tập trung vào công việc của hệ
                        điều hành Ubuntu.
                    </p>
                </div>

                {/* Section 1: What is GNOME */}
                <section className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                                <span className="bg-blue-500/20 text-blue-400 p-2 rounded-lg">
                                    1
                                </span>
                                GNOME là gì?
                            </h3>
                            <p className="text-slate-300 mb-4">
                                <strong>GNOME</strong> (GNU Network Object Model
                                Environment) là giao diện đồ họa (Desktop
                                Environment) mặc định của Ubuntu.
                            </p>
                            <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 space-y-3">
                                <div className="flex items-center gap-3 text-sm">
                                    <CheckCircle2
                                        size={18}
                                        className="text-green-500"
                                    />
                                    <span>
                                        Phiên bản hiện tại:{" "}
                                        <strong>GNOME 46</strong> (Ubuntu 24.04)
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <CheckCircle2
                                        size={18}
                                        className="text-green-500"
                                    />
                                    <span>
                                        Triết lý: Đơn giản, gọn gàng, tập trung
                                        công việc.
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <CheckCircle2
                                        size={18}
                                        className="text-green-500"
                                    />
                                    <span>Miễn phí và mã nguồn mở 100%.</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-orange-500/20 to-blue-500/20 p-1 rounded-2xl">
                            <div className="bg-slate-900 rounded-xl p-6 h-full flex flex-col justify-center border border-slate-700/50">
                                <h4 className="text-slate-400 font-bold mb-4 text-center text-sm uppercase tracking-widest">
                                    Góc nhìn so sánh
                                </h4>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between bg-slate-800 p-3 rounded-lg">
                                        <span className="text-orange-400 font-medium">
                                            Ubuntu (GNOME)
                                        </span>
                                        <span className="text-slate-500 text-sm">
                                            tương đương
                                        </span>
                                        <span className="text-blue-400 font-medium">
                                            Windows (Explorer)
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between bg-slate-800 p-3 rounded-lg">
                                        <span className="text-orange-400 font-medium">
                                            Ubuntu (GNOME)
                                        </span>
                                        <span className="text-slate-500 text-sm">
                                            tương đương
                                        </span>
                                        <span className="text-slate-300 font-medium">
                                            macOS (Aqua)
                                        </span>
                                    </div>
                                </div>
                                <p className="text-xs text-center text-slate-400 mt-4 italic">
                                    GNOME chỉ là "bộ áo", bạn hoàn toàn có thể
                                    thay bằng KDE, XFCE... mà không ảnh hưởng
                                    đến "trái tim" Linux bên trong!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2,3,4: Desktop Simulator */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-2">
                        <span className="bg-orange-500/20 text-orange-400 p-2 rounded-lg">
                            2
                        </span>
                        Tổng quan màn hình (Mô phỏng tương tác)
                    </h3>
                    <p className="text-slate-400 mb-6">
                        Hãy click vào các vùng sáng trên màn hình ảo dưới đây để
                        khám phá chi tiết từng thành phần.
                    </p>

                    <GnomeSimulator />
                </section>

                {/* Section 5: Workspaces */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className="bg-purple-500/20 text-purple-400 p-2 rounded-lg">
                            3
                        </span>
                        Workspace (Không gian làm việc ảo)
                    </h3>

                    <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6 md:p-8">
                        <p className="text-slate-300 mb-8 text-center max-w-2xl mx-auto">
                            Workspace là các màn hình ảo giúp bạn nhóm cửa sổ
                            theo công việc. Thay vì để 10 cửa sổ lộn xộn trên 1
                            màn hình, hãy chia chúng ra! GNOME sẽ tự động tạo
                            Workspace mới khi bạn cần.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-slate-900 border-2 border-slate-700 rounded-xl p-4 shadow-lg">
                                <div className="text-center font-bold text-slate-400 mb-4 pb-2 border-b border-slate-800">
                                    Workspace 1
                                </div>
                                <div className="space-y-2">
                                    <div className="bg-blue-500/20 text-blue-400 text-sm p-2 rounded border border-blue-500/30 flex items-center justify-center gap-2">
                                        <Terminal size={16} /> Terminal
                                    </div>
                                    <div className="bg-green-500/20 text-green-400 text-sm p-2 rounded border border-green-500/30 flex items-center justify-center gap-2">
                                        <FileText size={16} /> Code Editor
                                    </div>
                                </div>
                                <div className="text-center mt-4 text-xs text-slate-500 uppercase tracking-widest">
                                    Làm việc (Code)
                                </div>
                            </div>

                            <div className="bg-slate-900 border-2 border-slate-700 rounded-xl p-4 shadow-lg scale-105 border-orange-500/50">
                                <div className="text-center font-bold text-orange-400 mb-4 pb-2 border-b border-slate-800">
                                    Workspace 2 (Hiện tại)
                                </div>
                                <div className="space-y-2 h-full">
                                    <div className="bg-red-500/20 text-red-400 text-sm p-2 rounded border border-red-500/30 flex items-center justify-center gap-2 h-16">
                                        <Globe size={16} /> Chrome / Firefox
                                    </div>
                                </div>
                                <div className="text-center mt-4 text-xs text-slate-500 uppercase tracking-widest">
                                    Tra cứu (Research)
                                </div>
                            </div>

                            <div className="bg-slate-900 border-2 border-slate-700 rounded-xl p-4 shadow-lg">
                                <div className="text-center font-bold text-slate-400 mb-4 pb-2 border-b border-slate-800">
                                    Workspace 3
                                </div>
                                <div className="space-y-2">
                                    <div className="bg-purple-500/20 text-purple-400 text-sm p-2 rounded border border-purple-500/30 flex items-center justify-center gap-2">
                                        <AppWindow size={16} /> Slack / Discord
                                    </div>
                                    <div className="bg-yellow-500/20 text-yellow-400 text-sm p-2 rounded border border-yellow-500/30 flex items-center justify-center gap-2">
                                        <FileText size={16} /> Email
                                    </div>
                                </div>
                                <div className="text-center mt-4 text-xs text-slate-500 uppercase tracking-widest">
                                    Liên lạc
                                </div>
                            </div>
                        </div>

                        <div className="bg-black/30 p-4 rounded-xl border border-slate-700 flex flex-wrap gap-4 justify-center">
                            <div className="flex items-center gap-2 text-sm text-slate-300">
                                <Kbd>Super</Kbd> + <Kbd>Page Up/Down</Kbd>{" "}
                                <ArrowRight
                                    size={14}
                                    className="mx-1 text-slate-500"
                                />{" "}
                                Chuyển Workspace
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-300">
                                <Kbd>Super</Kbd> + <Kbd>Shift</Kbd> +{" "}
                                <Kbd>PgUp/Dn</Kbd>{" "}
                                <ArrowRight
                                    size={14}
                                    className="mx-1 text-slate-500"
                                />{" "}
                                Di chuyển cửa sổ
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 6: Shortcuts */}
                <section className="space-y-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-2">
                        <div>
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                <span className="bg-teal-500/20 text-teal-400 p-2 rounded-lg">
                                    4
                                </span>
                                Các phím tắt quan trọng nhất
                            </h3>
                            <p className="text-slate-400 mt-2">
                                Học thuộc bảng này giúp bạn tăng gấp 3 lần tốc
                                độ sử dụng máy tính!
                            </p>
                        </div>
                        <div className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700 text-sm font-medium flex items-center gap-2">
                            <span className="text-orange-400">
                                Phím Super =
                            </span>
                            <Kbd>⊞ Windows</Kbd> hoặc <Kbd>⌘ Command</Kbd>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <ShortcutCategory
                            title="Điều hướng & Hệ thống"
                            icon={<Layout size={18} />}
                        >
                            <ShortcutItem
                                keys={["Super"]}
                                action="Mở Activities Overview / Tìm kiếm"
                            />
                            <ShortcutItem
                                keys={["Super", "A"]}
                                action="Mở App Grid (Danh sách ứng dụng)"
                            />
                            <ShortcutItem
                                keys={["Super", "D"]}
                                action="Show Desktop (Thu nhỏ mọi thứ)"
                            />
                            <ShortcutItem
                                keys={["Super", "L"]}
                                action="Khóa màn hình (Lock)"
                            />
                        </ShortcutCategory>

                        <ShortcutCategory
                            title="Quản lý cửa sổ"
                            icon={<AppWindow size={18} />}
                        >
                            <ShortcutItem
                                keys={["Super", "↑ / ↓"]}
                                action="Phóng to (Maximize) / Thu nhỏ"
                            />
                            <ShortcutItem
                                keys={["Super", "← / →"]}
                                action="Snap cửa sổ sang trái / phải"
                            />
                            <ShortcutItem
                                keys={["Alt", "F4"]}
                                action="Đóng cửa sổ hiện tại"
                            />
                            <ShortcutItem
                                keys={["Alt", "Tab"]}
                                action="Chuyển đổi giữa các ứng dụng"
                            />
                        </ShortcutCategory>

                        <ShortcutCategory
                            title="Chụp ảnh màn hình"
                            icon={<Image size={18} />}
                        >
                            <ShortcutItem
                                keys={["Print Screen"]}
                                action="Chụp toàn màn hình"
                            />
                            <ShortcutItem
                                keys={["Shift", "Print"]}
                                action="Chụp một vùng chọn"
                            />
                            <ShortcutItem
                                keys={["Alt", "Print"]}
                                action="Chụp cửa sổ hiện tại"
                            />
                        </ShortcutCategory>

                        <ShortcutCategory
                            title="Phím tắt 'Sinh tồn'"
                            icon={
                                <Terminal
                                    size={18}
                                    className="text-orange-400"
                                />
                            }
                        >
                            <div className="bg-orange-500/10 p-4 rounded-xl border border-orange-500/30 flex items-center justify-between h-full">
                                <div>
                                    <div className="text-orange-400 font-bold mb-1">
                                        Mở Terminal
                                    </div>
                                    <div className="text-sm text-slate-300">
                                        Phím tắt được dùng nhiều nhất Linux
                                    </div>
                                </div>
                                <div className="flex gap-1">
                                    <Kbd>Ctrl</Kbd>+<Kbd>Alt</Kbd>+<Kbd>T</Kbd>
                                </div>
                            </div>
                        </ShortcutCategory>
                    </div>
                </section>

                {/* Section 7-11: App & Tweaks Tabs */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                        <span className="bg-pink-500/20 text-pink-400 p-2 rounded-lg">
                            5
                        </span>
                        Ứng dụng, Cài đặt & Tuỳ biến
                    </h3>
                    <FeaturesTabs />
                </section>

                {/* Section 12: Quiz */}
                <section className="space-y-6 pt-8">
                    <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-yellow-500/20 text-yellow-500 p-2 rounded-lg">
                                    6
                                </span>
                                Kiểm tra kiến thức GNOME
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
                        Giao diện đồ họa đã quen, giờ là lúc tìm hiểu "phần
                        chìm" của tảng băng!
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                        Bài tiếp theo: 1.5 — Cấu trúc hệ thống file Linux{" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

// --- Sub-Components ---

// Kbd tag styling
function Kbd({ children }) {
    return (
        <kbd className="bg-slate-700 border border-slate-600 text-slate-200 px-1.5 py-0.5 rounded-md text-xs font-sans shadow-sm inline-block">
            {children}
        </kbd>
    );
}

// Shortcut items
function ShortcutCategory({ title, icon, children }) {
    return (
        <div className="bg-slate-800/50 p-5 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-white mb-4 flex items-center gap-2 text-sm uppercase tracking-wider text-slate-400 border-b border-slate-700 pb-2">
                {icon} {title}
            </h4>
            <div className="space-y-3">{children}</div>
        </div>
    );
}

function ShortcutItem({ keys, action }) {
    return (
        <div className="flex items-center justify-between gap-4">
            <div className="text-sm text-slate-300 flex-1">{action}</div>
            <div className="flex items-center gap-1 shrink-0">
                {keys.map((k, i) => (
                    <React.Fragment key={i}>
                        <Kbd>{k}</Kbd>
                        {i < keys.length - 1 && (
                            <span className="text-slate-500 text-xs">+</span>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

// GNOME Desktop Simulator
function GnomeSimulator() {
    const [activeElement, setActiveElement] = useState(null);

    const infoMap = {
        activities: {
            title: "Activities (Hoạt động)",
            desc: "Nút trung tâm của GNOME. Click vào đây (hoặc nhấn phím Super/Windows) để xem tất cả cửa sổ đang mở, tìm kiếm ứng dụng/file, và quản lý các Workspace ảo.",
            icon: <Layers className="text-blue-400" size={24} />,
        },
        clock: {
            title: "Đồng hồ & Lịch",
            desc: "Hiển thị ngày giờ hiện tại. Click vào đây sẽ mở ra bảng Lịch và khu vực hiển thị Thông báo (Notifications) của hệ thống.",
            icon: <CheckCircle2 className="text-orange-400" size={24} />,
        },
        tray: {
            title: "System Tray (Khay hệ thống)",
            desc: "Khu vực Quick Settings. Nơi bạn điều chỉnh Âm lượng, Độ sáng, WiFi, Bluetooth, xem pin và Tắt/Khởi động lại máy.",
            icon: <Settings className="text-slate-300" size={24} />,
        },
        dash: {
            title: "Dash (Thanh ứng dụng)",
            desc: "Tương tự Taskbar trên Windows hay Dock trên macOS. Chứa các ứng dụng yêu thích và những ứng dụng đang chạy (có dấu chấm bên dưới).",
            icon: <Layout className="text-purple-400" size={24} />,
        },
        appgrid: {
            title: "App Grid (Lưới ứng dụng)",
            desc: "Nút dưới cùng của Dash. Click vào để mở ngăn kéo chứa toàn bộ các phần mềm đã cài đặt trên máy tính (tương tự Start Menu).",
            icon: <Search className="text-teal-400" size={24} />,
        },
        desktop: {
            title: "Desktop (Màn hình nền)",
            desc: "Theo mặc định, Desktop của GNOME trống trơn và KHÔNG chứa các icon/shortcut như Windows. Điều này giúp bạn tránh bị phân tâm.",
            icon: <Monitor className="text-yellow-400" size={24} />,
        },
    };

    return (
        <div className="relative">
            {/* Simulator Frame */}
            <div className="bg-slate-950 rounded-xl border-4 border-slate-700 shadow-2xl overflow-hidden aspect-[16/10] max-h-[600px] relative font-sans text-sm">
                {/* Background Wallpaper */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-orange-900 opacity-80 cursor-pointer"
                    onClick={() => setActiveElement("desktop")}
                ></div>

                {/* Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-black/80 flex items-center justify-between px-4 text-slate-200 z-10 text-xs font-medium">
                    {/* Left */}
                    <button
                        className="hover:bg-white/10 px-3 py-1 rounded-full transition-colors cursor-pointer"
                        onClick={() => setActiveElement("activities")}
                    >
                        Activities
                    </button>

                    {/* Center */}
                    <button
                        className="hover:bg-white/10 px-3 py-1 rounded-full transition-colors absolute left-1/2 -translate-x-1/2 cursor-pointer"
                        onClick={() => setActiveElement("clock")}
                    >
                        Thứ 4, 18 tháng 2, 14:30
                    </button>

                    {/* Right */}
                    <div
                        className="flex items-center gap-3 hover:bg-white/10 px-3 py-1 rounded-full transition-colors cursor-pointer"
                        onClick={() => setActiveElement("tray")}
                    >
                        <Wifi size={14} />
                        <Volume2 size={14} />
                        <Battery size={14} />
                        <Power size={14} />
                    </div>
                </div>

                {/* Dash (Bottom Center for Ubuntu modern/GNOME 40+) */}
                <div
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/10 p-2 rounded-2xl flex items-center gap-2 z-10 cursor-pointer hover:bg-white/20 transition-colors"
                    onClick={() => setActiveElement("dash")}
                >
                    {/* App Icons (Fake) */}
                    <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center relative">
                        <Globe size={24} color="white" />
                        <div className="absolute -bottom-1 w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center relative">
                        <Folder size={24} color="white" />
                        <div className="absolute -bottom-1 w-3 h-1 bg-white rounded-full"></div>
                    </div>
                    <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center relative">
                        <Terminal size={24} color="white" />
                        <div className="absolute -bottom-1 w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                        <Settings size={24} color="white" />
                    </div>

                    <div className="w-px h-8 bg-white/20 mx-1"></div>

                    {/* App Grid Button */}
                    <button
                        className="w-10 h-10 hover:bg-white/10 rounded-xl flex items-center justify-center transition-colors"
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveElement("appgrid");
                        }}
                    >
                        <div className="grid grid-cols-3 gap-0.5">
                            {[...Array(9)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-1.5 h-1.5 bg-white rounded-sm"
                                ></div>
                            ))}
                        </div>
                    </button>
                </div>

                {/* Dummy Window on Desktop */}
                <div className="absolute top-20 left-10 md:left-20 w-64 md:w-96 h-48 md:h-64 bg-slate-900 rounded-xl shadow-2xl border border-slate-700 flex flex-col overflow-hidden pointer-events-none opacity-90">
                    <div className="h-10 bg-slate-800 flex items-center justify-center font-bold text-slate-400 text-xs border-b border-slate-700 relative">
                        <div className="absolute left-3 flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                            <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                        </div>
                        Files
                    </div>
                    <div className="p-4 flex gap-4 h-full">
                        <div className="w-1/3 border-r border-slate-700/50 space-y-2">
                            <div className="h-2 w-full bg-slate-800 rounded"></div>
                            <div className="h-2 w-3/4 bg-slate-800 rounded"></div>
                            <div className="h-2 w-5/6 bg-slate-800 rounded"></div>
                        </div>
                        <div className="flex-1 grid grid-cols-3 gap-2 content-start">
                            {[...Array(6)].map((_, i) => (
                                <div
                                    key={i}
                                    className="aspect-square bg-slate-800 rounded-lg"
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Info Panel below simulator */}
            <div className="mt-6 bg-slate-800 border border-slate-700 rounded-2xl p-6 min-h-[140px] flex items-center">
                {activeElement ? (
                    <div className="flex items-start gap-4 animate-in fade-in slide-in-from-bottom-2">
                        <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                            {infoMap[activeElement].icon}
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white mb-2">
                                {infoMap[activeElement].title}
                            </h4>
                            <p className="text-slate-300">
                                {infoMap[activeElement].desc}
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="w-full text-center text-slate-500 italic flex flex-col items-center gap-2">
                        <Info size={24} />
                        <p>
                            Click vào thanh Top Bar, Dash hoặc màn hình nền bên
                            trên để xem giải thích chi tiết.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

// Tabs Component for Apps & Customization
function FeaturesTabs() {
    const [activeTab, setActiveTab] = useState("apps");

    return (
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden">
            {/* Tab Nav */}
            <div className="flex flex-wrap border-b border-slate-700 bg-slate-900/50 p-2 gap-2">
                <button
                    onClick={() => setActiveTab("apps")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${activeTab === "apps" ? "bg-orange-500 text-white" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`}
                >
                    <Folder size={16} /> Quản lý File & App
                </button>
                <button
                    onClick={() => setActiveTab("tweaks")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${activeTab === "tweaks" ? "bg-blue-500 text-white" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`}
                >
                    <Sliders size={16} /> GNOME Tweaks
                </button>
                <button
                    onClick={() => setActiveTab("extensions")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${activeTab === "extensions" ? "bg-purple-500 text-white" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`}
                >
                    <Zap size={16} /> Extensions
                </button>
            </div>

            {/* Tab Content */}
            <div className="p-6 md:p-8">
                {activeTab === "apps" && (
                    <div className="space-y-6 animate-in fade-in">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
                                    <Folder className="text-blue-400" /> File
                                    Manager (Nautilus)
                                </h4>
                                <p className="text-sm text-slate-300 mb-4">
                                    Mở bằng cách bấm biểu tượng Thư mục. Giao
                                    diện rất giống File Explorer của Windows.
                                </p>
                                <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 space-y-3 font-mono text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-slate-400">
                                            Hiện file ẩn (.file):
                                        </span>
                                        <span className="text-green-400">
                                            Ctrl + H
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-400">
                                            Nhập đường dẫn trực tiếp:
                                        </span>
                                        <span className="text-green-400">
                                            Ctrl + L
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-400">
                                            Đổi tên file:
                                        </span>
                                        <span className="text-green-400">
                                            F2
                                        </span>
                                    </div>
                                    <div className="flex justify-between border-t border-slate-800 pt-3">
                                        <span className="text-red-400">
                                            Xóa vĩnh viễn (Bỏ qua rác):
                                        </span>
                                        <span className="text-red-400">
                                            Shift + Delete
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-bold text-white text-lg mb-4">
                                    Các App tương đương Windows
                                </h4>
                                <table className="w-full text-sm text-left">
                                    <tbody>
                                        <tr className="border-b border-slate-700">
                                            <td className="py-2 text-slate-300 flex items-center gap-2">
                                                <Globe
                                                    size={16}
                                                    className="text-orange-400"
                                                />{" "}
                                                Firefox
                                            </td>
                                            <td className="py-2 text-slate-500">
                                                = Chrome / Edge
                                            </td>
                                        </tr>
                                        <tr className="border-b border-slate-700">
                                            <td className="py-2 text-slate-300 flex items-center gap-2">
                                                <FileText
                                                    size={16}
                                                    className="text-blue-400"
                                                />{" "}
                                                Text Editor
                                            </td>
                                            <td className="py-2 text-slate-500">
                                                = Notepad
                                            </td>
                                        </tr>
                                        <tr className="border-b border-slate-700">
                                            <td className="py-2 text-slate-300 flex items-center gap-2">
                                                <Settings
                                                    size={16}
                                                    className="text-slate-400"
                                                />{" "}
                                                Settings
                                            </td>
                                            <td className="py-2 text-slate-500">
                                                = Control Panel
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 text-slate-300 flex items-center gap-2">
                                                <Layout
                                                    size={16}
                                                    className="text-green-400"
                                                />{" "}
                                                LibreOffice
                                            </td>
                                            <td className="py-2 text-slate-500">
                                                = Microsoft Office
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "tweaks" && (
                    <div className="space-y-6 animate-in fade-in">
                        <h4 className="font-bold text-white text-lg flex items-center gap-2">
                            <Sliders className="text-blue-400" /> Tuỳ biến nâng
                            cao với GNOME Tweaks
                        </h4>
                        <p className="text-slate-300">
                            Mặc định GNOME khá "cứng nhắc" và giấu đi nút{" "}
                            <strong>Minimize/Maximize</strong> trên cửa sổ. Để
                            mở khóa toàn bộ sức mạnh tuỳ biến, bạn cần cài đặt{" "}
                            <code>gnome-tweaks</code>.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-900 border border-slate-700 p-5 rounded-xl">
                                <div className="font-bold text-slate-400 text-sm mb-2">
                                    Cách cài đặt qua Terminal:
                                </div>
                                <code className="block bg-black p-3 rounded-lg text-green-400 text-sm mb-4 border border-slate-800">
                                    sudo apt install gnome-tweaks
                                </code>
                                <div className="font-bold text-slate-400 text-sm mb-2">
                                    Những gì Tweaks làm được:
                                </div>
                                <ul className="text-sm space-y-2 text-slate-300">
                                    <li>✅ Thay font chữ toàn hệ thống</li>
                                    <li>✅ Thay đổi Theme, Icon pack</li>
                                    <li>
                                        ✅ Quản lý ứng dụng khởi động cùng máy
                                    </li>
                                    <li className="text-orange-400 font-bold">
                                        ✅ Bật lại nút Thu nhỏ / Phóng to cửa sổ
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-slate-900 border border-slate-700 p-5 rounded-xl flex flex-col justify-center items-center text-center">
                                <div className="flex gap-2 mb-6">
                                    {/* Fake Windows buttons */}
                                    <div className="bg-slate-800 border border-slate-600 rounded flex overflow-hidden">
                                        <div className="px-3 py-1 bg-slate-700/50 hover:bg-slate-600">
                                            <Minimize
                                                size={14}
                                                className="text-white"
                                            />
                                        </div>
                                        <div className="px-3 py-1 bg-slate-700/50 hover:bg-slate-600">
                                            <Maximize
                                                size={14}
                                                className="text-white"
                                            />
                                        </div>
                                        <div className="px-3 py-1 bg-red-500/80 hover:bg-red-500">
                                            <X
                                                size={14}
                                                className="text-white"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-400">
                                    Trong Tweaks, vào mục{" "}
                                    <strong>Window Titlebars</strong> → Bật{" "}
                                    <strong>Minimize</strong> và{" "}
                                    <strong>Maximize</strong> lên để có trải
                                    nghiệm giống Windows nhé.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "extensions" && (
                    <div className="space-y-6 animate-in fade-in">
                        <h4 className="font-bold text-white text-lg flex items-center gap-2">
                            <Zap className="text-purple-400" /> GNOME Extensions
                            (Tiện ích mở rộng)
                        </h4>
                        <p className="text-slate-300">
                            Giống như plugin cho Chrome, Extensions thêm tính
                            năng mới vào thẳng giao diện Desktop của bạn.
                        </p>

                        <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl">
                            <div className="font-bold text-slate-400 text-sm mb-2">
                                Cài đặt công cụ quản lý:
                            </div>
                            <code className="block bg-black p-3 rounded-lg text-green-400 text-sm border border-slate-800">
                                sudo apt install gnome-shell-extension-manager
                            </code>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl">
                                <div className="font-bold text-orange-400 mb-1">
                                    Dash to Dock
                                </div>
                                <p className="text-xs text-slate-400">
                                    Biến Dash thành một thanh Dock xịn xò giống
                                    y hệt macOS hoặc Windows 11.
                                </p>
                            </div>
                            <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl">
                                <div className="font-bold text-blue-400 mb-1">
                                    Clipboard Indicator
                                </div>
                                <p className="text-xs text-slate-400">
                                    Lưu lại lịch sử các lần bạn nhấn Copy
                                    (Ctrl+C). Rất tiện cho lập trình viên.
                                </p>
                            </div>
                            <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl">
                                <div className="font-bold text-green-400 mb-1">
                                    Blur my Shell
                                </div>
                                <p className="text-xs text-slate-400">
                                    Thêm hiệu ứng làm mờ (Blur) tuyệt đẹp kiểu
                                    kính mờ cho Top Bar và Overview.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// Quiz Data & Component
const questions = [
    {
        id: 1,
        question:
            "Phím tắt quan trọng nhất trong GNOME dùng để mở 'Activities Overview' (nơi tìm ứng dụng, xem cửa sổ mở) là gì?",
        options: [
            "Phím Ctrl",
            "Phím Alt",
            "Phím Super (phím Windows / Command)",
            "Phím Shift",
        ],
        correct: 2,
        explanation:
            "Phím Super (hay phím Windows trên bàn phím thường) là trung tâm điều hướng của GNOME. Nhấn nó để làm hầu hết mọi thứ!",
    },
    {
        id: 2,
        question:
            "Điểm khác biệt RẤT LỚN của Desktop (Màn hình nền) trên GNOME so với Windows là gì?",
        options: [
            "GNOME không cho phép đổi hình nền.",
            "Theo mặc định, Desktop của GNOME trống trơn và KHÔNG chứa các icon lối tắt (shortcuts).",
            "Desktop GNOME luôn có màu đen trắng.",
            "Desktop GNOME luôn hiển thị mã code chạy liên tục.",
        ],
        correct: 1,
        explanation:
            "Triết lý của GNOME là sự tập trung. Họ loại bỏ icon trên desktop để người dùng dùng chức năng Tìm kiếm (Search) hoặc Dash mở app nhanh hơn, gọn gàng hơn.",
    },
    {
        id: 3,
        question: "Tổ hợp phím nào giúp bạn mở Terminal nhanh nhất?",
        options: [
            "Ctrl + Shift + T",
            "Alt + F4",
            "Ctrl + Alt + T",
            "Super + T",
        ],
        correct: 2,
        explanation:
            "Ctrl + Alt + T là phím tắt 'sinh tồn' trên Ubuntu. Bạn sẽ dùng nó cực kỳ nhiều để mở cửa sổ dòng lệnh.",
    },
    {
        id: 4,
        question: "GNOME Tweaks là công cụ dùng để làm gì?",
        options: [
            "Dùng để tăng tốc độ mạng Internet.",
            "Dùng để diệt virus cho hệ thống.",
            "Dùng để thay đổi chuyên sâu giao diện: đổi font chữ, đổi theme, bật lại nút thu nhỏ/phóng to cửa sổ.",
            "Dùng để lập trình ứng dụng.",
        ],
        correct: 2,
        explanation:
            "Tweaks (tinh chỉnh) là phần mềm bắt buộc phải có nếu bạn muốn 'vọc vạch' giao diện GNOME theo ý riêng của mình.",
    },
    {
        id: 5,
        question:
            "Trong File Manager của Ubuntu (Nautilus), phím tắt nào dùng để HIỆN CÁC FILE ẨN?",
        options: [
            "Ctrl + H (Hidden)",
            "Ctrl + V (View)",
            "Alt + S (Show)",
            "F5",
        ],
        correct: 0,
        explanation:
            "Ctrl + H sẽ hiển thị các file/folder ẩn (trong Linux, file ẩn là các file có tên bắt đầu bằng dấu chấm `.`).",
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
                    Hoàn thành!
                </h4>
                <p className="text-slate-400 mb-6">
                    Bạn trả lời đúng{" "}
                    <strong className="text-orange-500">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu hỏi về GNOME.
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
                <span className="text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full">
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
                        className={`p-4 rounded-xl text-sm mb-6 flex gap-3 ${selected === q.correct ? "bg-green-500/10 border border-green-500/20 text-green-300" : "bg-orange-500/10 border border-orange-500/20 text-orange-300"}`}
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
