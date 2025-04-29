import { KeyList, PrivateKey } from "@hashgraph/sdk"
import { ApiProperty } from "@hsuite/nestjs-swagger"
import { IHashgraph } from '../../interfaces/hashgraph.namespace';

/**
 * @file hashgraph.models.private-keylist.model.ts
 * @module @hashgraph/sdk
 * @description Defines the model for managing private key collections in the Hashgraph Network.
 * This model represents a secure key management system, including:
 * - Private key storage
 * - Public key mapping
 * - Key validation
 * - Signature management
 * @category Models
 * @subcategory Cryptography
 * @since 2.0.0
 */

/**
 * Private Key List Model
 * @class _PrivateKeyList
 * @implements {IHashgraph.IPrivateKeyList}
 * @description Represents a secure collection of cryptographic keys.
 * This class provides:
 * - Private key management
 * - Public key correlation
 * - Key validation
 * - Signature support
 * Used for managing multi-signature accounts and transactions.
 * @category Models
 * @subcategory Cryptography
 * @public
 * 
 * @example
 * ```typescript
 * // Example of creating a basic private key list
 * const privateKey1 = PrivateKey.generate();
 * const privateKey2 = PrivateKey.generate();
 * const keyList = new KeyList([
 *   privateKey1.publicKey,
 *   privateKey2.publicKey
 * ]);
 * 
 * const basicKeyList = new _PrivateKeyList(
 *   [privateKey1, privateKey2],
 *   keyList
 * );
 * 
 * // Example of validating a private key list
 * const validateKeyList = (keyList: _PrivateKeyList): boolean => {
 *   // Check if private keys array exists and is not empty
 *   if (!Array.isArray(keyList.privateKeys) || keyList.privateKeys.length === 0) {
 *     return false;
 *   }
 * 
 *   // Verify KeyList instance
 *   if (!(keyList.keyList instanceof KeyList)) {
 *     return false;
 *   }
 * 
 *   // Check key count match
 *   if (keyList.privateKeys.length !== keyList.keyList.toArray().length) {
 *     return false;
 *   }
 * 
 *   // Verify public key derivation
 *   return keyList.privateKeys.every((privateKey, index) => {
 *     const derivedPublicKey = privateKey.publicKey;
 *     const storedPublicKey = keyList.keyList.toArray()[index];
 *     return derivedPublicKey.toStringRaw() === storedPublicKey.toStringRaw();
 *   });
 * };
 * 
 * // Example of using the key list for signing
 * const signMessage = async (
 *   keyList: _PrivateKeyList,
 *   message: Uint8Array
 * ): Promise<Uint8Array[]> => {
 *   return Promise.all(
 *     keyList.privateKeys.map(privateKey =>
 *       privateKey.sign(message)
 *     )
 *   );
 * };
 * ```
 */
export class _PrivateKeyList implements IHashgraph.IPrivateKeyList {
    /**
     * Private Keys Collection
     * @type {PrivateKey[]}
     * @description Array of Ed25519 private keys for signing.
     * Properties:
     * - Required field
     * - Must be non-empty
     * - Used for signing
     * - Security sensitive
     * - Never expose
     * @memberof _PrivateKeyList
     * @public
     * @since 2.0.0
     */
    @ApiProperty({
        description: "Array of private keys associated with this key list",
        type: () => [PrivateKey],
    })
    privateKeys: PrivateKey[];

    /**
     * Public Key List
     * @type {KeyList}
     * @description Collection of corresponding public keys.
     * Properties:
     * - Required field
     * - Must match private keys
     * - Used for verification
     * - Can be shared
     * - Network visible
     * @memberof _PrivateKeyList
     * @public
     * @since 2.0.0
     */
    @ApiProperty({
        description: "KeyList object representing the public keys corresponding to the private keys",
        type: () => KeyList,
    })
    keyList: KeyList;

    /**
     * Creates a new private key list instance.
     * @constructor
     * @param {IHashgraph.IPrivateKeyList} data - The data to initialize the instance
     * @throws {Error} If privateKeys is not a non-empty array
     * @throws {Error} If keyList is not a valid KeyList instance
     * @throws {Error} If private and public key counts don't match
     * @memberof _PrivateKeyList
     * @public
     * @since 2.0.0
     * 
     * @example
     * ```typescript
     * // Create a basic key list
     * const privateKey1 = PrivateKey.generate();
     * const privateKey2 = PrivateKey.generate();
     * const keyList = new KeyList([
     *   privateKey1.publicKey,
     *   privateKey2.publicKey
     * ]);
     * 
     * const keyListInstance = new _PrivateKeyList(
     *   [privateKey1, privateKey2],
     *   keyList
     * );
     * 
     * // Verify key list integrity
     * const publicKeys = keyList.toArray();
     * const keysMatch = privateKeys.every((privateKey, index) =>
     *   privateKey.publicKey.toStringRaw() === publicKeys[index].toStringRaw()
     * );
     * console.log(`Keys match: ${keysMatch}`);
     * ```
     */
    constructor(data: IHashgraph.IPrivateKeyList) {
        // Validate that privateKeys is a non-empty array
        if (!Array.isArray(data.privateKeys) || data.privateKeys.length === 0) {
            throw new Error('Invalid privateKeys: must be a non-empty array of PrivateKey objects')
        }
        
        // Ensure keyList is a valid KeyList instance
        if (!(data.keyList instanceof KeyList)) {
            throw new Error('Invalid keyList: must be an instance of KeyList')
        }
        
        // Verify that the number of private keys matches the number of public keys
        if (data.privateKeys.length !== data.keyList.toArray().length) {
            throw new Error('Mismatch between number of private keys and public keys in keyList')
        }
    }
}