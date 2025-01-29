import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Register } from './models/hashgraph.did.verification.relationship.models.register.model'
import { _RelationshipKind } from './models/hashgraph.did.verification.relationship.models.relationship-kind.model'
import { _UpdateBody } from './models/hashgraph.did.verification.relationship.models.update-body.model'
import { _UpdatePayload } from './models/hashgraph.did.verification.relationship.models.update-payload.model'

/**
 * Namespace for managing DID verification relationships
 * 
 * @namespace _Relationship
 * @description Provides comprehensive functionality for managing DID verification relationships including:
 * - Complete relationship lifecycle management
 * - Registration and update operations
 * - Type and kind definitions
 * - Validation and verification
 * @group DID Components
 * @category Models
 * @subcategory Verification
 * @since 2.0.0
 * 
 * This namespace provides a complete suite of tools for:
 * - Relationship Management:
 *   - Type and kind definitions
 *   - Relationship states
 *   - Lifecycle tracking
 *   - State transitions
 * 
 * - Registration Operations:
 *   - New relationship creation
 *   - Validation checks
 *   - Registration processing
 *   - State verification
 * 
 * - Update Handling:
 *   - Relationship modifications
 *   - Update validation
 *   - Change processing
 *   - State management
 * 
 * - Validation and Verification:
 *   - Data integrity checks
 *   - Format validation
 *   - Type verification
 *   - State consistency
 * 
 * Key features:
 * - Complete lifecycle management
 * - Type-safe operations
 * - Comprehensive validation
 * - Error handling
 * 
 * @example
 * // Using the Relationship namespace
 * import { _Relationship } from './relationship.namespace';
 * 
 * // Create a relationship kind
 * const kind = new _Relationship.RelationshipKind(
 *   "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH#key-1",
 *   "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
 *   "Ed25519VerificationKey2018",
 *   "authentication",
 *   "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
 * );
 * 
 * // Register a relationship
 * const registration = new _Relationship.Register({
 *   id: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH#key-1",
 *   controller: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
 *   type: "Ed25519VerificationKey2018",
 *   relationshipType: "authentication",
 *   publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
 * });
 * 
 * // Update a relationship
 * const update = new _Relationship.UpdatePayload({
 *   controller: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
 *   type: "Ed25519VerificationKey2018",
 *   publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
 *   relationshipType: "authentication"
 * });
 */
export namespace _Relationship {
    /**
     * Class for managing relationship types and kinds
     * 
     * @class RelationshipKind
     * @extends {_RelationshipKind}
     * @description Provides comprehensive functionality for managing relationship types including:
     * - Complete type definition and validation
     * - Relationship categorization and classification
     * - Type constraints and rules
     * - Validation and verification
     * 
     * Key features:
     * - Type definition:
     *   - Comprehensive type system
     *   - Relationship categories
     *   - Type hierarchies
     *   - Type constraints
     * 
     * - Validation:
     *   - Type checking
     *   - Format verification
     *   - Constraint validation
     *   - Error handling
     * 
     * - Management:
     *   - Type registration
     *   - Type updates
     *   - Type relationships
     *   - Type lifecycle
     * 
     * @example
     * // Create a relationship kind
     * const kind = new RelationshipKind(
     *   "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH#key-1",
     *   "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
     *   "Ed25519VerificationKey2018",
     *   "authentication",
     *   "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
     * );
     * 
     * @see {@link _RelationshipKind}
     * @throws {Error} When validation fails for any required field
     */
    @ApiSchema({ name: 'Hashgraph.Did.Verification.Relationship.RelationshipKind' })
    export class RelationshipKind extends _RelationshipKind { }

    /**
     * Class for managing relationship registration
     * 
     * @class Register
     * @extends {_Register}
     * @description Provides comprehensive functionality for registering relationships including:
     * - Complete registration process management
     * - Data validation and verification
     * - Structure and format checking
     * - Registration lifecycle handling
     * 
     * Key features:
     * - Registration process:
     *   - Complete workflow
     *   - State tracking
     *   - Process validation
     *   - Error handling
     * 
     * - Data management:
     *   - Input validation
     *   - Format verification
     *   - Structure checking
     *   - Data integrity
     * 
     * - Lifecycle handling:
     *   - State transitions
     *   - Status tracking
     *   - Event handling
     *   - Error management
     * 
     * @example
     * // Register a relationship
     * const register = new Register({
     *   id: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH#key-1",
     *   controller: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
     *   type: "Ed25519VerificationKey2018",
     *   relationshipType: "authentication",
     *   publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
     * });
     * 
     * @see {@link _Register}
     * @throws {Error} When validation fails for any required field
     */
    @ApiSchema({ name: 'Hashgraph.Did.Verification.Relationship.Register' })
    export class Register extends _Register { }

    /**
     * Class for managing relationship update bodies
     * 
     * @class UpdateBody
     * @extends {_UpdateBody}
     * @description Provides comprehensive functionality for managing update requests including:
     * - Complete update data validation
     * - Structure and format verification
     * - Request processing and handling
     * - Update lifecycle management
     * 
     * Key features:
     * - Update handling:
     *   - Request validation
     *   - Data verification
     *   - Process management
     *   - State tracking
     * 
     * - Data management:
     *   - Input validation
     *   - Format checking
     *   - Structure verification
     *   - Integrity checks
     * 
     * - Process control:
     *   - Flow management
     *   - State transitions
     *   - Error handling
     *   - Event tracking
     * 
     * @example
     * // Create an update body
     * const body = new UpdateBody({
     *   controller: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
     *   type: "Ed25519VerificationKey2018",
     *   publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
     *   relationshipType: "authentication"
     * });
     * 
     * @see {@link _UpdateBody}
     * @throws {Error} When validation fails for any required field
     */
    @ApiSchema({ name: 'Hashgraph.Did.Verification.Relationship.UpdateBody' })
    export class UpdateBody extends _UpdateBody { }

    /**
     * Class for managing relationship update payloads
     * 
     * @class UpdatePayload
     * @extends {_UpdatePayload}
     * @description Provides comprehensive functionality for managing update payloads including:
     * - Complete payload validation and verification
     * - Data structure and format checking
     * - Update process management
     * - Payload lifecycle handling
     * 
     * Key features:
     * - Payload management:
     *   - Data validation
     *   - Format verification
     *   - Structure checking
     *   - Integrity validation
     * 
     * - Process handling:
     *   - Update workflow
     *   - State management
     *   - Event tracking
     *   - Error handling
     * 
     * - Lifecycle control:
     *   - State transitions
     *   - Status tracking
     *   - Process monitoring
     *   - Error recovery
     * 
     * @example
     * // Create an update payload
     * const payload = new UpdatePayload({
     *   controller: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
     *   type: "Ed25519VerificationKey2018",
     *   publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
     *   relationshipType: "authentication"
     * });
     * 
     * @see {@link _UpdatePayload}
     * @throws {Error} When validation fails for any required field
     */
    @ApiSchema({ name: 'Hashgraph.Did.Verification.Relationship.UpdatePayload' })
    export class UpdatePayload extends _UpdatePayload { }
}