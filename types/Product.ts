export interface Product {
    id?:               string;
    itemName?:         string;
    price?:            number;
    currencyTypeName?: string;
    instalment?:       string;
    sliderImage?:      SliderImage[];
    description?:      string;
    tag:              Tag[];
    seller?:           Seller;
}

export interface Seller {
    name:        string;
    description: string;
    rating:      number;
    totalSold:   number;
}

export interface SliderImage {
    imageUrl: string;
}

export interface Tag {
    tagName:            string;
    tagBackgroundColor: string;
    tagTextColor:       string;
}

 