export interface RequestStatus {
  isLoading: boolean;
  statusCode?: string | null;
  message?: string;
  errored?: boolean;
}
