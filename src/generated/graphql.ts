export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** An RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string. */
  GitHub_URI: any;
  /** An ISO-8601 encoded UTC date string. */
  GitHub_DateTime: any;
  /** A string containing HTML code. */
  GitHub_HTML: any;
  /** A Git object ID. */
  GitHub_GitObjectID: any;
  /** An ISO-8601 encoded date string. Unlike the DateTime type, GitTimestamp is not converted in UTC. */
  GitHub_GitTimestamp: any;
  /** Git SSH string */
  GitHub_GitSSHRemote: any;
  /** An ISO-8601 encoded date string. */
  GitHub_Date: any;
  /** A valid x509 certificate string */
  GitHub_X509Certificate: any;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars["Boolean"]>;
  ne?: Maybe<Scalars["Boolean"]>;
  in?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars["Date"]>;
  ne?: Maybe<Scalars["Date"]>;
  gt?: Maybe<Scalars["Date"]>;
  gte?: Maybe<Scalars["Date"]>;
  lt?: Maybe<Scalars["Date"]>;
  lte?: Maybe<Scalars["Date"]>;
  in?: Maybe<Array<Maybe<Scalars["Date"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Date"]>>>;
};

export type Directory = Node & {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  sourceInstanceName?: Maybe<Scalars["String"]>;
  absolutePath?: Maybe<Scalars["String"]>;
  relativePath?: Maybe<Scalars["String"]>;
  extension?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Int"]>;
  prettySize?: Maybe<Scalars["String"]>;
  modifiedTime?: Maybe<Scalars["Date"]>;
  accessTime?: Maybe<Scalars["Date"]>;
  changeTime?: Maybe<Scalars["Date"]>;
  birthTime?: Maybe<Scalars["Date"]>;
  root?: Maybe<Scalars["String"]>;
  dir?: Maybe<Scalars["String"]>;
  base?: Maybe<Scalars["String"]>;
  ext?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  relativeDirectory?: Maybe<Scalars["String"]>;
  dev?: Maybe<Scalars["Int"]>;
  mode?: Maybe<Scalars["Int"]>;
  nlink?: Maybe<Scalars["Int"]>;
  uid?: Maybe<Scalars["Int"]>;
  gid?: Maybe<Scalars["Int"]>;
  rdev?: Maybe<Scalars["Int"]>;
  blksize?: Maybe<Scalars["Int"]>;
  ino?: Maybe<Scalars["Int"]>;
  blocks?: Maybe<Scalars["Int"]>;
  atimeMs?: Maybe<Scalars["Float"]>;
  mtimeMs?: Maybe<Scalars["Float"]>;
  ctimeMs?: Maybe<Scalars["Float"]>;
  birthtimeMs?: Maybe<Scalars["Float"]>;
  atime?: Maybe<Scalars["Date"]>;
  mtime?: Maybe<Scalars["Date"]>;
  ctime?: Maybe<Scalars["Date"]>;
  birthtime?: Maybe<Scalars["Date"]>;
};

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryBirthtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryConnection = {
  totalCount: Scalars["Int"];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  SourceInstanceName = "sourceInstanceName",
  AbsolutePath = "absolutePath",
  RelativePath = "relativePath",
  Extension = "extension",
  Size = "size",
  PrettySize = "prettySize",
  ModifiedTime = "modifiedTime",
  AccessTime = "accessTime",
  ChangeTime = "changeTime",
  BirthTime = "birthTime",
  Root = "root",
  Dir = "dir",
  Base = "base",
  Ext = "ext",
  Name = "name",
  RelativeDirectory = "relativeDirectory",
  Dev = "dev",
  Mode = "mode",
  Nlink = "nlink",
  Uid = "uid",
  Gid = "gid",
  Rdev = "rdev",
  Blksize = "blksize",
  Ino = "ino",
  Blocks = "blocks",
  AtimeMs = "atimeMs",
  MtimeMs = "mtimeMs",
  CtimeMs = "ctimeMs",
  BirthtimeMs = "birthtimeMs",
  Atime = "atime",
  Mtime = "mtime",
  Ctime = "ctime",
  Birthtime = "birthtime"
}

export type DirectoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight?: Maybe<Scalars["String"]>;
  shadow?: Maybe<Scalars["String"]>;
  opacity?: Maybe<Scalars["Int"]>;
};

export type ExperienceYaml = Node & {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars["String"]>;
  title_detail?: Maybe<Scalars["String"]>;
  category?: Maybe<Scalars["String"]>;
  desc?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  startedAt?: Maybe<Scalars["Date"]>;
  url?: Maybe<Scalars["String"]>;
  pinned?: Maybe<Scalars["Boolean"]>;
  type?: Maybe<Scalars["String"]>;
  photo?: Maybe<File>;
  photoWidth?: Maybe<Scalars["Int"]>;
  photoHeight?: Maybe<Scalars["Int"]>;
  order?: Maybe<Scalars["Int"]>;
};

export type ExperienceYamlStartedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type ExperienceYamlConnection = {
  totalCount: Scalars["Int"];
  edges: Array<ExperienceYamlEdge>;
  nodes: Array<ExperienceYaml>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ExperienceYamlGroupConnection>;
};

export type ExperienceYamlConnectionDistinctArgs = {
  field: ExperienceYamlFieldsEnum;
};

export type ExperienceYamlConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ExperienceYamlFieldsEnum;
};

export type ExperienceYamlEdge = {
  next?: Maybe<ExperienceYaml>;
  node: ExperienceYaml;
  previous?: Maybe<ExperienceYaml>;
};

export enum ExperienceYamlFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Title = "title",
  TitleDetail = "title_detail",
  Category = "category",
  Desc = "desc",
  Location = "location",
  StartedAt = "startedAt",
  Url = "url",
  Pinned = "pinned",
  Type = "type",
  PhotoId = "photo___id",
  PhotoParentId = "photo___parent___id",
  PhotoParentParentId = "photo___parent___parent___id",
  PhotoParentParentChildren = "photo___parent___parent___children",
  PhotoParentChildren = "photo___parent___children",
  PhotoParentChildrenId = "photo___parent___children___id",
  PhotoParentChildrenChildren = "photo___parent___children___children",
  PhotoParentInternalContent = "photo___parent___internal___content",
  PhotoParentInternalContentDigest = "photo___parent___internal___contentDigest",
  PhotoParentInternalDescription = "photo___parent___internal___description",
  PhotoParentInternalFieldOwners = "photo___parent___internal___fieldOwners",
  PhotoParentInternalIgnoreType = "photo___parent___internal___ignoreType",
  PhotoParentInternalMediaType = "photo___parent___internal___mediaType",
  PhotoParentInternalOwner = "photo___parent___internal___owner",
  PhotoParentInternalType = "photo___parent___internal___type",
  PhotoChildren = "photo___children",
  PhotoChildrenId = "photo___children___id",
  PhotoChildrenParentId = "photo___children___parent___id",
  PhotoChildrenParentChildren = "photo___children___parent___children",
  PhotoChildrenChildren = "photo___children___children",
  PhotoChildrenChildrenId = "photo___children___children___id",
  PhotoChildrenChildrenChildren = "photo___children___children___children",
  PhotoChildrenInternalContent = "photo___children___internal___content",
  PhotoChildrenInternalContentDigest = "photo___children___internal___contentDigest",
  PhotoChildrenInternalDescription = "photo___children___internal___description",
  PhotoChildrenInternalFieldOwners = "photo___children___internal___fieldOwners",
  PhotoChildrenInternalIgnoreType = "photo___children___internal___ignoreType",
  PhotoChildrenInternalMediaType = "photo___children___internal___mediaType",
  PhotoChildrenInternalOwner = "photo___children___internal___owner",
  PhotoChildrenInternalType = "photo___children___internal___type",
  PhotoInternalContent = "photo___internal___content",
  PhotoInternalContentDigest = "photo___internal___contentDigest",
  PhotoInternalDescription = "photo___internal___description",
  PhotoInternalFieldOwners = "photo___internal___fieldOwners",
  PhotoInternalIgnoreType = "photo___internal___ignoreType",
  PhotoInternalMediaType = "photo___internal___mediaType",
  PhotoInternalOwner = "photo___internal___owner",
  PhotoInternalType = "photo___internal___type",
  PhotoSourceInstanceName = "photo___sourceInstanceName",
  PhotoAbsolutePath = "photo___absolutePath",
  PhotoRelativePath = "photo___relativePath",
  PhotoExtension = "photo___extension",
  PhotoSize = "photo___size",
  PhotoPrettySize = "photo___prettySize",
  PhotoModifiedTime = "photo___modifiedTime",
  PhotoAccessTime = "photo___accessTime",
  PhotoChangeTime = "photo___changeTime",
  PhotoBirthTime = "photo___birthTime",
  PhotoRoot = "photo___root",
  PhotoDir = "photo___dir",
  PhotoBase = "photo___base",
  PhotoExt = "photo___ext",
  PhotoName = "photo___name",
  PhotoRelativeDirectory = "photo___relativeDirectory",
  PhotoDev = "photo___dev",
  PhotoMode = "photo___mode",
  PhotoNlink = "photo___nlink",
  PhotoUid = "photo___uid",
  PhotoGid = "photo___gid",
  PhotoRdev = "photo___rdev",
  PhotoBlksize = "photo___blksize",
  PhotoIno = "photo___ino",
  PhotoBlocks = "photo___blocks",
  PhotoAtimeMs = "photo___atimeMs",
  PhotoMtimeMs = "photo___mtimeMs",
  PhotoCtimeMs = "photo___ctimeMs",
  PhotoBirthtimeMs = "photo___birthtimeMs",
  PhotoAtime = "photo___atime",
  PhotoMtime = "photo___mtime",
  PhotoCtime = "photo___ctime",
  PhotoBirthtime = "photo___birthtime",
  PhotoUrl = "photo___url",
  PhotoPublicUrl = "photo___publicURL",
  PhotoWidth = "photoWidth",
  PhotoHeight = "photoHeight",
  Order = "order"
}

export type ExperienceYamlFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  title_detail?: Maybe<StringQueryOperatorInput>;
  category?: Maybe<StringQueryOperatorInput>;
  desc?: Maybe<StringQueryOperatorInput>;
  location?: Maybe<StringQueryOperatorInput>;
  startedAt?: Maybe<DateQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  pinned?: Maybe<BooleanQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  photo?: Maybe<FileFilterInput>;
  photoWidth?: Maybe<IntQueryOperatorInput>;
  photoHeight?: Maybe<IntQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
};

export type ExperienceYamlGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<ExperienceYamlEdge>;
  nodes: Array<ExperienceYaml>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ExperienceYamlSortInput = {
  fields?: Maybe<Array<Maybe<ExperienceYamlFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type File = Node & {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  sourceInstanceName?: Maybe<Scalars["String"]>;
  absolutePath?: Maybe<Scalars["String"]>;
  relativePath?: Maybe<Scalars["String"]>;
  extension?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Int"]>;
  prettySize?: Maybe<Scalars["String"]>;
  modifiedTime?: Maybe<Scalars["Date"]>;
  accessTime?: Maybe<Scalars["Date"]>;
  changeTime?: Maybe<Scalars["Date"]>;
  birthTime?: Maybe<Scalars["Date"]>;
  root?: Maybe<Scalars["String"]>;
  dir?: Maybe<Scalars["String"]>;
  base?: Maybe<Scalars["String"]>;
  ext?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  relativeDirectory?: Maybe<Scalars["String"]>;
  dev?: Maybe<Scalars["Int"]>;
  mode?: Maybe<Scalars["Int"]>;
  nlink?: Maybe<Scalars["Int"]>;
  uid?: Maybe<Scalars["Int"]>;
  gid?: Maybe<Scalars["Int"]>;
  rdev?: Maybe<Scalars["Int"]>;
  blksize?: Maybe<Scalars["Int"]>;
  ino?: Maybe<Scalars["Int"]>;
  blocks?: Maybe<Scalars["Int"]>;
  atimeMs?: Maybe<Scalars["Float"]>;
  mtimeMs?: Maybe<Scalars["Float"]>;
  ctimeMs?: Maybe<Scalars["Float"]>;
  birthtimeMs?: Maybe<Scalars["Float"]>;
  atime?: Maybe<Scalars["Date"]>;
  mtime?: Maybe<Scalars["Date"]>;
  ctime?: Maybe<Scalars["Date"]>;
  birthtime?: Maybe<Scalars["Date"]>;
  url?: Maybe<Scalars["String"]>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars["String"]>;
  childrenStacksYaml?: Maybe<Array<Maybe<StacksYaml>>>;
  childImageSharp?: Maybe<ImageSharp>;
  childrenExperienceYaml?: Maybe<Array<Maybe<ExperienceYaml>>>;
  childrenNavigationYaml?: Maybe<Array<Maybe<NavigationYaml>>>;
};

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileBirthtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileConnection = {
  totalCount: Scalars["Int"];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  SourceInstanceName = "sourceInstanceName",
  AbsolutePath = "absolutePath",
  RelativePath = "relativePath",
  Extension = "extension",
  Size = "size",
  PrettySize = "prettySize",
  ModifiedTime = "modifiedTime",
  AccessTime = "accessTime",
  ChangeTime = "changeTime",
  BirthTime = "birthTime",
  Root = "root",
  Dir = "dir",
  Base = "base",
  Ext = "ext",
  Name = "name",
  RelativeDirectory = "relativeDirectory",
  Dev = "dev",
  Mode = "mode",
  Nlink = "nlink",
  Uid = "uid",
  Gid = "gid",
  Rdev = "rdev",
  Blksize = "blksize",
  Ino = "ino",
  Blocks = "blocks",
  AtimeMs = "atimeMs",
  MtimeMs = "mtimeMs",
  CtimeMs = "ctimeMs",
  BirthtimeMs = "birthtimeMs",
  Atime = "atime",
  Mtime = "mtime",
  Ctime = "ctime",
  Birthtime = "birthtime",
  Url = "url",
  PublicUrl = "publicURL"
}

export type FileFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars["Float"]>;
  ne?: Maybe<Scalars["Float"]>;
  gt?: Maybe<Scalars["Float"]>;
  gte?: Maybe<Scalars["Float"]>;
  lt?: Maybe<Scalars["Float"]>;
  lte?: Maybe<Scalars["Float"]>;
  in?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

export type GitHub = {
  /** Look up a code of conduct by its key */
  codeOfConduct?: Maybe<GitHub_CodeOfConduct>;
  /** Look up a code of conduct by its key */
  codesOfConduct?: Maybe<Array<Maybe<GitHub_CodeOfConduct>>>;
  /** Look up an open source license by its key */
  license?: Maybe<GitHub_License>;
  /** Return a list of known open source licenses */
  licenses: Array<Maybe<GitHub_License>>;
  /** Get alphabetically sorted list of Marketplace categories */
  marketplaceCategories: Array<GitHub_MarketplaceCategory>;
  /** Look up a Marketplace category by its slug. */
  marketplaceCategory?: Maybe<GitHub_MarketplaceCategory>;
  /** Look up a single Marketplace listing */
  marketplaceListing?: Maybe<GitHub_MarketplaceListing>;
  /** Look up Marketplace listings */
  marketplaceListings: GitHub_MarketplaceListingConnection;
  /** Return information about the GitHub instance */
  meta: GitHub_GitHubMetadata;
  /** Fetches an object given its ID. */
  node?: Maybe<GitHub_Node>;
  /** Lookup nodes by a list of IDs. */
  nodes: Array<Maybe<GitHub_Node>>;
  /** Lookup a organization by login. */
  organization?: Maybe<GitHub_Organization>;
  /** The client's rate limit information. */
  rateLimit?: Maybe<GitHub_RateLimit>;
  /** Hack to workaround https://github.com/facebook/relay/issues/112 re-exposing the root query object */
  relay: Query;
  /** Lookup a given repository by the owner and repository name. */
  repository?: Maybe<GitHub_Repository>;
  /** Lookup a repository owner (ie. either a User or an Organization) by login. */
  repositoryOwner?: Maybe<GitHub_RepositoryOwner>;
  /** Lookup resource by a URL. */
  resource?: Maybe<GitHub_UniformResourceLocatable>;
  /** Perform a search across resources. */
  search: GitHub_SearchResultItemConnection;
  /** GitHub Security Advisories */
  securityAdvisories: GitHub_SecurityAdvisoryConnection;
  /** Fetch a Security Advisory by its GHSA ID */
  securityAdvisory?: Maybe<GitHub_SecurityAdvisory>;
  /** Software Vulnerabilities documented by GitHub Security Advisories */
  securityVulnerabilities: GitHub_SecurityVulnerabilityConnection;
  /** Look up a topic by name. */
  topic?: Maybe<GitHub_Topic>;
  /** Lookup a user by login. */
  user?: Maybe<GitHub_User>;
  /** The currently authenticated user. */
  viewer: GitHub_User;
};

export type GitHubCodeOfConductArgs = {
  key: Scalars["String"];
};

export type GitHubLicenseArgs = {
  key: Scalars["String"];
};

export type GitHubMarketplaceCategoriesArgs = {
  includeCategories?: Maybe<Array<Scalars["String"]>>;
  excludeEmpty?: Maybe<Scalars["Boolean"]>;
  excludeSubcategories?: Maybe<Scalars["Boolean"]>;
};

export type GitHubMarketplaceCategoryArgs = {
  slug: Scalars["String"];
  useTopicAliases?: Maybe<Scalars["Boolean"]>;
};

export type GitHubMarketplaceListingArgs = {
  slug: Scalars["String"];
};

export type GitHubMarketplaceListingsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  categorySlug?: Maybe<Scalars["String"]>;
  useTopicAliases?: Maybe<Scalars["Boolean"]>;
  viewerCanAdmin?: Maybe<Scalars["Boolean"]>;
  adminId?: Maybe<Scalars["ID"]>;
  organizationId?: Maybe<Scalars["ID"]>;
  allStates?: Maybe<Scalars["Boolean"]>;
  slugs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  primaryCategoryOnly: Scalars["Boolean"];
  withFreeTrialsOnly: Scalars["Boolean"];
};

export type GitHubNodeArgs = {
  id: Scalars["ID"];
};

export type GitHubNodesArgs = {
  ids: Array<Scalars["ID"]>;
};

export type GitHubOrganizationArgs = {
  login: Scalars["String"];
};

export type GitHubRateLimitArgs = {
  dryRun: Scalars["Boolean"];
};

export type GitHubRepositoryArgs = {
  owner: Scalars["String"];
  name: Scalars["String"];
};

export type GitHubRepositoryOwnerArgs = {
  login: Scalars["String"];
};

export type GitHubResourceArgs = {
  url: Scalars["GitHub_URI"];
};

export type GitHubSearchArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  query: Scalars["String"];
  type: GitHub_SearchType;
};

export type GitHubSecurityAdvisoriesArgs = {
  orderBy?: Maybe<GitHub_SecurityAdvisoryOrder>;
  identifier?: Maybe<GitHub_SecurityAdvisoryIdentifierFilter>;
  publishedSince?: Maybe<Scalars["GitHub_DateTime"]>;
  updatedSince?: Maybe<Scalars["GitHub_DateTime"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type GitHubSecurityAdvisoryArgs = {
  ghsaId: Scalars["String"];
};

export type GitHubSecurityVulnerabilitiesArgs = {
  orderBy?: Maybe<GitHub_SecurityVulnerabilityOrder>;
  ecosystem?: Maybe<GitHub_SecurityAdvisoryEcosystem>;
  package?: Maybe<Scalars["String"]>;
  severities?: Maybe<Array<GitHub_SecurityAdvisorySeverity>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type GitHubTopicArgs = {
  name: Scalars["String"];
};

export type GitHubUserArgs = {
  login: Scalars["String"];
};

/** Autogenerated input type of AcceptTopicSuggestion */
export type GitHub_AcceptTopicSuggestionInput = {
  /** The Node ID of the repository. */
  repositoryId: Scalars["ID"];
  /** The name of the suggested topic. */
  name: Scalars["String"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of AcceptTopicSuggestion */
export type GitHub_AcceptTopicSuggestionPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The accepted topic. */
  topic?: Maybe<GitHub_Topic>;
};

/** Represents an object which can take actions on GitHub. Typically a User or Bot. */
export type GitHub_Actor = {
  /** A URL pointing to the actor's public avatar. */
  avatarUrl: Scalars["GitHub_URI"];
  /** The username of the actor. */
  login: Scalars["String"];
  /** The HTTP path for this actor. */
  resourcePath: Scalars["GitHub_URI"];
  /** The HTTP URL for this actor. */
  url: Scalars["GitHub_URI"];
};

/** Represents an object which can take actions on GitHub. Typically a User or Bot. */
export type GitHub_ActorAvatarUrlArgs = {
  size?: Maybe<Scalars["Int"]>;
};

/** Autogenerated input type of AddAssigneesToAssignable */
export type GitHub_AddAssigneesToAssignableInput = {
  /** The id of the assignable object to add assignees to. */
  assignableId: Scalars["ID"];
  /** The id of users to add as assignees. */
  assigneeIds: Array<Scalars["ID"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of AddAssigneesToAssignable */
export type GitHub_AddAssigneesToAssignablePayload = {
  /** The item that was assigned. */
  assignable?: Maybe<GitHub_Assignable>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated input type of AddComment */
export type GitHub_AddCommentInput = {
  /** The Node ID of the subject to modify. */
  subjectId: Scalars["ID"];
  /** The contents of the comment. */
  body: Scalars["String"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of AddComment */
export type GitHub_AddCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The edge from the subject's comment connection. */
  commentEdge?: Maybe<GitHub_IssueCommentEdge>;
  /** The subject */
  subject?: Maybe<GitHub_Node>;
  /** The edge from the subject's timeline connection. */
  timelineEdge?: Maybe<GitHub_IssueTimelineItemEdge>;
};

/** Represents a 'added_to_project' event on a given issue or pull request. */
export type GitHub_AddedToProjectEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
};

/** Autogenerated input type of AddLabelsToLabelable */
export type GitHub_AddLabelsToLabelableInput = {
  /** The id of the labelable object to add labels to. */
  labelableId: Scalars["ID"];
  /** The ids of the labels to add. */
  labelIds: Array<Scalars["ID"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of AddLabelsToLabelable */
export type GitHub_AddLabelsToLabelablePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The item that was labeled. */
  labelable?: Maybe<GitHub_Labelable>;
};

/** Autogenerated input type of AddProjectCard */
export type GitHub_AddProjectCardInput = {
  /** The Node ID of the ProjectColumn. */
  projectColumnId: Scalars["ID"];
  /** The content of the card. Must be a member of the ProjectCardItem union */
  contentId?: Maybe<Scalars["ID"]>;
  /** The note on the card. */
  note?: Maybe<Scalars["String"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of AddProjectCard */
export type GitHub_AddProjectCardPayload = {
  /** The edge from the ProjectColumn's card connection. */
  cardEdge?: Maybe<GitHub_ProjectCardEdge>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The ProjectColumn */
  projectColumn?: Maybe<GitHub_ProjectColumn>;
};

/** Autogenerated input type of AddProjectColumn */
export type GitHub_AddProjectColumnInput = {
  /** The Node ID of the project. */
  projectId: Scalars["ID"];
  /** The name of the column. */
  name: Scalars["String"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of AddProjectColumn */
export type GitHub_AddProjectColumnPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The edge from the project's column connection. */
  columnEdge?: Maybe<GitHub_ProjectColumnEdge>;
  /** The project */
  project?: Maybe<GitHub_Project>;
};

/** Autogenerated input type of AddPullRequestReviewComment */
export type GitHub_AddPullRequestReviewCommentInput = {
  /** The Node ID of the review to modify. */
  pullRequestReviewId: Scalars["ID"];
  /** The SHA of the commit to comment on. */
  commitOID?: Maybe<Scalars["GitHub_GitObjectID"]>;
  /** The text of the comment. */
  body: Scalars["String"];
  /** The relative path of the file to comment on. */
  path?: Maybe<Scalars["String"]>;
  /** The line index in the diff to comment on. */
  position?: Maybe<Scalars["Int"]>;
  /** The comment id to reply to. */
  inReplyTo?: Maybe<Scalars["ID"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of AddPullRequestReviewComment */
export type GitHub_AddPullRequestReviewCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The newly created comment. */
  comment?: Maybe<GitHub_PullRequestReviewComment>;
  /** The edge from the review's comment connection. */
  commentEdge?: Maybe<GitHub_PullRequestReviewCommentEdge>;
};

/** Autogenerated input type of AddPullRequestReview */
export type GitHub_AddPullRequestReviewInput = {
  /** The Node ID of the pull request to modify. */
  pullRequestId: Scalars["ID"];
  /** The commit OID the review pertains to. */
  commitOID?: Maybe<Scalars["GitHub_GitObjectID"]>;
  /** The contents of the review body comment. */
  body?: Maybe<Scalars["String"]>;
  /** The event to perform on the pull request review. */
  event?: Maybe<GitHub_PullRequestReviewEvent>;
  /** The review line comments. */
  comments?: Maybe<Array<Maybe<GitHub_DraftPullRequestReviewComment>>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of AddPullRequestReview */
export type GitHub_AddPullRequestReviewPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The newly created pull request review. */
  pullRequestReview?: Maybe<GitHub_PullRequestReview>;
  /** The edge from the pull request's review connection. */
  reviewEdge?: Maybe<GitHub_PullRequestReviewEdge>;
};

/** Autogenerated input type of AddReaction */
export type GitHub_AddReactionInput = {
  /** The Node ID of the subject to modify. */
  subjectId: Scalars["ID"];
  /** The name of the emoji to react with. */
  content: GitHub_ReactionContent;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of AddReaction */
export type GitHub_AddReactionPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The reaction object. */
  reaction?: Maybe<GitHub_Reaction>;
  /** The reactable subject. */
  subject?: Maybe<GitHub_Reactable>;
};

/** Autogenerated input type of AddStar */
export type GitHub_AddStarInput = {
  /** The Starrable ID to star. */
  starrableId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of AddStar */
export type GitHub_AddStarPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The starrable. */
  starrable?: Maybe<GitHub_Starrable>;
};

/** A GitHub App. */
export type GitHub_App = GitHub_Node & {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  /** The description of the app. */
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** The hex color code, without the leading '#', for the logo background. */
  logoBackgroundColor: Scalars["String"];
  /** A URL pointing to the app's logo. */
  logoUrl: Scalars["GitHub_URI"];
  /** The name of the app. */
  name: Scalars["String"];
  /** A slug based on the name of the app for use in URLs. */
  slug: Scalars["String"];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["GitHub_DateTime"];
  /** The URL to the app's homepage. */
  url: Scalars["GitHub_URI"];
};

/** A GitHub App. */
export type GitHub_AppLogoUrlArgs = {
  size?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type GitHub_AppEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_App>;
};

/** An object that can have users assigned to it. */
export type GitHub_Assignable = {
  /** A list of Users assigned to this object. */
  assignees: GitHub_UserConnection;
};

/** An object that can have users assigned to it. */
export type GitHub_AssignableAssigneesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** Represents an 'assigned' event on any assignable object. */
export type GitHub_AssignedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the assignable associated with the event. */
  assignable: GitHub_Assignable;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  id: Scalars["ID"];
  /** Identifies the user who was assigned. */
  user?: Maybe<GitHub_User>;
};

/** Represents a 'base_ref_changed' event on a given issue or pull request. */
export type GitHub_BaseRefChangedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
};

/** Represents a 'base_ref_force_pushed' event on a given pull request. */
export type GitHub_BaseRefForcePushedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the after commit SHA for the 'base_ref_force_pushed' event. */
  afterCommit?: Maybe<GitHub_Commit>;
  /** Identifies the before commit SHA for the 'base_ref_force_pushed' event. */
  beforeCommit?: Maybe<GitHub_Commit>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  id: Scalars["ID"];
  /** PullRequest referenced by event. */
  pullRequest: GitHub_PullRequest;
  /** Identifies the fully qualified ref name for the 'base_ref_force_pushed' event. */
  ref?: Maybe<GitHub_Ref>;
};

/** Represents a Git blame. */
export type GitHub_Blame = {
  /** The list of ranges from a Git blame. */
  ranges: Array<GitHub_BlameRange>;
};

/** Represents a range of information from a Git blame. */
export type GitHub_BlameRange = {
  /** Identifies the recency of the change, from 1 (new) to 10 (old). This is
   * calculated as a 2-quantile and determines the length of distance between the
   * median age of all the changes in the file and the recency of the current
   * range's change.
   */
  age: Scalars["Int"];
  /** Identifies the line author */
  commit: GitHub_Commit;
  /** The ending line for the range */
  endingLine: Scalars["Int"];
  /** The starting line for the range */
  startingLine: Scalars["Int"];
};

/** Represents a Git blob. */
export type GitHub_Blob = GitHub_Node &
  GitHub_GitObject & {
    /** An abbreviated version of the Git object ID */
    abbreviatedOid: Scalars["String"];
    /** Byte size of Blob object */
    byteSize: Scalars["Int"];
    /** The HTTP path for this Git object */
    commitResourcePath: Scalars["GitHub_URI"];
    /** The HTTP URL for this Git object */
    commitUrl: Scalars["GitHub_URI"];
    id: Scalars["ID"];
    /** Indicates whether the Blob is binary or text */
    isBinary: Scalars["Boolean"];
    /** Indicates whether the contents is truncated */
    isTruncated: Scalars["Boolean"];
    /** The Git object ID */
    oid: Scalars["GitHub_GitObjectID"];
    /** The Repository the Git object belongs to */
    repository: GitHub_Repository;
    /** UTF8 text data or null if the Blob is binary */
    text?: Maybe<Scalars["String"]>;
  };

/** A special type of user which takes actions on behalf of GitHub Apps. */
export type GitHub_Bot = GitHub_Node &
  GitHub_Actor &
  GitHub_UniformResourceLocatable & {
    /** A URL pointing to the GitHub App's public avatar. */
    avatarUrl: Scalars["GitHub_URI"];
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHub_DateTime"];
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    id: Scalars["ID"];
    /** The username of the actor. */
    login: Scalars["String"];
    /** The HTTP path for this bot */
    resourcePath: Scalars["GitHub_URI"];
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHub_DateTime"];
    /** The HTTP URL for this bot */
    url: Scalars["GitHub_URI"];
  };

/** A special type of user which takes actions on behalf of GitHub Apps. */
export type GitHub_BotAvatarUrlArgs = {
  size?: Maybe<Scalars["Int"]>;
};

/** A branch protection rule. */
export type GitHub_BranchProtectionRule = GitHub_Node & {
  /** A list of conflicts matching branches protection rule and other branch protection rules */
  branchProtectionRuleConflicts: GitHub_BranchProtectionRuleConflictConnection;
  /** The actor who created this branch protection rule. */
  creator?: Maybe<GitHub_Actor>;
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  /** Will new commits pushed to matching branches dismiss pull request review approvals. */
  dismissesStaleReviews: Scalars["Boolean"];
  id: Scalars["ID"];
  /** Can admins overwrite branch protection. */
  isAdminEnforced: Scalars["Boolean"];
  /** Repository refs that are protected by this rule */
  matchingRefs: GitHub_RefConnection;
  /** Identifies the protection rule pattern. */
  pattern: Scalars["String"];
  /** A list push allowances for this branch protection rule. */
  pushAllowances: GitHub_PushAllowanceConnection;
  /** The repository associated with this branch protection rule. */
  repository?: Maybe<GitHub_Repository>;
  /** Number of approving reviews required to update matching branches. */
  requiredApprovingReviewCount?: Maybe<Scalars["Int"]>;
  /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
  requiredStatusCheckContexts?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Are approving reviews required to update matching branches. */
  requiresApprovingReviews: Scalars["Boolean"];
  /** Are commits required to be signed. */
  requiresCommitSignatures: Scalars["Boolean"];
  /** Are status checks required to update matching branches. */
  requiresStatusChecks: Scalars["Boolean"];
  /** Are branches required to be up to date before merging. */
  requiresStrictStatusChecks: Scalars["Boolean"];
  /** Is pushing to matching branches restricted. */
  restrictsPushes: Scalars["Boolean"];
  /** Is dismissal of pull request reviews restricted. */
  restrictsReviewDismissals: Scalars["Boolean"];
  /** A list review dismissal allowances for this branch protection rule. */
  reviewDismissalAllowances: GitHub_ReviewDismissalAllowanceConnection;
};

/** A branch protection rule. */
export type GitHub_BranchProtectionRuleBranchProtectionRuleConflictsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A branch protection rule. */
export type GitHub_BranchProtectionRuleMatchingRefsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A branch protection rule. */
export type GitHub_BranchProtectionRulePushAllowancesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A branch protection rule. */
export type GitHub_BranchProtectionRuleReviewDismissalAllowancesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A conflict between two branch protection rules. */
export type GitHub_BranchProtectionRuleConflict = {
  /** Identifies the branch protection rule. */
  branchProtectionRule?: Maybe<GitHub_BranchProtectionRule>;
  /** Identifies the conflicting branch protection rule. */
  conflictingBranchProtectionRule?: Maybe<GitHub_BranchProtectionRule>;
  /** Identifies the branch ref that has conflicting rules */
  ref?: Maybe<GitHub_Ref>;
};

/** The connection type for BranchProtectionRuleConflict. */
export type GitHub_BranchProtectionRuleConflictConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_BranchProtectionRuleConflictEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_BranchProtectionRuleConflict>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_BranchProtectionRuleConflictEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_BranchProtectionRuleConflict>;
};

/** The connection type for BranchProtectionRule. */
export type GitHub_BranchProtectionRuleConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_BranchProtectionRuleEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_BranchProtectionRule>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_BranchProtectionRuleEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_BranchProtectionRule>;
};

/** Autogenerated input type of ChangeUserStatus */
export type GitHub_ChangeUserStatusInput = {
  /** The emoji to represent your status. Can either be a native Unicode emoji or an emoji name with colons, e.g., :grinning:. */
  emoji?: Maybe<Scalars["String"]>;
  /** A short description of your current status. */
  message?: Maybe<Scalars["String"]>;
  /** The ID of the organization whose members will be allowed to see the status. If
   * omitted, the status will be publicly visible.
   */
  organizationId?: Maybe<Scalars["ID"]>;
  /** Whether this status should indicate you are not fully available on GitHub, e.g., you are away. */
  limitedAvailability?: Maybe<Scalars["Boolean"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of ChangeUserStatus */
export type GitHub_ChangeUserStatusPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** Your updated status. */
  status?: Maybe<GitHub_UserStatus>;
};

/** Autogenerated input type of ClearLabelsFromLabelable */
export type GitHub_ClearLabelsFromLabelableInput = {
  /** The id of the labelable object to clear the labels from. */
  labelableId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of ClearLabelsFromLabelable */
export type GitHub_ClearLabelsFromLabelablePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The item that was unlabeled. */
  labelable?: Maybe<GitHub_Labelable>;
};

/** Autogenerated input type of CloneProject */
export type GitHub_CloneProjectInput = {
  /** The owner ID to create the project under. */
  targetOwnerId: Scalars["ID"];
  /** The source project to clone. */
  sourceId: Scalars["ID"];
  /** Whether or not to clone the source project's workflows. */
  includeWorkflows: Scalars["Boolean"];
  /** The name of the project. */
  name: Scalars["String"];
  /** The description of the project. */
  body?: Maybe<Scalars["String"]>;
  /** The visibility of the project, defaults to false (private). */
  public?: Maybe<Scalars["Boolean"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of CloneProject */
export type GitHub_CloneProjectPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The id of the JobStatus for populating cloned fields. */
  jobStatusId?: Maybe<Scalars["String"]>;
  /** The new cloned project. */
  project?: Maybe<GitHub_Project>;
};

/** An object that can be closed */
export type GitHub_Closable = {
  /** `true` if the object is closed (definition of closed may depend on type) */
  closed: Scalars["Boolean"];
  /** Identifies the date and time when the object was closed. */
  closedAt?: Maybe<Scalars["GitHub_DateTime"]>;
};

/** Represents a 'closed' event on any `Closable`. */
export type GitHub_ClosedEvent = GitHub_Node &
  GitHub_UniformResourceLocatable & {
    /** Identifies the actor who performed the event. */
    actor?: Maybe<GitHub_Actor>;
    /** Object that was closed. */
    closable: GitHub_Closable;
    /** Object which triggered the creation of this event. */
    closer?: Maybe<GitHub_Closer>;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHub_DateTime"];
    id: Scalars["ID"];
    /** The HTTP path for this closed event. */
    resourcePath: Scalars["GitHub_URI"];
    /** The HTTP URL for this closed event. */
    url: Scalars["GitHub_URI"];
  };

/** Autogenerated input type of CloseIssue */
export type GitHub_CloseIssueInput = {
  /** ID of the issue to be closed. */
  issueId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of CloseIssue */
export type GitHub_CloseIssuePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The issue that was closed. */
  issue?: Maybe<GitHub_Issue>;
};

/** Autogenerated input type of ClosePullRequest */
export type GitHub_ClosePullRequestInput = {
  /** ID of the pull request to be closed. */
  pullRequestId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of ClosePullRequest */
export type GitHub_ClosePullRequestPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The pull request that was closed. */
  pullRequest?: Maybe<GitHub_PullRequest>;
};

/** The object which triggered a `ClosedEvent`. */
export type GitHub_Closer = GitHub_Commit | GitHub_PullRequest;

/** The Code of Conduct for a repository */
export type GitHub_CodeOfConduct = GitHub_Node & {
  /** The body of the Code of Conduct */
  body?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** The key for the Code of Conduct */
  key: Scalars["String"];
  /** The formal name of the Code of Conduct */
  name: Scalars["String"];
  /** The HTTP path for this Code of Conduct */
  resourcePath?: Maybe<Scalars["GitHub_URI"]>;
  /** The HTTP URL for this Code of Conduct */
  url?: Maybe<Scalars["GitHub_URI"]>;
};

/** Collaborators affiliation level with a subject. */
export enum GitHub_CollaboratorAffiliation {
  /** All outside collaborators of an organization-owned subject. */
  Outside = "OUTSIDE",
  /** All collaborators with permissions to an organization-owned subject, regardless of organization membership status. */
  Direct = "DIRECT",
  /** All collaborators the authenticated user can see. */
  All = "ALL"
}

/** Types that can be inside Collection Items. */
export type GitHub_CollectionItemContent =
  | GitHub_Repository
  | GitHub_Organization
  | GitHub_User;

/** Represents a comment. */
export type GitHub_Comment = {
  /** The actor who authored the comment. */
  author?: Maybe<GitHub_Actor>;
  /** Author's association with the subject of the comment. */
  authorAssociation: GitHub_CommentAuthorAssociation;
  /** The body as Markdown. */
  body: Scalars["String"];
  /** The body rendered to HTML. */
  bodyHTML: Scalars["GitHub_HTML"];
  /** The body rendered to text. */
  bodyText: Scalars["String"];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** Check if this comment was created via an email reply. */
  createdViaEmail: Scalars["Boolean"];
  /** The actor who edited the comment. */
  editor?: Maybe<GitHub_Actor>;
  id: Scalars["ID"];
  /** Check if this comment was edited and includes an edit with the creation data */
  includesCreatedEdit: Scalars["Boolean"];
  /** The moment the editor made the last edit */
  lastEditedAt?: Maybe<Scalars["GitHub_DateTime"]>;
  /** Identifies when the comment was published at. */
  publishedAt?: Maybe<Scalars["GitHub_DateTime"]>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["GitHub_DateTime"];
  /** A list of edits to this content. */
  userContentEdits?: Maybe<GitHub_UserContentEditConnection>;
  /** Did the viewer author this comment. */
  viewerDidAuthor: Scalars["Boolean"];
};

/** Represents a comment. */
export type GitHub_CommentUserContentEditsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A comment author association with repository. */
export enum GitHub_CommentAuthorAssociation {
  /** Author is a member of the organization that owns the repository. */
  Member = "MEMBER",
  /** Author is the owner of the repository. */
  Owner = "OWNER",
  /** Author has been invited to collaborate on the repository. */
  Collaborator = "COLLABORATOR",
  /** Author has previously committed to the repository. */
  Contributor = "CONTRIBUTOR",
  /** Author has not previously committed to the repository. */
  FirstTimeContributor = "FIRST_TIME_CONTRIBUTOR",
  /** Author has not previously committed to GitHub. */
  FirstTimer = "FIRST_TIMER",
  /** Author has no association with the repository. */
  None = "NONE"
}

/** The possible errors that will prevent a user from updating a comment. */
export enum GitHub_CommentCannotUpdateReason {
  /** You must be the author or have write access to this repository to update this comment. */
  InsufficientAccess = "INSUFFICIENT_ACCESS",
  /** Unable to create comment because issue is locked. */
  Locked = "LOCKED",
  /** You must be logged in to update this comment. */
  LoginRequired = "LOGIN_REQUIRED",
  /** Repository is under maintenance. */
  Maintenance = "MAINTENANCE",
  /** At least one email address must be verified to update this comment. */
  VerifiedEmailRequired = "VERIFIED_EMAIL_REQUIRED",
  /** You cannot update this comment */
  Denied = "DENIED"
}

/** Represents a 'comment_deleted' event on a given issue or pull request. */
export type GitHub_CommentDeletedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
};

/** Represents a Git commit. */
export type GitHub_Commit = GitHub_Node &
  GitHub_GitObject &
  GitHub_Subscribable &
  GitHub_UniformResourceLocatable & {
    /** An abbreviated version of the Git object ID */
    abbreviatedOid: Scalars["String"];
    /** The number of additions in this commit. */
    additions: Scalars["Int"];
    /** The pull requests associated with a commit */
    associatedPullRequests?: Maybe<GitHub_PullRequestConnection>;
    /** Authorship details of the commit. */
    author?: Maybe<GitHub_GitActor>;
    /** Check if the committer and the author match. */
    authoredByCommitter: Scalars["Boolean"];
    /** The datetime when this commit was authored. */
    authoredDate: Scalars["GitHub_DateTime"];
    /** Fetches `git blame` information. */
    blame: GitHub_Blame;
    /** The number of changed files in this commit. */
    changedFiles: Scalars["Int"];
    /** Comments made on the commit. */
    comments: GitHub_CommitCommentConnection;
    /** The HTTP path for this Git object */
    commitResourcePath: Scalars["GitHub_URI"];
    /** The HTTP URL for this Git object */
    commitUrl: Scalars["GitHub_URI"];
    /** The datetime when this commit was committed. */
    committedDate: Scalars["GitHub_DateTime"];
    /** Check if commited via GitHub web UI. */
    committedViaWeb: Scalars["Boolean"];
    /** Committership details of the commit. */
    committer?: Maybe<GitHub_GitActor>;
    /** The number of deletions in this commit. */
    deletions: Scalars["Int"];
    /** The deployments associated with a commit. */
    deployments?: Maybe<GitHub_DeploymentConnection>;
    /** The linear commit history starting from (and including) this commit, in the same order as `git log`. */
    history: GitHub_CommitHistoryConnection;
    id: Scalars["ID"];
    /** The Git commit message */
    message: Scalars["String"];
    /** The Git commit message body */
    messageBody: Scalars["String"];
    /** The commit message body rendered to HTML. */
    messageBodyHTML: Scalars["GitHub_HTML"];
    /** The Git commit message headline */
    messageHeadline: Scalars["String"];
    /** The commit message headline rendered to HTML. */
    messageHeadlineHTML: Scalars["GitHub_HTML"];
    /** The Git object ID */
    oid: Scalars["GitHub_GitObjectID"];
    /** The parents of a commit. */
    parents: GitHub_CommitConnection;
    /** The datetime when this commit was pushed. */
    pushedDate?: Maybe<Scalars["GitHub_DateTime"]>;
    /** The Repository this commit belongs to */
    repository: GitHub_Repository;
    /** The HTTP path for this commit */
    resourcePath: Scalars["GitHub_URI"];
    /** Commit signing information, if present. */
    signature?: Maybe<GitHub_GitSignature>;
    /** Status information for this commit */
    status?: Maybe<GitHub_Status>;
    /** Returns a URL to download a tarball archive for a repository.
     * Note: For private repositories, these links are temporary and expire after five minutes.
     */
    tarballUrl: Scalars["GitHub_URI"];
    /** Commit's root Tree */
    tree: GitHub_Tree;
    /** The HTTP path for the tree of this commit */
    treeResourcePath: Scalars["GitHub_URI"];
    /** The HTTP URL for the tree of this commit */
    treeUrl: Scalars["GitHub_URI"];
    /** The HTTP URL for this commit */
    url: Scalars["GitHub_URI"];
    /** Check if the viewer is able to change their subscription status for the repository. */
    viewerCanSubscribe: Scalars["Boolean"];
    /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
    viewerSubscription?: Maybe<GitHub_SubscriptionState>;
    /** Returns a URL to download a zipball archive for a repository.
     * Note: For private repositories, these links are temporary and expire after five minutes.
     */
    zipballUrl: Scalars["GitHub_URI"];
  };

/** Represents a Git commit. */
export type GitHub_CommitAssociatedPullRequestsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHub_PullRequestOrder>;
};

/** Represents a Git commit. */
export type GitHub_CommitBlameArgs = {
  path: Scalars["String"];
};

/** Represents a Git commit. */
export type GitHub_CommitCommentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** Represents a Git commit. */
export type GitHub_CommitDeploymentsArgs = {
  environments?: Maybe<Array<Scalars["String"]>>;
  orderBy?: Maybe<GitHub_DeploymentOrder>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** Represents a Git commit. */
export type GitHub_CommitHistoryArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  path?: Maybe<Scalars["String"]>;
  author?: Maybe<GitHub_CommitAuthor>;
  since?: Maybe<Scalars["GitHub_GitTimestamp"]>;
  until?: Maybe<Scalars["GitHub_GitTimestamp"]>;
};

/** Represents a Git commit. */
export type GitHub_CommitParentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** Specifies an author for filtering Git commits. */
export type GitHub_CommitAuthor = {
  /** ID of a User to filter by. If non-null, only commits authored by this user
   * will be returned. This field takes precedence over emails.
   */
  id?: Maybe<Scalars["ID"]>;
  /** Email addresses to filter by. Commits authored by any of the specified email addresses will be returned. */
  emails?: Maybe<Array<Scalars["String"]>>;
};

/** Represents a comment on a given Commit. */
export type GitHub_CommitComment = GitHub_Node &
  GitHub_Comment &
  GitHub_Deletable &
  GitHub_Updatable &
  GitHub_UpdatableComment &
  GitHub_Reactable &
  GitHub_RepositoryNode & {
    /** The actor who authored the comment. */
    author?: Maybe<GitHub_Actor>;
    /** Author's association with the subject of the comment. */
    authorAssociation: GitHub_CommentAuthorAssociation;
    /** Identifies the comment body. */
    body: Scalars["String"];
    /** Identifies the comment body rendered to HTML. */
    bodyHTML: Scalars["GitHub_HTML"];
    /** The body rendered to text. */
    bodyText: Scalars["String"];
    /** Identifies the commit associated with the comment, if the commit exists. */
    commit?: Maybe<GitHub_Commit>;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHub_DateTime"];
    /** Check if this comment was created via an email reply. */
    createdViaEmail: Scalars["Boolean"];
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    /** The actor who edited the comment. */
    editor?: Maybe<GitHub_Actor>;
    id: Scalars["ID"];
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: Scalars["Boolean"];
    /** Returns whether or not a comment has been minimized. */
    isMinimized: Scalars["Boolean"];
    /** The moment the editor made the last edit */
    lastEditedAt?: Maybe<Scalars["GitHub_DateTime"]>;
    /** Returns why the comment was minimized. */
    minimizedReason?: Maybe<Scalars["String"]>;
    /** Identifies the file path associated with the comment. */
    path?: Maybe<Scalars["String"]>;
    /** Identifies the line position associated with the comment. */
    position?: Maybe<Scalars["Int"]>;
    /** Identifies when the comment was published at. */
    publishedAt?: Maybe<Scalars["GitHub_DateTime"]>;
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups?: Maybe<Array<GitHub_ReactionGroup>>;
    /** A list of Reactions left on the Issue. */
    reactions: GitHub_ReactionConnection;
    /** The repository associated with this node. */
    repository: GitHub_Repository;
    /** The HTTP path permalink for this commit comment. */
    resourcePath: Scalars["GitHub_URI"];
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHub_DateTime"];
    /** The HTTP URL permalink for this commit comment. */
    url: Scalars["GitHub_URI"];
    /** A list of edits to this content. */
    userContentEdits?: Maybe<GitHub_UserContentEditConnection>;
    /** Check if the current viewer can delete this object. */
    viewerCanDelete: Scalars["Boolean"];
    /** Check if the current viewer can minimize this object. */
    viewerCanMinimize: Scalars["Boolean"];
    /** Can user react to this subject */
    viewerCanReact: Scalars["Boolean"];
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"];
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>;
    /** Did the viewer author this comment. */
    viewerDidAuthor: Scalars["Boolean"];
  };

/** Represents a comment on a given Commit. */
export type GitHub_CommitCommentReactionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  content?: Maybe<GitHub_ReactionContent>;
  orderBy?: Maybe<GitHub_ReactionOrder>;
};

/** Represents a comment on a given Commit. */
export type GitHub_CommitCommentUserContentEditsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The connection type for CommitComment. */
export type GitHub_CommitCommentConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_CommitCommentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_CommitComment>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_CommitCommentEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_CommitComment>;
};

/** A thread of comments on a commit. */
export type GitHub_CommitCommentThread = GitHub_Node &
  GitHub_RepositoryNode & {
    /** The comments that exist in this thread. */
    comments: GitHub_CommitCommentConnection;
    /** The commit the comments were made on. */
    commit: GitHub_Commit;
    id: Scalars["ID"];
    /** The file the comments were made on. */
    path?: Maybe<Scalars["String"]>;
    /** The position in the diff for the commit that the comment was made on. */
    position?: Maybe<Scalars["Int"]>;
    /** The repository associated with this node. */
    repository: GitHub_Repository;
  };

/** A thread of comments on a commit. */
export type GitHub_CommitCommentThreadCommentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The connection type for Commit. */
export type GitHub_CommitConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_CommitEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Commit>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** Ordering options for commit contribution connections. */
export type GitHub_CommitContributionOrder = {
  /** The field by which to order commit contributions. */
  field: GitHub_CommitContributionOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which commit contribution connections can be ordered. */
export enum GitHub_CommitContributionOrderField {
  /** Order commit contributions by when they were made. */
  OccurredAt = "OCCURRED_AT",
  /** Order commit contributions by how many commits they represent. */
  CommitCount = "COMMIT_COUNT"
}

/** This aggregates commits made by a user within one repository. */
export type GitHub_CommitContributionsByRepository = {
  /** The commit contributions, each representing a day. */
  contributions: GitHub_CreatedCommitContributionConnection;
  /** The repository in which the commits were made. */
  repository: GitHub_Repository;
  /** The HTTP path for the user's commits to the repository in this time range. */
  resourcePath: Scalars["GitHub_URI"];
  /** The HTTP URL for the user's commits to the repository in this time range. */
  url: Scalars["GitHub_URI"];
};

/** This aggregates commits made by a user within one repository. */
export type GitHub_CommitContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHub_CommitContributionOrder>;
};

/** An edge in a connection. */
export type GitHub_CommitEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Commit>;
};

/** The connection type for Commit. */
export type GitHub_CommitHistoryConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_CommitEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Commit>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** A content attachment */
export type GitHub_ContentAttachment = {
  /** The body text of the content attachment. This parameter supports markdown. */
  body: Scalars["String"];
  /** The content reference that the content attachment is attached to. */
  contentReference: GitHub_ContentReference;
  /** Identifies the primary key from the database. */
  databaseId: Scalars["Int"];
  id: Scalars["ID"];
  /** The title of the content attachment. */
  title: Scalars["String"];
};

/** A content reference */
export type GitHub_ContentReference = {
  /** Identifies the primary key from the database. */
  databaseId: Scalars["Int"];
  id: Scalars["ID"];
  /** The reference of the content reference. */
  reference: Scalars["String"];
};

/** Represents a contribution a user made on GitHub, such as opening an issue. */
export type GitHub_Contribution = {
  /** Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars["Boolean"];
  /** When this contribution was made. */
  occurredAt: Scalars["GitHub_DateTime"];
  /** The HTTP path for this contribution. */
  resourcePath: Scalars["GitHub_URI"];
  /** The HTTP URL for this contribution. */
  url: Scalars["GitHub_URI"];
  /** The user who made this contribution. */
  user: GitHub_User;
};

/** A calendar of contributions made on GitHub by a user. */
export type GitHub_ContributionCalendar = {
  /** A list of hex color codes used in this calendar. The darker the color, the more contributions it represents. */
  colors: Array<Scalars["String"]>;
  /** Determine if the color set was chosen because it's currently Halloween. */
  isHalloween: Scalars["Boolean"];
  /** A list of the months of contributions in this calendar. */
  months: Array<GitHub_ContributionCalendarMonth>;
  /** The count of total contributions in the calendar. */
  totalContributions: Scalars["Int"];
  /** A list of the weeks of contributions in this calendar. */
  weeks: Array<GitHub_ContributionCalendarWeek>;
};

/** Represents a single day of contributions on GitHub by a user. */
export type GitHub_ContributionCalendarDay = {
  /** The hex color code that represents how many contributions were made on this day compared to others in the calendar. */
  color: Scalars["String"];
  /** How many contributions were made by the user on this day. */
  contributionCount: Scalars["Int"];
  /** The day this square represents. */
  date: Scalars["GitHub_Date"];
  /** A number representing which day of the week this square represents, e.g., 1 is Monday. */
  weekday: Scalars["Int"];
};

/** A month of contributions in a user's contribution graph. */
export type GitHub_ContributionCalendarMonth = {
  /** The date of the first day of this month. */
  firstDay: Scalars["GitHub_Date"];
  /** The name of the month. */
  name: Scalars["String"];
  /** How many weeks started in this month. */
  totalWeeks: Scalars["Int"];
  /** The year the month occurred in. */
  year: Scalars["Int"];
};

/** A week of contributions in a user's contribution graph. */
export type GitHub_ContributionCalendarWeek = {
  /** The days of contributions in this week. */
  contributionDays: Array<GitHub_ContributionCalendarDay>;
  /** The date of the earliest square in this week. */
  firstDay: Scalars["GitHub_Date"];
};

/** Ordering options for contribution connections. */
export type GitHub_ContributionOrder = {
  /** The field by which to order contributions. */
  field: GitHub_ContributionOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which contribution connections can be ordered. */
export enum GitHub_ContributionOrderField {
  /** Order contributions by when they were made. */
  OccurredAt = "OCCURRED_AT"
}

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollection = {
  /** Commit contributions made by the user, grouped by repository. */
  commitContributionsByRepository: Array<
    GitHub_CommitContributionsByRepository
  >;
  /** A calendar of this user's contributions on GitHub. */
  contributionCalendar: GitHub_ContributionCalendar;
  /** The years the user has been making contributions with the most recent year first. */
  contributionYears: Array<Scalars["Int"]>;
  /** Determine if this collection's time span ends in the current month. */
  doesEndInCurrentMonth: Scalars["Boolean"];
  /** The date of the first restricted contribution the user made in this time
   * period. Can only be non-null when the user has enabled private contribution counts.
   */
  earliestRestrictedContributionDate?: Maybe<Scalars["GitHub_Date"]>;
  /** The ending date and time of this collection. */
  endedAt: Scalars["GitHub_DateTime"];
  /** The first issue the user opened on GitHub. This will be null if that issue was
   * opened outside the collection's time range and ignoreTimeRange is false. If
   * the issue is not visible but the user has opted to show private contributions,
   * a RestrictedContribution will be returned.
   */
  firstIssueContribution?: Maybe<GitHub_CreatedIssueOrRestrictedContribution>;
  /** The first pull request the user opened on GitHub. This will be null if that
   * pull request was opened outside the collection's time range and
   * ignoreTimeRange is not true. If the pull request is not visible but the user
   * has opted to show private contributions, a RestrictedContribution will be returned.
   */
  firstPullRequestContribution?: Maybe<
    GitHub_CreatedPullRequestOrRestrictedContribution
  >;
  /** The first repository the user created on GitHub. This will be null if that
   * first repository was created outside the collection's time range and
   * ignoreTimeRange is false. If the repository is not visible, then a
   * RestrictedContribution is returned.
   */
  firstRepositoryContribution?: Maybe<
    GitHub_CreatedRepositoryOrRestrictedContribution
  >;
  /** Does the user have any more activity in the timeline that occurred prior to the collection's time range? */
  hasActivityInThePast: Scalars["Boolean"];
  /** Determine if there are any contributions in this collection. */
  hasAnyContributions: Scalars["Boolean"];
  /** Determine if the user made any contributions in this time frame whose details
   * are not visible because they were made in a private repository. Can only be
   * true if the user enabled private contribution counts.
   */
  hasAnyRestrictedContributions: Scalars["Boolean"];
  /** Whether or not the collector's time span is all within the same day. */
  isSingleDay: Scalars["Boolean"];
  /** A list of issues the user opened. */
  issueContributions: GitHub_CreatedIssueContributionConnection;
  /** Issue contributions made by the user, grouped by repository. */
  issueContributionsByRepository: Array<GitHub_IssueContributionsByRepository>;
  /** When the user signed up for GitHub. This will be null if that sign up date
   * falls outside the collection's time range and ignoreTimeRange is false.
   */
  joinedGitHubContribution?: Maybe<GitHub_JoinedGitHubContribution>;
  /** The date of the most recent restricted contribution the user made in this time
   * period. Can only be non-null when the user has enabled private contribution counts.
   */
  latestRestrictedContributionDate?: Maybe<Scalars["GitHub_Date"]>;
  /** When this collection's time range does not include any activity from the user, use this
   * to get a different collection from an earlier time range that does have activity.
   */
  mostRecentCollectionWithActivity?: Maybe<GitHub_ContributionsCollection>;
  /** Returns a different contributions collection from an earlier time range than this one
   * that does not have any contributions.
   */
  mostRecentCollectionWithoutActivity?: Maybe<GitHub_ContributionsCollection>;
  /** The issue the user opened on GitHub that received the most comments in the specified
   * time frame.
   */
  popularIssueContribution?: Maybe<GitHub_CreatedIssueContribution>;
  /** The pull request the user opened on GitHub that received the most comments in the
   * specified time frame.
   */
  popularPullRequestContribution?: Maybe<GitHub_CreatedPullRequestContribution>;
  /** Pull request contributions made by the user. */
  pullRequestContributions: GitHub_CreatedPullRequestContributionConnection;
  /** Pull request contributions made by the user, grouped by repository. */
  pullRequestContributionsByRepository: Array<
    GitHub_PullRequestContributionsByRepository
  >;
  /** Pull request review contributions made by the user. */
  pullRequestReviewContributions: GitHub_CreatedPullRequestReviewContributionConnection;
  /** Pull request review contributions made by the user, grouped by repository. */
  pullRequestReviewContributionsByRepository: Array<
    GitHub_PullRequestReviewContributionsByRepository
  >;
  /** A list of repositories owned by the user that the user created in this time range. */
  repositoryContributions: GitHub_CreatedRepositoryContributionConnection;
  /** A count of contributions made by the user that the viewer cannot access. Only
   * non-zero when the user has chosen to share their private contribution counts.
   */
  restrictedContributionsCount: Scalars["Int"];
  /** The beginning date and time of this collection. */
  startedAt: Scalars["GitHub_DateTime"];
  /** How many commits were made by the user in this time span. */
  totalCommitContributions: Scalars["Int"];
  /** How many issues the user opened. */
  totalIssueContributions: Scalars["Int"];
  /** How many pull requests the user opened. */
  totalPullRequestContributions: Scalars["Int"];
  /** How many pull request reviews the user left. */
  totalPullRequestReviewContributions: Scalars["Int"];
  /** How many different repositories the user committed to. */
  totalRepositoriesWithContributedCommits: Scalars["Int"];
  /** How many different repositories the user opened issues in. */
  totalRepositoriesWithContributedIssues: Scalars["Int"];
  /** How many different repositories the user left pull request reviews in. */
  totalRepositoriesWithContributedPullRequestReviews: Scalars["Int"];
  /** How many different repositories the user opened pull requests in. */
  totalRepositoriesWithContributedPullRequests: Scalars["Int"];
  /** How many repositories the user created. */
  totalRepositoryContributions: Scalars["Int"];
  /** The user who made the contributions in this collection. */
  user: GitHub_User;
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionCommitContributionsByRepositoryArgs = {
  maxRepositories: Scalars["Int"];
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionFirstIssueContributionArgs = {
  ignoreTimeRange: Scalars["Boolean"];
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionFirstPullRequestContributionArgs = {
  ignoreTimeRange: Scalars["Boolean"];
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionFirstRepositoryContributionArgs = {
  ignoreTimeRange: Scalars["Boolean"];
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionIssueContributionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  excludeFirst: Scalars["Boolean"];
  excludePopular: Scalars["Boolean"];
  orderBy?: Maybe<GitHub_ContributionOrder>;
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionIssueContributionsByRepositoryArgs = {
  maxRepositories: Scalars["Int"];
  excludeFirst: Scalars["Boolean"];
  excludePopular: Scalars["Boolean"];
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionJoinedGitHubContributionArgs = {
  ignoreTimeRange: Scalars["Boolean"];
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionPullRequestContributionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  excludeFirst: Scalars["Boolean"];
  excludePopular: Scalars["Boolean"];
  orderBy?: Maybe<GitHub_ContributionOrder>;
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionPullRequestContributionsByRepositoryArgs = {
  maxRepositories: Scalars["Int"];
  excludeFirst: Scalars["Boolean"];
  excludePopular: Scalars["Boolean"];
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionPullRequestReviewContributionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHub_ContributionOrder>;
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionPullRequestReviewContributionsByRepositoryArgs = {
  maxRepositories: Scalars["Int"];
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionRepositoryContributionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  excludeFirst: Scalars["Boolean"];
  orderBy?: Maybe<GitHub_ContributionOrder>;
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionTotalIssueContributionsArgs = {
  excludeFirst: Scalars["Boolean"];
  excludePopular: Scalars["Boolean"];
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionTotalPullRequestContributionsArgs = {
  excludeFirst: Scalars["Boolean"];
  excludePopular: Scalars["Boolean"];
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionTotalRepositoriesWithContributedIssuesArgs = {
  excludeFirst: Scalars["Boolean"];
  excludePopular: Scalars["Boolean"];
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionTotalRepositoriesWithContributedPullRequestsArgs = {
  excludeFirst: Scalars["Boolean"];
  excludePopular: Scalars["Boolean"];
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type GitHub_ContributionsCollectionTotalRepositoryContributionsArgs = {
  excludeFirst: Scalars["Boolean"];
};

/** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
export type GitHub_ConvertedNoteToIssueEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
};

/** Autogenerated input type of ConvertProjectCardNoteToIssue */
export type GitHub_ConvertProjectCardNoteToIssueInput = {
  /** The ProjectCard ID to convert. */
  projectCardId: Scalars["ID"];
  /** The ID of the repository to create the issue in. */
  repositoryId: Scalars["ID"];
  /** The title of the newly created issue. Defaults to the card's note text. */
  title?: Maybe<Scalars["String"]>;
  /** The body of the newly created issue. */
  body?: Maybe<Scalars["String"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of ConvertProjectCardNoteToIssue */
export type GitHub_ConvertProjectCardNoteToIssuePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The updated ProjectCard. */
  projectCard?: Maybe<GitHub_ProjectCard>;
};

/** Autogenerated input type of CreateBranchProtectionRule */
export type GitHub_CreateBranchProtectionRuleInput = {
  /** The global relay id of the repository in which a new branch protection rule should be created in. */
  repositoryId: Scalars["ID"];
  /** The glob-like pattern used to determine matching branches. */
  pattern: Scalars["String"];
  /** Are approving reviews required to update matching branches. */
  requiresApprovingReviews?: Maybe<Scalars["Boolean"]>;
  /** Number of approving reviews required to update matching branches. */
  requiredApprovingReviewCount?: Maybe<Scalars["Int"]>;
  /** Are commits required to be signed. */
  requiresCommitSignatures?: Maybe<Scalars["Boolean"]>;
  /** Can admins overwrite branch protection. */
  isAdminEnforced?: Maybe<Scalars["Boolean"]>;
  /** Are status checks required to update matching branches. */
  requiresStatusChecks?: Maybe<Scalars["Boolean"]>;
  /** Are branches required to be up to date before merging. */
  requiresStrictStatusChecks?: Maybe<Scalars["Boolean"]>;
  /** Are reviews from code owners required to update matching branches. */
  requiresCodeOwnerReviews?: Maybe<Scalars["Boolean"]>;
  /** Will new commits pushed to matching branches dismiss pull request review approvals. */
  dismissesStaleReviews?: Maybe<Scalars["Boolean"]>;
  /** Is dismissal of pull request reviews restricted. */
  restrictsReviewDismissals?: Maybe<Scalars["Boolean"]>;
  /** A list of User or Team IDs allowed to dismiss reviews on pull requests targeting matching branches. */
  reviewDismissalActorIds?: Maybe<Array<Scalars["ID"]>>;
  /** Is pushing to matching branches restricted. */
  restrictsPushes?: Maybe<Scalars["Boolean"]>;
  /** A list of User or Team IDs allowed to push to matching branches. */
  pushActorIds?: Maybe<Array<Scalars["ID"]>>;
  /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
  requiredStatusCheckContexts?: Maybe<Array<Scalars["String"]>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of CreateBranchProtectionRule */
export type GitHub_CreateBranchProtectionRulePayload = {
  /** The newly created BranchProtectionRule. */
  branchProtectionRule?: Maybe<GitHub_BranchProtectionRule>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated input type of CreateContentAttachment */
export type GitHub_CreateContentAttachmentInput = {
  /** The node ID of the content_reference. */
  contentReferenceId: Scalars["ID"];
  /** The title of the content attachment. */
  title: Scalars["String"];
  /** The body of the content attachment, which may contain markdown. */
  body: Scalars["String"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Represents the contribution a user made by committing to a repository. */
export type GitHub_CreatedCommitContribution = GitHub_Contribution & {
  /** How many commits were made on this day to this repository by the user. */
  commitCount: Scalars["Int"];
  /** Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars["Boolean"];
  /** When this contribution was made. */
  occurredAt: Scalars["GitHub_DateTime"];
  /** The repository the user made a commit in. */
  repository: GitHub_Repository;
  /** The HTTP path for this contribution. */
  resourcePath: Scalars["GitHub_URI"];
  /** The HTTP URL for this contribution. */
  url: Scalars["GitHub_URI"];
  /** The user who made this contribution. */
  user: GitHub_User;
};

/** The connection type for CreatedCommitContribution. */
export type GitHub_CreatedCommitContributionConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_CreatedCommitContributionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_CreatedCommitContribution>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of commits across days and repositories in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_CreatedCommitContributionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_CreatedCommitContribution>;
};

/** Represents the contribution a user made on GitHub by opening an issue. */
export type GitHub_CreatedIssueContribution = GitHub_Contribution & {
  /** Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars["Boolean"];
  /** The issue that was opened. */
  issue: GitHub_Issue;
  /** When this contribution was made. */
  occurredAt: Scalars["GitHub_DateTime"];
  /** The HTTP path for this contribution. */
  resourcePath: Scalars["GitHub_URI"];
  /** The HTTP URL for this contribution. */
  url: Scalars["GitHub_URI"];
  /** The user who made this contribution. */
  user: GitHub_User;
};

/** The connection type for CreatedIssueContribution. */
export type GitHub_CreatedIssueContributionConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_CreatedIssueContributionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_CreatedIssueContribution>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_CreatedIssueContributionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_CreatedIssueContribution>;
};

/** Represents either a issue the viewer can access or a restricted contribution. */
export type GitHub_CreatedIssueOrRestrictedContribution =
  | GitHub_CreatedIssueContribution
  | GitHub_RestrictedContribution;

/** Represents the contribution a user made on GitHub by opening a pull request. */
export type GitHub_CreatedPullRequestContribution = GitHub_Contribution & {
  /** Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars["Boolean"];
  /** When this contribution was made. */
  occurredAt: Scalars["GitHub_DateTime"];
  /** The pull request that was opened. */
  pullRequest: GitHub_PullRequest;
  /** The HTTP path for this contribution. */
  resourcePath: Scalars["GitHub_URI"];
  /** The HTTP URL for this contribution. */
  url: Scalars["GitHub_URI"];
  /** The user who made this contribution. */
  user: GitHub_User;
};

/** The connection type for CreatedPullRequestContribution. */
export type GitHub_CreatedPullRequestContributionConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_CreatedPullRequestContributionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_CreatedPullRequestContribution>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_CreatedPullRequestContributionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_CreatedPullRequestContribution>;
};

/** Represents either a pull request the viewer can access or a restricted contribution. */
export type GitHub_CreatedPullRequestOrRestrictedContribution =
  | GitHub_CreatedPullRequestContribution
  | GitHub_RestrictedContribution;

/** Represents the contribution a user made by leaving a review on a pull request. */
export type GitHub_CreatedPullRequestReviewContribution = GitHub_Contribution & {
  /** Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars["Boolean"];
  /** When this contribution was made. */
  occurredAt: Scalars["GitHub_DateTime"];
  /** The pull request the user reviewed. */
  pullRequest: GitHub_PullRequest;
  /** The review the user left on the pull request. */
  pullRequestReview: GitHub_PullRequestReview;
  /** The repository containing the pull request that the user reviewed. */
  repository: GitHub_Repository;
  /** The HTTP path for this contribution. */
  resourcePath: Scalars["GitHub_URI"];
  /** The HTTP URL for this contribution. */
  url: Scalars["GitHub_URI"];
  /** The user who made this contribution. */
  user: GitHub_User;
};

/** The connection type for CreatedPullRequestReviewContribution. */
export type GitHub_CreatedPullRequestReviewContributionConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_CreatedPullRequestReviewContributionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_CreatedPullRequestReviewContribution>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_CreatedPullRequestReviewContributionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_CreatedPullRequestReviewContribution>;
};

/** Represents the contribution a user made on GitHub by creating a repository. */
export type GitHub_CreatedRepositoryContribution = GitHub_Contribution & {
  /** Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars["Boolean"];
  /** When this contribution was made. */
  occurredAt: Scalars["GitHub_DateTime"];
  /** The repository that was created. */
  repository: GitHub_Repository;
  /** The HTTP path for this contribution. */
  resourcePath: Scalars["GitHub_URI"];
  /** The HTTP URL for this contribution. */
  url: Scalars["GitHub_URI"];
  /** The user who made this contribution. */
  user: GitHub_User;
};

/** The connection type for CreatedRepositoryContribution. */
export type GitHub_CreatedRepositoryContributionConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_CreatedRepositoryContributionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_CreatedRepositoryContribution>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_CreatedRepositoryContributionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_CreatedRepositoryContribution>;
};

/** Represents either a repository the viewer can access or a restricted contribution. */
export type GitHub_CreatedRepositoryOrRestrictedContribution =
  | GitHub_CreatedRepositoryContribution
  | GitHub_RestrictedContribution;

/** Autogenerated input type of CreateIssue */
export type GitHub_CreateIssueInput = {
  /** The Node ID of the repository. */
  repositoryId: Scalars["ID"];
  /** The title for the issue. */
  title: Scalars["String"];
  /** The body for the issue description. */
  body?: Maybe<Scalars["String"]>;
  /** The Node ID for the user assignee for this issue. */
  assigneeIds?: Maybe<Array<Scalars["ID"]>>;
  /** The Node ID of the milestone for this issue. */
  milestoneId?: Maybe<Scalars["ID"]>;
  /** An array of Node IDs of labels for this issue. */
  labelIds?: Maybe<Array<Scalars["ID"]>>;
  /** An array of Node IDs for projects associated with this issue. */
  projectIds?: Maybe<Array<Scalars["ID"]>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of CreateIssue */
export type GitHub_CreateIssuePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The new issue. */
  issue?: Maybe<GitHub_Issue>;
};

/** Autogenerated input type of CreateProject */
export type GitHub_CreateProjectInput = {
  /** The owner ID to create the project under. */
  ownerId: Scalars["ID"];
  /** The name of project. */
  name: Scalars["String"];
  /** The description of project. */
  body?: Maybe<Scalars["String"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of CreateProject */
export type GitHub_CreateProjectPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The new project. */
  project?: Maybe<GitHub_Project>;
};

/** Autogenerated input type of CreatePullRequest */
export type GitHub_CreatePullRequestInput = {
  /** The Node ID of the repository. */
  repositoryId: Scalars["ID"];
  /** The name of the branch you want your changes pulled into. This should be an existing branch
   * on the current repository. You cannot update the base branch on a pull request to point
   * to another repository.
   */
  baseRefName: Scalars["String"];
  /** The name of the branch where your changes are implemented. For cross-repository pull requests
   * in the same network, namespace `head_ref_name` with a user like this: `username:branch`.
   */
  headRefName: Scalars["String"];
  /** The title of the pull request. */
  title: Scalars["String"];
  /** The contents of the pull request. */
  body?: Maybe<Scalars["String"]>;
  /** Indicates whether maintainers can modify the pull request. */
  maintainerCanModify?: Maybe<Scalars["Boolean"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of CreatePullRequest */
export type GitHub_CreatePullRequestPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The new pull request. */
  pullRequest?: Maybe<GitHub_PullRequest>;
};

/** Represents a mention made by one issue or pull request to another. */
export type GitHub_CrossReferencedEvent = GitHub_Node &
  GitHub_UniformResourceLocatable & {
    /** Identifies the actor who performed the event. */
    actor?: Maybe<GitHub_Actor>;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHub_DateTime"];
    id: Scalars["ID"];
    /** Reference originated in a different repository. */
    isCrossRepository: Scalars["Boolean"];
    /** Identifies when the reference was made. */
    referencedAt: Scalars["GitHub_DateTime"];
    /** The HTTP path for this pull request. */
    resourcePath: Scalars["GitHub_URI"];
    /** Issue or pull request that made the reference. */
    source: GitHub_ReferencedSubject;
    /** Issue or pull request to which the reference was made. */
    target: GitHub_ReferencedSubject;
    /** The HTTP URL for this pull request. */
    url: Scalars["GitHub_URI"];
    /** Checks if the target will be closed when the source is merged. */
    willCloseTarget: Scalars["Boolean"];
  };

/** Autogenerated input type of DeclineTopicSuggestion */
export type GitHub_DeclineTopicSuggestionInput = {
  /** The Node ID of the repository. */
  repositoryId: Scalars["ID"];
  /** The name of the suggested topic. */
  name: Scalars["String"];
  /** The reason why the suggested topic is declined. */
  reason: GitHub_TopicSuggestionDeclineReason;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of DeclineTopicSuggestion */
export type GitHub_DeclineTopicSuggestionPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The declined topic. */
  topic?: Maybe<GitHub_Topic>;
};

/** The possible default permissions for repositories. */
export enum GitHub_DefaultRepositoryPermissionField {
  /** No access */
  None = "NONE",
  /** Can read repos by default */
  Read = "READ",
  /** Can read and write repos by default */
  Write = "WRITE",
  /** Can read, write, and administrate repos by default */
  Admin = "ADMIN"
}

/** Entities that can be deleted. */
export type GitHub_Deletable = {
  /** Check if the current viewer can delete this object. */
  viewerCanDelete: Scalars["Boolean"];
};

/** Autogenerated input type of DeleteBranchProtectionRule */
export type GitHub_DeleteBranchProtectionRuleInput = {
  /** The global relay id of the branch protection rule to be deleted. */
  branchProtectionRuleId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of DeleteBranchProtectionRule */
export type GitHub_DeleteBranchProtectionRulePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated input type of DeleteIssueComment */
export type GitHub_DeleteIssueCommentInput = {
  /** The ID of the comment to delete. */
  id: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of DeleteIssueComment */
export type GitHub_DeleteIssueCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated input type of DeleteIssue */
export type GitHub_DeleteIssueInput = {
  /** The ID of the issue to delete. */
  issueId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of DeleteIssue */
export type GitHub_DeleteIssuePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The repository the issue belonged to */
  repository?: Maybe<GitHub_Repository>;
};

/** Autogenerated input type of DeleteProjectCard */
export type GitHub_DeleteProjectCardInput = {
  /** The id of the card to delete. */
  cardId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of DeleteProjectCard */
export type GitHub_DeleteProjectCardPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The column the deleted card was in. */
  column?: Maybe<GitHub_ProjectColumn>;
  /** The deleted card ID. */
  deletedCardId?: Maybe<Scalars["ID"]>;
};

/** Autogenerated input type of DeleteProjectColumn */
export type GitHub_DeleteProjectColumnInput = {
  /** The id of the column to delete. */
  columnId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of DeleteProjectColumn */
export type GitHub_DeleteProjectColumnPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The deleted column ID. */
  deletedColumnId?: Maybe<Scalars["ID"]>;
  /** The project the deleted column was in. */
  project?: Maybe<GitHub_Project>;
};

/** Autogenerated input type of DeleteProject */
export type GitHub_DeleteProjectInput = {
  /** The Project ID to update. */
  projectId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of DeleteProject */
export type GitHub_DeleteProjectPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The repository or organization the project was removed from. */
  owner?: Maybe<GitHub_ProjectOwner>;
};

/** Autogenerated input type of DeletePullRequestReviewComment */
export type GitHub_DeletePullRequestReviewCommentInput = {
  /** The ID of the comment to delete. */
  id: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of DeletePullRequestReviewComment */
export type GitHub_DeletePullRequestReviewCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The pull request review the deleted comment belonged to. */
  pullRequestReview?: Maybe<GitHub_PullRequestReview>;
};

/** Autogenerated input type of DeletePullRequestReview */
export type GitHub_DeletePullRequestReviewInput = {
  /** The Node ID of the pull request review to delete. */
  pullRequestReviewId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of DeletePullRequestReview */
export type GitHub_DeletePullRequestReviewPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The deleted pull request review. */
  pullRequestReview?: Maybe<GitHub_PullRequestReview>;
};

/** Represents a 'demilestoned' event on a given issue or pull request. */
export type GitHub_DemilestonedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  id: Scalars["ID"];
  /** Identifies the milestone title associated with the 'demilestoned' event. */
  milestoneTitle: Scalars["String"];
  /** Object referenced by event. */
  subject: GitHub_MilestoneItem;
};

/** Represents a 'deployed' event on a given pull request. */
export type GitHub_DeployedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  /** The deployment associated with the 'deployed' event. */
  deployment: GitHub_Deployment;
  id: Scalars["ID"];
  /** PullRequest referenced by event. */
  pullRequest: GitHub_PullRequest;
  /** The ref associated with the 'deployed' event. */
  ref?: Maybe<GitHub_Ref>;
};

/** A repository deploy key. */
export type GitHub_DeployKey = GitHub_Node & {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  id: Scalars["ID"];
  /** The deploy key. */
  key: Scalars["String"];
  /** Whether or not the deploy key is read only. */
  readOnly: Scalars["Boolean"];
  /** The deploy key title. */
  title: Scalars["String"];
  /** Whether or not the deploy key has been verified. */
  verified: Scalars["Boolean"];
};

/** The connection type for DeployKey. */
export type GitHub_DeployKeyConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_DeployKeyEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_DeployKey>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_DeployKeyEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_DeployKey>;
};

/** Represents triggered deployment instance. */
export type GitHub_Deployment = GitHub_Node & {
  /** Identifies the commit sha of the deployment. */
  commit?: Maybe<GitHub_Commit>;
  /** Identifies the oid of the deployment commit, even if the commit has been deleted. */
  commitOid: Scalars["String"];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** Identifies the actor who triggered the deployment. */
  creator?: Maybe<GitHub_Actor>;
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  /** The deployment description. */
  description?: Maybe<Scalars["String"]>;
  /** The environment to which this deployment was made. */
  environment?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** The latest status of this deployment. */
  latestStatus?: Maybe<GitHub_DeploymentStatus>;
  /** Extra information that a deployment system might need. */
  payload?: Maybe<Scalars["String"]>;
  /** Identifies the Ref of the deployment, if the deployment was created by ref. */
  ref?: Maybe<GitHub_Ref>;
  /** Identifies the repository associated with the deployment. */
  repository: GitHub_Repository;
  /** The current state of the deployment. */
  state?: Maybe<GitHub_DeploymentState>;
  /** A list of statuses associated with the deployment. */
  statuses?: Maybe<GitHub_DeploymentStatusConnection>;
  /** The deployment task. */
  task?: Maybe<Scalars["String"]>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["GitHub_DateTime"];
};

/** Represents triggered deployment instance. */
export type GitHub_DeploymentStatusesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The connection type for Deployment. */
export type GitHub_DeploymentConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_DeploymentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Deployment>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_DeploymentEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Deployment>;
};

/** Represents a 'deployment_environment_changed' event on a given pull request. */
export type GitHub_DeploymentEnvironmentChangedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** The deployment status that updated the deployment environment. */
  deploymentStatus: GitHub_DeploymentStatus;
  id: Scalars["ID"];
  /** PullRequest referenced by event. */
  pullRequest: GitHub_PullRequest;
};

/** Ordering options for deployment connections */
export type GitHub_DeploymentOrder = {
  /** The field to order deployments by. */
  field: GitHub_DeploymentOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which deployment connections can be ordered. */
export enum GitHub_DeploymentOrderField {
  /** Order collection by creation time */
  CreatedAt = "CREATED_AT"
}

/** The possible states in which a deployment can be. */
export enum GitHub_DeploymentState {
  /** The pending deployment was not updated after 30 minutes. */
  Abandoned = "ABANDONED",
  /** The deployment is currently active. */
  Active = "ACTIVE",
  /** An inactive transient deployment. */
  Destroyed = "DESTROYED",
  /** The deployment experienced an error. */
  Error = "ERROR",
  /** The deployment has failed. */
  Failure = "FAILURE",
  /** The deployment is inactive. */
  Inactive = "INACTIVE",
  /** The deployment is pending. */
  Pending = "PENDING",
  /** The deployment has queued */
  Queued = "QUEUED",
  /** The deployment is in progress. */
  InProgress = "IN_PROGRESS"
}

/** Describes the status of a given deployment attempt. */
export type GitHub_DeploymentStatus = GitHub_Node & {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** Identifies the actor who triggered the deployment. */
  creator?: Maybe<GitHub_Actor>;
  /** Identifies the deployment associated with status. */
  deployment: GitHub_Deployment;
  /** Identifies the description of the deployment. */
  description?: Maybe<Scalars["String"]>;
  /** Identifies the environment URL of the deployment. */
  environmentUrl?: Maybe<Scalars["GitHub_URI"]>;
  id: Scalars["ID"];
  /** Identifies the log URL of the deployment. */
  logUrl?: Maybe<Scalars["GitHub_URI"]>;
  /** Identifies the current state of the deployment. */
  state: GitHub_DeploymentStatusState;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["GitHub_DateTime"];
};

/** The connection type for DeploymentStatus. */
export type GitHub_DeploymentStatusConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_DeploymentStatusEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_DeploymentStatus>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_DeploymentStatusEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_DeploymentStatus>;
};

/** The possible states for a deployment status. */
export enum GitHub_DeploymentStatusState {
  /** The deployment is pending. */
  Pending = "PENDING",
  /** The deployment was successful. */
  Success = "SUCCESS",
  /** The deployment has failed. */
  Failure = "FAILURE",
  /** The deployment is inactive. */
  Inactive = "INACTIVE",
  /** The deployment experienced an error. */
  Error = "ERROR",
  /** The deployment is queued */
  Queued = "QUEUED",
  /** The deployment is in progress. */
  InProgress = "IN_PROGRESS"
}

/** Autogenerated input type of DismissPullRequestReview */
export type GitHub_DismissPullRequestReviewInput = {
  /** The Node ID of the pull request review to modify. */
  pullRequestReviewId: Scalars["ID"];
  /** The contents of the pull request review dismissal message. */
  message: Scalars["String"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of DismissPullRequestReview */
export type GitHub_DismissPullRequestReviewPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The dismissed pull request review. */
  pullRequestReview?: Maybe<GitHub_PullRequestReview>;
};

/** Specifies a review comment to be left with a Pull Request Review. */
export type GitHub_DraftPullRequestReviewComment = {
  /** Path to the file being commented on. */
  path: Scalars["String"];
  /** Position in the file to leave a comment on. */
  position: Scalars["Int"];
  /** Body of the comment to leave. */
  body: Scalars["String"];
};

/** An external identity provisioned by SAML SSO or SCIM. */
export type GitHub_ExternalIdentity = GitHub_Node & {
  /** The GUID for this identity */
  guid: Scalars["String"];
  id: Scalars["ID"];
  /** Organization invitation for this SCIM-provisioned external identity */
  organizationInvitation?: Maybe<GitHub_OrganizationInvitation>;
  /** SAML Identity attributes */
  samlIdentity?: Maybe<GitHub_ExternalIdentitySamlAttributes>;
  /** SCIM Identity attributes */
  scimIdentity?: Maybe<GitHub_ExternalIdentityScimAttributes>;
  /** User linked to this external identity. Will be NULL if this identity has not been claimed by an organization member. */
  user?: Maybe<GitHub_User>;
};

/** The connection type for ExternalIdentity. */
export type GitHub_ExternalIdentityConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_ExternalIdentityEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_ExternalIdentity>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_ExternalIdentityEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_ExternalIdentity>;
};

/** SAML attributes for the External Identity */
export type GitHub_ExternalIdentitySamlAttributes = {
  /** The NameID of the SAML identity */
  nameId?: Maybe<Scalars["String"]>;
};

/** SCIM attributes for the External Identity */
export type GitHub_ExternalIdentityScimAttributes = {
  /** The userName of the SCIM identity */
  username?: Maybe<Scalars["String"]>;
};

/** The connection type for User. */
export type GitHub_FollowerConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_UserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_User>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** The connection type for User. */
export type GitHub_FollowingConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_UserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_User>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** A Gist. */
export type GitHub_Gist = GitHub_Node &
  GitHub_Starrable & {
    /** A list of comments associated with the gist */
    comments: GitHub_GistCommentConnection;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHub_DateTime"];
    /** The gist description. */
    description?: Maybe<Scalars["String"]>;
    /** The files in this gist. */
    files?: Maybe<Array<Maybe<GitHub_GistFile>>>;
    id: Scalars["ID"];
    /** Identifies if the gist is a fork. */
    isFork: Scalars["Boolean"];
    /** Whether the gist is public or not. */
    isPublic: Scalars["Boolean"];
    /** The gist name. */
    name: Scalars["String"];
    /** The gist owner. */
    owner?: Maybe<GitHub_RepositoryOwner>;
    /** Identifies when the gist was last pushed to. */
    pushedAt?: Maybe<Scalars["GitHub_DateTime"]>;
    /** A list of users who have starred this starrable. */
    stargazers: GitHub_StargazerConnection;
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHub_DateTime"];
    /** Returns a boolean indicating whether the viewing user has starred this starrable. */
    viewerHasStarred: Scalars["Boolean"];
  };

/** A Gist. */
export type GitHub_GistCommentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A Gist. */
export type GitHub_GistFilesArgs = {
  limit: Scalars["Int"];
};

/** A Gist. */
export type GitHub_GistStargazersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHub_StarOrder>;
};

/** Represents a comment on an Gist. */
export type GitHub_GistComment = GitHub_Node &
  GitHub_Comment &
  GitHub_Deletable &
  GitHub_Updatable &
  GitHub_UpdatableComment & {
    /** The actor who authored the comment. */
    author?: Maybe<GitHub_Actor>;
    /** Author's association with the gist. */
    authorAssociation: GitHub_CommentAuthorAssociation;
    /** Identifies the comment body. */
    body: Scalars["String"];
    /** The comment body rendered to HTML. */
    bodyHTML: Scalars["GitHub_HTML"];
    /** The body rendered to text. */
    bodyText: Scalars["String"];
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHub_DateTime"];
    /** Check if this comment was created via an email reply. */
    createdViaEmail: Scalars["Boolean"];
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    /** The actor who edited the comment. */
    editor?: Maybe<GitHub_Actor>;
    /** The associated gist. */
    gist: GitHub_Gist;
    id: Scalars["ID"];
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: Scalars["Boolean"];
    /** Returns whether or not a comment has been minimized. */
    isMinimized: Scalars["Boolean"];
    /** The moment the editor made the last edit */
    lastEditedAt?: Maybe<Scalars["GitHub_DateTime"]>;
    /** Returns why the comment was minimized. */
    minimizedReason?: Maybe<Scalars["String"]>;
    /** Identifies when the comment was published at. */
    publishedAt?: Maybe<Scalars["GitHub_DateTime"]>;
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHub_DateTime"];
    /** A list of edits to this content. */
    userContentEdits?: Maybe<GitHub_UserContentEditConnection>;
    /** Check if the current viewer can delete this object. */
    viewerCanDelete: Scalars["Boolean"];
    /** Check if the current viewer can minimize this object. */
    viewerCanMinimize: Scalars["Boolean"];
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"];
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>;
    /** Did the viewer author this comment. */
    viewerDidAuthor: Scalars["Boolean"];
  };

/** Represents a comment on an Gist. */
export type GitHub_GistCommentUserContentEditsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The connection type for GistComment. */
export type GitHub_GistCommentConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_GistCommentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_GistComment>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_GistCommentEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_GistComment>;
};

/** The connection type for Gist. */
export type GitHub_GistConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_GistEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Gist>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_GistEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Gist>;
};

/** A file in a gist. */
export type GitHub_GistFile = {
  /** The file name encoded to remove characters that are invalid in URL paths. */
  encodedName?: Maybe<Scalars["String"]>;
  /** The gist file encoding. */
  encoding?: Maybe<Scalars["String"]>;
  /** The file extension from the file name. */
  extension?: Maybe<Scalars["String"]>;
  /** Indicates if this file is an image. */
  isImage: Scalars["Boolean"];
  /** Whether the file's contents were truncated. */
  isTruncated: Scalars["Boolean"];
  /** The programming language this file is written in. */
  language?: Maybe<GitHub_Language>;
  /** The gist file name. */
  name?: Maybe<Scalars["String"]>;
  /** The gist file size in bytes. */
  size?: Maybe<Scalars["Int"]>;
  /** UTF8 text data or null if the file is binary */
  text?: Maybe<Scalars["String"]>;
};

/** A file in a gist. */
export type GitHub_GistFileTextArgs = {
  truncate?: Maybe<Scalars["Int"]>;
};

/** Ordering options for gist connections */
export type GitHub_GistOrder = {
  /** The field to order repositories by. */
  field: GitHub_GistOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which gist connections can be ordered. */
export enum GitHub_GistOrderField {
  /** Order gists by creation time */
  CreatedAt = "CREATED_AT",
  /** Order gists by update time */
  UpdatedAt = "UPDATED_AT",
  /** Order gists by push time */
  PushedAt = "PUSHED_AT"
}

/** The privacy of a Gist */
export enum GitHub_GistPrivacy {
  /** Public */
  Public = "PUBLIC",
  /** Secret */
  Secret = "SECRET",
  /** Gists that are public and secret */
  All = "ALL"
}

/** Represents an actor in a Git commit (ie. an author or committer). */
export type GitHub_GitActor = {
  /** A URL pointing to the author's public avatar. */
  avatarUrl: Scalars["GitHub_URI"];
  /** The timestamp of the Git action (authoring or committing). */
  date?: Maybe<Scalars["GitHub_GitTimestamp"]>;
  /** The email in the Git commit. */
  email?: Maybe<Scalars["String"]>;
  /** The name in the Git commit. */
  name?: Maybe<Scalars["String"]>;
  /** The GitHub user corresponding to the email field. Null if no such user exists. */
  user?: Maybe<GitHub_User>;
};

/** Represents an actor in a Git commit (ie. an author or committer). */
export type GitHub_GitActorAvatarUrlArgs = {
  size?: Maybe<Scalars["Int"]>;
};

/** Represents information about the GitHub instance. */
export type GitHub_GitHubMetadata = {
  /** Returns a String that's a SHA of `github-services` */
  gitHubServicesSha: Scalars["GitHub_GitObjectID"];
  /** IP addresses that users connect to for git operations */
  gitIpAddresses?: Maybe<Array<Scalars["String"]>>;
  /** IP addresses that service hooks are sent from */
  hookIpAddresses?: Maybe<Array<Scalars["String"]>>;
  /** IP addresses that the importer connects from */
  importerIpAddresses?: Maybe<Array<Scalars["String"]>>;
  /** Whether or not users are verified */
  isPasswordAuthenticationVerifiable: Scalars["Boolean"];
  /** IP addresses for GitHub Pages' A records */
  pagesIpAddresses?: Maybe<Array<Scalars["String"]>>;
};

/** Represents a Git object. */
export type GitHub_GitObject = {
  /** An abbreviated version of the Git object ID */
  abbreviatedOid: Scalars["String"];
  /** The HTTP path for this Git object */
  commitResourcePath: Scalars["GitHub_URI"];
  /** The HTTP URL for this Git object */
  commitUrl: Scalars["GitHub_URI"];
  id: Scalars["ID"];
  /** The Git object ID */
  oid: Scalars["GitHub_GitObjectID"];
  /** The Repository the Git object belongs to */
  repository: GitHub_Repository;
};

/** Information about a signature (GPG or S/MIME) on a Commit or Tag. */
export type GitHub_GitSignature = {
  /** Email used to sign this object. */
  email: Scalars["String"];
  /** True if the signature is valid and verified by GitHub. */
  isValid: Scalars["Boolean"];
  /** Payload for GPG signing object. Raw ODB object without the signature header. */
  payload: Scalars["String"];
  /** ASCII-armored signature header from object. */
  signature: Scalars["String"];
  /** GitHub user corresponding to the email signing this commit. */
  signer?: Maybe<GitHub_User>;
  /** The state of this signature. `VALID` if signature is valid and verified by
   * GitHub, otherwise represents reason why signature is considered invalid.
   */
  state: GitHub_GitSignatureState;
  /** True if the signature was made with GitHub's signing key. */
  wasSignedByGitHub: Scalars["Boolean"];
};

/** The state of a Git signature. */
export enum GitHub_GitSignatureState {
  /** Valid signature and verified by GitHub */
  Valid = "VALID",
  /** Invalid signature */
  Invalid = "INVALID",
  /** Malformed signature */
  MalformedSig = "MALFORMED_SIG",
  /** Key used for signing not known to GitHub */
  UnknownKey = "UNKNOWN_KEY",
  /** Invalid email used for signing */
  BadEmail = "BAD_EMAIL",
  /** Email used for signing unverified on GitHub */
  UnverifiedEmail = "UNVERIFIED_EMAIL",
  /** Email used for signing not known to GitHub */
  NoUser = "NO_USER",
  /** Unknown signature type */
  UnknownSigType = "UNKNOWN_SIG_TYPE",
  /** Unsigned */
  Unsigned = "UNSIGNED",
  /** Internal error - the GPG verification service is unavailable at the moment */
  GpgverifyUnavailable = "GPGVERIFY_UNAVAILABLE",
  /** Internal error - the GPG verification service misbehaved */
  GpgverifyError = "GPGVERIFY_ERROR",
  /** The usage flags for the key that signed this don't allow signing */
  NotSigningKey = "NOT_SIGNING_KEY",
  /** Signing key expired */
  ExpiredKey = "EXPIRED_KEY",
  /** Valid signature, pending certificate revocation checking */
  OcspPending = "OCSP_PENDING",
  /** Valid siganture, though certificate revocation check failed */
  OcspError = "OCSP_ERROR",
  /** The signing certificate or its chain could not be verified */
  BadCert = "BAD_CERT",
  /** One or more certificates in chain has been revoked */
  OcspRevoked = "OCSP_REVOKED"
}

/** Represents a GPG signature on a Commit or Tag. */
export type GitHub_GpgSignature = GitHub_GitSignature & {
  /** Email used to sign this object. */
  email: Scalars["String"];
  /** True if the signature is valid and verified by GitHub. */
  isValid: Scalars["Boolean"];
  /** Hex-encoded ID of the key that signed this object. */
  keyId?: Maybe<Scalars["String"]>;
  /** Payload for GPG signing object. Raw ODB object without the signature header. */
  payload: Scalars["String"];
  /** ASCII-armored signature header from object. */
  signature: Scalars["String"];
  /** GitHub user corresponding to the email signing this commit. */
  signer?: Maybe<GitHub_User>;
  /** The state of this signature. `VALID` if signature is valid and verified by
   * GitHub, otherwise represents reason why signature is considered invalid.
   */
  state: GitHub_GitSignatureState;
  /** True if the signature was made with GitHub's signing key. */
  wasSignedByGitHub: Scalars["Boolean"];
};

/** Represents a 'head_ref_deleted' event on a given pull request. */
export type GitHub_HeadRefDeletedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** Identifies the Ref associated with the `head_ref_deleted` event. */
  headRef?: Maybe<GitHub_Ref>;
  /** Identifies the name of the Ref associated with the `head_ref_deleted` event. */
  headRefName: Scalars["String"];
  id: Scalars["ID"];
  /** PullRequest referenced by event. */
  pullRequest: GitHub_PullRequest;
};

/** Represents a 'head_ref_force_pushed' event on a given pull request. */
export type GitHub_HeadRefForcePushedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the after commit SHA for the 'head_ref_force_pushed' event. */
  afterCommit?: Maybe<GitHub_Commit>;
  /** Identifies the before commit SHA for the 'head_ref_force_pushed' event. */
  beforeCommit?: Maybe<GitHub_Commit>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  id: Scalars["ID"];
  /** PullRequest referenced by event. */
  pullRequest: GitHub_PullRequest;
  /** Identifies the fully qualified ref name for the 'head_ref_force_pushed' event. */
  ref?: Maybe<GitHub_Ref>;
};

/** Represents a 'head_ref_restored' event on a given pull request. */
export type GitHub_HeadRefRestoredEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  id: Scalars["ID"];
  /** PullRequest referenced by event. */
  pullRequest: GitHub_PullRequest;
};

/** The possible states in which authentication can be configured with an identity provider. */
export enum GitHub_IdentityProviderConfigurationState {
  /** Authentication with an identity provider is configured and enforced. */
  Enforced = "ENFORCED",
  /** Authentication with an identity provider is configured but not enforced. */
  Configured = "CONFIGURED",
  /** Authentication with an identity provider is not configured. */
  Unconfigured = "UNCONFIGURED"
}

/** Autogenerated input type of ImportProject */
export type GitHub_ImportProjectInput = {
  /** The name of the Organization or User to create the Project under. */
  ownerName: Scalars["String"];
  /** The name of Project. */
  name: Scalars["String"];
  /** The description of Project. */
  body?: Maybe<Scalars["String"]>;
  /** Whether the Project is public or not. */
  public?: Maybe<Scalars["Boolean"]>;
  /** A list of columns containing issues and pull requests. */
  columnImports: Array<GitHub_ProjectColumnImport>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHub_Issue = GitHub_Node &
  GitHub_Assignable &
  GitHub_Closable &
  GitHub_Comment &
  GitHub_Updatable &
  GitHub_UpdatableComment &
  GitHub_Labelable &
  GitHub_Lockable &
  GitHub_Reactable &
  GitHub_RepositoryNode &
  GitHub_Subscribable &
  GitHub_UniformResourceLocatable & {
    /** Reason that the conversation was locked. */
    activeLockReason?: Maybe<GitHub_LockReason>;
    /** A list of Users assigned to this object. */
    assignees: GitHub_UserConnection;
    /** The actor who authored the comment. */
    author?: Maybe<GitHub_Actor>;
    /** Author's association with the subject of the comment. */
    authorAssociation: GitHub_CommentAuthorAssociation;
    /** Identifies the body of the issue. */
    body: Scalars["String"];
    /** Identifies the body of the issue rendered to HTML. */
    bodyHTML: Scalars["GitHub_HTML"];
    /** Identifies the body of the issue rendered to text. */
    bodyText: Scalars["String"];
    /** `true` if the object is closed (definition of closed may depend on type) */
    closed: Scalars["Boolean"];
    /** Identifies the date and time when the object was closed. */
    closedAt?: Maybe<Scalars["GitHub_DateTime"]>;
    /** A list of comments associated with the Issue. */
    comments: GitHub_IssueCommentConnection;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHub_DateTime"];
    /** Check if this comment was created via an email reply. */
    createdViaEmail: Scalars["Boolean"];
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    /** The actor who edited the comment. */
    editor?: Maybe<GitHub_Actor>;
    id: Scalars["ID"];
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: Scalars["Boolean"];
    /** A list of labels associated with the object. */
    labels?: Maybe<GitHub_LabelConnection>;
    /** The moment the editor made the last edit */
    lastEditedAt?: Maybe<Scalars["GitHub_DateTime"]>;
    /** `true` if the object is locked */
    locked: Scalars["Boolean"];
    /** Identifies the milestone associated with the issue. */
    milestone?: Maybe<GitHub_Milestone>;
    /** Identifies the issue number. */
    number: Scalars["Int"];
    /** A list of Users that are participating in the Issue conversation. */
    participants: GitHub_UserConnection;
    /** List of project cards associated with this issue. */
    projectCards: GitHub_ProjectCardConnection;
    /** Identifies when the comment was published at. */
    publishedAt?: Maybe<Scalars["GitHub_DateTime"]>;
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups?: Maybe<Array<GitHub_ReactionGroup>>;
    /** A list of Reactions left on the Issue. */
    reactions: GitHub_ReactionConnection;
    /** The repository associated with this node. */
    repository: GitHub_Repository;
    /** The HTTP path for this issue */
    resourcePath: Scalars["GitHub_URI"];
    /** Identifies the state of the issue. */
    state: GitHub_IssueState;
    /** A list of events, comments, commits, etc. associated with the issue. */
    timeline: GitHub_IssueTimelineConnection;
    /** A list of events, comments, commits, etc. associated with the issue. */
    timelineItems: GitHub_IssueTimelineItemsConnection;
    /** Identifies the issue title. */
    title: Scalars["String"];
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHub_DateTime"];
    /** The HTTP URL for this issue */
    url: Scalars["GitHub_URI"];
    /** A list of edits to this content. */
    userContentEdits?: Maybe<GitHub_UserContentEditConnection>;
    /** Can user react to this subject */
    viewerCanReact: Scalars["Boolean"];
    /** Check if the viewer is able to change their subscription status for the repository. */
    viewerCanSubscribe: Scalars["Boolean"];
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"];
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>;
    /** Did the viewer author this comment. */
    viewerDidAuthor: Scalars["Boolean"];
    /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
    viewerSubscription?: Maybe<GitHub_SubscriptionState>;
  };

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHub_IssueAssigneesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHub_IssueCommentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHub_IssueLabelsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHub_IssueParticipantsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHub_IssueProjectCardsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  archivedStates?: Maybe<Array<Maybe<GitHub_ProjectCardArchivedState>>>;
};

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHub_IssueReactionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  content?: Maybe<GitHub_ReactionContent>;
  orderBy?: Maybe<GitHub_ReactionOrder>;
};

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHub_IssueTimelineArgs = {
  since?: Maybe<Scalars["GitHub_DateTime"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHub_IssueTimelineItemsArgs = {
  since?: Maybe<Scalars["GitHub_DateTime"]>;
  skip?: Maybe<Scalars["Int"]>;
  itemTypes?: Maybe<Array<GitHub_IssueTimelineItemsItemType>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type GitHub_IssueUserContentEditsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** Represents a comment on an Issue. */
export type GitHub_IssueComment = GitHub_Node &
  GitHub_Comment &
  GitHub_Deletable &
  GitHub_Updatable &
  GitHub_UpdatableComment &
  GitHub_Reactable &
  GitHub_RepositoryNode & {
    /** The actor who authored the comment. */
    author?: Maybe<GitHub_Actor>;
    /** Author's association with the subject of the comment. */
    authorAssociation: GitHub_CommentAuthorAssociation;
    /** The body as Markdown. */
    body: Scalars["String"];
    /** The body rendered to HTML. */
    bodyHTML: Scalars["GitHub_HTML"];
    /** The body rendered to text. */
    bodyText: Scalars["String"];
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHub_DateTime"];
    /** Check if this comment was created via an email reply. */
    createdViaEmail: Scalars["Boolean"];
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    /** The actor who edited the comment. */
    editor?: Maybe<GitHub_Actor>;
    id: Scalars["ID"];
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: Scalars["Boolean"];
    /** Returns whether or not a comment has been minimized. */
    isMinimized: Scalars["Boolean"];
    /** Identifies the issue associated with the comment. */
    issue: GitHub_Issue;
    /** The moment the editor made the last edit */
    lastEditedAt?: Maybe<Scalars["GitHub_DateTime"]>;
    /** Returns why the comment was minimized. */
    minimizedReason?: Maybe<Scalars["String"]>;
    /** Identifies when the comment was published at. */
    publishedAt?: Maybe<Scalars["GitHub_DateTime"]>;
    /** Returns the pull request associated with the comment, if this comment was made on a
     * pull request.
     */
    pullRequest?: Maybe<GitHub_PullRequest>;
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups?: Maybe<Array<GitHub_ReactionGroup>>;
    /** A list of Reactions left on the Issue. */
    reactions: GitHub_ReactionConnection;
    /** The repository associated with this node. */
    repository: GitHub_Repository;
    /** The HTTP path for this issue comment */
    resourcePath: Scalars["GitHub_URI"];
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHub_DateTime"];
    /** The HTTP URL for this issue comment */
    url: Scalars["GitHub_URI"];
    /** A list of edits to this content. */
    userContentEdits?: Maybe<GitHub_UserContentEditConnection>;
    /** Check if the current viewer can delete this object. */
    viewerCanDelete: Scalars["Boolean"];
    /** Check if the current viewer can minimize this object. */
    viewerCanMinimize: Scalars["Boolean"];
    /** Can user react to this subject */
    viewerCanReact: Scalars["Boolean"];
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"];
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>;
    /** Did the viewer author this comment. */
    viewerDidAuthor: Scalars["Boolean"];
  };

/** Represents a comment on an Issue. */
export type GitHub_IssueCommentReactionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  content?: Maybe<GitHub_ReactionContent>;
  orderBy?: Maybe<GitHub_ReactionOrder>;
};

/** Represents a comment on an Issue. */
export type GitHub_IssueCommentUserContentEditsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The connection type for IssueComment. */
export type GitHub_IssueCommentConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_IssueCommentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_IssueComment>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_IssueCommentEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_IssueComment>;
};

/** The connection type for Issue. */
export type GitHub_IssueConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_IssueEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Issue>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** This aggregates issues opened by a user within one repository. */
export type GitHub_IssueContributionsByRepository = {
  /** The issue contributions. */
  contributions: GitHub_CreatedIssueContributionConnection;
  /** The repository in which the issues were opened. */
  repository: GitHub_Repository;
};

/** This aggregates issues opened by a user within one repository. */
export type GitHub_IssueContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHub_ContributionOrder>;
};

/** An edge in a connection. */
export type GitHub_IssueEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Issue>;
};

/** Ways in which to filter lists of issues. */
export type GitHub_IssueFilters = {
  /** List issues assigned to given name. Pass in `null` for issues with no assigned
   * user, and `*` for issues assigned to any user.
   */
  assignee?: Maybe<Scalars["String"]>;
  /** List issues created by given name. */
  createdBy?: Maybe<Scalars["String"]>;
  /** List issues where the list of label names exist on the issue. */
  labels?: Maybe<Array<Scalars["String"]>>;
  /** List issues where the given name is mentioned in the issue. */
  mentioned?: Maybe<Scalars["String"]>;
  /** List issues by given milestone argument. If an string representation of an
   * integer is passed, it should refer to a milestone by its number field. Pass in
   * `null` for issues with no milestone, and `*` for issues that are assigned to any milestone.
   */
  milestone?: Maybe<Scalars["String"]>;
  /** List issues that have been updated at or after the given date. */
  since?: Maybe<Scalars["GitHub_DateTime"]>;
  /** List issues filtered by the list of states given. */
  states?: Maybe<Array<GitHub_IssueState>>;
  /** List issues subscribed to by viewer. */
  viewerSubscribed?: Maybe<Scalars["Boolean"]>;
};

/** Ways in which lists of issues can be ordered upon return. */
export type GitHub_IssueOrder = {
  /** The field in which to order issues by. */
  field: GitHub_IssueOrderField;
  /** The direction in which to order issues by the specified field. */
  direction: GitHub_OrderDirection;
};

/** Properties by which issue connections can be ordered. */
export enum GitHub_IssueOrderField {
  /** Order issues by creation time */
  CreatedAt = "CREATED_AT",
  /** Order issues by update time */
  UpdatedAt = "UPDATED_AT",
  /** Order issues by comment count */
  Comments = "COMMENTS"
}

/** Used for return value of Repository.issueOrPullRequest. */
export type GitHub_IssueOrPullRequest = GitHub_Issue | GitHub_PullRequest;

/** The possible PubSub channels for an issue. */
export enum GitHub_IssuePubSubTopic {
  /** The channel ID for observing issue updates. */
  Updated = "UPDATED",
  /** The channel ID for marking an issue as read. */
  Markasread = "MARKASREAD",
  /** The channel ID for updating items on the issue timeline. */
  Timeline = "TIMELINE",
  /** The channel ID for observing issue state updates. */
  State = "STATE"
}

/** The possible states of an issue. */
export enum GitHub_IssueState {
  /** An issue that is still open */
  Open = "OPEN",
  /** An issue that has been closed */
  Closed = "CLOSED"
}

/** The connection type for IssueTimelineItem. */
export type GitHub_IssueTimelineConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_IssueTimelineItemEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_IssueTimelineItem>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An item in an issue timeline */
export type GitHub_IssueTimelineItem =
  | GitHub_Commit
  | GitHub_IssueComment
  | GitHub_CrossReferencedEvent
  | GitHub_ClosedEvent
  | GitHub_ReopenedEvent
  | GitHub_SubscribedEvent
  | GitHub_UnsubscribedEvent
  | GitHub_ReferencedEvent
  | GitHub_AssignedEvent
  | GitHub_UnassignedEvent
  | GitHub_LabeledEvent
  | GitHub_UnlabeledEvent
  | GitHub_UserBlockedEvent
  | GitHub_MilestonedEvent
  | GitHub_DemilestonedEvent
  | GitHub_RenamedTitleEvent
  | GitHub_LockedEvent
  | GitHub_UnlockedEvent
  | GitHub_TransferredEvent;

/** An edge in a connection. */
export type GitHub_IssueTimelineItemEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_IssueTimelineItem>;
};

/** An item in an issue timeline */
export type GitHub_IssueTimelineItems =
  | GitHub_IssueComment
  | GitHub_CrossReferencedEvent
  | GitHub_AddedToProjectEvent
  | GitHub_AssignedEvent
  | GitHub_ClosedEvent
  | GitHub_CommentDeletedEvent
  | GitHub_ConvertedNoteToIssueEvent
  | GitHub_DemilestonedEvent
  | GitHub_LabeledEvent
  | GitHub_LockedEvent
  | GitHub_MentionedEvent
  | GitHub_MilestonedEvent
  | GitHub_MovedColumnsInProjectEvent
  | GitHub_PinnedEvent
  | GitHub_ReferencedEvent
  | GitHub_RemovedFromProjectEvent
  | GitHub_RenamedTitleEvent
  | GitHub_ReopenedEvent
  | GitHub_SubscribedEvent
  | GitHub_TransferredEvent
  | GitHub_UnassignedEvent
  | GitHub_UnlabeledEvent
  | GitHub_UnlockedEvent
  | GitHub_UserBlockedEvent
  | GitHub_UnpinnedEvent
  | GitHub_UnsubscribedEvent;

/** The connection type for IssueTimelineItems. */
export type GitHub_IssueTimelineItemsConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_IssueTimelineItemsEdge>>>;
  /** Identifies the count of items after applying `before` and `after` filters. */
  filteredCount: Scalars["Int"];
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_IssueTimelineItems>>>;
  /** Identifies the count of items after applying `before`/`after` filters and `first`/`last`/`skip` slicing. */
  pageCount: Scalars["Int"];
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
  /** Identifies the date and time when the timeline was last updated. */
  updatedAt: Scalars["GitHub_DateTime"];
};

/** An edge in a connection. */
export type GitHub_IssueTimelineItemsEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_IssueTimelineItems>;
};

/** The possible item types found in a timeline. */
export enum GitHub_IssueTimelineItemsItemType {
  /** Represents a comment on an Issue. */
  IssueComment = "ISSUE_COMMENT",
  /** Represents a mention made by one issue or pull request to another. */
  CrossReferencedEvent = "CROSS_REFERENCED_EVENT",
  /** Represents a 'added_to_project' event on a given issue or pull request. */
  AddedToProjectEvent = "ADDED_TO_PROJECT_EVENT",
  /** Represents an 'assigned' event on any assignable object. */
  AssignedEvent = "ASSIGNED_EVENT",
  /** Represents a 'closed' event on any `Closable`. */
  ClosedEvent = "CLOSED_EVENT",
  /** Represents a 'comment_deleted' event on a given issue or pull request. */
  CommentDeletedEvent = "COMMENT_DELETED_EVENT",
  /** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
  ConvertedNoteToIssueEvent = "CONVERTED_NOTE_TO_ISSUE_EVENT",
  /** Represents a 'demilestoned' event on a given issue or pull request. */
  DemilestonedEvent = "DEMILESTONED_EVENT",
  /** Represents a 'labeled' event on a given issue or pull request. */
  LabeledEvent = "LABELED_EVENT",
  /** Represents a 'locked' event on a given issue or pull request. */
  LockedEvent = "LOCKED_EVENT",
  /** Represents a 'mentioned' event on a given issue or pull request. */
  MentionedEvent = "MENTIONED_EVENT",
  /** Represents a 'milestoned' event on a given issue or pull request. */
  MilestonedEvent = "MILESTONED_EVENT",
  /** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
  MovedColumnsInProjectEvent = "MOVED_COLUMNS_IN_PROJECT_EVENT",
  /** Represents a 'pinned' event on a given issue or pull request. */
  PinnedEvent = "PINNED_EVENT",
  /** Represents a 'referenced' event on a given `ReferencedSubject`. */
  ReferencedEvent = "REFERENCED_EVENT",
  /** Represents a 'removed_from_project' event on a given issue or pull request. */
  RemovedFromProjectEvent = "REMOVED_FROM_PROJECT_EVENT",
  /** Represents a 'renamed' event on a given issue or pull request */
  RenamedTitleEvent = "RENAMED_TITLE_EVENT",
  /** Represents a 'reopened' event on any `Closable`. */
  ReopenedEvent = "REOPENED_EVENT",
  /** Represents a 'subscribed' event on a given `Subscribable`. */
  SubscribedEvent = "SUBSCRIBED_EVENT",
  /** Represents a 'transferred' event on a given issue or pull request. */
  TransferredEvent = "TRANSFERRED_EVENT",
  /** Represents an 'unassigned' event on any assignable object. */
  UnassignedEvent = "UNASSIGNED_EVENT",
  /** Represents an 'unlabeled' event on a given issue or pull request. */
  UnlabeledEvent = "UNLABELED_EVENT",
  /** Represents an 'unlocked' event on a given issue or pull request. */
  UnlockedEvent = "UNLOCKED_EVENT",
  /** Represents a 'user_blocked' event on a given user. */
  UserBlockedEvent = "USER_BLOCKED_EVENT",
  /** Represents an 'unpinned' event on a given issue or pull request. */
  UnpinnedEvent = "UNPINNED_EVENT",
  /** Represents an 'unsubscribed' event on a given `Subscribable`. */
  UnsubscribedEvent = "UNSUBSCRIBED_EVENT"
}

/** Represents a user signing up for a GitHub account. */
export type GitHub_JoinedGitHubContribution = GitHub_Contribution & {
  /** Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars["Boolean"];
  /** When this contribution was made. */
  occurredAt: Scalars["GitHub_DateTime"];
  /** The HTTP path for this contribution. */
  resourcePath: Scalars["GitHub_URI"];
  /** The HTTP URL for this contribution. */
  url: Scalars["GitHub_URI"];
  /** The user who made this contribution. */
  user: GitHub_User;
};

/** A label for categorizing Issues or Milestones with a given Repository. */
export type GitHub_Label = GitHub_Node & {
  /** Identifies the label color. */
  color: Scalars["String"];
  /** Identifies the date and time when the label was created. */
  createdAt?: Maybe<Scalars["GitHub_DateTime"]>;
  /** A brief description of this label. */
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** Indicates whether or not this is a default label. */
  isDefault: Scalars["Boolean"];
  /** A list of issues associated with this label. */
  issues: GitHub_IssueConnection;
  /** Identifies the label name. */
  name: Scalars["String"];
  /** A list of pull requests associated with this label. */
  pullRequests: GitHub_PullRequestConnection;
  /** The repository associated with this label. */
  repository: GitHub_Repository;
  /** The HTTP path for this label. */
  resourcePath: Scalars["GitHub_URI"];
  /** Identifies the date and time when the label was last updated. */
  updatedAt?: Maybe<Scalars["GitHub_DateTime"]>;
  /** The HTTP URL for this label. */
  url: Scalars["GitHub_URI"];
};

/** A label for categorizing Issues or Milestones with a given Repository. */
export type GitHub_LabelIssuesArgs = {
  orderBy?: Maybe<GitHub_IssueOrder>;
  labels?: Maybe<Array<Scalars["String"]>>;
  states?: Maybe<Array<GitHub_IssueState>>;
  filterBy?: Maybe<GitHub_IssueFilters>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A label for categorizing Issues or Milestones with a given Repository. */
export type GitHub_LabelPullRequestsArgs = {
  states?: Maybe<Array<GitHub_PullRequestState>>;
  labels?: Maybe<Array<Scalars["String"]>>;
  headRefName?: Maybe<Scalars["String"]>;
  baseRefName?: Maybe<Scalars["String"]>;
  orderBy?: Maybe<GitHub_IssueOrder>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An object that can have labels assigned to it. */
export type GitHub_Labelable = {
  /** A list of labels associated with the object. */
  labels?: Maybe<GitHub_LabelConnection>;
};

/** An object that can have labels assigned to it. */
export type GitHub_LabelableLabelsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The connection type for Label. */
export type GitHub_LabelConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_LabelEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Label>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** Represents a 'labeled' event on a given issue or pull request. */
export type GitHub_LabeledEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  id: Scalars["ID"];
  /** Identifies the label associated with the 'labeled' event. */
  label: GitHub_Label;
  /** Identifies the `Labelable` associated with the event. */
  labelable: GitHub_Labelable;
};

/** An edge in a connection. */
export type GitHub_LabelEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Label>;
};

/** Represents a given language found in repositories. */
export type GitHub_Language = GitHub_Node & {
  /** The color defined for the current language. */
  color?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** The name of the current language. */
  name: Scalars["String"];
};

/** A list of languages associated with the parent. */
export type GitHub_LanguageConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_LanguageEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Language>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
  /** The total size in bytes of files written in that language. */
  totalSize: Scalars["Int"];
};

/** Represents the language of a repository. */
export type GitHub_LanguageEdge = {
  cursor: Scalars["String"];
  node: GitHub_Language;
  /** The number of bytes of code written in the language. */
  size: Scalars["Int"];
};

/** Ordering options for language connections. */
export type GitHub_LanguageOrder = {
  /** The field to order languages by. */
  field: GitHub_LanguageOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which language connections can be ordered. */
export enum GitHub_LanguageOrderField {
  /** Order languages by the size of all files containing the language */
  Size = "SIZE"
}

/** A repository's open source license */
export type GitHub_License = GitHub_Node & {
  /** The full text of the license */
  body: Scalars["String"];
  /** The conditions set by the license */
  conditions: Array<Maybe<GitHub_LicenseRule>>;
  /** A human-readable description of the license */
  description?: Maybe<Scalars["String"]>;
  /** Whether the license should be featured */
  featured: Scalars["Boolean"];
  /** Whether the license should be displayed in license pickers */
  hidden: Scalars["Boolean"];
  id: Scalars["ID"];
  /** Instructions on how to implement the license */
  implementation?: Maybe<Scalars["String"]>;
  /** The lowercased SPDX ID of the license */
  key: Scalars["String"];
  /** The limitations set by the license */
  limitations: Array<Maybe<GitHub_LicenseRule>>;
  /** The license full name specified by <https://spdx.org/licenses> */
  name: Scalars["String"];
  /** Customary short name if applicable (e.g, GPLv3) */
  nickname?: Maybe<Scalars["String"]>;
  /** The permissions set by the license */
  permissions: Array<Maybe<GitHub_LicenseRule>>;
  /** Whether the license is a pseudo-license placeholder (e.g., other, no-license) */
  pseudoLicense: Scalars["Boolean"];
  /** Short identifier specified by <https://spdx.org/licenses> */
  spdxId?: Maybe<Scalars["String"]>;
  /** URL to the license on <https://choosealicense.com> */
  url?: Maybe<Scalars["GitHub_URI"]>;
};

/** Describes a License's conditions, permissions, and limitations */
export type GitHub_LicenseRule = {
  /** A description of the rule */
  description: Scalars["String"];
  /** The machine-readable rule key */
  key: Scalars["String"];
  /** The human-readable rule label */
  label: Scalars["String"];
};

/** An object that can be locked. */
export type GitHub_Lockable = {
  /** Reason that the conversation was locked. */
  activeLockReason?: Maybe<GitHub_LockReason>;
  /** `true` if the object is locked */
  locked: Scalars["Boolean"];
};

/** Represents a 'locked' event on a given issue or pull request. */
export type GitHub_LockedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  id: Scalars["ID"];
  /** Reason that the conversation was locked (optional). */
  lockReason?: Maybe<GitHub_LockReason>;
  /** Object that was locked. */
  lockable: GitHub_Lockable;
};

/** Autogenerated input type of LockLockable */
export type GitHub_LockLockableInput = {
  /** ID of the issue or pull request to be locked. */
  lockableId: Scalars["ID"];
  /** A reason for why the issue or pull request will be locked. */
  lockReason?: Maybe<GitHub_LockReason>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of LockLockable */
export type GitHub_LockLockablePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The item that was locked. */
  lockedRecord?: Maybe<GitHub_Lockable>;
};

/** The possible reasons that an issue or pull request was locked. */
export enum GitHub_LockReason {
  /** The issue or pull request was locked because the conversation was off-topic. */
  OffTopic = "OFF_TOPIC",
  /** The issue or pull request was locked because the conversation was too heated. */
  TooHeated = "TOO_HEATED",
  /** The issue or pull request was locked because the conversation was resolved. */
  Resolved = "RESOLVED",
  /** The issue or pull request was locked because the conversation was spam. */
  Spam = "SPAM"
}

/** A public description of a Marketplace category. */
export type GitHub_MarketplaceCategory = GitHub_Node & {
  /** The category's description. */
  description?: Maybe<Scalars["String"]>;
  /** The technical description of how apps listed in this category work with GitHub. */
  howItWorks?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** The category's name. */
  name: Scalars["String"];
  /** How many Marketplace listings have this as their primary category. */
  primaryListingCount: Scalars["Int"];
  /** The HTTP path for this Marketplace category. */
  resourcePath: Scalars["GitHub_URI"];
  /** How many Marketplace listings have this as their secondary category. */
  secondaryListingCount: Scalars["Int"];
  /** The short name of the category used in its URL. */
  slug: Scalars["String"];
  /** The HTTP URL for this Marketplace category. */
  url: Scalars["GitHub_URI"];
};

/** A listing in the GitHub integration marketplace. */
export type GitHub_MarketplaceListing = GitHub_Node & {
  /** The GitHub App this listing represents. */
  app?: Maybe<GitHub_App>;
  /** URL to the listing owner's company site. */
  companyUrl?: Maybe<Scalars["GitHub_URI"]>;
  /** The HTTP path for configuring access to the listing's integration or OAuth app */
  configurationResourcePath: Scalars["GitHub_URI"];
  /** The HTTP URL for configuring access to the listing's integration or OAuth app */
  configurationUrl: Scalars["GitHub_URI"];
  /** URL to the listing's documentation. */
  documentationUrl?: Maybe<Scalars["GitHub_URI"]>;
  /** The listing's detailed description. */
  extendedDescription?: Maybe<Scalars["String"]>;
  /** The listing's detailed description rendered to HTML. */
  extendedDescriptionHTML: Scalars["GitHub_HTML"];
  /** The listing's introductory description. */
  fullDescription: Scalars["String"];
  /** The listing's introductory description rendered to HTML. */
  fullDescriptionHTML: Scalars["GitHub_HTML"];
  /** Whether this listing has been submitted for review from GitHub for approval to be displayed in the Marketplace. */
  hasApprovalBeenRequested: Scalars["Boolean"];
  /** Does this listing have any plans with a free trial? */
  hasPublishedFreeTrialPlans: Scalars["Boolean"];
  /** Does this listing have a terms of service link? */
  hasTermsOfService: Scalars["Boolean"];
  /** A technical description of how this app works with GitHub. */
  howItWorks?: Maybe<Scalars["String"]>;
  /** The listing's technical description rendered to HTML. */
  howItWorksHTML: Scalars["GitHub_HTML"];
  id: Scalars["ID"];
  /** URL to install the product to the viewer's account or organization. */
  installationUrl?: Maybe<Scalars["GitHub_URI"]>;
  /** Whether this listing's app has been installed for the current viewer */
  installedForViewer: Scalars["Boolean"];
  /** Whether this listing has been approved for display in the Marketplace. */
  isApproved: Scalars["Boolean"];
  /** Whether this listing has been removed from the Marketplace. */
  isArchived: Scalars["Boolean"];
  /** Whether this listing has been removed from the Marketplace. */
  isDelisted: Scalars["Boolean"];
  /** Whether this listing is still an editable draft that has not been submitted
   * for review and is not publicly visible in the Marketplace.
   */
  isDraft: Scalars["Boolean"];
  /** Whether the product this listing represents is available as part of a paid plan. */
  isPaid: Scalars["Boolean"];
  /** Whether this listing has been approved for display in the Marketplace. */
  isPublic: Scalars["Boolean"];
  /** Whether this listing has been rejected by GitHub for display in the Marketplace. */
  isRejected: Scalars["Boolean"];
  /** Whether this listing has been approved for unverified display in the Marketplace. */
  isUnverified: Scalars["Boolean"];
  /** Whether this draft listing has been submitted for review for approval to be unverified in the Marketplace. */
  isUnverifiedPending: Scalars["Boolean"];
  /** Whether this draft listing has been submitted for review from GitHub for approval to be verified in the Marketplace. */
  isVerificationPendingFromDraft: Scalars["Boolean"];
  /** Whether this unverified listing has been submitted for review from GitHub for approval to be verified in the Marketplace. */
  isVerificationPendingFromUnverified: Scalars["Boolean"];
  /** Whether this listing has been approved for verified display in the Marketplace. */
  isVerified: Scalars["Boolean"];
  /** The hex color code, without the leading '#', for the logo background. */
  logoBackgroundColor: Scalars["String"];
  /** URL for the listing's logo image. */
  logoUrl?: Maybe<Scalars["GitHub_URI"]>;
  /** The listing's full name. */
  name: Scalars["String"];
  /** The listing's very short description without a trailing period or ampersands. */
  normalizedShortDescription: Scalars["String"];
  /** URL to the listing's detailed pricing. */
  pricingUrl?: Maybe<Scalars["GitHub_URI"]>;
  /** The category that best describes the listing. */
  primaryCategory: GitHub_MarketplaceCategory;
  /** URL to the listing's privacy policy, may return an empty string for listings that do not require a privacy policy URL. */
  privacyPolicyUrl: Scalars["GitHub_URI"];
  /** The HTTP path for the Marketplace listing. */
  resourcePath: Scalars["GitHub_URI"];
  /** The URLs for the listing's screenshots. */
  screenshotUrls: Array<Maybe<Scalars["String"]>>;
  /** An alternate category that describes the listing. */
  secondaryCategory?: Maybe<GitHub_MarketplaceCategory>;
  /** The listing's very short description. */
  shortDescription: Scalars["String"];
  /** The short name of the listing used in its URL. */
  slug: Scalars["String"];
  /** URL to the listing's status page. */
  statusUrl?: Maybe<Scalars["GitHub_URI"]>;
  /** An email address for support for this listing's app. */
  supportEmail?: Maybe<Scalars["String"]>;
  /** Either a URL or an email address for support for this listing's app, may
   * return an empty string for listings that do not require a support URL.
   */
  supportUrl: Scalars["GitHub_URI"];
  /** URL to the listing's terms of service. */
  termsOfServiceUrl?: Maybe<Scalars["GitHub_URI"]>;
  /** The HTTP URL for the Marketplace listing. */
  url: Scalars["GitHub_URI"];
  /** Can the current viewer add plans for this Marketplace listing. */
  viewerCanAddPlans: Scalars["Boolean"];
  /** Can the current viewer approve this Marketplace listing. */
  viewerCanApprove: Scalars["Boolean"];
  /** Can the current viewer delist this Marketplace listing. */
  viewerCanDelist: Scalars["Boolean"];
  /** Can the current viewer edit this Marketplace listing. */
  viewerCanEdit: Scalars["Boolean"];
  /** Can the current viewer edit the primary and secondary category of this
   * Marketplace listing.
   */
  viewerCanEditCategories: Scalars["Boolean"];
  /** Can the current viewer edit the plans for this Marketplace listing. */
  viewerCanEditPlans: Scalars["Boolean"];
  /** Can the current viewer return this Marketplace listing to draft state
   * so it becomes editable again.
   */
  viewerCanRedraft: Scalars["Boolean"];
  /** Can the current viewer reject this Marketplace listing by returning it to
   * an editable draft state or rejecting it entirely.
   */
  viewerCanReject: Scalars["Boolean"];
  /** Can the current viewer request this listing be reviewed for display in
   * the Marketplace as verified.
   */
  viewerCanRequestApproval: Scalars["Boolean"];
  /** Indicates whether the current user has an active subscription to this Marketplace listing. */
  viewerHasPurchased: Scalars["Boolean"];
  /** Indicates if the current user has purchased a subscription to this Marketplace listing
   * for all of the organizations the user owns.
   */
  viewerHasPurchasedForAllOrganizations: Scalars["Boolean"];
  /** Does the current viewer role allow them to administer this Marketplace listing. */
  viewerIsListingAdmin: Scalars["Boolean"];
};

/** A listing in the GitHub integration marketplace. */
export type GitHub_MarketplaceListingLogoUrlArgs = {
  size: Scalars["Int"];
};

/** Look up Marketplace Listings */
export type GitHub_MarketplaceListingConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_MarketplaceListingEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_MarketplaceListing>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_MarketplaceListingEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_MarketplaceListing>;
};

/** Entities that have members who can set status messages. */
export type GitHub_MemberStatusable = {
  /** Get the status messages members of this entity have set that are either public or visible only to the organization. */
  memberStatuses: GitHub_UserStatusConnection;
};

/** Entities that have members who can set status messages. */
export type GitHub_MemberStatusableMemberStatusesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHub_UserStatusOrder>;
};

/** Represents a 'mentioned' event on a given issue or pull request. */
export type GitHub_MentionedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
};

/** Whether or not a PullRequest can be merged. */
export enum GitHub_MergeableState {
  /** The pull request can be merged. */
  Mergeable = "MERGEABLE",
  /** The pull request cannot be merged due to merge conflicts. */
  Conflicting = "CONFLICTING",
  /** The mergeability of the pull request is still being calculated. */
  Unknown = "UNKNOWN"
}

/** Represents a 'merged' event on a given pull request. */
export type GitHub_MergedEvent = GitHub_Node &
  GitHub_UniformResourceLocatable & {
    /** Identifies the actor who performed the event. */
    actor?: Maybe<GitHub_Actor>;
    /** Identifies the commit associated with the `merge` event. */
    commit?: Maybe<GitHub_Commit>;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHub_DateTime"];
    id: Scalars["ID"];
    /** Identifies the Ref associated with the `merge` event. */
    mergeRef?: Maybe<GitHub_Ref>;
    /** Identifies the name of the Ref associated with the `merge` event. */
    mergeRefName: Scalars["String"];
    /** PullRequest referenced by event. */
    pullRequest: GitHub_PullRequest;
    /** The HTTP path for this merged event. */
    resourcePath: Scalars["GitHub_URI"];
    /** The HTTP URL for this merged event. */
    url: Scalars["GitHub_URI"];
  };

/** Autogenerated input type of MergePullRequest */
export type GitHub_MergePullRequestInput = {
  /** ID of the pull request to be merged. */
  pullRequestId: Scalars["ID"];
  /** Commit headline to use for the merge commit; if omitted, a default message will be used. */
  commitHeadline?: Maybe<Scalars["String"]>;
  /** Commit body to use for the merge commit; if omitted, a default message will be used */
  commitBody?: Maybe<Scalars["String"]>;
  /** OID that the pull request head ref must match to allow merge; if omitted, no check is performed. */
  expectedHeadOid?: Maybe<Scalars["GitHub_GitObjectID"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of MergePullRequest */
export type GitHub_MergePullRequestPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The pull request that was merged. */
  pullRequest?: Maybe<GitHub_PullRequest>;
};

/** Represents a Milestone object on a given repository. */
export type GitHub_Milestone = GitHub_Node &
  GitHub_Closable &
  GitHub_UniformResourceLocatable & {
    /** `true` if the object is closed (definition of closed may depend on type) */
    closed: Scalars["Boolean"];
    /** Identifies the date and time when the object was closed. */
    closedAt?: Maybe<Scalars["GitHub_DateTime"]>;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHub_DateTime"];
    /** Identifies the actor who created the milestone. */
    creator?: Maybe<GitHub_Actor>;
    /** Identifies the description of the milestone. */
    description?: Maybe<Scalars["String"]>;
    /** Identifies the due date of the milestone. */
    dueOn?: Maybe<Scalars["GitHub_DateTime"]>;
    id: Scalars["ID"];
    /** A list of issues associated with the milestone. */
    issues: GitHub_IssueConnection;
    /** Identifies the number of the milestone. */
    number: Scalars["Int"];
    /** A list of pull requests associated with the milestone. */
    pullRequests: GitHub_PullRequestConnection;
    /** The repository associated with this milestone. */
    repository: GitHub_Repository;
    /** The HTTP path for this milestone */
    resourcePath: Scalars["GitHub_URI"];
    /** Identifies the state of the milestone. */
    state: GitHub_MilestoneState;
    /** Identifies the title of the milestone. */
    title: Scalars["String"];
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHub_DateTime"];
    /** The HTTP URL for this milestone */
    url: Scalars["GitHub_URI"];
  };

/** Represents a Milestone object on a given repository. */
export type GitHub_MilestoneIssuesArgs = {
  orderBy?: Maybe<GitHub_IssueOrder>;
  labels?: Maybe<Array<Scalars["String"]>>;
  states?: Maybe<Array<GitHub_IssueState>>;
  filterBy?: Maybe<GitHub_IssueFilters>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** Represents a Milestone object on a given repository. */
export type GitHub_MilestonePullRequestsArgs = {
  states?: Maybe<Array<GitHub_PullRequestState>>;
  labels?: Maybe<Array<Scalars["String"]>>;
  headRefName?: Maybe<Scalars["String"]>;
  baseRefName?: Maybe<Scalars["String"]>;
  orderBy?: Maybe<GitHub_IssueOrder>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The connection type for Milestone. */
export type GitHub_MilestoneConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_MilestoneEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Milestone>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** Represents a 'milestoned' event on a given issue or pull request. */
export type GitHub_MilestonedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  id: Scalars["ID"];
  /** Identifies the milestone title associated with the 'milestoned' event. */
  milestoneTitle: Scalars["String"];
  /** Object referenced by event. */
  subject: GitHub_MilestoneItem;
};

/** An edge in a connection. */
export type GitHub_MilestoneEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Milestone>;
};

/** Types that can be inside a Milestone. */
export type GitHub_MilestoneItem = GitHub_Issue | GitHub_PullRequest;

/** Ordering options for milestone connections. */
export type GitHub_MilestoneOrder = {
  /** The field to order milestones by. */
  field: GitHub_MilestoneOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which milestone connections can be ordered. */
export enum GitHub_MilestoneOrderField {
  /** Order milestones by when they are due. */
  DueDate = "DUE_DATE",
  /** Order milestones by when they were created. */
  CreatedAt = "CREATED_AT",
  /** Order milestones by when they were last updated. */
  UpdatedAt = "UPDATED_AT",
  /** Order milestones by their number. */
  Number = "NUMBER"
}

/** The possible states of a milestone. */
export enum GitHub_MilestoneState {
  /** A milestone that is still open. */
  Open = "OPEN",
  /** A milestone that has been closed. */
  Closed = "CLOSED"
}

/** Autogenerated input type of MinimizeComment */
export type GitHub_MinimizeCommentInput = {
  /** The Node ID of the subject to modify. */
  subjectId: Scalars["ID"];
  /** The classification of comment */
  classifier: GitHub_ReportedContentClassifiers;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
export type GitHub_MovedColumnsInProjectEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
};

/** Autogenerated input type of MoveProjectCard */
export type GitHub_MoveProjectCardInput = {
  /** The id of the card to move. */
  cardId: Scalars["ID"];
  /** The id of the column to move it into. */
  columnId: Scalars["ID"];
  /** Place the new card after the card with this id. Pass null to place it at the top. */
  afterCardId?: Maybe<Scalars["ID"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of MoveProjectCard */
export type GitHub_MoveProjectCardPayload = {
  /** The new edge of the moved card. */
  cardEdge?: Maybe<GitHub_ProjectCardEdge>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated input type of MoveProjectColumn */
export type GitHub_MoveProjectColumnInput = {
  /** The id of the column to move. */
  columnId: Scalars["ID"];
  /** Place the new column after the column with this id. Pass null to place it at the front. */
  afterColumnId?: Maybe<Scalars["ID"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of MoveProjectColumn */
export type GitHub_MoveProjectColumnPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The new edge of the moved column. */
  columnEdge?: Maybe<GitHub_ProjectColumnEdge>;
};

/** An object with an ID. */
export type GitHub_Node = {
  /** ID of the object. */
  id: Scalars["ID"];
};

/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export enum GitHub_OrderDirection {
  /** Specifies an ascending order for a given `orderBy` argument. */
  Asc = "ASC",
  /** Specifies a descending order for a given `orderBy` argument. */
  Desc = "DESC"
}

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_Organization = GitHub_Node &
  GitHub_Actor &
  GitHub_RegistryPackageOwner &
  GitHub_RegistryPackageSearch &
  GitHub_ProjectOwner &
  GitHub_RepositoryOwner &
  GitHub_UniformResourceLocatable &
  GitHub_MemberStatusable &
  GitHub_ProfileOwner & {
    /** Determine if this repository owner has any items that can be pinned to their profile. */
    anyPinnableItems: Scalars["Boolean"];
    /** A URL pointing to the organization's public avatar. */
    avatarUrl: Scalars["GitHub_URI"];
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    /** The organization's public profile description. */
    description?: Maybe<Scalars["String"]>;
    /** The organization's public email. */
    email?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    /** Whether the organization has verified its profile email and website. */
    isVerified: Scalars["Boolean"];
    /** Showcases a selection of repositories and gists that the profile owner has
     * either curated or that have been selected automatically based on popularity.
     */
    itemShowcase: GitHub_ProfileItemShowcase;
    /** The organization's public profile location. */
    location?: Maybe<Scalars["String"]>;
    /** The organization's login name. */
    login: Scalars["String"];
    /** Get the status messages members of this entity have set that are either public or visible only to the organization. */
    memberStatuses: GitHub_UserStatusConnection;
    /** A list of users who are members of this organization. */
    membersWithRole: GitHub_OrganizationMemberConnection;
    /** The organization's public profile name. */
    name?: Maybe<Scalars["String"]>;
    /** The HTTP path creating a new team */
    newTeamResourcePath: Scalars["GitHub_URI"];
    /** The HTTP URL creating a new team */
    newTeamUrl: Scalars["GitHub_URI"];
    /** The billing email for the organization. */
    organizationBillingEmail?: Maybe<Scalars["String"]>;
    /** A list of users who have been invited to join this organization. */
    pendingMembers: GitHub_UserConnection;
    /** A list of repositories and gists this profile owner can pin to their profile. */
    pinnableItems: GitHub_PinnableItemConnection;
    /** A list of repositories and gists this profile owner has pinned to their profile */
    pinnedItems: GitHub_PinnableItemConnection;
    /** Returns how many more items this profile owner can pin to their profile. */
    pinnedItemsRemaining: Scalars["Int"];
    /** A list of repositories this user has pinned to their profile */
    pinnedRepositories: GitHub_RepositoryConnection;
    /** Find project by number. */
    project?: Maybe<GitHub_Project>;
    /** A list of projects under the owner. */
    projects: GitHub_ProjectConnection;
    /** The HTTP path listing organization's projects */
    projectsResourcePath: Scalars["GitHub_URI"];
    /** The HTTP URL listing organization's projects */
    projectsUrl: Scalars["GitHub_URI"];
    /** A list of repositories that the user owns. */
    repositories: GitHub_RepositoryConnection;
    /** Find Repository. */
    repository?: Maybe<GitHub_Repository>;
    /** When true the organization requires all members, billing managers, and outside
     * collaborators to enable two-factor authentication.
     */
    requiresTwoFactorAuthentication?: Maybe<Scalars["Boolean"]>;
    /** The HTTP path for this organization. */
    resourcePath: Scalars["GitHub_URI"];
    /** The Organization's SAML identity providers */
    samlIdentityProvider?: Maybe<GitHub_OrganizationIdentityProvider>;
    /** Find an organization's team by its slug. */
    team?: Maybe<GitHub_Team>;
    /** A list of teams in this organization. */
    teams: GitHub_TeamConnection;
    /** The HTTP path listing organization's teams */
    teamsResourcePath: Scalars["GitHub_URI"];
    /** The HTTP URL listing organization's teams */
    teamsUrl: Scalars["GitHub_URI"];
    /** The HTTP URL for this organization. */
    url: Scalars["GitHub_URI"];
    /** Organization is adminable by the viewer. */
    viewerCanAdminister: Scalars["Boolean"];
    /** Can the viewer pin repositories and gists to the profile? */
    viewerCanChangePinnedItems: Scalars["Boolean"];
    /** Can the current viewer create new projects on this owner. */
    viewerCanCreateProjects: Scalars["Boolean"];
    /** Viewer can create repositories on this organization */
    viewerCanCreateRepositories: Scalars["Boolean"];
    /** Viewer can create teams on this organization. */
    viewerCanCreateTeams: Scalars["Boolean"];
    /** Viewer is an active member of this organization. */
    viewerIsAMember: Scalars["Boolean"];
    /** The organization's public profile URL. */
    websiteUrl?: Maybe<Scalars["GitHub_URI"]>;
  };

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationAnyPinnableItemsArgs = {
  type?: Maybe<GitHub_PinnableItemType>;
};

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationAvatarUrlArgs = {
  size?: Maybe<Scalars["Int"]>;
};

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationMemberStatusesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHub_UserStatusOrder>;
};

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationMembersWithRoleArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationPendingMembersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationPinnableItemsArgs = {
  types?: Maybe<Array<GitHub_PinnableItemType>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationPinnedItemsArgs = {
  types?: Maybe<Array<GitHub_PinnableItemType>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationPinnedRepositoriesArgs = {
  privacy?: Maybe<GitHub_RepositoryPrivacy>;
  orderBy?: Maybe<GitHub_RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars["Boolean"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationProjectArgs = {
  number: Scalars["Int"];
};

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationProjectsArgs = {
  orderBy?: Maybe<GitHub_ProjectOrder>;
  search?: Maybe<Scalars["String"]>;
  states?: Maybe<Array<GitHub_ProjectState>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationRepositoriesArgs = {
  privacy?: Maybe<GitHub_RepositoryPrivacy>;
  orderBy?: Maybe<GitHub_RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars["Boolean"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  isFork?: Maybe<Scalars["Boolean"]>;
};

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationRepositoryArgs = {
  name: Scalars["String"];
};

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationTeamArgs = {
  slug: Scalars["String"];
};

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type GitHub_OrganizationTeamsArgs = {
  privacy?: Maybe<GitHub_TeamPrivacy>;
  role?: Maybe<GitHub_TeamRole>;
  query?: Maybe<Scalars["String"]>;
  userLogins?: Maybe<Array<Scalars["String"]>>;
  orderBy?: Maybe<GitHub_TeamOrder>;
  ldapMapped?: Maybe<Scalars["Boolean"]>;
  rootTeamsOnly: Scalars["Boolean"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The connection type for Organization. */
export type GitHub_OrganizationConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_OrganizationEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Organization>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_OrganizationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Organization>;
};

/** An Identity Provider configured to provision SAML and SCIM identities for Organizations */
export type GitHub_OrganizationIdentityProvider = GitHub_Node & {
  /** The digest algorithm used to sign SAML requests for the Identity Provider. */
  digestMethod?: Maybe<Scalars["GitHub_URI"]>;
  /** External Identities provisioned by this Identity Provider */
  externalIdentities: GitHub_ExternalIdentityConnection;
  id: Scalars["ID"];
  /** The x509 certificate used by the Identity Provder to sign assertions and responses. */
  idpCertificate?: Maybe<Scalars["GitHub_X509Certificate"]>;
  /** The Issuer Entity ID for the SAML Identity Provider */
  issuer?: Maybe<Scalars["String"]>;
  /** Organization this Identity Provider belongs to */
  organization?: Maybe<GitHub_Organization>;
  /** The signature algorithm used to sign SAML requests for the Identity Provider. */
  signatureMethod?: Maybe<Scalars["GitHub_URI"]>;
  /** The URL endpoint for the Identity Provider's SAML SSO. */
  ssoUrl?: Maybe<Scalars["GitHub_URI"]>;
};

/** An Identity Provider configured to provision SAML and SCIM identities for Organizations */
export type GitHub_OrganizationIdentityProviderExternalIdentitiesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** An Invitation for a user to an organization. */
export type GitHub_OrganizationInvitation = GitHub_Node & {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** The email address of the user invited to the organization. */
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** The type of invitation that was sent (e.g. email, user). */
  invitationType: GitHub_OrganizationInvitationType;
  /** The user who was invited to the organization. */
  invitee?: Maybe<GitHub_User>;
  /** The user who created the invitation. */
  inviter: GitHub_User;
  /** The organization the invite is for */
  organization: GitHub_Organization;
  /** The user's pending role in the organization (e.g. member, owner). */
  role: GitHub_OrganizationInvitationRole;
};

/** The connection type for OrganizationInvitation. */
export type GitHub_OrganizationInvitationConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_OrganizationInvitationEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_OrganizationInvitation>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_OrganizationInvitationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_OrganizationInvitation>;
};

/** The possible organization invitation roles. */
export enum GitHub_OrganizationInvitationRole {
  /** The user is invited to be a direct member of the organization. */
  DirectMember = "DIRECT_MEMBER",
  /** The user is invited to be an admin of the organization. */
  Admin = "ADMIN",
  /** The user is invited to be a billing manager of the organization. */
  BillingManager = "BILLING_MANAGER",
  /** The user's previous role will be reinstated. */
  Reinstate = "REINSTATE"
}

/** The possible organization invitation types. */
export enum GitHub_OrganizationInvitationType {
  /** The invitation was to an existing user. */
  User = "USER",
  /** The invitation was to an email address. */
  Email = "EMAIL"
}

/** The connection type for User. */
export type GitHub_OrganizationMemberConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_OrganizationMemberEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_User>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** Represents a user within an organization. */
export type GitHub_OrganizationMemberEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** Whether the organization member has two factor enabled or not. Returns null if information is not available to viewer. */
  hasTwoFactorEnabled?: Maybe<Scalars["Boolean"]>;
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_User>;
  /** The role this user has in the organization. */
  role?: Maybe<GitHub_OrganizationMemberRole>;
};

/** The possible roles within an organization for its members. */
export enum GitHub_OrganizationMemberRole {
  /** The user is a member of the organization. */
  Member = "MEMBER",
  /** The user is an administrator of the organization. */
  Admin = "ADMIN"
}

/** Information about pagination in a connection. */
export type GitHub_PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>;
};

/** Types that can grant permissions on a repository to a user */
export type GitHub_PermissionGranter =
  | GitHub_Organization
  | GitHub_Repository
  | GitHub_Team;

/** A level of permission and source for a user's access to a repository. */
export type GitHub_PermissionSource = {
  /** The organization the repository belongs to. */
  organization: GitHub_Organization;
  /** The level of access this source has granted to the user. */
  permission: GitHub_DefaultRepositoryPermissionField;
  /** The source of this permission. */
  source: GitHub_PermissionGranter;
};

/** Autogenerated input type of PinIssue */
export type GitHub_PinIssueInput = {
  /** The ID of the issue to be pinned */
  issueId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Types that can be pinned to a profile page. */
export type GitHub_PinnableItem = GitHub_Gist | GitHub_Repository;

/** The connection type for PinnableItem. */
export type GitHub_PinnableItemConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_PinnableItemEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_PinnableItem>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_PinnableItemEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_PinnableItem>;
};

/** Represents items that can be pinned to a profile page. */
export enum GitHub_PinnableItemType {
  /** A repository. */
  Repository = "REPOSITORY",
  /** A gist. */
  Gist = "GIST"
}

/** Represents a 'pinned' event on a given issue or pull request. */
export type GitHub_PinnedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  id: Scalars["ID"];
  /** Identifies the issue associated with the event. */
  issue: GitHub_Issue;
};

/** A curatable list of repositories relating to a repository owner, which defaults
 * to showing the most popular repositories they own.
 */
export type GitHub_ProfileItemShowcase = {
  /** Whether or not the owner has pinned any repositories or gists. */
  hasPinnedItems: Scalars["Boolean"];
  /** The repositories and gists in the showcase. If the profile owner has any
   * pinned items, those will be returned. Otherwise, the profile owner's popular
   * repositories will be returned.
   */
  items: GitHub_PinnableItemConnection;
};

/** A curatable list of repositories relating to a repository owner, which defaults
 * to showing the most popular repositories they own.
 */
export type GitHub_ProfileItemShowcaseItemsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** Represents any entity on GitHub that has a profile page. */
export type GitHub_ProfileOwner = {
  /** Determine if this repository owner has any items that can be pinned to their profile. */
  anyPinnableItems: Scalars["Boolean"];
  /** The public profile email. */
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** Showcases a selection of repositories and gists that the profile owner has
   * either curated or that have been selected automatically based on popularity.
   */
  itemShowcase: GitHub_ProfileItemShowcase;
  /** The public profile location. */
  location?: Maybe<Scalars["String"]>;
  /** The username used to login. */
  login: Scalars["String"];
  /** The public profile name. */
  name?: Maybe<Scalars["String"]>;
  /** A list of repositories and gists this profile owner can pin to their profile. */
  pinnableItems: GitHub_PinnableItemConnection;
  /** A list of repositories and gists this profile owner has pinned to their profile */
  pinnedItems: GitHub_PinnableItemConnection;
  /** Returns how many more items this profile owner can pin to their profile. */
  pinnedItemsRemaining: Scalars["Int"];
  /** Can the viewer pin repositories and gists to the profile? */
  viewerCanChangePinnedItems: Scalars["Boolean"];
  /** The public profile website URL. */
  websiteUrl?: Maybe<Scalars["GitHub_URI"]>;
};

/** Represents any entity on GitHub that has a profile page. */
export type GitHub_ProfileOwnerAnyPinnableItemsArgs = {
  type?: Maybe<GitHub_PinnableItemType>;
};

/** Represents any entity on GitHub that has a profile page. */
export type GitHub_ProfileOwnerPinnableItemsArgs = {
  types?: Maybe<Array<GitHub_PinnableItemType>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** Represents any entity on GitHub that has a profile page. */
export type GitHub_ProfileOwnerPinnedItemsArgs = {
  types?: Maybe<Array<GitHub_PinnableItemType>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** Projects manage issues, pull requests and notes within a project owner. */
export type GitHub_Project = GitHub_Node &
  GitHub_Closable &
  GitHub_Updatable & {
    /** The project's description body. */
    body?: Maybe<Scalars["String"]>;
    /** The projects description body rendered to HTML. */
    bodyHTML: Scalars["GitHub_HTML"];
    /** `true` if the object is closed (definition of closed may depend on type) */
    closed: Scalars["Boolean"];
    /** Identifies the date and time when the object was closed. */
    closedAt?: Maybe<Scalars["GitHub_DateTime"]>;
    /** List of columns in the project */
    columns: GitHub_ProjectColumnConnection;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHub_DateTime"];
    /** The actor who originally created the project. */
    creator?: Maybe<GitHub_Actor>;
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    id: Scalars["ID"];
    /** The project's name. */
    name: Scalars["String"];
    /** The project's number. */
    number: Scalars["Int"];
    /** The project's owner. Currently limited to repositories, organizations, and users. */
    owner: GitHub_ProjectOwner;
    /** List of pending cards in this project */
    pendingCards: GitHub_ProjectCardConnection;
    /** The HTTP path for this project */
    resourcePath: Scalars["GitHub_URI"];
    /** Whether the project is open or closed. */
    state: GitHub_ProjectState;
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHub_DateTime"];
    /** The HTTP URL for this project */
    url: Scalars["GitHub_URI"];
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"];
  };

/** Projects manage issues, pull requests and notes within a project owner. */
export type GitHub_ProjectColumnsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** Projects manage issues, pull requests and notes within a project owner. */
export type GitHub_ProjectPendingCardsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  archivedStates?: Maybe<Array<Maybe<GitHub_ProjectCardArchivedState>>>;
};

/** A card in a project. */
export type GitHub_ProjectCard = GitHub_Node & {
  /** The project column this card is associated under. A card may only belong to one
   * project column at a time. The column field will be null if the card is created
   * in a pending state and has yet to be associated with a column. Once cards are
   * associated with a column, they will not become pending in the future.
   */
  column?: Maybe<GitHub_ProjectColumn>;
  /** The card content item */
  content?: Maybe<GitHub_ProjectCardItem>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** The actor who created this card */
  creator?: Maybe<GitHub_Actor>;
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  /** Whether the card is archived */
  isArchived: Scalars["Boolean"];
  /** The card note */
  note?: Maybe<Scalars["String"]>;
  /** The project that contains this card. */
  project: GitHub_Project;
  /** The HTTP path for this card */
  resourcePath: Scalars["GitHub_URI"];
  /** The state of ProjectCard */
  state?: Maybe<GitHub_ProjectCardState>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["GitHub_DateTime"];
  /** The HTTP URL for this card */
  url: Scalars["GitHub_URI"];
};

/** The possible archived states of a project card. */
export enum GitHub_ProjectCardArchivedState {
  /** A project card that is archived */
  Archived = "ARCHIVED",
  /** A project card that is not archived */
  NotArchived = "NOT_ARCHIVED"
}

/** The connection type for ProjectCard. */
export type GitHub_ProjectCardConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_ProjectCardEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_ProjectCard>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_ProjectCardEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_ProjectCard>;
};

/** An issue or PR and its owning repository to be used in a project card. */
export type GitHub_ProjectCardImport = {
  /** Repository name with owner (owner/repository). */
  repository: Scalars["String"];
  /** The issue or pull request number. */
  number: Scalars["Int"];
};

/** Types that can be inside Project Cards. */
export type GitHub_ProjectCardItem = GitHub_Issue | GitHub_PullRequest;

/** Various content states of a ProjectCard */
export enum GitHub_ProjectCardState {
  /** The card has content only. */
  ContentOnly = "CONTENT_ONLY",
  /** The card has a note only. */
  NoteOnly = "NOTE_ONLY",
  /** The card is redacted. */
  Redacted = "REDACTED"
}

/** A column inside a project. */
export type GitHub_ProjectColumn = GitHub_Node & {
  /** List of cards in the column */
  cards: GitHub_ProjectCardConnection;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  /** The project column's name. */
  name: Scalars["String"];
  /** The project that contains this column. */
  project: GitHub_Project;
  /** The semantic purpose of the column */
  purpose?: Maybe<GitHub_ProjectColumnPurpose>;
  /** The HTTP path for this project column */
  resourcePath: Scalars["GitHub_URI"];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["GitHub_DateTime"];
  /** The HTTP URL for this project column */
  url: Scalars["GitHub_URI"];
};

/** A column inside a project. */
export type GitHub_ProjectColumnCardsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  archivedStates?: Maybe<Array<Maybe<GitHub_ProjectCardArchivedState>>>;
};

/** The connection type for ProjectColumn. */
export type GitHub_ProjectColumnConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_ProjectColumnEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_ProjectColumn>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_ProjectColumnEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_ProjectColumn>;
};

/** A project column and a list of its issues and PRs. */
export type GitHub_ProjectColumnImport = {
  /** The name of the column. */
  columnName: Scalars["String"];
  /** The position of the column, starting from 0. */
  position: Scalars["Int"];
  /** A list of issues and pull requests in the column. */
  issues?: Maybe<Array<GitHub_ProjectCardImport>>;
};

/** The semantic purpose of the column - todo, in progress, or done. */
export enum GitHub_ProjectColumnPurpose {
  /** The column contains cards still to be worked on */
  Todo = "TODO",
  /** The column contains cards which are currently being worked on */
  InProgress = "IN_PROGRESS",
  /** The column contains cards which are complete */
  Done = "DONE"
}

/** A list of projects associated with the owner. */
export type GitHub_ProjectConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_ProjectEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Project>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_ProjectEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Project>;
};

/** Ways in which lists of projects can be ordered upon return. */
export type GitHub_ProjectOrder = {
  /** The field in which to order projects by. */
  field: GitHub_ProjectOrderField;
  /** The direction in which to order projects by the specified field. */
  direction: GitHub_OrderDirection;
};

/** Properties by which project connections can be ordered. */
export enum GitHub_ProjectOrderField {
  /** Order projects by creation time */
  CreatedAt = "CREATED_AT",
  /** Order projects by update time */
  UpdatedAt = "UPDATED_AT",
  /** Order projects by name */
  Name = "NAME"
}

/** Represents an owner of a Project. */
export type GitHub_ProjectOwner = {
  id: Scalars["ID"];
  /** Find project by number. */
  project?: Maybe<GitHub_Project>;
  /** A list of projects under the owner. */
  projects: GitHub_ProjectConnection;
  /** The HTTP path listing owners projects */
  projectsResourcePath: Scalars["GitHub_URI"];
  /** The HTTP URL listing owners projects */
  projectsUrl: Scalars["GitHub_URI"];
  /** Can the current viewer create new projects on this owner. */
  viewerCanCreateProjects: Scalars["Boolean"];
};

/** Represents an owner of a Project. */
export type GitHub_ProjectOwnerProjectArgs = {
  number: Scalars["Int"];
};

/** Represents an owner of a Project. */
export type GitHub_ProjectOwnerProjectsArgs = {
  orderBy?: Maybe<GitHub_ProjectOrder>;
  search?: Maybe<Scalars["String"]>;
  states?: Maybe<Array<GitHub_ProjectState>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** State of the project; either 'open' or 'closed' */
export enum GitHub_ProjectState {
  /** The project is open. */
  Open = "OPEN",
  /** The project is closed. */
  Closed = "CLOSED"
}

/** A user's public key. */
export type GitHub_PublicKey = GitHub_Node & {
  /** The last time this authorization was used to perform an action */
  accessedAt?: Maybe<Scalars["GitHub_DateTime"]>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** The fingerprint for this PublicKey */
  fingerprint?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** Whether this PublicKey is read-only or not */
  isReadOnly: Scalars["Boolean"];
  /** The public key string */
  key: Scalars["String"];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["GitHub_DateTime"];
};

/** The connection type for PublicKey. */
export type GitHub_PublicKeyConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_PublicKeyEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_PublicKey>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_PublicKeyEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_PublicKey>;
};

/** A repository pull request. */
export type GitHub_PullRequest = GitHub_Node &
  GitHub_Assignable &
  GitHub_Closable &
  GitHub_Comment &
  GitHub_Updatable &
  GitHub_UpdatableComment &
  GitHub_Labelable &
  GitHub_Lockable &
  GitHub_Reactable &
  GitHub_RepositoryNode &
  GitHub_Subscribable &
  GitHub_UniformResourceLocatable & {
    /** Reason that the conversation was locked. */
    activeLockReason?: Maybe<GitHub_LockReason>;
    /** The number of additions in this pull request. */
    additions: Scalars["Int"];
    /** A list of Users assigned to this object. */
    assignees: GitHub_UserConnection;
    /** The actor who authored the comment. */
    author?: Maybe<GitHub_Actor>;
    /** Author's association with the subject of the comment. */
    authorAssociation: GitHub_CommentAuthorAssociation;
    /** Identifies the base Ref associated with the pull request. */
    baseRef?: Maybe<GitHub_Ref>;
    /** Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted. */
    baseRefName: Scalars["String"];
    /** Identifies the oid of the base ref associated with the pull request, even if the ref has been deleted. */
    baseRefOid: Scalars["GitHub_GitObjectID"];
    /** The repository associated with this pull request's base Ref. */
    baseRepository?: Maybe<GitHub_Repository>;
    /** The body as Markdown. */
    body: Scalars["String"];
    /** The body rendered to HTML. */
    bodyHTML: Scalars["GitHub_HTML"];
    /** The body rendered to text. */
    bodyText: Scalars["String"];
    /** The number of changed files in this pull request. */
    changedFiles: Scalars["Int"];
    /** `true` if the pull request is closed */
    closed: Scalars["Boolean"];
    /** Identifies the date and time when the object was closed. */
    closedAt?: Maybe<Scalars["GitHub_DateTime"]>;
    /** A list of comments associated with the pull request. */
    comments: GitHub_IssueCommentConnection;
    /** A list of commits present in this pull request's head branch not present in the base branch. */
    commits: GitHub_PullRequestCommitConnection;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHub_DateTime"];
    /** Check if this comment was created via an email reply. */
    createdViaEmail: Scalars["Boolean"];
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    /** The number of deletions in this pull request. */
    deletions: Scalars["Int"];
    /** The actor who edited this pull request's body. */
    editor?: Maybe<GitHub_Actor>;
    /** Lists the files changed within this pull request. */
    files?: Maybe<GitHub_PullRequestChangedFileConnection>;
    /** Identifies the head Ref associated with the pull request. */
    headRef?: Maybe<GitHub_Ref>;
    /** Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted. */
    headRefName: Scalars["String"];
    /** Identifies the oid of the head ref associated with the pull request, even if the ref has been deleted. */
    headRefOid: Scalars["GitHub_GitObjectID"];
    /** The repository associated with this pull request's head Ref. */
    headRepository?: Maybe<GitHub_Repository>;
    /** The owner of the repository associated with this pull request's head Ref. */
    headRepositoryOwner?: Maybe<GitHub_RepositoryOwner>;
    id: Scalars["ID"];
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: Scalars["Boolean"];
    /** The head and base repositories are different. */
    isCrossRepository: Scalars["Boolean"];
    /** A list of labels associated with the object. */
    labels?: Maybe<GitHub_LabelConnection>;
    /** The moment the editor made the last edit */
    lastEditedAt?: Maybe<Scalars["GitHub_DateTime"]>;
    /** `true` if the pull request is locked */
    locked: Scalars["Boolean"];
    /** Indicates whether maintainers can modify the pull request. */
    maintainerCanModify: Scalars["Boolean"];
    /** The commit that was created when this pull request was merged. */
    mergeCommit?: Maybe<GitHub_Commit>;
    /** Whether or not the pull request can be merged based on the existence of merge conflicts. */
    mergeable: GitHub_MergeableState;
    /** Whether or not the pull request was merged. */
    merged: Scalars["Boolean"];
    /** The date and time that the pull request was merged. */
    mergedAt?: Maybe<Scalars["GitHub_DateTime"]>;
    /** The actor who merged the pull request. */
    mergedBy?: Maybe<GitHub_Actor>;
    /** Identifies the milestone associated with the pull request. */
    milestone?: Maybe<GitHub_Milestone>;
    /** Identifies the pull request number. */
    number: Scalars["Int"];
    /** A list of Users that are participating in the Pull Request conversation. */
    participants: GitHub_UserConnection;
    /** The permalink to the pull request. */
    permalink: Scalars["GitHub_URI"];
    /** The commit that GitHub automatically generated to test if this pull request
     * could be merged. This field will not return a value if the pull request is
     * merged, or if the test merge commit is still being generated. See the
     * `mergeable` field for more details on the mergeability of the pull request.
     */
    potentialMergeCommit?: Maybe<GitHub_Commit>;
    /** List of project cards associated with this pull request. */
    projectCards: GitHub_ProjectCardConnection;
    /** Identifies when the comment was published at. */
    publishedAt?: Maybe<Scalars["GitHub_DateTime"]>;
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups?: Maybe<Array<GitHub_ReactionGroup>>;
    /** A list of Reactions left on the Issue. */
    reactions: GitHub_ReactionConnection;
    /** The repository associated with this node. */
    repository: GitHub_Repository;
    /** The HTTP path for this pull request. */
    resourcePath: Scalars["GitHub_URI"];
    /** The HTTP path for reverting this pull request. */
    revertResourcePath: Scalars["GitHub_URI"];
    /** The HTTP URL for reverting this pull request. */
    revertUrl: Scalars["GitHub_URI"];
    /** A list of review requests associated with the pull request. */
    reviewRequests?: Maybe<GitHub_ReviewRequestConnection>;
    /** The list of all review threads for this pull request. */
    reviewThreads: GitHub_PullRequestReviewThreadConnection;
    /** A list of reviews associated with the pull request. */
    reviews?: Maybe<GitHub_PullRequestReviewConnection>;
    /** Identifies the state of the pull request. */
    state: GitHub_PullRequestState;
    /** A list of reviewer suggestions based on commit history and past review comments. */
    suggestedReviewers: Array<Maybe<GitHub_SuggestedReviewer>>;
    /** A list of events, comments, commits, etc. associated with the pull request. */
    timeline: GitHub_PullRequestTimelineConnection;
    /** A list of events, comments, commits, etc. associated with the pull request. */
    timelineItems: GitHub_PullRequestTimelineItemsConnection;
    /** Identifies the pull request title. */
    title: Scalars["String"];
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHub_DateTime"];
    /** The HTTP URL for this pull request. */
    url: Scalars["GitHub_URI"];
    /** A list of edits to this content. */
    userContentEdits?: Maybe<GitHub_UserContentEditConnection>;
    /** Whether or not the viewer can apply suggestion. */
    viewerCanApplySuggestion: Scalars["Boolean"];
    /** Can user react to this subject */
    viewerCanReact: Scalars["Boolean"];
    /** Check if the viewer is able to change their subscription status for the repository. */
    viewerCanSubscribe: Scalars["Boolean"];
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"];
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>;
    /** Did the viewer author this comment. */
    viewerDidAuthor: Scalars["Boolean"];
    /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
    viewerSubscription?: Maybe<GitHub_SubscriptionState>;
  };

/** A repository pull request. */
export type GitHub_PullRequestAssigneesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository pull request. */
export type GitHub_PullRequestCommentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository pull request. */
export type GitHub_PullRequestCommitsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository pull request. */
export type GitHub_PullRequestFilesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository pull request. */
export type GitHub_PullRequestLabelsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository pull request. */
export type GitHub_PullRequestParticipantsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository pull request. */
export type GitHub_PullRequestProjectCardsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  archivedStates?: Maybe<Array<Maybe<GitHub_ProjectCardArchivedState>>>;
};

/** A repository pull request. */
export type GitHub_PullRequestReactionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  content?: Maybe<GitHub_ReactionContent>;
  orderBy?: Maybe<GitHub_ReactionOrder>;
};

/** A repository pull request. */
export type GitHub_PullRequestReviewRequestsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository pull request. */
export type GitHub_PullRequestReviewThreadsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository pull request. */
export type GitHub_PullRequestReviewsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  states?: Maybe<Array<GitHub_PullRequestReviewState>>;
  author?: Maybe<Scalars["String"]>;
};

/** A repository pull request. */
export type GitHub_PullRequestTimelineArgs = {
  since?: Maybe<Scalars["GitHub_DateTime"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository pull request. */
export type GitHub_PullRequestTimelineItemsArgs = {
  since?: Maybe<Scalars["GitHub_DateTime"]>;
  skip?: Maybe<Scalars["Int"]>;
  itemTypes?: Maybe<Array<GitHub_PullRequestTimelineItemsItemType>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository pull request. */
export type GitHub_PullRequestUserContentEditsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A file changed in a pull request. */
export type GitHub_PullRequestChangedFile = {
  /** The number of additions to the file. */
  additions: Scalars["Int"];
  /** The number of deletions to the file. */
  deletions: Scalars["Int"];
  /** The path of the file. */
  path: Scalars["String"];
};

/** The connection type for PullRequestChangedFile. */
export type GitHub_PullRequestChangedFileConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_PullRequestChangedFileEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_PullRequestChangedFile>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_PullRequestChangedFileEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_PullRequestChangedFile>;
};

/** Represents a Git commit part of a pull request. */
export type GitHub_PullRequestCommit = GitHub_Node &
  GitHub_UniformResourceLocatable & {
    /** The Git commit object */
    commit: GitHub_Commit;
    id: Scalars["ID"];
    /** The pull request this commit belongs to */
    pullRequest: GitHub_PullRequest;
    /** The HTTP path for this pull request commit */
    resourcePath: Scalars["GitHub_URI"];
    /** The HTTP URL for this pull request commit */
    url: Scalars["GitHub_URI"];
  };

/** Represents a commit comment thread part of a pull request. */
export type GitHub_PullRequestCommitCommentThread = GitHub_Node &
  GitHub_RepositoryNode & {
    /** The comments that exist in this thread. */
    comments: GitHub_CommitCommentConnection;
    /** The commit the comments were made on. */
    commit: GitHub_Commit;
    id: Scalars["ID"];
    /** The file the comments were made on. */
    path?: Maybe<Scalars["String"]>;
    /** The position in the diff for the commit that the comment was made on. */
    position?: Maybe<Scalars["Int"]>;
    /** The pull request this commit comment thread belongs to */
    pullRequest: GitHub_PullRequest;
    /** The repository associated with this node. */
    repository: GitHub_Repository;
  };

/** Represents a commit comment thread part of a pull request. */
export type GitHub_PullRequestCommitCommentThreadCommentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The connection type for PullRequestCommit. */
export type GitHub_PullRequestCommitConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_PullRequestCommitEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_PullRequestCommit>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_PullRequestCommitEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_PullRequestCommit>;
};

/** The connection type for PullRequest. */
export type GitHub_PullRequestConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_PullRequestEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_PullRequest>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** This aggregates pull requests opened by a user within one repository. */
export type GitHub_PullRequestContributionsByRepository = {
  /** The pull request contributions. */
  contributions: GitHub_CreatedPullRequestContributionConnection;
  /** The repository in which the pull requests were opened. */
  repository: GitHub_Repository;
};

/** This aggregates pull requests opened by a user within one repository. */
export type GitHub_PullRequestContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHub_ContributionOrder>;
};

/** An edge in a connection. */
export type GitHub_PullRequestEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_PullRequest>;
};

/** Ways in which lists of issues can be ordered upon return. */
export type GitHub_PullRequestOrder = {
  /** The field in which to order pull requests by. */
  field: GitHub_PullRequestOrderField;
  /** The direction in which to order pull requests by the specified field. */
  direction: GitHub_OrderDirection;
};

/** Properties by which pull_requests connections can be ordered. */
export enum GitHub_PullRequestOrderField {
  /** Order pull_requests by creation time */
  CreatedAt = "CREATED_AT",
  /** Order pull_requests by update time */
  UpdatedAt = "UPDATED_AT"
}

/** The possible PubSub channels for a pull request. */
export enum GitHub_PullRequestPubSubTopic {
  /** The channel ID for observing pull request updates. */
  Updated = "UPDATED",
  /** The channel ID for marking an pull request as read. */
  Markasread = "MARKASREAD",
  /** The channel ID for observing head ref updates. */
  HeadRef = "HEAD_REF",
  /** The channel ID for updating items on the pull request timeline. */
  Timeline = "TIMELINE",
  /** The channel ID for observing pull request state updates. */
  State = "STATE"
}

/** A review object for a given pull request. */
export type GitHub_PullRequestReview = GitHub_Node &
  GitHub_Comment &
  GitHub_Deletable &
  GitHub_Updatable &
  GitHub_UpdatableComment &
  GitHub_Reactable &
  GitHub_RepositoryNode & {
    /** The actor who authored the comment. */
    author?: Maybe<GitHub_Actor>;
    /** Author's association with the subject of the comment. */
    authorAssociation: GitHub_CommentAuthorAssociation;
    /** Identifies the pull request review body. */
    body: Scalars["String"];
    /** The body of this review rendered to HTML. */
    bodyHTML: Scalars["GitHub_HTML"];
    /** The body of this review rendered as plain text. */
    bodyText: Scalars["String"];
    /** A list of review comments for the current pull request review. */
    comments: GitHub_PullRequestReviewCommentConnection;
    /** Identifies the commit associated with this pull request review. */
    commit?: Maybe<GitHub_Commit>;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHub_DateTime"];
    /** Check if this comment was created via an email reply. */
    createdViaEmail: Scalars["Boolean"];
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    /** The actor who edited the comment. */
    editor?: Maybe<GitHub_Actor>;
    id: Scalars["ID"];
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: Scalars["Boolean"];
    /** The moment the editor made the last edit */
    lastEditedAt?: Maybe<Scalars["GitHub_DateTime"]>;
    /** A list of teams that this review was made on behalf of. */
    onBehalfOf: GitHub_TeamConnection;
    /** Identifies when the comment was published at. */
    publishedAt?: Maybe<Scalars["GitHub_DateTime"]>;
    /** Identifies the pull request associated with this pull request review. */
    pullRequest: GitHub_PullRequest;
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups?: Maybe<Array<GitHub_ReactionGroup>>;
    /** A list of Reactions left on the Issue. */
    reactions: GitHub_ReactionConnection;
    /** The repository associated with this node. */
    repository: GitHub_Repository;
    /** The HTTP path permalink for this PullRequestReview. */
    resourcePath: Scalars["GitHub_URI"];
    /** Identifies the current state of the pull request review. */
    state: GitHub_PullRequestReviewState;
    /** Identifies when the Pull Request Review was submitted */
    submittedAt?: Maybe<Scalars["GitHub_DateTime"]>;
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHub_DateTime"];
    /** The HTTP URL permalink for this PullRequestReview. */
    url: Scalars["GitHub_URI"];
    /** A list of edits to this content. */
    userContentEdits?: Maybe<GitHub_UserContentEditConnection>;
    /** Check if the current viewer can delete this object. */
    viewerCanDelete: Scalars["Boolean"];
    /** Can user react to this subject */
    viewerCanReact: Scalars["Boolean"];
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"];
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>;
    /** Did the viewer author this comment. */
    viewerDidAuthor: Scalars["Boolean"];
  };

/** A review object for a given pull request. */
export type GitHub_PullRequestReviewCommentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A review object for a given pull request. */
export type GitHub_PullRequestReviewOnBehalfOfArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A review object for a given pull request. */
export type GitHub_PullRequestReviewReactionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  content?: Maybe<GitHub_ReactionContent>;
  orderBy?: Maybe<GitHub_ReactionOrder>;
};

/** A review object for a given pull request. */
export type GitHub_PullRequestReviewUserContentEditsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A review comment associated with a given repository pull request. */
export type GitHub_PullRequestReviewComment = GitHub_Node &
  GitHub_Comment &
  GitHub_Deletable &
  GitHub_Updatable &
  GitHub_UpdatableComment &
  GitHub_Reactable &
  GitHub_RepositoryNode & {
    /** The actor who authored the comment. */
    author?: Maybe<GitHub_Actor>;
    /** Author's association with the subject of the comment. */
    authorAssociation: GitHub_CommentAuthorAssociation;
    /** The comment body of this review comment. */
    body: Scalars["String"];
    /** The comment body of this review comment rendered to HTML. */
    bodyHTML: Scalars["GitHub_HTML"];
    /** The comment body of this review comment rendered as plain text. */
    bodyText: Scalars["String"];
    /** Identifies the commit associated with the comment. */
    commit: GitHub_Commit;
    /** Identifies when the comment was created. */
    createdAt: Scalars["GitHub_DateTime"];
    /** Check if this comment was created via an email reply. */
    createdViaEmail: Scalars["Boolean"];
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    /** The diff hunk to which the comment applies. */
    diffHunk: Scalars["String"];
    /** Identifies when the comment was created in a draft state. */
    draftedAt: Scalars["GitHub_DateTime"];
    /** The actor who edited the comment. */
    editor?: Maybe<GitHub_Actor>;
    id: Scalars["ID"];
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: Scalars["Boolean"];
    /** Returns whether or not a comment has been minimized. */
    isMinimized: Scalars["Boolean"];
    /** The moment the editor made the last edit */
    lastEditedAt?: Maybe<Scalars["GitHub_DateTime"]>;
    /** Returns why the comment was minimized. */
    minimizedReason?: Maybe<Scalars["String"]>;
    /** Identifies the original commit associated with the comment. */
    originalCommit?: Maybe<GitHub_Commit>;
    /** The original line index in the diff to which the comment applies. */
    originalPosition: Scalars["Int"];
    /** Identifies when the comment body is outdated */
    outdated: Scalars["Boolean"];
    /** The path to which the comment applies. */
    path: Scalars["String"];
    /** The line index in the diff to which the comment applies. */
    position?: Maybe<Scalars["Int"]>;
    /** Identifies when the comment was published at. */
    publishedAt?: Maybe<Scalars["GitHub_DateTime"]>;
    /** The pull request associated with this review comment. */
    pullRequest: GitHub_PullRequest;
    /** The pull request review associated with this review comment. */
    pullRequestReview?: Maybe<GitHub_PullRequestReview>;
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups?: Maybe<Array<GitHub_ReactionGroup>>;
    /** A list of Reactions left on the Issue. */
    reactions: GitHub_ReactionConnection;
    /** The comment this is a reply to. */
    replyTo?: Maybe<GitHub_PullRequestReviewComment>;
    /** The repository associated with this node. */
    repository: GitHub_Repository;
    /** The HTTP path permalink for this review comment. */
    resourcePath: Scalars["GitHub_URI"];
    /** Identifies the state of the comment. */
    state: GitHub_PullRequestReviewCommentState;
    /** Identifies when the comment was last updated. */
    updatedAt: Scalars["GitHub_DateTime"];
    /** The HTTP URL permalink for this review comment. */
    url: Scalars["GitHub_URI"];
    /** A list of edits to this content. */
    userContentEdits?: Maybe<GitHub_UserContentEditConnection>;
    /** Check if the current viewer can delete this object. */
    viewerCanDelete: Scalars["Boolean"];
    /** Check if the current viewer can minimize this object. */
    viewerCanMinimize: Scalars["Boolean"];
    /** Can user react to this subject */
    viewerCanReact: Scalars["Boolean"];
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"];
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>;
    /** Did the viewer author this comment. */
    viewerDidAuthor: Scalars["Boolean"];
  };

/** A review comment associated with a given repository pull request. */
export type GitHub_PullRequestReviewCommentReactionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  content?: Maybe<GitHub_ReactionContent>;
  orderBy?: Maybe<GitHub_ReactionOrder>;
};

/** A review comment associated with a given repository pull request. */
export type GitHub_PullRequestReviewCommentUserContentEditsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The connection type for PullRequestReviewComment. */
export type GitHub_PullRequestReviewCommentConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_PullRequestReviewCommentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_PullRequestReviewComment>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_PullRequestReviewCommentEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_PullRequestReviewComment>;
};

/** The possible states of a pull request review comment. */
export enum GitHub_PullRequestReviewCommentState {
  /** A comment that is part of a pending review */
  Pending = "PENDING",
  /** A comment that is part of a submitted review */
  Submitted = "SUBMITTED"
}

/** The connection type for PullRequestReview. */
export type GitHub_PullRequestReviewConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_PullRequestReviewEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_PullRequestReview>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** This aggregates pull request reviews made by a user within one repository. */
export type GitHub_PullRequestReviewContributionsByRepository = {
  /** The pull request review contributions. */
  contributions: GitHub_CreatedPullRequestReviewContributionConnection;
  /** The repository in which the pull request reviews were made. */
  repository: GitHub_Repository;
};

/** This aggregates pull request reviews made by a user within one repository. */
export type GitHub_PullRequestReviewContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHub_ContributionOrder>;
};

/** An edge in a connection. */
export type GitHub_PullRequestReviewEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_PullRequestReview>;
};

/** The possible events to perform on a pull request review. */
export enum GitHub_PullRequestReviewEvent {
  /** Submit general feedback without explicit approval. */
  Comment = "COMMENT",
  /** Submit feedback and approve merging these changes. */
  Approve = "APPROVE",
  /** Submit feedback that must be addressed before merging. */
  RequestChanges = "REQUEST_CHANGES",
  /** Dismiss review so it now longer effects merging. */
  Dismiss = "DISMISS"
}

/** The possible states of a pull request review. */
export enum GitHub_PullRequestReviewState {
  /** A review that has not yet been submitted. */
  Pending = "PENDING",
  /** An informational review. */
  Commented = "COMMENTED",
  /** A review allowing the pull request to merge. */
  Approved = "APPROVED",
  /** A review blocking the pull request from merging. */
  ChangesRequested = "CHANGES_REQUESTED",
  /** A review that has been dismissed. */
  Dismissed = "DISMISSED"
}

/** A threaded list of comments for a given pull request. */
export type GitHub_PullRequestReviewThread = GitHub_Node & {
  /** A list of pull request comments associated with the thread. */
  comments: GitHub_PullRequestReviewCommentConnection;
  id: Scalars["ID"];
  /** Whether this thread has been resolved */
  isResolved: Scalars["Boolean"];
  /** Identifies the pull request associated with this thread. */
  pullRequest: GitHub_PullRequest;
  /** Identifies the repository associated with this thread. */
  repository: GitHub_Repository;
  /** The user who resolved this thread */
  resolvedBy?: Maybe<GitHub_User>;
  /** Whether or not the viewer can resolve this thread */
  viewerCanResolve: Scalars["Boolean"];
  /** Whether or not the viewer can unresolve this thread */
  viewerCanUnresolve: Scalars["Boolean"];
};

/** A threaded list of comments for a given pull request. */
export type GitHub_PullRequestReviewThreadCommentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** Review comment threads for a pull request review. */
export type GitHub_PullRequestReviewThreadConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_PullRequestReviewThreadEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_PullRequestReviewThread>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_PullRequestReviewThreadEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_PullRequestReviewThread>;
};

/** Represents the latest point in the pull request timeline for which the viewer has seen the pull request's commits. */
export type GitHub_PullRequestRevisionMarker = {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** The last commit the viewer has seen. */
  lastSeenCommit: GitHub_Commit;
  /** The pull request to which the marker belongs. */
  pullRequest: GitHub_PullRequest;
};

/** The possible states of a pull request. */
export enum GitHub_PullRequestState {
  /** A pull request that is still open. */
  Open = "OPEN",
  /** A pull request that has been closed without being merged. */
  Closed = "CLOSED",
  /** A pull request that has been closed by being merged. */
  Merged = "MERGED"
}

/** The connection type for PullRequestTimelineItem. */
export type GitHub_PullRequestTimelineConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_PullRequestTimelineItemEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_PullRequestTimelineItem>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An item in an pull request timeline */
export type GitHub_PullRequestTimelineItem =
  | GitHub_Commit
  | GitHub_CommitCommentThread
  | GitHub_PullRequestReview
  | GitHub_PullRequestReviewThread
  | GitHub_PullRequestReviewComment
  | GitHub_IssueComment
  | GitHub_ClosedEvent
  | GitHub_ReopenedEvent
  | GitHub_SubscribedEvent
  | GitHub_UnsubscribedEvent
  | GitHub_MergedEvent
  | GitHub_ReferencedEvent
  | GitHub_CrossReferencedEvent
  | GitHub_AssignedEvent
  | GitHub_UnassignedEvent
  | GitHub_LabeledEvent
  | GitHub_UnlabeledEvent
  | GitHub_MilestonedEvent
  | GitHub_DemilestonedEvent
  | GitHub_RenamedTitleEvent
  | GitHub_LockedEvent
  | GitHub_UnlockedEvent
  | GitHub_DeployedEvent
  | GitHub_DeploymentEnvironmentChangedEvent
  | GitHub_HeadRefDeletedEvent
  | GitHub_HeadRefRestoredEvent
  | GitHub_HeadRefForcePushedEvent
  | GitHub_BaseRefForcePushedEvent
  | GitHub_ReviewRequestedEvent
  | GitHub_ReviewRequestRemovedEvent
  | GitHub_ReviewDismissedEvent
  | GitHub_UserBlockedEvent;

/** An edge in a connection. */
export type GitHub_PullRequestTimelineItemEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_PullRequestTimelineItem>;
};

/** An item in a pull request timeline */
export type GitHub_PullRequestTimelineItems =
  | GitHub_PullRequestCommit
  | GitHub_PullRequestCommitCommentThread
  | GitHub_PullRequestReview
  | GitHub_PullRequestReviewThread
  | GitHub_PullRequestRevisionMarker
  | GitHub_BaseRefChangedEvent
  | GitHub_BaseRefForcePushedEvent
  | GitHub_DeployedEvent
  | GitHub_DeploymentEnvironmentChangedEvent
  | GitHub_HeadRefDeletedEvent
  | GitHub_HeadRefForcePushedEvent
  | GitHub_HeadRefRestoredEvent
  | GitHub_MergedEvent
  | GitHub_ReviewDismissedEvent
  | GitHub_ReviewRequestedEvent
  | GitHub_ReviewRequestRemovedEvent
  | GitHub_IssueComment
  | GitHub_CrossReferencedEvent
  | GitHub_AddedToProjectEvent
  | GitHub_AssignedEvent
  | GitHub_ClosedEvent
  | GitHub_CommentDeletedEvent
  | GitHub_ConvertedNoteToIssueEvent
  | GitHub_DemilestonedEvent
  | GitHub_LabeledEvent
  | GitHub_LockedEvent
  | GitHub_MentionedEvent
  | GitHub_MilestonedEvent
  | GitHub_MovedColumnsInProjectEvent
  | GitHub_PinnedEvent
  | GitHub_ReferencedEvent
  | GitHub_RemovedFromProjectEvent
  | GitHub_RenamedTitleEvent
  | GitHub_ReopenedEvent
  | GitHub_SubscribedEvent
  | GitHub_TransferredEvent
  | GitHub_UnassignedEvent
  | GitHub_UnlabeledEvent
  | GitHub_UnlockedEvent
  | GitHub_UserBlockedEvent
  | GitHub_UnpinnedEvent
  | GitHub_UnsubscribedEvent;

/** The connection type for PullRequestTimelineItems. */
export type GitHub_PullRequestTimelineItemsConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_PullRequestTimelineItemsEdge>>>;
  /** Identifies the count of items after applying `before` and `after` filters. */
  filteredCount: Scalars["Int"];
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_PullRequestTimelineItems>>>;
  /** Identifies the count of items after applying `before`/`after` filters and `first`/`last`/`skip` slicing. */
  pageCount: Scalars["Int"];
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
  /** Identifies the date and time when the timeline was last updated. */
  updatedAt: Scalars["GitHub_DateTime"];
};

/** An edge in a connection. */
export type GitHub_PullRequestTimelineItemsEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_PullRequestTimelineItems>;
};

/** The possible item types found in a timeline. */
export enum GitHub_PullRequestTimelineItemsItemType {
  /** Represents a Git commit part of a pull request. */
  PullRequestCommit = "PULL_REQUEST_COMMIT",
  /** Represents a commit comment thread part of a pull request. */
  PullRequestCommitCommentThread = "PULL_REQUEST_COMMIT_COMMENT_THREAD",
  /** A review object for a given pull request. */
  PullRequestReview = "PULL_REQUEST_REVIEW",
  /** A threaded list of comments for a given pull request. */
  PullRequestReviewThread = "PULL_REQUEST_REVIEW_THREAD",
  /** Represents the latest point in the pull request timeline for which the viewer has seen the pull request's commits. */
  PullRequestRevisionMarker = "PULL_REQUEST_REVISION_MARKER",
  /** Represents a 'base_ref_changed' event on a given issue or pull request. */
  BaseRefChangedEvent = "BASE_REF_CHANGED_EVENT",
  /** Represents a 'base_ref_force_pushed' event on a given pull request. */
  BaseRefForcePushedEvent = "BASE_REF_FORCE_PUSHED_EVENT",
  /** Represents a 'deployed' event on a given pull request. */
  DeployedEvent = "DEPLOYED_EVENT",
  /** Represents a 'deployment_environment_changed' event on a given pull request. */
  DeploymentEnvironmentChangedEvent = "DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT",
  /** Represents a 'head_ref_deleted' event on a given pull request. */
  HeadRefDeletedEvent = "HEAD_REF_DELETED_EVENT",
  /** Represents a 'head_ref_force_pushed' event on a given pull request. */
  HeadRefForcePushedEvent = "HEAD_REF_FORCE_PUSHED_EVENT",
  /** Represents a 'head_ref_restored' event on a given pull request. */
  HeadRefRestoredEvent = "HEAD_REF_RESTORED_EVENT",
  /** Represents a 'merged' event on a given pull request. */
  MergedEvent = "MERGED_EVENT",
  /** Represents a 'review_dismissed' event on a given issue or pull request. */
  ReviewDismissedEvent = "REVIEW_DISMISSED_EVENT",
  /** Represents an 'review_requested' event on a given pull request. */
  ReviewRequestedEvent = "REVIEW_REQUESTED_EVENT",
  /** Represents an 'review_request_removed' event on a given pull request. */
  ReviewRequestRemovedEvent = "REVIEW_REQUEST_REMOVED_EVENT",
  /** Represents a comment on an Issue. */
  IssueComment = "ISSUE_COMMENT",
  /** Represents a mention made by one issue or pull request to another. */
  CrossReferencedEvent = "CROSS_REFERENCED_EVENT",
  /** Represents a 'added_to_project' event on a given issue or pull request. */
  AddedToProjectEvent = "ADDED_TO_PROJECT_EVENT",
  /** Represents an 'assigned' event on any assignable object. */
  AssignedEvent = "ASSIGNED_EVENT",
  /** Represents a 'closed' event on any `Closable`. */
  ClosedEvent = "CLOSED_EVENT",
  /** Represents a 'comment_deleted' event on a given issue or pull request. */
  CommentDeletedEvent = "COMMENT_DELETED_EVENT",
  /** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
  ConvertedNoteToIssueEvent = "CONVERTED_NOTE_TO_ISSUE_EVENT",
  /** Represents a 'demilestoned' event on a given issue or pull request. */
  DemilestonedEvent = "DEMILESTONED_EVENT",
  /** Represents a 'labeled' event on a given issue or pull request. */
  LabeledEvent = "LABELED_EVENT",
  /** Represents a 'locked' event on a given issue or pull request. */
  LockedEvent = "LOCKED_EVENT",
  /** Represents a 'mentioned' event on a given issue or pull request. */
  MentionedEvent = "MENTIONED_EVENT",
  /** Represents a 'milestoned' event on a given issue or pull request. */
  MilestonedEvent = "MILESTONED_EVENT",
  /** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
  MovedColumnsInProjectEvent = "MOVED_COLUMNS_IN_PROJECT_EVENT",
  /** Represents a 'pinned' event on a given issue or pull request. */
  PinnedEvent = "PINNED_EVENT",
  /** Represents a 'referenced' event on a given `ReferencedSubject`. */
  ReferencedEvent = "REFERENCED_EVENT",
  /** Represents a 'removed_from_project' event on a given issue or pull request. */
  RemovedFromProjectEvent = "REMOVED_FROM_PROJECT_EVENT",
  /** Represents a 'renamed' event on a given issue or pull request */
  RenamedTitleEvent = "RENAMED_TITLE_EVENT",
  /** Represents a 'reopened' event on any `Closable`. */
  ReopenedEvent = "REOPENED_EVENT",
  /** Represents a 'subscribed' event on a given `Subscribable`. */
  SubscribedEvent = "SUBSCRIBED_EVENT",
  /** Represents a 'transferred' event on a given issue or pull request. */
  TransferredEvent = "TRANSFERRED_EVENT",
  /** Represents an 'unassigned' event on any assignable object. */
  UnassignedEvent = "UNASSIGNED_EVENT",
  /** Represents an 'unlabeled' event on a given issue or pull request. */
  UnlabeledEvent = "UNLABELED_EVENT",
  /** Represents an 'unlocked' event on a given issue or pull request. */
  UnlockedEvent = "UNLOCKED_EVENT",
  /** Represents a 'user_blocked' event on a given user. */
  UserBlockedEvent = "USER_BLOCKED_EVENT",
  /** Represents an 'unpinned' event on a given issue or pull request. */
  UnpinnedEvent = "UNPINNED_EVENT",
  /** Represents an 'unsubscribed' event on a given `Subscribable`. */
  UnsubscribedEvent = "UNSUBSCRIBED_EVENT"
}

/** A team or user who has the ability to push to a protected branch. */
export type GitHub_PushAllowance = GitHub_Node & {
  /** The actor that can push. */
  actor?: Maybe<GitHub_PushAllowanceActor>;
  /** Identifies the branch protection rule associated with the allowed user or team. */
  branchProtectionRule?: Maybe<GitHub_BranchProtectionRule>;
  id: Scalars["ID"];
};

/** Types that can be an actor. */
export type GitHub_PushAllowanceActor = GitHub_User | GitHub_Team;

/** The connection type for PushAllowance. */
export type GitHub_PushAllowanceConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_PushAllowanceEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_PushAllowance>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_PushAllowanceEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_PushAllowance>;
};

/** Represents the client's rate limit. */
export type GitHub_RateLimit = {
  /** The point cost for the current query counting against the rate limit. */
  cost: Scalars["Int"];
  /** The maximum number of points the client is permitted to consume in a 60 minute window. */
  limit: Scalars["Int"];
  /** The maximum number of nodes this query may return */
  nodeCount: Scalars["Int"];
  /** The number of points remaining in the current rate limit window. */
  remaining: Scalars["Int"];
  /** The time at which the current rate limit window resets in UTC epoch seconds. */
  resetAt: Scalars["GitHub_DateTime"];
};

/** Represents a subject that can be reacted on. */
export type GitHub_Reactable = {
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  /** A list of reactions grouped by content left on the subject. */
  reactionGroups?: Maybe<Array<GitHub_ReactionGroup>>;
  /** A list of Reactions left on the Issue. */
  reactions: GitHub_ReactionConnection;
  /** Can user react to this subject */
  viewerCanReact: Scalars["Boolean"];
};

/** Represents a subject that can be reacted on. */
export type GitHub_ReactableReactionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  content?: Maybe<GitHub_ReactionContent>;
  orderBy?: Maybe<GitHub_ReactionOrder>;
};

/** The connection type for User. */
export type GitHub_ReactingUserConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_ReactingUserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_User>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** Represents a user that's made a reaction. */
export type GitHub_ReactingUserEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  node: GitHub_User;
  /** The moment when the user made the reaction. */
  reactedAt: Scalars["GitHub_DateTime"];
};

/** An emoji reaction to a particular piece of content. */
export type GitHub_Reaction = GitHub_Node & {
  /** Identifies the emoji reaction. */
  content: GitHub_ReactionContent;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  /** The reactable piece of content */
  reactable: GitHub_Reactable;
  /** Identifies the user who created this reaction. */
  user?: Maybe<GitHub_User>;
};

/** A list of reactions that have been left on the subject. */
export type GitHub_ReactionConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_ReactionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Reaction>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
  /** Whether or not the authenticated user has left a reaction on the subject. */
  viewerHasReacted: Scalars["Boolean"];
};

/** Emojis that can be attached to Issues, Pull Requests and Comments. */
export enum GitHub_ReactionContent {
  /** Represents the 👍 emoji. */
  ThumbsUp = "THUMBS_UP",
  /** Represents the 👎 emoji. */
  ThumbsDown = "THUMBS_DOWN",
  /** Represents the 😄 emoji. */
  Laugh = "LAUGH",
  /** Represents the 🎉 emoji. */
  Hooray = "HOORAY",
  /** Represents the 😕 emoji. */
  Confused = "CONFUSED",
  /** Represents the ❤️ emoji. */
  Heart = "HEART",
  /** Represents the 🚀 emoji. */
  Rocket = "ROCKET",
  /** Represents the 👀 emoji. */
  Eyes = "EYES"
}

/** An edge in a connection. */
export type GitHub_ReactionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Reaction>;
};

/** A group of emoji reactions to a particular piece of content. */
export type GitHub_ReactionGroup = {
  /** Identifies the emoji reaction. */
  content: GitHub_ReactionContent;
  /** Identifies when the reaction was created. */
  createdAt?: Maybe<Scalars["GitHub_DateTime"]>;
  /** The subject that was reacted to. */
  subject: GitHub_Reactable;
  /** Users who have reacted to the reaction subject with the emotion represented by this reaction group */
  users: GitHub_ReactingUserConnection;
  /** Whether or not the authenticated user has left a reaction on the subject. */
  viewerHasReacted: Scalars["Boolean"];
};

/** A group of emoji reactions to a particular piece of content. */
export type GitHub_ReactionGroupUsersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** Ways in which lists of reactions can be ordered upon return. */
export type GitHub_ReactionOrder = {
  /** The field in which to order reactions by. */
  field: GitHub_ReactionOrderField;
  /** The direction in which to order reactions by the specified field. */
  direction: GitHub_OrderDirection;
};

/** A list of fields that reactions can be ordered by. */
export enum GitHub_ReactionOrderField {
  /** Allows ordering a list of reactions by when they were created. */
  CreatedAt = "CREATED_AT"
}

/** Represents a Git reference. */
export type GitHub_Ref = GitHub_Node & {
  /** A list of pull requests with this ref as the head ref. */
  associatedPullRequests: GitHub_PullRequestConnection;
  id: Scalars["ID"];
  /** The ref name. */
  name: Scalars["String"];
  /** The ref's prefix, such as `refs/heads/` or `refs/tags/`. */
  prefix: Scalars["String"];
  /** The repository the ref belongs to. */
  repository: GitHub_Repository;
  /** The object the ref points to. */
  target: GitHub_GitObject;
};

/** Represents a Git reference. */
export type GitHub_RefAssociatedPullRequestsArgs = {
  states?: Maybe<Array<GitHub_PullRequestState>>;
  labels?: Maybe<Array<Scalars["String"]>>;
  headRefName?: Maybe<Scalars["String"]>;
  baseRefName?: Maybe<Scalars["String"]>;
  orderBy?: Maybe<GitHub_IssueOrder>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The connection type for Ref. */
export type GitHub_RefConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_RefEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Ref>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_RefEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Ref>;
};

/** Represents a 'referenced' event on a given `ReferencedSubject`. */
export type GitHub_ReferencedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the commit associated with the 'referenced' event. */
  commit?: Maybe<GitHub_Commit>;
  /** Identifies the repository associated with the 'referenced' event. */
  commitRepository: GitHub_Repository;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  id: Scalars["ID"];
  /** Reference originated in a different repository. */
  isCrossRepository: Scalars["Boolean"];
  /** Checks if the commit message itself references the subject. Can be false in the case of a commit comment reference. */
  isDirectReference: Scalars["Boolean"];
  /** Object referenced by event. */
  subject: GitHub_ReferencedSubject;
};

/** Any referencable object */
export type GitHub_ReferencedSubject = GitHub_Issue | GitHub_PullRequest;

/** Ways in which lists of git refs can be ordered upon return. */
export type GitHub_RefOrder = {
  /** The field in which to order refs by. */
  field: GitHub_RefOrderField;
  /** The direction in which to order refs by the specified field. */
  direction: GitHub_OrderDirection;
};

/** Properties by which ref connections can be ordered. */
export enum GitHub_RefOrderField {
  /** Order refs by underlying commit date if the ref prefix is refs/tags/ */
  TagCommitDate = "TAG_COMMIT_DATE",
  /** Order refs by their alphanumeric name */
  Alphabetical = "ALPHABETICAL"
}

/** Represents an owner of a registry package. */
export type GitHub_RegistryPackageOwner = {
  id: Scalars["ID"];
};

/** Represents an interface to search packages on an object. */
export type GitHub_RegistryPackageSearch = {
  id: Scalars["ID"];
};

/** A release contains the content for a release. */
export type GitHub_Release = GitHub_Node &
  GitHub_UniformResourceLocatable & {
    /** The author of the release */
    author?: Maybe<GitHub_User>;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHub_DateTime"];
    /** Identifies the description of the release. */
    description?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    /** Whether or not the release is a draft */
    isDraft: Scalars["Boolean"];
    /** Whether or not the release is a prerelease */
    isPrerelease: Scalars["Boolean"];
    /** Identifies the title of the release. */
    name?: Maybe<Scalars["String"]>;
    /** Identifies the date and time when the release was created. */
    publishedAt?: Maybe<Scalars["GitHub_DateTime"]>;
    /** List of releases assets which are dependent on this release. */
    releaseAssets: GitHub_ReleaseAssetConnection;
    /** The HTTP path for this issue */
    resourcePath: Scalars["GitHub_URI"];
    /** The Git tag the release points to */
    tag?: Maybe<GitHub_Ref>;
    /** The name of the release's Git tag */
    tagName: Scalars["String"];
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHub_DateTime"];
    /** The HTTP URL for this issue */
    url: Scalars["GitHub_URI"];
  };

/** A release contains the content for a release. */
export type GitHub_ReleaseReleaseAssetsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** A release asset contains the content for a release asset. */
export type GitHub_ReleaseAsset = GitHub_Node & {
  /** The asset's content-type */
  contentType: Scalars["String"];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** The number of times this asset was downloaded */
  downloadCount: Scalars["Int"];
  /** Identifies the URL where you can download the release asset via the browser. */
  downloadUrl: Scalars["GitHub_URI"];
  id: Scalars["ID"];
  /** Identifies the title of the release asset. */
  name: Scalars["String"];
  /** Release that the asset is associated with */
  release?: Maybe<GitHub_Release>;
  /** The size (in bytes) of the asset */
  size: Scalars["Int"];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["GitHub_DateTime"];
  /** The user that performed the upload */
  uploadedBy: GitHub_User;
  /** Identifies the URL of the release asset. */
  url: Scalars["GitHub_URI"];
};

/** The connection type for ReleaseAsset. */
export type GitHub_ReleaseAssetConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_ReleaseAssetEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_ReleaseAsset>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_ReleaseAssetEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_ReleaseAsset>;
};

/** The connection type for Release. */
export type GitHub_ReleaseConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_ReleaseEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Release>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_ReleaseEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Release>;
};

/** Ways in which lists of releases can be ordered upon return. */
export type GitHub_ReleaseOrder = {
  /** The field in which to order releases by. */
  field: GitHub_ReleaseOrderField;
  /** The direction in which to order releases by the specified field. */
  direction: GitHub_OrderDirection;
};

/** Properties by which release connections can be ordered. */
export enum GitHub_ReleaseOrderField {
  /** Order releases by creation time */
  CreatedAt = "CREATED_AT",
  /** Order releases alphabetically by name */
  Name = "NAME"
}

/** Autogenerated input type of RemoveAssigneesFromAssignable */
export type GitHub_RemoveAssigneesFromAssignableInput = {
  /** The id of the assignable object to remove assignees from. */
  assignableId: Scalars["ID"];
  /** The id of users to remove as assignees. */
  assigneeIds: Array<Scalars["ID"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of RemoveAssigneesFromAssignable */
export type GitHub_RemoveAssigneesFromAssignablePayload = {
  /** The item that was unassigned. */
  assignable?: Maybe<GitHub_Assignable>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Represents a 'removed_from_project' event on a given issue or pull request. */
export type GitHub_RemovedFromProjectEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
};

/** Autogenerated input type of RemoveLabelsFromLabelable */
export type GitHub_RemoveLabelsFromLabelableInput = {
  /** The id of the Labelable to remove labels from. */
  labelableId: Scalars["ID"];
  /** The ids of labels to remove. */
  labelIds: Array<Scalars["ID"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of RemoveLabelsFromLabelable */
export type GitHub_RemoveLabelsFromLabelablePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The Labelable the labels were removed from. */
  labelable?: Maybe<GitHub_Labelable>;
};

/** Autogenerated input type of RemoveOutsideCollaborator */
export type GitHub_RemoveOutsideCollaboratorInput = {
  /** The ID of the outside collaborator to remove. */
  userId: Scalars["ID"];
  /** The ID of the organization to remove the outside collaborator from. */
  organizationId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of RemoveOutsideCollaborator */
export type GitHub_RemoveOutsideCollaboratorPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The user that was removed as an outside collaborator. */
  removedUser?: Maybe<GitHub_User>;
};

/** Autogenerated input type of RemoveReaction */
export type GitHub_RemoveReactionInput = {
  /** The Node ID of the subject to modify. */
  subjectId: Scalars["ID"];
  /** The name of the emoji reaction to remove. */
  content: GitHub_ReactionContent;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of RemoveReaction */
export type GitHub_RemoveReactionPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The reaction object. */
  reaction?: Maybe<GitHub_Reaction>;
  /** The reactable subject. */
  subject?: Maybe<GitHub_Reactable>;
};

/** Autogenerated input type of RemoveStar */
export type GitHub_RemoveStarInput = {
  /** The Starrable ID to unstar. */
  starrableId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of RemoveStar */
export type GitHub_RemoveStarPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The starrable. */
  starrable?: Maybe<GitHub_Starrable>;
};

/** Represents a 'renamed' event on a given issue or pull request */
export type GitHub_RenamedTitleEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** Identifies the current title of the issue or pull request. */
  currentTitle: Scalars["String"];
  id: Scalars["ID"];
  /** Identifies the previous title of the issue or pull request. */
  previousTitle: Scalars["String"];
  /** Subject that was renamed. */
  subject: GitHub_RenamedTitleSubject;
};

/** An object which has a renamable title */
export type GitHub_RenamedTitleSubject = GitHub_Issue | GitHub_PullRequest;

/** Represents a 'reopened' event on any `Closable`. */
export type GitHub_ReopenedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Object that was reopened. */
  closable: GitHub_Closable;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  id: Scalars["ID"];
};

/** Autogenerated input type of ReopenIssue */
export type GitHub_ReopenIssueInput = {
  /** ID of the issue to be opened. */
  issueId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of ReopenIssue */
export type GitHub_ReopenIssuePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The issue that was opened. */
  issue?: Maybe<GitHub_Issue>;
};

/** Autogenerated input type of ReopenPullRequest */
export type GitHub_ReopenPullRequestInput = {
  /** ID of the pull request to be reopened. */
  pullRequestId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of ReopenPullRequest */
export type GitHub_ReopenPullRequestPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The pull request that was reopened. */
  pullRequest?: Maybe<GitHub_PullRequest>;
};

/** The reasons a piece of content can be reported or minimized. */
export enum GitHub_ReportedContentClassifiers {
  /** A spammy piece of content */
  Spam = "SPAM",
  /** An abusive or harassing piece of content */
  Abuse = "ABUSE",
  /** An irrelevant piece of content */
  OffTopic = "OFF_TOPIC",
  /** An outdated piece of content */
  Outdated = "OUTDATED",
  /** The content has been resolved */
  Resolved = "RESOLVED"
}

/** A repository contains the content for a project. */
export type GitHub_Repository = GitHub_Node &
  GitHub_ProjectOwner &
  GitHub_RegistryPackageOwner &
  GitHub_Subscribable &
  GitHub_Starrable &
  GitHub_UniformResourceLocatable &
  GitHub_RepositoryInfo & {
    /** A list of users that can be assigned to issues in this repository. */
    assignableUsers: GitHub_UserConnection;
    /** A list of branch protection rules for this repository. */
    branchProtectionRules: GitHub_BranchProtectionRuleConnection;
    /** Returns the code of conduct for this repository */
    codeOfConduct?: Maybe<GitHub_CodeOfConduct>;
    /** A list of collaborators associated with the repository. */
    collaborators?: Maybe<GitHub_RepositoryCollaboratorConnection>;
    /** A list of commit comments associated with the repository. */
    commitComments: GitHub_CommitCommentConnection;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHub_DateTime"];
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    /** The Ref associated with the repository's default branch. */
    defaultBranchRef?: Maybe<GitHub_Ref>;
    /** A list of deploy keys that are on this repository. */
    deployKeys: GitHub_DeployKeyConnection;
    /** Deployments associated with the repository */
    deployments: GitHub_DeploymentConnection;
    /** The description of the repository. */
    description?: Maybe<Scalars["String"]>;
    /** The description of the repository rendered to HTML. */
    descriptionHTML: Scalars["GitHub_HTML"];
    /** The number of kilobytes this repository occupies on disk. */
    diskUsage?: Maybe<Scalars["Int"]>;
    /** Returns how many forks there are of this repository in the whole network. */
    forkCount: Scalars["Int"];
    /** A list of direct forked repositories. */
    forks: GitHub_RepositoryConnection;
    /** Indicates if the repository has issues feature enabled. */
    hasIssuesEnabled: Scalars["Boolean"];
    /** Indicates if the repository has wiki feature enabled. */
    hasWikiEnabled: Scalars["Boolean"];
    /** The repository's URL. */
    homepageUrl?: Maybe<Scalars["GitHub_URI"]>;
    id: Scalars["ID"];
    /** Indicates if the repository is unmaintained. */
    isArchived: Scalars["Boolean"];
    /** Returns whether or not this repository disabled. */
    isDisabled: Scalars["Boolean"];
    /** Identifies if the repository is a fork. */
    isFork: Scalars["Boolean"];
    /** Indicates if the repository has been locked or not. */
    isLocked: Scalars["Boolean"];
    /** Identifies if the repository is a mirror. */
    isMirror: Scalars["Boolean"];
    /** Identifies if the repository is private. */
    isPrivate: Scalars["Boolean"];
    /** Returns a single issue from the current repository by number. */
    issue?: Maybe<GitHub_Issue>;
    /** Returns a single issue-like object from the current repository by number. */
    issueOrPullRequest?: Maybe<GitHub_IssueOrPullRequest>;
    /** A list of issues that have been opened in the repository. */
    issues: GitHub_IssueConnection;
    /** Returns a single label by name */
    label?: Maybe<GitHub_Label>;
    /** A list of labels associated with the repository. */
    labels?: Maybe<GitHub_LabelConnection>;
    /** A list containing a breakdown of the language composition of the repository. */
    languages?: Maybe<GitHub_LanguageConnection>;
    /** The license associated with the repository */
    licenseInfo?: Maybe<GitHub_License>;
    /** The reason the repository has been locked. */
    lockReason?: Maybe<GitHub_RepositoryLockReason>;
    /** A list of Users that can be mentioned in the context of the repository. */
    mentionableUsers: GitHub_UserConnection;
    /** Whether or not PRs are merged with a merge commit on this repository. */
    mergeCommitAllowed: Scalars["Boolean"];
    /** Returns a single milestone from the current repository by number. */
    milestone?: Maybe<GitHub_Milestone>;
    /** A list of milestones associated with the repository. */
    milestones?: Maybe<GitHub_MilestoneConnection>;
    /** The repository's original mirror URL. */
    mirrorUrl?: Maybe<Scalars["GitHub_URI"]>;
    /** The name of the repository. */
    name: Scalars["String"];
    /** The repository's name with owner. */
    nameWithOwner: Scalars["String"];
    /** A Git object in the repository */
    object?: Maybe<GitHub_GitObject>;
    /** The User owner of the repository. */
    owner: GitHub_RepositoryOwner;
    /** The repository parent, if this is a fork. */
    parent?: Maybe<GitHub_Repository>;
    /** The primary language of the repository's code. */
    primaryLanguage?: Maybe<GitHub_Language>;
    /** Find project by number. */
    project?: Maybe<GitHub_Project>;
    /** A list of projects under the owner. */
    projects: GitHub_ProjectConnection;
    /** The HTTP path listing the repository's projects */
    projectsResourcePath: Scalars["GitHub_URI"];
    /** The HTTP URL listing the repository's projects */
    projectsUrl: Scalars["GitHub_URI"];
    /** Returns a single pull request from the current repository by number. */
    pullRequest?: Maybe<GitHub_PullRequest>;
    /** A list of pull requests that have been opened in the repository. */
    pullRequests: GitHub_PullRequestConnection;
    /** Identifies when the repository was last pushed to. */
    pushedAt?: Maybe<Scalars["GitHub_DateTime"]>;
    /** Whether or not rebase-merging is enabled on this repository. */
    rebaseMergeAllowed: Scalars["Boolean"];
    /** Fetch a given ref from the repository */
    ref?: Maybe<GitHub_Ref>;
    /** Fetch a list of refs from the repository */
    refs?: Maybe<GitHub_RefConnection>;
    /** Lookup a single release given various criteria. */
    release?: Maybe<GitHub_Release>;
    /** List of releases which are dependent on this repository. */
    releases: GitHub_ReleaseConnection;
    /** A list of applied repository-topic associations for this repository. */
    repositoryTopics: GitHub_RepositoryTopicConnection;
    /** The HTTP path for this repository */
    resourcePath: Scalars["GitHub_URI"];
    /** A description of the repository, rendered to HTML without any links in it. */
    shortDescriptionHTML: Scalars["GitHub_HTML"];
    /** Whether or not squash-merging is enabled on this repository. */
    squashMergeAllowed: Scalars["Boolean"];
    /** The SSH URL to clone this repository */
    sshUrl: Scalars["GitHub_GitSSHRemote"];
    /** A list of users who have starred this starrable. */
    stargazers: GitHub_StargazerConnection;
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHub_DateTime"];
    /** The HTTP URL for this repository */
    url: Scalars["GitHub_URI"];
    /** Indicates whether the viewer has admin permissions on this repository. */
    viewerCanAdminister: Scalars["Boolean"];
    /** Can the current viewer create new projects on this owner. */
    viewerCanCreateProjects: Scalars["Boolean"];
    /** Check if the viewer is able to change their subscription status for the repository. */
    viewerCanSubscribe: Scalars["Boolean"];
    /** Indicates whether the viewer can update the topics of this repository. */
    viewerCanUpdateTopics: Scalars["Boolean"];
    /** Returns a boolean indicating whether the viewing user has starred this starrable. */
    viewerHasStarred: Scalars["Boolean"];
    /** The users permission level on the repository. Will return null if authenticated as an GitHub App. */
    viewerPermission?: Maybe<GitHub_RepositoryPermission>;
    /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
    viewerSubscription?: Maybe<GitHub_SubscriptionState>;
    /** A list of users watching the repository. */
    watchers: GitHub_UserConnection;
  };

/** A repository contains the content for a project. */
export type GitHub_RepositoryAssignableUsersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryBranchProtectionRulesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryCollaboratorsArgs = {
  affiliation?: Maybe<GitHub_CollaboratorAffiliation>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryCommitCommentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryDeployKeysArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryDeploymentsArgs = {
  environments?: Maybe<Array<Scalars["String"]>>;
  orderBy?: Maybe<GitHub_DeploymentOrder>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryForksArgs = {
  privacy?: Maybe<GitHub_RepositoryPrivacy>;
  orderBy?: Maybe<GitHub_RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars["Boolean"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryIssueArgs = {
  number: Scalars["Int"];
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryIssueOrPullRequestArgs = {
  number: Scalars["Int"];
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryIssuesArgs = {
  orderBy?: Maybe<GitHub_IssueOrder>;
  labels?: Maybe<Array<Scalars["String"]>>;
  states?: Maybe<Array<GitHub_IssueState>>;
  filterBy?: Maybe<GitHub_IssueFilters>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryLabelArgs = {
  name: Scalars["String"];
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryLabelsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  query?: Maybe<Scalars["String"]>;
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryLanguagesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHub_LanguageOrder>;
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryMentionableUsersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryMilestoneArgs = {
  number: Scalars["Int"];
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryMilestonesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  states?: Maybe<Array<GitHub_MilestoneState>>;
  orderBy?: Maybe<GitHub_MilestoneOrder>;
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryObjectArgs = {
  oid?: Maybe<Scalars["GitHub_GitObjectID"]>;
  expression?: Maybe<Scalars["String"]>;
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryProjectArgs = {
  number: Scalars["Int"];
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryProjectsArgs = {
  orderBy?: Maybe<GitHub_ProjectOrder>;
  search?: Maybe<Scalars["String"]>;
  states?: Maybe<Array<GitHub_ProjectState>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryPullRequestArgs = {
  number: Scalars["Int"];
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryPullRequestsArgs = {
  states?: Maybe<Array<GitHub_PullRequestState>>;
  labels?: Maybe<Array<Scalars["String"]>>;
  headRefName?: Maybe<Scalars["String"]>;
  baseRefName?: Maybe<Scalars["String"]>;
  orderBy?: Maybe<GitHub_IssueOrder>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryRefArgs = {
  qualifiedName: Scalars["String"];
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryRefsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  refPrefix: Scalars["String"];
  direction?: Maybe<GitHub_OrderDirection>;
  orderBy?: Maybe<GitHub_RefOrder>;
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryReleaseArgs = {
  tagName: Scalars["String"];
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryReleasesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHub_ReleaseOrder>;
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryRepositoryTopicsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryShortDescriptionHtmlArgs = {
  limit: Scalars["Int"];
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryStargazersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHub_StarOrder>;
};

/** A repository contains the content for a project. */
export type GitHub_RepositoryWatchersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The affiliation of a user to a repository */
export enum GitHub_RepositoryAffiliation {
  /** Repositories that are owned by the authenticated user. */
  Owner = "OWNER",
  /** Repositories that the user has been added to as a collaborator. */
  Collaborator = "COLLABORATOR",
  /** Repositories that the user has access to through being a member of an
   * organization. This includes every repository on every team that the user is on.
   */
  OrganizationMember = "ORGANIZATION_MEMBER"
}

/** The affiliation type between collaborator and repository. */
export enum GitHub_RepositoryCollaboratorAffiliation {
  /** All collaborators of the repository. */
  All = "ALL",
  /** All outside collaborators of an organization-owned repository. */
  Outside = "OUTSIDE"
}

/** The connection type for User. */
export type GitHub_RepositoryCollaboratorConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_RepositoryCollaboratorEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_User>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** Represents a user who is a collaborator of a repository. */
export type GitHub_RepositoryCollaboratorEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  node: GitHub_User;
  /** The permission the user has on the repository. */
  permission: GitHub_RepositoryPermission;
  /** A list of sources for the user's access to the repository. */
  permissionSources?: Maybe<Array<GitHub_PermissionSource>>;
};

/** A list of repositories owned by the subject. */
export type GitHub_RepositoryConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_RepositoryEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Repository>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
  /** The total size in kilobytes of all repositories in the connection. */
  totalDiskUsage: Scalars["Int"];
};

/** The reason a repository is listed as 'contributed'. */
export enum GitHub_RepositoryContributionType {
  /** Created a commit */
  Commit = "COMMIT",
  /** Created an issue */
  Issue = "ISSUE",
  /** Created a pull request */
  PullRequest = "PULL_REQUEST",
  /** Created the repository */
  Repository = "REPOSITORY",
  /** Reviewed a pull request */
  PullRequestReview = "PULL_REQUEST_REVIEW"
}

/** An edge in a connection. */
export type GitHub_RepositoryEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Repository>;
};

/** A subset of repository info. */
export type GitHub_RepositoryInfo = {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** The description of the repository. */
  description?: Maybe<Scalars["String"]>;
  /** The description of the repository rendered to HTML. */
  descriptionHTML: Scalars["GitHub_HTML"];
  /** Returns how many forks there are of this repository in the whole network. */
  forkCount: Scalars["Int"];
  /** Indicates if the repository has issues feature enabled. */
  hasIssuesEnabled: Scalars["Boolean"];
  /** Indicates if the repository has wiki feature enabled. */
  hasWikiEnabled: Scalars["Boolean"];
  /** The repository's URL. */
  homepageUrl?: Maybe<Scalars["GitHub_URI"]>;
  /** Indicates if the repository is unmaintained. */
  isArchived: Scalars["Boolean"];
  /** Identifies if the repository is a fork. */
  isFork: Scalars["Boolean"];
  /** Indicates if the repository has been locked or not. */
  isLocked: Scalars["Boolean"];
  /** Identifies if the repository is a mirror. */
  isMirror: Scalars["Boolean"];
  /** Identifies if the repository is private. */
  isPrivate: Scalars["Boolean"];
  /** The license associated with the repository */
  licenseInfo?: Maybe<GitHub_License>;
  /** The reason the repository has been locked. */
  lockReason?: Maybe<GitHub_RepositoryLockReason>;
  /** The repository's original mirror URL. */
  mirrorUrl?: Maybe<Scalars["GitHub_URI"]>;
  /** The name of the repository. */
  name: Scalars["String"];
  /** The repository's name with owner. */
  nameWithOwner: Scalars["String"];
  /** The User owner of the repository. */
  owner: GitHub_RepositoryOwner;
  /** Identifies when the repository was last pushed to. */
  pushedAt?: Maybe<Scalars["GitHub_DateTime"]>;
  /** The HTTP path for this repository */
  resourcePath: Scalars["GitHub_URI"];
  /** A description of the repository, rendered to HTML without any links in it. */
  shortDescriptionHTML: Scalars["GitHub_HTML"];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["GitHub_DateTime"];
  /** The HTTP URL for this repository */
  url: Scalars["GitHub_URI"];
};

/** A subset of repository info. */
export type GitHub_RepositoryInfoShortDescriptionHtmlArgs = {
  limit: Scalars["Int"];
};

/** An invitation for a user to be added to a repository. */
export type GitHub_RepositoryInvitation = GitHub_Node & {
  id: Scalars["ID"];
  /** The user who received the invitation. */
  invitee: GitHub_User;
  /** The user who created the invitation. */
  inviter: GitHub_User;
  /** The permission granted on this repository by this invitation. */
  permission: GitHub_RepositoryPermission;
  /** The Repository the user is invited to. */
  repository?: Maybe<GitHub_RepositoryInfo>;
};

/** An edge in a connection. */
export type GitHub_RepositoryInvitationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_RepositoryInvitation>;
};

/** The possible reasons a given repository could be in a locked state. */
export enum GitHub_RepositoryLockReason {
  /** The repository is locked due to a move. */
  Moving = "MOVING",
  /** The repository is locked due to a billing related reason. */
  Billing = "BILLING",
  /** The repository is locked due to a rename. */
  Rename = "RENAME",
  /** The repository is locked due to a migration. */
  Migrating = "MIGRATING"
}

/** Represents a object that belongs to a repository. */
export type GitHub_RepositoryNode = {
  /** The repository associated with this node. */
  repository: GitHub_Repository;
};

/** Ordering options for repository connections */
export type GitHub_RepositoryOrder = {
  /** The field to order repositories by. */
  field: GitHub_RepositoryOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which repository connections can be ordered. */
export enum GitHub_RepositoryOrderField {
  /** Order repositories by creation time */
  CreatedAt = "CREATED_AT",
  /** Order repositories by update time */
  UpdatedAt = "UPDATED_AT",
  /** Order repositories by push time */
  PushedAt = "PUSHED_AT",
  /** Order repositories by name */
  Name = "NAME",
  /** Order repositories by number of stargazers */
  Stargazers = "STARGAZERS"
}

/** Represents an owner of a Repository. */
export type GitHub_RepositoryOwner = {
  /** A URL pointing to the owner's public avatar. */
  avatarUrl: Scalars["GitHub_URI"];
  id: Scalars["ID"];
  /** The username used to login. */
  login: Scalars["String"];
  /** A list of repositories this user has pinned to their profile */
  pinnedRepositories: GitHub_RepositoryConnection;
  /** A list of repositories that the user owns. */
  repositories: GitHub_RepositoryConnection;
  /** Find Repository. */
  repository?: Maybe<GitHub_Repository>;
  /** The HTTP URL for the owner. */
  resourcePath: Scalars["GitHub_URI"];
  /** The HTTP URL for the owner. */
  url: Scalars["GitHub_URI"];
};

/** Represents an owner of a Repository. */
export type GitHub_RepositoryOwnerAvatarUrlArgs = {
  size?: Maybe<Scalars["Int"]>;
};

/** Represents an owner of a Repository. */
export type GitHub_RepositoryOwnerPinnedRepositoriesArgs = {
  privacy?: Maybe<GitHub_RepositoryPrivacy>;
  orderBy?: Maybe<GitHub_RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars["Boolean"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** Represents an owner of a Repository. */
export type GitHub_RepositoryOwnerRepositoriesArgs = {
  privacy?: Maybe<GitHub_RepositoryPrivacy>;
  orderBy?: Maybe<GitHub_RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars["Boolean"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  isFork?: Maybe<Scalars["Boolean"]>;
};

/** Represents an owner of a Repository. */
export type GitHub_RepositoryOwnerRepositoryArgs = {
  name: Scalars["String"];
};

/** The access level to a repository */
export enum GitHub_RepositoryPermission {
  /** Can read, clone, push, and add collaborators */
  Admin = "ADMIN",
  /** Can read, clone and push */
  Write = "WRITE",
  /** Can read and clone */
  Read = "READ"
}

/** The privacy of a repository */
export enum GitHub_RepositoryPrivacy {
  /** Public */
  Public = "PUBLIC",
  /** Private */
  Private = "PRIVATE"
}

/** A repository-topic connects a repository to a topic. */
export type GitHub_RepositoryTopic = GitHub_Node &
  GitHub_UniformResourceLocatable & {
    id: Scalars["ID"];
    /** The HTTP path for this repository-topic. */
    resourcePath: Scalars["GitHub_URI"];
    /** The topic. */
    topic: GitHub_Topic;
    /** The HTTP URL for this repository-topic. */
    url: Scalars["GitHub_URI"];
  };

/** The connection type for RepositoryTopic. */
export type GitHub_RepositoryTopicConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_RepositoryTopicEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_RepositoryTopic>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_RepositoryTopicEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_RepositoryTopic>;
};

/** Types that can be requested reviewers. */
export type GitHub_RequestedReviewer = GitHub_User | GitHub_Team;

/** Autogenerated input type of RequestReviews */
export type GitHub_RequestReviewsInput = {
  /** The Node ID of the pull request to modify. */
  pullRequestId: Scalars["ID"];
  /** The Node IDs of the user to request. */
  userIds?: Maybe<Array<Scalars["ID"]>>;
  /** The Node IDs of the team to request. */
  teamIds?: Maybe<Array<Scalars["ID"]>>;
  /** Add users to the set rather than replace. */
  union?: Maybe<Scalars["Boolean"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of RequestReviews */
export type GitHub_RequestReviewsPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The pull request that is getting requests. */
  pullRequest?: Maybe<GitHub_PullRequest>;
  /** The edge from the pull request to the requested reviewers. */
  requestedReviewersEdge?: Maybe<GitHub_UserEdge>;
};

/** Autogenerated input type of ResolveReviewThread */
export type GitHub_ResolveReviewThreadInput = {
  /** The ID of the thread to resolve */
  threadId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of ResolveReviewThread */
export type GitHub_ResolveReviewThreadPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The thread to resolve. */
  thread?: Maybe<GitHub_PullRequestReviewThread>;
};

/** Represents a private contribution a user made on GitHub. */
export type GitHub_RestrictedContribution = GitHub_Contribution & {
  /** Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars["Boolean"];
  /** When this contribution was made. */
  occurredAt: Scalars["GitHub_DateTime"];
  /** The HTTP path for this contribution. */
  resourcePath: Scalars["GitHub_URI"];
  /** The HTTP URL for this contribution. */
  url: Scalars["GitHub_URI"];
  /** The user who made this contribution. */
  user: GitHub_User;
};

/** A team or user who has the ability to dismiss a review on a protected branch. */
export type GitHub_ReviewDismissalAllowance = GitHub_Node & {
  /** The actor that can dismiss. */
  actor?: Maybe<GitHub_ReviewDismissalAllowanceActor>;
  /** Identifies the branch protection rule associated with the allowed user or team. */
  branchProtectionRule?: Maybe<GitHub_BranchProtectionRule>;
  id: Scalars["ID"];
};

/** Types that can be an actor. */
export type GitHub_ReviewDismissalAllowanceActor = GitHub_User | GitHub_Team;

/** The connection type for ReviewDismissalAllowance. */
export type GitHub_ReviewDismissalAllowanceConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_ReviewDismissalAllowanceEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_ReviewDismissalAllowance>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_ReviewDismissalAllowanceEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_ReviewDismissalAllowance>;
};

/** Represents a 'review_dismissed' event on a given issue or pull request. */
export type GitHub_ReviewDismissedEvent = GitHub_Node &
  GitHub_UniformResourceLocatable & {
    /** Identifies the actor who performed the event. */
    actor?: Maybe<GitHub_Actor>;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHub_DateTime"];
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    /** Identifies the optional message associated with the 'review_dismissed' event. */
    dismissalMessage?: Maybe<Scalars["String"]>;
    /** Identifies the optional message associated with the event, rendered to HTML. */
    dismissalMessageHTML?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    /** Identifies the message associated with the 'review_dismissed' event. */
    message: Scalars["String"];
    /** The message associated with the event, rendered to HTML. */
    messageHtml: Scalars["GitHub_HTML"];
    /** Identifies the previous state of the review with the 'review_dismissed' event. */
    previousReviewState: GitHub_PullRequestReviewState;
    /** PullRequest referenced by event. */
    pullRequest: GitHub_PullRequest;
    /** Identifies the commit which caused the review to become stale. */
    pullRequestCommit?: Maybe<GitHub_PullRequestCommit>;
    /** The HTTP path for this review dismissed event. */
    resourcePath: Scalars["GitHub_URI"];
    /** Identifies the review associated with the 'review_dismissed' event. */
    review?: Maybe<GitHub_PullRequestReview>;
    /** The HTTP URL for this review dismissed event. */
    url: Scalars["GitHub_URI"];
  };

/** A request for a user to review a pull request. */
export type GitHub_ReviewRequest = GitHub_Node & {
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  /** Identifies the pull request associated with this review request. */
  pullRequest: GitHub_PullRequest;
  /** The reviewer that is requested. */
  requestedReviewer?: Maybe<GitHub_RequestedReviewer>;
};

/** The connection type for ReviewRequest. */
export type GitHub_ReviewRequestConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_ReviewRequestEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_ReviewRequest>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** Represents an 'review_requested' event on a given pull request. */
export type GitHub_ReviewRequestedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  id: Scalars["ID"];
  /** PullRequest referenced by event. */
  pullRequest: GitHub_PullRequest;
  /** Identifies the reviewer whose review was requested. */
  requestedReviewer?: Maybe<GitHub_RequestedReviewer>;
};

/** An edge in a connection. */
export type GitHub_ReviewRequestEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_ReviewRequest>;
};

/** Represents an 'review_request_removed' event on a given pull request. */
export type GitHub_ReviewRequestRemovedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  id: Scalars["ID"];
  /** PullRequest referenced by event. */
  pullRequest: GitHub_PullRequest;
  /** Identifies the reviewer whose review request was removed. */
  requestedReviewer?: Maybe<GitHub_RequestedReviewer>;
};

/** The results of a search. */
export type GitHub_SearchResultItem =
  | GitHub_Issue
  | GitHub_PullRequest
  | GitHub_Repository
  | GitHub_User
  | GitHub_Organization
  | GitHub_MarketplaceListing;

/** A list of results that matched against a search query. */
export type GitHub_SearchResultItemConnection = {
  /** The number of pieces of code that matched the search query. */
  codeCount: Scalars["Int"];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_SearchResultItemEdge>>>;
  /** The number of issues that matched the search query. */
  issueCount: Scalars["Int"];
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_SearchResultItem>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** The number of repositories that matched the search query. */
  repositoryCount: Scalars["Int"];
  /** The number of users that matched the search query. */
  userCount: Scalars["Int"];
  /** The number of wiki pages that matched the search query. */
  wikiCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_SearchResultItemEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_SearchResultItem>;
  /** Text matches on the result found. */
  textMatches?: Maybe<Array<Maybe<GitHub_TextMatch>>>;
};

/** Represents the individual results of a search. */
export enum GitHub_SearchType {
  /** Returns results matching issues in repositories. */
  Issue = "ISSUE",
  /** Returns results matching repositories. */
  Repository = "REPOSITORY",
  /** Returns results matching users and organizations on GitHub. */
  User = "USER"
}

/** A GitHub Security Advisory */
export type GitHub_SecurityAdvisory = GitHub_Node & {
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  /** This is a long plaintext description of the advisory */
  description: Scalars["String"];
  /** The GitHub Security Advisory ID */
  ghsaId: Scalars["String"];
  id: Scalars["ID"];
  /** A list of identifiers for this advisory */
  identifiers: Array<GitHub_SecurityAdvisoryIdentifier>;
  /** When the advisory was published */
  publishedAt: Scalars["GitHub_DateTime"];
  /** A list of references for this advisory */
  references: Array<GitHub_SecurityAdvisoryReference>;
  /** The severity of the advisory */
  severity: GitHub_SecurityAdvisorySeverity;
  /** A short plaintext summary of the advisory */
  summary: Scalars["String"];
  /** When the advisory was last updated */
  updatedAt: Scalars["GitHub_DateTime"];
  /** Vulnerabilities associated with this Advisory */
  vulnerabilities: GitHub_SecurityVulnerabilityConnection;
  /** When the advisory was withdrawn, if it has been withdrawn */
  withdrawnAt?: Maybe<Scalars["GitHub_DateTime"]>;
};

/** A GitHub Security Advisory */
export type GitHub_SecurityAdvisoryVulnerabilitiesArgs = {
  orderBy?: Maybe<GitHub_SecurityVulnerabilityOrder>;
  ecosystem?: Maybe<GitHub_SecurityAdvisoryEcosystem>;
  package?: Maybe<Scalars["String"]>;
  severities?: Maybe<Array<GitHub_SecurityAdvisorySeverity>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The connection type for SecurityAdvisory. */
export type GitHub_SecurityAdvisoryConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_SecurityAdvisoryEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_SecurityAdvisory>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** The possible ecosystems of a security vulnerability's package. */
export enum GitHub_SecurityAdvisoryEcosystem {
  /** Ruby gems hosted at RubyGems.org */
  Rubygems = "RUBYGEMS",
  /** JavaScript packages hosted at npmjs.com */
  Npm = "NPM",
  /** Python packages hosted at PyPI.org */
  Pip = "PIP",
  /** Java artifacts hosted at the Maven central repository */
  Maven = "MAVEN",
  /** .NET packages hosted at the NuGet Gallery */
  Nuget = "NUGET"
}

/** An edge in a connection. */
export type GitHub_SecurityAdvisoryEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_SecurityAdvisory>;
};

/** A GitHub Security Advisory Identifier */
export type GitHub_SecurityAdvisoryIdentifier = {
  /** The identifier type, e.g. GHSA, CVE */
  type: Scalars["String"];
  /** The identifier */
  value: Scalars["String"];
};

/** An advisory identifier to filter results on. */
export type GitHub_SecurityAdvisoryIdentifierFilter = {
  /** The identifier type. */
  type: GitHub_SecurityAdvisoryIdentifierType;
  /** The identifier string. Supports exact or partial matching. */
  value: Scalars["String"];
};

/** Identifier formats available for advisories. */
export enum GitHub_SecurityAdvisoryIdentifierType {
  /** Common Vulnerabilities and Exposures Identifier. */
  Cve = "CVE",
  /** GitHub Security Advisory ID. */
  Ghsa = "GHSA"
}

/** Ordering options for security advisory connections */
export type GitHub_SecurityAdvisoryOrder = {
  /** The field to order security advisories by. */
  field: GitHub_SecurityAdvisoryOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which security advisory connections can be ordered. */
export enum GitHub_SecurityAdvisoryOrderField {
  /** Order advisories by publication time */
  PublishedAt = "PUBLISHED_AT",
  /** Order advisories by update time */
  UpdatedAt = "UPDATED_AT"
}

/** An individual package */
export type GitHub_SecurityAdvisoryPackage = {
  /** The ecosystem the package belongs to, e.g. RUBYGEMS, NPM */
  ecosystem: GitHub_SecurityAdvisoryEcosystem;
  /** The package name */
  name: Scalars["String"];
};

/** An individual package version */
export type GitHub_SecurityAdvisoryPackageVersion = {
  /** The package name or version */
  identifier: Scalars["String"];
};

/** A GitHub Security Advisory Reference */
export type GitHub_SecurityAdvisoryReference = {
  /** A publicly accessible reference */
  url: Scalars["GitHub_URI"];
};

/** Severity of the vulnerability. */
export enum GitHub_SecurityAdvisorySeverity {
  /** Low. */
  Low = "LOW",
  /** Moderate. */
  Moderate = "MODERATE",
  /** High. */
  High = "HIGH",
  /** Critical. */
  Critical = "CRITICAL"
}

/** An individual vulnerability within an Advisory */
export type GitHub_SecurityVulnerability = {
  /** The Advisory associated with this Vulnerability */
  advisory: GitHub_SecurityAdvisory;
  /** The first version containing a fix for the vulnerability */
  firstPatchedVersion?: Maybe<GitHub_SecurityAdvisoryPackageVersion>;
  /** A description of the vulnerable package */
  package: GitHub_SecurityAdvisoryPackage;
  /** The severity of the vulnerability within this package */
  severity: GitHub_SecurityAdvisorySeverity;
  /** When the vulnerability was last updated */
  updatedAt: Scalars["GitHub_DateTime"];
  /** A string that describes the vulnerable package versions.
   * This string follows a basic syntax with a few forms.
   * + `= 0.2.0` denotes a single vulnerable version.
   * + `<= 1.0.8` denotes a version range up to and including the specified version
   * + `< 0.1.11` denotes a version range up to, but excluding, the specified version
   * + `>= 4.3.0, < 4.3.5` denotes a version range with a known minimum and maximum version.
   * + `>= 0.0.1` denotes a version range with a known minimum, but no known maximum
   */
  vulnerableVersionRange: Scalars["String"];
};

/** The connection type for SecurityVulnerability. */
export type GitHub_SecurityVulnerabilityConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_SecurityVulnerabilityEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_SecurityVulnerability>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_SecurityVulnerabilityEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_SecurityVulnerability>;
};

/** Ordering options for security vulnerability connections */
export type GitHub_SecurityVulnerabilityOrder = {
  /** The field to order security vulnerabilities by. */
  field: GitHub_SecurityVulnerabilityOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which security vulnerability connections can be ordered. */
export enum GitHub_SecurityVulnerabilityOrderField {
  /** Order vulnerability by update time */
  UpdatedAt = "UPDATED_AT"
}

/** Represents an S/MIME signature on a Commit or Tag. */
export type GitHub_SmimeSignature = GitHub_GitSignature & {
  /** Email used to sign this object. */
  email: Scalars["String"];
  /** True if the signature is valid and verified by GitHub. */
  isValid: Scalars["Boolean"];
  /** Payload for GPG signing object. Raw ODB object without the signature header. */
  payload: Scalars["String"];
  /** ASCII-armored signature header from object. */
  signature: Scalars["String"];
  /** GitHub user corresponding to the email signing this commit. */
  signer?: Maybe<GitHub_User>;
  /** The state of this signature. `VALID` if signature is valid and verified by
   * GitHub, otherwise represents reason why signature is considered invalid.
   */
  state: GitHub_GitSignatureState;
  /** True if the signature was made with GitHub's signing key. */
  wasSignedByGitHub: Scalars["Boolean"];
};

/** The connection type for User. */
export type GitHub_StargazerConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_StargazerEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_User>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** Represents a user that's starred a repository. */
export type GitHub_StargazerEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  node: GitHub_User;
  /** Identifies when the item was starred. */
  starredAt: Scalars["GitHub_DateTime"];
};

/** Ways in which star connections can be ordered. */
export type GitHub_StarOrder = {
  /** The field in which to order nodes by. */
  field: GitHub_StarOrderField;
  /** The direction in which to order nodes. */
  direction: GitHub_OrderDirection;
};

/** Properties by which star connections can be ordered. */
export enum GitHub_StarOrderField {
  /** Allows ordering a list of stars by when they were created. */
  StarredAt = "STARRED_AT"
}

/** Things that can be starred. */
export type GitHub_Starrable = {
  id: Scalars["ID"];
  /** A list of users who have starred this starrable. */
  stargazers: GitHub_StargazerConnection;
  /** Returns a boolean indicating whether the viewing user has starred this starrable. */
  viewerHasStarred: Scalars["Boolean"];
};

/** Things that can be starred. */
export type GitHub_StarrableStargazersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHub_StarOrder>;
};

/** The connection type for Repository. */
export type GitHub_StarredRepositoryConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_StarredRepositoryEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Repository>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** Represents a starred repository. */
export type GitHub_StarredRepositoryEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  node: GitHub_Repository;
  /** Identifies when the item was starred. */
  starredAt: Scalars["GitHub_DateTime"];
};

/** Represents a commit status. */
export type GitHub_Status = GitHub_Node & {
  /** The commit this status is attached to. */
  commit?: Maybe<GitHub_Commit>;
  /** Looks up an individual status context by context name. */
  context?: Maybe<GitHub_StatusContext>;
  /** The individual status contexts for this commit. */
  contexts: Array<GitHub_StatusContext>;
  id: Scalars["ID"];
  /** The combined commit status. */
  state: GitHub_StatusState;
};

/** Represents a commit status. */
export type GitHub_StatusContextArgs = {
  name: Scalars["String"];
};

/** Represents an individual commit status context */
export type GitHub_StatusContext = GitHub_Node & {
  /** This commit this status context is attached to. */
  commit?: Maybe<GitHub_Commit>;
  /** The name of this status context. */
  context: Scalars["String"];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** The actor who created this status context. */
  creator?: Maybe<GitHub_Actor>;
  /** The description for this status context. */
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** The state of this status context. */
  state: GitHub_StatusState;
  /** The URL for this status context. */
  targetUrl?: Maybe<Scalars["GitHub_URI"]>;
};

/** The possible commit status states. */
export enum GitHub_StatusState {
  /** Status is expected. */
  Expected = "EXPECTED",
  /** Status is errored. */
  Error = "ERROR",
  /** Status is failing. */
  Failure = "FAILURE",
  /** Status is pending. */
  Pending = "PENDING",
  /** Status is successful. */
  Success = "SUCCESS"
}

/** Autogenerated input type of SubmitPullRequestReview */
export type GitHub_SubmitPullRequestReviewInput = {
  /** The Pull Request Review ID to submit. */
  pullRequestReviewId: Scalars["ID"];
  /** The event to send to the Pull Request Review. */
  event: GitHub_PullRequestReviewEvent;
  /** The text field to set on the Pull Request Review. */
  body?: Maybe<Scalars["String"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of SubmitPullRequestReview */
export type GitHub_SubmitPullRequestReviewPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The submitted pull request review. */
  pullRequestReview?: Maybe<GitHub_PullRequestReview>;
};

/** Entities that can be subscribed to for web and email notifications. */
export type GitHub_Subscribable = {
  id: Scalars["ID"];
  /** Check if the viewer is able to change their subscription status for the repository. */
  viewerCanSubscribe: Scalars["Boolean"];
  /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
  viewerSubscription?: Maybe<GitHub_SubscriptionState>;
};

/** Represents a 'subscribed' event on a given `Subscribable`. */
export type GitHub_SubscribedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  id: Scalars["ID"];
  /** Object referenced by event. */
  subscribable: GitHub_Subscribable;
};

/** The possible states of a subscription. */
export enum GitHub_SubscriptionState {
  /** The User is only notified when participating or @mentioned. */
  Unsubscribed = "UNSUBSCRIBED",
  /** The User is notified of all conversations. */
  Subscribed = "SUBSCRIBED",
  /** The User is never notified. */
  Ignored = "IGNORED"
}

/** A suggestion to review a pull request based on a user's commit history and review comments. */
export type GitHub_SuggestedReviewer = {
  /** Is this suggestion based on past commits? */
  isAuthor: Scalars["Boolean"];
  /** Is this suggestion based on past review comments? */
  isCommenter: Scalars["Boolean"];
  /** Identifies the user suggested to review the pull request. */
  reviewer: GitHub_User;
};

/** Represents a Git tag. */
export type GitHub_Tag = GitHub_Node &
  GitHub_GitObject & {
    /** An abbreviated version of the Git object ID */
    abbreviatedOid: Scalars["String"];
    /** The HTTP path for this Git object */
    commitResourcePath: Scalars["GitHub_URI"];
    /** The HTTP URL for this Git object */
    commitUrl: Scalars["GitHub_URI"];
    id: Scalars["ID"];
    /** The Git tag message. */
    message?: Maybe<Scalars["String"]>;
    /** The Git tag name. */
    name: Scalars["String"];
    /** The Git object ID */
    oid: Scalars["GitHub_GitObjectID"];
    /** The Repository the Git object belongs to */
    repository: GitHub_Repository;
    /** Details about the tag author. */
    tagger?: Maybe<GitHub_GitActor>;
    /** The Git object the tag points to. */
    target: GitHub_GitObject;
  };

/** A team of users in an organization. */
export type GitHub_Team = GitHub_Node &
  GitHub_Subscribable &
  GitHub_MemberStatusable & {
    /** A list of teams that are ancestors of this team. */
    ancestors: GitHub_TeamConnection;
    /** A URL pointing to the team's avatar. */
    avatarUrl?: Maybe<Scalars["GitHub_URI"]>;
    /** List of child teams belonging to this team */
    childTeams: GitHub_TeamConnection;
    /** The slug corresponding to the organization and team. */
    combinedSlug: Scalars["String"];
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHub_DateTime"];
    /** The description of the team. */
    description?: Maybe<Scalars["String"]>;
    /** The HTTP path for editing this team */
    editTeamResourcePath: Scalars["GitHub_URI"];
    /** The HTTP URL for editing this team */
    editTeamUrl: Scalars["GitHub_URI"];
    id: Scalars["ID"];
    /** A list of pending invitations for users to this team */
    invitations?: Maybe<GitHub_OrganizationInvitationConnection>;
    /** Get the status messages members of this entity have set that are either public or visible only to the organization. */
    memberStatuses: GitHub_UserStatusConnection;
    /** A list of users who are members of this team. */
    members: GitHub_TeamMemberConnection;
    /** The HTTP path for the team' members */
    membersResourcePath: Scalars["GitHub_URI"];
    /** The HTTP URL for the team' members */
    membersUrl: Scalars["GitHub_URI"];
    /** The name of the team. */
    name: Scalars["String"];
    /** The HTTP path creating a new team */
    newTeamResourcePath: Scalars["GitHub_URI"];
    /** The HTTP URL creating a new team */
    newTeamUrl: Scalars["GitHub_URI"];
    /** The organization that owns this team. */
    organization: GitHub_Organization;
    /** The parent team of the team. */
    parentTeam?: Maybe<GitHub_Team>;
    /** The level of privacy the team has. */
    privacy: GitHub_TeamPrivacy;
    /** A list of repositories this team has access to. */
    repositories: GitHub_TeamRepositoryConnection;
    /** The HTTP path for this team's repositories */
    repositoriesResourcePath: Scalars["GitHub_URI"];
    /** The HTTP URL for this team's repositories */
    repositoriesUrl: Scalars["GitHub_URI"];
    /** The HTTP path for this team */
    resourcePath: Scalars["GitHub_URI"];
    /** The slug corresponding to the team. */
    slug: Scalars["String"];
    /** The HTTP path for this team's teams */
    teamsResourcePath: Scalars["GitHub_URI"];
    /** The HTTP URL for this team's teams */
    teamsUrl: Scalars["GitHub_URI"];
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHub_DateTime"];
    /** The HTTP URL for this team */
    url: Scalars["GitHub_URI"];
    /** Team is adminable by the viewer. */
    viewerCanAdminister: Scalars["Boolean"];
    /** Check if the viewer is able to change their subscription status for the repository. */
    viewerCanSubscribe: Scalars["Boolean"];
    /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
    viewerSubscription?: Maybe<GitHub_SubscriptionState>;
  };

/** A team of users in an organization. */
export type GitHub_TeamAncestorsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A team of users in an organization. */
export type GitHub_TeamAvatarUrlArgs = {
  size: Scalars["Int"];
};

/** A team of users in an organization. */
export type GitHub_TeamChildTeamsArgs = {
  orderBy?: Maybe<GitHub_TeamOrder>;
  userLogins?: Maybe<Array<Scalars["String"]>>;
  immediateOnly: Scalars["Boolean"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A team of users in an organization. */
export type GitHub_TeamInvitationsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A team of users in an organization. */
export type GitHub_TeamMemberStatusesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHub_UserStatusOrder>;
};

/** A team of users in an organization. */
export type GitHub_TeamMembersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  query?: Maybe<Scalars["String"]>;
  membership: GitHub_TeamMembershipType;
  role?: Maybe<GitHub_TeamMemberRole>;
  orderBy?: Maybe<GitHub_TeamMemberOrder>;
};

/** A team of users in an organization. */
export type GitHub_TeamRepositoriesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  query?: Maybe<Scalars["String"]>;
  orderBy?: Maybe<GitHub_TeamRepositoryOrder>;
};

/** The connection type for Team. */
export type GitHub_TeamConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_TeamEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Team>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_TeamEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Team>;
};

/** The connection type for User. */
export type GitHub_TeamMemberConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_TeamMemberEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_User>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** Represents a user who is a member of a team. */
export type GitHub_TeamMemberEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The HTTP path to the organization's member access page. */
  memberAccessResourcePath: Scalars["GitHub_URI"];
  /** The HTTP URL to the organization's member access page. */
  memberAccessUrl: Scalars["GitHub_URI"];
  node: GitHub_User;
  /** The role the member has on the team. */
  role: GitHub_TeamMemberRole;
};

/** Ordering options for team member connections */
export type GitHub_TeamMemberOrder = {
  /** The field to order team members by. */
  field: GitHub_TeamMemberOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which team member connections can be ordered. */
export enum GitHub_TeamMemberOrderField {
  /** Order team members by login */
  Login = "LOGIN",
  /** Order team members by creation time */
  CreatedAt = "CREATED_AT"
}

/** The possible team member roles; either 'maintainer' or 'member'. */
export enum GitHub_TeamMemberRole {
  /** A team maintainer has permission to add and remove team members. */
  Maintainer = "MAINTAINER",
  /** A team member has no administrative permissions on the team. */
  Member = "MEMBER"
}

/** Defines which types of team members are included in the returned list. Can be one of IMMEDIATE, CHILD_TEAM or ALL. */
export enum GitHub_TeamMembershipType {
  /** Includes only immediate members of the team. */
  Immediate = "IMMEDIATE",
  /** Includes only child team members for the team. */
  ChildTeam = "CHILD_TEAM",
  /** Includes immediate and child team members for the team. */
  All = "ALL"
}

/** Ways in which team connections can be ordered. */
export type GitHub_TeamOrder = {
  /** The field in which to order nodes by. */
  field: GitHub_TeamOrderField;
  /** The direction in which to order nodes. */
  direction: GitHub_OrderDirection;
};

/** Properties by which team connections can be ordered. */
export enum GitHub_TeamOrderField {
  /** Allows ordering a list of teams by name. */
  Name = "NAME"
}

/** The possible team privacy values. */
export enum GitHub_TeamPrivacy {
  /** A secret team can only be seen by its members. */
  Secret = "SECRET",
  /** A visible team can be seen and @mentioned by every member of the organization. */
  Visible = "VISIBLE"
}

/** The connection type for Repository. */
export type GitHub_TeamRepositoryConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_TeamRepositoryEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Repository>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** Represents a team repository. */
export type GitHub_TeamRepositoryEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  node: GitHub_Repository;
  /** The permission level the team has on the repository */
  permission: GitHub_RepositoryPermission;
};

/** Ordering options for team repository connections */
export type GitHub_TeamRepositoryOrder = {
  /** The field to order repositories by. */
  field: GitHub_TeamRepositoryOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which team repository connections can be ordered. */
export enum GitHub_TeamRepositoryOrderField {
  /** Order repositories by creation time */
  CreatedAt = "CREATED_AT",
  /** Order repositories by update time */
  UpdatedAt = "UPDATED_AT",
  /** Order repositories by push time */
  PushedAt = "PUSHED_AT",
  /** Order repositories by name */
  Name = "NAME",
  /** Order repositories by permission */
  Permission = "PERMISSION",
  /** Order repositories by number of stargazers */
  Stargazers = "STARGAZERS"
}

/** The role of a user on a team. */
export enum GitHub_TeamRole {
  /** User has admin rights on the team. */
  Admin = "ADMIN",
  /** User is a member of the team. */
  Member = "MEMBER"
}

/** A text match within a search result. */
export type GitHub_TextMatch = {
  /** The specific text fragment within the property matched on. */
  fragment: Scalars["String"];
  /** Highlights within the matched fragment. */
  highlights: Array<GitHub_TextMatchHighlight>;
  /** The property matched on. */
  property: Scalars["String"];
};

/** Represents a single highlight in a search result match. */
export type GitHub_TextMatchHighlight = {
  /** The indice in the fragment where the matched text begins. */
  beginIndice: Scalars["Int"];
  /** The indice in the fragment where the matched text ends. */
  endIndice: Scalars["Int"];
  /** The text matched. */
  text: Scalars["String"];
};

/** A topic aggregates entities that are related to a subject. */
export type GitHub_Topic = GitHub_Node &
  GitHub_Starrable & {
    id: Scalars["ID"];
    /** The topic's name. */
    name: Scalars["String"];
    /** A list of related topics, including aliases of this topic, sorted with the most relevant
     * first. Returns up to 10 Topics.
     */
    relatedTopics: Array<GitHub_Topic>;
    /** A list of users who have starred this starrable. */
    stargazers: GitHub_StargazerConnection;
    /** Returns a boolean indicating whether the viewing user has starred this starrable. */
    viewerHasStarred: Scalars["Boolean"];
  };

/** A topic aggregates entities that are related to a subject. */
export type GitHub_TopicRelatedTopicsArgs = {
  first: Scalars["Int"];
};

/** A topic aggregates entities that are related to a subject. */
export type GitHub_TopicStargazersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GitHub_StarOrder>;
};

/** The connection type for Topic. */
export type GitHub_TopicConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_TopicEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_Topic>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_TopicEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_Topic>;
};

/** Reason that the suggested topic is declined. */
export enum GitHub_TopicSuggestionDeclineReason {
  /** The suggested topic is not relevant to the repository. */
  NotRelevant = "NOT_RELEVANT",
  /** The suggested topic is too specific for the repository (e.g. #ruby-on-rails-version-4-2-1). */
  TooSpecific = "TOO_SPECIFIC",
  /** The viewer does not like the suggested topic. */
  PersonalPreference = "PERSONAL_PREFERENCE",
  /** The suggested topic is too general for the repository. */
  TooGeneral = "TOO_GENERAL"
}

/** Represents a 'transferred' event on a given issue or pull request. */
export type GitHub_TransferredEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** The repository this came from */
  fromRepository?: Maybe<GitHub_Repository>;
  id: Scalars["ID"];
  /** Identifies the issue associated with the event. */
  issue: GitHub_Issue;
};

/** Represents a Git tree. */
export type GitHub_Tree = GitHub_Node &
  GitHub_GitObject & {
    /** An abbreviated version of the Git object ID */
    abbreviatedOid: Scalars["String"];
    /** The HTTP path for this Git object */
    commitResourcePath: Scalars["GitHub_URI"];
    /** The HTTP URL for this Git object */
    commitUrl: Scalars["GitHub_URI"];
    /** A list of tree entries. */
    entries?: Maybe<Array<GitHub_TreeEntry>>;
    id: Scalars["ID"];
    /** The Git object ID */
    oid: Scalars["GitHub_GitObjectID"];
    /** The Repository the Git object belongs to */
    repository: GitHub_Repository;
  };

/** Represents a Git tree entry. */
export type GitHub_TreeEntry = {
  /** Entry file mode. */
  mode: Scalars["Int"];
  /** Entry file name. */
  name: Scalars["String"];
  /** Entry file object. */
  object?: Maybe<GitHub_GitObject>;
  /** Entry file Git object ID. */
  oid: Scalars["GitHub_GitObjectID"];
  /** The Repository the tree entry belongs to */
  repository: GitHub_Repository;
  /** Entry file type. */
  type: Scalars["String"];
};

/** Represents an 'unassigned' event on any assignable object. */
export type GitHub_UnassignedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the assignable associated with the event. */
  assignable: GitHub_Assignable;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  id: Scalars["ID"];
  /** Identifies the subject (user) who was unassigned. */
  user?: Maybe<GitHub_User>;
};

/** Represents a type that can be retrieved by a URL. */
export type GitHub_UniformResourceLocatable = {
  /** The HTML path to this resource. */
  resourcePath: Scalars["GitHub_URI"];
  /** The URL to this resource. */
  url: Scalars["GitHub_URI"];
};

/** Represents an unknown signature on a Commit or Tag. */
export type GitHub_UnknownSignature = GitHub_GitSignature & {
  /** Email used to sign this object. */
  email: Scalars["String"];
  /** True if the signature is valid and verified by GitHub. */
  isValid: Scalars["Boolean"];
  /** Payload for GPG signing object. Raw ODB object without the signature header. */
  payload: Scalars["String"];
  /** ASCII-armored signature header from object. */
  signature: Scalars["String"];
  /** GitHub user corresponding to the email signing this commit. */
  signer?: Maybe<GitHub_User>;
  /** The state of this signature. `VALID` if signature is valid and verified by
   * GitHub, otherwise represents reason why signature is considered invalid.
   */
  state: GitHub_GitSignatureState;
  /** True if the signature was made with GitHub's signing key. */
  wasSignedByGitHub: Scalars["Boolean"];
};

/** Represents an 'unlabeled' event on a given issue or pull request. */
export type GitHub_UnlabeledEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  id: Scalars["ID"];
  /** Identifies the label associated with the 'unlabeled' event. */
  label: GitHub_Label;
  /** Identifies the `Labelable` associated with the event. */
  labelable: GitHub_Labelable;
};

/** Represents an 'unlocked' event on a given issue or pull request. */
export type GitHub_UnlockedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  id: Scalars["ID"];
  /** Object that was unlocked. */
  lockable: GitHub_Lockable;
};

/** Autogenerated input type of UnlockLockable */
export type GitHub_UnlockLockableInput = {
  /** ID of the issue or pull request to be unlocked. */
  lockableId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UnlockLockable */
export type GitHub_UnlockLockablePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The item that was unlocked. */
  unlockedRecord?: Maybe<GitHub_Lockable>;
};

/** Autogenerated input type of UnmarkIssueAsDuplicate */
export type GitHub_UnmarkIssueAsDuplicateInput = {
  /** ID of the issue or pull request currently marked as a duplicate. */
  duplicateId: Scalars["ID"];
  /** ID of the issue or pull request currently considered canonical/authoritative/original. */
  canonicalId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UnmarkIssueAsDuplicate */
export type GitHub_UnmarkIssueAsDuplicatePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The issue or pull request that was marked as a duplicate. */
  duplicate?: Maybe<GitHub_IssueOrPullRequest>;
};

/** Autogenerated input type of UnminimizeComment */
export type GitHub_UnminimizeCommentInput = {
  /** The Node ID of the subject to modify. */
  subjectId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated input type of UnpinIssue */
export type GitHub_UnpinIssueInput = {
  /** The ID of the issue to be unpinned */
  issueId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Represents an 'unpinned' event on a given issue or pull request. */
export type GitHub_UnpinnedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  id: Scalars["ID"];
  /** Identifies the issue associated with the event. */
  issue: GitHub_Issue;
};

/** Autogenerated input type of UnresolveReviewThread */
export type GitHub_UnresolveReviewThreadInput = {
  /** The ID of the thread to unresolve */
  threadId: Scalars["ID"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UnresolveReviewThread */
export type GitHub_UnresolveReviewThreadPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The thread to resolve. */
  thread?: Maybe<GitHub_PullRequestReviewThread>;
};

/** Represents an 'unsubscribed' event on a given `Subscribable`. */
export type GitHub_UnsubscribedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  id: Scalars["ID"];
  /** Object referenced by event. */
  subscribable: GitHub_Subscribable;
};

/** Entities that can be updated. */
export type GitHub_Updatable = {
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: Scalars["Boolean"];
};

/** Comments that can be updated. */
export type GitHub_UpdatableComment = {
  /** Reasons why the current viewer can not update this comment. */
  viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>;
};

/** Autogenerated input type of UpdateBranchProtectionRule */
export type GitHub_UpdateBranchProtectionRuleInput = {
  /** The global relay id of the branch protection rule to be updated. */
  branchProtectionRuleId: Scalars["ID"];
  /** The glob-like pattern used to determine matching branches. */
  pattern?: Maybe<Scalars["String"]>;
  /** Are approving reviews required to update matching branches. */
  requiresApprovingReviews?: Maybe<Scalars["Boolean"]>;
  /** Number of approving reviews required to update matching branches. */
  requiredApprovingReviewCount?: Maybe<Scalars["Int"]>;
  /** Are commits required to be signed. */
  requiresCommitSignatures?: Maybe<Scalars["Boolean"]>;
  /** Can admins overwrite branch protection. */
  isAdminEnforced?: Maybe<Scalars["Boolean"]>;
  /** Are status checks required to update matching branches. */
  requiresStatusChecks?: Maybe<Scalars["Boolean"]>;
  /** Are branches required to be up to date before merging. */
  requiresStrictStatusChecks?: Maybe<Scalars["Boolean"]>;
  /** Are reviews from code owners required to update matching branches. */
  requiresCodeOwnerReviews?: Maybe<Scalars["Boolean"]>;
  /** Will new commits pushed to matching branches dismiss pull request review approvals. */
  dismissesStaleReviews?: Maybe<Scalars["Boolean"]>;
  /** Is dismissal of pull request reviews restricted. */
  restrictsReviewDismissals?: Maybe<Scalars["Boolean"]>;
  /** A list of User or Team IDs allowed to dismiss reviews on pull requests targeting matching branches. */
  reviewDismissalActorIds?: Maybe<Array<Scalars["ID"]>>;
  /** Is pushing to matching branches restricted. */
  restrictsPushes?: Maybe<Scalars["Boolean"]>;
  /** A list of User or Team IDs allowed to push to matching branches. */
  pushActorIds?: Maybe<Array<Scalars["ID"]>>;
  /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
  requiredStatusCheckContexts?: Maybe<Array<Scalars["String"]>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UpdateBranchProtectionRule */
export type GitHub_UpdateBranchProtectionRulePayload = {
  /** The newly created BranchProtectionRule. */
  branchProtectionRule?: Maybe<GitHub_BranchProtectionRule>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated input type of UpdateIssueComment */
export type GitHub_UpdateIssueCommentInput = {
  /** The ID of the IssueComment to modify. */
  id: Scalars["ID"];
  /** The updated text of the comment. */
  body: Scalars["String"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UpdateIssueComment */
export type GitHub_UpdateIssueCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The updated comment. */
  issueComment?: Maybe<GitHub_IssueComment>;
};

/** Autogenerated input type of UpdateIssue */
export type GitHub_UpdateIssueInput = {
  /** The ID of the Issue to modify. */
  id: Scalars["ID"];
  /** The title for the issue. */
  title?: Maybe<Scalars["String"]>;
  /** The body for the issue description. */
  body?: Maybe<Scalars["String"]>;
  /** An array of Node IDs of users for this issue. */
  assigneeIds?: Maybe<Array<Scalars["ID"]>>;
  /** The Node ID of the milestone for this issue. */
  milestoneId?: Maybe<Scalars["ID"]>;
  /** An array of Node IDs of labels for this issue. */
  labelIds?: Maybe<Array<Scalars["ID"]>>;
  /** The desired issue state. */
  state?: Maybe<GitHub_IssueState>;
  /** An array of Node IDs for projects associated with this issue. */
  projectIds?: Maybe<Array<Scalars["ID"]>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UpdateIssue */
export type GitHub_UpdateIssuePayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The issue. */
  issue?: Maybe<GitHub_Issue>;
};

/** Autogenerated input type of UpdateProjectCard */
export type GitHub_UpdateProjectCardInput = {
  /** The ProjectCard ID to update. */
  projectCardId: Scalars["ID"];
  /** Whether or not the ProjectCard should be archived */
  isArchived?: Maybe<Scalars["Boolean"]>;
  /** The note of ProjectCard. */
  note?: Maybe<Scalars["String"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UpdateProjectCard */
export type GitHub_UpdateProjectCardPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The updated ProjectCard. */
  projectCard?: Maybe<GitHub_ProjectCard>;
};

/** Autogenerated input type of UpdateProjectColumn */
export type GitHub_UpdateProjectColumnInput = {
  /** The ProjectColumn ID to update. */
  projectColumnId: Scalars["ID"];
  /** The name of project column. */
  name: Scalars["String"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UpdateProjectColumn */
export type GitHub_UpdateProjectColumnPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The updated project column. */
  projectColumn?: Maybe<GitHub_ProjectColumn>;
};

/** Autogenerated input type of UpdateProject */
export type GitHub_UpdateProjectInput = {
  /** The Project ID to update. */
  projectId: Scalars["ID"];
  /** The name of project. */
  name?: Maybe<Scalars["String"]>;
  /** The description of project. */
  body?: Maybe<Scalars["String"]>;
  /** Whether the project is open or closed. */
  state?: Maybe<GitHub_ProjectState>;
  /** Whether the project is public or not. */
  public?: Maybe<Scalars["Boolean"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UpdateProject */
export type GitHub_UpdateProjectPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The updated project. */
  project?: Maybe<GitHub_Project>;
};

/** Autogenerated input type of UpdatePullRequest */
export type GitHub_UpdatePullRequestInput = {
  /** The Node ID of the pull request. */
  pullRequestId: Scalars["ID"];
  /** The name of the branch you want your changes pulled into. This should be an existing branch
   * on the current repository.
   */
  baseRefName?: Maybe<Scalars["String"]>;
  /** The title of the pull request. */
  title?: Maybe<Scalars["String"]>;
  /** The contents of the pull request. */
  body?: Maybe<Scalars["String"]>;
  /** Indicates whether maintainers can modify the pull request. */
  maintainerCanModify?: Maybe<Scalars["Boolean"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UpdatePullRequest */
export type GitHub_UpdatePullRequestPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The updated pull request. */
  pullRequest?: Maybe<GitHub_PullRequest>;
};

/** Autogenerated input type of UpdatePullRequestReviewComment */
export type GitHub_UpdatePullRequestReviewCommentInput = {
  /** The Node ID of the comment to modify. */
  pullRequestReviewCommentId: Scalars["ID"];
  /** The text of the comment. */
  body: Scalars["String"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UpdatePullRequestReviewComment */
export type GitHub_UpdatePullRequestReviewCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The updated comment. */
  pullRequestReviewComment?: Maybe<GitHub_PullRequestReviewComment>;
};

/** Autogenerated input type of UpdatePullRequestReview */
export type GitHub_UpdatePullRequestReviewInput = {
  /** The Node ID of the pull request review to modify. */
  pullRequestReviewId: Scalars["ID"];
  /** The contents of the pull request review body. */
  body: Scalars["String"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UpdatePullRequestReview */
export type GitHub_UpdatePullRequestReviewPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The updated pull request review. */
  pullRequestReview?: Maybe<GitHub_PullRequestReview>;
};

/** Autogenerated input type of UpdateSubscription */
export type GitHub_UpdateSubscriptionInput = {
  /** The Node ID of the subscribable object to modify. */
  subscribableId: Scalars["ID"];
  /** The new state of the subscription. */
  state: GitHub_SubscriptionState;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UpdateSubscription */
export type GitHub_UpdateSubscriptionPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The input subscribable entity. */
  subscribable?: Maybe<GitHub_Subscribable>;
};

/** Autogenerated input type of UpdateTopics */
export type GitHub_UpdateTopicsInput = {
  /** The Node ID of the repository. */
  repositoryId: Scalars["ID"];
  /** An array of topic names. */
  topicNames: Array<Scalars["String"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

/** Autogenerated return type of UpdateTopics */
export type GitHub_UpdateTopicsPayload = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** Names of the provided topics that are not valid. */
  invalidTopicNames?: Maybe<Array<Scalars["String"]>>;
  /** The updated repository. */
  repository?: Maybe<GitHub_Repository>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_User = GitHub_Node &
  GitHub_Actor &
  GitHub_RegistryPackageOwner &
  GitHub_RegistryPackageSearch &
  GitHub_ProjectOwner &
  GitHub_RepositoryOwner &
  GitHub_UniformResourceLocatable &
  GitHub_ProfileOwner & {
    /** Determine if this repository owner has any items that can be pinned to their profile. */
    anyPinnableItems: Scalars["Boolean"];
    /** A URL pointing to the user's public avatar. */
    avatarUrl: Scalars["GitHub_URI"];
    /** The user's public profile bio. */
    bio?: Maybe<Scalars["String"]>;
    /** The user's public profile bio as HTML. */
    bioHTML: Scalars["GitHub_HTML"];
    /** A list of commit comments made by this user. */
    commitComments: GitHub_CommitCommentConnection;
    /** The user's public profile company. */
    company?: Maybe<Scalars["String"]>;
    /** The user's public profile company as HTML. */
    companyHTML: Scalars["GitHub_HTML"];
    /** The collection of contributions this user has made to different repositories. */
    contributionsCollection: GitHub_ContributionsCollection;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["GitHub_DateTime"];
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    /** The user's publicly visible profile email. */
    email: Scalars["String"];
    /** A list of users the given user is followed by. */
    followers: GitHub_FollowerConnection;
    /** A list of users the given user is following. */
    following: GitHub_FollowingConnection;
    /** Find gist by repo name. */
    gist?: Maybe<GitHub_Gist>;
    /** A list of gist comments made by this user. */
    gistComments: GitHub_GistCommentConnection;
    /** A list of the Gists the user has created. */
    gists: GitHub_GistConnection;
    id: Scalars["ID"];
    /** Whether or not this user is a participant in the GitHub Security Bug Bounty. */
    isBountyHunter: Scalars["Boolean"];
    /** Whether or not this user is a participant in the GitHub Campus Experts Program. */
    isCampusExpert: Scalars["Boolean"];
    /** Whether or not this user is a GitHub Developer Program member. */
    isDeveloperProgramMember: Scalars["Boolean"];
    /** Whether or not this user is a GitHub employee. */
    isEmployee: Scalars["Boolean"];
    /** Whether or not the user has marked themselves as for hire. */
    isHireable: Scalars["Boolean"];
    /** Whether or not this user is a site administrator. */
    isSiteAdmin: Scalars["Boolean"];
    /** Whether or not this user is the viewing user. */
    isViewer: Scalars["Boolean"];
    /** A list of issue comments made by this user. */
    issueComments: GitHub_IssueCommentConnection;
    /** A list of issues associated with this user. */
    issues: GitHub_IssueConnection;
    /** Showcases a selection of repositories and gists that the profile owner has
     * either curated or that have been selected automatically based on popularity.
     */
    itemShowcase: GitHub_ProfileItemShowcase;
    /** The user's public profile location. */
    location?: Maybe<Scalars["String"]>;
    /** The username used to login. */
    login: Scalars["String"];
    /** The user's public profile name. */
    name?: Maybe<Scalars["String"]>;
    /** Find an organization by its login that the user belongs to. */
    organization?: Maybe<GitHub_Organization>;
    /** A list of organizations the user belongs to. */
    organizations: GitHub_OrganizationConnection;
    /** A list of repositories and gists this profile owner can pin to their profile. */
    pinnableItems: GitHub_PinnableItemConnection;
    /** A list of repositories and gists this profile owner has pinned to their profile */
    pinnedItems: GitHub_PinnableItemConnection;
    /** Returns how many more items this profile owner can pin to their profile. */
    pinnedItemsRemaining: Scalars["Int"];
    /** A list of repositories this user has pinned to their profile */
    pinnedRepositories: GitHub_RepositoryConnection;
    /** Find project by number. */
    project?: Maybe<GitHub_Project>;
    /** A list of projects under the owner. */
    projects: GitHub_ProjectConnection;
    /** The HTTP path listing user's projects */
    projectsResourcePath: Scalars["GitHub_URI"];
    /** The HTTP URL listing user's projects */
    projectsUrl: Scalars["GitHub_URI"];
    /** A list of public keys associated with this user. */
    publicKeys: GitHub_PublicKeyConnection;
    /** A list of pull requests associated with this user. */
    pullRequests: GitHub_PullRequestConnection;
    /** A list of repositories that the user owns. */
    repositories: GitHub_RepositoryConnection;
    /** A list of repositories that the user recently contributed to. */
    repositoriesContributedTo: GitHub_RepositoryConnection;
    /** Find Repository. */
    repository?: Maybe<GitHub_Repository>;
    /** The HTTP path for this user */
    resourcePath: Scalars["GitHub_URI"];
    /** Repositories the user has starred. */
    starredRepositories: GitHub_StarredRepositoryConnection;
    /** The user's description of what they're currently doing. */
    status?: Maybe<GitHub_UserStatus>;
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["GitHub_DateTime"];
    /** The HTTP URL for this user */
    url: Scalars["GitHub_URI"];
    /** Can the viewer pin repositories and gists to the profile? */
    viewerCanChangePinnedItems: Scalars["Boolean"];
    /** Can the current viewer create new projects on this owner. */
    viewerCanCreateProjects: Scalars["Boolean"];
    /** Whether or not the viewer is able to follow the user. */
    viewerCanFollow: Scalars["Boolean"];
    /** Whether or not this user is followed by the viewer. */
    viewerIsFollowing: Scalars["Boolean"];
    /** A list of repositories the given user is watching. */
    watching: GitHub_RepositoryConnection;
    /** A URL pointing to the user's public website/blog. */
    websiteUrl?: Maybe<Scalars["GitHub_URI"]>;
  };

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserAnyPinnableItemsArgs = {
  type?: Maybe<GitHub_PinnableItemType>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserAvatarUrlArgs = {
  size?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserCommitCommentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserContributionsCollectionArgs = {
  organizationID?: Maybe<Scalars["ID"]>;
  from?: Maybe<Scalars["GitHub_DateTime"]>;
  to?: Maybe<Scalars["GitHub_DateTime"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserFollowersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserFollowingArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserGistArgs = {
  name: Scalars["String"];
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserGistCommentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserGistsArgs = {
  privacy?: Maybe<GitHub_GistPrivacy>;
  orderBy?: Maybe<GitHub_GistOrder>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserIssueCommentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserIssuesArgs = {
  orderBy?: Maybe<GitHub_IssueOrder>;
  labels?: Maybe<Array<Scalars["String"]>>;
  states?: Maybe<Array<GitHub_IssueState>>;
  filterBy?: Maybe<GitHub_IssueFilters>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserOrganizationArgs = {
  login: Scalars["String"];
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserOrganizationsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserPinnableItemsArgs = {
  types?: Maybe<Array<GitHub_PinnableItemType>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserPinnedItemsArgs = {
  types?: Maybe<Array<GitHub_PinnableItemType>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserPinnedRepositoriesArgs = {
  privacy?: Maybe<GitHub_RepositoryPrivacy>;
  orderBy?: Maybe<GitHub_RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars["Boolean"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserProjectArgs = {
  number: Scalars["Int"];
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserProjectsArgs = {
  orderBy?: Maybe<GitHub_ProjectOrder>;
  search?: Maybe<Scalars["String"]>;
  states?: Maybe<Array<GitHub_ProjectState>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserPublicKeysArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserPullRequestsArgs = {
  states?: Maybe<Array<GitHub_PullRequestState>>;
  labels?: Maybe<Array<Scalars["String"]>>;
  headRefName?: Maybe<Scalars["String"]>;
  baseRefName?: Maybe<Scalars["String"]>;
  orderBy?: Maybe<GitHub_IssueOrder>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserRepositoriesArgs = {
  privacy?: Maybe<GitHub_RepositoryPrivacy>;
  orderBy?: Maybe<GitHub_RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars["Boolean"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  isFork?: Maybe<Scalars["Boolean"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserRepositoriesContributedToArgs = {
  privacy?: Maybe<GitHub_RepositoryPrivacy>;
  orderBy?: Maybe<GitHub_RepositoryOrder>;
  isLocked?: Maybe<Scalars["Boolean"]>;
  includeUserRepositories?: Maybe<Scalars["Boolean"]>;
  contributionTypes?: Maybe<Array<Maybe<GitHub_RepositoryContributionType>>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserRepositoryArgs = {
  name: Scalars["String"];
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserStarredRepositoriesArgs = {
  ownedByViewer?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<GitHub_StarOrder>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type GitHub_UserWatchingArgs = {
  privacy?: Maybe<GitHub_RepositoryPrivacy>;
  orderBy?: Maybe<GitHub_RepositoryOrder>;
  affiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>;
  isLocked?: Maybe<Scalars["Boolean"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

/** The possible durations that a user can be blocked for. */
export enum GitHub_UserBlockDuration {
  /** The user was blocked for 1 day */
  OneDay = "ONE_DAY",
  /** The user was blocked for 3 days */
  ThreeDays = "THREE_DAYS",
  /** The user was blocked for 7 days */
  OneWeek = "ONE_WEEK",
  /** The user was blocked for 30 days */
  OneMonth = "ONE_MONTH",
  /** The user was blocked permanently */
  Permanent = "PERMANENT"
}

/** Represents a 'user_blocked' event on a given user. */
export type GitHub_UserBlockedEvent = GitHub_Node & {
  /** Identifies the actor who performed the event. */
  actor?: Maybe<GitHub_Actor>;
  /** Number of days that the user was blocked for. */
  blockDuration: GitHub_UserBlockDuration;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  id: Scalars["ID"];
  /** The user who was blocked. */
  subject?: Maybe<GitHub_User>;
};

/** The connection type for User. */
export type GitHub_UserConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_UserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_User>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edit on user content */
export type GitHub_UserContentEdit = GitHub_Node & {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** Identifies the date and time when the object was deleted. */
  deletedAt?: Maybe<Scalars["GitHub_DateTime"]>;
  /** The actor who deleted this content */
  deletedBy?: Maybe<GitHub_Actor>;
  /** A summary of the changes for this edit */
  diff?: Maybe<Scalars["String"]>;
  /** When this content was edited */
  editedAt: Scalars["GitHub_DateTime"];
  /** The actor who edited this content */
  editor?: Maybe<GitHub_Actor>;
  id: Scalars["ID"];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["GitHub_DateTime"];
};

/** A list of edits to content. */
export type GitHub_UserContentEditConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_UserContentEditEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_UserContentEdit>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_UserContentEditEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_UserContentEdit>;
};

/** Represents a user. */
export type GitHub_UserEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_User>;
};

/** The user's description of what they're currently doing. */
export type GitHub_UserStatus = GitHub_Node & {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["GitHub_DateTime"];
  /** An emoji summarizing the user's status. */
  emoji?: Maybe<Scalars["String"]>;
  /** ID of the object. */
  id: Scalars["ID"];
  /** Whether this status indicates the user is not fully available on GitHub. */
  indicatesLimitedAvailability: Scalars["Boolean"];
  /** A brief message describing what the user is doing. */
  message?: Maybe<Scalars["String"]>;
  /** The organization whose members can see this status. If null, this status is publicly visible. */
  organization?: Maybe<GitHub_Organization>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["GitHub_DateTime"];
  /** The user who has this status. */
  user: GitHub_User;
};

/** The connection type for UserStatus. */
export type GitHub_UserStatusConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitHub_UserStatusEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitHub_UserStatus>>>;
  /** Information to aid in pagination. */
  pageInfo: GitHub_PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GitHub_UserStatusEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<GitHub_UserStatus>;
};

/** Ordering options for user status connections. */
export type GitHub_UserStatusOrder = {
  /** The field to order user statuses by. */
  field: GitHub_UserStatusOrderField;
  /** The ordering direction. */
  direction: GitHub_OrderDirection;
};

/** Properties by which user status connections can be ordered. */
export enum GitHub_UserStatusOrderField {
  /** Order user statuses by when they were updated. */
  UpdatedAt = "UPDATED_AT"
}

export type GraphQlSource = Node & {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  typeName?: Maybe<Scalars["String"]>;
  fieldName?: Maybe<Scalars["String"]>;
};

export type GraphQlSourceConnection = {
  totalCount: Scalars["Int"];
  edges: Array<GraphQlSourceEdge>;
  nodes: Array<GraphQlSource>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<GraphQlSourceGroupConnection>;
};

export type GraphQlSourceConnectionDistinctArgs = {
  field: GraphQlSourceFieldsEnum;
};

export type GraphQlSourceConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: GraphQlSourceFieldsEnum;
};

export type GraphQlSourceEdge = {
  next?: Maybe<GraphQlSource>;
  node: GraphQlSource;
  previous?: Maybe<GraphQlSource>;
};

export enum GraphQlSourceFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  TypeName = "typeName",
  FieldName = "fieldName"
}

export type GraphQlSourceFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
};

export type GraphQlSourceGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<GraphQlSourceEdge>;
  nodes: Array<GraphQlSource>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type GraphQlSourceSortInput = {
  fields?: Maybe<Array<Maybe<GraphQlSourceFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum ImageCropFocus {
  Center = "CENTER",
  North = "NORTH",
  Northeast = "NORTHEAST",
  East = "EAST",
  Southeast = "SOUTHEAST",
  South = "SOUTH",
  Southwest = "SOUTHWEST",
  West = "WEST",
  Northwest = "NORTHWEST",
  Entropy = "ENTROPY",
  Attention = "ATTENTION"
}

export enum ImageFit {
  Cover = "COVER",
  Contain = "CONTAIN",
  Fill = "FILL"
}

export enum ImageFormat {
  NoChange = "NO_CHANGE",
  Jpg = "JPG",
  Png = "PNG",
  Webp = "WEBP"
}

export type ImageSharp = Node & {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  fixed?: Maybe<ImageSharpFixed>;
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
};

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  base64Width?: Maybe<Scalars["Int"]>;
  jpegProgressive: Scalars["Boolean"];
  pngCompressionSpeed: Scalars["Int"];
  grayscale: Scalars["Boolean"];
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars["Int"]>;
  toFormat: ImageFormat;
  toFormatBase64: ImageFormat;
  cropFocus: ImageCropFocus;
  rotate: Scalars["Int"];
};

export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  base64Width?: Maybe<Scalars["Int"]>;
  jpegProgressive: Scalars["Boolean"];
  pngCompressionSpeed: Scalars["Int"];
  grayscale: Scalars["Boolean"];
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars["Int"]>;
  toFormat: ImageFormat;
  toFormatBase64: ImageFormat;
  cropFocus: ImageCropFocus;
  rotate: Scalars["Int"];
};

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars["Int"]>;
  maxHeight?: Maybe<Scalars["Int"]>;
  base64Width?: Maybe<Scalars["Int"]>;
  grayscale: Scalars["Boolean"];
  jpegProgressive: Scalars["Boolean"];
  pngCompressionSpeed: Scalars["Int"];
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars["Int"]>;
  toFormat: ImageFormat;
  toFormatBase64: ImageFormat;
  cropFocus: ImageCropFocus;
  fit: ImageFit;
  background: Scalars["String"];
  rotate: Scalars["Int"];
  sizes: Scalars["String"];
  srcSetBreakpoints: Array<Maybe<Scalars["Int"]>>;
};

export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars["Int"]>;
  maxHeight?: Maybe<Scalars["Int"]>;
  base64Width?: Maybe<Scalars["Int"]>;
  grayscale: Scalars["Boolean"];
  jpegProgressive: Scalars["Boolean"];
  pngCompressionSpeed: Scalars["Int"];
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars["Int"]>;
  toFormat: ImageFormat;
  toFormatBase64: ImageFormat;
  cropFocus: ImageCropFocus;
  fit: ImageFit;
  background: Scalars["String"];
  rotate: Scalars["Int"];
  sizes: Scalars["String"];
  srcSetBreakpoints: Array<Maybe<Scalars["Int"]>>;
};

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  quality?: Maybe<Scalars["Int"]>;
  jpegProgressive: Scalars["Boolean"];
  pngCompressionLevel: Scalars["Int"];
  pngCompressionSpeed: Scalars["Int"];
  grayscale: Scalars["Boolean"];
  duotone?: Maybe<DuotoneGradient>;
  base64: Scalars["Boolean"];
  traceSVG?: Maybe<Potrace>;
  toFormat: ImageFormat;
  cropFocus: ImageCropFocus;
  rotate: Scalars["Int"];
};

export type ImageSharpConnection = {
  totalCount: Scalars["Int"];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  FixedBase64 = "fixed___base64",
  FixedTracedSvg = "fixed___tracedSVG",
  FixedAspectRatio = "fixed___aspectRatio",
  FixedWidth = "fixed___width",
  FixedHeight = "fixed___height",
  FixedSrc = "fixed___src",
  FixedSrcSet = "fixed___srcSet",
  FixedSrcWebp = "fixed___srcWebp",
  FixedSrcSetWebp = "fixed___srcSetWebp",
  FixedOriginalName = "fixed___originalName",
  ResolutionsBase64 = "resolutions___base64",
  ResolutionsTracedSvg = "resolutions___tracedSVG",
  ResolutionsAspectRatio = "resolutions___aspectRatio",
  ResolutionsWidth = "resolutions___width",
  ResolutionsHeight = "resolutions___height",
  ResolutionsSrc = "resolutions___src",
  ResolutionsSrcSet = "resolutions___srcSet",
  ResolutionsSrcWebp = "resolutions___srcWebp",
  ResolutionsSrcSetWebp = "resolutions___srcSetWebp",
  ResolutionsOriginalName = "resolutions___originalName",
  FluidBase64 = "fluid___base64",
  FluidTracedSvg = "fluid___tracedSVG",
  FluidAspectRatio = "fluid___aspectRatio",
  FluidSrc = "fluid___src",
  FluidSrcSet = "fluid___srcSet",
  FluidSrcWebp = "fluid___srcWebp",
  FluidSrcSetWebp = "fluid___srcSetWebp",
  FluidSizes = "fluid___sizes",
  FluidOriginalImg = "fluid___originalImg",
  FluidOriginalName = "fluid___originalName",
  FluidPresentationWidth = "fluid___presentationWidth",
  FluidPresentationHeight = "fluid___presentationHeight",
  SizesBase64 = "sizes___base64",
  SizesTracedSvg = "sizes___tracedSVG",
  SizesAspectRatio = "sizes___aspectRatio",
  SizesSrc = "sizes___src",
  SizesSrcSet = "sizes___srcSet",
  SizesSrcWebp = "sizes___srcWebp",
  SizesSrcSetWebp = "sizes___srcSetWebp",
  SizesSizes = "sizes___sizes",
  SizesOriginalImg = "sizes___originalImg",
  SizesOriginalName = "sizes___originalName",
  SizesPresentationWidth = "sizes___presentationWidth",
  SizesPresentationHeight = "sizes___presentationHeight",
  OriginalWidth = "original___width",
  OriginalHeight = "original___height",
  OriginalSrc = "original___src",
  ResizeSrc = "resize___src",
  ResizeTracedSvg = "resize___tracedSVG",
  ResizeWidth = "resize___width",
  ResizeHeight = "resize___height",
  ResizeAspectRatio = "resize___aspectRatio",
  ResizeOriginalName = "resize___originalName"
}

export type ImageSharpFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  src?: Maybe<Scalars["String"]>;
  srcSet?: Maybe<Scalars["String"]>;
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  src?: Maybe<Scalars["String"]>;
  srcSet?: Maybe<Scalars["String"]>;
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  sizes?: Maybe<Scalars["String"]>;
  originalImg?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
  presentationWidth?: Maybe<Scalars["Int"]>;
  presentationHeight?: Maybe<Scalars["Int"]>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  src?: Maybe<Scalars["String"]>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  originalName?: Maybe<Scalars["String"]>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  src?: Maybe<Scalars["String"]>;
  srcSet?: Maybe<Scalars["String"]>;
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  src?: Maybe<Scalars["String"]>;
  srcSet?: Maybe<Scalars["String"]>;
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  sizes?: Maybe<Scalars["String"]>;
  originalImg?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
  presentationWidth?: Maybe<Scalars["Int"]>;
  presentationHeight?: Maybe<Scalars["Int"]>;
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type InstaNode = Node & {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  type?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
  likes?: Maybe<Scalars["Int"]>;
  caption?: Maybe<Scalars["String"]>;
  thumbnails?: Maybe<Array<Maybe<InstaNodeThumbnails>>>;
  mediaType?: Maybe<Scalars["String"]>;
  preview?: Maybe<Scalars["String"]>;
  original?: Maybe<Scalars["String"]>;
  timestamp?: Maybe<Scalars["Int"]>;
  dimensions?: Maybe<InstaNodeDimensions>;
  comments?: Maybe<Scalars["Int"]>;
  localFile?: Maybe<File>;
};

export type InstaNodeConnection = {
  totalCount: Scalars["Int"];
  edges: Array<InstaNodeEdge>;
  nodes: Array<InstaNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<InstaNodeGroupConnection>;
};

export type InstaNodeConnectionDistinctArgs = {
  field: InstaNodeFieldsEnum;
};

export type InstaNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: InstaNodeFieldsEnum;
};

export type InstaNodeDimensions = {
  height?: Maybe<Scalars["Int"]>;
  width?: Maybe<Scalars["Int"]>;
};

export type InstaNodeDimensionsFilterInput = {
  height?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type InstaNodeEdge = {
  next?: Maybe<InstaNode>;
  node: InstaNode;
  previous?: Maybe<InstaNode>;
};

export enum InstaNodeFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Type = "type",
  Username = "username",
  Likes = "likes",
  Caption = "caption",
  Thumbnails = "thumbnails",
  ThumbnailsSrc = "thumbnails___src",
  ThumbnailsConfigWidth = "thumbnails___config_width",
  ThumbnailsConfigHeight = "thumbnails___config_height",
  MediaType = "mediaType",
  Preview = "preview",
  Original = "original",
  Timestamp = "timestamp",
  DimensionsHeight = "dimensions___height",
  DimensionsWidth = "dimensions___width",
  Comments = "comments",
  LocalFileId = "localFile___id",
  LocalFileParentId = "localFile___parent___id",
  LocalFileParentParentId = "localFile___parent___parent___id",
  LocalFileParentParentChildren = "localFile___parent___parent___children",
  LocalFileParentChildren = "localFile___parent___children",
  LocalFileParentChildrenId = "localFile___parent___children___id",
  LocalFileParentChildrenChildren = "localFile___parent___children___children",
  LocalFileParentInternalContent = "localFile___parent___internal___content",
  LocalFileParentInternalContentDigest = "localFile___parent___internal___contentDigest",
  LocalFileParentInternalDescription = "localFile___parent___internal___description",
  LocalFileParentInternalFieldOwners = "localFile___parent___internal___fieldOwners",
  LocalFileParentInternalIgnoreType = "localFile___parent___internal___ignoreType",
  LocalFileParentInternalMediaType = "localFile___parent___internal___mediaType",
  LocalFileParentInternalOwner = "localFile___parent___internal___owner",
  LocalFileParentInternalType = "localFile___parent___internal___type",
  LocalFileChildren = "localFile___children",
  LocalFileChildrenId = "localFile___children___id",
  LocalFileChildrenParentId = "localFile___children___parent___id",
  LocalFileChildrenParentChildren = "localFile___children___parent___children",
  LocalFileChildrenChildren = "localFile___children___children",
  LocalFileChildrenChildrenId = "localFile___children___children___id",
  LocalFileChildrenChildrenChildren = "localFile___children___children___children",
  LocalFileChildrenInternalContent = "localFile___children___internal___content",
  LocalFileChildrenInternalContentDigest = "localFile___children___internal___contentDigest",
  LocalFileChildrenInternalDescription = "localFile___children___internal___description",
  LocalFileChildrenInternalFieldOwners = "localFile___children___internal___fieldOwners",
  LocalFileChildrenInternalIgnoreType = "localFile___children___internal___ignoreType",
  LocalFileChildrenInternalMediaType = "localFile___children___internal___mediaType",
  LocalFileChildrenInternalOwner = "localFile___children___internal___owner",
  LocalFileChildrenInternalType = "localFile___children___internal___type",
  LocalFileInternalContent = "localFile___internal___content",
  LocalFileInternalContentDigest = "localFile___internal___contentDigest",
  LocalFileInternalDescription = "localFile___internal___description",
  LocalFileInternalFieldOwners = "localFile___internal___fieldOwners",
  LocalFileInternalIgnoreType = "localFile___internal___ignoreType",
  LocalFileInternalMediaType = "localFile___internal___mediaType",
  LocalFileInternalOwner = "localFile___internal___owner",
  LocalFileInternalType = "localFile___internal___type",
  LocalFileSourceInstanceName = "localFile___sourceInstanceName",
  LocalFileAbsolutePath = "localFile___absolutePath",
  LocalFileRelativePath = "localFile___relativePath",
  LocalFileExtension = "localFile___extension",
  LocalFileSize = "localFile___size",
  LocalFilePrettySize = "localFile___prettySize",
  LocalFileModifiedTime = "localFile___modifiedTime",
  LocalFileAccessTime = "localFile___accessTime",
  LocalFileChangeTime = "localFile___changeTime",
  LocalFileBirthTime = "localFile___birthTime",
  LocalFileRoot = "localFile___root",
  LocalFileDir = "localFile___dir",
  LocalFileBase = "localFile___base",
  LocalFileExt = "localFile___ext",
  LocalFileName = "localFile___name",
  LocalFileRelativeDirectory = "localFile___relativeDirectory",
  LocalFileDev = "localFile___dev",
  LocalFileMode = "localFile___mode",
  LocalFileNlink = "localFile___nlink",
  LocalFileUid = "localFile___uid",
  LocalFileGid = "localFile___gid",
  LocalFileRdev = "localFile___rdev",
  LocalFileBlksize = "localFile___blksize",
  LocalFileIno = "localFile___ino",
  LocalFileBlocks = "localFile___blocks",
  LocalFileAtimeMs = "localFile___atimeMs",
  LocalFileMtimeMs = "localFile___mtimeMs",
  LocalFileCtimeMs = "localFile___ctimeMs",
  LocalFileBirthtimeMs = "localFile___birthtimeMs",
  LocalFileAtime = "localFile___atime",
  LocalFileMtime = "localFile___mtime",
  LocalFileCtime = "localFile___ctime",
  LocalFileBirthtime = "localFile___birthtime",
  LocalFileUrl = "localFile___url",
  LocalFilePublicUrl = "localFile___publicURL"
}

export type InstaNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  likes?: Maybe<IntQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
  thumbnails?: Maybe<InstaNodeThumbnailsFilterListInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  preview?: Maybe<StringQueryOperatorInput>;
  original?: Maybe<StringQueryOperatorInput>;
  timestamp?: Maybe<IntQueryOperatorInput>;
  dimensions?: Maybe<InstaNodeDimensionsFilterInput>;
  comments?: Maybe<IntQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
};

export type InstaNodeGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<InstaNodeEdge>;
  nodes: Array<InstaNode>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type InstaNodeSortInput = {
  fields?: Maybe<Array<Maybe<InstaNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type InstaNodeThumbnails = {
  src?: Maybe<Scalars["String"]>;
  config_width?: Maybe<Scalars["Int"]>;
  config_height?: Maybe<Scalars["Int"]>;
};

export type InstaNodeThumbnailsFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  config_width?: Maybe<IntQueryOperatorInput>;
  config_height?: Maybe<IntQueryOperatorInput>;
};

export type InstaNodeThumbnailsFilterListInput = {
  elemMatch?: Maybe<InstaNodeThumbnailsFilterInput>;
};

export type Internal = {
  content?: Maybe<Scalars["String"]>;
  contentDigest: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  fieldOwners?: Maybe<Array<Maybe<Scalars["String"]>>>;
  ignoreType?: Maybe<Scalars["Boolean"]>;
  mediaType?: Maybe<Scalars["String"]>;
  owner: Scalars["String"];
  type: Scalars["String"];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars["Int"]>;
  ne?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type NavigationYaml = Node & {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars["String"]>;
  link?: Maybe<Scalars["String"]>;
};

export type NavigationYamlConnection = {
  totalCount: Scalars["Int"];
  edges: Array<NavigationYamlEdge>;
  nodes: Array<NavigationYaml>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<NavigationYamlGroupConnection>;
};

export type NavigationYamlConnectionDistinctArgs = {
  field: NavigationYamlFieldsEnum;
};

export type NavigationYamlConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: NavigationYamlFieldsEnum;
};

export type NavigationYamlEdge = {
  next?: Maybe<NavigationYaml>;
  node: NavigationYaml;
  previous?: Maybe<NavigationYaml>;
};

export enum NavigationYamlFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Name = "name",
  Link = "link"
}

export type NavigationYamlFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
};

export type NavigationYamlGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<NavigationYamlEdge>;
  nodes: Array<NavigationYaml>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type NavigationYamlSortInput = {
  fields?: Maybe<Array<Maybe<NavigationYamlFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Node Interface */
export type Node = {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars["Int"];
  hasPreviousPage: Scalars["Boolean"];
  hasNextPage: Scalars["Boolean"];
  itemCount: Scalars["Int"];
  pageCount: Scalars["Int"];
  perPage?: Maybe<Scalars["Int"]>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars["Float"]>;
  alphaMax?: Maybe<Scalars["Float"]>;
  optCurve?: Maybe<Scalars["Boolean"]>;
  optTolerance?: Maybe<Scalars["Float"]>;
  threshold?: Maybe<Scalars["Int"]>;
  blackOnWhite?: Maybe<Scalars["Boolean"]>;
  color?: Maybe<Scalars["String"]>;
  background?: Maybe<Scalars["String"]>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = "TURNPOLICY_BLACK",
  TurnpolicyWhite = "TURNPOLICY_WHITE",
  TurnpolicyLeft = "TURNPOLICY_LEFT",
  TurnpolicyRight = "TURNPOLICY_RIGHT",
  TurnpolicyMinority = "TURNPOLICY_MINORITY",
  TurnpolicyMajority = "TURNPOLICY_MAJORITY"
}

export type Query = {
  file?: Maybe<File>;
  allFile?: Maybe<FileConnection>;
  sitePage?: Maybe<SitePage>;
  allSitePage?: Maybe<SitePageConnection>;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin?: Maybe<SitePluginConnection>;
  site?: Maybe<Site>;
  allSite?: Maybe<SiteConnection>;
  graphQlSource?: Maybe<GraphQlSource>;
  allGraphQlSource?: Maybe<GraphQlSourceConnection>;
  directory?: Maybe<Directory>;
  allDirectory?: Maybe<DirectoryConnection>;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp?: Maybe<ImageSharpConnection>;
  stacksYaml?: Maybe<StacksYaml>;
  allStacksYaml?: Maybe<StacksYamlConnection>;
  experienceYaml?: Maybe<ExperienceYaml>;
  allExperienceYaml?: Maybe<ExperienceYamlConnection>;
  navigationYaml?: Maybe<NavigationYaml>;
  allNavigationYaml?: Maybe<NavigationYamlConnection>;
  instaNode?: Maybe<InstaNode>;
  allInstaNode?: Maybe<InstaNodeConnection>;
  github?: Maybe<GitHub>;
};

export type QueryFileArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  jsonName?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryGraphQlSourceArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllGraphQlSourceArgs = {
  filter?: Maybe<GraphQlSourceFilterInput>;
  sort?: Maybe<GraphQlSourceSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryDirectoryArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryImageSharpArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryStacksYamlArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  name_detail?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<FileFilterInput>;
  learnedAt?: Maybe<DateQueryOperatorInput>;
  endedAt?: Maybe<StringQueryOperatorInput>;
  desc?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllStacksYamlArgs = {
  filter?: Maybe<StacksYamlFilterInput>;
  sort?: Maybe<StacksYamlSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryExperienceYamlArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  title_detail?: Maybe<StringQueryOperatorInput>;
  category?: Maybe<StringQueryOperatorInput>;
  desc?: Maybe<StringQueryOperatorInput>;
  location?: Maybe<StringQueryOperatorInput>;
  startedAt?: Maybe<DateQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  pinned?: Maybe<BooleanQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  photo?: Maybe<FileFilterInput>;
  photoWidth?: Maybe<IntQueryOperatorInput>;
  photoHeight?: Maybe<IntQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
};

export type QueryAllExperienceYamlArgs = {
  filter?: Maybe<ExperienceYamlFilterInput>;
  sort?: Maybe<ExperienceYamlSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryNavigationYamlArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllNavigationYamlArgs = {
  filter?: Maybe<NavigationYamlFilterInput>;
  sort?: Maybe<NavigationYamlSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryInstaNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  likes?: Maybe<IntQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
  thumbnails?: Maybe<InstaNodeThumbnailsFilterListInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  preview?: Maybe<StringQueryOperatorInput>;
  original?: Maybe<StringQueryOperatorInput>;
  timestamp?: Maybe<IntQueryOperatorInput>;
  dimensions?: Maybe<InstaNodeDimensionsFilterInput>;
  comments?: Maybe<IntQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
};

export type QueryAllInstaNodeArgs = {
  filter?: Maybe<InstaNodeFilterInput>;
  sort?: Maybe<InstaNodeSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type Site = Node & {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars["Int"]>;
  host?: Maybe<Scalars["String"]>;
  pathPrefix?: Maybe<Scalars["String"]>;
  polyfill?: Maybe<Scalars["Boolean"]>;
  buildTime?: Maybe<Scalars["Date"]>;
};

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SiteConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  SiteMetadataSiteUrl = "siteMetadata___siteUrl",
  SiteMetadataPathPrefix = "siteMetadata___pathPrefix",
  SiteMetadataTitle = "siteMetadata___title",
  SiteMetadataTitleAlt = "siteMetadata___titleAlt",
  SiteMetadataDescription = "siteMetadata___description",
  SiteMetadataLogo = "siteMetadata___logo",
  SiteMetadataHeadline = "siteMetadata___headline",
  SiteMetadataSiteLanguage = "siteMetadata___siteLanguage",
  SiteMetadataOgLanguage = "siteMetadata___ogLanguage",
  SiteMetadataAuthor = "siteMetadata___author",
  SiteMetadataTwitter = "siteMetadata___twitter",
  SiteMetadataFacebook = "siteMetadata___facebook",
  Port = "port",
  Host = "host",
  PathPrefix = "pathPrefix",
  Polyfill = "polyfill",
  BuildTime = "buildTime"
}

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePage = Node & {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  path?: Maybe<Scalars["String"]>;
  jsonName?: Maybe<Scalars["String"]>;
  internalComponentName?: Maybe<Scalars["String"]>;
  component?: Maybe<Scalars["String"]>;
  componentChunkName?: Maybe<Scalars["String"]>;
  isCreatedByStatefulCreatePages?: Maybe<Scalars["Boolean"]>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars["String"]>;
  componentPath?: Maybe<Scalars["String"]>;
};

export type SitePageConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Path = "path",
  JsonName = "jsonName",
  InternalComponentName = "internalComponentName",
  Component = "component",
  ComponentChunkName = "componentChunkName",
  IsCreatedByStatefulCreatePages = "isCreatedByStatefulCreatePages",
  PluginCreatorId = "pluginCreator___id",
  PluginCreatorParentId = "pluginCreator___parent___id",
  PluginCreatorParentParentId = "pluginCreator___parent___parent___id",
  PluginCreatorParentParentChildren = "pluginCreator___parent___parent___children",
  PluginCreatorParentChildren = "pluginCreator___parent___children",
  PluginCreatorParentChildrenId = "pluginCreator___parent___children___id",
  PluginCreatorParentChildrenChildren = "pluginCreator___parent___children___children",
  PluginCreatorParentInternalContent = "pluginCreator___parent___internal___content",
  PluginCreatorParentInternalContentDigest = "pluginCreator___parent___internal___contentDigest",
  PluginCreatorParentInternalDescription = "pluginCreator___parent___internal___description",
  PluginCreatorParentInternalFieldOwners = "pluginCreator___parent___internal___fieldOwners",
  PluginCreatorParentInternalIgnoreType = "pluginCreator___parent___internal___ignoreType",
  PluginCreatorParentInternalMediaType = "pluginCreator___parent___internal___mediaType",
  PluginCreatorParentInternalOwner = "pluginCreator___parent___internal___owner",
  PluginCreatorParentInternalType = "pluginCreator___parent___internal___type",
  PluginCreatorChildren = "pluginCreator___children",
  PluginCreatorChildrenId = "pluginCreator___children___id",
  PluginCreatorChildrenParentId = "pluginCreator___children___parent___id",
  PluginCreatorChildrenParentChildren = "pluginCreator___children___parent___children",
  PluginCreatorChildrenChildren = "pluginCreator___children___children",
  PluginCreatorChildrenChildrenId = "pluginCreator___children___children___id",
  PluginCreatorChildrenChildrenChildren = "pluginCreator___children___children___children",
  PluginCreatorChildrenInternalContent = "pluginCreator___children___internal___content",
  PluginCreatorChildrenInternalContentDigest = "pluginCreator___children___internal___contentDigest",
  PluginCreatorChildrenInternalDescription = "pluginCreator___children___internal___description",
  PluginCreatorChildrenInternalFieldOwners = "pluginCreator___children___internal___fieldOwners",
  PluginCreatorChildrenInternalIgnoreType = "pluginCreator___children___internal___ignoreType",
  PluginCreatorChildrenInternalMediaType = "pluginCreator___children___internal___mediaType",
  PluginCreatorChildrenInternalOwner = "pluginCreator___children___internal___owner",
  PluginCreatorChildrenInternalType = "pluginCreator___children___internal___type",
  PluginCreatorInternalContent = "pluginCreator___internal___content",
  PluginCreatorInternalContentDigest = "pluginCreator___internal___contentDigest",
  PluginCreatorInternalDescription = "pluginCreator___internal___description",
  PluginCreatorInternalFieldOwners = "pluginCreator___internal___fieldOwners",
  PluginCreatorInternalIgnoreType = "pluginCreator___internal___ignoreType",
  PluginCreatorInternalMediaType = "pluginCreator___internal___mediaType",
  PluginCreatorInternalOwner = "pluginCreator___internal___owner",
  PluginCreatorInternalType = "pluginCreator___internal___type",
  PluginCreatorResolve = "pluginCreator___resolve",
  PluginCreatorName = "pluginCreator___name",
  PluginCreatorVersion = "pluginCreator___version",
  PluginCreatorPluginOptionsTypeName = "pluginCreator___pluginOptions___typeName",
  PluginCreatorPluginOptionsFieldName = "pluginCreator___pluginOptions___fieldName",
  PluginCreatorPluginOptionsUrl = "pluginCreator___pluginOptions___url",
  PluginCreatorPluginOptionsHeadersAuthorization = "pluginCreator___pluginOptions___headers___Authorization",
  PluginCreatorPluginOptionsName = "pluginCreator___pluginOptions___name",
  PluginCreatorPluginOptionsPath = "pluginCreator___pluginOptions___path",
  PluginCreatorPluginOptionsTrackingId = "pluginCreator___pluginOptions___trackingId",
  PluginCreatorPluginOptionsShortName = "pluginCreator___pluginOptions___short_name",
  PluginCreatorPluginOptionsDescription = "pluginCreator___pluginOptions___description",
  PluginCreatorPluginOptionsStartUrl = "pluginCreator___pluginOptions___start_url",
  PluginCreatorPluginOptionsBackgroundColor = "pluginCreator___pluginOptions___background_color",
  PluginCreatorPluginOptionsThemeColor = "pluginCreator___pluginOptions___theme_color",
  PluginCreatorPluginOptionsDisplay = "pluginCreator___pluginOptions___display",
  PluginCreatorPluginOptionsIcon = "pluginCreator___pluginOptions___icon",
  PluginCreatorPluginOptionsPathCheck = "pluginCreator___pluginOptions___pathCheck",
  PluginCreatorNodeApIs = "pluginCreator___nodeAPIs",
  PluginCreatorBrowserApIs = "pluginCreator___browserAPIs",
  PluginCreatorSsrApIs = "pluginCreator___ssrAPIs",
  PluginCreatorPluginFilepath = "pluginCreator___pluginFilepath",
  PluginCreatorPackageJsonName = "pluginCreator___packageJson___name",
  PluginCreatorPackageJsonDescription = "pluginCreator___packageJson___description",
  PluginCreatorPackageJsonVersion = "pluginCreator___packageJson___version",
  PluginCreatorPackageJsonMain = "pluginCreator___packageJson___main",
  PluginCreatorPackageJsonLicense = "pluginCreator___packageJson___license",
  PluginCreatorPackageJsonDependencies = "pluginCreator___packageJson___dependencies",
  PluginCreatorPackageJsonDependenciesName = "pluginCreator___packageJson___dependencies___name",
  PluginCreatorPackageJsonDependenciesVersion = "pluginCreator___packageJson___dependencies___version",
  PluginCreatorPackageJsonDevDependencies = "pluginCreator___packageJson___devDependencies",
  PluginCreatorPackageJsonDevDependenciesName = "pluginCreator___packageJson___devDependencies___name",
  PluginCreatorPackageJsonDevDependenciesVersion = "pluginCreator___packageJson___devDependencies___version",
  PluginCreatorPackageJsonPeerDependencies = "pluginCreator___packageJson___peerDependencies",
  PluginCreatorPackageJsonPeerDependenciesName = "pluginCreator___packageJson___peerDependencies___name",
  PluginCreatorPackageJsonPeerDependenciesVersion = "pluginCreator___packageJson___peerDependencies___version",
  PluginCreatorPackageJsonKeywords = "pluginCreator___packageJson___keywords",
  PluginCreatorId = "pluginCreatorId",
  ComponentPath = "componentPath"
}

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  jsonName?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  pluginFilepath?: Maybe<Scalars["String"]>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Resolve = "resolve",
  Name = "name",
  Version = "version",
  PluginOptionsTypeName = "pluginOptions___typeName",
  PluginOptionsFieldName = "pluginOptions___fieldName",
  PluginOptionsUrl = "pluginOptions___url",
  PluginOptionsHeadersAuthorization = "pluginOptions___headers___Authorization",
  PluginOptionsName = "pluginOptions___name",
  PluginOptionsPath = "pluginOptions___path",
  PluginOptionsTrackingId = "pluginOptions___trackingId",
  PluginOptionsShortName = "pluginOptions___short_name",
  PluginOptionsDescription = "pluginOptions___description",
  PluginOptionsStartUrl = "pluginOptions___start_url",
  PluginOptionsBackgroundColor = "pluginOptions___background_color",
  PluginOptionsThemeColor = "pluginOptions___theme_color",
  PluginOptionsDisplay = "pluginOptions___display",
  PluginOptionsIcon = "pluginOptions___icon",
  PluginOptionsPathCheck = "pluginOptions___pathCheck",
  NodeApIs = "nodeAPIs",
  BrowserApIs = "browserAPIs",
  SsrApIs = "ssrAPIs",
  PluginFilepath = "pluginFilepath",
  PackageJsonName = "packageJson___name",
  PackageJsonDescription = "packageJson___description",
  PackageJsonVersion = "packageJson___version",
  PackageJsonMain = "packageJson___main",
  PackageJsonLicense = "packageJson___license",
  PackageJsonDependencies = "packageJson___dependencies",
  PackageJsonDependenciesName = "packageJson___dependencies___name",
  PackageJsonDependenciesVersion = "packageJson___dependencies___version",
  PackageJsonDevDependencies = "packageJson___devDependencies",
  PackageJsonDevDependenciesName = "packageJson___devDependencies___name",
  PackageJsonDevDependenciesVersion = "packageJson___devDependencies___version",
  PackageJsonPeerDependencies = "packageJson___peerDependencies",
  PackageJsonPeerDependenciesName = "packageJson___peerDependencies___name",
  PackageJsonPeerDependenciesVersion = "packageJson___peerDependencies___version",
  PackageJsonKeywords = "packageJson___keywords"
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  main?: Maybe<Scalars["String"]>;
  license?: Maybe<Scalars["String"]>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<
    SitePluginPackageJsonPeerDependenciesFilterListInput
  >;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  typeName?: Maybe<Scalars["String"]>;
  fieldName?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  headers?: Maybe<SitePluginPluginOptionsHeaders>;
  name?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  trackingId?: Maybe<Scalars["String"]>;
  short_name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  start_url?: Maybe<Scalars["String"]>;
  background_color?: Maybe<Scalars["String"]>;
  theme_color?: Maybe<Scalars["String"]>;
  display?: Maybe<Scalars["String"]>;
  icon?: Maybe<Scalars["String"]>;
  pathCheck?: Maybe<Scalars["Boolean"]>;
};

export type SitePluginPluginOptionsFilterInput = {
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  headers?: Maybe<SitePluginPluginOptionsHeadersFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  trackingId?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsHeaders = {
  Authorization?: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsHeadersFilterInput = {
  Authorization?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  siteUrl?: Maybe<Scalars["String"]>;
  pathPrefix?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  titleAlt?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  logo?: Maybe<Scalars["String"]>;
  headline?: Maybe<Scalars["String"]>;
  siteLanguage?: Maybe<Scalars["String"]>;
  ogLanguage?: Maybe<Scalars["String"]>;
  author?: Maybe<Scalars["String"]>;
  twitter?: Maybe<Scalars["String"]>;
  facebook?: Maybe<Scalars["String"]>;
};

export type SiteSiteMetadataFilterInput = {
  siteUrl?: Maybe<StringQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  titleAlt?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<StringQueryOperatorInput>;
  headline?: Maybe<StringQueryOperatorInput>;
  siteLanguage?: Maybe<StringQueryOperatorInput>;
  ogLanguage?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = "ASC",
  Desc = "DESC"
}

export type StacksYaml = Node & {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars["String"]>;
  name_detail?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  logo?: Maybe<File>;
  learnedAt?: Maybe<Scalars["Date"]>;
  endedAt?: Maybe<Scalars["String"]>;
  desc?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type StacksYamlLearnedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type StacksYamlConnection = {
  totalCount: Scalars["Int"];
  edges: Array<StacksYamlEdge>;
  nodes: Array<StacksYaml>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<StacksYamlGroupConnection>;
};

export type StacksYamlConnectionDistinctArgs = {
  field: StacksYamlFieldsEnum;
};

export type StacksYamlConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: StacksYamlFieldsEnum;
};

export type StacksYamlEdge = {
  next?: Maybe<StacksYaml>;
  node: StacksYaml;
  previous?: Maybe<StacksYaml>;
};

export enum StacksYamlFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Name = "name",
  NameDetail = "name_detail",
  Url = "url",
  LogoId = "logo___id",
  LogoParentId = "logo___parent___id",
  LogoParentParentId = "logo___parent___parent___id",
  LogoParentParentChildren = "logo___parent___parent___children",
  LogoParentChildren = "logo___parent___children",
  LogoParentChildrenId = "logo___parent___children___id",
  LogoParentChildrenChildren = "logo___parent___children___children",
  LogoParentInternalContent = "logo___parent___internal___content",
  LogoParentInternalContentDigest = "logo___parent___internal___contentDigest",
  LogoParentInternalDescription = "logo___parent___internal___description",
  LogoParentInternalFieldOwners = "logo___parent___internal___fieldOwners",
  LogoParentInternalIgnoreType = "logo___parent___internal___ignoreType",
  LogoParentInternalMediaType = "logo___parent___internal___mediaType",
  LogoParentInternalOwner = "logo___parent___internal___owner",
  LogoParentInternalType = "logo___parent___internal___type",
  LogoChildren = "logo___children",
  LogoChildrenId = "logo___children___id",
  LogoChildrenParentId = "logo___children___parent___id",
  LogoChildrenParentChildren = "logo___children___parent___children",
  LogoChildrenChildren = "logo___children___children",
  LogoChildrenChildrenId = "logo___children___children___id",
  LogoChildrenChildrenChildren = "logo___children___children___children",
  LogoChildrenInternalContent = "logo___children___internal___content",
  LogoChildrenInternalContentDigest = "logo___children___internal___contentDigest",
  LogoChildrenInternalDescription = "logo___children___internal___description",
  LogoChildrenInternalFieldOwners = "logo___children___internal___fieldOwners",
  LogoChildrenInternalIgnoreType = "logo___children___internal___ignoreType",
  LogoChildrenInternalMediaType = "logo___children___internal___mediaType",
  LogoChildrenInternalOwner = "logo___children___internal___owner",
  LogoChildrenInternalType = "logo___children___internal___type",
  LogoInternalContent = "logo___internal___content",
  LogoInternalContentDigest = "logo___internal___contentDigest",
  LogoInternalDescription = "logo___internal___description",
  LogoInternalFieldOwners = "logo___internal___fieldOwners",
  LogoInternalIgnoreType = "logo___internal___ignoreType",
  LogoInternalMediaType = "logo___internal___mediaType",
  LogoInternalOwner = "logo___internal___owner",
  LogoInternalType = "logo___internal___type",
  LogoSourceInstanceName = "logo___sourceInstanceName",
  LogoAbsolutePath = "logo___absolutePath",
  LogoRelativePath = "logo___relativePath",
  LogoExtension = "logo___extension",
  LogoSize = "logo___size",
  LogoPrettySize = "logo___prettySize",
  LogoModifiedTime = "logo___modifiedTime",
  LogoAccessTime = "logo___accessTime",
  LogoChangeTime = "logo___changeTime",
  LogoBirthTime = "logo___birthTime",
  LogoRoot = "logo___root",
  LogoDir = "logo___dir",
  LogoBase = "logo___base",
  LogoExt = "logo___ext",
  LogoName = "logo___name",
  LogoRelativeDirectory = "logo___relativeDirectory",
  LogoDev = "logo___dev",
  LogoMode = "logo___mode",
  LogoNlink = "logo___nlink",
  LogoUid = "logo___uid",
  LogoGid = "logo___gid",
  LogoRdev = "logo___rdev",
  LogoBlksize = "logo___blksize",
  LogoIno = "logo___ino",
  LogoBlocks = "logo___blocks",
  LogoAtimeMs = "logo___atimeMs",
  LogoMtimeMs = "logo___mtimeMs",
  LogoCtimeMs = "logo___ctimeMs",
  LogoBirthtimeMs = "logo___birthtimeMs",
  LogoAtime = "logo___atime",
  LogoMtime = "logo___mtime",
  LogoCtime = "logo___ctime",
  LogoBirthtime = "logo___birthtime",
  LogoUrl = "logo___url",
  LogoPublicUrl = "logo___publicURL",
  LearnedAt = "learnedAt",
  EndedAt = "endedAt",
  Desc = "desc",
  Type = "type"
}

export type StacksYamlFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  name_detail?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<FileFilterInput>;
  learnedAt?: Maybe<DateQueryOperatorInput>;
  endedAt?: Maybe<StringQueryOperatorInput>;
  desc?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type StacksYamlGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<StacksYamlEdge>;
  nodes: Array<StacksYaml>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type StacksYamlSortInput = {
  fields?: Maybe<Array<Maybe<StacksYamlFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["String"]>;
  glob?: Maybe<Scalars["String"]>;
};
export type CommercialToolkitsListQueryVariables = {};

export type CommercialToolkitsListQuery = { __typename?: "Query" } & {
  commercialToolkits: Maybe<
    { __typename?: "StacksYamlConnection" } & {
      edges: Array<
        { __typename?: "StacksYamlEdge" } & {
          node: { __typename?: "StacksYaml" } & Pick<StacksYaml, "id"> &
            Stack_StackFragment;
        }
      >;
    }
  >;
};

export type DabbledWithListQueryVariables = {};

export type DabbledWithListQuery = { __typename?: "Query" } & {
  dabbledWiths: Maybe<
    { __typename?: "StacksYamlConnection" } & {
      edges: Array<
        { __typename?: "StacksYamlEdge" } & {
          node: { __typename?: "StacksYaml" } & Pick<StacksYaml, "id"> &
            Stack_StackFragment;
        }
      >;
    }
  >;
};

export type GithubHeatmapQueryVariables = {};

export type GithubHeatmapQuery = { __typename?: "Query" } & {
  github: Maybe<
    { __typename?: "GitHub" } & {
      user: Maybe<
        { __typename?: "GitHub_User" } & Pick<GitHub_User, "id"> & {
            contributionsCollection: {
              __typename?: "GitHub_ContributionsCollection";
            } & Pick<GitHub_ContributionsCollection, "startedAt"> & {
                contributionCalendar: {
                  __typename?: "GitHub_ContributionCalendar";
                } & Pick<
                  GitHub_ContributionCalendar,
                  "totalContributions" | "colors"
                > & {
                    weeks: Array<
                      { __typename?: "GitHub_ContributionCalendarWeek" } & {
                        contributionDays: Array<
                          {
                            __typename?: "GitHub_ContributionCalendarDay";
                          } & Pick<
                            GitHub_ContributionCalendarDay,
                            "date" | "color"
                          > & {
                              count: GitHub_ContributionCalendarDay["contributionCount"];
                            }
                        >;
                      }
                    >;
                  };
              };
          }
      >;
    }
  >;
};

export type PinnedExperienceListQueryVariables = {};

export type PinnedExperienceListQuery = { __typename?: "Query" } & {
  experiences: Maybe<
    { __typename?: "ExperienceYamlConnection" } & {
      edges: Array<
        { __typename?: "ExperienceYamlEdge" } & {
          node: { __typename?: "ExperienceYaml" } & Pick<
            ExperienceYaml,
            | "id"
            | "title"
            | "title_detail"
            | "category"
            | "desc"
            | "location"
            | "startedAt"
            | "url"
            | "pinned"
          >;
        }
      >;
    }
  >;
};

export type PreviousExperienceInListQueryVariables = {};

export type PreviousExperienceInListQuery = { __typename?: "Query" } & {
  preExperiences: Maybe<
    { __typename?: "StacksYamlConnection" } & {
      edges: Array<
        { __typename?: "StacksYamlEdge" } & {
          node: { __typename?: "StacksYaml" } & Pick<StacksYaml, "id"> &
            Stack_StackFragment;
        }
      >;
    }
  >;
};

export type SeoQueryVariables = {};

export type SeoQuery = { __typename?: "Query" } & {
  site: Maybe<
    { __typename?: "Site" } & Pick<Site, "buildTime"> & {
        siteMetadata: Maybe<
          { __typename?: "SiteSiteMetadata" } & Pick<
            SiteSiteMetadata,
            | "siteUrl"
            | "headline"
            | "siteLanguage"
            | "ogLanguage"
            | "author"
            | "twitter"
            | "facebook"
          > & {
              defaultTitle: SiteSiteMetadata["titleAlt"];
              defaultDescription: SiteSiteMetadata["description"];
              defaultBanner: SiteSiteMetadata["logo"];
            }
        >;
      }
  >;
};

export type Stack_StackFragment = { __typename?: "StacksYaml" } & Pick<
  StacksYaml,
  "id" | "name" | "name_detail" | "url" | "learnedAt" | "endedAt" | "desc"
> & { logo: Maybe<{ __typename?: "File" } & Pick<File, "publicURL">> };

export type ExperienceGroupByType_ExperienceFragment = {
  __typename?: "ExperienceYaml";
} & Pick<ExperienceYaml, "id" | "type"> &
  TimelineContent_ExperienceYamlFragment;

export type TimelineQueryVariables = {};

export type TimelineQuery = { __typename?: "Query" } & {
  experiences: Maybe<
    { __typename?: "ExperienceYamlConnection" } & {
      edges: Array<
        { __typename?: "ExperienceYamlEdge" } & {
          node: { __typename?: "ExperienceYaml" } & Pick<
            ExperienceYaml,
            "id"
          > & {
              timelineStartedAt: ExperienceYaml["startedAt"];
            } & TimelineContent_ExperienceYamlFragment;
        }
      >;
    }
  >;
};

export type JoinBox_ExperienceYamlFragment = {
  __typename?: "ExperienceYaml";
} & Pick<
  ExperienceYaml,
  "id" | "title" | "photoWidth" | "photoHeight" | "url"
> & { joinedAt: ExperienceYaml["startedAt"] } & {
    photo: Maybe<{ __typename?: "File" } & Pick<File, "publicURL">>;
  };

export type TimelineContent_ExperienceYamlFragment = {
  __typename?: "ExperienceYaml";
} & Pick<ExperienceYaml, "id" | "type"> &
  JoinBox_ExperienceYamlFragment;

export type GatsbyImageSharpFixedFragment = {
  __typename?: "ImageSharpFixed";
} & Pick<ImageSharpFixed, "base64" | "width" | "height" | "src" | "srcSet">;

export type GatsbyImageSharpFixed_TracedSvgFragment = {
  __typename?: "ImageSharpFixed";
} & Pick<ImageSharpFixed, "tracedSVG" | "width" | "height" | "src" | "srcSet">;

export type GatsbyImageSharpFixed_WithWebpFragment = {
  __typename?: "ImageSharpFixed";
} & Pick<
  ImageSharpFixed,
  "base64" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  __typename?: "ImageSharpFixed";
} & Pick<
  ImageSharpFixed,
  "tracedSVG" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpFixed_NoBase64Fragment = {
  __typename?: "ImageSharpFixed";
} & Pick<ImageSharpFixed, "width" | "height" | "src" | "srcSet">;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  __typename?: "ImageSharpFixed";
} & Pick<
  ImageSharpFixed,
  "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpFluidFragment = {
  __typename?: "ImageSharpFluid";
} & Pick<
  ImageSharpFluid,
  "base64" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyImageSharpFluid_TracedSvgFragment = {
  __typename?: "ImageSharpFluid";
} & Pick<
  ImageSharpFluid,
  "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyImageSharpFluid_WithWebpFragment = {
  __typename?: "ImageSharpFluid";
} & Pick<
  ImageSharpFluid,
  | "base64"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  __typename?: "ImageSharpFluid";
} & Pick<
  ImageSharpFluid,
  | "tracedSVG"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>;

export type GatsbyImageSharpFluid_NoBase64Fragment = {
  __typename?: "ImageSharpFluid";
} & Pick<ImageSharpFluid, "aspectRatio" | "src" | "srcSet" | "sizes">;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  __typename?: "ImageSharpFluid";
} & Pick<
  ImageSharpFluid,
  "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
>;

export type GatsbyImageSharpResolutionsFragment = {
  __typename?: "ImageSharpResolutions";
} & Pick<
  ImageSharpResolutions,
  "base64" | "width" | "height" | "src" | "srcSet"
>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = {
  __typename?: "ImageSharpResolutions";
} & Pick<
  ImageSharpResolutions,
  "tracedSVG" | "width" | "height" | "src" | "srcSet"
>;

export type GatsbyImageSharpResolutions_WithWebpFragment = {
  __typename?: "ImageSharpResolutions";
} & Pick<
  ImageSharpResolutions,
  "base64" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = {
  __typename?: "ImageSharpResolutions";
} & Pick<
  ImageSharpResolutions,
  "tracedSVG" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = {
  __typename?: "ImageSharpResolutions";
} & Pick<ImageSharpResolutions, "width" | "height" | "src" | "srcSet">;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = {
  __typename?: "ImageSharpResolutions";
} & Pick<
  ImageSharpResolutions,
  "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpSizesFragment = {
  __typename?: "ImageSharpSizes";
} & Pick<
  ImageSharpSizes,
  "base64" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyImageSharpSizes_TracedSvgFragment = {
  __typename?: "ImageSharpSizes";
} & Pick<
  ImageSharpSizes,
  "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyImageSharpSizes_WithWebpFragment = {
  __typename?: "ImageSharpSizes";
} & Pick<
  ImageSharpSizes,
  | "base64"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = {
  __typename?: "ImageSharpSizes";
} & Pick<
  ImageSharpSizes,
  | "tracedSVG"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>;

export type GatsbyImageSharpSizes_NoBase64Fragment = {
  __typename?: "ImageSharpSizes";
} & Pick<ImageSharpSizes, "aspectRatio" | "src" | "srcSet" | "sizes">;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = {
  __typename?: "ImageSharpSizes";
} & Pick<
  ImageSharpSizes,
  "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
>;
