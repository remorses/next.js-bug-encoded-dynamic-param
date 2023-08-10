import Image from 'next/image'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home({ params }: any) {
    const random = Math.random().toString(36).substring(7)
    const router = useRouter()
    return (
        <main>
            {JSON.stringify({ params })}
            <Link href={`/another/${random}`}>
                Navigate with link to /another/{random}
            </Link>
            <button
                onClick={() => {
                    router.push(`/another/${random}`)
                }}
            >
                Navigate with router /another/{random}
            </button>
        </main>
    )
}
