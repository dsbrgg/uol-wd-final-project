import ArticleComponent from './components/ArticleComponent.js';

const template = `
    <Navbar />
    <BackgroundAnimation />
    <main id="main-container">
        <section id="main-banner-crop">
            <img id="main-banner" src="../../public/img/houses.png">
        </section>
        <section class="home-section" v-for="article in articles">
            <ArticleComponent :content="article" />
        </section>
    </main>
    <Footer />
`;

export default {
    name: 'Home',
    components: {
        ArticleComponent
    },
    data() {
        return {
            articles: [{
                title: 'Twitch now lets partners stream on rival platforms like YouTube and Facebook',
                source: 'https://techcrunch.com/2022/08/23/twitch-partners-stream-on-rival-platforms/',
                text: 'Twitch is lifting its exclusivity agreement that prevented its partners from streaming on other services, the company said in an email to partners on Tuesday. Starting today, partners can now stream on YouTube, Facebook Live and more, just not while streaming on Twitch at the same time. (...)',
                image: 'first-article.webp'
            }, {
                title: 'Sanctioned Bitcoin Mining Firm BitRiver Loses Another Client as SBI Leaves',
                source: 'https://www.coindesk.com/business/2022/08/25/sanctioned-bitcoin-mining-firm-bitriver-loses-another-client-as-sbi-leaves-sources/',
                text: 'The bitcoin (BTC) mining arm of a major Japanese bank has ended a previously undisclosed relationship with a Russian miner hosting firm sanctioned by the U.S. government. (...)',
                image: 'second-article.webp'
            }, {
                title: 'One of Our Favorite Extra Durable Waterproof Wireless Speakers is Getting a Battery Life Boost',
                source: 'https://gizmodo.com/wonderboom-3-outdoors-hiking-lake-pool-bluetooth-speake-1849395330',
                text: 'The biggest selling point of a wireless Bluetooth speaker is that it can be used anywhere, with 2019\'s Ultimate Ears Wonderboom 2 taking that to the extreme with full waterproofing and even the ability to float when dunked. As tiny speakers without smart assistants go, the UE Wonderboom 2 is one of our favorites (...)',
                image: 'third-article.webp'
            }, {
                title: 'New patent may reveal how Apple could pull off a no-notch iPhone 14 Pro',
                source: 'https://www.theverge.com/2022/8/25/23322166/apple-iphone-14-pro-notch-patent-leaks',
                text: 'Apple is rumored to ditch the notch in the iPhone 14 Pro and Pro Max in favor of a pill-shaped cutout and a spot for the selfie cam, and the US Patent and Trademark Office (USPTO) has published a patent application that seems to show how the company (...)',
                image: 'fourth-article.webp'
            }, {
                title: 'Why the Twilio Breach Cuts So Deep',
                source: 'https://www.wired.com/story/twilio-breach-phishing-supply-chain-attacks/',
                text: 'The communication company Twilio suffered a breach at the beginning of August that it says impacted 163 of its customer organizations. Out of Twilio\'s 270,000 clients, 0.06 percent might seem trivial, but the company\'s particular role in the digital ecosystem means that that fractional slice of victims had an outsized value and influence. (...)',
                image: 'fifth-article.webp'
            }]
        };
    },
    template
};
