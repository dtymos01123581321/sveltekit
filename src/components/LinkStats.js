import React, { useState, useEffect } from 'react';

const LinkStats = ({ shortUrl }) => {
    const [stats, setStats] = useState([]);
    const [clicks, setClicks] = useState(0);

    useEffect(() => {
        const fetchStats = async () => {
            const response = await fetch(`/api/stats/${shortUrl}`);
            const data = await response.json();
            setStats(data.logs);
            setClicks(data.clicks);
        };

        fetchStats();
    }, [shortUrl]);

    return (
        <div>
            <h2>Stats for {shortUrl}</h2>
            <p>Total Clicks: {clicks}</p>
            <table>
                <thead>
                <tr>
                    <th>Time</th>
                    <th>IP</th>
                    <th>User Agent</th>
                    <th>Location</th>
                </tr>
                </thead>
                <tbody>
                {stats.map((log, index) => (
                    <tr key={index}>
                        <td>{log.time}</td>
                        <td>{log.ip}</td>
                        <td>{log.userAgent}</td>
                        <td>{log.geo.city}, {log.geo.country}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default LinkStats;
