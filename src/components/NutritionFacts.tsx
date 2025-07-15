import React from "react";

interface NutritionItem {
  label: string;
  value: string;
  dailyValue?: string; // Optional % Daily Value
  bold?: boolean; // Optional bold styling
  large?: boolean; // Optional large text (e.g., Calories)
}

interface NutritionFactsProps {
  nutrition: NutritionItem[];
  variant: "rose" | "white-grape";
  className?: string;
}

const colorMap = {
  rose: {
    border: "border-rose",
    text: "text-rose",
  },
  "white-grape": {
    border: "border-white-grape",
    text: "text-white-grape",
  },
};

const NutritionFacts: React.FC<NutritionFactsProps> = ({ nutrition, variant, className = "" }) => {
  const colors = colorMap[variant];
  return (
    <div className={`border-2 ${colors.border} p-1 w-58 text-xs text-left ${className} ${colors.text}`} style={{ fontFamily: 'var(--font-helvetica)' }}> 
      {/* Header */}
      <div className={`text-[22px] font-bold leading-none`}>NUTRITION FACTS</div>
      <div className={`border-b-1`}></div>
      {/* Serving info */}
      <div>About 3 servings per container</div>
      <div className="flex justify-between font-bold">
        <span>Serving size</span>
        <span className="font-bold">8 ounces (240ml)</span>
      </div>
      <div className={`border-b-8 my-[0.5]`}></div>
      {/* Amount Per Serving */}
      <div className="font-medium">Amount Per Serving</div>
      <div className="flex items-end justify-between mb-1">
        <span className="text-base font-bold mr-2 leading-none">Calories</span>
        <span className="text-xl font-bold leading-none">{nutrition.find(n => n.label === "Calories")?.value}</span>
      </div>
      <div className={`border-b-5`}></div>
      {/* % Daily Value Header */}
      <div className="flex justify-between text-[0.8em]">
        <span></span>
        <span>% Daily Value*</span>
      </div>
      {/* Nutrition Items */}
      {nutrition.filter(n => n.label !== "Calories").map((item) => (
        <div className={`flex items-center mb-0.5 border-t-1 justify-between text-[0.8em]`} key={item.label}>
          <div className="flex gap-2">
            <span className="font-bold">{item.label}</span>
            <span className="font-normal">{item.value}</span>
          </div>
          {item.dailyValue && (
            <span className="ml-2 text-right min-w-[2.5em] font-bold">{item.dailyValue}</span>
          )}
        </div>
      ))}
      <div className={`border-b-5 my-1`}></div>
      {/* Footnotes */}
      <div className="text-[0.6em] font-normal mb-1">
        *Not a significant source of saturated fat, trans fat, cholesterol, dietary fiber, vitamin D, calcium, iron, and potassium.
      </div>
      <div className={`border-b-1 mb-1`}></div>
      <div className="text-[0.6em] font-normal">
        *The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
      </div>
    </div>
  );
};

export default NutritionFacts; 