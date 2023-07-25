import type { Store, StoreConfig } from "cache-manager";
import type { RedisClientType, RedisClientOptions } from "redis";

interface RedisStore extends Store {
    name: string;
    getClient: () => RedisClientType;
    isCacheableValue: any;
    set: <T>(key: any, value: T, options?: any, cb?: any) => Promise<void>;
    get: <T>(key: any, options?: any, cb?: any) => Promise<T | undefined>;
    del: (...args: any[]) => Promise<any>;
    mset: (...args: any[]) => Promise<any>;
    mget: (...args: any[]) => Promise<any>;
    mdel: (...args: any[]) => Promise<any>;
    reset: () => Promise<void>;
    keys: (pattern: string) => Promise<any>;
    ttl: (key: any) => Promise<any>;
}

export function redisStore(config: RedisClientOptions & StoreConfig): Promise<RedisStore>;
