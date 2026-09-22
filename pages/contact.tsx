import Footer from "@/components/Footer";
import Head from "next/head";

export default function ContactPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col font-sans">
      <Head>
        <title>Contact Us | AGENTS.md</title>
        <meta
          name="description"
          content="Find the right place to contact the community behind AGENTS.md."
        />
      </Head>

      <main className="flex-1 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Contact Us
          </h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              Questions and ideas about AGENTS.md are welcome from developers,
              maintainers, and teams building or using coding agents.
            </p>
            <p>
              To connect with the broader project community, visit the{" "}
              <a
                href="https://aaif.io"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline hover:no-underline"
              >
                Agentic AI Foundation
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
