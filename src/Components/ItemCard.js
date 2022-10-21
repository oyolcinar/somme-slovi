function ItemCard({ name, description, type, images, price }) {
  return (
    <div className='item-card'>
      <img
        className='item-card-image'
        alt=''
        src={images[0]}
        onMouseEnter={(e) => {
          e.target.src = images[1];
        }}
        onMouseLeave={(e) => {
          e.target.src = images[0];
        }}
      />
      <p className='item-card-name'>{name}</p>
      <p className='item-card-price'>{`$${price.toFixed(2)}`}</p>
    </div>
  );
}

export default ItemCard;
