import { _IChunkInfo } from './interfaces/hashgraph.commons.chunk_info.interface'
import { _IBalance } from './namespaces/balance/hashgraph.commons.balance.namespace'
import { _IKey } from './namespaces/key/hashgraph.commons.key.namespace'
import { _IStateProof } from './namespaces/state-proof/hashgraph.commons.state_proof.namespace'

/**
 * Commons Interface Namespace
 * @namespace _ICommons
 * @description Commons Interface Namespace containing various Hashgraph-related interfaces and types.
 * This namespace serves as a central location for common interfaces and types used across
 * the Hashgraph services, including cryptographic keys, balances, and state proofs.
 * @category Hashgraph
 * @subcategory Commons
 * @since 2.0.0
 * @public
 * @remarks
 * The Commons namespace provides a structured way to organize and access common
 * interfaces and types used throughout the Hashgraph ecosystem. It includes
 * essential components for cryptographic operations, balance management,
 * and state verification.
 * @example
 * ```typescript
 * import { _ICommons } from './hashgraph.commons.namespace';
 * 
 * // Access key-related types
 * const key: _ICommons.IKey.IEd25519 = {
 *   key: "ed25519PublicKey"
 * };
 * 
 * // Access balance types
 * const balance: _ICommons.IBalance = {
 *   balance: "100",
 *   tokens: []
 * };
 * ```
 */
export namespace _ICommons {
    /**
     * Key Namespace
     * @name IKey
     * @description Namespace containing interfaces and enums related to Hashgraph cryptographic keys.
     * Provides types for different key formats and cryptographic operations.
     * @type {_IKey}
     * @memberof _ICommons
     * @since 2.0.0
     * @public
     * @remarks
     * Contains definitions for various key types including ED25519 and ECDSA.
     * Essential for cryptographic operations and security features.
     * @see _IKey
     */
    export import IKey = _IKey

    /**
     * Balance Interface
     * @name IBalance
     * @description Interface representing account balance information including crypto and token balances.
     * Provides comprehensive balance tracking for both HBAR and custom tokens.
     * @type {_IBalance}
     * @memberof _ICommons
     * @since 2.0.0
     * @public
     * @remarks
     * Used for tracking and managing account balances across different token types.
     * Supports both native HBAR and custom token balance representation.
     * @see _IBalance
     */
    export import IBalance = _IBalance

    /**
     * Chunk Info Interface
     * @name IChunkInfo
     * @description Interface representing information about file chunks in Hashgraph services.
     * Used for managing large file operations and multi-part transactions.
     * @type {_IChunkInfo}
     * @memberof _ICommons
     * @since 2.0.0
     * @public
     * @remarks
     * Essential for handling large files and transactions that need to be split
     * into multiple chunks. Provides tracking and sequencing information.
     * @see _IChunkInfo
     */
    export type IChunkInfo = _IChunkInfo

    /**
     * State Proof Namespace
     * @name IStateProof
     * @description Namespace containing interfaces and types related to Hashgraph state proofs.
     * Provides structures for verifying and validating network state.
     * @type {_IStateProof}
     * @memberof _ICommons
     * @since 2.0.0
     * @public
     * @remarks
     * Used for cryptographic verification of network state and transaction validity.
     * Essential for maintaining network security and consensus.
     * @see _IStateProof
     */
    export import IStateProof = _IStateProof
}