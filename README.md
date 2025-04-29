# @hsuite/hashgraph-types

Type definitions and interfaces for the HbarSuite Hedera Hashgraph integration.

## Description

The `@hsuite/hashgraph-types` package provides a comprehensive set of TypeScript type definitions, interfaces, models, and namespaces for interacting with the Hedera Hashgraph network. It serves as the foundational type system for the HbarSuite ecosystem, ensuring type safety and providing clear contracts for Hedera network operations.

## Core Features

- 🏗️ **Comprehensive Type System**
  - Complete TypeScript definitions for all Hedera operations
  - Strongly typed interfaces for network interactions
  - Extensive model implementations with decorators

- 🌐 **Transaction Management**
  - Detailed transaction type definitions
  - Transaction identity and authentication structures
  - Status tracking and result handling

- 💰 **Account & Token Operations**
  - Account balance tracking
  - Token balance management (fungible and non-fungible)
  - Multi-token support

- 🔐 **Identity & Security**
  - Private key management
  - DID (Decentralized Identifier) support
  - Multi-signature capabilities

- 📡 **Network Integration**
  - Mirror node interaction types
  - Operator account definitions
  - Network configuration interfaces

- 🛠️ **Utility & Commons**
  - Shared utility types
  - Common constants and helpers
  - RESTful API interfaces

## Installation

```bash
npm install @hsuite/hashgraph-types
```

## Usage

### Basic Usage

```typescript
import { IHashgraph, Hashgraph } from '@hsuite/hashgraph-types';

// Using interfaces
const operatorConfig: IHashgraph.IOperator = {
  accountId: "0.0.123456",
  privateKey: "302e020100300506032b657004220420..."
};

// Using models
const operator = new Hashgraph.Operator(operatorConfig);
```

### Transaction Management

```typescript
// Transaction details
const txDetails = new Hashgraph.TransactionDetails({
  transactionId: "0.0.123@1234567890.000000000",
  status: "SUCCESS",
  consensusTimestamp: "2023-01-01T00:00:00.000Z"
});

// Transaction identity
const txIdentity = new Hashgraph.TransactionIdEntity({
  signerPublicKey: "302a300506032b6570032100...",
  signature: "signed_transaction_bytes"
});
```

### Account & Token Operations

```typescript
// Account balance management
const accountBalance = new Hashgraph.AccountBalance({
  hbarBalance: 100,
  tokens: new Map([["0.0.123456", 1000]])
});

// Token balance tracking
const tokenBalance = new Hashgraph.TokenBalance({
  tokenId: "0.0.123456",
  balance: 1000,
  decimals: 8
});
```

### Network Operations

```typescript
// Mirror node configuration
const mirrorNode = new Hashgraph.MirrorNode({
  endpoint: "api.mirrornode.hedera.com",
  apiKey: "your-api-key"
});

// Network options
const options = new Hashgraph.Options({
  maxTransactionFee: 1000000,
  transactionValidDuration: 120
});
```

## Architecture

The library is organized into several key namespaces:

- `IHashgraph`: Root namespace for interfaces
- `Hashgraph`: Root namespace for model implementations
- `Hashgraph.DID`: DID-related functionality
- `Hashgraph.Restful`: RESTful API interactions
- `Hashgraph.Commons`: Shared utilities and constants
- `Hashgraph.Ledger`: Ledger operations

Each namespace provides a clean and intuitive API for its specific domain while maintaining strong type safety.

## Documentation

### API Documentation

To generate and view the detailed API documentation:

```bash
yarn compodoc
```

To include coverage information:

```bash
yarn compodoc:coverage
```

### Type Documentation

All types and interfaces are extensively documented with JSDoc comments, providing:
- Detailed descriptions
- Usage examples
- Parameter descriptions
- Return type information

## License

This package is part of the HbarSuite ecosystem and is covered by its license terms.

---

<p align="center">
  Built with ❤️ by the HbarSuite Team<br>
  Copyright © 2024 HbarSuite. All rights reserved.
</p>