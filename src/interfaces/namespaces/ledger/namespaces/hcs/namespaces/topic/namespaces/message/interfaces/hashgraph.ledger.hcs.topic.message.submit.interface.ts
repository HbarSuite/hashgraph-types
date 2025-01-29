import { KeyList, PublicKey, AccountId } from "@hashgraph/sdk";
import { IHashgraph } from '../../../../../../../../../hashgraph.namespace'

/**
 * @file submit.interface.ts
 * @module IHashgraph.ILedger.IHCS.ITopic.IMessage._ISubmit
 * @description Defines the interface for submitting messages to topics in Hashgraph Consensus Service (HCS)
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Message Operations
 * @subcategory Message Submission
 */

/**
 * Interface for submitting messages to Hashgraph Consensus Service topics
 * @interface _ISubmit
 * @description Defines the structure for submitting messages to an HCS topic.
 * Includes the message content, cryptographic signature, sender information,
 * and optional DAO configuration.
 * 
 * @remarks
 * Submission capabilities:
 * - Message content
 * - Cryptographic signatures
 * - Sender verification
 * - DAO integration
 * 
 * Security features:
 * - Message integrity
 * - Sender authentication
 * - Access control
 * - Governance rules
 * 
 * Requirements:
 * - Valid message
 * - Valid signature
 * - Network fees
 * - Resource limits
 * 
 * Best practices:
 * - Sign messages
 * - Verify senders
 * - Follow limits
 * - Handle errors
 * 
 * @example
 * ```typescript
 * const submitMessage: _ISubmit = {
 *   message: "Hello Hashgraph!",
 *   signature: new Uint8Array([1, 2, 3]), // Message signature
 *   sender: {
 *     key: PublicKey.fromString("..."),
 *     id: AccountId.fromString("0.0.123456")
 *   },
 *   dao: {
 *     // DAO configuration settings
 *   }
 * };
 * ```
 */
export interface _ISubmit {
    /**
     * Message content
     * @type {string}
     * @description The content of the message to be submitted to the HCS topic.
     * Can contain any string data that needs to be consensus timestamped.
     * @memberof _ISubmit
     * @required true
     * @example "Hello Hashgraph!"
     * @remarks
     * - Must not exceed maximum message size
     * - Should be properly encoded
     * - Can contain structured data
     * - May require serialization
     */
    message: string;

    /**
     * Message signature
     * @type {Uint8Array}
     * @description Cryptographic signature of the message content.
     * Used to verify message authenticity and sender identity.
     * @memberof _ISubmit
     * @required true
     * @example new Uint8Array([1, 2, 3])
     * @remarks
     * - Must be valid Ed25519 signature
     * - Should match sender's key
     * - Ensures non-repudiation
     * - Prevents tampering
     */
    signature: Uint8Array;

    /**
     * Sender information
     * @type {Object}
     * @description Configuration for the message sender, including their
     * cryptographic keys and Hedera account identifier.
     * @memberof _ISubmit
     * @property sender
     * @required false
     * @remarks
     * - Validates message origin
     * - Enables access control
     * - Supports key rotation
     * - Tracks message history
     */
    sender?: {
        /**
         * Sender's cryptographic key
         * @type {PublicKey | KeyList}
         * @description The public key or key list used to verify the sender's identity
         * and message signatures.
         * @required false
         * @remarks
         * - Supports single keys
         * - Supports key lists
         * - Enables key thresholds
         * - Facilitates rotation
         */
        key?: PublicKey | KeyList;

        /**
         * Sender's account identifier
         * @type {AccountId}
         * @description The Hedera account ID associated with the message sender.
         * Used for authentication and billing purposes.
         * @required false
         * @remarks
         * - Must be valid account
         * - Requires sufficient balance
         * - Enables fee payment
         * - Tracks ownership
         */
        id?: AccountId;
    };

    /**
     * DAO configuration
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @description Configuration settings for the Decentralized Autonomous Organization
     * associated with this message submission.
     * @memberof _ISubmit
     * @property dao
     * @required false
     * @remarks
     * - Enables governance
     * - Enforces rules
     * - Tracks proposals
     * - Manages permissions
     */
    dao?: IHashgraph.ILedger.IDAO.IConfig;
}