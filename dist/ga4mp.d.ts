/**
 * Main Class Function
 * @param {string|string[]} measurement_ids
 * @param {object} [config]
 * @param {string} [config.user_id] User ID
 * @param {string} [config.client_id] Client ID (will be autogenerated if not set)
 * @param {string} [config.session_id] Session ID (will be autogenerated if not set)
 * @param {string} [config.endpoint] Override endpoint URL
 * @param {boolean} [config.debug] Show debug Messages
 * @param {number} [config.queueDispatchTime] How often the queue should be dispatched in milliseconds (defaults to 5000)
 * @param {number} [config.queueDispatchMaxEvents] How much events queue to force the queue dispatch (defaults to 10)
 * @param {string} [config.user_agent] Override the User Agent (only works in Node)
 * @param {string} [config.user_ip_address] Override the User IP Address
 * @param {boolean} [config.non_personalized_ads] Disable ads personalization for all hits
 * @param {boolean} [config.encode_search_params] Enable encoding of search params
 *
 * @returns
 */
declare function ga4mp(measurement_ids: string | string[], config?: {
    user_id?: string;
    client_id?: string;
    session_id?: string;
    endpoint?: string;
    debug?: boolean;
    queueDispatchTime?: number;
    queueDispatchMaxEvents?: number;
    user_agent?: string;
    user_ip_address?: string;
    non_personalized_ads?: boolean;
    encode_search_params?: boolean;
}): {
    /**
    * @type string
    */
    version: string;
    /**
    * @type {'browser'|'node'}
    */
    mode: "browser" | "node";
    getHitIndex: () => number;
    getSessionId: () => string;
    getClientId: () => string;
    setUserProperty: (key: string, value: string | number) => void;
    setEventsParameter: (key: string, value: string | number | Function) => void;
    setUserId: (value: string) => void;
    trackEvent: (eventName: string, eventParameters?: {
        [x: string]: string | number | boolean;
    } | {
        items: {
            [x: string]: string | number | undefined;
        }[];
    }, forceDispatch?: boolean) => void;
};

export { ga4mp as default };
