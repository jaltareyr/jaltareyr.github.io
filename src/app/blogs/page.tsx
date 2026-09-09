import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Blogs | Yashodhan Jaltare" };

const posts = [
  {
    title: "HOW TO: Create a new job on Databricks using Jobs API",
    description: "A step-by-step guide to creating and managing a new job on Databricks using the Jobs API.",
    date: "May 12, 2024",
    readTime: "4 min read",
    thumbnail: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*7GY7Ljkfj5Fsz-7y8xJDCQ.png",
    mediumUrl: "https://medium.com/@jaltareyr/how-to-create-a-new-job-on-databricks-using-jobs-api-5baafa255bc3",
  },
  {
    title: "HOW TO: Use secrets in Databricks to secure your credentials",
    description: "Use Databricks secrets to store credentials safely and reference them in notebooks and workflows.",
    date: "June 25, 2024",
    readTime: "2 min read",
    thumbnail: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Tf-Cctss--BizBx7N-Uifw.jpeg",
    mediumUrl: "https://medium.com/@jaltareyr/how-to-use-secrets-in-databricks-to-secure-your-passwords-96043d6d4a40",
  },
  {
    title: "Optimization Strategies to Reduce Databricks Costs",
    description: "Practical strategies for optimizing Databricks workloads and reducing unnecessary compute costs.",
    date: "July 22, 2024",
    readTime: "4 min read",
    thumbnail: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*do1ktvGR9Cj6vzFBu_8Irw.png",
    mediumUrl: "https://medium.com/@jaltareyr/optimization-strategies-to-reduce-databricks-costs-by-yashodhan-jaltare-a2fdac8c6233",
  },
] as const;

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-12 sm:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-green-600">Notes and tutorials</p>
          <h1 className="text-3xl font-extrabold tracking-[-0.03em] text-gray-900 sm:text-4xl">BLOGS</h1>
        </div>
        <div className="space-y-6">
          {posts.map((post) => <BlogCard key={post.mediumUrl} {...post} />)}
        </div>
      </div>
    </div>
  );
}

function BlogCard({ title, description, date, readTime, mediumUrl, thumbnail }: (typeof posts)[number]) {
  return (
    <article className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-shadow hover:shadow-lg">
      <div className="flex flex-col md:flex-row">
        <div className="p-4 md:w-1/3">
          <div className="relative h-48 overflow-hidden rounded-lg md:h-full md:min-h-[230px]">
            <Image src={thumbnail} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
          </div>
        </div>
        <div className="p-6 md:w-2/3 md:p-8">
          <h2 className="mb-3 text-xl font-bold leading-snug tracking-tight text-gray-900 sm:text-2xl">{title}</h2>
          <p className="mb-5 leading-7 text-gray-600">{description}</p>
          <div className="flex items-center justify-between text-xs font-medium text-gray-500"><span>{date}</span><span>{readTime}</span></div>
          <Link href={mediumUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block rounded-md bg-black px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Read on Medium</Link>
        </div>
      </div>
    </article>
  );
}
