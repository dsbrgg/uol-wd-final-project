const template = `
    <Navbar />
    <BackgroundAnimation />
    <main id="main-container">
        <section id="main-section">
            <ul>
                <li v-for="item of list" class="past-issues-list-item">
                    <router-link
                        :to="{ name: 'home', params: { date: item.date } }"
                        class="past-issues-list-item-link"
                    >
                        {{ item.date }}
                    </router-link>
                </li>
            </ul>
        </section>
    </main>
    <Footer />
`;

export default {
    name: 'PastIssues',
    data() {
        return {
            list: [{
                date: new Date(2022, 8, 16).toISOString().split('T')[0]
            }, {
                date: new Date(2022, 8, 14).toISOString().split('T')[0]
            }, {
                date: new Date(2022, 7, 29).toISOString().split('T')[0]
            }, {
                date: new Date(2022, 7, 25).toISOString().split('T')[0]
            }, {
                date: new Date(2022, 7, 20).toISOString().split('T')[0]
            }, {
                date: new Date(2022, 7, 13).toISOString().split('T')[0]
            }, {
                date: new Date(2022, 6, 25).toISOString().split('T')[0]
            }, {
                date: new Date(2022, 6, 17).toISOString().split('T')[0]
            }, {
                date: new Date(2022, 6, 2).toISOString().split('T')[0]
            }, {
                date: new Date(2022, 5, 26).toISOString().split('T')[0]
            }, {
                date: new Date(2022, 5, 21).toISOString().split('T')[0]
            }, {
                date: new Date(2022, 5, 12).toISOString().split('T')[0]
            }, {
                date: new Date(2022, 5, 3).toISOString().split('T')[0]
            }]
        };
    },
    template
};
