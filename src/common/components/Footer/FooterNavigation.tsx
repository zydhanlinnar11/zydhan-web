import Link from 'next/link'
import React from 'react'

const navigations = [
  {
    name: 'Navigation',
    contents: [
      {
        name: 'Home',
        url: '/',
      },
      {
        name: 'Blog',
        url: '/blog',
      },
    ],
  },
]

const FooterNavigation = () => {
  return (
    <div className="pt-3 pb-5 px-3 flex">
      {navigations.map(({ contents, name }) => (
        <div key={name}>
          <small className="font-bold">{name}</small>
          <div className="flex flex-col gap-y-1 mt-1">
            {contents.map(({ name, url }) => (
              <Link href={url} key={name}>
                <a className="text-xs w-fit group relative">
                  {name}
                  <span className="h-px absolute w-full bottom-0 dark:bg-gray-300 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FooterNavigation
