import { _IInfo } from './models/hashgraph.did.document.models.info.model'
import { _Register } from './models/hashgraph.did.document.models.register.model'
import { ApiSchema } from "@hsuite/nestjs-swagger"

/**
 * Namespace containing DID Document related interfaces and types
 * @module Hashgraph
 * @namespace _Document
 * @description Provides comprehensive functionality for working with DID Documents in the Hashgraph network.
 * Implements W3C DID Core specification with features including:
 * - Document creation and management
 * - Document information structure
 * - Document registration and updates
 * - Document validation and verification
 * - Context and metadata handling
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * 
 * @example
 * // Import and use document namespace
 * import { _Document } from './hashgraph.did.document.namespace';
 * 
 * // Create new DID document info
 * const docInfo = new _Document.Info({
 *   '@context': ['https://www.w3.org/ns/did/v1'],
 *   id: 'did:hedera:testnet:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK',
 *   controller: ['did:hedera:testnet:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK'],
 *   verificationMethod: [{
 *     id: '#key-1',
 *     type: 'Ed25519VerificationKey2018',
 *     controller: 'did:hedera:testnet:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK',
 *     publicKeyBase58: 'H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV'
 *   }]
 * });
 * 
 * // Register new DID document
 * const registration = new _Document.Register({
 *   publicKey: 'H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV',
 *   document: docInfo
 * });
 */
export namespace _Document {
    /**
     * Class representing DID Document Information
     * @class Info
     * @extends {_IInfo}
     * @description Provides structured format for DID Document data following W3C specifications.
     * Features include:
     * - Document context management
     * - DID subject and controller information
     * - Verification method definitions
     * - Authentication and authorization mechanisms
     * - Service endpoint configurations
     * - Proof and signature handling
     * @memberof _Document
     * @public
     * @since 2.0.0
     * 
     * @example
     * const info = new Info({
     *   '@context': [
     *     'https://www.w3.org/ns/did/v1',
     *     'https://w3id.org/security/suites/ed25519-2018/v1'
     *   ],
     *   id: 'did:hedera:testnet:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK',
     *   controller: [
     *     'did:hedera:testnet:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK'
     *   ],
     *   verificationMethod: [{
     *     id: '#key-1',
     *     type: 'Ed25519VerificationKey2018',
     *     controller: 'did:hedera:testnet:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK',
     *     publicKeyBase58: 'H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV'
     *   }],
     *   authentication: ['#key-1'],
     *   assertionMethod: ['#key-1']
     * });
     */
    @ApiSchema({ name: 'Hashgraph.Did.Document.Info' })
    export class Info extends _IInfo {}

    /**
     * Class for registering new DID Documents
     * @class Register  
     * @extends {_Register}
     * @description Handles the complete registration process for new DID documents.
     * Provides functionality for:
     * - Public key validation and processing
     * - Document structure validation
     * - Registration transaction creation
     * - Network submission handling
     * - Registration status tracking
     * @memberof _Document
     * @public
     * @since 2.0.0
     * 
     * @example
     * const register = new Register({
     *   publicKey: 'H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV',
     *   document: new Info({
     *     '@context': ['https://www.w3.org/ns/did/v1'],
     *     id: 'did:hedera:testnet:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK',
     *     controller: ['did:hedera:testnet:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK'],
     *     verificationMethod: [{
     *       id: '#key-1',
     *       type: 'Ed25519VerificationKey2018',
     *       controller: 'did:hedera:testnet:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK',
     *       publicKeyBase58: 'H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV'
     *     }]
     *   })
     * });
     */
    @ApiSchema({ name: 'Hashgraph.Did.Document.Register' })
    export class Register extends _Register {}
}
