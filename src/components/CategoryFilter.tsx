
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter } from "lucide-react";
import { Category } from "@/types";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  const { t, isRTL, language } = useLanguage();

  return (
    <div className="w-full">
      <Select value={selectedCategory} onValueChange={onCategoryChange}>
        <SelectTrigger className={`w-full ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className="flex items-center gap-2">
            <Filter size={16} />
            <SelectValue placeholder={t("allCategories")} />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">{t("allCategories")}</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.id}>
              {category.name[language]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryFilter;
