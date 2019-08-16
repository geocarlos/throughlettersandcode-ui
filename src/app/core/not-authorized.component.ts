import { Component } from '@angular/core';

@Component({
    template: `
    <div class="container">
        <h1>Access Denied</h1>
        <p>Sorry, you don't have permission to view this page</p>
    </div>`,
    styles: [
        '.container { text-align: center; margin-top: 20%}'
    ]
})
export class NotAuthorizedComponent {
    constructor() {}
}
