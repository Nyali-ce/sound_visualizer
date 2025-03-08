import './mediaInput.scss';

const MediaInput = ({ text, fileType, handleFileChange, icon }: { text: string, fileType: 'audio' | 'image', handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void , icon: string}) => {
    return (
        <button className='media-input-container'>
            <img className='media-input-icon' src={icon} alt =''/>
            <label className='media-input-label' htmlFor='media-input'>{text.toUpperCase()}</label>
            <input id='media-input' type="file" accept={`${fileType}/*`} onChange={handleFileChange} />     
        </button>
    );
}

export default MediaInput;