import './text.scss';

const Text = ({ text }: {text: string}) => {
    return (
            <p className='option-description'>{text}</p>
    );
}

export default Text;