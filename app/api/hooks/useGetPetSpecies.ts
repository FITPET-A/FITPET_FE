import getPetSpecies, { GetPetSpeciesProps } from "@api/petAPI";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const useGetPetSpecies = ({ petType, petSpecies }: GetPetSpeciesProps) =>
  useQuery({
    queryKey: ["pet", petType, petSpecies],
    queryFn: () => getPetSpecies({ petType, petSpecies }),
    placeholderData: keepPreviousData,
  });

export default useGetPetSpecies;
