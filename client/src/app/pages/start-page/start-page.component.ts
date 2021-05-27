import { Component } from '@angular/core';
import { CmsComponent } from '@typijs/core';
import { StartPage } from './start-page.pagetype';
@Component({
    selector: '[start-page]',
    template: `
    <div [cmsContentArea]="currentContent.mainContent"></div>
    <div class="row gx-4 gx-lg-5" [cmsContentArea]="currentContent.bottomContent"></div>
    `
})
export class StartPageComponent extends CmsComponent<StartPage> {

}
