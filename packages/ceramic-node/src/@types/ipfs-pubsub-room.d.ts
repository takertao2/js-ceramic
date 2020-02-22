declare module 'ipfs-pubsub-room' {
  import { EventEmitter } from 'events';
  import Ipfs from 'ipfs'

  export class PubSubRoom extends EventEmitter {
    constructor(ipfs: Ipfs.Ipfs, topic: string)

    broadcast(message: string | any): void

    sendTo(cid: any, message: string | any): void

    leave(): Promise<void>

    getPeers(): Array<string>

    hasPeer(cid: any): boolean
  }

  export default function (ipfs: any, topic: string): PubSubRoom
}
