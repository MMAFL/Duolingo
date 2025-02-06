interface ApiError {
  message: string;
  response?: {
    data?: {
      error?: string;
    };
    status?: number;
  };
} 