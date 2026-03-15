import { Image, Link } from '@studio-freight/compono'
import cn from 'clsx'
import { useTinaMedia } from 'hooks/use-tina-media'
import { Background } from 'libs/webgl/components/background'
import { tinaField } from 'tinacms/dist/react'
import s from './news.module.scss'

const ArticleImage = ({ src, tinaData }) => {
  const imgSrc = useTinaMedia(src)

  return (
    <div className={s.imgWrap} data-tina-field={tinaData}>
      <Image src={imgSrc} fill alt="" />
    </div>
  )
}
const ArticleLogo = ({ src, tinaData }) => {
  const imgSrc = useTinaMedia(src)

  return (
    <div className={s.logoWrap} data-tina-field={tinaData}>
      <Image
        src={imgSrc}
        width={16}
        height={16}
        alt={tinaData}
        className={s.logoIcon}
      />
    </div>
  )
}

export function News(props) {
  const { sectionTitle, articles } = props

  return (
    <div className={cn(s.news, 'layout-grid')} id="ZKP">
      <h6 className="p" data-tina-field={tinaField(props, 'sectionTitle')}>
        {sectionTitle}
        <Background className={s.bg} />
      </h6>

      <div className={s.articles}>
        {articles?.map((article, i) => {
          const hasLogos = article.logos && article.logos.length > 0

          if (hasLogos) {
            return (
              <div className={s.article} key={i}>
                {article.image && (
                  <ArticleImage
                    src={article.image}
                    tinaData={tinaField(article, 'image')}
                  />
                )}

                <div className={s.titleArea}>
                  <span
                    className="p"
                    data-tina-field={tinaField(article, 'title')}
                  >
                    {article.title}
                  </span>
                  <div className={s.logoRow}>
                    {article.logos.map((logo, idx) => (
                      <Link
                        className={s.logoLink}
                        href={logo.url}
                        key={idx}
                        data-tina-field={tinaField(logo, 'url')}
                      >
                        <ArticleLogo
                          src={logo.logo}
                          tinaData={tinaField(logo, 'logo')}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          }

          return (
            <Link className={s.article} href={article.articleURL} key={i}>
              {article.image && (
                <ArticleImage
                  src={article.image}
                  tinaData={tinaField(article, 'image')}
                />
              )}

              <div className={s.titleArea}>
                <span
                  className="p"
                  data-tina-field={tinaField(article, 'title')}
                >
                  {article.title}
                </span>
                <h3
                  className="h3"
                  data-tina-field={tinaField(article, 'articleTitle')}
                >
                  {article.articleTitle}
                </h3>
              </div>

              <span className={cn(s.cta, 'desktop-only')}>
                {article.ctaText}
              </span>
            </Link>
          )
        })}

        <Background className={s.bg} />
      </div>
    </div>
  )
}
