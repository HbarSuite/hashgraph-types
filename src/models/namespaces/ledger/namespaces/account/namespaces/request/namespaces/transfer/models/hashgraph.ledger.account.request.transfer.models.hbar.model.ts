import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';
import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";
import { IHashgraph } from '../../../../../../../../../../interfaces/hashgraph.namespace';
import { Hashgraph } from '../../../../../../../../../hashgraph.namespace';

/**
 * @fileoverview Defines the model for transferring HBAR between Hashgraph accounts
 * @module IHashgraph.ILedger.IAccount.IRequest.ITransfer.Hbar
 * @description This file contains the model definition for HBAR transfers between Hedera Hashgraph accounts
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 */

/**
 * Class representing a Hashgraph HBAR transfer request
 * @class _Hbar
 * @implements {IHashgraph.ILedger.IAccounts.IRequest.ITransfer.IHbar}
 * @description Defines the structure and validation for transferring HBAR between Hedera accounts.
 * Includes support for basic transfers as well as DAO-controlled transfers.
 * @example
 * const transfer = new _Hbar(
 *   100, // amount
 *   "0.0.12345", // from account
 *   "0.0.67890", // to account
 *   "Payment for services", // optional memo
 *   new Hashgraph.Ledger.DAO.Config({
 *     topicId: "0.0.12345",
 *     consensusTimestamp: "1234567890.123456789"
 *   }) // optional DAO config
 * );
 */
export class _Hbar implements IHashgraph.ILedger.IAccounts.IRequest.ITransfer.IHbar {
    /**
     * The amount of HBAR to transfer
     * @type {number}
     * @description Specifies the amount of HBAR cryptocurrency to transfer between accounts.
     * Must be a positive finite number.
     * @throws {Error} If amount is not a positive finite number
     * @example
     * transfer.amount = 100; // Valid
     * transfer.amount = -100; // Throws Error
     * transfer.amount = 0; // Throws Error
     * transfer.amount = Infinity; // Throws Error
     */
    @ApiProperty({
        description: 'The amount of HBAR to transfer',
        example: 100,
    })
    @IsNumber()
    @IsNotEmpty()
    amount: number;

    /**
     * The sender's account ID
     * @type {string}
     * @description The account identifier of the sender in the format "0.0.x"
     * Must be a valid non-empty string representing a Hedera account ID
     * @throws {Error} If from is not a valid string
     * @example
     * transfer.from = "0.0.12345"; // Valid
     * transfer.from = ""; // Throws Error
     * transfer.from = null; // Throws Error
     */
    @ApiProperty({
        description: 'The account ID of the sender',
        example: '0.0.12345',
    })
    @IsString()
    @IsNotEmpty()
    from: string;

    /**
     * The recipient's account ID
     * @type {string}
     * @description The account identifier of the recipient in the format "0.0.x"
     * Must be a valid non-empty string representing a Hedera account ID
     * @throws {Error} If to is not a valid string
     * @example
     * transfer.to = "0.0.67890"; // Valid
     * transfer.to = ""; // Throws Error
     * transfer.to = null; // Throws Error
     */
    @ApiProperty({
        description: 'The account ID of the receiver',
        example: '0.0.67890',
    })
    @IsString()
    @IsNotEmpty()
    to: string;

    /**
     * Optional transfer memo
     * @type {string}
     * @description An optional message or reference to attach to the transfer
     * If provided, must be a valid string
     * @throws {Error} If memo is provided but not a valid string
     * @example
     * transfer.memo = "Payment for services"; // Valid
     * transfer.memo = undefined; // Valid
     * transfer.memo = null; // Throws Error
     * transfer.memo = 123; // Throws Error
     */
    @ApiProperty({
        description: 'An optional memo to include with the transfer',
        example: 'Payment for services',
        required: false,
    })
    @IsString()
    @IsOptional()
    memo?: string;

    /**
     * Optional sender account details
     * @type {Object}
     * @property {PublicKey | KeyList} [key] - The public key or key list controlling the sender account
     * @property {AccountId} [id] - The sender's account ID in AccountId format
     * @description Additional details about the sender's account including keys and ID
     * @example
     * transfer.sender = {
     *   key: PublicKey.fromString("..."),
     *   id: AccountId.fromString("0.0.12345")
     * };
     */
    @ApiProperty({
        description: 'The sender account details',
        required: false
    })
    @IsOptional()
    sender?: {
        key?: PublicKey | KeyList;
        id?: AccountId;
    }

    /**
     * Optional DAO configuration
     * @type {Hashgraph.Ledger.DAO.Config}
     * @description Configuration for DAO-controlled transfers including topic ID and consensus timestamp
     * @example
     * transfer.dao = new Hashgraph.Ledger.DAO.Config({
     *   topicId: "0.0.12345",
     *   consensusTimestamp: "1234567890.123456789"
     * });
     */
    @ApiProperty({
        description: 'Optional DAO configuration for the HBAR transfer',
        required: false,
        type: () => Object,
        example: {
            topicId: '0.0.12345',
            consensusTimestamp: '1234567890.123456789'
        }
    })
    @IsOptional()
    dao?: Hashgraph.Ledger.DAO.Config;

    /**
     * Creates a new HBAR transfer instance
     * @constructor
     * @param {Partial<IHashgraph.ILedger.IAccounts.IRequest.ITransfer.IHbar>} data - Partial data to initialize the HBAR transfer
     * @throws {Error} If any of the parameters are invalid
     * @example
     * const transfer = new _Hbar(
     *   100,
     *   "0.0.12345",
     *   "0.0.67890",
     *   "Payment for services",
     *   new Hashgraph.Ledger.DAO.Config({
     *     topicId: "0.0.12345",
     *     consensusTimestamp: "1234567890.123456789"
     *   })
     * );
     */
    constructor(data: IHashgraph.ILedger.IAccounts.IRequest.ITransfer.IHbar) {
        Object.assign(this, data);

        if (!Number.isFinite(this.amount) || this.amount <= 0) {
            throw new Error('Invalid amount: Must be a positive number');
        }

        if (!this.from || typeof this.from !== 'string') {
            throw new Error('Invalid from: Must be a non-empty string');
        }

        if (!this.to || typeof this.to !== 'string') {
            throw new Error('Invalid to: Must be a non-empty string');
        }

        if (this.memo !== undefined && typeof this.memo !== 'string') {
            throw new Error('Invalid memo: Must be a string if provided');
        }
    }
}