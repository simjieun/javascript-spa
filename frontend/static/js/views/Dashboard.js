import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Welcome back, Joy</h1>
            <p>
                test
                <a href="/posts" data-link>View recent posts</a>
            </p>
        `;
    }
}