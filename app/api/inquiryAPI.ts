import axiosInstance from "./axiosInstance";

type PostInquiryResponse = {
  result: string;
  message: string;
  data: {
    inquiryId: number;
    createdAt: string;
    name: string;
    email: string;
    phoneNum: string;
    comment: string;
    status: string;
  };
  statusCode: number;
};

export interface PostInquiryProps {
  name: string;
  email: string;
  phoneNum: string;
  comment: string;
}

const postInquiry = async ({
  name,
  email,
  phoneNum,
  comment,
}: PostInquiryProps): Promise<PostInquiryResponse> => {
  const response = await axiosInstance({
    url: "/inquiry",
    method: "post",
    data: { name, email, phoneNum, comment },
  });

  return response.data;
};

export default postInquiry;
