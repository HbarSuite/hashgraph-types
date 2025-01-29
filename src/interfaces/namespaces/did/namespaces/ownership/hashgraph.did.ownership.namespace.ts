import { _IClaim } from './interfaces/hashgraph.did.ownership.claim.interface';
import { _IMultiBase } from './interfaces/hashgraph.did.ownership.multibase.interface';
import { _IRegister } from './interfaces/hashgraph.did.ownership.register.interface';

/**
 * @file ownership.namespace.ts
 * @module IHashgraph._IDID._IOwnership
 * @description DID Ownership Interface Namespace for Hashgraph. Provides comprehensive
 * types and interfaces for managing DID ownership, including claiming, registering,
 * and transferring ownership rights. Implements the W3C DID Core specification's
 * ownership and control requirements.
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Hashgraph
 * @subcategory DID
 * @see {@link https://www.w3.org/TR/did-core/#control}
 * @remarks
 * This namespace implements the ownership and control aspects of DIDs, ensuring
 * proper management of DID ownership through cryptographic proofs and
 * verifiable claims.
 */
export namespace _IOwnership {
    /**
     * Multibase encoding interface
     * @type {_IMultiBase}
     * @description Defines the structure for handling multibase-encoded
     * cryptographic keys and materials, supporting:
     * - Key encoding and decoding
     * - Format validation
     * - Encoding scheme identification
     * - Cross-platform compatibility
     * @see {@link https://github.com/multiformats/multibase}
     * @remarks
     * - Implements multibase specification
     * - Ensures encoding consistency
     * - Supports multiple formats
     * - Critical for key management
     * @example
     * ```typescript
     * const multibase: IMultiBase = {
     *   encoding: "base58btc",
     *   value: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
     * };
     * ```
     */
    export type IMultiBase = _IMultiBase;

    /**
     * DID ownership claim interface
     * @type {_IClaim}
     * @description Defines the structure for making and verifying ownership
     * claims over DIDs, including:
     * - Claim assertions
     * - Proof requirements
     * - Verification methods
     * - Claim metadata
     * @remarks
     * - Supports ownership verification
     * - Enables claim validation
     * - Maintains claim history
     * - Ensures claim integrity
     * @example
     * ```typescript
     * const claim: IClaim = {
     *   did: "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",
     *   proof: {
     *     type: "Ed25519Signature2020",
     *     verificationMethod: "#key-1",
     *     signature: "base64Signature..."
     *   },
     *   timestamp: "2023-12-23T10:42:00Z"
     * };
     * ```
     */
    export type IClaim = _IClaim;

    /**
     * DID ownership registration interface
     * @type {_IRegister}
     * @description Defines the structure for registering and managing DID
     * ownership on the Hashgraph network, including:
     * - Initial ownership registration
     * - Ownership transfer mechanisms
     * - Control delegation
     * - Registration metadata
     * @remarks
     * - Ensures proper registration
     * - Validates ownership rights
     * - Supports ownership transfer
     * - Maintains ownership records
     * @example
     * ```typescript
     * const register: IRegister = {
     *   did: "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",
     *   owner: {
     *     id: "did:hedera:mainnet:ownerDID",
     *     type: "Ed25519VerificationKey2020",
     *     publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
     *   },
     *   timestamp: "2023-12-23T10:42:00Z"
     * };
     * ```
     */
    export type IRegister = _IRegister;
}