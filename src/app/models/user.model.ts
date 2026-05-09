export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  location?: string;
  avatar?: string;
  memberSince: string;
  role: 'investor' | 'farmer' | 'service_provider' | 'admin';
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  role?: 'investor' | 'farmer' | 'service_provider';
}
