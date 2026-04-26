import { useEffect, useMemo, useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    BookCheck,
    BookMarked,
    BookOpen,
    CheckCircle2,
    Circle,
    Compass,
    Home,
} from "lucide-react";
import {
    HashRouter,
    Link,
    Navigate,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import LessonIntro from "./pages/Phan-1.1.jsx";
import LessonVersions from "./pages/Phan-1.2.jsx";
import LessonInstallUbuntu from "./pages/Phan-1.3.jsx";
import LessonGnomeIntro from "./pages/Phan-1.4.jsx";
import LessonFilesystem from "./pages/Phan-1.5.jsx";
import LessonTerminalIntro from "./pages/Phan-2.1.jsx";
import LessonNavigation from "./pages/Phan-2.2.jsx";
import LessonFileManagement from "./pages/Phan-2.3.jsx";
import LessonFileViewing from "./pages/Phan-2.4.jsx";
import LessonSearch from "./pages/Phan-2.5.jsx";
import LessonWildcardRedirection from "./pages/Phan-2.6.jsx";
import LessonHistoryShortcuts from "./pages/Phan-2.7.jsx";
import LessonAptIntro from "./pages/Phan-3.1.jsx";
import LessonSnapFlatpak from "./pages/Phan-3.2.jsx";
import LessonDebInstall from "./pages/Phan-3.3.jsx";
import LessonBuildSource from "./pages/Phan-3.4.jsx";
import LessonPpaManagement from "./pages/Phan-3.5.jsx";
import LessonUsersGroups from "./pages/Phan-4.1.jsx";
import LessonPermissions from "./pages/Phan-4.2.jsx";
import LessonSudoRoot from "./pages/Phan-4.3.jsx";
import LessonPasswordManagement from "./pages/Phan-4.4.jsx";
import LessonLoginSessions from "./pages/Phan-4.5.jsx";
import LessonProcessOverview from "./pages/Phan-5.1.jsx";
import LessonProcessControl from "./pages/Phan-5.2.jsx";
import LessonBackgroundJobs from "./pages/Phan-5.3.jsx";
import LessonResourceMonitoring from "./pages/Phan-5.4.jsx";
import LessonSystemdServices from "./pages/Phan-5.5.jsx";
import LessonSystemLogs from "./pages/Phan-5.6.jsx";
import LessonNetworkConfig from "./pages/Phan-6.1.jsx";
import LessonNetworkDiagnostics from "./pages/Phan-6.2.jsx";
import LessonDownloadTools from "./pages/Phan-6.3.jsx";
import LessonSshRemoteAccess from "./pages/Phan-6.4.jsx";
import LessonUfwFirewall from "./pages/Phan-6.5.jsx";
import LessonFileSharing from "./pages/Phan-6.6.jsx";
import LessonNanoEditor from "./pages/Phan-7.1.jsx";
import LessonVimEditor from "./pages/Phan-7.2.jsx";
import LessonTextProcessing from "./pages/Phan-7.3.jsx";
import LessonDiffPatch from "./pages/Phan-7.4.jsx";
import LessonBashIntro from "./pages/Phan-8.1.jsx";
import LessonBashVariables from "./pages/Phan-8.2.jsx";
import LessonBashConditions from "./pages/Phan-8.3.jsx";
import LessonBashLoops from "./pages/Phan-8.4.jsx";
import LessonBashFunctions from "./pages/Phan-8.5.jsx";
import LessonBashArgsErrors from "./pages/Phan-8.6.jsx";
import LessonCronJobs from "./pages/Phan-8.7.jsx";
import LessonDiskPartitioning from "./pages/Phan-9.1.jsx";
import LessonDiskMounting from "./pages/Phan-9.2.jsx";
import LessonLvmBasics from "./pages/Phan-9.3.jsx";
import LessonCompressionTools from "./pages/Phan-9.4.jsx";
import LessonDiskRepair from "./pages/Phan-9.5.jsx";
import LessonSecurityUpdates from "./pages/Phan-10.1.jsx";
import LessonSshKeys from "./pages/Phan-10.2.jsx";
import LessonUfwFail2Ban from "./pages/Phan-10.3.jsx";
import LessonOpenPorts from "./pages/Phan-10.4.jsx";
import LessonAppArmor from "./pages/Phan-10.5.jsx";
import LessonRuntimeSetup from "./pages/Phan-11.1.jsx";
import LessonDockerCompose from "./pages/Phan-11.2.jsx";
import LessonGitBasics from "./pages/Phan-11.3.jsx";
import LessonVirtualEnvironments from "./pages/Phan-11.4.jsx";
import LessonVsCodeTooling from "./pages/Phan-11.5.jsx";

const lessons = [
    {
        path: "/phan-1-1",
        code: "1.1",
        title: "Linux là gì? Ubuntu là gì?",
        description:
            "Làm quen với Linux kernel, Ubuntu distro và các khác biệt cốt lõi so với Windows.",
        bullets: [
            "Kernel, distro, hệ điều hành",
            "Sudo, file system, cách cài phần mềm",
        ],
        Component: LessonIntro,
    },
    {
        path: "/phan-1-2",
        code: "1.2",
        title: "Các phiên bản Ubuntu phổ biến",
        description:
            "Hiểu LTS, quy tắc đặt tên, Desktop vs Server và cách chọn bản phù hợp.",
        bullets: [
            "Cách đọc Ubuntu 24.04, 22.04",
            "Khi nào chọn Desktop, Server, Lubuntu, Xubuntu",
        ],
        Component: LessonVersions,
    },
    {
        path: "/phan-1-3",
        code: "1.3",
        title: "Thực hành cài đặt Ubuntu",
        description:
            "Đi qua 3 cách cài Ubuntu phổ biến: WSL2, VirtualBox và Dual Boot, kèm so sánh và quiz.",
        bullets: [
            "Chọn giữa WSL2, máy ảo và máy thật",
            "Làm theo hướng dẫn cài đặt chi tiết từng cách",
        ],
        Component: LessonInstallUbuntu,
    },
    {
        path: "/phan-1-4",
        code: "1.4",
        title: "Giao diện GNOME",
        description:
            "Làm quen desktop Ubuntu, workspace, phím tắt quan trọng và các tuỳ biến GNOME cơ bản.",
        bullets: [
            "Hiểu bố cục desktop và Activities Overview",
            "Nắm phím tắt, workspace và công cụ tuỳ biến",
        ],
        Component: LessonGnomeIntro,
    },
    {
        path: "/phan-1-5",
        code: "1.5",
        title: "Cấu trúc hệ thống file Linux",
        description:
            "Hiểu cây thư mục Linux, các đường dẫn quan trọng, ký hiệu đặc biệt và cách định vị bằng terminal.",
        bullets: [
            "Phân biệt root, home, etc, var, usr và các thư mục cốt lõi",
            "Luyện absolute path, relative path và ký hiệu ~/./..",
        ],
        Component: LessonFilesystem,
    },
    {
        path: "/phan-2-1",
        code: "2.1",
        title: "Terminal là gì?",
        description:
            "Làm quen Terminal, Shell, Bash, prompt và các thao tác nền tảng trước khi học lệnh thực chiến.",
        bullets: [
            "Phân biệt Terminal, Shell và Bash",
            "Hiểu prompt, cú pháp lệnh và mẹo thao tác cơ bản",
        ],
        Component: LessonTerminalIntro,
    },
    {
        path: "/phan-2-2",
        code: "2.2",
        title: "Điều hướng file và thư mục",
        description:
            "Thực hành di chuyển trong Linux với các lệnh cốt lõi như pwd, ls, cd và tree.",
        bullets: [
            "Dùng pwd, ls, cd để xác định vị trí và di chuyển",
            "Hiểu tree, file ẩn và mẹo điều hướng nhanh",
        ],
        Component: LessonNavigation,
    },
    {
        path: "/phan-2-3",
        code: "2.3",
        title: "Quản lý file và thư mục",
        description:
            "Thực hành tạo, sao chép, di chuyển, đổi tên và xóa file hoặc thư mục bằng terminal.",
        bullets: [
            "Dùng touch, mkdir, cp, mv và rm đúng ngữ cảnh",
            "Hiểu wildcard, -r và các thao tác xóa an toàn hơn",
        ],
        Component: LessonFileManagement,
    },
    {
        path: "/phan-2-4",
        code: "2.4",
        title: "Xem nội dung file và log",
        description:
            "Học cách đọc file ngắn, duyệt file dài và theo dõi log realtime bằng các lệnh nền tảng.",
        bullets: [
            "Dùng cat, less, more, head và tail đúng tình huống",
            "Theo dõi log với tail -f và kết hợp pipe để lọc dữ liệu",
        ],
        Component: LessonFileViewing,
    },
    {
        path: "/phan-2-5",
        code: "2.5",
        title: "Tìm kiếm file và nội dung",
        description:
            "Làm chủ việc tìm file và lọc nội dung text với find, locate, grep và các lệnh kết hợp.",
        bullets: [
            "Dùng find, locate để truy vết file theo tên và thuộc tính",
            "Dùng grep, pipe và -exec để tìm nội dung nhanh hơn",
        ],
        Component: LessonSearch,
    },
    {
        path: "/phan-2-6",
        code: "2.6",
        title: "Wildcard và redirection",
        description:
            "Làm quen ký tự đại diện, luồng dữ liệu chuẩn và cách nối nhiều lệnh bằng pipe.",
        bullets: [
            "Dùng wildcard để chọn nhóm file nhanh hơn",
            "Hiểu >, >>, <, 2> và pipe để điều hướng dữ liệu",
        ],
        Component: LessonWildcardRedirection,
    },
    {
        path: "/phan-2-7",
        code: "2.7",
        title: "Lịch sử lệnh và phím tắt",
        description:
            "Tăng tốc làm việc với terminal bằng history, reverse search và các phím tắt chỉnh sửa dòng lệnh.",
        bullets: [
            "Dùng history, !!, !n và Ctrl+R để gọi lại lệnh cũ",
            "Nắm Ctrl+A/E/U/K/W/Y và các phím kiểm soát terminal",
        ],
        Component: LessonHistoryShortcuts,
    },
    {
        path: "/phan-3-1",
        code: "3.1",
        title: "Quản lý phần mềm với APT",
        description:
            "Làm quen hệ thống quản lý gói của Ubuntu để tìm, cài, nâng cấp, gỡ và dọn phần mềm an toàn.",
        bullets: [
            "Hiểu apt update, upgrade, install, remove, purge và autoremove",
            "Dùng apt search và apt show để tra cứu gói phần mềm",
        ],
        Component: LessonAptIntro,
    },
    {
        path: "/phan-3-2",
        code: "3.2",
        title: "Snap và Flatpak",
        description:
            "Tìm hiểu thế hệ package mới với sandbox, dependency riêng và cách cài ứng dụng đa distro.",
        bullets: [
            "So sánh Snap, Flatpak và APT theo mục tiêu sử dụng",
            "Hiểu sandbox, --classic và cách dọn runtime thừa",
        ],
        Component: LessonSnapFlatpak,
    },
    {
        path: "/phan-3-3",
        code: "3.3",
        title: "Cài đặt phần mềm từ file .deb",
        description:
            "Học cách kiểm tra và cài file .deb đúng cách, tránh lỗi dependency và phân biệt apt với dpkg.",
        bullets: [
            "Dùng apt install ./file.deb an toàn hơn dpkg -i",
            "Biết cách soi metadata, contents và sửa lỗi bằng apt install -f",
        ],
        Component: LessonDebInstall,
    },
    {
        path: "/phan-3-4",
        code: "3.4",
        title: "Cài đặt phần mềm từ source code",
        description:
            "Hiểu quy trình build thủ công từ mã nguồn với configure, make và cách cài đặt có thể quản lý được.",
        bullets: [
            "Nắm quy trình git clone, configure, make và install",
            "Ưu tiên checkinstall để dễ gỡ cài đặt về sau",
        ],
        Component: LessonBuildSource,
    },
    {
        path: "/phan-3-5",
        code: "3.5",
        title: "Quản lý PPA",
        description:
            "Học cách thêm, sử dụng và gỡ PPA an toàn để nhận phiên bản phần mềm mới hơn kho Ubuntu mặc định.",
        bullets: [
            "Dùng add-apt-repository để mở rộng nguồn phần mềm",
            "Dùng ppa-purge để gỡ PPA và hạ cấp gói đúng cách",
        ],
        Component: LessonPpaManagement,
    },
    {
        path: "/phan-4-1",
        code: "4.1",
        title: "Quản lý User và Group",
        description:
            "Làm quen mô hình đa người dùng của Linux, các file hệ thống liên quan và cách tạo, sửa, xóa tài khoản an toàn.",
        bullets: [
            "Hiểu root, system user, regular user và các file /etc liên quan",
            "Dùng useradd, usermod, userdel, groupadd và tránh bẫy -G",
        ],
        Component: LessonUsersGroups,
    },
    {
        path: "/phan-4-2",
        code: "4.2",
        title: "Hệ thống phân quyền Linux",
        description:
            "Nắm cách Linux kiểm soát quyền truy cập file/thư mục qua rwx, chmod, chown và các giá trị octal.",
        bullets: [
            "Đọc hiểu chuỗi permission trong ls -l",
            "Thực hành chmod, chown và phân biệt quyền trên file với thư mục",
        ],
        Component: LessonPermissions,
    },
    {
        path: "/phan-4-3",
        code: "4.3",
        title: "Lệnh sudo và tài khoản root",
        description:
            "Hiểu quyền tối cao của root, cách sudo hoạt động, cấu hình sudoers và các tình huống cấp quyền an toàn.",
        bullets: [
            "Phân biệt root trực tiếp, sudo, sudo -i và sudo -s",
            "Đọc sudoers, dùng visudo và quản lý quyền sudo theo user hoặc group",
        ],
        Component: LessonSudoRoot,
    },
    {
        path: "/phan-4-4",
        code: "4.4",
        title: "Quản lý mật khẩu trong Linux",
        description:
            "Học cách đổi mật khẩu, kiểm soát tuổi thọ mật khẩu và hiểu policy xác thực của hệ thống Linux.",
        bullets: [
            "Dùng passwd, chage và đọc thông tin tài khoản liên quan đến mật khẩu",
            "Hiểu expiry, password aging và vai trò của PAM policy",
        ],
        Component: LessonPasswordManagement,
    },
    {
        path: "/phan-4-5",
        code: "4.5",
        title: "Xem và quản lý phiên đăng nhập",
        description:
            "Theo dõi user đang online, lịch sử đăng nhập và cách kiểm soát các session đang hoạt động trên hệ thống.",
        bullets: [
            "Dùng who, w, last và loginctl để kiểm tra session",
            "Biết cách logout, khóa hoặc kết thúc phiên của user khi cần",
        ],
        Component: LessonLoginSessions,
    },
    {
        path: "/phan-5-1",
        code: "5.1",
        title: "Xem tiến trình đang chạy",
        description:
            "Hiểu process là gì và dùng ps, top, htop, pgrep, pstree để quan sát hệ thống đang chạy ra sao.",
        bullets: [
            "Đọc PID, PPID, state và cây tiến trình",
            "Biết cách soi process ngốn CPU hoặc RAM",
        ],
        Component: LessonProcessOverview,
    },
    {
        path: "/phan-5-2",
        code: "5.2",
        title: "Quản lý tiến trình",
        description:
            "Làm chủ signal, kill, pkill, killall, nice, renice và quản lý job để can thiệp process an toàn.",
        bullets: [
            "Ưu tiên SIGTERM trước khi dùng SIGKILL",
            "Điều chỉnh priority và xử lý foreground/background job",
        ],
        Component: LessonProcessControl,
    },
    {
        path: "/phan-5-3",
        code: "5.3",
        title: "Tiến trình nền và phiên làm việc bền vững",
        description:
            "Giữ job sống khi mất SSH bằng nohup, disown, screen và tmux, đồng thời tổ chức workspace terminal chuyên nghiệp hơn.",
        bullets: [
            "Phân biệt background job với session bền vững",
            "Dùng tmux hoặc screen để reconnect an toàn",
        ],
        Component: LessonBackgroundJobs,
    },
    {
        path: "/phan-5-4",
        code: "5.4",
        title: "Kiểm tra tài nguyên hệ thống",
        description:
            "Theo dõi CPU, RAM, disk và các điểm nghẽn bằng free, df, du, vmstat, iostat, sar và công cụ trực quan.",
        bullets: [
            "Đọc nhanh CPU, memory, disk space và disk usage",
            "Biết cách truy nguyên bottleneck tài nguyên",
        ],
        Component: LessonResourceMonitoring,
    },
    {
        path: "/phan-5-5",
        code: "5.5",
        title: "Quản lý dịch vụ với systemd",
        description:
            "Học cách điều khiển service, xem trạng thái, đọc log và viết custom unit file bằng systemctl và journalctl.",
        bullets: [
            "start, stop, restart, reload, enable, mask",
            "Đọc unit file và quản lý service khi boot",
        ],
        Component: LessonSystemdServices,
    },
    {
        path: "/phan-5-6",
        code: "5.6",
        title: "Xem log hệ thống",
        description:
            "Phân tích log Ubuntu với /var/log, auth.log, journalctl, dmesg, logrotate và các workflow xử lý sự cố thực tế.",
        bullets: [
            "Đọc, lọc và truy vết log phục vụ troubleshooting",
            "Hiểu journald, kernel log và xoay vòng log",
        ],
        Component: LessonSystemLogs,
    },
    {
        path: "/phan-6-1",
        code: "6.1",
        title: "Kiểm tra cấu hình mạng",
        description:
            "Nắm các lệnh nền tảng để xem interface, IP, route, DNS, hostname và trạng thái kết nối của máy Ubuntu.",
        bullets: [
            "Dùng ip, hostname, nmcli và các lệnh mạng cơ bản",
            "Hiểu interface, địa chỉ IP, default gateway và DNS",
        ],
        Component: LessonNetworkConfig,
    },
    {
        path: "/phan-6-2",
        code: "6.2",
        title: "Kiểm tra kết nối mạng",
        description:
            "Thực hành debug mạng với ping, traceroute, ss, netstat, nmap và các bước xác định lỗi kết nối.",
        bullets: [
            "Kiểm tra reachability, route và port đang lắng nghe",
            "Làm quen workflow chẩn đoán sự cố mạng thực tế",
        ],
        Component: LessonNetworkDiagnostics,
    },
    {
        path: "/phan-6-3",
        code: "6.3",
        title: "Tải file từ internet: wget, curl",
        description:
            "Học cách tải file, gọi HTTP API, làm việc với header, cookie và kiểm tra dữ liệu tải về bằng wget và curl.",
        bullets: [
            "Phân biệt wget để tải file và curl để thao tác HTTP/API",
            "Dùng header, cookie, redirect và checksum đúng ngữ cảnh",
        ],
        Component: LessonDownloadTools,
    },
    {
        path: "/phan-6-4",
        code: "6.4",
        title: "SSH kết nối từ xa an toàn",
        description:
            "Làm việc với SSH, key pair, SCP, tunnel và các thực hành bảo mật khi truy cập máy từ xa.",
        bullets: [
            "Kết nối SSH bằng password hoặc SSH key",
            "Hiểu SCP, port forwarding và hardening cơ bản",
        ],
        Component: LessonSshRemoteAccess,
    },
    {
        path: "/phan-6-5",
        code: "6.5",
        title: "Cấu hình tường lửa với UFW",
        description:
            "Thiết lập firewall Ubuntu an toàn với UFW, từ default policy đến allow, deny, logging và xử lý lỗi SSH.",
        bullets: [
            "Bật UFW an toàn và mở đúng port cần thiết",
            "Quản lý rule, app profile, log và tránh tự khóa SSH",
        ],
        Component: LessonUfwFirewall,
    },
    {
        path: "/phan-6-6",
        code: "6.6",
        title: "Chia sẻ file qua mạng",
        description:
            "Học SCP, Rsync và Samba để copy file, đồng bộ thư mục và chia sẻ dữ liệu trong mạng LAN.",
        bullets: [
            "Chọn đúng giữa SCP, Rsync và Samba theo nhu cầu",
            "Thiết lập backup, network share và mount CIFS cơ bản",
        ],
        Component: LessonFileSharing,
    },
    {
        path: "/phan-7-1",
        code: "7.1",
        title: "Nano editor cho người mới",
        description:
            "Làm quen Nano để mở, chỉnh sửa, tìm kiếm và lưu file nhanh trong terminal với bộ phím tắt dễ nhớ.",
        bullets: [
            "Mở, sửa, lưu và thoát file bằng Nano",
            "Dùng tìm kiếm, thay thế và các phím tắt cơ bản",
        ],
        Component: LessonNanoEditor,
    },
    {
        path: "/phan-7-2",
        code: "7.2",
        title: "Vim editor mạnh mẽ",
        description:
            "Học các mode quan trọng của Vim, cách di chuyển, chỉnh sửa, lưu file và xây nền để dùng editor mạnh hơn về sau.",
        bullets: [
            "Hiểu Normal, Insert, Visual và Command mode",
            "Thực hành di chuyển, sửa nội dung và lưu file trong Vim",
        ],
        Component: LessonVimEditor,
    },
    {
        path: "/phan-7-3",
        code: "7.3",
        title: "Xử lý văn bản với sed, awk, cut, sort, uniq",
        description:
            "Thực hành pipeline xử lý text trong terminal để lọc, cắt cột, sắp xếp, đếm trùng lặp và biến đổi dữ liệu hàng loạt.",
        bullets: [
            "Kết hợp cut, sort, uniq và grep để lọc dữ liệu",
            "Dùng sed, awk để thay thế, tách cột và xử lý text nâng cao",
        ],
        Component: LessonTextProcessing,
    },
    {
        path: "/phan-7-4",
        code: "7.4",
        title: "So sánh file với diff và patch",
        description:
            "Học cách so sánh khác biệt giữa file, tạo patch và áp dụng patch để cập nhật nội dung an toàn hơn.",
        bullets: [
            "Dùng diff để xem thay đổi giữa hai file hoặc thư mục",
            "Tạo và áp dụng patch trong workflow chỉnh sửa văn bản",
        ],
        Component: LessonDiffPatch,
    },
    {
        path: "/phan-8-1",
        code: "8.1",
        title: "Bash Script là gì? Tạo script đầu tiên",
        description:
            "Làm quen Bash script, cấu trúc file script, shebang, quyền thực thi và cách chạy script đầu tiên.",
        bullets: [
            "Hiểu shebang, chmod +x và cách thực thi script",
            "Biết khi nào nên chuyển từ lệnh tay sang script tự động hóa",
        ],
        Component: LessonBashIntro,
    },
    {
        path: "/phan-8-2",
        code: "8.2",
        title: "Biến, kiểu dữ liệu và nhập liệu người dùng",
        description:
            "Học cách khai báo biến, làm việc với dữ liệu cơ bản và nhận input từ người dùng trong Bash.",
        bullets: [
            "Dùng biến, read và mở rộng giá trị trong script",
            "Kiểm tra input và tổ chức dữ liệu đầu vào an toàn hơn",
        ],
        Component: LessonBashVariables,
    },
    {
        path: "/phan-8-3",
        code: "8.3",
        title: "Câu lệnh điều kiện if, else, case",
        description:
            "Cho script khả năng ra quyết định bằng so sánh điều kiện, rẽ nhánh logic và xử lý nhiều trường hợp.",
        bullets: [
            "Dùng if, elif, else để kiểm tra điều kiện",
            "Dùng case cho menu lệnh và nhánh xử lý rõ ràng hơn",
        ],
        Component: LessonBashConditions,
    },
    {
        path: "/phan-8-4",
        code: "8.4",
        title: "Vòng lặp Bash: for, while, until",
        description:
            "Tự động hóa tác vụ lặp lại với các kiểu vòng lặp phổ biến và cách kiểm soát luồng chạy trong Bash.",
        bullets: [
            "Dùng for, while, until đúng ngữ cảnh",
            "Lặp qua danh sách, file và các tác vụ hệ thống hàng loạt",
        ],
        Component: LessonBashLoops,
    },
    {
        path: "/phan-8-5",
        code: "8.5",
        title: "Hàm function trong Bash",
        description:
            "Tách script thành các hàm để tái sử dụng, dễ bảo trì hơn và tổ chức logic rõ ràng hơn.",
        bullets: [
            "Định nghĩa và gọi function trong Bash",
            "Chia nhỏ script để tái sử dụng và debug thuận tiện hơn",
        ],
        Component: LessonBashFunctions,
    },
    {
        path: "/phan-8-6",
        code: "8.6",
        title: "Xử lý tham số và lỗi trong script",
        description:
            "Làm việc với tham số dòng lệnh, mã thoát và các kỹ thuật xử lý lỗi để script chạy ổn định hơn.",
        bullets: [
            "Đọc tham số với $1, $@ và kiểm tra input đầu vào",
            "Dùng exit code, validation và thông báo lỗi rõ ràng",
        ],
        Component: LessonBashArgsErrors,
    },
    {
        path: "/phan-8-7",
        code: "8.7",
        title: "Cron job: Tự động hóa theo lịch",
        description:
            "Học cách lập lịch chạy script định kỳ bằng cron để tự động hóa backup, dọn dẹp và tác vụ hệ thống.",
        bullets: [
            "Viết biểu thức cron và quản lý crontab",
            "Lập lịch script an toàn, có log và dễ kiểm tra lỗi",
        ],
        Component: LessonCronJobs,
    },
    {
        path: "/phan-9-1",
        code: "9.1",
        title: "Phân vùng ổ đĩa: fdisk, parted, lsblk",
        description:
            "Làm quen cách xem cấu trúc ổ đĩa, tạo phân vùng mới và hiểu bố cục lưu trữ trên Linux.",
        bullets: [
            "Dùng lsblk để đọc nhanh thiết bị, partition và mountpoint",
            "Phân biệt vai trò của fdisk và parted khi chia ổ đĩa",
        ],
        Component: LessonDiskPartitioning,
    },
    {
        path: "/phan-9-2",
        code: "9.2",
        title: "Format và mount ổ đĩa",
        description:
            "Học cách tạo filesystem, mount hoặc umount thiết bị và cấu hình tự mount với fstab.",
        bullets: [
            "Dùng mkfs, mount và umount đúng quy trình",
            "Cấu hình fstab an toàn để ổ đĩa tự mount khi khởi động",
        ],
        Component: LessonDiskMounting,
    },
    {
        path: "/phan-9-3",
        code: "9.3",
        title: "LVM cơ bản",
        description:
            "Hiểu Logical Volume Manager để quản lý volume linh hoạt hơn so với phân vùng tĩnh truyền thống.",
        bullets: [
            "Nắm PV, VG, LV và quy trình tạo volume cơ bản",
            "Biết khi nào nên dùng LVM để mở rộng hoặc tổ chức lưu trữ",
        ],
        Component: LessonLvmBasics,
    },
    {
        path: "/phan-9-4",
        code: "9.4",
        title: "Nén và giải nén file",
        description:
            "Làm chủ các công cụ nén phổ biến trên Linux để đóng gói, truyền tải và lưu trữ dữ liệu hiệu quả hơn.",
        bullets: [
            "Dùng tar, gzip, bzip2, xz và zip đúng mục đích",
            "Biết cách nén thư mục, giải nén và kiểm tra nội dung archive",
        ],
        Component: LessonCompressionTools,
    },
    {
        path: "/phan-9-5",
        code: "9.5",
        title: "Kiểm tra và sửa lỗi ổ đĩa",
        description:
            "Theo dõi sức khỏe ổ đĩa và xử lý lỗi filesystem với các công cụ chẩn đoán và sửa lỗi phổ biến.",
        bullets: [
            "Dùng smartctl để xem tình trạng phần cứng lưu trữ",
            "Dùng fsck, badblocks và các bước kiểm tra ổ đĩa an toàn",
        ],
        Component: LessonDiskRepair,
    },
    {
        path: "/phan-10-1",
        code: "10.1",
        title: "Cập nhật hệ thống và vá lỗi bảo mật",
        description:
            "Hiểu quy trình cập nhật Ubuntu an toàn với apt, bản vá bảo mật, reboot khi cần và xử lý lỗi APT phổ biến.",
        bullets: [
            "Phân biệt apt update, upgrade và full-upgrade",
            "Kiểm tra bản vá, reboot requirement và lỗi APT thường gặp",
        ],
        Component: LessonSecurityUpdates,
    },
    {
        path: "/phan-10-2",
        code: "10.2",
        title: "Quản lý khóa SSH",
        description:
            "Làm chủ SSH key pair, authorized_keys, ssh-copy-id và các quyền file bắt buộc để đăng nhập an toàn hơn mật khẩu.",
        bullets: [
            "Tạo và triển khai SSH key đúng cách",
            "Cấu hình ~/.ssh/config và sửa lỗi permission phổ biến",
        ],
        Component: LessonSshKeys,
    },
    {
        path: "/phan-10-3",
        code: "10.3",
        title: "Cấu hình UFW và Fail2Ban",
        description:
            "Thiết lập firewall và chống brute-force cho Ubuntu Server bằng UFW và Fail2Ban theo cách an toàn.",
        bullets: [
            "Mở đúng port, bật UFW không khóa SSH",
            "Cài Fail2Ban để tự động ban IP brute-force",
        ],
        Component: LessonUfwFail2Ban,
    },
    {
        path: "/phan-10-4",
        code: "10.4",
        title: "Kiểm tra cổng mở và dịch vụ lắng nghe",
        description:
            "Kiểm tra bề mặt tấn công của server bằng ss, lsof, systemctl, ufw và nmap để biết dịch vụ nào đang public.",
        bullets: [
            "Phân biệt 127.0.0.1 với 0.0.0.0 khi service listen",
            "Dùng ss, lsof và nmap để rà soát port đang mở",
        ],
        Component: LessonOpenPorts,
    },
    {
        path: "/phan-10-5",
        code: "10.5",
        title: "AppArmor cơ bản",
        description:
            "Làm quen AppArmor, profile, mode enforce hoặc complain và cách đọc log để debug ứng dụng bị chặn quyền.",
        bullets: [
            "Phân biệt AppArmor với firewall mạng như UFW",
            "Đọc DENIED log và chỉnh profile an toàn hơn",
        ],
        Component: LessonAppArmor,
    },
    {
        path: "/phan-11-1",
        code: "11.1",
        title: "Cài đặt và quản lý Python, Node.js, Java",
        description:
            "Thiết lập các runtime lập trình phổ biến trên Ubuntu và chọn đúng công cụ quản lý version cho từng hệ sinh thái.",
        bullets: [
            "Cài Python, Node.js, Java theo cách phù hợp",
            "Hiểu venv, nvm và update-alternatives để quản lý môi trường",
        ],
        Component: LessonRuntimeSetup,
    },
    {
        path: "/phan-11-2",
        code: "11.2",
        title: "Cài đặt Docker và Docker Compose",
        description:
            "Làm quen container trên Ubuntu, cài Docker Engine từ nguồn chính thức và chạy các container đầu tiên an toàn.",
        bullets: [
            "Cài Docker Engine và kiểm tra docker compose",
            "Chạy container mẫu và hiểu rủi ro của group docker",
        ],
        Component: LessonDockerCompose,
    },
    {
        path: "/phan-11-3",
        code: "11.3",
        title: "Cài đặt Git và cấu hình cơ bản",
        description:
            "Thiết lập Git trên Ubuntu, cấu hình danh tính, khởi tạo repository và làm quen các lệnh commit nền tảng.",
        bullets: [
            "Cấu hình user.name, user.email và git init",
            "Dùng git add, commit, log và tránh commit nhầm dữ liệu nhạy cảm",
        ],
        Component: LessonGitBasics,
    },
    {
        path: "/phan-11-4",
        code: "11.4",
        title: "Quản lý môi trường ảo",
        description:
            "Tách môi trường theo từng project bằng venv, virtualenv, nvm và pyenv để tránh xung đột version và dependency.",
        bullets: [
            "Dùng venv hoặc virtualenv cho Python project",
            "Quản lý nhiều version bằng nvm, pyenv và khi cần kết hợp chúng",
        ],
        Component: LessonVirtualEnvironments,
    },
    {
        path: "/phan-11-5",
        code: "11.5",
        title: "Cài đặt VS Code và công cụ lập trình",
        description:
            "Hoàn thiện workstation phát triển trên Ubuntu với VS Code, extension cần thiết và các công cụ làm việc hằng ngày.",
        bullets: [
            "Cài VS Code bằng .deb, snap hoặc APT repository",
            "Thêm extension và tooling cho Python, Node.js, Java, Docker, Git",
        ],
        Component: LessonVsCodeTooling,
    },
];

const LESSON_STATUS_KEY = "ubuntu-course-lesson-status";

function readLessonStatuses() {
    if (typeof window === "undefined") return {};

    try {
        const raw = window.localStorage.getItem(LESSON_STATUS_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch {
        return {};
    }
}

function lessonStatusLabel(status) {
    if (status === "saved") return "Đang đánh dấu";
    if (status === "done") return "Đã hoàn thành";
    return "Chưa đánh dấu";
}

function lessonStatusClasses(status) {
    if (status === "saved") {
        return "border-amber-500/30 bg-amber-500/10 text-amber-300";
    }

    if (status === "done") {
        return "border-emerald-500/30 bg-emerald-500/10 text-emerald-300";
    }

    return "border-slate-700 bg-slate-900 text-slate-400";
}

function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
}

function HomePage({ lessonStatuses, onToggleSaved, onToggleDone }) {
    const stats = useMemo(() => {
        const values = Object.values(lessonStatuses);
        const saved = values.filter((status) => status === "saved").length;
        const done = values.filter((status) => status === "done").length;
        const percent = lessons.length
            ? Math.round((done / lessons.length) * 100)
            : 0;

        return { saved, done, percent };
    }, [lessonStatuses]);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <header className="border-b border-slate-800 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.16),_transparent_42%),linear-gradient(180deg,_rgba(15,23,42,0.98),_rgba(2,6,23,1))]">
                <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
                    <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-300">
                        <BookOpen size={16} />
                        Khóa học Linux/Ubuntu
                    </div>

                    <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.15fr),360px] lg:items-end">
                        <div className="space-y-4">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                                Trang mục lục
                            </p>
                            <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white md:text-6xl">
                                Chọn để học
                            </h1>
                        </div>

                        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/25">
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                                <Compass
                                    size={16}
                                    className="text-orange-300"
                                />
                                Điều hướng
                            </div>
                            <div className="mt-4 space-y-3 text-sm text-slate-400">
                                <p>1. Chọn bài trong danh sách.</p>
                                <p>
                                    2. App chuyển sang route riêng của bài học.
                                </p>
                                <p>
                                    3. Dùng nút quay lại hoặc về mục lục để tiếp
                                    tục học.
                                </p>
                            </div>
                            <div className="mt-6 space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                                <div className="flex items-center justify-between gap-3 text-sm">
                                    <div>
                                        <div className="font-semibold text-white">
                                            Tiến độ khóa học
                                        </div>
                                        <div className="text-slate-400">
                                            {stats.done}/{lessons.length} bài đã
                                            hoàn thành
                                        </div>
                                    </div>
                                    <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-300">
                                        {stats.percent}%
                                    </div>
                                </div>
                                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                                    <div
                                        className="h-full rounded-full bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400 transition-all duration-500"
                                        style={{ width: `${stats.percent}%` }}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 px-4 py-3 text-amber-200">
                                        <div className="font-semibold">
                                            {stats.saved} bài đang đánh dấu
                                        </div>
                                    </div>
                                    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-emerald-200">
                                        <div className="font-semibold">
                                            {stats.done} bài đã xong
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
                <section className="rounded-[2rem] border border-slate-800 bg-slate-900/60 p-5 shadow-2xl shadow-black/20 md:p-8">
                    <div className="mb-6 flex items-center justify-between gap-4">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                                Nội dung
                            </p>
                            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                                Danh sách bài học
                            </h2>
                        </div>
                        <div className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-300">
                            {lessons.length} bài
                        </div>
                    </div>

                    <div className="grid gap-4">
                        {lessons.map((lesson) => (
                            <div
                                key={lesson.path}
                                className="group rounded-3xl border border-slate-800 bg-slate-950/90 p-5 transition hover:border-orange-500/40 hover:bg-slate-950"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <Link to={lesson.path} className="min-w-0 flex-1">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <div className="text-sm font-semibold text-orange-300">
                                                Phần {lesson.code}
                                            </div>
                                            <span
                                                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${lessonStatusClasses(lessonStatuses[lesson.path])}`}
                                            >
                                                {lessonStatuses[lesson.path] ===
                                                "done" ? (
                                                    <CheckCircle2 size={14} />
                                                ) : lessonStatuses[
                                                      lesson.path
                                                  ] === "saved" ? (
                                                    <BookMarked size={14} />
                                                ) : (
                                                    <Circle size={14} />
                                                )}
                                                {lessonStatusLabel(
                                                    lessonStatuses[lesson.path],
                                                )}
                                            </span>
                                        </div>
                                        <h3 className="mt-2 text-xl font-bold text-white">
                                            {lesson.title}
                                        </h3>
                                    </Link>
                                    <ArrowRight className="mt-1 shrink-0 text-slate-500 transition group-hover:text-orange-300" />
                                </div>

                                <Link to={lesson.path}>
                                    <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                                        {lesson.description}
                                    </p>
                                </Link>

                                <div className="mt-4 grid gap-2 text-sm text-slate-300 md:grid-cols-2">
                                    {lesson.bullets.map((bullet) => (
                                        <Link
                                            key={bullet}
                                            to={lesson.path}
                                            className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3"
                                        >
                                            {bullet}
                                        </Link>
                                    ))}
                                </div>

                                <div className="mt-5 flex flex-wrap gap-3">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            onToggleSaved(lesson.path)
                                        }
                                        className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-semibold transition ${
                                            lessonStatuses[lesson.path] ===
                                            "saved"
                                                ? "border-amber-500/40 bg-amber-500/10 text-amber-200"
                                                : "border-slate-700 bg-slate-900 text-slate-300 hover:border-amber-500/30 hover:text-amber-200"
                                        }`}
                                    >
                                        <BookMarked size={16} />
                                        {lessonStatuses[lesson.path] === "saved"
                                            ? "Bỏ đánh dấu"
                                            : "Đánh dấu đang học"}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => onToggleDone(lesson.path)}
                                        className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-semibold transition ${
                                            lessonStatuses[lesson.path] ===
                                            "done"
                                                ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
                                                : "border-slate-700 bg-slate-900 text-slate-300 hover:border-emerald-500/30 hover:text-emerald-200"
                                        }`}
                                    >
                                        <BookCheck size={16} />
                                        {lessonStatuses[lesson.path] === "done"
                                            ? "Bỏ hoàn thành"
                                            : "Đánh dấu đã học xong"}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

function LessonPage({
    lessonIndex,
    lessonStatuses,
    onToggleSaved,
    onToggleDone,
}) {
    const lesson = lessons[lessonIndex];
    const previousLesson = lessons[lessonIndex - 1];
    const nextLesson = lessons[lessonIndex + 1];
    const Component = lesson.Component;
    const status = lessonStatuses[lesson.path];

    return (
        <div className="bg-slate-950">
            <div className="fixed bottom-4 left-1/2 z-[60] w-[calc(100%-1.5rem)] max-w-4xl -translate-x-1/2">
                <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-slate-700 bg-slate-950/95 p-2 shadow-2xl shadow-black/35 backdrop-blur">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
                    >
                        <Home size={16} />
                        Mục lục
                    </Link>

                    {previousLesson ? (
                        <Link
                            to={previousLesson.path}
                            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
                        >
                            <ArrowLeft size={16} />
                            {previousLesson.code}
                        </Link>
                    ) : (
                        <span className="px-4 py-2 text-sm text-slate-500">
                            Bài đầu
                        </span>
                    )}

                    <div className="flex flex-1 flex-wrap items-center justify-center gap-2">
                        <div
                            className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold ${lessonStatusClasses(status)}`}
                        >
                            {status === "done" ? (
                                <CheckCircle2 size={16} />
                            ) : status === "saved" ? (
                                <BookMarked size={16} />
                            ) : (
                                <Circle size={16} />
                            )}
                            {lessonStatusLabel(status)}
                        </div>
                        <button
                            type="button"
                            onClick={() => onToggleSaved(lesson.path)}
                            className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                                status === "saved"
                                    ? "border-amber-500/40 bg-amber-500/10 text-amber-200"
                                    : "border-slate-700 bg-slate-900 text-slate-300 hover:border-amber-500/30 hover:text-amber-200"
                            }`}
                        >
                            <BookMarked size={16} />
                            {status === "saved"
                                ? "Bỏ đánh dấu"
                                : "Đánh dấu"}
                        </button>
                        <button
                            type="button"
                            onClick={() => onToggleDone(lesson.path)}
                            className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                                status === "done"
                                    ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
                                    : "border-slate-700 bg-slate-900 text-slate-300 hover:border-emerald-500/30 hover:text-emerald-200"
                            }`}
                        >
                            <BookCheck size={16} />
                            {status === "done" ? "Bỏ hoàn thành" : "Hoàn thành"}
                        </button>
                    </div>

                    {nextLesson ? (
                        <Link
                            to={nextLesson.path}
                            className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
                        >
                            {nextLesson.code}
                            <ArrowRight size={16} />
                        </Link>
                    ) : (
                        <span className="px-4 py-2 text-sm text-slate-500">
                            Bài cuối
                        </span>
                    )}
                </div>
            </div>

            <Component />
        </div>
    );
}

function AppRoutes() {
    const [lessonStatuses, setLessonStatuses] = useState(() =>
        readLessonStatuses(),
    );

    useEffect(() => {
        window.localStorage.setItem(
            LESSON_STATUS_KEY,
            JSON.stringify(lessonStatuses),
        );
    }, [lessonStatuses]);

    const handleToggleSaved = (path) => {
        setLessonStatuses((current) => ({
            ...current,
            [path]: current[path] === "saved" ? "none" : "saved",
        }));
    };

    const handleToggleDone = (path) => {
        setLessonStatuses((current) => ({
            ...current,
            [path]: current[path] === "done" ? "none" : "done",
        }));
    };

    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomePage
                            lessonStatuses={lessonStatuses}
                            onToggleSaved={handleToggleSaved}
                            onToggleDone={handleToggleDone}
                        />
                    }
                />
                {lessons.map((lesson, index) => (
                    <Route
                        key={lesson.path}
                        path={lesson.path}
                        element={
                            <LessonPage
                                lessonIndex={index}
                                lessonStatuses={lessonStatuses}
                                onToggleSaved={handleToggleSaved}
                                onToggleDone={handleToggleDone}
                            />
                        }
                    />
                ))}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    );
}

function App() {
    return (
        <HashRouter>
            <AppRoutes />
        </HashRouter>
    );
}

export default App;
