/**
 * @file links.interface.ts
 * @module IHashgraph.IRestful.ILinks
 * @description Interface defining pagination links structure for REST API responses
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Interfaces
 * @subcategory REST
 */

/**
 * Links interface for pagination
 * @interface _ILinks
 * @description Represents the links used for pagination in API responses. This interface
 * defines the structure of navigation links that allow traversing through paginated data.
 * 
 * @remarks
 * Key features:
 * - Pagination support
 * - Next page navigation
 * - End of results detection
 * - URL-based navigation
 * 
 * Common use cases:
 * - API response pagination
 * - Resource list navigation
 * - Results traversal
 * - Data streaming
 * 
 * Behavior:
 * - Returns next page URL if more results exist
 * - Returns undefined when at last page
 * - Maintains consistent page size
 * - Preserves query parameters
 * 
 * @example
 * ```typescript
 * // Basic pagination links
 * const basicLinks: _ILinks = {
 *   next: "https://api.hedera.com/api/v1/transactions?page=2"
 * };
 * 
 * // End of results links
 * const endLinks: _ILinks = {
 *   next: undefined
 * };
 * 
 * // Links with custom parameters
 * const customLinks: _ILinks = {
 *   next: "https://api.hedera.com/api/v1/transactions?page=2&limit=50&order=desc"
 * };
 * ```
 */
export interface _ILinks {
    /**
     * URL for the next page of results
     * @property {string} next
     * @description The URL to retrieve the next page of results in paginated responses.
     * When this property is undefined, it indicates that there are no more pages available.
     * 
     * @remarks
     * The URL structure:
     * - Includes the base API endpoint
     * - Contains page number parameter
     * - Preserves existing query parameters
     * - Maintains consistent page size
     * 
     * Behavior:
     * - Returns full URL string when more results exist
     * - Returns undefined at last page
     * - Maintains all active filters
     * - Preserves sorting order
     * 
     * @type {string}
     * @memberof _ILinks
     * @optional
     * 
     * @example
     * ```typescript
     * // Basic next page URL
     * next: "https://api.hedera.com/api/v1/transactions?page=2"
     * 
     * // URL with multiple parameters
     * next: "https://api.hedera.com/api/v1/transactions?page=2&limit=50&order=desc"
     * 
     * // End of results
     * next: undefined
     * ```
     */
    next?: string;
}