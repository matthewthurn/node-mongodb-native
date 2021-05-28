import { MongoError } from '../error';
import type { ConnectionPool } from './connection_pool';

/**
 * An error indicating a connection pool is closed
 * @category Error
 */
export class PoolClosedError extends MongoError {
  /** The address of the connection pool */
  address: string;

  constructor(pool: ConnectionPool) {
    super('Attempted to check out a connection from closed connection pool');
    this.name = 'MongoPoolClosedError';
    this.address = pool.address;
  }
}

/**
 * An error thrown when a request to check out a connection times out
 * @category Error
 */
export class WaitQueueTimeoutError extends MongoError {
  /** The address of the connection pool */
  address: string;

  constructor(message: string, address: string) {
    super(`Timed out while checking out a connection from connection pool${message}`);
    this.name = 'MongoWaitQueueTimeoutError';
    this.address = address;
  }
}
