import { useMutation } from "@tanstack/react-query";
import postComparison, { PostComparisonProps } from "../comparisonAPI";

const usePostComparison = () =>
  useMutation({
    mutationFn: ({
      petName,
      petType,
      petSpecies,
      petAge,
      phoneNumber,
      comment,
      referSite,
      referUserId,
    }: PostComparisonProps) =>
      postComparison({
        petName,
        petType,
        petSpecies,
        petAge,
        phoneNumber,
        comment,
        referSite,
        referUserId,
      }),
  });

export default usePostComparison;
