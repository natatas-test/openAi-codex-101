import Footer from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col font-sans">
      <Head>
        <title>Docs | AGENTS.md</title>
        <meta
          name="description"
          content="Get started with AGENTS.md and learn how project instructions are organized."
        />
      </Head>

      <main className="flex-1 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Docs</h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              Start by adding an <code>AGENTS.md</code> file at the root of your
              repository. The file uses standard Markdown and requires no special
              schema.
            </p>
            <p>
              Include the information an agent needs to contribute safely, such as
              build and test commands, code conventions, security considerations,
              and pull request guidance.
            </p>
            <p>
              Large repositories can add nested <code>AGENTS.md</code> files for
              individual packages or directories. The instructions nearest to the
              files being changed take precedence.
            </p>
            <p>
              See the{" "}
              <Link href="/#examples" className="font-medium underline hover:no-underline">
                examples on the home page
              </Link>{" "}
              for a practical starting point.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
