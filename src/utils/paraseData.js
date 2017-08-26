class parseData {
    constructor(data) {
        this.data = data;
        this.parse_data = {};
        if(this.data.username) {
            this.parse_data = this.parseUser();
        } else if(this.data.title) {
            this.parse_data = this.parseArticles();
        } else if(this.data.category_name) {
            this.parse_data = this.parseCategory();
        }
    }

    parseUser() {
        this.username = this.data.username;
        this.nickname = this.data.nick_name;
        this.introduce = this.data.introduce;
    }

    parseArticles() {
        
    }

    parseFenLei() {

    }
    
    getUsername() {

    }
}