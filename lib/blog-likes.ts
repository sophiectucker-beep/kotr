import { Redis } from "@upstash/redis";

let redisClient: Redis | null | undefined;

function getRedis() {
  if (redisClient !== undefined) {
    return redisClient;
  }

  const url =
    process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;

  if (!url || !token) {
    redisClient = null;
    return redisClient;
  }

  redisClient = new Redis({
    url,
    token,
  });
  return redisClient;
}

function countKey(slug: string) {
  return `blog:likes:count:${slug}`;
}

function deviceSetKey(slug: string) {
  return `blog:likes:devices:${slug}`;
}

export async function getBlogLikeState(slug: string) {
  return getBlogLikeStateForDevice(slug);
}

export async function getBlogLikeStateForDevice(slug: string, deviceId?: string) {
  const redis = getRedis();

  if (!redis) {
    return {
      enabled: false,
      count: 0,
      liked: false,
    };
  }

  const [count, liked] = await Promise.all([
    redis.get<number>(countKey(slug)),
    deviceId ? redis.sismember(deviceSetKey(slug), deviceId) : Promise.resolve(0),
  ]);

  return {
    enabled: true,
    count: count ?? 0,
    liked: liked === 1,
  };
}

export async function addBlogLike(slug: string, deviceId: string) {
  const redis = getRedis();

  if (!redis) {
    return {
      enabled: false,
      count: 0,
      liked: false,
    };
  }

  const added = await redis.sadd(deviceSetKey(slug), deviceId);
  const liked = added === 1;
  const count = liked
    ? await redis.incr(countKey(slug))
    : ((await redis.get<number>(countKey(slug))) ?? 0);

  return {
    enabled: true,
    count,
    liked,
  };
}

export async function removeBlogLike(slug: string, deviceId: string) {
  const redis = getRedis();

  if (!redis) {
    return {
      enabled: false,
      count: 0,
      liked: false,
    };
  }

  const removed = await redis.srem(deviceSetKey(slug), deviceId);

  if (removed === 1) {
    const currentCount = (await redis.get<number>(countKey(slug))) ?? 0;
    const nextCount = Math.max(0, currentCount - 1);
    await redis.set(countKey(slug), nextCount);

    return {
      enabled: true,
      count: nextCount,
      liked: false,
    };
  }

  const count = (await redis.get<number>(countKey(slug))) ?? 0;

  return {
    enabled: true,
    count,
    liked: false,
  };
}
