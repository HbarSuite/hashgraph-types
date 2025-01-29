import { ApiProperty } from "@hsuite/nestjs-swagger";
import { IsNotEmpty, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { _Body } from './hashgraph.did.service.update.models.body.model';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * Payload model for DID service update
 * 
 * @class _Payload
 * @implements {IHashgraph.IDID.IService.IUpdate.IPayload}
 * @description Provides functionality for updating DID document services including:
 * - Service payload validation
 * - Service update management
 * - Input validation through decorators
 * @namespace Hashgraph.DID.Service.Update.Payload
 * @category Models
 * @subcategory Service Update
 * @since 2.0.0
 * 
 * This class handles the update payload for DID document services, supporting:
 * - Service type and endpoint updates
 * - Payload validation and verification
 * - Service update processing
 * - Nested object validation
 * 
 * @example
 * // Create a new service update payload
 * const payload = new _Payload({
 *   service: {
 *     type: "LinkedDomains",
 *     serviceEndpoint: "https://example.com/updated-service"
 *   }
 * });
 * 
 * @throws {Error} When payload validation fails
 */
export class _Payload implements IHashgraph.IDID.IService.IUpdate.IPayload {
    /**
     * The service details to be updated
     * 
     * @type {IHashgraph.IDID.IService.IUpdate.IBody}
     * @memberof _Payload
     * @description Contains the service update information including:
     * - Service type specification
     * - Service endpoint details
     * 
     * This property ensures:
     * - Valid service configuration
     * - Proper update formatting
     * - Service endpoint validation
     * 
     * Validated using decorators:
     * - @IsNotEmpty(): Ensures service object is provided
     * - @ValidateNested(): Validates nested _Body object
     * - @Type(): Ensures proper type transformation
     * 
     * @example
     * service = {
     *   type: "LinkedDomains",
     *   serviceEndpoint: "https://example.com/updated-service"
     * }
     * 
     * @throws {ValidationError} When service validation fails
     */
    @ApiProperty({
        description: "Service",
        type: () => _Body,
        required: true
    })
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => _Body)
    service: IHashgraph.IDID.IService.IUpdate.IBody;

    /**
     * Creates an instance of the _Payload class
     * 
     * @constructor
     * @param {IHashgraph.IDID.IService.IUpdate.IPayload} data - The service update payload data
     * @throws {Error} If service data is not provided
     * @memberof _Payload
     * @description Initializes a new service update payload with:
     * - Service data validation
     * - Nested _Body instance creation
     * - Complete payload validation
     * 
     * @example
     * // Create a new service update payload
     * const payload = new _Payload({
     *   service: {
     *     type: "LinkedDomains",
     *     serviceEndpoint: "https://example.com/updated-service"
     *   }
     * });
     * 
     * // This will throw an error
     * const invalidPayload = new _Payload({}); // Error: Service is required
     */
    constructor(data: IHashgraph.IDID.IService.IUpdate.IPayload) {
        if (!data.service) {
            throw new Error("Service is required");
        }
        this.service = new _Body(data.service);
    }
}