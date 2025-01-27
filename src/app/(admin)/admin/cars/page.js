import CarCreateForm from "@/components/(admin)/car/carCreateForm/carCreateForm";
import styles from './page.module.css';

export default function Page() {
    return (
        <div className={styles.container}>
            <CarCreateForm />
        </div>
    )
}