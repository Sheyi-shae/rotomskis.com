'use client'

interface ArticleContentProps {
  content: string
}

export function ArticleContent({ content }: ArticleContentProps) {
  return (
    <article className="prose  prose-lg max-w-none text-secondary animate-fade-in">
      <style>{`
        .prose h2 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--color-secondary, #1d2b34);
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        .prose h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-secondary, #1d2b34);
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        
        .prose p {
          line-height: 1.8;
          color: var(--color-secondary, #1d2b34);
          margin-bottom: 1.25rem;
        }
        
        .prose ul {
          list-style-position: inside;
          color: var(--color-secondary, #1d2b34);
        }
        
        .prose li {
          margin-bottom: 0.5rem;
          line-height: 1.8;
        }
        
        .prose strong {
          color: var(--color-primary, #800020);
          font-weight: 600;
        }
      `}</style>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}
