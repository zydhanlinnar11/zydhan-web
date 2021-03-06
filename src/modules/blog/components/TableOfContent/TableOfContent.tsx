import { useEffect, useState } from 'react'
import useIntersectionObserver from '@/modules/blog/hooks/useIntersectionObserver'

type NestedHeading = {
  id: string
  title: string
  items?: NestedHeading[]
}

const getNestedHeadings = (headingElements: HTMLHeadingElement[]) => {
  const nestedHeadings: NestedHeading[] = []

  headingElements.forEach((heading, index) => {
    const { innerText: title, id } = heading

    if (heading.nodeName === 'H2') {
      nestedHeadings.push({ id, title, items: [] })
    } else if (heading.nodeName === 'H3' && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items?.push({
        id,
        title,
      })
    }
  })

  return nestedHeadings
}

const TableOfContent = () => {
  const [activeId, setActiveId] = useState()
  const [nestedHeadings, setNestedHeadings] = useState<NestedHeading[]>([])
  useIntersectionObserver(setActiveId)

  useEffect(() => {
    const headingElements: HTMLHeadingElement[] = Array.from(
      document.querySelectorAll('#post-content h2, #post-content h3')
    )

    const newNestedHeadings = getNestedHeadings(headingElements)
    setNestedHeadings(newNestedHeadings)
  }, [])

  return (
    <aside className="hidden lg:flex lg:flex-col sticky top-24 w-64 h-[calc(100vh-12rem)] text-sm gap-y-3 text-gray-400 transition-colors">
      <p className="uppercase font-bold">Table Of Content</p>
      <ul className="flex flex-col gap-y-2">
        {nestedHeadings.map((heading) => (
          <li
            key={heading.id}
            className={heading.id === activeId ? 'text-white font-medium' : ''}
          >
            <a href={`#${heading.id}`}>{heading.title}</a>
            {heading && heading.items && heading.items?.length > 0 && (
              <ul className="flex flex-col gap-y-2 pt-2">
                {heading.items?.map((child) => (
                  <li
                    key={child.id}
                    className={`list-inside ml-4 ${
                      child.id === activeId ? 'text-white font-medium' : ''
                    }`}
                  >
                    <a href={`#${child.id}`}>{child.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default TableOfContent
