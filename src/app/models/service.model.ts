export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'machinery' | 'irrigation' | 'logistics' | 'consultancy';
  provider: {
    name: string;
    rating: number;
    completedServices: number;
  };
  price: number;
  unit: 'hour' | 'day' | 'project' | 'hectare';
  location: string;
  availability: boolean;
  images: string[];
  createdAt: Date;
}

export interface ServiceRequest {
  id: string;
  serviceId: string;
  userId: string;
  requestedDate: Date;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
}

export interface ServiceProvider {
  id: string;
  name: string;
  email: string;
  phone: string;
  services: string[];
  rating: number;
  completedServices: number;
  location: string;
  verified: boolean;
}
