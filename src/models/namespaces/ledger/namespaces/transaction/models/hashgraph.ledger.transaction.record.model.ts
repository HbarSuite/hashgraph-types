import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';
import {
    TransactionReceipt,
    Timestamp,
    TransactionId,
    Hbar,
    Transfer,
    ContractFunctionResult,
    ScheduleId,
    AssessedCustomFee,
    PublicKey,
    EvmAddress,
    HbarAllowance,
    TokenAllowance,
    TokenNftAllowance,
    TokenId,
    AccountId,
    NftId,
    TransactionRecord
} from '@hashgraph/sdk';
import { ApiProperty } from '@nestjs/swagger';
import Long from 'long';

/**
 * @file hashgraph.ledger.transaction.record.model.ts
 * @module IHashgraph.ILedger.ITransaction._Record
 * @description Model representing a transaction record in the Hedera Hashgraph network.
 * A transaction record contains detailed information about a transaction's execution,
 * including its status, fees, transfers, and any entities created or modified.
 * @category Models
 * @subcategory Transaction
 * @since 2.0.0
 * @public
 * 
 * @example
 * ```typescript
 * const record = new _Record(transactionRecord);
 * console.log(record.transactionFee.toString());
 * console.log(record.receipt.status.toString());
 * ```
 */
export class _Record implements IHashgraph.ILedger.ITransaction.IRecord {
    /**
     * The status (reach consensus, or failed, or is unknown) and the ID of
     * any new account/file/instance created.
     * 
     * @type {TransactionReceipt}
     * @memberof _Record
     * @public
     * @description Contains the transaction status and IDs of any entities created
     */
    @ApiProperty({ 
        description: 'The status and ID of any new account/file/instance created',
        type: Object,
        example: {
            status: 'SUCCESS',
            accountId: '0.0.1234'
        }
    })
    receipt: TransactionReceipt;

    /**
     * The hash of the Transaction that executed (not the hash of any Transaction that failed
     * for having a duplicate TransactionID).
     * 
     * @type {Uint8Array}
     * @memberof _Record
     * @public
     * @description Cryptographic hash of the executed transaction
     */
    @ApiProperty({ 
        description: 'The hash of the executed transaction',
        type: String,
        format: 'byte',
        example: '0x1a2b3c4d...'
    })
    transactionHash: Uint8Array;

    /**
     * The consensus timestamp (or null if didn't reach consensus yet).
     * 
     * @type {Timestamp}
     * @memberof _Record
     * @public
     * @description The time at which the network reached consensus on this transaction
     */
    @ApiProperty({ 
        description: 'The consensus timestamp of the transaction',
        type: Object,
        example: {
            seconds: 1634325282,
            nanos: 134000000
        }
    })
    consensusTimestamp: Timestamp;

    /**
     * The ID of the transaction this record represents.
     * 
     * @type {TransactionId}
     * @memberof _Record
     * @public
     * @description Unique identifier for this transaction
     */
    @ApiProperty({ 
        description: 'The ID of the transaction',
        type: String,
        example: '0.0.1234@1634325282.134000000'
    })
    transactionId: TransactionId;

    /**
     * The memo that was submitted as part of the transaction (max 100 bytes).
     * 
     * @type {string}
     * @memberof _Record
     * @public
     * @description Optional user-defined note or description attached to the transaction
     */
    @ApiProperty({ 
        description: 'The transaction memo (max 100 bytes)',
        type: String,
        example: 'Transfer to Alice',
        maxLength: 100
    })
    transactionMemo: string;

    /**
     * The actual transaction fee charged,
     * not the original transactionFee value from TransactionBody.
     * 
     * @type {Hbar}
     * @memberof _Record
     * @public
     * @description The fee in hbars that was charged for this transaction
     */
    @ApiProperty({ 
        description: 'The actual transaction fee charged',
        type: String,
        example: '0.1 ℏ'
    })
    transactionFee: Hbar;

    /**
     * All hbar transfers as a result of this transaction, such as fees, or transfers performed
     * by the transaction, or by a smart contract it calls, or by the creation of threshold
     * records that it triggers.
     * 
     * @type {Transfer[]}
     * @memberof _Record
     * @public
     * @description List of all hbar transfers that occurred during this transaction
     */
    @ApiProperty({ 
        description: 'All hbar transfers resulting from this transaction',
        type: Array,
        example: [
            { accountId: '0.0.1234', amount: '10' },
            { accountId: '0.0.5678', amount: '-10' }
        ]
    })
    transfers: Transfer[];

    /**
     * Record of the value returned by the smart contract function or constructor.
     * 
     * @type {ContractFunctionResult | null}
     * @memberof _Record
     * @public
     * @description Contains the output and effects of a smart contract execution
     */
    @ApiProperty({ 
        description: 'The result of a smart contract function or constructor',
        type: Object,
        nullable: true,
        example: {
            contractId: '0.0.1234',
            gasUsed: 50000,
            bloom: '0x...',
            logs: []
        }
    })
    contractFunctionResult: ContractFunctionResult | null;

    /**
     * All the token transfers from this account
     * 
     * @type {Map<TokenId, Map<AccountId, number>>}
     * @memberof _Record
     * @public
     * @description Nested map of token transfers organized by token ID and account ID
     */
    @ApiProperty({ 
        description: 'All token transfers from this account',
        type: Object,
        example: {
            '0.0.1000': {
                '0.0.1234': 100,
                '0.0.5678': -100
            }
        }
    })
    tokenTransfers: Map<TokenId, Map<AccountId, number>>;

    /**
     * All the token transfers from this account
     * 
     * @type {Array<{tokenId: TokenId, accountId: AccountId, amount: number}>}
     * @memberof _Record
     * @public
     * @description Flattened list of all token transfers for easier processing
     */
    @ApiProperty({ 
        description: 'List of all token transfers from this account',
        type: Array,
        example: [
            { tokenId: '0.0.1000', accountId: '0.0.1234', amount: 100 },
            { tokenId: '0.0.1000', accountId: '0.0.5678', amount: -100 }
        ]
    })
    tokenTransfersList: Array<{
        tokenId: TokenId;
        accountId: AccountId;
        amount: number;
    }>;

    /**
     * Reference to the scheduled transaction ID that this transaction record represent
     * 
     * @type {ScheduleId | null}
     * @memberof _Record
     * @public
     * @description ID of the schedule if this was a scheduled transaction
     */
    @ApiProperty({ 
        description: 'Reference to the scheduled transaction ID',
        type: String,
        nullable: true,
        example: '0.0.2345'
    })
    scheduleRef: ScheduleId | null;

    /**
     * All custom fees that were assessed during a CryptoTransfer, and must be paid if the
     * transaction status resolved to SUCCESS
     * 
     * @type {AssessedCustomFee[]}
     * @memberof _Record
     * @public
     * @description List of all custom fees that were charged during this transaction
     */
    @ApiProperty({ 
        description: 'All custom fees assessed during the transaction',
        type: Array,
        example: [
            {
                amount: 5,
                tokenId: '0.0.1000',
                feeCollectorAccountId: '0.0.9876'
            }
        ]
    })
    assessedCustomFees: AssessedCustomFee[];

    /**
     * All NFT transfers from this account
     * 
     * @type {Map<TokenId, Map<AccountId, NftId[]>>}
     * @memberof _Record
     * @public
     * @description Nested map of NFT transfers organized by token ID and account ID
     */
    @ApiProperty({ 
        description: 'All NFT transfers from this account',
        type: Object,
        example: {
            '0.0.1000': {
                '0.0.1234': ['0.0.1000/1', '0.0.1000/2'],
                '0.0.5678': ['0.0.1000/3']
            }
        }
    })
    nftTransfers: Map<TokenId, Map<AccountId, NftId[]>>;

    /**
     * All token associations implicitly created while handling this transaction
     * 
     * @type {Array<{tokenId: TokenId, accountId: AccountId}>}
     * @memberof _Record
     * @public
     * @description List of token associations that were automatically created
     */
    @ApiProperty({ 
        description: 'All token associations created during the transaction',
        type: Array,
        example: [
            { tokenId: '0.0.1000', accountId: '0.0.1234' }
        ]
    })
    automaticTokenAssociations: Array<{
        tokenId: TokenId;
        accountId: AccountId;
    }>;

    /**
     * In the record of an internal transaction, the consensus timestamp of the user
     * transaction that spawned it.
     * 
     * @type {Timestamp | null}
     * @memberof _Record
     * @public
     * @description For child transactions, the timestamp of the parent transaction
     */
    @ApiProperty({ 
        description: 'Consensus timestamp of the parent transaction',
        type: Object,
        nullable: true,
        example: {
            seconds: 1634325282,
            nanos: 134000000
        }
    })
    parentConsensusTimestamp: Timestamp | null;

    /**
     * In the record of an internal CryptoCreate transaction triggered by a user
     * transaction with a (previously unused) alias, the new account's alias.
     * 
     * @type {PublicKey | null}
     * @memberof _Record
     * @public
     * @description The alias public key for a newly created account
     */
    @ApiProperty({ 
        description: 'The new account\'s alias key',
        type: String,
        nullable: true,
        example: '302a300506032b6570032100e0c8ec2758a5879ffac226a13c0c516b799e72e35141a0dd828f94d37988a4b7'
    })
    aliasKey: PublicKey | null;

    /**
     * The records of processing all consensus transaction with the same id as the distinguished
     * record above, in chronological order.
     * 
     * @type {_Record[]}
     * @memberof _Record
     * @public
     * @description Records of duplicate transactions with the same transaction ID
     */
    @ApiProperty({ 
        description: 'Records of all consensus transactions with the same ID',
        type: Array,
        isArray: true
    })
    duplicates: _Record[];

    /**
     * The records of processing all child transaction spawned by the transaction with the given
     * top-level id, in consensus order. Always empty if the top-level status is UNKNOWN.
     * 
     * @type {_Record[]}
     * @memberof _Record
     * @public
     * @description Records of child transactions spawned by this transaction
     */
    @ApiProperty({ 
        description: 'Records of all child transactions',
        type: Array,
        isArray: true
    })
    children: _Record[];

    /**
     * Hbar allowance adjustments resulting from this transaction
     * 
     * @deprecated
     * @type {HbarAllowance[]}
     * @memberof _Record
     * @public
     * @description Changes to hbar allowances that occurred in this transaction
     */
    @ApiProperty({ 
        description: 'Hbar allowance adjustments (deprecated)',
        type: Array,
        deprecated: true,
        example: [
            { owner: '0.0.1234', spender: '0.0.5678', amount: '10' }
        ]
    })
    hbarAllowanceAdjustments: HbarAllowance[];

    /**
     * Token allowance adjustments resulting from this transaction
     * 
     * @deprecated
     * @type {TokenAllowance[]}
     * @memberof _Record
     * @public
     * @description Changes to token allowances that occurred in this transaction
     */
    @ApiProperty({ 
        description: 'Token allowance adjustments (deprecated)',
        type: Array,
        deprecated: true,
        example: [
            { owner: '0.0.1234', spender: '0.0.5678', tokenId: '0.0.1000', amount: 100 }
        ]
    })
    tokenAllowanceAdjustments: TokenAllowance[];

    /**
     * NFT allowance adjustments resulting from this transaction
     * 
     * @deprecated
     * @type {TokenNftAllowance[]}
     * @memberof _Record
     * @public
     * @description Changes to NFT allowances that occurred in this transaction
     */
    @ApiProperty({ 
        description: 'NFT allowance adjustments (deprecated)',
        type: Array,
        deprecated: true,
        example: [
            { owner: '0.0.1234', spender: '0.0.5678', tokenId: '0.0.1000', serialNumbers: [1, 2, 3] }
        ]
    })
    nftAllowanceAdjustments: TokenNftAllowance[];

    /**
     * The keccak256 hash of the ethereumData. This field will only be populated for
     * EthereumTransaction.
     * 
     * @type {Uint8Array | null}
     * @memberof _Record
     * @public
     * @description Hash of the Ethereum transaction data if this was an EVM transaction
     */
    @ApiProperty({ 
        description: 'Keccak256 hash of the ethereumData',
        type: String,
        format: 'byte',
        nullable: true,
        example: '0x1a2b3c4d...'
    })
    ethereumHash: Uint8Array | null;

    /**
     * List of accounts with the corresponding staking rewards paid as a result of a transaction.
     * 
     * @type {Transfer[]}
     * @memberof _Record
     * @public
     * @description Staking rewards that were paid out during this transaction
     */
    @ApiProperty({ 
        description: 'List of accounts with paid staking rewards',
        type: Array,
        example: [
            { accountId: '0.0.1234', amount: '1.5' }
        ]
    })
    paidStakingRewards: Transfer[];

    /**
     * In the record of a PRNG transaction with no output range, a pseudorandom 384-bit string.
     * 
     * @type {Uint8Array | null}
     * @memberof _Record
     * @public
     * @description Random bytes generated by a PRNG transaction
     */
    @ApiProperty({ 
        description: 'Pseudorandom 384-bit string from PRNG transaction',
        type: String,
        format: 'byte',
        nullable: true,
        example: '0x1a2b3c4d...'
    })
    prngBytes: Uint8Array | null;

    /**
     * In the record of a PRNG transaction with an output range, the output of a PRNG whose input was a 384-bit string.
     * 
     * @type {number | null}
     * @memberof _Record
     * @public
     * @description Random number generated by a PRNG transaction with a specified range
     */
    @ApiProperty({ 
        description: 'Output of PRNG transaction with output range',
        type: Number,
        nullable: true,
        example: 42
    })
    prngNumber: number | null;

    /**
     * The new default EVM address of the account created by this transaction.
     * This field is populated only when the EVM address is not specified in the related transaction body.
     * 
     * @type {EvmAddress | null}
     * @memberof _Record
     * @public
     * @description EVM address assigned to a newly created account
     */
    @ApiProperty({ 
        description: 'The new default EVM address of the created account',
        type: String,
        nullable: true,
        example: '0x1a2b3c4d5e6f7g8h9i0j'
    })
    evmAddress: EvmAddress | null;

    /**
     * List of new pending airdrops associated with this transaction.
     * 
     * @type {Array<{tokenId: TokenId, accountId: AccountId, amount: number}>}
     * @memberof _Record
     * @public
     * @description Airdrops that were scheduled but not yet delivered
     */
    @ApiProperty({ 
        description: 'List of new pending airdrops',
        type: Array,
        example: [
            { tokenId: '0.0.1000', accountId: '0.0.1234', amount: 100 }
        ]
    })
    newPendingAirdrops: Array<{
        tokenId: TokenId;
        accountId: AccountId;
        amount: number;
    }>;

    /**
     * Creates a new instance of _Record
     * 
     * @constructor
     * @param {TransactionRecord} record - The SDK TransactionRecord to convert
     * @memberof _Record
     * @public
     * @description Initializes a new transaction record with data from the SDK
     */
    constructor(record: TransactionRecord) {
        Object.assign(this, this.convertTransactionRecord(record));
    }

    /**
     * Converts a TransactionRecord from the SDK to our Record type
     * 
     * @param {TransactionRecord} record - The SDK's TransactionRecord
     * @returns {_Record} Our Record type
     * @memberof _Record
     * @private
     * @description Transforms the SDK record format to our internal format
     */
    private convertTransactionRecord(record: TransactionRecord): _Record {
        return {
            ...record,
            tokenTransfers: this.convertTokenTransferMap(record.tokenTransfers),
            tokenTransfersList: this.convertTokenTransfersList(record.tokenTransfersList),
            nftTransfers: this.convertNftTransferMap(record.nftTransfers),
            automaticTokenAssociations: record.automaticTokenAssociations.map(assoc => ({
                tokenId: assoc.tokenId,
                accountId: assoc.accountId
            })),
            newPendingAirdrops: record.newPendingAirdrops.map(airdrop => ({
                tokenId: airdrop.airdropId.tokenId,
                accountId: airdrop.airdropId.receiverId,
                amount: airdrop.amount.toNumber()
            })),
            duplicates: record.duplicates.map(dup => this.convertTransactionRecord(dup)),
            children: record.children.map(child => this.convertTransactionRecord(child))
        } as _Record;
    }

    /**
     * Converts TokenTransferMap to Map<TokenId, Map<AccountId, number>>
     * 
     * @param {any} transferMap - The SDK's TokenTransferMap
     * @returns {Map<TokenId, Map<AccountId, number>>} Our Map type
     * @memberof _Record
     * @private
     * @description Transforms the SDK token transfer map to our internal format
     */
    private convertTokenTransferMap(transferMap: any): Map<TokenId, Map<AccountId, number>> {
        const result = new Map<TokenId, Map<AccountId, number>>();

        for (const [tokenId, accountMap] of transferMap.entries()) {
            const accountMapResult = new Map<AccountId, number>();
            for (const [accountId, amount] of accountMap.entries()) {
                accountMapResult.set(accountId, (amount as Long).toNumber());
            }
            result.set(tokenId, accountMapResult);
        }

        return result;
    }

    /**
     * Converts TokenTransfer[] to our array type
     * 
     * @param {any[]} transfers - The SDK's TokenTransfer array
     * @returns {Array<{tokenId: TokenId, accountId: AccountId, amount: number}>} Our array type
     * @memberof _Record
     * @private
     * @description Transforms the SDK token transfers list to our internal format
     */
    private convertTokenTransfersList(transfers: any[]): Array<{
        tokenId: TokenId;
        accountId: AccountId;
        amount: number;
    }> {
        return transfers.map(transfer => ({
            tokenId: transfer.tokenId,
            accountId: transfer.accountId,
            amount: (transfer.amount as Long).toNumber()
        }));
    }

    /**
     * Converts TokenNftTransferMap to Map<TokenId, Map<AccountId, NftId[]>>
     * 
     * @param {any} transferMap - The SDK's TokenNftTransferMap
     * @returns {Map<TokenId, Map<AccountId, NftId[]>>} Our Map type
     * @memberof _Record
     * @private
     * @description Transforms the SDK NFT transfer map to our internal format
     */
    private convertNftTransferMap(transferMap: any): Map<TokenId, Map<AccountId, NftId[]>> {
        const result = new Map<TokenId, Map<AccountId, NftId[]>>();

        for (const [tokenId, accountMap] of transferMap.entries()) {
            const accountMapResult = new Map<AccountId, NftId[]>();
            for (const [accountId, nftIds] of accountMap.entries()) {
                accountMapResult.set(accountId, nftIds);
            }
            result.set(tokenId, accountMapResult);
        }

        return result;
    }
}
