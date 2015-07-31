export default function some(condition) {
  for (const item of this) {
    if (item::condition()) return true;
  }

  return false;
}
