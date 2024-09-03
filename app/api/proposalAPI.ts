import axiosInstance from "./axiosInstance";

type PostProposalResponse = {
  result: string;
  message: string;
  data: string;
  statusCode: number;
};

export interface PostProposalProps {
  name: string;
  email: string;
  phoneNum?: string;
  comment: string;
}

const postProposal = async ({
  name,
  email,
  phoneNum,
  comment,
}: PostProposalProps): Promise<PostProposalResponse> => {
  const response = await axiosInstance({
    url: "/proposal",
    method: "post",
    data: { name, email, phoneNum, comment },
  });

  return response.data;
};

export default postProposal;
