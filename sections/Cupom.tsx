export interface Props {
  couponCode: string;
  description: string;
}

export default function Cupom(props: Props) {
  return (
    <div class="card w-96 shadow-xl my-4 mx-auto bg-[#f8aa55]">
      <div class="card-body items-center text-center">
        <h2 class="card-title">{props.couponCode}</h2>
        <p class="py-4">{props.description}</p>
        <div class="card-actions">
          <button class="btn btn-primary">Copy code!</button>
        </div>
      </div>
    </div>
  );
}
