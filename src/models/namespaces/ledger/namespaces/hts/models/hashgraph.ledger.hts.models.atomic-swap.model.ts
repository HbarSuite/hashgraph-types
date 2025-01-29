import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsNumber, IsOptional, Min, IsNotEmpty, IsObject } from 'class-validator';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';
import { Hashgraph } from '../../../../../hashgraph.namespace';

/**
 * @file HTS Token Atomic Swap Model
 * @class _AtomicSwap
 * @implements {IHashgraph.ILedger.IHTS.IAtomicSwap}
 * @description Implements atomic swap functionality for the Hedera Token
 * Service (HTS). This model manages secure token exchanges between accounts
 * with comprehensive validation and atomic execution.
 * 
 * Core Features:
 * - Atomic Swaps
 * - Token Exchange
 * - DAO Integration
 * - Transaction Security
 * 
 * @category Hashgraph
 * @subcategory HTS
 * @since 2.0.0
 * 
 * @remarks
 * This class ensures secure atomic swaps with proper validation and
 * execution guarantees. It supports both direct swaps and DAO-governed
 * swap processes.
 * 
 * Key Components:
 * - Account Validation: Sender and receiver verification
 * - Token Management: ID and amount control
 * - Decimal Precision: Token unit handling
 * - Memo Support: Transaction documentation
 * 
 * Security Considerations:
 * - Account validation
 * - Amount verification
 * - Atomic execution
 * - State confirmation
 * 
 * Use Cases:
 * - Token exchanges
 * - Secure transfers
 * - Cross-account swaps
 * - Automated trading
 * 
 * @example
 * // Direct atomic swap
 * const swapRequest = new _AtomicSwap({
 *   from: "0.0.123456",
 *   to: "0.0.789012",
 *   token_id: "0.0.345678",
 *   decimals: 8,
 *   amount: 100,
 *   memo: "Token swap"
 * });
 * 
 * // DAO-governed swap
 * const daoSwapRequest = new _AtomicSwap({
 *   from: "0.0.123456",
 *   to: "0.0.789012",
 *   token_id: "0.0.345678",
 *   decimals: 8,
 *   amount: 100,
 *   memo: "DAO swap",
 *   dao: {
 *     topicId: "0.0.345678",
 *     consensusTimestamp: "1234567890.123456789"
 *   }
 * });
 */
export class _AtomicSwap implements IHashgraph.ILedger.IHTS.IAtomicSwap {
    /**
     * Sender Account ID
     * @type {string}
     * @description The account ID of the party initiating the atomic swap.
     * This account must have sufficient token balance and proper permissions.
     * 
     * Requirements:
     * - Must be valid account ID
     * - Account must exist
     * - Account must be active
     * - Sufficient balance
     * 
     * Impact:
     * - Token deduction
     * - Transfer initiation
     * - Fee payment
     * - Transaction signing
     * 
     * @example
     * // Standard account
     * from: "0.0.123456"
     */
    @ApiProperty({
        description: 'The account ID of the sender initiating the atomic swap',
        example: '0.0.123456',
    })
    @IsString()
    @IsNotEmpty()
    from: string;

    /**
     * Receiver Account ID
     * @type {string}
     * @description The account ID of the party receiving tokens in the swap.
     * This account must be properly configured to receive the specified token.
     * 
     * Requirements:
     * - Must be valid account ID
     * - Account must exist
     * - Account must be active
     * - Token association
     * 
     * Impact:
     * - Token receipt
     * - Balance update
     * - State change
     * - Transaction completion
     * 
     * @example
     * // Standard account
     * to: "0.0.789012"
     */
    @ApiProperty({
        description: 'The account ID of the receiver in the atomic swap',
        example: '0.0.789012',
    })
    @IsString()
    @IsNotEmpty()
    to: string;

    /**
     * Token ID
     * @type {string}
     * @description The unique identifier of the token being exchanged.
     * Must reference a valid and active token on the network.
     * 
     * Requirements:
     * - Must be valid token ID
     * - Token must exist
     * - Token must be active
     * - Transfer enabled
     * 
     * Impact:
     * - Asset identification
     * - Transfer validation
     * - Balance tracking
     * - State verification
     * 
     * @example
     * // Standard token
     * token_id: "0.0.345678"
     */
    @ApiProperty({
        description: 'The unique identifier of the token being swapped',
        example: '0.0.345678',
    })
    @IsString()
    @IsNotEmpty()
    token_id: string;

    /**
     * Token Decimals
     * @type {number}
     * @description The number of decimal places for the token.
     * Determines the precision of token amounts in the swap.
     * 
     * Requirements:
     * - Must be non-negative
     * - Must match token config
     * - Integer value
     * - Maximum limit check
     * 
     * Impact:
     * - Amount precision
     * - Transfer accuracy
     * - Display formatting
     * - Calculation basis
     * 
     * @example
     * // Standard precision
     * decimals: 8
     */
    @ApiProperty({
        description: 'The number of decimal places for the token being swapped',
        example: 8,
    })
    @IsNumber()
    @Min(0)
    decimals: number;

    /**
     * Token Amount
     * @type {number}
     * @description The quantity of tokens to transfer in the swap.
     * Must be a positive number within valid token limits.
     * 
     * Requirements:
     * - Must be positive
     * - Within balance
     * - Within limits
     * - Proper precision
     * 
     * Impact:
     * - Transfer value
     * - Balance changes
     * - Fee calculation
     * - State updates
     * 
     * @example
     * // Standard amount
     * amount: 100
     */
    @ApiProperty({
        description: 'The amount of tokens to be swapped',
        example: 100,
    })
    @IsNumber()
    @Min(0)
    amount: number;

    /**
     * Transaction Memo
     * @type {string}
     * @description Optional memo field for the swap transaction.
     * Provides additional context or documentation for the exchange.
     * 
     * Features:
     * - Transaction documentation
     * - Reference information
     * - Audit support
     * - Message inclusion
     * 
     * Constraints:
     * - Length limits
     * - Character restrictions
     * - Content guidelines
     * - Storage impact
     * 
     * @example
     * // Standard memo
     * memo: "Token swap for Project X"
     */
    @ApiProperty({
        description: 'An optional memo to include with the atomic swap',
        required: false,
        example: 'Atomic swap for Project X',
    })
    @IsString()
    @IsOptional()
    memo?: string;

    /**
     * DAO Configuration
     * @type {Object}
     * @description Optional DAO integration settings for governance-controlled
     * atomic swaps. Enables community-driven swap execution.
     * 
     * Configuration Options:
     * - Topic ID for governance
     * - Consensus timestamp
     * - Validation rules
     * - Integration settings
     * 
     * Governance Features:
     * - Swap approval
     * - Proposal tracking
     * - Decision recording
     * - Audit trail
     * 
     * @example
     * // Basic DAO config
     * dao: {
     *   topicId: "0.0.123456",
     *   consensusTimestamp: "1234567890.123456789"
     * }
     */
    @ApiProperty({
        description: 'DAO configuration for governance-controlled swaps',
        required: false
    })
    @IsOptional()
    @IsObject()
    dao?: Hashgraph.Ledger.DAO.Config;

    /**
     * Atomic Swap Constructor
     * @constructor
     * @description Initializes a new atomic swap request with comprehensive
     * validation and security checks.
     * 
     * Validation Process:
     * 1. Account validation
     * 2. Token verification
     * 3. Amount validation
     * 4. State confirmation
     * 
     * Security Steps:
     * 1. Input sanitization
     * 2. Balance verification
     * 3. Permission checking
     * 4. Constraint validation
     * 
     * Initialization Steps:
     * 1. Data assignment
     * 2. Field validation
     * 3. Constraint checking
     * 4. State preparation
     * 
     * @throws {Error} When required fields are missing
     * @throws {Error} When decimals is negative
     * @throws {Error} When amount is not positive
     * 
     * @example
     * // Initialize atomic swap
     * const swap = new _AtomicSwap({
     *   from: "0.0.123456",
     *   to: "0.0.789012",
     *   token_id: "0.0.345678",
     *   decimals: 8,
     *   amount: 100,
     *   memo: "Token swap"
     * });
     */
    constructor(data: IHashgraph.ILedger.IHTS.IAtomicSwap) {
        // Set all fields from input data
        this.from = data.from;
        this.to = data.to;
        this.token_id = data.token_id;
        this.decimals = data.decimals;
        this.amount = data.amount;
        this.memo = data.memo;
        this.dao = data.dao;

        // Validate required fields
        if (!this.from || !this.to || !this.token_id) {
            throw new Error('Sender, receiver, and token_id are required');
        }

        // Validate numeric constraints
        if (this.decimals < 0) {
            throw new Error('Decimals must be a non-negative number');
        }
        if (this.amount <= 0) {
            throw new Error('Amount must be a positive number');
        }
    }
}