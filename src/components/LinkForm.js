import React, { useState } from 'react';

const LinkForm = () => {
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        if (!isValidUrl(url)) {
            setMessage('Invalid URL');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('/api/shorten', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url, shortUrl }),
            });

            const result = await response.json();
            if (response.ok) {
                setMessage(`Link created! View stats at /${shortUrl}/stats`);
            } else {
                setMessage(result.error || 'Error creating short URL');
            }
        } catch (error) {
            setMessage('Error connecting to server');
        }

        setIsSubmitting(false);
    };

    const isValidUrl = (string) => {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="url">Original URL:</label>
            <input
                type="text"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                placeholder="Enter the original URL"
            />

            <label htmlFor="shortUrl">Short URL:</label>
            <input
                type="text"
                id="shortUrl"
                value={shortUrl}
                onChange={(e) => setShortUrl(e.target.value)}
                required
                placeholder="Enter your desired short URL"
            />

            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Loading...' : 'Shorten'}
            </button>

            {message && <p>{message}</p>}
        </form>
    );
};

export default LinkForm;
