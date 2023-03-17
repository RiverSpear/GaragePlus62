import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import client from '../../../client';
import Loading from '../../../components/Loading/Loading';

function AboutHomepage() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        client.getEntries({ content_type: 'aboutUs' })
            .then((response) => setArticles(response.items))
            .catch(console.error);
    }, []);

    console.log(articles)

    if (!articles) return <Loading/>;
    return (
        <>
            {
                articles.map((article) => (
                    <div key={article} className='bg-center bg-cover' style={{backgroundImage: `url(${'https:' + article.fields.background.fields.file.url})`}}>
                        <div className='bg-black/75 h-screen w-full'>
                            <div className='flex flex-col items-center gap-8 m-auto text-center py-44 px-10 text-white w-full md:w-3/4 lg:w-1/2'>
                                <p className='worksans-600 text-[31px] sm:text-[39px]'>{article.fields.headline}</p>
                                <p className='worksans-500 text-[17px]'>{article.fields.headlineDescription}</p>
                                <Link to='/servis' className='worksans-500 uppercase tracking-widest bg-amber-500 text-[15px] px-16 py-5 rounded-full'>lihat servis</Link>
                            </div>
                        </div>
                    </div>
                ))
            } 
        </>
    )
}

export default AboutHomepage

// import React, { Component } from 'react'
// import client from '../../../../client'
// import AboutDataHomepage from './AboutDataHomepage'

// export default class AboutHomepage extends Component {
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
//                 <AboutDataHomepage about={this.state.articles} />
//             </>
//         )
//     }
// }