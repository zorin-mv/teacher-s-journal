export default function findMaxMark(array) {
    const MAX_MARK = Math.max(...array.map((e) => e.maxMark()));

    return array.filter((e) => e.maxMark() === MAX_MARK).map((e) => e.getFullName())
}