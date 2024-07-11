import { IEvents } from "./IEvents";
import { ILaunches } from "./ILaunches";

export interface IArticles {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches?: Array<ILaunches>;
  events?: Array<IEvents>;
}
