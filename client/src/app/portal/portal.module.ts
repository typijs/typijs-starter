import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CmsPortalModule } from '@typijs/portal';

@NgModule({
    imports: [
        ReactiveFormsModule,
        CmsPortalModule.forRoot()
    ]
})
export class PortalModule { }
