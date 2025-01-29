import { _Status } from './models/hashgraph.restful.hcs.topic.models.status.model';
import { _Details } from './models/hashgraph.restful.hcs.topic.models.details.model';
import { ApiSchema } from "@hsuite/nestjs-swagger"

/**
 * @file topic.namespace.ts
 * @namespace _Topic
 * @description Namespace containing classes and types for Hashgraph Consensus Service (HCS) Topic operations.
 * This namespace encapsulates various components related to HCS Topic operations,
 * including status representation and management. It provides a structured way to interact
 * with and manipulate HCS topics within the Hashgraph network.
 * @category Hashgraph
 * @subcategory HCS
 * @since 2.0.0
 * 
 * @example
 * // Importing and using the Status class from the _Topic namespace
 * import { _Topic } from './hashgraph.restful.hcs.topic.namespace';
 * 
 * const topicStatus = new _Topic.Status({
 *   _status: {
 *     topicId: "0.0.1234",
 *     sequenceNumber: 42,
 *     runningHash: "0x1234abcd...",
 *     runningHashVersion: 2
 *   }
 * });
 */
export namespace _Topic {
    /**
     * Class representing the status of a Hashgraph Consensus Service (HCS) topic
     * @class Status
     * @extends {_Status}
     * @description Encapsulates the current state of an HCS topic, including its ID, 
     * sequence number, and running hash. This class provides a way to track and manage
     * the state of topics in the Hashgraph network.
     * @category Hashgraph
     * @subcategory HCS
     * @since 2.0.0
     * 
     * @example
     * const topicStatus = new Status({
     *   _status: {
     *     topicId: "0.0.1234",
     *     sequenceNumber: 42,
     *     runningHash: "0x1234abcd...",
     *     runningHashVersion: 2
     *   }
     * });
     */
    @ApiSchema({ name: 'Hashgraph.Restful.Hcs.Topic.Status' })
    export class Status extends _Status { }

    /**
     * Class representing the details of a Hashgraph Consensus Service (HCS) topic
     * @class Details
     * @extends {_Details}
     * @description Encapsulates the detailed configuration and state of an HCS topic,
     * including its keys, auto-renewal settings, and metadata. This class provides a
     * comprehensive view of a topic's properties and settings.
     * @category Hashgraph
     * @subcategory HCS
     * @since 2.0.0
     * 
     * @example
     * const topicDetails = new Details({
     *   admin_key: {
     *     _type: "ProtobufEncoded",
     *     key: "421050820e1485acdd59726088e0e4a2130ebbbb70009f640ad95c78dd5a7b38"
     *   },
     *   auto_renew_account: "0.0.2",
     *   auto_renew_period: 7776000,
     *   created_timestamp: "1586567700.453054000",
     *   deleted: false,
     *   memo: "My HCS Topic",
     *   topic_id: "0.0.2"
     * });
     */
    @ApiSchema({ name: 'Hashgraph.Restful.Hcs.Topic.Details' })
    export class Details extends _Details { }
}
