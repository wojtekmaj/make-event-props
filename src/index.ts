import type * as React from 'react';

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

type EventMap<T = any> = {
  // Clipboard Events
  onCopy: React.ClipboardEvent<T>;
  onCut: React.ClipboardEvent<T>;
  onPaste: React.ClipboardEvent<T>;

  // Composition Events
  onCompositionEnd: React.CompositionEvent<T>;
  onCompositionStart: React.CompositionEvent<T>;
  onCompositionUpdate: React.CompositionEvent<T>;

  // Focus Events
  onFocus: React.FocusEvent<T>;
  onBlur: React.FocusEvent<T>;

  // Form Events
  onInput: React.FormEvent<T>;
  onInvalid: React.FormEvent<T>;
  onReset: React.FormEvent<T>;
  onSubmit: React.FormEvent<T>;

  // Image Events
  onLoad: React.SyntheticEvent<T>;
  onError: React.SyntheticEvent<T>; // also a Media Event

  // Keyboard Events
  onKeyDown: React.KeyboardEvent<T>;
  onKeyPress: React.KeyboardEvent<T>;
  onKeyUp: React.KeyboardEvent<T>;

  // Media Events
  onAbort: React.SyntheticEvent<T>;
  onCanPlay: React.SyntheticEvent<T>;
  onCanPlayThrough: React.SyntheticEvent<T>;
  onDurationChange: React.SyntheticEvent<T>;
  onEmptied: React.SyntheticEvent<T>;
  onEncrypted: React.SyntheticEvent<T>;
  onEnded: React.SyntheticEvent<T>;
  onLoadedData: React.SyntheticEvent<T>;
  onLoadedMetadata: React.SyntheticEvent<T>;
  onLoadStart: React.SyntheticEvent<T>;
  onPause: React.SyntheticEvent<T>;
  onPlay: React.SyntheticEvent<T>;
  onPlaying: React.SyntheticEvent<T>;
  onProgress: React.SyntheticEvent<T>;
  onRateChange: React.SyntheticEvent<T>;
  onSeeked: React.SyntheticEvent<T>;
  onSeeking: React.SyntheticEvent<T>;
  onStalled: React.SyntheticEvent<T>;
  onSuspend: React.SyntheticEvent<T>;
  onTimeUpdate: React.SyntheticEvent<T>;
  onVolumeChange: React.SyntheticEvent<T>;
  onWaiting: React.SyntheticEvent<T>;

  // Mouse Events
  onClick: React.MouseEvent<T>;
  onContextMenu: React.MouseEvent<T>;
  onDoubleClick: React.MouseEvent<T>;
  onMouseDown: React.MouseEvent<T>;
  onMouseEnter: React.MouseEvent<T>;
  onMouseLeave: React.MouseEvent<T>;
  onMouseMove: React.MouseEvent<T>;
  onMouseOut: React.MouseEvent<T>;
  onMouseOver: React.MouseEvent<T>;
  onMouseUp: React.MouseEvent<T>;

  // Drag Events
  onDrag: React.DragEvent<T>;
  onDragEnd: React.DragEvent<T>;
  onDragEnter: React.DragEvent<T>;
  onDragExit: React.DragEvent<T>;
  onDragLeave: React.DragEvent<T>;
  onDragOver: React.DragEvent<T>;
  onDragStart: React.DragEvent<T>;
  onDrop: React.DragEvent<T>;

  // Selection Events
  onSelect: React.SyntheticEvent<T>;

  // Touch Events
  onTouchCancel: React.TouchEvent<T>;
  onTouchEnd: React.TouchEvent<T>;
  onTouchMove: React.TouchEvent<T>;
  onTouchStart: React.TouchEvent<T>;

  // Pointer Events
  onPointerDown: React.PointerEvent<T>;
  onPointerMove: React.PointerEvent<T>;
  onPointerUp: React.PointerEvent<T>;
  onPointerCancel: React.PointerEvent<T>;
  onGotPointerCapture: React.PointerEvent<T>;
  onLostPointerCapture: React.PointerEvent<T>;
  onPointerEnter: React.PointerEvent<T>;
  onPointerLeave: React.PointerEvent<T>;
  onPointerOver: React.PointerEvent<T>;
  onPointerOut: React.PointerEvent<T>;

  // UI Events
  onScroll: React.UIEvent<T>;

  // Wheel Events
  onWheel: React.WheelEvent<T>;

  // Animation Events
  onAnimationStart: React.AnimationEvent<T>;
  onAnimationEnd: React.AnimationEvent<T>;
  onAnimationIteration: React.AnimationEvent<T>;

  // Transition Events
  onTransitionEnd: React.TransitionEvent<T>;

  // Other events
  onToggle: React.SyntheticEvent<T>;

  // Change Events
  onChange: React.ChangeEvent<T>;
};

type AllEvents = keyof EventMap;

type EventHandler<K extends AllEvents> = (event: EventMap[K], args: unknown) => void;

type Props = Record<string, unknown> & {
  [K in AllEvents]?: EventHandler<K>;
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
