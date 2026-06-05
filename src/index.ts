/**
 * Web4SDK - EACO Web4 SDK
 * 连接虚拟宇宙与去中心化金融的开发者工具包
 */

import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';

export interface Web4SDKConfig {
  network?: 'mainnet-beta' | 'devnet' | 'testnet';
  tokenAddress: string;
  rpcUrl?: string;
}

export interface TokenInfo {
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  supply: string;
}

export interface AgentConfig {
  name: string;
  description?: string;
  skills?: string[];
}

/**
 * Web4SDK 主类
 */
export class Web4SDK {
  private connection: Connection;
  private tokenAddress: PublicKey;
  private network: string;

  constructor(config: Web4SDKConfig) {
    const network = config.network || 'mainnet-beta';
    this.network = network;
    
    const defaultRpcUrl = config.rpcUrl || this.getDefaultRpcUrl(network);
    this.connection = new Connection(defaultRpcUrl, 'confirmed');
    this.tokenAddress = new PublicKey(config.tokenAddress);
  }

  private getDefaultRpcUrl(network: string): string {
    switch (network) {
      case 'mainnet-beta':
        return 'https://api.mainnet-beta.solana.com';
      case 'devnet':
        return 'https://api.devnet.solana.com';
      case 'testnet':
        return 'https://api.testnet.solana.com';
      default:
        return 'https://api.mainnet-beta.solana.com';
    }
  }

  /**
   * Token 模块
   */
  get token() {
    return {
      /**
       * 获取代币基本信息
       */
      getInfo: async (): Promise<TokenInfo> => {
        return {
          address: this.tokenAddress.toBase58(),
          symbol: 'EACO',
          name: 'EACO Token',
          decimals: 9,
          supply: '1000000000000000000'
        };
      },

      /**
       * 查询钱包余额
       */
      getBalance: async (wallet: string): Promise<number> => {
        const pubkey = new PublicKey(wallet);
        const balance = await this.connection.getBalance(pubkey);
        return balance / LAMPORTS_PER_SOL;
      },

      /**
       * 转账代币
       * @param to 接收方钱包地址
       * @param amount 转账金额（单位：SOL）
       * @returns 交易签名
       */
      transfer: async (to: string, amount: number): Promise<string> => {
        const { Keypair, SystemProgram, Transaction, sendAndConfirmTransaction } = await import('@solana/web3.js');
        
        // 注意：实际使用需要传入签名者 Keypair
        // 这里提供基础框架，完整实现需要钱包适配器
        const transaction = new Transaction().add(
          SystemProgram.transfer({
            fromPubkey: this.tokenAddress,
            toPubkey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL
          })
        );
        
        // TODO: 集成钱包适配器（Phantom/Solflare）完成实际签名
        // 当前为框架实现，实际使用需配合 WalletAdapter
        console.warn('transfer: 需要钱包适配器完成签名，当前返回占位签名');
        return `transfer_${Date.now()}_pending_signature`;
      }
    };
  }

  /**
   * Agent World 模块
   */
  get agentWorld() {
    return {
      /**
       * 注册 Agent
       */
      register: async (config: AgentConfig): Promise<string> => {
        // 实现注册逻辑
        return `Agent ${config.name} registered`;
      },

      /**
       * 加入合成交易所比赛
       */
      joinMatch: async (matchId: string): Promise<boolean> => {
        // 实现加入比赛逻辑
        return true;
      }
    };
  }

  /**
   * 虚拟宇宙模块
   */
  get virtualUniverse() {
    return {
      /**
       * 获取宇宙状态
       */
      getStatus: async () => {
        return {
          online: true,
          participants: 0,
          version: '1.0.0'
        };
      }
    };
  }
}

// 默认导出
export default Web4SDK;
