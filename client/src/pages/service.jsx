import React, { useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import { FaPaste, FaFileUpload, FaTrash, FaCopy, FaDownload } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Service = () => {
    const [mode, setMode] = useState('Paragraph');
    const [summary, setSummary] = useState('');
    const [loading, setLoading] = useState(false);
    const [summaryLength, setSummaryLength] = useState(0);
    const [text, setText] = useState('');

    const getCounts = (input = '') => {
        const trimmed = input.trim();
        const words = trimmed ? trimmed.split(/\s+/).length : 0;
        const sentences = trimmed ? trimmed.split(/[.!?]+/).filter(Boolean).length : 0;
        return { words, sentences };
    }

    const { words: wordCount, sentences: sentenceCount } = getCounts(text);
    const { words: summaryWordCount, sentences: summarySentenceCount } = getCounts(summary);
    const modes = ['Paragraph', 'Bullet Points'];

    const handleUpload = async (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('file', selectedFile);
            const response = await axios.post('http://localhost:5000/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            const extracted = response.data.extracted_text;
            if (!extracted?.trim()) {
                toast('No readable text found!');
                setText('');
            } else {
                setText(extracted);
                toast('Text extracted!');
            }
        } catch (err) {
            toast('Failed to extract text!');
        }
        setLoading(false);
    }

    const getLengthFromSlider = (value) => {
        const max = 100 + Math.round((value / 100) * 150); // 100–250
        const min = Math.max(20, Math.round(max * 0.4));    // 40% of max
        return { max, min };
    }

    const handleSummarize = async () => {
        if (!text) {
            toast('Please enter or upload text!');
            return;
        }
        setLoading(true);
        toast('Summarizing...');
        const { max, min } = getLengthFromSlider(summaryLength);
        try {
            const response = await axios.post('http://localhost:5000/summarize', {
                text,
                mode: mode.toLowerCase().replace(' ', '_'),
                max_length: max,
                min_length: min
            })
            setSummary(response.data.summary);
            toast('Summary generated!');
        } catch (err) {
            toast('Failed to summarize!');
        }
        setLoading(false);
    }

    const handlePaste = async () => {
        try {
            const pastedText = await navigator.clipboard.readText();
            if (!pastedText) {
                toast('Clipboard is empty!');
                return;
            }
            setText(pastedText);
            toast('Text pasted!');
        } catch (err) {
            toast('Failed to paste!');
        }
    }

    const handleCopy = async () => {
        if (!summary) return;
        try {
            await navigator.clipboard.writeText(summary);
            toast('Summary copied!');
        } catch (err) {
            toast('Failed to copy!');
        }
    }

    const handleDownload = () => {
        if (!summary) return;
        const doc = new jsPDF();
        const lines = doc.splitTextToSize(summary, 180);
        doc.text(lines, 10, 10);
        doc.save('summary.pdf');
        toast('Summary downloaded!');
    }

    const handleClear = () => {
        setText('');
        setSummary('');
        setSummaryLength(0);
        toast('Cleared!');
    }

    return (
        <div className='min-h-screen'>
            <div id='summarizer' className="py-10 px-4">
                <div className='max-w-7xl mx-auto px-6 sm:px-12 py-10'>
                    <div className='text-center mb-12 animate-slide-down animation-delay-0'>
                        <p className='text-sm uppercase tracking-widest mb-2'>Service</p>
                        <h2 className='text-4xl md:text-5xl'>
                            <span>Our</span> Featured Tool
                        </h2>
                    </div>
                    {/* Tool Container */}
                    <div className='bg-white rounded-3xl p-8 w-full mx-auto min-h-[400px] shadow-sm'>
                        {/* Mobile Settings */}
                        <div className="md:hidden border-b pb-4 mb-4">
                            <div className="mt-4 space-y-4">
                                <div>
                                    <h1 className="font-semibold mb-1">Modes:</h1>
                                    <div className="flex items-center gap-2">
                                        {modes.map((m) => (
                                            <button
                                                key={m}
                                                onClick={() => setMode(m)}
                                                className={`text-sm px-2 py-1 rounded-md ${mode === m ? 'bg-accent font-medium' : ''}`}>
                                                {m}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h1 className="font-semibold mb-1">Summary Length:</h1>
                                    <div className="flex items-center text-sm gap-2">
                                        <p>Short</p>
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={summaryLength}
                                            onChange={(e) => setSummaryLength(e.target.value)}
                                            className="accent-accent w-full"
                                        />
                                        <p>Long</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Settings */}
                        <div className='hidden md:flex justify-between items-center gap-4 border-b pb-2 mb-4'>
                            <div className="flex flex-wrap items-center gap-4">
                                <h1 className="font-semibold">Modes:</h1>
                                <div className="flex items-center gap-2">
                                    {modes.map((m) => (
                                        <button
                                            key={m}
                                            onClick={() => setMode(m)}
                                            className={`text-sm px-2 py-1 rounded-md ${mode === m ? 'bg-accent font-medium' : ''}`}>
                                            {m}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                                <h1 className="font-semibold">Summary Length:</h1>
                                <p className="text-sm">Short</p>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={summaryLength}
                                    onChange={(e) => setSummaryLength(e.target.value)}
                                    className="accent-accent w-32"
                                />
                                <p className="text-sm">Long</p>
                            </div>
                        </div>

                        {/* Mobile Textarea */}
                        <div className="block md:hidden">
                            {/* Top pane */}
                            <div className="flex flex-col gap-4 relative">
                                {text ? (
                                    <textarea
                                        className="w-full p-4 resize-none outline-none overflow-auto h-[300px]"
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        placeholder='Enter or paste your text and press "Summarize"'
                                    />
                                ) : (
                                    <div className='flex flex-col items-center justify-center flex-1 mb-4 cursor-pointer'>
                                        <div className="flex gap-4">
                                            <button
                                                className="p-4 rounded-md btn-outline"
                                                onClick={handlePaste}
                                            >
                                                <FaPaste className='text-xl' />
                                            </button>
                                            <input type="file" accept="application/pdf" onChange={handleUpload} className="hidden" id="fileInput" />
                                            <label htmlFor="fileInput" className="p-4 rounded-md btn-outline">
                                                <FaFileUpload className='text-xl' />
                                            </label>
                                        </div>
                                    </div>
                                )}
                                <div className="text-xs text-center">{sentenceCount} sentences &bull; {wordCount} words</div>

                                {/* Bottom pane */}
                                <div className="w-full p-4 resize-none outline-none overflow-auto h-[300px] border-t whitespace-pre-wrap break-words">
                                    {summary ? summary : 'Your summary will appear here.'}
                                </div>
                                {summary && (
                                    <div className="text-xs text-center">{summarySentenceCount} sentences &bull; {summaryWordCount} words</div>
                                )}
                            </div>
                        </div>

                        {/* Desktop Textarea */}
                        <div className='hidden md:grid md:grid-cols-2 md:gap-4 relative'>
                            {/* Left pane */}
                            <div className="flex flex-col p-4 border-r min-h-[400px]">
                                {text ? (
                                    <textarea
                                        className="w-full flex-1 p-4 resize-none outline-none overflow-auto rounded-md"
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        placeholder='Enter or paste your text and press "Summarize"'
                                    />
                                ) : (
                                    <div className='flex flex-col items-center justify-center flex-1 mb-4 cursor-pointer'>
                                        <div className="flex gap-4">
                                            <button
                                                className="p-4 rounded-md btn-outline"
                                                onClick={handlePaste}
                                            >
                                                <FaPaste className='text-xl' />
                                            </button>
                                            <input type="file" accept="application/pdf" onChange={handleUpload} className="hidden" id="fileInput" />
                                            <label htmlFor="fileInput" className="p-4 rounded-md btn-outline">
                                                <FaFileUpload className='text-xl' />
                                            </label>
                                        </div>
                                    </div>
                                )}
                                <div className="text-xs mt-2">{sentenceCount} sentences &bull; {wordCount} words</div>
                            </div>

                            {/* Right pane */}
                            <div className="flex flex-col p-4 min-h-[400px]">
                                <div className="w-full flex-1 p-4 resize-none outline-none overflow-auto rounded-md whitespace-pre-wrap break-words">
                                    {summary ? summary : 'Your summary will appear here.'}
                                </div>
                                {summary && (
                                    <div className="text-xs mt-2">{summarySentenceCount} sentences &bull; {summaryWordCount} words</div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
                        <button onClick={handleSummarize} disabled={loading || !text} className="px-6 py-2 btn w-full sm:w-auto">
                            {loading ? 'Summarizing...' : 'Summarize'}
                        </button>
                        <div className="flex gap-4 justify-center md:justify-end">
                            {summary && (
                                <>
                                    <button type="button" className="btn-outline" onClick={handleDownload}>
                                        <FaDownload />
                                    </button>
                                    <button type="button" className="btn-outline" onClick={handleCopy}>
                                        <FaCopy />
                                    </button>
                                </>
                            )}
                            <button type="button" className="btn-outline" onClick={handleClear}>
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;