import { _General } from './hashgraph.did.service.models.general.model';
import { ApiProperty } from "@hsuite/nestjs-swagger";
import { IsNotEmpty, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';

/**
 * Represents a service registration class for DID documents
 * 
 * @class _Register
 * @implements {IHashgraph.IDID.IService.IRegister}
 * @description Provides functionality for registering DID document services including:
 * - Service validation
 * - Service registration
 * - Service management
 * @namespace Hashgraph.DID.Service.Register
 * @category Models
 * @subcategory Service Registration
 * @since 2.0.0
 * 
 * This class handles the registration of services within DID documents, supporting:
 * - Service validation and verification
 * - Proper service initialization
 * - Service endpoint management
 * - Service type validation
 * 
 * The registration process ensures:
 * - Valid service ID format
 * - Supported service types (LinkedDomains, DIDCommMessaging)
 * - Secure HTTPS endpoints
 * - Complete service data validation
 * 
 * @example
 * // Create a new service registration
 * const register = new _Register({
 *   service: {
 *     id: 'did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719#service-1',
 *     type: 'LinkedDomains',
 *     serviceEndpoint: 'https://example.com'
 *   }
 * });
 * 
 * @throws {Error} When service validation fails
 * @throws {ValidationError} When decorator validation fails
 */
export class _Register implements IHashgraph.IDID.IService.IRegister {
    /**
     * The service instance to be registered
     * 
     * @type {IHashgraph.IDID.IService.IGeneral}
     * @memberof _Register
     * @description The service object containing:
     * - Service identification (must follow did:hedera:.*#service-\d+ format)
     * - Service type (LinkedDomains or DIDCommMessaging)
     * - Service endpoint (must be HTTPS URL)
     * 
     * This property ensures:
     * - Valid service configuration through class-validator decorators
     * - Proper service initialization via _General class
     * - Service endpoint accessibility and security
     * - Complete service data validation
     * 
     * The property is validated using:
     * - @IsNotEmpty(): Ensures service object is provided
     * - @ValidateNested(): Validates nested _General object
     * - @Type(): Ensures proper type transformation
     * 
     * @example
     * service = {
     *   id: 'did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719#service-1',
     *   type: 'LinkedDomains',
     *   serviceEndpoint: 'https://example.com'
     * }
     * 
     * @throws {ValidationError} When validation fails
     */
    @ApiProperty({
        description: "Service object containing ID, type, and endpoint",
        type: () => _General,
        required: true
    })
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => _General)
    service: IHashgraph.IDID.IService.IGeneral;

    /**
     * Creates an instance of the _Register class
     * 
     * @constructor
     * @param {IHashgraph.IDID.IService.IRegister} data - The service registration data
     * @throws {Error} If service data is not provided or invalid
     * @memberof _Register
     * @description Initializes a new service registration with validation for:
     * - Required service object presence
     * - Valid service ID format
     * - Supported service type
     * - Valid HTTPS endpoint
     * 
     * The constructor performs:
     * - Input validation
     * - Service object creation
     * - Property assignment
     * - Complete data verification
     * 
     * @example
     * // Create a new service registration
     * const register = new _Register({
     *   service: {
     *     id: 'did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719#service-1',
     *     type: 'LinkedDomains',
     *     serviceEndpoint: 'https://example.com'
     *   }
     * });
     * 
     * // This will throw an error
     * const invalidRegister = new _Register({}); // Error: Service is required
     * 
     * @throws {Error} When service data is invalid or missing
     */
    constructor(data: IHashgraph.IDID.IService.IRegister) {
        if (!data.service) {
            throw new Error("Service is required");
        }
        this.service = new _General(data.service);
    }
}