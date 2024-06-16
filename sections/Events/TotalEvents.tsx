import ShowProductEvents from "../../islands/ShowProductEvents/ShowProductEvents.tsx";
import { Props as Comments } from "../../loaders/comments/GetAllComments.ts";

export interface Props {
  total: Comments;
}
export default function TotalEvents({ total }: Props) {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="w-full max-w-2xl p-4 bg-gray-100 rounded-lg shadow-md text-center">
        <div className="text-lg font-semibold mb-2">
          Site saves: <span className="text-blue-600">{total.total}</span>
        </div>
        <ShowProductEvents />
      </div>
    </div>
  );
}
