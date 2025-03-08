import { SelectionMenu, OptionsContainer, Preview, Player } from '../components/layout';
import './Main.scss';
import { motion } from 'framer-motion';
import Selections from '../components/selections';
import { useState } from 'react';

const Main = () => {
    const [selection, setSelection] = useState(Selections[0]);

    const handleSelectOption = (option: any) => {
        setSelection(option);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className='animate'
        >

            <div id='main'>

                <div id='middle'>
                    <SelectionMenu options={Selections} onSelectOption={handleSelectOption} />
                    <OptionsContainer Component={selection.component} />
                    <Preview />
                </div>

                <div id='bottom'>
                    <Player />
                </div>

            </div>

        </motion.div>
    );
}

export default Main;