import dynamic from 'next/dynamic'

const FooterSocialMediaSection = dynamic(
  () => import('./FooterSocialMediaSection')
)

export default function Footer() {
  return (
    <footer className="h-7 mx-auto text-gray-700 dark:text-gray-300 mb-5 w-full max-w-5xl px-6 print:hidden">
      <div className="h-px w-full bg-black/[0.24] dark:bg-white/[0.24]"></div>
      <div className="flex justify-between mt-2">
        <div>
          <small>© {new Date().getFullYear()} Zydhan Linnar Putra.</small>
        </div>
        <FooterSocialMediaSection />
      </div>
    </footer>
  )
}
