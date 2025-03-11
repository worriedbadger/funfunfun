import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Trash2, Plus } from 'lucide-react';

const MultiIngredientCalculator = () => {
  const [ingredients, setIngredients] = useState([
    { id: 1, name: 'Dry Material', amount: 100 },
    { id: 2, name: 'Water', amount: 40 }
  ]);
  const [portionSize, setPortionSize] = useState(40);
  const [stainPercentage, setStainPercentage] = useState(7);
  const [nextId, setNextId] = useState(3);

  // Calculate total mixture
  const totalMixture = ingredients.reduce((sum, ing) => sum + ing.amount, 0);

  // Add a new ingredient
  const addIngredient = () => {
    setIngredients([...ingredients, { id: nextId, name: 'New Ingredient', amount: 0 }]);
    setNextId(nextId + 1);
  };

  // Remove an ingredient
  const removeIngredient = (id) => {
    if (ingredients.length <= 1) return; // Prevent removing all ingredients
    setIngredients(ingredients.filter(ing => ing.id !== id));
  };

  // Update ingredient name
  const updateIngredientName = (id, newName) => {
    setIngredients(ingredients.map(ing => 
      ing.id === id ? { ...ing, name: newName } : ing
    ));
  };

  // Update ingredient amount
  const updateIngredientAmount = (id, newAmount) => {
    setIngredients(ingredients.map(ing => 
      ing.id === id ? { ...ing, amount: Number(newAmount) } : ing
    ));
  };

  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>Multi-Ingredient Recipe Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Ingredients Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Ingredients</h3>
            <Button 
              onClick={addIngredient} 
              variant="outline" 
              size="sm"
              className="flex items-center gap-1"
            >
              <Plus size={16} />
              Add Ingredient
            </Button>
          </div>
          
          {ingredients.map((ing) => (
            <div key={ing.id} className="flex gap-2 items-end">
              <div className="flex-grow space-y-1">
                <Label htmlFor={`ingredient-name-${ing.id}`}>Ingredient Name</Label>
                <Input
                  id={`ingredient-name-${ing.id}`}
                  value={ing.name}
                  onChange={(e) => updateIngredientName(ing.id, e.target.value)}
                />
              </div>
              <div className="w-24 space-y-1">
                <Label htmlFor={`ingredient-amount-${ing.id}`}>Amount (g)</Label>
                <Input
                  id={`ingredient-amount-${ing.id}`}
                  type="number"
                  value={ing.amount}
                  onChange={(e) => updateIngredientAmount(ing.id, e.target.value)}
                />
              </div>
              <Button 
                onClick={() => removeIngredient(ing.id)} 
                variant="ghost" 
                size="icon"
                className="text-red-500"
                disabled={ingredients.length <= 1}
              >
                <Trash2 size={16} />
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Inputs */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="portionSize">Portion Size (g)</Label>
            <Input
              id="portionSize"
              type="number"
              value={portionSize}
              onChange={(e) => setPortionSize(Number(e.target.value))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="stainPercentage">Stain Percentage (%)</Label>
            <Input
              id="stainPercentage"
              type="number"
              value={stainPercentage}
              onChange={(e) => setStainPercentage(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold">Total Mixture Analysis</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>Total mixture:</div>
            <div className="font-medium">{totalMixture.toFixed(2)}g</div>
            
            {ingredients.map(ing => (
              <React.Fragment key={`percentage-${ing.id}`}>
                <div>{ing.name} percentage:</div>
                <div className="font-medium">
                  {totalMixture > 0 ? ((ing.amount / totalMixture) * 100).toFixed(2) : "0.00"}%
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold">Portion Calculations</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {ingredients.map(ing => (
              <React.Fragment key={`portion-${ing.id}`}>
                <div>{ing.name} in portion:</div>
                <div className="font-medium">
                  {totalMixture > 0 ? 
                    ((ing.amount / totalMixture) * portionSize).toFixed(2) : 
                    "0.00"}g
                </div>
              </React.Fragment>
            ))}
            
            {/* Stain amount based on first ingredient (assuming it's the dry material) */}
            {ingredients.length > 0 && (
              <>
                <div>Stain amount needed:</div>
                <div className="font-medium">
                  {totalMixture > 0 ?
                    (((ingredients[0].amount / totalMixture) * portionSize * stainPercentage) / 100).toFixed(2) :
                    "0.00"}g
                </div>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MultiIngredientCalculator;
