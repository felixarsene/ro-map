import React from 'react';
import Header from "../components/Header"; // Assuming you have a Header component
import '../styles/CookingPage.css';



// --- RECIPE DATA ---
const recipes = [
 {
  name: "Cozonac Tradițional",
  // Placeholder image link for Cozonac
  image: "https://substackcdn.com/image/fetch/$s_!LXdR!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7807ca71-92d9-45a3-98b5-ceab0ed830df_1070x1346.png",
  ingredients: ["Făină (Flour)", "Ouă (Eggs)", "Nucă (Walnuts)", "Cacao (Cocoa)"],
  link: "https://jamilacuisine.ro/cozonac-traditional-foarte-pufos-facut-pas-cu-pas-reteta-video/",
  category: "Romanian"
 },
 {
  name: "Sarmale (Cabbage Rolls)",
  // Placeholder image link for Sarmale
  image: "https://www.jocooks.com/wp-content/uploads/2019/04/cabbage-rolls-1-3.jpg",
  ingredients: ["Varză murată (Sauerkraut)", "Carne tocată (Ground Meat)", "Orez (Rice)", "Cimbru (Thyme)"],
  link: "https://jamilacuisine.ro/sarmale-cu-pasat-pentru-craciun-reteta-video/",
  category: "Romanian"
 },
 {
  name: "Mici (Grilled Ground Meat Rolls)",
  // Placeholder image link for Mici
  image: "https://substackcdn.com/image/fetch/$s_!blNs!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe1917531-6542-4ec7-85f8-fac2fbffabdf_1100x1280.jpeg",
<<<<<<< Updated upstream
  ingredients: ["Carne de vită/oaie (Beef/Mutton)", "Bicarbonat (Baking Soda)", "Usturoi (Garlic)"],
=======
  ingredients: ["Carne de vită/oaie (Beef/Sheep)", "Bicarbonat (Baking Soda)", "Usturoi (Garlic)"],
>>>>>>> Stashed changes
  link: "https://jamilacuisine.ro/mici-de-casa-pasta-pentru-mici-suculenti-si-deliciosi-reteta-video/",
  category: "Romanian"
 },
 {
  name: "Salată de Boeuf",
  // Placeholder image link for Salată de Boeuf
  image: "https://cristinaskitchen.com/wp-content/uploads/2024/04/romanian-olivier-salad-salate-de-boeuf.jpg",
  ingredients: ["Carne de vită (Beef)", "Morcovi (Carrots)", "Maioneză (Mayonnaise)", "Murături (Pickles)"],
  link: "https://jamilacuisine.ro/salata-de-boeuf-cu-maioneza-pentru-sarbatori-reteta-video/",
  category: "Romanian"
 },
];

// Component for a single recipe card (The "Recipe Frame" design)
const RecipeCard = ({ recipe }) => {
 // Use slice(0, 3) to show only the first three ingredients in the card preview
 const previewIngredients = recipe.ingredients.slice(0, 3);
 const hasMore = recipe.ingredients.length > 3;

 return (
  // The card itself is the link, opens in a new tab
  <a href={recipe.link} target="_blank" rel="noopener noreferrer" className="recipe-item-card">
   <div className="card-image-container">
    {/* The recipe image */}
<<<<<<< Updated upstream
   <img 
=======
    <img 
>>>>>>> Stashed changes
     src={recipe.image} 
     alt={recipe.name} 
     className="recipe-image" 
     onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x400?text=No+Image" }} // Fallback image
    />
   </div>
   
   {/* Content area below the image, styled like the album details */}
   <div className="card-details">
    <h3 className="dish-name">{recipe.name}</h3>
    
    <div className="ingredient-list-preview">
     <p>Key Ingredients:</p>
     <ul className="ingredient-list">
      {previewIngredients.map((item, index) => (
       <li key={index}>{item}</li>
      ))}
      {hasMore && <li>...and more</li>}
     </ul>
    </div>
    
    {/* Button styled like a control, but functional */}
    <div className="card-controls">
     <button className="view-recipe-btn">View Full Recipe</button>
    </div>
   </div>
  </a>
 );
};


// Main Cooking Page Component
const CookingPage = () => {
 return (
  <>
   {/* Assuming you want the same header as your other pages */}
   <Header /> 
   
<<<<<<< Updated upstream
   {/* START OF CORRECTED STRUCTURE: Using more-page-bg for the bubble effect  */}
   <div className="more-page-bg">
    {/* BUBBLES FOR BACKGROUND EFFECT */}
    <div className="bubble bubble-yellow" style={{ top: '10%', left: '15%' }}></div>
    <div className="bubble bubble-blue" style={{ top: '30%', left: '70%' }}></div>
    <div className="bubble bubble-red" style={{ top: '60%', left: '40%' }}></div>
    
=======
   {/* ⬇️ START OF CHANGES: Applying the bubble background structure ⬇️ */}
   <div className="more-page-bg"> 
>>>>>>> Stashed changes
    <div className="more-content"> 
   
     {/* Hero Section for Intro - Inspired by MorePage */}
     <section className="cooking-hero">
       <h1 className="cooking-hero-title">
         Culinary Heritage of Romania <span></span>
<<<<<<< Updated upstream
         <img src="/romania-flag.svg" className="flag-icon" alt="Romania Flag" />
=======
        <img src="/romania-flag.svg" className="flag-icon" alt="Romania Flag" />
>>>>>>> Stashed changes
       </h1>
       <p className="cooking-hero-subtitle">
         Discover traditional recipes, handed down through generations, 
         from Cozonac to Sarmale.
       </p>
     </section>

     {/* Card Section: Main content block */}
     <section className="recipe-card-section">
      
      {/* Card Header: For filtering/categorizing - Inspired by MorePage */}
      <header className="recipe-card-header">
       <div>
        <h2 className="recipe-title">Essential Romanian Cuisine</h2>
<<<<<<< Updated upstream
        <p className="recipe-subtitle">All recipes link to step-by-step video instructions.</p>
=======
       <p className="recipe-subtitle">All recipes link to step-by-step video instructions.</p>
>>>>>>> Stashed changes
       </div>
       
       {/* Tag Group for Category */}
       <div className="tag-group">
         <span className="tag">Românesc</span>
         <span className="tag">Desert</span>
         <span className="tag">Main Course</span>
       </div>
      </header>
<<<<<<< Updated upstream

      {/* List Container: The grid of your recipe cards */}
     <div className="recipe-grid">
=======
      {/* List Container: The grid of your recipe cards */}
      <div className="recipe-grid">
>>>>>>> Stashed changes
       {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
       ))}
      </div>
     </section>
    
    </div> {/* End of more-content */}
   </div> {/* End of more-page-bg */}
  </>
 );
};

export default CookingPage;