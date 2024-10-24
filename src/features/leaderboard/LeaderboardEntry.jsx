function LeaderboardEntry({ bgColor, place, name, uploads }) {
  return (
    <tr className={`bg-${bgColor} text-gray-800 text-md border font-semibold`}>
      <td className={`p-3`}>{place}</td>
      <td className={`p-3`}>{name}</td>
      <td className={`p-3`}>{uploads}</td>
    </tr>
  );
}

export default LeaderboardEntry;
