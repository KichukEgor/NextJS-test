import React from "react";

interface PokemonStatsProps {
  stats: Array<{ label: string; value: string | number }>;
}

const PokemonStats: React.FC<PokemonStatsProps> = ({ stats }) => (
  <div className="flex flex-col gap-2 text-center">
    {stats.map(( stat ) => (
      <p key={stat.label}>
        <span className="font-semibold text-gray-700">{stat.label}: </span>
        <span className="text-gray-600">{stat.value}</span>
      </p>
    ))}
  </div>
);

export default PokemonStats;
