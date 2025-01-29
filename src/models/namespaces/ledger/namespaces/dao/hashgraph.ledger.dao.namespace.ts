import { _Config } from './models/hashgraph.ledger.dao.models.config.model'

/**
 * @file Hashgraph DAO Namespace Definition
 * @namespace _DAO
 * @description Defines the core namespace for Hashgraph's Decentralized Autonomous Organization (DAO) functionality.
 * This namespace encapsulates all DAO-related operations and configurations within the Hashgraph network.
 * 
 * Key Features:
 * - Comprehensive DAO configuration management
 * - Topic ID validation and handling
 * - Consensus timestamp operations
 * - Type-safe DAO operations
 * 
 * @category Hashgraph
 * @subcategory DAO
 * @since 2.0.0
 * 
 * @example
 * // Example: Creating a new DAO configuration
 * const daoConfig = new _DAO.Config({
 *   topicId: "0.0.12345",
 *   consensusTimestamp: "1234567890.123456789"
 * });
 */
export namespace _DAO {
  /**
   * DAO Configuration Type Definition
   * @type {_Config}
   * @description Defines the configuration structure for DAO operations.
   * 
   * Features:
   * - Strong typing for configuration parameters
   * - Built-in validation for Topic IDs
   * - Consensus timestamp format verification
   * - Implements IHashgraph.ILedger.IDAO.IConfig interface
   * 
   * @see {@link _Config} For detailed implementation
   * @memberof _DAO
   */
  export type Config = _Config
}
