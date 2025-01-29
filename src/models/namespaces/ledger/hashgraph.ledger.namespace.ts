import { _DAO } from './namespaces/dao/hashgraph.ledger.dao.namespace'
import { _Accounts } from './namespaces/account/hashgraph.ledger.account.namespace'
import { _HCS } from './namespaces/hcs/hashgraph.ledger.hcs.namespace'
import { _HFS } from './namespaces/hfs/hashgraph.ledger.hfs.namespace'
import { _HTS } from './namespaces/hts/hashgraph.ledger.hts.namespace'
import { _Transaction } from './namespaces/transaction/hashgraph.ledger.transaction.namespace'

/**
 * Namespace representing the Hashgraph Ledger model that provides comprehensive functionality for
 * interacting with various Hashgraph network services.
 * @namespace _Ledger
 * @description This namespace includes:
 * - Hashgraph Consensus Service (HCS) operations for decentralized messaging and consensus
 * - Hashgraph Token Service (HTS) functionality for token management and operations
 * - Hashgraph File Service (HFS) operations for decentralized file storage
 * - Transaction management and processing for all network operations
 * - Account management and operations for identity and access
 * - DAO functionality for decentralized governance
 * 
 * The namespace consolidates all Hashgraph service operations into a single, organized structure
 * for better code organization and maintainability.
 * 
 * @category Hashgraph
 * @subcategory Ledger
 * @since 2.0.0
 * 
 * @example
 * // Using HTS service for token creation
 * const tokenService = new _Ledger.HTS.Create({
 *   name: "MyToken",
 *   symbol: "MTK",
 *   decimals: 8
 * });
 * 
 * // Working with accounts
 * const account = new _Ledger.Accounts.Create({
 *   initialBalance: 100,
 *   maxAutomaticTokenAssociations: 10
 * });
 * 
 * // Using HCS for consensus messaging
 * const topic = new _Ledger.HCS.CreateTopic({
 *   memo: "My Topic",
 *   submitKey: mySubmitKey
 * });
 */
export namespace _Ledger {
  /**
   * Hashgraph Consensus Service (HCS) model for decentralized messaging and consensus
   * @property {_HCS} HCS
   * @description Provides interfaces and functionality for Hashgraph Consensus Service operations including:
   * - Topic creation and management for message streams
   * - Message submission and retrieval with guaranteed ordering
   * - Consensus timestamps and sequencing for verifiable timing
   * - Topic permissions and updates for access control
   * - Mirror node integration for historical message access
   * @memberof _Ledger
   * @example
   * const hcsService = new _Ledger.HCS.SubmitMessage({
   *   topicId: "0.0.123456",
   *   message: "Hello World"
   * });
   */
  export import HCS = _HCS

  /**
   * Hashgraph Token Service (HTS) model for comprehensive token operations
   * @property {_HTS} HTS
   * @description Comprehensive token management system that offers:
   * - Token creation and configuration with custom properties
   * - Minting and burning capabilities for supply management
   * - Token transfers and atomic swaps for trading
   * - KYC and freeze/unfreeze operations for compliance
   * - Fee schedule management for token economics
   * - NFT support for unique digital assets
   * @memberof _Ledger
   * @example
   * const tokenMint = new _Ledger.HTS.FungibleToken.Mint({
   *   tokenId: "0.0.123456",
   *   amount: 1000
   * });
   */
  export import HTS = _HTS

  /**
   * Hashgraph File Service (HFS) model for decentralized file storage
   * @property {_HFS} HFS
   * @description File management system on the Hashgraph network providing:
   * - File creation and storage with immutable records
   * - Content updates and appends for mutable files
   * - File deletion operations with access control
   * - Access control and permissions management
   * - File metadata management and retrieval
   * - Versioning support for file history
   * @memberof _Ledger
   * @example
   * const fileCreate = new _Ledger.HFS.Create({
   *   contents: myFileBuffer,
   *   keys: [adminKey, fileKey]
   * });
   */
  export import HFS = _HFS

  /**
   * Transaction model for all network operations
   * @property {_Transaction} Transaction
   * @description Comprehensive transaction handling system offering:
   * - Transaction creation and building with validation
   * - Multi-signature support for complex operations
   * - Transaction signing and cryptographic verification
   * - Fee calculation and management for network costs
   * - Transaction submission and receipt handling
   * - Scheduled transaction support
   * @memberof _Ledger
   * @example
   * const transaction = new _Ledger.Transaction.Create()
   *   .setMaxTransactionFee(5)
   *   .addSignature(myPrivateKey);
   */
  export import Transaction = _Transaction

  /**
   * Accounts model for identity and access management
   * @property {_Accounts} Accounts
   * @description Complete account management system providing:
   * - Account creation and setup with custom properties
   * - Balance and staking operations for network participation
   * - Key management and updates for security
   * - Account information retrieval and monitoring
   * - Auto-renewal and expiry handling for maintenance
   * - Proxy staking relationships
   * @memberof _Ledger
   * @example
   * const accountInfo = new _Ledger.Accounts.Info({
   *   accountId: "0.0.123456"
   * });
   */
  export import Accounts = _Accounts

  /**
   * DAO model for decentralized governance
   * @property {_DAO} DAO
   * @description Provides interfaces and functionality for Hashgraph DAO operations including:
   * - DAO creation and configuration with governance rules
   * - Proposal creation and management for decisions
   * - Voting mechanisms and vote counting
   * - Treasury management and fund allocation
   * - Member management and permissions
   * - Execution of approved proposals
   * @memberof _Ledger
   * @example
   * const proposal = new _Ledger.DAO.CreateProposal({
   *   description: "Treasury allocation",
   *   amount: 1000,
   *   recipient: "0.0.123456"
   * });
   */
  export import DAO = _DAO
}
