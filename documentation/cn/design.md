## Chain-Cloud产品设计文档

## 概述
Chain-Cloud如同其名称表述的一样，是一个区块链和云计算的结合物。我们处在一个技术飞速发展和产品飞速更新的时代，人类以比以往任何时代都要快的速度朝着去中心化和虚拟化迈进。我们的前辈们以塑造人与人，人与商家之间的信任关系为愿景构筑起了伟大的互联网的商业模式，以降低普通人的营商门槛为目标成就了辉煌web2.0时代的事业。而在区块链的观念逐渐深入人心的今天，我们有了全新的构建商业模式的基础，区块链去中心化账本的技术给了我们彼此置信的信心，智能合约的规模化应用让人们能在共识的约束框架下进行经济活动，token经济让价值交换变得便捷透明，各种各样的项目纷纷涌现，使得web3.0的生态爆发出前所未有的活力。
得益于基于比特币，以太坊，ICP之类的公链提供的底层基础设施，我们可以构建基于区块链技术的去中心化应用，从而驱动我们的创新想法。然而到目前为止，构建此类去中心化应用的能力还只是掌握在少数专业技术人员手中，降低构建去中心化应用和智能合约的门槛才能让更多的人能享受到web3.0时代技术革新所带来的更好的生活。
Chain-Cloud就诞生于这样的web3.0技术和应用蓬勃发展的大背景下。基于Internet Computer的底层公链技术，我们致力于将区块链去中心化的特性和云计算高效能可扩展低成本的优点相结合，通过向Dapp开发者提供更为便捷的应用开发，部署，管理，监控等一系列服务，极大的降低了dapp的开发运营成本，从而构建起web3.0时代基于区块链技术的云计算服务平台。

下面我将从如下几个方面分别阐述该平台提供的功能，所涉及的技术，平台所涉及到的激励模型，以及我们的愿景路线图，希望能给你清晰展示我们的整个产品构想。

## 功能
Internet Computer是一个条拥有超高TPS并且可无限平行扩展的的底层公链基础设施，互联网计算机上面能运行特殊的智能合约，我们称之为容器（canister），容器智能合约是一组WebAssembly的字节码逻辑运算单元和其基于栈的内存页。这些可执行的字节逻辑运行在由遍布全球的数据中心组成的去中心化对等网络中，先进的基于阈值签名算法和零知识证明算法的密码学技术保证了其一致性的运算输出，这使得我们能放心的将自己的商业逻辑和代币资产构筑其上。

### 快捷部署
Chain-Cloud提供一键编译部署容器智能合约的功能，让Dapp开发人员能专注于业务逻辑的开发，而不用分散精力去处理编译和部署过程中的各种细节。当开发者在其本地的编写好业务代码后，只需要将其代码提交到代码仓库中并在chain-cloud平台点击部署按钮就能轻松的开发一键编译部署功能，我们会自动构建wasm字节码程序，在Internet Computer上面创建合约钱包，申请新的空置的canister，并将程序安装在canister里面。我们将为Dapp提供初始部署和运行所需的Cycle费用，以让大家以更低的成本开启web3.0之旅。

我们还致力于帮助传统互联网上的应用，网站或公众服务，方便快捷的迁移到从充满诱惑力的去中心化的世界里，为此我们提供了对多种不同的web架构的快捷部署服务，使得那些采用不同架构的现存的应用网站花费最低的成本就能运行在Internet Computer，而不需要在新的架构下重新设计和编写现存的业务代码。从某种程度上来说我们提供的是云主机服务，但是这台云主机搭建在高性能的区块链上。

目前我们支持主流的web框架，包括：react.js, nuxt.js, next.js, vue.js, 当然还有Dfinity提供的dfx脚手架工具创建的工程，后续我们会增加更多的框架支持。

### 应用管理
运行在Internet Computer上的容器程序类似于web开发中的微服务系统，每一个容器容纳有限的逻辑，并将不同类型的功能点拆分到多个不同的容器服务中，这样既能保证单个容器的效率，又能保证服务的专门化。随着系统复杂度的增加，我们可能需要区别对待不同类型的容器，以保证安全级别的不同，这样无疑给容器的运维带来了更多的工作量。chain-cloud将不同用户的容器按照功能类型，安全级别进行分类管控，让管理员对系统的组成既有全局的了解，又能使用子账户在不同的安全范畴内进行精细管理。

我们会为每个团队的人员分配不同的角色，每种角色有不同的作用范围：
- Owner: 		项目的拥有者，能操作所有容器，能为容器充值cycle，能为其他用户分配权限
- Maintainer: 项目的日常维护者，能操作所有容器，能为容器充值cycle
- Developer:	项目的开发人员，能给指定的容器进行更新，删除容器
- Guest: 		能查看容器

#### 容器安全级别：
- 最高级：密钥类容器，钱包类容器，账户类容器
- 次高级：业务逻辑类容器，事件传递类容器，公式类容器
- 正常级：前端容器，网络调用类容器

### 应用监控
我们应该监控应用的运行情况，包括应用中某些行为的发生频率，消耗的系统资源，占用的链上资源等。这些表现在容器中就是合约被调用的事件记录，容器所占用的内存空间的大小，合约执行所需要的cycle费用，我们制定了一系列具有代表性的衡量标准来表征智能合约的运行表现。

- 调用频率 -- 单位时间内合约API的调用次数
- 内存占用 -- 容器的栈内存占用和stable内存占用
- cycle消耗 -- 单位时间内容器内cycle消耗速度
- network带宽消耗 -- 单位时间内合约调用传递的字节数

我们会分析统计结果，将合约里API调用频次进行排序，揭示出该容器里高频的动作，从而给应用开发方分析业务的发生情况。

## 技术
从技术层面上我们做了如下几件事：
高性能通用编译部署平台
为了能适应各种技术条件下的编译部署任务，我们自研了一套高性能的编译部署工具，既能高效编译Internet Computer原生canister代码，又能适应各种不同的网站框架下的编译任务。目前我们支持的框架有dfx原生应用，基于react.js、nuxt.js、next.js、vue.js构建的网站，后续我们会增加更多技术框架的支持。

考虑到很多既有的服务都是以静态站点的方式运行，我们改造了Dfinity官方的dfx命令行工具，使得部署纯静态站点变得更加便捷。

同时为了让开发者拥有便捷的体验，我们增加了github的Action，用来在用户推送代码到对应仓库的时候就能自动触发编译部署任务，从而完成全流程的自动化。

我们集成了ICP平台自有的Internet Identity账号体系，有效的引入了ICP平台自身的用户，降低了用户的准入门槛。

canister manager平台
我们自研的一套去中心化的用户和容器的管理平台，使得实现安全高效的容器管控变得轻松便捷。
我们研发了用于canister数据埋点的通用SDK，用于提供给平台开发者，使他们能快捷的接入我们的服务，这些服务都运行在ICP去中心化的网络中，用户无需担心安全问题，我们会以对容器拥有者透明的方式公开收集到的数据。

我们开发了一套容器监控面板，将容器本身的信息和收集到的埋点信息进行处理和展示，以分解成不同的指标展示给用户。

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