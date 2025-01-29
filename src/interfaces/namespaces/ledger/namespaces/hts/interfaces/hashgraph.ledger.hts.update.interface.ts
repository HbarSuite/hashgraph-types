/**
 * @file update.interface.ts
 * @module IHashgraph.ILedger.IHTS.IUpdate
 * @description Defines the interface for updating tokens on Hashgraph Token Service (HTS)
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Token Operations
 * @subcategory Token Updates
 */

import { IHashgraph } from '../../../../../hashgraph.namespace'
import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";

/**
 * Token update interface for modifying token properties
 * @interface _IUpdate
 * @description Defines the structure for updating existing tokens on the Hashgraph
 * Token Service (HTS). Enables modification of token properties including metadata,
 * treasury configuration, and governance settings.
 * 
 * @remarks
 * Key features:
 * - Metadata updates
 * - Treasury management
 * - Key configuration
 * - DAO governance
 * 
 * Update capabilities:
 * - Token name
 * - Token symbol
 * - Token memo
 * - Treasury account
 * - Treasury key
 * 
 * Requirements:
 * - Admin key signature
 * - Valid account formats
 * - Proper permissions
 * - Network fees
 * 
 * Security features:
 * - Permission validation
 * - Key verification
 * - Update atomicity
 * - State validation
 * 
 * @example
 * ```typescript
 * // Basic token update
 * const basicUpdate: _IUpdate = {
 *   name: "Updated Token Name",
 *   symbol: "UTN",
 *   memo: "Updated token with enhanced features"
 * };
 * 
 * // Advanced token update with treasury changes
 * const advancedUpdate: _IUpdate = {
 *   currentTreasury: "0.0.12345",
 *   newTreasuryAccountId: "0.0.67890",
 *   newTreasuryKey: "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777",
 *   sender: {
 *     key: myAdminKey,
 *     id: AccountId.fromString("0.0.12345")
 *   },
 *   dao: {
 *     topicId: "0.0.98765",
 *     consensusTimestamp: "1234567890.123456789"
 *   }
 * };
 * 
 * // Metadata-only update
 * const metadataUpdate: _IUpdate = {
 *   name: "Rebranded Token",
 *   symbol: "RBT",
 *   memo: "Token rebranded to reflect new project direction"
 * };
 * ```
 */
export interface _IUpdate {
    /**
     * Current treasury account identifier
     * @property {string} currentTreasury
     * @description The current treasury account ID for the token being updated.
     * Required when updating treasury-related properties.
     * Must be a valid Hedera account in the format "0.0.{number}".
     * @type {string}
     * @memberof _IUpdate
     * @optional
     * @example "0.0.12345"
     * @since 2.0.0
     * @remarks
     * Validation rules:
     * - Must be a valid account format
     * - Account must exist
     * - Account must be active
     * - Must match token's current treasury
     */
    currentTreasury?: string

    /**
     * Updated token name
     * @property {string} name
     * @description New name to assign to the token. Will replace the existing name
     * in all contexts where the token is displayed or referenced.
     * @type {string}
     * @memberof _IUpdate
     * @optional
     * @example "Updated Token Name"
     * @since 2.0.0
     * @remarks
     * Requirements:
     * - 100 characters max
     * - UTF-8 encoding
     * - No special formatting
     * - Must be unique (recommended)
     */
    name?: string

    /**
     * Updated token symbol
     * @property {string} symbol
     * @description New symbol/ticker for the token. Will replace the existing
     * symbol in all contexts where the token is displayed or referenced.
     * @type {string}
     * @memberof _IUpdate
     * @optional
     * @example "UTN"
     * @since 2.0.0
     * @remarks
     * Best practices:
     * - 10 characters max
     * - Uppercase letters
     * - No special characters
     * - Must be unique (recommended)
     */
    symbol?: string

    /**
     * Updated token memo
     * @property {string} memo
     * @description New memo/description for the token. Provides additional context
     * about the token's purpose, features, or updates.
     * @type {string}
     * @memberof _IUpdate
     * @optional
     * @example "Updated token with enhanced features"
     * @since 2.0.0
     * @remarks
     * Guidelines:
     * - 100 bytes max
     * - Clear description
     * - Version info (optional)
     * - Update reason (recommended)
     */
    memo?: string

    /**
     * New treasury account
     * @property {string} newTreasuryAccountId
     * @description Account ID to set as the new treasury for the token.
     * The treasury account holds administrative privileges and receives fees.
     * @type {string}
     * @memberof _IUpdate
     * @optional
     * @example "0.0.67890"
     * @since 2.0.0
     * @remarks
     * Requirements:
     * - Valid account format
     * - Active account status
     * - Token association
     * - Admin key signature
     */
    newTreasuryAccountId?: string

    /**
     * New treasury key
     * @property {string | IHashgraph.ICommons.IKey.IList} newTreasuryKey
     * @description Key or key list to set as the new treasury authority.
     * Controls treasury operations and administrative functions.
     * @type {string | IHashgraph.ICommons.IKey.IList}
     * @memberof _IUpdate
     * @optional
     * @example "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"
     * @since 2.0.0
     * @remarks
     * Key types:
     * - ED25519 public key
     * - Key list (multi-sig)
     * - Threshold key
     * - Contract ID
     */
    newTreasuryKey?: string | IHashgraph.ICommons.IKey.IList

    /**
     * Transaction sender configuration
     * @property {Object} sender
     * @description Configuration for the account initiating the update.
     * Includes authorization and identification details.
     * @type {{key?: PublicKey | KeyList, id?: AccountId}}
     * @memberof _IUpdate
     * @optional
     * @example
     * ```typescript
     * {
     *   key: PublicKey.fromString("302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"),
     *   id: AccountId.fromString("0.0.12345")
     * }
     * ```
     * @remarks
     * Requirements:
     * - Admin privileges
     * - Valid signatures
     * - Active account
     * - Sufficient fees
     */
    sender?: {
        key?: PublicKey | KeyList;
        id?: AccountId;
    }

    /**
     * DAO governance configuration
     * @property {IHashgraph.ILedger.IDAO.IConfig} dao
     * @description Configuration for DAO-controlled token updates.
     * Enables decentralized governance of token modifications.
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _IUpdate
     * @optional
     * @since 2.0.0
     * @example
     * ```typescript
     * {
     *   topicId: "0.0.98765",
     *   consensusTimestamp: "1234567890.123456789"
     * }
     * ```
     * @remarks
     * Features:
     * - Proposal tracking
     * - Vote validation
     * - Consensus verification
     * - Update authorization
     */
    dao?: IHashgraph.ILedger.IDAO.IConfig
}