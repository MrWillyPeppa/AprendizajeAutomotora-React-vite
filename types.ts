
export interface Vehicle {
  id: number;
  name: string;
  model: string;
  year: number;
  price: number;
  specs: {
    engine: string;
    transmission: string;
    horsepower: number;
  };
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name:string;
  quote: string;
  avatarUrl: string;
}
