import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _TransactionDetails } from './models/hashgraph.models.transaction-details.model'
import { _TransactionIdentity } from './models/hashgraph.models.transaction-identity.model'
import { _PrivateKeyList } from './models/hashgraph.models.private-keylist.model'
import { _TokenBalance } from './models/hashgraph.models.token-balance.model'
import { _AccountBalance } from './models/hashgraph.models.account-balance.model'
import { _MirrorNode } from './models/hashgraph.models.mirror-node.model'
import { _Operator } from './models/hashgraph.models.operator.model'
import { _Issuer } from './models/hashgraph.models.issuer.model'
import { _Options } from './models/hashgraph.models.options.model'
import { _Ledger } from './namespaces/ledger/hashgraph.ledger.namespace'
import { _DID } from './namespaces/did/hashgraph.did.namespace'
import { _Commons } from './namespaces/commons/hashgraph.commons.namespace'
import { _Restful } from './namespaces/restful/hashgraph.restful.namespace'

/**
 * @file hashgraph.namespace.ts
 * @namespace Hashgraph
 * @description Root namespace for all Hashgraph-related functionality. This namespace serves as the main entry point
 * for interacting with the Hedera Hashgraph network, providing a comprehensive set of tools and interfaces for:
 * - Transaction management and execution
 * - Account and balance operations
 * - Token operations (fungible and non-fungible)
 * - Network interaction (nodes, operators)
 * - Identity management (DIDs)
 * - API integrations
 * 
 * The namespace is organized into several sub-namespaces and classes to provide a clean and intuitive API
 * for developers working with the Hedera Hashgraph network.
 * 
 * @category Core
 * @since 2.0.0
 * 
 * @example
 * // Example of using various Hashgraph namespace components
 * const txDetails = new Hashgraph.TransactionDetails();
 * const operator = new Hashgraph.Operator();
 * const tokenBalance = new Hashgraph.TokenBalance();
 * 
 * // Using sub-namespaces
 * const didOperation = new Hashgraph.DID.Operation();
 * const restfulQuery = new Hashgraph.Restful.Query();
 */
export namespace Hashgraph {
  /**
   * @class TransactionDetails
   * @extends {_TransactionDetails}
   * @description Represents detailed information about a Hashgraph transaction.
   * Includes critical transaction metadata such as:
   * - Transaction status and result
   * - Timestamps (creation, expiration, consensus)
   * - Network fees and processing information
   * - Transaction hash and signatures
   * 
   * @example
   * const details = new TransactionDetails({
   *   transactionId: "0.0.123@1234567890.000000000",
   *   status: "SUCCESS",
   *   consensusTimestamp: "2023-01-01T00:00:00.000Z"
   * });
   */
  @ApiSchema({
    name: 'Hashgraph.TransactionDetails'
  })
  export class TransactionDetails extends _TransactionDetails {}

  /**
   * @class TransactionIdentity
   * @extends {_TransactionIdentity}
   * @description Manages transaction identity and authentication information.
   * Handles:
   * - Digital signatures
   * - Public key verification
   * - Transaction authorization
   * - Identity verification
   * 
   * @example
   * const txIdentity = new TransactionIdentity({
   *   signerPublicKey: "302a300506032b6570032100...",
   *   signature: "signed_transaction_bytes"
   * });
   */
  @ApiSchema({
    name: 'Hashgraph.TransactionIdentity'
  })
  export class TransactionIdentity extends _TransactionIdentity {}

  /**
   * @class PrivateKeyList
   * @extends {_PrivateKeyList}
   * @description Manages a collection of private keys for transaction signing and account management.
   * Provides functionality for:
   * - Key storage and retrieval
   * - Secure key management
   * - Multi-signature support
   * - Key rotation and updates
   * 
   * @example
   * const keyList = new PrivateKeyList();
   * keyList.addKey("302e020100300506032b657004220420...");
   */
  @ApiSchema({
    name: 'Hashgraph.PrivateKeyList'
  })
  export class PrivateKeyList extends _PrivateKeyList {}

  /**
   * @class TokenBalance
   * @extends {_TokenBalance}
   * @description Represents token balance information for both fungible and non-fungible tokens.
   * Tracks:
   * - Token quantities
   * - Token types
   * - Balance changes
   * - Token metadata
   * 
   * @example
   * const balance = new TokenBalance({
   *   tokenId: "0.0.123456",
   *   balance: 1000,
   *   decimals: 8
   * });
   */
  @ApiSchema({
    name: 'Hashgraph.TokenBalance'
  })
  export class TokenBalance extends _TokenBalance {}

  /**
   * @class AccountBalance
   * @extends {_AccountBalance}
   * @description Manages account balance information including both HBAR and token holdings.
   * Features:
   * - HBAR balance tracking
   * - Token balance aggregation
   * - Balance history
   * - Balance updates
   * 
   * @example
   * const accountBalance = new AccountBalance({
   *   hbarBalance: 100,
   *   tokens: new Map([["0.0.123456", 1000]])
   * });
   */
  @ApiSchema({
    name: 'Hashgraph.AccountBalance'
  })
  export class AccountBalance extends _AccountBalance {}

  /**
   * @class MirrorNode
   * @extends {_MirrorNode}
   * @description Facilitates interaction with Hedera mirror nodes for historical data access.
   * Provides:
   * - Transaction history queries
   * - State proof verification
   * - Network status monitoring
   * - Historical data access
   * 
   * @example
   * const mirrorNode = new MirrorNode({
   *   endpoint: "api.mirrornode.hedera.com",
   *   apiKey: "your-api-key"
   * });
   */
  @ApiSchema({
    name: 'Hashgraph.MirrorNode'
  })
  export class MirrorNode extends _MirrorNode {}

  /**
   * @class Operator
   * @extends {_Operator}
   * @description Represents a Hedera network operator account with enhanced capabilities.
   * Manages:
   * - Network operations
   * - Transaction submission
   * - Account management
   * - Fee handling
   * 
   * @example
   * const operator = new Operator({
   *   accountId: "0.0.123456",
   *   privateKey: "302e020100300506032b657004220420..."
   * });
   */
  @ApiSchema({
    name: 'Hashgraph.Operator'
  })
  export class Operator extends _Operator {}

  /**
   * @class Issuer
   * @extends {_Issuer}
   * @description Handles token and asset issuance on the Hedera network.
   * Supports:
   * - Token creation
   * - Asset minting
   * - Supply management
   * - Issuance policies
   * 
   * @example
   * const issuer = new Issuer({
   *   accountId: "0.0.123456",
   *   isKyc: true
   * });
   */
  @ApiSchema({
    name: 'Hashgraph.Issuer'
  })
  export class Issuer extends _Issuer {}

  /**
   * @class Options
   * @extends {_Options}
   * @description Manages configuration options for Hashgraph operations.
   * Configures:
   * - Transaction parameters
   * - Network settings
   * - Operation timeouts
   * - Custom configurations
   * 
   * @example
   * const options = new Options({
   *   maxTransactionFee: 1000000,
   *   transactionValidDuration: 120
   * });
   */
  @ApiSchema({
    name: 'Hashgraph.Options'
  })
  export class Options extends _Options {}

  /**
   * @namespace Commons
   * @description Provides common utilities and shared functionality across the Hashgraph ecosystem.
   * Includes:
   * - Utility functions
   * - Common constants
   * - Shared types
   * - Helper methods
   * 
   * @example
   * const utils = new Hashgraph.Commons.Utilities();
   * const constants = Hashgraph.Commons.Constants;
   */
  export import Commons = _Commons

  /**
   * @namespace DID
   * @description Manages Decentralized Identifiers (DIDs) on the Hedera network.
   * Handles:
   * - DID creation and resolution
   * - Verifiable credentials
   * - Identity verification
   * - DID document management
   * 
   * @example
   * const didDoc = new Hashgraph.DID.Document();
   * const resolver = new Hashgraph.DID.Resolver();
   */
  export import DID = _DID

  /**
   * @namespace Restful
   * @description Provides RESTful API interfaces for Hedera network interaction.
   * Features:
   * - API endpoints
   * - Request/response handling
   * - Authentication
   * - Rate limiting
   * 
   * @example
   * const api = new Hashgraph.Restful.Client();
   * const response = await api.getAccountInfo("0.0.123456");
   */
  export import Restful = _Restful

  /**
   * @namespace Ledger
   * @description Manages Hedera ledger operations and record keeping.
   * Supports:
   * - Transaction records
   * - State management
   * - Consensus records
   * - Account records
   * 
   * @example
   * const ledger = new Hashgraph.Ledger.Manager();
   * const record = await ledger.getTransactionRecord("transaction-id");
   */
  export import Ledger = _Ledger
}