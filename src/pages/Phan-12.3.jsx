import React, { useState } from "react";
import {
    Database,
    Server,
    Terminal,
    Table2,
    KeyRound,
    ShieldAlert,
    PackageCheck,
    Settings,
    AlertTriangle,
    Info,
    CheckCircle2,
    XCircle,
    Copy,
    ChevronRight,
    RotateCcw,
    Sparkles,
    Bug,
    Wrench,
    ListChecks,
    Search,
    Activity,
    Lock,
    Unlock,
    Network,
    FileText,
    Globe,
    Route,
    UserPlus,
    Eye,
    Play,
    RefreshCw,
    Cpu,
    FolderOpen,
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
                                Database · MySQL · PostgreSQL · SQL
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 hidden md:inline-block">
                            Chương 12
                        </span>
                        <div className="text-sm font-semibold text-orange-300 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                            Bài 12.3
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <section className="text-center py-8 space-y-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Sparkles size={16} className="text-orange-400" /> Lưu
                        trữ dữ liệu cho website và backend
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Cài Đặt Database <br />
                        <span className="text-orange-500">
                            MySQL & PostgreSQL
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Bạn sẽ hiểu database server là gì, cài MySQL/PostgreSQL
                        trên Ubuntu, tạo database, tạo user, cấp quyền, test
                        đăng nhập, kiểm tra port{" "}
                        <code className="text-orange-300">3306/5432</code> và xử
                        lý lỗi kết nối thường gặp.
                    </p>
                </section>

                <section className="bg-red-500/10 border border-red-500/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-5 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                        <ShieldAlert size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Không mở database ra Internet nếu chưa hiểu rõ bảo
                            mật
                        </h3>
                        <p className="text-red-100 leading-relaxed">
                            Mặc định an toàn là cho app kết nối database qua{" "}
                            <code className="text-white">localhost</code>. Không
                            dùng user <code className="text-white">root</code>/
                            <code className="text-white">postgres</code> cho ứng
                            dụng, không đặt mật khẩu yếu, và không cấp quyền
                            kiểu{" "}
                            <code className="text-white">
                                ALL ON *.* TO user@'%'
                            </code>{" "}
                            nếu không thật sự cần.
                        </p>
                    </div>
                </section>

                <section className="grid lg:grid-cols-2 gap-6 items-stretch">
                    <DatabaseConceptCard />
                    <DbPicker />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="1"
                        color="blue"
                        icon={<Database size={22} />}
                        title="Database Server là gì?"
                        subtitle="Database lưu dữ liệu có cấu trúc cho website, API, hệ thống quản trị, bệnh viện, trường học hoặc cửa hàng."
                    />
                    <DatabaseIntroSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="2"
                        color="green"
                        icon={<Table2 size={22} />}
                        title="Database giống Excel nhưng mạnh hơn"
                        subtitle="Database có table, record, field và SQL query; phù hợp dữ liệu lớn, nhiều người dùng và ứng dụng chạy lâu dài."
                    />
                    <ExcelCompareSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="3"
                        color="orange"
                        icon={<Terminal size={22} />}
                        title="Cài đặt và cấu hình MySQL"
                        subtitle="Cài mysql-server, kiểm tra service, đăng nhập sudo mysql, tạo database/user và cấp quyền."
                    />
                    <MysqlSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="4"
                        color="purple"
                        icon={<Terminal size={22} />}
                        title="Cài đặt và cấu hình PostgreSQL"
                        subtitle="Cài postgresql, kiểm tra cluster, vào psql bằng user postgres, tạo role/database và cấp quyền schema public."
                    />
                    <PostgresSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="5"
                        color="cyan"
                        icon={<Network size={22} />}
                        title="Kiểm tra port database đang lắng nghe"
                        subtitle="MySQL mặc định dùng port 3306; PostgreSQL mặc định dùng port 5432; nên listen localhost nếu app cùng server."
                    />
                    <PortCheckSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="6"
                        color="yellow"
                        icon={<Table2 size={22} />}
                        title="Tạo bảng và dữ liệu thử"
                        subtitle="Tạo bảng patients trong MySQL và PostgreSQL để thấy khác biệt AUTO_INCREMENT và SERIAL."
                    />
                    <CreateTableSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="7"
                        color="pink"
                        icon={<FileText size={22} />}
                        title="Cấu hình .env cho ứng dụng"
                        subtitle="Laravel/Node.js/Django thường đọc DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD từ file .env."
                    />
                    <EnvSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="8"
                        color="red"
                        icon={<Bug size={22} />}
                        title="Lỗi phổ biến và cách xử lý"
                        subtitle="MySQL root access denied, PostgreSQL peer authentication failed, app connection refused, quên mật khẩu và thiếu quyền schema public."
                    />
                    <CommonErrorsSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="9"
                        color="teal"
                        icon={<Wrench size={22} />}
                        title="Bài tập thực hành"
                        subtitle="Cài MySQL, tạo shop_db/shop_user, cài PostgreSQL, tạo school_db/school_user và thêm dữ liệu students."
                    />
                    <PracticeSection />
                </section>

                <section className="space-y-6">
                    <SectionTitle
                        number="10"
                        color="emerald"
                        icon={<ListChecks size={22} />}
                        title="Tóm tắt nhanh"
                        subtitle="Các lệnh MySQL, PostgreSQL, SQL tạo user/database, kiểm tra service và kiểm tra port cần nhớ."
                    />
                    <SummaryGrid />
                </section>

                <section className="pt-4">
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <PackageCheck className="text-orange-400" />{" "}
                                    Kiểm tra kiến thức bài 12.3
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Ôn lại MySQL/PostgreSQL, port 3306/5432,
                                    sudo mysql, peer authentication, role,
                                    schema public và user riêng cho app.
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
                        Bạn đã biết cài và tạo database cơ bản. Tiếp theo là cấu
                        hình tên miền và SSL với Let's Encrypt.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
                        Bài tiếp theo: 12.4 — Cấu hình tên miền & SSL với Let's
                        Encrypt <ChevronRight size={20} />
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

function DatabaseConceptCard() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-orange-500/15 text-orange-400 rounded-2xl flex items-center justify-center">
                    <Database size={26} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        Database lưu dữ liệu gì?
                    </h3>
                    <p className="text-slate-500 text-sm">
                        Users, patients, rooms, orders, menus...
                    </p>
                </div>
            </div>
            <div className="bg-black border border-slate-800 rounded-2xl p-5 font-mono text-sm text-green-400 whitespace-pre-wrap mb-5">{`Browser\n   ↓\nNginx / Apache\n   ↓\nLaravel / Node.js / Python API\n   ↓\nMySQL hoặc PostgreSQL\n   ↓\nDữ liệu: users, orders, patients...`}</div>
            <div className="grid sm:grid-cols-2 gap-4">
                <MiniCard
                    icon={<Table2 />}
                    title="Table"
                    desc="Bảng dữ liệu như patients, users, orders"
                />
                <MiniCard
                    icon={<Search />}
                    title="SQL Query"
                    desc="Truy vấn, lọc, thêm, sửa, xóa dữ liệu"
                />
            </div>
        </div>
    );
}

function MiniCard({ icon, title, desc }) {
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
            <div className="text-orange-400 mb-3">{icon}</div>
            <div className="font-bold text-white mb-1">{title}</div>
            <p className="text-xs text-slate-500">{desc}</p>
        </div>
    );
}

function DbPicker() {
    const [db, setDb] = useState("postgres");
    const data = {
        mysql: {
            title: "MySQL",
            icon: "🐬",
            port: "3306",
            service: "mysql",
            shell: "mysql>",
            login: "sudo mysql",
            use: "WordPress, Laravel, CodeIgniter, website quản trị nội bộ",
        },
        postgres: {
            title: "PostgreSQL",
            icon: "🐘",
            port: "5432",
            service: "postgresql",
            shell: "postgres=#",
            login: "sudo -u postgres psql",
            use: "Django, Odoo, ERP, GIS, backend lớn, dữ liệu chặt chẽ",
        },
    };
    const item = data[db];
    return (
        <div className="bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-500/20 border border-slate-800 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Eye className="text-orange-400" /> Chọn Database
            </h3>
            <p className="text-slate-400 mb-6">
                Bấm để xem port, service, shell và trường hợp sử dụng.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-5">
                <button
                    onClick={() => setDb("mysql")}
                    className={`p-4 rounded-xl border font-bold ${db === "mysql" ? "bg-orange-500 text-white border-orange-500" : "bg-slate-950 border-slate-800 text-slate-400"}`}
                >
                    MySQL
                </button>
                <button
                    onClick={() => setDb("postgres")}
                    className={`p-4 rounded-xl border font-bold ${db === "postgres" ? "bg-cyan-500 text-white border-cyan-500" : "bg-slate-950 border-slate-800 text-slate-400"}`}
                >
                    PostgreSQL
                </button>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="font-bold text-white text-2xl mb-2">
                    {item.title}
                </div>
                <p className="text-slate-400 text-sm mb-4">{item.use}</p>
                <div className="grid sm:grid-cols-4 gap-3 text-sm">
                    <InfoCell label="Port" value={item.port} />
                    <InfoCell label="Service" value={item.service} />
                    <InfoCell label="Shell" value={item.shell} />
                    <InfoCell label="Login admin" value={item.login} />
                </div>
            </div>
        </div>
    );
}

function InfoCell({ label, value }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">
            <div className="text-slate-500 mb-1">{label}</div>
            <code className="text-orange-300 break-all">{value}</code>
        </div>
    );
}

function DatabaseIntroSection() {
    return (
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
            <CodeBlock
                title="database-examples.txt"
                code={`Một website bệnh viện có thể có các bảng:\n\npatients      → danh sách bệnh nhân\nrooms         → phòng bệnh\nbeds          → giường bệnh\nmeal_menus    → thực đơn\nmeal_orders   → đăng ký suất ăn\nusers         → tài khoản đăng nhập`}
            />
            <CheatCard
                title="Database dùng để"
                rows={[
                    ["Lưu dữ liệu", "users, products, orders, patients"],
                    ["Truy vấn", "tìm kiếm, lọc, thống kê"],
                    ["Phân quyền", "user nào được đọc/ghi database nào"],
                    ["Phục vụ app", "backend API kết nối để đọc/ghi dữ liệu"],
                ]}
            />
        </div>
    );
}

function ExcelCompareSection() {
    const rows = [
        ["File .xlsx", "Database"],
        ["Sheet", "Table"],
        ["Row", "Record"],
        ["Column", "Field"],
        ["Filter / Query", "SQL query"],
    ];
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-2 bg-slate-950 border-b border-slate-800 text-sm font-bold text-white">
                <div className="p-4">Excel</div>
                <div className="p-4 text-orange-300">Database</div>
            </div>
            {rows.map(([a, b]) => (
                <div
                    key={a}
                    className="grid grid-cols-2 border-b border-slate-800 last:border-b-0 text-sm"
                >
                    <div className="p-4 text-slate-400">{a}</div>
                    <div className="p-4 text-slate-400">{b}</div>
                </div>
            ))}
        </div>
    );
}

function MysqlSection() {
    const [tab, setTab] = useState("install");
    const tabs = [
        ["install", "Cài đặt"],
        ["login", "Đăng nhập"],
        ["create", "Tạo DB/User"],
        ["test", "Test user"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="orange">
            {tab === "install" && (
                <CodeBlock
                    title="install-mysql.sh"
                    code={`lsb_release -a\nsudo apt update\nsudo apt install mysql-server -y\n\nsudo systemctl status mysql\n# Active: active (running)\n\nsudo systemctl enable mysql`}
                />
            )}
            {tab === "login" && (
                <CodeBlock
                    title="mysql-admin-login.sh"
                    code={`# Trên Ubuntu, root MySQL thường đăng nhập qua sudo\nsudo mysql\n\n# Trong MySQL shell:\nSHOW DATABASES;\nEXIT;`}
                />
            )}
            {tab === "create" && (
                <CodeBlock
                    title="mysql-create-db-user.sql"
                    code={`sudo mysql\n\nCREATE DATABASE hospital_db;\n\nCREATE USER 'app_user'@'localhost' IDENTIFIED BY 'StrongPassword123!';\n\nGRANT ALL PRIVILEGES ON hospital_db.* TO 'app_user'@'localhost';\n\nFLUSH PRIVILEGES;\n\nEXIT;`}
                    note="localhost nghĩa là user app_user chỉ đăng nhập từ chính server. Đây là mặc định an toàn hơn cho app chạy cùng server."
                />
            )}
            {tab === "test" && (
                <CodeBlock
                    title="mysql-test-app-user.sh"
                    code={`mysql -u app_user -p\n# Nhập mật khẩu StrongPassword123!\n\n# Trong MySQL shell:\nUSE hospital_db;\nSHOW DATABASES;\nEXIT;`}
                />
            )}
        </Tabbed>
    );
}

function PostgresSection() {
    const [tab, setTab] = useState("install");
    const tabs = [
        ["install", "Cài đặt"],
        ["login", "Đăng nhập"],
        ["create", "Tạo DB/User"],
        ["test", "Test user"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="purple">
            {tab === "install" && (
                <CodeBlock
                    title="install-postgresql.sh"
                    code={`sudo apt update\nsudo apt install postgresql postgresql-contrib -y\n\nsudo systemctl status postgresql\n# Có thể thấy Active: active (exited)\n\npg_lsclusters\n# Status: online\n\nsudo systemctl enable postgresql`}
                />
            )}
            {tab === "login" && (
                <CodeBlock
                    title="postgres-admin-login.sh"
                    code={`# PostgreSQL tạo user hệ thống postgres\nsudo -u postgres psql\n\n# Trong psql:\n\l\n\q`}
                />
            )}
            {tab === "create" && (
                <CodeBlock
                    title="postgres-create-db-user.sql"
                    code={`sudo -u postgres psql\n\nCREATE USER app_user WITH PASSWORD 'StrongPassword123!';\n\nCREATE DATABASE hospital_db OWNER app_user;\n\n\c hospital_db\n\nGRANT ALL ON SCHEMA public TO app_user;\n\n\q`}
                    note="Trong PostgreSQL, user thường được gọi là role. Với PostgreSQL mới, cấp quyền schema public giúp app_user tạo bảng thuận lợi hơn."
                />
            )}
            {tab === "test" && (
                <CodeBlock
                    title="postgres-test-app-user.sh"
                    code={`psql -U app_user -d hospital_db -h localhost\n# Nhập mật khẩu StrongPassword123!\n\n# Nếu thấy hospital_db=> là đăng nhập thành công.\n\q`}
                />
            )}
        </Tabbed>
    );
}

function PortCheckSection() {
    return (
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <CodeBlock
                title="check-database-ports.sh"
                code={`# Xem port database đang lắng nghe\nsudo ss -tulpn\n\n# MySQL\nsudo ss -tulpn | grep 3306\n# tcp LISTEN 127.0.0.1:3306 users:(("mysqld"))\n\n# PostgreSQL\nsudo ss -tulpn | grep 5432\n# tcp LISTEN 127.0.0.1:5432 users:(("postgres"))\n\n# 127.0.0.1 nghĩa là chỉ local server truy cập được.\n# Đây là cấu hình an toàn khi app và database cùng máy.`}
            />
            <CheatCard
                title="Port mặc định"
                rows={[
                    ["MySQL", "3306"],
                    ["PostgreSQL", "5432"],
                    ["127.0.0.1", "chỉ local"],
                    ["0.0.0.0", "mọi IPv4, cần rất cẩn thận"],
                ]}
            />
        </div>
    );
}

function CreateTableSection() {
    const [tab, setTab] = useState("mysql");
    const tabs = [
        ["mysql", "MySQL"],
        ["postgres", "PostgreSQL"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="cyan">
            {tab === "mysql" && (
                <CodeBlock
                    title="mysql-create-patients-table.sql"
                    code={`mysql -u app_user -p\n\nUSE hospital_db;\n\nCREATE TABLE patients (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    age INT,\n    department VARCHAR(100)\n);\n\nINSERT INTO patients (name, age, department)\nVALUES ('Nguyen Van A', 65, 'Khoa Noi');\n\nSELECT * FROM patients;`}
                />
            )}
            {tab === "postgres" && (
                <CodeBlock
                    title="postgres-create-patients-table.sql"
                    code={`psql -U app_user -d hospital_db -h localhost\n\nCREATE TABLE patients (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    age INT,\n    department VARCHAR(100)\n);\n\nINSERT INTO patients (name, age, department)\nVALUES ('Tran Thi B', 72, 'Khoa Tim');\n\nSELECT * FROM patients;`}
                />
            )}
        </Tabbed>
    );
}

function EnvSection() {
    return (
        <div className="grid lg:grid-cols-2 gap-6">
            <CodeBlock
                title="laravel-mysql.env"
                code={`DB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=laravel_app\nDB_USERNAME=laravel_user\nDB_PASSWORD=LaravelPass123!`}
            />
            <CodeBlock
                title="node-postgresql.env"
                code={`DB_HOST=127.0.0.1\nDB_PORT=5432\nDB_NAME=api_db\nDB_USER=backend_user\nDB_PASSWORD=BackendPass123!`}
            />
        </div>
    );
}

function CommonErrorsSection() {
    const [tab, setTab] = useState("mysqlroot");
    const tabs = [
        ["mysqlroot", "MySQL root"],
        ["peer", "Peer auth"],
        ["refused", "Connection refused"],
        ["password", "Quên password"],
        ["schema", "Postgres schema"],
        ["security", "Bảo mật"],
    ];
    return (
        <Tabbed tabs={tabs} tab={tab} setTab={setTab} color="red">
            {tab === "mysqlroot" && (
                <CodeBlock
                    title="mysql-root-access-denied.sh"
                    code={`mysql -u root -p\n# ERROR 1698 (28000): Access denied for user 'root'@'localhost'\n\n# Trên Ubuntu, dùng:\nsudo mysql\n\n# Sau đó tạo user riêng cho app, không dùng root cho ứng dụng.`}
                />
            )}
            {tab === "peer" && (
                <CodeBlock
                    title="postgres-peer-auth-failed.sh"
                    code={`psql -U postgres\n# FATAL: Peer authentication failed for user "postgres"\n\n# Nguyên nhân: user Linux hiện tại không phải postgres.\n\n# Cách đúng:\nsudo -u postgres psql\n\n# Khi đăng nhập bằng app user qua password:\npsql -U app_user -d hospital_db -h localhost`}
                />
            )}
            {tab === "refused" && (
                <CodeBlock
                    title="app-connection-refused.sh"
                    code={`# MySQL lỗi: ECONNREFUSED 127.0.0.1:3306\nsudo systemctl status mysql\nsudo systemctl restart mysql\nsudo ss -tulpn | grep 3306\n\n# PostgreSQL lỗi: connection refused 127.0.0.1:5432\nsudo systemctl status postgresql\nsudo systemctl restart postgresql\nsudo ss -tulpn | grep 5432\n\n# Sau đó kiểm tra lại user/password/database name trong .env.`}
                />
            )}
            {tab === "password" && (
                <CodeBlock
                    title="reset-db-user-password.sql"
                    code={`# MySQL\nsudo mysql\nALTER USER 'app_user'@'localhost' IDENTIFIED BY 'NewStrongPassword123!';\nFLUSH PRIVILEGES;\nEXIT;\n\n# PostgreSQL\nsudo -u postgres psql\nALTER USER app_user WITH PASSWORD 'NewStrongPassword123!';\n\q`}
                />
            )}
            {tab === "schema" && (
                <CodeBlock
                    title="postgres-permission-denied-schema.sql"
                    code={`# Lỗi:\n# ERROR: permission denied for schema public\n\n# Sửa:\nsudo -u postgres psql\n\c hospital_db\nGRANT ALL ON SCHEMA public TO app_user;\n\q`}
                />
            )}
            {tab === "security" && (
                <CodeBlock
                    title="database-security-warning.sql"
                    code={`-- Không nên dùng user root/postgres cho ứng dụng\n-- Không đặt mật khẩu yếu như 123456\n-- Không cấp quyền quá rộng nếu không cần\n-- Không mở database ra Internet nếu chưa cấu hình firewall và bảo mật\n\n-- Ví dụ nguy hiểm:\nGRANT ALL PRIVILEGES ON *.* TO 'app_user'@'%';\n\n-- An toàn hơn khi app chạy cùng server:\nCREATE USER 'app_user'@'localhost' IDENTIFIED BY 'StrongPassword123!';`}
                />
            )}
        </Tabbed>
    );
}

function PracticeSection() {
    return (
        <div className="grid lg:grid-cols-4 gap-4">
            <PracticeCard
                level="Dễ"
                title="Cài MySQL"
                code={`sudo apt update\nsudo apt install mysql-server -y\nsudo systemctl status mysql\nsudo mysql\nSHOW DATABASES;\nEXIT;`}
                tasks={[
                    "MySQL active chưa?",
                    "Vào được sudo mysql chưa?",
                    "SHOW DATABASES có gì?",
                ]}
            />
            <PracticeCard
                level="Trung bình"
                title="MySQL shop_db"
                code={`sudo mysql\nCREATE DATABASE shop_db;\nCREATE USER 'shop_user'@'localhost' IDENTIFIED BY 'ShopPass123!';\nGRANT ALL PRIVILEGES ON shop_db.* TO 'shop_user'@'localhost';\nFLUSH PRIVILEGES;\nEXIT;\nmysql -u shop_user -p`}
                tasks={[
                    "Tạo shop_db",
                    "Tạo shop_user",
                    "Cấp quyền",
                    "Test login",
                ]}
            />
            <PracticeCard
                level="Trung bình"
                title="PostgreSQL school_db"
                code={`sudo apt install postgresql postgresql-contrib -y\nsudo -u postgres psql\nCREATE USER school_user WITH PASSWORD 'SchoolPass123!';\nCREATE DATABASE school_db OWNER school_user;\n\c school_db\nGRANT ALL ON SCHEMA public TO school_user;\n\q\npsql -U school_user -d school_db -h localhost`}
                tasks={[
                    "Cluster online chưa?",
                    "Tạo school_user",
                    "Tạo school_db",
                    "Test login",
                ]}
            />
            <PracticeCard
                level="Nâng cao"
                title="Tạo bảng students"
                code={`CREATE TABLE students (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    age INT,\n    class_name VARCHAR(50)\n);\n\nINSERT INTO students (name, age, class_name)\nVALUES ('Nguyen Van A', 18, '12A1'),\n       ('Tran Thi B', 17, '11B2');\n\nSELECT * FROM students;`}
                tasks={[
                    "Tạo table",
                    "Thêm 2 dòng",
                    "Query dữ liệu",
                    "Giải thích SERIAL",
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
        orange: "bg-orange-500",
        purple: "bg-purple-500",
        cyan: "bg-cyan-500",
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
            title: "MySQL",
            rows: [
                ["apt install mysql-server", "cài"],
                ["systemctl status mysql", "trạng thái"],
                ["sudo mysql", "admin shell"],
                ["mysql -u user -p", "login user"],
                ["3306", "port"],
            ],
        },
        {
            title: "PostgreSQL",
            rows: [
                ["apt install postgresql", "cài"],
                ["systemctl status postgresql", "trạng thái"],
                ["pg_lsclusters", "cluster"],
                ["sudo -u postgres psql", "admin shell"],
                ["5432", "port"],
            ],
        },
        {
            title: "MySQL SQL",
            rows: [
                ["SHOW DATABASES;", "xem DB"],
                ["CREATE DATABASE", "tạo DB"],
                ["CREATE USER 'u'@'localhost'", "tạo user"],
                ["GRANT ALL ON db.*", "cấp quyền"],
                ["FLUSH PRIVILEGES", "nạp quyền"],
            ],
        },
        {
            title: "Postgres SQL",
            rows: [
                ["\\l", "xem DB"],
                ["\\c db", "kết nối DB"],
                ["CREATE USER", "tạo role"],
                ["CREATE DATABASE db OWNER user", "tạo DB"],
                ["GRANT ALL ON SCHEMA public", "quyền schema"],
            ],
        },
        {
            title: "Debug",
            rows: [
                ["ss -tulpn | grep 3306", "MySQL listen"],
                ["ss -tulpn | grep 5432", "Postgres listen"],
                ["connection refused", "service/port"],
                ["peer auth failed", "dùng sudo -u postgres"],
                ["Access denied root", "dùng sudo mysql"],
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
        question: "Database server dùng để làm gì?",
        options: [
            "Lưu và truy vấn dữ liệu có cấu trúc cho ứng dụng",
            "Mở port HTTP",
            "Chỉnh giao diện GNOME",
            "Tạo SSH key",
        ],
        correct: 0,
        explanation:
            "Database lưu dữ liệu như users, orders, patients và cho app truy vấn bằng SQL.",
    },
    {
        question: "Port mặc định của MySQL và PostgreSQL là gì?",
        options: ["3306 và 5432", "80 và 443", "22 và 2222", "6379 và 27017"],
        correct: 0,
        explanation: "MySQL mặc định dùng 3306, PostgreSQL mặc định dùng 5432.",
    },
    {
        question: "Trên Ubuntu, cách vào MySQL root thường dùng là gì?",
        options: [
            "sudo mysql",
            "mysql -u root -p luôn luôn",
            "sudo -u postgres psql",
            "psql -U root",
        ],
        correct: 0,
        explanation:
            "MySQL root trên Ubuntu thường dùng xác thực qua sudo/unix socket.",
    },
    {
        question:
            "PostgreSQL báo Peer authentication failed khi psql -U postgres, cách đúng thường là gì?",
        options: [
            "sudo -u postgres psql",
            "sudo mysql",
            "ufw allow 5432",
            "systemctl reload nginx",
        ],
        correct: 0,
        explanation:
            "Peer authentication yêu cầu user Linux trùng user PostgreSQL, nên dùng sudo -u postgres psql.",
    },
    {
        question: "Trong PostgreSQL, user thường được gọi là gì?",
        options: ["Role", "Sheet", "Container", "Profile"],
        correct: 0,
        explanation: "PostgreSQL dùng khái niệm role cho user/quyền.",
    },
    {
        question: "Lệnh nào kiểm tra cluster PostgreSQL online?",
        options: [
            "pg_lsclusters",
            "SHOW DATABASES",
            "mysql -u app_user -p",
            "nginx -t",
        ],
        correct: 0,
        explanation:
            "pg_lsclusters hiển thị version, cluster, port, status, owner và data directory.",
    },
    {
        question:
            "MySQL tạo ID tự tăng thường dùng gì, PostgreSQL thường dùng gì?",
        options: [
            "AUTO_INCREMENT và SERIAL",
            "SERIAL và AUTO_INCREMENT",
            "IDENTITY và VENV",
            "PRIMARY và FOREIGN",
        ],
        correct: 0,
        explanation:
            "MySQL hay dùng AUTO_INCREMENT; PostgreSQL ví dụ cơ bản hay dùng SERIAL.",
    },
    {
        question: "Vì sao không nên dùng user root/postgres cho ứng dụng?",
        options: [
            "Quyền quá cao, rủi ro lớn khi app bị lỗi hoặc bị tấn công",
            "Vì app không thể kết nối database",
            "Vì port sẽ đổi",
            "Vì SQL không chạy",
        ],
        correct: 0,
        explanation:
            "Ứng dụng nên có user riêng, quyền vừa đủ trên database riêng để giảm rủi ro.",
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
