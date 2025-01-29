import { _IDAO } from './namespaces/dao/hashgraph.ledger.dao.namespace'
import { _IAccounts } from './namespaces/account/hashgraph.ledger.account.namespace'
import { _IHCS } from './namespaces/hcs/hashgraph.ledger.hcs.namespace'
import { _IHFS } from './namespaces/hfs/hashgraph.ledger.hfs.namespace'
import { _IHTS } from './namespaces/hts/hashgraph.ledger.hts.namespace'
import { _ITransaction } from './namespaces/transaction/hashgraph.ledger.transaction.namespace'

/**
 * @file hashgraph.ledger.namespace.ts
 * @module @hashgraph/sdk
 * @description Defines the core ledger namespace that encapsulates all Hashgraph ledger services and operations.
 * This namespace serves as the main entry point for interacting with the Hashgraph ledger functionality.
 * @since 2.0.0
 */

/**
 * Ledger Namespace
 * @namespace _ILedger
 * @description Main namespace containing all Hashgraph ledger services and core functionality.
 * Provides a comprehensive set of interfaces for interacting with various Hashgraph services
 * including consensus, tokens, files, transactions, accounts and DAOs.
 * @category Namespaces
 * @subcategory Ledger
 * @public
 * 
 * @example
 * ```typescript
 * // Example usage of ledger namespace
 * const hcsClient: IHashgraph._ILedger.IHCS = {
 *   // HCS client implementation
 * };
 * 
 * const accountClient: IHashgraph._ILedger.IAccounts = {
 *   // Account operations implementation  
 * };
 * ```
 */
export namespace _ILedger {
  /**
   * Hashgraph Consensus Service (HCS) interface
   * @property {_IHCS} IHCS
   * @description Interface for Hashgraph Consensus Service operations.
   * Provides functionality for:
   * - Topic creation and management
   * - Message submission and retrieval
   * - Consensus timestamps and sequencing
   * @type {_IHCS}
   * @memberof _ILedger
   * @category Services
   * @public
   */
  export import IHCS = _IHCS

  /**
   * Hashgraph Token Service (HTS) interface
   * @property {_IHTS} IHTS
   * @description Interface for Hashgraph Token Service operations.
   * Provides functionality for:
   * - Fungible and non-fungible token creation
   * - Token transfers and allowances
   * - Token management and updates
   * @type {_IHTS}
   * @memberof _ILedger
   * @category Services
   * @public
   */
  export import IHTS = _IHTS

  /**
   * Hashgraph File Service (HFS) interface
   * @property {_IHFS} IHFS
   * @description Interface for Hashgraph File Service operations.
   * Provides functionality for:
   * - File creation and storage
   * - File updates and appends
   * - File retrieval and deletion
   * @type {_IHFS}
   * @memberof _ILedger
   * @category Services
   * @public
   */
  export import IHFS = _IHFS

  /**
   * Transaction interface
   * @property {_ITransaction} ITransaction
   * @description Interface for Hashgraph transaction operations.
   * Provides functionality for:
   * - Transaction creation and building
   * - Transaction signing and validation
   * - Transaction submission and receipt handling
   * @type {_ITransaction}
   * @memberof _ILedger
   * @category Core
   * @public
   */
  export import ITransaction = _ITransaction

  /**
   * Accounts interface
   * @property {_IAccounts} IAccounts
   * @description Interface for Hashgraph account operations.
   * Provides functionality for:
   * - Account creation and updates
   * - Balance and stake management
   * - Account info queries and key management
   * @type {_IAccounts}
   * @memberof _ILedger
   * @category Core
   * @public
   */
  export import IAccounts = _IAccounts

  /**
   * DAO interface
   * @property {_IDAO} IDAO
   * @description Interface for Decentralized Autonomous Organization (DAO) operations.
   * Provides functionality for:
   * - DAO creation and configuration
   * - Proposal management and voting
   * - Treasury and governance operations
   * @type {_IDAO}
   * @memberof _ILedger
   * @category Core
   * @public
   */
  export import IDAO = _IDAO
}