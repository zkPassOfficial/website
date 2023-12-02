import { Image, Link } from '@studio-freight/compono'
import cn from 'clsx'
import { format } from 'fecha'
import { useTinaMedia } from 'hooks/use-tina-media'
import { Background } from 'libs/webgl/components/background'
import { tinaField } from 'tinacms/dist/react'
import s from './news.module.scss'

const ArticleImage = ({ src, tinaData }) => {
  const imgSrc = useTinaMedia(src)

  return (
    <div className={s.imgWrap} data-tina-field={tinaData}>
      <Image
        src={imgSrc}
        onLoad={({ target }) => console.log(target.src)}
        fill
      />
    </div>
  )
}

export function News(props) {
  const { sectionTitle, articles } = props

  return (
    <div className={cn(s.news, 'layout-grid')}>
      <h6 className="p" data-tina-field={tinaField(props, 'sectionTitle')}>
        {sectionTitle}
        <Background className={s.bg} />
      </h6>

      <div className={s.articles}>
        {articles?.map((article, i) => (
          <Link className={s.article} href={article.articleURL} key={i}>
            {article.image && (
              <ArticleImage
                src={article.image}
                tinaData={tinaField(article, 'image')}
              />
            )}

            <div className={s.titleArea}>
              <span className="p" data-tina-field={tinaField(article, 'date')}>
                {format(new Date(article.date), 'DD MMM YYYY')}
              </span>
              <h3
                className="h3"
                data-tina-field={tinaField(article, 'articleTitle')}
              >
                {article.articleTitle}
              </h3>
            </div>

            <span className={cn(s.cta, 'desktop-only')}>Read More</span>
          </Link>
        ))}

        <Background className={s.bg} />
      </div>
    </div>
  )
}
