export type Maybe<T> = T | null;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  {[SubKey in K]?: Maybe<T[SubKey]>};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  {[SubKey in K]: Maybe<T[SubKey]>};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Board = {
  __typename?: 'Board';
  _id: Scalars['ID'];
  writer?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  contents: Scalars['String'];
  youtubeUrl: Scalars['String'];
  likeCount: Scalars['Int'];
  dislikeCount: Scalars['Int'];
  boardAddress?: Maybe<BoardAddress>;
  user?: Maybe<User>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type BoardAddress = {
  __typename?: 'BoardAddress';
  _id: Scalars['ID'];
  zipcode: Scalars['String'];
  address: Scalars['String'];
  addressDetail: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type BoardComment = {
  __typename?: 'BoardComment';
  _id: Scalars['ID'];
  writer?: Maybe<Scalars['String']>;
  contents: Scalars['String'];
  rating: Scalars['Float'];
  user?: Maybe<User>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type CreateBoardCommentInput = {
  writer?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  contents: Scalars['String'];
  rating: Scalars['Float'];
};

export type CreateBoardInput = {
  writer?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  contents: Scalars['String'];
  youtubeUrl?: Maybe<Scalars['String']>;
};

export type CreateUseditemInput = {
  name: Scalars['String'];
  remarks: Scalars['String'];
  contents: Scalars['String'];
  price: Scalars['Int'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type CreateUseditemQuestionAnswerInput = {
  contents: Scalars['String'];
};

export type CreateUseditemQuestionInput = {
  contents: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBoard: Board;
  deleteBoards: Array<Scalars['ID']>;
  dislikeBoard: Scalars['Int'];
  likeBoard: Scalars['Int'];
  updateBoard: Board;
  createBoardComment: BoardComment;
  deleteBoardComment: Scalars['ID'];
  updateBoardComment: BoardComment;
  createPointTransactionOfBuyingAndSelling: Useditem;
  createPointTransactionOfLoading: PointTransaction;
  createUseditem: Useditem;
  updateUseditem: Useditem;
  toggleUseditemPick: Scalars['Int'];
  createUseditemQuestion: UseditemQuestion;
  deleteUseditemQuestion: Scalars['ID'];
  updateUseditemQuestion: UseditemQuestion;
  createUseditemQuestionAnswer: UseditemQuestionAnswer;
  deleteUseditemQuestionAnswer: Scalars['String'];
  updateUseditemQuestionAnswer: UseditemQuestionAnswer;
  createUser: User;
  logoutUser: Scalars['Boolean'];
  resetUserPassword: Scalars['Boolean'];
  updateUser: Scalars['Boolean'];
};

export type MutationCreateBoardArgs = {
  createBoardInput: CreateBoardInput;
};

export type MutationDeleteBoardsArgs = {
  boardIds: Array<Scalars['ID']>;
};

export type MutationDislikeBoardArgs = {
  boardId: Scalars['ID'];
};

export type MutationLikeBoardArgs = {
  boardId: Scalars['ID'];
};

export type MutationUpdateBoardArgs = {
  updateBoardInput: UpdateBoardInput;
  password?: Maybe<Scalars['String']>;
  boardId: Scalars['ID'];
};

export type MutationCreateBoardCommentArgs = {
  createBoardCommentInput: CreateBoardCommentInput;
  boardId: Scalars['ID'];
};

export type MutationDeleteBoardCommentArgs = {
  password?: Maybe<Scalars['String']>;
  boardCommentId: Scalars['ID'];
};

export type MutationUpdateBoardCommentArgs = {
  updateBoardCommentInput: UpdateBoardCommentInput;
  password?: Maybe<Scalars['String']>;
  boardCommentId: Scalars['ID'];
};

export type MutationCreatePointTransactionOfBuyingAndSellingArgs = {
  useritemId: Scalars['ID'];
};

export type MutationCreatePointTransactionOfLoadingArgs = {
  impUid: Scalars['ID'];
};

export type MutationCreateUseditemArgs = {
  createUseditemInput: CreateUseditemInput;
};

export type MutationUpdateUseditemArgs = {
  updateUseditemInput: UpdateUseditemInput;
  useditemId: Scalars['ID'];
};

export type MutationToggleUseditemPickArgs = {
  useditemId: Scalars['ID'];
};

export type MutationCreateUseditemQuestionArgs = {
  createUseditemQuestionInput: CreateUseditemQuestionInput;
  useditemId: Scalars['ID'];
};

export type MutationDeleteUseditemQuestionArgs = {
  useditemQuestionId: Scalars['ID'];
};

export type MutationUpdateUseditemQuestionArgs = {
  updateUseditemQuestionInput: UpdateUseditemQuestionInput;
  useditemQuestionId: Scalars['ID'];
};

export type MutationCreateUseditemQuestionAnswerArgs = {
  createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput;
  useditemQuestionId: Scalars['ID'];
};

export type MutationDeleteUseditemQuestionAnswerArgs = {
  useditemQuestionAnswerId: Scalars['ID'];
};

export type MutationUpdateUseditemQuestionAnswerArgs = {
  updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput;
  useditemQuestionAnswerId: Scalars['ID'];
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type PointTransaction = {
  __typename?: 'PointTransaction';
  _id: Scalars['ID'];
  impUid: Scalars['ID'];
  amount: Scalars['Int'];
  balance: Scalars['Int'];
  status: Scalars['String'];
  statusDetail: Scalars['String'];
  user?: Maybe<User>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type Query = {
  __typename?: 'Query';
  fetchBoard: Board;
  fetchBoards: Array<Board>;
  fetchBoardsCount: Scalars['Int'];
  fetchBoardsCountOfMine: Scalars['Int'];
  fetchBoardsOfMine: Array<Board>;
  fetchBoardsOfTheBest: Array<Board>;
  fetchBoardComments: Array<BoardComment>;
  fetchPointTransactions: PointTransaction;
  fetchPointTransactionsCountOfBuying: PointTransaction;
  fetchPointTransactionsCountOfLoading: PointTransaction;
  fetchPointTransactionsCountOfSelling: PointTransaction;
  fetchPointTransactionsOfBuying: PointTransaction;
  fetchPointTransactionsOfLoading: PointTransaction;
  fetchPointTransactionsOfSelling: PointTransaction;
  fetchUseditem: Useditem;
  fetchUseditems: Array<Useditem>;
  fetchUseditemsCountIBought: Scalars['Int'];
  fetchUseditemsCountIPicked: Scalars['Int'];
  fetchUseditemsCountISold: Scalars['Int'];
  fetchUseditemsIBought: Array<Useditem>;
  fetchUseditemsIPicked: Array<Useditem>;
  fetchUseditemsISold: Array<Useditem>;
  fetchUseditemsOfTheBest: Array<Useditem>;
  fetchUseditemQuestions: Array<UseditemQuestion>;
  fetchUseditemQuestionAnswers: Array<UseditemQuestionAnswer>;
  fetchUserLoggedIn: User;
};

export type QueryFetchBoardArgs = {
  boardId: Scalars['ID'];
};

export type QueryFetchBoardCommentsArgs = {
  boardId: Scalars['ID'];
};

export type QueryFetchUseditemArgs = {
  useditemId: Scalars['ID'];
};

export type QueryFetchUseditemQuestionsArgs = {
  useditemId: Scalars['ID'];
};

export type QueryFetchUseditemQuestionAnswersArgs = {
  useditemQuestionId: Scalars['ID'];
};

export type UpdateBoardCommentInput = {
  contents?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
};

export type UpdateBoardInput = {
  title?: Maybe<Scalars['String']>;
  contents?: Maybe<Scalars['String']>;
  youtubeUrl?: Maybe<Scalars['String']>;
};

export type UpdateUseditemInput = {
  name: Scalars['String'];
  remarks: Scalars['String'];
  contents: Scalars['String'];
  price: Scalars['Int'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type UpdateUseditemQuestionAnswerInput = {
  contents: Scalars['String'];
};

export type UpdateUseditemQuestionInput = {
  contents: Scalars['String'];
};

export type Useditem = {
  __typename?: 'Useditem';
  _id: Scalars['ID'];
  name: Scalars['String'];
  remarks: Scalars['String'];
  contents: Scalars['String'];
  price: Scalars['Int'];
  tags: Array<Scalars['String']>;
  useditemAddress?: Maybe<UseditemAddress>;
  buyer: User;
  seller: User;
  soldAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type UseditemAddress = {
  __typename?: 'UseditemAddress';
  id: Scalars['ID'];
  zipcode: Scalars['String'];
  address: Scalars['String'];
  addressDetail: Scalars['String'];
  lat: Scalars['Int'];
  lng: Scalars['Int'];
};

export type UseditemQuestion = {
  __typename?: 'UseditemQuestion';
  _id: Scalars['ID'];
  contents: Scalars['String'];
  useditem: Useditem;
  user: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type UseditemQuestionAnswer = {
  __typename?: 'UseditemQuestionAnswer';
  _id: Scalars['ID'];
  contents: Scalars['String'];
  useditemQuestion: UseditemQuestion;
  user: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  email: Scalars['String'];
  name: Scalars['String'];
  userPoint?: Maybe<UserPoint>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type UserPoint = {
  __typename?: 'UserPoint';
  _id: Scalars['ID'];
  amount: Scalars['Int'];
  user: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};
