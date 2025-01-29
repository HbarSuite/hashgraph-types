import { ApiSchema } from "@hsuite/nestjs-swagger";
import { _Entity } from './models/hashgraph.restful.transactions.transfer.models.entity.model';
import { _Nft } from './models/hashgraph.restful.transactions.transfer.models.nft.model';
import { _Token } from './models/hashgraph.restful.transactions.transfer.models.token.model';

/**
 * @file hashgraph.restful.transactions.transfer.namespace.ts
 * @namespace _Transfer
 * @description Defines the core transfer-related types and classes for Hashgraph transactions.
 * This namespace encapsulates all transfer-specific functionality, including:
 * - Basic entity transfers (cryptocurrency)
 * - NFT (Non-Fungible Token) transfers
 * - Fungible token transfers
 * Each type supports both direct transfers and approval operations.
 * @category Hashgraph
 * @subcategory Transactions
 * @since 2.0.0
 */
export namespace _Transfer {
    /**
     * Entity transfer class that extends the base _Entity model
     * @class Entity
     * @extends {_Entity}
     * @description Represents a basic cryptocurrency transfer between accounts.
     * Used for standard HBAR transfers and approvals in the Hedera network.
     * Includes validation for account formats and transfer amounts.
     * @example
     * ```typescript
     * const transfer = new Entity({
     *   account: '0.0.12345',
     *   amount: 1000000, // 1 HBAR in tinybars
     *   is_approval: false
     * });
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Transactions.Transfer.Entity'
    })
    export class Entity extends _Entity { }

    /**
     * NFT transfer class that extends the base _Nft model
     * @class Nft
     * @extends {_Nft}
     * @description Handles Non-Fungible Token (NFT) transfers between accounts.
     * Supports both direct transfers and approval operations for NFTs.
     * Includes validation for account formats, token IDs, and serial numbers.
     * @example
     * ```typescript
     * const nftTransfer = new Nft({
     *   is_approval: false,
     *   receiver_account_id: '0.0.12345',
     *   sender_account_id: '0.0.54321',
     *   serial_number: 1,
     *   token_id: '0.0.789'
     * });
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Transactions.Transfer.Nft'
    })
    export class Nft extends _Nft { }

    /**
     * Token transfer class that extends the base _Token model
     * @class Token
     * @extends {_Token}
     * @description Manages fungible token transfers between accounts.
     * Supports both direct transfers and approval operations for fungible tokens.
     * Includes validation for account formats, token IDs, and transfer amounts.
     * @example
     * ```typescript
     * const tokenTransfer = new Token({
     *   token_id: '0.0.789',
     *   account: '0.0.12345',
     *   amount: 1000,
     *   is_approval: false
     * });
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Transactions.Transfer.Token'
    })
    export class Token extends _Token { }
}