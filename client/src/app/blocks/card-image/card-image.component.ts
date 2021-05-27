import { Component } from '@angular/core';
import { CmsComponent } from '@typijs/core';
import { CardImageBlock } from './card-image.blocktype';

@Component({
    selector: 'div[card-image-block]',
    host: { 'class': 'row gx-4 gx-lg-5 align-items-center my-5' },
    template: `
    <div class="col-lg-7">
        <img class="img-fluid rounded mb-4 mb-lg-0" [cmsImage]="currentContent.image" alt="...">
    </div>
    <div class="col-lg-5">
        <h1 class="font-weight-light" [cmsText]="currentContent.title"></h1>
        <p [cmsXhtml]="currentContent.content"></p>
        <a class="btn btn-primary" [cmsUrl]="currentContent.buttonLink" [cmsText]="currentContent.buttonText"></a>
    </div>
    `
})
export class CardImageComponent extends CmsComponent<CardImageBlock> {
    constructor() {
        super();
    }
}
