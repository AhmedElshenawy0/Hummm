export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  GraphQLStringOrFloat: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type Article = {
  __typename?: 'Article';
  category?: Maybe<Category>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  episodes?: Maybe<Shows>;
  id?: Maybe<Scalars['ID']['output']>;
  press_link?: Maybe<Scalars['String']['output']>;
  shows?: Maybe<Shows>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status: Scalars['String']['output'];
  translations?: Maybe<Array<Maybe<Article_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
  type?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
  /** Youtube video id like: zxALE96rR-8  */
  video?: Maybe<Scalars['String']['output']>;
};


export type ArticleCategoryArgs = {
  filter?: InputMaybe<Category_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ArticleEpisodesArgs = {
  filter?: InputMaybe<Shows_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ArticleShowsArgs = {
  filter?: InputMaybe<Shows_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ArticleTranslationsArgs = {
  filter?: InputMaybe<Article_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ArticleUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ArticleUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Article_Aggregated = {
  __typename?: 'Article_aggregated';
  avg?: Maybe<Article_Aggregated_Fields>;
  avgDistinct?: Maybe<Article_Aggregated_Fields>;
  count?: Maybe<Article_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Article_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Article_Aggregated_Fields>;
  min?: Maybe<Article_Aggregated_Fields>;
  sum?: Maybe<Article_Aggregated_Fields>;
  sumDistinct?: Maybe<Article_Aggregated_Fields>;
};

export type Article_Aggregated_Count = {
  __typename?: 'Article_aggregated_count';
  category?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  episodes?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  press_link?: Maybe<Scalars['Int']['output']>;
  shows?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
  /** Youtube video id like: zxALE96rR-8  */
  video?: Maybe<Scalars['Int']['output']>;
};

export type Article_Aggregated_Fields = {
  __typename?: 'Article_aggregated_fields';
  category?: Maybe<Scalars['Float']['output']>;
  episodes?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  shows?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Article_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Article_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Article_Filter>>>;
  category?: InputMaybe<Category_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  episodes?: InputMaybe<Shows_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  press_link?: InputMaybe<String_Filter_Operators>;
  shows?: InputMaybe<Shows_Filter>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Article_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
  video?: InputMaybe<String_Filter_Operators>;
};

export type Article_Translations = {
  __typename?: 'Article_translations';
  Article_id?: Maybe<Article>;
  content?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<Directus_Files>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  languages_code?: Maybe<Languages>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Article_TranslationsArticle_IdArgs = {
  filter?: InputMaybe<Article_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Article_TranslationsCoverArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Article_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Article_Translations_Aggregated = {
  __typename?: 'Article_translations_aggregated';
  avg?: Maybe<Article_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Article_Translations_Aggregated_Fields>;
  count?: Maybe<Article_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Article_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Article_Translations_Aggregated_Fields>;
  min?: Maybe<Article_Translations_Aggregated_Fields>;
  sum?: Maybe<Article_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Article_Translations_Aggregated_Fields>;
};

export type Article_Translations_Aggregated_Count = {
  __typename?: 'Article_translations_aggregated_count';
  Article_id?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['Int']['output']>;
  cover?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  languages_code?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Article_Translations_Aggregated_Fields = {
  __typename?: 'Article_translations_aggregated_fields';
  Article_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Article_Translations_Filter = {
  Article_id?: InputMaybe<Article_Filter>;
  _and?: InputMaybe<Array<InputMaybe<Article_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Article_Translations_Filter>>>;
  content?: InputMaybe<String_Filter_Operators>;
  cover?: InputMaybe<Directus_Files_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Career = {
  __typename?: 'Career';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status: Scalars['String']['output'];
  translations?: Maybe<Array<Maybe<Career_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type CareerTranslationsArgs = {
  filter?: InputMaybe<Career_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CareerUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CareerUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Career_Aggregated = {
  __typename?: 'Career_aggregated';
  avg?: Maybe<Career_Aggregated_Fields>;
  avgDistinct?: Maybe<Career_Aggregated_Fields>;
  count?: Maybe<Career_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Career_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Career_Aggregated_Fields>;
  min?: Maybe<Career_Aggregated_Fields>;
  sum?: Maybe<Career_Aggregated_Fields>;
  sumDistinct?: Maybe<Career_Aggregated_Fields>;
};

export type Career_Aggregated_Count = {
  __typename?: 'Career_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Career_Aggregated_Fields = {
  __typename?: 'Career_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Career_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Career_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Career_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Career_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Career_Translations = {
  __typename?: 'Career_translations';
  Career_id?: Maybe<Career>;
  content?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  languages_id?: Maybe<Languages>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Career_TranslationsCareer_IdArgs = {
  filter?: InputMaybe<Career_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Career_TranslationsLanguages_IdArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Career_Translations_Aggregated = {
  __typename?: 'Career_translations_aggregated';
  avg?: Maybe<Career_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Career_Translations_Aggregated_Fields>;
  count?: Maybe<Career_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Career_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Career_Translations_Aggregated_Fields>;
  min?: Maybe<Career_Translations_Aggregated_Fields>;
  sum?: Maybe<Career_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Career_Translations_Aggregated_Fields>;
};

export type Career_Translations_Aggregated_Count = {
  __typename?: 'Career_translations_aggregated_count';
  Career_id?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  languages_id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Career_Translations_Aggregated_Fields = {
  __typename?: 'Career_translations_aggregated_fields';
  Career_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Career_Translations_Filter = {
  Career_id?: InputMaybe<Career_Filter>;
  _and?: InputMaybe<Array<InputMaybe<Career_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Career_Translations_Filter>>>;
  content?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_id?: InputMaybe<Languages_Filter>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Mutation = {
  __typename?: 'Mutation';
  create_Contact_item?: Maybe<Scalars['Boolean']['output']>;
  create_Contact_items?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreate_Contact_ItemArgs = {
  data: Create_Contact_Input;
};


export type MutationCreate_Contact_ItemsArgs = {
  data?: InputMaybe<Array<Create_Contact_Input>>;
};

export type Query = {
  __typename?: 'Query';
  Article: Array<Article>;
  Article_aggregated: Array<Article_Aggregated>;
  Article_by_id?: Maybe<Article>;
  Article_translations: Array<Article_Translations>;
  Article_translations_aggregated: Array<Article_Translations_Aggregated>;
  Article_translations_by_id?: Maybe<Article_Translations>;
  Career: Array<Career>;
  Career_aggregated: Array<Career_Aggregated>;
  Career_by_id?: Maybe<Career>;
  Career_translations: Array<Career_Translations>;
  Career_translations_aggregated: Array<Career_Translations_Aggregated>;
  Career_translations_by_id?: Maybe<Career_Translations>;
  about?: Maybe<About>;
  about_translations: Array<About_Translations>;
  about_translations_aggregated: Array<About_Translations_Aggregated>;
  about_translations_by_id?: Maybe<About_Translations>;
  category: Array<Category>;
  category_aggregated: Array<Category_Aggregated>;
  category_by_id?: Maybe<Category>;
  category_translations: Array<Category_Translations>;
  category_translations_aggregated: Array<Category_Translations_Aggregated>;
  category_translations_by_id?: Maybe<Category_Translations>;
  homepage?: Maybe<Homepage>;
  homepage_translations: Array<Homepage_Translations>;
  homepage_translations_aggregated: Array<Homepage_Translations_Aggregated>;
  homepage_translations_by_id?: Maybe<Homepage_Translations>;
  homepage_translations_files: Array<Homepage_Translations_Files>;
  homepage_translations_files_1: Array<Homepage_Translations_Files_1>;
  homepage_translations_files_1_aggregated: Array<Homepage_Translations_Files_1_Aggregated>;
  homepage_translations_files_1_by_id?: Maybe<Homepage_Translations_Files_1>;
  homepage_translations_files_aggregated: Array<Homepage_Translations_Files_Aggregated>;
  homepage_translations_files_by_id?: Maybe<Homepage_Translations_Files>;
  languages: Array<Languages>;
  languages_aggregated: Array<Languages_Aggregated>;
  languages_by_id?: Maybe<Languages>;
  pages: Array<Pages>;
  pages_aggregated: Array<Pages_Aggregated>;
  pages_by_id?: Maybe<Pages>;
  pages_translations: Array<Pages_Translations>;
  pages_translations_aggregated: Array<Pages_Translations_Aggregated>;
  pages_translations_by_id?: Maybe<Pages_Translations>;
  posters?: Maybe<Posters>;
  posters_translations: Array<Posters_Translations>;
  posters_translations_aggregated: Array<Posters_Translations_Aggregated>;
  posters_translations_by_id?: Maybe<Posters_Translations>;
  shows: Array<Shows>;
  shows_aggregated: Array<Shows_Aggregated>;
  shows_by_id?: Maybe<Shows>;
  shows_translations: Array<Shows_Translations>;
  shows_translations_aggregated: Array<Shows_Translations_Aggregated>;
  shows_translations_by_id?: Maybe<Shows_Translations>;
  team: Array<Team>;
  team_aggregated: Array<Team_Aggregated>;
  team_by_id?: Maybe<Team>;
  team_translations: Array<Team_Translations>;
  team_translations_aggregated: Array<Team_Translations_Aggregated>;
  team_translations_by_id?: Maybe<Team_Translations>;
};


export type QueryArticleArgs = {
  filter?: InputMaybe<Article_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryArticle_AggregatedArgs = {
  filter?: InputMaybe<Article_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryArticle_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryArticle_TranslationsArgs = {
  filter?: InputMaybe<Article_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryArticle_Translations_AggregatedArgs = {
  filter?: InputMaybe<Article_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryArticle_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCareerArgs = {
  filter?: InputMaybe<Career_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCareer_AggregatedArgs = {
  filter?: InputMaybe<Career_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCareer_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCareer_TranslationsArgs = {
  filter?: InputMaybe<Career_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCareer_Translations_AggregatedArgs = {
  filter?: InputMaybe<Career_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCareer_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAbout_TranslationsArgs = {
  filter?: InputMaybe<About_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAbout_Translations_AggregatedArgs = {
  filter?: InputMaybe<About_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAbout_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategoryArgs = {
  filter?: InputMaybe<Category_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategory_AggregatedArgs = {
  filter?: InputMaybe<Category_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategory_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategory_TranslationsArgs = {
  filter?: InputMaybe<Category_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategory_Translations_AggregatedArgs = {
  filter?: InputMaybe<Category_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategory_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHomepage_TranslationsArgs = {
  filter?: InputMaybe<Homepage_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHomepage_Translations_AggregatedArgs = {
  filter?: InputMaybe<Homepage_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHomepage_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHomepage_Translations_FilesArgs = {
  filter?: InputMaybe<Homepage_Translations_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHomepage_Translations_Files_1Args = {
  filter?: InputMaybe<Homepage_Translations_Files_1_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHomepage_Translations_Files_1_AggregatedArgs = {
  filter?: InputMaybe<Homepage_Translations_Files_1_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHomepage_Translations_Files_1_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHomepage_Translations_Files_AggregatedArgs = {
  filter?: InputMaybe<Homepage_Translations_Files_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHomepage_Translations_Files_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLanguagesArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLanguages_AggregatedArgs = {
  filter?: InputMaybe<Languages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLanguages_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPagesArgs = {
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPages_AggregatedArgs = {
  filter?: InputMaybe<Pages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPages_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPages_TranslationsArgs = {
  filter?: InputMaybe<Pages_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPages_Translations_AggregatedArgs = {
  filter?: InputMaybe<Pages_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPages_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPosters_TranslationsArgs = {
  filter?: InputMaybe<Posters_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPosters_Translations_AggregatedArgs = {
  filter?: InputMaybe<Posters_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPosters_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryShowsArgs = {
  filter?: InputMaybe<Shows_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryShows_AggregatedArgs = {
  filter?: InputMaybe<Shows_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryShows_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryShows_TranslationsArgs = {
  filter?: InputMaybe<Shows_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryShows_Translations_AggregatedArgs = {
  filter?: InputMaybe<Shows_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryShows_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTeamArgs = {
  filter?: InputMaybe<Team_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTeam_AggregatedArgs = {
  filter?: InputMaybe<Team_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTeam_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTeam_TranslationsArgs = {
  filter?: InputMaybe<Team_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTeam_Translations_AggregatedArgs = {
  filter?: InputMaybe<Team_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTeam_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
};

export type About = {
  __typename?: 'about';
  id?: Maybe<Scalars['ID']['output']>;
  translations?: Maybe<Array<Maybe<About_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
};


export type AboutTranslationsArgs = {
  filter?: InputMaybe<About_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Filter = {
  _and?: InputMaybe<Array<InputMaybe<About_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<About_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  translations?: InputMaybe<About_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type About_Translations = {
  __typename?: 'about_translations';
  about_id?: Maybe<About>;
  id?: Maybe<Scalars['ID']['output']>;
  languages_code?: Maybe<Languages>;
};


export type About_TranslationsAbout_IdArgs = {
  filter?: InputMaybe<About_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type About_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Translations_Aggregated = {
  __typename?: 'about_translations_aggregated';
  avg?: Maybe<About_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<About_Translations_Aggregated_Fields>;
  count?: Maybe<About_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<About_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<About_Translations_Aggregated_Fields>;
  min?: Maybe<About_Translations_Aggregated_Fields>;
  sum?: Maybe<About_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<About_Translations_Aggregated_Fields>;
};

export type About_Translations_Aggregated_Count = {
  __typename?: 'about_translations_aggregated_count';
  about_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  languages_code?: Maybe<Scalars['Int']['output']>;
};

export type About_Translations_Aggregated_Fields = {
  __typename?: 'about_translations_aggregated_fields';
  about_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type About_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<About_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<About_Translations_Filter>>>;
  about_id?: InputMaybe<About_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
};

export type Category = {
  __typename?: 'category';
  articles?: Maybe<Array<Maybe<Article>>>;
  articles_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']['output']>;
  slug: Scalars['String']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status: Scalars['String']['output'];
  translations?: Maybe<Array<Maybe<Category_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type CategoryArticlesArgs = {
  filter?: InputMaybe<Article_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryTranslationsArgs = {
  filter?: InputMaybe<Category_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Category_Aggregated = {
  __typename?: 'category_aggregated';
  avg?: Maybe<Category_Aggregated_Fields>;
  avgDistinct?: Maybe<Category_Aggregated_Fields>;
  count?: Maybe<Category_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Category_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Category_Aggregated_Fields>;
  min?: Maybe<Category_Aggregated_Fields>;
  sum?: Maybe<Category_Aggregated_Fields>;
  sumDistinct?: Maybe<Category_Aggregated_Fields>;
};

export type Category_Aggregated_Count = {
  __typename?: 'category_aggregated_count';
  articles?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Category_Aggregated_Fields = {
  __typename?: 'category_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Category_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Category_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Category_Filter>>>;
  articles?: InputMaybe<Article_Filter>;
  articles_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Category_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Category_Translations = {
  __typename?: 'category_translations';
  category_id?: Maybe<Category>;
  cover?: Maybe<Directus_Files>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  languages_code?: Maybe<Languages>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Category_TranslationsCategory_IdArgs = {
  filter?: InputMaybe<Category_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Category_TranslationsCoverArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Category_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Category_Translations_Aggregated = {
  __typename?: 'category_translations_aggregated';
  avg?: Maybe<Category_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Category_Translations_Aggregated_Fields>;
  count?: Maybe<Category_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Category_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Category_Translations_Aggregated_Fields>;
  min?: Maybe<Category_Translations_Aggregated_Fields>;
  sum?: Maybe<Category_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Category_Translations_Aggregated_Fields>;
};

export type Category_Translations_Aggregated_Count = {
  __typename?: 'category_translations_aggregated_count';
  category_id?: Maybe<Scalars['Int']['output']>;
  cover?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  languages_code?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Category_Translations_Aggregated_Fields = {
  __typename?: 'category_translations_aggregated_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Category_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Category_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Category_Translations_Filter>>>;
  category_id?: InputMaybe<Category_Filter>;
  cover?: InputMaybe<Directus_Files_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Create_Contact_Input = {
  career?: InputMaybe<Scalars['Int']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: 'datetime_functions';
  day?: Maybe<Scalars['Int']['output']>;
  hour?: Maybe<Scalars['Int']['output']>;
  minute?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  second?: Maybe<Scalars['Int']['output']>;
  week?: Maybe<Scalars['Int']['output']>;
  weekday?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type Datetime_FunctionsInput = {
  day?: InputMaybe<Scalars['Int']['input']>;
  hour?: InputMaybe<Scalars['Int']['input']>;
  minute?: InputMaybe<Scalars['Int']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  second?: InputMaybe<Scalars['Int']['input']>;
  week?: InputMaybe<Scalars['Int']['input']>;
  weekday?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type Directus_Files = {
  __typename?: 'directus_files';
  charset?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  embed?: Maybe<Scalars['String']['output']>;
  filename_disk?: Maybe<Scalars['String']['output']>;
  filename_download: Scalars['String']['output'];
  filesize?: Maybe<Scalars['String']['output']>;
  folder?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  metadata_func?: Maybe<Count_Functions>;
  modified_by?: Maybe<Directus_Users>;
  modified_on: Scalars['Date']['output'];
  modified_on_func?: Maybe<Datetime_Functions>;
  storage: Scalars['String']['output'];
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uploaded_by?: Maybe<Directus_Users>;
  uploaded_on: Scalars['Date']['output'];
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars['Int']['output']>;
};


export type Directus_FilesModified_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FilesUploaded_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<String_Filter_Operators>;
  folder?: InputMaybe<String_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<Directus_Users_Filter>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<Directus_Users_Filter>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Users = {
  __typename?: 'directus_users';
  first_name?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
};

export type Directus_Users_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  first_name?: InputMaybe<String_Filter_Operators>;
  last_name?: InputMaybe<String_Filter_Operators>;
};

export type Homepage = {
  __typename?: 'homepage';
  id?: Maybe<Scalars['ID']['output']>;
  translations?: Maybe<Array<Maybe<Homepage_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
};


export type HomepageTranslationsArgs = {
  filter?: InputMaybe<Homepage_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Homepage_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Homepage_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Homepage_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  translations?: InputMaybe<Homepage_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Homepage_Translations = {
  __typename?: 'homepage_translations';
  brands_list?: Maybe<Array<Maybe<Homepage_Translations_Files_1>>>;
  brands_list_func?: Maybe<Count_Functions>;
  home_about_description?: Maybe<Scalars['String']['output']>;
  home_about_title?: Maybe<Scalars['String']['output']>;
  home_intro_cover?: Maybe<Directus_Files>;
  home_intro_title?: Maybe<Scalars['String']['output']>;
  home_intro_url?: Maybe<Scalars['String']['output']>;
  homepage_id?: Maybe<Homepage>;
  id?: Maybe<Scalars['ID']['output']>;
  languages_code?: Maybe<Languages>;
};


export type Homepage_TranslationsBrands_ListArgs = {
  filter?: InputMaybe<Homepage_Translations_Files_1_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Homepage_TranslationsHome_Intro_CoverArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Homepage_TranslationsHomepage_IdArgs = {
  filter?: InputMaybe<Homepage_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Homepage_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Homepage_Translations_Aggregated = {
  __typename?: 'homepage_translations_aggregated';
  avg?: Maybe<Homepage_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Homepage_Translations_Aggregated_Fields>;
  count?: Maybe<Homepage_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Homepage_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Homepage_Translations_Aggregated_Fields>;
  min?: Maybe<Homepage_Translations_Aggregated_Fields>;
  sum?: Maybe<Homepage_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Homepage_Translations_Aggregated_Fields>;
};

export type Homepage_Translations_Aggregated_Count = {
  __typename?: 'homepage_translations_aggregated_count';
  brands_list?: Maybe<Scalars['Int']['output']>;
  home_about_description?: Maybe<Scalars['Int']['output']>;
  home_about_title?: Maybe<Scalars['Int']['output']>;
  home_intro_cover?: Maybe<Scalars['Int']['output']>;
  home_intro_title?: Maybe<Scalars['Int']['output']>;
  home_intro_url?: Maybe<Scalars['Int']['output']>;
  homepage_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  languages_code?: Maybe<Scalars['Int']['output']>;
};

export type Homepage_Translations_Aggregated_Fields = {
  __typename?: 'homepage_translations_aggregated_fields';
  homepage_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Homepage_Translations_Files = {
  __typename?: 'homepage_translations_files';
  directus_files_id?: Maybe<Directus_Files>;
  homepage_translations_id?: Maybe<Homepage_Translations>;
  id?: Maybe<Scalars['ID']['output']>;
};


export type Homepage_Translations_FilesDirectus_Files_IdArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Homepage_Translations_FilesHomepage_Translations_IdArgs = {
  filter?: InputMaybe<Homepage_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Homepage_Translations_Files_1 = {
  __typename?: 'homepage_translations_files_1';
  directus_files_id?: Maybe<Directus_Files>;
  homepage_translations_id?: Maybe<Homepage_Translations>;
  id?: Maybe<Scalars['ID']['output']>;
};


export type Homepage_Translations_Files_1Directus_Files_IdArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Homepage_Translations_Files_1Homepage_Translations_IdArgs = {
  filter?: InputMaybe<Homepage_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Homepage_Translations_Files_1_Aggregated = {
  __typename?: 'homepage_translations_files_1_aggregated';
  avg?: Maybe<Homepage_Translations_Files_1_Aggregated_Fields>;
  avgDistinct?: Maybe<Homepage_Translations_Files_1_Aggregated_Fields>;
  count?: Maybe<Homepage_Translations_Files_1_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Homepage_Translations_Files_1_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Homepage_Translations_Files_1_Aggregated_Fields>;
  min?: Maybe<Homepage_Translations_Files_1_Aggregated_Fields>;
  sum?: Maybe<Homepage_Translations_Files_1_Aggregated_Fields>;
  sumDistinct?: Maybe<Homepage_Translations_Files_1_Aggregated_Fields>;
};

export type Homepage_Translations_Files_1_Aggregated_Count = {
  __typename?: 'homepage_translations_files_1_aggregated_count';
  directus_files_id?: Maybe<Scalars['Int']['output']>;
  homepage_translations_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type Homepage_Translations_Files_1_Aggregated_Fields = {
  __typename?: 'homepage_translations_files_1_aggregated_fields';
  homepage_translations_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Homepage_Translations_Files_1_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Homepage_Translations_Files_1_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Homepage_Translations_Files_1_Filter>>>;
  directus_files_id?: InputMaybe<Directus_Files_Filter>;
  homepage_translations_id?: InputMaybe<Homepage_Translations_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type Homepage_Translations_Files_Aggregated = {
  __typename?: 'homepage_translations_files_aggregated';
  avg?: Maybe<Homepage_Translations_Files_Aggregated_Fields>;
  avgDistinct?: Maybe<Homepage_Translations_Files_Aggregated_Fields>;
  count?: Maybe<Homepage_Translations_Files_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Homepage_Translations_Files_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Homepage_Translations_Files_Aggregated_Fields>;
  min?: Maybe<Homepage_Translations_Files_Aggregated_Fields>;
  sum?: Maybe<Homepage_Translations_Files_Aggregated_Fields>;
  sumDistinct?: Maybe<Homepage_Translations_Files_Aggregated_Fields>;
};

export type Homepage_Translations_Files_Aggregated_Count = {
  __typename?: 'homepage_translations_files_aggregated_count';
  directus_files_id?: Maybe<Scalars['Int']['output']>;
  homepage_translations_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type Homepage_Translations_Files_Aggregated_Fields = {
  __typename?: 'homepage_translations_files_aggregated_fields';
  homepage_translations_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Homepage_Translations_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Homepage_Translations_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Homepage_Translations_Files_Filter>>>;
  directus_files_id?: InputMaybe<Directus_Files_Filter>;
  homepage_translations_id?: InputMaybe<Homepage_Translations_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type Homepage_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Homepage_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Homepage_Translations_Filter>>>;
  brands_list?: InputMaybe<Homepage_Translations_Files_1_Filter>;
  brands_list_func?: InputMaybe<Count_Function_Filter_Operators>;
  home_about_description?: InputMaybe<String_Filter_Operators>;
  home_about_title?: InputMaybe<String_Filter_Operators>;
  home_intro_cover?: InputMaybe<Directus_Files_Filter>;
  home_intro_title?: InputMaybe<String_Filter_Operators>;
  home_intro_url?: InputMaybe<String_Filter_Operators>;
  homepage_id?: InputMaybe<Homepage_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
};

export type Languages = {
  __typename?: 'languages';
  code?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Languages_Aggregated = {
  __typename?: 'languages_aggregated';
  count?: Maybe<Languages_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Languages_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Languages_Aggregated_Count = {
  __typename?: 'languages_aggregated_count';
  code?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
};

export type Languages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Languages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Languages_Filter>>>;
  code?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Pages = {
  __typename?: 'pages';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status: Scalars['String']['output'];
  translations?: Maybe<Array<Maybe<Pages_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type PagesTranslationsArgs = {
  filter?: InputMaybe<Pages_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PagesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PagesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Pages_Aggregated = {
  __typename?: 'pages_aggregated';
  avg?: Maybe<Pages_Aggregated_Fields>;
  avgDistinct?: Maybe<Pages_Aggregated_Fields>;
  count?: Maybe<Pages_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Pages_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Pages_Aggregated_Fields>;
  min?: Maybe<Pages_Aggregated_Fields>;
  sum?: Maybe<Pages_Aggregated_Fields>;
  sumDistinct?: Maybe<Pages_Aggregated_Fields>;
};

export type Pages_Aggregated_Count = {
  __typename?: 'pages_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Pages_Aggregated_Fields = {
  __typename?: 'pages_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Pages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Pages_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Pages_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Pages_Translations = {
  __typename?: 'pages_translations';
  content?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  languages_code?: Maybe<Languages>;
  pages_id?: Maybe<Pages>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Pages_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Pages_TranslationsPages_IdArgs = {
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Pages_Translations_Aggregated = {
  __typename?: 'pages_translations_aggregated';
  avg?: Maybe<Pages_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Pages_Translations_Aggregated_Fields>;
  count?: Maybe<Pages_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Pages_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Pages_Translations_Aggregated_Fields>;
  min?: Maybe<Pages_Translations_Aggregated_Fields>;
  sum?: Maybe<Pages_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Pages_Translations_Aggregated_Fields>;
};

export type Pages_Translations_Aggregated_Count = {
  __typename?: 'pages_translations_aggregated_count';
  content?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  languages_code?: Maybe<Scalars['Int']['output']>;
  pages_id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Pages_Translations_Aggregated_Fields = {
  __typename?: 'pages_translations_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  pages_id?: Maybe<Scalars['Float']['output']>;
};

export type Pages_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pages_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Pages_Translations_Filter>>>;
  content?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  pages_id?: InputMaybe<Pages_Filter>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Posters = {
  __typename?: 'posters';
  id?: Maybe<Scalars['ID']['output']>;
  translations?: Maybe<Array<Maybe<Posters_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
};


export type PostersTranslationsArgs = {
  filter?: InputMaybe<Posters_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Posters_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Posters_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Posters_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  translations?: InputMaybe<Posters_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Posters_Translations = {
  __typename?: 'posters_translations';
  id?: Maybe<Scalars['ID']['output']>;
  languages_code?: Maybe<Languages>;
  normal2_cover?: Maybe<Directus_Files>;
  normal2_title?: Maybe<Scalars['String']['output']>;
  normal2_url?: Maybe<Scalars['String']['output']>;
  normal_cover?: Maybe<Directus_Files>;
  normal_title?: Maybe<Scalars['String']['output']>;
  normal_url?: Maybe<Scalars['String']['output']>;
  posters_id?: Maybe<Posters>;
  wide2_cover?: Maybe<Directus_Files>;
  wide2_title?: Maybe<Scalars['String']['output']>;
  wide2_url?: Maybe<Scalars['String']['output']>;
  wide_cover?: Maybe<Directus_Files>;
  wide_title?: Maybe<Scalars['String']['output']>;
  wide_url?: Maybe<Scalars['String']['output']>;
};


export type Posters_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Posters_TranslationsNormal2_CoverArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Posters_TranslationsNormal_CoverArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Posters_TranslationsPosters_IdArgs = {
  filter?: InputMaybe<Posters_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Posters_TranslationsWide2_CoverArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Posters_TranslationsWide_CoverArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Posters_Translations_Aggregated = {
  __typename?: 'posters_translations_aggregated';
  avg?: Maybe<Posters_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Posters_Translations_Aggregated_Fields>;
  count?: Maybe<Posters_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Posters_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Posters_Translations_Aggregated_Fields>;
  min?: Maybe<Posters_Translations_Aggregated_Fields>;
  sum?: Maybe<Posters_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Posters_Translations_Aggregated_Fields>;
};

export type Posters_Translations_Aggregated_Count = {
  __typename?: 'posters_translations_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  languages_code?: Maybe<Scalars['Int']['output']>;
  /** Ratio (7-5) - Recommended size ( 700:500 ) */
  normal2_cover?: Maybe<Scalars['Int']['output']>;
  normal2_title?: Maybe<Scalars['Int']['output']>;
  normal2_url?: Maybe<Scalars['Int']['output']>;
  /** Ratio (7-5) - Recommended size ( 700:500 ) */
  normal_cover?: Maybe<Scalars['Int']['output']>;
  normal_title?: Maybe<Scalars['Int']['output']>;
  normal_url?: Maybe<Scalars['Int']['output']>;
  posters_id?: Maybe<Scalars['Int']['output']>;
  /** Ratio (11-3) - Recommended size ( 1364:372 ) */
  wide2_cover?: Maybe<Scalars['Int']['output']>;
  wide2_title?: Maybe<Scalars['Int']['output']>;
  wide2_url?: Maybe<Scalars['Int']['output']>;
  /** Ratio (11-3) - Recommended size ( 1364:372 ) */
  wide_cover?: Maybe<Scalars['Int']['output']>;
  wide_title?: Maybe<Scalars['Int']['output']>;
  wide_url?: Maybe<Scalars['Int']['output']>;
};

export type Posters_Translations_Aggregated_Fields = {
  __typename?: 'posters_translations_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  posters_id?: Maybe<Scalars['Float']['output']>;
};

export type Posters_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Posters_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Posters_Translations_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  normal2_cover?: InputMaybe<Directus_Files_Filter>;
  normal2_title?: InputMaybe<String_Filter_Operators>;
  normal2_url?: InputMaybe<String_Filter_Operators>;
  normal_cover?: InputMaybe<Directus_Files_Filter>;
  normal_title?: InputMaybe<String_Filter_Operators>;
  normal_url?: InputMaybe<String_Filter_Operators>;
  posters_id?: InputMaybe<Posters_Filter>;
  wide2_cover?: InputMaybe<Directus_Files_Filter>;
  wide2_title?: InputMaybe<String_Filter_Operators>;
  wide2_url?: InputMaybe<String_Filter_Operators>;
  wide_cover?: InputMaybe<Directus_Files_Filter>;
  wide_title?: InputMaybe<String_Filter_Operators>;
  wide_url?: InputMaybe<String_Filter_Operators>;
};

export type Shows = {
[x: string]: any;
  __typename?: 'shows';
  all_episodes?: Maybe<Array<Maybe<Article>>>;
  all_episodes_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  episodes?: Maybe<Array<Maybe<Shows>>>;
  id?: Maybe<Scalars['ID']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status: Scalars['String']['output'];
  translations?: Maybe<Array<Maybe<Shows_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type ShowsAll_EpisodesArgs = {
  filter?: InputMaybe<Article_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ShowsEpisodesArgs = {
  filter?: InputMaybe<Shows_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ShowsTranslationsArgs = {
  filter?: InputMaybe<Shows_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ShowsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ShowsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Shows_Aggregated = {
  __typename?: 'shows_aggregated';
  avg?: Maybe<Shows_Aggregated_Fields>;
  avgDistinct?: Maybe<Shows_Aggregated_Fields>;
  count?: Maybe<Shows_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Shows_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Shows_Aggregated_Fields>;
  min?: Maybe<Shows_Aggregated_Fields>;
  sum?: Maybe<Shows_Aggregated_Fields>;
  sumDistinct?: Maybe<Shows_Aggregated_Fields>;
};

export type Shows_Aggregated_Count = {
  __typename?: 'shows_aggregated_count';
  all_episodes?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  episodes?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Shows_Aggregated_Fields = {
  __typename?: 'shows_aggregated_fields';
  episodes?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Shows_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Shows_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Shows_Filter>>>;
  all_episodes?: InputMaybe<Article_Filter>;
  all_episodes_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  episodes?: InputMaybe<Shows_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Shows_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Shows_Translations = {
  __typename?: 'shows_translations';
  cover?: Maybe<Directus_Files>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  languages_code?: Maybe<Languages>;
  shows_id?: Maybe<Shows>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Shows_TranslationsCoverArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Shows_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Shows_TranslationsShows_IdArgs = {
  filter?: InputMaybe<Shows_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Shows_Translations_Aggregated = {
  __typename?: 'shows_translations_aggregated';
  avg?: Maybe<Shows_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Shows_Translations_Aggregated_Fields>;
  count?: Maybe<Shows_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Shows_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Shows_Translations_Aggregated_Fields>;
  min?: Maybe<Shows_Translations_Aggregated_Fields>;
  sum?: Maybe<Shows_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Shows_Translations_Aggregated_Fields>;
};

export type Shows_Translations_Aggregated_Count = {
  __typename?: 'shows_translations_aggregated_count';
  cover?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  languages_code?: Maybe<Scalars['Int']['output']>;
  shows_id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Shows_Translations_Aggregated_Fields = {
  __typename?: 'shows_translations_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  shows_id?: Maybe<Scalars['Float']['output']>;
};

export type Shows_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Shows_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Shows_Translations_Filter>>>;
  cover?: InputMaybe<Directus_Files_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  shows_id?: InputMaybe<Shows_Filter>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']['input']>;
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _ends_with?: InputMaybe<Scalars['String']['input']>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _ncontains?: InputMaybe<Scalars['String']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nends_with?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _nstarts_with?: InputMaybe<Scalars['String']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
  _starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Team = {
  __typename?: 'team';
  cover?: Maybe<Directus_Files>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status: Scalars['String']['output'];
  translations?: Maybe<Array<Maybe<Team_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
};


export type TeamCoverArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TeamTranslationsArgs = {
  filter?: InputMaybe<Team_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Team_Aggregated = {
  __typename?: 'team_aggregated';
  avg?: Maybe<Team_Aggregated_Fields>;
  avgDistinct?: Maybe<Team_Aggregated_Fields>;
  count?: Maybe<Team_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Team_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Team_Aggregated_Fields>;
  min?: Maybe<Team_Aggregated_Fields>;
  sum?: Maybe<Team_Aggregated_Fields>;
  sumDistinct?: Maybe<Team_Aggregated_Fields>;
};

export type Team_Aggregated_Count = {
  __typename?: 'team_aggregated_count';
  cover?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
};

export type Team_Aggregated_Fields = {
  __typename?: 'team_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Team_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Team_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Team_Filter>>>;
  cover?: InputMaybe<Directus_Files_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Team_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Team_Translations = {
  __typename?: 'team_translations';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  languages_code?: Maybe<Languages>;
  team_id?: Maybe<Team>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Team_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Team_TranslationsTeam_IdArgs = {
  filter?: InputMaybe<Team_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Team_Translations_Aggregated = {
  __typename?: 'team_translations_aggregated';
  avg?: Maybe<Team_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Team_Translations_Aggregated_Fields>;
  count?: Maybe<Team_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Team_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Team_Translations_Aggregated_Fields>;
  min?: Maybe<Team_Translations_Aggregated_Fields>;
  sum?: Maybe<Team_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Team_Translations_Aggregated_Fields>;
};

export type Team_Translations_Aggregated_Count = {
  __typename?: 'team_translations_aggregated_count';
  description?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  languages_code?: Maybe<Scalars['Int']['output']>;
  team_id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Team_Translations_Aggregated_Fields = {
  __typename?: 'team_translations_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  team_id?: Maybe<Scalars['Float']['output']>;
};

export type Team_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Team_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Team_Translations_Filter>>>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  team_id?: InputMaybe<Team_Filter>;
  title?: InputMaybe<String_Filter_Operators>;
};
