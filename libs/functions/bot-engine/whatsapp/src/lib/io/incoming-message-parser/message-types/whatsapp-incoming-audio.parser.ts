import { HandlerTools } from "@iote/cqrs";

import { ActiveChannel, IncomingAudioMessageParser, MessagesDataService } from "@app/functions/bot-engine";
import { AudioMessage, IncomingMessagePayload } from "@app/model/convs-mgr/conversations/messages";
import { AudioPayload, MessageTypes } from "@app/model/convs-mgr/functions";

export class WhatsappIncomingAudioParser extends IncomingAudioMessageParser {

  constructor(activeChannel: ActiveChannel, msgService$: MessagesDataService, tools: HandlerTools) 
  {
    super(activeChannel, msgService$, tools);
  }

  parse(incomingMessage: IncomingMessagePayload): AudioMessage {

    const incomingAudioMessage = incomingMessage as AudioPayload

    // Create the base message object
    const standardMessage: AudioMessage = {
      id: incomingAudioMessage.id,
      type: MessageTypes.AUDIO,
      endUserPhoneNumber: incomingAudioMessage.from,
      mediaId: incomingAudioMessage.id,
      payload: incomingMessage,
      mime_type: incomingAudioMessage.mime_type,
    };

    // standardMessage.url = this.getFileURL(standardMessage, endUserId);

    return standardMessage;
  }

  save(message: AudioMessage, endUserId: string) {
    return this.saveFileMessage(message, endUserId);
  }
}