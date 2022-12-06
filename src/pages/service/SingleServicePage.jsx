/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import client from '../../client'
import { Link, useParams } from 'react-router-dom';

import Navbar from '../../components/navigation bar/Navbar';
import MarketingBox from '../../components/marketing box/MarketingBox';
import Footer from '../../components/footer/Footer';

import background from '../../asset/image/background.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function withRouter(Children){
    return(props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class SingleServicePage extends Component {
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
            client.getEntries({content_type: 'service', 'fields.slug': params.slug}).then((response) => {
                this.setState({article: response.items[0]})
            })
        }
    }
    render() {
        if(!this.state.article){
            return <p>Loading</p>
        }

        const priceSplitter = (number) => (number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        
        return (
            <>
                <Navbar/>
                <img src={background} alt="" className='absolute -z-10' />
                <div className='pt-44'>
                    <div className='flex flex-col items-center gap-3 text-center px-10 lg:px-32'>
                        <p className='text-[48px] worksans-500'>{this.state.article.fields.servicePackName}</p>
                        <p className='worksans text-slate-500 w-full sm:w-3/4 md:w-1/2 text-center leading-7'>Pilih salah satu servis terbaik untuk kendaraan kesayanganmu. Punya pertanyaan dengan servis kami? Silahkan <Link to='/contact' className='underline'>Hubungi tim kami.</Link></p>
                    </div>
                    <div className='py-20 px-10 md:px-20 xl:px-32'>
                        <div>
                            {
                                this.state.article.fields.detailDescription.listServices.length <= 1 ? (
                                    <div className='flex justify-center'>
                                        <p className='hidden m-auto worksans-500 bg-amber-50 text-amber-500 px-4 py-2 mb-10 w-fit rounded-lg'>Geser untuk melihat paket lainnya</p>
                                        {
                                            this.state.article.fields.detailDescription.listServices.map((_, i) => (
                                                <div className='bg-white p-0 sm:p-7 z-10 rounded-lg cursor-grab sm:cursor-default' key={i}>
                                                    <div className='flex flex-col gap-4 border-b border-slate-200 pb-7 w-[300px]'>
                                                        <div className='flex flex-col gap-1'>
                                                            <p className='worksans-600 text-[21px]'>{this.state.article.fields.detailDescription.listServices[i].tier}</p>
                                                            <p className='worksans-500 text-slate-500'>{this.state.article.fields.detailDescription.listServices[i].serviceName}</p>
                                                        </div>
                                                        <p className='worksans-500 text-[25px]'>Rp {priceSplitter(this.state.article.fields.detailDescription.listServices[i].price)}</p>
                                                        <Link to='/location' className='bg-amber-500 hover:bg-amber-400 text-white worksans-500 text-center py-2.5 rounded-md cursor-pointer duration-200'>Hubungi kami</Link>
                                                    </div>
                                                    <div className='flex flex-col gap-5 pt-7'>
                                                        {
                                                            this.state.article.fields.detailDescription.listServices[i].services.map((_, index) => (
                                                                <span className='flex items-center gap-5' key={index}>
                                                                    <svg width="20px" height="20px" strokeWidth="3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff">
                                                                        <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className='stroke-green-500'></path>
                                                                    </svg>
                                                                    <p className='worksans-500'>{this.state.article.fields.detailDescription.listServices[i].services[index]}</p>
                                                                </span>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ) : this.state.article.fields.detailDescription.listServices.length <= 3 ? (
                                    <div>
                                        <p className='block lg:hidden m-auto worksans-500 bg-amber-50 text-amber-500 px-4 py-2 mb-10 w-fit rounded-lg'>Geser untuk melihat paket lainnya</p>
                                        <Swiper
                                            style={{
                                                "--swiper-navigation-size": "16px",
                                                "padding" : "50px 0"
                                            }}
                                            modules={[Pagination, Navigation]}
                                            breakpoints={{
                                                640: {
                                                    slidesPerView: 1,
                                                },
                                                850: {
                                                    slidesPerView: 2,
                                                    spaceBetween: 20
                                                },
                                                1280: {
                                                    slidesPerView: 3,
                                                    spaceBetween: 20
                                                }
                                            }}
                                            pagination={{
                                                clickable: true,
                                            }}
                                        >
                                            {
                                                this.state.article.fields.detailDescription.listServices.map((_, i) => (
                                                    <SwiperSlide className='bg-white p-0 sm:p-7 z-10 rounded-lg cursor-grab lg:cursor-default' key={i}>
                                                        <div className='flex flex-col gap-4 border-b border-slate-200 pb-7 w-[300px]'>
                                                            <div className='flex flex-col gap-1'>
                                                                <p className='worksans-600 text-[21px]'>{this.state.article.fields.detailDescription.listServices[i].tier}</p>
                                                                <p className='worksans-500 text-slate-500'>{this.state.article.fields.detailDescription.listServices[i].serviceName}</p>
                                                            </div>
                                                            <p className='worksans-500 text-[25px]'>Rp {priceSplitter(this.state.article.fields.detailDescription.listServices[i].price)}</p>
                                                            <Link to='/location' className='bg-amber-500 hover:bg-amber-400 text-white worksans-500 text-center py-2.5 rounded-md cursor-pointer duration-200'>Hubungi kami</Link>
                                                        </div>
                                                        <div className='flex flex-col gap-5 pt-7'>
                                                            {
                                                                this.state.article.fields.detailDescription.listServices[i].services.map((_, index) => (
                                                                    <span className='flex items-center gap-5' key={index}>
                                                                        <svg width="20px" height="20px" strokeWidth="3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff">
                                                                            <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className='stroke-green-500'></path>
                                                                        </svg>
                                                                        <p className='worksans-500'>{this.state.article.fields.detailDescription.listServices[i].services[index]}</p>
                                                                    </span>
                                                                ))
                                                            }
                                                        </div>
                                                    </SwiperSlide>
                                                ))
                                            }
                                        </Swiper>
                                    </div>
                                ) : (
                                    <div>
                                        <p className='m-auto worksans-500 bg-amber-50 text-amber-500 px-4 py-2 mb-10 w-fit rounded-lg'>Geser untuk melihat paket lainnya</p>
                                        <Swiper
                                            style={{
                                                "--swiper-navigation-size": "16px",
                                                "padding" : "50px 0px"
                                            }}
                                            modules={[Pagination, Navigation]}
                                            breakpoints={{
                                                640: {
                                                    slidesPerView: 1
                                                },
                                                850: {
                                                    slidesPerView: 2,
                                                    spaceBetween: 20
                                                },
                                                1280: {
                                                    slidesPerView: 3,
                                                    spaceBetween: 20
                                                }
                                            }}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            navigation={true}
                                        >
                                            {
                                                this.state.article.fields.detailDescription.listServices.map((_, i) => (
                                                    <SwiperSlide className='bg-white p-0 sm:p-7 z-10 cursor-grab' key={i}>
                                                        <div className='flex flex-col gap-4 border-b border-slate-200 pb-7 w-[300px]'>
                                                            <div className='flex flex-col gap-1'>
                                                                <p className='worksans-600 text-[21px]'>{this.state.article.fields.detailDescription.listServices[i].tier}</p>
                                                                <p className='worksans-500 text-slate-500'>{this.state.article.fields.detailDescription.listServices[i].serviceName}</p>
                                                            </div>
                                                            <p className='worksans-500 text-[25px]'>Rp {priceSplitter(this.state.article.fields.detailDescription.listServices[i].price)}</p>
                                                            <Link to='/location' className='bg-amber-500 hover:bg-amber-400 text-white worksans-500 text-center py-2.5 rounded-md cursor-pointer duration-200'>Hubungi kami</Link>
                                                        </div>
                                                        <div className='flex flex-col gap-5 pt-7'>
                                                            {
                                                                this.state.article.fields.detailDescription.listServices[i].services.map((_, index) => (
                                                                    <span className='flex items-center gap-5' key={index}>
                                                                        <svg width="20px" height="20px" strokeWidth="3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff">
                                                                            <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className='stroke-green-500'></path>
                                                                        </svg>
                                                                        <p className='worksans-500'>{this.state.article.fields.detailDescription.listServices[i].services[index]}</p>
                                                                    </span>
                                                                ))
                                                            }
                                                        </div>
                                                    </SwiperSlide>
                                                ))
                                            }
                                        </Swiper>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className='px-5 md:px-20 xl:px-32 pb-32'>
                        <MarketingBox/>
                    </div>
                    <Footer/>
                </div>
            </>
        )
    }
}

export default withRouter(SingleServicePage);