import { Events } from './types'

// An event handler will take an event argument
// and should not return a value
export type Handler<T = any> = (event: T) => void

interface Emitter {
  on<T = any>(event: Events, handler: Handler<T>): void

  emit<T = any>(event: Events, args?: T): void

  off(event: Events): void
}

export const emitter = (): Emitter => {
  const events = new Map()

  // TODO: Handle timeout for toast
  return {
    /**
     * Register an event handler for the given event name.
     * @param {Events} type Type of event to listen for
     * @param {Handler} callback Handler to call in response to given event
     */
    on<T = any>(event: Events, callback: Handler<T>) {
      if (!events.has(event)) events.set(event, [])
      events.get(event).push(callback)
    },

    /**
     * Invoke all handlers for the given event name.
     * @param {Events} type The event type to invoke
     * @param {Any} args Any value passed to each handler
     */
    emit<T = any>(event: Events, args: T) {
      if (!events.has(event)) return
      events.get(event).forEach((callback: Handler) => callback(args))
    },

    /**
     * Remove an event handler for the given event name.
     * @param {Events} type Type of event to unregister `handler` from.
     */
    off(event: Events) {
      events.delete(event)
    },
  }
}
