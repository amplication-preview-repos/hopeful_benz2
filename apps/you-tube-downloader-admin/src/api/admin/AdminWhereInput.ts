import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AdminWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  passwordHash?: StringNullableFilter;
  role?: StringNullableFilter;
  username?: StringNullableFilter;
};
