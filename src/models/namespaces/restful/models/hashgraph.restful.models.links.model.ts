import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsOptional, IsUrl } from 'class-validator';
import { IHashgraph } from '../../../../interfaces/hashgraph.namespace';

/**
 * @file hashgraph.restful.models.links.model.ts
 * @class _Links
 * @description Implements HATEOAS (Hypermedia as the Engine of Application State) links
 * for RESTful API responses. This class provides standardized pagination and resource
 * navigation capabilities across the API, implementing the IHashgraph.IRestful.ILinks interface.
 * @category Hashgraph
 * @subcategory Restful Models
 * @since 2.0.0
 * 
 * Features:
 * - HATEOAS-compliant link structure
 * - URL validation and sanitization
 * - Optional pagination support
 * - Type-safe link handling
 * 
 * @example
 * ```typescript
 * // Create new links for pagination
 * const links = new _Links('https://api.example.com/results?page=2');
 * 
 * // Access next page URL
 * console.log(links.next); // 'https://api.example.com/results?page=2'
 * ```
 */
export class _Links implements IHashgraph.IRestful.ILinks {
    /**
     * Next page URL for paginated responses
     * @description URL pointing to the next page of results in paginated API responses.
     * Implements HATEOAS principles for resource navigation. When undefined, indicates
     * the last page has been reached.
     * @type {string}
     * @memberof _Links
     * @optional
     * @example "https://api.example.com/results?page=2"
     * 
     * @remarks
     * - Must be a valid HTTP/HTTPS URL if provided
     * - Automatically validated during object construction
     * - Supports query parameters for pagination control
     */
    @ApiProperty({
        description: 'The URL to retrieve the next page of results in paginated responses',
        example: 'https://api.example.com/results?page=2',
        required: false,
    })
    @IsOptional()
    @IsUrl()
    next?: string;

    /**
     * Creates an instance of _Links
     * @constructor
     * @param {string} [next] - Optional URL for the next page of results
     * @throws {Error} If next is provided but is not a string or valid URL
     * @memberof _Links
     * 
     * @example
     * ```typescript
     * // Create links with next page URL
     * const links = new _Links('https://api.example.com/results?page=2');
     * 
     * // Create links without pagination
     * const links = new _Links();
     * 
     * // Will throw error for invalid URL
     * try {
     *   const links = new _Links('invalid-url');
     * } catch (error) {
     *   console.error('Invalid URL provided');
     * }
     * ```
     */
    constructor(next?: string) {
        // Validate and set next URL if provided
        if (next) {
            // Ensure next is a string
            if (typeof next !== 'string') {
                throw new Error('next must be a string');
            }
            // Validate URL format
            if (!next.startsWith('http://') && !next.startsWith('https://')) {
                throw new Error('next must be a valid URL');
            }
            this.next = next;
        }
    }
}