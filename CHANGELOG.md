# Changelog

All notable changes to Web4SDK will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-05-01

### Added
- Initial release
- Solana blockchain integration with `@solana/web3.js`
- Token module: `getInfo()`, `getBalance()`, `transfer()`
- Agent World module: `register()`, `joinMatch()`
- Virtual Universe module: `getStatus()`
- TypeScript support with full type definitions
- Jest test framework configuration
- ESLint configuration for code quality
- MIT License

### Security
- Transfer method requires wallet adapter for signing (Phantom/Solflare recommended)
- Private keys should never be hardcoded in client code

## [Unreleased]

### Planned
- Wallet adapter integration (Phantom, Solflare)
- Token swap functionality via Orca/Raydium
- Liquidity pool operations
- NFT support for Virtual Universe assets
