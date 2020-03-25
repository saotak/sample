import { Entity, model, property } from '@loopback/repository';
import moment from 'moment';

@model({ settings: { strict: false } })
export class Message extends Entity {

  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  MessageID?: number;

  @property({
    type: 'string',
  })
  title?: string;

  @property({
    type: 'string',
  })
  body?: string;

  // Test for moment.js
  @property({
    type: 'date',
    default: () => moment().format('YYYY-MM-DDTHH:MMZ'),
  })
  ReceivedDate?: string;

  @property({
    type: 'date',
  })
  DummyDate?: string;




  // Define well-known properties here.

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Message>) {
    super(data);
  }
}

export interface MessageRelations {
  // describe navigational properties here
}

export type MessageWithRelations = Message & MessageRelations;
