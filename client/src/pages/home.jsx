import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AboutCard, FeatureCard, TestimonialCard } from '../components/card';
import { about, steps, testimonials } from '../assets/content';
// Images
import blackstar from '../assets/images/blackstar.png'
import eightpoly from '../assets/images/eightpoly.png'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.png'
import onestar from '../assets/images/onestar.png'
import staroutline from '../assets/images/staroutline.png'
import service from '../assets/images/service.png'
import twostars from '../assets/images/twostars.png'

function Home() {
    const location = useLocation()
    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 300);
            }
        }
    }, [location])

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section id='hero' className="py-10 px-4">
                <div className='max-w-7xl mx-auto px-6 sm:px-12 pb-10'>
                    <div className='bg-accent rounded-3xl p-8'>
                        <div className="flex flex-col md:flex-row gap-10 mx-6 mt-4 md:mt-16 mb-4">
                            <div className="md:w-1/2 flex flex-col justify-between">
                                <div className='animate-slide-down md:animate-slide-left animation-delay-0'>
                                    <h2 className="text-4xl md:text-5xl mb-6">
                                        <span>Summarize </span>Any Text Instantly with AI
                                    </h2>
                                    <p className="text-sm leading-loose mb-6 max-w-md">
                                        Turn long articles, documents, or transcripts into concise summaries in seconds—perfect for students, professionals, and teams.
                                    </p>
                                </div>
                                <div className="mt-10 md:mt-auto animate-slide-down md:animate-slide-up animation-delay-500">
                                    <div className="flex flex-col sm:flex-row gap-4 text-xs md:text-sm">
                                        <Link to="/service" className="btn px-6 py-3">
                                            Get Started
                                        </Link>
                                        <Link to="/#steps" className="btn-outline hover:bg-white px-6 py-3">
                                            Learn How It Works
                                        </Link>
                                    </div>
                                    <p className="text-sm mt-4">Powered by PyTorch</p>
                                </div>
                            </div>
                            <div className="md:w-1/2 flex items-center justify-center relative animate-slide-down md:animate-slide-right animation-delay-1000">
                                <div className="hidden md:block absolute -bottom-4 -right-2 border rounded-3xl py-48 px-32 z-0"></div>
                                <div className="hidden md:block absolute -top-4 -left-2 border rounded-3xl py-48 px-40 z-0"></div>
                                <img src={img1} alt="Hero image" className="w-64 md:w-80 object-cover rounded-3xl shadow-sm relative z-10" />
                                <img src={onestar} alt="Star icon" className="absolute w-16 md:w-24 top-0 md:top-2 left-4 md:left-28 z-20" />
                                <img src={onestar} alt="Star icon" className="absolute w-20 md:w-16 bottom-0 md:bottom-2 right-0 md:right-28 z-20" />
                                <div className="absolute top-2 md:top-4 -right-4 md:right-4 bg-white rounded-3xl border px-4 py-1 text-sm z-30">
                                    Easy to use
                                </div>
                                <div className="absolute bottom-10 md:bottom-12 -left-4 md:left-4 translate-y-full mt-2 bg-white rounded-3xl border px-4 py-1 text-sm z-30">
                                    Time saving
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section id='about' className="py-10 px-4">
                <div className="max-w-7xl mx-auto px-6 sm:px-12 py-10">
                    <div className="text-center mb-12 animate-slide-down animation-delay-1000">
                        <p className="text-sm uppercase tracking-widest mb-2">What is Scribe?</p>
                        <h2 className="text-4xl md:text-5xl">
                            <span>Not </span>Your Typical Tool
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                        <div className="relative overflow-hidden">
                            <img src={img2} alt="About image" className="object-cover filter rounded-3xl grayscale shadow-sm" />
                            <img src={twostars} alt="Decorative stars" className="absolute bottom-4 left-8 md:bottom-6 md:left-12 w-16 md:w-28 pointer-events-none" />
                        </div>
                        <div className="grid grid-cols-1 gap-8">
                            {about.map((description, index) => (
                                <AboutCard key={index} {...description} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id='steps' className="py-10 px-4">
                <div className='max-w-7xl mx-auto px-6 sm:px-12 py-10 text-center md:text-left'>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 mb-12">
                            <p className="text-sm uppercase tracking-widest mb-2">How it works</p>
                            <h2 className="text-4xl md:text-5xl">
                                Fast, Accurate, Scalable Summarization - <br /><span>Step by Step</span>
                            </h2>
                        </div>
                        <div className="hidden md:flex relative h-full">
                            <img src={staroutline} alt="Star" className="absolute -top-16 right-16 w-full" />
                            <img src={eightpoly} alt="Polygon" className="absolute -top-16 right-8 w-[180px]" />
                        </div>
                        <FeatureCard {...steps[0]} />
                        <FeatureCard {...steps[1]} />
                        <div className="hidden md:flex relative h-full">
                            <img src={blackstar} alt="Star" className="absolute -bottom-14 left-10 w-32" />
                        </div>
                        <div className="md:row-span-2 flex items-center justify-center order-last md:order-none">
                            <img src={service} alt="Feature image" className="rounded-3xl object-cover" />
                        </div>
                        <FeatureCard {...steps[2]} />
                        <FeatureCard {...steps[3]} />
                        <div className="col-span-1 md:col-span-2 border rounded-3xl text-xs md:text-sm shadow-sm p-8 flex flex-col justify-center leading-relaxed">
                            <p className="uppercase mb-2">What's Included</p>
                            <p> &bull; Customization Options &nbsp; &bull; Multi-format Support &nbsp; &bull; Secure Processing &nbsp; &bull; User-Friendly Interface</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id='testimonials' className="py-10 px-4">
                <div className='max-w-7xl mx-auto px-6 sm:px-12 py-10'>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className='text-center md:text-left mb-12 md:my-6'>
                            <p className="text-sm uppercase tracking-widest mb-2">Testimonials</p>
                            <h2 className="text-4xl md:text-5xl">
                                What Our Users <span>Are Saying?</span>
                            </h2>
                        </div>
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home