import axiosInstance from "./axiosInstance";

type PostComparisonResponse = {
  result: string;
  message: string;
  data: {
    comparisonId: number;
    createdAt: string;
    petName: string;
    petType: string;
    petSpecies: string;
    petAge: number;
    phoneNumber: string;
    comment: string;
    status: string;
    referSite: string;
    referUserId: string;
  };
  statusCode: number;
};

export interface PostComparisonProps {
  petName: string;
  petType: string;
  petSpecies: string;
  petAge: number;
  phoneNumber: string;
  comment?: string;
  referSite?: string;
  referUserId?: string;
}

const postComparison = async ({
  petName,
  petType,
  petSpecies,
  petAge,
  phoneNumber,
  comment,
  referSite,
  referUserId,
}: PostComparisonProps): Promise<PostComparisonResponse> => {
  const response = await axiosInstance({
    url: "/comparison",
    method: "post",
    data: {
      petName,
      petType,
      petSpecies,
      petAge,
      phoneNumber,
      comment,
      referSite,
      referUserId,
    },
  });

  return response.data;
};

export default postComparison;
