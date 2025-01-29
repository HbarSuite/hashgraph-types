import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsArray, IsOptional, ValidateNested, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace'
import { _Verification } from '../../verification/hashgraph.did.verification.namespace';

/**
 * Represents the structure of a DID Document Info following W3C DID Core specification.
 * 
 * @class _IInfo
 * @description Defines the comprehensive structure for a DID (Decentralized Identifier) Document Information.
 * Implements the W3C DID Core specification with support for:
 * - JSON-LD contexts and semantic meaning
 * - Multiple verification methods and relationships
 * - Authentication and authorization mechanisms
 * - Service endpoints and additional properties
 * - Capability delegation and invocation
 * @implements {IHashgraph.IDID.IDocument.IInfo}
 * @namespace Hashgraph.IDID.IDocument.IInfo
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * 
 * @example
 * const didInfo = new _IInfo({
 *   '@context': [
 *     'https://www.w3.org/ns/did/v1',
 *     'https://w3id.org/security/suites/ed25519-2018/v1'
 *   ],
 *   id: 'did:hedera:testnet:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6K',
 *   controller: 'did:hedera:testnet:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6K',
 *   verificationMethod: [{
 *     id: '#key-1',
 *     type: 'Ed25519VerificationKey2018',
 *     controller: 'did:hedera:testnet:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6K',
 *     publicKeyMultibase: 'z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6K'
 *   }],
 *   authentication: ['#key-1'],
 *   assertionMethod: ['#key-1'],
 *   keyAgreement: ['#key-2'],
 *   capabilityInvocation: ['#key-3'],
 *   capabilityDelegation: ['#key-4'],
 *   service: ['#service-1']
 * });
 */
export class _IInfo implements IHashgraph.IDID.IDocument.IInfo {

    /**
     * The JSON-LD context of the DID document
     * @type {string[]}
     * @description Defines the semantic context for interpreting the DID document.
     * Must include the base DID context and may include additional context URLs for
     * extended functionality. The context defines the semantic meaning of properties
     * in the DID document.
     * @memberof _IInfo
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * "@context": [
     *   "https://www.w3.org/ns/did/v1",
     *   "https://w3id.org/security/suites/ed25519-2018/v1"
     * ]
     */
    @ApiProperty({
        description: 'The JSON-LD context of the DID document.',
        type: () => [String],
        example: [
            'https://www.w3.org/ns/did/v1',
            'https://w3id.org/security/suites/ed25519-2018/v1'
        ]
    })
    @IsArray()
    @ArrayMinSize(1)
    @IsString({ each: true })
    "@context": string[];

    /**
     * The DID of the controller of this DID document
     * @type {string}
     * @description The entity that has the ability to make changes to the DID document.
     * The controller can be the same as the DID subject or a different entity.
     * Multiple controllers can be specified using an array of DIDs.
     * @memberof _IInfo
     * @public
     * @since 2.0.0
     * @optional
     * 
     * @example
     * controller: "did:hedera:testnet:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6K"
     */
    @ApiProperty({
        description: 'The DID of the controller of this DID document.',
        type: () => String,
        required: false,
        example: 'did:hedera:testnet:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6K'
    })
    @IsOptional()
    @IsString()
    controller?: string;

    /**
     * Array of verification methods associated with the DID
     * @type {Array<IHashgraph.IDID.IVerification.IMethod>}
     * @description Collection of cryptographic public keys and other verification methods
     * that can be used to authenticate or authorize interactions with the DID subject.
     * Each method includes:
     * - Unique identifier
     * - Type of verification method
     * - Controller information
     * - Public key data
     * @memberof _IInfo
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * verificationMethod: [{
     *   id: "#key-1",
     *   type: "Ed25519VerificationKey2018",
     *   controller: "did:hedera:testnet:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6K",
     *   publicKeyMultibase: "z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6K"
     * }]
     */
    @ApiProperty({
        description: 'Array of verification methods associated with the DID.',
        type: () => _Verification.Method,
        isArray: true,
        example: [{
            id: 'did:hedera:testnet:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6K#key-1',
            type: () => 'Ed25519VerificationKey2018',
            controller: 'did:hedera:testnet:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6K',
            publicKeyMultibase: 'z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6K'
        }]
    })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => _Verification.Method)
    verificationMethod: Array<IHashgraph.IDID.IVerification.IMethod>;

    /**
     * List of verification method references for authentication
     * @type {string[]}
     * @description References to verification methods that can be used to authenticate
     * as the DID subject. These are typically used for proving control over the DID.
     * Each reference can be either a full verification method object or a URI fragment
     * referring to a verification method in the document.
     * @memberof _IInfo
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * authentication: ["#key-1"]
     */
    @ApiProperty({
        description: 'List of verification method references for authentication.',
        type: () => [String],
        example: ['did:hedera:testnet:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6K#key-1']
    })
    @IsArray()
    @IsString({ each: true })
    authentication: string[];

    /**
     * List of verification method references for making assertions
     * @type {string[]}
     * @description References to verification methods that can be used to make
     * statements or assertions on behalf of the DID subject. These methods are
     * typically used for signing verifiable credentials or other claims.
     * @memberof _IInfo
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * assertionMethod: ["#key-1"]
     */
    @ApiProperty({
        description: 'List of verification method references for making assertions.',
        type: () => [String],
        example: ['did:hedera:testnet:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6K#key-1']
    })
    @IsArray()
    @IsString({ each: true })
    assertionMethod: string[];

    /**
     * List of verification method references for key agreement
     * @type {string[]}
     * @description References to verification methods used for key agreement or
     * encryption. These methods are typically used for establishing secure
     * communication channels with the DID subject.
     * @memberof _IInfo
     * @public
     * @since 2.0.0
     * @optional
     * 
     * @example
     * keyAgreement: ["#key-2"]
     */
    @ApiProperty({
        description: 'List of verification method references for key agreement.',
        type: () => [String],
        required: false,
        example: ['did:hedera:testnet:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6K#key-2']
    })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    keyAgreement?: string[];

    /**
     * List of verification method references for capability invocation
     * @type {string[]}
     * @description References to verification methods that can be used to invoke
     * capabilities or authorizations on behalf of the DID subject. These are
     * typically used for authorization and access control.
     * @memberof _IInfo
     * @public
     * @since 2.0.0
     * @optional
     * 
     * @example
     * capabilityInvocation: ["#key-3"]
     */
    @ApiProperty({
        description: 'List of verification method references for capability invocation.',
        type: () => [String],
        required: false,
        example: ['did:hedera:testnet:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6K#key-3']
    })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    capabilityInvocation?: string[];

    /**
     * List of verification method references for capability delegation
     * @type {string[]}
     * @description References to verification methods that can be used to delegate
     * capabilities to other DIDs. These methods enable the DID subject to
     * authorize others to act on their behalf.
     * @memberof _IInfo
     * @public
     * @since 2.0.0
     * @optional
     * 
     * @example
     * capabilityDelegation: ["#key-4"]
     */
    @ApiProperty({
        description: 'List of verification method references for capability delegation.',
        type: () => [String],
        required: false,
        example: ['did:hedera:testnet:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6K#key-4']
    })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    capabilityDelegation?: string[];

    /**
     * List of service endpoint references
     * @type {string[]}
     * @description References to service endpoints associated with the DID.
     * Services can include various types of interactions or resources that the
     * DID subject provides, such as:
     * - Communication endpoints
     * - Data storage locations
     * - Verification services
     * - Other application-specific services
     * @memberof _IInfo
     * @public
     * @since 2.0.0
     * @optional
     * 
     * @example
     * service: ["#service-1"]
     */
    @ApiProperty({
        description: 'List of service endpoint references.',
        type: () => [String],
        required: false,
        example: ['did:hedera:testnet:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6K#service-1']
    })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    service?: string[];

    /**
     * The unique identifier for this DID document
     * @type {string}
     * @description The DID that uniquely identifies this document. Must be a valid
     * DID URI following the W3C DID Syntax specification. For Hedera DIDs, this
     * typically includes the network (mainnet/testnet) and a unique identifier.
     * @memberof _IInfo
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * id: "did:hedera:testnet:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6K"
     */
    @ApiProperty({
        description: 'The unique identifier for this DID document.',
        type: () => String,
        example: 'did:hedera:testnet:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6K'
    })
    @IsString()
    id: string;

    /**
     * Creates a new DID Document Info instance
     * @constructor
     * @param {IHashgraph.IDID.IDocument.IInfo} data - The data to create the DID document info from
     * @throws {Error} When required fields are missing or invalid:
     * - @context must be present and non-empty
     * - verificationMethod must be present and non-empty
     * - authentication must be present and non-empty
     * - assertionMethod must be present and non-empty
     * - id must be present and a valid DID URI
     * @memberof _IInfo
     * @public
     * @since 2.0.0
     * 
     * @example
     * const info = new _IInfo({
     *   '@context': ['https://www.w3.org/ns/did/v1'],
     *   id: 'did:hedera:testnet:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6K',
     *   verificationMethod: [{
     *     id: '#key-1',
     *     type: 'Ed25519VerificationKey2018',
     *     controller: 'did:hedera:testnet:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6K',
     *     publicKeyMultibase: 'z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6K'
     *   }],
     *   authentication: ['#key-1'],
     *   assertionMethod: ['#key-1']
     * });
     */
    constructor(data: IHashgraph.IDID.IDocument.IInfo) {
        if (!data) {
            throw new Error('Data is required to create a DID Document Info');
        }

        this['@context'] = data['@context'];
        this.controller = data.controller;
        this.verificationMethod = data.verificationMethod;
        this.authentication = data.authentication;
        this.assertionMethod = data.assertionMethod;
        this.keyAgreement = data.keyAgreement;
        this.capabilityInvocation = data.capabilityInvocation;
        this.capabilityDelegation = data.capabilityDelegation;
        this.service = data.service;
        this.id = data.id;

        if (!this['@context'] || this['@context'].length === 0) {
            throw new Error('@context is required and must not be empty');
        }
        if (!this.verificationMethod || this.verificationMethod.length === 0) {
            throw new Error('verificationMethod is required and must not be empty');
        }
        if (!this.authentication || this.authentication.length === 0) {
            throw new Error('authentication is required and must not be empty');
        }
        if (!this.assertionMethod || this.assertionMethod.length === 0) {
            throw new Error('assertionMethod is required and must not be empty');
        }
        if (!this.id) {
            throw new Error('id is required');
        }
    }
}