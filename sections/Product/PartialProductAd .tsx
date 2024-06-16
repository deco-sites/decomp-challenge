import type { Section } from "deco/blocks/section.ts";
import { ImageWidget } from "apps/admin/widgets.ts";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";

export interface Props {
  productAds: Section[];
  message: string;
  image: ImageWidget;
  buttonTitle: string;
  currentProduct?: number;
}

export default function PartialProductAd({
  productAds = [],
  message,
  image,
  buttonTitle,
  currentProduct = 0,
}: Props) {
  const productComponent = productAds[currentProduct];

  return (
    <div class="container flex flex-col w-full md:flex-row p-4 gap-2 justify-center items-center">
      <div class="w-full">
        <productComponent.Component {...productComponent.props} />
      </div>

      <div class="flex md:w-1/3 flex-col gap-4">
        <p>{message}</p>
        <img
          class="transition-transform transform hover:scale-125"
          src={image}
          width={30}
          height={30}
        ></img>
        <button
          {...usePartialSection({
            props: {
              currentProduct:
                currentProduct + 1 === productAds.length
                  ? 0
                  : currentProduct + 1,
            },
          })}
          class="px-5 py-2 text-white bg-teal-600 pointer text-xl font-bold w-full rounded"
        >
          {buttonTitle}
        </button>
      </div>
    </div>
  );
}
