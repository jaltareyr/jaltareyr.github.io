import Image from 'next/image';
import Link from 'next/link';

export default function BlogsPage() {
  const placeholderPosts = [
    {
      title: 'HOW TO: Create a new job on Databricks using Jobs API',
      description: 'A step-by-step guide to creating and managing a new job on Databricks using the Jobs API.',
      date: 'May 12, 2024',
      readTime: '4 min read',
      thumbnail: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*7GY7Ljkfj5Fsz-7y8xJDCQ.png', // Add your placeholder image to the public folder
      mediumUrl: 'https://medium.com/@jaltareyr/how-to-create-a-new-job-on-databricks-using-jobs-api-5baafa255bc3',
    },
    {
      title: 'HOW TO: Use secrets in Databricks to secure your credentials',
      description: 'We can use Databricks secrets to store and use credentials and reference them in notebooks and workflows.',
      date: 'June 25, 2024',
      readTime: '2 min read',
      thumbnail: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Tf-Cctss--BizBx7N-Uifw.jpeg',
      mediumUrl: 'https://medium.com/@jaltareyr/how-to-use-secrets-in-databricks-to-secure-your-passwords-96043d6d4a40',
    },
    {
      title: 'Optimization Strategies to Reduce Databricks Costs | By Yashodhan Jaltare',
      description: 'The first-ever design software I started using was Blender. I wouldn’t just call it software; it’s a whole environment on its own.',
      date: 'July 22, 2024',
      readTime: '4 min read',
      thumbnail: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*do1ktvGR9Cj6vzFBu_8Irw.png',
      mediumUrl: 'https://medium.com/@jaltareyr/optimization-strategies-to-reduce-databricks-costs-by-yashodhan-jaltare-a2fdac8c6233',
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-grey-100 to-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-extrabold text-center mb-12">BLOGS</h1>
        <div className="space-y-8">
          {placeholderPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              description={post.description}
              date={post.date}
              readTime={post.readTime}
              mediumUrl={post.mediumUrl}
              thumbnail={post.thumbnail}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  readTime: string;
  mediumUrl: string;
  thumbnail: string;
}

function BlogCard({ title, description, date, readTime, mediumUrl, thumbnail }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg border-2 border-gray-300 overflow-hidden w-full">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 p-4">
          <div className="relative h-48 md:h-full">
            <Image
              src={thumbnail}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="md:w-2/3 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>{date}</span>
            <span>{readTime}</span>
          </div>
          <Link
            href={mediumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
          >
            Read on Medium
          </Link>
        </div>
      </div>
    </div>
  );
}
