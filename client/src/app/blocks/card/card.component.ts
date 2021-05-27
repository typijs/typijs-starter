import { Component } from '@angular/core';
import { CmsComponent } from '@typijs/core';
import { CardBlock } from './card.blocktype';

@Component({
    selector: 'div[card-block]',
    host: { 'class': 'col-md-4 mb-5'},
    template: `
    <div class="card h-100">
        <div class="card-body">
            <h2 class="card-title" [cmsText]="currentContent.title"></h2>
            <p class="card-text" [cmsXhtml]="currentContent.content"></p>
        </div>
        <div class="card-footer">
            <a class="btn btn-primary btn-sm" href="#!" [cmsUrl]="currentContent.buttonLink" [cmsText]="currentContent.buttonText"></a>
        </div>
    </div>
    `
})
export class CardBlockComponent extends CmsComponent<CardBlock> {
    constructor() {
        super();
    }
}
