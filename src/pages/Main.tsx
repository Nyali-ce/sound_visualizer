import { SelectionMenu, OptionsContainer, Preview } from '../components/layout';
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
                <SelectionMenu options={Selections} onSelectOption={handleSelectOption}/>

                {/* 
                //! I don't know why you need to call the component instead of just passing it as a prop, this could fuck me in the ass later 
                // ? also how the fuck do you comment shit in a react component
                */}
                <OptionsContainer component={selection.component()} /> 
                
                <Preview />

            </div>

        </motion.div>
    );
}

export default Main;