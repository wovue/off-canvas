import {EventEmitter} from 'events'

export const eventBus = Object.assign({}, EventEmitter.prototype)
