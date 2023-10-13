import { ComponentRef } from '@angular/core';
import { BrowserJsPlumbInstance } from '@jsplumb/browser-ui';

import { KeywordMessageBlock } from '@app/model/convs-mgr/stories/blocks/messaging';

import { BlockComponent } from '@app/features/convs-mgr/stories/blocks/library/main';

/**
 * Decorates MessageBlock with JS plumb connectors.
 *
 * @param block   - TextMessageBlock data structure.
 * @param comp    - Angular component within the viewport
 * @param jsPlumb - Active jsPlumb instance
 *
 * @see {_JsPlumbComponentDecorator} - Should be the only one calling the component
 */
export function _KeywordJumpBlockDecoratePlumb(
  block: KeywordMessageBlock,
  comp: ComponentRef<BlockComponent>,
  jsPlumb: BrowserJsPlumbInstance
): ComponentRef<BlockComponent> {
  jsPlumb.addEndpoint(comp.location.nativeElement, {
    // Left jsplumb
    target: true,
    cssClass: 'block_endpoint',
    endpoint: 'Dot',
    anchor: 'Left',
    maxConnections: -1,
  });

  jsPlumb.addEndpoint(comp.location.nativeElement, {
    // Right jsplumb
    source: true,
    cssClass: 'block_endpoint',
    endpoint: 'Dot',
    anchor: 'Right',
    maxConnections: -1,
  });

  return comp;
}

