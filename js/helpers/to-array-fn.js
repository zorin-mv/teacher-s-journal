export default function toArrayFn(value) {
    return value.split(/,| /).filter(v => v);
}