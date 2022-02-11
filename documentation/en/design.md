## Chain-Cloud product design documentation

## Overview

Chain-Cloud, as its name suggests, is a combination of blockchain and cloud computing. We are in an era of rapid technological development and rapid product renewal, and mankind is moving towards decentralization and virtualization faster than ever before. Our predecessors built a great Internet business model with the vision of shaping the trust relationship between people and people and businesses, and achieved a brilliant career in the era of web 2.0 with the goal of lowering the business threshold for ordinary people. Today, when the concept of blockchain is gradually gaining popularity, we have a new foundation for building a business model. The technology of blockchain decentralized ledger has given us confidence in each other, and the large-scale application of smart contracts allows people to Economic activities are carried out under the constraint framework of consensus. The token economy makes value exchange convenient and transparent, and various projects emerge one after another, making the ecology of web 3.0 erupt with unprecedented vitality.
Thanks to the underlying infrastructure provided by public chains such as Bitcoin, Ethereum, and ICP, we can build decentralized applications based on blockchain technology to drive our innovative ideas. However, so far, the ability to build such decentralized applications is only in the hands of a few professional and technical personnel. Only by lowering the threshold for building decentralized applications and smart contracts can more people enjoy the technological innovation in the web3.0 era. a better life.
Chain-Cloud was born under the background of the vigorous development of such web3.0 technologies and applications. Based on Internet Computer's underlying public chain technology, we are committed to combining the decentralization characteristics of blockchain with the advantages of cloud computing's high efficiency, scalability and low cost. By providing Dapp developers with more convenient application development and deployment, A series of services such as management and monitoring have greatly reduced the development and operation costs of dapps, thus building a cloud computing service platform based on blockchain technology in the web3.0 era.

Below, I will explain the functions provided by the platform, the technologies involved, the incentive models involved in the platform, and our vision roadmap from the following aspects, hoping to give you a clear display of our entire product concept.

## Features

Internet Computer is a low-level public chain infrastructure with ultra-high TPS and infinite parallel expansion. The Internet computer can run special smart contracts, which we call canisters. Container smart contracts are a set of WebAssembly words. Section code logic unit and its stack-based memory page. These executable byte logics run in a decentralized peer-to-peer network composed of data centers all over the world, and advanced cryptography technology based on threshold signature algorithm and zero-knowledge proof algorithm ensures its consistent operation output, which It allows us to build our business logic and token assets on it with confidence.

### quick deployment

Chain-Cloud provides the function of one-click compilation and deployment of container smart contracts, so that Dapp developers can focus on the development of business logic instead of decentralizing their energy to deal with various details in the compilation and deployment process. When developers write business code locally, they only need to submit their code to the code repository and click the deploy button on the chain-cloud platform to easily develop a one-click compilation and deployment function, and we will automatically build wasm bytes code program, create a contract wallet on Internet Computer, apply for a new vacant canister, and install the program in the canister. We will provide Dapp with the required Cycle fee for initial deployment and operation, so that everyone can start the web3.0 journey at a lower cost. 

We are also committed to helping applications, websites or public services on the traditional Internet to be easily and quickly migrated from the seductive decentralized world. For this reason, we provide quick deployment services for a variety of different web architectures. It enables those existing application websites with different architectures to run on Internet Computer at the lowest cost, without the need to redesign and write existing business codes under the new architecture. To a certain extent, we provide cloud hosting services, but this cloud hosting is built on a high-performance blockchain. 

At present, we support mainstream web frameworks, including: react.js, nuxt.js, next.js, vue.js, and of course the projects created by the dfx scaffolding tool provided by Dfinity. We will add more framework support in the future. 

### Application management

The container program running on the Internet Computer is similar to the microservice system in web development. Each container holds limited logic, and different types of function points are divided into multiple different container services, so that a single container can be guaranteed. efficiency, while ensuring the specialization of services. As the complexity of the system increases, we may need to treat different types of containers differently to ensure different security levels, which undoubtedly brings more workload to container operation and maintenance. chain-cloud classifies and controls containers of different users according to their function types and security levels, so that administrators have a global understanding of the composition of the system and can use sub-accounts for fine management in different security categories.

We assign people on each team different roles, each with a different scope:
- Owner: The owner of the project, who can operate all containers, recharge cycles for containers, and assign permissions to other users
- Maintainer: The daily maintainer of the project, who can operate all containers and recharge cycles for the containers
- Developer: The developer of the project can update the specified container and delete the container
- Guest: Can view containers

### Container security level

- Top-level: key container, wallet container, account container
- Sub-level: business logic class container, event delivery class container, formula class container
- Normal-level: front-end container, network call container

### Application monitoring

We should monitor the operation of the application, including the frequency of certain behaviors in the application, system resources consumed, on-chain resources occupied, etc. These manifestations in the container are the event records of the contract being called, the size of the memory space occupied by the container, and the cycle cost required for contract execution. We have developed a series of representative metrics to characterize the running performance of smart contracts.

- Call frequency -- the number of calls to the contract API per unit time
- Memory usage -- the stack memory usage and stable memory usage of the container
- cycle consumption -- the cycle consumption speed in the container per unit time
- network bandwidth consumption -- the number of bytes passed by the contract call per unit time

We will analyze the statistical results, sort the API call frequency in the contract, and reveal the high-frequency actions in the container, so as to analyze the business situation for the application developer. 

## Technology

From a technical point of view we have done the following:

- High-performance general-purpose compilation and deployment platform
In order to adapt to the compilation and deployment tasks under various technical conditions, we have developed a set of high-performance compilation and deployment tools, which can not only efficiently compile the native canister code of Internet Computer, but also adapt to the compilation tasks under various website frameworks. At present, the frameworks we support include dfx native applications and websites built on react.js, nuxt.js, next.js, and vue.js. We will add support for more technical frameworks in the future.

Considering that many existing services run as static sites, we have transformed Dfinity's official dfx command-line tool to make it easier to deploy pure static sites.

At the same time, in order to allow developers to have a convenient experience, we have added the Action of github, which can automatically trigger the compilation and deployment task when the user pushes the code to the corresponding warehouse, thus completing the automation of the whole process.

We have integrated the ICP platform's own Internet Identity account system, effectively introducing the ICP platform's own users, lowering the user's access threshold.

- canister manager platform
Our self-developed set of decentralized user and container management platform makes it easy and convenient to achieve safe and efficient container management.
We have developed a general SDK for canister data embedding, which is used to provide platform developers with quick access to our services. These services all run in the ICP decentralized network, and users do not need to worry about security issues , we will expose the collected data in a way that is transparent to the container owner.

We developed a set of container monitoring panels to process and display the information of the container itself and the collected buried point information, so as to decompose it into different indicators and display them to users. 

## Roadmap

### Step1: Design stage (13 Sept. - 30 Sept.) It will take about half a month

We have done our website design of version 1.0 and we want upgrade it to version
2.0. Also, we will discuss overview of the project and reach a consensus of most of
the details of the business scenes
there will be three main tasks of this stage:
1. Prepare project interview for D nity Foundation
2. Discuss and determine the upgrade UI design of version 2.
3. Discuss and details our business scenes, seperate all those functions into
different canisterAs a result:
We need write down all business plans as ideas for UI designer to start her work
and need write down the determination of how many canisters we need and what
roles they play in the system.

### Step2: Prototype veri cation (8 Oct. - 15 Oct.),It will take about half a month

We will write some code to implement some prototype canisters to verify that if
our ideas can be ful lled and nd better method to coding

we will
1. Provide some code to present how to collect metric data from canister
2. Provide some code to present how to handle detail backend canister logic and
their API interface
3. Test our auto-compile and deploy shell scripts and check whether it will work
correctly
4. Implement some web pages to nd the most suitable frontend framework
5. Present the UI design drawings of version 2.
As a result, We need all prototype source code and the result of veri cation and all design drawings. Our engineers need to verify that the project is reachable.

### Step3: Project implementation (18 Oct. - 17 Nov.) It will take about one
month

After design and prototype veri cation, we will start our coding stage. As we
seperate functions into several canisters, we need at least to build
1. the canister to hold all auto-compile and deploy scripts and the complete
process to the whole work
2. the canister to contain our frontend website for present and interact with user
3. integrate of the Internet Identity to authority users to logic
4. implement some record and query methods to Storage canisters to persist
image resources and log level
5. public data collection canisters, provide the public methods to other
developers to reference
6. our backend metric data processing canister to do some lterate, classi cation
or sorting things to raw data
7. our user category canister to hold all user identities with different property
such as: Security level, Auth group
8. the interaction between different canisters, like data collection with data
processing, data processing with data persistence, frontend canister with
backend canister
9. testers need to prepare some testing case for each situation and prepare their
test environmentAt this stage we need nish most of our coding work and need to do some testing by ourselves at the local network

### Step4: Testing and Fix Bug (11 Nov. - 25 Nov.) It will take about half a month

1. Our testers will get invloved to start their testing work and le issues if any
bad cases happene
2. Our UI designer will check whether the effection of web pages match with
original design
3. Our engineers need to x bugs reported by testers or any other member
At the end
We need to ensure the system works as we expected

### Step5: Deploy to main net and more (26 Nov. - 1 Dec.) It will take about one
week

We will discuss whether the system is ready to public users, if so, we will launch it
to mainnet
1. Prepare the shell script to deploy the system to main ne
2. Launch the system on the Internet Computer main net after thaS
3. Provide some user guidelines and docunmentations to help using the syste
4. Collect real running status and online problem
5. Have a meeting to discuss the in uence of the project

## Tokenomics

this is to be determined

## Official link