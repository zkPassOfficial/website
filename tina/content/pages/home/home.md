---
title: home
global:
  - header:
      linkGroup:
        - groupLabel: Resources
          links:
            - text: Whitepaper
              url: 'https://docsend.com/view/5wdg66beu7m95jf3'
            - text: Doc
              url: 'https://zkpass.gitbook.io/zkpass/'
            - text: Roadmap
              url: 'https://docs.zkpass.org/supports/roadmap'
            - text: TransGate SDK
              url: 'https://zkpass.gitbook.io/zkpass/extension-js-sdk/introduction'
      cta:
        text: BUILD →
        url: 'https://dev.zkpass.org'
    footer:
      logo: /cms/svg/p.svg
      topLeftLinks:
        label: About
        links:
          - link:
              text: Our Story
              url: 'https://zkpass.gitbook.io/zkpass/introduction/about-zkpass'
          - link:
              text: Careers
              url: 'https://zkpass.gitbook.io/zkpass/supports/were-hiring'
      topRightLinks:
        label: Support
        links:
          - link:
              text: Brand Assets
              url: >-
                https://drive.google.com/drive/folders/1Hx1nlAAW2BEgxcoOKLX6i6q08VMsxHiu
          - link:
              text: Contact
              url: 'mailto:info@zkpass.org'
          - link:
              text: Terms & Conditions
              url: 'https://zkpass.gitbook.io/zkpass/supports/terms-and-conditions'
          - link:
              text: Privacy Policy
              url: 'https://zkpass.gitbook.io/zkpass/supports/privacy-policy'
      bottomLinks:
        label: Connect
        links:
          - link:
              text: Twitter
              url: 'https://twitter.com/zkPass'
          - link:
              text: Discord
              url: 'https://discord.com/invite/zkpass'
          - link:
              text: Medium
              url: 'https://medium.com/zkpass'
          - link:
              text: Github
              url: 'https://github.com/zkPassOfficial'
    _template: navigation
  - title: zkPass - Private Data Protocol
    description: Privacy-focused to connect the world
    keywords:
      - web3
    image: /cms/OG.png
    _template: metadata
sections:
  - header:
      rowOne: THE TRUST LAYER
      rowTwo: FOR THE
      rowThree: VERIFIABLE
      rowFour: INTERNET
    bodyLeft: 'PROOF WITHOUT EXPOSURE.'
    bodyRight: >-
      VERIFY ANYTHING WITHOUT REVEALING THE UNDERLYING DATA. FOR HUMANS AND AI AGENTS.
    linkBtn:
      text: $ZKP is Live
      url: 'https://docs.zkpass.org/zkpass-dao/zkp'
    banner:
      icon: /cms/svg/Logo wire 2.svg
      marquee:
        textEntry:
          - $ZKP is launching across multiple global exchanges
      cta:
        text: Learn More
        url: ''
    _template: hero
  - header:
      rowOne: TRUST BETWEEN
      rowTwo: ANY TWO ENTITIES
      rowThree: HUMAN ↔ HUMAN
      rowFour: HUMAN ↔ AGENT
      rowFive: AGENT ↔ AGENT
    body: >
      ZKPASS ENABLES A TRUST GRAPH WHERE ANY ENTITY — HUMAN OR AI AGENT — CAN VERIFY CLAIMS ABOUT ANY OTHER WITHOUT EXPOSING RAW DATA.
    cardsSectionTitle: Our Standings
    cards:
      - title: ZkProof Generation
        number: 10M+
      - title: ECO PARTNERS
        number: 80+
      - title: Community Supporters
        number: 1M+
      - title: Schemas
        number: 300+
    _template: stats
  - sectionTitle: How Does it Work?
    cards:
      - header: PERCEIVE
        subHeader: DATA ACCESS
        text: >-
          YOUR APP OR AGENT PERCEIVES REAL-WORLD DATA THROUGH ZKPASS VIA A SECURE 3-PARTY TLS HANDSHAKE. NO API KEYS SHARED, NO DATA EXPOSED.
        illustration: /cms/svg/tls.svg
      - header: PROVE
        subHeader: PROOF GENERATION
        text: >-
          ZKPASS GENERATES A ZERO-KNOWLEDGE PROOF USING VOLEITH — MILLISECOND PROOF GENERATION, NO TRUSTED SETUP, QUANTUM-SAFE. THE PROOF CONFIRMS THE DATA IS AUTHENTIC AND THE CLAIM IS TRUE, WITHOUT REVEALING THE RAW DATA.
        illustration: /cms/svg/mpc.svg
      - header: VERIFY
        subHeader: TRUST ESTABLISHED
        text: >-
          THE PROOF IS RETURNED TO THE CALLER ALONGSIDE THE RESULT. ANY PARTY — ON-CHAIN OR OFF-CHAIN — CAN INDEPENDENTLY VERIFY THE PROOF. TRUST IS ESTABLISHED. NO RAW DATA EVER LEAVES THE SOURCE.
        illustration: /cms/svg/zkp.svg
    _template: howItWorks
  - sectionTitle: BUILD WITH ZKPASS
    cards:
      - title: ZKPASS AGENT CLIENT
        illustration: /cms/svg/transgate.svg
        description: >
          TRANSGATE IS EVOLVING INTO AN AI AGENT. The agent can automatically retrieve web data and execute zkTLS to generate proofs for applications.
        cta:
          text: Install
          url: 'https://chromewebstore.google.com/detail/zkpass-transgate/afkoofjocpbclhnldmmaphappihehpma'
      - title: ZKPASS AGENT SKILLS
        illustration: /cms/svg/proof.svg
        description: >
          ZKPASS PACKAGES ITS CAPABILITIES AS SKILLS FOR AI AGENTS. These skills enable agents to execute zkTLS on demand. Frameworks such as Claude Code, OpenClaw, or custom agents can integrate them directly.
      - title: ZKPASS  AGENT EXECUTION
        illustration: /cms/svg/template.svg
        description: >
          ZKPASS ENABLES TRUSTED AGENT INTERACTIONS. By combining zkTLS and TEE, agent actions and external data become verifiable. This enables trustless interactions between agents across the internet.
    _template: approach
  - sectionTitle: Features
    cards:
      - title: PROOF PRIVACY
        body: VERIFY ANY CLAIM WITHOUT REVEALING THE UNDERLYING DATA. ZERO-KNOWLEDGE PROOFS ENSURE COMPLETE PRIVACY FOR BOTH HUMANS AND AGENTS.
      - title: UNIVERSAL ACCESS
        body: COMPATIBLE WITH ALL HTTPS-BASED DATA SOURCES. NO SPECIAL API INTEGRATIONS REQUIRED. IF IT'S ON THE INTERNET, IT'S VERIFIABLE.
      - title: AGENT-NATIVE
        body: >-
          BUILT FOR THE AGENTIC INTERNET. MCP SERVER, OPENAI TOOLS, LANGCHAIN — AI AGENTS GET VERIFIABLE DATA AS A NATIVE CAPABILITY.
      - title: REAL-TIME PROVING
        body: >-
          VOLEITH GENERATES PROOFS IN MILLISECONDS. NO TRUSTED SETUP. LOW HARDWARE REQUIREMENTS. FAST ENOUGH FOR REAL-TIME AGENT DECISIONS.
      - title: QUANTUM-SAFE
        body: >-
          POST-QUANTUM SECURITY BY DEFAULT. AS AGENTS HANDLE INCREASINGLY SENSITIVE OPERATIONS, YOUR TRUST LAYER IS ALREADY FUTURE-PROOF.
      - title: COMPOSABLE TRUST
        body: >-
          EVERY VERIFICATION BUILDS THE TRUST GRAPH. SCHEMAS ARE REUSABLE, PROOFS ARE PORTABLE, AND TRUST COMPOUNDS OVER TIME.
    _template: features
  - header:
      rowOne: BUILT FOR
      rowTwo: THE AGENTIC INTERNET
      label: WHY AGENTS NEED ZKPASS
      body: >-
        AI AGENTS ARE MAKING AUTONOMOUS DECISIONS — TRADING, HIRING, ALLOCATING RESOURCES — BASED ON DATA THEY CANNOT VERIFY. EVERY API CALL IS AN ACT OF BLIND TRUST. ZKPASS GIVES AGENTS THE ABILITY TO CRYPTOGRAPHICALLY VERIFY ANY DATA BEFORE ACTING ON IT.
    cardsSectionTitle: WITH AND WITHOUT ZKPASS
    cards:
      - label: WITHOUT ZKPASS
        body: |-
          AGENT FETCHES PRICE DATA FROM API HOPES THE DATA IS AUTHENTIC EXECUTES $500K TRADE DATA WAS MANIPULATED → LOSS
      - label: WITH ZKPASS
        body: |-
          AGENT CALLS ZKPASS.FETCH() RECEIVES DATA + CRYPTOGRAPHIC PROOF VERIFIES AUTHENTICITY IN MILLISECONDS EXECUTES $500K TRADE WITH CONFIDENCE → PROFIT
    table:
      - title: |
          ### DEFI LENDING
        prover: |
          ### HUMAN
        verifier: |
          ### SMART CONTRACT
        dataSource: |
          ### BANK API
        example: |
          ### PROVE CREDIT SCORE > 700 WITHOUT REVEALING EXACT SCORE
      - title: |
          ### AGENT TRADING
        prover: |
          ### AGENT
        verifier: |
          ### AGENT
        dataSource: |
          ### PRICE FEED API
        example: |
          ### VERIFY BTC PRICE IS AUTHENTIC BEFORE EXECUTING TRADE
      - title: |
          ### AGENT HIRING
        prover: |
          ### HUMAN
        verifier: |
          ### AGENT
        dataSource: |
          ### UBER, DOORDASH
        example: |
          ### AGENT VERIFIES DRIVER RATING BEFORE DELEGATING DELIVERY
      - title: |
          ### IDENTITY
        prover: |
          ### HUMAN
        verifier: |
          ### PLATFORM
        dataSource: |
          ### KYC PROVIDER
        example: |
          ### PROVE IDENTITY WITHOUT UPLOADING DOCUMENTS
      - title: |
          ### TASK VERIFICATION
        prover: |
          ### HUMAN
        verifier: |
          ### AGENT
        dataSource: |
          ### GPS, IOT DATA
        example: |
          ### PROVE PHYSICAL TASK WAS COMPLETED FOR AGENT PAYMENT
    _template: hardware
  - sectionTitle: Use Cases
    cards:
      - title: ZKKYC
        header: ZKKYC
        illustration: /cms/svg/Frame 1073715487.svg
        body: >-
          DECENTRALIZED IDENTITY VERIFICATION THAT PROVES YOUR LEGAL IDENTITY, CREDIT STATUS, OR AGE WITHOUT UPLOADING DOCUMENTS OR OVER-DISCLOSING PERSONAL INFORMATION.
      - title: UNDERCOLLATERALIZED DEFI LENDING
        header: UNDERCOLLATERALIZED DEFI LENDING
        illustration: /cms/svg/Frame 1073715487(1).svg
        body: >-
          PROVE CREDITWORTHINESS FROM TRADITIONAL FINANCE DATA TO ACCESS DEFI LOANS WITHOUT OVERCOLLATERALIZATION. WORKS FOR HUMAN BORROWERS AND AI AGENTS MANAGING TREASURY.
      - title: VERIFIABLE AGENT TRADING
        header: VERIFIABLE AGENT TRADING
        illustration: /cms/svg/Healthcare zk-data Marketplace svg.svg
        body: >-
          AI TRADING AGENTS VERIFY PRICE FEEDS AND MARKET DATA BEFORE EXECUTING TRADES. REPLACE BLIND TRUST WITH CRYPTOGRAPHIC PROOF.
      - title: AGENT-TO-HUMAN DELEGATION
        header: AGENT-TO-HUMAN DELEGATION
        illustration: /cms/svg/djm.svg
        body: >-
          AI AGENTS VERIFY HUMAN QUALIFICATIONS AND CONFIRM TASK COMPLETION FOR DELIVERY, INSPECTION, AND MAINTENANCE. TRUSTLESS HIRING BETWEEN MACHINES AND HUMANS.
      - title: CROSS-PLATFORM REPUTATION
        header: CROSS-PLATFORM REPUTATION
        illustration: /cms/svg/Insurance Claims.svg
        body: >-
          CARRY YOUR REPUTATION ACROSS PLATFORMS. PROVE YOUR RATINGS, REVIEWS, AND CREDENTIALS TO ANY NEW SERVICE WITHOUT EXPOSING YOUR ACCOUNTS.
    cta:
      text: More Use Cases
      url: 'https://zkpass.gitbook.io/zkpass/introduction/use-cases'
    _template: useCases
  - row:
      - sectionTitle: Partners
        body: We Work With the Best
        alignment: Right
        cards:
          - companyName: zk.link
            companyLogo: /cms/svg/zkLink.svg
          - companyName: Poolz Finance
            companyLogo: /cms/svg/PoolzFinance.svg
          - companyName: Galxe
            companyLogo: /cms/svg/Galxe.svg
          - companyName: ZKM
            companyLogo: /cms/svg/ZKM.svg
          - companyName: Verida Wallet
            companyLogo: /cms/svg/Veridawallet.svg
          - companyName: CyberConnect
            companyLogo: /cms/svg/Cyberconnect.svg
          - companyName: Linea
            companyLogo: /cms/svg/linea.svg
          - companyName: zkSync
            companyLogo: /cms/svg/Zksync.svg
          - companyName: Layer Zero
            companyLogo: /cms/svg/LayerZero.svg
      - sectionTitle: Investors
        body: Backed by Leading Investors
        alignment: Left
        cards:
          - companyName: Binance Labs
            companyLogo: /cms/svg/Binancelabs.svg
          - companyName: Blockchain founders fund
            companyLogo: /cms/svg/Blockchain.svg
          - companyName: Cypher capital
            companyLogo: /cms/svg/Cyphercapital.svg
          - companyName: dao5
            companyLogo: /cms/svg/dao5.svg
          - companyName: Leland Ventures
            companyLogo: /cms/svg/Lelandventures.svg
          - companyName: OKX Ventures
            companyLogo: /cms/svg/okxventures.svg
          - companyName: SIGDT investments
            companyLogo: /cms/svg/sigdt.svg
          - companyName: Sequoia
            companyLogo: /cms/svg/sequoia.svg
    _template: partnersAndInvestors
  - sectionTitle: $ZKP
    articles:
      - title: TOKENOMICS
        image: /cms/images/1Highlighted_news_0.png
        articleTitle: >-
          ZKP IS THE SETTLEMENT UNIT FOR EVERY VERIFIABLE FETCH CALL. VERIFICATION FEES, SCHEMA STAKING, TRUST REGISTRY QUERIES.
        articleURL: >-
          https://docs.zkpass.org/zkpass-dao/zkp
        ctaText: VIEW TOKENOMICS
      - title: TRADE $ZKP
        image: /cms/images/2Highlighted_news_01.png
        articleTitle: LISTED ON BINANCE, OKX, AND MORE.
        articleURL: >-
          https://coinmarketcap.com/currencies/zkpass/
        ctaText: VIEW MARKETS
      - title: CONTRACT ADDRESS
        articleTitle: ''
        image: /cms/images/3Highlighted_news_02.png
        logos:
          - network: Ethereum (Mainnet)
            logo: /cms/svg/Ethereum.svg
            url: 'https://etherscan.io/token/0xe1be424f442d0687129128c6c38aace44f8c8dbc'
          - network: BNB Smart Chain (BSC)
            logo: /cms/svg/Bnbchain.svg
            url: 'https://bscscan.com/token/0xd89B7dD376E671c124352267516BEF1C2cc231a3'
          - network: Base (Mainnet)
            logo: /cms/svg/Base.svg
            url: 'https://basescan.org/token/0xc6c1be6c6d828f9cea70f1b8351879510fbf0065'
    _template: news
  - header:
      rowOne: Here
      rowTwo: To Answer
      rowThree: Your Questions
    contactCTA:
      text: Contact
      url: 'mailto:info@zkpass.org'
    _template: contact
---
