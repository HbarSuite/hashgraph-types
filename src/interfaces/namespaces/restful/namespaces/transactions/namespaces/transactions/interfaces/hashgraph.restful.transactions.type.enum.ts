/**
 * @file hashgraph.restful.transactions.type.enum.ts
 * @module @hashgraph/sdk
 * @description Defines the enumeration of transaction types in the Hashgraph Network REST API.
 * This enum represents all possible transaction operations, categorized into:
 * - Consensus Service Operations
 * - Cryptocurrency Operations
 * - Token Operations
 * - File Operations
 * - System Operations
 * - Scheduling Operations
 * @category Enums
 * @subcategory Transactions
 * @since 2.0.0
 */

/**
 * Transaction Type Enumeration
 * @enum _TypeEnum
 * @description Represents all possible transaction types in the Hashgraph network.
 * This enum provides:
 * - Comprehensive operation categorization
 * - Clear operation identification
 * - Type-safe transaction handling
 * - Operation documentation
 * Used for transaction type classification and validation.
 * @category Enums
 * @subcategory Transactions
 * @public
 * @readonly
 * 
 * @example
 * ```typescript
 * // Example of using transaction types in a switch statement
 * const processTransaction = (type: _TypeEnum): string => {
 *   switch (type) {
 *     case _TypeEnum.Cryptotransfer:
 *       return 'Processing HBAR transfer';
 *     case _TypeEnum.Tokentransfer:
 *       return 'Processing token transfer';
 *     case _TypeEnum.Contractcall:
 *       return 'Processing contract call';
 *     default:
 *       return 'Unknown transaction type';
 *   }
 * };
 * 
 * // Example of transaction type validation
 * const isTokenOperation = (type: _TypeEnum): boolean => {
 *   return type.toString().startsWith('TOKEN');
 * };
 * 
 * // Example of transaction type categorization
 * const categorizeTransaction = (type: _TypeEnum): string => {
 *   if (type.toString().startsWith('CONSENSUS')) return 'Consensus Service';
 *   if (type.toString().startsWith('CRYPTO')) return 'Cryptocurrency';
 *   if (type.toString().startsWith('TOKEN')) return 'Token Service';
 *   if (type.toString().startsWith('FILE')) return 'File Service';
 *   if (type.toString().startsWith('SCHEDULE')) return 'Scheduling Service';
 *   if (type.toString().startsWith('SYSTEM')) return 'System Service';
 *   return 'Other';
 * };
 * ```
 */
export enum _TypeEnum {
    /**
     * Create a new topic for the Hashgraph Consensus Service.
     * Properties:
     * - Creates a new HCS topic
     * - Configures topic parameters
     * - Sets initial permissions
     * - Enables message submission
     * - Establishes topic ownership
     */
    Consensuscreatetopic = 'CONSENSUSCREATETOPIC',

    /**
     * Delete an existing topic from the Hashgraph Consensus Service.
     * Properties:
     * - Removes HCS topic
     * - Requires owner authorization
     * - Permanent operation
     * - Stops message acceptance
     * - Maintains historical records
     */
    Consensusdeletetopic = 'CONSENSUSDELETETOPIC',

    /**
     * Submit a message to a topic in the Hashgraph Consensus Service.
     * Properties:
     * - Adds message to topic
     * - Requires topic existence
     * - Assigns sequence number
     * - Provides consensus timestamp
     * - Enables message retrieval
     */
    Consensussubmitmessage = 'CONSENSUSSUBMITMESSAGE',

    /**
     * Update the properties of an existing topic.
     * Properties:
     * - Modifies topic parameters
     * - Updates permissions
     * - Adjusts configurations
     * - Requires authorization
     * - Maintains topic ID
     */
    Consensusupdatetopic = 'CONSENSUSUPDATETOPIC',

    /**
     * Call a smart app function.
     * Properties:
     * - Executes contract code
     * - Handles parameters
     * - Returns results
     * - Modifies state
     * - Processes payments
     */
    Contractcall = 'CONTRACTCALL',

    /**
     * Deploy a new smart app instance.
     * Properties:
     * - Creates contract
     * - Initializes state
     * - Sets parameters
     * - Assigns contract ID
     * - Stores bytecode
     */
    Contractcreateinstance = 'CONTRACTCREATEINSTANCE',

    /**
     * Delete a smart app instance.
     * Properties:
     * - Removes contract
     * - Clears state
     * - Requires authorization
     * - Permanent operation
     * - Maintains records
     */
    Contractdeleteinstance = 'CONTRACTDELETEINSTANCE',

    /**
     * Update a smart app instance.
     * Properties:
     * - Modifies contract
     * - Updates parameters
     * - Maintains state
     * - Requires authorization
     * - Preserves contract ID
     */
    Contractupdateinstance = 'CONTRACTUPDATEINSTANCE',

    /**
     * Add a live hash to a crypto account.
     * Properties:
     * - Adds hash record
     * - Links to account
     * - Enables verification
     * - Requires authorization
     * - Maintains uniqueness
     */
    Cryptoaddlivehash = 'CRYPTOADDLIVEHASH',

    /**
     * Approve an allowance for a spender.
     * Properties:
     * - Sets spending limit
     * - Authorizes spender
     * - Specifies token type
     * - Time-bound validity
     * - Revocable permission
     */
    Cryptoapproveallowance = 'CRYPTOAPPROVEALLOWANCE',

    /**
     * Create a new crypto account.
     * Properties:
     * - Generates account
     * - Sets initial balance
     * - Assigns public key
     * - Configures settings
     * - Issues account ID
     */
    Cryptocreateaccount = 'CRYPTOCREATEACCOUNT',

    /**
     * Delete a crypto account.
     * Properties:
     * - Removes account
     * - Transfers balance
     * - Requires authorization
     * - Permanent operation
     * - Maintains records
     */
    Cryptodelete = 'CRYPTODELETE',

    /**
     * Delete an existing allowance for a spender.
     * Properties:
     * - Removes allowance
     * - Revokes permission
     * - Requires authorization
     * - Immediate effect
     * - Updates records
     */
    Cryptodeleteallowance = 'CRYPTODELETEALLOWANCE',

    /**
     * Delete a live hash from a crypto account.
     * Properties:
     * - Removes hash
     * - Updates account
     * - Requires authorization
     * - Immediate effect
     * - Maintains history
     */
    Cryptodeletelivehash = 'CRYPTODELETELIVEHASH',

    /**
     * Transfer cryptocurrency between accounts.
     * Properties:
     * - Moves HBAR
     * - Updates balances
     * - Atomic operation
     * - Requires funds
     * - Records transfer
     */
    Cryptotransfer = 'CRYPTOTRANSFER',

    /**
     * Update the properties of a crypto account.
     * Properties:
     * - Modifies settings
     * - Updates keys
     * - Adjusts parameters
     * - Requires authorization
     * - Maintains ID
     */
    Cryptoupdateaccount = 'CRYPTOUPDATEACCOUNT',

    /**
     * Submit an Ethereum transaction.
     * Properties:
     * - Processes EVM tx
     * - Handles gas
     * - Returns results
     * - Maintains compatibility
     * - Updates state
     */
    Ethereumtransaction = 'ETHEREUMTRANSACTION',

    /**
     * Append content to an existing file.
     * Properties:
     * - Adds content
     * - Maintains file
     * - Updates size
     * - Requires authorization
     * - Preserves existing
     */
    Fileappend = 'FILEAPPEND',

    /**
     * Create a new file.
     * Properties:
     * - Creates file
     * - Sets content
     * - Assigns ID
     * - Sets permissions
     * - Enables updates
     */
    Filecreate = 'FILECREATE',

    /**
     * Delete an existing file.
     * Properties:
     * - Removes file
     * - Requires authorization
     * - Permanent operation
     * - Maintains records
     * - Frees storage
     */
    Filedelete = 'FILEDELETE',

    /**
     * Update the content of an existing file.
     * Properties:
     * - Modifies content
     * - Maintains ID
     * - Updates timestamp
     * - Requires authorization
     * - Preserves history
     */
    Fileupdate = 'FILEUPDATE',

    /**
     * Freeze the transfer of tokens.
     * Properties:
     * - Blocks transfers
     * - Affects account
     * - Token specific
     * - Requires authorization
     * - Reversible action
     */
    Freeze = 'FREEZE',

    /**
     * Update the staking information for a node.
     * Properties:
     * - Updates stake
     * - Modifies rewards
     * - Affects consensus
     * - Requires authorization
     * - Network impact
     */
    Nodestakeupdate = 'NODESTAKEUPDATE',

    /**
     * Create a new scheduled transaction.
     * Properties:
     * - Schedules execution
     * - Sets parameters
     * - Requires signatures
     * - Time-bound
     * - Cancellable
     */
    Schedulecreate = 'SCHEDULECREATE',

    /**
     * Delete a scheduled transaction.
     * Properties:
     * - Removes schedule
     * - Cancels execution
     * - Requires authorization
     * - Immediate effect
     * - Maintains records
     */
    Scheduledelete = 'SCHEDULEDELETE',

    /**
     * Add a signature to a scheduled transaction.
     * Properties:
     * - Adds signature
     * - Updates status
     * - Enables execution
     * - Requires authorization
     * - Maintains schedule
     */
    Schedulesign = 'SCHEDULESIGN',

    /**
     * Delete a file or smart app with special privileges.
     * Properties:
     * - System level
     * - Special access
     * - Permanent effect
     * - Requires authorization
     * - Maintains records
     */
    Systemdelete = 'SYSTEMDELETE',

    /**
     * Undelete a previously deleted file or smart app.
     * Properties:
     * - System level
     * - Restores access
     * - Special privileges
     * - Requires authorization
     * - Updates records
     */
    Systemundelete = 'SYSTEMUNDELETE',

    /**
     * Associate a token with an account.
     * Properties:
     * - Links token
     * - Enables transfers
     * - Account specific
     * - Requires authorization
     * - Updates records
     */
    Tokenassociate = 'TOKENASSOCIATE',

    /**
     * Burn tokens, removing them from circulation.
     * Properties:
     * - Reduces supply
     * - Permanent removal
     * - Requires authorization
     * - Updates total
     * - Records burn
     */
    Tokenburn = 'TOKENBURN',

    /**
     * Create a new token.
     * Properties:
     * - Creates token
     * - Sets parameters
     * - Assigns ID
     * - Configures supply
     * - Establishes rules
     */
    Tokencreation = 'TOKENCREATION',

    /**
     * Delete a token.
     * Properties:
     * - Removes token
     * - Requires authorization
     * - Permanent operation
     * - Maintains records
     * - Updates accounts
     */
    Tokendeletion = 'TOKENDELETION',

    /**
     * Dissociate a token from an account.
     * Properties:
     * - Removes link
     * - Blocks transfers
     * - Account specific
     * - Requires authorization
     * - Updates records
     */
    Tokendissociate = 'TOKENdissociate',

    /**
     * Update the fee schedule for a token.
     * Properties:
     * - Modifies fees
     * - Updates rules
     * - Requires authorization
     * - Immediate effect
     * - Maintains token
     */
    Tokenfeescheduleupdate = 'TOKENFEESCHEDULEUPDATE',

    /**
     * Freeze an account's ability to transfer tokens.
     * Properties:
     * - Blocks transfers
     * - Account specific
     * - Token specific
     * - Requires authorization
     * - Reversible action
     */
    Tokenfreeze = 'TOKENFREEZE',

    /**
     * Grant KYC status to an account for a token.
     * Properties:
     * - Enables KYC
     * - Account specific
     * - Token specific
     * - Requires authorization
     * - Updates status
     */
    Tokengrantkyc = 'TOKENGRANTKYC',

    /**
     * Mint new tokens, adding them to circulation.
     * Properties:
     * - Increases supply
     * - Creates tokens
     * - Requires authorization
     * - Updates total
     * - Records mint
     */
    Tokenmint = 'TOKENMINT',

    /**
     * Pause all operations for a token.
     * Properties:
     * - Stops transfers
     * - Token wide
     * - Temporary state
     * - Requires authorization
     * - Reversible action
     */
    Tokenpause = 'TOKENPAUSE',

    /**
     * Revoke KYC status from an account for a token.
     * Properties:
     * - Removes KYC
     * - Account specific
     * - Token specific
     * - Requires authorization
     * - Updates status
     */
    Tokenrevokekyc = 'TOKENREVOKEKYC',

    /**
     * Unfreeze an account's ability to transfer tokens.
     * Properties:
     * - Enables transfers
     * - Account specific
     * - Token specific
     * - Requires authorization
     * - Updates status
     */
    Tokenunfreeze = 'TOKENUNFREEZE',

    /**
     * Unpause operations for a token.
     * Properties:
     * - Resumes transfers
     * - Token wide
     * - Removes pause
     * - Requires authorization
     * - Updates status
     */
    Tokenunpause = 'TOKENUNPAUSE',

    /**
     * Update the properties of a token.
     * Properties:
     * - Modifies token
     * - Updates parameters
     * - Requires authorization
     * - Maintains ID
     * - Records changes
     */
    Tokenupdate = 'TOKENUPDATE',

    /**
     * Remove tokens from an account.
     * Properties:
     * - Removes tokens
     * - Account specific
     * - Requires authorization
     * - Updates balance
     * - Records wipe
     */
    Tokenwipe = 'TOKENWIPE',

    /**
     * Submit a transaction without checks.
     * Properties:
     * - Bypasses validation
     * - High risk
     * - Special access
     * - Limited use
     * - Requires caution
     */
    Uncheckedsubmit = 'UNCHECKED',

    /**
     * Represents an unknown transaction type.
     * Properties:
     * - Default type
     * - Unrecognized operations
     * - Limited processing
     * - Requires investigation
     * - System protection
     */
    Unknown = 'UNKNOWN',

    /**
     * Generate pseudo-random numbers.
     * Properties:
     * - Creates random values
     * - System service
     * - Deterministic output
     * - Network-based
     * - Verifiable result
     */
    Utilprng = 'UTILPRNG'
}