import React, { useEffect, useState } from 'react'
import client from '../../client';

import Footer from '../../components/footer/Footer';
import Loading from '../../components/Loading/Loading';
import Navbar from '../../components/navigation bar/Navbar';
import ScrollToTop from '../../components/scroll to top/ScrollToTop';

function Faq() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        client.getEntries({ content_type: 'faq' })
            .then((response) => {
                const sortedArticles = response.items.sort((a, b) => a.fields.contentOrder - b.fields.contentOrder);
                setArticles(sortedArticles);
            })
            .catch(console.error);
    }, []);

    if (!articles) return <Loading/>;
    return (
        <>
            <div>
                <Navbar/>
                <div className='flex flex-col gap-44 bg-[#F4F4F4] pt-44'>
                    <div className='flex flex-col items-center gap-20'>
                        <div className='flex flex-col items-center gap-5 text-center px-10 lg:px-32'>
                            <p className='text-[31px] sm:text-[48px] worksans-500 capitalize'>Pertanyaan yang sering diajukan</p>
                            <p className='worksans text-slate-500 w-full sm:w-3/4 md:w-1/2 text-center leading-7'>Temukan jawaban untuk semua pertanyaan Anda tentang produk dan layanan kami di bagian FAQ yang komprehensif.</p>
                        </div>
                        <div className='flex flex-wrap justify-center gap-10 bg-[#F4F4F4]'>
                            {
                                articles.map((article, index) => (
                                    <div key={index} className='flex flex-col gap-3 bg-white p-10 rounded-2xl w-[400px]'>
                                        <p className="worksans-500 duration-200">{article.fields.question}</p>
                                        <p className='worksans text-gray-700'>{article.fields.answer}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <Footer/>
                    <ScrollToTop/>
                </div>
            </div>
        </>
    )
}

export default Faq

// import React, { Component, Suspense } from 'react'
// import client from '../../client'
// import FaqData from './FaqData'
// import Loading from '../../components/Loading/Loading'

// export default class Faq extends Component {
//     state = {
//         articles: []
//     }
    
//     componentDidMount() {
//         client.getEntries({content_type: 'faq'}).then((response) => {
//             response.items.sort((a,b) => 
//                 a.fields.priority > b.fields.priority ? -1 : 1 && 
//                 a.fields.contentOrder < b.fields.contentOrder ? -1 : 1
//             )
//             this.setState({articles: response.items})
//         })
//     } 

//     render() {
//         return (
//             <>
//                 { !this.state.articles ? <Loading/> : (
//                     <Suspense fallback={<Loading/>}>
//                         <FaqData faq={this.state.articles} />
//                     </Suspense>
//                 )}
//             </>
//         )
//     }
// }