// Changes Done for FEB-2022 
// export enum NewsItemType {
//   ProductLaunch = 'ProductLaunch',
//   Technologies = 'Technologies',
//   Hardware = 'Hardware'
// }

export enum NewsItemType {
  PressReleases = 'PressReleases',
  ByLines = 'ByLines',
  CaseStudies = 'CaseStudies'
}

export interface NewsItem {
  readonly title: string;
  readonly content: string;
  readonly image: string;
  readonly link: string;
  readonly type: NewsItemType;
}

export function mapTypeToKey(type: NewsItemType) {
  switch (type) {
    // case NewsItemType.ProductLaunch:
    //   return 'news_category_product_launch';
    // case NewsItemType.Technologies:
    //   return 'news_category_technologies';
    //   case NewsItemType.Hardware:
    //     return 'news_category_hardware';
     case NewsItemType.PressReleases:
      return 'news_category_press_releases';
    case NewsItemType.ByLines:
      return 'news_category_bylines';
      case NewsItemType.CaseStudies:
        return 'news_category_case_studies';
  }
}