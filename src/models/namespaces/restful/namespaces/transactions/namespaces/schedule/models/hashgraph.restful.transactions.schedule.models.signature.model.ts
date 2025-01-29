import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * @file hashgraph.restful.transactions.schedule.models.signature.model.ts
 * @class _Signature
 * @description Comprehensive model for cryptographic signatures in scheduled transactions.
 * Implements IHashgraph.IRestful.ITransactions.ISchedule.ISignature to provide
 * detailed information about transaction signatures, including:
 * - Temporal tracking and consensus
 * - Public key management
 * - Signature verification data
 * - Cryptographic algorithm support
 * 
 * @implements {IHashgraph.IRestful.ITransactions.ISchedule.ISignature}
 * @category Hashgraph
 * @subcategory Restful Models
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Create a comprehensive signature instance
 * const signature = new _Signature({
 *   consensus_timestamp: "1234567890.123456789",
 *   public_key_prefix: "302a300506032b6570032100e0c8ec2758a5879ffac226a13c0c516b799e72e35141a0dd828f94d37988a4b7",
 *   signature: "7b22637265617465645f74696d657374616d70223a313233343536373839302e3132333435363738392c22747970...",
 *   type: IHashgraph.IRestful.ITransactions.ISchedule.TypeEnum.Ed25519
 * });
 * ```
 */
export class _Signature implements IHashgraph.IRestful.ITransactions.ISchedule.ISignature {
    /**
     * Signature consensus timestamp
     * @type {string}
     * @optional
     * @remarks
     * - Network-agreed timestamp
     * - Format: seconds.nanoseconds
     * - Records signature addition
     * - Used for ordering
     */
    @ApiProperty({
        description: 'Network consensus timestamp when signature was added in seconds.nanoseconds format',
        required: false,
        type: () => String,
        example: '1234567890.123456789'
    })
    @IsOptional()
    @IsString()
    consensus_timestamp?: string;

    /**
     * Signature public key prefix
     * @type {string}
     * @optional
     * @remarks
     * - Identifies signing key
     * - Used for verification
     * - Hexadecimal format
     * - Algorithm-specific
     */
    @ApiProperty({
        description: 'Public key prefix used for signature verification in hexadecimal format',
        required: false,
        type: () => String,
        example: '302a300506032b6570032100e0c8ec2758a5879ffac226a13c0c516b799e72e35141a0dd828f94d37988a4b7'
    })
    @IsOptional()
    @IsString()
    public_key_prefix?: string;

    /**
     * Cryptographic signature data
     * @type {string}
     * @optional
     * @remarks
     * - Contains signature bytes
     * - Hexadecimal format
     * - Verifies authenticity
     * - Algorithm-dependent
     */
    @ApiProperty({
        description: 'Cryptographic signature data in hexadecimal format',
        required: false,
        type: () => String,
        example: '7b22637265617465645f74696d657374616d70223a313233343536373839302e3132333435363738392c22747970...'
    })
    @IsOptional()
    @IsString()
    signature?: string;

    /**
     * Signature algorithm type
     * @type {IHashgraph.IRestful.ITransactions.ISchedule.TypeEnum}
     * @optional
     * @remarks
     * - Defines crypto algorithm
     * - Affects verification
     * - Supports multiple types
     * - Required for validation
     */
    @ApiProperty({
        description: 'Cryptographic algorithm type used for the signature',
        required: false,
        enum: IHashgraph.IRestful.ITransactions.ISchedule.TypeEnum,
        example: IHashgraph.IRestful.ITransactions.ISchedule.TypeEnum.Ed25519
    })
    @IsOptional()
    @IsEnum(IHashgraph.IRestful.ITransactions.ISchedule.TypeEnum)
    type?: IHashgraph.IRestful.ITransactions.ISchedule.TypeEnum;

    /**
     * Creates an instance of _Signature
     * @constructor
     * @param {Partial<_Signature>} data - Signature data
     * @remarks
     * - Validates all properties
     * - Ensures data integrity
     * - Supports partial data
     * - Type-safe initialization
     * 
     * @example
     * ```typescript
     * // Create basic signature
     * const basicSig = new _Signature({
     *   public_key_prefix: "302a300506032b6570032100e0c8ec2758a5879ffac226a13c0c516b799e72e35141a0dd828f94d37988a4b7",
     *   type: IHashgraph.IRestful.ITransactions.ISchedule.TypeEnum.Ed25519
     * });
     * 
     * // Create complete signature
     * const fullSig = new _Signature({
     *   consensus_timestamp: "1234567890.123456789",
     *   public_key_prefix: "302a300506032b6570032100e0c8ec2758a5879ffac226a13c0c516b799e72e35141a0dd828f94d37988a4b7",
     *   signature: "7b22637265617465645f74696d657374616d70223a313233343536373839302e3132333435363738392c22747970...",
     *   type: IHashgraph.IRestful.ITransactions.ISchedule.TypeEnum.Ed25519
     * });
     * ```
     */
    constructor(data?: Partial<_Signature>) {
        if (data) {
            this.consensus_timestamp = data.consensus_timestamp;
            this.public_key_prefix = data.public_key_prefix;
            this.signature = data.signature;
            this.type = data.type;
        }
    }
}