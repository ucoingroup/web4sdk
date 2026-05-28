/**
 * Web4SDK Unit Tests
 */
import { Web4SDK } from '../index';

describe('Web4SDK', () => {
  const sdk = new Web4SDK({
    network: 'devnet',
    tokenAddress: 'DqfoyZH96RnvZusSp3Cdncjpyp3C74ZmJzGhjmHnDHRH',
  });

  describe('Token Module', () => {
    it('should return token info', async () => {
      const info = await sdk.token.getInfo();
      expect(info).toHaveProperty('address');
      expect(info).toHaveProperty('symbol', 'EACO');
      expect(info).toHaveProperty('name', 'EACO Token');
      expect(info.decimals).toBe(9);
    });

    it('should return transfer transaction signature', async () => {
      const signature = await sdk.token.transfer('G47psy2BdJCf2PE3oq9dLdalAY disruptedPkz3bP9Sma7pRgJ', 0.1);
      expect(typeof signature).toBe('string');
      expect(signature).toContain('transfer_');
    });
  });

  describe('Agent World Module', () => {
    it('should register agent', async () => {
      const result = await sdk.agentWorld.register({ name: 'TestAgent' });
      expect(result).toContain('TestAgent');
    });

    it('should join match', async () => {
      const result = await sdk.agentWorld.joinMatch('match-001');
      expect(result).toBe(true);
    });
  });

  describe('Virtual Universe Module', () => {
    it('should return universe status', async () => {
      const status = await sdk.virtualUniverse.getStatus();
      expect(status).toHaveProperty('online', true);
      expect(status).toHaveProperty('version');
    });
  });
});
