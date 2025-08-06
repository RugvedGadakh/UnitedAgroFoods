// This file will contain your detailed product data
const productsData = [
  {
    id: 1,
    name: "Frozen Sweet Corn",
    category: "vegetables",
    shortDescription: "Premium quality sweet corn kernels, flash-frozen to preserve sweetness and nutrients.",
    description:
      "Our frozen sweet corn is carefully selected from the finest farms and flash-frozen within hours of harvest to lock in the natural sweetness and nutritional value. Each kernel is perfectly preserved, making it ideal for soups, salads, side dishes, and more. Rich in fiber, vitamins, and antioxidants, our sweet corn brings farm-fresh taste to your table year-round.",
    image: "https://res.cloudinary.com/dcxxiwmdo/image/upload/v1754464398/heap-grains-maiz-background-pile_oudc7n.jpg",
    highlights: [
      "Flash-frozen within hours of harvest",
      "No artificial preservatives",
      "Rich in fiber and vitamins",
      "Perfect for multiple cooking methods",
    ],
    nutrition: {
      servingSize: "1 cup (154g)",
      calories: "132",
      totalFat: "2.1g",
      sodium: "8mg",
      totalCarbs: "29g",
      protein: "5g",
    },
    storage: {
      instructions: "Keep frozen at 0°F (-18°C) or below. Do not refreeze once thawed.",
      shelfLife: "12 months from production date when stored properly",
      usageTips: [
        "Can be cooked directly from frozen",
        "Perfect for stir-fries, soups, and casseroles",
        "Thaw in refrigerator for salads",
        "Steam for 3-5 minutes for best texture",
      ],
    },
  },
  {
    id: 2,
    name: "Frozen Mixed Vegetables",
    category: "mixed",
    shortDescription: "A colorful blend of premium vegetables including carrots, peas, corn, and green beans.",
    description:
      "Our frozen mixed vegetables combine the best of nature's bounty in one convenient package. This carefully crafted blend includes tender carrots, sweet peas, crisp corn kernels, and fresh green beans, all flash-frozen at peak ripeness. Perfect for busy families who want nutritious, delicious vegetables without the prep work.",
    image: "https://res.cloudinary.com/dcxxiwmdo/image/upload/v1754464362/ChatGPT_Image_Jul_20_2025_01_03_04_PM_jdmasz.png",
    highlights: [
      "Four premium vegetables in one package",
      "Flash-frozen for maximum nutrition",
      "Ready to cook in minutes",
      "No washing or chopping required",
    ],
    nutrition: {
      servingSize: "1 cup (134g)",
      calories: "54",
      totalFat: "0.1g",
      sodium: "38mg",
      totalCarbs: "12g",
      protein: "2.8g",
    },
    storage: {
      instructions: "Store in freezer at 0°F (-18°C) or below. Use within recommended timeframe.",
      shelfLife: "18 months from production date",
      usageTips: [
        "Add directly to soups and stews",
        "Steam for 4-6 minutes as a side dish",
        "Great for fried rice and pasta dishes",
        "Perfect for meal prep",
      ],
    },
  },
  {
    id: 3,
    name: "Frozen Green Peas",
    category: "vegetables",
    shortDescription: "Tender, sweet green peas picked at peak freshness and flash-frozen for optimal taste.",
    description:
      "Our frozen green peas are harvested at the perfect moment when they're at their sweetest and most tender. Flash-frozen immediately after picking, these peas retain their bright green color, sweet flavor, and nutritional benefits. They're an excellent source of protein, fiber, and essential vitamins, making them a healthy addition to any meal.",
    image: "https://res.cloudinary.com/dcxxiwmdo/image/upload/v1754464356/WhatsApp_Image_2025-07-13_at_13.18.03_329c2d64_woisxl.jpg",
    highlights: [
      "Picked at peak sweetness",
      "High in protein and fiber",
      "Bright green color retained",
      "Versatile cooking ingredient",
    ],
    nutrition: {
      servingSize: "1 cup (145g)",
      calories: "62",
      totalFat: "0.2g",
      sodium: "4mg",
      totalCarbs: "11g",
      protein: "4.1g",
    },
    storage: {
      instructions: "Keep frozen at 0°F (-18°C). Do not thaw before cooking for best results.",
      shelfLife: "12 months when stored properly",
      usageTips: [
        "Cook from frozen for best texture",
        "Perfect for risottos and pasta",
        "Great in Indian curries",
        "Steam for 2-3 minutes only",
      ],
    },
  },
  {
    id: 4,
    name: "Frozen Broccoli",
    category: "vegetables",
    shortDescription: "Fresh broccoli florets flash-frozen to lock in nutrients, texture, and vibrant green color.",
    description: "Our frozen broccoli is made from carefully selected, premium-quality florets that are flash-frozen right after harvest. This process locks in their natural taste, color, and nutritional value. Broccoli is known for being a rich source of vitamins, fiber, and antioxidants, making it a great choice for health-conscious meals.",
    image: "https://res.cloudinary.com/dcxxiwmdo/image/upload/v1754464356/WhatsApp_Image_2025-06-19_at_12.22.05_b5aac1f0_himj9f.jpg",
    highlights: [
      "Rich in vitamins C and K",
      "Flash-frozen to preserve texture and color",
      "No added preservatives",
      "Perfect for steaming, stir-frying, or roasting"
    ],
    nutrition: {
      servingSize: "1 cup (156g)",
      calories: "55",
      totalFat: "0.6g",
      sodium: "40mg",
      totalCarbs: "11g",
      protein: "4.2g"
    },
    storage: {
      instructions: "Keep frozen at 0°F (-18°C). Do not thaw before cooking.",
      shelfLife: "12 months",
      usageTips: [
        "Steam for 4–5 minutes",
        "Use in pasta, casseroles, and salads",
        "Roast with olive oil and seasoning",
        "Great for meal prepping healthy bowls"
      ]
    }
  },
  {
    id: 5,
    name: "Frozen Cauliflower",
    category: "vegetables",
    shortDescription: "Premium white cauliflower florets, flash-frozen for freshness and convenience.",
    description: "Our frozen cauliflower offers farm-fresh quality and convenience in every bag. These tender white florets are flash-frozen to retain their natural taste and nutritional content. Ideal for a variety of dishes, from mashed cauliflower to stir-fries and roasted vegetable medleys.",
    image: "https://res.cloudinary.com/dcxxiwmdo/image/upload/v1754464360/ChatGPT_Image_Jul_20_2025_12_55_27_PM_xn1viw.png",
    highlights: [
      "Excellent source of vitamin C",
      "Low in carbs and calories",
      "Flash-frozen at peak freshness",
      "Versatile for cooking and baking"
    ],
    nutrition: {
      servingSize: "1 cup (124g)",
      calories: "25",
      totalFat: "0.3g",
      sodium: "30mg",
      totalCarbs: "5g",
      protein: "2g"
    },
    storage: {
      instructions: "Store in freezer at 0°F (-18°C). Do not refreeze after thawing.",
      shelfLife: "12 months",
      usageTips: [
        "Steam or microwave for 3–4 minutes",
        "Great for low-carb recipes",
        "Use in soups, bakes, or curries",
        "Mash as a healthy alternative to potatoes"
      ]
    }
  },
  {
    id: 6,
    name: "Frozen Baby Corn",
    category: "vegetables",
    shortDescription: "Young, tender baby corn harvested early and flash-frozen to preserve sweetness and crunch.",
    description: "Our frozen baby corn is harvested while still young and tender, offering a mildly sweet flavor and crisp texture. Flash-frozen to retain its freshness, it is a favorite in Asian cuisine and perfect for stir-fries, salads, and gourmet dishes.",
    image: "https://res.cloudinary.com/dcxxiwmdo/image/upload/v1754464364/ChatGPT_Image_Jul_20_2025_12_52_55_PM_znmi38.png",
    highlights: [
      "Tender and crunchy texture",
      "Mild, sweet flavor",
      "No preservatives or additives",
      "Ready to use in minutes"
    ],
    nutrition: {
      servingSize: "1 cup (150g)",
      calories: "45",
      totalFat: "0.5g",
      sodium: "15mg",
      totalCarbs: "10g",
      protein: "2.7g"
    },
    storage: {
      instructions: "Keep frozen at 0°F (-18°C). Cook from frozen for best texture.",
      shelfLife: "12–15 months",
      usageTips: [
        "Ideal for stir-fries and Asian dishes",
        "Slice into salads or soups",
        "Boil or steam for 3–4 minutes",
        "Use as an appetizer or in curry"
      ]
    }
  },


]

export default productsData
