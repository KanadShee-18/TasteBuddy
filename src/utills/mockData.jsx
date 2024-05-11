import { useState } from "react";

// What;s on your mind data:
export const info = [
  {
    id: "750132",
    imageId: "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
    action: {
      link: "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
      text: "Dosa",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for dosa",
      altTextCta: "open",
    },
    entityId: "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
    frequencyCapping: {},
  },
  {
    id: "749879",
    imageId:
      "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
    action: {
      link: "https://www.swiggy.com/collections/80383?collection_id=80383&tags=layout_CCS_CholeBhature&type=rcv2",
      text: "Chole Bhature",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for chhole bhatoore",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=80383&tags=layout_CCS_CholeBhature",
    frequencyCapping: {},
  },
  {
    id: "750237",
    imageId: "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Poori.png",
    action: {
      link: "https://www.swiggy.com/collections/80378?collection_id=80378&tags=layout_BAU_Contextual%2Cpoori&type=rcv2",
      text: "Poori",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for poori",
      altTextCta: "open",
    },
    entityId: "80378",
    frequencyCapping: {},
  },
  {
    id: "750217",
    imageId:
      "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
    action: {
      link: "https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2",
      text: "Pav Bhaji",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for pav bhaji",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual",
    frequencyCapping: {},
  },
  {
    id: "750644",
    imageId: "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
    action: {
      link: "https://www.swiggy.com/collections/80441?collection_id=80441&searchContext=idli&tags=layout_CCS_Idli&type=rcv2",
      text: "Idli",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for idly",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=80441&tags=layout_CCS_Idli&searchContext=idli",
    frequencyCapping: {},
  },
  {
    id: "750203",
    imageId: "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
    action: {
      link: "https://www.swiggy.com/collections/80476?collection_id=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
      text: "Paratha",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for paratha",
      altTextCta: "open",
    },
    entityId: "80476",
    frequencyCapping: {},
  },
  {
    id: "749874",
    imageId: "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
    action: {
      link: "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
      text: "Cakes",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for cakes",
      altTextCta: "open",
    },
    entityId: "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
    frequencyCapping: {},
  },
  {
    id: "750239",
    imageId: "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
    action: {
      link: "https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2",
      text: "Shake",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for shakes",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes",
    frequencyCapping: {},
  },
  {
    id: "750205",
    imageId: "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Parotta.png",
    action: {
      link: "https://www.swiggy.com/collections/80478?collection_id=80478&tags=layout_BAU_Contextual%2Cparotta&type=rcv2",
      text: "Parotta",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for parotta",
      altTextCta: "open",
    },
    entityId: "80478",
    frequencyCapping: {},
  },
  {
    id: "750562",
    imageId: "v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Vada.png",
    action: {
      link: "https://www.swiggy.com/collections/80427?collection_id=80427&tags=layout_BAU_Contextual%2Cvada&type=rcv2",
      text: "Vada",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for vada",
      altTextCta: "open",
    },
    entityId: "80427",
    frequencyCapping: {},
  },
  {
    id: "749761",
    imageId: "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png",
    action: {
      link: "https://www.swiggy.com/collections/80456?collection_id=80456&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
      text: "Khichdi",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for khicdhi",
      altTextCta: "open",
    },
    entityId: "80456",
    frequencyCapping: {},
  },
  {
    id: "750233",
    imageId: "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pongal.png",
    action: {
      link: "https://www.swiggy.com/collections/80376?collection_id=80376&tags=layout_BAU_Contextual%2Cpongal&type=rcv2",
      text: "Pongal",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for pongal",
      altTextCta: "open",
    },
    entityId: "80376",
    frequencyCapping: {},
  },
  {
    id: "750226",
    imageId: "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
    action: {
      link: "https://www.swiggy.com/collections/80395?collection_id=80395&tags=layout_CCS_Salad&type=rcv2",
      text: "Salad",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for salad",
      altTextCta: "open",
    },
    entityId: "swiggy://collectionV2?collection_id=80395&tags=layout_CCS_Salad",
    frequencyCapping: {},
  },
  {
    id: "750592",
    imageId: "v1675667625/PC_Creative%20refresh/Biryani_2.png",
    action: {
      link: "https://www.swiggy.com/collections/83649?collection_id=83649&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
      text: "Biryani",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for biryani",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani&search_context=biryani",
    frequencyCapping: {},
  },
  {
    id: "750223",
    imageId: "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
    action: {
      link: "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
      text: "Rolls",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for roll",
      altTextCta: "open",
    },
    entityId: "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
    frequencyCapping: {},
  },
  {
    id: "750209",
    imageId: "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pastry.png",
    action: {
      link: "https://www.swiggy.com/collections/80358?collection_id=80358&tags=layout_BAU_Contextual%2Clayout_ux4&type=rcv2",
      text: "Pastry",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for Pastry",
      altTextCta: "open",
    },
    entityId: "80358",
    frequencyCapping: {},
  },
  {
    id: "750259",
    imageId:
      "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rasgulla.png",
    action: {
      link: "https://www.swiggy.com/collections/80389?collection_id=80389&tags=layout_BAU_Contextual%2Crasgulla&type=rcv2",
      text: "Rasgulla",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for rasgulla",
      altTextCta: "open",
    },
    entityId: "80389",
    frequencyCapping: {},
  },
  {
    id: "750605",
    imageId: "rng/md/carousel/production/cbb85a3c1684891105294d11f8359996",
    action: {
      link: "https://www.swiggy.com/collections/80494?collection_id=80494&tags=layout_CCS_Tea&type=rcv2",
      text: "Tea",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for tea",
      altTextCta: "open",
    },
    entityId: "swiggy://collectionV2?collection_id=80494&tags=layout_CCS_Tea",
    frequencyCapping: {},
  },
  {
    id: "762797",
    imageId: "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
    action: {
      link: "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
      text: "Burgers",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for burger",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
    frequencyCapping: {},
  },
  {
    id: "750593",
    imageId:
      "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Gulab_Jamun.png",
    action: {
      link: "https://www.swiggy.com/collections/80432?collection_id=80432&tags=layout_BAU_Contextual%2Cgulab_jamun&type=rcv2",
      text: "Gulab Jamun",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for gulab jamun",
      altTextCta: "open",
    },
    entityId: "80432",
    frequencyCapping: {},
  },
];

// Top restaurant Chain Data form API:
export const restaurantsObj = [
  {
    info: {
      id: "339597",
      name: "Dariole",
      cloudinaryImageId: "wb7o5n1mtjrtf7xi9yyr",
      locality: "R.K.Chatterjee Road",
      areaName: "Kasba",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.6,
      parentId: "6960",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-10 21:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dariole-r-k-chatterjee-road-kasba-kolkata-339597",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "18117",
      name: "Hindusthan Sweets",
      cloudinaryImageId: "criuo3dsgvodsed1vxl2",
      locality: "Near 8B Bus stand",
      areaName: "Jadavpur",
      costForTwo: "₹200 for two",
      cuisines: ["Snacks", "Sweets"],
      avgRating: 4.6,
      veg: true,
      parentId: "3371",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-10 20:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/hindusthan-sweets-near-8b-bus-stand-jadavpur-kolkata-18117",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "377083",
      name: "Keventers Ice Cream",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/6/eded9f86-f4ec-46cd-a7ea-49f078522101_377083.jpg",
      locality: "Acropolis Mall",
      areaName: "Acropolis Mall",
      costForTwo: "₹200 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.2,
      veg: true,
      parentId: "272044",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-10 23:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹169",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/keventers-ice-cream-acropolis-mall-kolkata-377083",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "67722",
      name: "Kookie Jar",
      cloudinaryImageId: "0b69d733f3174c1d7ef9829e2a2fc33b",
      locality: "Niharika Apartment, Ground Floor",
      areaName: "Gariahat",
      costForTwo: "₹350 for two",
      cuisines: ["Desserts", "Snacks", "Bakery", "Ice Cream"],
      avgRating: 4.8,
      parentId: "5550",
      avgRatingString: "4.8",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-10 20:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "v1705582451/Ratnesh_Badges/Perfect_cake.png",
            shortDescription: "Perfect cake delivery",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                  shortDescription: "Perfect cake delivery",
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kookie-jar-niharika-apartment-ground-floor-gariahat-kolkata-67722",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "69297",
      name: "Machhli Baba Fries",
      cloudinaryImageId: "dvaa3cfy1v7tkdmesb7s",
      locality: "Block Eg",
      areaName: "Rajdanga Main Road",
      costForTwo: "₹250 for two",
      cuisines: [
        "Bengali",
        "Street Food",
        "Rolls & Wraps",
        "Kebabs",
        "Fast Food",
      ],
      avgRating: 4.5,
      parentId: "4413",
      avgRatingString: "4.5",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-11 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/machhli-baba-fries-block-eg-rajdanga-main-road-kolkata-69297",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "18110",
      name: "Bhojohori Manna",
      cloudinaryImageId: "998b9bfa20e65aeb41fb893624609233",
      locality: "Ballygunge",
      areaName: "Ballygunge",
      costForTwo: "₹900 for two",
      cuisines: ["Bengali", "Biryani"],
      avgRating: 4.4,
      parentId: "113",
      avgRatingString: "4.4",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-10 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/bhojohori-manna-ballygunge-kolkata-18110",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "120155",
      name: "Cakes",
      cloudinaryImageId: "xo4xq9ufqmplnusb9nqs",
      locality: "RAJDANGA MAIN ROAD",
      areaName: "RAJDANGA MAIN ROAD",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Snacks"],
      avgRating: 4.7,
      parentId: "4861",
      avgRatingString: "4.7",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-10 21:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "v1705582451/Ratnesh_Badges/Perfect_cake.png",
            shortDescription: "Perfect cake delivery",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                  shortDescription: "Perfect cake delivery",
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/cakes-rajdanga-main-road-kolkata-120155",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "182029",
      name: "The Yellow Straw",
      cloudinaryImageId: "8f52ceb30e31faed0c2d6ee81b8c639d",
      locality: "Acropolis",
      areaName: "Acropolis Mall",
      costForTwo: "₹250 for two",
      cuisines: [
        "Juices",
        "Beverages",
        "Salads",
        "Healthy Food",
        "Snacks",
        "Desserts",
        "South Indian",
        "Ice Cream",
      ],
      avgRating: 4.6,
      parentId: "10442",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-10 22:15:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-yellow-straw-acropolis-acropolis-mall-kolkata-182029",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "25625",
      name: "Barista Coffee",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/8/3f419624-607f-4a4e-8772-b6ed2950c5d3_25625.jpg",
      locality: "Gariahat",
      areaName: "Gariahat",
      costForTwo: "₹350 for two",
      cuisines: ["Beverages", "Snacks", "Desserts"],
      avgRating: 4.5,
      parentId: "416281",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-10 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/barista-coffee-gariahat-kolkata-25625",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "580620",
      name: "GetAWay-Ice Creams & Desserts",
      cloudinaryImageId: "8194c8fed09497bce3714d2586653545",
      locality: "South Kolkata",
      areaName: "Dhakuria",
      costForTwo: "₹200 for two",
      cuisines: ["Ice Cream", "Desserts", "Healthy Food", "Sweets"],
      avgRating: 4.6,
      veg: true,
      parentId: "354819",
      avgRatingString: "4.6",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-11 00:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/getaway-ice-creams-and-desserts-south-dhakuria-kolkata-580620",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "379886",
      name: "The Brooklyn Creamery - Healthy Ice Cream",
      cloudinaryImageId: "b1b35780a9b1dfeb26d680506d494eaa",
      locality: "Bally Gunge",
      areaName: "South Kolkata",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
      avgRating: 4.4,
      veg: true,
      parentId: "236673",
      avgRatingString: "4.4",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-10 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-bally-gunge-south-kolkata-kolkata-379886",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "4919",
      name: "Mama Mia! - Italian Ice Creams & Cakes",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/18/5bed1e9b-d9bb-46e3-9737-a74109b5a717_4919.JPG",
      locality: "Ballygunge",
      areaName: "South Kolkata",
      costForTwo: "₹250 for two",
      cuisines: ["Ice Cream", "Desserts", "Bakery", "Ice Cream Cakes"],
      avgRating: 4.7,
      parentId: "471728",
      avgRatingString: "4.7",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-10 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "v1705582451/Ratnesh_Badges/Perfect_cake.png",
            shortDescription: "Perfect cake delivery",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "D",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                  shortDescription: "Perfect cake delivery",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mama-mia-italian-ice-creams-and-cakes-ballygunge-south-kolkata-kolkata-4919",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "263817",
      name: "Pure Veg Meals by LunchBox",
      cloudinaryImageId: "ruzvgnopvdomqfpzb75z",
      locality: "KASBA INDUSTRIAL ESTATE",
      areaName: "East Kolkata Township",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "North Indian", "Desserts", "Beverages"],
      avgRating: 4.5,
      parentId: "21938",
      avgRatingString: "4.5",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-10 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pure-veg-meals-by-lunchbox-kasba-industrial-estate-east-kolkata-township-kolkata-263817",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "27594",
      name: "Banana Leaf",
      cloudinaryImageId: "a500fcc49ac281c56dfe00ceefbf6122",
      locality: "Southern Avenue",
      areaName: "Southern Avenue",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian"],
      avgRating: 4.5,
      veg: true,
      parentId: "1285",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-10 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-South%20Indian.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/banana-leaf-southern-avenue-kolkata-27594",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "112767",
      name: "Tea Junction",
      cloudinaryImageId: "77d2fffe27cd59af5045a102d08af522",
      locality: "Lake Road",
      areaName: "Ballygunge",
      costForTwo: "₹150 for two",
      cuisines: ["Beverages", "Snacks", "Desserts"],
      avgRating: 4.5,
      parentId: "4311",
      avgRatingString: "4.5",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-10 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/tea-junction-lake-road-ballygunge-kolkata-112767",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "10602",
      name: "6 Ballygunge Place",
      cloudinaryImageId: "dx9rijteybsa2natczw3",
      locality: "Kasba",
      areaName: "Ruby Area",
      costForTwo: "₹800 for two",
      cuisines: ["Bengali"],
      avgRating: 4.5,
      parentId: "1243",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 0.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "0.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-10 21:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Bengali.png",
            description: "Delivery!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Gourmet.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Bengali.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Gourmet.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/6-ballygunge-place-kasba-ruby-area-kolkata-10602",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "639518",
      name: "Dum Safar Biryani",
      cloudinaryImageId: "1154cffac2453eb0bf7fdda7e5ea1659",
      locality: "Rajdanga Main Road",
      areaName: "ACROPOLIS MALL",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Kebabs", "Tandoor", "Indian", "Desserts"],
      avgRating: 3.9,
      parentId: "351013",
      avgRatingString: "3.9",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-11 00:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dum-safar-biryani-rajdanga-main-road-acropolis-mall-kolkata-639518",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "576276",
      name: "Grameen Kulfi",
      cloudinaryImageId: "y1cgzcjr8gz71rrwajr0",
      locality: "Rajdanga Main Road",
      areaName: "Bosepukur",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.8,
      veg: true,
      parentId: "12175",
      avgRatingString: "4.8",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-10 23:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/grameen-kulfi-rajdanga-main-road-bosepukur-kolkata-576276",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "566384",
      name: "Faasos' Signature Wraps & Rolls",
      cloudinaryImageId: "777ccff40c5bdc57a41d79facb0b8697",
      locality: "KASBA INDUSTRIAL ESTATE",
      areaName: "East Kolkata Township",
      costForTwo: "₹350 for two",
      cuisines: [
        "Fast Food",
        "Snacks",
        "North Indian",
        "Desserts",
        "Beverages",
      ],
      avgRating: 3.9,
      parentId: "340366",
      avgRatingString: "3.9",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-10 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/faasos-signature-wraps-and-rolls-kasba-industrial-estate-east-kolkata-township-kolkata-566384",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "24041",
      name: "Subway",
      cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
      locality: "Kasba",
      areaName: "Kasba",
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.2,
      parentId: "2",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-10 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-kasba-kolkata-24041",
      type: "WEBLINK",
    },
  },
];

// All restaurant data from API:
export const allRestaurantsList = [
  {
    info: {
      id: "53965",
      name: "Ramakrishna Lunch Home",
      cloudinaryImageId: "xl7pecekfb9ocqhqhywv",
      locality: "Sarat Bose Road",
      areaName: "South Kolkata",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Beverages"],
      avgRating: 4.5,
      parentId: "18715",
      avgRatingString: "3.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-10 12:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-b672959d-ea8b-4d98-a9b1-47e3597a0602",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/ramakrishna-lunch-home-sarat-bose-road-south-kolkata-kolkata-53965",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "774062",
      name: "Food Peddler Sandwiches",
      cloudinaryImageId: "4f549c836372838d45994ed844bb8f32",
      locality: "VIP Nagar Colony",
      areaName: "Ruby Area",
      costForTwo: "₹150 for two",
      cuisines: [
        "Salads",
        "Healthy Food",
        "Continental",
        "Beverages",
        "Snacks",
      ],
      avgRating: 4.6,
      parentId: "81834",
      avgRatingString: "4.6",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-11 03:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-b672959d-ea8b-4d98-a9b1-47e3597a0602",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/food-peddler-sandwiches-vip-nagar-colony-ruby-area-kolkata-774062",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "454936",
      name: "Kaligodam",
      cloudinaryImageId: "abw2pffyeyupiaolatg8",
      locality: "Lake Road",
      areaName: "South Kolkata",
      costForTwo: "₹250 for two",
      cuisines: ["Sweets"],
      avgRating: 3.7,
      veg: true,
      parentId: "18682",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-10 21:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-b672959d-ea8b-4d98-a9b1-47e3597a0602",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kaligodam-lake-road-south-kolkata-kolkata-454936",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "774065",
      name: "Tea Chai",
      cloudinaryImageId: "0e7b1f422213b39cd32d9932171f7d2e",
      locality: "V I P Nagar Colony",
      areaName: "Ruby Area",
      costForTwo: "₹150 for two",
      cuisines: ["Beverages", "Desserts", "Snacks"],
      avgRating: 4.7,
      parentId: "202657",
      avgRatingString: "4.7",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-11 03:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-b672959d-ea8b-4d98-a9b1-47e3597a0602",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/tea-chai-v-i-p-nagar-colony-ruby-area-kolkata-774065",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "42729",
      name: "New Om Sakti",
      cloudinaryImageId: "siiemnzwegwlp6c28jcy",
      locality: "Santoshpur",
      areaName: "Santoshpur",
      costForTwo: "₹100 for two",
      cuisines: ["South Indian", "Kerala", "Chettinad"],
      avgRating: 4.5,
      parentId: "18809",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-10 21:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-b672959d-ea8b-4d98-a9b1-47e3597a0602",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/new-om-sakti-santoshpur-kolkata-42729",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "305031",
      name: "Kela Patta",
      cloudinaryImageId: "nwmmylxcg48mmi8puxzd",
      areaName: "Picnic Garden",
      costForTwo: "₹100 for two",
      cuisines: ["South Indian"],
      avgRating: 4.4,
      veg: true,
      parentId: "116355",
      avgRatingString: "4.4",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-10 21:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-b672959d-ea8b-4d98-a9b1-47e3597a0602",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kela-patta-picnic-garden-kolkata-305031",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "130766",
      name: "Sharma Snacks   ",
      cloudinaryImageId: "wvceefozypsni5qnltq0",
      locality: "Kasba",
      areaName: "Ruby Area",
      costForTwo: "₹100 for two",
      cuisines: ["Beverages", "Chaat"],
      avgRating: 4.4,
      parentId: "491651",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 0.2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-10 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-b672959d-ea8b-4d98-a9b1-47e3597a0602",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/sharma-snacks-kasba-ruby-area-kolkata-130766",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "376357",
      name: "Balaram Mullick & Radharaman Mullick Sweets ",
      cloudinaryImageId: "xux37drpkwomaj2irotc",
      locality: "Near Bot Tola",
      areaName: "Santoshpur",
      costForTwo: "₹250 for two",
      cuisines: ["Sweets", "Desserts", "Snacks"],
      avgRating: 4.6,
      parentId: "489922",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-10 20:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-b672959d-ea8b-4d98-a9b1-47e3597a0602",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/balaram-mullick-and-radharaman-mullick-sweets-near-bot-tola-santoshpur-kolkata-376357",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "101420",
      name: "Maharani",
      cloudinaryImageId: "ku0myynrernanwdtobkj",
      locality: "Sarat Bose Road",
      areaName: "Lake Market Area",
      costForTwo: "₹400 for two",
      cuisines: ["Fast Food"],
      avgRating: 4.6,
      veg: true,
      parentId: "18780",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-10 12:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-b672959d-ea8b-4d98-a9b1-47e3597a0602",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/maharani-sarat-bose-road-lake-market-area-kolkata-101420",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];
