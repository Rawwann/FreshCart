import { getProducts } from '@/services/product.service';
import RelatedProductsSlider from './RelatedProductsSlider';

export default async function RelatedProductsSection({ categoryId, currentProductId }: { categoryId: string, currentProductId: string }) {
  try {
    const relatedRes = await getProducts({
      categories: [categoryId],
      limit: 10
    });

    const products = relatedRes.data?.filter(
      (p: any) => p.id !== currentProductId && p._id !== currentProductId
    ) || [];

    if (products.length === 0) return null;

    return <RelatedProductsSlider products={products} />;
  } catch (error) {
    console.error("Related Products Error:", error);
    return null;
  }
}