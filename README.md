# react-breadcrumbs [![build status](https://travis-ci.org/trendmicro-frontend/react-breadcrumbs.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-breadcrumbs) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-breadcrumbs/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-breadcrumbs?branch=master)

[![NPM](https://nodei.co/npm/@trendmicro/react-breadcrumbs.png?downloads=true&stars=true)](https://nodei.co/npm/@trendmicro/react-breadcrumbs/)

React Breadcrumb

Demo: https://trendmicro-frontend.github.io/react-breadcrumbs

## Installation

1. Install the latest version of [react](https://github.com/facebook/react) and [react-breadcrumbs](https://github.com/trendmicro-frontend/react-breadcrumbs):

  ```
  npm install --save react @trendmicro/react-breadcrumbs
  ```

2. At this point you can import `@trendmicro/react-buttons` and its styles in your application as follows:

  ```js
  import Component from '@trendmicro/react-breadcrumbs';

  // Be sure to include styles at some point, probably during your bootstraping
  import '@trendmicro/react-buttons/dist/react-buttons.css';
  ```

## Usage

```js
<Component
    className="component"
>
    GitHub
</Component>
```


## API

### Properties

#### Breadcrumbs

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">Name</th>
      <th style="width: 50px;">Type</th>
      <th>Default</th>
      <th>Description</th>
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

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">Name</th>
      <th style="width: 50px;">Type</th>
      <th>Default</th>
      <th>Description</th>
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
