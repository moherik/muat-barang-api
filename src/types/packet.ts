export type Packet = {
  image: string;
  type: string;
  desc?: string;
};

export type Pick = {
  senderName: string;
  senderPhone: string;
  location?: {
    city?: string;
    address?: string;
    latLong?: string;
    detail?: string;
  };
};

export type Delivery = {
  deliveryType: string;
  receiverName: string;
  receiverPhone: string;
  location?: {
    city?: string;
    address?: string;
    latLong?: string;
    detail?: string;
  };
};
