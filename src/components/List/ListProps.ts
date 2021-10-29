export interface ListProps {
    className?: string;
    header: string;
    elements: string[];
    clickHandlers: { (data: string): void; }
}