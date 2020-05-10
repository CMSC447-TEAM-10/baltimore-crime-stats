export declare type JsonObjects = JsonObject[];

export class JsonObject {
    RecordID: number;
    CallNumber: string;
    CallDateTime: string;
    Priority: string;
    District: string;
    Description: string;
    IncidentLocation: string;
    ZipCode: string;
    Neighborhood: string;
    PoliceDistrict: string;
    PolicePost: string;
    CouncilDistrict: string;
    SheriffDistricts: string;
    Community_Statistical_Areas: string;
    Census_Tracts: string;
    VRIZones: string;
    Location: {
        latitude: string,
        longitude: string,
        human_address: string
    };
}