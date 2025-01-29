import { _IMultiBase } from './hashgraph.did.ownership.multibase.interface';

/**
 * @summary _IRegister Interface
 * @description Represents a registration in the ownership namespace, extending the _IMultiBase interface.
 * This interface inherits the 'privateKeyMultibase' property from _IMultiBase and is currently reserved
 * for future implementation of additional ownership registration properties.
 * @interface _IRegister
 * @extends {_IMultiBase}
 * @remarks This interface is currently empty but may be extended in future versions to include
 * additional properties specific to ownership registration functionality.
 * @example
 * ```typescript
 * const register: _IRegister = {
 *   privateKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
 * };
 * ```
 */
export interface _IRegister extends _IMultiBase {
    // This interface is currently empty and reserved for future use.
    // It inherits the 'privateKeyMultibase' property from _IMultiBase.
    // Additional properties related to ownership registration may be added in future versions.
}