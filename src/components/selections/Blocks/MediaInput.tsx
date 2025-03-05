import './mediaInput.scss';

const MediaInput = ({ text }: {text: string}) => {
    return (
            <p className='option-description'>{text}</p>
    );
}

export default MediaInput;