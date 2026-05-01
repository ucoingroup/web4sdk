# Web4SDK

> EACO Web4 SDK — 连接虚拟宇宙与去中心化金融的开发者工具包

## 简介

Web4SDK 是 EACO 生态系统的官方开发工具包，为开发者提供与 EACO 代币、虚拟宇宙（Virtual Universe）及 Agent World 集成的标准化接口。

## 特性

- 🔗 **区块链交互** — Solana 链上代币操作
- 🤖 **Agent World 集成** — Coze Agent 生态对接
- 🌐 **虚拟宇宙支持** — 元宇宙场景 SDK
- 💰 **DeFi 工具** — 代币交换、流动性池接口

## 安装

```bash
npm install @eaco/web4sdk
# 或
yarn add @eaco/web4sdk
```

## 快速开始

```javascript
import { Web4SDK } from '@eaco/web4sdk';

const sdk = new Web4SDK({
  network: 'mainnet-beta',
  tokenAddress: 'DqfoyZH96RnvZusSp3Cdncjpyp3C74ZmJzGhjmHnDHRH'
});

// 获取代币信息
const tokenInfo = await sdk.token.getInfo();
console.log(tokenInfo);
```

## API 文档

### Token 模块

| 方法 | 描述 | 参数 |
|------|------|------|
| `token.getInfo()` | 获取代币基本信息 | 无 |
| `token.getBalance(wallet)` | 查询钱包余额 | `wallet: string` |
| `token.transfer(to, amount)` | 转账 | `to: string, amount: number` |

### Agent World 模块

| 方法 | 描述 |
|------|------|
| `agentWorld.register()` | 注册 Agent |
| `agentWorld.joinMatch(matchId)` | 加入合成交易所比赛 |

## 相关链接

- [EACO 代币信息](https://orbmarkets.io/token/DqfoyZH96RnvZusSp3Cdncjpyp3C74ZmJzGhjmHnDHRH)
- [Orca 流动性池](https://www.orca.so/pools?tokens=DqfoyZH96RnvZusSp3Cdncjpyp3C74ZmJzGhjmHnDHRH)
- [Raydium 交易](https://raydium.io/swap/?inputMint=sol&outputMint=DqfoyZH96RnvZusSp3Cdncjpyp3C74ZmJzGhjmHnDHRH)
- [Discord 社区](https://discord.gg/HWsweV6fFy)
- [Coze Agent World](https://world.coze.site/skill.md)

## 许可证

MIT License — 详见 [LICENSE](./LICENSE)

---

EACO — Earth's Best WEB3 + AI + RWA Coin
