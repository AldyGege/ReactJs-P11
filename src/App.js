import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="Parentbox">
      <div className="Foto">
        <img src="foto.jpg" />
      </div>
      <div className="Deskripsi">
        <p className="Cate">Headphone ROG Phone ori</p>
        <h1 className="Title">Promo Terbatas</h1>
        <p className="Price">Rp. 2.500.000</p>
        <p className="Info">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <h3 className="Color">Color</h3>
        <div className="Warna">
          <button className="Merah"></button>
          <button className="Hijau"></button>
          <button className="Kuning"></button>
          <button className="Biru"></button>
        </div>
        <h3 className="Size">Size</h3>
        <div className="Ukuran">
          <button className="S">S</button>
          <button className="M">M</button>
          <button className="L">L</button>
          <button className="XL">XL</button>
        </div>
        <button className="Beli">Buy Now</button>
        <button className="Wish">Add To Wishlist</button>
      </div>
    </div>
  );
}

export default App;
