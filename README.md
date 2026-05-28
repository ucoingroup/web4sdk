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

### JavaScript

```javascript
const { Web4SDK } = require('@eaco/web4sdk');

const sdk = new Web4SDK({
  network: 'mainnet-beta',
  tokenAddress: 'DqfoyZH96RnvZusSp3Cdncjpyp3C74ZmJzGhjmHnDHRH'
});

// 获取代币信息
const tokenInfo = await sdk.token.getInfo();
console.log(tokenInfo);
```

### TypeScript

```typescript
import { Web4SDK, Web4SDKConfig } from '@eaco/web4sdk';

const config: Web4SDKConfig = {
  network: 'mainnet-beta',
  tokenAddress: 'DqfoyZH96RnvZusSp3Cdncjpyp3C74ZmJzGhjmHnDHRH'
};

const sdk = new Web4SDK(config);

// 查询钱包余额
const balance = await sdk.token.getBalance('YOUR_WALLET_ADDRESS');
console.log(`Balance: ${balance} SOL`);
```

## API 文档

### Token 模块

| 方法 | 描述 | 参数 | 返回值 |
|------|------|------|--------|
| `token.getInfo()` | 获取代币基本信息 | 无 | `TokenInfo` |
| `token.getBalance(wallet)` | 查询钱包余额 | `wallet: string` | `number` |
| `token.transfer(to, amount)` | 转账代币 | `to: string, amount: number` | `string` |

### Agent World 模块

| 方法 | 描述 | 参数 | 返回值 |
|------|------|------|--------|
| `agentWorld.register(config)` | 注册 Agent | `AgentConfig` | `string` |
| `agentWorld.joinMatch(matchId)` | 加入合成交易所比赛 | `matchId: string` | `boolean` |

### Virtual Universe 模块

| 方法 | 描述 | 参数 | 返回值 |
|------|------|------|--------|
| `virtualUniverse.getStatus()` | 获取宇宙状态 | 无 | `object` |

## 配置选项

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| `network` | `'mainnet-beta' \| 'devnet' \| 'testnet'` | 否 | `'mainnet-beta'` | Solana 网络类型 |
| `tokenAddress` | `string` | 是 | - | 代币合约地址 |
| `rpcUrl` | `string` | 否 | Solana 公共 RPC | 自定义 RPC 节点 |

## 开发

```bash
# 克隆仓库
git clone https://github.com/ucoingroup/web4sdk.git
cd web4sdk

# 安装依赖
npm install

# 构建
npm run build

# 运行测试
npm test

# 代码检查
npm run lint
```

## 贡献

欢迎贡献！请阅读 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解详情。

## 相关链接

- [EACO 代币信息](https://orbmarkets.io/token/DqfoyZH96RnvZusSp3Cdncjpyp3C74ZmJzGhjmHnDHRH)
- [Orca 流动性池](https://www.orca.so/pools?tokens=DqfoyZH96RnvZusSp3Cdncjpyp3C74ZmJzGhjmHnDHRH)
- [Raydium 交易](https://raydium.io/swap/?inputMint=sol&outputMint=DqfoyZH96RnvZusSp3Cdncjpyp3C74ZmJzGhjmHnDHRH)
- [Discord 社区](https://discord.gg/HWsweV6fFy)
- [Coze Agent World](https://world.coze.site/skill.md)

## 更新日志

### v1.0.0 (2026-05-01)
- 初始发布
- 支持 Solana 链上代币操作
- Agent World 注册与比赛模块
- 虚拟宇宙状态查询

## 许可证

MIT License — 详见 [LICENSE](./LICENSE)

---

EACO — Earth's Best WEB3 + AI + RWA Coin
