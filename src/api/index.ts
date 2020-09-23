import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  capsule?: Maybe<Capsule>;
  capsules?: Maybe<Array<Maybe<Capsule>>>;
  core?: Maybe<Core>;
  cores?: Maybe<Array<Maybe<Core>>>;
  dragon?: Maybe<Dragon>;
  dragons?: Maybe<Array<Maybe<Dragon>>>;
  history?: Maybe<Array<Maybe<History>>>;
  info?: Maybe<Info>;
  landingpad?: Maybe<Landingpad>;
  landingpads?: Maybe<Array<Maybe<Landingpad>>>;
  launch?: Maybe<Launch>;
  launches?: Maybe<Array<Maybe<Launch>>>;
  launchpad?: Maybe<Launchpad>;
  launchpads?: Maybe<Array<Maybe<Launchpad>>>;
  mission?: Maybe<Mission>;
  missions?: Maybe<Array<Maybe<Mission>>>;
  payload?: Maybe<Payload>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
  roadster?: Maybe<Roadster>;
  rocket?: Maybe<Rocket>;
  rockets?: Maybe<Array<Maybe<Rocket>>>;
  ship?: Maybe<Ship>;
  ships?: Maybe<Array<Maybe<Ship>>>;
};


export type QueryCapsuleArgs = {
  capsule_serial: Scalars['String'];
};


export type QueryCapsulesArgs = {
  range?: Maybe<CapsuleRange>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Order>;
  sort?: Maybe<Scalars['String']>;
};


export type QueryCoreArgs = {
  core_serial: Scalars['String'];
};


export type QueryCoresArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Order>;
  sort?: Maybe<Scalars['String']>;
};


export type QueryDragonArgs = {
  id: Scalars['String'];
};


export type QueryDragonsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryHistoryArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Order>;
  sort?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};


export type QueryLandingpadArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryLandingpadsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryLaunchArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryLaunchesArgs = {
  range?: Maybe<LaunchRange>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Order>;
  sort?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryLaunchpadArgs = {
  id: Scalars['String'];
};


export type QueryLaunchpadsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryMissionArgs = {
  id: Scalars['String'];
};


export type QueryMissionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryPayloadArgs = {
  id: Scalars['String'];
};


export type QueryPayloadsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Order>;
  sort?: Maybe<Scalars['String']>;
};


export type QueryRocketArgs = {
  id: Scalars['String'];
};


export type QueryRocketsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryShipArgs = {
  id: Scalars['String'];
};


export type QueryShipsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Order>;
  sort?: Maybe<Scalars['String']>;
};

export enum CapsuleRange {
  Past = 'past',
  Upcoming = 'upcoming'
}

export enum LaunchRange {
  Latest = 'latest',
  Next = 'next',
  Past = 'past',
  Upcoming = 'upcoming'
}

export enum Order {
  Asc = 'asc',
  Desc = 'desc'
}

export type BasicMission = {
  __typename?: 'BasicMission';
  name?: Maybe<Scalars['String']>;
  flight?: Maybe<Scalars['Int']>;
};

export type Capsule = {
  __typename?: 'Capsule';
  capsule_serial?: Maybe<Scalars['String']>;
  capsule_id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  original_launch?: Maybe<Scalars['String']>;
  original_launch_unix?: Maybe<Scalars['Float']>;
  missions?: Maybe<Array<Maybe<BasicMission>>>;
  landings?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  reuse_count?: Maybe<Scalars['Int']>;
};

export type Core = {
  __typename?: 'Core';
  core_serial?: Maybe<Scalars['String']>;
  block?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  original_launch?: Maybe<Scalars['String']>;
  original_launch_unix?: Maybe<Scalars['Float']>;
  missions?: Maybe<Array<Maybe<BasicMission>>>;
  reuse_count?: Maybe<Scalars['Int']>;
  rtls_attempts?: Maybe<Scalars['Int']>;
  rtls_landings?: Maybe<Scalars['Int']>;
  asds_attempts?: Maybe<Scalars['Int']>;
  asds_landings?: Maybe<Scalars['Int']>;
  water_landing?: Maybe<Scalars['Boolean']>;
  details?: Maybe<Scalars['String']>;
};

export type Dimension = {
  __typename?: 'Dimension';
  meters?: Maybe<Scalars['Float']>;
  feet?: Maybe<Scalars['Float']>;
};

export type Dragon = {
  __typename?: 'Dragon';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  crew_capacity?: Maybe<Scalars['Int']>;
  sidewall_angle_deg?: Maybe<Scalars['Int']>;
  orbit_duration_yr?: Maybe<Scalars['Int']>;
  dry_mass_kg?: Maybe<Scalars['Int']>;
  dry_mass_lb?: Maybe<Scalars['Int']>;
  first_flight?: Maybe<Scalars['String']>;
  heat_shield?: Maybe<HeatShield>;
  thrusters?: Maybe<Array<Maybe<Thruster>>>;
  launch_payload_mass?: Maybe<Mass>;
  launch_payload_vol?: Maybe<PayloadVolume>;
  return_payload_mass?: Maybe<Mass>;
  return_payload_vol?: Maybe<PayloadVolume>;
  pressurized_capsule?: Maybe<PressurizedCapsule>;
  trunk?: Maybe<Trunk>;
  height_w_trunk?: Maybe<Dimension>;
  diameter?: Maybe<Dimension>;
  wikipedia?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type Engines = {
  __typename?: 'Engines';
  number?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['String']>;
  engine_loss_max?: Maybe<Scalars['Int']>;
  propellant_1?: Maybe<Scalars['String']>;
  propellant_2?: Maybe<Scalars['String']>;
  thrust_sea_level?: Maybe<Thrust>;
  thrust_vacuum?: Maybe<Thrust>;
  thrust_to_weight?: Maybe<Scalars['Float']>;
};

export type Fairing = {
  __typename?: 'Fairing';
  height?: Maybe<Dimension>;
  diameter?: Maybe<Dimension>;
};

export type Headquarters = {
  __typename?: 'Headquarters';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type HeatShield = {
  __typename?: 'HeatShield';
  material?: Maybe<Scalars['String']>;
  size_meters?: Maybe<Scalars['Float']>;
  temp_degrees?: Maybe<Scalars['Int']>;
  dev_partner?: Maybe<Scalars['String']>;
};

export type History = {
  __typename?: 'History';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  event_date_utc?: Maybe<Scalars['String']>;
  event_date_unix?: Maybe<Scalars['Float']>;
  flight_number?: Maybe<Scalars['Int']>;
  details?: Maybe<Scalars['String']>;
  links?: Maybe<HistoryLinks>;
};

export type HistoryLinks = {
  __typename?: 'HistoryLinks';
  article?: Maybe<Scalars['String']>;
  reddit?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Info = {
  __typename?: 'Info';
  name?: Maybe<Scalars['String']>;
  founder?: Maybe<Scalars['String']>;
  founded?: Maybe<Scalars['Int']>;
  employees?: Maybe<Scalars['Int']>;
  vehicles?: Maybe<Scalars['Int']>;
  launch_sites?: Maybe<Scalars['Int']>;
  test_sites?: Maybe<Scalars['Int']>;
  ceo?: Maybe<Scalars['String']>;
  cto?: Maybe<Scalars['String']>;
  coo?: Maybe<Scalars['String']>;
  cto_propulsion?: Maybe<Scalars['String']>;
  valuation?: Maybe<Scalars['Float']>;
  headquarters?: Maybe<Headquarters>;
  summary?: Maybe<Scalars['String']>;
};

export type LandingLegs = {
  __typename?: 'LandingLegs';
  number?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
};

export type Landingpad = {
  __typename?: 'Landingpad';
  id?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  landing_type?: Maybe<Scalars['String']>;
  attempted_landings?: Maybe<Scalars['Int']>;
  successful_landings?: Maybe<Scalars['Int']>;
  wikipedia?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
};

export type Launch = {
  __typename?: 'Launch';
  flight_number?: Maybe<Scalars['Int']>;
  mission_id?: Maybe<Array<Maybe<Scalars['String']>>>;
  mission_name?: Maybe<Scalars['String']>;
  launch_year?: Maybe<Scalars['Int']>;
  launch_date_unix?: Maybe<Scalars['Float']>;
  launch_date_utc?: Maybe<Scalars['String']>;
  launch_date_local?: Maybe<Scalars['String']>;
  is_tentative?: Maybe<Scalars['Boolean']>;
  tentative_max_precision?: Maybe<Scalars['String']>;
  tbd?: Maybe<Scalars['Boolean']>;
  launch_window?: Maybe<Scalars['Int']>;
  rocket?: Maybe<LaunchRocket>;
  ships?: Maybe<Array<Maybe<Scalars['String']>>>;
  telemetry?: Maybe<LaunchTelemetry>;
  launch_site?: Maybe<LaunchSite>;
  launch_success?: Maybe<Scalars['Boolean']>;
  links?: Maybe<LaunchLinks>;
  details?: Maybe<Scalars['String']>;
  upcoming?: Maybe<Scalars['Boolean']>;
  static_fire_date_utc?: Maybe<Scalars['String']>;
  static_fire_date_unix?: Maybe<Scalars['Float']>;
  timeline?: Maybe<LaunchTimeline>;
};

export type LaunchLinks = {
  __typename?: 'LaunchLinks';
  mission_patch?: Maybe<Scalars['String']>;
  mission_patch_small?: Maybe<Scalars['String']>;
  reddit_campaign?: Maybe<Scalars['String']>;
  reddit_launch?: Maybe<Scalars['String']>;
  reddit_recovery?: Maybe<Scalars['String']>;
  reddit_media?: Maybe<Scalars['String']>;
  presskit?: Maybe<Scalars['String']>;
  article_link?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
  video_link?: Maybe<Scalars['String']>;
  youtube_id?: Maybe<Scalars['String']>;
  flickr_images?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Launchpad = {
  __typename?: 'Launchpad';
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  vehicles_launched?: Maybe<Array<Maybe<Scalars['String']>>>;
  attempted_launches?: Maybe<Scalars['Int']>;
  successful_launches?: Maybe<Scalars['Int']>;
  wikipedia?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  site_id?: Maybe<Scalars['String']>;
  site_name_long?: Maybe<Scalars['String']>;
};

export type LaunchRocket = {
  __typename?: 'LaunchRocket';
  rocket_id?: Maybe<Scalars['String']>;
  rocket_name?: Maybe<Scalars['String']>;
  rocket_type?: Maybe<Scalars['String']>;
  first_stage?: Maybe<LaunchRocketFirstStage>;
  second_stage?: Maybe<LaunchRocketSecondStage>;
  fairings?: Maybe<LaunchRocketFairings>;
};

export type LaunchRocketFairings = {
  __typename?: 'LaunchRocketFairings';
  reused?: Maybe<Scalars['Boolean']>;
  recovery_attempt?: Maybe<Scalars['Boolean']>;
  recovered?: Maybe<Scalars['Boolean']>;
  ship?: Maybe<Scalars['String']>;
};

export type LaunchRocketFirstStage = {
  __typename?: 'LaunchRocketFirstStage';
  cores?: Maybe<Array<Maybe<LaunchRocketFirstStageCore>>>;
};

export type LaunchRocketFirstStageCore = {
  __typename?: 'LaunchRocketFirstStageCore';
  core_serial?: Maybe<Scalars['String']>;
  flight?: Maybe<Scalars['Int']>;
  block?: Maybe<Scalars['Int']>;
  gridfins?: Maybe<Scalars['Boolean']>;
  legs?: Maybe<Scalars['Boolean']>;
  reused?: Maybe<Scalars['Boolean']>;
  land_success?: Maybe<Scalars['Boolean']>;
  landing_intent?: Maybe<Scalars['Boolean']>;
  landing_type?: Maybe<Scalars['String']>;
  landing_vehicle?: Maybe<Scalars['String']>;
};

export type LaunchRocketSecondStage = {
  __typename?: 'LaunchRocketSecondStage';
  block?: Maybe<Scalars['Int']>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
};

export type LaunchSite = {
  __typename?: 'LaunchSite';
  site_id?: Maybe<Scalars['String']>;
  site_name?: Maybe<Scalars['String']>;
  site_name_long?: Maybe<Scalars['String']>;
};

export type LaunchTelemetry = {
  __typename?: 'LaunchTelemetry';
  flight_club?: Maybe<Scalars['String']>;
};

export type LaunchTimeline = {
  __typename?: 'LaunchTimeline';
  webcast_liftoff?: Maybe<Scalars['Int']>;
  go_for_prop_loading?: Maybe<Scalars['Int']>;
  rp1_loading?: Maybe<Scalars['Int']>;
  stage1_rp1_loading?: Maybe<Scalars['Int']>;
  stage1_lox_loading?: Maybe<Scalars['Int']>;
  stage2_rp1_loading?: Maybe<Scalars['Int']>;
  stage2_lox_loading?: Maybe<Scalars['Int']>;
  engine_chill?: Maybe<Scalars['Int']>;
  prelaunch_checks?: Maybe<Scalars['Int']>;
  propellant_pressurization?: Maybe<Scalars['Int']>;
  go_for_launch?: Maybe<Scalars['Int']>;
  ignition?: Maybe<Scalars['Int']>;
  liftoff?: Maybe<Scalars['Int']>;
  maxq?: Maybe<Scalars['Int']>;
  beco?: Maybe<Scalars['Int']>;
  side_core_sep?: Maybe<Scalars['Int']>;
  side_core_boostback?: Maybe<Scalars['Int']>;
  meco?: Maybe<Scalars['Int']>;
  stage_sep?: Maybe<Scalars['Int']>;
  center_stage_sep?: Maybe<Scalars['Int']>;
  second_stage_ignition?: Maybe<Scalars['Int']>;
  center_core_boostback?: Maybe<Scalars['Int']>;
  fairing_deploy?: Maybe<Scalars['Int']>;
  first_stage_entry_burn?: Maybe<Scalars['Int']>;
  side_core_entry_burn?: Maybe<Scalars['Int']>;
  center_core_entry_burn?: Maybe<Scalars['Int']>;
  seco_1?: Maybe<Scalars['Int']>;
  first_stage_landing_burn?: Maybe<Scalars['Int']>;
  first_stage_landing?: Maybe<Scalars['Int']>;
  side_core_landing?: Maybe<Scalars['Int']>;
  center_core_landing?: Maybe<Scalars['Int']>;
  second_stage_restart?: Maybe<Scalars['Int']>;
  seco_2?: Maybe<Scalars['Int']>;
  payload_deploy?: Maybe<Scalars['Int']>;
  payload_deploy_1?: Maybe<Scalars['Int']>;
  payload_deploy_2?: Maybe<Scalars['Int']>;
  dragon_separation?: Maybe<Scalars['Int']>;
  dragon_solar_deploy?: Maybe<Scalars['Int']>;
  dragon_bay_door_deploy?: Maybe<Scalars['Int']>;
};

export type Location = {
  __typename?: 'Location';
  name?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type Mass = {
  __typename?: 'Mass';
  kg?: Maybe<Scalars['Int']>;
  lb?: Maybe<Scalars['Int']>;
};

export type Mission = {
  __typename?: 'Mission';
  mission_name?: Maybe<Scalars['String']>;
  mission_id?: Maybe<Scalars['String']>;
  manufacturers?: Maybe<Array<Maybe<Scalars['String']>>>;
  payload_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  wikipedia?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type Payload = {
  __typename?: 'Payload';
  payload_id?: Maybe<Scalars['String']>;
  norad_id?: Maybe<Array<Maybe<Scalars['String']>>>;
  cap_serial?: Maybe<Scalars['String']>;
  reused?: Maybe<Scalars['Boolean']>;
  customers?: Maybe<Array<Maybe<Scalars['String']>>>;
  nationality?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  payload_type?: Maybe<Scalars['String']>;
  payload_mass_kg?: Maybe<Scalars['Float']>;
  payload_mass_lbs?: Maybe<Scalars['Float']>;
  orbit?: Maybe<Scalars['String']>;
  orbit_params?: Maybe<PayloadOrbitParams>;
  mass_returned_kg?: Maybe<Scalars['Float']>;
  mass_returned_lbs?: Maybe<Scalars['Float']>;
  flight_time_sec?: Maybe<Scalars['Int']>;
  cargo_manifest?: Maybe<Scalars['String']>;
};

export type PayloadOrbitParams = {
  __typename?: 'PayloadOrbitParams';
  reference_system?: Maybe<Scalars['String']>;
  regime?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  semi_major_axis_km?: Maybe<Scalars['Float']>;
  eccentricity?: Maybe<Scalars['Float']>;
  periapsis_km?: Maybe<Scalars['Float']>;
  apoapsis_km?: Maybe<Scalars['Float']>;
  inclination_deg?: Maybe<Scalars['Float']>;
  period_min?: Maybe<Scalars['Float']>;
  lifespan_years?: Maybe<Scalars['Float']>;
  epoch?: Maybe<Scalars['String']>;
  mean_motion?: Maybe<Scalars['Float']>;
  raan?: Maybe<Scalars['Float']>;
  arg_of_pericenter?: Maybe<Scalars['Float']>;
  mean_anomaly?: Maybe<Scalars['Float']>;
};

export type PayloadVolume = {
  __typename?: 'PayloadVolume';
  cubic_meters?: Maybe<Scalars['Int']>;
  cubic_feet?: Maybe<Scalars['Int']>;
};

export type Position = {
  __typename?: 'Position';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type PressurizedCapsule = {
  __typename?: 'PressurizedCapsule';
  payload_volume?: Maybe<PayloadVolume>;
};

export type Roadster = {
  __typename?: 'Roadster';
  name: Scalars['String'];
  launch_date_utc?: Maybe<Scalars['String']>;
  launch_date_unix?: Maybe<Scalars['Float']>;
  launch_mass_kg?: Maybe<Scalars['Int']>;
  launch_mass_lbs?: Maybe<Scalars['Int']>;
  norad_id?: Maybe<Scalars['Int']>;
  epoch_jd?: Maybe<Scalars['Float']>;
  orbit_type?: Maybe<Scalars['String']>;
  apoapsis_au?: Maybe<Scalars['Float']>;
  semi_major_axis_au?: Maybe<Scalars['Float']>;
  eccentricity?: Maybe<Scalars['Float']>;
  inclination?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  periapsis_arg?: Maybe<Scalars['Float']>;
  period_days?: Maybe<Scalars['Float']>;
  speed_kph?: Maybe<Scalars['Float']>;
  speed_mph?: Maybe<Scalars['Float']>;
  earth_distance_km?: Maybe<Scalars['Float']>;
  earth_distance_mi?: Maybe<Scalars['Float']>;
  mars_distance_km?: Maybe<Scalars['Float']>;
  mars_distance_mi?: Maybe<Scalars['Float']>;
  wikipedia?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
};

export type Rocket = {
  __typename?: 'Rocket';
  id?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  stages?: Maybe<Scalars['Int']>;
  boosters?: Maybe<Scalars['Int']>;
  cost_per_launch?: Maybe<Scalars['Int']>;
  success_rate_pct?: Maybe<Scalars['Float']>;
  first_flight?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  height?: Maybe<Dimension>;
  diameter?: Maybe<Dimension>;
  mass?: Maybe<Mass>;
  payload_weights?: Maybe<Array<Maybe<RocketPayloadWeight>>>;
  first_stage?: Maybe<RocketFirstStage>;
  second_stage?: Maybe<RocketSecondStage>;
  engines?: Maybe<Engines>;
  landing_legs?: Maybe<LandingLegs>;
  flickr_images?: Maybe<Array<Maybe<Scalars['String']>>>;
  wikipedia?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  rocket_id?: Maybe<Scalars['String']>;
  rocket_name?: Maybe<Scalars['String']>;
  rocket_type?: Maybe<Scalars['String']>;
};

export type RocketFirstStage = {
  __typename?: 'RocketFirstStage';
  reusable?: Maybe<Scalars['Boolean']>;
  engines?: Maybe<Scalars['Int']>;
  fuel_amount_tons?: Maybe<Scalars['Float']>;
  burn_time_sec?: Maybe<Scalars['Int']>;
  thrust_sea_level?: Maybe<Thrust>;
  thrust_vacuum?: Maybe<Thrust>;
};

export type RocketPayload = {
  __typename?: 'RocketPayload';
  option_1?: Maybe<Scalars['String']>;
  option_2?: Maybe<Scalars['String']>;
  composite_fairing?: Maybe<Fairing>;
};

export type RocketPayloadWeight = {
  __typename?: 'RocketPayloadWeight';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  kg?: Maybe<Scalars['Float']>;
  lb?: Maybe<Scalars['Float']>;
};

export type RocketSecondStage = {
  __typename?: 'RocketSecondStage';
  engines?: Maybe<Scalars['Int']>;
  fuel_amount_tons?: Maybe<Scalars['Float']>;
  burn_time_sec?: Maybe<Scalars['Int']>;
  thrust?: Maybe<Thrust>;
  payloads?: Maybe<RocketPayload>;
};

export type Ship = {
  __typename?: 'Ship';
  ship_id?: Maybe<Scalars['String']>;
  ship_name?: Maybe<Scalars['String']>;
  ship_model?: Maybe<Scalars['String']>;
  ship_type?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  active?: Maybe<Scalars['Boolean']>;
  imo?: Maybe<Scalars['Int']>;
  mmsi?: Maybe<Scalars['Int']>;
  abs?: Maybe<Scalars['Int']>;
  class?: Maybe<Scalars['Int']>;
  weight_lbs?: Maybe<Scalars['Float']>;
  weight_kg?: Maybe<Scalars['Float']>;
  year_built?: Maybe<Scalars['Int']>;
  home_port?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  speed_kn?: Maybe<Scalars['Float']>;
  course_deg?: Maybe<Scalars['Float']>;
  position?: Maybe<Position>;
  successful_landings?: Maybe<Scalars['Int']>;
  attempted_landings?: Maybe<Scalars['Int']>;
  missions?: Maybe<Array<Maybe<BasicMission>>>;
  url?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type Thrust = {
  __typename?: 'Thrust';
  kN?: Maybe<Scalars['Float']>;
  lbf?: Maybe<Scalars['Float']>;
};

export type Thruster = {
  __typename?: 'Thruster';
  type?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  pods?: Maybe<Scalars['Int']>;
  fuel_1?: Maybe<Scalars['String']>;
  fuel_2?: Maybe<Scalars['String']>;
  thrust?: Maybe<Thrust>;
};

export type Trunk = {
  __typename?: 'Trunk';
  trunk_volume?: Maybe<PayloadVolume>;
  cargo?: Maybe<TrunkCargo>;
};

export type TrunkCargo = {
  __typename?: 'TrunkCargo';
  solar_array?: Maybe<Scalars['Int']>;
  unpressurized_cargo?: Maybe<Scalars['Boolean']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type AllLaunchesIdsQueryVariables = Exact<{
  range?: Maybe<LaunchRange>;
  order: Order;
}>;


export type AllLaunchesIdsQuery = (
  { __typename?: 'Query' }
  & { launches?: Maybe<Array<Maybe<(
    { __typename?: 'Launch' }
    & Pick<Launch, 'flight_number'>
  )>>> }
);

export type HistoryQueryVariables = Exact<{ [key: string]: never; }>;


export type HistoryQuery = (
  { __typename?: 'Query' }
  & { history?: Maybe<Array<Maybe<(
    { __typename?: 'History' }
    & Pick<History, 'id' | 'title' | 'event_date_unix' | 'flight_number' | 'details'>
    & { links?: Maybe<(
      { __typename?: 'HistoryLinks' }
      & Pick<HistoryLinks, 'article' | 'wikipedia'>
    )> }
  )>>> }
);

export type LaunchDetailsQueryVariables = Exact<{
  flightNumber: Scalars['String'];
}>;


export type LaunchDetailsQuery = (
  { __typename?: 'Query' }
  & { launch?: Maybe<(
    { __typename?: 'Launch' }
    & Pick<Launch, 'mission_name' | 'flight_number' | 'upcoming' | 'launch_success' | 'static_fire_date_unix' | 'launch_date_unix' | 'details'>
    & { launch_site?: Maybe<(
      { __typename?: 'LaunchSite' }
      & Pick<LaunchSite, 'site_name_long'>
    )>, rocket?: Maybe<(
      { __typename?: 'LaunchRocket' }
      & Pick<LaunchRocket, 'rocket_id' | 'rocket_name'>
    )>, links?: Maybe<(
      { __typename?: 'LaunchLinks' }
      & Pick<LaunchLinks, 'mission_patch_small' | 'article_link' | 'wikipedia' | 'video_link' | 'flickr_images'>
    )> }
  )> }
);

export type NextLaunchQueryVariables = Exact<{ [key: string]: never; }>;


export type NextLaunchQuery = (
  { __typename?: 'Query' }
  & { launches?: Maybe<Array<Maybe<(
    { __typename?: 'Launch' }
    & Pick<Launch, 'flight_number' | 'mission_name' | 'launch_date_unix'>
    & { launch_site?: Maybe<(
      { __typename?: 'LaunchSite' }
      & Pick<LaunchSite, 'site_name_long'>
    )>, links?: Maybe<(
      { __typename?: 'LaunchLinks' }
      & Pick<LaunchLinks, 'mission_patch_small'>
    )> }
  )>>> }
);

export type RecentLaunchesIdsQueryVariables = Exact<{
  count?: Maybe<Scalars['Int']>;
}>;


export type RecentLaunchesIdsQuery = (
  { __typename?: 'Query' }
  & { launches?: Maybe<Array<Maybe<(
    { __typename?: 'Launch' }
    & Pick<Launch, 'flight_number'>
  )>>> }
);

export type RocketDetailsQueryVariables = Exact<{
  rocketId: Scalars['String'];
}>;


export type RocketDetailsQuery = (
  { __typename?: 'Query' }
  & { rocket?: Maybe<(
    { __typename?: 'Rocket' }
    & Pick<Rocket, 'rocket_id' | 'rocket_name' | 'active' | 'first_flight' | 'stages' | 'boosters' | 'cost_per_launch' | 'success_rate_pct' | 'company' | 'country' | 'wikipedia' | 'description' | 'flickr_images'>
    & { height?: Maybe<(
      { __typename?: 'Dimension' }
      & Pick<Dimension, 'meters'>
    )>, diameter?: Maybe<(
      { __typename?: 'Dimension' }
      & Pick<Dimension, 'meters'>
    )>, mass?: Maybe<(
      { __typename?: 'Mass' }
      & Pick<Mass, 'kg'>
    )>, landing_legs?: Maybe<(
      { __typename?: 'LandingLegs' }
      & Pick<LandingLegs, 'number' | 'material'>
    )>, payload_weights?: Maybe<Array<Maybe<(
      { __typename?: 'RocketPayloadWeight' }
      & Pick<RocketPayloadWeight, 'name' | 'kg'>
    )>>>, first_stage?: Maybe<(
      { __typename?: 'RocketFirstStage' }
      & Pick<RocketFirstStage, 'reusable' | 'engines' | 'fuel_amount_tons' | 'burn_time_sec'>
      & { thrust_sea_level?: Maybe<(
        { __typename?: 'Thrust' }
        & Pick<Thrust, 'kN'>
      )>, thrust_vacuum?: Maybe<(
        { __typename?: 'Thrust' }
        & Pick<Thrust, 'kN'>
      )> }
    )>, second_stage?: Maybe<(
      { __typename?: 'RocketSecondStage' }
      & Pick<RocketSecondStage, 'engines' | 'fuel_amount_tons' | 'burn_time_sec'>
      & { thrust?: Maybe<(
        { __typename?: 'Thrust' }
        & Pick<Thrust, 'kN'>
      )>, payloads?: Maybe<(
        { __typename?: 'RocketPayload' }
        & Pick<RocketPayload, 'option_1' | 'option_2'>
        & { composite_fairing?: Maybe<(
          { __typename?: 'Fairing' }
          & { height?: Maybe<(
            { __typename?: 'Dimension' }
            & Pick<Dimension, 'meters'>
          )>, diameter?: Maybe<(
            { __typename?: 'Dimension' }
            & Pick<Dimension, 'meters'>
          )> }
        )> }
      )> }
    )>, engines?: Maybe<(
      { __typename?: 'Engines' }
      & Pick<Engines, 'number' | 'type' | 'version' | 'layout' | 'engine_loss_max' | 'propellant_1' | 'propellant_2' | 'thrust_to_weight'>
      & { thrust_sea_level?: Maybe<(
        { __typename?: 'Thrust' }
        & Pick<Thrust, 'kN'>
      )>, thrust_vacuum?: Maybe<(
        { __typename?: 'Thrust' }
        & Pick<Thrust, 'kN'>
      )> }
    )> }
  )> }
);

export type RocketsDataShortQueryVariables = Exact<{ [key: string]: never; }>;


export type RocketsDataShortQuery = (
  { __typename?: 'Query' }
  & { rockets?: Maybe<Array<Maybe<(
    { __typename?: 'Rocket' }
    & Pick<Rocket, 'rocket_id' | 'rocket_name' | 'active' | 'first_flight' | 'description' | 'wikipedia'>
  )>>> }
);

export type SingleLaunchQueryVariables = Exact<{
  flightNumber?: Maybe<Scalars['String']>;
}>;


export type SingleLaunchQuery = (
  { __typename?: 'Query' }
  & { launch?: Maybe<(
    { __typename?: 'Launch' }
    & Pick<Launch, 'flight_number' | 'mission_name' | 'launch_date_unix' | 'launch_success'>
    & { launch_site?: Maybe<(
      { __typename?: 'LaunchSite' }
      & Pick<LaunchSite, 'site_name'>
    )>, links?: Maybe<(
      { __typename?: 'LaunchLinks' }
      & Pick<LaunchLinks, 'mission_patch_small' | 'article_link' | 'video_link'>
    )> }
  )> }
);


export const AllLaunchesIdsDocument = gql`
    query allLaunchesIds($range: LaunchRange, $order: Order!) {
  launches(range: $range, sort: "flight_number", order: $order) {
    flight_number
  }
}
    `;

/**
 * __useAllLaunchesIdsQuery__
 *
 * To run a query within a React component, call `useAllLaunchesIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllLaunchesIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllLaunchesIdsQuery({
 *   variables: {
 *      range: // value for 'range'
 *      order: // value for 'order'
 *   },
 * });
 */
export function useAllLaunchesIdsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllLaunchesIdsQuery, AllLaunchesIdsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllLaunchesIdsQuery, AllLaunchesIdsQueryVariables>(AllLaunchesIdsDocument, baseOptions);
      }
export function useAllLaunchesIdsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllLaunchesIdsQuery, AllLaunchesIdsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllLaunchesIdsQuery, AllLaunchesIdsQueryVariables>(AllLaunchesIdsDocument, baseOptions);
        }
export type AllLaunchesIdsQueryHookResult = ReturnType<typeof useAllLaunchesIdsQuery>;
export type AllLaunchesIdsLazyQueryHookResult = ReturnType<typeof useAllLaunchesIdsLazyQuery>;
export type AllLaunchesIdsQueryResult = Apollo.QueryResult<AllLaunchesIdsQuery, AllLaunchesIdsQueryVariables>;
export const HistoryDocument = gql`
    query history {
  history {
    id
    title
    event_date_unix
    flight_number
    details
    links {
      article
      wikipedia
    }
  }
}
    `;

/**
 * __useHistoryQuery__
 *
 * To run a query within a React component, call `useHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHistoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useHistoryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HistoryQuery, HistoryQueryVariables>) {
        return ApolloReactHooks.useQuery<HistoryQuery, HistoryQueryVariables>(HistoryDocument, baseOptions);
      }
export function useHistoryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HistoryQuery, HistoryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HistoryQuery, HistoryQueryVariables>(HistoryDocument, baseOptions);
        }
export type HistoryQueryHookResult = ReturnType<typeof useHistoryQuery>;
export type HistoryLazyQueryHookResult = ReturnType<typeof useHistoryLazyQuery>;
export type HistoryQueryResult = Apollo.QueryResult<HistoryQuery, HistoryQueryVariables>;
export const LaunchDetailsDocument = gql`
    query launchDetails($flightNumber: String!) {
  launch(id: $flightNumber) {
    mission_name
    flight_number
    upcoming
    launch_success
    static_fire_date_unix
    launch_date_unix
    launch_site {
      site_name_long
    }
    details
    rocket {
      rocket_id
      rocket_name
    }
    links {
      mission_patch_small
      article_link
      wikipedia
      video_link
      flickr_images
    }
  }
}
    `;

/**
 * __useLaunchDetailsQuery__
 *
 * To run a query within a React component, call `useLaunchDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLaunchDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLaunchDetailsQuery({
 *   variables: {
 *      flightNumber: // value for 'flightNumber'
 *   },
 * });
 */
export function useLaunchDetailsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LaunchDetailsQuery, LaunchDetailsQueryVariables>) {
        return ApolloReactHooks.useQuery<LaunchDetailsQuery, LaunchDetailsQueryVariables>(LaunchDetailsDocument, baseOptions);
      }
export function useLaunchDetailsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LaunchDetailsQuery, LaunchDetailsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LaunchDetailsQuery, LaunchDetailsQueryVariables>(LaunchDetailsDocument, baseOptions);
        }
export type LaunchDetailsQueryHookResult = ReturnType<typeof useLaunchDetailsQuery>;
export type LaunchDetailsLazyQueryHookResult = ReturnType<typeof useLaunchDetailsLazyQuery>;
export type LaunchDetailsQueryResult = Apollo.QueryResult<LaunchDetailsQuery, LaunchDetailsQueryVariables>;
export const NextLaunchDocument = gql`
    query nextLaunch {
  launches(range: next) {
    flight_number
    mission_name
    launch_date_unix
    launch_site {
      site_name_long
    }
    links {
      mission_patch_small
    }
  }
}
    `;

/**
 * __useNextLaunchQuery__
 *
 * To run a query within a React component, call `useNextLaunchQuery` and pass it any options that fit your needs.
 * When your component renders, `useNextLaunchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNextLaunchQuery({
 *   variables: {
 *   },
 * });
 */
export function useNextLaunchQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<NextLaunchQuery, NextLaunchQueryVariables>) {
        return ApolloReactHooks.useQuery<NextLaunchQuery, NextLaunchQueryVariables>(NextLaunchDocument, baseOptions);
      }
export function useNextLaunchLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NextLaunchQuery, NextLaunchQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<NextLaunchQuery, NextLaunchQueryVariables>(NextLaunchDocument, baseOptions);
        }
export type NextLaunchQueryHookResult = ReturnType<typeof useNextLaunchQuery>;
export type NextLaunchLazyQueryHookResult = ReturnType<typeof useNextLaunchLazyQuery>;
export type NextLaunchQueryResult = Apollo.QueryResult<NextLaunchQuery, NextLaunchQueryVariables>;
export const RecentLaunchesIdsDocument = gql`
    query recentLaunchesIds($count: Int) {
  launches(range: past, sort: "flight_number", order: desc, limit: $count) {
    flight_number
  }
}
    `;

/**
 * __useRecentLaunchesIdsQuery__
 *
 * To run a query within a React component, call `useRecentLaunchesIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentLaunchesIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentLaunchesIdsQuery({
 *   variables: {
 *      count: // value for 'count'
 *   },
 * });
 */
export function useRecentLaunchesIdsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RecentLaunchesIdsQuery, RecentLaunchesIdsQueryVariables>) {
        return ApolloReactHooks.useQuery<RecentLaunchesIdsQuery, RecentLaunchesIdsQueryVariables>(RecentLaunchesIdsDocument, baseOptions);
      }
export function useRecentLaunchesIdsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RecentLaunchesIdsQuery, RecentLaunchesIdsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<RecentLaunchesIdsQuery, RecentLaunchesIdsQueryVariables>(RecentLaunchesIdsDocument, baseOptions);
        }
export type RecentLaunchesIdsQueryHookResult = ReturnType<typeof useRecentLaunchesIdsQuery>;
export type RecentLaunchesIdsLazyQueryHookResult = ReturnType<typeof useRecentLaunchesIdsLazyQuery>;
export type RecentLaunchesIdsQueryResult = Apollo.QueryResult<RecentLaunchesIdsQuery, RecentLaunchesIdsQueryVariables>;
export const RocketDetailsDocument = gql`
    query rocketDetails($rocketId: String!) {
  rocket(id: $rocketId) {
    rocket_id
    rocket_name
    active
    first_flight
    height {
      meters
    }
    diameter {
      meters
    }
    mass {
      kg
    }
    stages
    boosters
    cost_per_launch
    success_rate_pct
    landing_legs {
      number
      material
    }
    company
    country
    wikipedia
    description
    payload_weights {
      name
      kg
    }
    first_stage {
      reusable
      engines
      fuel_amount_tons
      burn_time_sec
      thrust_sea_level {
        kN
      }
      thrust_vacuum {
        kN
      }
    }
    second_stage {
      engines
      fuel_amount_tons
      burn_time_sec
      thrust {
        kN
      }
      payloads {
        option_1
        option_2
        composite_fairing {
          height {
            meters
          }
          diameter {
            meters
          }
        }
      }
    }
    engines {
      number
      type
      version
      layout
      engine_loss_max
      propellant_1
      propellant_2
      thrust_sea_level {
        kN
      }
      thrust_vacuum {
        kN
      }
      thrust_to_weight
    }
    flickr_images
  }
}
    `;

/**
 * __useRocketDetailsQuery__
 *
 * To run a query within a React component, call `useRocketDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRocketDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRocketDetailsQuery({
 *   variables: {
 *      rocketId: // value for 'rocketId'
 *   },
 * });
 */
export function useRocketDetailsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RocketDetailsQuery, RocketDetailsQueryVariables>) {
        return ApolloReactHooks.useQuery<RocketDetailsQuery, RocketDetailsQueryVariables>(RocketDetailsDocument, baseOptions);
      }
export function useRocketDetailsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RocketDetailsQuery, RocketDetailsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<RocketDetailsQuery, RocketDetailsQueryVariables>(RocketDetailsDocument, baseOptions);
        }
export type RocketDetailsQueryHookResult = ReturnType<typeof useRocketDetailsQuery>;
export type RocketDetailsLazyQueryHookResult = ReturnType<typeof useRocketDetailsLazyQuery>;
export type RocketDetailsQueryResult = Apollo.QueryResult<RocketDetailsQuery, RocketDetailsQueryVariables>;
export const RocketsDataShortDocument = gql`
    query RocketsDataShort {
  rockets {
    rocket_id
    rocket_name
    active
    first_flight
    description
    wikipedia
  }
}
    `;

/**
 * __useRocketsDataShortQuery__
 *
 * To run a query within a React component, call `useRocketsDataShortQuery` and pass it any options that fit your needs.
 * When your component renders, `useRocketsDataShortQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRocketsDataShortQuery({
 *   variables: {
 *   },
 * });
 */
export function useRocketsDataShortQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RocketsDataShortQuery, RocketsDataShortQueryVariables>) {
        return ApolloReactHooks.useQuery<RocketsDataShortQuery, RocketsDataShortQueryVariables>(RocketsDataShortDocument, baseOptions);
      }
export function useRocketsDataShortLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RocketsDataShortQuery, RocketsDataShortQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<RocketsDataShortQuery, RocketsDataShortQueryVariables>(RocketsDataShortDocument, baseOptions);
        }
export type RocketsDataShortQueryHookResult = ReturnType<typeof useRocketsDataShortQuery>;
export type RocketsDataShortLazyQueryHookResult = ReturnType<typeof useRocketsDataShortLazyQuery>;
export type RocketsDataShortQueryResult = Apollo.QueryResult<RocketsDataShortQuery, RocketsDataShortQueryVariables>;
export const SingleLaunchDocument = gql`
    query singleLaunch($flightNumber: String) {
  launch(id: $flightNumber) {
    flight_number
    mission_name
    launch_date_unix
    launch_site {
      site_name
    }
    launch_success
    links {
      mission_patch_small
      article_link
      video_link
    }
  }
}
    `;

/**
 * __useSingleLaunchQuery__
 *
 * To run a query within a React component, call `useSingleLaunchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleLaunchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleLaunchQuery({
 *   variables: {
 *      flightNumber: // value for 'flightNumber'
 *   },
 * });
 */
export function useSingleLaunchQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SingleLaunchQuery, SingleLaunchQueryVariables>) {
        return ApolloReactHooks.useQuery<SingleLaunchQuery, SingleLaunchQueryVariables>(SingleLaunchDocument, baseOptions);
      }
export function useSingleLaunchLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleLaunchQuery, SingleLaunchQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SingleLaunchQuery, SingleLaunchQueryVariables>(SingleLaunchDocument, baseOptions);
        }
export type SingleLaunchQueryHookResult = ReturnType<typeof useSingleLaunchQuery>;
export type SingleLaunchLazyQueryHookResult = ReturnType<typeof useSingleLaunchLazyQuery>;
export type SingleLaunchQueryResult = Apollo.QueryResult<SingleLaunchQuery, SingleLaunchQueryVariables>;