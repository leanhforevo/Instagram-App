
interface About {
    country: string;
    date_joined: string;
    date_joined_as_timestamp: number;
    former_usernames: number;
  }
  
  interface BioLink {
    is_pinned: boolean;
    link_id: number;
    link_type: string;
    lynx_url: string;
    open_external_url_with_in_app_browser: boolean;
    title: string;
    url: string;
  }
  
  interface BiographyEntityUser {
    id: number;
    username: string;
  }
  
  interface BiographyEntity {
    user: BiographyEntityUser;
  }
  
  interface BiographyWithEntities {
    entities: BiographyEntity[];
    raw_text: string;
  }
  
  interface HdProfilePicUrlInfo {
    height: number;
    url: string;
    width: number;
  }
  
  interface HdProfilePicVersion {
    height: number;
    url: string;
    width: number;
  }
  
  interface LocationData {
    address_street: string;
    city_id: null | number;
    city_name: string;
    instagram_location_id: string;
    latitude: null | number;
    longitude: null | number;
    zip: string;
  }
  
  interface PinnedChannelsInfo {
    has_public_channels: boolean;
    pinned_channels_list: any[];
  }
  
  interface typeUserDetails {
    about: About;
    account_badges: any[];
    account_type: number;
    active_standalone_fundraisers: {
      fundraisers: any[];
      total_count: number;
    };
    ads_incentive_expiration_date: null | string;
    ads_page_id: null | string;
    ads_page_name: null | string;
    bio_links: BioLink[];
    biography: string;
    biography_email: null | string;
    biography_with_entities: BiographyWithEntities;
    business_contact_method: string;
    can_add_fb_group_link_on_profile: boolean;
    can_hide_category: boolean;
    can_hide_public_contacts: boolean;
    category: string;
    category_id: number;
    contact_phone_number: string;
    current_catalog_id: null | string;
    direct_messaging: string;
    external_lynx_url: string;
    external_url: string;
    fbid_v2: string;
    follower_count: number;
    following_count: number;
    full_name: string;
    has_anonymous_profile_picture: boolean;
    has_chaining: boolean;
    has_guides: boolean;
    has_igtv_series: boolean;
    hd_profile_pic_url_info: HdProfilePicUrlInfo;
    hd_profile_pic_versions: HdProfilePicVersion[];
    id: string;
    is_business: boolean;
    is_call_to_action_enabled: boolean;
    is_category_tappable: boolean;
    is_eligible_for_request_message: boolean;
    is_favorite: boolean;
    is_favorite_for_clips: boolean;
    is_favorite_for_igtv: boolean;
    is_favorite_for_stories: boolean;
    is_private: boolean;
    is_profile_audio_call_enabled: boolean;
    is_verified: boolean;
    latest_reel_media: number;
    live_subscription_status: string;
    location_data: LocationData;
    media_count: number;
    merchant_checkout_style: string;
    page_id: null | string;
    page_name: null | string;
    pinned_channels_info: PinnedChannelsInfo;
    primary_profile_link_type: number;
    professional_conversion_suggested_account_type: number;
    profile_context: string;
    profile_context_facepile_users: any[];
    profile_context_links_with_user_ids: any[];
    profile_pic_id: string;
    profile_pic_url: string;
    profile_pic_url_hd: string;
    public_email: string;
    public_phone_country_code: string;
    public_phone_number: string;
    seller_shoppable_feed_type: string;
    show_shoppable_feed: boolean;
    third_party_downloads_enabled: number;
    total_igtv_videos: number;
    upcoming_events: any[];
    username: string;
  }
export default typeUserDetails  