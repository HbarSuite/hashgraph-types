import { _IDetails } from './hashgraph.restful.transactions.details.interface';

/**
 * @file hashgraph.restful.transactions.response-by-id.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the structure for transaction lookup responses in the Hashgraph Network REST API.
 * This interface represents the response format for transaction ID-based queries, including:
 * - Detailed transaction information
 * - Single transaction focus
 * - Complete transaction metadata
 * @category Interfaces
 * @subcategory Transactions
 * @since 2.0.0
 */

/**
 * Transaction ID Response Interface
 * @interface _IResponseById
 * @description Represents the response structure for transaction ID-based queries in the Hashgraph network.
 * This interface provides:
 * - Direct transaction lookup results
 * - Comprehensive transaction details
 * - Single transaction focus
 * - Complete metadata access
 * Used for retrieving specific transaction information.
 * @category Interfaces
 * @subcategory Transactions
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a basic transaction lookup response
 * const basicResponse: _IResponseById = {
 *   transactions: [
 *     {
 *       transaction_id: "0.0.1234@1234567890.000000000",
 *       consensus_timestamp: "1234567890.000000000",
 *       name: "CRYPTOTRANSFER",
 *       result: "SUCCESS",
 *       transfers: [
 *         { account: "0.0.1234", amount: -1000000000 },  // -10 HBAR
 *         { account: "0.0.5678", amount: 1000000000 }    // +10 HBAR
 *       ]
 *     }
 *   ]
 * };
 * 
 * // Example of a token transfer transaction response
 * const tokenResponse: _IResponseById = {
 *   transactions: [
 *     {
 *       transaction_id: "0.0.1234@1234567890.000000001",
 *       name: "TOKENTRANSFER",
 *       token_transfers: [
 *         {
 *           token_id: "0.0.9012",
 *           account: "0.0.1234",
 *           amount: 100
 *         }
 *       ],
 *       result: "SUCCESS"
 *     }
 *   ]
 * };
 * 
 * // Example of handling the response
 * const processTransactionResponse = (response: _IResponseById): void => {
 *   const transaction = response.transactions?.[0];
 *   if (!transaction) {
 *     console.log('Transaction not found');
 *     return;
 *   }
 *   
 *   console.log(`Transaction ID: ${transaction.transaction_id}`);
 *   console.log(`Type: ${transaction.name}`);
 *   console.log(`Status: ${transaction.result}`);
 *   
 *   if (transaction.transfers?.length) {
 *     console.log('HBAR Transfers:');
 *     transaction.transfers.forEach(transfer => {
 *       const amount = transfer.amount / 100_000_000;  // Convert tinybars to HBAR
 *       console.log(`  ${transfer.account}: ${amount} HBAR`);
 *     });
 *   }
 *   
 *   if (transaction.token_transfers?.length) {
 *     console.log('Token Transfers:');
 *     transaction.token_transfers.forEach(transfer => {
 *       console.log(`  Token ${transfer.token_id}: ${transfer.amount} units`);
 *     });
 *   }
 * };
 * ```
 */
export interface _IResponseById {
    /**
     * Transaction Details
     * @type {Array<_IDetails>}
     * @description Collection of transaction details for the queried ID.
     * Properties:
     * - Optional field
     * - Typically contains one transaction
     * - Full transaction information
     * - Includes all metadata
     * - Complete transfer details
     * @required false
     * @see {@link _IDetails}
     * @memberof _IResponseById
     * @since 2.0.0
     */
    transactions?: Array<_IDetails>;
}