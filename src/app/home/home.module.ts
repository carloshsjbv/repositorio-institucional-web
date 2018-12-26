import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { SignInComponent } from "./singin/signin.component";
import { VMessagesModule } from "../core/shared/vmessages.module";

@NgModule({
    declarations: [SignInComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessagesModule
    ]
})
export class HomeModule {

}