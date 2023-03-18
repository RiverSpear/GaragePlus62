import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import client from '../../client';
import Footer from '../../components/footer/Footer';
import Loading from '../../components/Loading/Loading';
import ScrollToTop from '../../components/scroll to top/ScrollToTop';

function PageNotFound() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        client.getEntries({ content_type: 'aboutUs' })
            .then((response) => (
                setArticles(response.items)
            ))
            .catch(console.error);
    }, []);

    if (!articles) return <Loading/>;
    return (
        <>
            <div className='flex flex-col gap-10 bg-[#f4f4f4]'>
                <div className='flex flex-col items-center gap-10 h-screen pt-32 px-10'>
                    {
                        articles.map((article, index) => (
                            <span key={index} className='flex items-center gap-5 worksans-800 text-[119px] sm:text-[149px]'>
                                4
                                <img src={'https:' + article.fields.logo.fields.file.url} alt="" className="w-24 md:w-32"/>
                                4
                            </span>
                        ))
                    }
                    <p className='worksans text-base md:text-[20px] text-center leading-7 -tracking-wide w-full md:w-1/2'>Waduh, Halaman ini tidak ada. Mungkin halaman ini sudah dihapus, dipindah, atau memang tidak ada!</p>
                    <p onClick={() => Navigate(-1)} className='bg-amber-500 worksans text-white text-center p-3 rounded-lg w-[300px] cursor-pointer'>Kembali</p>
                </div>
                <ScrollToTop/>
                <Footer/>
            </div>
        </>
    )
}

export default PageNotFound

// import React, { Component } from 'react'
// import client from '../../client'
// import PageNotFoundData from './PageNotFoundData'

// export default class PageNotFound extends Component {
//     state = {
//         articles: []
//     }
    
//     componentDidMount() {
//         client.getEntries({content_type: 'aboutUs'}).then((response) => {
//             this.setState({articles: response.items})
//         })
//     } 
//     render() {
//         return (
//             <>
//                 <PageNotFoundData pageNotFound={this.state.articles} />
//             </>
//         )
//     }
// }