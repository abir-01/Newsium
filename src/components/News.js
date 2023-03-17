import { React, useState, useEffect } from 'react'
import NewsItem from './NewsItem'
// import { BounceLoader } from 'react-loader-spinner'
import BounceLoader from 'react-spinners/BounceLoader'


const News = (props) => {
    const [newsi, setnewsi] = useState([])
    const [count, setcount] = useState(0)
    const [isLoading, setisLoading] = useState(true)
    // const [term, setterm] = useState('general')
    const [c, setc] = useState(0)

    useEffect(() => {
        console.log(props.category);
        setisLoading(true);
        fetch(`https://newsapi.org/v2/everything?q=${props.category}&language=en&pageSize=100&apiKey=1499e0e06ab841a0ab5c8f7b8872be45`)
            .then(res => res.json())
            .then(data => {
                // console.log(data),
                setcount(data.totalResults)
                    setnewsi(data.articles)
                setisLoading(false);
            })
            .catch(err => console.log(err));


    }, [props.category])



    return (
        <>
            {!isLoading && newsi.length === 0 && <h1>No news Found !!</h1>}
            <h1 className="md-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center my-6 ">Top {props.category} Headlines</h1>

            {isLoading ?
                <div className="text-center">

                    <div className="flex justify-center align-center " style={{ height: '100vh', width: '100vw' }}>
                        <BounceLoader
                            color="#3666d6"
                            size={100}
                        />
                    </div>


                </div> :


                <div className="flex flex-row flex-wrap justify-center align-center container py-8 my-10 mx-auto">
                    {newsi.map(news => (
                        // console.log(news),
                        < NewsItem news={news} />


                    ))
                    }

                </div>
            }
        </>
    )
}

export default News