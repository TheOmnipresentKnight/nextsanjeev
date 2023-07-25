import Compo1 from '@/components/compo1/Compo1';
import styles from './hello.module.css';
import Another from '@/components/Another/Another';

const HelloPage = () => {
    return <div className={styles.container}>Hello World
        <Compo1 />
        <Another/>
        
    </div>;
};

export default HelloPage;
