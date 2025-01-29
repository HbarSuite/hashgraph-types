import { _IVC } from '../hashgraph.did.vc.namespace';

/**
 * Interface representing a status change for a Verifiable Credential
 * @summary Status change interface for VCs
 * @description Defines the structure for status changes of Verifiable Credentials, including states like revoked, suspended, etc.
 * @interface _IStatusChange
 * @property {_IVC.Status} status - The new status to be applied to the VC
 */
export interface _IStatusChange {
    /**
     * The status value for the Verifiable Credential
     * @type {_IVC.Status}
     * @description Represents the new status state of the Verifiable Credential
     * @required true
     * @example 'revoked' | 'suspended' | 'resumed' | 'active'
     * @remarks This status indicates the current state of the VC in the system
     */
    status: _IVC.Status
}