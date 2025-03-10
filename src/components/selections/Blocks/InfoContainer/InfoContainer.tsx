import './infoContainer.scss';

const InfoContainer = ({text, info}: {text: string, info: string}) => {

    return (
            <div className='info-container'>
                <div className='info-section'>
                    <label className='info-text'>{text}</label>
                    <label className='info-text'>{info}</label>
                </div>
            </div>
    );
}

export default InfoContainer;