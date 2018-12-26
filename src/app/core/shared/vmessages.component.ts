import { Component, Input } from "@angular/core";

@Component({
    selector: 'vmessage',
    templateUrl: './vmessages.component.html'
})
export class VMessagesComponent {

    @Input() text: '';

}