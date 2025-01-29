import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Burn } from './models/hashgraph.ledger.hts.fungible_token.models.burn.model'
import { _Mint } from './models/hashgraph.ledger.hts.fungible_token.models.mint.model'
import { _Wipe } from './models/hashgraph.ledger.hts.fungible_token.models.wipe.model'

/**
 * Fungible Token Operations Namespace
 * @namespace _FungibleToken
 * @description Comprehensive namespace for managing fungible token operations in Hedera Token Service (HTS).
 * Provides interfaces for essential token management operations including:
 * - Token minting (creating new supply)
 * - Token burning (removing from circulation)
 * - Token wiping (removing from specific accounts)
 */
export namespace _FungibleToken {
    /**
     * Fungible Token Wipe Operation Interface
     * @class Wipe
     * @extends {_Wipe}
     * @description Defines the structure for removing specified amounts of fungible tokens
     * from target accounts. Used for compliance and account management purposes.
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Hts.FungibleToken.Wipe' })
    export class Wipe extends _Wipe { }

    /**
     * Fungible Token Mint Operation Interface
     * @class Mint
     * @extends {_Mint}
     * @description Defines the structure for creating new fungible tokens,
     * increasing the total supply. Includes parameters for amount and target accounts.
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Hts.FungibleToken.Mint' })
    export class Mint extends _Mint { }

    /**
     * Fungible Token Burn Operation Interface
     * @class Burn
     * @extends {_Burn}
     * @description Defines the structure for permanently removing fungible tokens
     * from circulation, reducing the total supply. Used for supply management.
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Hts.FungibleToken.Burn' })
    export class Burn extends _Burn { }
}