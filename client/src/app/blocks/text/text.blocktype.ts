import { BlockData, BlockType, Property, UIHint } from '@typijs/core';
import { TextBlockComponent } from './text.component';
@BlockType({
    displayName: 'Text Block',
    componentRef: TextBlockComponent
})
export class TextBlock extends BlockData {
    @Property({
        displayName: 'Text content',
        displayType: UIHint.XHtml,
    })
    content: string;
}
