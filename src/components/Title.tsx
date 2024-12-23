import styles from './../assets/styles/title.module.scss';

type TitleProps = {
    title: string;
}

function Title({ title }: TitleProps) {
    const firstLetter = title.charAt(0).toUpperCase();
    const rest = title.slice(1);
    return <>
        <span className={styles.titleFirst}>{firstLetter}</span><span className={styles.titleRest}>{rest}</span>
    </>
        ;
}


export default Title;