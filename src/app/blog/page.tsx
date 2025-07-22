import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Fuentelo's - Celebrations, Recipes & Spanish Heritage",
  description: "Discover celebration ideas, serving suggestions, Spanish heritage stories, and recipes featuring Fuentelo's premium non-alcoholic sparkling grape juice.",
  keywords: [
    "celebration ideas",
    "serving suggestions",
    "Spanish heritage",
    "non-alcoholic recipes",
    "sparkling grape juice recipes",
    "celebration drinks",
    "party planning",
    "Spanish culture",
    "Castilla-La Mancha"
  ],
  openGraph: {
    title: "Blog | Fuentelo's - Celebrations, Recipes & Spanish Heritage",
    description: "Discover celebration ideas, serving suggestions, and Spanish heritage stories.",
  },
};

const blogPosts = [
  {
    id: 1,
    title: "5 Perfect Occasions for Fuentelo's Sparkling Grape Juice",
    excerpt: "From intimate gatherings to grand celebrations, discover the perfect moments to uncork Fuentelo's premium non-alcoholic sparkling grape juice.",
    date: "2024-01-15",
    category: "Celebrations",
    slug: "perfect-occasions-sparkling-grape-juice"
  },
  {
    id: 2,
    title: "The Spanish Heritage Behind Our Tempranillo Grapes",
    excerpt: "Explore the rich history and tradition of Tempranillo grapes in Castilla-La Mancha and how they shape the unique flavor of our Rosé.",
    date: "2024-01-10",
    category: "Heritage",
    slug: "spanish-heritage-tempranillo-grapes"
  },
  {
    id: 3,
    title: "Serving Suggestions: Elevate Your Next Gathering",
    excerpt: "Creative ways to serve and present Fuentelo's sparkling grape juice for an unforgettable celebration experience.",
    date: "2024-01-05",
    category: "Serving",
    slug: "serving-suggestions-elevate-gathering"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white-grape-light">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-fisterra text-blue text-center mb-8">
          Stories & Celebrations
        </h1>
        <p className="text-lg text-light-blue text-center mb-12 max-w-3xl mx-auto">
          Discover celebration ideas, serving suggestions, and the rich Spanish heritage behind every bottle of Fuentelo's.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-rose font-semibold">{post.category}</span>
                  <time className="text-sm text-light-blue">{new Date(post.date).toLocaleDateString()}</time>
                </div>
                <h2 className="text-xl font-fisterra text-blue mb-3 hover:text-rose transition-colors">
                  {post.title}
                </h2>
                <p className="text-light-blue mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <a 
                  href={`/blog/${post.slug}`}
                  className="inline-block bg-green text-white-grape-light px-4 py-2 rounded-full text-sm font-semibold hover:bg-green/90 transition-colors"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 