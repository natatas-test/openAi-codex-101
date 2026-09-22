import Footer from "@/components/Footer";
import Head from "next/head";

export default function AboutPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col font-sans">
      <Head>
        <title>About | AGENTS.md</title>
        <meta
          name="description"
          content="Learn why AGENTS.md gives coding agents clear, project-specific guidance."
        />
      </Head>

      <main className="flex-1 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About</h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              AGENTS.md is a simple, open format for giving coding agents the
              context and instructions they need to work effectively in a project.
            </p>
            <p>
              It complements a project&apos;s README by keeping agent-specific build
              steps, testing guidance, conventions, and other operational details
              in a predictable place.
            </p>
            <p>
              The format grew from collaboration across the AI software development
              ecosystem and is now stewarded by the Agentic AI Foundation under the
              Linux Foundation.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
