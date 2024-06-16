import { useEffect, useState } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { invoke } from "../../runtime.ts";

interface ProductComments {
  product: number;
  comments: string[];
}

export default function ShowProductEvents() {
  const [inputValue, setInputValue] = useState("");
  const totalVotes = useSignal<ProductComments | null>(null);

  useEffect(() => {
    const interval = setTimeout(async () => {
      if (inputValue) {
        const response: ProductComments = await invoke.site.loaders.comments
          .GetCommentsByProductId({
            productId: inputValue,
          });

        totalVotes.value = response;
      }
    }, 1000);

    return () => {
      clearTimeout(interval);
    };
  }, [inputValue]);

  return (
    <div className="mt-4 mx-auto p-4 w-1/3 bg-gray-50 rounded-lg shadow-md">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue((e.target as HTMLInputElement).value)}
        className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter product ID"
      />
      {totalVotes.value && (
        <div className="text-left">
          <p className="text-lg font-semibold mb-2">Product: {inputValue}</p>
          {totalVotes.value.comments.map((comment, index) => (
            <p key={index} className="mb-1 text-gray-700">
              {comment}
            </p>
          ))}
          <p className="mt-2 font-bold">
            Total: {totalVotes.value.product} votes
          </p>
        </div>
      )}
    </div>
  );
}
