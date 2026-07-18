export const retryUntil = async <T>(
  fn: () => Promise<T>,
  validator: (candidate: T) => boolean,
  options: { attempts?: number, fallback: T }
): Promise<T> => {
  const attempts = options?.attempts ?? 10

  for (let i = 0; i < attempts; i++) {
    const candidate = await fn()
    if (validator(candidate)) return candidate
  }

  return options.fallback
}
