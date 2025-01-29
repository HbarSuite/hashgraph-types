import { _IDetails } from './interfaces/hashgraph.restful.transactions.details.interface';
import { _IEntity } from './interfaces/hashgraph.restful.transactions.entity.interface';
import { _IId } from './interfaces/hashgraph.restful.transactions.id.interface';
import { _IResponseById } from './interfaces/hashgraph.restful.transactions.response-by-id.interface';
import { _IResponse } from './interfaces/hashgraph.restful.transactions.response.interface';
import { _TypeEnum } from './interfaces/hashgraph.restful.transactions.type.enum';

/**
 * @file transaction.namespace.ts
 * @module @hashgraph/sdk
 * @namespace _ITransaction
 * @description Defines and exports various interfaces and enumerations related to Hashgraph transactions.
 * This namespace consolidates all transaction-related types for easy access and management within the Hashgraph RESTful API context.
 * @category Namespaces
 * @subcategory Transactions
 * @since 2.0.0
 * @property {typeof _TypeEnum} TypeEnum - Enumeration of all possible transaction types
 * @property {_IEntity} IEntity - Interface defining transaction entity structure
 * @property {_IResponse} IResponse - Interface for multi-transaction response structure
 * @property {_IResponseById} IResponseById - Interface for single transaction response structure
 * @property {_IDetails} IDetails - Interface for detailed transaction information
 * @property {_IId} IId - Interface for transaction identifier structure
 * @example
 * ```typescript
 * // Example of using the transaction namespace
 * import { _ITransaction } from '@hashgraph/sdk';
 * 
 * // Using the TypeEnum
 * const txType = _ITransaction.TypeEnum.Cryptotransfer;
 * 
 * // Creating a transaction ID
 * const txId: _ITransaction.IId = {
 *   account_id: "0.0.1234",
 *   transaction_valid_start: "1234567890.000000000"
 * };
 * 
 * // Working with transaction details
 * const txDetails: _ITransaction.IDetails = {
 *   transaction_id: txId,
 *   type: txType,
 *   result: "SUCCESS"
 * };
 * ```
 */
export namespace _ITransaction {
    /**
     * Transaction Type Enumeration
     * @type {typeof _TypeEnum}
     * @description Enumerates the various types of transactions supported in the Hashgraph network.
     * Provides a comprehensive list of all possible transaction operations.
     * @memberof _ITransaction
     * @since 2.0.0
     * @example
     * ```typescript
     * // Using TypeEnum to specify transaction type
     * const txType = _ITransaction.TypeEnum.Cryptotransfer;
     * ```
     */
    export import TypeEnum = _TypeEnum

    /**
     * Transaction Entity Interface
     * @type {_IEntity}
     * @description Represents the structure of a transaction entity in the Hashgraph network.
     * Contains all properties and metadata associated with a transaction.
     * @memberof _ITransaction
     * @since 2.0.0
     * @example
     * ```typescript
     * // Creating a transaction entity
     * const entity: _ITransaction.IEntity = {
     *   transaction_id: "0.0.1234@1234567890.000000000",
     *   name: "CRYPTOTRANSFER",
     *   result: "SUCCESS"
     * };
     * ```
     */
    export type IEntity = _IEntity

    /**
     * Transaction Response Interface
     * @type {_IResponse}
     * @description Defines the structure of a response containing multiple transactions.
     * Includes pagination links and an array of transaction entities.
     * @memberof _ITransaction
     * @since 2.0.0
     * @example
     * ```typescript
     * // Processing a transaction response
     * const response: _ITransaction.IResponse = {
     *   transactions: [],
     *   links: {
     *     next: "/api/v1/transactions?limit=25&timestamp=lt:1234567890.000000000"
     *   }
     * };
     * ```
     */
    export type IResponse = _IResponse

    /**
     * Transaction Response By ID Interface
     * @type {_IResponseById}
     * @description Specifies the structure of a response when querying a transaction by its unique identifier.
     * Contains detailed information about a specific transaction.
     * @memberof _ITransaction
     * @since 2.0.0
     * @example
     * ```typescript
     * // Handling a transaction lookup response
     * const idResponse: _ITransaction.IResponseById = {
     *   transactions: [{
     *     transaction_id: "0.0.1234@1234567890.000000000",
     *     name: "CRYPTOTRANSFER",
     *     result: "SUCCESS"
     *   }]
     * };
     * ```
     */
    export type IResponseById = _IResponseById

    /**
     * Transaction Details Interface
     * @type {_IDetails}
     * @description Provides a comprehensive structure for detailed transaction information.
     * Includes all transaction properties, metadata, and associated data.
     * @memberof _ITransaction
     * @since 2.0.0
     * @example
     * ```typescript
     * // Working with transaction details
     * const details: _ITransaction.IDetails = {
     *   transaction_id: {
     *     account_id: "0.0.1234",
     *     transaction_valid_start: "1234567890.000000000"
     *   },
     *   type: _ITransaction.TypeEnum.Cryptotransfer,
     *   result: "SUCCESS"
     * };
     * ```
     */
    export type IDetails = _IDetails

    /**
     * Transaction ID Interface
     * @type {_IId}
     * @description Defines the structure of a unique transaction identifier in the Hashgraph network.
     * Contains components that uniquely identify a transaction.
     * @memberof _ITransaction
     * @since 2.0.0
     * @example
     * ```typescript
     * // Creating a transaction ID
     * const id: _ITransaction.IId = {
     *   account_id: "0.0.1234",
     *   transaction_valid_start: "1234567890.000000000",
     *   nonce: 1,
     *   scheduled: false
     * };
     * ```
     */
    export type IId = _IId
}