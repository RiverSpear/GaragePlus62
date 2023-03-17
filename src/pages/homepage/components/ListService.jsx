import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import client from '../../../client';
import Loading from '../../../components/Loading/Loading';

function ListService() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        client.getEntries({ content_type: 'service' })
            .then((response) => setArticles(response.items))
            .catch(console.error);
    }, []);

    console.log(articles)
    
    const lowestPriceHandle = articles.reduce((min, article) => {
        const prices = article.fields.detailService.map((detail) => detail.fields.price);
        const lowest = Math.min(...prices);
        return lowest < min ? lowest : min;
    }, Infinity).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });

    if (!articles) return <Loading/>;
    return (
        <>
            <div className='flex flex-wrap justify-center gap-10'>
                {
                    articles.map((article, index) => (
                        <Link to={`/servis/${article.fields.slug}`} key={index} className="flex flex-col justify-between gap-5 bg-white p-10 rounded-2xl hover:shadow-xl hover:shadow-gray-200 duration-200 hover:scale-[1.02] w-[375px]">
                            <div className='flex flex-col gap-5'>
                                <img src={'https:' + article.fields.headlinePhoto.fields.file.url} alt="" className='w-full h-[175px] rounded-2xl'/>
                                <div className='flex justify-between items-start gap-5'>
                                    <p className='worksans-500 text-[18px]'>{article.fields.servicePackageName}</p>
                                    <p className='bg-amber-400 worksans-500 py-1.5 px-3 rounded-full whitespace-nowrap'>{article.fields.detailService.length} paket</p>
                                </div>
                            </div>
                            <p className='bg-gray-100 text-gray-500 worksans-500 text-center py-3 w-full rounded-full'>Mulai dari {lowestPriceHandle.replace(/,00$/, "")}</p>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default ListService

// import React, { Component } from 'react'
// import client from '../../../../../client'
// import ListServiceData from './ListServiceData'

// export default class ListService extends Component {
//     state = {
//         articles: []
//     }
    
//     componentDidMount() {
//         client.getEntries({content_type: 'service'}).then((response) => {
//             response.items.sort((a,b) => a.fields.contentOrder < b.fields.contentOrder ? -1 : 1);
//             this.setState({articles: response.items})
//         })
//     } 
//     render() {
//         return (
//             <>
//                 <ListServiceData service={this.state.articles} />
//             </>
//         )
//     }
// }