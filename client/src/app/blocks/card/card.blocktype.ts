import { BlockData, BlockType, CmsUrl, Property, UIHint } from '@typijs/core';
import { CardBlockComponent } from './card.component';
@BlockType({
    displayName: 'Card Block',
    componentRef: CardBlockComponent
})
export class CardBlock extends BlockData {

    @Property({
        displayName: 'Title',
        displayType: UIHint.Text,
    })
    title: string;

    @Property({
        displayName: 'Text content',
        displayType: UIHint.XHtml,
    })
    content: string;

    @Property({
        displayName: 'Button Text',
        displayType: UIHint.Text,
    })
    buttonText: string;

    @Property({
        displayName: 'Button Link',
        displayType: UIHint.Url,
    })
    buttonLink: CmsUrl;
}
