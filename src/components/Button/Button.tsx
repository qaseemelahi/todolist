/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Component } from 'react'
import { ButtonProps } from './ButtonProps'

export default class Button extends Component<ButtonProps> {
    render() {
        const btnStyle = this.props.type === "primary" ? style.primary :
            this.props.type === "secondary" ? style.secondary : style.warning;
        return (
            <button onClick={this.props.onClick} css={[btnStyle, style.container]} className={this.props.className}>
                {this.props.children}
            </button>
        )
    }
}
const style = {
    container: css({
        padding: 10,
        borderWidth: 0,
        borderRadius: 5,
    }),
    primary: css({
        backgroundColor: '#007bff',
        color: '#ffff',
        '&:hover': {
            color: '#0069d9'
        }
    }),
    secondary: css({
        backgroundColor: '#6c757d',
        color: '#ffff',
        '&:hover': {
            color: '#343a40'
        }
    }),
    warning: css({
        backgroundColor: '#ffc107',
        color: '#ffff',
        '&:hover': {
            color: '#ffb507'
        }
    }),
}