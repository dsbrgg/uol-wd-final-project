const template = `
    <article class="home-section-article">
        <a :href="getTextSource()">{{content.title}}</a>
        <div class="home-section-article-content">
            <p>{{content.text}}</p>
            <img class="home-section-article-img" :src="getImgUrl()">
        </div>
    </article>
`;

export default {
    name: 'ArticleComponent',
    props: {
        content: {
            title: String,
            source: String,
            text: String,
            image: String
        }
    },
    methods: {
        getImgUrl() {
            return `../../../public/img/${this.content.image}`;
        },
        getTextSource() {
            return this.content.source;
        }
    },
    template
};

