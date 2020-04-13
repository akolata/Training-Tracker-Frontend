export interface ServerStatus {
  status?: string;
}

export interface ServerInfo {
  git?: {
    branch: string;
  },
  build?: {
    version: string;
  }
}

export const SERVER_STATUS_UNKNOWN: ServerStatus = {
  status: 'UNKNOWN'
};

export const SERVER_INFO_UNKNOWN: ServerInfo = {
  git: {
    branch: 'UNKNOWN'
  },
  build: {
    version: 'UNKNOWN'
  }
};
