export function generateSearchParams<T extends Record<string, any>>(obj: T): string {
    const searchParams = new URLSearchParams();
  
    Object.entries(obj).forEach(([key, value]) => {
      searchParams.append(key, String(value));
    });
  
    return searchParams.toString();
  }
  