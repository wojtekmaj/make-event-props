import { describe, expect, it, vi } from 'vitest';
import makeEventProps from './index';

describe('makeEventProps', () => {
  const fakeEvent = {};

  it('returns object with valid and only valid event callbacks', () => {
    const props = {
      onClick: vi.fn(),
      someInvalidProp: vi.fn(),
    };
    const result = makeEventProps(props);

    expect(result).toMatchObject({ onClick: expect.any(Function) });
  });

  it('calls getArgs function on event invoke if given', () => {
    const props = {
      onClick: vi.fn(),
      someInvalidProp: vi.fn(),
    };
    const getArgs = vi.fn();
    const result = makeEventProps(props, getArgs);

    // getArgs shall not be invoked before a given event is fired
    expect(getArgs).not.toHaveBeenCalled();

    result.onClick(fakeEvent);

    expect(getArgs).toHaveBeenCalledTimes(1);
    expect(getArgs).toHaveBeenCalledWith('onClick');
  });

  it('properly calls callbacks given in props given no getArgs function', () => {
    const props = {
      onClick: vi.fn(),
    };
    const result = makeEventProps(props);

    result.onClick(fakeEvent);

    expect(props.onClick).toHaveBeenCalledWith(fakeEvent);
  });

  it('properly calls callbacks given in props given getArgs function', () => {
    const props = {
      onClick: vi.fn(),
    };
    const getArgs = vi.fn();
    const args = {};
    getArgs.mockReturnValue(args);
    const result = makeEventProps(props, getArgs);

    result.onClick(fakeEvent);

    expect(props.onClick).toHaveBeenCalledWith(fakeEvent, args);
  });

  it('should not filter out valid event props', () => {
    const props = {
      onClick: vi.fn(),
    };

    const result = makeEventProps(props);

    // @ts-expect-no-error
    result.onClick;
  });

  it('should filter out invalid event props', () => {
    const props = {
      someInvalidProp: vi.fn(),
    };

    const result = makeEventProps(props);

    // @ts-expect-error-next-line
    result.someInvalidProp;
  });
});
