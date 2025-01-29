import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsNotEmpty, IsObject, IsString } from 'class-validator';
import { IHashgraph } from '../../../../interfaces/hashgraph.namespace';

/**
 * Class representing a validation error response for DID operations
 * @class _ValidateErrorJSON
 * @implements {IHashgraph.IDID.IValidateErrorJSON}
 * @namespace Hashgraph.DID.ValidateErrorJSON
 * @description Provides a standardized format for validation error responses in DID operations.
 * Features include:
 * - Fixed validation failure message
 * - Detailed error information
 * - Structured error response format
 * - Support for multiple validation errors
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * 
 * @example
 * const error = new _ValidateErrorJSON({
 *   did: "Invalid DID format: missing method",
 *   controller: "Controller DID not found"
 * });
 */
export class _ValidateErrorJSON implements IHashgraph.IDID.IValidateErrorJSON {
    /**
     * Fixed message indicating validation failure
     * @type {"Validation failed"}
     * @description Standard message used for all validation errors to maintain consistency
     * across the DID validation system
     * @memberof _ValidateErrorJSON
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * error.message === "Validation failed" // Always true
     */
    @ApiProperty({
        description: 'A fixed message indicating validation failure',
        example: 'Validation failed',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    message: "Validation failed";

    /**
     * Object containing validation error details
     * @type {{[name: string]: unknown}}
     * @description Structured key-value pairs containing detailed validation error information.
     * Keys represent the field or aspect that failed validation, and values contain
     * the specific error messages or details.
     * @memberof _ValidateErrorJSON
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * {
     *   "did": "Invalid DID format: must start with 'did:'",
     *   "controller": "Controller DID must be a valid Hedera DID",
     *   "verificationMethod": {
     *     "id": "Invalid key ID format",
     *     "type": "Unsupported verification method type"
     *   }
     * }
     */
    @ApiProperty({
        description: 'An object containing detailed information about the validation errors',
        example: { 
            "did": "Invalid DID format: must start with 'did:'",
            "controller": "Controller DID must be a valid Hedera DID"
        },
        required: true,
    })
    @IsObject()
    @IsNotEmpty()
    details: {
        [name: string]: unknown;
    };

    /**
     * Creates an instance of _ValidateErrorJSON
     * @constructor
     * @param {Object} details - Object containing validation error details
     * @param {unknown} details[name] - Error message or details for each validation failure
     * @throws {Error} When details parameter is missing or invalid
     * @memberof _ValidateErrorJSON
     * @public
     * @since 2.0.0
     * 
     * @example
     * const error = new _ValidateErrorJSON({
     *   did: "Invalid DID format: missing method",
     *   controller: "Controller DID not found",
     *   verificationMethod: {
     *     id: "Invalid key ID format",
     *     type: "Unsupported verification method type"
     *   }
     * });
     */
    constructor(details: { [name: string]: unknown }) {
        this.message = "Validation failed";
        this.details = details;
    }
}