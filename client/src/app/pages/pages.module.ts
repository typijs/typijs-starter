import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TypiJsModule } from '@typijs/core';
import { StartPageComponent } from './start-page/start-page.component';

const PAGES_COMPONENT = [
    StartPageComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TypiJsModule
    ],
    declarations: [
        ...PAGES_COMPONENT
    ]
})
export class PagesModule { }
