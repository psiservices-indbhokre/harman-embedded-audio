import { PATHS } from '@src/modules/navigation/models';

export interface SearchContentType {
  readonly link: string;
  readonly namespace: string;
  readonly title: string;
  readonly content: string[];
}

export const searchContent: SearchContentType[] = [
  {
    link: PATHS.ROOT,
    namespace: 'home',
    title: 'video_overlay_line_1',
    content: [
      'introduction_description', 'solutions_description', 'solutions_hardware_description',
      'solutions_software_description', 'solutions_product_design_description', 'solutions_co_branding_description'
    ]
  },
  {
    link: PATHS.PRODUCT_DESIGN,
    namespace: 'product_design',
    title: 'section_image_banner_subtitle',
    content: [
      'section_description_section_subtitle', 'section_description_image_1_text',
      'section_description_image_2_text', 'section_description_image_3_text'
    ]
  },
  {
    link: PATHS.CO_BRANDING,
    namespace: 'co-branding',
    title: 'more_than_a_name',
    content: [
      'HARMAN_offers', 'from_mesmerizing_sound'
    ]
  },
  {
    link: PATHS.MICROPHONES,
    namespace: 'microphones',
    title: 'section_image_banner_title',
    content: [
      'section_description_text', 'section_tabs_tab_1_description', 'section_tabs_tab_2_description',
      'section_tabs_tab_3_description', 'section_tabs_tab_3_description_1'
    ]
  },
  {
    link: PATHS.SPEAKERS,
    namespace: 'speakers',
    title: 'section_image_banner_title',
    content: [
      'section_tabs_tab_1_content_description', 'section_tabs_tab_2_content_description',
      'section_tabs_tab_3_content_description', 'section_description_text'
    ]
  },
  {
    link: PATHS.SONIQUE,
    namespace: 'sonique',
    title: 'sonique_is_the_total',
    content: [
      'sonique_offers_three', 'built_for_home', 'designed_for',
      'made_for_high', 'providesfullstack', 'OTA_updatescapability'
    ]
  },
  {
    link: PATHS.AUDIOWORX,
    namespace: 'audioworx',
    title: 'video_banner_title',
    content: [
      'description_title', 'description_subtitle', 'info_description_1',
      'info_description_2', 'pillar_1_text', 'pillar_2_text',
      'pillar_3_text', 'to_market_text'
    ]
  },
  {
    link: PATHS.AUDIOEFX,
    namespace: 'audioefx',
    title: 'banner_title',
    content: [
      'section_hear_more_subtitle', 'section_hear_more_image_description', 'section_tabs_tab_1_description',
      'section_tabs_tab_2_description', 'section_tabs_tab_3_description', 'section_bottom_banner_subtitle'
    ]
  },
  {
    link: PATHS.OVERVIEW,
    namespace: 'overview',
    title: 'find_out_how',
    content: [
      'at_harman_embedded', 'our_years', 'from_startups',
      'todays_global', 'our_talented_workforce', 'our_talented_workforce2'
    ]
  }
]