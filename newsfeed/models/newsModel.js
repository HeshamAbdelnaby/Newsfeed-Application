class NewsModel {
    constructor(author, title, description, url, source, image, category, language, country, published_at) {
      this.author = author;
      this.title = title;
      this.description = description;
      this.url = url;
      this.source = source;
      this.image = image;
      this.category = category;
      this.language = language;
      this.country = country;
      this.published_at = published_at;
    }
  }
  
  export default NewsModel;