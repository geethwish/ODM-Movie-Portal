import React from 'react'
// styles
import styles from './Container.module.scss'

type ContainerProps = {
    children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Container