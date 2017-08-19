class parseData {
    constructor(data) {
        this.data = '';
        if(data.username) {
            this.data = this.parseUser();
        } else if(data.title) {
            this.data = this.parseArticles();
        } else if(data....)
    }

    parseUser() {
        
    }

    parseArticles() {

    }

    parseFenLei() {

    }
    
    getUsername() {

    }
}