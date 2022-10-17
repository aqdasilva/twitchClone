import React from "react";

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '306645363792-6pei3htibplnvjabrv9gav1tigftn0ln.apps.googleusercontent.com',
                scope: 'email',
                plugin_name: "streamDominant "
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>idk if we are signed in</div>;
        } else if (this.state.isSignedIn) {
            return <div>logged on !</div>;
        } else {
            return <div>you gotta logg it in</div>;
        }
    }



    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

export default  GoogleAuth;