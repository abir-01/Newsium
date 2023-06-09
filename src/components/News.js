import { React, useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import BounceLoader from 'react-spinners/BounceLoader'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';
import Footer from './Footer';


const News = (props) => {
    const [newsi, setnewsi] = useState([])
    const [count, setcount] = useState(0)
    const [isLoading, setisLoading] = useState(true)
    // const [country, setcountry] = useState(second)
    // const [term, setterm] = useState('general')
    const [page, setpage] = useState(1)

    useEffect(() => {
        console.log(props.category);
        setisLoading(true);
        fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&language=${props.language}&apiKey=bacf770e73964c8ca779e8836e49fd27&page=${page}&pageSize=10`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setcount(data.totalResults)
                    setnewsi(data.articles)
                setisLoading(false)
                // setcount(data.totalResults)
            })
            .catch(err => console.log(err));


    }, [props.country, props.category])
    
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&language=${props.language}&apiKey=bacf770e73964c8ca779e8836e49fd27&page=${page + 1}&pageSize=10`;
        setpage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setnewsi(newsi.concat(parsedData.articles))
        setcount(parsedData.totalResults)
        // setisLoading(false)
    };



    return (
        <>
            {!isLoading && newsi.length === 0 ? 
            <h1 className="md-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center my-6 ">No News Found !!</h1> :
                <h1 className="md-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center my-6 ">Top {props.category} Headlines from { props.country.toUpperCase()}</h1>
            }

            {/* {!isLoading && newsi.length===0 && setisLoading(false)} */}

            {isLoading ?
                <div className="text-center">

                    <div className="flex justify-center align-center " style={{ height: '100vh', width: '100vw' }}>
                        <BounceLoader
                            color="#3666d6"
                            size={100}
                        />
                    </div>


                </div> :

                <InfiniteScroll
                    dataLength={newsi.length}
                    next={fetchMoreData}
                    hasMore={newsi.length !== count}
                    loader={newsi.length!==0 && <Spinner/>}
                > 
                    
                         
                        <div className="flex flex-row flex-wrap justify-center align-center container py-8 my-10 mx-auto">
                            {newsi.map((news) => (
                                // console.log(news),
                                < NewsItem news={news} key={news.title} />


                            ))
                            }

                        </div> 
                </InfiniteScroll>
            }
            <Footer position={newsi.length===0 ? 'fixed':''}/>
        </>
    )
}

News.defaultProps = {
    category: 'general',
    language: 'en',
    country:"in"
}

export default News

