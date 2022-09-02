const template = `
    <nav id="navbar-container">
        <router-link to="/">Home</router-link>
        <router-link to="/past-issues">Past Issues</router-link>
        <router-link to="/music">Music</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/subscribe">Subscribe</router-link>
    </nav>
`;

export default {
    name: 'Navbar',
    template
};
