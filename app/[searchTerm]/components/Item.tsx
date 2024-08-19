import Link from 'next/link'

type Props = {
    result: Result
}

export default function Item({ result }: Props) {
    const itemTextCol = (
        <div className=" flex flex-col justify-center">
            <h2>
                <Link href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank"
                    className="text-xl font-bold underline">
                    {result.title}
                </Link>
            </h2>
            <p>{result.extract}</p>
        </div>
    )

    const content = result?.thumbnail?.source
        ? (
            <article className="m-4 w-2/4 delay-200 border-2 border-violet-500">
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col justify-center">
                        <img
                            className='rounded-xl h-16 w-16'
                            src={result.thumbnail.source}
                            alt={result.title}
                            width={result.thumbnail.width}
                            height={result.thumbnail.height}
                            loading="lazy"
                        />
                    </div>
                    {itemTextCol}
                </div>
            </article>

        )
        : (
            <article className="m-4 max-w-lg">
                {itemTextCol}
            </article>
        )

    return content
}