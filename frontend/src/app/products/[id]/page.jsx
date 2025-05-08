// /app/products/[id]/page.js (Product Detail Page)
export default function ProductDetailPage({ params }) {
  const { id } = params;
  return (
    <main>
      <h2>Product Details for ID: {id}</h2>
    </main>
  );
}
