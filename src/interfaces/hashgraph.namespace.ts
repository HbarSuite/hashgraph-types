import { _ITransactionDetails } from './interfaces/hashgraph.transaction-details.interface'
import { _ITransactionIdEntity } from './interfaces/hashgraph.transaction-identity.interface'
import { _IPrivateKeyList } from './interfaces/hashgraph.private-keylist.interface'
import { _ITokenBalance } from './interfaces/hashgraph.token-balance.interface'
import { _IAccountBalance } from './interfaces/hashgraph.account-balance.interface'
import { _IMirrorNode } from './interfaces/hashgraph.mirror-node.interface'
import { _IOperator } from './interfaces/hashgraph.operator.interface'
import { _IIssuer } from './interfaces/hashgraph.issuer.interface'
import { _IOptions } from './interfaces/hashgraph.options.interface'
import { _ILedger } from './namespaces/ledger/hashgraph.ledger.namespace'
import { _IDID } from './namespaces/did/hashgraph.did.namespace'
import { _ICommons } from './namespaces/commons/hashgraph.commons.namespace'
import { _IRestful } from './namespaces/restful/hashgraph.restful.namespace'

/**
 * @file hedera.namespace.ts
 * @module @hashgraph/sdk
 * @namespace IHashgraph
 * @description This namespace contains all the interfaces and types related to Hashgraph operations and entities.
 * It provides a comprehensive set of types for working with the Hashgraph network, including transaction management,
 * account operations, DID handling, and RESTful API interactions.
 * @category Namespaces
 * @since 2.0.0
 * @property {typeof _ITransactionDetails} ITransactionDetails - Interface for transaction details and metadata
 * @property {typeof _ITransactionIdEntity} ITransactionIdEntity - Interface for transaction identification
 * @property {typeof _IPrivateKeyList} IPrivateKeyList - Interface for managing lists of private keys
 * @property {typeof _ITokenBalance} ITokenBalance - Interface for token balance information
 * @property {typeof _IAccountBalance} IAccountBalance - Interface for account balance details
 * @property {typeof _IMirrorNode} IMirrorNode - Interface for mirror node configurations and operations
 * @property {typeof _IOperator} IOperator - Interface for Hashgraph network operator details
 * @property {typeof _IIssuer} IIssuer - Interface for token/credential issuer information
 * @property {typeof _IOptions} IOptions - Interface for configuration options
 * @property {typeof _ICommons} ICommons - Namespace containing common utility interfaces
 * @property {typeof _IDID} IDID - Namespace for Decentralized Identifier (DID) operations
 * @property {typeof _IRestful} IRestful - Namespace for RESTful API interactions
 * @property {typeof _ILedger} ILedger - Namespace for ledger-related operations
 * @example
 * ```typescript
 * // Example usage of IHashgraph namespace
 * import { IHashgraph } from '@hashgraph/sdk';
 * 
 * // Using transaction details interface
 * const txDetails: IHashgraph.ITransactionDetails = {
 *   transactionId: "0.0.1234@1234567890.000000000",
 *   nodeId: "0.0.3",
 *   status: "SUCCESS"
 * };
 * 
 * // Using account balance interface
 * const balance: IHashgraph.IAccountBalance = {
 *   hbars: 100,
 *   tokens: [
 *     { tokenId: "0.0.5678", balance: 1000 }
 *   ]
 * };
 * ```
 */
export namespace IHashgraph {
    /**
     * Transaction Details Interface
     * @type {_ITransactionDetails}
     * @description Provides structure for detailed transaction information including
     * metadata, status, and execution details.
     * @memberof IHashgraph
     * @since 2.0.0
     * @example
     * ```typescript
     * const details: IHashgraph.ITransactionDetails = {
     *   transactionId: "0.0.1234@1234567890.000000000",
     *   nodeId: "0.0.3",
     *   status: "SUCCESS",
     *   result: { ... }
     * };
     * ```
     */
    export type ITransactionDetails = _ITransactionDetails

    /**
     * Transaction Identity Interface
     * @type {_ITransactionIdEntity}
     * @description Defines the structure for uniquely identifying transactions
     * within the Hashgraph network.
     * @memberof IHashgraph
     * @since 2.0.0
     * @example
     * ```typescript
     * const txId: IHashgraph.ITransactionIdEntity = {
     *   transactionId: "0.0.1234@1234567890.000000000",
     *   nodeId: "0.0.3"
     * };
     * ```
     */
    export type ITransactionIdEntity = _ITransactionIdEntity

    /**
     * Private Key List Interface
     * @type {_IPrivateKeyList}
     * @description Provides structure for managing collections of private keys
     * used in various Hashgraph operations.
     * @memberof IHashgraph
     * @since 2.0.0
     * @example
     * ```typescript
     * const keyList: IHashgraph.IPrivateKeyList = {
     *   keys: ["302e020100300506032b657004220420..."],
     *   threshold: 2
     * };
     * ```
     */
    export type IPrivateKeyList = _IPrivateKeyList

    /**
     * Token Balance Interface
     * @type {_ITokenBalance}
     * @description Defines the structure for token balance information,
     * including amounts and associated metadata.
     * @memberof IHashgraph
     * @since 2.0.0
     * @example
     * ```typescript
     * const tokenBalance: IHashgraph.ITokenBalance = {
     *   tokenId: "0.0.5678",
     *   balance: 1000,
     *   decimals: 8
     * };
     * ```
     */
    export type ITokenBalance = _ITokenBalance

    /**
     * Account Balance Interface
     * @type {_IAccountBalance}
     * @description Provides structure for account balance information,
     * including cryptocurrency and token holdings.
     * @memberof IHashgraph
     * @since 2.0.0
     * @example
     * ```typescript
     * const accountBalance: IHashgraph.IAccountBalance = {
     *   hbars: 100,
     *   tokens: [
     *     { tokenId: "0.0.5678", balance: 1000 }
     *   ]
     * };
     * ```
     */
    export type IAccountBalance = _IAccountBalance

    /**
     * Mirror Node Interface
     * @type {_IMirrorNode}
     * @description Defines the structure for interacting with Hashgraph mirror nodes,
     * including configuration and query operations.
     * @memberof IHashgraph
     * @since 2.0.0
     * @example
     * ```typescript
     * const mirrorNode: IHashgraph.IMirrorNode = {
     *   url: "https://mainnet-public.mirrornode.hedera.com",
     *   apiKey: "your-api-key",
     *   pollingInterval: 5000
     * };
     * ```
     */
    export type IMirrorNode = _IMirrorNode

    /**
     * Operator Interface
     * @type {_IOperator}
     * @description Provides structure for Hashgraph network operator information
     * and credentials.
     * @memberof IHashgraph
     * @since 2.0.0
     * @example
     * ```typescript
     * const operator: IHashgraph.IOperator = {
     *   accountId: "0.0.1234",
     *   privateKey: "302e020100300506032b657004220420...",
     *   publicKey: "302a300506032b6570032100..."
     * };
     * ```
     */
    export type IOperator = _IOperator

    /**
     * Issuer Interface
     * @type {_IIssuer}
     * @description Defines the structure for entities that can issue tokens
     * or credentials on the Hashgraph network.
     * @memberof IHashgraph
     * @since 2.0.0
     * @example
     * ```typescript
     * const issuer: IHashgraph.IIssuer = {
     *   accountId: "0.0.1234",
     *   isKyc: true,
     *   credentials: { ... }
     * };
     * ```
     */
    export type IIssuer = _IIssuer

    /**
     * Options Interface
     * @type {_IOptions}
     * @description Provides structure for configuration options used across
     * various Hashgraph operations.
     * @memberof IHashgraph
     * @since 2.0.0
     * @example
     * ```typescript
     * const options: IHashgraph.IOptions = {
     *   maxRetry: 3,
     *   timeout: 10000,
     *   network: "mainnet"
     * };
     * ```
     */
    export type IOptions = _IOptions

    /**
     * Commons Namespace
     * @type {_ICommons}
     * @description Contains common utility interfaces and types used across
     * the Hashgraph SDK.
     * @memberof IHashgraph
     * @since 2.0.0
     * @example
     * ```typescript
     * const timestamp: IHashgraph.ICommons.ITimestamp = {
     *   seconds: 1234567890,
     *   nanos: 123456789
     * };
     * ```
     */
    export import ICommons = _ICommons

    /**
     * DID (Decentralized Identifier) Namespace
     * @type {_IDID}
     * @description Contains interfaces and types for working with Decentralized
     * Identifiers on the Hashgraph network.
     * @memberof IHashgraph
     * @since 2.0.0
     * @example
     * ```typescript
     * const didDocument: IHashgraph.IDID.IDocument = {
     *   id: "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123",
     *   verificationMethod: [...],
     *   authentication: [...]
     * };
     * ```
     */
    export import IDID = _IDID

    /**
     * RESTful API Namespace
     * @type {_IRestful}
     * @description Contains interfaces and types for interacting with
     * Hashgraph's RESTful API endpoints.
     * @memberof IHashgraph
     * @since 2.0.0
     * @example
     * ```typescript
     * const accountInfo: IHashgraph.IRestful.IAccounts.IInfo = {
     *   accountId: "0.0.1234",
     *   balance: {
     *     timestamp: "2023-01-01T00:00:00.000Z",
     *     balance: 1000000
     *   }
     * };
     * ```
     */
    export import IRestful = _IRestful

    /**
     * Ledger Namespace
     * @type {_ILedger}
     * @description Contains interfaces and types for interacting with
     * the Hashgraph ledger and managing state.
     * @memberof IHashgraph
     * @since 2.0.0
     * @example
     * ```typescript
     * const ledgerState: IHashgraph.ILedger.IState = {
     *   timestamp: "2023-01-01T00:00:00.000Z",
     *   currentRound: 123456,
     *   lastConsensusAt: "2023-01-01T00:00:00.000Z"
     * };
     * ```
     */
    export import ILedger = _ILedger
}