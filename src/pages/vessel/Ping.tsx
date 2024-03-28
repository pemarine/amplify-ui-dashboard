import React, { useEffect, useState } from 'react';

interface PingProps {
    apiName: string;
    ip: string;
}

const Ping: React.FC<PingProps> = ({ apiName, ip }) => {
    const [latency, setLatency] = useState<number | null>(null);

    useEffect(() => {
        const getPing = async () => {
            try {
                const response = await fetch(`${apiName}/ping?ip=${ip}`);
                console.log('Response:', response);
                const data = await response.json();
                console.log('Data:', data);
                setLatency(data.latency);
            } catch (error) {
                console.error('Error pinging IP:', error);
            }
        };

        getPing();
    }, [apiName, ip]);

    return (
        <div>
            <h2>Ping Result</h2>
            {latency !== null ? (
                <p>Latency: {latency} ms</p>
            ) : (
                <p>Pinging...</p>
            )}
        </div>
    );
};

export default Ping;
