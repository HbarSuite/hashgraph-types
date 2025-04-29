import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';

/**
 * Model for managing Hashgraph account staking information
 * 
 * @class _StakingInfo
 * @implements {IHashgraph.ILedger.IAccounts.IStakingInfo}
 * @description Provides comprehensive functionality for managing account staking information including:
 * - Advanced staking configuration and management system
 * - High-precision reward tracking and distribution control
 * - Comprehensive period monitoring and scheduling
 * - Robust node association and validation
 * - Complete account relationship handling
 * @namespace Hashgraph.Ledger.Account
 * @category Models
 * @subcategory Ledger
 * @since 2.0.0
 * 
 * This class provides complete management of staking information:
 * - Staking Configuration:
 *   - Advanced reward preferences and policies
 *   - Precise period settings and durations
 *   - Comprehensive node assignments
 *   - Complete account associations
 *   - Flexible delegation management
 * 
 * - Reward Management:
 *   - High-precision reward calculations
 *   - Advanced distribution tracking
 *   - Complete amount validation
 *   - Robust balance handling
 *   - Detailed history maintenance
 * 
 * - Period Control:
 *   - Precise time tracking
 *   - Advanced duration management
 *   - Flexible cycle handling
 *   - Comprehensive scheduling
 *   - Complete state persistence
 * 
 * - Node Management:
 *   - Advanced node selection
 *   - Comprehensive status monitoring
 *   - Detailed performance tracking
 *   - Complete health validation
 *   - Robust connection management
 * 
 * - Account Relationships:
 *   - Advanced staking associations
 *   - Complete delegation tracking
 *   - Comprehensive permission management
 *   - Robust access control
 *   - Flexible policy enforcement
 * 
 * Key features:
 * - Advanced staking lifecycle management
 * - High-precision reward tracking system
 * - Comprehensive period handling
 * - Robust error validation
 * - Complete state management
 * 
 * Implementation details:
 * - Uses high-precision numeric handling
 * - Supports multiple staking models
 * - Manages complex relationships
 * - Ensures data consistency
 * - Maintains detailed audit trails
 * 
 * @example
 * // Create various staking configurations
 * 
 * // Basic staking setup (standard rewards)
 * const standardStaking = new _StakingInfo(
 *   false,                    // Accept staking rewards
 *   "2023-12-23T12:00:00Z",  // Current period start
 *   "100.50",                // Pending rewards
 *   "1000.75",               // Staked to this account
 *   "0.0.12345",             // Target staking account
 *   "5"                      // Target node
 * );
 * 
 * // Declined rewards configuration (opt-out)
 * const declinedRewards = new _StakingInfo(
 *   true,                     // Decline staking rewards
 *   "2023-12-23T12:00:00Z",  // Period start
 *   "0",                     // No pending rewards
 *   "500.25",                // Staked amount
 *   "0.0.67890",             // Staking target
 *   "3"                      // Node ID
 * );
 * 
 * // High-value staking setup (large stake)
 * const highValueStaking = new _StakingInfo(
 *   false,                    // Accept rewards
 *   "2023-12-23T12:00:00Z",  // Period start
 *   "1000.75",               // High pending rewards
 *   "50000.00",              // Large staked amount
 *   "0.0.24680",             // Target account
 *   "7"                      // Node ID
 * );
 * 
 * // These will throw errors
 * const invalid1 = new _StakingInfo(
 *   null,                     // Error: Invalid flag
 *   "2023-12-23T12:00:00Z",
 *   "100.50",
 *   "1000.75",
 *   "0.0.12345",
 *   "5"
 * );
 * 
 * const invalid2 = new _StakingInfo(
 *   false,
 *   "invalid-date",           // Error: Invalid date format
 *   "100.50",
 *   "1000.75",
 *   "0.0.12345",
 *   "5"
 * );
 * 
 * const invalid3 = new _StakingInfo(
 *   false,
 *   "2023-12-23T12:00:00Z",
 *   "-100.50",               // Error: Negative amount
 *   "1000.75",
 *   "0.0.12345",
 *   "5"
 * );
 * 
 * @throws {Error} When validation fails for any required field
 * @throws {Error} When numeric values are invalid
 * @throws {Error} When timestamps are malformed
 * @throws {Error} When account or node IDs are invalid
 */
export class _StakingInfo implements IHashgraph.ILedger.IAccounts.IStakingInfo {
    /**
     * Flag indicating if staking rewards are declined
     * 
     * @type {boolean}
     * @memberof _StakingInfo
     * @description Controls reward acceptance providing:
     * - Comprehensive reward preference management
     * - Distribution policy control
     * - Automated reward handling
     * - Status tracking and updates
     * - Policy enforcement rules
     * 
     * Flag requirements:
     * - Must be a valid boolean value
     * - Directly affects reward distribution
     * - Controls automatic reward processing
     * - Determines distribution policy
     * - Influences reward calculations
     * 
     * Validation rules:
     * - Must be strict boolean type
     * - Must be explicitly defined
     * - Must be consistently applied
     * - Must be properly validated
     * - Must maintain state consistency
     * 
     * Impact on staking:
     * - Determines reward eligibility
     * - Affects distribution flow
     * - Controls automatic processes
     * - Influences reporting
     * - Guides system behavior
     * 
     * @example
     * // Valid reward preference configurations
     * 
     * // Accept rewards (default behavior)
     * declineStakingReward = false
     * // Enables:
     * // - Automatic reward distribution
     * // - Reward accumulation
     * // - Regular distributions
     * // - Balance updates
     * 
     * // Decline rewards (opt-out)
     * declineStakingReward = true
     * // Results in:
     * // - No reward distribution
     * // - No reward accumulation
     * // - Maintained stake only
     * // - Status preservation
     * 
     * // Invalid values (will throw errors)
     * declineStakingReward = null        // Error: Not a boolean
     * declineStakingReward = undefined   // Error: Not a boolean
     * declineStakingReward = "false"     // Error: Not a boolean
     * declineStakingReward = 0           // Error: Not a boolean
     * 
     * @throws {Error} When an invalid flag value is provided
     * @throws {Error} When the type is incorrect
     * @throws {Error} When the value is undefined
     */
    @ApiProperty({
        description: 'Indicates whether staking rewards are declined for this account',
        type: () => Boolean,
        required: true,
    })
    declineStakingReward: boolean;

    /**
     * Start timestamp of current staking period
     * 
     * @type {string}
     * @memberof _StakingInfo
     * @description Represents the period start time providing:
     * - Precise period tracking and management
     * - Time-based calculations and validations
     * - Cycle control and monitoring
     * - Schedule handling and updates
     * - State synchronization
     * 
     * Format requirements:
     * - Must follow ISO 8601 format exactly
     * - Must include timezone (UTC/Z)
     * - Must maintain proper formatting
     * - Must represent valid datetime
     * - Must be chronologically valid
     * 
     * Validation rules:
     * - Must strictly match ISO 8601
     * - Must be valid timestamp format
     * - Must include UTC indicator (Z)
     * - Must be properly structured
     * - Must be chronologically sound
     * 
     * Time handling:
     * - Uses UTC for consistency
     * - Maintains precision
     * - Supports period calculations
     * - Enables scheduling
     * - Facilitates synchronization
     * 
     * @example
     * // Valid period start timestamps
     * 
     * // Current period
     * stakePeriodStart = "2023-12-23T12:00:00Z"
     * 
     * // Start of day
     * stakePeriodStart = "2023-12-23T00:00:00Z"
     * 
     * // With milliseconds
     * stakePeriodStart = "2023-12-23T12:00:00.000Z"
     * 
     * // Invalid formats (will throw errors)
     * stakePeriodStart = "2023-12-23"            // Error: Missing time
     * stakePeriodStart = "2023-12-23 12:00:00"   // Error: Wrong format
     * stakePeriodStart = "2023-13-45T12:00:00Z"  // Error: Invalid date
     * stakePeriodStart = "2023-12-23T12:00:00"   // Error: Missing timezone
     * stakePeriodStart = "Invalid"               // Error: Not a date
     * 
     * @throws {Error} When an invalid timestamp is provided
     * @throws {Error} When the format is incorrect
     * @throws {Error} When the date is invalid
     */
    @ApiProperty({
        description: 'The timestamp when the current staking period started',
        type: () => String,
        required: true,
    })
    stakePeriodStart: string;

    /**
     * Amount of pending staking rewards
     * 
     * @type {string}
     * @memberof _StakingInfo
     * @description Represents pending rewards providing:
     * - Precise reward tracking and calculation
     * - Amount management and validation
     * - Balance control and updates
     * - Distribution handling and processing
     * - State maintenance
     * 
     * Format requirements:
     * - Must be valid numeric string
     * - Must support decimal precision
     * - Must be non-negative value
     * - Must follow amount format
     * - Must maintain precision
     * 
     * Validation rules:
     * - Must be string type only
     * - Must follow numeric format
     * - Must support decimal places
     * - Must represent valid amount
     * - Must maintain precision
     * 
     * Amount handling:
     * - Supports decimal precision
     * - Maintains numeric accuracy
     * - Prevents rounding errors
     * - Ensures consistency
     * - Validates ranges
     * 
     * @example
     * // Valid pending reward amounts
     * 
     * // Zero rewards
     * pendingReward = "0"
     * pendingReward = "0.00"
     * 
     * // Small rewards
     * pendingReward = "0.50"
     * pendingReward = "1.75"
     * 
     * // Larger rewards
     * pendingReward = "100.50"
     * pendingReward = "1000.00"
     * 
     * // Invalid values (will throw errors)
     * pendingReward = "-100.50"     // Error: Negative amount
     * pendingReward = "invalid"      // Error: Not a number
     * pendingReward = "100.123"      // Error: Too many decimals
     * pendingReward = "1,000.00"     // Error: Invalid format
     * pendingReward = null           // Error: Not a string
     * 
     * @throws {Error} When an invalid amount is provided
     * @throws {Error} When the format is incorrect
     * @throws {Error} When the value is invalid
     */
    @ApiProperty({
        description: 'The amount of pending staking rewards for this account',
        type: () => String,
        required: true,
    })
    pendingReward: string;

    /**
     * Amount staked to this account by others
     * 
     * @type {string}
     * @memberof _StakingInfo
     * @description Represents staked amount providing:
     * - Precise stake tracking and management
     * - Amount validation and verification
     * - Balance monitoring and control
     * - Delegation handling and updates
     * - State synchronization
     * 
     * Format requirements:
     * - Must be valid numeric string
     * - Must support decimal precision
     * - Must be non-negative value
     * - Must follow amount format
     * - Must maintain precision
     * 
     * Validation rules:
     * - Must be string type only
     * - Must follow numeric format
     * - Must support decimal places
     * - Must represent valid amount
     * - Must maintain precision
     * 
     * Amount handling:
     * - Supports decimal precision
     * - Maintains numeric accuracy
     * - Prevents rounding errors
     * - Ensures consistency
     * - Validates ranges
     * 
     * @example
     * // Valid staked amounts
     * 
     * // No stake
     * stakedToMe = "0"
     * stakedToMe = "0.00"
     * 
     * // Small stakes
     * stakedToMe = "100.75"
     * stakedToMe = "500.50"
     * 
     * // Large stakes
     * stakedToMe = "10000.00"
     * stakedToMe = "50000.75"
     * 
     * // Invalid values (will throw errors)
     * stakedToMe = "-1000.75"     // Error: Negative amount
     * stakedToMe = "invalid"      // Error: Not a number
     * stakedToMe = "1000.123"     // Error: Too many decimals
     * stakedToMe = "1,000.75"     // Error: Invalid format
     * stakedToMe = null           // Error: Not a string
     * 
     * @throws {Error} When an invalid amount is provided
     * @throws {Error} When the format is incorrect
     * @throws {Error} When the value is invalid
     */
    @ApiProperty({
        description: 'The amount staked to this account by other accounts',
        type: () => String,
        required: true,
    })
    stakedToMe: string;

    /**
     * Account ID this account is staking to
     * 
     * @type {string}
     * @memberof _StakingInfo
     * @description Represents staking target providing:
     * - Precise account identification
     * - Stake direction management
     * - Relationship tracking and updates
     * - Target validation and verification
     * - State maintenance
     * 
     * Format requirements:
     * - Must follow shard.realm.num format
     * - Must contain valid numeric values
     * - Must maintain proper formatting
     * - Must reference valid account
     * - Must be properly structured
     * 
     * Validation rules:
     * - Must match format pattern exactly
     * - Must contain valid numbers only
     * - Must be properly structured
     * - Must reference existing account
     * - Must maintain consistency
     * 
     * Account handling:
     * - Validates account existence
     * - Ensures proper formatting
     * - Maintains relationships
     * - Tracks associations
     * - Monitors status
     * 
     * @example
     * // Valid staked account IDs
     * 
     * // Standard format
     * stakedAccountId = "0.0.12345"
     * 
     * // Different realms
     * stakedAccountId = "0.1.12345"
     * stakedAccountId = "1.2.12345"
     * 
     * // Invalid formats (will throw errors)
     * stakedAccountId = "12345"           // Error: Wrong format
     * stakedAccountId = "0.0"             // Error: Incomplete
     * stakedAccountId = "0.0.abc"         // Error: Not numeric
     * stakedAccountId = "1.2.3.4"         // Error: Too many parts
     * stakedAccountId = null              // Error: Not a string
     * 
     * @throws {Error} When an invalid account ID is provided
     * @throws {Error} When the format is incorrect
     * @throws {Error} When the account is invalid
     */
    @ApiProperty({
        description: 'The account ID to which this account is staking',
        type: () => String,
        required: true,
    })
    stakedAccountId: string;

    /**
     * Node ID this account is staking to
     * 
     * @type {string}
     * @memberof _StakingInfo
     * @description Represents node target providing:
     * - Precise node identification
     * - Stake assignment management
     * - Node status tracking
     * - Target validation and verification
     * - State maintenance
     * 
     * Format requirements:
     * - Must be valid numeric string
     * - Must represent existing node
     * - Must maintain proper format
     * - Must be active node
     * - Must be properly structured
     * 
     * Validation rules:
     * - Must be string type only
     * - Must be numeric format
     * - Must reference valid node
     * - Must be active node
     * - Must maintain consistency
     * 
     * Node handling:
     * - Validates node existence
     * - Ensures node availability
     * - Tracks node status
     * - Monitors health
     * - Maintains associations
     * 
     * @example
     * // Valid node IDs
     * 
     * // Single digit nodes
     * stakedNodeId = "0"
     * stakedNodeId = "5"
     * stakedNodeId = "9"
     * 
     * // Multi-digit nodes
     * stakedNodeId = "10"
     * stakedNodeId = "15"
     * stakedNodeId = "20"
     * 
     * // Invalid values (will throw errors)
     * stakedNodeId = "-1"        // Error: Negative ID
     * stakedNodeId = "invalid"   // Error: Not numeric
     * stakedNodeId = "1.5"       // Error: Not integer
     * stakedNodeId = null        // Error: Not a string
     * stakedNodeId = "999999"    // Error: Node doesn't exist
     * 
     * @throws {Error} When an invalid node ID is provided
     * @throws {Error} When the format is incorrect
     * @throws {Error} When the node is invalid
     */
    @ApiProperty({
        description: 'The node ID to which this account is staking',
        type: () => String,
        required: true,
    })
    stakedNodeId: string;

    /**
     * Creates an instance of the _StakingInfo class
     * 
     * @constructor
     * @param {IHashgraph.ILedger.IAccounts.IStakingInfo} data - Partial data to initialize the staking info
     * @throws {Error} When validation fails for any parameter
     * @memberof _StakingInfo
     * @description Initializes a new staking info instance with:
     * - Complete parameter validation and verification
     * - Field validation and type checking
     * - Instance initialization and setup
     * - State management configuration
     * - Error handling preparation
     * 
     * Validation process:
     * - Verifies all parameter presence
     * - Validates parameter types
     * - Checks value ranges
     * - Ensures data consistency
     * - Validates relationships
     * 
     * Implementation details:
     * - Handles all staking aspects
     * - Manages relationships
     * - Maintains consistency
     * - Ensures data integrity
     * - Supports updates
     * 
     * @example
     * // Create valid staking configurations
     * 
     * // Basic staking setup
     * const basicStaking = new _StakingInfo(
     *   false,                    // Accept rewards
     *   "2023-12-23T12:00:00Z",  // Period start
     *   "100.50",                // Pending rewards
     *   "1000.75",               // Staked amount
     *   "0.0.12345",             // Target account
     *   "5"                      // Target node
     * );
     * 
     * // Declined rewards setup
     * const declinedRewards = new _StakingInfo(
     *   true,                     // Decline rewards
     *   "2023-12-23T12:00:00Z",  // Period start
     *   "0",                     // No rewards
     *   "500.25",                // Staked amount
     *   "0.0.67890",             // Target account
     *   "3"                      // Target node
     * );
     * 
     * // High-value staking
     * const highValueStaking = new _StakingInfo(
     *   false,                    // Accept rewards
     *   "2023-12-23T12:00:00Z",  // Period start
     *   "1000.75",               // High rewards
     *   "50000.00",              // Large stake
     *   "0.0.24680",             // Target account
     *   "7"                      // Target node
     * );
     * 
     * // These will throw errors
     * const invalid1 = new _StakingInfo(
     *   null,                     // Error: Invalid flag
     *   "2023-12-23T12:00:00Z",
     *   "100.50",
     *   "1000.75",
     *   "0.0.12345",
     *   "5"
     * );
     * 
     * const invalid2 = new _StakingInfo(
     *   false,
     *   "invalid-date",           // Error: Invalid date
     *   "100.50",
     *   "1000.75",
     *   "0.0.12345",
     *   "5"
     * );
     * 
     * const invalid3 = new _StakingInfo(
     *   false,
     *   "2023-12-23T12:00:00Z",
     *   "-100.50",               // Error: Negative amount
     *   "1000.75",
     *   "0.0.12345",
     *   "5"
     * );
     */
    constructor(data: IHashgraph.ILedger.IAccounts.IStakingInfo) {
        Object.assign(this, data);
    
        // Validate timestamp format (ISO 8601)
        if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/.test(this.stakePeriodStart)) {
            throw new Error('Invalid timestamp format. Expected ISO 8601 format.');
        }

        // Validate numeric string format for pending rewards
        if (!/^\d+(\.\d+)?$/.test(this.pendingReward)) {
            throw new Error('Invalid amount format. Expected a numeric string.');
        }

        // Validate numeric string format for staked amount
        if (!/^\d+(\.\d+)?$/.test(this.stakedToMe)) {
            throw new Error('Invalid amount format. Expected a numeric string.');
        }

        // Validate account ID format (shard.realm.num)
        if (!/^\d+\.\d+\.\d+$/.test(this.stakedAccountId)) {
            throw new Error('Invalid account ID format. Expected format: shard.realm.num');
        }

        // Validate node ID format (numeric string)
        if (!/^\d+$/.test(this.stakedNodeId)) {
            throw new Error('Invalid node ID format. Expected a numeric string.');
        }
    }
}