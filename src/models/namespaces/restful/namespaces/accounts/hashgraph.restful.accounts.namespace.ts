import { ApiSchema } from "@hsuite/nestjs-swagger";
import { _Info } from './models/hashgraph.restful.accounts.models.info.model';
import { _Response } from './models/hashgraph.restful.accounts.models.response.model';
import { _Allowance, _AllowanceResponse } from './models/hashgraph.restful.accounts.models.allowance.model';
import { _NftAllowance, _NftAllowanceResponse } from './models/hashgraph.restful.accounts.models.nft-allowance.model';
import { _TokenRelationshipResponse } from './models/hashgraph.restful.accounts.models.token-relationship.model';
/**
 * @file hashgraph.restful.accounts.namespace.ts
 * @namespace _Accounts
 * @description Comprehensive namespace for Hashgraph account-related interfaces and types within the REST API context.
 * Provides models and types for managing all aspects of Hedera accounts including creation, updates,
 * allowances, token relationships, and NFT operations through standardized REST APIs.
 * @category Hashgraph
 * @subcategory Restful
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Create a new account info instance
 * const accountInfo = new _Accounts.Info({
 *   account: "0.0.123456",
 *   balance: {
 *     balance: "1000000000", // in tinybars
 *     tokens: [{
 *       token_id: "0.0.789012",
 *       balance: "1000"
 *     }]
 *   },
 *   key: {
 *     key: "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"
 *   },
 *   decline_reward: false,
 *   staked_account_id: "0.0.789012",
 *   stake_period_start: "2023-01-01T00:00:00.000Z"
 * });
 * ```
 */
export namespace _Accounts {
    /**
     * Account information model
     * @class Info
     * @extends {_Info}
     * @description Comprehensive model representing detailed information about a Hashgraph account.
     * Provides complete account details including:
     * - Account ID and aliases
     * - Crypto and token balances
     * - Account creation and expiry timestamps
     * - Staking configuration and rewards
     * - Cryptographic keys and signatures
     * - Token relationships and associations
     * - Transaction thresholds and settings
     * - Auto-renew period and proxy
     * 
     * @example
     * ```typescript
     * // Instantiate account info with detailed configuration
     * const info = new Info({
     *   account: "0.0.123456",
     *   balance: {
     *     balance: "1000000000",
     *     tokens: [{
     *       token_id: "0.0.789012",
     *       balance: "1000"
     *     }]
     *   },
     *   key: {
     *     key: "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"
     *   },
     *   auto_renew_period: "7776000", // 90 days in seconds
     *   max_automatic_token_associations: 0,
     *   memo: "Main treasury account"
     * });
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Accounts.Info'
    })
    export class Info extends _Info {}

    /**
     * Account response model
     * @class Response
     * @extends {_Response}
     * @description Standardized response structure for account-related API endpoints.
     * Contains an array of account information objects and HATEOAS-compliant pagination links
     * for navigating through multiple results. Implements consistent response patterns across
     * the Hashgraph REST API for account queries.
     * 
     * @example
     * ```typescript
     * // Example response structure
     * const response = new Response({
     *   accounts: [
     *     {
     *       account: "0.0.123456",
     *       balance: { balance: "1000000000" }
     *     }
     *   ],
     *   links: {
     *     next: "https://api.example.com/accounts?limit=25&start=0.0.123457"
     *   }
     * });
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Accounts.Response'
    })
    export class Response extends _Response {}

    /**
     * Crypto allowance model
     * @class Allowance
     * @extends {_Allowance}
     * @description Represents the allowance structure for crypto transfer approvals.
     * Defines the relationship between an owner account and a spender account,
     * specifying the approved amount and temporal constraints for crypto transfers.
     * 
     * @example
     * ```typescript
     * // Create crypto allowance
     * const allowance = new Allowance({
     *   owner: "0.0.123456",
     *   spender: "0.0.789012",
     *   amount: "1000000000", // Amount in tinybars
     *   timestamp: {
     *     from: "2023-01-01T00:00:00.000Z",
     *     to: "2024-01-01T00:00:00.000Z"
     *   }
     * });
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Accounts.Allowance'
    })
    export class Allowance extends _Allowance {}

    /**
     * Crypto allowance response model
     * @class AllowanceResponse
     * @extends {_AllowanceResponse}
     * @description Standardized response structure for crypto allowance queries.
     * Contains an array of allowance records with pagination support for efficient
     * data retrieval and navigation through large result sets.
     * 
     * @example
     * ```typescript
     * // Example allowance response
     * const response = new AllowanceResponse({
     *   allowances: [
     *     {
     *       owner: "0.0.123456",
     *       spender: "0.0.789012",
     *       amount: "1000000000"
     *     }
     *   ],
     *   links: {
     *     next: "https://api.example.com/allowances?limit=25&start=0.0.123457"
     *   }
     * });
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Accounts.AllowanceResponse'
    })
    export class AllowanceResponse extends _AllowanceResponse {}

    /**
     * NFT allowance model
     * @class NftAllowance
     * @extends {_NftAllowance}
     * @description Represents the allowance structure for NFT transfer approvals.
     * Defines the delegation of transfer rights for specific NFTs between accounts,
     * including serial number ranges and temporal constraints.
     * 
     * @example
     * ```typescript
     * // Create NFT allowance
     * const nftAllowance = new NftAllowance({
     *   token_id: "0.0.123456",
     *   owner: "0.0.789012",
     *   spender: "0.0.345678",
     *   serial_numbers: ["1", "2", "3"],
     *   approved_for_all: false
     * });
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Accounts.NftAllowance'
    })
    export class NftAllowance extends _NftAllowance {}

    /**
     * NFT allowance response model
     * @class NftAllowanceResponse
     * @extends {_NftAllowanceResponse}
     * @description Standardized response structure for NFT allowance queries.
     * Provides paginated access to NFT allowance records with HATEOAS-compliant
     * navigation links for traversing large result sets.
     * 
     * @example
     * ```typescript
     * // Example NFT allowance response
     * const response = new NftAllowanceResponse({
     *   allowances: [
     *     {
     *       token_id: "0.0.123456",
     *       owner: "0.0.789012",
     *       spender: "0.0.345678",
     *       serial_numbers: ["1", "2", "3"]
     *     }
     *   ],
     *   links: {
     *     next: "https://api.example.com/nft-allowances?limit=25&start=0.0.123457"
     *   }
     * });
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Accounts.NftAllowanceResponse'
    })
    export class NftAllowanceResponse extends _NftAllowanceResponse {}

    /**
     * Token relationship response model
     * @class TokenRelationshipResponse
     * @extends {_TokenRelationshipResponse}
     * @description Standardized response structure for token relationship queries.
     * Provides detailed information about an account's relationship with tokens,
     * including association status, balance, KYC status, and freeze status.
     * 
     * @example
     * ```typescript
     * // Example token relationship response
     * const response = new TokenRelationshipResponse({
     *   tokens: [
     *     {
     *       token_id: "0.0.123456",
     *       balance: "1000",
     *       frozen: false,
     *       kyc_granted: true,
     *       automatic_association: false
     *     }
     *   ],
     *   links: {
     *     next: "https://api.example.com/token-relationships?limit=25&start=0.0.123457"
     *   }
     * });
     * ```
     */
    @ApiSchema({ name: 'Hashgraph.Restful.Accounts.TokenRelationshipResponse' })
    export class TokenRelationshipResponse extends _TokenRelationshipResponse {}
}