import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { Post } from './PostListPage'

type Props = {
  post: Post
  href: string
}

const PostCard: FC<Props> = ({ post, href }) => {
  return (
    <Link href={href}>
      <a
        key={post.slug}
        className="bg-white dark:bg-transparent group h-72 rounded-xl max-w-xs w-full mx-auto shadow-md hover:scale-105 duration-300 dark:border dark:border-white/20 dark:hover:border-white/50 dark:duration-500"
      >
        <article className="h-full flex flex-col">
          <div
            className="h-32 block w-full relative rounded-t-xl overflow-hidden
  after:content-[''] after:inline-block after:h-full after:w-full dark:after:group-hover:bg-black/20 after:transition after:duration-500 after:ease-in-out z-10"
          >
            <Image
              src={post.cover_url}
              alt={`${post.slug}-image`}
              className="dark:group-hover:scale-110 transition duration-500 ease-in-out rounded-t-xl -z-10"
              layout="fill"
              objectFit="cover"
              sizes="320px"
            />
          </div>
          <div className="text-left p-6 flex flex-col justify-between flex-auto">
            <div>
              <h3 className="font-bold text-lg">{post.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-semibold text-sm">
              {post.created_at}
            </p>
          </div>
        </article>
      </a>
    </Link>
  )
}

export default PostCard
