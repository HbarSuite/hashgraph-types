/**
 * @file hts.namespace.ts
 * @module @hashgraph/sdk
 */

import { _IPause } from './interfaces/hashgraph.ledger.hts.pause.interface'
import { _IAtomicSwap } from './interfaces/hashgraph.ledger.hts.atomic-swap.interface'
import { _ICreate } from './interfaces/hashgraph.ledger.hts.create.interface'
import { _IDelete } from './interfaces/hashgraph.ledger.hts.delete.interface'
import { _IFreeze } from './interfaces/hashgraph.ledger.hts.freeze.interface'
import { _IKYC } from './interfaces/hashgraph.ledger.hts.kyc.interface'
import { _IUnfreeze } from './interfaces/hashgraph.ledger.hts.unfreeze.interface'
import { _IUpdateFees } from './interfaces/hashgraph.ledger.hts.update-fees.interface'
import { _IUpdate } from './interfaces/hashgraph.ledger.hts.update.interface'
import { _IFungibleToken } from './namespaces/fungible-token/hashgraph.ledger.hts.fungible_token.namespace'
import { _INft } from './namespaces/nft/hashgraph.ledger.hts.nft.namespace'
import { _IUnpause } from './interfaces/hashgraph.ledger.hts.unpause.interface'
import { _IAssociate } from './interfaces/hashgraph.ledger.hts.associate.interface'
import { _IDissociate } from './interfaces/hashgraph.ledger.hts.dissociate.interface'
import { _IFees } from './namespaces/fees/validators.token.fee.namespace'

/**
 * Token service operations namespace for Hedera Token Service (HTS)
 * @namespace _IHTS
 * @description Defines the structure and requirements for HTS operations,
 * providing comprehensive support for token management on the Hedera network.
 * Enables creation and management of both fungible and non-fungible tokens
 * with extensive configuration options and security features.
 * @category Hedera Services
 * @subcategory HTS
 * @remarks
 * Key features:
 * - Token creation
 * - Token management
 * - Access control
 * - Fee configuration
 * - KYC/AML support
 * - Atomic swaps
 * 
 * Token types:
 * - Fungible tokens
 * - Non-fungible tokens (NFTs)
 * - Custom tokens
 * 
 * Security features:
 * - Freeze/unfreeze
 * - Pause/unpause
 * - KYC verification
 * - Admin controls
 * 
 * Requirements:
 * - Valid token IDs
 * - Proper permissions
 * - Network fees
 * - Resource limits
 * @example
 * ```typescript
 * // Creating a fungible token
 * const createToken: _IHTS.ICreate = {
 *   name: "Example Token",
 *   symbol: "EXT",
 *   decimals: 8,
 *   initialSupply: 1000000,
 *   maxSupply: 10000000,
 *   treasury: "0.0.12345",
 *   adminKey: myAdminKey,
 *   kycKey: myKycKey,
 *   freezeKey: myFreezeKey,
 *   wipeKey: myWipeKey,
 *   supplyKey: mySupplyKey,
 *   pauseKey: myPauseKey,
 *   feeScheduleKey: myFeeKey,
 *   memo: "Example token for DeFi"
 * };
 * 
 * // Creating an NFT collection
 * const createNFT: _IHTS.ICreate = {
 *   name: "Digital Art Collection",
 *   symbol: "ART",
 *   tokenType: "NON_FUNGIBLE_UNIQUE",
 *   treasury: "0.0.12345",
 *   adminKey: myAdminKey,
 *   supplyKey: mySupplyKey,
 *   metadata: {
 *     collection: "Digital Art Series 1",
 *     artist: "Artist Name",
 *     rights: "All Rights Reserved"
 *   }
 * };
 * 
 * // Token association
 * const associate: _IHTS.IAssociate = {
 *   accountId: "0.0.12345",
 *   tokens: ["0.0.34567", "0.0.45678"],
 *   memo: "Associate with DeFi tokens"
 * };
 * 
 * // Updating token properties
 * const updateToken: _IHTS.IUpdate = {
 *   tokenId: "0.0.34567",
 *   name: "Updated Token Name",
 *   symbol: "UTN",
 *   treasury: newTreasuryId,
 *   adminKey: newAdminKey,
 *   metadata: {
 *     version: "2.0.0",
 *     website: "https://example.com"
 *   }
 * };
 * 
 * // Token fee update
 * const updateFees: _IHTS.IUpdateFees = {
 *   tokenId: "0.0.34567",
 *   customFees: [{
 *     feeCollectorAccountId: "0.0.12345",
 *     amount: 100,
 *     denominatingTokenId: "0.0.23456"
 *   }]
 * };
 * ```
 */
export namespace _IHTS {
    /**
     * Token creation type definition
     * @type {_ICreate}
     * @description Defines the structure for creating new tokens on HTS with
     * comprehensive configuration options for both fungible and non-fungible tokens.
     * @memberof _IHTS
     * @remarks
     * Capabilities:
     * - Token type selection
     * - Supply configuration
     * - Key management
     * - Fee settings
     * - Metadata handling
     * - Treasury setup
     * @see {@link _ICreate} for detailed property definitions
     */
    export type ICreate = _ICreate

    /**
     * Token association type definition
     * @type {_IAssociate}
     * @description Defines the structure for associating accounts with tokens,
     * enabling accounts to interact with specific tokens on the network.
     * @memberof _IHTS
     * @remarks
     * Features:
     * - Multiple token support
     * - Account validation
     * - Auto-association
     * - Fee handling
     * @see {@link _IAssociate} for detailed property definitions
     */
    export type IAssociate = _IAssociate

    /**
     * Token dissociation type definition
     * @type {_IDissociate}
     * @description Defines the structure for removing token associations from
     * accounts, preventing further interaction with specified tokens.
     * @memberof _IHTS
     * @remarks
     * Requirements:
     * - Zero balance
     * - Owner approval
     * - Valid association
     * - Fee coverage
     * @see {@link _IDissociate} for detailed property definitions
     */
    export type IDissociate = _IDissociate

    /**
     * Token update type definition
     * @type {_IUpdate}
     * @description Defines the structure for modifying token properties and
     * configuration after creation, with support for extensive customization.
     * @memberof _IHTS
     * @remarks
     * Updatable features:
     * - Token metadata
     * - Keys and permissions
     * - Treasury account
     * - Expiration settings
     * @see {@link _IUpdate} for detailed property definitions
     */
    export type IUpdate = _IUpdate

    /**
     * Token deletion type definition
     * @type {_IDelete}
     * @description Defines the structure for removing tokens from the network,
     * ensuring proper cleanup and validation of token state.
     * @memberof _IHTS
     * @remarks
     * Requirements:
     * - Admin key signature
     * - Zero supply
     * - No associations
     * - Fee coverage
     * @see {@link _IDelete} for detailed property definitions
     */
    export type IDelete = _IDelete

    /**
     * Token pause type definition
     * @type {_IPause}
     * @description Defines the structure for temporarily halting token operations,
     * providing emergency control over token transfers and operations.
     * @memberof _IHTS
     * @remarks
     * Effects:
     * - Stops transfers
     * - Maintains balances
     * - Preserves metadata
     * - Allows admin ops
     * @see {@link _IPause} for detailed property definitions
     */
    export type IPause = _IPause

    /**
     * Token unpause type definition
     * @type {_IUnpause}
     * @description Defines the structure for resuming token operations after
     * a pause, restoring normal token functionality.
     * @memberof _IHTS
     * @remarks
     * Features:
     * - Resumes transfers
     * - Validates state
     * - Updates metadata
     * - Maintains security
     * @see {@link _IUnpause} for detailed property definitions
     */
    export type IUnpause = _IUnpause

    /**
     * Token fee update type definition
     * @type {_IUpdateFees}
     * @description Defines the structure for modifying token fee configurations,
     * enabling flexible fee structures and collection mechanisms.
     * @memberof _IHTS
     * @remarks
     * Fee types:
     * - Fixed fees
     * - Fractional fees
     * - Threshold fees
     * - Custom schedules
     * @see {@link _IUpdateFees} for detailed property definitions
     */
    export type IUpdateFees = _IUpdateFees

    /**
     * Token freeze type definition
     * @type {_IFreeze}
     * @description Defines the structure for restricting token operations for
     * specific accounts, providing compliance and security controls.
     * @memberof _IHTS
     * @remarks
     * Capabilities:
     * - Account freezing
     * - Balance preservation
     * - Selective control
     * - Compliance support
     * @see {@link _IFreeze} for detailed property definitions
     */
    export type IFreeze = _IFreeze

    /**
     * Token unfreeze type definition
     * @type {_IUnfreeze}
     * @description Defines the structure for removing freeze restrictions from
     * accounts, restoring normal token operation capabilities.
     * @memberof _IHTS
     * @remarks
     * Features:
     * - Account unfreezing
     * - State validation
     * - Access restoration
     * - Audit support
     * @see {@link _IUnfreeze} for detailed property definitions
     */
    export type IUnfreeze = _IUnfreeze

    /**
     * Token KYC type definition
     * @type {_IKYC}
     * @description Defines the structure for managing Know Your Customer (KYC)
     * status for token accounts, supporting regulatory compliance.
     * @memberof _IHTS
     * @remarks
     * Capabilities:
     * - KYC status management
     * - Compliance tracking
     * - Access control
     * - Audit support
     * @see {@link _IKYC} for detailed property definitions
     */
    export type IKYC = _IKYC

    /**
     * Fungible token operations namespace
     * @type {_IFungibleToken}
     * @description Provides interfaces and types for managing fungible token
     * operations, including transfers, minting, and burning.
     * @memberof _IHTS
     * @remarks
     * Supported operations:
     * - Token transfers
     * - Supply management
     * - Balance tracking
     * - Allowance control
     * @see {@link _IFungibleToken} for detailed interface definitions
     */
    export import IFungibleToken = _IFungibleToken

    /**
     * NFT operations namespace
     * @type {_INft}
     * @description Provides interfaces and types for managing non-fungible token
     * operations, including minting, transfers, and metadata management.
     * @memberof _IHTS
     * @remarks
     * Capabilities:
     * - NFT minting
     * - Metadata management
     * - Transfer control
     * - Collection handling
     * @see {@link _INft} for detailed interface definitions
     */
    export import INft = _INft

    /**
     * Fees operations namespace
     * @type {_IFees}
     * @description Provides interfaces and types for managing token fees,
     * including custom fee configurations and fee schedules.
     * @memberof _IHTS
     * @remarks
     * Supported operations:
     * - Custom fee configurations
     * - Fee schedules
     * - Fee collection
     * @see {@link _IFees} for detailed interface definitions
     */
    export import IFees = _IFees

    /**
     * Atomic swap type definition
     * @type {_IAtomicSwap}
     * @description Defines the structure for atomic token swap operations,
     * enabling secure token exchanges with transaction guarantees.
     * @memberof _IHTS
     * @remarks
     * Features:
     * - Atomic execution
     * - Multi-token support
     * - Value validation
     * - Rollback handling
     * @see {@link _IAtomicSwap} for detailed property definitions
     */
    export type IAtomicSwap = _IAtomicSwap
}