import { getConfigurationSetting, getIntConfigurationSetting } from '../../engine/configuration.engine.ts';

export const ExpressConfiguration = {
    host: getConfigurationSetting('HA_EXPRESS_HOST', 'http://localhost'),
    port: getIntConfigurationSetting('HA_EXPRESS_PORT', 3084),
};
