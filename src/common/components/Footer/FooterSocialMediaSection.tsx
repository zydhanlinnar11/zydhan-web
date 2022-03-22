import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import SmallSocialMediaButton from '@/components/SmallSocialMediaButton'

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

const FooterSocialMediaSection = () => {
  return (
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
  )
}

export default FooterSocialMediaSection
