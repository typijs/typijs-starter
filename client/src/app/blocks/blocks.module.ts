import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TypiJsModule } from '@typijs/core';
import { CardImageComponent } from './card-image/card-image.component';
import { CardBlockComponent } from './card/card.component';
import { TextBlockComponent } from './text/text.component';

const BLOCKS_COMPONENT = [
    CardBlockComponent,
    CardImageComponent,
    TextBlockComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TypiJsModule
    ],
    declarations: [
        ...BLOCKS_COMPONENT
    ]
})
export class BlocksModule { }
