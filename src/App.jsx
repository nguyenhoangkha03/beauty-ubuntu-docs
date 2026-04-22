import { useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
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
];

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function HomePage() {
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
                Bấm vào bài nào thì mở sang trang bài học đó.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                Mục lục giờ không cuộn xuống cùng một trang nữa. Mỗi bài học là
                một route riêng để bạn đọc tập trung hơn.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/25">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                <Compass size={16} className="text-orange-300" />
                Điều hướng
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <p>1. Chọn bài trong danh sách.</p>
                <p>2. App chuyển sang route riêng của bài học.</p>
                <p>3. Dùng nút quay lại hoặc về mục lục để tiếp tục học.</p>
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
              <Link
                key={lesson.path}
                to={lesson.path}
                className="group rounded-3xl border border-slate-800 bg-slate-950/90 p-5 transition hover:border-orange-500/40 hover:bg-slate-950"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-orange-300">
                      Phần {lesson.code}
                    </div>
                    <h3 className="mt-1 text-xl font-bold text-white">
                      {lesson.title}
                    </h3>
                  </div>
                  <ArrowRight className="mt-1 shrink-0 text-slate-500 transition group-hover:text-orange-300" />
                </div>

                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                  {lesson.description}
                </p>

                <div className="mt-4 grid gap-2 text-sm text-slate-300 md:grid-cols-2">
                  {lesson.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3"
                    >
                      {bullet}
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function LessonPage({ lessonIndex }) {
  const lesson = lessons[lessonIndex];
  const previousLesson = lessons[lessonIndex - 1];
  const nextLesson = lessons[lessonIndex + 1];
  const Component = lesson.Component;

  return (
    <div className="bg-slate-950">
      <div className="fixed bottom-4 left-1/2 z-[60] w-[calc(100%-1.5rem)] max-w-xl -translate-x-1/2">
        <div className="flex items-center justify-between gap-2 rounded-2xl border border-slate-700 bg-slate-950/95 p-2 shadow-2xl shadow-black/35 backdrop-blur">
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
            <span className="px-4 py-2 text-sm text-slate-500">Bài đầu</span>
          )}

          {nextLesson ? (
            <Link
              to={nextLesson.path}
              className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              {nextLesson.code}
              <ArrowRight size={16} />
            </Link>
          ) : (
            <span className="px-4 py-2 text-sm text-slate-500">Bài cuối</span>
          )}
        </div>
      </div>

      <Component />
    </div>
  );
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {lessons.map((lesson, index) => (
          <Route
            key={lesson.path}
            path={lesson.path}
            element={<LessonPage lessonIndex={index} />}
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
