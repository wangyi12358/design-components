import { describe, it, expect } from 'vitest';
import { mergeProps } from '../src';

describe('merge-props', () => {
  it('merge props', () => {
    expect(mergeProps({ value: 1 }, { value: 2 })).toEqual({ value: 2 });
  });
});
