export interface Props {
  productId: string;
}

export interface ProductCommentsDTO {
  product: number;
  comments: string[];
}

const GetCommentsByProductId = async (
  props: Props,
  _req: Request,
  _ctx: unknown
): Promise<ProductCommentsDTO> => {
  const response: ProductCommentsDTO = await fetch(
    `https://camp-api.deco.cx/event/${props.productId}`,
    {
      headers: {
        "x-api-key": "decomp-challenge",
      },
    }
  ).then((response) => response.json());

  const filteredComments = response.comments.filter((comment) => {
    return comment.length >= 5;
  });

  return {
    product: response.product,
    comments: filteredComments,
  };
};

export default GetCommentsByProductId;
