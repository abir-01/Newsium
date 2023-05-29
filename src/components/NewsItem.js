import React from 'react'
import newsimage from '../assets/newsimage.jpg'

const NewsItem = ({ news }) => {
    // console.log(news);
    return (
        <div className="flex justify-center mx-auto my-6 ">
            <div
                className="block max-w-xs rounded-lg bg-white shadow-lg dark:bg-neutral-700 transform  hover: transition duration-500 hover:scale-110">
                <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                    <img
                        className="rounded-t-lg object-cover"
                        alt="No image"
                        src={news.urlToImage!==null ? news.urlToImage : newsimage} 
                         />
                </a>
                <div className="p-6">
                    <h5
                        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Title : {news.title}
                    </h5>
                    <p className="mb-4 text-m text-neutral-600 dark:text-neutral-200">
                        Description : {news.description !==null ?
                            `${news.description.substring(0, 250)}...` : news.description
                        }



                    </p>
                    <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-200">
                        Author : {news.author? news.author:'Anonymous'}

                    </p>
                    <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-200">
                        Published At : {news.publishedAt? news.publishedAt:'No data available'}

                    </p>
                    <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-200 pb-4">
                        Source : {news.source.name? news.source.name:'Unknown'}

                    </p>

                    <a href={news.url} target='blank' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 absolute bottom-0">Read more</a>

                </div>
            </div>
        </div>
    )
}

export default NewsItem