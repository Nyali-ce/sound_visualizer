import './infoContainer.scss';

const InfoContainer = ({text, info}: {text: string, info: string}) => {

    return (
            <div className='info-container'>
                <div className='info-section'>
                    <p className='info-text'>{text}</p>
                    <p className='info-text'>{info}</p>
                </div>
            </div>
    );
}

export default InfoContainer;