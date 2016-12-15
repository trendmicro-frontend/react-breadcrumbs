import classNames from 'classnames';
import React, { Component, cloneElement, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import styles from './index.styl';

class Breadcrumbs extends Component {
    static propTypes = {
        showLineSeparator: PropTypes.bool
    };
    static defaultProps = {
        showLineSeparator: false
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }
    render() {
        const {
            children,
            className
        } = this.props;

        return (
            <ol
                role="navigation"
                className={classNames(
                    className,
                    styles.breadcrumbs,
                    { [styles.lineSeparator]: this.props.showLineSeparator }
                )}
            >
                {this.renderItems(children)}
            </ol>
        );
    }
    renderItems(children = this.props.children) {
        return React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) {
                return child;
            }

            const el = cloneElement(child, {
                key: (child.key !== undefined) ? child.key : index
            });

            return el;
        });
    }
}

export default Breadcrumbs;
