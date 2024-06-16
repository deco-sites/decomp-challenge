import { AppContext } from "../apps/site.ts";

export interface Props {
  productId: string;
  comment: string;
}

const postComments = async (props: Props, _req: Request, _ctx: AppContext) => {
  try {
    await fetch("https://camp-api.deco.cx/event", {
      method: "POST",
      headers: {
        "x-api-key": "decomp-challenge",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    });
  } catch (error) {
    throw new Error(error);
  }
};

export default postComments;
