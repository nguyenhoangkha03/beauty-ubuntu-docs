import React, { useState } from "react";
import {
    ArrowLeftRight,
    BookOpen,
    CheckCircle2,
    ChevronRight,
    ClipboardCheck,
    Code2,
    FileDiff,
    FileText,
    FolderGit2,
    GitCompare,
    GitMerge,
    Info,
    Layers,
    ListChecks,
    Paintbrush,
    Play,
    RefreshCcw,
    RotateCcw,
    Save,
    Search,
    ShieldCheck,
    Sparkles,
    TerminalSquare,
    Undo2,
    Zap,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-indigo-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 border-b border-slate-800 sticky top-0 z-50 backdrop-blur">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🐧</span>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Linux/Ubuntu
                            </h1>
                            <p className="text-xs text-slate-500 hidden md:block">
                                Text Editor & xử lý văn bản: diff, patch, diff3,
                                colordiff
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400 hidden md:inline-block">
                            Bài trước: 7.3
                        </span>
                        <div className="text-sm font-medium text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full border border-indigo-400/20">
                            Phần 7.4
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <Hero />

                <section className="space-y-6">
                    <SectionTitle
                        n="1"
                        color="indigo"
                        icon={<GitCompare size={22} />}
                        title="diff và patch là gì?"
                    />
                    <ConceptOverview />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="2"
                        color="cyan"
                        icon={<FileText size={22} />}
                        title="File mẫu để thực hành"
                    />
                    <SampleFiles />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="3"
                        color="blue"
                        icon={<FileDiff size={22} />}
                        title="diff — so sánh 2 file"
                    />
                    <BasicDiffGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="4"
                        color="green"
                        icon={<Layers size={22} />}
                        title="Unified diff -u — format dễ đọc nhất"
                    />
                    <UnifiedDiffGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="5"
                        color="amber"
                        icon={<Search size={22} />}
                        title="Các tùy chọn diff hữu ích"
                    />
                    <DiffOptionsGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="6"
                        color="purple"
                        icon={<Save size={22} />}
                        title="Lưu diff thành file patch"
                    />
                    <CreatePatchGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="7"
                        color="rose"
                        icon={<Play size={22} />}
                        title="patch — áp dụng thay đổi"
                    />
                    <PatchGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="8"
                        color="pink"
                        icon={<ShieldCheck size={22} />}
                        title="Workflow thực tế: config, script, đồng nghiệp nhận patch"
                    />
                    <RealWorldWorkflow />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="9"
                        color="teal"
                        icon={<GitMerge size={22} />}
                        title="diff3 — so sánh 3 file và conflict"
                    />
                    <Diff3Guide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="10"
                        color="orange"
                        icon={<Paintbrush size={22} />}
                        title="colordiff — diff có màu"
                    />
                    <ColorDiffGuide />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="11"
                        color="sky"
                        icon={<Code2 size={22} />}
                        title="Script diff_patch_helper.sh — trợ lý review và patch"
                    />
                    <DiffPatchHelperPreview />
                </section>

                <section className="space-y-6 pt-4">
                    <SectionTitle
                        n="12"
                        color="lime"
                        icon={<ClipboardCheck size={22} />}
                        title="Thực hành tổng hợp"
                    />
                    <PracticeChecklist />
                </section>

                <SummarySection />
                <PartSevenCompletion />

                <section className="space-y-6 pt-4">
                    <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-xl">
                        <div className="bg-slate-900 p-6 border-b border-slate-700">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="bg-indigo-500/20 text-indigo-400 p-2 rounded-lg">
                                    <ClipboardCheck size={20} />
                                </span>
                                Kiểm tra nhanh: diff và patch
                            </h3>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                <div className="text-center pt-8 border-t border-slate-800">
                    <p className="text-slate-400 mb-4">
                        Bạn đã hoàn thành Phần 7.4 — So sánh file với diff và
                        patch.
                    </p>
                    <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-indigo-500/20">
                        Phần tiếp theo: 8.1 — Bash script là gì?{" "}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>
        </div>
    );
}

function Hero() {
    const cards = [
        [GitCompare, "diff", "So sánh 2 file"],
        [FileDiff, "diff -u", "Unified format như git diff"],
        [Play, "patch", "Áp dụng thay đổi"],
        [Undo2, "patch -R", "Hoàn tác patch"],
    ];
    return (
        <section className="text-center space-y-5 py-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium">
                <Zap size={16} /> diff · diff -u · patch · patch --dry-run ·
                patch -b · patch -R · diff3 · colordiff
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                So Sánh File Với{" "}
                <span className="text-indigo-400 font-mono">diff</span> và{" "}
                <span className="text-rose-400 font-mono">patch</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Bài này giúp bạn xem file thay đổi gì, đọc unified diff, lưu
                thay đổi thành file patch, thử patch an toàn bằng dry-run,
                backup trước khi patch và hoàn tác bằng reverse patch.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4">
                {cards.map(([Icon, title, desc]) => (
                    <div
                        key={title}
                        className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 text-left"
                    >
                        <Icon className="text-indigo-400 mb-3" size={24} />
                        <div className="font-bold text-white">{title}</div>
                        <div className="text-xs text-slate-500">{desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function SectionTitle({ n, color, icon, title }) {
    const colorMap = {
        indigo: "bg-indigo-500/20 text-indigo-400",
        cyan: "bg-cyan-500/20 text-cyan-400",
        blue: "bg-blue-500/20 text-blue-400",
        green: "bg-green-500/20 text-green-400",
        amber: "bg-amber-500/20 text-amber-400",
        purple: "bg-purple-500/20 text-purple-400",
        rose: "bg-rose-500/20 text-rose-400",
        pink: "bg-pink-500/20 text-pink-400",
        teal: "bg-teal-500/20 text-teal-400",
        orange: "bg-orange-500/20 text-orange-400",
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
        indigo: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
        cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
        blue: "bg-blue-500/10 border-blue-500/20 text-blue-300",
        green: "bg-green-500/10 border-green-500/20 text-green-300",
        amber: "bg-amber-500/10 border-amber-500/20 text-amber-300",
        purple: "bg-purple-500/10 border-purple-500/20 text-purple-300",
        rose: "bg-rose-500/10 border-rose-500/20 text-rose-300",
        pink: "bg-pink-500/10 border-pink-500/20 text-pink-300",
        teal: "bg-teal-500/10 border-teal-500/20 text-teal-300",
        orange: "bg-orange-500/10 border-orange-500/20 text-orange-300",
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

function ConceptOverview() {
    return (
        <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
                <div className="flex items-start gap-5">
                    <div className="bg-indigo-500/15 text-indigo-400 p-4 rounded-2xl border border-indigo-500/20">
                        <GitCompare size={42} />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">
                            diff tạo bản mô tả thay đổi, patch áp dụng bản thay
                            đổi đó
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            <code>diff</code> so sánh file cũ và file mới để chỉ
                            ra dòng nào bị xóa, thêm hoặc thay đổi.{" "}
                            <code>patch</code> đọc file diff/patch rồi biến file
                            gốc thành phiên bản mới.
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                            <MiniPoint
                                icon={<Search size={18} />}
                                tone="indigo"
                                title="Review thay đổi"
                                text="Xem config hoặc code thay đổi gì trước/sau khi sửa."
                            />
                            <MiniPoint
                                icon={<Play size={18} />}
                                tone="rose"
                                title="Áp dụng bản vá"
                                text="Chia sẻ thay đổi nhỏ mà không cần gửi cả file."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-2 bg-slate-800/60 border border-slate-700 rounded-3xl p-6">
                <h4 className="font-bold text-white flex items-center gap-2 mb-4">
                    <ArrowLeftRight className="text-indigo-400" /> Luồng làm
                    việc
                </h4>
                <TerminalBlock
                    title="diff → patch flow"
                    code={`file_cũ.txt ──┐
              ├──► diff ──► changes.patch
file_mới.txt ─┘

changes.patch ──► patch ──► file_cũ trở thành file_mới`}
                />
            </div>
        </div>
    );
}

function SampleFiles() {
    const [tab, setTab] = useState("v1");
    const code = {
        v1: `cat > v1.txt << EOF
Xin chào!
Đây là phiên bản 1.
Dòng này sẽ bị xoá.
Ubuntu là hệ điều hành Linux.
Tôi đang học Linux.
EOF`,
        v2: `cat > v2.txt << EOF
Xin chào!
Đây là phiên bản 2.
Ubuntu là hệ điều hành Linux tuyệt vời.
Tôi đang học Linux.
Dòng này được thêm vào.
EOF`,
        inspect: `cat v1.txt
cat v2.txt

wc -l v1.txt v2.txt

# So sánh nhanh có khác không
diff -q v1.txt v2.txt`,
    };
    return (
        <TabbedSection
            tabs={[
                ["v1", "Tạo v1.txt"],
                ["v2", "Tạo v2.txt"],
                ["inspect", "Kiểm tra"],
            ]}
            active={tab}
            setActive={setTab}
            color="cyan"
            title="sample files"
            code={code[tab]}
        />
    );
}

function BasicDiffGuide() {
    const [tab, setTab] = useState("basic");
    const code = {
        basic: `# Cú pháp cơ bản
diff file_cũ file_mới

# So sánh file mẫu
diff v1.txt v2.txt`,
        output: `2c2
< Đây là phiên bản 1.
---
> Đây là phiên bản 2.
3d2
< Dòng này sẽ bị xoá.
4c3
< Ubuntu là hệ điều hành Linux.
---
> Ubuntu là hệ điều hành Linux tuyệt vời.
5a5
> Dòng này được thêm vào.`,
        read: `<     dòng từ file CŨ
>     dòng từ file MỚI
---   phân cách giữa 2 phiên bản

XcY   dòng X file cũ Changed thành dòng Y file mới
XdY   dòng X file cũ Deleted, file mới không có
XaY   sau dòng X file cũ, Added dòng Y file mới`,
    };
    return (
        <TabbedSection
            tabs={[
                ["basic", "Chạy diff"],
                ["output", "Output mẫu"],
                ["read", "Cách đọc"],
            ]}
            active={tab}
            setActive={setTab}
            color="blue"
            title="diff basic"
            code={code[tab]}
        />
    );
}

function UnifiedDiffGuide() {
    const [tab, setTab] = useState("unified");
    const code = {
        unified: `# Unified format, dễ đọc nhất
diff -u v1.txt v2.txt

# Đây cũng là format quen thuộc trong git diff.`,
        output: `--- v1.txt
+++ v2.txt
@@ -1,5 +1,5 @@
 Xin chào!
-Đây là phiên bản 1.
-Dòng này sẽ bị xoá.
-Ubuntu là hệ điều hành Linux.
+Đây là phiên bản 2.
+Ubuntu là hệ điều hành Linux tuyệt vời.
 Tôi đang học Linux.
+Dòng này được thêm vào.`,
        read: `---   file cũ
+++   file mới
@@    vị trí/hunk thay đổi
-     dòng bị xóa, chỉ có trong file cũ
+     dòng được thêm, chỉ có trong file mới
space dòng context, giữ nguyên

@@ -1,5 +1,5 @@ nghĩa là:
file cũ: bắt đầu dòng 1, gồm 5 dòng
file mới: bắt đầu dòng 1, gồm 5 dòng`,
    };
    return (
        <TabbedSection
            tabs={[
                ["unified", "diff -u"],
                ["output", "Output mẫu"],
                ["read", "Cách đọc"],
            ]}
            active={tab}
            setActive={setTab}
            color="green"
            title="unified diff"
            code={code[tab]}
        />
    );
}

function DiffOptionsGuide() {
    const [tab, setTab] = useState("ignore");
    const code = {
        ignore: `# Bỏ qua khoảng trắng thừa
diff -b v1.txt v2.txt

# Bỏ qua tất cả khoảng trắng
diff -w v1.txt v2.txt

# Bỏ qua dòng trống
diff -B v1.txt v2.txt

# Bỏ qua hoa/thường
diff -i v1.txt v2.txt

# Kết hợp unified + bỏ qua khoảng trắng
diff -ub v1.txt v2.txt`,
        quick: `# Chỉ báo có khác hay không, không hiện chi tiết
diff -q v1.txt v2.txt

# Output:
Files v1.txt and v2.txt differ

# Dùng tốt trong script:
if diff -q old.conf new.conf >/dev/null; then
  echo "Giống nhau"
else
  echo "Có khác biệt"
fi`,
        dir: `# So sánh 2 thư mục đệ quy
diff -r folder1/ folder2/

# So sánh thư mục, chỉ hiện tên file khác nhau
diff -rq folder1/ folder2/

# Output ví dụ:
Only in folder1/: old_config.txt
Files folder1/nginx.conf and folder2/nginx.conf differ`,
    };
    return (
        <TabbedSection
            tabs={[
                ["ignore", "Ignore"],
                ["quick", "Quick check"],
                ["dir", "Thư mục"],
            ]}
            active={tab}
            setActive={setTab}
            color="amber"
            title="diff options"
            code={code[tab]}
        />
    );
}

function CreatePatchGuide() {
    const [tab, setTab] = useState("file");
    const code = {
        file: `# Lưu kết quả diff ra file .patch
diff -u v1.txt v2.txt > changes.patch

# Xem patch
cat changes.patch
less changes.patch`,
        dir: `# Lưu diff của nhiều file bằng so sánh thư mục
diff -ru folder_cu/ folder_moi/ > all_changes.patch

# Kiểm tra file patch
head -50 all_changes.patch

# Đếm số dòng patch
wc -l all_changes.patch`,
        share: `# File .patch là text file nên có thể:
# - gửi qua email/chat
# - commit vào repo
# - review bằng less/cat
# - áp dụng bằng patch

# Nên dùng unified format:
diff -u old new > fix.patch`,
    };
    return (
        <TabbedSection
            tabs={[
                ["file", "Patch 1 file"],
                ["dir", "Patch thư mục"],
                ["share", "Chia sẻ patch"],
            ]}
            active={tab}
            setActive={setTab}
            color="purple"
            title="create patch"
            code={code[tab]}
        />
    );
}

function PatchGuide() {
    const [tab, setTab] = useState("apply");
    const code = {
        apply: `# Áp dụng patch vào file gốc
patch v1.txt < changes.patch

# Output:
patching file v1.txt

# Kiểm tra v1 bây giờ giống v2 chưa
diff v1.txt v2.txt
# Không có output = giống nhau`,
        dry: `# Thử patch, không sửa file thật
patch --dry-run v1.txt < changes.patch

# Nếu OK rồi mới apply:
patch v1.txt < changes.patch

# Đây là bước an toàn nên dùng trước khi patch config thật.`,
        backup: `# Backup file gốc trước khi patch
patch -b v1.txt < changes.patch

# Kết quả:
# v1.txt       file đã patch
# v1.txt.orig  bản gốc trước patch

ls -l v1.txt*`,
        reverse: `# Đảo ngược patch, hoàn tác thay đổi
patch -R v1.txt < changes.patch

# v1.txt quay về phiên bản cũ

# Kiểm tra:
diff v1.txt v2.txt`,
        path: `# Patch cho thư mục, thường dùng -pN để bỏ bớt cấp đường dẫn
patch -p1 < all_changes.patch

# -p0: giữ nguyên path trong patch
# -p1: bỏ 1 cấp path đầu tiên
# -p2: bỏ 2 cấp path đầu tiên

# Khi không chắc, dùng dry-run:
patch --dry-run -p1 < all_changes.patch`,
    };
    return (
        <TabbedSection
            tabs={[
                ["apply", "Apply"],
                ["dry", "Dry-run"],
                ["backup", "Backup"],
                ["reverse", "Undo -R"],
                ["path", "-pN"],
            ]}
            active={tab}
            setActive={setTab}
            color="rose"
            title="patch"
            code={code[tab]}
        />
    );
}

function RealWorldWorkflow() {
    const [tab, setTab] = useState("config");
    const code = {
        config: `# Backup config gốc
sudo cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.bak

# Chỉnh sửa config
sudo nano /etc/nginx/nginx.conf

# Xem mình vừa thay đổi gì
diff /etc/nginx/nginx.conf.bak /etc/nginx/nginx.conf

# Lưu thay đổi để chia sẻ
diff -u /etc/nginx/nginx.conf.bak /etc/nginx/nginx.conf > nginx_fix.patch`,
        teammate: `# Đồng nghiệp nhận nginx_fix.patch

# Kiểm tra trước
patch --dry-run /etc/nginx/nginx.conf < nginx_fix.patch

# Nếu OK thì áp dụng
sudo patch /etc/nginx/nginx.conf < nginx_fix.patch

# Nếu muốn hoàn tác
sudo patch -R /etc/nginx/nginx.conf < nginx_fix.patch`,
        script: `# So sánh 2 phiên bản script backup
diff -u backup_v1.sh backup_v2.sh

# Output ví dụ:
--- backup_v1.sh
+++ backup_v2.sh
@@ -3,7 +3,8 @@
 BACKUP_DIR="/backup"
-DATE=$(date +%Y%m%d)
+DATE=$(date +%Y%m%d_%H%M%S)
 SOURCE="/var/www"
+LOG_FILE="/var/log/backup.log"
 
 tar -czf $BACKUP_DIR/backup_$DATE.tar.gz $SOURCE
+echo "Backup xong: $DATE" >> $LOG_FILE`,
    };
    return (
        <TabbedSection
            tabs={[
                ["config", "Config trước/sau"],
                ["teammate", "Đồng nghiệp apply"],
                ["script", "Script version"],
            ]}
            active={tab}
            setActive={setTab}
            color="pink"
            title="real workflow"
            code={code[tab]}
        />
    );
}

function Diff3Guide() {
    const [tab, setTab] = useState("basic");
    const code = {
        basic: `# diff3 dùng khi cần so sánh 3 file:
# file của mình, file gốc, file của người khác

diff3 file_mine file_goc file_cua_ho

# Ví dụ:
diff3 my_config.conf original.conf their_config.conf`,
        conflict: `# Output đánh dấu conflict:
<<<<<<< my_config.conf
worker_processes 4;
||||||| original.conf
worker_processes 1;
>>>>>>> their_config.conf
worker_processes 8;

# Nghĩa là:
# mình đổi 1 → 4
# họ đổi 1 → 8
# cần tự quyết định giữ 4, 8, hoặc giá trị khác`,
        use: `# Khi nào dùng diff3?
# - 2 người cùng sửa từ một file gốc
# - cần hiểu bên nào thay đổi gì
# - merge config thủ công

# Trong dự án code hiện đại, Git dùng ý tưởng tương tự khi xử lý merge conflict.`,
    };
    return (
        <TabbedSection
            tabs={[
                ["basic", "Cú pháp"],
                ["conflict", "Conflict"],
                ["use", "Khi dùng"],
            ]}
            active={tab}
            setActive={setTab}
            color="teal"
            title="diff3"
            code={code[tab]}
        />
    );
}

function ColorDiffGuide() {
    const [tab, setTab] = useState("install");
    const code = {
        install: `# Cài colordiff
sudo apt install colordiff -y

# Dùng giống diff nhưng có màu
colordiff v1.txt v2.txt
colordiff -u v1.txt v2.txt`,
        alias: `# Đặt alias diff='colordiff'
echo "alias diff='colordiff'" >> ~/.bashrc
source ~/.bashrc

# Từ giờ chạy diff sẽ có màu
diff -u v1.txt v2.txt`,
        note: `# Nếu viết script, cân nhắc dùng /usr/bin/diff gốc
# để tránh output màu gây khó parse.

# Alias chỉ tiện cho người dùng tương tác trong terminal.`,
    };
    return (
        <TabbedSection
            tabs={[
                ["install", "Cài/dùng"],
                ["alias", "Alias"],
                ["note", "Lưu ý"],
            ]}
            active={tab}
            setActive={setTab}
            color="orange"
            title="colordiff"
            code={code[tab]}
        />
    );
}

function TabbedSection({ tabs, active, setActive, color, title, code }) {
    const colorMap = {
        cyan: "bg-cyan-500/10 border-cyan-500/40 text-cyan-300",
        blue: "bg-blue-500/10 border-blue-500/40 text-blue-300",
        green: "bg-green-500/10 border-green-500/40 text-green-300",
        amber: "bg-amber-500/10 border-amber-500/40 text-amber-300",
        purple: "bg-purple-500/10 border-purple-500/40 text-purple-300",
        rose: "bg-rose-500/10 border-rose-500/40 text-rose-300",
        pink: "bg-pink-500/10 border-pink-500/40 text-pink-300",
        teal: "bg-teal-500/10 border-teal-500/40 text-teal-300",
        orange: "bg-orange-500/10 border-orange-500/40 text-orange-300",
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="flex gap-2 flex-wrap mb-6">
                {tabs.map(([k, label]) => (
                    <button
                        key={k}
                        onClick={() => setActive(k)}
                        className={`px-4 py-2 rounded-xl font-bold text-sm border ${active === k ? colorMap[color] : "bg-slate-900 border-slate-700 text-slate-300"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <TerminalBlock title={`${title} — ${active}`} code={code} />
        </div>
    );
}

function DiffPatchHelperPreview() {
    const [view, setView] = useState("menu");
    const content = {
        menu: `╔══════════════════════════════════════╗
║        DIFF PATCH HELPER             ║
╠══════════════════════════════════════╣
║ 1) Compare two files                 ║
║ 2) Create unified patch              ║
║ 3) Dry-run patch                     ║
║ 4) Apply patch with backup           ║
║ 5) Reverse patch                     ║
║ 6) Compare two directories           ║
║ 7) Colored diff                      ║
╚══════════════════════════════════════╝`,
        compare: `▶ COMPARE FILES
Old: v1.txt
New: v2.txt

Command:
diff -u v1.txt v2.txt

Status:
Files differ. Unified diff displayed.`,
        create: `▶ CREATE PATCH
Command:
diff -u v1.txt v2.txt > changes.patch

Patch file:
changes.patch

Next safe step:
patch --dry-run v1.txt < changes.patch`,
        apply: `▶ SAFE APPLY
1. Dry-run:
patch --dry-run v1.txt < changes.patch

2. Apply with backup:
patch -b v1.txt < changes.patch

3. Verify:
diff v1.txt v2.txt`,
        reverse: `▶ REVERSE PATCH
Command:
patch -R v1.txt < changes.patch

Result:
v1.txt reverted to old version.

Verify:
cat v1.txt`,
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-2">
                    {[
                        ["menu", "Menu"],
                        ["compare", "Compare"],
                        ["create", "Create patch"],
                        ["apply", "Safe apply"],
                        ["reverse", "Reverse"],
                    ].map(([k, label]) => (
                        <button
                            key={k}
                            onClick={() => setView(k)}
                            className={`w-full text-left rounded-xl border p-3 font-bold text-sm ${view === k ? "bg-sky-500/10 border-sky-500/40 text-sky-300" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <TerminalBlock
                        title="diff_patch_helper.sh preview"
                        code={content[view]}
                    />
                </div>
            </div>
        </div>
    );
}

function PracticeChecklist() {
    const tasks = [
        ["Tạo v1.txt", "cat > v1.txt << EOF ... EOF"],
        ["Tạo v2.txt", "cat > v2.txt << EOF ... EOF"],
        ["So sánh diff thường", "diff v1.txt v2.txt"],
        ["Đọc ký hiệu < > ---", "Xem output diff thường"],
        ["So sánh unified", "diff -u v1.txt v2.txt"],
        ["Chỉ kiểm tra có khác không", "diff -q v1.txt v2.txt"],
        ["Bỏ qua khoảng trắng", "diff -w v1.txt v2.txt"],
        ["Tạo patch", "diff -u v1.txt v2.txt > changes.patch"],
        ["Xem patch", "cat changes.patch"],
        ["Dry-run patch", "patch --dry-run v1.txt < changes.patch"],
        ["Apply patch", "patch v1.txt < changes.patch"],
        ["Verify giống nhau", "diff v1.txt v2.txt"],
        ["Hoàn tác patch", "patch -R v1.txt < changes.patch"],
        ["Apply có backup", "patch -b v1.txt < changes.patch"],
        ["So sánh thư mục", "diff -rq folder1/ folder2/"],
        ["Cài colordiff", "sudo apt install colordiff -y"],
        ["Dùng colordiff unified", "colordiff -u v1.txt v2.txt"],
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

function SummarySection() {
    return (
        <section className="pt-4">
            <div className="bg-slate-950 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
                <div className="bg-slate-900 p-6 border-b border-slate-700">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <BookOpen className="text-indigo-400" /> Tóm tắt bài học
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <SummaryBox
                        title="diff"
                        items={[
                            "diff cũ mới",
                            "diff -u cũ mới",
                            "diff -q",
                            "diff -r dir1 dir2",
                            "diff -rq",
                            "diff -w / -b / -i",
                        ]}
                    />
                    <SummaryBox
                        title="đọc diff -u"
                        items={[
                            "--- file cũ",
                            "+++ file mới",
                            "@@ hunk",
                            "- dòng bị xóa",
                            "+ dòng được thêm",
                            "space context",
                        ]}
                    />
                    <SummaryBox
                        title="patch"
                        items={[
                            "patch file < a.patch",
                            "patch --dry-run",
                            "patch -b",
                            "patch -R",
                            "patch -p1",
                            "diff -u > patch",
                        ]}
                    />
                    <SummaryBox
                        title="extra"
                        items={[
                            "diff3 mine base theirs",
                            "colordiff -u",
                            "alias diff=colordiff",
                            "config review",
                            "script version",
                            "directory patch",
                        ]}
                    />
                </div>
                <div className="px-6 md:px-8 pb-8">
                    <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-2xl p-5 text-indigo-100">
                        <strong className="text-white">
                            Workflow an toàn:
                        </strong>{" "}
                        tạo patch bằng{" "}
                        <code>diff -u old new &gt; fix.patch</code>, xem lại
                        bằng <code>less fix.patch</code>, thử bằng{" "}
                        <code>patch --dry-run</code>, áp dụng có backup bằng{" "}
                        <code>patch -b</code>, và hoàn tác bằng{" "}
                        <code>patch -R</code> nếu cần.
                    </div>
                </div>
            </div>
        </section>
    );
}

function SummaryBox({ title, items }) {
    return (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
            <h4 className="font-bold text-indigo-300 uppercase text-xs tracking-widest mb-4">
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

function PartSevenCompletion() {
    const lessons = [
        "7.1 Nano — editor dễ dùng cho người mới",
        "7.2 Vim — editor mạnh mẽ trong terminal",
        "7.3 Xử lý văn bản: sed, awk, cut, sort, uniq",
        "7.4 So sánh file: diff và patch",
    ];
    return (
        <section className="pt-4">
            <div className="bg-gradient-to-br from-indigo-500/10 to-pink-500/10 border border-indigo-500/30 rounded-3xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                    🎉 Hoàn thành Phần 7 — Text Editor & Xử Lý Văn Bản
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                    {lessons.map((lesson) => (
                        <div
                            key={lesson}
                            className="bg-slate-950/60 border border-slate-700 rounded-2xl p-4 flex gap-3"
                        >
                            <CheckCircle2 className="text-emerald-400 shrink-0" />
                            <span className="text-slate-200">{lesson}</span>
                        </div>
                    ))}
                </div>
                <p className="text-slate-300 mt-5">
                    Phần tiếp theo là{" "}
                    <strong className="text-indigo-300">
                        Phần 8 — Shell Scripting (Bash)
                    </strong>
                    : viết script để tự động hóa thao tác Linux.
                </p>
            </div>
        </section>
    );
}

const questions = [
    {
        question: "diff dùng để làm gì?",
        options: [
            "So sánh 2 file và chỉ ra khác biệt",
            "Áp dụng bản vá",
            "Nén file",
            "Tạo user",
        ],
        correct: 0,
        explanation:
            "diff so sánh file cũ và file mới, hiển thị dòng bị thêm/xóa/thay đổi.",
    },
    {
        question: "Unified diff dùng option nào?",
        options: ["-u", "-r", "-q", "-b"],
        correct: 0,
        explanation: "diff -u tạo unified format, dễ đọc và giống git diff.",
    },
    {
        question: "Trong unified diff, dấu + đầu dòng nghĩa là gì?",
        options: [
            "Dòng được thêm trong file mới",
            "Dòng bị xóa",
            "Dòng không đổi",
            "Lỗi cú pháp",
        ],
        correct: 0,
        explanation: "+ là dòng chỉ có trong file mới.",
    },
    {
        question: "Lệnh nào tạo file patch từ v1 và v2?",
        options: [
            "diff -u v1.txt v2.txt > changes.patch",
            "patch v1.txt v2.txt",
            "diff -R changes.patch",
            "colordiff --apply",
        ],
        correct: 0,
        explanation: "Redirect output của diff -u ra file .patch.",
    },
    {
        question: "patch --dry-run dùng để làm gì?",
        options: [
            "Thử patch mà không sửa file thật",
            "Xóa patch",
            "Tạo patch",
            "Đổi màu diff",
        ],
        correct: 0,
        explanation: "Dry-run là bước kiểm tra an toàn trước khi apply thật.",
    },
    {
        question: "Option nào của patch tạo backup file gốc?",
        options: ["-b", "-R", "-p1", "-u"],
        correct: 0,
        explanation: "patch -b tạo bản backup, thường là .orig.",
    },
    {
        question: "patch -R có tác dụng gì?",
        options: [
            "Đảo ngược/hoàn tác patch",
            "Chạy patch đệ quy",
            "Tạo màu",
            "Chỉ đọc patch",
        ],
        correct: 0,
        explanation: "-R reverse patch, dùng để undo thay đổi đã apply.",
    },
    {
        question: "diff -rq folder1/ folder2/ làm gì?",
        options: [
            "So sánh thư mục đệ quy và chỉ hiện tên file khác",
            "Patch thư mục",
            "Xóa file giống nhau",
            "Tạo conflict",
        ],
        correct: 0,
        explanation: "-r là recursive, -q là chỉ báo khác nhau ngắn gọn.",
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
                    <strong className="text-indigo-400">
                        {score}/{questions.length}
                    </strong>{" "}
                    câu về diff và patch.
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
                <span className="text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">
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
