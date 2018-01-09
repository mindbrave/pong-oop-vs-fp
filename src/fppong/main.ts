
import {createPong} from 'pong'

interface Window {
  startFPPong: () => void
}

(window as Window).startFPPong = () => {
    const pong = createPong()
}
