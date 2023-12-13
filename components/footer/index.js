import { Link } from '@studio-freight/compono'
import { useLenis } from '@studio-freight/react-lenis'
import cn from 'clsx'
import { Mask } from 'components/mask'
import { tinaField } from 'tinacms/dist/react'
import s from './footer.module.scss'

export function Footer(props) {
  const { logo, topLeftLinks, topRightLinks, bottomLinks } = props

  const lenis = useLenis()

  // console.log(logo)

  return (
    <footer className={cn(s.footer, 'layout-grid')} id="footer">
      <div className={s.icon} data-tina-field={tinaField(props, 'logo')}>
        {logo && <Mask src={logo} fill alt="" />}
      </div>
      <div className={s.content}>
        <div className={s.frame}>
          <div />
          <div />
          <div />
          <div />
        </div>

        <div className={s.inner}>
          <div className={s.list}>
            <span
              className="p"
              data-tina-field={tinaField(topLeftLinks, 'label')}
            >
              {topLeftLinks.label}
            </span>

            <div className={s.links}>
              {topLeftLinks?.links?.map(({ link }, i) => (
                <Link
                  href={link.url}
                  key={i}
                  className="h3"
                  data-tina-field={tinaField(link, 'text')}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
          <div className={s.list}>
            <span
              className="p"
              data-tina-field={tinaField(topRightLinks, 'label')}
            >
              {topRightLinks.label}
            </span>

            <div className={s.links}>
              {topRightLinks?.links?.map(({ link }, i) => (
                <Link
                  href={link.url}
                  key={i}
                  className="p"
                  data-tina-field={tinaField(link, 'text')}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
          <div className={s.list}>
            <span
              className="p"
              data-tina-field={tinaField(bottomLinks, 'label')}
            >
              {bottomLinks.label}
            </span>

            <div className={s.links}>
              {bottomLinks?.links?.map(({ link }, i) => (
                <Link
                  href={link.url}
                  key={i}
                  className="h3"
                  data-tina-field={tinaField(link, 'text')}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button className={s.topButton} onClick={() => lenis.scrollTo(0)}>
        Back To Top
      </button>

      <span className={cn(s.copyright, 'p')}>
        © {new Date().getFullYear()} ZKPASS
      </span>
    </footer>
  )
}
