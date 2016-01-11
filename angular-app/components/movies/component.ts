import {Component} from "angular2/core"

@Component({
    selector: "movies",
    template: `
    <ul>
        <li *ngFor="#movie of movies">{{ movie }}</li>
    </ul>
    `
})

export class Movies {
    movies: Array<any>;
    constructor() {
        this.movies = [
            "movie1", "movie2", "movie3", "movie4", "movie5"
        ]
    }
}