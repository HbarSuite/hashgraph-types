import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _AtomicSwap } from './models/hashgraph.ledger.hts.models.atomic-swap.model'
import { _Create } from './models/hashgraph.ledger.hts.models.create.model'
import { _Freeze } from './models/hashgraph.ledger.hts.models.freeze.model'
import { _KYC } from './models/hashgraph.ledger.hts.models.kyc.model'
import { _Unfreeze } from './models/hashgraph.ledger.hts.models.unfreeze.model'
import { _UpdateFees } from './models/hashgraph.ledger.hts.models.update-fees.model'
import { _Update } from './models/hashgraph.ledger.hts.models.update.model'
import { _FungibleToken } from './namespaces/fungible-token/hashgraph.ledger.hts.fungible_token.namespace'
import { _Nft } from './namespaces/nft/hashgraph.ledger.hts.nft.namespace'
import { _Associate } from './models/hashgraph.ledger.hts.models.associate.model'
import { _Dissociate } from './models/hashgraph.ledger.hts.models.dissociate.model'
import { _Fees } from "./namespaces/fees/validators.token.fee.namespace"

/**
 * @file Hedera Token Service (HTS) Namespace
 * @namespace _HTS
 * @description Implements comprehensive token management functionality for the
 * Hedera Token Service (HTS). This namespace provides a complete set of operations
 * for creating and managing both fungible and non-fungible tokens on the Hedera
 * network.
 * 
 * Core Features:
 * - Token Creation & Management
 * - Token Association Control
 * - Token Properties Updates
 * - Fee Structure Management
 * - Compliance Operations (KYC/AML)
 * - Freeze/Unfreeze Capabilities
 * - Atomic Swap Operations
 * - Fungible Token Operations
 * - NFT Management
 * 
 * @category Hashgraph
 * @subcategory Token Service
 * @since 2.0.0
 * 
 * @remarks
 * The HTS namespace provides a robust interface for all token-related operations
 * on the Hedera network. It ensures secure token management with proper access
 * control, compliance handling, and transaction management.
 * 
 * Key Components:
 * - Create: Token creation with customizable properties
 * - Update: Token property and metadata modifications
 * - Associate/Dissociate: Account-token relationship management
 * - Freeze/Unfreeze: Token transfer restriction control
 * - KYC: Compliance status management
 * - FungibleToken: Specialized fungible token operations
 * - NFT: Non-fungible token management
 * - AtomicSwap: Secure token exchange operations
 * 
 * @example
 * // Complete token lifecycle management
 * 
 * // Create a new fungible token
 * const token = new _HTS.Create({
 *   name: "Example Token",
 *   symbol: "EXT",
 *   decimals: 8,
 *   initialSupply: "1000000",
 *   maxSupply: "10000000",
 *   treasury: "0.0.123456",
 *   adminKey: true,
 *   kycKey: true,
 *   freezeKey: true,
 *   wipeKey: true,
 *   supplyKey: true,
 *   feeScheduleKey: true,
 *   freezeDefault: false,
 *   expirationTime: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
 * });
 * 
 * // Associate token with account
 * const associate = new _HTS.Associate({
 *   accountId: "0.0.789012",
 *   tokenId: token.tokenId
 * });
 * 
 * // Update token properties
 * const update = new _HTS.Update({
 *   tokenId: token.tokenId,
 *   name: "Updated Token Name",
 *   symbol: "UEXT",
 *   treasury: "0.0.345678",
 *   adminKey: newAdminKey,
 *   kycKey: newKycKey
 * });
 * 
 * // Manage token fees
 * const fees = new _HTS.UpdateFees({
 *   tokenId: token.tokenId,
 *   fixedFees: [{
 *     amount: "1",
 *     tokenId: "0.0.123456"
 *   }],
 *   fractionalFees: [{
 *     numerator: 1,
 *     denominator: 100,
 *     minimumAmount: "1",
 *     maximumAmount: "100"
 *   }]
 * });
 * 
 * // Freeze token transfers
 * const freeze = new _HTS.Freeze({
 *   tokenId: token.tokenId,
 *   accountId: "0.0.789012"
 * });
 * 
 * // Manage KYC status
 * const kyc = new _HTS.KYC({
 *   tokenId: token.tokenId,
 *   accountId: "0.0.789012",
 *   grantKyc: true
 * });
 * 
 * // Perform atomic swap
 * const swap = new _HTS.AtomicSwap({
 *   tokenId: token.tokenId,
 *   accountId: "0.0.789012",
 *   amount: "100",
 *   targetTokenId: "0.0.567890",
 *   targetAmount: "50"
 * });
 */
export namespace _HTS {
    /**
     * Token Creation Interface
     * @interface Create
     * @description Defines the structure for creating new tokens on the Hedera
     * network with comprehensive configuration options.
     * 
     * Supported Token Types:
     * - Fungible Tokens
     * - Non-Fungible Tokens (NFTs)
     * 
     * Configuration Options:
     * - Basic Properties (name, symbol, decimals)
     * - Supply Management
     * - Key Configuration
     * - Fee Structure
     * - Compliance Settings
     * - Expiration Settings
     * 
     * @example
     * // Create a fungible token with full configuration
     * const token = new Create({
     *   name: "Example Token",
     *   symbol: "EXT",
     *   decimals: 8,
     *   initialSupply: "1000000",
     *   treasury: "0.0.123456",
     *   adminKey: true,
     *   kycKey: true,
     *   freezeKey: true
     * });
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Hts.Create' })
    export class Create extends _Create {}

    /**
     * Token Association Interface
     * @interface Associate
     * @description Defines the structure for associating tokens with accounts,
     * enabling token transfers and management.
     * 
     * Key Features:
     * - Account-Token Linking
     * - Transfer Enablement
     * - Compliance Verification
     * - Auto-Association Support
     * 
     * @example
     * // Associate token with account
     * const association = new Associate({
     *   accountId: "0.0.123456",
     *   tokenId: "0.0.789012"
     * });
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Hts.Associate' })
    export class Associate extends _Associate {}

    /**
     * Token Dissociation Interface
     * @interface Dissociate
     * @description Defines the structure for removing token associations from
     * accounts, preventing further token operations.
     * 
     * Key Features:
     * - Account-Token Unlinking
     * - Balance Verification
     * - Compliance Checking
     * - Auto-Dissociation Support
     * 
     * @example
     * // Dissociate token from account
     * const dissociation = new Dissociate({
     *   accountId: "0.0.123456",
     *   tokenId: "0.0.789012"
     * });
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Hts.Dissociate' })
    export class Dissociate extends _Dissociate {}

    /**
     * Token Update Interface
     * @interface Update
     * @description Defines the structure for modifying existing token properties
     * and configurations.
     * 
     * Updatable Properties:
     * - Token Name
     * - Token Symbol
     * - Treasury Account
     * - Admin Key
     * - KYC Key
     * - Freeze Key
     * - Wipe Key
     * - Supply Key
     * - Fee Schedule Key
     * - Pause Key
     * 
     * @example
     * // Update token properties
     * const update = new Update({
     *   tokenId: "0.0.123456",
     *   name: "Updated Token",
     *   symbol: "UTKN",
     *   treasury: "0.0.789012"
     * });
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Hts.Update' })
    export class Update extends _Update {}

    /**
     * Token Fee Update Interface
     * @interface UpdateFees
     * @description Defines the structure for modifying token fee configurations
     * and schedules.
     * 
     * Fee Types:
     * - Fixed Fees
     * - Fractional Fees
     * - Royalty Fees
     * - Custom Fee Schedules
     * 
     * @example
     * // Update token fees
     * const feeUpdate = new UpdateFees({
     *   tokenId: "0.0.123456",
     *   fixedFees: [{
     *     amount: "10",
     *     collector: "0.0.789012"
     *   }]
     * });
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Hts.UpdateFees' })
    export class UpdateFees extends _UpdateFees {}

    /**
     * Token Freeze Interface
     * @interface Freeze
     * @description Defines the structure for freezing token transfers for
     * specific accounts.
     * 
     * Key Features:
     * - Account-Level Freezing
     * - Compliance Management
     * - Transfer Prevention
     * - Status Tracking
     * 
     * @example
     * // Freeze token transfers
     * const freeze = new Freeze({
     *   tokenId: "0.0.123456",
     *   accountId: "0.0.789012"
     * });
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Hts.Freeze' })
    export class Freeze extends _Freeze {}

    /**
     * Token Unfreeze Interface
     * @interface Unfreeze
     * @description Defines the structure for enabling token transfers for
     * previously frozen accounts.
     * 
     * Key Features:
     * - Account-Level Unfreezing
     * - Compliance Verification
     * - Transfer Enablement
     * - Status Updates
     * 
     * @example
     * // Unfreeze token transfers
     * const unfreeze = new Unfreeze({
     *   tokenId: "0.0.123456",
     *   accountId: "0.0.789012"
     * });
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Hts.Unfreeze' })
    export class Unfreeze extends _Unfreeze {}

    /**
     * Token KYC Interface
     * @interface KYC
     * @description Defines the structure for managing Know Your Customer (KYC)
     * compliance status for token holders.
     * 
     * Key Features:
     * - KYC Status Management
     * - Compliance Tracking
     * - Account Verification
     * - Regulatory Reporting
     * 
     * @example
     * // Grant KYC status
     * const kyc = new KYC({
     *   tokenId: "0.0.123456",
     *   accountId: "0.0.789012",
     *   grantKyc: true
     * });
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Hts.KYC' })
    export class KYC extends _KYC {}

    /**
     * Fungible Token Operations
     * @namespace FungibleToken
     * @description Provides specialized operations for fungible tokens including
     * minting, burning, and transfers.
     * 
     * Key Features:
     * - Token Minting
     * - Token Burning
     * - Balance Management
     * - Supply Control
     * 
     * @example
     * // Mint new tokens
     * const mint = new FungibleToken.Mint({
     *   tokenId: "0.0.123456",
     *   amount: "1000000"
     * });
     */
    export import FungibleToken = _FungibleToken

    /**
     * Non-Fungible Token Operations
     * @namespace Nft
     * @description Provides specialized operations for non-fungible tokens (NFTs)
     * including minting, burning, and metadata management.
     * 
     * Key Features:
     * - NFT Minting
     * - Metadata Management
     * - Token Burning
     * - Transfer Control
     * 
     * @example
     * // Mint new NFT
     * const nft = new Nft.Mint({
     *   tokenId: "0.0.123456",
     *   metadata: "ipfs://QmXxx..."
     * });
     */
    export import Nft = _Nft

    /**
     * Fees operations namespace
     * @namespace Fees
     * @description Provides specialized operations for managing token fees,
     * including custom fee configurations and fee schedules.
     */
    export import Fees = _Fees

    /**
     * Atomic Swap Interface
     * @interface AtomicSwap
     * @description Defines the structure for performing atomic token swaps
     * between parties with guaranteed execution or complete rollback.
     * 
     * Key Features:
     * - Atomic Execution
     * - Multi-Token Support
     * - Cross-Party Validation
     * - Rollback Protection
     * 
     * @example
     * // Perform atomic swap
     * const swap = new AtomicSwap({
     *   tokenId: "0.0.123456",
     *   amount: "100",
     *   targetTokenId: "0.0.789012",
     *   targetAmount: "50"
     * });
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Hts.AtomicSwap' })
    export class AtomicSwap extends _AtomicSwap {}
}