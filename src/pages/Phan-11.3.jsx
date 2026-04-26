import React, { useState } from "react";
import {
    GitBranch,
    GitCommit,
    Terminal,
    FileText,
    FolderOpen,
    Settings,
    User,
    Mail,
    Eye,
    AlertTriangle,
    Info,
    CheckCircle2,
    XCircle,
    Copy,
    ChevronRight,
    RotateCcw,
    Sparkles,
    PackageCheck,
    ShieldAlert,
    Bug,
    Wrench,
    ListChecks,
    PlusCircle,
    History,
    Code2,
    FileWarning,
    Layers,
    Search,
    Archive,
    Lock,
    GitCompare,
    ArrowRight,
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
                                Development · Git · Version Control
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 11
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 11.3
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" /> Quản
                        lý lịch sử thay đổi project
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Cài Đặt Git <br />
                        <span className="text-orange-500">
                            Và Cấu Hình Cơ Bản
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Bạn sẽ hiểu Git là gì, cài Git trên Ubuntu, cấu hình{" "}
                        <code className="text-orange-300">user.name</code>,{" "}
                        <code className="text-orange-300">user.email</code>, tạo
                        repository bằng{" "}
                        <code className="text-orange-300">git init</code>, dùng{" "}
                        <code className="text-orange-300">git add</code>,{" "}
                        <code className="text-orange-300">git commit</code>,{" "}
                        <code className="text-orange-300">git log</code> và
                        tránh commit nhầm file nhạy cảm.
                    </p>
                </section>

                <section className="bg-red-500/10 border border-red-500/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-5 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                        <ShieldAlert size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Không commit secret
                        </h3>
                        <p className="text-red-100 leading-relaxed">
                            Không đưa <code className="text-white">.env</code>,
                            API key, database password, token, SSH private key
                            hoặc file <code className="text-white">*.pem</code>{" "}
                            vào Git. Nếu secret đã bị public, hãy coi như đã lộ:
                            thu hồi hoặc rotate secret ngay, không chỉ xóa file
                            khỏi commit mới.
                        </p>
                    </div>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <GitConceptCard />
                    <GitFlowSimulator />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="blue"
                        icon={<GitBranch size={22} />}
                        title="Git là gì?"
                        subtitle="Git là công cụ quản lý phiên bản, giúp lưu lịch sử thay đổi và quay lại mốc tốt khi cần."
                    />
                    <GitIntroSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="green"
                        icon={<PackageCheck size={22} />}
                        title="Cài Git và cấu hình lần đầu"
                        subtitle="Cài Git bằng apt, kiểm tra version, cấu hình tên, email và editor mặc định."
                    />
                    <InstallConfigSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="orange"
                        icon={<Layers size={22} />}
                        title="Ba vùng quan trọng trong Git"
                        subtitle="Working Directory là nơi sửa file, Staging Area là nơi chọn thay đổi, Repository là nơi lưu commit."
                    />
                    <ThreeAreasSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="purple"
                        icon={<FolderOpen size={22} />}
                        title="Tạo repository đầu tiên"
                        subtitle="Tạo thư mục git-demo, viết README.md, chạy git init, git status, git add và git commit."
                    />
                    <FirstRepoSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="cyan"
                        icon={<GitCompare size={22} />}
                        title="Sửa file, xem diff và commit tiếp"
                        subtitle="git diff giúp xem chính xác dòng nào được thêm hoặc xóa trước khi commit."
                    />
                    <SecondCommitSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="yellow"
                        icon={<FileWarning size={22} />}
                        title=".gitignore và file nhạy cảm"
                        subtitle="Tạo .gitignore từ đầu project để bỏ qua .venv, __pycache__, .env, log, private key và file build."
                    />
                    <GitignoreSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="pink"
                        icon={<Settings size={22} />}
                        title="Cấu hình global và local"
                        subtitle="--global áp dụng toàn user; cấu hình local trong repo có thể dùng email công ty khác email cá nhân."
                    />
                    <GlobalLocalConfigSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="8"
                        color="red"
                        icon={<Bug size={22} />}
                        title="Lỗi phổ biến và cách xử lý"
                        subtitle="git command not found, thiếu user.name/email, quên git add, nothing to commit, commit nhầm secret và nhầm master/main."
                    />
                    <CommonErrorsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="9"
                        color="teal"
                        icon={<Wrench size={22} />}
                        title="Bài tập thực hành"
                        subtitle="Cài Git, tạo repo đầu tiên, commit README, thêm app.py và .gitignore, xem lịch sử commit."
                    />
                    <PracticeSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="10"
                        color="emerald"
                        icon={<ListChecks size={22} />}
                        title="Tóm tắt nhanh"
                        subtitle="Các lệnh Git cơ bản và workflow cần nhớ khi làm project trên Ubuntu."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <PackageCheck className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức bài 11.3
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Ôn lại git init, .git, staging area, commit,
                                    git diff, .gitignore, user.email và branch
                                    main/master.
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
                        Bạn đã biết Git cơ bản. Tiếp theo là quản lý môi trường
                        ảo nâng cao hơn với virtualenv, nvm và pyenv.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                        Bài tiếp theo: 11.4 — Quản lý môi trường ảo{" "}
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
        yellow: "bg-yellow-500/20 text-yellow-400",
        pink: "bg-pink-500/20 text-pink-400",
        red: "bg-red-500/20 text-red-400",
        teal: "bg-teal-500/20 text-teal-400",
        emerald: "bg-emerald-500/20 text-emerald-400",
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

function GitConceptCard() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-orange-500/15 text-orange-400 rounded-2xl flex items-center justify-center">
                    <GitBranch size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        Git thay thế “copy folder final”
                    </h3>
                    <p className="text-slate-500 text-sm">
                        Lịch sử rõ ràng thay vì thư mục rối
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5">
                    <XCircle className="text-red-400 mb-3" />
                    <div className="font-bold text-white mb-2">
                        Không dùng Git
                    </div>
                    <p className="text-sm text-slate-400">
                        project-final, project-final-v2, project-final-fix,
                        project-final-final → rất dễ rối.
                    </p>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-5">
                    <CheckCircle2 className="text-green-400 mb-3" />
                    <div className="font-bold text-white mb-2">Dùng Git</div>
                    <p className="text-sm text-slate-400">
                        Commit 1, Commit 2, Commit 3… có message rõ ràng và có
                        thể xem lại lịch sử.
                    </p>
                </div>
            </div>
            <div className="bg-black border border-slate-800 rounded-2xl p-5 font-mono text-sm text-slate-300 whitespace-pre-wrap">{`Commit = ảnh chụp trạng thái project\nRepo   = project đã được Git theo dõi\n.git/  = nơi Git lưu lịch sử và metadata`}</div>
        </div>
    );
}

function GitFlowSimulator() {
    const [step, setStep] = useState(0);
    const steps = [
        ["Sửa file", "Working Directory", "README.md đang được chỉnh sửa."],
        [
            "git status",
            "Kiểm tra",
            "Xem file mới, file đã sửa, file đã staging.",
        ],
        ["git diff", "Xem thay đổi", "Xem dòng nào thêm, dòng nào xóa."],
        ["git add", "Staging Area", "Chọn thay đổi chuẩn bị commit."],
        ["git commit", "Repository", "Lưu mốc phiên bản chính thức."],
        ["git log", "Lịch sử", "Xem các commit đã tạo."],
    ];
    return (
        <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <GitCommit className="text-orange-400" /> Workflow Git cơ bản
            </h3>
            <p className="text-slate-400 mb-6">
                Bấm từng bước để hiểu luồng làm việc Git.
            </p>
            <div className="space-y-2 mb-5">
                {steps.map(([cmd], i) => (
                    <button
                        key={cmd}
                        onClick={() => setStep(i)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all ${step === i ? "bg-orange-500/10 border-orange-500/40" : "bg-slate-950 border-slate-800 hover:text-white text-slate-400"}`}
                    >
                        <span className="font-mono text-orange-300 mr-3">
                            {i + 1}
                        </span>
                        <code className="font-bold">{cmd}</code>
                    </button>
                ))}
            </div>
            <div className="bg-black border border-slate-800 rounded-2xl p-5">
                <div className="text-xs text-slate-500 mb-2">Đang xem</div>
                <code className="text-green-400 text-lg font-bold">
                    {steps[step][0]}
                </code>
                <p className="text-white font-bold mt-3">{steps[step][1]}</p>
                <p className="text-slate-400 text-sm mt-2">{steps[step][2]}</p>
            </div>
        </div>
    );
}

function GitIntroSection() {
    return (
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
            <CodeBlock
                title="git-idea.txt"
                code={`# Git giúp bạn:\nLưu mốc phiên bản tốt\nXem ai sửa gì\nQuay lại phiên bản cũ\nTạo nhánh thử nghiệm\nLàm việc nhóm dễ hơn\n\n# Không dùng Git:\nproject-v1 → project-v2 → project-final → project-final-final\n\n# Dùng Git:\ncommit A → commit B → commit C → commit D`}
            />
            <CheatCard
                title="Commit message tốt"
                rows={[
                    ["Add patient registration API", "Thêm chức năng rõ ràng"],
                    ["Fix login validation error", "Sửa lỗi cụ thể"],
                    [
                        "Update README installation guide",
                        "Cập nhật tài liệu rõ ràng",
                    ],
                    ["Không nên: fix", "Quá mơ hồ"],
                    ["Không nên: abc", "Không có ý nghĩa"],
                ]}
            />
        </div>
    );
}

function InstallConfigSection() {
    const [tab, setTab] = useState("install");
    const tabs = [
        ["install", "Cài Git"],
        ["identity", "Tên & email"],
        ["editor", "Editor"],
        ["list", "Xem config"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="green">
            {tab === "install" && (
                <CodeBlock
                    title="install-git.sh"
                    code={`sudo apt update\nsudo apt install git\n\ngit --version\n# Output mẫu:\n# git version 2.34.1`}
                />
            )}
            {tab === "identity" && (
                <CodeBlock
                    title="git-identity.sh"
                    code={`git config --global user.name "Hoang Kha"\ngit config --global user.email "kha@example.com"\n\n# user.name  = tên tác giả commit\n# user.email = email tác giả commit\n# --global   = áp dụng cho toàn bộ user hiện tại`}
                />
            )}
            {tab === "editor" && (
                <CodeBlock
                    title="git-editor.sh"
                    code={`# Dùng Nano\ngit config --global core.editor "nano"\n\n# Hoặc dùng VS Code\ngit config --global core.editor "code --wait"\n\n# --wait: Git chờ bạn đóng file trong VS Code rồi mới tiếp tục`}
                />
            )}
            {tab === "list" && (
                <CodeBlock
                    title="git-config-list.sh"
                    code={`git config --list\n\n# Xem từng giá trị\ngit config user.name\ngit config user.email\n\n# Xem cấu hình đến từ file nào\ngit config --list --show-origin`}
                />
            )}
        </Tabbed>
    );
}

function ThreeAreasSection() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-4 items-stretch">
                <AreaCard
                    icon={<FileText />}
                    title="Working Directory"
                    desc="Nơi bạn đang sửa file"
                    code="nano README.md"
                />
                <AreaArrow />
                <AreaCard
                    icon={<PlusCircle />}
                    title="Staging Area"
                    desc="Nơi chọn file chuẩn bị commit"
                    code="git add README.md"
                />
                <AreaArrow className="hidden md:block" />
                <AreaCard
                    icon={<Archive />}
                    title="Repository"
                    desc="Nơi lưu commit chính thức"
                    code="git commit -m ..."
                />
            </div>
            <div className="mt-6 bg-black border border-slate-800 rounded-2xl p-5 font-mono text-sm text-green-400 whitespace-pre-wrap">{`Bạn sửa file\n    ↓ git add\nĐưa vào staging area\n    ↓ git commit\nLưu vào Git repository`}</div>
        </div>
    );
}

function AreaCard({ icon, title, desc, code }) {
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
            <div className="text-orange-400 mb-3">{icon}</div>
            <div className="font-bold text-white mb-2">{title}</div>
            <p className="text-sm text-slate-500 mb-3">{desc}</p>
            <code className="text-orange-300 text-sm">{code}</code>
        </div>
    );
}
function AreaArrow() {
    return (
        <div className="hidden md:flex items-center justify-center text-slate-600">
            <ArrowRight size={32} />
        </div>
    );
}

function FirstRepoSection() {
    return (
        <CodeBlock
            title="first-git-repo.sh"
            code={`mkdir git-demo\ncd git-demo\n\ncat > README.md << 'EOF'\n# Git Demo\n\nĐây là project thực hành Git đầu tiên trên Ubuntu.\nEOF\n\n# Khởi tạo Git repository\ngit init\n# Initialized empty Git repository in /home/kha/git-demo/.git/\n\n# Kiểm tra trạng thái\ngit status\n# No commits yet\n# Untracked files:\n#   README.md\n\n# Thêm file vào staging area\ngit add README.md\n\n# Commit đầu tiên\ngit commit -m "Initial commit"\n\n# Xem lịch sử\ngit log --oneline`}
        />
    );
}

function SecondCommitSection() {
    return (
        <CodeBlock
            title="second-commit-with-diff.sh"
            code={`# Sửa README.md\ncat >> README.md << 'EOF'\n\n## Mục tiêu\n\n- Học git init\n- Học git add\n- Học git commit\nEOF\n\n# Xem trạng thái\ngit status\n# Changes not staged for commit:\n#   modified: README.md\n\n# Xem nội dung thay đổi\ngit diff\n# Dòng bắt đầu bằng + là dòng mới được thêm\n# Dòng bắt đầu bằng - là dòng bị xóa\n# @@ là vị trí đoạn thay đổi\n\n# Đưa vào staging và commit\ngit add README.md\ngit commit -m "Update README goals"\n\n# Xem lịch sử ngắn gọn\ngit log --oneline`}
        />
    );
}

function GitignoreSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="gitignore-python-demo.sh"
                code={`cat > app.py << 'EOF'\nprint("Hello Git from Ubuntu")\nEOF\n\ncat > .gitignore << 'EOF'\n.venv/\n__pycache__/\n*.log\n.env\n*.pem\n*.key\nid_ed25519\nEOF\n\ngit status\ngit add .\ngit commit -m "Add Python app and gitignore"`}
            />
            <div className="space-y-4">
                <ExplainCard
                    icon={<CheckCircle2 />}
                    title="Nên commit"
                    desc="Source code, README, file cấu hình mẫu không chứa secret."
                />
                <ExplainCard
                    icon={<XCircle />}
                    title="Không nên commit"
                    desc=".env, private key, token, database password, build cache."
                    danger
                />
                <ExplainCard
                    icon={<Lock />}
                    title="Secret đã public?"
                    desc="Thu hồi/rotate secret ngay. Chỉ xóa file khỏi commit mới chưa đủ an toàn."
                    danger
                />
            </div>
        </div>
    );
}

function GlobalLocalConfigSection() {
    return (
        <CodeBlock
            title="git-global-vs-local-config.sh"
            code={`# Global: áp dụng cho toàn bộ user hiện tại\ngit config --global user.name "Hoang Kha"\ngit config --global user.email "kha.personal@example.com"\n\n# Local: vào repo công ty rồi cấu hình riêng\ncd company-project\ngit config user.email "kha@company.com"\n\n# Kiểm tra email đang dùng trong repo hiện tại\ngit config user.email\n\n# Xem cấu hình đến từ đâu\ngit config --list --show-origin\n\n# Output mẫu:\n# file:/home/kha/.gitconfig user.name=Hoang Kha\n# file:/home/kha/.gitconfig user.email=kha.personal@example.com\n# file:.git/config          user.email=kha@company.com`}
        />
    );
}

function CommonErrorsSection() {
    const [tab, setTab] = useState("notfound");
    const tabs = [
        ["notfound", "git missing"],
        ["identity", "identity"],
        ["nothing", "nothing to commit"],
        ["add", "quên add"],
        ["secret", "secret"],
        ["branch", "main/master"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="red">
            {tab === "notfound" && (
                <CodeBlock
                    title="git-command-not-found.sh"
                    code={`git --version\n# git: command not found\n\n# Sửa:\nsudo apt update\nsudo apt install git\n\ngit --version`}
                />
            )}
            {tab === "identity" && (
                <CodeBlock
                    title="author-identity-unknown.sh"
                    code={`git commit -m "Initial commit"\n# Author identity unknown\n# *** Please tell me who you are.\n# fatal: unable to auto-detect email address\n\n# Sửa:\ngit config --global user.name "Hoang Kha"\ngit config --global user.email "kha@example.com"\n\ngit config user.name\ngit config user.email`}
                />
            )}
            {tab === "nothing" && (
                <CodeBlock
                    title="nothing-to-commit.sh"
                    code={`git commit -m "Update app"\n# nothing to commit, working tree clean\n\n# Nguyên nhân có thể:\n# - Chưa sửa file nào\n# - Sửa file nhưng chưa lưu\n# - File bị .gitignore bỏ qua\n# - Thay đổi đã commit rồi\n\n# Kiểm tra:\ngit status\ngit status --ignored`}
                />
            )}
            {tab === "add" && (
                <CodeBlock
                    title="forgot-git-add.sh"
                    code={`git commit -m "Update README"\n# Changes not staged for commit:\n#   modified: README.md\n# no changes added to commit\n\n# Sửa:\ngit add README.md\ngit commit -m "Update README"\n\n# Hoặc thêm tất cả:\ngit add .\ngit commit -m "Update project files"`}
                />
            )}
            {tab === "secret" && (
                <CodeBlock
                    title="committed-secret.sh"
                    code={`# Lỡ commit .env hoặc private_key.pem?\n\n# Phòng tránh cho lần sau:\ncat >> .gitignore << 'EOF'\n.env\n*.pem\n*.key\nid_ed25519\nEOF\n\n# Nếu secret đã public lên GitHub/GitLab:\n# 1. Thu hồi/rotate secret ngay lập tức\n# 2. Xóa secret khỏi lịch sử Git nếu cần\n# 3. Force push nếu repo remote cho phép\n# 4. Kiểm tra lại quyền truy cập\n\n# Ghi nhớ: secret đã public thì coi như đã lộ.`}
                />
            )}
            {tab === "branch" && (
                <CodeBlock
                    title="master-vs-main.sh"
                    code={`# Kiểm tra branch hiện tại\ngit branch\n# * master\n\n# Đổi tên branch hiện tại thành main\ngit branch -M main\n\n# Kiểm tra lại\ngit branch\n# * main`}
                />
            )}
        </Tabbed>
    );
}

function PracticeSection() {
    return (
        <div className="grid lg:grid-cols-3 gap-4">
            <PracticeCard
                level="Dễ"
                title="Cài Git và config"
                code={`sudo apt update\nsudo apt install git\ngit --version\ngit config --global user.name "Ten Cua Ban"\ngit config --global user.email "email@example.com"`}
                tasks={[
                    "Git version là bao nhiêu?",
                    "user.name đã đúng chưa?",
                    "user.email đã đúng chưa?",
                    "core.editor dùng gì?",
                ]}
            />
            <PracticeCard
                level="Trung bình"
                title="Repo đầu tiên"
                code={`mkdir my-first-repo\ncd my-first-repo\ngit init\nnano README.md\ngit status\ngit add README.md\ngit commit -m "Initial commit"\ngit log --oneline`}
                tasks={[
                    "git init tạo thư mục nào?",
                    "git add dùng để làm gì?",
                    "git commit lưu gì?",
                    "git log --oneline hiển thị gì?",
                ]}
            />
            <PracticeCard
                level="Nâng cao"
                title="Python + .gitignore"
                code={`mkdir python-git-demo\ncd python-git-demo\ngit init\nnano app.py\nnano .gitignore\ngit status\ngit add .\ngit commit -m "Add Python demo project"`}
                tasks={[
                    "Bỏ qua .venv/",
                    "Bỏ qua __pycache__/",
                    "Bỏ qua .env",
                    "Commit file hợp lệ",
                ]}
            />
        </div>
    );
}

function PracticeCard({ level, title, code, tasks }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <div className="text-xs text-orange-300 font-bold uppercase mb-2">
                {level}
            </div>
            <h4 className="font-bold text-white mb-3">{title}</h4>
            <pre className="bg-black/50 border border-slate-800 rounded-xl p-3 text-xs text-green-400 overflow-x-auto mb-4">
                <code>{code}</code>
            </pre>
            <ul className="space-y-2 text-sm text-slate-400">
                {tasks.map((t) => (
                    <li key={t} className="flex gap-2">
                        <CheckCircle2
                            size={15}
                            className="text-green-400 shrink-0 mt-0.5"
                        />
                        {t}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Tabbed({ tabs, tab, setTab, color, children }) {
    const activeMap = { green: "bg-green-500", red: "bg-red-500" };
    return (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 bg-slate-950/60">
                {tabs.map(([id, label]) => (
                    <button
                        key={id}
                        onClick={() => setTab(id)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold ${tab === id ? `${activeMap[color]} text-white` : "bg-slate-900 text-slate-400 hover:text-slate-200"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="p-5">{children}</div>
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
            title: "Cài & cấu hình",
            rows: [
                ["apt install git", "cài Git"],
                ["git --version", "kiểm tra"],
                ["git config --global user.name", "tên"],
                ["git config --global user.email", "email"],
                ["core.editor", "editor"],
            ],
        },
        {
            title: "Repo",
            rows: [
                ["git init", "tạo repo"],
                [".git/", "metadata/lịch sử"],
                ["git status", "trạng thái"],
                ["git branch", "xem branch"],
                ["git branch -M main", "đổi thành main"],
            ],
        },
        {
            title: "Commit",
            rows: [
                ["git add FILE", "stage file"],
                ["git add .", "stage tất cả"],
                ["git commit -m", "tạo commit"],
                ["git log", "lịch sử chi tiết"],
                ["git log --oneline", "lịch sử ngắn"],
            ],
        },
        {
            title: "Xem thay đổi",
            rows: [
                ["git diff", "chưa stage"],
                ["+", "dòng thêm"],
                ["-", "dòng xóa"],
                ["git status --ignored", "file bị ignore"],
                ["git config --show-origin", "nguồn config"],
            ],
        },
        {
            title: ".gitignore",
            rows: [
                [".venv/", "Python venv"],
                ["__pycache__/", "Python cache"],
                ["node_modules/", "Node deps"],
                [".env", "secret"],
                ["*.log", "log file"],
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
        question: "Git dùng để làm gì?",
        options: [
            "Quản lý lịch sử thay đổi mã nguồn/project",
            "Chạy container",
            "Mở port firewall",
            "Cài Python venv",
        ],
        correct: 0,
        explanation:
            "Git là công cụ quản lý phiên bản, giúp lưu lịch sử thay đổi của project.",
    },
    {
        question: "git init tạo thư mục ẩn nào trong project?",
        options: [".git/", ".ssh/", ".docker/", ".venv/"],
        correct: 0,
        explanation:
            ".git/ chứa lịch sử commit, cấu hình repo, branch và metadata.",
    },
    {
        question: "Ba vùng cơ bản của Git là gì?",
        options: [
            "Working Directory → Staging Area → Repository",
            "Firewall → Port → Process",
            "Image → Container → Volume",
            "User → Group → Permission",
        ],
        correct: 0,
        explanation:
            "Bạn sửa file ở Working Directory, git add đưa vào Staging Area, git commit lưu vào Repository.",
    },
    {
        question: "Lệnh nào đưa README.md vào staging area?",
        options: [
            "git add README.md",
            "git stage commit",
            "git init README.md",
            "git log README.md",
        ],
        correct: 0,
        explanation:
            "git add FILE đưa file hoặc thay đổi vào staging area để chuẩn bị commit.",
    },
    {
        question: "git diff dùng để làm gì?",
        options: [
            "Xem nội dung thay đổi chưa staging",
            "Cài Git",
            "Xóa repo",
            "Đổi user.email",
        ],
        correct: 0,
        explanation:
            "git diff giúp xem dòng nào thêm/xóa trước khi git add hoặc commit.",
    },
    {
        question: "File nào thường nên đưa vào .gitignore?",
        options: [".env", "README.md", "app.py", "main.java"],
        correct: 0,
        explanation:
            ".env thường chứa secret như password/token nên không nên commit.",
    },
    {
        question: "Git báo Author identity unknown khi commit, cần làm gì?",
        options: [
            "Cấu hình user.name và user.email",
            "Xóa .gitignore",
            "Chạy docker compose",
            "Đổi port SSH",
        ],
        correct: 0,
        explanation:
            "Git cần biết tên và email tác giả commit thông qua git config user.name/user.email.",
    },
    {
        question: "Muốn đổi branch hiện tại từ master sang main dùng lệnh nào?",
        options: [
            "git branch -M main",
            "git init main",
            "git add main",
            "git log --main",
        ],
        correct: 0,
        explanation: "git branch -M main đổi tên branch hiện tại thành main.",
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
