import {DefaultCrudRepository} from '@loopback/repository';
import {Message, MessageRelations} from '../models';
import {MessageDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MessageRepository extends DefaultCrudRepository<
  Message,
  typeof Message.prototype.MessageID,
  MessageRelations
> {
  constructor(
    @inject('datasources.Message') dataSource: MessageDataSource,
  ) {
    super(Message, dataSource);
  }
}
