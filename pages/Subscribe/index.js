const template = `
    <Navbar />
    <BackgroundAnimation />
    <main id="main-container">
        <section id="main-banner-crop">
            <img id="main-banner" src="../../public/img/glass.png">
        </section>
        <section id="main-section">
            <p v-if="subscriptionMessage.length" :id="getMessageColorId()">
                {{subscriptionMessage}}
            </p>
            <input v-model.trim="email" placeholder="Email" class="subscribe-input" />
            <input v-model.trim="firstName" placeholder="First name" class="subscribe-input" />
            <input v-model.trim="lastName" placeholder="Last name" class="subscribe-input" />
            <button @click="subscribe" id="subscribe-button">Subscribe!</button>
        </section>
    </main>
    <Footer />
`;

export default {
    name: 'Subscribe',
    data() {
        return {
            status: 'ok',
            subscribed: false,
            subscriptionMessage: '',
            email: '',
            firstName: '',
            lastName: ''
        };
    },
    methods: {
        getMessageColorId() {
            if (this.status === 'ok') {
                return 'subscribe-message-ok';
            }

            return 'subscribe-message-error';
        },
        subscribe() {
            if (this.subscribed) {
                return;
            }

            if (!this.email.length) {
                this.status = 'error';
                this.subscriptionMessage = `Email is empty`;

                return;
            }

            if (!this.firstName.length) {
                this.status = 'error';
                this.subscriptionMessage = `First name is empty`;

                return;
            }

            if (!this.lastName.length) {
                this.status = 'error';
                this.subscriptionMessage = `Last name is empty`;

                return;
            }

            this.status = 'ok';
            this.subscribed = true;
            this.subscriptionMessage = `Thanks for your subscription! We've sent and email to ${this.email}`;
            this.email = '';
            this.firstName = '';
            this.lastName = '';
        }
    },
    template
};
