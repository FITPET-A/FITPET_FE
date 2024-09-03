import { useMutation } from "@tanstack/react-query";
import postProposal, { PostProposalProps } from "../proposalAPI";

const usePostProposal = () =>
  useMutation({
    mutationFn: ({ name, email, phoneNum, comment }: PostProposalProps) =>
      postProposal({
        name,
        email,
        phoneNum,
        comment,
      }),
  });

export default usePostProposal;
