import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import styles from './index.styl';

class BreadcrumbsItem extends Component {
    static propTypes = {
        active: PropTypes.bool
    };
    static defaultProps = {
        active: false
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }
    render() {
        const {
            className,
            active,
            ...props
        } = this.props;

        return (
            <li
                {...props}
                className={classNames(
                    className,
                    { [styles.active]: active }
                )}
            />
        );
    }
}

export default BreadcrumbsItem;
