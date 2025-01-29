import { ApiProperty } from "@hsuite/nestjs-swagger";
import { IsNotEmpty, IsString, IsUrl, IsIn } from "class-validator";
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * Body model for DID service update
 * 
 * @class _Body
 * @implements {IHashgraph.IDID.IService.IUpdate.IBody}
 * @description Provides functionality for updating DID document services including:
 * - Service type specification
 * - Service endpoint management
 * - Validation of service properties
 * @namespace Hashgraph.DID.Service.Update.Body
 * @category Models
 * @subcategory Service Update
 * @since 2.0.0
 * 
 * This class handles the update payload for DID document services, supporting:
 * - LinkedDomains services for domain verification
 * - DIDCommMessaging services for secure communication
 * - Service endpoint validation and updates
 * - Input validation through class-validator decorators
 * 
 * @example
 * // Create a new service update body
 * const body = new _Body({
 *   type: "LinkedDomains",
 *   serviceEndpoint: "https://example.com/service"
 * });
 * 
 * @throws {Error} When required fields are missing or invalid
 */
export class _Body implements IHashgraph.IDID.IService.IUpdate.IBody {
    /**
     * The type of service to be updated
     * 
     * @type {"LinkedDomains" | "DIDCommMessaging"}
     * @memberof _Body
     * @description Specifies the service type which can be either:
     * - LinkedDomains: For domain verification services
     * - DIDCommMessaging: For secure communication services
     * 
     * The type is validated using class-validator decorators:
     * - @IsNotEmpty(): Ensures the type is provided
     * - @IsString(): Validates type is a string
     * - @IsIn(): Restricts values to allowed service types
     * 
     * @example
     * type = "LinkedDomains"
     * 
     * @throws {ValidationError} When type is invalid or not provided
     */
    @ApiProperty({
        description: "Service Type",
        enum: ["LinkedDomains", "DIDCommMessaging"],
        example: "LinkedDomains",
        required: true
    })
    @IsNotEmpty()
    @IsString()
    @IsIn(["LinkedDomains", "DIDCommMessaging"])
    type: "LinkedDomains" | "DIDCommMessaging";

    /**
     * The service endpoint URL
     * 
     * @type {string}
     * @memberof _Body
     * @description The URL where the service can be accessed.
     * Must be a valid HTTPS URL that provides:
     * - Secure communication
     * - Valid endpoint accessibility
     * - Proper service functionality
     * 
     * The endpoint is validated using class-validator decorators:
     * - @IsNotEmpty(): Ensures the endpoint is provided
     * - @IsString(): Validates endpoint is a string
     * - @IsUrl(): Ensures endpoint is a valid URL
     * 
     * @example
     * serviceEndpoint = "https://example.com/did-comm"
     * 
     * @throws {ValidationError} When endpoint is invalid or not provided
     */
    @ApiProperty({
        description: "Service endpoint",
        example: "https://your.service/did-comm",
        required: true
    })
    @IsNotEmpty()
    @IsString()
    @IsUrl()
    serviceEndpoint: string;

    /**
     * Creates an instance of the _Body class
     * 
     * @constructor
     * @param {IHashgraph.IDID.IService.IUpdate.IBody} data - The service update data
     * @throws {Error} If type or serviceEndpoint is not provided
     * @memberof _Body
     * @description Initializes a new service update body with:
     * - Required type validation
     * - Required serviceEndpoint validation
     * - Property assignment
     * 
     * @example
     * // Create a new service update body
     * const body = new _Body({
     *   type: "LinkedDomains",
     *   serviceEndpoint: "https://example.com/service"
     * });
     * 
     * // This will throw an error
     * const invalidBody = new _Body({}); // Error: Type is required
     */
    constructor(data: IHashgraph.IDID.IService.IUpdate.IBody) {
        if (!data.type) {
            throw new Error("Type is required");
        }
        if (!data.serviceEndpoint) {
            throw new Error("Service endpoint is required");
        }
        this.type = data.type;
        this.serviceEndpoint = data.serviceEndpoint;
    }
}