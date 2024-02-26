import Image from "next/image";
import productsData from "../data/products.json";
import styles from "./app.module.css";
import NavBar from "@/components/NavBar";

export default async function App() {
  return (
    <div>
      <NavBar title="Shop Produtos" />
      <div className={styles.grid}>
        {productsData.map((product) => (
          <a className={styles.redirect} href="/CriarConta">
            <div key={product.id} className={styles.product}>
              <img
                alt="product"
                width={100}
                height={100}
                src={"/images/" + product.image}
              />
              <h2>{product.nome}</h2>
              <p>Preço: R$ {product.preco}</p>
              <p>{product.descricao}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
