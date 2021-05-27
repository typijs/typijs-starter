import { ContentLoader, PageData, SiteDefinition } from '@typijs/core';
import { DOCUMENT } from '@angular/common';
import { Component, ViewEncapsulation, OnInit, AfterViewInit, Renderer2, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map, publishReplay, refCount, switchMap } from 'rxjs/operators';

import { StartPage } from '../../pages/start-page/start-page.pagetype';

@Component({
    templateUrl: './layout.component.html',
    encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {
    startPage$: Observable<StartPage> | undefined;

    constructor(
        private siteDefinition: SiteDefinition,
        private contentLoader: ContentLoader,
        private renderer: Renderer2,
        @Inject(DOCUMENT) private document: Document) { }

    ngOnInit() {
        this.startPage$ = this.siteDefinition.getStartPage<StartPage>();
    }

}
