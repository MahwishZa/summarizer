import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Box = ({ heading, description, endpoint, btnText = "Send", bullets = [] }) => {
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!companyName.trim() || !email.trim() || !message.trim()) {
            toast.error('Please fill in all fields.');
            return;
        }

        setLoading(true);
        toast.info('Sending your message...');

        try {
            const response = await axios.post(endpoint, { companyName, email, message });

            if (response.status === 200) {
                toast.success('Message sent successfully!');
                setCompanyName('');
                setEmail('');
                setMessage('');
            } else {
                toast.error('Something went wrong.');
            }
        } catch (err) {
            toast.error('Failed to send message. Please try again later.');
        }

        setLoading(false);
    };

    return (
        <div className="grid md:grid-cols-2 rounded-3xl shadow-sm w-full mx-auto min-h-[400px] overflow-hidden">
            {/* Left Panel */}
            <div className="bg-accent p-8 flex flex-col justify-between relative">
                <div>
                    <h3 className="text-2xl mb-4">{heading}</h3>
                    <p className="text-sm mb-4">{description}</p>
                    <ul className="space-y-4 text-sm">
                        {bullets.map(({ icon: Icon, text, strong }, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <Icon className="mt-1 text-3xl" />
                                <p>
                                    <strong>{strong}</strong> {text}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Right Panel */}
            <form onSubmit={handleSubmit} className="bg-white p-8 space-y-6 z-10">
                <div>
                    <label className="block text-sm mb-2">Company Name</label>
                    <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full border-b border-gray-300 focus:outline-none focus:border-[#000538]"
                    />
                </div>
                <div>
                    <label className="block text-sm mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border-b border-gray-300 focus:outline-none focus:border-[#000538]"
                    />
                </div>
                <div>
                    <label className="block text-sm mb-2">How can we help you?</label>
                    <textarea
                        rows="1"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full border-b border-gray-300 focus:outline-none focus:border-[#000538] resize-none"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className={`btn px-6 py-2 rounded ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : btnText}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Box