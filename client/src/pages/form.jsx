import Box from '../components/box';
import { contact } from '../assets/content';

{/* Enterprise Contact Form */ }
export const Contact = () => {
    const item = contact[0];
    return (
        <div className='min-h-screen'>
            <div id='contact' className="py-10 px-4">
                <div className='max-w-7xl mx-auto px-6 sm:px-12 py-10'>
                    <div className='text-center mb-12 animate-slide-down animation-delay-0'>
                        <p className='text-sm uppercase tracking-widest mb-2'>Contact Team</p>
                        <h2 className='text-4xl md:text-5xl'>
                            <span>Interested</span> in our plans?
                        </h2>
                    </div>
                    <Box
                        heading={item.heading}
                        description={item.description}
                        bullets={item.bullets}
                        endpoint={item.endpoint}
                        btnText={item.buttonText}
                    />
                </div>
            </div>
        </div>
    )
}

{/* Premium Contact Form */ }
export const Register = () => {
    const item = contact[1];
    return (
        <div className='min-h-screen'>
            <div id='contact' className="py-10 px-4">
                <div className='max-w-7xl mx-auto px-6 sm:px-12 py-10'>
                    <div className='text-center mb-12 animate-slide-down animation-delay-0'>
                        <p className='text-sm uppercase tracking-widest mb-2'>Join Premium</p>
                        <h2 className='text-4xl md:text-5xl'>
                            <span>Interested</span> in our plans?
                        </h2>
                    </div>
                    <Box
                        heading={item.heading}
                        description={item.description}
                        bullets={item.bullets}
                        endpoint={item.endpoint}
                        btnText={item.buttonText}
                    />
                </div>
            </div>
        </div>
    )
}