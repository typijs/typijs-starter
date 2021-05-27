import { Component } from '@angular/core';
import { CmsComponent } from '@typijs/core';
import { TextBlock } from './text.blocktype';

@Component({
    selector: 'div[text-block]',
    host: { 'class': 'card text-white bg-secondary my-5 py-4 text-center'},
    template: `
        <div class="card-body">
            <p class="text-white m-0" [cmsXhtml]="currentContent.content"></p>
        </div>
    `
})
export class TextBlockComponent extends CmsComponent<TextBlock> {
    constructor() {
        super();
    }
}
