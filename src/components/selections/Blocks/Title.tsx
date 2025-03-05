import './title.scss';

const Title = ({ title }: {title: string}) => {
    return (
        <div className='option-title-container'>
            <h1 className='option-title'>{title}</h1>
        </div>
    );
}

export default Title;