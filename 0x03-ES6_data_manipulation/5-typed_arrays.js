export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer, 0, length);
  view.setInt8(position, value);

  return buffer;
}
