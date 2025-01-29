import { _IEntity } from './interfaces/hashgraph.restful.transactions.transfer.entity.interface';
import { _INft } from './interfaces/hashgraph.restful.transactions.transfer.nft.interface';
import { _IToken } from './interfaces/hashgraph.restful.transactions.transfer.token.interface';

/**
 * @file transfer.namespace.ts
 * @module @hashgraph/sdk
 * @namespace _ITransfer
 * @description Defines and exports various interfaces related to transfers within Hashgraph transactions.
 * This namespace consolidates all transfer-related types for easy access and management within the 
 * Hashgraph RESTful API context.
 * @category Namespaces
 * @subcategory Transfers
 * @since 2.0.0
 * @property {_IEntity} IEntity - Interface for basic entity transfer details
 * @property {_INft} INft - Interface for NFT transfer details
 * @property {_IToken} IToken - Interface for fungible token transfer details
 * @example
 * ```typescript
 * // Example of using the transfer namespace
 * import { _ITransfer } from '@hashgraph/sdk';
 * 
 * // Creating an entity transfer
 * const entityTransfer: _ITransfer.IEntity = {
 *   account: "0.0.1234",
 *   amount: 1000000000, // 10 HBAR
 *   is_approval: false
 * };
 * 
 * // Creating an NFT transfer
 * const nftTransfer: _ITransfer.INft = {
 *   sender: "0.0.1234",
 *   receiver: "0.0.5678",
 *   token_id: "0.0.9012",
 *   serial_number: 1,
 *   is_approval: false
 * };
 * 
 * // Creating a token transfer
 * const tokenTransfer: _ITransfer.IToken = {
 *   token_id: "0.0.9012",
 *   account: "0.0.1234",
 *   amount: 100,
 *   is_approval: false
 * };
 * ```
 */
export namespace _ITransfer {
    /**
     * Entity Transfer Interface
     * @type {_IEntity}
     * @description Represents a basic transfer involving an account, amount, and approval status.
     * Used for cryptocurrency transfers and basic token operations.
     * @memberof _ITransfer
     * @since 2.0.0
     * @example
     * ```typescript
     * const transfer: _ITransfer.IEntity = {
     *   account: "0.0.1234",
     *   amount: 1000000000, // 10 HBAR
     *   is_approval: false
     * };
     * ```
     */
    export type IEntity = _IEntity

    /**
     * NFT Transfer Interface
     * @type {_INft}
     * @description Represents a transfer of a Non-Fungible Token (NFT), including sender and receiver
     * account details, token identification, serial number, and approval status.
     * @memberof _ITransfer
     * @since 2.0.0
     * @example
     * ```typescript
     * const nftTransfer: _ITransfer.INft = {
     *   sender: "0.0.1234",
     *   receiver: "0.0.5678",
     *   token_id: "0.0.9012",
     *   serial_number: 1,
     *   is_approval: false
     * };
     * ```
     */
    export type INft = _INft

    /**
     * Token Transfer Interface
     * @type {_IToken}
     * @description Represents a transfer of fungible tokens, including token identification,
     * account details, transfer amount, and approval status.
     * @memberof _ITransfer
     * @since 2.0.0
     * @example
     * ```typescript
     * const tokenTransfer: _ITransfer.IToken = {
     *   token_id: "0.0.9012",
     *   account: "0.0.1234",
     *   amount: 100,
     *   is_approval: false
     * };
     * ```
     */
    export type IToken = _IToken
}