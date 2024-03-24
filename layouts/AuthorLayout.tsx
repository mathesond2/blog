import { logEvent } from '@/components/analytics/GoogleAnalytics'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import { ReactNode } from 'react'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'

interface Props {
  children: ReactNode
  frontMatter: AuthorFrontMatter
}

export default function AuthorLayout({ frontMatter }: Props) {
  const { name, avatar } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y">
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full"
            />
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-dark xl:col-span-2">
            Hey, I'm David. 👋
            <br />
            <br />
            I’m a software engineer and long-time skateboarder. Before software, I had a past life
            in Fine Art.
            <br />
            <br /> I currently work as a Senior Front End Engineer at
            <a href="https://flex.one/" target="_blank" rel="noopener noreferrer">
              {' '}
              Flex
            </a>
            .
          </div>
        </div>
      </div>
    </>
  )
}
