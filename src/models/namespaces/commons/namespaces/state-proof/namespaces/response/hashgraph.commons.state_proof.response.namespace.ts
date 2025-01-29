import { ApiSchema } from "@hsuite/nestjs-swagger";
import { _Compact } from './models/hashgraph.commons.state_proof.response.models.compact.model';
import { _Full } from './models/hashgraph.commons.state_proof.response.models.full.model';
import { _RecordFile } from './models/hashgraph.commons.state_proof.response.models.record-file.model';

/**
 * Namespace containing types related to state proof responses in Hashgraph
 * @namespace _Response
 * @description Contains classes for different types of state proof responses including compact, full and record file formats.
 * Provides comprehensive support for state proof data management and validation.
 * @category Hashgraph
 * @subcategory Commons
 * @since 2.0.0
 * @public
 */
export namespace _Response {
    /**
     * Class representing a compact state proof response
     * @class Compact
     * @extends {_Compact}
     * @description Provides a condensed version of state proof data with essential information.
     * Includes address books, record files, and signature data in an optimized format.
     * @memberof _Response
     * @public
     * @since 2.0.0
     */
    @ApiSchema({
        name: 'Hashgraph.Commons.StateProof.Response.Compact'
    })
    export class Compact extends _Compact {}

    /**
     * Class representing a full state proof response
     * @class Full 
     * @extends {_Full}
     * @description Contains complete state proof data with all available details and metadata.
     * Provides comprehensive information about the state proof including all signatures and record data.
     * @memberof _Response
     * @public
     * @since 2.0.0
     */
    @ApiSchema({
        name: 'Hashgraph.Commons.StateProof.Response.Full'
    })
    export class Full extends _Full {}

    /**
     * Class representing a record file in a state proof response
     * @class RecordFile
     * @extends {_RecordFile} 
     * @description Contains record file data that is part of the state proof, including:
     * - Transaction records
     * - File metadata
     * - Hash information
     * - Block details
     * @memberof _Response
     * @public
     * @since 2.0.0
     */
    @ApiSchema({
        name: 'Hashgraph.Commons.StateProof.Response.RecordFile'
    })
    export class RecordFile extends _RecordFile {}
}