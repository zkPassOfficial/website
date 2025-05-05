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
        - groupLabel: Devs
          links:
            - text: Contributor Program
            - text: Run a Node
            - text: TransGate SDK
              url: 'https://zkpass.gitbook.io/zkpass/extension-js-sdk/introduction'
      cta:
        text: Launch App
        url: 'https://pre.zkpass.org/dashboard'
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
      rowOne: Privacy-Focused
      rowTwo: To Connect
      rowThree: the
      rowFour: World
    bodyLeft: 'Protocol for Private Data based on MPC, ZKP, 3P-TLS.'
    bodyRight: >-
      Verify your real-world private data without revealing your private
      details.
    banner:
      icon: /cms/svg/Logo wire 2.svg
      marquee:
        textEntry:
          - zkPass Pre-alpha Testnet is Open for All Now!
      cta:
        text: Launch App
        url: 'https://pre.zkpass.org/dashboard'
    _template: hero
  - header:
      rowOne: ZkProof of
      rowTwo: Everything
      rowThree: Pass to
      rowFour: Anywhere
    body: >
      zkPass serves as **a seamless gateway** between the private data of the
      Web2 and Web3 ecosystem.
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
      - header: TLS
        subHeader: Transport Layer Security
        text: >-
          zkPass integrates decentralized MPC Nodes into a 3-party Handshake
          process, improving the standard TLS protocol. It allows users to log
          in securely and generate ZKPs locally without API access or data
          source authorization.
        illustration: /cms/svg/tls.svg
      - header: MPC
        subHeader: Multi-Party Computation
        text: >-
          Randomly selected task nodes supervise the 3-party handshake,
          obtaining a portion of the mac_key to ensure data integrity and
          authenticity, prevent scams and tampering, and maintain user privacy. 


          The enc_key only remains with the user, so the nodes cannot access or
          gather user data, providing additional privacy and security.
        illustration: /cms/svg/mpc.svg
      - header: ZKP
        subHeader: Zero-Knowledge Proof
        text: >-
          Users generate a Zero-Knowledge Proof (ZKP) locally using the response
          from a TLS-based data source. They can then upload this ZKP on-chain
          as a unique soul-zkSBT or share it solely with a specified address,
          providing enhanced privacy options.
        illustration: /cms/svg/zkp.svg
    _template: howItWorks
  - sectionTitle: Approach
    cards:
      - title: Transgate
        illustration: /cms/svg/transgate.svg
        description: >
          **TransGate** is a foundational product that incorporates three key
          technologies: MPC network, Interactive Zero-knowledge proof system,
          and 3P-TLS protocol.


          The TransGate enables the seamless transfer of private data from the
          web2 realm to web2 or web3.
        cta:
          text: Install
          url: 'https://chromewebstore.google.com/detail/zkpass-transgate/afkoofjocpbclhnldmmaphappihehpma'
      - title: TransGate SDK
        illustration: /cms/svg/proof.svg
        description: >
          The included **client-sdk** and **server-sdk**, both low-code integrations, enable businesses to trust the zero-knowledge proofs generated by individual or enterprise users from trusted data sources without compromising privacy, to unlock eligible access or privileges.
        cta:
          text: TransGate SDK Doc
          url: https://zkpass.gitbook.io/zkpass/extension-js-sdk/introduction
      - title: Schema
        illustration: /cms/svg/template.svg
        description: >
          **Schema** is a mapping of specific HTML elements to the certificate
          generation system. Through schema, users can select target data
          sources and personalized fields according to business needs, and
          seamlessly integrate them into the zkPass protocol.
    _template: approach
  - sectionTitle: Features
    cards:
      - title: Privacy-Preserving
        body: Users can prove everything without uploading any documents via zkPass.
      - title: Compatibility
        body: Seamless compatible with all HTTPS-based web sessions without APIs.
      - title: Verifiability
        body: >-
          Verify the provenance, authenticity, integrity and validity of private
          data.
      - title: Anti-Cheating
        body: >-
          Protects against malicious activities such as identity theft and data
          tampering.
      - title: Memory-Efficiency
        body: >-
          Hybrid ZK proof system that enables millisecond ZKP generation in a
          browser environment.
    _template: features
  - header:
      rowOne: The Most Efficient
      rowTwo: and Affordable
      rowThree: Zero-Knowledge
      label: Hybrid ZK
      body: >-
        We have developed and optimized the memory-efficient Hybird ZK proof
        system including VOLE-ZK and zk-SNARKs algorithm, which allows users to
        generate zero knowledge in less than 1 second in the browser environment
        of a PC, process tens of millions of gates per second, and handle large
        circuits with billions of gates while requiring less than 300M of
        memory.
    cardsSectionTitle: Hardware Setup
    cards:
      - label: Prover
        body: |-
          MacBook Pro 15-inch Mid 2015
          16GB DDR3 Memory
          2.5GHz Intel Core i7 Processor
      - label: Verifier
        body: |-
          AWS c6a.2xlarge Instance
          8 virtual CPUs
          16GB Memory (GiB)
    table:
      - title: |
          ### Snark
        block: |
          ### 4
        setupTime: |
          ### 0**s**
        proveTime: |
          ### 22000**ms**
        verifyTime: |
          ### 100**ms**
        memory: |
          ### 630**m**
        gates: |
          ### 540,292
      - title: |
          ### Vole23-ZK

          Powered by ZKPass
        block: |
          ### 4
        setupTime: |
          ### 1.2**s**
        proveTime: |
          ### 210**ms**
        verifyTime: |
          ### 60**ms**
        memory: |
          ### 80**m**
        gates: |
          ### 540,292
      - title: |
          ### Snark
        block: |
          ### 10
        setupTime: |
          ### 2.2**s**
        proveTime: |
          ### 340**ms**
        verifyTime: |
          ### 100**ms**
        memory: |
          ### 130**m**
        gates: |
          ### 1,350,730
      - title: |
          ### Snark
        block: |
          ### 20
        setupTime: |
          ### 3.4**s**
        proveTime: |
          ### 580**ms**
        verifyTime: |
          ### 160**ms**
        memory: |
          ### 180**m**
        gates: |
          ### 2,701,460
    _template: hardware
  - sectionTitle: Use Cases
    cards:
      - title: ZKKYC
        header: ZKKYC
        illustration: /cms/svg/Frame 1073715487.svg
        body: >-
          An decentralized authentication solution that verifies your legal
          identity without requiring file uploads or the over-disclosure of
          private information.
      - title: Undercollateralized DeFi Lending Protocol
        header: Undercollateralized DeFi Lending Protocol
        illustration: /cms/svg/Frame 1073715487(1).svg
        body: >-
          A DeFi lending protocol combining on-chain and off-chain credit allows
          users to selectively verify their on-chain and off-chain reputations
          have access to lower collateralized borrowing opportunities,
          increasing capital efficiency.
      - title: Healthcare zk-data Marketplace
        header: Healthcare zk-data Marketplace
        illustration: /cms/svg/Healthcare zk-data Marketplace svg.svg
        body: >-
          A private healthcare data marketplace that allows users to selectively
          disclose trusted healthcare data to earn rewards.
      - title: Decentralized Job Marketplace
        header: Decentralized Job Marketplace
        illustration: /cms/svg/djm.svg
        body: >-
          A decentralized freelance marketplace that allows users to secure
          remote work opportunities by privately disclosing some of their
          trusted data through zkPass.


          A DeFi lending protocol combining on-chain and off-chain credit allows
          users to selectively verify their on-chain and off-chain reputations
          have access.
      - title: INSURANCE CLAIMS
        header: Insurance Claims
        illustration: /cms/svg/Insurance Claims.svg
        body: >-
          Generate zero-knowledge proofs from private data during a web session
          and submit them to a smart contract for insurance policy eligibility
          verification, enabling automatic claim settlement without the need for
          manual review.
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
  - sectionTitle: News
    articles:
      - date: 2024-10-18T23:00:00.000Z
        image: /cms/images/1Highlighted_news_0.png
        articleTitle: >-
          zkPass Raises $12.5M Series A Funding to Drive zkTLS Oracle Protocol
        articleURL: >-
          https://medium.com/zkpass/zkpass-raises-12-5m-series-a-funding-to-drive-zktls-oracle-protocol-e7612e6cf921
      - date: 2023-11-13T00:00:00.000Z
        image: /cms/images/2Highlighted_news_01.png
        articleTitle: \@zkPass/Transgate-JS-SDK is Now Open-source
        articleURL: >-
          https://medium.com/zkpass/zkpass-transgate-js-sdk-is-now-open-source-dd584a1c0f8b
      - date: 2023-05-05T23:00:00.000Z
        image: /cms/images/3Highlighted_news_02.png
        articleTitle: 'Build the Block Finale: Crowning zkPass as Our Competition Winners'
        articleURL: >-
          https://www.binance.com/en/blog/ecosystem/build-the-block-finale-crowning-zkpass-as-our-competition-winners-8266623440845959186
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
