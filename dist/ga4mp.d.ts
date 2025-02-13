/**
 * Main Class Function
 * @param {array|string} measurement_ids
 * @param {object} config
 * @returns
 */
declare function ga4mp(measurement_ids: any[] | string, config?: object): {
    version: any;
    mode: any;
    getHitIndex: () => any;
    getSessionId: () => any;
    getClientId: () => any;
    setUserProperty: (key: any, value: any) => void;
    setEventsParameter: (key: string, value: string | number | Function) => void;
    setUserId: (value: string) => void;
    trackEvent: (eventName: string, eventParameters?: object, forceDispatch?: boolean) => void;
};

export { ga4mp as default };
