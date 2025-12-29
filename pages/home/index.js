import { Approach } from 'components/approach'
import { Contact } from 'components/contact'
import { Features } from 'components/features'
import { Hardware } from 'components/hardware'
import { Hero } from 'components/hero'
import { HowItWorks } from 'components/how-it-works'
import { News } from 'components/news'
import { Partners } from 'components/partners'
import { Stats } from 'components/stats'
import { UseCases } from 'components/use-cases'
import { useTinaObjects } from 'hooks/use-tina'
import { Layout } from 'layouts/default'
import { client } from 'tina/__generated__/client'
import s from './home.module.scss'
import { useStore } from '/libs/store'

const pageId = 'home'

export default function Home({ home }) {
  const { sections, global } = useTinaObjects(home, pageId)
  const { navigation, metadata } = global
  const {
    hero,
    stats,
    howItWorks,
    approach,
    features,
    hardware,
    useCases,
    partnersAndInvestors,
    news,
    contact,
  } = sections

  const theme = useStore(({ theme }) => theme)

  // const [counter, setCounter] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((counter) => counter + 1)
  //   }, 1000)

  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [])

  return (
    <Layout theme={theme} className={s.page} {...navigation} seo={metadata}>
      {hero && <Hero {...hero} />}
      {stats && <Stats {...stats} />}
      {howItWorks && <HowItWorks {...howItWorks} />}
      {approach && <Approach {...approach} />}
      {features && <Features {...features} />}
      {hardware && <Hardware {...hardware} />}
      {useCases && <UseCases {...useCases} />}
      {partnersAndInvestors && <Partners {...partnersAndInvestors} />}
      {news && <News {...news} />}
      {contact && <Contact {...contact} />}
    </Layout>
  )
}

export async function getStaticProps() {
  const [home] = await Promise.all([
    client.queries[pageId]({
      relativePath: 'home.md',
    }),
  ])

  return {
    props: {
      id: pageId,
      home,
    },
  }
}
