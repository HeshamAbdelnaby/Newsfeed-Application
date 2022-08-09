class NewsModel {
    private author: string;
    private title: string;
    private description: string;
    private url: string;
    private source: string;
    private image: string;
    private category: string;
    private language: string;
    private country: string;
    private published_at: string;

    constructor(author: string, title: string, description: string, url: string, source: string, image: string, category: string, language: string, country: string, published_at: string) {
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