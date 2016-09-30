import {EventEmitter} from 'events'
import objectAssign from 'object-assign'

export const eventBus = objectAssign({}, EventEmitter.prototype)
