import axiosInstance from "./axiosInstance";

type GetPetSpeciesResponse = {
  result: string;
  message: string;
  data: {
    petSpeciesList: string[];
  };
  statusCode: number;
};

export interface GetPetSpeciesProps {
  petType: "DOG" | "CAT";
  petSpecies: string;
}

const getPetSpecies = async ({
  petType,
  petSpecies,
}: GetPetSpeciesProps): Promise<GetPetSpeciesResponse> => {
  const response = await axiosInstance({
    url: "/pet",
    method: "get",
    params: { petType, petSpecies },
  });
  return response.data;
};

export default getPetSpecies;
