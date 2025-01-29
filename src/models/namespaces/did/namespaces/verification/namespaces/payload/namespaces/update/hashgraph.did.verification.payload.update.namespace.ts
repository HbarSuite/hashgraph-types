import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Body } from './models/hashgraph.did.verification.payload.update.models.body.model'
import { _Entity } from './models/hashgraph.did.verification.payload.update.models.entity.model'

/**
 * Namespace for managing verification method updates
 * 
 * @namespace _Update
 * @description Provides comprehensive functionality for managing verification method updates including:
 * - Complete update lifecycle management
 * - Request payload validation
 * - Data structure standardization
 * - Update process handling
 * @group DID Components
 * @category Models
 * @subcategory Verification
 * @since 2.0.0
 * 
 * This namespace provides a complete suite of tools for:
 * - Update request management
 * - Payload validation and verification
 * - Data integrity enforcement
 * - Process tracking and handling
 * 
 * Key features:
 * - Strict validation rules
 * - Complete process tracking
 * - Error state management
 * - Data consistency checks
 * 
 * @example
 * // Using the Update namespace
 * import { _Update } from './update.namespace';
 * 
 * // Create update components
 * const body = new _Update.Body(
 *   "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
 *   "Ed25519VerificationKey2018",
 *   "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
 * );
 * 
 * const entity = new _Update.Entity({
 *   controller: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
 *   type: "Ed25519VerificationKey2018",
 *   publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
 * });
 */
export namespace _Update {
    /**
     * Class for managing update request bodies
     * 
     * @class Body
     * @extends {_Body}
     * @description Provides comprehensive functionality for managing update request bodies including:
     * - Complete request validation
     * - Field verification
     * - Data structure checks
     * - Format standardization
     * 
     * Key features:
     * - Controller validation
     * - Type verification
     * - Key format validation
     * - Request structure checks
     * 
     * Validation rules:
     * - Valid controller DID format
     * - Supported verification type
     * - Proper key encoding
     * - Complete data structure
     * 
     * @example
     * // Create a valid update body
     * const body = new Body(
     *   "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
     *   "Ed25519VerificationKey2018",
     *   "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
     * );
     * 
     * @see {@link _Body}
     * @throws {Error} When validation fails
     */
    @ApiSchema({ name: 'Hashgraph.Did.Verification.Payload.Update.Body' })
    export class Body extends _Body {}

    /**
     * Class for managing complete update entities
     * 
     * @class Entity
     * @extends {_Entity}
     * @description Provides comprehensive functionality for managing update entities including:
     * - Complete update payload management
     * - Method information validation
     * - Data structure verification
     * - Update process handling
     * 
     * Key features:
     * - Payload validation
     * - Method verification
     * - Format standardization
     * - Process tracking
     * 
     * Validation rules:
     * - Complete payload structure
     * - Valid method information
     * - Proper field formats
     * - Data consistency
     * 
     * @example
     * // Create a valid update entity
     * const entity = new Entity({
     *   controller: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
     *   type: "Ed25519VerificationKey2018",
     *   publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
     * });
     * 
     * @see {@link _Entity}
     * @throws {Error} When validation fails
     */
    @ApiSchema({ name: 'Hashgraph.Did.Verification.Payload.Update.Entity' })
    export class Entity extends _Entity {}
}
