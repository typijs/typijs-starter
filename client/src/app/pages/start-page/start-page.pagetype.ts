import { PageData, PageType, Property, UIHint } from '@typijs/core';
import { StartPageComponent } from './start-page.component';

@PageType({
    displayName: 'Start Page',
    componentRef: StartPageComponent,
    order: 5,
    description: 'This is start page type'
})
export class StartPage extends PageData {

    @Property({
        displayName: 'Text Logo',
        displayType: UIHint.Text,
        groupName: 'Site Settings'
    })
    textLogo: string;

    @Property({
        displayName: 'Main Content',
        displayType: UIHint.ContentArea,
    })
    mainContent: any[];

    @Property({
        displayName: 'Bottom Content',
        displayType: UIHint.ContentArea,
    })
    bottomContent: any[];

    @Property({
        displayName: 'Footer Text',
        description: 'This is footer text to show the copyright',
        displayType: UIHint.XHtml,
        groupName: 'Site Settings'
    })
    footerText: string;
}
