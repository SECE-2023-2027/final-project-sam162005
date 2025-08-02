'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight gradient-text">
        Welcome to the Blog Platform
      </h1>

      <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed font-light text-muted">
        Share your thoughts, explore articles from others, and enjoy a{' '}
        <span className="font-semibold" style={{color: 'var(--accent)'}}>
          personalized reading experience
        </span>.
      </p>

      <Link
        href="/dashboard"
        className="px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out"
        style={{
          background: 'var(--accent)',
          color: 'var(--accent-foreground)'
        }}
      >
        View Blogs →
      </Link>
    </div>
  );
}