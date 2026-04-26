import React, { useState } from "react";
import {
    Boxes,
    Box,
    Terminal,
    Code2,
    Braces,
    Settings,
    PackageCheck,
    Layers,
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
    FolderOpen,
    FileText,
    GitBranch,
    Download,
    RefreshCw,
    Search,
    Cpu,
    PackageOpen,
    Archive,
    Lock,
    Database,
    Play,
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
                                Runtime · Virtual Environments · nvm · pyenv
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 11
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 11.4
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" /> Tách
                        môi trường theo từng project
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Quản Lý Môi Trường Ảo <br />
                        <span className="text-orange-500">
                            venv, virtualenv, nvm, pyenv
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Bạn sẽ hiểu môi trường ảo là gì, dùng{" "}
                        <code className="text-orange-300">venv</code>/
                        <code className="text-orange-300">virtualenv</code> cho
                        Python project, dùng{" "}
                        <code className="text-orange-300">nvm</code> để đổi
                        Node.js version, dùng{" "}
                        <code className="text-orange-300">pyenv</code> để quản
                        lý nhiều Python version và biết khi nào cần kết hợp{" "}
                        <code className="text-orange-300">pyenv + venv</code>.
                    </p>
                </section>

                <section className="bg-yellow-500/10 border border-yellow-500/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-5 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center shrink-0">
                        <ShieldAlert size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Không commit môi trường ảo lên Git
                        </h3>
                        <p className="text-yellow-100 leading-relaxed">
                            Không commit thư mục{" "}
                            <code className="text-white">.venv/</code> hoặc{" "}
                            <code className="text-white">node_modules/</code>.
                            Hãy commit file mô tả dependencies như{" "}
                            <code className="text-white">requirements.txt</code>
                            , <code className="text-white">package.json</code>,{" "}
                            <code className="text-white">
                                package-lock.json
                            </code>
                            , <code className="text-white">.nvmrc</code> hoặc{" "}
                            <code className="text-white">.python-version</code>.
                        </p>
                    </div>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <VirtualEnvConceptCard />
                    <ToolPicker />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="blue"
                        icon={<Boxes size={22} />}
                        title="Môi trường ảo là gì?"
                        subtitle="Mỗi project có hộp đồ nghề riêng để tránh xung đột version thư viện và không làm bẩn hệ thống."
                    />
                    <VirtualEnvIntroSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="green"
                        icon={<Layers size={22} />}
                        title="So sánh venv, virtualenv, nvm, pyenv"
                        subtitle="venv/virtualenv tách thư viện Python; nvm đổi Node.js version; pyenv đổi Python version."
                    />
                    <CompareToolsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="cyan"
                        icon={<Code2 size={22} />}
                        title="Python venv: workflow chuẩn"
                        subtitle="Tạo .venv, activate, pip install, pip freeze, khôi phục từ requirements.txt và deactivate."
                    />
                    <PythonVenvSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="purple"
                        icon={<Archive size={22} />}
                        title="virtualenv: lựa chọn linh hoạt hơn"
                        subtitle="virtualenv cũng tạo môi trường ảo Python, hữu ích với project cũ hoặc môi trường phức tạp."
                    />
                    <VirtualenvSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="orange"
                        icon={<Braces size={22} />}
                        title="Node.js nvm: nhiều version Node.js"
                        subtitle="Cài Node 18/20, chuyển version bằng nvm use, đặt default và dùng .nvmrc theo project."
                    />
                    <NvmSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="pink"
                        icon={<Cpu size={22} />}
                        title="Python pyenv: nhiều version Python"
                        subtitle="Cài Python từ source, dùng pyenv global/local và kết hợp với venv để tách thư viện."
                    />
                    <PyenvSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="yellow"
                        icon={<GitBranch size={22} />}
                        title="Gitignore cho môi trường ảo"
                        subtitle="Bỏ qua .venv, node_modules, __pycache__, .env và file log; commit requirements/package files thay thế."
                    />
                    <GitignoreSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="8"
                        color="red"
                        icon={<Bug size={22} />}
                        title="Lỗi phổ biến và cách xử lý"
                        subtitle="Thiếu python3-venv, activate sai đường dẫn, pip sai môi trường, nvm/pyenv command not found, build Python lỗi và commit nhầm env."
                    />
                    <CommonErrorsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="9"
                        color="teal"
                        icon={<Wrench size={22} />}
                        title="Bài tập thực hành"
                        subtitle="Tạo Python venv, dùng .nvmrc cho Node.js và kết hợp pyenv + venv cho project cần Python 3.11."
                    />
                    <PracticeSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="10"
                        color="emerald"
                        icon={<ListChecks size={22} />}
                        title="Tóm tắt nhanh"
                        subtitle="Các lệnh venv, virtualenv, nvm, pyenv, pip freeze và file version cần nhớ."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <PackageCheck className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức bài 11.4
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Ôn lại venv, virtualenv, nvm, pyenv, .nvmrc,
                                    .python-version, requirements.txt và lỗi môi
                                    trường ảo.
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
                        Bạn đã biết quản lý môi trường ảo. Tiếp theo là cài VS
                        Code và bộ công cụ lập trình trên Ubuntu.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                        Bài tiếp theo: 11.5 — Cài đặt VS Code và công cụ lập
                        trình <ChevronRight size={20} />
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
        cyan: "bg-cyan-500/20 text-cyan-400",
        purple: "bg-purple-500/20 text-purple-400",
        orange: "bg-orange-500/20 text-orange-400",
        pink: "bg-pink-500/20 text-pink-400",
        yellow: "bg-yellow-500/20 text-yellow-400",
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

function VirtualEnvConceptCard() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-orange-500/15 text-orange-400 rounded-2xl flex items-center justify-center">
                    <Boxes size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        Mỗi project một “hộp đồ nghề”
                    </h3>
                    <p className="text-slate-500 text-sm">
                        Không xung đột dependency
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5">
                    <XCircle className="text-red-400 mb-3" />
                    <div className="font-bold text-white mb-2">
                        Không dùng env
                    </div>
                    <p className="text-sm text-slate-400">
                        Django 3.2 và Django 5.0 cài chung vào Python hệ thống →
                        dễ xung đột.
                    </p>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-5">
                    <CheckCircle2 className="text-green-400 mb-3" />
                    <div className="font-bold text-white mb-2">Dùng env</div>
                    <p className="text-sm text-slate-400">
                        project-a có .venv riêng, project-b có .venv riêng → ổn
                        định hơn.
                    </p>
                </div>
            </div>
            <div className="bg-black border border-slate-800 rounded-2xl p-5 font-mono text-sm text-slate-300 whitespace-pre-wrap">{`project-a/.venv → Django 3.2\nproject-b/.venv → Django 5.0\n\nProject nào dùng thư viện của project đó.`}</div>
        </div>
    );
}

function ToolPicker() {
    const [tool, setTool] = useState("venv");
    const data = {
        venv: {
            icon: "🐍",
            title: "venv",
            use: "Tạo môi trường thư viện riêng cho Python project",
            cmd: "python3 -m venv .venv\nsource .venv/bin/activate",
        },
        virtualenv: {
            icon: "📦",
            title: "virtualenv",
            use: "Tạo env Python linh hoạt hơn, hữu ích với project cũ/phức tạp",
            cmd: "pip install virtualenv\nvirtualenv .venv",
        },
        nvm: {
            icon: "🟢",
            title: "nvm",
            use: "Cài và chuyển đổi nhiều phiên bản Node.js",
            cmd: "nvm install 20\nnvm use 20",
        },
        pyenv: {
            icon: "🔧",
            title: "pyenv",
            use: "Cài và chuyển đổi nhiều phiên bản Python",
            cmd: "pyenv install 3.11.8\npyenv local 3.11.8",
        },
    };
    const item = data[tool];
    return (
        <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Settings className="text-orange-400" /> Chọn đúng công cụ
            </h3>
            <p className="text-slate-400 mb-6">
                Bấm để xem công cụ nào giải quyết vấn đề nào.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-5">
                {Object.keys(data).map((key) => (
                    <button
                        key={key}
                        onClick={() => setTool(key)}
                        className={`p-3 rounded-xl border font-bold text-sm ${tool === key ? "bg-orange-500 text-white border-orange-500" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"}`}
                    >
                        {data[key].title}
                    </button>
                ))}
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="font-bold text-white text-2xl mb-2">
                    {item.title}
                </div>
                <p className="text-slate-400 text-sm mb-4">{item.use}</p>
                <pre className="bg-black/50 border border-slate-800 rounded-xl p-4 text-sm text-green-400 overflow-x-auto">
                    <code>{item.cmd}</code>
                </pre>
            </div>
        </div>
    );
}

function VirtualEnvIntroSection() {
    return (
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
            <CodeBlock
                title="virtual-env-idea.txt"
                code={`# Không dùng môi trường ảo:\nPython hệ thống\n├── Django 3.2\n├── Django 5.0\n├── requests\n├── flask\n└── đủ thứ thư viện khác\n\n# Dùng môi trường ảo:\nproject-a/\n└── .venv/\n    └── Django 3.2\n\nproject-b/\n└── .venv/\n    └── Django 5.0`}
            />
            <CheatCard
                title="Lợi ích"
                rows={[
                    [
                        "Không xung đột",
                        "Mỗi project dùng version thư viện riêng",
                    ],
                    [
                        "Không bẩn hệ thống",
                        "Không cài lung tung vào Python hệ thống",
                    ],
                    ["Dễ khôi phục", "Cài lại từ requirements.txt"],
                    ["Dễ làm nhóm", "Ai cũng tạo env giống nhau hơn"],
                ]}
            />
        </div>
    );
}

function CompareToolsSection() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ToolCard
                title="venv"
                badge="Python"
                desc="Tạo môi trường thư viện riêng, có sẵn trong Python 3."
                cmd="python3 -m venv .venv"
            />
            <ToolCard
                title="virtualenv"
                badge="Python"
                desc="Tạo env Python linh hoạt hơn, hữu ích cho project cũ."
                cmd="virtualenv .venv"
            />
            <ToolCard
                title="nvm"
                badge="Node.js"
                desc="Cài và đổi version Node.js theo project."
                cmd="nvm use 20"
            />
            <ToolCard
                title="pyenv"
                badge="Python"
                desc="Cài và đổi version Python theo project."
                cmd="pyenv local 3.11.8"
            />
        </div>
    );
}

function ToolCard({ title, badge, desc, cmd }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <div className="text-xs text-orange-300 font-bold uppercase mb-2">
                {badge}
            </div>
            <div className="font-bold text-white text-xl mb-2">{title}</div>
            <p className="text-sm text-slate-500 mb-4">{desc}</p>
            <code className="text-green-400 text-sm">{cmd}</code>
        </div>
    );
}

function PythonVenvSection() {
    const [tab, setTab] = useState("create");
    const tabs = [
        ["create", "Tạo .venv"],
        ["deps", "Cài dependencies"],
        ["restore", "Khôi phục"],
        ["check", "Kiểm tra đúng env"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="cyan">
            {tab === "create" && (
                <CodeBlock
                    title="create-python-venv.sh"
                    code={`sudo apt update\nsudo apt install python3-venv python3-pip\n\nmkdir weather-app\ncd weather-app\n\npython3 -m venv .venv\nsource .venv/bin/activate\n\n# Terminal thường đổi thành:\n# (.venv) kha@ubuntu:~/weather-app$\n\n# Thoát môi trường ảo\ndeactivate`}
                />
            )}
            {tab === "deps" && (
                <CodeBlock
                    title="install-python-deps.sh"
                    code={`source .venv/bin/activate\n\npip install requests python-dotenv\npip list\n\n# Lưu dependencies\npip freeze > requirements.txt\ncat requirements.txt`}
                />
            )}
            {tab === "restore" && (
                <CodeBlock
                    title="restore-from-requirements.sh"
                    code={`# Khi clone project có requirements.txt\npython3 -m venv .venv\nsource .venv/bin/activate\n\npip install -r requirements.txt\npip list\n\n# Không cần copy thư mục .venv từ máy khác.`}
                />
            )}
            {tab === "check" && (
                <CodeBlock
                    title="check-python-pip-path.sh"
                    code={`source .venv/bin/activate\n\nwhich python\nwhich pip\n\n# Output đúng nên có .venv:\n# /home/kha/project/.venv/bin/python\n# /home/kha/project/.venv/bin/pip\n\npython --version\npip --version`}
                />
            )}
        </Tabbed>
    );
}

function VirtualenvSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="virtualenv-basic.sh"
                code={`# Cài virtualenv trong môi trường phù hợp\npip install virtualenv\n\n# Nếu chưa có pip:\nsudo apt install python3-pip\n\n# Tạo môi trường ảo\nvirtualenv .venv\n\n# Kích hoạt giống venv\nsource .venv/bin/activate\n\n# Cài thư viện\npip install requests`}
            />
            <CheatCard
                title="Khi nào dùng virtualenv?"
                rows={[
                    ["Người mới", "venv thường đã đủ"],
                    ["Project cũ", "Có thể cần virtualenv"],
                    ["Môi trường phức tạp", "virtualenv linh hoạt hơn"],
                    ["Tốc độ tạo env", "Có thể nhanh hơn trong vài trường hợp"],
                ]}
            />
        </div>
    );
}

function NvmSection() {
    const [tab, setTab] = useState("install");
    const tabs = [
        ["install", "Cài nvm"],
        ["versions", "Node 18/20"],
        ["nvmrc", ".nvmrc"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="orange">
            {tab === "install" && (
                <CodeBlock
                    title="install-nvm.sh"
                    code={`nvm --version\n# Nếu command not found, cài nvm:\n\nsudo apt update\nsudo apt install curl\n\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash\n\n# Nạp lại shell\nsource ~/.bashrc\n\nnvm --version`}
                />
            )}
            {tab === "versions" && (
                <CodeBlock
                    title="nvm-node-versions.sh"
                    code={`# Cài nhiều version Node.js\nnvm install --lts\nnvm install 18\nnvm install 20\n\n# Chọn version\nnvm use 20\nnode --version\nnpm --version\n\n# Đặt mặc định\nnvm alias default 20\n\n# Xem danh sách\nnvm list`}
                />
            )}
            {tab === "nvmrc" && (
                <CodeBlock
                    title="project-nvmrc.sh"
                    code={`mkdir node-version-demo\ncd node-version-demo\n\necho "20" > .nvmrc\ncat .nvmrc\n\n# nvm đọc version từ .nvmrc\nnvm use\n\n# Khởi tạo project\nnpm init -y\n\n# Từ nay người khác vào project chỉ cần:\n# nvm use\n# npm install`}
                />
            )}
        </Tabbed>
    );
}

function PyenvSection() {
    const [tab, setTab] = useState("deps");
    const tabs = [
        ["deps", "Build deps"],
        ["install", "Cài pyenv"],
        ["python", "Cài Python"],
        ["combo", "pyenv + venv"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="pink">
            {tab === "deps" && (
                <CodeBlock
                    title="pyenv-build-deps.sh"
                    code={`sudo apt update\n\nsudo apt install -y make build-essential libssl-dev zlib1g-dev \\\nlibbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \\\nlibncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev \\\nlibffi-dev liblzma-dev\n\n# Các gói này cần để pyenv build Python từ source.`}
                />
            )}
            {tab === "install" && (
                <CodeBlock
                    title="install-pyenv.sh"
                    code={`curl https://pyenv.run | bash\n\n# Thêm vào cuối ~/.bashrc:\ncat >> ~/.bashrc << 'EOF'\nexport PYENV_ROOT="$HOME/.pyenv"\ncommand -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"\neval "$(pyenv init -)"\nEOF\n\nsource ~/.bashrc\npyenv --version`}
                />
            )}
            {tab === "python" && (
                <CodeBlock
                    title="pyenv-install-python.sh"
                    code={`# Xem version có thể cài\npyenv install --list\n\n# Cài Python cụ thể\npyenv install 3.11.8\npyenv install 3.12.2\n\n# Chọn global cho user\npyenv global 3.11.8\n\n# Chọn local cho project\nmkdir pyenv-demo\ncd pyenv-demo\npyenv local 3.11.8\n\ncat .python-version\npython --version\nwhich python`}
                />
            )}
            {tab === "combo" && (
                <CodeBlock
                    title="pyenv-plus-venv.sh"
                    code={`# pyenv chọn Python version\npyenv local 3.11.8\npython --version\n# Python 3.11.8\n\n# venv tạo môi trường thư viện riêng từ Python đó\npython -m venv .venv\nsource .venv/bin/activate\n\npython --version\npip install requests\npip freeze > requirements.txt\n\n# Kết luận:\n# pyenv chọn Python version.\n# venv tách thư viện cho project.`}
                />
            )}
        </Tabbed>
    );
}

function GitignoreSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="gitignore-for-envs.sh"
                code={`cat > .gitignore << 'EOF'\n.venv/\nnode_modules/\n__pycache__/\n.env\n*.log\nEOF\n\n# Nếu lỡ add vào staging:\ngit rm -r --cached .venv node_modules\n\ngit add .gitignore\ngit commit -m "Add gitignore for virtual environments"`}
            />
            <CheatCard
                title="Nên commit gì?"
                rows={[
                    ["Python", "requirements.txt hoặc pyproject.toml"],
                    ["Node.js", "package.json + package-lock.json"],
                    ["nvm", ".nvmrc"],
                    ["pyenv", ".python-version"],
                    ["Không commit", ".venv/ và node_modules/"],
                ]}
            />
        </div>
    );
}

function CommonErrorsSection() {
    const [tab, setTab] = useState("ensurepip");
    const tabs = [
        ["ensurepip", "ensurepip"],
        ["activate", "activate path"],
        ["pip", "pip sai env"],
        ["nvm", "nvm missing"],
        ["node", "node version"],
        ["pyenv", "pyenv missing"],
        ["build", "build failed"],
        ["git", "commit env"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="red">
            {tab === "ensurepip" && (
                <CodeBlock
                    title="ensurepip-not-available.sh"
                    code={`python3 -m venv .venv\n# The virtual environment was not created successfully because ensurepip is not available.\n# On Debian/Ubuntu systems, you need to install the python3-venv package.\n\n# Sửa:\nsudo apt update\nsudo apt install python3-venv\npython3 -m venv .venv`}
                />
            )}
            {tab === "activate" && (
                <CodeBlock
                    title="wrong-activate-path.sh"
                    code={`source venv/bin/activate\n# bash: venv/bin/activate: No such file or directory\n\n# Kiểm tra thư mục:\nls -la\n\n# Nếu env tên .venv thì chạy:\nsource .venv/bin/activate`}
                />
            )}
            {tab === "pip" && (
                <CodeBlock
                    title="pip-installed-wrong-env.sh"
                    code={`pip install requests\n# Nhưng app vẫn lỗi:\n# ModuleNotFoundError: No module named 'requests'\n\n# Kiểm tra:\nwhich python\nwhich pip\n\n# Nếu không thấy .venv trong đường dẫn:\nsource .venv/bin/activate\npip install requests\n\nwhich python\nwhich pip`}
                />
            )}
            {tab === "nvm" && (
                <CodeBlock
                    title="nvm-command-not-found.sh"
                    code={`nvm --version\n# nvm: command not found\n\n# Với Bash:\nsource ~/.bashrc\ngrep -n "NVM_DIR" ~/.bashrc\n\n# Với Zsh:\nsource ~/.zshrc`}
                />
            )}
            {tab === "node" && (
                <CodeBlock
                    title="node-still-old-version.sh"
                    code={`nvm use 20\nnode --version\nwhich node\n\n# Nếu output là /usr/bin/node, bạn đang dùng Node cài bằng apt.\n# Khi dùng nvm, output thường là:\n# /home/kha/.nvm/versions/node/v20.11.1/bin/node\n\nsource ~/.bashrc\nnvm use 20\nwhich node\nnode --version\n\n# Nếu vẫn rối, cân nhắc gỡ Node apt:\nsudo apt remove nodejs npm`}
                />
            )}
            {tab === "pyenv" && (
                <CodeBlock
                    title="pyenv-command-not-found.sh"
                    code={`pyenv --version\n# pyenv: command not found\n\n# Đảm bảo ~/.bashrc có:\nexport PYENV_ROOT="$HOME/.pyenv"\ncommand -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"\neval "$(pyenv init -)"\n\nsource ~/.bashrc\npyenv --version`}
                />
            )}
            {tab === "build" && (
                <CodeBlock
                    title="pyenv-build-failed.sh"
                    code={`pyenv install 3.11.8\n# BUILD FAILED (Ubuntu 22.04 using python-build ...)\n\n# Sửa: cài build dependencies\nsudo apt update\nsudo apt install -y make build-essential libssl-dev zlib1g-dev \\\nlibbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \\\nlibncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev \\\nlibffi-dev liblzma-dev\n\npyenv install 3.11.8`}
                />
            )}
            {tab === "git" && (
                <CodeBlock
                    title="committed-venv-node-modules.sh"
                    code={`git add .\n# Lỡ thấy Git thêm rất nhiều file trong .venv/ hoặc node_modules/\n\ncat > .gitignore << 'EOF'\n.venv/\nnode_modules/\n__pycache__/\n.env\n*.log\nEOF\n\n# Xóa khỏi staging/index, không xóa file local\ngit rm -r --cached .venv node_modules\n\ngit add .gitignore\ngit commit -m "Add gitignore for virtual environments"`}
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
                title="Python venv"
                code={`mkdir venv-practice\ncd venv-practice\npython3 -m venv .venv\nsource .venv/bin/activate\npip install requests\npip freeze > requirements.txt\ncat requirements.txt\ndeactivate`}
                tasks={[
                    "Dấu hiệu env đang activate là gì?",
                    "requirements.txt dùng để làm gì?",
                    "deactivate làm gì?",
                ]}
            />
            <PracticeCard
                level="Trung bình"
                title="Node .nvmrc"
                code={`mkdir nvm-practice\ncd nvm-practice\necho "20" > .nvmrc\nnvm use\nnode --version\nnpm init -y`}
                tasks={[
                    ".nvmrc chứa gì?",
                    "nvm use lấy version từ đâu?",
                    "node --version là gì?",
                ]}
            />
            <PracticeCard
                level="Nâng cao"
                title="pyenv + venv"
                code={`pyenv install 3.11.8\nmkdir pyenv-venv-demo\ncd pyenv-venv-demo\npyenv local 3.11.8\npython --version\npython -m venv .venv\nsource .venv/bin/activate\npip install requests\npip freeze > requirements.txt`}
                tasks={[
                    "pyenv local tạo file gì?",
                    "which python có .pyenv không?",
                    "venv dùng Python version nào?",
                    "requirements.txt có requests không?",
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
    const activeMap = {
        cyan: "bg-cyan-500",
        orange: "bg-orange-500",
        pink: "bg-pink-500",
        red: "bg-red-500",
    };
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
            title: "venv",
            rows: [
                ["python3 -m venv .venv", "tạo env"],
                ["source .venv/bin/activate", "activate"],
                ["deactivate", "thoát"],
                ["pip install", "cài thư viện"],
                ["pip freeze", "lưu deps"],
            ],
        },
        {
            title: "virtualenv",
            rows: [
                ["pip install virtualenv", "cài"],
                ["virtualenv .venv", "tạo env"],
                ["source .venv/bin/activate", "activate"],
                ["venv đủ cho người mới", "ghi nhớ"],
            ],
        },
        {
            title: "nvm",
            rows: [
                ["nvm install --lts", "Node LTS"],
                ["nvm install 20", "Node 20"],
                ["nvm use 20", "dùng version"],
                ["nvm alias default 20", "mặc định"],
                ["nvm list", "danh sách"],
            ],
        },
        {
            title: "pyenv",
            rows: [
                ["pyenv install 3.11.8", "cài Python"],
                ["pyenv local 3.11.8", "project version"],
                ["pyenv global 3.11.8", "user version"],
                [".python-version", "file local"],
                ["shims/python", "đường dẫn pyenv"],
            ],
        },
        {
            title: "Files",
            rows: [
                ["requirements.txt", "Python deps"],
                [".nvmrc", "Node version"],
                [".python-version", "Python version"],
                [".gitignore", "bỏ env/cache"],
                ["package-lock.json", "Node lockfile"],
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
        question: "Môi trường ảo giúp giải quyết vấn đề gì?",
        options: [
            "Tách thư viện/version theo từng project để tránh xung đột",
            "Mở port firewall",
            "Format ổ đĩa",
            "Tạo user Linux",
        ],
        correct: 0,
        explanation:
            "Mỗi project có thư viện riêng nên tránh dùng nhầm version và không làm bẩn hệ thống.",
    },
    {
        question: "venv quản lý gì?",
        options: [
            "Thư viện Python trong từng project",
            "Nhiều phiên bản Node.js",
            "Firewall rules",
            "Docker images",
        ],
        correct: 0,
        explanation: "venv tạo môi trường thư viện riêng cho Python project.",
    },
    {
        question: "pyenv khác venv ở điểm nào?",
        options: [
            "pyenv quản lý Python version, venv quản lý thư viện project",
            "pyenv mở port, venv đóng port",
            "Không khác nhau",
            "venv dùng cho Node.js",
        ],
        correct: 0,
        explanation:
            "pyenv chọn Python 3.10/3.11/3.12; venv tạo môi trường thư viện riêng từ Python đã chọn.",
    },
    {
        question: "nvm dùng để làm gì?",
        options: [
            "Cài và chuyển nhiều phiên bản Node.js",
            "Cài nhiều phiên bản Git",
            "Tạo Python virtualenv",
            "Chạy AppArmor",
        ],
        correct: 0,
        explanation:
            "nvm là Node Version Manager, dùng để cài và chuyển Node.js version.",
    },
    {
        question: "File .nvmrc dùng để làm gì?",
        options: [
            "Ghi version Node.js cho project để nvm use đọc",
            "Chứa password database",
            "Lưu commit Git",
            "Chứa Python package",
        ],
        correct: 0,
        explanation:
            "Khi chạy nvm use trong project, nvm đọc version từ .nvmrc.",
    },
    {
        question: "Dấu hiệu pip đang đúng trong .venv là gì?",
        options: [
            "which pip có đường dẫn project/.venv/bin/pip",
            "which pip là /usr/bin/pip",
            "pip không có version",
            "node --version thay đổi",
        ],
        correct: 0,
        explanation:
            "Trong venv đúng, python và pip thường nằm trong project/.venv/bin/.",
    },
    {
        question: "Không nên commit thư mục nào lên Git?",
        options: [
            ".venv/ và node_modules/",
            "requirements.txt",
            "package.json",
            ".nvmrc",
        ],
        correct: 0,
        explanation:
            ".venv/ và node_modules/ nặng, có thể khác giữa máy và cài lại được từ file dependency.",
    },
    {
        question: "pyenv local 3.11.8 tạo file gì trong project?",
        options: [
            ".python-version",
            ".nvmrc",
            "requirements.txt",
            ".gitignore",
        ],
        correct: 0,
        explanation:
            "pyenv local ghi Python version vào file .python-version trong thư mục hiện tại.",
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
