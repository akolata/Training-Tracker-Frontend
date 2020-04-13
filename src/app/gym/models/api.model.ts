import * as fromCoreModels from '@tt-core/model';

export interface CreateGymRequest {
  name: string;
}

export interface BrowseGymsRequestParameters {
  name?: string;
}

export interface BrowseGymsResponse {
  gyms: fromCoreModels.Gym[];
}
