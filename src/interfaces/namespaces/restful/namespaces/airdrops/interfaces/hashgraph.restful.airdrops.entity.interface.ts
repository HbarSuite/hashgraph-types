/**
 * @file hashgraph.restful.airdrops.entity.interface.ts
 * @namespace IHashgraph.IRestful._IAirdrops
 * @description Defines the structure for individual airdrop operations in the Hedera REST API
 */

/**
 * Interface representing an individual airdrop operation
 * @interface _IEntity
 * @description Defines the structure of a single token airdrop operation,
 * including details about the token, participants, and temporal constraints
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * const airdrop: _IEntity = {
 *   amount: 1000,
 *   receiver_id: "0.0.123456",
 *   sender_id: "0.0.789012",
 *   token_id: "0.0.345678",
 *   serial_number: null,
 *   timestamp: {
 *     from: "2023-01-01T00:00:00.000Z",
 *     to: "2023-12-31T23:59:59.999Z"
 *   }
 * };
 * ```
 */
export interface _IEntity {
    /**
     * Amount of tokens to be airdropped
     * @property {number} amount
     * @description The quantity of tokens to be distributed in the airdrop
     * @type {number}
     * @memberof _IEntity
     * @required
     */
    amount: number;

    /**
     * Account ID of the receiver
     * @property {string} receiver_id
     * @description The Hedera account ID of the airdrop recipient in the format 0.0.x
     * @type {string}
     * @memberof _IEntity
     * @required
     */
    receiver_id: string;

    /**
     * Account ID of the sender
     * @property {string} sender_id
     * @description The Hedera account ID of the airdrop distributor in the format 0.0.x
     * @type {string}
     * @memberof _IEntity
     * @required
     */
    sender_id: string;

    /**
     * Serial number for NFTs
     * @property {number | null} serial_number
     * @description The unique serial number for NFT airdrops, or null for fungible token airdrops
     * @type {number | null}
     * @memberof _IEntity
     * @required
     */
    serial_number: number | null;

    /**
     * Timestamp range of the airdrop
     * @property {Object} timestamp
     * @description The time window during which the airdrop is valid
     * @property {string} timestamp.from - Start time of the airdrop validity period (ISO 8601)
     * @property {string} timestamp.to - End time of the airdrop validity period (ISO 8601)
     * @type {{ from: string; to: string }}
     * @memberof _IEntity
     * @required
     */
    timestamp: {
        from: string;
        to: string;
    };

    /**
     * Token ID being airdropped
     * @property {string} token_id
     * @description The Hedera token ID of the asset being airdropped in the format 0.0.x
     * @type {string}
     * @memberof _IEntity
     * @required
     */
    token_id: string;
} 