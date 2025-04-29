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
    NftId
} from '@hashgraph/sdk';

/**
 * Interface representing a transaction record from the Hedera network.
 * Contains detailed information about a transaction's execution and results.
 */
export interface _IRecord {
    /**
     * The status (reach consensus, or failed, or is unknown) and the ID of
     * any new account/file/instance created.
     */
    receipt: TransactionReceipt;

    /**
     * The hash of the Transaction that executed (not the hash of any Transaction that failed
     * for having a duplicate TransactionID).
     */
    transactionHash:  Uint8Array;

    /**
     * The consensus timestamp (or null if didn't reach consensus yet).
     */
    consensusTimestamp: Timestamp;

    /**
     * The ID of the transaction this record represents.
     */
    transactionId: TransactionId;

    /**
     * The memo that was submitted as part of the transaction (max 100 bytes).
     */
    transactionMemo: string;

    /**
     * The actual transaction fee charged,
     * not the original transactionFee value from TransactionBody.
     */
    transactionFee: Hbar;

    /**
     * All hbar transfers as a result of this transaction, such as fees, or transfers performed
     * by the transaction, or by a smart contract it calls, or by the creation of threshold
     * records that it triggers.
     */
    transfers: Transfer[];

    /**
     * Record of the value returned by the smart contract function or constructor.
     */
    contractFunctionResult: ContractFunctionResult | null;

    /**
     * All the token transfers from this account
     */
    tokenTransfers: Map<TokenId, Map<AccountId, number>>;

    /**
     * All the token transfers from this account
     */
    tokenTransfersList: Array<{
        tokenId: TokenId;
        accountId: AccountId;
        amount: number;
    }>;

    /**
     * Reference to the scheduled transaction ID that this transaction record represent
     */
    scheduleRef: ScheduleId | null;

    /**
     * All custom fees that were assessed during a CryptoTransfer, and must be paid if the
     * transaction status resolved to SUCCESS
     */
    assessedCustomFees: AssessedCustomFee[];

    /**
     * All NFT transfers from this account
     */
    nftTransfers: Map<TokenId, Map<AccountId, NftId[]>>;

    /**
     * All token associations implicitly created while handling this transaction
     */
    automaticTokenAssociations: Array<{
        tokenId: TokenId;
        accountId: AccountId;
    }>;

    /**
     * In the record of an internal transaction, the consensus timestamp of the user
     * transaction that spawned it.
     */
    parentConsensusTimestamp: Timestamp | null;

    /**
     * In the record of an internal CryptoCreate transaction triggered by a user
     * transaction with a (previously unused) alias, the new account's alias.
     */
    aliasKey: PublicKey | null;

    /**
     * The records of processing all consensus transaction with the same id as the distinguished
     * record above, in chronological order.
     */
    duplicates: _IRecord[];

    /**
     * The records of processing all child transaction spawned by the transaction with the given
     * top-level id, in consensus order. Always empty if the top-level status is UNKNOWN.
     */
    children: _IRecord[];

    /**
     * @deprecated
     */
    hbarAllowanceAdjustments: HbarAllowance[];

    /**
     * @deprecated
     */
    tokenAllowanceAdjustments: TokenAllowance[];

    /**
     * @deprecated
     */
    nftAllowanceAdjustments: TokenNftAllowance[];

    /**
     * The keccak256 hash of the ethereumData. This field will only be populated for
     * EthereumTransaction.
     */
    ethereumHash: Uint8Array | null;

    /**
     * List of accounts with the corresponding staking rewards paid as a result of a transaction.
     */
    paidStakingRewards: Transfer[];

    /**
     * In the record of a PRNG transaction with no output range, a pseudorandom 384-bit string.
     */
    prngBytes: Uint8Array | null;

    /**
     * In the record of a PRNG transaction with an output range, the output of a PRNG whose input was a 384-bit string.
     */
    prngNumber: number | null;

    /**
     * The new default EVM address of the account created by this transaction.
     * This field is populated only when the EVM address is not specified in the related transaction body.
     */
    evmAddress: EvmAddress | null;

    /**
     * List of new pending airdrops associated with this transaction.
     */
    newPendingAirdrops: Array<{
        tokenId: TokenId;
        accountId: AccountId;
        amount: number;
    }>;
}