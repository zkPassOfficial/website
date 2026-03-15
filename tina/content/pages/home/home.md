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
      rowTwo: ANY TWO NODES
      rowThree: HUMAN ↔ HUMAN
      rowFour: HUMAN ↔ AGENT
      rowFive: AGENT ↔ AGENT
    body: >
      ZKPASS ENABLES A TRUST GRAPH WHERE ANY NODE — HUMAN OR AI AGENT — CAN VERIFY CLAIMS ABOUT ANY OTHER NODE WITHOUT EXPOSING RAW DATA.
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
      - header: FETCH
        subHeader: DATA ACQUISITION
        text: >-
          YOUR APP OR AGENT MAKES A STANDARD API CALL THROUGH ZKPASS. THE DATA IS FETCHED FROM ANY HTTPS SOURCE VIA A SECURE 3-PARTY TLS HANDSHAKE. NO API KEYS SHARED, NO DATA EXPOSED TO MIDDLEMEN.
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
      - title: VERIFIABLE FETCH API
        illustration: /cms/svg/transgate.svg
        description: >
          THE CORE PRIMITIVE. ONE API CALL TO MAKE ANY HTTPS DATA FETCH CRYPTOGRAPHICALLY VERIFIABLE. REST API, PAY-PER-CALL. WORKS WITH ANY LANGUAGE, ANY FRAMEWORK.
        cta:
          text: DOCUMENTATION
          url: 'https://zkpass.gitbook.io/zkpass/extension-js-sdk/introduction'
      - title: AGENT TOOLS
        illustration: /cms/svg/proof.svg
        description: >
          NATIVE INTEGRATIONS FOR AI AGENT FRAMEWORKS. MCP SERVER, OPENAI FUNCTION SCHEMA, LANGCHAIN TOOL. YOUR AGENT GETS VERIFIABLE FETCH AS A BUILT-IN CAPABILITY.
        cta:
          text: INTEGRATE
          url: 'https://zkpass.gitbook.io/zkpass/extension-js-sdk/introduction'
      - title: SCHEMA REGISTRY
        illustration: /cms/svg/template.svg
        description: >
          A PUBLIC DIRECTORY OF VERIFIABLE CLAIMS. CREDIT SCORES, KYC STATUS, PLATFORM RATINGS, TASK COMPLETION. ANYONE CAN CREATE, ANYONE CAN REFERENCE.
        cta:
          text: EXPLORE SCHEMAS
          url: 'https://zkpass.gitbook.io/zkpass/extension-js-sdk/introduction'
    _template: approach
  - sectionTitle: Features
    cards:
      - title: PROOF WITHOUT EXPOSURE
        body: VERIFY ANY CLAIM WITHOUT REVEALING THE UNDERLYING DATA. ZERO-KNOWLEDGE PROOFS ENSURE COMPLETE PRIVACY FOR BOTH HUMANS AND AGENTS.
      - title: ONE CALL, ANY SOURCE
        body: COMPATIBLE WITH ALL HTTPS-BASED DATA SOURCES. NO SPECIAL API INTEGRATIONS REQUIRED. IF IT'S ON THE INTERNET, IT'S VERIFIABLE.
      - title: AGENT-NATIVE
        body: >-
          BUILT FOR THE AGENTIC INTERNET. MCP SERVER, OPENAI TOOLS, LANGCHAIN — AI AGENTS GET VERIFIABLE DATA AS A NATIVE CAPABILITY.
      - title: MILLISECOND PROOFS
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
        image: /cms/images/3Highlighted_news_02.png
        articleTitle: 'Build the Block Finale: Crowning zkPass as Our Competition Winners'
        articleURL: >-

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
