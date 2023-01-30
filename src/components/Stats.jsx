import React from 'react'

import { stats } from '../constants'
import styles from '../style'

const Stats = () => (
    <section className={`flex-row flex-wrap sm:mb-20 mb-6 ${styles.flexCenter}`}>
        {stats.map((stat, index) => (
            <div key={index} className={`flex-1 flex flex-row justify-center items-center`}>
                <h4 className='font-poppins font-semibold text-[20px] md:text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
                <p className='font-poppins font-normal text-[15px] md:text-[20px]  xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
            </div>
        ))}
    </section >
)


export default Stats