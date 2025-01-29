import { KeyList, PrivateKey } from "@hashgraph/sdk"

/**
 * Private Key List Interface
 * @export
 * @interface _IPrivateKeyList
 * @namespace IHashgraph._IPrivateKeyList
 * @description Represents a list of private keys and their corresponding key list.
 * This interface is used for managing multiple keys in scenarios such as multi-signature
 * accounts or threshold key management.
 * @property {PrivateKey[]} privateKeys - Array of private keys associated with this key list
 * @property {KeyList} keyList - KeyList object containing corresponding public keys
 * @since 2.0.0
 * @category Hashgraph
 * @public
 * @remarks
 * The privateKeys array and keyList should maintain corresponding indices.
 * This interface is commonly used in multi-signature scenarios and threshold key operations.
 * @see KeyList
 * @see PrivateKey
 * @example
 * ```typescript
 * const privateKeyList: _IPrivateKeyList = {
 *   privateKeys: [PrivateKey.generate()],
 *   keyList: new KeyList()
 * };
 * ```
 */
export interface _IPrivateKeyList {
    /**
     * Array of private keys
     * @property {PrivateKey[]} privateKeys
     * @memberof _IPrivateKeyList
     * @type {PrivateKey[]}
     * @description An array containing the private keys associated with this key list.
     * Each private key should have a corresponding public key in the keyList.
     * @required
     * @since 2.0.0
     * @throws {Error} If any private key in the array is invalid
     * @remarks
     * - Private keys should be securely stored and never exposed
     * - The array order should correspond to the public keys in keyList
     * - Each key should be properly initialized and valid
     * @see PrivateKey
     * @example
     * ```typescript
     * privateKeys: [PrivateKey.generate()]
     * ```
     */
    privateKeys: PrivateKey[]

    /**
     * Key list object
     * @property {KeyList} keyList
     * @memberof _IPrivateKeyList
     * @type {KeyList}
     * @description A KeyList object representing the public keys corresponding to the private keys.
     * Used for signature verification and key management.
     * @required
     * @since 2.0.0
     * @throws {Error} If the KeyList is invalid or improperly configured
     * @remarks
     * - The KeyList should contain public keys in the same order as their private keys
     * - Used for threshold signatures and multi-signature operations
     * - Must be properly initialized with all required public keys
     * @see KeyList
     * @example
     * ```typescript
     * keyList: new KeyList()
     * ```
     */
    keyList: KeyList
}