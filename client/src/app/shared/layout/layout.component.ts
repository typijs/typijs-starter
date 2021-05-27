import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { ContentLoader, SiteDefinition } from '@typijs/core';
import { Observable } from 'rxjs';
import { StartPage } from '../../pages/start-page/start-page.pagetype';


@Component({
    templateUrl: './layout.component.html',
    encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {
    startPage$: Observable<StartPage>;

    constructor(
        private siteDefinition: SiteDefinition,
        private contentLoader: ContentLoader,
        private renderer: Renderer2,
        @Inject(DOCUMENT) private document: Document) { }

    ngOnInit() {
        this.startPage$ = this.siteDefinition.getStartPage<StartPage>();
    }

}
