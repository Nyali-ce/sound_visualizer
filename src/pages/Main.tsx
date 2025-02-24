import { SelectionMenu, OptionsContainer } from '../components/layout';
import './Main.scss';
import { motion } from 'framer-motion';

import Selections from '../components/selections';

const Main = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className='animate'
        >
            <div id='main'>
                <SelectionMenu options={Selections} />
                <OptionsContainer />
                <div id='preview'>

                </div>
            </div>
        </motion.div>
    );
}

export default Main;