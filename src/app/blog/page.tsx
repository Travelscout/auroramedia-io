import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BLOG_POSTS } from "@/lib/blog-content";

export const metadata = {
  title: "Blog | AuroraMedia",
  description: "Neueste Artikel und Insights zu KI und Automatisierung.",
};

export default function Page() {
  const sortedPosts = BLOG_POSTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="mt-3 text-slate-600">Neueste Artikel und Insights zu KI und Automatisierung.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-3">
                  {post.coverImage && (
                    <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg overflow-hidden">
                      <Image 
                        src={post.coverImage} 
                        alt={post.title}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold line-clamp-2">{post.title}</h2>
                    <p className="text-slate-600 text-sm line-clamp-3">{post.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {post.categories.slice(0, 3).map((category) => (
                      <Badge key={category} variant="secondary" className="text-xs">
                        {category}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t">
                    <span>{post.author}</span>
                    <div className="flex items-center gap-2">
                      <span>{new Date(post.date).toLocaleDateString('de-DE')}</span>
                      <span>•</span>
                      <span>{post.minutesToRead} min</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}


