import {Component} from "angular2/core"

@Component({
    selector: "users",
    template: `
    <ul>
        <li *ngFor="#user of users">{{ user }}</li>
    </ul>
    `
})

export class Users {
    users: Array<any>;
    constructor() {
        this.users = [
            "user1", "user2", "user3", "user4", "user5"
        ]
    }
}