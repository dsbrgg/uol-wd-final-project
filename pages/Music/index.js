const template = `
    <Navbar />
    <BackgroundAnimation />
    <main id="main-container">
        <section id="music-section">
            <article v-for="(video, index) in videos">
                <iframe :src="getVideoUrl(index)" frameborder="0" allowfullscreen></iframe>
            </article>
        </section>
    </main>
    <Footer />
`;

export default {
    name: 'Music',
    data() {
        return {
            videos: [{
                url: 'https://www.youtube.com/embed/x6AL1XnHJZs'
            }, {
                url: 'https://www.youtube.com/embed/GTC-OjgwLxg'
            }, {
                url: 'https://www.youtube.com/embed/s-YKoux1n8w'
            }, {
                url: 'https://www.youtube.com/embed/k1l7aYkzy6w'
            }, {
                url: 'https://www.youtube.com/embed/wqSxpk9jbIQ'
            }, {
                url: 'https://www.youtube.com/embed/wp43OdtAAkM'
            }]
        }
    },
    methods: {
        getVideoUrl(index) {
            return this.videos[index].url;
        }
    },
    template
};

