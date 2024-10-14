import React from 'react';
import {BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer,Label,CartesianGrid,} from 'recharts';

const formatNumber = (num) => {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`
  }
  return num;
};

const RepoChart = ({ repos }) => {
  if (!repos || repos.length === 0) {
    return <p className="text-center text-gray-500">No repository data available</p>;
  }

  const chartHeight = Math.min(300 + repos.length * 20, 500);

  return (
    <div className="w-full p-6 bg-gray-100 border rounded-lg shadow-lg">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Top Repositories</h2>
      <ResponsiveContainer width="100%" height={chartHeight}>
        <BarChart data={repos.slice(0, 10)} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#6b7280' }}>
            <Label value="Repositories" offset={-10} position="insideBottom" fill="#4b5563" />
          </XAxis>
          <YAxis tickFormatter={formatNumber}>
            <Label value="Stars" angle={-90} position="insideLeft" fill="#4b5563" />
          </YAxis>
          <Tooltip
            content={({ payload }) => {
              if (payload && payload.length) {
                const { name, stargazers_count, forks_count, language, description } = payload[0].payload;
                return (
                  <div className="p-3 bg-white border border-gray-300 shadow-md text-xs text-gray-700 rounded-md">
                    <p className="font-semibold">{name}</p>
                    <p>Stars: <strong>{formatNumber(stargazers_count)}</strong></p>
                    <p>Forks: <strong>{formatNumber(forks_count)}</strong></p>
                    <p>Language: <strong>{language || 'N/A'}</strong></p>
                    <p>Description: <strong>{description || 'No description available'}</strong></p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar
            dataKey="stargazers_count"
            fill="url(#colorUv)"
            radius={[10, 10, 0, 0]}
            animationDuration={1000}
            isAnimationActive={true}
          />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0.4} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RepoChart