export interface RequestStatus {
  isLoading: boolean;
  error?: string | null;
  statusCode?: string | null;
  message?: string;
}
