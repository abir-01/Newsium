import React from 'react'

const NewsItem = ({ news }) => {
    // console.log(news);
    return (
        <div className="flex justify-center mx-auto my-6">
            <div
                className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                    <img
                        className="rounded-t-lg object-cover"
                        src={news.urlToImage ? news.urlToImage : 'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg'}
                        alt="No image" />
                </a>
                <div className="p-6">
                    <h5
                        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Title : {news.title}
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        Description : {news.description.length > 250 ?
                            `${news.description.substring(0, 250)}...` : news.description
                        }



                    </p>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        Author : {news.author}

                    </p>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        Published At : {news.publishedAt}

                    </p>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        Source : {news.source.name}

                    </p>

                    <a href={news.url} target='_blank' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Read more</a>

                </div>
            </div>
        </div>
    )
}

export default NewsItem