import React from 'react'
import { Link } from 'react-router-dom'
import LocationFooter from './components/Location/LocationFooter'

export const FooterModel = ({article}) => {
    const {garageName, shortDescription, mondaySaturday, friday, holiday} = article.fields
    return (
        <>
            <div className='flex justify-between gap-20 px-5 md:px-20 xl:px-32 pb-32 w-full'>
                <div className='flex flex-col gap-10 lg:w-1/4'>
                    <span className='text-amber-500 worksans-500'>Tentang {garageName}</span>
                    <p className='worksans text-neutral-600 leading-6'>{shortDescription}</p>
                </div>
                <div className='flex flex-col gap-10'>
                    <p className='text-amber-500 worksans-500'>Quick Links</p>
                    <div className='flex flex-col gap-3 worksans text-neutral-600'>
                        <Link to="/service" className='hover:text-amber-500'>Services</Link>
                        <Link to="/location" className='hover:text-amber-500'>Locations</Link>
                        <Link to="/faq" className='uppercase hover:text-amber-500'>faq</Link>
                        <Link to="/testimony" className='hover:text-amber-500'>Testimoni</Link>
                    </div>
                </div>
                <div className='flex flex-col gap-10'>
                    <p className='text-amber-500 worksans-500'>Jam Operasional</p>
                    <table className='worksans text-neutral-600'>
                        <tbody>
                            <tr>
                                <td className='pb-3 pr-14'>Senin - Sabtu</td>
                                <td className='pb-3'>{mondaySaturday}</td>
                            </tr>
                            <tr>
                                <td className='pb-3'>Jumat</td>
                                <td className='pb-3'>{friday}</td>
                            </tr>
                            <tr>
                                <td className='pb-3'>Minggu & Hari libur</td>
                                <td className='pb-3'>{holiday}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='flex flex-col gap-10 w-[300px]'>
                    <p className='text-amber-500 worksans-500'>Lokasi</p>
                    <LocationFooter/>
                </div>
            </div>
        </>
    )
}

export default FooterModel