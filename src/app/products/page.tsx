import ProductList from "../components/ProductList";

interface ProductsPageProps {
  searchParams: Promise<{
    category?: string;
  }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const resolvedSearchParams = await searchParams;
  const category = resolvedSearchParams?.category;

  return (
    <div>
      <ProductList category={category} />
    </div>
  );
}