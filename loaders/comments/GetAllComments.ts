export interface Props {
  total: number;
}

const GetAllComments = async (
  _props: unknown,
  _req: Request,
  _ctx: unknown,
): Promise<Props> => {
  const response = await fetch(`https://camp-api.deco.cx/events`, {
    headers: {
      "x-api-key": "decomp-challenge",
    },
  }).then((response) => response.json());

  return {
    total: response.total,
  };
};

export default GetAllComments;
