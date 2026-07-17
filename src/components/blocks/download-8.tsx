"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, PackageCheck, ShieldCheck, Terminal } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "motion/react";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const outputList: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const outputLine: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

const installers = [
  {
    id: "macos",
    label: "macOS",
    command: "brew install orbit-cli",
    output: [
      "Downloading orbit 3.12.0 · darwin-arm64",
      "Signature verified · minisign",
      "Installed to /opt/homebrew/bin/orbit",
    ],
  },
  {
    id: "linux",
    label: "Linux",
    command: "curl -fsSL https://get.orbit.dev | sh",
    output: [
      "Detecting platform · linux-x86_64",
      "Signature verified · minisign",
      "Installed to /usr/local/bin/orbit",
    ],
  },
  {
    id: "windows",
    label: "Windows",
    command: "winget install Orbit.CLI",
    output: [
      "Resolving package · Orbit.CLI 3.12.0",
      "Authenticode signature verified",
      "Installed to %LOCALAPPDATA%\\Orbit\\orbit.exe",
    ],
  },
];

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Signed binaries",
    text: "Every artifact ships with a minisign signature and checksums published on the releases page.",
  },
  {
    icon: Terminal,
    title: "Shell completions",
    text: "Completions for bash, zsh, fish, and PowerShell install automatically on first run.",
  },
  {
    icon: PackageCheck,
    title: "Pinned releases",
    text: "Lock your team to a known version and roll forward on your own schedule.",
  },
];

export function Download8() {
  const [activeId, setActiveId] = useState(installers[0].id);
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();

  const active = installers.find((installer) => installer.id === activeId) ?? installers[0];

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText(active.command);
      setCopied(true);
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="w-full bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto flex w-full max-w-[1400px] flex-col items-center"
      >
        <motion.h2
          variants={item}
          className="max-w-3xl text-center text-3xl font-medium tracking-tight text-neutral-900 text-balance dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Install the command center in one line.
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-center text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg"
        >
          Releases, environment checks, and team scripts — run from the terminal your engineers already live in.
        </motion.p>

        <motion.div variants={item} className="mt-12 w-full max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-950 shadow-xl shadow-neutral-900/10 dark:border-neutral-800 dark:shadow-black/40">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
              <div className="flex items-center gap-3">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </span>
                <span className="hidden font-mono text-xs text-neutral-500 sm:inline">orbit · install</span>
              </div>
              <div className="flex rounded-full border border-white/10 bg-white/5 p-1">
                {installers.map((installer) => (
                  <button
                    key={installer.id}
                    type="button"
                    onClick={() => setActiveId(installer.id)}
                    aria-pressed={activeId === installer.id}
                    className="relative cursor-pointer rounded-full px-3 py-1.5 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  >
                    {activeId === installer.id && (
                      <motion.span
                        layoutId="orbit-active-tab"
                        style={{ borderRadius: 9999 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0 bg-white"
                      />
                    )}
                    <span
                      className={`relative z-10 transition-colors ${
                        activeId === installer.id ? "text-neutral-900" : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      {installer.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="px-5 py-6 sm:px-7 sm:py-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <p className="min-w-0 break-words font-mono text-sm leading-relaxed text-neutral-100 sm:text-[15px]">
                  <span className="select-none text-neutral-500">$ </span>
                  {active.command}
                  {reduceMotion ? (
                    <span
                      aria-hidden="true"
                      className="ml-1.5 inline-block h-[1.05em] w-[7px] align-middle bg-neutral-100"
                    />
                  ) : (
                    <motion.span
                      aria-hidden="true"
                      className="ml-1.5 inline-block h-[1.05em] w-[7px] align-middle bg-neutral-100"
                      animate={{ opacity: [1, 1, 0, 0] }}
                      transition={{ duration: 1.1, repeat: Infinity, times: [0, 0.5, 0.5, 1], ease: "linear" }}
                    />
                  )}
                </p>

                <button
                  type="button"
                  onClick={copyCommand}
                  className="inline-flex h-9 min-w-[104px] shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full border border-white/15 px-4 text-xs font-medium text-neutral-300 transition-colors hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {copied ? (
                      <motion.span
                        key="copied"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-flex items-center gap-2"
                      >
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        Copied
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-flex items-center gap-2"
                      >
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        Copy
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="min-h-[132px] sm:min-h-[120px]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.ul
                      key={active.id}
                      variants={outputList}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, transition: { duration: 0.15 } }}
                      className="space-y-2.5 font-mono text-[13px]"
                    >
                      {active.output.map((line) => (
                        <motion.li key={line} variants={outputLine} className="flex items-center gap-2.5 text-neutral-400">
                          <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400" aria-hidden="true" />
                          <span className="min-w-0 break-words">{line}</span>
                        </motion.li>
                      ))}
                      <motion.li variants={outputLine} className="pt-1.5 text-neutral-100">
                        → run <span className="rounded-md bg-white/10 px-1.5 py-0.5">orbit init</span> to link your
                        workspace
                      </motion.li>
                    </motion.ul>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 font-mono text-xs text-neutral-500 dark:text-neutral-500"
        >
          <span>v3.12.0</span>
          <span aria-hidden="true">·</span>
          <span>sha256 + minisign</span>
          <span aria-hidden="true">·</span>
          <span>macos / linux / windows</span>
        </motion.div>

        <motion.a
          variants={item}
          href="#"
          className="mt-8 inline-flex cursor-pointer items-center gap-1.5 rounded-sm text-sm font-medium text-neutral-900 transition-colors hover:text-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20 dark:text-white dark:hover:text-neutral-300 dark:focus-visible:ring-white/30"
        >
          Prefer signed binaries? Direct downloads
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </motion.a>

        <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {guarantees.map((point) => (
            <motion.div key={point.title} variants={item}>
              <point.icon className="h-5 w-5 text-neutral-900 dark:text-white" aria-hidden="true" />
              <h3 className="mt-4 text-sm font-semibold text-neutral-900 dark:text-white">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
