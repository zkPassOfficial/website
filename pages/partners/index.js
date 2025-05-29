import { Image } from '@studio-freight/compono'
import cn from 'clsx'
import { useTinaObjects } from 'hooks/use-tina'
import { Layout } from 'layouts/default'
import { client } from 'tina/__generated__/client'
import s from './partners.module.scss'
import LinkIcon from '/assets/svgs/link.svg'
import { useStore } from '/libs/store'
const pageId = 'home'

export default function Partners({ home }) {
  const { global } = useTinaObjects(home, pageId)
  const { navigation, metadata } = global

  const theme = useStore(({ theme }) => theme)

  const partnerList = [
    {
      web_eco_project_id: 2,
      web_eco_project_name: 'Aspecta',
      web_eco_project_link: 'https://aspecta.ai/',
      web_eco_project_desc:
        'The on-chain infrastructure facilitates reputation attestatio.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/Aspecta.jpg',
    },
    {
      web_eco_project_id: 5,
      web_eco_project_name: 'BAS',
      web_eco_project_link: 'https://www.bnbattest.io/',
      web_eco_project_desc:
        'Infrastructure on BNB for generating/verifying data attestations, supporting data privacy and access control.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/BAS.jpg',
    },
    {
      web_eco_project_id: 6,
      web_eco_project_name: 'Billions Network',
      web_eco_project_link: 'https://billions.network/',
      web_eco_project_desc:
        'ZK identity platform for trusted AI-human interactions.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/Billions.jpg',
    },
    {
      web_eco_project_id: 7,
      web_eco_project_name: 'Bondex',
      web_eco_project_link: 'https://www.bondex.app/',
      web_eco_project_desc:
        'Decentralized professional network for jobs, rep, and monetized referrals.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/Bondex.jpg',
    },
    {
      web_eco_project_id: 8,
      web_eco_project_name: 'Calimero Network',
      web_eco_project_link: 'https://calimero.network/',
      web_eco_project_desc:
        'Peer-to-peer app framework for data ownership and verified off-chain computing.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/Calimero Network.png',
    },
    {
      web_eco_project_id: 10,
      web_eco_project_name: 'CESS',
      web_eco_project_link: 'https://cess.network',
      web_eco_project_desc:
        'Data infra platform for AI and DeSci with privacy and traceability features.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/CESS.jpg',
    },
    {
      web_eco_project_id: 11,
      web_eco_project_name: 'Chirpley.ai',
      web_eco_project_link: 'https://chirpley.ai/',
      web_eco_project_desc:
        'Decentralized influencer platform automating nano/micro-campaigns.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/Chirpley.jpg',
    },
    {
      web_eco_project_id: 12,
      web_eco_project_name: 'Coded Estate',
      web_eco_project_link: 'https://codedestate.com/',
      web_eco_project_desc:
        'Real estate platform using AI, NFTs, and ZK for on-chain rentals and ownership.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/CodedEstate.jpg',
    },
    {
      web_eco_project_id: 13,
      web_eco_project_name: 'Dappad',
      web_eco_project_link: 'https://www.dappad.app/',
      web_eco_project_desc:
        'zkSync-native launchpad for DApp fundraising, marketing, and deployment via secure token sales.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/dappad.jpg',
    },
    {
      web_eco_project_id: 14,
      web_eco_project_name: 'Dino Dex',
      web_eco_project_link: 'https://dinodex.io/',
      web_eco_project_desc:
        'First DEX on Mina Protocol using Proto Kit framework.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/Dinodex.jpg',
    },
    {
      web_eco_project_id: 16,
      web_eco_project_name: 'EikoZone',
      web_eco_project_link: 'https://eiko.zone/',
      web_eco_project_desc:
        'Web3 AI project gamifying community engagement via $EIKO and XP rewards.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/Eiko.jpg',
    },
    {
      web_eco_project_id: 18,
      web_eco_project_name: 'Fhenix',
      web_eco_project_link: 'https://www.fhenix.io/',
      web_eco_project_desc:
        'FHE-focused R&D company building practical applications of homomorphic encryption.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/Fhenix.jpg',
    },
    {
      web_eco_project_id: 19,
      web_eco_project_name: 'Foxy',
      web_eco_project_link: 'https://www.welikethefox.io/',
      web_eco_project_desc:
        'First memecoin on Linea, branded as a culture coin to boost community engagement.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/Foxy.png',
    },
    {
      web_eco_project_id: 20,
      web_eco_project_name: 'Fuctor Network',
      web_eco_project_link: 'https://www.functor.sh/',
      web_eco_project_desc: 'A decentralized AI protocol and keystore rollup.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/Functor Network.jpg',
    },
    {
      web_eco_project_id: 22,
      web_eco_project_name: 'Gora Network',
      web_eco_project_link: 'https://www.gora.io/',
      web_eco_project_desc:
        'Oracle network on Algorand with AI-enhanced data feeds and $GORA token.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/Gora.jpg',
    },
    {
      web_eco_project_id: 23,
      web_eco_project_name: 'Heima Network',
      web_eco_project_link: 'https://www.heima.network/',
      web_eco_project_desc:
        'L1 chain evolved from Litentry, focusing on DID, AI tools, and stablecoin infra.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/heima.jpg',
    },
    {
      web_eco_project_id: 24,
      web_eco_project_name: 'Honeycomb',
      web_eco_project_link: 'https://www.honeycomb.zone/',
      web_eco_project_desc:
        'Cardano wallet visualizer showing asset flows, whales, and transaction patterns.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/Honeycomb.jpg',
    },
    {
      web_eco_project_id: 26,
      web_eco_project_name: 'iExchange',
      web_eco_project_link: 'https://iexchange.global/',
      web_eco_project_desc:
        'Decentralized P2P fiat-crypto platform with zkKYC compliance and Gold Bar rewards.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/iexchange.jpg',
    },
    {
      web_eco_project_id: 27,
      web_eco_project_name: 'Intract',
      web_eco_project_link: 'https://www.intract.io/?home',
      web_eco_project_desc:
        'Web3 marketing platform offering bot-free, high-ROI campaigns through on-chain quests.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/intract.jpg',
    },
    {
      web_eco_project_id: 28,
      web_eco_project_name: 'IoTex',
      web_eco_project_link: 'https://iotex.io/',
      web_eco_project_desc:
        'Modular L1 connecting IoT to Web3 with 2.4M+ devices via $IOTX and W3bstream.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/intract.jpg',
    },
    {
      web_eco_project_id: 29,
      web_eco_project_name: 'Joba Network',
      web_eco_project_link: 'https://app.joba.network/',
      web_eco_project_desc:
        'Decentralized platform for on-chain work credentials and hiring.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/Joba Network.png',
    },
    {
      web_eco_project_id: 30,
      web_eco_project_name: 'Kgen',
      web_eco_project_link: 'https://kgen.io/',
      web_eco_project_desc:
        'Gaming quest and reward engine with Proof of Gamer and 13M+ users.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/KGeN.jpg',
    },
    {
      web_eco_project_id: 32,
      web_eco_project_name: 'Koii Foundation',
      web_eco_project_link: 'https://www.koii.network/',
      web_eco_project_desc:
        'DePIN supercomputer rewarding users for compute/storage; 93k+ nodes.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/Koii network.jpg',
    },
    {
      web_eco_project_id: 33,
      web_eco_project_name: 'LayerEdge',
      web_eco_project_link: 'https://www.layeredge.io/',
      web_eco_project_desc:
        'ZK aggregation infra for Bitcoin-backed security across blockchain layers.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/LayerEdge.jpg',
    },
    {
      web_eco_project_id: 34,
      web_eco_project_name: 'Lifeform',
      web_eco_project_link: 'https://www.lifeform.cc/',
      web_eco_project_desc:
        'BNB-based DID and digital avatar platform using AI and $LFT for secure interactions.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/lifeform.jpg',
    },
    {
      web_eco_project_id: 37,
      web_eco_project_name: 'Meson Network',
      web_eco_project_link: 'https://meson.network/',
      web_eco_project_desc:
        'DePIN-based bandwidth marketplace for fast, low-cost Web3 data delivery.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/meson.jpg',
    },
    {
      web_eco_project_id: 35,
      web_eco_project_name: 'Matchain',
      web_eco_project_link: 'https://www.matchain.io/',
      web_eco_project_desc:
        'BNB-based L2 for decentralized identity and data ownership via MatchID.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/Matchain.jpg',
    },
    {
      web_eco_project_id: 38,
      web_eco_project_name: 'Metopia',
      web_eco_project_link: 'https://metopia.xyz/',
      web_eco_project_desc: 'Verifiable credential protocol built on base.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/Metopia.png',
    },
    {
      web_eco_project_id: 40,
      web_eco_project_name: 'Mocaverse',
      web_eco_project_link: 'https://moca.network/',
      web_eco_project_desc:
        'Chain-agnostic digital ID infra for assets and reputation, with 700M+ users via partners.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/mocaverse.jpg',
    },
    {
      web_eco_project_id: 41,
      web_eco_project_name: 'MYX Finance',
      web_eco_project_link: 'https://www.myx.finance/en',
      web_eco_project_desc:
        'Zero-slippage perp DEX on Arbitrum/Linea with 50x leverage and high capital efficiency.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/MYX Finance.png',
    },
    {
      web_eco_project_id: 43,
      web_eco_project_name: 'Nubit',
      web_eco_project_link: 'https://www.nubit.org/',
      web_eco_project_desc:
        'Bitcoin-native L1 for fast, scalable data availability using ZK proofs and BitVM.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/nubit.jpg',
    },
    {
      web_eco_project_id: 44,
      web_eco_project_name: 'Oort',
      web_eco_project_link: 'https://www.oortech.com/',
      web_eco_project_desc:
        'Decentralized cloud computing for AI, aggregating global compute resources.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/OORT.jpg',
    },
    {
      web_eco_project_id: 45,
      web_eco_project_name: 'Open Campus',
      web_eco_project_link: 'https://educhain.xyz/',
      web_eco_project_desc:
        'Layer-3 Web3 education chain with tools like Publisher NFTs and OC-X.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/Open Campus.png',
    },
    {
      web_eco_project_id: 46,
      web_eco_project_name: 'Parfin',
      web_eco_project_link: 'https://parfin.io/en',
      web_eco_project_desc:
        'Web3 infra for institutions offering custody, tokenization, and asset management.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/Parfin.png',
    },
    {
      web_eco_project_id: 47,
      web_eco_project_name: 'Pencils Protocol',
      web_eco_project_link: 'https://pencilsprotocol.io/',
      web_eco_project_desc:
        'Auction, staking, and yield dApp on Scroll with $317M TVL.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/pencils Protocol.jpg',
    },
    {
      web_eco_project_id: 4,
      web_eco_project_name: 'Banza',
      web_eco_project_link: 'https://banza.xyz/',
      web_eco_project_desc:
        'User-first data monetization platform with private AI and $BANZA tokens.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/Banza.jpg',
    },
    {
      web_eco_project_id: 1,
      web_eco_project_name: 'Aloega',
      web_eco_project_link: 'https://www.aloega.com/',
      web_eco_project_desc:
        'Non-profit healthcare chain enabling private, AI-enhanced medical data sharing.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/Aloega.jpg',
    },
    {
      web_eco_project_id: 3,
      web_eco_project_name: 'Baai',
      web_eco_project_link: 'https://node.baai.co/',
      web_eco_project_desc:
        'AI-driven platform combining neuroscience and computer vision to enhance engagement in education and virtual meetings.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/Baai.jpg',
    },
    {
      web_eco_project_id: 51,
      web_eco_project_name: 'PowerPod',
      web_eco_project_link: 'https://www.powerpod.pro/',
      web_eco_project_desc:
        'DePIN energy network linking EVs, solar, and grid via $PT token.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/PowerPod.jpg',
    },
    {
      web_eco_project_id: 50,
      web_eco_project_name: 'Pontech',
      web_eco_project_link: 'https://www.pontech.dev/',
      web_eco_project_desc:
        'Japan-based Web3 dev firm offering end-to-end blockchain solutions.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/Pontech.png',
    },
    {
      web_eco_project_id: 53,
      web_eco_project_name: 'Push Chain',
      web_eco_project_link: 'https://push.org/',
      web_eco_project_desc:
        'Shared-state L1 enabling universal app access across multiple chains.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/Push Chain.jpg',
    },
    {
      web_eco_project_id: 52,
      web_eco_project_name: 'Privado ID',
      web_eco_project_link: 'https://www.privado.id/',
      web_eco_project_desc:
        'Secure, universal identity verification across devices and protocols.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/Privado ID.jpg',
    },
    {
      web_eco_project_id: 54,
      web_eco_project_name: 'Rarimo Protocol',
      web_eco_project_link: 'https://rarimo.com/',
      web_eco_project_desc:
        'ZK identity layer for secure voting and private apps, funded by Vitalik.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/Rarimo.jpg',
    },
    {
      web_eco_project_id: 55,
      web_eco_project_name: 'ShardLab',
      web_eco_project_link: 'https://shardlab.com/',
      web_eco_project_desc:
        'Starknet infra tools for user-owned identity and data via ShardID wallet.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/ShardLab.jpg',
    },
    {
      web_eco_project_id: 56,
      web_eco_project_name: 'Skate Chain',
      web_eco_project_link: 'https://www.skatechain.org/',
      web_eco_project_desc:
        'Unified Web3 application layer enabling cross-VM dApps on major chains.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/Skate Chain.jpg',
    },
    {
      web_eco_project_id: 58,
      web_eco_project_name: 'Solana ID',
      web_eco_project_link: 'https://www.solana.id/',
      web_eco_project_desc:
        'Verifiable identity protocol on Solana with wallet-based rewards and $SOLID token.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/SolanaID.jpg',
    },
    {
      web_eco_project_id: 57,
      web_eco_project_name: 'Soccersm',
      web_eco_project_link: 'https://soccersm.ai/',
      web_eco_project_desc:
        'AI-powered soccer prediction platform with $BALLS rewards and gamified pools.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/Soccersm.jpg',
    },
    {
      web_eco_project_id: 59,
      web_eco_project_name: 'Space and Time',
      web_eco_project_link: 'https://www.spaceandtime.io/',
      web_eco_project_desc:
        'ZK data blockchain with sub-second coprocessor and SQL APIs.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/Space and Time.jpg',
    },
    {
      web_eco_project_id: 61,
      web_eco_project_name: 'StorSwift',
      web_eco_project_link: 'https://www.storswift.com/',
      web_eco_project_desc:
        'Decentralized storage using ZK and MPC, ZPrize 2023 MSM winner.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/StorSwift.jpg',
    },
    {
      web_eco_project_id: 62,
      web_eco_project_name: 'Story Protocol',
      web_eco_project_link: 'https://www.story.foundation/',
      web_eco_project_desc:
        'L1 for IP registration, licensing, and monetization using $IP token.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/StoryProtocol.jpg',
    },
    {
      web_eco_project_id: 63,
      web_eco_project_name: 'TaskOn',
      web_eco_project_link: 'https://taskon.xyz/',
      web_eco_project_desc:
        'Gamified Web3 growth platform with 1.5M+ MAUs and airdrop-focused tools.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/TaskOn.jpg',
    },
    {
      web_eco_project_id: 64,
      web_eco_project_name: 'Tea Protocol',
      web_eco_project_link: 'https://tea.xyz/',
      web_eco_project_desc:
        'L2 for OSS rewards using Proof of Contribution and $TEA tokens.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/Tea Protocol.jpg',
    },
    {
      web_eco_project_id: 65,
      web_eco_project_name: 'TradeOS',
      web_eco_project_link: 'https://www.tradeos.xyz/',
      web_eco_project_desc:
        'TON-based PayFi app using zkTLS for secure meme asset trading on Telegram.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/TradeOS.jpg',
    },
    {
      web_eco_project_id: 66,
      web_eco_project_name: 'Trepa',
      web_eco_project_link: 'https://www.trepa.io/',
      web_eco_project_desc:
        'Solana social prediction dApp with rewards for sentiment votes and private results.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/Trepa.jpg',
    },
    {
      web_eco_project_id: 67,
      web_eco_project_name: 'Vana Network',
      web_eco_project_link: 'https://www.vana.org/',
      web_eco_project_desc:
        'Open data layer for AI enabling user-owned models and DataDAOs.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/vana network.jpg',
    },
    {
      web_eco_project_id: 68,
      web_eco_project_name: 'Vault',
      web_eco_project_link: 'https://mpcvault.com/',
      web_eco_project_desc:
        'MPCVault is a non-custodial, multi-chain, multi-sig DeFi wallet for teams and families.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/',
    },
    {
      web_eco_project_id: 71,
      web_eco_project_name: 'WOW EARN',
      web_eco_project_link: 'https://www.wowearn.com/',
      web_eco_project_desc:
        'All-in-one Web3 app with wallet, chat, marketplace, and mining.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/WOW EARN.jpg',
    },
    {
      web_eco_project_id: 72,
      web_eco_project_name: 'XION',
      web_eco_project_link: 'https://getxion.com/',
      web_eco_project_desc:
        'Walletless consumer-friendly L1 with gasless UX and $XION token.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/XION.jpg',
    },
    {
      web_eco_project_id: 69,
      web_eco_project_name: 'Verax',
      web_eco_project_link: 'https://www.ver.ax/',
      web_eco_project_desc:
        'a public registry for storing attestations on EVM chain.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/Verax.png',
    },
    {
      web_eco_project_id: 74,
      web_eco_project_name: 'Zerolend',
      web_eco_project_link: 'https://zerolend.xyz/',
      web_eco_project_desc:
        'Lending on zkSync, Linea, Manta for memecoins, LRTs, and RWAs; $198.2M TVL.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/ZeroLend.jpg',
    },
    {
      web_eco_project_id: 73,
      web_eco_project_name: 'YGG',
      web_eco_project_link: 'https://www.yieldguild.io/',
      web_eco_project_desc:
        'Web3 gaming guild offering P2E quests and NFT rewards.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/Yield Guild Games (YGG).png',
    },
    {
      web_eco_project_id: 75,
      web_eco_project_name: 'zkBring',
      web_eco_project_link: 'https://zkbring.com/',
      web_eco_project_desc:
        'Airdrop infra using zkTLS and Web2 activity to drive real user onboarding.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/zkBring.jpg',
    },
    {
      web_eco_project_id: 76,
      web_eco_project_name: 'zkVerify',
      web_eco_project_link: 'https://zkverify.io/',
      web_eco_project_desc:
        'Modular blockchain for scalable ZK-proof verification.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/zkVerify(ZKV Protocol).jpg',
    },
    {
      web_eco_project_id: 70,
      web_eco_project_name: 'Verida Network',
      web_eco_project_link: 'https://www.verida.network/',
      web_eco_project_desc:
        'Layer-zero DePIN network for private data storage, compute, and AI/Web3 integration.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/Verida.jpg',
    },
    {
      web_eco_project_id: 9,
      web_eco_project_name: 'Canza Finance',
      web_eco_project_link: 'https://canza.io/',
      web_eco_project_desc:
        'Web3 neobank offering RWA, stablecoins, and PayFi for African SMEs.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/Canza.jpg',
    },
    {
      web_eco_project_id: 15,
      web_eco_project_name: 'edgeX Exchange',
      web_eco_project_link: 'https://www.edgex.exchange/',
      web_eco_project_desc:
        'Orderbook-based perp DEX on Ethereum L2 with high liquidity and up to 100x leverage.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/edgex.jpg',
    },
    {
      web_eco_project_id: 17,
      web_eco_project_name: 'FameGuild',
      web_eco_project_link: 'https://www.fameguild.com/',
      web_eco_project_desc:
        'Bitcoin sidechain platform for decentralized data, apps, and $FAME rewards.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/Fame Guild.jpg',
    },
    {
      web_eco_project_id: 21,
      web_eco_project_name: 'GAIB',
      web_eco_project_link: 'https://gaib.ai/',
      web_eco_project_desc:
        'Tokenizing GPU yields for AI, creating a decentralized AI economy with $AID.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/GAIB.jpg',
    },
    {
      web_eco_project_id: 31,
      web_eco_project_name: 'KIP Protocol',
      web_eco_project_link: 'https://www.kiphub.ai/',
      web_eco_project_desc:
        'Web3 AI framework for managing and monetizing knowledge assets using NFTs and SFTs.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/KIP Protocol.jpg',
    },
    {
      web_eco_project_id: 36,
      web_eco_project_name: 'Merlin Chain',
      web_eco_project_link: 'https://merlinchain.io/',
      web_eco_project_desc:
        'Bitcoin L2 using ZK-rollups and oracles; supports BRC-20/420, $3.6B TVL.',
      web_eco_project_logo: 'https://store.zkpass.org/partners_logo/merlin.jpg',
    },
    {
      web_eco_project_id: 42,
      web_eco_project_name: 'Nimbora',
      web_eco_project_link: 'https://app.nimbora.io/',
      web_eco_project_desc:
        'Starknet DeFi platform for simplified yield and lending via $STRK staking.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/Nimbora.jpg',
    },
    {
      web_eco_project_id: 48,
      web_eco_project_name: 'PlayFi Studios',
      web_eco_project_link: 'https://www.playfi.studio/',
      web_eco_project_desc:
        'BNB-based game studio using AI and $PLAYFI to build immersive Web3 games.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/PlayFi Studio.png',
    },
    {
      web_eco_project_id: 49,
      web_eco_project_name: 'PolyFlow',
      web_eco_project_link: 'https://app.polyflow.tech/',
      web_eco_project_desc:
        'PayFi protocol for RWA payments and private ID-linked transactions.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/PolyFlow.jpg',
    },
    {
      web_eco_project_id: 25,
      web_eco_project_name: 'HyperSign ID',
      web_eco_project_link: 'https://www.hypersign.id/',
      web_eco_project_desc:
        'Layer-1 identity protocol with zkKYC and verifiable credentials via $HID.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/Hypersign.png',
    },
    {
      web_eco_project_id: 39,
      web_eco_project_name: 'Mira Network',
      web_eco_project_link: 'https://mira.network/',
      web_eco_project_desc:
        'Trust layer for AI to verify outputs across 4M+ users and 15+ apps.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/Mira Network.jpg',
    },
    {
      web_eco_project_id: 60,
      web_eco_project_name: 'Stormbit Finance',
      web_eco_project_link: 'https://stormbit.finance/',
      web_eco_project_desc:
        'zkTLS-enabled DeFi lending for RWA, tokens, and reputation in LatAm & Africa.',
      web_eco_project_logo:
        'https://store.zkpass.org/partners_logo/Stormbit.jpg',
    },
  ]

  return (
    <Layout theme={theme} className={s.page} {...navigation} seo={metadata}>
      <div className={s.description}>
        <p className={s.title}>Partners</p>
        <p className={s.text}>
          Explore the growing network of builders, protocols, and platforms
          integrating zkPass. From verifiable credentials to privacy-preserving
          on-chain actions, our ecosystem enables a new standard of trust across
          Web3 — powered by zero-knowledge proofs and secured through zkTLS.
        </p>
      </div>
      <ul className={s.partnersContainer}>
        {partnerList.map((partner) => (
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
