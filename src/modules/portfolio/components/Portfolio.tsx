import Image from 'next/image'
import React from 'react'
import LangAndTools from './LangAndTools'
import Projects from './Projects'
import NarrowPageContainer from '@/common/components/NarrowPageContainer'
import Posts from './Posts'
import WorkExperiences from './WorkExperiences'
import Head from 'next/head'
import animatedPic from '../../../../public/logo.webp'

const description = `Hello friends!, you can call me Zydhan. I'm web development enthusiast with ${
  new Date().getFullYear() - 2021
} year of experience${
  new Date().getFullYear() > 2022 ? ' s' : ''
} and currently study to become Bachelor of Informatics Engineering at Sepuluh Nopember Institute of Technology Surabaya.`

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Zydhan Linnar Putra - Full-stack Developer</title>
        <meta name="description" content={description} />

        <meta
          property="og:title"
          content="Zydhan Linnar Putra - Full-stack Developer"
        />
        <meta property="og:url" content="https://zydhan.com" />
        <meta property="og:description" content={description} />

        <meta property="og:image" content="/logo.webp" />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:image:alt" content="Cartoonized photo of Zydhan" />

        <meta name="twitter:image:src" content="/logo.webp" />
        <meta
          name="twitter:title"
          content="Zydhan Linnar Putra - Full-stack Developer"
        />
        <meta property="twitter:description" content={description} />
      </Head>
      <NarrowPageContainer>
        <header className="flex flex-col p-3 gap-y-3 md:flex-row-reverse md:justify-between">
          <div>
            <Image
              src={animatedPic}
              width={128}
              height={128}
              placeholder="blur"
              alt="Animated photo of Zydhan Linnar Putra"
              priority
            />
          </div>
          <div className="flex flex-col gap-y-3 max-w-lg">
            <h1 className="text-3xl font-medium">Zydhan Linnar Putra</h1>
            <p className="text-lg dark:text-gray-200">Full-stack Developer</p>
            <p className="dark:text-gray-300">
              Hello friends!, you can call me{' '}
              <span className="cursor-pointer group relative text-blue-600 dark:text-blue-400 visited:text-indigo-500 font-bold">
                Zydhan
                <span
                  className="h-[2px] absolute bg-blue-600 dark:bg-blue-400 group-visited:bg-indigo-500 w-full bottom-0 left-0
        scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                ></span>
              </span>
              . I&apos;m web development enthusiast with{' '}
              {new Date().getFullYear() - 2021} year of experience
              {new Date().getFullYear() > 2022 && 's'} and currently study to
              become Bachelor of Informatics Engineering at Sepuluh Nopember
              Institute of Technology Surabaya.
            </p>
          </div>
        </header>

        <main className="p-3 mt-8">
          <h2 className="text-2xl font-medium">
            Favourite Languages and Tools
          </h2>
          <LangAndTools />
          <h2 className="text-2xl font-medium">Work Experiences</h2>
          <WorkExperiences />
          <h2 className="text-2xl font-medium mt-4">Recent Projects</h2>
          <Projects />
          <h2 className="text-2xl font-medium mt-8">Recent Posts</h2>
          <Posts />
        </main>
      </NarrowPageContainer>
    </>
  )
}

export default Portfolio
