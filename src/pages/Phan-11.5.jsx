import React, { useState } from "react";
import {
    Code2,
    Terminal,
    PackageCheck,
    Download,
    Boxes,
    Settings,
    Puzzle,
    FileText,
    FolderOpen,
    AlertTriangle,
    Info,
    CheckCircle2,
    XCircle,
    Copy,
    ChevronRight,
    RotateCcw,
    Sparkles,
    ShieldAlert,
    Bug,
    Wrench,
    ListChecks,
    Search,
    Monitor,
    GitBranch,
    Braces,
    Coffee,
    Container,
    KeyRound,
    Command,
    Eye,
    Zap,
    Cpu,
    Globe,
    Lock,
    RefreshCw,
    Hammer,
    FileJson,
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
                                Development · VS Code · Extensions · Tooling
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 11
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 11.5
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" /> Hoàn
                        thiện môi trường lập trình trên Ubuntu
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Cài Đặt VS Code <br />
                        <span className="text-orange-500">
                            Và Công Cụ Lập Trình
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Bạn sẽ biết VS Code là gì, cài bằng{" "}
                        <code className="text-orange-300">.deb</code>,{" "}
                        <code className="text-orange-300">snap</code> hoặc{" "}
                        <code className="text-orange-300">APT repository</code>,
                        mở project bằng{" "}
                        <code className="text-orange-300">code .</code>, cài
                        extension Python/Node.js/Java/Docker/Git và xử lý lỗi
                        thường gặp.
                    </p>
                </section>

                <section className="bg-red-500/10 border border-red-500/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-5 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                        <ShieldAlert size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Không chạy VS Code bằng sudo
                        </h3>
                        <p className="text-red-100 leading-relaxed">
                            Không dùng{" "}
                            <code className="text-white">sudo code .</code> để
                            sửa project thông thường. Việc này có thể khiến file
                            trong project bị đổi owner thành{" "}
                            <code className="text-white">root</code>, sau đó
                            user thường không sửa được. Nếu lỡ bị đổi quyền,
                            dùng{" "}
                            <code className="text-white">
                                sudo chown -R $USER:$USER ~/my-project
                            </code>
                            .
                        </p>
                    </div>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <VsCodeConceptCard />
                    <InstallMethodPicker />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="blue"
                        icon={<Code2 size={22} />}
                        title="VS Code là gì?"
                        subtitle="Editor hiện đại, nhẹ, nhiều extension, phù hợp Python, Node.js, Java, Docker, Git, Markdown và Remote SSH."
                    />
                    <VsCodeIntroSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="green"
                        icon={<Download size={22} />}
                        title="Ba cách cài VS Code trên Ubuntu"
                        subtitle="Cài bằng file .deb chính thức, snap cho nhanh, hoặc repository APT chính thức để quản lý chuyên nghiệp."
                    />
                    <InstallVsCodeSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="orange"
                        icon={<Terminal size={22} />}
                        title="Mở project bằng code ."
                        subtitle="Lệnh code . mở thư mục hiện tại bằng VS Code, rất tiện khi làm việc trong Terminal."
                    />
                    <CodeDotSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="purple"
                        icon={<Hammer size={22} />}
                        title="Cài công cụ lập trình thường dùng"
                        subtitle="build-essential, curl, wget, git, zip/unzip, Python tools, Node.js qua nvm và Java JDK."
                    />
                    <DevToolsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="cyan"
                        icon={<Puzzle size={22} />}
                        title="Extension cần thiết"
                        subtitle="Cài Python, Pylance, Prettier, ESLint, Java Pack, Docker, GitLens và Remote SSH bằng Terminal."
                    />
                    <ExtensionsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="yellow"
                        icon={<Terminal size={22} />}
                        title="Terminal tích hợp và Settings JSON"
                        subtitle="Dùng Ctrl + ` để mở terminal, format on save, autosave, tab size và default terminal profile."
                    />
                    <SettingsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="pink"
                        icon={<Code2 size={22} />}
                        title="Python project trong VS Code"
                        subtitle="Tạo .venv, cài requests, mở code ., chọn đúng interpreter .venv/bin/python và chạy app.py."
                    />
                    <PythonVsCodeSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="8"
                        color="teal"
                        icon={<Braces size={22} />}
                        title="Node.js project trong VS Code"
                        subtitle="Dùng .nvmrc, nvm use, npm init -y, chạy app.js và xử lý terminal VS Code không nhận nvm."
                    />
                    <NodeVsCodeSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="9"
                        color="red"
                        icon={<Bug size={22} />}
                        title="Lỗi phổ biến và cách xử lý"
                        subtitle="code command not found, .deb thiếu dependency, VS Code không nhận .venv, nvm missing, format không chạy, VS Code chậm và sudo code."
                    />
                    <CommonErrorsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="10"
                        color="indigo"
                        icon={<Wrench size={22} />}
                        title="Bài tập thực hành"
                        subtitle="Cài VS Code, mở project bằng code ., tạo Python project, chọn interpreter và cài bộ extension cơ bản."
                    />
                    <PracticeSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="11"
                        color="emerald"
                        icon={<ListChecks size={22} />}
                        title="Tóm tắt nhanh"
                        subtitle="Các lệnh cài VS Code, mở project, cài extension, list extension và checklist setup cần nhớ."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <PackageCheck className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức bài 11.5
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Ôn lại code ., cài .deb/snap/APT, extension,
                                    interpreter .venv, terminal tích hợp và sudo
                                    code.
                                </p>
                            </div>
                            <div className="hidden sm:block text-3xl">🧪</div>
                        </div>
                        <div className="p-6 md:p-8">
                            <InteractiveQuiz />
                        </div>
                    </div>
                </section>

                <section className="pt-4">
                    <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-green-500/20 border border-orange-500/20 rounded-3xl p-8 text-center">
                        <div className="text-5xl mb-4">🎉</div>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                            Hoàn thành Phần 11 — Môi trường lập trình
                        </h3>
                        <p className="text-slate-400 max-w-2xl mx-auto mb-6">
                            Bạn đã học runtime Python/Node.js/Java, Docker, Git,
                            môi trường ảo và VS Code — đủ nền tảng để bắt đầu
                            phát triển dự án trên Ubuntu.
                        </p>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                            Phần 12 — Ubuntu Desktop và Server{" "}
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </section>
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
        teal: "bg-teal-500/20 text-teal-400",
        red: "bg-red-500/20 text-red-400",
        indigo: "bg-indigo-500/20 text-indigo-400",
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

function VsCodeConceptCard() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-orange-500/15 text-orange-400 rounded-2xl flex items-center justify-center">
                    <Monitor size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        VS Code là “bàn làm việc” lập trình
                    </h3>
                    <p className="text-slate-500 text-sm">
                        Editor nhẹ, mạnh nhờ extension
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-3 mb-5">
                <MiniCard
                    title="Nano/Vim"
                    desc="Sửa nhanh trong Terminal"
                    emoji="📝"
                />
                <MiniCard
                    title="VS Code"
                    desc="Editor hiện đại, nhiều extension"
                    emoji="💻"
                    highlight
                />
                <MiniCard
                    title="IDE lớn"
                    desc="Chuyên sâu, nặng hơn"
                    emoji="🏭"
                />
            </div>
            <div className="bg-black border border-slate-800 rounded-2xl p-5 font-mono text-sm text-slate-300 whitespace-pre-wrap">{`Nano/Vim  = sổ tay nhỏ để sửa nhanh\nVS Code   = bàn làm việc lập trình đầy đủ công cụ\nIDE lớn   = xưởng chuyên nghiệp cho một ngôn ngữ cụ thể`}</div>
        </div>
    );
}

function MiniCard({ title, desc, emoji, highlight }) {
    return (
        <div
            className={`rounded-2xl border p-4 ${highlight ? "bg-orange-500/10 border-orange-500/20" : "bg-slate-950 border-slate-800"}`}
        >
            <div className="text-2xl mb-2">{emoji}</div>
            <div className="font-bold text-white mb-1">{title}</div>
            <p className="text-xs text-slate-500">{desc}</p>
        </div>
    );
}

function InstallMethodPicker() {
    const [method, setMethod] = useState("deb");
    const data = {
        deb: {
            title: ".deb chính thức",
            good: "Dễ, chính thức, phù hợp người mới",
            bad: "Cần tải file từ trang VS Code",
            cmd: "cd ~/Downloads\nsudo apt install ./code_*.deb",
        },
        snap: {
            title: "Snap",
            good: "Một lệnh, rất nhanh",
            bad: "Đôi khi chậm hơn hoặc khác quyền truy cập file",
            cmd: "sudo snap install code --classic",
        },
        apt: {
            title: "APT repository",
            good: "Quản lý chuyên nghiệp bằng apt",
            bad: "Nhiều lệnh thiết lập repo hơn",
            cmd: "sudo apt update\nsudo apt install code",
        },
    };
    const item = data[method];
    return (
        <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Download className="text-orange-400" /> Chọn cách cài VS Code
            </h3>
            <p className="text-slate-400 mb-6">
                Bấm để xem ưu/nhược điểm và lệnh cài.
            </p>
            <div className="grid grid-cols-3 gap-3 mb-5">
                {Object.keys(data).map((key) => (
                    <button
                        key={key}
                        onClick={() => setMethod(key)}
                        className={`p-3 rounded-xl border font-bold text-sm ${method === key ? "bg-orange-500 text-white border-orange-500" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"}`}
                    >
                        {data[key].title}
                    </button>
                ))}
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                <div className="font-bold text-white text-2xl mb-3">
                    {item.title}
                </div>
                <div className="grid sm:grid-cols-2 gap-3 mb-4">
                    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-3 text-sm text-green-200">
                        <strong>Ưu:</strong> {item.good}
                    </div>
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-3 text-sm text-yellow-100">
                        <strong>Lưu ý:</strong> {item.bad}
                    </div>
                </div>
                <pre className="bg-black/50 border border-slate-800 rounded-xl p-4 text-sm text-green-400 overflow-x-auto">
                    <code>{item.cmd}</code>
                </pre>
            </div>
        </div>
    );
}

function VsCodeIntroSection() {
    return (
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
            <CodeBlock
                title="what-vscode-supports.txt"
                code={`VS Code có thể dùng cho:\n\nPython\nNode.js / JavaScript / TypeScript\nJava\nDocker\nGit\nMarkdown\nBash script\nRemote SSH\nWSL\nDev Containers\n\n# Visual Studio Code khác Visual Studio:\n# VS Code       = editor nhẹ, đa nền tảng, dùng nhiều trên Linux\n# Visual Studio = IDE lớn, phổ biến hơn trên Windows`}
            />
            <CheatCard
                title="Khi nào dùng VS Code?"
                rows={[
                    ["Lập trình hằng ngày", "Python, JS/TS, Java, Docker, Git"],
                    ["Sửa nhanh file server", "Có thể dùng Remote SSH"],
                    ["Markdown", "Preview và extension tốt"],
                    ["Debug cơ bản", "Tùy ngôn ngữ và extension"],
                ]}
            />
        </div>
    );
}

function InstallVsCodeSection() {
    const [tab, setTab] = useState("deb");
    const tabs = [
        ["deb", ".deb"],
        ["snap", "Snap"],
        ["repo", "APT repo"],
        ["verify", "Kiểm tra"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="green">
            {tab === "deb" && (
                <CodeBlock
                    title="install-vscode-deb.sh"
                    code={`# 1. Tải file .deb từ trang chính thức VS Code\n# File thường nằm trong ~/Downloads\n\ncd ~/Downloads\nls code_*.deb\n\n# 2. Cài bằng apt để tự xử lý dependency\nsudo apt install ./code_*.deb\n\n# Nếu tên cụ thể:\nsudo apt install ./code_1.99.0_amd64.deb`}
                />
            )}
            {tab === "snap" && (
                <CodeBlock
                    title="install-vscode-snap.sh"
                    code={`sudo snap install code --classic\n\n# --classic cho phép VS Code hoạt động kiểu classic confinement\n\ncode --version`}
                />
            )}
            {tab === "repo" && (
                <CodeBlock
                    title="install-vscode-apt-repository.sh"
                    code={`sudo apt update\nsudo apt install wget gpg apt-transport-https\n\nwget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg\n\nsudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg\n\necho "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" | sudo tee /etc/apt/sources.list.d/vscode.list > /dev/null\n\nsudo apt update\nsudo apt install code\n\nrm -f packages.microsoft.gpg`}
                />
            )}
            {tab === "verify" && (
                <CodeBlock
                    title="verify-vscode.sh"
                    code={`code --version\nwhich code\n\n# Mở VS Code\ncode\n\n# Mở thư mục hiện tại\ncode .`}
                />
            )}
        </Tabbed>
    );
}

function CodeDotSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="open-project-with-code-dot.sh"
                code={`mkdir vscode-demo\ncd vscode-demo\n\ncat > app.py << 'EOF'\nprint("Hello VS Code on Ubuntu")\nEOF\n\n# Mở thư mục hiện tại bằng VS Code\ncode .\n\n# Trong VS Code mở Terminal bằng:\n# Ctrl + \`\n# Hoặc menu: Terminal → New Terminal\n\npython3 app.py`}
            />
            <CheatCard
                title="Ý nghĩa"
                rows={[
                    ["code", "Mở Visual Studio Code"],
                    [".", "Thư mục hiện tại"],
                    ["code .", "Mở project hiện tại"],
                    ["Ctrl + `", "Mở Terminal tích hợp"],
                ]}
            />
        </div>
    );
}

function DevToolsSection() {
    return (
        <CodeBlock
            title="install-common-dev-tools.sh"
            code={`sudo apt update\n\n# Công cụ cơ bản\nsudo apt install build-essential curl wget git unzip zip\n\n# Python tools\nsudo apt install python3 python3-pip python3-venv\n\n# Node.js nếu đã có nvm\nnvm install --lts\nnode --version\nnpm --version\n\n# Java tools\nsudo apt install openjdk-17-jdk\njava -version\njavac -version`}
        />
    );
}

function ExtensionsSection() {
    return (
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
            <CodeBlock
                title="install-vscode-extensions.sh"
                code={`code --install-extension ms-python.python\ncode --install-extension ms-python.vscode-pylance\ncode --install-extension esbenp.prettier-vscode\ncode --install-extension dbaeumer.vscode-eslint\ncode --install-extension vscjava.vscode-java-pack\ncode --install-extension ms-azuretools.vscode-docker\ncode --install-extension eamodio.gitlens\ncode --install-extension ms-vscode-remote.remote-ssh\n\n# Xem danh sách extension đã cài\ncode --list-extensions`}
            />
            <CheatCard
                title="Extension dùng cho"
                rows={[
                    ["ms-python.python", "Python"],
                    ["Pylance", "Gợi ý code Python"],
                    ["Prettier", "Format JS/TS/HTML/CSS/JSON"],
                    ["ESLint", "Kiểm tra lỗi JS/TS"],
                    ["Java Pack", "Lập trình Java"],
                    ["Docker", "Dockerfile/Compose"],
                    ["GitLens", "Lịch sử Git chi tiết"],
                    ["Remote SSH", "Mở project trên server"],
                ]}
            />
        </div>
    );
}

function SettingsSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="vscode-settings-json.json"
                code={`{\n  "editor.formatOnSave": true,\n  "editor.tabSize": 2,\n  "files.autoSave": "afterDelay",\n  "terminal.integrated.defaultProfile.linux": "bash",\n  "files.watcherExclude": {\n    "**/node_modules/**": true,\n    "**/.venv/**": true,\n    "**/dist/**": true,\n    "**/build/**": true\n  }\n}`}
                note="Mở Settings JSON bằng Ctrl + Shift + P → Preferences: Open User Settings (JSON)."
            />
            <CheatCard
                title="Phím tắt quan trọng"
                rows={[
                    ["Ctrl + Shift + P", "Command Palette"],
                    ["Ctrl + `", "Terminal tích hợp"],
                    ["Terminal → New Terminal", "Mở terminal từ menu"],
                    ["Python: Select Interpreter", "Chọn .venv/bin/python"],
                ]}
            />
        </div>
    );
}

function PythonVsCodeSection() {
    return (
        <CodeBlock
            title="python-vscode-demo.sh"
            code={`mkdir python-vscode-demo\ncd python-vscode-demo\n\npython3 -m venv .venv\nsource .venv/bin/activate\npip install requests\n\ncat > app.py << 'EOF'\nimport requests\n\nprint("requests version:", requests.__version__)\nEOF\n\ncode .\n\n# Trong VS Code:\n# Ctrl + Shift + P\n# Python: Select Interpreter\n# Chọn ./.venv/bin/python\n\n# Trong Terminal VS Code:\npython app.py\n# requests version: 2.x.x\n\nwhich python\npip list`}
        />
    );
}

function NodeVsCodeSection() {
    return (
        <CodeBlock
            title="node-vscode-demo.sh"
            code={`mkdir node-vscode-demo\ncd node-vscode-demo\n\necho "20" > .nvmrc\nnvm use\nnpm init -y\n\ncat > app.js << 'EOF'\nconsole.log("Hello Node.js from VS Code");\nconsole.log("Node version:", process.version);\nEOF\n\ncode .\n\n# Trong Terminal VS Code:\nnode app.js\n\n# Nếu nvm: command not found:\nsource ~/.bashrc\nnvm use`}
        />
    );
}

function CommonErrorsSection() {
    const [tab, setTab] = useState("code");
    const tabs = [
        ["code", "code missing"],
        ["deb", ".deb deps"],
        ["python", "Python .venv"],
        ["nvm", "nvm missing"],
        ["format", "format"],
        ["slow", "VS Code chậm"],
        ["sudo", "sudo code"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="red">
            {tab === "code" && (
                <CodeBlock
                    title="code-command-not-found.sh"
                    code={`code .\n# code: command not found\n\nwhich code\n\n# Nếu không có output, cài lại:\nsudo snap install code --classic\n\n# Hoặc nếu dùng APT repository:\nsudo apt install code\n\n# Trong VS Code GUI cũng có thể tìm:\n# Ctrl + Shift + P\n# Shell Command: Install 'code' command in PATH`}
                />
            )}
            {tab === "deb" && (
                <CodeBlock
                    title="deb-dependency-problem.sh"
                    code={`sudo dpkg -i code_xxx_amd64.deb\n# dpkg: dependency problems prevent configuration of code\n\n# Lý do: dpkg không tự xử lý dependency tốt như apt.\n\n# Cách đúng:\nsudo apt install ./code_*.deb\n\n# Nếu đã lỡ dùng dpkg:\nsudo apt --fix-broken install`}
                />
            )}
            {tab === "python" && (
                <CodeBlock
                    title="vscode-python-venv-not-detected.sh"
                    code={`# VS Code báo:\n# Import "requests" could not be resolved\n\n# Nguyên nhân thường gặp:\n# VS Code đang dùng sai Python interpreter.\n\n# Trong VS Code:\n# Ctrl + Shift + P\n# Python: Select Interpreter\n# Chọn .venv/bin/python\n\n# Kiểm tra trong Terminal VS Code:\nwhich python\npython --version\npip list\n\n# Output đúng:\n# /home/kha/python-vscode-demo/.venv/bin/python`}
                />
            )}
            {tab === "nvm" && (
                <CodeBlock
                    title="vscode-terminal-nvm-not-found.sh"
                    code={`nvm --version\n# nvm: command not found\n\n# Trong Terminal VS Code:\nsource ~/.bashrc\nnvm --version\n\n# Kiểm tra .bashrc có nvm chưa:\ngrep -n "NVM_DIR" ~/.bashrc\n\n# Nếu dùng Zsh:\nsource ~/.zshrc`}
                />
            )}
            {tab === "format" && (
                <CodeBlock
                    title="format-on-save-not-working.sh"
                    code={`# Cài Prettier\ncode --install-extension esbenp.prettier-vscode\n\n# Settings JSON:\n{\n  "editor.formatOnSave": true,\n  "editor.defaultFormatter": "esbenp.prettier-vscode"\n}\n\n# Nếu vẫn lỗi, kiểm tra:\n# - File type có formatter hỗ trợ không?\n# - Workspace setting có ghi đè User setting không?\n# - Với Python có thể cần formatter riêng như Black.`}
                />
            )}
            {tab === "slow" && (
                <CodeBlock
                    title="vscode-slow.sh"
                    code={`# Không nên mở thư mục quá rộng:\ncode /\ncode ~\n\n# Nên mở đúng project:\ncd ~/my-project\ncode .\n\n# Exclude thư mục nặng trong Settings JSON:\n{\n  "files.watcherExclude": {\n    "**/node_modules/**": true,\n    "**/.venv/**": true,\n    "**/dist/**": true,\n    "**/build/**": true\n  }\n}`}
                />
            )}
            {tab === "sudo" && (
                <CodeBlock
                    title="do-not-sudo-code.sh"
                    code={`# Không nên dùng:\nsudo code .\n\n# Nếu lỡ làm file bị đổi owner thành root:\nls -la\n\n# Sửa owner project về user hiện tại:\nsudo chown -R $USER:$USER ~/my-project\n\n# Sửa file hệ thống thì dùng cách phù hợp hơn, ví dụ:\nsudo nano /etc/hosts`}
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
                title="Cài và kiểm tra VS Code"
                code={`code --version\nwhich code\n\nmkdir vscode-practice\ncd vscode-practice\ncode .`}
                tasks={[
                    "code --version có hiện phiên bản không?",
                    "which code trả về đường dẫn nào?",
                    "VS Code có mở đúng thư mục không?",
                ]}
            />
            <PracticeCard
                level="Trung bình"
                title="Python project trong VS Code"
                code={`mkdir py-vscode-practice\ncd py-vscode-practice\npython3 -m venv .venv\nsource .venv/bin/activate\npip install requests\nnano app.py\ncode .`}
                tasks={[
                    "Chọn .venv/bin/python",
                    "Chạy python app.py",
                    "Kiểm tra which python",
                    "Import requests không lỗi",
                ]}
            />
            <PracticeCard
                level="Nâng cao"
                title="Cài extension bằng Terminal"
                code={`code --install-extension ms-python.python\ncode --install-extension ms-python.vscode-pylance\ncode --install-extension esbenp.prettier-vscode\ncode --install-extension dbaeumer.vscode-eslint\ncode --install-extension ms-azuretools.vscode-docker\ncode --install-extension eamodio.gitlens\ncode --list-extensions`}
                tasks={[
                    "Extension nào cho Python?",
                    "Extension nào cho Docker?",
                    "Extension nào format code?",
                    "Extension nào hỗ trợ Git mạnh hơn?",
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
            title: "Cài VS Code",
            rows: [
                ["apt install ./code_*.deb", "cài .deb"],
                ["snap install code --classic", "cài Snap"],
                ["apt install code", "cài từ repo"],
                ["code --version", "kiểm tra"],
                ["which code", "đường dẫn"],
            ],
        },
        {
            title: "Dùng VS Code",
            rows: [
                ["code", "mở VS Code"],
                ["code .", "mở project"],
                ["Ctrl + Shift + P", "Command Palette"],
                ["Ctrl + `", "Terminal"],
                ["Select Interpreter", "chọn Python"],
            ],
        },
        {
            title: "Extension",
            rows: [
                ["ms-python.python", "Python"],
                ["Pylance", "gợi ý Python"],
                ["Prettier", "format"],
                ["ESLint", "lint JS/TS"],
                ["GitLens", "Git history"],
            ],
        },
        {
            title: "Tooling",
            rows: [
                ["build-essential", "compiler"],
                ["curl/wget", "tải dữ liệu"],
                ["git", "version control"],
                ["python3-venv", "Python env"],
                ["openjdk-17-jdk", "Java JDK"],
            ],
        },
        {
            title: "Nhớ kỹ",
            rows: [
                ["Không sudo code .", "tránh đổi owner"],
                ["Mở đúng project", "không code / hoặc code ~"],
                [".venv/bin/python", "interpreter đúng"],
                ["source ~/.bashrc", "nvm trong terminal"],
                ["watcherExclude", "giảm chậm"],
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
        question: "Lệnh code . có tác dụng gì?",
        options: [
            "Mở thư mục hiện tại bằng VS Code",
            "Cài VS Code",
            "Xóa project",
            "Format Python",
        ],
        correct: 0,
        explanation:
            "code là lệnh mở VS Code, dấu . nghĩa là thư mục hiện tại.",
    },
    {
        question:
            "Cách cài file .deb nên dùng lệnh nào để tự xử lý dependency?",
        options: [
            "sudo apt install ./code_*.deb",
            "sudo dpkg --force-all code.deb",
            "sudo chmod +x code.deb",
            "snap code.deb",
        ],
        correct: 0,
        explanation: "apt install ./file.deb xử lý dependency tốt hơn dpkg -i.",
    },
    {
        question: "Lệnh cài VS Code bằng Snap là gì?",
        options: [
            "sudo snap install code --classic",
            "sudo apt snap code",
            "snap code --deb",
            "sudo code install snap",
        ],
        correct: 0,
        explanation: "VS Code snap package dùng tên code và cần --classic.",
    },
    {
        question: "Extension nào hỗ trợ Python chính trong VS Code?",
        options: [
            "ms-python.python",
            "ms-azuretools.vscode-docker",
            "eamodio.gitlens",
            "dbaeumer.vscode-eslint",
        ],
        correct: 0,
        explanation: "ms-python.python là extension Python chính của VS Code.",
    },
    {
        question:
            "VS Code báo Import requests could not be resolved dù đã pip install requests. Nguyên nhân thường gặp là gì?",
        options: [
            "Chọn sai Python interpreter, chưa chọn .venv/bin/python",
            "Chưa cài Docker",
            "Port 3000 bị chiếm",
            "Git chưa init",
        ],
        correct: 0,
        explanation:
            "VS Code cần dùng đúng interpreter trong .venv để nhận thư viện đã cài.",
    },
    {
        question:
            "Terminal VS Code báo nvm: command not found, cách xử lý nhanh với Bash là gì?",
        options: [
            "source ~/.bashrc",
            "sudo code .",
            "git init",
            "apt autoremove",
        ],
        correct: 0,
        explanation:
            "Terminal chưa nạp cấu hình shell có NVM_DIR, nên source ~/.bashrc thường khắc phục.",
    },
    {
        question: "Vì sao không nên chạy sudo code .?",
        options: [
            "Có thể làm file project bị đổi owner thành root",
            "VS Code không hỗ trợ Linux",
            "Sẽ xóa Git",
            "Không chạy được terminal",
        ],
        correct: 0,
        explanation:
            "Chạy VS Code bằng root có thể tạo/sửa file với owner root, khiến user thường mất quyền sửa.",
    },
    {
        question: "Không nên mở VS Code bằng code ~ hoặc code / vì sao?",
        options: [
            "VS Code có thể scan quá nhiều file và bị chậm",
            "Lệnh này xóa home",
            "Lệnh này tắt Ubuntu",
            "Không có extension nào chạy",
        ],
        correct: 0,
        explanation:
            "Mở thư mục quá rộng như / hoặc ~ khiến VS Code phải theo dõi rất nhiều file, có thể chậm.",
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
