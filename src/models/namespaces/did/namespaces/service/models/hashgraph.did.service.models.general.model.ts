import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsNotEmpty, IsUrl, Matches } from 'class-validator';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';

/**
 * Represents a general service class for DID documents
 * 
 * @class _General
 * @implements {IHashgraph.IDID.IService.IGeneral}
 * @description Provides functionality for managing DID document services including:
 * - Service identification
 * - Service type specification
 * - Service endpoint management
 * @namespace Hashgraph.DID.Service.General
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * 
 * This class handles the core service functionality for DID documents, supporting:
 * - LinkedDomains services for domain verification
 * - DIDCommMessaging services for secure communication
 * - Service endpoint validation and management
 * 
 * @example
 * // Create a new service
 * const service = new _General(
 *   'did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719#service-1',
 *   'LinkedDomains',
 *   'https://example.com'
 * );
 */
export class _General implements IHashgraph.IDID.IService.IGeneral {
    /**
     * The unique identifier for the service
     * 
     * @type {string}
     * @memberof _General
     * @description A unique identifier combining the DID document ID and service number
     * 
     * The ID must follow the format: did:hedera:<network>:<did>#service-<number>
     * This ensures:
     * - Unique identification within the DID document
     * - Clear association with the parent DID
     * - Sequential service numbering
     * 
     * @example
     * id = 'did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719#service-1'
     * 
     * @public
     * @since 2.0.0
     * @throws {ValidationError} When ID format is invalid
     */
    @ApiProperty({
        description: 'Service ID consisting of DID document ID and unique service identifier',
        example: 'did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719#service-1',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^did:hedera:.*#service-\d+$/, { message: 'Invalid service ID format' })
    id: string;

    /**
     * The type of service being provided
     * 
     * @type {"LinkedDomains" | "DIDCommMessaging"}
     * @memberof _General
     * @description Specifies the service type, which can be either:
     * - LinkedDomains: For domain verification services
     * - DIDCommMessaging: For secure communication services
     * 
     * @example
     * type = 'LinkedDomains'
     * 
     * @public
     * @since 2.0.0
     * @throws {ValidationError} When type is invalid or not provided
     */
    @ApiProperty({
        description: 'Service Type',
        example: 'LinkedDomains',
        enum: ['LinkedDomains', 'DIDCommMessaging'],
        required: true
    })
    @IsString()
    @IsNotEmpty()
    type: "LinkedDomains" | "DIDCommMessaging";

    /**
     * The endpoint URL for the service
     * 
     * @type {string}
     * @memberof _General
     * @description The HTTPS URL where the service can be accessed
     * 
     * Must be a valid HTTPS URL to ensure:
     * - Secure communication
     * - Valid endpoint accessibility
     * - Proper service functionality
     * 
     * @example
     * serviceEndpoint = 'https://example.com/did-comm'
     * 
     * @public
     * @since 2.0.0
     * @throws {ValidationError} When endpoint is invalid or not provided
     */
    @ApiProperty({
        description: 'Service endpoint',
        example: 'https://your.service/did-comm',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    @IsUrl()
    serviceEndpoint: string;

    /**
     * Creates an instance of the _General class
     * 
     * @constructor
     * @param {string} id - The service identifier
     * @param {"LinkedDomains" | "DIDCommMessaging"} type - The service type
     * @param {string} serviceEndpoint - The service endpoint URL
     * @throws {Error} If any parameters are invalid or missing
     * @memberof _General
     * @description Initializes a new service instance with validation for:
     * - Service ID format (must match did:hedera:.*#service-\d+)
     * - Service type (must be LinkedDomains or DIDCommMessaging)
     * - Service endpoint (must be a valid HTTPS URL)
     * 
     * @example
     * // Create a new service instance
     * const service = new _General(
     *   'did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719#service-1',
     *   'LinkedDomains',
     *   'https://example.com'
     * );
     * 
     * @public
     * @since 2.0.0
     */
    constructor(id: string, type: "LinkedDomains" | "DIDCommMessaging", serviceEndpoint: string) {
        if (!id || !id.match(/^did:hedera:.*#service-\d+$/)) {
            throw new Error('Invalid service ID format');
        }
        if (!type || (type !== 'LinkedDomains' && type !== 'DIDCommMessaging')) {
            throw new Error('Invalid service type');
        }
        if (!serviceEndpoint || !serviceEndpoint.startsWith('https://')) {
            throw new Error('Invalid service endpoint');
        }

        this.id = id;
        this.type = type;
        this.serviceEndpoint = serviceEndpoint;
    }
}