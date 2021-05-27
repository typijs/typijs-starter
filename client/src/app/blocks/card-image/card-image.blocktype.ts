import { BlockType, CmsImage, Property, UIHint } from '@typijs/core';
import { CardBlock } from '../card/card.blocktype';
import { CardImageComponent } from './card-image.component';
@BlockType({
    displayName: 'Card Image Block',
    componentRef: CardImageComponent
})
export class CardImageBlock extends CardBlock {
    @Property({
        displayName: 'Image',
        displayType: UIHint.Image,
    })
    image: CmsImage;
}
