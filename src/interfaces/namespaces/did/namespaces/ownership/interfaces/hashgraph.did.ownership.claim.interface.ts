import { _IMultiBase } from './hashgraph.did.ownership.multibase.interface';

/**
 * DID Ownership Claim Interface
 * @export
 * @interface _IClaim
 * @namespace IHashgraph.IDID.IOwnership._IClaim
 * @description Represents a claim in the ownership namespace, extending the _IMultiBase interface to include private key information
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * @extends {_IMultiBase}
 * @example
 * ```typescript
 * const claim: _IClaim = {
 *   privateKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
 * };
 * ```
 */
export interface _IClaim extends _IMultiBase {
    /**
     * This interface inherits the 'privateKeyMultibase' property from _IMultiBase
     * and is reserved for future expansion of ownership claim functionality.
     * @remarks
     * The privateKeyMultibase property is used to store the private key associated
     * with DID ownership claims in multibase format.
     */
}