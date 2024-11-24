"use client"
import React, { useEffect, useState } from 'react';
import ResponsiveCarousel from '../../components/slider'; // Chemin correct vers ton composant
import { Card } from 'react-bootstrap'; // Importer le composant Card

interface Product {
  _id: string,
  Ref: string,
  Price: number,
  Description: string,
  Qnt: number,
  image: string[]
}
const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product | null>(null); // Initialiser avec null
  const [error, setError] = useState<string | null>(null); // État pour gérer les erreurs

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/product/${params.id}`);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        const data = await response.json();
        const product: Product = data.getbyid
        setProduct(product); // Stocker les données dans l'état
        console.log("les donnees", data)
      } catch (err) {
        console.error("Erreur lors de la récupération du produit", err);
        setError("Produit introuvable."); // Mettre à jour l'état de l'erreur
      }
    };

    fetchProduct(); // Appeler la fonction de récupération
  }, [params.id]); // Ajouter les dépendances pour que l'effet se déclenche lorsque l'ID change

  if (error) {
    return <p>{error}</p>; // Afficher le message d'erreur s'il existe
  }

  if (!product) {
    return <p>Loading...</p>; // Afficher un message de chargement pendant la récupération
  }

  return (
    <div className="product-detail-page">
      <Card>
      <Card.Header>
          {/* Appeler le composant ResponsiveCarousel avec la liste des images */}
          <ResponsiveCarousel files={product.image} />
        </Card.Header>
       <Card.Body>
        <h1>{product.Ref}</h1>
        <p>{product.Description}</p>
        <p>Price: ${product.Price}</p>
        <p>Quantity: {product.Qnt}</p>
        </Card.Body>
       
      </Card>
    </div>
  );
};

export default ProductDetailPage;
