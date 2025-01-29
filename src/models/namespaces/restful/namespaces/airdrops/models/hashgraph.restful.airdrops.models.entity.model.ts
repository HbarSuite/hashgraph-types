import { ApiSchema } from "@hsuite/nestjs-swagger";
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';

/**
 * @file entity.model.ts
 * @class _Entity
 * @description Represents an airdrop entity in the Hashgraph network. This class defines
 * the structure for token distribution events (airdrops), including details about the
 * tokens being distributed, the sender, receiver, and timing information.
 * @implements {IHashgraph.IRestful.IAirdrops.IEntity}
 * @category Hashgraph
 * @subcategory Restful
 * @since 2.0.0
 * @see {@link _Airdrops} for the parent namespace
 * 
 * @example
 * // Create a new fungible token airdrop
 * const airdrop = new _Entity({
 *   amount: 100,
 *   token_id: "0.0.1234",
 *   sender_id: "0.0.5678",
 *   receiver_id: "0.0.9012",
 *   serial_number: null,
 *   timestamp: {
 *     from: "2023-01-01T00:00:00.000Z",
 *     to: "2023-12-31T23:59:59.999Z"
 *   }
 * });
 */
@ApiSchema({ name: 'Hashgraph.Restful.Airdrops.Entity' })
export class _Entity implements IHashgraph.IRestful.IAirdrops.IEntity {
    /**
     * Amount of tokens to be airdropped
     * @type {number}
     * @description The quantity of tokens to be distributed in this airdrop
     * @remarks For fungible tokens, this represents the token amount in the smallest denomination.
     * For NFTs, this should be 1.
     */
    amount: number;

    /**
     * Account ID of the receiver
     * @type {string}
     * @description The Hedera account ID that will receive the airdropped tokens
     * @remarks Must be a valid Hedera account ID
     */
    receiver_id: string;

    /**
     * Account ID of the sender
     * @type {string}
     * @description The Hedera account ID that will send/distribute the tokens
     * @remarks Must be a valid Hedera account ID with sufficient token balance
     */
    sender_id: string;

    /**
     * Serial number for NFTs (null for fungible tokens)
     * @type {number | null}
     * @description The specific NFT serial number to be airdropped, if applicable
     * @remarks Should be null for fungible token airdrops
     */
    serial_number: number | null;

    /**
     * Timestamp range of the airdrop
     * @type {{ from: string; to: string }}
     * @description The time window during which the airdrop is valid
     * @remarks Both timestamps should be in ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ)
     */
    timestamp: {
        from: string;
        to: string;
    };

    /**
     * Token ID being airdropped
     * @type {string}
     * @description The Hedera token ID of the tokens being distributed
     * @remarks Must be a valid Hedera token ID
     */
    token_id: string;

    /**
     * Creates an instance of _Entity
     * @constructor
     * @param {IHashgraph.IRestful.IAirdrops.IEntity} data - Initial data to create the airdrop entity
     * @remarks All fields are required and will be directly assigned from the input data
     */
    constructor(data: IHashgraph.IRestful.IAirdrops.IEntity) {
        this.amount = data.amount;
        this.receiver_id = data.receiver_id;
        this.sender_id = data.sender_id;
        this.serial_number = data.serial_number;
        this.timestamp = data.timestamp;
        this.token_id = data.token_id;
    }
}
