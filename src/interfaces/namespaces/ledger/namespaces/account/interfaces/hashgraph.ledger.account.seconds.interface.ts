    /**
     * Hashgraph account seconds interface
     * @summary Hashgraph account seconds interface
     * @description Interface representing seconds in Hashgraph accounts. Used to store 64-bit second values
     * split into high and low 32-bit components.
     * @interface _ISeconds
     * @memberof IHashgraph.ILedger.IAccounts
     * @property {number} low - Low part of the seconds value (lower 32 bits)
     * @property {number} high - High part of the seconds value (upper 32 bits)
     * @property {boolean} unsigned - Flag indicating if the value is unsigned
     * @example
     * const seconds: _ISeconds = {
     *   low: 123456,
     *   high: 0,
     *   unsigned: true
     * };
     * @since 2.0.0
     * @public
     */
    export interface _ISeconds {
        /**
         * Low part of the seconds value
         * @property {number} low
         * @description The lower 32 bits of the 64-bit second value. Valid range is 0 to 2^32-1.
         * @type {number}
         * @memberof _ISeconds
         * @required
         * @example
         * const lowValue = 123456;
         * @since 2.0.0
         * @public
         */
        low: number;

        /**
         * High part of the seconds value
         * @property {number} high
         * @description The upper 32 bits of the 64-bit second value. Valid range is 0 to 2^32-1.
         * @type {number}
         * @memberof _ISeconds
         * @required
         * @example
         * const highValue = 0;
         * @since 2.0.0
         * @public
         */
        high: number;

        /**
         * Unsigned flag
         * @property {boolean} unsigned
         * @description Indicates whether the value should be treated as unsigned (true) or signed (false).
         * This affects the interpretation of the high and low values.
         * @type {boolean}
         * @memberof _ISeconds
         * @required
         * @example
         * const isUnsigned = true;
         * @since 2.0.0
         * @public
         */
        unsigned: boolean;
    }