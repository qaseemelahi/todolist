export interface ButtonProps {
    className?: string;
    type: 'primary' | 'secondary' | 'warning';
    onClick?: () => void;
    block?: boolean;
}
