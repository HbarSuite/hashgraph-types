/**
 * Key Type Enumeration
 * @export
 * @enum {string}
 * @namespace IHashgraph.ICommons.IKey._TypeEnum
 * @description Defines the types of cryptographic keys supported in the Hashgraph network.
 * This enumeration specifies the various cryptographic algorithms and formats that can be
 * used for keys within the Hedera network, ensuring proper key handling and validation.
 * @since 2.0.0
 * @category Hashgraph
 * @subcategory Key
 * @public
 * @remarks
 * The supported key types are carefully selected to provide a balance of security,
 * performance, and compatibility. Each type has specific characteristics and use cases,
 * and the choice of key type can affect transaction processing and security properties.
 * @see IHashgraph.ICommons.IKey._IEntity
 * @example
 * ```typescript
 * const keyType: _TypeEnum = _TypeEnum.Ed25519;
 * ```
 */
export enum _TypeEnum {
    /**
     * ECDSA key using the secp256k1 curve
     * @description Represents an ECDSA key that uses the secp256k1 elliptic curve, commonly used in blockchain applications.
     * This key type is compatible with Ethereum and other blockchain platforms.
     * @memberof _TypeEnum
     * @since 2.0.0
     * @remarks
     * - Used in Ethereum compatibility scenarios
     * - 256-bit security level
     * - Compatible with Bitcoin and other blockchain systems
     * - Suitable for cross-chain operations
     * @example _TypeEnum.EcdsaSecp256K1
     */
    EcdsaSecp256K1 = 'ECDSA_SECP256K1',

    /**
     * Ed25519 key
     * @description Represents an Ed25519 cryptographic key, known for its high security and performance.
     * Provides fast signing operations and strong security guarantees.
     * @memberof _TypeEnum
     * @since 2.0.0
     * @remarks
     * - High-performance signature verification
     * - 128-bit security level
     * - Small key and signature sizes
     * - Recommended for most Hedera operations
     * @example _TypeEnum.Ed25519
     */
    Ed25519 = 'ED25519',

    /**
     * Protobuf encoded key
     * @description Represents a key that is encoded using Protocol Buffers format.
     * Used for specialized cases where complex key structures need to be serialized.
     * @memberof _TypeEnum
     * @since 2.0.0
     * @remarks
     * - Used for complex key structures
     * - Enables efficient serialization
     * - Supports backward compatibility
     * - Suitable for advanced key management scenarios
     * @example _TypeEnum.ProtobufEncoded
     */
    ProtobufEncoded = 'PROTOBUF_ENCODED'
}