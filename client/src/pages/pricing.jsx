import React, { useState } from 'react';
import { PriceCard, FAQCard, UseCaseCard } from "../components/card"
import { plans, faqs, usecases } from "../assets/content";
import help from '../assets/images/help.png'

const Pricing = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const handleToggle = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    }

    return (
        <div className="min-h-screen">
            {/* Pricing */}
            <div id='pricing' className="py-10 px-4">
                <div className='max-w-7xl mx-auto px-6 sm:px-12 py-10 animate-slide-down animation-delay-0'>
                    <div className="text-center mb-12">
                        <p className="text-sm uppercase tracking-widest mb-2">Pricing</p>
                        <h2 className="text-4xl md:text-5xl">
                            <span>Plans </span>That Fit You
                        </h2>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        {plans.map((plan, index) => (
                            <PriceCard key={index} {...plan} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Use Cases */}
            <section id='usecases' className='py-10 px-4'>
                <div className='max-w-7xl mx-auto px-6 sm:px-12 py-10'>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-1 md:sticky md:top-24 text-center md:text-left self-start mb-6 md:mb-0">
                            <p className="text-sm uppercase tracking-widest mb-2">Use Cases</p>
                            <h2 className="text-4xl md:text-5xl">
                                AI-Powered Summaries for Every <span>Workflow</span>
                            </h2>
                        </div>
                        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {usecases.map((usecase, index) => (
                                <UseCaseCard key={index} {...usecase} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section id='faq' className="py-10 px-4">
                <div className='max-w-7xl mx-auto px-6 sm:px-12 py-10 text-center md:text-left'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-12 md:my-12 animate-slide-down animation-delay-100">
                            <p className="text-sm uppercase tracking-widest mb-2">Need More Info?</p>
                            <h2 className="text-4xl md:text-5xl">
                                Frequently Asked <span>Questions</span>
                            </h2>
                        </div>
                        <div className="flex row-span-2 items-center justify-center">
                            <img src={help} alt="FAQ image" />
                        </div>
                        {faqs.map((faq, i) => (
                            <div key={i} className={i === 0 ? "mt-12" : ""}>
                                <FAQCard
                                    {...faq}
                                    isOpen={openIndex === i}
                                    onToggle={() => handleToggle(i)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Pricing