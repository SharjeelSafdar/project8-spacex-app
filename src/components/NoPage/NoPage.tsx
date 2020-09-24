import React from 'react';

export const NoPage: React.FC<{}> = () => {
    return (
        <div style={{
            background: '#000',
            color: 'whitesmoke',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '70vh',
        }}>
            <h2>This page doesn't exist. :(</h2>
        </div>
    )
}
