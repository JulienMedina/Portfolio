const DiagonalLines = () => {
  return (
    <div className="absolute left-0 top-0 ml-4 mt-4 flex flex-col space-y-4">
      {/* Ligne 1 */}
      <div className="h-1 w-32 rotate-45 bg-yellow-400"></div>
      {/* Ligne 2 */}
      <div className="h-1 w-36 rotate-45 bg-red-400"></div>
      {/* Ligne 3 */}
      <div className="h-1 w-40 rotate-45 bg-orange-400"></div>
      {/* Ligne 4 */}
      <div className="h-1 w-44 rotate-45 bg-purple-500"></div>
      {/* Ligne 5 */}
      <div className="h-1 w-48 rotate-45 bg-pink-500"></div>
    </div>
  );
};

export default DiagonalLines;
