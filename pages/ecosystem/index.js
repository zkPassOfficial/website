import { Image } from '@studio-freight/compono'
import cn from 'clsx'
import { useTinaObjects } from 'hooks/use-tina'
import { Layout } from 'layouts/default'
import { useEffect, useState } from 'react'
import { client } from 'tina/__generated__/client'
import s from './ecosystem.module.scss'
import LinkIcon from '/assets/svgs/link.svg'
import { useStore } from '/libs/store'
const pageId = 'home'

export default function Ecosystem({ home }) {
  const { global } = useTinaObjects(home, pageId)

  const { navigation, metadata } = global

  const theme = useStore(({ theme }) => theme)
  const [partnerList, setPartnerList] = useState([])

  useEffect(() => {
    const getPartnerList = async () => {
      try {
        const response = await fetch(
          'https://dev.zkpass.org/v1/api/zkpass/web/getEcoProjects',
          { method: 'POST' },
        )
        const data = await response.json()
        if (data.errno === '0') {
          setPartnerList(data.info)
        }
      } catch (error) {
        console.log(error)
      }
    }

    getPartnerList()
  }, [])

  return (
    <Layout theme={theme} className={s.page} {...navigation} seo={metadata}>
      <div className={s.description}>
        <p className={s.title}>Ecosystem</p>
        <p className={s.text}>
          Explore the growing network of builders, protocols, and platforms
          integrating zkPass. From verifiable credentials to privacy-preserving
          on-chain actions, our ecosystem enables a new standard of trust across
          Web3 — powered by zero-knowledge proofs and secured through zkTLS.
        </p>
      </div>
      <ul className={s.partnersContainer}>
        {partnerList.length > 0 &&
          partnerList.map((partner) => (
            <li className={s.partnerItem} key={partner.web_eco_project_id}>
              <div className={s.cardTop}>
                <p className={s.partnerName}>
                  <span className={s.logo}>
                    <Image
                      src={partner.web_eco_project_logo}
                      className={s.logoImage}
                      fill
                      alt={partner.web_eco_project_name}
                    />
                  </span>
                  {partner.web_eco_project_name}
                </p>
                <a href={partner.web_eco_project_link} target="_blank">
                  <LinkIcon className={s.LinkIcon} />
                </a>
              </div>
              <div className={cn(s.topic)}>{partner.web_eco_project_desc}</div>
            </li>
          ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  try {
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
  } catch (error) {
    console.warn('TinaCMS client request failed:', error.message)

    return {
      props: {
        id: pageId,
        home: {
          data: {
            [pageId]: {
              global: [],
              sections: [],
            },
          },
        },
      },
    }
  }
}
