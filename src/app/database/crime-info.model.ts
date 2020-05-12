class Point {
  latitude: number;
  longitude: number;
  human_address: string;
}

export interface CrimeInfo {
  $recordid: number;
  callnumber: string;
  calldatetime: string;
  priority: string
  district: string;
  description: string;
  incidentlocation: string;
  zipcode: string;
  neighborhood: string;
  policedistrict: string;
  policepost: string;
  councildistrict: string;
  sheriffdistricts: string;
  community_statistical_areas: string;
  census_tracts: string;
  vrizones: string;
  location: Point;
}

export interface DistrictCounts {
  district: string;
  count: number;
}
