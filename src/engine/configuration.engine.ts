export function getConfigurationSetting(
    name: string,
    defaultValue: string,
): string;
export function getConfigurationSetting(
    name: string,
    defaultValue: undefined,
    required: true,
): string;
export function getConfigurationSetting(
    name: string,
    defaultValue?: string,
    required?: boolean,
): string | null;
export function getConfigurationSetting(
    name: string,
    defaultValue?: string,
    required?: boolean,
): string | null {
    const value = Deno.env.get(name);
    if (value !== undefined) return value;
    if (defaultValue !== undefined) return defaultValue;
    if (required) failOnConfiguration(name);
    return null;
}
export function getDefaultConfigurationSetting(
    name: string,
    defaultValue: string,
): string {
    const value = Deno.env.get(name);
    if (value !== undefined) return value;
    return defaultValue;
}

export function getUrlConfigurationSetting(
    name: string,
    defaultValue?: string,
    required?: boolean,
    removeTrailingSlash = true,
): string | null {
    let rawValue = getConfigurationSetting(name);
    if (rawValue !== null) {
        try {
            rawValue = rawValue.replace(/(https?:)\/([^\/])/, '$1//$2'); // path.join removes the double slash in http
            if (removeTrailingSlash) return rawValue.replace(/\/$/, '');
            return rawValue;
        } catch (e) {
            console.error(e);
        }
    }
    if (defaultValue !== undefined) {
        return defaultValue.replace(/(https?:)\/([^\/])/, '$1//$2');
    }
    if (required) failOnConfiguration(name);
    return null;
}

export function getIntConfigurationSetting(
    name: string,
    defaultValue: number,
): number;
export function getIntConfigurationSetting(
    name: string,
    defaultValue?: number,
    required?: boolean,
): number | null {
    const rawValue = getConfigurationSetting(name);
    if (rawValue !== null) {
        try {
            return parseInt(rawValue, 10);
        } catch (e) {
            console.error(e);
        }
    }
    if (defaultValue !== undefined) return defaultValue;
    if (required) failOnConfiguration(name);
    return null;
}

export function getBoolConfigurationSetting(
    name: string,
    defaultValue: boolean,
): boolean;
export function getBoolConfigurationSetting(
    name: string,
    defaultValue?: boolean,
    required?: boolean,
): boolean | null {
    const rawValue = getConfigurationSetting(name);
    if (rawValue !== null) {
        return rawValue.toLowerCase() === 'true';
    }
    if (defaultValue !== undefined) return defaultValue;
    if (required) failOnConfiguration(name);
    return null;
}

export function getListConfigurationSetting(
    name: string,
    defaultValue?: string[],
    required?: boolean,
    separator = ';',
): string[] | null {
    const rawValue = getConfigurationSetting(name);
    if (rawValue !== null) {
        if (rawValue.trim() === '') return [];
        return rawValue.split(separator);
    }
    if (defaultValue !== undefined) return defaultValue;
    if (required) failOnConfiguration(name);
    return null;
}
export function getObjectConfigurationSetting(
    name: string,
    defaultValue?: object,
    required?: boolean,
): object | null {
    const rawValue = getConfigurationSetting(name);
    if (rawValue !== null) {
        return JSON.parse(rawValue);
    }
    if (defaultValue !== undefined) return defaultValue;
    if (required) failOnConfiguration(name);
    return null;
}

export function failOnConfiguration(name: string) {
    console.log(`configuration variable not found: ${name}`);
    Deno.exit(1);
}
