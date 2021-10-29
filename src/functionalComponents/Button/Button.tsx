/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FC } from 'react'
import { ButtonProps } from './ButtonProps'

const Button: FC<ButtonProps> = ({ type, onClick, className, children }) => {
    const btnStyle = type === "primary" ? style.primary :
        type === "secondary" ? style.secondary : style.warning;
    return (
        <button onClick={onClick} css={[btnStyle, style.container]} className={className}>
            {children}
        </button>
    )
}
export default Button;
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