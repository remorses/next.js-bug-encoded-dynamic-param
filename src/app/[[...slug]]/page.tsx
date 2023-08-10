import Image from 'next/image'
import styles from '../page.module.css'
import Link from 'next/link'

export default function Home({ params }: any) {
    const random = Math.random().toString(36).substring(7)
    return (
        <main className={styles.main}>
            {JSON.stringify({ params })}
            <Link href={`/another/{random}`}>
                Navigate to /another/{random}
            </Link>
        </main>
    )
}
