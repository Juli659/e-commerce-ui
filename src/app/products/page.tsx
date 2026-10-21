import ProductList from "../components/ProductList"

export default async function ProductsPage(props: {
  searchParams: Promise<{ category?: string }>
}) {
  const searchParams = await props.searchParams;
  const category = searchParams.category;

  return (
    <div>
      <ProductList category={category} />
    </div>
  )
}