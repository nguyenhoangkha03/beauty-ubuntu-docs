import React, { useState } from "react";
import {
    Code2,
    Terminal,
    PackageCheck,
    Coffee,
    Braces,
    Blocks,
    Settings,
    AlertTriangle,
    Info,
    CheckCircle2,
    XCircle,
    Copy,
    ChevronRight,
    RotateCcw,
    Sparkles,
    Server,
    Box,
    Wrench,
    ListChecks,
    Bug,
    Download,
    RefreshCw,
    FileText,
    Play,
    FolderOpen,
    GitBranch,
    ShieldAlert,
    Database,
    Globe,
    Cpu,
    Layers,
    PackageOpen,
    KeyRound,
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
                                Runtime · Python · Node.js · Java
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 11
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 11.1
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" /> Bắt
                        đầu Phần 11 — Runtime & môi trường lập trình
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Cài Đặt & Quản Lý <br />
                        <span className="text-orange-500">
                            Python, Node.js, Java
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Bài này giúp bạn kiểm tra, cài đặt và quản lý môi trường
                        lập trình trên Ubuntu:{" "}
                        <code className="text-orange-300">Python + venv</code>,{" "}
                        <code className="text-orange-300">Node.js + nvm</code>,
                        và{" "}
                        <code className="text-orange-300">
                            Java JDK + update-alternatives
                        </code>
                        .
                    </p>
                </section>

                <section className="bg-yellow-500/10 border border-yellow-500/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-5 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center shrink-0">
                        <ShieldAlert size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Nguyên tắc an toàn khi cài môi trường lập trình
                        </h3>
                        <p className="text-yellow-100 leading-relaxed">
                            Với Python project, hãy dùng{" "}
                            <code className="text-white">venv</code> thay vì cài
                            package lung tung vào Python hệ thống. Với Node.js
                            project, nên dùng{" "}
                            <code className="text-white">nvm</code> để tránh lỗi
                            quyền và dễ đổi version. Với Java, hãy cài{" "}
                            <code className="text-white">JDK</code> nếu bạn cần
                            biên dịch code, không chỉ JRE.
                        </p>
                    </div>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <RuntimeConceptCard />
                    <TechPicker />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="blue"
                        icon={<Code2 size={22} />}
                        title="Runtime, package manager, compiler là gì?"
                        subtitle="Runtime chạy code, package manager cài thư viện, compiler/build tool biên dịch hoặc build project."
                    />
                    <CoreConceptSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="green"
                        icon={<Terminal size={22} />}
                        title="Kiểm tra công cụ đã có trên máy"
                        subtitle="Trước khi cài mới, luôn kiểm tra version hiện tại: python3, pip3, node, npm, java, javac."
                    />
                    <CheckVersionsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="cyan"
                        icon={<Blocks size={22} />}
                        title="Python trên Ubuntu: apt + venv"
                        subtitle="Cài Python, pip, venv; tạo môi trường ảo; cài thư viện requests và chạy app.py đầu tiên."
                    />
                    <PythonSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="orange"
                        icon={<Braces size={22} />}
                        title="Node.js trên Ubuntu: apt hoặc nvm"
                        subtitle="apt đơn giản nhưng có thể cũ; nvm phù hợp dự án thật vì quản lý nhiều phiên bản Node.js tốt hơn."
                    />
                    <NodeSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="purple"
                        icon={<Coffee size={22} />}
                        title="Java trên Ubuntu: OpenJDK và update-alternatives"
                        subtitle="Cài JDK 17/21, kiểm tra java/javac, biên dịch Main.java và chọn Java mặc định."
                    />
                    <JavaSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="pink"
                        icon={<Globe size={22} />}
                        title="Ví dụ thực tế: Express server nhỏ"
                        subtitle="Tạo project Node.js, cài express, chạy server ở 127.0.0.1:3000 và test bằng curl."
                    />
                    <ExpressSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="red"
                        icon={<Bug size={22} />}
                        title="Lỗi phổ biến và cách xử lý"
                        subtitle="python/pip command not found, externally-managed-environment, nvm missing, npm EACCES, javac missing và Java version sai."
                    />
                    <CommonErrorsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="8"
                        color="yellow"
                        icon={<FolderOpen size={22} />}
                        title="Bài tập thực hành"
                        subtitle="Kiểm tra version, tạo Python venv, cài Node bằng nvm và dựng Express server local."
                    />
                    <PracticeSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="9"
                        color="emerald"
                        icon={<ListChecks size={22} />}
                        title="Tóm tắt nhanh"
                        subtitle="Các lệnh kiểm tra, cài đặt và quản lý version Python, Node.js, Java cần nhớ."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <PackageCheck className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức bài 11.1
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Ôn lại venv, nvm, JDK/JRE,
                                    update-alternatives, pip externally managed
                                    và npm EACCES.
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
                        Bạn đã biết chuẩn bị runtime lập trình. Tiếp theo là cài
                        Docker và Docker Compose trên Ubuntu.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                        Bài tiếp theo: 11.2 — Cài đặt Docker & Docker Compose{" "}
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
        cyan: "bg-cyan-500/20 text-cyan-400",
        orange: "bg-orange-500/20 text-orange-400",
        purple: "bg-purple-500/20 text-purple-400",
        pink: "bg-pink-500/20 text-pink-400",
        red: "bg-red-500/20 text-red-400",
        yellow: "bg-yellow-500/20 text-yellow-400",
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

function RuntimeConceptCard() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-orange-500/15 text-orange-400 rounded-2xl flex items-center justify-center">
                    <Cpu size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        Ba nhóm công cụ
                    </h3>
                    <p className="text-slate-500 text-sm">
                        Runtime · package manager · compiler
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-3 mb-5">
                <MiniCard
                    title="Runtime"
                    desc="Chạy code"
                    code="python3, node, java"
                />
                <MiniCard
                    title="Package manager"
                    desc="Cài thư viện"
                    code="pip, npm, maven"
                />
                <MiniCard
                    title="Compiler/build"
                    desc="Biên dịch/build"
                    code="javac, mvn, gradle"
                />
            </div>
            <div className="bg-black border border-slate-800 rounded-2xl p-5 font-mono text-sm text-slate-300 whitespace-pre-wrap">{`Runtime          = bếp để nấu món ăn\nPackage manager  = nơi mua nguyên liệu\nSource code       = công thức nấu ăn`}</div>
        </div>
    );
}

function MiniCard({ title, desc, code }) {
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
            <div className="font-bold text-white mb-1">{title}</div>
            <p className="text-xs text-slate-500 mb-3">{desc}</p>
            <code className="text-orange-300 text-xs">{code}</code>
        </div>
    );
}

function TechPicker() {
    const [tech, setTech] = useState("python");
    const data = {
        python: {
            icon: "🐍",
            title: "Python",
            use: "Script, automation, AI, backend, data, tool nội bộ",
            check: "python3 --version\npip3 --version",
            install: "sudo apt install python3 python3-pip python3-venv",
        },
        node: {
            icon: "🟢",
            title: "Node.js",
            use: "Backend JavaScript, API, frontend tooling, React/Vue/Angular",
            check: "node --version\nnpm --version",
            install: "nvm install --lts\nnvm use 20",
        },
        java: {
            icon: "☕",
            title: "Java",
            use: "Backend doanh nghiệp, Android, Spring Boot, hệ thống lớn",
            check: "java -version\njavac -version",
            install: "sudo apt install openjdk-17-jdk",
        },
    };
    const item = data[tech];
    return (
        <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Layers className="text-orange-400" /> Chọn công nghệ
            </h3>
            <p className="text-slate-400 mb-6">
                Bấm để xem công dụng, lệnh kiểm tra và cách cài nhanh.
            </p>
            <div className="grid grid-cols-3 gap-3 mb-5">
                {Object.keys(data).map((key) => (
                    <button
                        key={key}
                        onClick={() => setTech(key)}
                        className={`p-3 rounded-xl border font-bold text-sm ${tech === key ? "bg-orange-500 text-white border-orange-500" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"}`}
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
                <pre className="bg-black/50 border border-slate-800 rounded-xl p-4 text-xs text-green-400 overflow-x-auto mb-3">
                    <code>{item.check}</code>
                </pre>
                <pre className="bg-black/50 border border-slate-800 rounded-xl p-4 text-xs text-orange-300 overflow-x-auto">
                    <code>{item.install}</code>
                </pre>
            </div>
        </div>
    );
}

function CoreConceptSection() {
    return (
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
            <CodeBlock
                title="runtime-package-compiler.sh"
                code={`python3 app.py\n# python3 là runtime chạy file app.py\n\nnpm install express\n# npm tải thư viện express cho Node.js\n\njavac Main.java\n# javac biên dịch file Java\n\njava Main\n# java runtime chạy bytecode Main.class`}
            />
            <CheatCard
                title="Quản lý version"
                rows={[
                    ["Python", "venv cơ bản, pyenv nâng cao"],
                    ["Node.js", "nvm để đổi version theo project"],
                    ["Java", "update-alternatives hoặc SDKMAN"],
                    ["apt", "Ổn định, dễ dùng, có thể không mới nhất"],
                ]}
            />
        </div>
    );
}

function CheckVersionsSection() {
    return (
        <CodeBlock
            title="check-dev-tools.sh"
            code={`python3 --version\npip3 --version\n\nnode --version\nnpm --version\n\njava -version\njavac -version\n\n# Câu hỏi cần trả lời:\n# - Máy đã có Python chưa?\n# - Máy đã có Node.js chưa?\n# - Máy đã có Java JDK chưa?\n# - Lệnh nào báo command not found?`}
        />
    );
}

function PythonSection() {
    const [tab, setTab] = useState("install");
    const tabs = [
        ["install", "Cài đặt"],
        ["venv", "venv"],
        ["demo", "Demo requests"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="cyan">
            {tab === "install" && (
                <CodeBlock
                    title="install-python.sh"
                    code={`sudo apt update\nsudo apt install python3 python3-pip python3-venv\n\npython3 --version\npip3 --version\n\n# python3      : runtime Python\n# python3-pip  : công cụ cài thư viện Python\n# python3-venv : công cụ tạo môi trường ảo`}
                />
            )}
            {tab === "venv" && (
                <CodeBlock
                    title="python-venv.sh"
                    code={`mkdir python-demo\ncd python-demo\n\npython3 -m venv .venv\nsource .venv/bin/activate\n\n# Terminal sẽ có dạng:\n# (.venv) user@ubuntu:~/python-demo$\n\npip install requests\n\n# Thoát môi trường ảo\ndeactivate`}
                />
            )}
            {tab === "demo" && (
                <CodeBlock
                    title="python-demo-app.sh"
                    code={`cat > app.py << 'EOF'\nimport requests\n\nresponse = requests.get("https://example.com")\nprint("Status code:", response.status_code)\nEOF\n\npython app.py\n# Status code: 200\n\n# Kiểm tra package trong venv\npip list\npip freeze > requirements.txt\ncat requirements.txt`}
                />
            )}
        </Tabbed>
    );
}

function NodeSection() {
    const [tab, setTab] = useState("apt");
    const tabs = [
        ["apt", "apt"],
        ["nvm", "nvm"],
        ["project", "Node project"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="orange">
            {tab === "apt" && (
                <CodeBlock
                    title="install-node-apt.sh"
                    code={`sudo apt update\nsudo apt install nodejs npm\n\nnode --version\nnpm --version\n\n# Cách này đơn giản, ổn định.\n# Nhưng version trong Ubuntu có thể cũ hơn yêu cầu dự án.`}
                />
            )}
            {tab === "nvm" && (
                <CodeBlock
                    title="install-node-nvm.sh"
                    code={`sudo apt update\nsudo apt install curl\n\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash\n\n# Đóng/mở lại Terminal hoặc chạy:\nsource ~/.bashrc\n\nnvm --version\n\n# Cài Node.js LTS hoặc version cụ thể\nnvm install --lts\nnvm install 20\nnvm use 20\n\n# Xem version đã cài\nnvm list\n\nnode --version\nnpm --version`}
                />
            )}
            {tab === "project" && (
                <CodeBlock
                    title="node-project.sh"
                    code={`mkdir node-demo\ncd node-demo\nnpm init -y\n\ncat > app.js << 'EOF'\nconsole.log("Hello Node.js");\nconsole.log("Node version:", process.version);\nEOF\n\nnode app.js\n# Hello Node.js\n# Node version: v20.x.x`}
                />
            )}
        </Tabbed>
    );
}

function JavaSection() {
    const [tab, setTab] = useState("install");
    const tabs = [
        ["install", "Cài JDK"],
        ["hello", "Hello Java"],
        ["alts", "alternatives"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="purple">
            {tab === "install" && (
                <CodeBlock
                    title="install-openjdk.sh"
                    code={`sudo apt update\nsudo apt install openjdk-17-jdk\n\n# Nếu kho Ubuntu hỗ trợ Java 21:\nsudo apt install openjdk-21-jdk\n\njava -version\njavac -version\n\n# java  = runtime chạy Java\n# javac = compiler biên dịch Java\n# JDK   = có cả java và javac`}
                />
            )}
            {tab === "hello" && (
                <CodeBlock
                    title="hello-java.sh"
                    code={`mkdir java-demo\ncd java-demo\n\ncat > Main.java << 'EOF'\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello Java");\n        System.out.println("Java version: " + System.getProperty("java.version"));\n    }\n}\nEOF\n\njavac Main.java\nls\n# Main.class  Main.java\n\njava Main`}
                />
            )}
            {tab === "alts" && (
                <CodeBlock
                    title="java-alternatives.sh"
                    code={`# Nếu có nhiều Java version:\nsudo update-alternatives --config java\nsudo update-alternatives --config javac\n\n# Chọn số tương ứng Java 17 hoặc Java 21\n\njava -version\njavac -version`}
                />
            )}
        </Tabbed>
    );
}

function ExpressSection() {
    return (
        <CodeBlock
            title="express-demo.sh"
            code={`mkdir express-demo\ncd express-demo\nnpm init -y\nnpm install express\n\ncat > server.js << 'EOF'\nconst express = require("express");\n\nconst app = express();\nconst port = 3000;\n\napp.get("/", (req, res) => {\n  res.send("Hello from Express on Ubuntu");\n});\n\napp.listen(port, "127.0.0.1", () => {\n  console.log("Server running at http://127.0.0.1:" + port);\n});\nEOF\n\nnode server.js\n\n# Mở terminal khác để test:\ncurl http://127.0.0.1:3000\n# Hello from Express on Ubuntu`}
            note="127.0.0.1 nghĩa là server chỉ truy cập nội bộ trong máy. Muốn public cần hiểu kỹ firewall, reverse proxy và bảo mật trước."
        />
    );
}

function CommonErrorsSection() {
    const [tab, setTab] = useState("python");
    const tabs = [
        ["python", "python not found"],
        ["pip", "pip/venv"],
        ["managed", "externally managed"],
        ["nvm", "nvm missing"],
        ["npm", "npm EACCES"],
        ["java", "javac/Java version"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="red">
            {tab === "python" && (
                <CodeBlock
                    title="python-command-not-found.sh"
                    code={`python --version\n# Command 'python' not found\n\n# Trên Ubuntu thường dùng:\npython3 --version\n\n# Nếu muốn python trỏ về Python 3:\nsudo apt install python-is-python3\npython --version`}
                />
            )}
            {tab === "pip" && (
                <CodeBlock
                    title="pip-command-not-found.sh"
                    code={`pip --version\n# Command 'pip' not found\n\n# Dùng pip3:\npip3 --version\n\n# Nếu chưa có:\nsudo apt update\nsudo apt install python3-pip\n\n# Trong venv, sau khi activate thường dùng pip:\nsource .venv/bin/activate\npip --version`}
                />
            )}
            {tab === "managed" && (
                <CodeBlock
                    title="externally-managed-environment.sh"
                    code={`pip install requests\n# error: externally-managed-environment\n# This environment is externally managed\n\n# Cách đúng cho người mới:\npython3 -m venv .venv\nsource .venv/bin/activate\npip install requests\n\n# Không nên tùy tiện dùng:\npip install --break-system-packages requests`}
                />
            )}
            {tab === "nvm" && (
                <CodeBlock
                    title="nvm-command-not-found.sh"
                    code={`nvm --version\n# nvm: command not found\n\n# Cách xử lý với Bash:\nsource ~/.bashrc\ngrep -n "NVM_DIR" ~/.bashrc\n\n# Nếu dùng Zsh:\nsource ~/.zshrc`}
                />
            )}
            {tab === "npm" && (
                <CodeBlock
                    title="npm-eacces.sh"
                    code={`npm install -g nodemon\n# npm ERR! EACCES: permission denied, mkdir '/usr/local/lib/node_modules'\n\n# Nguyên nhân thường gặp:\n# Node.js cài bằng apt, global npm cần ghi thư mục hệ thống.\n\n# Khuyến nghị:\n# Dùng nvm để cài Node.js cho user hiện tại.\n\nwhich node\n# Nếu dùng nvm:\n# /home/kha/.nvm/versions/node/v20.x.x/bin/node`}
                />
            )}
            {tab === "java" && (
                <CodeBlock
                    title="java-common-errors.sh"
                    code={`javac -version\n# javac: command not found\n\n# Nguyên nhân: có thể chỉ cài JRE, chưa cài JDK.\nsudo apt update\nsudo apt install openjdk-17-jdk\n\n# Nếu Java version không đúng dự án:\njava -version\njavac -version\n\nsudo update-alternatives --config java\nsudo update-alternatives --config javac`}
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
                title="Kiểm tra version"
                code={`python3 --version\npip3 --version\nnode --version\nnpm --version\njava -version\njavac -version`}
                tasks={[
                    "Máy đã có Python chưa?",
                    "Node.js có chưa?",
                    "Java JDK có chưa?",
                    "Lệnh nào command not found?",
                ]}
            />
            <PracticeCard
                level="Trung bình"
                title="Python venv"
                code={`mkdir py-check\ncd py-check\npython3 -m venv .venv\nsource .venv/bin/activate\npip install requests`}
                tasks={[
                    "Tạo app.py",
                    "Import requests",
                    "In requests.__version__",
                    "Chạy python app.py",
                ]}
            />
            <PracticeCard
                level="Nâng cao"
                title="Node + Express"
                code={`nvm install 20\nnvm use 20\nnpm init -y\nnpm install express`}
                tasks={[
                    "Tạo server.js",
                    "Listen 127.0.0.1:3000",
                    "Chạy node server.js",
                    "Test bằng curl",
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
        purple: "bg-purple-500",
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
            title: "Python",
            rows: [
                ["python3 --version", "kiểm tra"],
                ["pip3 --version", "kiểm tra pip"],
                ["apt install python3-pip", "cài pip"],
                ["python3 -m venv .venv", "tạo venv"],
                ["source .venv/bin/activate", "kích hoạt"],
            ],
        },
        {
            title: "Node.js",
            rows: [
                ["node --version", "kiểm tra"],
                ["npm --version", "kiểm tra npm"],
                ["apt install nodejs npm", "cài bằng apt"],
                ["nvm install --lts", "Node LTS"],
                ["nvm use 20", "dùng Node 20"],
            ],
        },
        {
            title: "Java",
            rows: [
                ["java -version", "runtime"],
                ["javac -version", "compiler"],
                ["openjdk-17-jdk", "JDK 17"],
                ["update-alternatives --config java", "chọn java"],
                ["--config javac", "chọn compiler"],
            ],
        },
        {
            title: "Ghi nhớ",
            rows: [
                ["venv", "Python project"],
                ["nvm", "Node project"],
                ["JDK", "code Java"],
                ["JRE", "chỉ chạy Java"],
                ["apt", "ổn định, có thể cũ"],
            ],
        },
    ];
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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
        question:
            "Với Python project, cách cài thư viện khuyến nghị cho người mới là gì?",
        options: [
            "Tạo venv rồi pip install trong venv",
            "Cài thẳng vào Python hệ thống bằng sudo pip",
            "Luôn dùng --break-system-packages",
            "Cài bằng npm",
        ],
        correct: 0,
        explanation:
            "venv cô lập thư viện theo project và tránh làm rối Python hệ thống.",
    },
    {
        question: "Lệnh nào tạo môi trường ảo Python tên .venv?",
        options: [
            "python3 -m venv .venv",
            "pip3 create .venv",
            "python3 --virtual .venv",
            "npm init .venv",
        ],
        correct: 0,
        explanation:
            "python3 -m venv .venv tạo virtual environment trong thư mục .venv.",
    },
    {
        question: "nvm dùng để làm gì?",
        options: [
            "Quản lý nhiều phiên bản Node.js",
            "Biên dịch Java",
            "Tạo Python venv",
            "Cấu hình ufw",
        ],
        correct: 0,
        explanation:
            "nvm là Node Version Manager, giúp cài và chuyển giữa nhiều Node.js version.",
    },
    {
        question: "npm install -g báo EACCES thường nên xử lý theo hướng nào?",
        options: [
            "Dùng nvm để cài Node.js cho user hiện tại",
            "chmod 777 toàn bộ /usr/local",
            "Xóa npm",
            "Cài Java JDK",
        ],
        correct: 0,
        explanation:
            "nvm tránh cài global package vào thư mục hệ thống nên ít gặp lỗi quyền hơn.",
    },
    {
        question: "javac: command not found thường nghĩa là gì?",
        options: [
            "Chưa cài JDK, có thể chỉ có JRE",
            "Node.js bị lỗi",
            "Python đang ở venv",
            "nvm chưa source",
        ],
        correct: 0,
        explanation:
            "javac là Java compiler, có trong JDK. JRE chỉ đủ để chạy ứng dụng Java.",
    },
    {
        question: "Lệnh nào chọn Java runtime mặc định khi có nhiều version?",
        options: [
            "sudo update-alternatives --config java",
            "nvm use 20",
            "python3 -m venv .venv",
            "npm init -y",
        ],
        correct: 0,
        explanation:
            "update-alternatives --config java dùng để chọn lệnh java mặc định.",
    },
    {
        question: "Express server listen 127.0.0.1:3000 nghĩa là gì?",
        options: [
            "Chỉ truy cập nội bộ trong máy",
            "Public toàn internet",
            "Port bị đóng vĩnh viễn",
            "Chỉ Java truy cập được",
        ],
        correct: 0,
        explanation:
            "127.0.0.1 là loopback/localhost, chỉ máy hiện tại truy cập được.",
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
