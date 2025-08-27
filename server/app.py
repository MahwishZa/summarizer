from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline
from PyPDF2 import PdfReader
import spacy
import logging
import re

#  App Initialization 
app = Flask(__name__)
CORS(app)
logging.basicConfig(level=logging.INFO)

#  Load NLP Resources 
try:
    summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
    grammar_corrector = pipeline("text2text-generation", model="prithivida/grammar_error_correcter_v1")
    nlp = spacy.load("en_core_web_sm")
except Exception as e:
    logging.error(f"Error loading models: {e}")
    raise e

#  Utility Functions 
def extract_text_from_pdf(file) -> str:
    try:
        reader = PdfReader(file)
        return ''.join([page.extract_text() or '' for page in reader.pages])
    except Exception as e:
        logging.error(f"Error extracting text from PDF: {e}")
        return ''

def chunk_text(text: str, max_tokens=500) -> list:
    doc = nlp(text)
    chunks = []
    chunk = ""
    token_count = 0

    for sent in doc.sents:
        sentence = sent.text.strip()
        words = sentence.split()
        if token_count + len(words) <= max_tokens:
            chunk += " " + sentence
            token_count += len(words)
        else:
            if chunk:
                chunks.append(chunk.strip())
            chunk = sentence
            token_count = len(words)

    if chunk:
        chunks.append(chunk.strip())

    return chunks

def summarize_chunks(chunks: list, length: str = "medium") -> str:
    config = {
        'short': {"min_length": 30, "max_length": 80},
        'medium': {"min_length": 60, "max_length": 150},
        'long': {"min_length": 100, "max_length": 250}
    }.get(length, {"min_length": 60, "max_length": 150})

    summaries = []
    for chunk in chunks:
        try:
            result = summarizer(chunk, **config, do_sample=False)
            summaries.append(result[0]['summary_text'].strip())
        except Exception as e:
            logging.warning(f"Summarization failed for chunk: {e}")
            continue

    return ' '.join(summaries)

def correct_grammar(text: str) -> str:
    try:
        corrected = grammar_corrector(text)
        return corrected[0]['generated_text']
    except Exception as e:
        logging.warning(f"Grammar correction failed: {e}")
        return text

def format_summary(text: str, mode: str = "paragraph", max_bullets: int = 5) -> str:
    sentences = re.split(r'(?<=[.!?]) +', text.strip())
    sentences = sorted(set(sentences), key=lambda s: -len(s.split()))

    if mode == "bullet_points":
        return '\n'.join(f"• {s}" for s in sentences[:max_bullets])
    return ' '.join(sentences)

#  Routes 
@app.route('/upload', methods=['POST'])
def upload():
    file = request.files.get('file')
    if not file or not file.filename.endswith('.pdf'):
        return jsonify({'error': 'Invalid file. Please upload a file'}), 400

    extracted_text = extract_text_from_pdf(file)
    if not extracted_text:
        return jsonify({'error': 'Failed to extract text from file'}), 500

    return jsonify({'text': extracted_text})

@app.route('/summarize', methods=['POST'])
def summarize():
    try:
        data = request.get_json()
        text = data.get("text", "").strip()
        if not text:
            return jsonify({'error': 'Text is empty.'}), 400

        summary_length = data.get("summary_length", "medium")
        mode = data.get("mode", "paragraph").lower()
        apply_grammar_correction = data.get("correct_grammar", False)

        chunks = chunk_text(text)
        summary = summarize_chunks(chunks, summary_length)

        if apply_grammar_correction:
            summary = correct_grammar(summary)

        formatted = format_summary(summary, mode)
        return jsonify({'summary': formatted})

    except Exception as e:
        logging.error(f"Summarization failed: {e}")
        return jsonify({'error': 'Internal server error'}), 500
    
@app.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        company_name = data.get("companyName", "").strip()
        email = data.get("email", "").strip()
        message = data.get("message", "").strip()

        if not company_name or not email or not message:
            return jsonify({'error': 'All fields are required.'}), 400

        # Log or store the data (for now, just print it)
        logging.info(f"[REGISTER - PREMIUM] Company: {company_name}, Email: {email}, Message: {message}")

        # Optionally: Store in DB or send email here
        return jsonify({'success': True, 'message': 'Premium registration received.'})
    
    except Exception as e:
        logging.error(f"Register form failed: {e}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/contact', methods=['POST'])
def contact():
    try:
        data = request.get_json()
        company_name = data.get("companyName", "").strip()
        email = data.get("email", "").strip()
        message = data.get("message", "").strip()

        if not company_name or not email or not message:
            return jsonify({'error': 'All fields are required.'}), 400

        # Log or store the data (for now, just print it)
        logging.info(f"[CONTACT] Company: {company_name}, Email: {email}, Message: {message}")

        # Optionally: Send to a database or email service here
        return jsonify({'success': True, 'message': 'Message received.'})
    
    except Exception as e:
        logging.error(f"Contact form failed: {e}")
        return jsonify({'error': 'Internal server error'}), 500

#  Entry Point 
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=os.environ.get("PORT", 5000))
