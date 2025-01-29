/**
 * Configuration interface for DAO operations on Hedera
 * @interface _IConfig
 * @description Defines the structure and requirements for DAO configuration settings,
 * enabling standardized governance operations across the Hedera network. This interface
 * ensures consistent handling of DAO-related transactions and consensus tracking.
 * @category Hedera Services
 * @subcategory DAO
 * @remarks
 * Key components:
 * - Topic identification
 * - Consensus tracking
 * - Timestamp validation
 * - Governance controls
 * 
 * Requirements:
 * - Valid topic ID format
 * - Accurate consensus timestamps
 * - Network synchronization
 * - Proper permissions
 * @example
 * ```typescript
 * // Basic DAO configuration
 * const config: _IConfig = {
 *   topicId: "0.0.34567",
 *   consensusTimestamp: "2024-12-03T16:11:08.938Z"
 * };
 * 
 * // Configuration with metadata
 * const configWithMetadata: _IConfig = {
 *   topicId: "0.0.34567",
 *   consensusTimestamp: "2024-12-03T16:11:08.938Z"
 * };
 * ```
 */
export interface _IConfig {
    /**
     * Consensus topic identifier
     * @property {string} topicId
     * @description Unique identifier for the DAO's consensus topic
     * @type {string}
     * @memberof _IConfig
     * @required
     * @remarks
     * - Must be a valid topic ID in shard.realm.num format
     * - Topic must exist on the network
     * - Topic must be active and accessible
     * - Appropriate permissions required
     * @example
     * ```typescript
     * topicId: "0.0.34567" // DAO's consensus topic
     * ```
     */
    topicId: string;

    /**
     * Network consensus timestamp
     * @property {string} consensusTimestamp
     * @description Timestamp when the network reached consensus on DAO operations
     * @type {string}
     * @memberof _IConfig
     * @required
     * @remarks
     * - Format: ISO 8601 timestamp
     * - Set by network consensus
     * - Used for transaction ordering
     * - Critical for governance timing
     * @example
     * ```typescript
     * // Standard ISO timestamp
     * consensusTimestamp: "2024-12-03T16:11:08.938Z"
     * 
     * // Unix timestamp format
     * consensusTimestamp: "1234567890.123456789"
     * ```
     */
    consensusTimestamp: string;
}