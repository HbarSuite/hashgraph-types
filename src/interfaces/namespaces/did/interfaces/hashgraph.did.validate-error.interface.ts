/**
 * Validate Error JSON Interface
 * @export
 * @interface _IValidateErrorJSON
 * @namespace IHashgraph.IDID._IValidateErrorJSON
 * @description Represents the structure of a validation error response returned when DID validation fails.
 * This interface provides a standardized format for reporting validation errors, including both
 * a high-level error message and detailed error information for specific fields.
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * @remarks
 * - Used for both synchronous and asynchronous validation operations
 * - Supports nested error details for complex validation scenarios
 * - Follows RFC 7807 Problem Details format recommendations
 * @example
 * ```typescript
 * const validationError: _IValidateErrorJSON = {
 *   message: "Validation failed",
 *   details: {
 *     did: "Invalid DID format: missing method-specific identifier",
 *     document: "Missing required verification method"
 *   }
 * };
 * ```
 */
export interface _IValidateErrorJSON {
    /**
     * Error message indicating validation failure
     * @property {string} message
     * @memberof _IValidateErrorJSON
     * @type {string}
     * @description A fixed message indicating that DID validation has failed.
     * This is a standardized message used across all validation errors.
     * @required
     * @since 2.0.0
     * @remarks Always returns "Validation failed" to maintain consistency
     * @example "Validation failed"
     */
    message: "Validation failed";

    /**
     * Detailed error information
     * @property {Object} details
     * @memberof _IValidateErrorJSON
     * @type {Object}
     * @description An object containing detailed information about specific validation errors.
     * Each key represents a field or component that failed validation, with the value
     * providing specific error details.
     * @required
     * @since 2.0.0
     * @remarks
     * - Keys are dynamic and depend on the validation context
     * - Values can be of any type to support various error formats
     * - Nested objects are supported for complex validation scenarios
     * @example
     * ```typescript
     * {
     *   "did": "Invalid DID format",
     *   "document": {
     *     "verificationMethod": "Missing required field",
     *     "service": "Invalid endpoint URL"
     *   }
     * }
     * ```
     */
    details: {
        /**
         * Error details for each validation field
         * @property {unknown} [name]
         * @memberof _IValidateErrorJSON.details
         * @type {unknown}
         * @description The validation error value for a specific field, which can be
         * of any type depending on the validation context and error type.
         * @since 2.0.0
         * @remarks
         * - Can contain strings, objects, or arrays
         * - Supports nested error structures
         * - Should be descriptive and actionable
         * @example "Invalid DID format: missing method-specific identifier"
         */
        [name: string]: unknown;
    };
}