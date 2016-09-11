import React from 'react';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

class Layout extends React.Component {

    render() {
        console.log(this)
        return (
            <div>
                <Header />
                    {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default Layout;
