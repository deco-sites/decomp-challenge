import { ProductDetailsPage } from "apps/commerce/types.ts";
import { JSX } from "preact";

export interface Props {
  product: ProductDetailsPage | null;
  adDescription?: string;
  vertical?: boolean;
  animateImage?: boolean;
  highlight?: boolean;
}

export type ProductAd = JSX.Element;

const ANIMATE_IMAGE = "transition-transform transform hover:scale-125";

export function LoadingFallback() {
  return (
    <ProductAdSection
      product={{
        product: {
          name: "We will show the product soon",
          description: "Loading",
          offers: {
            "@type": "AggregateOffer",
            highPrice: 0,
            lowPrice: 0,
            offerCount: 0,
            offers: [],
          },
          sku: "0",
          productID: "0",
          image: [
            {
              url: "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg",
              "@type": "ImageObject",
            },
          ],
          "@type": "Product",
        },
        "@type": "ProductDetailsPage",
        breadcrumbList: {
          "@type": "BreadcrumbList",
          itemListElement: [],
          numberOfItems: 0,
        },
      }}
    />
  );
}

export default function ProductAdSection({
  product,
  adDescription,
  vertical = false,
  animateImage = false,
  highlight,
}: Props) {
  return (
    <div
      class={`p-2 flex flex-col justify-center items-center relative gap-4 w-fit border border-gray-700 rounded-md hover:border-teal-500 ${
        vertical ? "" : "lg:flex-row"
      }`}
    >
      <div class="relative overflow-hidden">
        <img
          class={`${animateImage ? ANIMATE_IMAGE : ""}`}
          width={280}
          height={420}
          src={product?.product.image ? product?.product.image[0].url : ""}
          decoding="async"
          loading="lazy"
        />
      </div>
      <div
        class={`flex flex-col gap-3 ${
          vertical ? "" : "lg:gap-4 lg:h-full lg:justify-start lg:mb-auto"
        }`}
      >
        <p class="text-xl font-bold text-gray-900">{product?.product.name}</p>
        <p class="text-base text-gray-600">
          {adDescription ? adDescription : product?.product.description}
        </p>
      </div>
      <div
        class={`flex flex-col gap-3 justify-center items-center ${
          vertical ? "" : "lg:h-full lg:justify-end lg:mt-auto lg:items-end"
        }`}
      >
        <p class="text-lg font-bold text-teal-500">
          {product?.product.offers?.highPrice}
        </p>
        <div
          class={`flex flex-col gap-3 justify-center items-center ${
            vertical ? "" : "lg:flex-row"
          }`}
        >
          <a
            href={product?.product.url}
            class="px-6 py-2 w-fit rounded-md border-teal-500 border no-underline text-teal-500 hover:bg-teal-500 hover:text-white"
          >
            Mais Detalhes
          </a>
          <a class="px-6 py-2 w-fit rounded-md border-teal-500 bg-teal-500 border no-underline text-white">
            Comprar
          </a>
        </div>
      </div>
      {highlight && (
        <p class="py-2 px-4 flex items-center justify-center absolute top-5 left-5 text-xs text-white bg-teal-600">
          Destaque
        </p>
      )}
    </div>
  );
}
