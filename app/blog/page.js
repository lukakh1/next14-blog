import H1 from '@/components/h1';
import Pagination from '@/components/pagination';
import { getPosts } from '@/lib/posts';
import Link from 'next/link';

export default async function BlogPostsPage({ searchParams }) {
  const tags = searchParams.tags?.split(',');
  const order = searchParams.order ?? 'newest';
  const page = searchParams.page ?? 1;
  const limit = searchParams.limit ?? 3;
  const { posts, pageCount } = await getPosts({
    tags,
    newest: order === 'newest',
    page,
    limit,
  });
  return (
    <>
      <H1>Recent posts</H1>
      <div className='text-lg text-gray-600 dark:text-gray-400 mb-8'>
        stay updated to recennt posts
      </div>
      <hr />
      <div className='mb-8'>
        Display&nbsp;
        {order === 'newest' && (
          <Link href='/blog?order=oldest' className='underline'>
            oldest
          </Link>
        )}
        {order === 'oldest' && (
          <Link href='/blog?order=newest' className='underline'>
            newest
          </Link>
        )}
      </div>
      <ul className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-4'>
        {posts?.map((post) => (
          <li key={post.slug}>
            <Link
              className='text-2xl font-semibold text-gray-800 dark:text-gray-200'
              href={`blog/${post.slug}`}
            >
              {post.frontmatter.title}
              <div className='text-gray-400 text-sm mt-2'>
                {post.frontmatter.date}
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className='mt-8'>
        <Pagination pageCount={pageCount} />
      </div>
    </>
  );
}
