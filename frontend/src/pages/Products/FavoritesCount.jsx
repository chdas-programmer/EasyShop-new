import { useSelector } from "react-redux";

const FavoritesCount = () => {
  const favorites = useSelector((state) => state.favorites);
  const favoriteCount = favorites.length;

  return (
    <div className="absolute left-20 bottom-2">
      {favoriteCount > 0 && (
        <span className="px-1 py-0 text-sm text-white bg-red-500 rounded-md"
        
        style={{ 
          position: 'absolute',
          top: '-25px',
          right: '-40px',
          background: '#ff0000',
          color: 'white',
          padding: '0.2rem 0.5rem',
          borderRadius: '50%',
          fontSize: '0.8rem'
          }}

          
        
        >
          {favoriteCount}
        </span>
      )}
    </div>
  );
};

export default FavoritesCount;
