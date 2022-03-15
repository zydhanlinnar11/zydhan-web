import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import SmallSocialMediaButton from '@/components/SmallSocialMediaButton'
import FooterNavigation from './FooterNavigation'

const socialMedia = [
  {
    icon: faGithub,
    url: 'https://github.com/zydhanlinnar11',
    name: 'Github',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/zydhanlinnar11',
    name: 'LinkedIn',
  },
]

export default function Footer() {
  return (
    <footer className="mx-auto text-gray-700 dark:text-gray-300 mb-5 w-full max-w-5xl px-6 print:hidden">
      <div className="h-px w-full bg-black/[0.24] dark:bg-white/[0.24]"></div>
      <FooterNavigation />
      <div className="h-px w-full bg-black/[0.24] dark:bg-white/[0.24]"></div>
      <div className="flex justify-between mt-2">
        <div>
          <small>© {new Date().getFullYear()} Zydhan Linnar Putra.</small>
        </div>
        <div className="flex gap-3">
          {socialMedia.map((item) => (
            <SmallSocialMediaButton
              icon={item.icon}
              name={item.name}
              url={item.url}
              key={item.name}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}
