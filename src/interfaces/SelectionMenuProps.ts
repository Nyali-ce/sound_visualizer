export default interface SelectionMenuProps {
    options: { name: string, icon: string, alt: string}[],
    onSelectOption: (option: { name: string, icon: string, alt: string }) => void
}