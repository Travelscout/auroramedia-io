import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/blog-content";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: "Artikel nicht gefunden | AuroraMedia",
    };
  }

  return {
    title: `${post.title} | AuroraMedia Blog`,
    description: post.description,
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      {/* Back Navigation */}
      <Link 
        href="/blog" 
        className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Zurück zum Blog
      </Link>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.map((category) => (
            <Badge key={category} variant="secondary">
              {category}
            </Badge>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          {post.title}
        </h1>

        <p className="text-xl text-slate-600 mb-6">
          {post.description}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(post.date).toLocaleDateString('de-DE', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.minutesToRead} min Lesezeit</span>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {post.coverImage && (
        <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg overflow-hidden mb-8">
          <Image 
            src={post.coverImage} 
            alt={post.title}
            width={800}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Article Content */}
      <div className="prose prose-slate max-w-none">
        {post.content.split('\n\n').map((paragraph, index) => {
          // Handle headers
          if (paragraph.startsWith('## ')) {
            return (
              <h2 key={index} className="text-2xl font-semibold mt-8 mb-4">
                {paragraph.replace('## ', '')}
              </h2>
            );
          }
          
          // Handle bold text and other formatting
          const formatParagraph = (text: string) => {
            return text
              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              .replace(/\*(.*?)\*/g, '<em>$1</em>')
              .replace(/`(.*?)`/g, '<code class="bg-slate-100 px-1 py-0.5 rounded text-sm">$1</code>');
          };

          // Handle lists
          if (paragraph.includes('- **') || paragraph.includes('1. **')) {
            const items = paragraph.split('\n').filter(line => line.trim());
            return (
              <ul key={index} className="space-y-2 my-4">
                {items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-slate-700">
                    <div dangerouslySetInnerHTML={{ 
                      __html: formatParagraph(item.replace(/^[\d\-\s\*]+/, '')) 
                    }} />
                  </li>
                ))}
              </ul>
            );
          }

          // Handle regular paragraphs
          return (
            <p key={index} className="mb-4 text-slate-700 leading-relaxed">
              <span dangerouslySetInnerHTML={{ __html: formatParagraph(paragraph) }} />
            </p>
          );
        })}
      </div>

      {/* Related Articles or CTA */}
      <div className="mt-12 pt-8 border-t">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Interessiert an KI-Lösungen?</h3>
          <p className="text-slate-600 mb-6">
            Entdecken Sie, wie AuroraMedia Ihr Unternehmen mit maßgeschneiderten KI-Agenten unterstützen kann.
          </p>
          <Link 
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-md hover:bg-slate-800 transition-colors"
          >
            Kostenloses Beratungsgespräch
          </Link>
        </div>
      </div>
    </article>
  );
}
