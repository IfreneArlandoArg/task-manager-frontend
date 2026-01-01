import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-4">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="text-sm">© {new Date().getFullYear()} Ifrene Arlando A.</div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/IfreneArlandoArg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-200"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.41 7.86 10.94.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.75.4-1.25.72-1.54-2.56-.29-5.26-1.28-5.26-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.17.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.18-1.48 3.14-1.17 3.14-1.17.62 1.59.24 2.77.12 3.06.74.8 1.18 1.82 1.18 3.07 0 4.41-2.71 5.38-5.29 5.66.41.36.77 1.07.77 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.2.66.79.55C20.71 21.41 24 17.09 24 12c0-6.27-5.23-11.5-12-11.5z" />
            </svg>
            <span className="sr-only">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/ifrene-arlando-a-10a597201/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-200"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M20.45 20.45h-3.56v-5.2c0-1.24-.02-2.85-1.74-2.85-1.74 0-2.01 1.36-2.01 2.76v5.29h-3.56V9h3.42v1.56h.05c.48-.9 1.66-1.84 3.42-1.84 3.66 0 4.34 2.41 4.34 5.55v6.68zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.06 2.06-2.06s2.06.92 2.06 2.06c0 1.14-.92 2.07-2.06 2.07zM6.48 20.45H3.2V9h3.28v11.45z" />
            </svg>
            <span className="sr-only">LinkedIn</span>
          </a>

          <a
            href="mailto:arlandoifrene@gmail.com"
            className="flex items-center gap-2 hover:text-gray-200"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
