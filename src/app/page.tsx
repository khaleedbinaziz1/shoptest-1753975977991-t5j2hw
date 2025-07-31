'use client';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-foreground mb-8">
          Welcome to shoptest
        </h1>
        <p className="text-center text-foreground/80">
          Your e-commerce website is ready! This is a placeholder page.
        </p>
        <div className="mt-8 text-center">
          <a 
            href="https://github.com/khaleedbinaziz1/shoptest-1753975977991-t5j2hw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </main>
    </div>
  );
}