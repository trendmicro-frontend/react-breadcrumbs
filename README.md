# react-breadcrumbs [![build status](https://travis-ci.org/trendmicro-frontend/react-breadcrumbs.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-breadcrumbs) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-breadcrumbs/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-breadcrumbs?branch=master)

[![NPM](https://nodei.co/npm/@trendmicro/react-breadcrumbs.png?downloads=true&stars=true)](https://nodei.co/npm/@trendmicro/react-breadcrumbs/)

React Breadcrumbs

Demo: https://trendmicro-frontend.github.io/react-breadcrumbs

## Installation

1. Install the latest version of [react](https://github.com/facebook/react) and [react-breadcrumbs](https://github.com/trendmicro-frontend/react-breadcrumbs):

  ```
  npm install --save react @trendmicro/react-breadcrumbs
  ```

2. At this point you can import `@trendmicro/react-buttons` and its styles in your application as follows:

  ```js
  import Breadcrumbs from '@trendmicro/react-breadcrumbs';

  // Be sure to include styles at some point, probably during your bootstraping
  import '@trendmicro/react-breadcrumbs/dist/react-breadcrumbs.css';
  ```

## Usage

```js
import React, { Component } from 'react';
import Anchor from '@trendmicro/react-anchor';
import Breadcrumbs from '@trendmicro/react-breadcrumbs';

class App extends Component {
    render() {
        return (
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
        );
    }
}
```

You can add an icon on the right side, or add a line separator under the breadcrumbs.
```js
<Breadcrumbs showLineSeparator>
    <Breadcrumbs.Item>
        Devices
    </Breadcrumbs.Item>
    <Breadcrumbs.Item active>
        Firewall
    </Breadcrumbs.Item>
    <Anchor className="pull-right" href="https://github.com/trendmicro-frontend/react-breadcrumbs">
        <i className="fa fa-question-circle" style={{ fontSize: 20 }} />
    </Anchor>
</Breadcrumbs>
```

## API

### Properties

#### Breadcrumbs

<table>
  <thead>
    <tr>
      <th align="left">Name</th>
      <th align="left">Type</th>
      <th align="left">Default</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>showLineSeparator</td>
      <td>Boolean</td>
      <td>false</td>
      <td></td>
    </tr>
  </tbody>
</table>

#### Breadcrumbs.Item

<table width="100%">
  <thead>
    <tr>
      <th align="left">Name</th>
      <th align="left">Type</th>
      <th align="left">Default</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>active</td>
      <td>Boolean</td>
      <td>false</td>
      <td></td>
    </tr>
  </tbody>
</table>

## License

MIT
