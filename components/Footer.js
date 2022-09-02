const template = `
    <footer id="footer-container">
        <span>{{ message }}</span>
    </footer>
`;

export default {
    name: 'Footer',
    data() {
        return {
            message: 'Get Ready ™'
        };
    },
    template
};
