import { useMutation } from "@tanstack/react-query";
import postInquiry, { PostInquiryProps } from "../inquiryAPI";

const usePostInquiry = () =>
  useMutation({
    mutationFn: ({ name, email, phoneNum, comment }: PostInquiryProps) =>
      postInquiry({
        name,
        email,
        phoneNum,
        comment,
      }),
  });

export default usePostInquiry;
