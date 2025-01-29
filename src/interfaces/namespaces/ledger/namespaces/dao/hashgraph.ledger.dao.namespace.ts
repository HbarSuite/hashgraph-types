import { _IConfig } from './interfaces/hashgraph.ledger.dao.config.interface'

/**
 * Decentralized Autonomous Organization (DAO) namespace for Hedera
 * @namespace _IDAO
 * @description Defines the structure and requirements for DAO operations on the Hedera network.
 * Provides comprehensive support for decentralized governance, including topic management,
 * consensus timestamps, and configuration settings.
 * @category Hedera Services
 * @subcategory DAO
 * @remarks
 * Key features:
 * - Topic management
 * - Consensus tracking
 * - Governance configuration
 * - Transaction validation
 * - Decentralized control
 * 
 * Common use cases:
 * - DAO creation and setup
 * - Governance proposals
 * - Member management
 * - Asset control
 * - Protocol updates
 * 
 * Requirements:
 * - Valid topic IDs
 * - Proper consensus timestamps
 * - Appropriate permissions
 * - Network fees coverage
 * @example
 * ```typescript
 * // Basic DAO configuration
 * const basicConfig: _IDAO.IConfig = {
 *   topicId: "0.0.34567",
 *   consensusTimestamp: "2024-12-03T16:11:08.938Z"
 * };
 * 
 * // Extended DAO configuration with metadata
 * const extendedConfig: _IDAO.IConfig = {
 *   topicId: "0.0.34567",
 *   consensusTimestamp: "2024-12-03T16:11:08.938Z",
 *   metadata: {
 *     name: "Community Treasury DAO",
 *     description: "Manages community assets and proposals",
 *     version: "1.0.0"
 *   }
 * };
 * ```
 */
export namespace _IDAO {
    /**
     * DAO configuration type definition
     * @type {_IConfig}
     * @description Defines the structure for DAO configuration settings including
     * topic management and consensus tracking. Essential for governance operations
     * and decentralized control mechanisms.
     * @memberof _IDAO
     * @remarks
     * - Required for DAO operations
     * - Manages governance settings
     * - Tracks consensus state
     * - Enables decentralized control
     * @see {@link _IConfig} for detailed property definitions
     */
    export type IConfig = _IConfig
}