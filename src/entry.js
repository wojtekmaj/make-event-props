// As defined on the list of supported mouse events: https://facebook.github.io/react/docs/events.html#mouse-events
export const mouseEvents = ['onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp'];
// As defined on the list of supported touch events: https://facebook.github.io/react/docs/events.html#touch-events
export const touchEvents = ['onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart'];

/**
 * Returns an object with on-event callback props curried with provided args.
 * @param {Object} props Props passed to a component.
 * @param {Function=} getArgs A function that returns argument(s) on-event callbacks
 *   shall be curried with.
 */
const makeEventProps = (props, getArgs) => {
  const eventProps = {};

  [...mouseEvents, ...touchEvents].forEach((eventName) => {
    if (props[eventName]) {
      eventProps[eventName] = event => (
        getArgs ?
          props[eventName](event, getArgs(eventName)) :
          props[eventName](event)
      );
    }
  });

  return eventProps;
};

export default makeEventProps;
