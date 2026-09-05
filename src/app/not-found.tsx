import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-305 px-4 py-24 text-center sm:px-8">
      <h1 className="mb-4 text-[48px] font-extrabold tracking-tight">
        Page not found
      </h1>
      <p className="mb-8" style={{ color: "var(--muted)" }}>
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="inline-flex rounded-full px-6 py-3 text-sm font-semibold text-white"
        style={{ background: "var(--pink)" }}
      >
        Back to home
      </Link>
    </main>
  );
}
