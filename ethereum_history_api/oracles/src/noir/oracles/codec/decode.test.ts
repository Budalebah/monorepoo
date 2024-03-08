import { describe, expect, it } from 'vitest';
import { decodeField, decodeHexAddress } from './decode.js';

describe('decodeHexAddress', () => {
  it('simple', () => {
    const arg = [
      '0x00000000000000000000000000000000000000000000000000000000000000b4',
      '0x000000000000000000000000000000000000000000000000000000000000007e',
      '0x000000000000000000000000000000000000000000000000000000000000003c',
      '0x00000000000000000000000000000000000000000000000000000000000000d8',
      '0x0000000000000000000000000000000000000000000000000000000000000037',
      '0x00000000000000000000000000000000000000000000000000000000000000dd',
      '0x00000000000000000000000000000000000000000000000000000000000000f8',
      '0x00000000000000000000000000000000000000000000000000000000000000e4',
      '0x00000000000000000000000000000000000000000000000000000000000000c5',
      '0x000000000000000000000000000000000000000000000000000000000000007f',
      '0x0000000000000000000000000000000000000000000000000000000000000005',
      '0x00000000000000000000000000000000000000000000000000000000000000d7',
      '0x000000000000000000000000000000000000000000000000000000000000000a',
      '0x00000000000000000000000000000000000000000000000000000000000000b8',
      '0x0000000000000000000000000000000000000000000000000000000000000065',
      '0x00000000000000000000000000000000000000000000000000000000000000de',
      '0x000000000000000000000000000000000000000000000000000000000000006e',
      '0x0000000000000000000000000000000000000000000000000000000000000019',
      '0x000000000000000000000000000000000000000000000000000000000000003b',
      '0x00000000000000000000000000000000000000000000000000000000000000bb'
    ];
    expect(decodeHexAddress(arg)).toBe('0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb');
  });

  it('various length', () => {
    const arg = [
      '0xb4',
      '0x000000000000000000000000000000000000000000000000000000000000007e',
      '0x000000000000000000000000000000000000000000000000000000000000003c',
      '0x00000000000000000000000000000000000000000000000000000000000000d8',
      '0x0000000000000000000000000000000000000000000000000000000000000037',
      '0x00000000000000000000000000000000000000000000000000000000000000dd',
      '0x00000000000000000000000000000000000000000000000000000000000000f8',
      '0x00000000000000000000000000000000000000000000000000000000000000e4',
      '0x00000000000000000000000000000000000000000000000000000000000000c5',
      '0x000000000000000000000000000000000000000000000000000000000000007f',
      '0x5',
      '0x0000000000000000000000000000000000000000000000000000000000000000d7',
      '0x000000000000000000000000000000000000000000000000000000000000000a',
      '0x00000000000000000000000000000000000000000000000000000000000000b8',
      '0x0000000000000000000000000000000000000000000000000000000000000065',
      '0x00000000000000000000000000000000000000000000000000000000000000de',
      '0x000000000000000000000000000000000000000000000000000000000000006e',
      '0x0000000000000000000000000000000000000000000000000000000000000019',
      '0x000000000000000000000000000000000000000000000000000000000000003b',
      '0x00000000000000000000000000000000000000000000000000000000000000bb'
    ];
    expect(decodeHexAddress(arg)).toBe('0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb');
  });

  it('zero', () => {
    const arg = [
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000'
    ];
    expect(decodeHexAddress(arg)).toBe('0x0000000000000000000000000000000000000000');
  });

  it('invalid byte', () => {
    const arg = [
      '0x0000000000000000000000000000000000000000000000000000000000000123',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000'
    ];
    expect(() => decodeHexAddress(arg)).toThrow(
      'Invalid address, with byte: 0x0000000000000000000000000000000000000000000000000000000000000123'
    );
  });

  it('too many bytes', () => {
    const arg = [
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000'
    ];
    expect(() => decodeHexAddress(arg)).toThrow('Invalid address length: 21');
  });

  it('not enough bytes', () => {
    const arg = [
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000'
    ];
    expect(() => decodeHexAddress(arg)).toThrow('Invalid address length: 19');
  });
  it('too many bytes', () => {
    const arg = [
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000'
    ];
    expect(() => decodeHexAddress(arg)).toThrow('Invalid address length: 21');
  });

  it('invalid charater', () => {
    const arg = [
      '0x000000000000000000000000000000000000000000000000000000000000000w',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000'
    ];
    expect(() => decodeHexAddress(arg)).toThrow(
      'Invalid address, with byte: 0x000000000000000000000000000000000000000000000000000000000000000w'
    );
  });
});

describe('decodeField', () => {
  it('success', () => {
    expect(decodeField('0x0')).toEqual(0n);
    expect(decodeField('0x0000')).toEqual(0n);
    expect(decodeField('0x1')).toEqual(1n);
    expect(decodeField('0xff')).toEqual(255n);
    expect(decodeField('0x1fffffffffffff')).toEqual(9007199254740991n);
    expect(decodeField('0x0000000000000000000000000000000000000000000000000000000000000000')).toEqual(0n);
    expect(decodeField('0x0000000000000000000000000000000000000000000000000003f28cb71571c7')).toEqual(
      1111111111111111n
    );
    expect(decodeField('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')).toEqual(
      115792089237316195423570985008687907853269984665640564039457584007913129639935n
    );
  });
});