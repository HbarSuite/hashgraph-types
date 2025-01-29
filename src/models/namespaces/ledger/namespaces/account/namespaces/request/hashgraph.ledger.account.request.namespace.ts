import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Create } from './models/hashgraph.ledger.account.request.models.create.model'
import { _Delete } from './models/hashgraph.ledger.account.request.models.delete.model'
import { _Update } from './models/hashgraph.ledger.account.request.models.update.model'
import { _Transfer } from './namespaces/transfer/hashgraph.ledger.account.request.transfer.namespace'

/**
 * Namespace containing types and interfaces for Hashgraph account-related requests
 * 
 * @namespace _Request
 * @description Provides comprehensive functionality for managing all account-related requests including:
 * - Complete account creation request handling
 * - Advanced deletion request processing
 * - Comprehensive update request management
 * - Robust transfer operation coordination
 * @category Hashgraph
 * @subcategory Account Requests
 * @since 2.0.0
 * 
 * This namespace provides complete request management:
 * - Account Creation:
 *   - Initial balance configuration
 *   - Key setup and validation
 *   - Token association handling
 *   - Transaction settings
 *   - State initialization
 * 
 * - Account Deletion:
 *   - Balance transfer coordination
 *   - Resource cleanup
 *   - State verification
 *   - History archival
 *   - Relationship termination
 * 
 * - Account Updates:
 *   - Memo modifications
 *   - Token relationship changes
 *   - Staking preference updates
 *   - Key rotations
 *   - Setting adjustments
 * 
 * - Transfer Operations:
 *   - HBAR transfers
 *   - Token movements
 *   - NFT ownership changes
 *   - Balance validations
 *   - Transaction tracking
 * 
 * Key features:
 * - Complete request lifecycle management
 * - Advanced validation framework
 * - Comprehensive error handling
 * - Detailed audit logging
 * - Strong type safety
 */
export namespace _Request {
    /**
     * Class for handling account deletion requests
     * 
     * @class Delete
     * @extends {_Delete}
     * @description Provides comprehensive functionality for managing account deletion requests including:
     * - Complete balance transfer coordination
     * - Advanced resource cleanup processes
     * - Comprehensive state verification
     * - Detailed history archival
     * - Robust relationship termination
     * 
     * Key capabilities:
     * - Balance Management:
     *   - Remaining balance calculation
     *   - Transfer destination validation
     *   - Transaction scheduling
     *   - Amount verification
     * 
     * - Resource Cleanup:
     *   - Token dissociation
     *   - File removal
     *   - Link termination
     * 
     * - State Handling:
     *   - Status verification
     *   - Lock management
     *   - Update blocking
     *   - History preservation
     * 
     * @example
     * // Create a deletion request for account 0.0.123456
     * const deleteRequest = new Delete("0.0.123456");
     * 
     * // Create a deletion request with specific options
     * const deleteRequest = new Delete(
     *   "0.0.123456",           // Account ID
     *   "0.0.789012",           // Transfer destination
     *   true                    // Include all tokens
     * );
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Account.Request.Delete' })
    export class Delete extends _Delete {}

    /**
     * Class for handling account update requests
     * 
     * @class Update
     * @extends {_Update}
     * @description Provides comprehensive functionality for managing account updates including:
     * - Complete memo modification system
     * - Advanced token relationship management
     * - Comprehensive staking configuration
     * - Detailed key rotation handling
     * - Robust setting adjustment
     * 
     * Key capabilities:
     * - Memo Updates:
     *   - Content validation
     *   - Length verification
     *   - Format checking
     *   - History tracking
     * 
     * - Token Management:
     *   - Association changes
     *   - Relationship updates
     *   - Permission modifications
     *   - Status tracking
     * 
     * - Staking Control:
     *   - Preference updates
     *   - Node assignments
     *   - Reward settings
     *   - Period management
     * 
     * @example
     * // Create basic update request
     * const updateRequest = new Update("New memo", 5, false, 123);
     * 
     * // Create detailed update request
     * const updateRequest = new Update(
     *   "Updated account description",  // New memo
     *   5,                             // Max token associations
     *   false,                         // Auto renew
     *   123,                           // Staking node
     *   true,                          // Decline rewards
     *   ["0.0.111", "0.0.222"]        // Token associations
     * );
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Account.Request.Update' })
    export class Update extends _Update {}

    /**
     * Class for handling account creation requests
     * 
     * @class Create
     * @extends {_Create}
     * @description Provides comprehensive functionality for creating new accounts including:
     * - Complete initial balance management
     * - Advanced key configuration system
     * - Comprehensive token association handling
     * - Detailed transaction setting control
     * - Robust state initialization
     * 
     * Key capabilities:
     * - Balance Setup:
     *   - Amount validation
     *   - Currency specification
     *   - Minimum checks
     *   - Fee calculation
     * 
     * - Key Management:
     *   - Public key validation
     *   - Signature requirements
     *   - Threshold settings
     *   - Key rotation rules
     * 
     * - Token Configuration:
     *   - Association limits
     *   - Default relationships
     *   - Permission settings
     *   - Auto-association rules
     * 
     * @example
     * // Create basic account request
     * const createRequest = new Create(1000000, publicKey, 5, false);
     * 
     * // Create detailed account request
     * const createRequest = new Create(
     *   1000000,                // Initial balance
     *   publicKey,              // Account key
     *   5,                      // Max token associations
     *   false,                  // Auto renew
     *   "Account description",  // Memo
     *   true,                   // Receiver signature required
     *   ["0.0.111", "0.0.222"] // Initial token associations
     * );
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Account.Request.Create' })
    export class Create extends _Create {}

    /**
     * Namespace for handling account transfer operations
     * 
     * @property {_Transfer} Transfer
     * @description Provides comprehensive functionality for managing all transfer operations including:
     * - Complete HBAR transfer system
     * - Advanced token transfer handling
     * - Comprehensive NFT movement control
     * - Detailed transaction tracking
     * - Robust state management
     * 
     * Key capabilities:
     * - HBAR Transfers:
     *   - Amount validation
     *   - Balance verification
     *   - Fee calculation
     *   - Transaction scheduling
     * 
     * - Token Transfers:
     *   - Association checking
     *   - Balance tracking
     *   - Permission validation
     *   - Atomic operations
     * 
     * - NFT Management:
     *   - Ownership verification
     *   - Collection handling
     *   - Metadata preservation
     *   - History tracking
     * 
     * @type {_Transfer}
     * @memberof _Request
     * @since 2.0.0
     */
    export import Transfer = _Transfer
}