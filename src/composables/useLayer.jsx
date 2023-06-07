export default function useLayer() {
  let zIndex = 1000
  return {
    getNextZIndex: () => zIndex++
  }
}
