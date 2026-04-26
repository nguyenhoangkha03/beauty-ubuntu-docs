import React, { useState } from "react";
import {
    Box,
    Boxes,
    Container,
    Terminal,
    Server,
    Layers,
    PackageCheck,
    Download,
    KeyRound,
    ShieldAlert,
    AlertTriangle,
    Info,
    CheckCircle2,
    XCircle,
    Copy,
    ChevronRight,
    RotateCcw,
    Sparkles,
    Settings,
    Bug,
    Wrench,
    ListChecks,
    Play,
    StopCircle,
    Trash2,
    Globe,
    FileText,
    Network,
    HardDrive,
    UserPlus,
    Lock,
    RefreshCw,
    Search,
    Activity,
    Database,
    Cpu,
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
                                Runtime · Docker Engine · Compose
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 11
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 11.2
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" /> Chạy
                        ứng dụng bằng container trên Ubuntu
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Cài Đặt Docker <br />
                        <span className="text-orange-500">
                            Và Docker Compose
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Bạn sẽ hiểu Docker là gì, khác gì máy ảo, cài{" "}
                        <code className="text-orange-300">Docker Engine</code>{" "}
                        từ repository chính thức, kiểm tra{" "}
                        <code className="text-orange-300">docker compose</code>,
                        chạy{" "}
                        <code className="text-orange-300">hello-world</code>,
                        chạy Nginx và xử lý lỗi thường gặp.
                    </p>
                </section>

                <section className="bg-red-500/10 border border-red-500/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-5 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                        <ShieldAlert size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Cảnh báo bảo mật về group docker
                        </h3>
                        <p className="text-red-100 leading-relaxed">
                            User thuộc group{" "}
                            <code className="text-white">docker</code> gần như
                            có quyền rất cao trên máy vì có thể điều khiển
                            Docker daemon. Chỉ thêm user đáng tin cậy bằng{" "}
                            <code className="text-white">
                                sudo usermod -aG docker $USER
                            </code>
                            . Không thêm user lạ vào group này.
                        </p>
                    </div>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <DockerConceptCard />
                    <ContainerVmSimulator />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="blue"
                        icon={<Box size={22} />}
                        title="Docker là gì?"
                        subtitle="Docker đóng gói ứng dụng cùng môi trường chạy vào container để chạy nhất quán hơn giữa các máy."
                    />
                    <DockerIntroSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="green"
                        icon={<Layers size={22} />}
                        title="Các thành phần Docker cần biết"
                        subtitle="Docker Engine, daemon, CLI, image, container và Docker Compose là những khái niệm nền tảng."
                    />
                    <ComponentsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="orange"
                        icon={<Download size={22} />}
                        title="Cài Docker Engine từ repository chính thức"
                        subtitle="Gỡ bản cũ, thêm GPG key, thêm Docker APT repository, rồi cài docker-ce và compose plugin."
                    />
                    <InstallDockerSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="purple"
                        icon={<PackageCheck size={22} />}
                        title="Kiểm tra Docker sau khi cài"
                        subtitle="Kiểm tra Docker CLI, Compose plugin, Docker daemon và chạy thử hello-world."
                    />
                    <VerifyDockerSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="cyan"
                        icon={<Globe size={22} />}
                        title="Chạy Nginx bằng docker run"
                        subtitle="Dùng image nginx, chạy container nền, map port 8080 của host vào port 80 trong container."
                    />
                    <NginxRunSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="yellow"
                        icon={<FileText size={22} />}
                        title="Chạy Nginx bằng Docker Compose"
                        subtitle="Định nghĩa service trong compose.yaml rồi chạy toàn bộ stack bằng docker compose up -d."
                    />
                    <ComposeSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="pink"
                        icon={<UserPlus size={22} />}
                        title="Chạy Docker không cần sudo"
                        subtitle="Thêm user vào group docker, áp dụng group mới bằng logout/login hoặc newgrp docker."
                    />
                    <DockerGroupSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="8"
                        color="red"
                        icon={<Bug size={22} />}
                        title="Lỗi phổ biến và cách xử lý"
                        subtitle="docker not found, daemon chưa chạy, permission denied, nhầm docker-compose, port bị chiếm và container name conflict."
                    />
                    <CommonErrorsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="9"
                        color="teal"
                        icon={<Wrench size={22} />}
                        title="Bài tập thực hành"
                        subtitle="Kiểm tra Docker, chạy hello-world, chạy Nginx bằng Compose và dọn stack sau khi test."
                    />
                    <PracticeSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="10"
                        color="emerald"
                        icon={<ListChecks size={22} />}
                        title="Tóm tắt nhanh"
                        subtitle="Các lệnh docker, docker compose, container, image, log và cleanup cần nhớ."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <PackageCheck className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức bài 11.2
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Ôn lại Docker Engine, image/container,
                                    compose plugin, hello-world, group docker và
                                    lỗi port conflict.
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
                        Bạn đã biết cài và chạy Docker cơ bản. Tiếp theo là cài
                        Git và cấu hình Git ban đầu.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                        Bài tiếp theo: 11.3 — Cài đặt Git và cấu hình cơ bản{" "}
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

function DockerConceptCard() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-orange-500/15 text-orange-400 rounded-2xl flex items-center justify-center">
                    <Container size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        Docker giải quyết vấn đề gì?
                    </h3>
                    <p className="text-slate-500 text-sm">
                        Chạy ứng dụng nhất quán hơn giữa các môi trường
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5">
                    <XCircle className="text-red-400 mb-3" />
                    <div className="font-bold text-white mb-2">
                        Không dùng Docker
                    </div>
                    <p className="text-sm text-slate-400">
                        Máy A Node 18, máy B Node 20, máy C thiếu thư viện → app
                        dễ lỗi khác nhau.
                    </p>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-5">
                    <CheckCircle2 className="text-green-400 mb-3" />
                    <div className="font-bold text-white mb-2">Dùng Docker</div>
                    <p className="text-sm text-slate-400">
                        App + runtime + dependency được đóng gói → chạy giống
                        nhau hơn.
                    </p>
                </div>
            </div>
            <div className="bg-black border border-slate-800 rounded-2xl p-5 font-mono text-sm text-slate-300 whitespace-pre-wrap">{`Image     = bản thiết kế căn nhà\nContainer = căn nhà đang dựng từ bản thiết kế đó\nCompose   = bản thiết kế cho nhiều căn/dịch vụ`}</div>
        </div>
    );
}

function ContainerVmSimulator() {
    const [mode, setMode] = useState("docker");
    return (
        <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Layers className="text-orange-400" /> Container khác VM thế
                nào?
            </h3>
            <p className="text-slate-400 mb-6">
                Chọn mô hình để xem cấu trúc chạy ứng dụng.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-5">
                <button
                    onClick={() => setMode("vm")}
                    className={`p-4 rounded-xl border font-bold ${mode === "vm" ? "bg-purple-500 text-white border-purple-500" : "bg-slate-950 border-slate-800 text-slate-400"}`}
                >
                    Máy ảo VM
                </button>
                <button
                    onClick={() => setMode("docker")}
                    className={`p-4 rounded-xl border font-bold ${mode === "docker" ? "bg-orange-500 text-white border-orange-500" : "bg-slate-950 border-slate-800 text-slate-400"}`}
                >
                    Docker
                </button>
            </div>
            <div className="bg-black border border-slate-800 rounded-2xl p-5 font-mono text-sm text-green-400 whitespace-pre-wrap">
                {mode === "vm"
                    ? `Hardware\n  └── Host OS\n       └── Hypervisor\n            ├── Guest OS + App A\n            └── Guest OS + App B\n\n→ Nặng hơn, khởi động chậm hơn`
                    : `Hardware\n  └── Ubuntu Host\n       └── Docker Engine\n            ├── Container App A\n            └── Container App B\n\n→ Nhẹ hơn, khởi động nhanh hơn`}
            </div>
        </div>
    );
}

function DockerIntroSection() {
    return (
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
            <CodeBlock
                title="docker-basic-idea.txt"
                code={`# Ví dụ ứng dụng Node.js cần:\nNode.js 20\nnpm packages\nsource code\nbiến môi trường\nport chạy app\n\n# Docker giúp đóng gói các phần này thành image/container.\n# Thay vì cài thủ công từng máy, bạn chạy container từ image.`}
            />
            <CheatCard
                title="Docker dùng nhiều cho"
                rows={[
                    ["Backend", "Chạy API, worker, queue"],
                    ["Database dev", "MySQL, PostgreSQL, Redis local"],
                    ["DevOps", "Deploy, CI/CD, test môi trường"],
                    ["Microservices", "Nhiều service chạy riêng"],
                ]}
            />
        </div>
    );
}

function ComponentsSection() {
    const items = [
        ["Docker Engine", "Nền tảng chạy container"],
        ["Docker daemon", "Dịch vụ nền quản lý container"],
        ["Docker CLI", "Lệnh docker trong terminal"],
        ["Image", "Khuôn mẫu tạo container"],
        ["Container", "Phiên bản đang chạy từ image"],
        ["Docker Compose", "Chạy nhiều container bằng YAML"],
    ];
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map(([title, desc]) => (
                <div
                    key={title}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-5"
                >
                    <Box className="text-orange-400 mb-3" />
                    <div className="font-bold text-white mb-1">{title}</div>
                    <p className="text-sm text-slate-500">{desc}</p>
                </div>
            ))}
        </div>
    );
}

function InstallDockerSection() {
    const [tab, setTab] = useState("precheck");
    const tabs = [
        ["precheck", "Kiểm tra"],
        ["remove", "Gỡ cũ"],
        ["repo", "Thêm repo"],
        ["install", "Cài Docker"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="orange">
            {tab === "precheck" && (
                <CodeBlock
                    title="precheck-ubuntu.sh"
                    code={`lsb_release -a\ncat /etc/os-release\n\ndpkg --print-architecture\n# Ví dụ: amd64, arm64`}
                />
            )}
            {tab === "remove" && (
                <CodeBlock
                    title="remove-old-docker.sh"
                    code={`sudo apt remove docker docker-engine docker.io containerd runc\n\n# Nếu báo chưa cài thì không sao.\n# Mục tiêu là tránh lẫn bản cũ từ Ubuntu repo với bản Docker CE chính thức.`}
                />
            )}
            {tab === "repo" && (
                <CodeBlock
                    title="add-docker-official-repo.sh"
                    code={`sudo apt update\nsudo apt install ca-certificates curl\n\nsudo install -m 0755 -d /etc/apt/keyrings\nsudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc\nsudo chmod a+r /etc/apt/keyrings/docker.asc\n\nsudo tee /etc/apt/sources.list.d/docker.sources <<EOF\nTypes: deb\nURIs: https://download.docker.com/linux/ubuntu\nSuites: $(. /etc/os-release && echo "\${UBUNTU_CODENAME:-$VERSION_CODENAME}")\nComponents: stable\nArchitectures: $(dpkg --print-architecture)\nSigned-By: /etc/apt/keyrings/docker.asc\nEOF\n\nsudo apt update`}
                />
            )}
            {tab === "install" && (
                <CodeBlock
                    title="install-docker-engine-compose.sh"
                    code={`sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin\n\n# docker-ce: Docker Engine Community Edition\n# docker-ce-cli: Docker command line\n# containerd.io: runtime quản lý container\n# docker-buildx-plugin: plugin build image nâng cao\n# docker-compose-plugin: Docker Compose plugin mới`}
                />
            )}
        </Tabbed>
    );
}

function VerifyDockerSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="verify-docker.sh"
                code={`docker --version\ndocker compose version\nsudo systemctl status docker\n\n# Chạy container đầu tiên\nsudo docker run hello-world\n\n# Xem container đang chạy\nsudo docker ps\n\n# Xem cả container đã dừng\nsudo docker ps -a`}
            />
            <CheatCard
                title="Output hello-world"
                rows={[
                    [
                        "Unable to find image locally",
                        "Máy chưa có image nên Docker sẽ tải",
                    ],
                    [
                        "Pulling from library/hello-world",
                        "Đang tải image từ registry",
                    ],
                    [
                        "Hello from Docker!",
                        "Docker đã chạy container thành công",
                    ],
                    ["Exited (0)", "Container chạy xong và thoát bình thường"],
                ]}
            />
        </div>
    );
}

function NginxRunSection() {
    return (
        <CodeBlock
            title="docker-run-nginx.sh"
            code={`# Chạy Nginx nền, map port 8080 host vào port 80 container\nsudo docker run -d --name web-demo -p 8080:80 nginx\n\n# Kiểm tra container\nsudo docker ps\n\n# Output quan trọng:\n# 0.0.0.0:8080->80/tcp\n# Nghĩa là port 8080 trên Ubuntu host chuyển vào port 80 trong container Nginx.\n\n# Test website\ncurl http://localhost:8080\n\n# Dừng và xóa container\nsudo docker stop web-demo\nsudo docker rm web-demo`}
        />
    );
}

function ComposeSection() {
    return (
        <CodeBlock
            title="compose-nginx-demo.sh"
            code={`mkdir compose-nginx-demo\ncd compose-nginx-demo\n\ncat > compose.yaml << 'EOF'\nservices:\n  web:\n    image: nginx\n    container_name: compose-web-demo\n    ports:\n      - "8080:80"\nEOF\n\n# Chạy stack nền\nsudo docker compose up -d\n\n# Kiểm tra\nsudo docker compose ps\ncurl http://localhost:8080\n\n# Xem log\nsudo docker compose logs\nsudo docker compose logs -f\n\n# Dừng và xóa container/network do compose tạo\nsudo docker compose down`}
            note="Với dự án mới, dùng docker compose, không dùng docker-compose legacy trừ khi dự án cũ yêu cầu."
        />
    );
}

function DockerGroupSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="docker-without-sudo.sh"
                code={`# Thêm user hiện tại vào group docker\nsudo usermod -aG docker $USER\n\n# Cách chắc chắn: logout rồi login lại\n# Hoặc áp dụng group cho shell hiện tại:\nnewgrp docker\n\n# Test không cần sudo\ndocker ps\ndocker run hello-world`}
            />
            <div className="space-y-4">
                <ExplainCard
                    icon={<UserPlus />}
                    title="usermod -aG docker"
                    desc="Thêm user hiện tại vào group docker mà không xóa group cũ."
                />
                <ExplainCard
                    icon={<RefreshCw />}
                    title="newgrp docker"
                    desc="Áp dụng group docker cho shell hiện tại mà chưa cần logout."
                />
                <ExplainCard
                    icon={<Lock />}
                    title="Rủi ro quyền cao"
                    desc="User trong group docker có thể điều khiển Docker daemon, rất mạnh trên hệ thống."
                    danger
                />
            </div>
        </div>
    );
}

function CommonErrorsSection() {
    const [tab, setTab] = useState("notfound");
    const tabs = [
        ["notfound", "docker not found"],
        ["daemon", "daemon"],
        ["permission", "permission"],
        ["compose", "compose"],
        ["port", "port conflict"],
        ["name", "name conflict"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="red">
            {tab === "notfound" && (
                <CodeBlock
                    title="docker-command-not-found.sh"
                    code={`docker --version\n# docker: command not found\n\n# Sửa: cài lại Docker từ repo chính thức\nsudo apt update\nsudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin`}
                />
            )}
            {tab === "daemon" && (
                <CodeBlock
                    title="cannot-connect-daemon.sh"
                    code={`docker ps\n# Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?\n\n# Kiểm tra service\nsudo systemctl status docker\n\n# Nếu chưa chạy:\nsudo systemctl start docker\nsudo systemctl enable docker\n\ndocker ps`}
                />
            )}
            {tab === "permission" && (
                <CodeBlock
                    title="docker-permission-denied.sh"
                    code={`docker ps\n# permission denied while trying to connect to the Docker daemon socket\n\n# Cách nhanh:\nsudo docker ps\n\n# Cách lâu dài:\nsudo usermod -aG docker $USER\nnewgrp docker\n\ndocker ps`}
                />
            )}
            {tab === "compose" && (
                <CodeBlock
                    title="docker-compose-vs-docker-compose.sh"
                    code={`docker-compose version\n# docker-compose: command not found\n\n# Lệnh mới đúng với Compose plugin:\ndocker compose version\n\n# Nếu chưa có plugin:\nsudo apt update\nsudo apt install docker-compose-plugin\n\n# Dự án mới nên dùng:\ndocker compose up -d`}
                />
            )}
            {tab === "port" && (
                <CodeBlock
                    title="port-already-in-use.sh"
                    code={`sudo docker run -d --name web-demo -p 8080:80 nginx\n# failed to bind port 0.0.0.0:8080: address already in use\n\n# Kiểm tra ai chiếm port:\nsudo ss -tulpn | grep ':8080'\n\n# Sửa: dùng port khác\nsudo docker run -d --name web-demo -p 8081:80 nginx`}
                />
            )}
            {tab === "name" && (
                <CodeBlock
                    title="container-name-conflict.sh"
                    code={`sudo docker run -d --name web-demo -p 8080:80 nginx\n# Conflict. The container name "/web-demo" is already in use\n\n# Xem container cũ:\nsudo docker ps -a\n\n# Dừng và xóa container cũ:\nsudo docker stop web-demo\nsudo docker rm web-demo\n\n# Chạy lại:\nsudo docker run -d --name web-demo -p 8080:80 nginx`}
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
                title="Kiểm tra Docker"
                code={`docker --version\ndocker compose version\nsudo systemctl status docker`}
                tasks={[
                    "Docker version là bao nhiêu?",
                    "Compose version là bao nhiêu?",
                    "Docker service có active running không?",
                ]}
            />
            <PracticeCard
                level="Trung bình"
                title="hello-world"
                code={`sudo docker run hello-world\nsudo docker ps -a`}
                tasks={[
                    "Image được dùng là gì?",
                    "Container running hay exited?",
                    "Exit code là bao nhiêu?",
                ]}
            />
            <PracticeCard
                level="Nâng cao"
                title="Nginx Compose"
                code={`mkdir compose-nginx-demo\ncd compose-nginx-demo\n# tạo compose.yaml\nsudo docker compose up -d\ncurl http://localhost:8080\nsudo docker compose down`}
                tasks={[
                    "Tạo compose.yaml",
                    "Chạy nginx port 8080",
                    "Test bằng curl",
                    "Dừng stack bằng compose down",
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
    const activeMap = { orange: "bg-orange-500", red: "bg-red-500" };
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
            title: "Kiểm tra",
            rows: [
                ["docker --version", "Docker CLI"],
                ["docker compose version", "Compose plugin"],
                ["systemctl status docker", "Docker daemon"],
                ["docker run hello-world", "test Docker"],
            ],
        },
        {
            title: "Container",
            rows: [
                ["docker ps", "đang chạy"],
                ["docker ps -a", "tất cả"],
                ["docker stop NAME", "dừng"],
                ["docker rm NAME", "xóa"],
                ["docker images", "xem image"],
            ],
        },
        {
            title: "Run",
            rows: [
                ["docker run", "chạy container"],
                ["-d", "chạy nền"],
                ["--name", "đặt tên"],
                ["-p 8080:80", "map port"],
                ["nginx", "image"],
            ],
        },
        {
            title: "Compose",
            rows: [
                ["compose.yaml", "file định nghĩa"],
                ["docker compose up -d", "chạy stack"],
                ["docker compose ps", "xem stack"],
                ["logs -f", "log realtime"],
                ["down", "dừng/xóa stack"],
            ],
        },
        {
            title: "Dọn dẹp",
            rows: [
                ["docker system prune", "dọn stopped/cache"],
                ["docker volume ls", "xem volume"],
                ["Cẩn thận volume", "có thể chứa DB"],
                ["docker group", "quyền cao"],
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
        question: "Docker image và container khác nhau thế nào?",
        options: [
            "Image là khuôn mẫu, container là phiên bản đang chạy từ image",
            "Image là log, container là user",
            "Image là firewall, container là port",
            "Không khác nhau",
        ],
        correct: 0,
        explanation:
            "Image giống bản thiết kế; container là thực thể được tạo và chạy từ image đó.",
    },
    {
        question: "Lệnh Compose mới nên dùng là gì?",
        options: [
            "docker compose",
            "docker-compose-new",
            "compose-docker",
            "docker compose2",
        ],
        correct: 0,
        explanation:
            "Compose plugin mới dùng cú pháp docker compose, không có dấu gạch ngang.",
    },
    {
        question:
            "Gói nào cài Docker Compose plugin trên Ubuntu sau khi thêm Docker repo?",
        options: [
            "docker-compose-plugin",
            "docker-compose-legacy",
            "compose.io",
            "docker-yaml",
        ],
        correct: 0,
        explanation: "docker-compose-plugin cung cấp lệnh docker compose.",
    },
    {
        question: "sudo docker run hello-world dùng để làm gì?",
        options: [
            "Test Docker đã hoạt động",
            "Xóa Docker",
            "Cài Ubuntu",
            "Mở port 22",
        ],
        correct: 0,
        explanation:
            "hello-world là container thử nghiệm giúp xác nhận Docker Engine chạy được.",
    },
    {
        question: "-p 8080:80 trong docker run nghĩa là gì?",
        options: [
            "Map port 8080 host vào port 80 container",
            "Map port 80 host vào 8080 container",
            "Xóa port 8080",
            "Chạy container 80 lần",
        ],
        correct: 0,
        explanation:
            "Cú pháp host:container, nên 8080 của Ubuntu host chuyển vào 80 trong container.",
    },
    {
        question: "Cannot connect to the Docker daemon thường do gì?",
        options: [
            "Docker daemon chưa chạy",
            "Thiếu file compose.yaml",
            "Port 8080 bị chiếm",
            "Không có curl",
        ],
        correct: 0,
        explanation: "Cần kiểm tra và start service docker bằng systemctl.",
    },
    {
        question: "Thêm user vào group docker có gì cần cảnh giác?",
        options: [
            "Group docker có quyền rất mạnh, chỉ thêm user đáng tin cậy",
            "Group docker chỉ xem log",
            "Group docker làm chậm máy",
            "Không có rủi ro gì",
        ],
        correct: 0,
        explanation:
            "User trong group docker có thể điều khiển Docker daemon nên có quyền rất cao trên hệ thống.",
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
