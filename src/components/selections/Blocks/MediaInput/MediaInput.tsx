import './mediaInput.scss';

const MediaInput = ({ text, fileType, handleFileChange, icon, type }: { text: string, fileType: 'audio' | 'image', handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void , icon: string, type: 'inline' | 'header'}) => {
    return (
        <div className='media-input-container'>
        {type === 'inline' && <label className='media-input-inline-container'>{text}</label>}
        <button className={type === 'inline' ? 'media-input-inline' : 'media-input-header'}>
            <img className='media-input-icon' src={icon} alt =''/>
            <label className='media-input-label' htmlFor='media-input'>{type === 'header' ? text.toUpperCase() : `Upload ${fileType === 'audio' ? 'audio' : 'image'}`.toUpperCase()}</label>
            <input id='media-input' type="file" accept={`${fileType}/*`} onChange={handleFileChange} />     
        </button>
        </div>
    );
}

export default MediaInput;