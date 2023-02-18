import React, { Component, Suspense } from 'react'
import client from '../../client'
import { useParams } from 'react-router-dom';

import Navbar from '../../components/navigation bar/Navbar';
import MarketingBox from '../../components/marketing box/MarketingBox';
import Footer from '../../components/footer/Footer';
import ScrollToTop from '../../components/scroll to top/ScrollToTop'

import whatsapp_icon from '../../asset/icon/whatsapp.png'
import instagram_icon from '../../asset/icon/instagram.png'
import tiktok_icon from '../../asset/icon/tik-tok.png'

import background from '../../asset/image/background.png'
import Loading from '../../components/Loading/Loading';

export function withRouter(Children){
    return() => {
        const match = {params: useParams()};
        return <Children match={match}/>
    }
}

class SingleLocationPage extends Component {
    state = {
        article: null,
        packetPopup: false
    }

    handlePopup = ()=>{
        this.setState({
            packetPopup: true
        })
    }

    componentDidMount() {
        const { params } = this.props.match
        if(params && params.slug){
            client.getEntries({content_type: 'location', 'fields.slug': params.slug}).then((response) => {
                this.setState({article: response.items[0]})
            })
        }
    }
    render() {
        return (
            <>
                { !this.state.article ? <Loading/> : (
                    <Suspense fallback={<Loading/>}>
                        <Navbar/>
                        <img src={background} alt="" className='absolute -z-10' />
                        <div className='flex flex-col gap-44 py-32 px-5 lg:px-32'>
                            <div className='flex flex-col items-center gap-10'>
                                <div className='singleLocation'>
                                    <div dangerouslySetInnerHTML={{ __html: this.state.article.fields.googleMapsEmbed }}></div>
                                </div>
                                <div className='flex flex-col gap-10 py-10'>
                                    <div className='flex flex-col items-center text-center gap-2'>
                                        <p className='text-[31px] worksans-600'>{this.state.article.fields.streetName}</p>
                                        <p className='worksans text-slate-500 w-full md:w-1/2'>{this.state.article.fields.longAddress}</p>
                                    </div>
                                    <div className='flex flex-wrap items-center justify-center gap-x-20 gap-y-10 whitespace-nowrap'>
                                        <div className='flex justify-center items-center gap-5'>
                                            <img src={instagram_icon} alt="Instagram icons created by Pixel perfect - Flaticon" title="instagram icons" width={20} longdesc="https://www.flaticon.com/free-icons/instagram" />
                                            <a href={'https://www.instagram.com/' + this.state.article.fields.instagram} target='_blank' rel='noreferrer' className='worksans text-slate-500 text-[14px]'>{this.state.article.fields.instagram}</a>
                                        </div>
                                        <div className='flex justify-center items-center gap-5'>
                                            <img src={tiktok_icon} alt="Tiktok icons created by Pixel perfect - Flaticon" title="tiktok icons" width={20} longdesc="https://www.flaticon.com/free-icons/tiktok" />
                                            <a href={'https://www.tiktok.com/' + this.state.article.fields.tikTok} target='_blank' rel='noreferrer' className='worksans text-slate-500 text-[14px]'>{this.state.article.fields.tikTok}</a>
                                        </div>
                                        <div className='flex justify-center items-center gap-5'>
                                            <img src={whatsapp_icon} alt="Whatsapp icons created by Pixel perfect - Flaticon" title="whatsapp icons" width={20} longdesc="https://www.flaticon.com/free-icons/whatsapp" />
                                            <a href={'https://wa.me/' + this.state.article.fields.whatsapp} target='_blank' rel='noreferrer' className='worksans text-slate-500 text-[14px]'>{this.state.article.fields.whatsapp}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <MarketingBox/>
                        </div>
                        <Footer/>
                        <ScrollToTop/>
                    </Suspense>
                )}
            </>
        )
    }
}

export default withRouter(SingleLocationPage);