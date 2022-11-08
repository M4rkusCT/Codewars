function bmi(weight, height) {
  const bmi = Number((weight)/(height*height));
  if(bmi <= 18.5) return "Underweight";
  else if(bmi > 18.5 && bmi <= 25.0) return "Normal";
  else if(bmi > 25.0 && bmi <= 30.0) return "Overweight";
  else return "Obese";
}

bmi(30, 1.65);