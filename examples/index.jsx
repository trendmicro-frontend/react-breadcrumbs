import Anchor from '@trendmicro/react-anchor';
import React from 'react';
import ReactDOM from 'react-dom';
import Breadcrumbs from '../src';
import styles from './index.styl';
import pkg from '../package.json';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h2>Breadcrumbs</h2>
                <p>Breadcrumbs help user keep track of locations within product console.</p>
                <ul style={{ marginBottom: 20 }}>
                    <li>Use hyperlinks to display level names and separate them with a glyph symbol ( › ).</li>
                    <li>Display the current level as the last element and it should not be clickable.</li>
                    <li>Depending on the needs of the product, previous levels of a breadcrumb may not always be clickable.</li>
                </ul>
                <Breadcrumbs>
                    <Breadcrumbs.Item active>
                        Devices
                    </Breadcrumbs.Item>
                </Breadcrumbs>
                <Breadcrumbs>
                    <Breadcrumbs.Item>
                        <Anchor href="#/devices">Devices</Anchor>
                    </Breadcrumbs.Item>
                    <Breadcrumbs.Item active>
                        Firewall
                    </Breadcrumbs.Item>
                </Breadcrumbs>
                <Breadcrumbs>
                    <Breadcrumbs.Item>
                        <Anchor href="#/devices">Devices</Anchor>
                    </Breadcrumbs.Item>
                    <Breadcrumbs.Item>
                        <Anchor href="#/devices/firewall">Firewall</Anchor>
                    </Breadcrumbs.Item>
                    <Breadcrumbs.Item active>
                        Policies
                    </Breadcrumbs.Item>
                </Breadcrumbs>
                <hr />
                <p>You can add an icon on the right side, or add a line separator under the breadcrumbs.</p>
                <Breadcrumbs showLineSeparator>
                    <Breadcrumbs.Item>
                        Devices
                    </Breadcrumbs.Item>
                    <Breadcrumbs.Item active>
                        Firewall
                    </Breadcrumbs.Item>
                    <Anchor className="pull-right" href={pkg.homepage}>
                        <i className={styles.iconHelp} />
                    </Anchor>
                </Breadcrumbs>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('container')
);
