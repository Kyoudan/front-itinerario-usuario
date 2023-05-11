import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { api } from "../api/api";

interface IProps {
  children: ReactNode;
}

interface ITagsAxios {
  data: {
    data: ITags[];
    count: number;
  };
}

interface ITags {
  name?: string;
  createdAt?: string;
  id?: number;
}

interface ICategoriesContext {
  categories: ITags[];
  getAllCategories: () => void;
}

const CategoriesContext = createContext({} as ICategoriesContext);

export const useAppCategoriesContext = () => {
  return useContext(CategoriesContext);
};

export const AppCategoriesProvider = ({ children }: IProps) => {
  const [categories, setCategories] = useState<ITags[]>([]);

  const getAllCategories = async () => {
    try {
      const result: ITagsAxios = await api.get("/posttags");
      setCategories(result.data.data);
    } catch {}
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories, getAllCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
