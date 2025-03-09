import './preview.scss';
import { useContext } from 'react';
import { OptionContext } from '../../../Contexts/OptionContext';

const Preview = () => {
    const { backgroundColor } = useContext(OptionContext);

    return (
        <div id='preview-container'>
            <div id='preview' style={{backgroundColor: backgroundColor}}>
            </div>
        </div>
    );
}

export default Preview;