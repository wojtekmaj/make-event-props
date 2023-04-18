// As defined on the list of supported events: https://reactjs.org/docs/events.html
export const clipboardEvents = ['onCopy', 'onCut', 'onPaste'] as const;
export const compositionEvents = [
  'onCompositionEnd',
  'onCompositionStart',
  'onCompositionUpdate',
] as const;
export const focusEvents = ['onFocus', 'onBlur'] as const;
export const formEvents = ['onInput', 'onInvalid', 'onReset', 'onSubmit'] as const;
export const imageEvents = ['onLoad', 'onError'] as const;
export const keyboardEvents = ['onKeyDown', 'onKeyPress', 'onKeyUp'] as const;
export const mediaEvents = [
  'onAbort',
  'onCanPlay',
  'onCanPlayThrough',
  'onDurationChange',
  'onEmptied',
  'onEncrypted',
  'onEnded',
  'onError',
  'onLoadedData',
  'onLoadedMetadata',
  'onLoadStart',
  'onPause',
  'onPlay',
  'onPlaying',
  'onProgress',
  'onRateChange',
  'onSeeked',
  'onSeeking',
  'onStalled',
  'onSuspend',
  'onTimeUpdate',
  'onVolumeChange',
  'onWaiting',
] as const;
export const mouseEvents = [
  'onClick',
  'onContextMenu',
  'onDoubleClick',
  'onMouseDown',
  'onMouseEnter',
  'onMouseLeave',
  'onMouseMove',
  'onMouseOut',
  'onMouseOver',
  'onMouseUp',
] as const;
export const dragEvents = [
  'onDrag',
  'onDragEnd',
  'onDragEnter',
  'onDragExit',
  'onDragLeave',
  'onDragOver',
  'onDragStart',
  'onDrop',
] as const;
export const selectionEvents = ['onSelect'] as const;
export const touchEvents = ['onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart'] as const;
export const pointerEvents = [
  'onPointerDown',
  'onPointerMove',
  'onPointerUp',
  'onPointerCancel',
  'onGotPointerCapture',
  'onLostPointerCapture',
  'onPointerEnter',
  'onPointerLeave',
  'onPointerOver',
  'onPointerOut',
] as const;
export const uiEvents = ['onScroll'] as const;
export const wheelEvents = ['onWheel'] as const;
export const animationEvents = [
  'onAnimationStart',
  'onAnimationEnd',
  'onAnimationIteration',
] as const;
export const transitionEvents = ['onTransitionEnd'] as const;
export const otherEvents = ['onToggle'] as const;
export const changeEvents = ['onChange'] as const;

export const allEvents = [
  ...clipboardEvents,
  ...compositionEvents,
  ...focusEvents,
  ...formEvents,
  ...imageEvents,
  ...keyboardEvents,
  ...mediaEvents,
  ...mouseEvents,
  ...dragEvents,
  ...selectionEvents,
  ...touchEvents,
  ...pointerEvents,
  ...uiEvents,
  ...wheelEvents,
  ...animationEvents,
  ...transitionEvents,
  ...changeEvents,
  ...otherEvents,
] as const;

type AllEvents = (typeof allEvents)[number];

type EventHandler = (event: any, args: any) => void;

type Props = Record<string, unknown> & {
  [K in AllEvents]?: EventHandler;
};

type EventProps<T> = {
  [K in keyof T as K extends AllEvents ? K : never]: T[K];
};

/**
 * Returns an object with on-event callback props curried with provided args.
 * @param {Object} props Props passed to a component.
 * @param {Function=} getArgs A function that returns argument(s) on-event callbacks
 *   shall be curried with.
 */
export default function makeEventProps<T extends Props, U>(
  props: T,
  getArgs?: (eventName: string) => U,
): EventProps<T> {
  const eventProps: EventProps<T> = {} as EventProps<T>;

  allEvents.forEach((eventName) => {
    const eventHandler = props[eventName];

    if (!eventHandler) {
      return;
    }

    if (!getArgs) {
      eventProps[eventName] = eventHandler;
      return;
    }

    eventProps[eventName] = (event) => eventHandler(event, getArgs(eventName));
  });

  return eventProps;
}
