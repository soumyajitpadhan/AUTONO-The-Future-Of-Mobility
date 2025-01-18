import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import '../../index.css'

const Careers = () => {

    const jobData = [
        {
            title: "Electrical Engineer",
            location: "Bangalore, India",
            responsibilities: "Design in various process technologies including deep submicron CMOS, Design of data-converter blocks such as ADCs and DACs, Design of RF IC transceiver blocks such as VGAs and filters."
        },
        {
            title: "Software Engineer",
            location: "Hyderabad, India",
            responsibilities: "Develop scalable web applications, Implement RESTful APIs and microservices, Collaborate with cross-functional teams to deliver high-quality software."
        },
        {
            title: "Data Scientist",
            location: "Mumbai, India",
            responsibilities: "Analyze large datasets to extract actionable insights, Build predictive models using machine learning algorithms, Communicate findings to stakeholders through visualizations."
        },
        {
            title: "Mechanical Engineer",
            location: "Pune, India",
            responsibilities: "Design and optimize mechanical systems, Perform thermal and stress analysis on components, Work with manufacturers to ensure product quality."
        },
        {
            title: "Product Manager",
            location: "Chennai, India",
            responsibilities: "Define and prioritize product features, Work with development teams to deliver on roadmap objectives, Conduct market research to identify new opportunities."
        },
        {
            title: "Cybersecurity Analyst",
            location: "Delhi, India",
            responsibilities: "Monitor and respond to security incidents, Conduct vulnerability assessments and penetration testing, Implement security protocols to protect sensitive data."
        },
        {
            title: "Network Engineer",
            location: "Kolkata, India",
            responsibilities: "Design and maintain enterprise network infrastructure, Troubleshoot network issues and optimize performance, Implement network security measures and protocols."
        },
        {
            title: "UI/UX Designer",
            location: "Bangalore, India",
            responsibilities: "Design intuitive user interfaces and experiences, Create wireframes, prototypes, and mockups, Conduct usability testing to refine designs."
        }
    ];

    return (
        <div className='bg-black text-white font-montserrat border-t border-white'>
            <div data-aos='fade-up' data-aos-delay='250' className='h-[120vh] md:h-[70vh] flex flex-col md:flex-row justify-evenly items-center xl:h-screen'>
                <div className='relative flex flex-col px-16 gap-y-10 md:w-[350px] sm:px-20 md:px-6 lg:px-8 xl:w-[500px] xl:px-16'>
                    <h3 className='text-xs tracking-widest md:text-sm'>CAREERS</h3>
                    <p className='text-lg tracking-wider leading-relaxed xl:tracking-widest xl:leading-loose xl:text-2xl'>We're looking for innovative talent to join our team. See all positions and submit your CV.</p>
                    <div className='w-40 flex border border-white rounded-lg'>
                        <button className='py-2 px-3 rounded-l-lg hover:bg-white hover:text-black transition duration-300 ease-in'>Openings</button>
                        <button className='border-l border-white px-2'><ArrowRight /></button>
                    </div>
                    <div className='absolute border-l border-white h-[100%] sm:h-[100%] xl:h-[110%] left-[8%] md:left-[0%] lg:left-0'></div>
                </div>
                <div>
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        className='border border-white max-w-xs h-[450px] rounded-lg xl:h-[550px] xl:max-w-md'
                    >

                        {
                            jobData.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className='p-7'>
                                        <div className='flex flex-col justify-evenly h-full '>
                                            <h3 className='text-2xl tracking-wide xl:text-3xl'>{item.title}</h3>
                                            <p className='text-sm text-gray-300 xl:text-lg'>{item.location}</p>
                                            <p className='text-base tracking-wide leading-relaxed xl:text-xl xl:tracking-widest xl:leading-loose'>{item.responsibilities}</p>
                                            <div className='w-40 flex border border-white rounded-lg'>
                                                <button className='py-2 px-3 rounded-l-lg hover:bg-white hover:text-black transition duration-300 ease-in'>Apply Now</button>
                                                <button className='border-l border-white px-2'><ArrowRight /></button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Careers
