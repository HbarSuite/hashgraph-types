import { ApiSchema } from "@hsuite/nestjs-swagger";
import { _Burn } from './models/hashgraph.ledger.hts.nft.models.burn.model';
import { _Info } from './models/hashgraph.ledger.hts.nft.models.info.model';
import { _Mint } from './models/hashgraph.ledger.hts.nft.models.mint.model';
import { _Wipe } from './models/hashgraph.ledger.hts.nft.models.wipe.model';

/**
 * Namespace for Non-Fungible Token (NFT) operations in Hedera Token Service (HTS)
 * @namespace _Nft
 * @description Provides interfaces and types for managing NFT lifecycle operations including:
 * - Minting new NFTs
 * - Burning existing NFTs
 * - Wiping NFTs from accounts
 * - Retrieving NFT information
 */
export namespace _Nft {
    /**
     * Interface for wiping NFTs from an account
     * @class Wipe
     * @extends {_Wipe}
     * @description Defines the structure for wiping specific NFT serial numbers from a target account
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Hts.Nft.Wipe' })
    export class Wipe extends _Wipe {}

    /**
     * Interface for minting new NFTs
     * @class Mint
     * @extends {_Mint}
     * @description Defines the structure for minting new NFTs with specific metadata and properties
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Hts.Nft.Mint' })
    export class Mint extends _Mint {}

    /**
     * Interface for burning existing NFTs
     * @class Burn
     * @extends {_Burn}
     * @description Defines the structure for permanently removing specific NFT serial numbers from circulation
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Hts.Nft.Burn' })
    export class Burn extends _Burn {}

    /**
     * Interface for retrieving NFT information
     * @class Info
     * @extends {_Info}
     * @description Defines the structure for querying detailed information about specific NFTs
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Hts.Nft.Info' })
    export class Info extends _Info {}
}