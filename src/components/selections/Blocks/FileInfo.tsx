import './fileInfo.scss';

const FileInfo = ({ fileName, duration }: {fileName: string, duration: number}) => {    
    const formatDuration = (duration: number) => {
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60).toString().padStart(2, '0');

        return `${minutes}:${seconds}`;
    }

    return (
            <div className='file-info-container'>
                <div className='file-info-section'>
                    <p className='file-text'>File Name</p>
                    <p className='file-text'>{fileName}</p>
                </div>
                <div className='file-info-section'>
                    <p className='file-text'>Total Duration</p>
                    <p className='file-text'>{formatDuration(duration)}</p>
                </div>
            </div>
    );
}

export default FileInfo;